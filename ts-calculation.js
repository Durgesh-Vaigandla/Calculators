document.getElementById("marksCalc").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    function numberToWord(number) {
        const words = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
        const numberString = number.toString();
        const digits = numberString.split("");
        const result = digits.map(digit => words[parseInt(digit)]);
        return result.join(" ");
    }

    let firstSem = parseFloat(document.getElementById("1stSem").value);
    let secondSem = parseFloat(document.getElementById("2ndSem").value);
    let thirdSem = parseFloat(document.getElementById("3rdSem").value);
    let fourthSem = parseFloat(document.getElementById("4thSem").value);
    let fifthSem = parseFloat(document.getElementById("5thSem").value);
    let sixthSem = parseFloat(document.getElementById("6thSem").value);

    // Validate if all fields are filled with valid numbers
    if (isNaN(firstSem) || isNaN(secondSem) || isNaN(thirdSem) || isNaN(fourthSem) || isNaN(fifthSem) || isNaN(sixthSem)) {
        alert("Please fill in all fields with valid numbers before submitting.");
        return;
    }
    let finalResult = firstSem + secondSem + thirdSem + fourthSem + fifthSem + sixthSem;
    let maxMarks = 5300;
    let Percentage = finalResult / maxMarks * 100;
    //Marks Secured
    document.getElementById("1stSemSecured").innerHTML = firstSem;
    document.getElementById("2ndSemSecured").innerHTML = secondSem;
    document.getElementById("3rdSemSecured").innerHTML = thirdSem;
    document.getElementById("4thSemSecured").innerHTML = fourthSem;
    document.getElementById("5thSemSecured").innerHTML = fifthSem;
    document.getElementById("6thSemSecured").innerHTML = sixthSem;
    //Marks Considered
    document.getElementById("1stSemFigure").innerHTML = (firstSem + "(100%)");
    document.getElementById("2ndSemFigure").innerHTML = (secondSem + "(100%)");
    document.getElementById("3rdSemFigure").innerHTML = (thirdSem + "(100%)");
    document.getElementById("4thSemFigure").innerHTML = (fourthSem + "(100%)");
    document.getElementById("5thSemFigure").innerHTML = (fifthSem + "(100%)");
    document.getElementById("6thSemFigure").innerHTML = (sixthSem + "(100%)");
    //Marks in Words
    document.getElementById("1stSemWord").innerHTML = numberToWord(firstSem);
    document.getElementById("2ndSemWord").innerHTML = numberToWord(secondSem);
    document.getElementById("3rdSemWord").innerHTML = numberToWord(thirdSem);
    document.getElementById("4thSemWord").innerHTML = numberToWord(fourthSem);
    document.getElementById("5thSemWord").innerHTML = numberToWord(fifthSem);
    document.getElementById("6thSemWord").innerHTML = numberToWord(sixthSem);
    //Total Marks
    document.getElementById("totalWord").innerHTML = numberToWord(finalResult);
    document.getElementById("totalMarks").innerHTML = finalResult;
    document.getElementById("totalPercentage").innerHTML = (Percentage.toFixed(2) + "%");
    document.getElementById("Student-info").style.display = "block"

    document.getElementById("marksCalc").reset();
});
document.getElementById("Student-info").addEventListener("submit", function (event) {
    event.preventDefault();
    let fullName = document.getElementById("fName").value;
    let diplomaPin = document.getElementById("dPin").value;

    let test1 = fullName.trim();
    let test2 = diplomaPin.trim();

    if (test1 === "" || test2 === "") {
        alert("Kindly Enter Your Name and Pin Number");
    } else {
        document.getElementById("student-details").innerHTML = "Name: " + fullName + "<br>PIN: " + diplomaPin;
        // Hide the input fields and labels
        document.getElementById("nav-bar").style.display = "none";
        document.getElementById("marksCalc").style.display = "none";
        document.getElementById("printButton").style.display = "none";
        document.getElementById("student-details").style.display = "block";
        document.getElementById("Student-info").style.display = "none";

        // Print only the table
        window.print();

        // Show the input fields and labels again after printing
        document.getElementById("nav-bar").style.display = "block";
        document.getElementById("marksCalc").style.display = "block";
        document.getElementById("printButton").style.display = "block";
        document.getElementById("student-details").style.display = "none";
        document.getElementById("Student-info").style.display = "block";
        document.getElementById("Student-info").reset();
    }
});