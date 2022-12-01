const { readFile } = require('../filereader')

const problem1 = (indata) => {
  const elfCalories = {}
  let elfNbr = 0

  indata.forEach((dp) => {
    if (dp === '') {
      elfNbr += 1
      elfCalories[elfNbr] = 0
    } else {
      elfCalories[elfNbr] += Number(dp)
    }
  })

  return Object.values(elfCalories).sort((a, b) => (a < b ? 1 : -1))
}

const problem2 = (indata) => {
  const data = problem1(indata)

  return data.slice(0, 3).reduce((a, b) => a + b)
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
