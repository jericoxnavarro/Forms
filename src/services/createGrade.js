const Connection = require("../database/Connection");

module.exports = async (
  studentid,
  subjectid,
  instructorid,
  midterm,
  final,
  remarks,
  semester,
  schoolyear
) => {
  try {
    const query = `INSERT INTO grades (student_id, subject_id, instructor_id, mg, fg, remarks, semester, 
      school_year) VALUES('${studentid}','${subjectid}','${instructorid}','${midterm}','${final}','${remarks}',
      '${semester}','${schoolyear}')`;
    console.log(query);
    await Connection(query);
    return true;
  } catch (err) {
    console.log("try catch: ", err);
    return false;
  }
};
