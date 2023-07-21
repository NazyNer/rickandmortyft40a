const allowedUser = require("../utils/allowedUsers")

function login(req, res){

  const {email, password} = req.query;
  let access = false;
  allowedUser.forEach((user) => {
    if(user.email === email && user.password === Number(password))
    {
      access = true;
    }
  });
  return res.json({ access })
}

module.exports = {
  login,
};