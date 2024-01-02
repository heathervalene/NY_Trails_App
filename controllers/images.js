// const upload = require('../upload')




// async function getImage(req,res) {
//      try {
//         const file= req.file;
//         res.render('/myHikes', {
//             filename: file.filename,
//             path: path.join(__dirname, '../uploads/', file.filename)
//           });
//      } catch (err) {
//         console.error('Error in renderImageView:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//      }
//  }

//  module.exports = {
//     getImage
//  }