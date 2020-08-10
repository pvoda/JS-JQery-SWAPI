//API URLS
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/id'
const PLANETS_URL = 'planets/id'
const STARSHIPS_URL = 'starships/id'
var info = prompt('What would you like to learn: People, Planets or Starships?')
//GENERATE A RANDOM ID
var randomPeople = Math.floor(Math.random() * 83);
var randomPlanets = Math.floor(Math.random() * 60);
var exceptionsStarships = Math.floor(Math.random() * 43)

var randomStarships = function () {
    if (exceptionsStarships === 30) {
        return  (exceptionsStarships + 1)
    }
    return exceptionsStarships
}

//API REQUEST 
const peopleUrl = `${API_URL}${PEOPLE_URL.replace('id', randomPeople)}`
const planetsUrl = `${API_URL}${PLANETS_URL.replace('id', randomPlanets)}`
const starshipsUrl = `${API_URL}${STARSHIPS_URL.replace('id', randomStarships)}`
//CROSSDOMAIN AJAX REQUEST
const opts = {crossDomain: true}
//CALLBACKS
var onPeopleResponse = function(people){
   document.write(`Hi, I'm ${people.name}`), document.write("<br>");
   document.write(`Height: ${people.height}`), document.write("<br>");
   document.write(`Mass: ${people.mass}`), document.write("<br>");
   document.write(`Hair Color: ${people.hair_color}`), document.write("<br>");
   document.write(`Skin Color: ${people.skin_color}`), document.write("<br>");
   document.write(`Eye Color: ${people.eye_color}`), document.write("<br>");
   document.write(`Birth Year: ${people.birth_year}`), document.write("<br>");
   document.write(`Gender: ${people.gender}`), document.write("<br>");

}
var onPlanetsResponse = function(planet){
   document.write(`Hi, I'm a Planet, My name es: ${planet.name}`), document.write("<br>");
   document.write(`Rotation period: ${planet.rotation_period}`), document.write("<br>");
   document.write(`Orbital period: ${planet.orbital_period}`), document.write("<br>");
   document.write(`Diameter: ${planet.diameter}`), document.write("<br>");
   document.write(`Climate: ${planet.climate}`), document.write("<br>");
   document.write(`Gravity: ${planet.gravity}`), document.write("<br>");
   document.write(`Terrain: ${planet.terrain}`), document.write("<br>");
   document.write(`Surface water: ${planet.surface_water}`), document.write("<br>");
   document.write(`Population: ${planet.population}`), document.write("<br>");
}

var onStarshipsResponse = function(starship){
   document.write(`Hi, I'm Starship, my name is: ${starship.name}`), document.write("<br>");
   document.write(`Model: ${starship.model}`), document.write("<br>");
   document.write(`Manufacturer: ${starship.manufacturer}`), document.write("<br>");
   document.write(`Cost in credits: ${starship.cost_in_credits}`), document.write("<br>");
   document.write(`Length: ${starship.length}`), document.write("<br>");
   document.write(`Max atmosphering speed: ${starship.max_atmosphering_speed}`), document.write("<br>");
   document.write(`Crew: ${starship.crew}`), document.write("<br>");
   document.write(`Passengers: ${starship.passengers}`), document.write("<br>");
   document.write(`Cargo of capacity: ${starship.cargo_capacity}`), document.write("<br>");
   document.write(`Consumables: ${starship.consumables}`), document.write("<br>");
   document.write(`Hyperdrive_rating: ${starship.hyperdrive_rating}`), document.write("<br>");
   document.write(`MGLT: ${starship.MGLT}`), document.write("<br>");
   document.write(`Starship class: ${starship.starship_class}`), document.write("<br>");
}

switch (info){
    case 'people':
    case 'People':
    case 'PEOPLE':
    $.get(peopleUrl, opts, onPeopleResponse).fail(() => document.write('Sucedio un error'))
        break
    case 'Planets':
    case 'planets':
    case 'PLANETS':
        $.get(planetsUrl, opts, onPlanetsResponse).fail(() => document.write('Sucedio un error'))
        break
    case 'Starships':
    case 'starships':
    case 'STARSHIPS':
        $.get(starshipsUrl, opts, onStarshipsResponse).fail(() => document.write('Sucedio un error'))
        break
    default:
        document.write('no existe esa información')
}