const { readFile } = require('../filereader')

const problem1 = (indata) => {
  console.log(indata)
}

const problem2 = (indata) => {
  console.log(indata)
}

const main = (test) => {
  const paths = ['./test-input.txt', './01input.txt', './02input.txt']

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
    console.log('Solution to problem 2: ', problem2(readFile(paths[2])))
  }
}

main(true)
