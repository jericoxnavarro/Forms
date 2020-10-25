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
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "block";
});

instructorNav.addEventListener("click", () => {
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "block";
});

subjectsNav.addEventListener("click", () => {
  document.getElementById("grades-section").style.display = "none";
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "block";
});

gradesNav.addEventListener("click", () => {
  document.getElementById("instructor-section").style.display = "none";
  document.getElementById("student-section").style.display = "none";
  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("grades-section").style.display = "block";
});

const studenttable = document.getElementById("student-btn");
const instructortable = document.getElementById("instructor-btn");
const subjecttable = document.getElementById("subject-btn");
const gradetable = document.getElementById("grade-btn");

studenttable.addEventListener("click", () => {
  document.getElementById("instructors-table").style.display = "none";
  document.getElementById("students-table").style.display = "block";
});

instructortable.addEventListener("click", () => {
  document.getElementById("students-table").style.display = "none";
  document.getElementById("instructors-table").style.display = "block";
});
