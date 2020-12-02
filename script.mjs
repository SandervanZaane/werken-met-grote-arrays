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

filtered.forEach(person => {
    const ul = document.getElementById("matchmaking");
    const li = document.createElement("li");
    const textHolder = document.createTextNode(`${person.name} ${person.surname}, ${person.age}, ${person.region} `);
    const img = document.createElement(`img`);
    img.src = person.photo;
    ul.appendChild(li);
    li.appendChild(textHolder);
    li.appendChild(img);
});


// const addListOnClick = document.getElementById("matchMaking").addEventListener("click", function showSorted()