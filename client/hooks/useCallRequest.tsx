import React, { useState, type ReactElement } from 'react'
import axios, { AxiosError } from 'axios'
import { log } from '@sweez/libs'
import { DisplayErrorMsgs } from '../components/DisplayErrorMsgs'
import {
  type IMessageSuccessResponse,
  type IMessageErrorResponse,
  type IReqParams,
} from '../shared-types'

export function useCallRequest<D>(request: IReqParams<D>) {
  const [errors, setErrors] = useState<ReactElement>(null)
  const doRequest = async function <T>(data?: T) {
    if (data) request.data = data
    try {
      setErrors(undefined)
      const response = await axios<IMessageSuccessResponse>(request)

      return response.data.message
    } catch (error) {
      let reqErrorMsg: IMessageErrorResponse = { message: '', errors: [] }

      if (error instanceof AxiosError && error.response?.data.errors) {
        reqErrorMsg = error.response?.data
      } else if (error instanceof Error) {
        log('NOT axios error OR no Errors in object', error)
        reqErrorMsg = { message: error.message, errors: [error.message] }
      }

      setErrors(<DisplayErrorMsgs error={reqErrorMsg} />)
    }

    return undefined
  }

  return { doRequest, errors }
}
