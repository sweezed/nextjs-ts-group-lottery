import Head from 'next/head'
import { type AxiosResponse } from 'axios'
import { type NextPageContext } from 'next'
import { buildClient } from '../apiHelpers/build-client'

function Home() {
  return (
    <>
      <Head>
        <title>Group Lottery</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className="main">
        <div className="d-flex-row border">
          <h1 className="text-center">Group Lottery</h1>
          <h3 className="text-center">
            <i>luck and fun is in the group</i>
          </h3>
        </div>
      </main>
    </>
  )
}

Home.getInitialProps = async (ctx: NextPageContext) => {
  const client = buildClient(ctx)
  const { data }: AxiosResponse<{ message: string }> = await client.get(
    '/api/users/currentuser'
  )

  return { currentUser: data.message || null }
}

export default Home
