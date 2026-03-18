const calculateAverage = (a,b,c) => (a+b+c)/3;

function calculate(){

let name = document.getElementById("name").value;
let m1 = Number(document.getElementById("m1").value);
let m2 = Number(document.getElementById("m2").value);
let m3 = Number(document.getElementById("m3").value);

let total = m1 + m2 + m3;
let avg = calculateAverage(m1,m2,m3);

document.getElementById("result").innerHTML =
`Student Name: ${name} <br>
Total Marks: ${total} <br>
Average Marks: ${avg.toFixed(2)}`;

}