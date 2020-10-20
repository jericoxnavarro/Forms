const Connection = require("../database/Connection");

module.exports = async (
  fname,
  mname,
  lname,
  number,
  address,
  course,
  college,
  section,
  studentid
) => {
  try {
    const query = `INSERT INTO students (f_name, m_name, l_name, phone_number, address, course, college, 
      section, student_id) VALUES('${fname}','${mname}','${lname}','${number}','${address}','${course}',
      '${college}','${section}','${studentid}')`;
    console.log(query);
    await Connection(query);
    return true;
  } catch (err) {
    console.log("try catch: ", err);
    return false;
  }
};
