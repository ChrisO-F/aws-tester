function myFunction() {
    var output;
    var x = document.getElementById("mySelect").value;
    if (x == "0") { output = "Please make a selection!"; }
    else if (x == "1") { output = "You chose Door #1!"; }
    else if (x == "2") { output = "You chose Door #2!"; }
    else if (x == "3") { output = "You chose Door #3!"; }
    else { output = "Hard decision?"; }

    document.getElementById("answer").innerHTML = output;
}