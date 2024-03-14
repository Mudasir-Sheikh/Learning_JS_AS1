//Question 01
document.write("Question 01 <br>");
var a = 10;
document.write("The Value of a is: ",a);
document.write("<br>The value of ++a is: ",++a);
document.write("<br>The value of a++ is: ",a++);
document.write("<br>Now the value of a is: ",a);
document.write("<br>The value of --a is: ",--a);
document.write("<br>The value of a-- is: ",a--);
document.write("<br>Final value of a is: ",a);
document.write("<br><br>")



//Question 02
document.write("Question 02 <br>");
var a_ = 2, b = 1;
document.write("a = ",a_,", b = ",b,"<br>")
var result = --a_ - --b + ++b + b--;
document.write("The result of operations --a - --b + ++b + b-- is ",result);
document.write("<br><br>")




//Question 03
document.write("Question 03 <br>");
var username = prompt("Enter your Name: ","Your Name");
document.write("Greetings ",username," Nice to meet You!");
document.write("<br><br>")




//Question 05
document.write("Question 05 <br>");
var tablenum = +prompt("Which Tablw You Need?","Table of 5(By Defeault)");
if (tablenum==null){
tablenum = 5;
document.write("Table of ",tablenum);
document.write("<br>",tablenum , " x 1 " , " = " , tablenum*1);
document.write("<br>",tablenum , " x 2 " , " = " , tablenum*2);
document.write("<br>",tablenum , " x 3 " , " = " , tablenum*3);
document.write("<br>",tablenum , " x 4 " , " = " , tablenum*4);
document.write("<br>",tablenum , " x 5 " , " = " , tablenum*5);
document.write("<br>",tablenum , " x 6 " , " = " , tablenum*6);
document.write("<br>",tablenum , " x 7 " , " = " , tablenum*7);
document.write("<br>",tablenum , " x 8 " , " = " , tablenum*8);
document.write("<br>",tablenum , " x 9 " , " = " , tablenum*9);
document.write("<br>",tablenum , " x 10 " , " = " , tablenum*10);
}
else{
document.write("Table of ",tablenum);
document.write("<br>",tablenum , " x 1 " , " = " , tablenum*1);
document.write("<br>",tablenum , " x 2 " , " = " , tablenum*2);
document.write("<br>",tablenum , " x 3 " , " = " , tablenum*3);
document.write("<br>",tablenum , " x 4 " , " = " , tablenum*4);
document.write("<br>",tablenum , " x 5 " , " = " , tablenum*5);
document.write("<br>",tablenum , " x 6 " , " = " , tablenum*6);
document.write("<br>",tablenum , " x 7 " , " = " , tablenum*7);
document.write("<br>",tablenum , " x 8 " , " = " , tablenum*8);
document.write("<br>",tablenum , " x 9 " , " = " , tablenum*9);
document.write("<br>",tablenum , " x 10 " , " = " , tablenum*10);
}



//Question 06
document.write("Question 05 <br>");
var sub1marks = +prompt(("Enter the Marks of Subject 1"));
var sub2marks = +prompt(("Enter the Marks of Subject 2"));
var sub3marks = +prompt(("Enter the Marks of Subject 3"));
var totalmarks = +prompt("Enter the Total Marks")
var summarks = sub1marks + sub2marks + sub3marks;
var percent = (summarks/totalmarks) * 100;
document.write("Total Marks: ",totalmarks,"<br>");
document.write("Obtained Marks: ",summarks,"<br>");
document.write("Percentage Obtained: ",percent,"%<br>");
document.write("<br><br>")
