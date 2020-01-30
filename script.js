

//time with second update using timer , 1000 millisecond
function setTime() {
    var timerInterval = setInterval(function () {

        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        checkTime(); // check time and run function to update colors
        retrieveData(); //to retrieve data from local storage to input field [NOT WORKING!]

    }, 1000); // the timer goes on indefinitely, that's why when secondsLeft == 0 then clearInterval(timerInterval);
    //shuts the timer
}


setTime();

// check what time it is -> color-coat red current time div

var currentTime = ""; //set currentTime as a string.
function checkTime() {

    var currentTime = moment().format('LT');
    if (currentTime[1] == ":") {
        var currentHour = currentTime[0]; //first index is the hour number
    }
    else if (currentTime[1] != ":") {
        var currentHour = currentTime[0] + currentTime[1];
    }
    var isItPm = moment().format('MMMM Do YYYY, h:mm:ss a'); // to check if it is pm
    isItPmConcat = isItPm[27] + isItPm[28]; //extract pm
    console.log("PM: " + isItPmConcat)

    //to find out if it's 6pm, schedule is over
    if (currentHour == 6) { var isIt6pm = "yes"; }
    else if (currentHour != 6) { var isIt6pm = "no"; }


    if (isItPmConcat == "pm" && isIt6pm == "yes") { //if pm, then all divs are grey [****!important not working]
        $("#9,#10,#11,#12,#1,#2,#3,#4,#5").css('cssText', 'background-color:grey !important')//make all grey}
        //set that it's past five
        var isItPast5 = "yes";
    }
    else if (isItPmConcat == "am") { var isItPast5 = "no"; }
    if (isItPast5 != "yes") {


        console.log("current hour: " + currentHour)
        if (currentHour == "9") {
            $("#9").css("background-color", "red");
            $("#input9").css("background-color", "red")

            $("#10,#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input10, #input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour == "10") {
            $("#9").css("background-color", "grey")
            $("input9").css("background-color", "grey")

            $("#10").css("background-color", "red");
            $("#input10").css("background-color", "red")

            $("#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour == "11") {
            $("#9,#10").css("background-color", "grey")
            $("#input9, #input10").css("background-color", "grey")

            $("#11").css("background-color", "red");
            $("#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour == "12") {
            $("#9,#10,#11").css("background-color", "grey")
            $("#input9, #input10, #input11").css("background-color", "grey")

            $("#12").css("background-color", "red");
            $("#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input1, #input2, #input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour == "1") {
            $("#9,#10,#11,#12").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12").css("background-color", "grey")

            $("#1").css("background-color", "red");
            $("#2,#3,#4,#5").css("background-color", "green")
            $("#input2, #input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour == "2") {
            $("#9,#10,#11,#12,#1").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1").css("background-color", "grey")

            $("#2").css("background-color", "red");
            $("#3,#4,#5").css("background-color", "green")
            $("#input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour == "3") {
            $("#9, #10, #11, #12, #1, #2").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2").css("background-color", "grey")
            $("#3").css("background-color", "red");
            $("#input3").css("background-color", "red");
            $("#4, #5").css("background-color", "green")
            $("#input4, #input5").css("background-color", "green")
        }
        if (currentHour == "4") {
            $("#9, #10, #11, #12, #1, #2,#3").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2, #input3").css("background-color", "grey")

            $("#4").css("background-color", "red");
            $("#input4").css("background-color", "red")
            $("#input5").css("background-color", "green")

        }
        if (currentHour == "5") {
            $("#9, #10, #11, #12, #1, #2,#3,#4").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "grey")

            $("#5").css("background-color", "red");
            $("#input5").css("background-color", "red")

        }
    }

}

//event listener for input -> local storage saving
$("#btn9").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("9am", document.getElementById("input9").value);

    localStorage.setItem("10am", document.getElementById("input10").value);
});

//function to retrieve saved data to local storage
var currentInput9 = "";
var currentInput10 = "";
// var currentInput11 = "";
// var currentInput12 = "";
// var currentInput1 = "";
// var currentInput2 = "";
// var currentInput3 = "";
// var currentInput4 = "";
// var currentInput5 = "";
function retrieveData() {   //problem not working
    currentInput9 = localStorage.getItem("9am");
    console.log("9am: " + currentInput9);
    document.getElementById("input9").placeholder = currentInput9;

    currentInput9 = localStorage.getItem("10am");
    console.log("10am: " + currentInput10);
    document.getElementById("input10").placeholder = currentInput10;

    // currentInput9 = localStorage.getItem("11am");
    // console.log("11am: " + currentInput11);
    // document.getElementById("input11").placeholder = currentInput11;

    // currentInput9 = localStorage.getItem("12pm");
    // console.log("12pm: " + currentInput12);
    // document.getElementById("input12").placeholder = currentInput12;

    // currentInput9 = localStorage.getItem("1pm");
    // console.log("1pm: " + currentInput1);
    // document.getElementById("input1").placeholder = currentInput1;

    // currentInput9 = localStorage.getItem("2pm");
    // console.log("2pm: " + currentInput2);
    // document.getElementById("input9").placeholder = currentInput2;

    // currentInput9 = localStorage.getItem("3pm");
    // console.log("3pm: " + currentInput3);
    // document.getElementById("input3").placeholder = currentInput3;

    // currentInput9 = localStorage.getItem("4pm");
    // console.log("4pm: " + currentInput4);
    // document.getElementById("input9").placeholder = currentInput4;

    // currentInput9 = localStorage.getItem("5pm");
    // console.log("5pm: " + currentInput5);
    // document.getElementById("input5").placeholder = currentInput5;


}



