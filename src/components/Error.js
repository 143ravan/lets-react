import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <div>Error: Page not found</div>
      <span>{error.status}</span>:&nbsp;<span>{error.statusText}</span>
    </>
  )
}

export default Error
