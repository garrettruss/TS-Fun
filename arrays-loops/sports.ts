let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

/*
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
*/

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

sportsOne.push("Baseball");
sportsOne.push("Futbol");

for (let tempSport of sportsOne) {
    console.log(tempSport);
}
