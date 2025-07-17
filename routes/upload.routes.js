// /routes/upload.routes.js
const express = require('express');
const router = express.Router();
const upload = require('./upload');
//jh
const auth = require('../middlewares/authe'); 
const File = require('../models/files.models');
//jb


/*
router.post('/upload',auth, upload.single('file'),async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }



  res.json({
    message: "File uploaded successfully",
    cloudinaryUrl: req.file.path,
    fullFileObject: req.file
  });
});
*/

router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const newFile = new File({
      path: req.file.path,
      originalname: req.file.originalname,
      user: req.user.userId
    });

    await newFile.save();

    
    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile
    });


  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
