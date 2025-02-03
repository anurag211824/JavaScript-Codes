let dayNumber = 6;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}

let nameofPerson = "kiran";

switch (nameofPerson) {
  case "anurag":
    console.log("Name is Anurag");
    break;
  case "kiran":
    console.log("Name is Kiran");
    break;
  default:
    console.log("Name is not found");
}

let userName = "Anurag";
let userAge = 21;

switch (true) {
  case userName === "Anurag" && userAge >= 18:
    console.log("Welcome to the party");
    break;
  case userName === "Anurag" && userAge < 18:
    console.log("You are not old enough to attend the party");
    break;

  default:
    console.log("Invalid user");
}


const grade = "B";

switch (grade) {
  case "A":
    console.log("your score is b/w 90 to 100");
    break;
  case "B":
    console.log("your score is b/w 80 to 89");
    break;
  case "C":
    console.log("your score is b/w 70 to 79");
    break;
  case "D":
    console.log("your score is b/w 60 to 69");
    break;
  case "E":
    console.log("your score is below 60");
    break;
  default:
    console.log("You failed");
}
