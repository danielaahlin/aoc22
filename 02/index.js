const { readFile } = require('../filereader')

/*
    A - X - rock
    B - Y - paper
    C - Z - scissor 
  */

const problem1 = (indata) => {
  const rpsPoints = {
    X: 1,
    Y: 2,
    Z: 3
  }
  const outcome = {
    X: {
      A: 3, //'D',
      B: 0, // L,
      C: 6 //'W'
    },
    Y: {
      A: 6, //'W',
      B: 3, //'D',
      C: 0 // L
    },
    Z: {
      A: 0, // L,
      B: 6, //'W',
      C: 3 //'D'
    }
  }

  const allRounds = indata.map((round) => {
    const [opponent, you] = round.split(' ')

    return rpsPoints[you] + outcome[you][opponent]
  })

  return allRounds.reduce((a, b) => a + b)
}

const problem2 = (indata) => {
  const rpsPoints = {
    A: 1,
    B: 2,
    C: 3
  }
  const outcomePoints = {
    X: 0,
    Y: 3,
    Z: 6
  }

  const outcome = {
    Z: {
      A: 'B',
      B: 'C',
      C: 'A'
    },
    Y: {
      A: 'A',
      B: 'B',
      C: 'C'
    },
    X: {
      A: 'C',
      B: 'A',
      C: 'B'
    }
  }

  const allRounds = indata.map((round) => {
    const [opponent, you] = round.split(' ')

    return rpsPoints[outcome[you][opponent]] + outcomePoints[you]
  })

  return allRounds.reduce((a, b) => a + b)
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
