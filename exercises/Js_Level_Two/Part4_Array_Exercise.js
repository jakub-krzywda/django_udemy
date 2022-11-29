// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(name) {
    roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(name) {
    const index = roster.indexOf(name);
    if (index > -1) {
        roster.splice(index, 1)
    }
}
// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display() {
    console.log(roster)
}

// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
var answer = prompt("Hi! Do you want to use a web app?")
if (answer === "yes") {
    console.log("GOOD!") 
    var command = prompt("What do you want to do? (select -> \"add\" \"remove\" \"display\" or \"quit\"")
    while (command !== "quit") {
        if (command === "add") {
            var studentsName = prompt("Please input new students name")
            addNew(studentsName)
        } else if (command === "remove") {
            var studentsName = prompt("Please input name of student to remove")
            remove(studentsName)
        } else if (command === "display") {
            display()
        } else {
            alert("Wrong command")
        }
        var command = prompt("What do you want to do? (select -> \"add\" \"remove\" \"display\" or \"quit\"")
    }
    console.log("Thanks for using my web app")

} else if (answer === "no") {
    console.log("ok")
} else {
    console.log("bad answer. Please enter yes or no")
}