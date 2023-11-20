import chalk from 'chalk'
import dedent from 'dedent'
import { existsSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'

import { fetchInput } from './api.ts'

export async function scaffold(day: number, year: number) {
  const name = `${day}`.padStart(2, '0')

  const directory = new URL(`../src/${name}/`, import.meta.url)

  if (existsSync(directory)) return

  console.log(`📂 Setting up day ${day} of ${year}`)

  await mkdir(directory)

  const test = dedent`
  import { describe } from 'bun:test'

  describe(${`'Day ${day}'`}, () => {
    describe('Part One', () => {})
    
    describe('Part Two', () => {})
  })
  `

  const solution = dedent`
  export function parse(input: string) {
    return input
  }
  
  export function partOne(input: ReturnType<typeof parse>) {}

  export function partTwo(input: ReturnType<typeof parse>) {}
  `

  console.log(`📂 Fetching your input`)

  const input = await fetchInput({ day, year }).catch(() => {
    console.log(
      chalk.red.bold(
        '📂 Fetching your input have failed, empty file will be created.'
      )
    )
  })

  await Bun.write(new URL(`${name}.test.ts`, directory.href), test)
  await Bun.write(new URL(`${name}.ts`, directory.href), solution)
  await Bun.write(new URL(`input.txt`, directory.href), input ?? '')
  await Bun.write(new URL(`example.txt`, directory.href), '')

  console.log('📂 You all set up, have fun!')
}
