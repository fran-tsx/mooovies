const ABORT_REQUEST_CONTROLLERS = new Map()

export const abortRequestSafe = (
  signalKey: string,
  reason: string = 'CANCELLED'
) => {
  ABORT_REQUEST_CONTROLLERS.get(signalKey)?.abort?.(reason)
}

const abortAndGetSignalSafe = (signalKey: string) => {
  abortRequestSafe(signalKey) // abort previous request, if any
  const newController = new AbortController()
  ABORT_REQUEST_CONTROLLERS.set(signalKey, newController)
  return newController.signal
}

export const _fetch = async (
  url: string,
  configs: {
    signalKey?: string
  } = {}
) => {
  const { signalKey, ...rest } = configs
  return await fetch(url, {
    ...(signalKey && { signal: abortAndGetSignalSafe(signalKey) }),
    ...rest,
  }).catch((error) => {
    if (error.name === 'AbortError') {
      return new Response(JSON.stringify({}), {
        status: 499, // Client Closed Request
        statusText: error.message || 'Client Closed Request',
      })
    }
    return new Response(JSON.stringify({}), {
      status: 599, // Network Connect Timeout Error
      statusText: error.message || 'Network Connect Timeout Error',
    })
  })
}
