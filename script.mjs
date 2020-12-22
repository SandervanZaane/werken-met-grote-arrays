import randomPersonArr from "./randomPersonData/persons.mjs"

// sort by firstname
const sortPersonsByFirstName = arr => arr.sort((a, b) => a.name < b.name ? -1 : 1);

// Id on click to DOM
function onButtonClick(e) {
    console.log(e.target["data-email"]);

    function clearMatchmaking() {
        document.getElementById("matchmaking").remove();
    };
    let withZodiacs = filtered.forEach(person => {
        console.log("filter werkt")
        const clickedEmail = e.target["data-email"];
        clickedZodiac = e.target["data-zodiac"];
        filterByZodiac = filtered.map(person => person.zodiac === clickedEmail);
        const ul = document.getElementById("title");
        const li = document.createElement("li");
        const textHolder = document.createTextNode(`${person.name} ${person.surname}, ${person.age}, ${person.region}, ${person.zodiac}`);
        li.appendChild(ul);
        textHolder.appendChild(li);
    });

    filteredByZodiac(filtered);
};

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

/**
 * 
 * @param birthday accepts a string in MM/DD/YYYY format.
 */
const getZodiacNameFromBirthday = birthday => {
    const date = new Date(birthday)
        // copied from https://medium.com/@Saf_Bes/get-the-zodiac-sign-for-a-date-in-javascript-797305d75869 :
    const signs = ['Aries: The Ram', 'Taurus: The Bull', 'Gemini: The Twins', 'Cancer: The Crab', 'Leo: The Lion', 'Virgo: The Virgin', 'Libra: The Scales', 'Scorpio: The Scorpion', 'Sagittarius: The Archer', 'Capricorn: The Goat', 'Aquarius: The Water Bearer', 'Pisces: The Fish'];
    const sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', { month: 'numeric' }).format(date) - 1);
    return signs[sign]
}
console.log(getZodiacNameFromBirthday);

filtered.forEach(person => {
    const ul = document.getElementById("matchmaking");
    const li = document.createElement("li");
    const zodiac = getZodiacNameFromBirthday(person.birthday.mdy);
    const textHolder = document.createTextNode(`${person.name} ${person.surname}, ${person.age}, ${person.region} ${zodiac}`);
    const img = document.createElement(`img`);
    const button = document.createElement(`button`);
    const buttonText = document.createTextNode(`Vind een match voor mij!`)
    img.src = person.photo;
    ul.appendChild(li);
    li.appendChild(textHolder);
    li.appendChild(img);
    li.appendChild(button);
    button.appendChild(buttonText);
    button["data-email"] = person.email;
    button["data-zodiac"] = person.zodiac;
    button.addEventListener("click", onButtonClick);
});