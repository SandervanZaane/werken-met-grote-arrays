import randomPersonArr from "./randomPersonData/persons.mjs"

// sort by firstname
const sortPersonsByFirstName = arr => arr.sort((a, b) => a.name < b.name ? -1 : 1);
//console.log(sortPersonsByFirstName(randomPersonArr));

const sorted = sortPersonsByFirstName(randomPersonArr);

// filter age >18

const filterPersonsByAge = arr => arr.filter(obj => obj.age >= 18);
const filtered = filterPersonsByAge(sorted);

console.log(filtered);

// const result = randomPersonArr
//     .sort((a, b) => a.name < b.name ? -1 : 1)
//     .filter(obj => obj.age >= 18);

// console.log(result)

// add to dom

const getZodiacNameFromBirthday = birthday => {
    const date = new Date(birthday.mdy)
    const signs = ['Aries: The Ram', 'Taurus: The Bull', 'Gemini: The Twins', 'Cancer: The Crab', 'Leo: The Lion', 'Virgo: The Virgin', 'Libra: The Scales', 'Scorpio: The Scorpion', 'Sagittarius: The Archer', 'Capricorn: The Goat', 'Aquarius: The Water Bearer', 'Pisces: The Fish'];
    const sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', { month: 'numeric' }).format(date) - 1);
    return signs[sign]
}

filtered.forEach(person => {
    const ul = document.getElementById("matchmaking");
    const li = document.createElement("li");
    const zodiac = getZodiacNameFromBirthday(person.birthday);
    const textHolder = document.createTextNode(`${person.name} ${person.surname}, ${person.age}, ${person.region} ${zodiac}`);
    const img = document.createElement(`img`);
    img.src = person.photo;
    ul.appendChild(li);
    li.appendChild(textHolder);
    li.appendChild(img);
});