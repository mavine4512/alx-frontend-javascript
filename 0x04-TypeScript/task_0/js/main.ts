interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Mark",
    lastName: "Doe",
    age: 25,
    location: "Lagos State",
};

const student2: Student ={
    firstName: "Jane",
    lastName: "Kings",
    age: 23,
    location: "Kenya",
};

const studentsList: Student[] = [student1, student2];

function renderTable(){
    const table = document.createElement("table");
    studentsList.forEach((student)=>{
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.innerHTML = student.firstName;
        const locationCall = row.insertCell();
        locationCall.innerHTML = student.location;
    });
    document.body.appendChild(table);
}

renderTable();