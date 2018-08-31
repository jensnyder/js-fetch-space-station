document.addEventListener('DOMContentLoaded', init)

function init() {
  addEventListener()
  getPeopleData()
}

function addEventListener() {
  let button = document.querySelector("button");
  button.addEventListener('click', getLocationData)
}

function getLocationData() {
  fetch('http://api.open-notify.org/iss-now.json')
  .then(response => response.json())
  .then(jsonData => renderLocation(jsonData))
}

function renderLocation(jsonData) {
  issPosition = jsonData.iss_position

  let divElement = document.createElement('div')
  let latitudeElement = document.createElement('p')
  let longitudeElement = document.createElement('p')

  divElement.appendChild(latitudeElement)
  divElement.appendChild(longitudeElement)

  latitudeElement.innerText = `Latitude: ${issPosition.latitude}`
  longitudeElement.innerText = `Longitude: ${issPosition.longitude}`

  document.querySelector('#location-container').appendChild(divElement)
}

function getPeopleData() {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(jsonData => {
    jsonData.people.forEach(person => renderPerson(person))
  })
}

function renderPerson(person) {
  let pElement = document.createElement('p')
  pElement.innerText = person.name
  document.querySelector('#people-container').appendChild(pElement)
}
