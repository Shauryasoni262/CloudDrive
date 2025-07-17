const express = require('express');
const authMiddleware = require('../middlewares/authe')
const router = express.Router();
const upload = require('./upload');
const fileModel = require('../models/files.models')

router.get('/home', authMiddleware, async (req, res) => {
  const userFiles = await fileModel.find({
user:req.user.userId
  })
  console.log(userFiles)
    res.render('home', {
        files: userFiles
    });
}); 

router.post('/upload-file', authMiddleware, upload.single('file'),async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

const newFile = await fileModel.create({
    path: req.file.path,
    originalname: req.file.originalname,
    user:req.user.userId
})
res.json(newFile)
});

router.get('/download/:path', authMiddleware,async (req,res) => {
const loggedIduserId = req.user.userId
//const path = req.params.path
const path = decodeURIComponent(req.params.path)

const file = await fileModel.findOne({
user: loggedIduserId,
path: path
})

if(!file){
  return res.status(401).json({
    messgae: 'unauthorized'
  })  
}

/*
const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
    action: 'read',
    expires: Date.now() + 60*1000
})
res.redirect(signedurl[ 0 ])
*/
 res.redirect(file.path);
})


module.exports = router;
