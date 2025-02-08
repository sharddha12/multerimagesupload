const multer=require ('multer');
const path=require('path');
const userImage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/profilepic");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
exports.uploaduserimage=multer({storage:userImage}).single("image");

const userCitizenship = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/profilepic");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
exports.userCitizenship=multer({storage:userCitizenship}).single("photo");

const studentCitizenship = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/scitizenship");
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
exports.studentCitizenship=multer({storage:studentCitizenship}).single("picture");





