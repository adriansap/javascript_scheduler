retrieveData(); //to retrieve data from local storage to input field [NOT WORKING!]


//time with second update using timer , 1000 millisecond
function setTime() {
    var timerInterval = setInterval(function () {

        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        checkTime(); // check time and run function to update colors

    }, 1000); // the timer goes on indefinitely, that's why when secondsLeft === 0 then clearInterval(timerInterval);
    //shuts the timer
}


setTime();

// check what time it is -> color-coat red current time div

var currentTime = ""; //set currentTime as a string.
function checkTime() {

    var currentTime = moment().format('LT');
    if (currentTime[1] === ":") {
        var currentHour = currentTime[0]; //first index is the hour number
    }
    else if (currentTime[1] != ":") {
        var currentHour = currentTime[0] + currentTime[1];
    }
    var isItPm = moment().format('MMMM Do YYYY, h:mm:ss a'); // to check if it is pm
    isItPmConcat = isItPm[27] + isItPm[28]; //extract pm
    console.log("PM: " + isItPmConcat)

    var isIt6pm;

    //to find out if it's 6pm, schedule is over
    // if current our is (greather than 5 && its pm) || if its (less than 9 && am) 
    if ((currentHour > 5 && isItPmConcat === "pm") || (currentHour < 9 && isitPmConcat !== "pm")) {
        // if (currentHour === 6) {
        isIt6pm = "yes";
    }
    else {
        isIt6pm = "no";
    }


    if (isItPmConcat === "pm" && isIt6pm === "yes") { //if pm, then all divs are grey [****!important not working]
        console.log("!!!!!!!!!!!")
        $("#9,#10,#11,#12,#1,#2,#3,#4,#5").css('background-color', 'grey');//make all grey
        $("#input9,#input10, #input11, #input12, #input1, #input2, #input3, #input4, #input5").css('background-color', 'grey');

        //set that it's past five
        var isItPast5 = "yes";
    }
    else if (isItPmConcat === "am") { var isItPast5 = "no"; }
    if (isItPast5 != "yes") {


        console.log("current hour: " + currentHour)
        if (currentHour === "9") {
            $("#9").css("background-color", "red");
            $("#input9").css("background-color", "red")

            $("#10,#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input10, #input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour === "10") {
            $("#9").css("background-color", "grey")
            $("input9").css("background-color", "grey")

            $("#10").css("background-color", "red");
            $("#input10").css("background-color", "red")

            $("#11,#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour === "11") {
            $("#9,#10").css("background-color", "grey")
            $("#input9, #input10").css("background-color", "grey")

            $("#11").css("background-color", "red");
            $("#12,#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "green")

        }
        if (currentHour === "12") {
            $("#9,#10,#11").css("background-color", "grey")
            $("#input9, #input10, #input11").css("background-color", "grey")

            $("#12").css("background-color", "red");
            $("#1,#2,#3,#4,#5").css("background-color", "green")
            $("#input1, #input2, #input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour === "1") {
            $("#9,#10,#11,#12").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12").css("background-color", "grey")

            $("#1").css("background-color", "red");
            $("#2,#3,#4,#5").css("background-color", "green")
            $("#input2, #input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour === "2") {
            $("#9,#10,#11,#12,#1").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1").css("background-color", "grey")

            $("#2").css("background-color", "red");
            $("#3,#4,#5").css("background-color", "green")
            $("#input3, #input4, #input5").css("background-color", "green")


        }
        if (currentHour === "3") {
            $("#9, #10, #11, #12, #1, #2").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2").css("background-color", "grey")
            $("#3").css("background-color", "red");
            $("#input3").css("background-color", "red");
            $("#4, #5").css("background-color", "green")
            $("#input4, #input5").css("background-color", "green")
        }
        if (currentHour === "4") {
            $("#9, #10, #11, #12, #1, #2,#3").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2, #input3").css("background-color", "grey")

            $("#4").css("background-color", "red");
            $("#input4").css("background-color", "red")
            $("#input5").css("background-color", "green")

        }
        if (currentHour === "5") {
            $("#9, #10, #11, #12, #1, #2,#3,#4").css("background-color", "grey")
            $("#input9, #input10, #input11, #input12, #input1, #input2, #input3, #input4, #input5").css("background-color", "grey")

            $("#5").css("background-color", "red");
            $("#input5").css("background-color", "red")

        }
    }

}

//event listener for btn click -> local storage saving
$("#btn9").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("9am", document.getElementById("input9").value);

});

$("#btn10").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("10am", document.getElementById("input10").value);

});

$("#btn11").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("11am", document.getElementById("input11").value);

});

$("#btn12").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("12pm", document.getElementById("input12").value);

});

$("#btn1").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("1pm", document.getElementById("input1").value);

});

$("#btn2").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("2pm", document.getElementById("input2").value);

});

$("#btn3").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("3pm", document.getElementById("input3").value);

});

$("#btn4").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("4pm", document.getElementById("input4").value);

});
$("#btn5").on("click", function () {
    //localStorage.setItem("lastname", "Smith");

    localStorage.setItem("5pm", document.getElementById("input5").value);

});




//function to retrieve saved data to local storage
var currentInput9 = " ";
var currentInput10 = " ";
var currentInput11 = " ";
var currentInput12 = " ";
var currentInput1 = " ";
var currentInput2 = " ";
var currentInput3 = " ";
var currentInput4 = " ";
var currentInput5 = " ";
function retrieveData() {   //9am input retrieved from local storage
    if (localStorage.getItem("9am") != null) {
        currentInput9 = localStorage.getItem("9am");
        document.getElementById("input9").value = currentInput9;
    }
    else if ((localStorage.getItem("9am") === null)) {
        document.getElementById("input9").value = "Enter activity here."

    }


    if (localStorage.getItem("10am") != null) {
        currentInput10 = localStorage.getItem("10am");
        document.getElementById("input10").value = currentInput10;

    }
    else if (localStorage.getItem("10am") === null) {
        document.getElementById("input10").value = "Enter activity here."
    }

    if (localStorage.getItem("11am") != null) {
        currentInput11 = localStorage.getItem("11am");
        document.getElementById("input11").value = currentInput11;

    }
    else if (localStorage.getItem("11am") === null) {
        document.getElementById("input11").value = "Enter activity here."
    }

    if (localStorage.getItem("12am") != null) {
        currentInput12 = localStorage.getItem("12am");
        document.getElementById("input12").value = currentInput12;

    }
    else if (localStorage.getItem("12am") === null) {
        document.getElementById("input12").value = "Enter activity here."
    }

    if (localStorage.getItem("1pm") != null) {
        currentInput1 = localStorage.getItem("1pm");
        document.getElementById("input1").value = currentInput1;

    }
    else if (localStorage.getItem("1pm") === null) {
        document.getElementById("input1").value = "Enter activity here."
    }

    if (localStorage.getItem("2pm") != null) {
        currentInput2 = localStorage.getItem("2pm");
        document.getElementById("input2").value = currentInput2;

    }
    else if (localStorage.getItem("2pm") === null) {
        document.getElementById("input2").value = "Enter activity here."
    }

    if (localStorage.getItem("3pm") != null) {
        currentInput3 = localStorage.getItem("3pm");
        document.getElementById("input3").value = currentInput3;

    }
    else if (localStorage.getItem("3pm") === null) {
        document.getElementById("input3").value = "Enter activity here."
    }


    if (localStorage.getItem("4pm") != null) {
        currentInput4 = localStorage.getItem("4pm");
        document.getElementById("input4").value = currentInput4;

    }
    else if (localStorage.getItem("4pm") === null) {
        document.getElementById("input4").value = "Enter activity here."
    }

    if (localStorage.getItem("5pm") != null) {
        currentInput5 = localStorage.getItem("5pm");
        document.getElementById("input5").value = currentInput5;

    }
    else if (localStorage.getItem("5pm") === null) {
        document.getElementById("input5").value = "Enter activity here."
    }


}



