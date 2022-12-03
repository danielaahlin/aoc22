const { readFile } = require('../filereader')

const letterToValue = () => {
  const priorities = {}
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'

  let currValue = 1
  alphabet.split('').forEach((char) => {
    priorities[char] = currValue
    currValue += 1
  })

  alphabet
    .toUpperCase()
    .split('')
    .forEach((char) => {
      priorities[char] = currValue
      currValue += 1
    })

  return priorities
}

const problem1 = (indata) => {
  const values = []

  indata.forEach((compartments) => {
    const splitCompartments = compartments.split('')
    const nbrOfCompartments = splitCompartments.length

    const [itemsC1, itemsC2] = [
      Array.from(new Set(splitCompartments.slice(0, nbrOfCompartments / 2))),
      Array.from(new Set(splitCompartments.slice(nbrOfCompartments / 2)))
    ]

    itemsC1.forEach((char) => {
      if (itemsC2.includes(char)) {
        values.push(char)
      }
    })
  })

  const priorities = letterToValue()

  return values.reduce((a, b) => {
    return (typeof a === 'string' ? priorities[a] : a) + priorities[b]
  })
}

const problem2 = (indata) => {
  const values = []

  let groups = []
  indata.forEach((compartments) => {
    groups.push(compartments)

    if (groups.length === 3) {
      const items = {}

      groups.forEach((group) => {
        const allItems = Array.from(new Set(group))

        allItems.forEach((item) => {
          if (items[item]) {
            items[item] += 1
          } else {
            items[item] = 1
          }
        })
      })

      const highestCommon = Object.keys(items).sort((a, b) =>
        items[a] > items[b] ? -1 : 1
      )

      values.push(highestCommon[0])
      groups = []
    }
  })

  const priorities = letterToValue()

  return values.reduce((a, b) => {
    return (typeof a === 'string' ? priorities[a] : a) + priorities[b]
  })
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
