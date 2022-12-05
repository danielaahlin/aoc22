const { readFile } = require('../filereader')

const crateData = (crateInformation) => {
  const crates = {}
  const numberOfCrates = crateInformation.pop().split(' ')

  numberOfCrates.forEach((c) => {
    if (c !== '') {
      crates[Number(c)] = []
    }
  })

  crateInformation.forEach((data) => {
    const crateRow = data
      .split('    ')
      .map((c) => (c !== '' && c.split(' ').length > 1 ? c.split(' ') : c))
      .flat()

    let crateIndex = 1
    crateRow.forEach((cr) => {
      if (cr === '') {
        crateIndex += 1
      } else {
        crates[crateIndex].push(cr)
        crateIndex += 1
      }
    })
  })

  return crates
}

const problem1 = (indata) => {
  const [crateInformation, instructions] = [
    indata.slice(0, indata.indexOf('')),
    indata.slice(indata.indexOf(''))
  ]

  const crates = crateData(crateInformation)

  instructions.shift()

  instructions.forEach((inst) => {
    const splittedInst = inst.split(' ')
    const [move, from, to] = [
      Number(splittedInst[1]),
      Number(splittedInst[3]),
      Number(splittedInst[5])
    ]

    const movedItems = crates[from].splice(0, move)

    movedItems.forEach((item) => {
      crates[to].splice(0, 0, item)
    })
  })

  return Object.values(crates)
    .map((c) => c[0].split('[')[1].split(']')[0])
    .join('')
}

const problem2 = (indata) => {
  const [crateInformation, instructions] = [
    indata.slice(0, indata.indexOf('')),
    indata.slice(indata.indexOf(''))
  ]

  const crates = crateData(crateInformation)

  instructions.shift()

  instructions.forEach((inst) => {
    const splittedInst = inst.split(' ')
    const [move, from, to] = [
      Number(splittedInst[1]),
      Number(splittedInst[3]),
      Number(splittedInst[5])
    ]

    const movedItems = crates[from].splice(0, move)

    movedItems.reverse().forEach((item) => {
      crates[to].splice(0, 0, item)
    })
  })

  return Object.values(crates)
    .map((c) => c[0].split('[')[1].split(']')[0])
    .join('')
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
