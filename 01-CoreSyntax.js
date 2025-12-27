var name = "John Doe";
var age = 30;
var hasHobbies = true;

function summerizeUser(userName, userAge, userHasHobby){
    return (
        "Name: " + userName + 
        ", Age: " + userAge + 
        ", Has Hobbies: " + userHasHobby);
}

console.log(summerizeUser(name, age, hasHobbies));
