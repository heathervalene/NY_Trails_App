// const multer = require('multer');

// // Set the storage engine
// const storage = multer.diskStorage({
//     destination: './uploads/',
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
//   });
  
//   // Initialize Multer
//   const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 } 
//   });

//   module.exports = {
//     upload
//   }