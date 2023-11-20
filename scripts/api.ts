import { isOk } from './utils.ts'

const headers = {
  Cookie: `session=${process.env.SESSION}`
}

export function fetchInput({ day, year }: { day: number; year: number }) {
  return fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers
  })
    .then(isOk)
    .then(response => response.text())
}
