document.getElementById("marksCalc").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    function numberToWord(number) {
        const words = ["ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
        const numberString = number.toString();
        const digits = numberString.split("");
        const result = digits.map(digit => words[parseInt(digit)]);
        return result.join(" ");
    }

    let firstYear = parseFloat(document.getElementById("1stSem").value);
    let thirdSem = parseFloat(document.getElementById("3rdSem").value);
    let fourthSem = parseFloat(document.getElementById("4thSem").value);
    let fifthSem = parseFloat(document.getElementById("5thSem").value);
    let sixthSem = parseFloat(document.getElementById("6thSem").value);

    // Validate if all fields are filled with valid numbers
    if (isNaN(firstYear) || isNaN(thirdSem) || isNaN(fourthSem) || isNaN(fifthSem) || isNaN(sixthSem)) {
        alert("Please fill in all fields with valid numbers before submitting.");
        return;
    }
    let firstSem = Math.round(firstYear);
    let divider = 4;
    firstYear = firstYear / divider;
    let finalResult = firstYear + thirdSem + fourthSem + fifthSem + sixthSem;
    finalResult = Math.round(finalResult);
    let maxMarks = 3250;
    let Percentage = finalResult / maxMarks * 100;
    //Marks Secured
    document.getElementById("1stSemSecured").innerHTML = firstSem;
    document.getElementById("3rdSemSecured").innerHTML = thirdSem;
    document.getElementById("4thSemSecured").innerHTML = fourthSem;
    document.getElementById("5thSemSecured").innerHTML = fifthSem;
    document.getElementById("6thSemSecured").innerHTML = sixthSem;
    //Marks Considered
    document.getElementById("1stSemFigure").innerHTML = (firstYear + "(25%)");
    document.getElementById("3rdSemFigure").innerHTML = (thirdSem + "(100%)");
    document.getElementById("4thSemFigure").innerHTML = (fourthSem + "(100%)");
    document.getElementById("5thSemFigure").innerHTML = (fifthSem + "(100%)");
    document.getElementById("6thSemFigure").innerHTML = (sixthSem + "(100%)");
    //Marks in Words
    document.getElementById("1stSemWord").innerHTML = numberToWord(firstYear);
    document.getElementById("3rdSemWord").innerHTML = numberToWord(thirdSem);
    document.getElementById("4thSemWord").innerHTML = numberToWord(fourthSem);
    document.getElementById("5thSemWord").innerHTML = numberToWord(fifthSem);
    document.getElementById("6thSemWord").innerHTML = numberToWord(sixthSem);
    //Total Marks
    document.getElementById("totalWord").innerHTML = numberToWord(finalResult);
    document.getElementById("totalMarks").innerHTML = finalResult;
    document.getElementById("totalPercentage").innerHTML = (Percentage.toFixed(2) + "%");

    document.getElementById("marksCalc").reset();
});
