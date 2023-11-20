import { argv } from 'bun'
import chalk from 'chalk'
import { formatPerformance, withPerformance, isBetween } from './utils.ts'

const [, , day] = argv

if (!day || !isBetween(parseInt(day), [1, 25])) {
  console.log(`🎅 Pick a day between ${chalk.bold(1)} and ${chalk.bold(25)}.`)
  console.log(`🎅 To get started, try: ${chalk.cyan('bun solve 1')}`)
  process.exit(0)
}

const name = day.padStart(2, '0')

const { default: input } = await import(`@/${name}/input.txt`)
const { partOne, partTwo } = await import(`@/${name}/index.ts`)

const [one, onePerformance] = withPerformance(() => partOne?.(input))
const [two, twoPerformance] = withPerformance(() => partTwo?.(input))

console.log(
  '🌲',
  'Part One:',
  one ?? '—',
  one ? `(${formatPerformance(onePerformance)})` : ''
)
console.log(
  '🎄',
  'Part Two:',
  two ?? '—',
  two ? `(${formatPerformance(twoPerformance)})` : ''
)
