let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];

let number = academyMembers.find ((potato) => {
    return potato.memID === 187;
})
console.log(number)
console.log("-----------------")


let filmsOver3 = academyMembers.filter( (filmss) => {
    return filmss.films.length >= 3
 })
console.log(filmsOver3)
console.log("-----------------")


let findBob = academyMembers.filter ( (namedBob) => {
    if (namedBob.name.indexOf("Bob") === 0){
        return true;
    }
    return false;
})

console.log(findBob)
console.log("-----------------")

let numberOfAcad = academyMembers.length

for(let i= 0; i < numberOfAcad; i++){

    let actorsMovies = academyMembers[i].films

    let startsWithA = false;

    for(let i=0; i < actorsMovies.length; i++){

        if(actorsMovies[i].indexOf("A") === 0){
            startsWithA = true;
        }

    }

if(startsWithA){
    console.log(`${academyMembers[i].name} has been in movies that start with A`)
}
}
