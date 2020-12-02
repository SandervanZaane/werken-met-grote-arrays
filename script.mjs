import randomPersonArr from "./randomPersonData/persons.mjs"

const sortPersonsByFirstName = arr => arr.sort((a, b) => a.name < b.name ? -1 : 1);
console.log(sortPersonsByFirstName(randomPersonArr));


// const addListOnClick = document.getElementById("matchMaking").addEventListener("click", function showSorted() { console.log(randomPersonData) });