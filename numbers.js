document.addEventListener('DOMContentLoaded', init)
let year = 2018

function init() {
  addEventListeners()
  setInterval(handleInterval, 5000)
}

function addEventListeners() {
  let oneButton = document.querySelector("#one")
  oneButton.addEventListener('click', function() {
    getNumberTrivia(1)
  })

  let input = document.querySelector("input")
  input.addEventListener('change', getNumberInput)

  let allButton = document.querySelector("#all")
  allButton.addEventListener('click', handleAllNumbers)
}

function handleInterval() {
  getYearTrivia(year)
  year--
}

function getYearTrivia(year) {
  fetch(`http://numbersapi.com/${year}/year`)
  .then(response => response.text())
  .then(jsonData => renderTrivia(jsonData))
}

function handleAllNumbers() {
  let hundredNumbers = []
  for (let i=0; i<100; i++) {
    hundredNumbers.push(Math.floor((Math.random() * 200) + 1))
  }
  for (number of hundredNumbers) {
    getNumberTrivia(number)
  }
}

function getNumberInput(e) {
  e.preventDefault()
  number = document.querySelector('input').value
  getNumberTrivia(number)
}

function getNumberTrivia(number) {
  fetch(`http://numbersapi.com/${number}`)
  .then(response => response.text())
  .then(jsonData => renderTrivia(jsonData))
}


function renderTrivia(jsonData) {
  let trivia = document.createElement('p')
  trivia.innerText = jsonData
  document.querySelector('#numberTrivia').appendChild(trivia)
}
