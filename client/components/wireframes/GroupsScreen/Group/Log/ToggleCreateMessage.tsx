function ToggleCreateMessage({ toggleMessageBox }) {
  return (
    <button onClick={toggleMessageBox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="blue"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        className=" mr-0 ml-auto w-14 h-14"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  )
}

export { ToggleCreateMessage }
