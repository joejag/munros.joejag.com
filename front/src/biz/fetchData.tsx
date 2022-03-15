const PRODUCTION_URL =
  'https://v3no7taikc.execute-api.eu-west-2.amazonaws.com/prod/munros?u='

export const fetchData = (setCompleted: any, userId: string, onError?: any) => {
  let url = PRODUCTION_URL

  fetch(url + userId.toLowerCase())
    .then((res) => res.json())
    .then(
      (result: any) => {
        setCompleted(result)
      },
      (error) => {
        console.log(error)
        if (onError) {
          onError()
        }
      }
    )
}
