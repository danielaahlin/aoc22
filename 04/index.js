const { readFile } = require('../filereader')

const problem1 = (indata) => {
  let fullyContained = 0

  indata.forEach((data) => {
    const [firstElf, secondElf] = data.split(',')
    const [lowerFirst, upperFirst] = firstElf.split('-')
    const [lowerSecond, upperSecond] = secondElf.split('-')

    const isFullyContained =
      (Number(lowerFirst) <= Number(lowerSecond) &&
        Number(upperFirst) >= Number(upperSecond)) ||
      (Number(lowerSecond) <= Number(lowerFirst) &&
        Number(upperSecond) >= Number(upperFirst))

    if (isFullyContained) {
      fullyContained += 1
    }
  })

  return fullyContained
}

const problem2 = (indata) => {
  let fullyContained = 0

  indata.forEach((data) => {
    const [firstElf, secondElf] = data.split(',')
    const [lowerFirst, upperFirst] = firstElf.split('-')
    const [lowerSecond, upperSecond] = secondElf.split('-')

    const firstDiff = Number(upperFirst) - Number(lowerFirst)
    const secondDiff = Number(upperSecond) - Number(lowerSecond)

    const isFullyContained =
      (Number(lowerFirst) <= Number(lowerSecond) &&
        Number(upperFirst) >= Number(upperSecond)) ||
      (Number(lowerSecond) <= Number(lowerFirst) &&
        Number(upperSecond) >= Number(upperFirst)) ||
      (Number(lowerFirst) + firstDiff >= Number(lowerSecond) &&
        Number(lowerFirst) + firstDiff <= Number(upperSecond)) ||
      (Number(lowerSecond) + secondDiff >= Number(lowerFirst) &&
        Number(lowerSecond) + secondDiff <= Number(upperFirst))

    if (isFullyContained) {
      fullyContained += 1
    }
  })

  return fullyContained
}

const main = (test) => {
  const paths = ['./test-input.txt', './01input.txt']

  if (test) {
    console.log(' --- TEST INPUT ---')
    console.log(
      'TEST DATA Solution to problem 1: ',
      problem1(readFile(paths[0]))
    )
    console.log(' --- ')
    console.log(
      'TEST DATA Solution to problem 2: ',
      problem2(readFile(paths[0]))
    )
    console.log(' --- ')
  } else {
    console.log('Solution to problem 1: ', problem1(readFile(paths[1])))
    console.log(' --- ')
    console.log('Solution to problem 2: ', problem2(readFile(paths[1])))
  }
}

main()
