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




// const addListOnClick = document.getElementById("matchMaking").addEventListener("click", function showSorted()