const Connection = require("../database/Connection");

module.exports = async (
  subjectcode,
  subjectdescription,
  schedule,
  subjectid
) => {
  try {
    const query = `INSERT INTO subjects (subject_code, subject_description, schedule, subject_id) VALUES('${subjectcode}',
    '${subjectdescription}','${schedule}','${subjectid}')`;
    console.log(query);
    await Connection(query);
    return true;
  } catch (err) {
    console.log("try catch: ", err);
    return false;
  }
};
