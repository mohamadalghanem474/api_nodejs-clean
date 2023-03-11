const asyncHandler = require('express-async-handler');
const fs = require('fs');
const ApiError = require('../apiError');
const User = require('../../models/userModel')

const now = new Date();
const cday = (`0${now.getDate()}`).slice(-2);;
const cmonth = (`0${now.getMonth() + 1}`).slice(-2);
const cyear = now.getFullYear();
const cc = `${cyear}-${cmonth}-${cday}`.toString();

exports.downloadBackup = asyncHandler(async (req, res, next) => {
  try {
    const filePath = `${__dirname}/${req.params.filename}`;
    res.download(
      filePath,
      req.params.filename);
    //res.status(200).json({status:`Success`});
  } catch (error) {
    return next(new ApiError('error with downloadBackup', 500));
  }
});

exports.BackUp = asyncHandler(async (req, res, next) => {
  const userData = await User.find().sort();
   //const txt = data.toString();
    fs.writeFileAsync(`${__dirname}/${cc}.txt`,userData.map(
      (v) => ({
        id: v.id,
        name: v.name,
        email: v.email,
        password: v.password,
        emailVerified: v.emailVerified,
        role: v.role,
        active: v.active,
        createdAt: v.createdAt
      })
    ).toString(), (err) => {
    if (err)
      console.log(err);
    else {
      //console.log("File written successfully\n");
      //console.log("The written has the following contents:");
      //console.log(fs.readFileSync(`${__dirname}/users.txt`, "utf8"));
    }
  });

  res.status(200).json({
    Date: cc,
    result: userData.map(
      (v) => ({
        id: v.id,
        name: v.name,
        email: v.email,
        password: v.password,
        emailVerified: v.emailVerified,
        role: v.role,
        active: v.active,
        createdAt: v.createdAt
      })
    )
  }
  );
}
);