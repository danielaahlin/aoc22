const { readFile } = require('../filereader')

const getLetters = (packetLength, data, letters, char, index) => {
  if (
    letters.length === packetLength &&
    Array.from(new Set(letters)).length === packetLength
  ) {
    return index
  }

  if (letters.length === packetLength) {
    letters.shift()
  }

  letters.push(char)
  return getLetters(packetLength, data, letters, data[index + 1], index + 1)
}

const problem1 = (indata) => {
  const indices = indata.forEach((data) => {
    const splitData = data.split('')
    const packetMarkerLetters = []

    return getLetters(4, splitData, packetMarkerLetters, splitData[0], 0)
  })

  return indices
}

const problem2 = (indata) => {
  const indices = indata.map((data) => {
    const splitData = data.split('')
    const packetMarkerLetters = []

    return getLetters(14, splitData, packetMarkerLetters, splitData[0], 0)
  })
  return indices
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
