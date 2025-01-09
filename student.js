var stu_id = parseInt(prompt("Enter student id"));
var stu_name =prompt("Enter student name");
var stu_m1 = parseInt(prompt("Enter student Mark1"));
var stu_m2 = parseInt(prompt("Enter student Mark2"));
var stu_m3 = parseInt(prompt("Enter student Mark3"));
var stu_m4 = parseInt(prompt("Enter student Mark4"));
var stu_m5 = parseInt(prompt("Enter student Mark5"));
var stu_total = stu_m1+stu_m2+stu_m3+stu_m4+stu_m5;
var stu_per = (stu_total*100/500);

document.write("Student Id:"+" "+stu_id +"<br>");
document.write("Student Name:"+" "+stu_name+"<br>");
document.write("Mark1:"+" "+stu_m1+"<br>");
document.write("Mark2:"+" "+stu_m2+"<br>");
document.write("Mark3:"+" "+stu_m3+"<br>");
document.write("Mark4:"+" "+stu_m4+"<br>");
document.write("Mark5:"+" "+stu_m5+"<br>");
document.write("Total ="+" "+stu_total+"<br>");
document.write("Percentage ="+" "+stu_per+"%");

if(stu_per>90)
{
    alert("A - Grade")
    document.write("<h1 style='color:yellow'>A - Grade</h1>")
}
else if(stu_per>80)
{
    alert("B - Grade")
    document.write("<h1 style='color:yellow'>B - Grade</h1>")
}
else if(stu_per>70)
{
    alert("C - Grade")
    document.write("<h1 style='color:yellow'>C - Grade</h1>")
}
else if(stu_per>60)
{
    alert("D - Grade")
    document.write("<h1 style='color:yellow'>D - Grade</h1>")
}
else if(stu_per>50)
{
    alert("E - Grade")
    document.write("<h1 style='color:yellow'>E - Grade</h1>")
}
else 
{
    alert("Fail")
    document.write("<h1 style='color:yellow'>Fail</h1>")
}
