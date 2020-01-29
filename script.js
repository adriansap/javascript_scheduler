

//time with second update using timer , 1000 millisecond
function setTime() {
    var timerInterval = setInterval(function () {

        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        checkTime(); // check time and run function to update colors
        // retrieveData(); //to retrieve data from local storage to input field

    }, 1000); // the timer goes on indefinitely, that's why when secondsLeft == 0 then clearInterval(timerInterval);
    //shuts the timer
}


setTime();

// check what time it is -> color-coat red current time div

var currentTime = ""; //set currentTime as a string.
function checkTime() {

    var currentTime = moment().format('LT');
    var currentHour = currentTime[0]; //first index is the hour number
    console.log("current hour: " + currentHour)
    if (currentHour == "9") {
        $("#9").css("background-color", "red");
        $("#10,#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")

    }
    if (currentHour == "10") {
        $("#9").css("background-color", "grey")
        $("#10").css("background-color", "red");
        $("#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")

    }
    if (currentHour == "11") {
        $("#9,#10").css("background-color", "grey")
        $("#11").css("background-color", "red");
        $("#12,#1,#2,#3,#4,#5").css("background-color", "green")
    }
    if (currentHour == "12") {
        $("#9,#10,#11").css("background-color", "grey")
        $("#12").css("background-color", "red");
        $("#1,#2,#3,#4,#5").css("background-color", "green")

    }
    if (currentHour == "1") {
        $("#9,#10,#11,#12").css("background-color", "grey")
        $("#1").css("background-color", "red");
        $("#2,#3,#4,#5").css("background-color", "green")

    }
    if (currentHour == "2") {
        $("#9,#10,#11,#12,#1").css("background-color", "grey")

        $("#2").css("background-color", "red");
        $("#3,#4,#5").css("background-color", "green")

    }
    if (currentHour == "3") {
        $("#9, #10, #11, #12, #1, #2").css("background-color", "grey")
        $("#3").css("background-color", "red");
        $("#4, #5").css("background-color", "green")
    }
    if (currentHour == "4") {
        $("#9, #10, #11, #12, #1, #2,#3").css("background-color", "grey")
        $("#4").css("background-color", "red");
    }
    if (currentHour == "5") {
        $("#9, #10, #11, #12, #1, #2,#3,#4").css("background-color", "grey")
        $("#5").css("background-color", "red");
    }


}

// //event listener for input -> local storage saving
// $("#saveButton9").on("click", function () {
//     //localStorage.setItem("lastname", "Smith");

//     localStorage.setItem("9pm", document.getElementById("input9").value);
// });

// //function to retrieve saved data to local storage
// function retrieveData() {
//     document.getElementById("#input9").invalue = localStorage.getItem("9pm");

// }
