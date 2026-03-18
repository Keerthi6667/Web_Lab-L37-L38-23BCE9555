function showStudent() {

    let id = Number(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let department = document.getElementById("dept").value;
    let marks = Number(document.getElementById("marks").value);

    const student = {
        id,
        name,
        department,
        marks
    };

    const { id: sid, name: sname, department: sdept, marks: smarks } = student;

    let output = `
        <strong>Original Data:</strong><br>
        ID: ${sid} <br>
        Name: ${sname} <br>
        Department: ${sdept} <br>
        Marks: ${smarks} <br><br>
    `;

    let grade;
    if (smarks >= 90) grade = "A";
    else if (smarks >= 75) grade = "B";
    else grade = "C";

    const updatedStudent = {
        ...student,
        grade: grade
    };
    
    output += `
        <strong>Updated Data:</strong><br>
        <pre>${JSON.stringify(updatedStudent, null, 2)}</pre>
    `;

    document.getElementById("output").innerHTML = output;
}