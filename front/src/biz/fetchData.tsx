const PRODUCTION_URL =
  'https://v3no7taikc.execute-api.eu-west-2.amazonaws.com/prod/munros?u='
const LOCAL_URL_JOE = 'http://127.0.0.1:8080/joe.json?u='
const LOCAL_URL_GEZ = 'http://127.0.0.1:8080/gez.json?u='

export const fetchData = (setCompleted: any, userId: string) => {
  let url = PRODUCTION_URL
  if (window.location.href.indexOf('localhost') > -1) {
    url = LOCAL_URL_JOE
  }

  // Prevent re-runs for now
  if (
    localStorage.getItem('walkHighlandsName') === userId &&
    localStorage.getItem('cached') !== null
  ) {
    const cachedResult = JSON.parse(localStorage.getItem('cached') || '{}')
    setCompleted(cachedResult)
  } else {
    fetch(url + userId)
      .then((res) => res.json())
      .then(
        (result: any) => {
          const now =
            new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()
          localStorage.setItem('lastRefresh', now)

          localStorage.setItem('walkHighlandsName', userId)
          localStorage.setItem('cached', JSON.stringify(result))
          setCompleted(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }
}

export const fetchFriendData = (setCompleted: any, userId: string) => {
  let url = PRODUCTION_URL
  if (window.location.href.indexOf('localhost') > -1) {
    url = LOCAL_URL_GEZ
  }

  // Prevent re-runs for now
  if (
    localStorage.getItem('walkHighlandsFriendName') === userId &&
    localStorage.getItem('cachedFriend') !== null
  ) {
    const cachedResult = JSON.parse(localStorage.getItem('cached') || '{}')
    setCompleted(cachedResult)
  } else {
    fetch(url + userId)
      .then((res) => res.json())
      .then(
        (result: any) => {
          const now =
            new Date().toDateString() + ' at ' + new Date().toLocaleTimeString()
          localStorage.setItem('lastRefreshFriend', now)

          localStorage.setItem('walkHighlandsNameFriend', userId)
          localStorage.setItem('cachedFriend', JSON.stringify(result))
          setCompleted(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }
}
