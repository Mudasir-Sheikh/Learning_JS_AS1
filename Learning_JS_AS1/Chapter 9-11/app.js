//Question 01
document.write("Question 01<br>")
var city = prompt("Enter the city Name").toUpperCase();
if (city=="KARACHI"){
    document.write("Welcome to City of Lights")
}
document.write("<br><br>");




//Question 02
document.write("Question 02<br>")
var gender = prompt("Enter the Gender:").toUpperCase();
if (gender=="MALE"){
    document.write("Good Morning Sir!")
}
else{
    document.write("Good Morning Ma'am")
}
document.write("<br><br>");




//Question 03
document.write("Question 03<br>")
var traffic_color = prompt("Enter the color of traffic light")
traffic_color=traffic_color.toUpperCase();
if (traffic_color=="RED"){
    document.write("<h2>Must Stop")
}
if (traffic_color=="YELLOW") {
    document.write("<h2>Ready to Move")
    
}
if(traffic_color=="GREEN"){
    document.write("<h2>Move Now")
}
document.write("<br><br>");





//Question 04
document.write("Question 04<br>")
var fuel = +prompt("Enter the Remaining fuel");
if (fuel<=0.25) {
    document.write("Please Refill the fuel")
} else {
    document.write("No need of Refuelling")
}
document.write("<br><br>");


//Question 05
document.write("Question 05<br>")
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

if (c === 13){
alert("condition 2 is true");
}

if (++c < 14){
alert("condition 3 is true");
}

if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}
document.write("<br><br>");




//Question 10
document.write("Question 10<br>")
var temp=+prompt("Enter the Temperature")
if (temp<10) {
    document.write("Its too Cold Wheather Today")

}
if (temp<20) {
    document.write("The Wheather is cold today")
}
if (temp<30) {
    document.write("Today's Wheather is Cool")
    
}
else{
    document.write("Extremely Hot Wheather Today")
}
document.write("<br><br>");