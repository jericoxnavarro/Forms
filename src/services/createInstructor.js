const Connection = require("../database/Connection");

module.exports = async (fname, lname, college, instructorid) => {
  try {
    const query = `INSERT INTO instructors (f_name, l_name, college, instructor_id) VALUES('${fname}',
    '${lname}','${college}','${instructorid}')`;
    console.log(query);
    await Connection(query);
    return true;
  } catch (err) {
    console.log("try catch: ", err);
    return false;
  }
};
