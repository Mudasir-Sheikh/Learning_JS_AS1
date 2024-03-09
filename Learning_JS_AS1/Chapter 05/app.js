//Question 01
document.write("Question 01 <br>");
var num1 = 10;
var num2 = 20;
var add = num1 + num2;
document.write("Sum of ",num1," and ",num2," is ",add);
document.write("<br><br><br>");

//Question 02
document.write("Question 02 <br>");
var num1 = 40;
var num2 = 20;
var sub = num1 - num2;
document.write("Subtraction of ",num1," and ",num2," is ",sub);

var num1 = 10;
var num2 = 20;
var mul = num1 * num2;
document.write("<br>Multiplication of ",num1," and ",num2," is ",mul);

var num1 = 10;
var num2 = 20;
var divide = num1 / num2;
document.write("<br>Division of ",num1," and ",num2," is ",divide);

var num1 = 10;
var num2 = 20;
var mod = num2 % num1;
document.write("<br>Modulus of ",num1," and ",num2," is ",mod);
document.write("<br><br><br>");



//Question 03

document.write("Question 03 <br>");
var variable;
document.write("Value after variable Declaration is : ??");
variable = 5;
document.write("<br>Intial value of the variable is :",variable);
variable = ++variable;
document.write("<br>Value of variable after increament is:",variable);
variable = variable + 7 ;
document.write("<br>Value after addition is:",variable);
variable--
document.write("<br> Value after decrementation is variable ",variable);
document.write("<br>The remainder after division by 3 is:",variable%3);
document.write("<br><br><br>");




//Question 04

document.write("Question 04 <br>");
var ticketprice = 600;
var quantity = 5;
document.write("Total cost to Buy ",quantity,"tickets to a movie is ",ticketprice,"<br>");
document.write("<br><br>");



//Question 05
document.write("Question 05 <br>");
var MyTable=8;
document.write("Table of ",MyTable);
document.write("<br>",MyTable , " x 1 " , " = " , MyTable*1);
document.write("<br>",MyTable , " x 2 " , " = " , MyTable*2);
document.write("<br>",MyTable , " x 3 " , " = " , MyTable*3);
document.write("<br>",MyTable , " x 4 " , " = " , MyTable*4);
document.write("<br>",MyTable , " x 5 " , " = " , MyTable*5);
document.write("<br>",MyTable , " x 6 " , " = " , MyTable*6);
document.write("<br>",MyTable , " x 7 " , " = " , MyTable*7);
document.write("<br>",MyTable , " x 8 " , " = " , MyTable*8);
document.write("<br>",MyTable , " x 9 " , " = " , MyTable*9);
document.write("<br>",MyTable , " x 10 " , " = " , MyTable*10);
document.write("<br>",MyTable , " x 11 " , " = " , MyTable*11);
document.write("<br>",MyTable , " x 12 " , " = " , MyTable*12);
document.write("<br><br><br>");



//Question 06
//Converter Temperature
document.write("Question 06 <br>");
var tempCelcius = 25;
var convert = (tempCelcius * 9/5) + 32; //Cel to Frah
document.write(tempCelcius,"'C is Converted into ",convert,"'F<br>");


var tempFrahrenheit = 70;
var convert = (tempFrahrenheit - 32) * 5/9; //Frah to Cel
document.write(tempFrahrenheit,"'F is Converted into ",convert,"'C");
document.write("<br><br><br>");



//Question 07
document.write("Question 07 <br>");
var price1 = 1250;
var price2 = 480;
var quantity1 = 5;
var quantity2 = 3;
var shipping = 250;
var TotalCost = (price1 * quantity1) + (price2 * quantity2) + shipping;
document.write("Total cost of Your order is : ",TotalCost);
document.write("<br><br><br>");



//Question 08
document.write("Question 08 <br>");
var physics = 88;
var maths = 70;
var chemistry = 81;
var totalmarks=300;
var totalobtained = physics+chemistry+maths;
var percent = totalobtained/totalmarks * 100;
document.write("Total marks: ",totalmarks,"<br>");
document.write("Marks Obtained: ",totalobtained,"<br>");
document.write("Percentage Obtained: ",percent,"%");
document.write("<br><br><br>");




//Question 09
document.write("Question 09 <br>");
var dollars=10;
var riyal=25;
var dol_to_pkr = 10 * 280;
var riyal_to_pkr = 25 * 35;
var totalrupee = dol_to_pkr + riyal_to_pkr;
document.write("Total Currency in PKR : ",totalrupee);
document.write("<br><br><br>");




//Question 10
document.write("Question 10 <br>");
var number = 20;
document.write("Initial Value is: ",number,"<br>");
document.write("Value after adding 5 , multiplying by 10 and divide by 2 is : ",(20+5)*10/2);
document.write("<br><br><br>");



//Question 11
document.write("Question 11 <br>");
var year = 2024;
var birthyear = 2004;
var age = year - birthyear;
document.write("Current Year: ",year,"<br>");
document.write("Birth Year: ",birthyear,"<br>");
document.write("Your Age: ",age);
document.write("<br><br><br>");




//Question 12
document.write("Question 12 <br>");
var radius = 12;
var circum = 2 * 3.124 * radius;
var area = 3.147 * radius**2;
document.write("Radius is:",radius,"<br> Circumference: ",circum,"<br>Area : ",area);
document.write("<br><br><br>");




//Question 13
document.write("Question 13 <br>");
var snack = "chocolate chip";
var current_age = 15;
var maxage = 65;
var lifedays = (maxage - current_age) * 365;
var snackconsume = 3;
var totalsnacks= lifedays*snackconsume;
document.write("You will need ",totalsnacks," packs of chocolate chip to last you until the ripe old age of ",maxage);
