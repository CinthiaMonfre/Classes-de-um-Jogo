let userName = getFirstName ("Cinthia Monfré Villares", " ")
console.log ("Seja Bem-vinda " + userName)

userName = getFirstName ("Débora-Monfré-Villares", "-")
console.log ("Seja Bem-vinda " + userName)

function getFirstName (name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}