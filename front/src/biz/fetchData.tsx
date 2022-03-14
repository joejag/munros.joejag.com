const PRODUCTION_URL =
  'https://v3no7taikc.execute-api.eu-west-2.amazonaws.com/prod/munros?u='
const LOCAL_URL_JOE = 'http://127.0.0.1:8080/joe.json?u='
const LOCAL_URL_GEZ = 'http://127.0.0.1:8080/gez.json?u='

export const fetchData = (setCompleted: any, userId: string, onError?: any) => {
  let url = PRODUCTION_URL
  if (window.location.href.indexOf('localhost') > -1) {
    url = LOCAL_URL_JOE
  }
  if (window.location.href.indexOf('localhost') > -1 && userId === 'gez') {
    url = LOCAL_URL_GEZ
  }

  fetch(url + userId)
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
