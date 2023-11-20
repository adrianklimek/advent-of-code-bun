import { argv } from 'bun'
import chalk from 'chalk'
import { formatPerformance, withPerformance, isBetween } from './utils.ts'
import { scaffold } from './scaffold.ts'

const day = parseInt(argv[2] ?? '')
const year = parseInt(process.env.YEAR ?? new Date().getFullYear())

if (!isBetween(day, [1, 25])) {
  console.log(`🎅 Pick a day between ${chalk.bold(1)} and ${chalk.bold(25)}.`)
  console.log(`🎅 To get started, try: ${chalk.cyan('bun solve 1')}`)
  process.exit(0)
}

await scaffold(day, year)

const name = `${day}`.padStart(2, '0')

const { default: input } = await import(`@/${name}/input.txt`)
const { partOne, partTwo, parse } = await import(`@/${name}/${name}.ts`)

const [one, onePerformance] = withPerformance(() => partOne?.(parse(input)))
const [two, twoPerformance] = withPerformance(() => partTwo?.(parse(input)))

console.clear()
console.log(
  '🌲',
  'Part One:',
  chalk.green(one ?? '—'),
  one ? `(${formatPerformance(onePerformance)})` : ''
)
console.log(
  '🎄',
  'Part Two:',
  chalk.green(two ?? '—'),
  two ? `(${formatPerformance(twoPerformance)})` : ''
)
