const PRODUCTION_URL =
  'https://v3no7taikc.execute-api.eu-west-2.amazonaws.com/prod/munros?u='
const LOCAL_URL = 'http://127.0.0.1:8081/joe.json?u='

export const fetchData = (setCompleted: any, userId: string) => {
  let url = PRODUCTION_URL
  if (window.location.href.indexOf('localhost') > -1) {
    url = LOCAL_URL
  }

  const now =
    new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()

  // Prevent re-runs for now
  if (
    localStorage.getItem('walkHighlandsId') === userId &&
    localStorage.getItem('cached') !== null
  ) {
    const cachedResult = JSON.parse(localStorage.getItem('cached') || '{}')
    setCompleted(cachedResult)
  } else {
    fetch(url + userId)
      .then((res) => res.json())
      .then(
        (result: any) => {
          localStorage.setItem('walkHighlandsId', userId)

          localStorage.setItem('lastRefresh', now)
          localStorage.setItem('cached', JSON.stringify(result))
          setCompleted(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
