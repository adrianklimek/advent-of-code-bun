export function withPerformance<T>(handler: () => T): [T, number] {
  const start = performance.now()
  const result = handler()
  const end = performance.now()

  return [result, end - start]
}

export function formatPerformance(time: number) {
  const round = (x: number) => Math.round((x + Number.EPSILON) * 100) / 100
  if (time < 1) return `${round(time * 1000)} µs`
  return `${round(time)} ms`
}

export function isBetween(x: number, [min, max]: [number, number]) {
  return x >= min && x <= max
}

export function isOk(response: Response): Promise<Response> {
  return new Promise((resolve, reject) =>
    response.ok ? resolve(response) : reject(response)
  )
}
