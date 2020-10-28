$(document).ready(function () {
  $("#gradesform").submit(function (event) {
    event.preventDefault();
    var grade = {
      studentid: document.getElementById("studentid-grade").value,
      subjectid: document.getElementById("subjectid-grade").value,
      instructorid: document.getElementById("instructorid-grade").value,
      midterm: document.getElementById("midterm").value,
      final: document.getElementById("final").value,
      remarks: document.getElementById("remarks").value,
      semester: document.getElementById("semester").value,
      schoolyear: document.getElementById("schoolyear").value,
    };

    $.post("/grade/add", grade, function (data) {
      alert(data.message);
    });
  });
  $("#studentform").submit(function (event) {
    event.preventDefault();
    var student = {
      fname: document.getElementById("fname").value,
      mname: document.getElementById("mname").value,
      lname: document.getElementById("lname").value,
      number: document.getElementById("number").value,
      address: document.getElementById("address").value,
      course: document.getElementById("course").value,
      college: document.getElementById("college").value,
      section: document.getElementById("section").value,
      studentid: document.getElementById("studentid").value,
    };

    $.post("/student/add", student, function (data) {
      alert(data.message);
    });
  });
  $("#instructorform").submit(function (event) {
    event.preventDefault();
    var instrctor = {
      fname: document.getElementById("fname-instructor").value,
      lname: document.getElementById("lname-instructor").value,
      college: document.getElementById("college-instructor").value,
      instructorid: document.getElementById("instructorid").value,
    };

    $.post("/instructor/add", instrctor, function (data) {
      alert(data.message);
    });
  });
  $("#subjectform").submit(function (event) {
    event.preventDefault();
    var subject = {
      subjectcode: document.getElementById("subjectcode").value,
      subjectdescription: document.getElementById("subjectdescription").value,
      schedule: document.getElementById("schedule").value,
      subjectid: document.getElementById("subjectid").value,
    };

    $.post("/subject/add", subject, function (data) {
      alert(data.message);
    });
  });
});

const studentNav = document.getElementById("student");
const instructorNav = document.getElementById("instructor");
const subjectsNav = document.getElementById("subjects");
const gradesNav = document.getElementById("grades");
const tablesNav = document.getElementById("tables");

studentNav.addEventListener("click", () => {
  document.getElementById("table-section").style.display = "none";
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "block";
});

instructorNav.addEventListener("click", () => {
  document.getElementById("table-section").style.display = "none";
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "block";
});

subjectsNav.addEventListener("click", () => {
  document.getElementById("table-section").style.display = "none";
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "block";
});

gradesNav.addEventListener("click", () => {
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("table-section").style.display = "none";
  document.getElementById("grades-section").style.display = "block";
});

tablesNav.addEventListener("click", () => {
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("table-section").style.display = "block";
});

const studenttable = document.getElementById("student-btn");
const instructortable = document.getElementById("instructor-btn");
const subjecttable = document.getElementById("subject-btn");
const gradetable = document.getElementById("grade-btn");

studenttable.addEventListener("click", () => {
  document.getElementById("instructors-table").style.display = "none";
  document.getElementById("grades-table").style.display = "none";
  document.getElementById("subjects-table").style.display = "none";
  document.getElementById("students-table").style.display = "block";

  instructortable.style.backgroundColor = "#418cd4";
  subjecttable.style.backgroundColor = "#418cd4";
  gradetable.style.backgroundColor = "#418cd4";
  studenttable.style.backgroundColor = "#ff9cda";
});

instructortable.addEventListener("click", () => {
  document.getElementById("students-table").style.display = "none";
  document.getElementById("grades-table").style.display = "none";
  document.getElementById("subjects-table").style.display = "none";
  document.getElementById("instructors-table").style.display = "block";

  instructortable.style.backgroundColor = "#ff9cda";
  subjecttable.style.backgroundColor = "#418cd4";
  gradetable.style.backgroundColor = "#418cd4";
  studenttable.style.backgroundColor = "#418cd4";
});

subjecttable.addEventListener("click", () => {
  document.getElementById("students-table").style.display = "none";
  document.getElementById("grades-table").style.display = "none";
  document.getElementById("instructors-table").style.display = "none";
  document.getElementById("subjects-table").style.display = "block";

  instructortable.style.backgroundColor = "#418cd4";
  subjecttable.style.backgroundColor = "#ff9cda";
  gradetable.style.backgroundColor = "#418cd4";
  studenttable.style.backgroundColor = "#418cd4";
});

gradetable.addEventListener("click", () => {
  document.getElementById("students-table").style.display = "none";
  document.getElementById("subjects-table").style.display = "none";
  document.getElementById("instructors-table").style.display = "none";
  document.getElementById("grades-table").style.display = "block";

  instructortable.style.backgroundColor = "#418cd4";
  subjecttable.style.backgroundColor = "#418cd4";
  gradetable.style.backgroundColor = "#ff9cda";
  studenttable.style.backgroundColor = "#418cd4";
});

function getTableStudent(event) {
  const tbody = document.getElementById("tbody-students");
  tbody.innerHTML = "";
  let start = event * 6 - 6;
  let end = event * 6;
  let localStudent = JSON.parse(localStorage.getItem("localStudent"));
  for (start; start < end; start++) {
    let trBody = document.createElement("tr");
    trBody.className = "tr-body";
    let td1 = document.createElement("td");
    td1.innerHTML = `${localStudent[start]._id}`;
    trBody.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = `${localStudent[start].f_name} ${localStudent[start].m_name} ${localStudent[start].l_name}`;
    trBody.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = `${localStudent[start].phone_number}`;
    trBody.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = `${localStudent[start].address}`;
    trBody.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = `${localStudent[start].college}`;
    trBody.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerHTML = `${localStudent[start].course}`;
    trBody.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerHTML = `${localStudent[start].section}`;
    trBody.appendChild(td7);

    let td8 = document.createElement("td");
    td8.innerHTML = `${localStudent[start].student_id}`;
    trBody.appendChild(td8);

    tbody.appendChild(trBody);
  }
}

function getTableInstructor(event) {
  const tbody = document.getElementById("tbody-instructors");
  tbody.innerHTML = "";
  let start = event * 6 - 6;
  let end = event * 6;
  let localInstructor = JSON.parse(localStorage.getItem("localInstructor"));
  for (start; start < end; start++) {
    let trBody = document.createElement("tr");
    trBody.className = "tr-body";
    let td1 = document.createElement("td");
    td1.innerHTML = `${localInstructor[start]._id}`;
    trBody.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = `${localInstructor[start].f_name}`;
    trBody.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = `${localInstructor[start].l_name}`;
    trBody.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = `${localInstructor[start].college}`;
    trBody.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = `${localInstructor[start].instructor_id}`;
    trBody.appendChild(td5);

    tbody.appendChild(trBody);
  }
}

function getTableSubjects(event) {
  const tbody = document.getElementById("tbody-subjects");
  tbody.innerHTML = "";
  let start = event * 6 - 6;
  let end = event * 6;
  let localSubject = JSON.parse(localStorage.getItem("localSubject"));
  for (start; start < end; start++) {
    let trBody = document.createElement("tr");
    trBody.className = "tr-body";
    let td1 = document.createElement("td");
    td1.innerHTML = `${localSubject[start]._id}`;
    trBody.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = `${localSubject[start].subject_code}`;
    trBody.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = `${localSubject[start].subject_description}`;
    trBody.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = `${localSubject[start].schedule}`;
    trBody.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = `${localSubject[start].subject_id}`;
    trBody.appendChild(td5);

    tbody.appendChild(trBody);
  }
}

function getTableGrades(event) {
  const tbody = document.getElementById("tbody-grades");
  tbody.innerHTML = "";
  let start = event * 6 - 6;
  let end = event * 6;
  let localGrade = JSON.parse(localStorage.getItem("localGrade"));
  for (start; start < end; start++) {
    let trBody = document.createElement("tr");
    trBody.className = "tr-body";
    let td1 = document.createElement("td");
    td1.innerHTML = `${localGrade[start].student_id}`;
    trBody.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = `${localGrade[start].subject_id}`;
    trBody.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = `${localGrade[start].instructor_id}`;
    trBody.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerHTML = `${localGrade[start].mg}`;
    trBody.appendChild(td4);

    let td5 = document.createElement("td");
    td5.innerHTML = `${localGrade[start].fg}`;
    trBody.appendChild(td5);

    let td6 = document.createElement("td");
    td6.innerHTML = `${localGrade[start].remarks}`;
    trBody.appendChild(td6);

    let td7 = document.createElement("td");
    td7.innerHTML = `${localGrade[start].semester}`;
    trBody.appendChild(td7);

    let td8 = document.createElement("td");
    td8.innerHTML = `${localGrade[start].school_year}`;
    trBody.appendChild(td8);

    tbody.appendChild(trBody);
  }
}
