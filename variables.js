// x="wolrd";
// console.log(`hello ${x}`);
// online=true; // boolian
// console.log(`bro is online: ${online}`);
//prompt("Yoooooo type whatever")
student= prompt("Are you a Student ? ").toLowerCase()
function check() {
fullname= document.getElementById("NAME").value
age= document.getElementById("AGE").value

    
if (student == "yes") {
    document.getElementById("p1").innerText = `Name of student: ${fullname}`;
    document.getElementById("p2").innerText = `age of student: ${age}`;
    document.getElementById("p3").innerText = `student: ${student}`;
} else {
    document.getElementById("p1").innerText = `student= ${fullname} Doesnt attent this school`
    
}
}
