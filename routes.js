require('dotenv').config();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');

router.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers 
router.use('/public', express.static(`${process.cwd()}/public`));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });
  
router.post("/api/fileanalyse", upload.single("upfile"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.file);
    data = {
        'name': req.file.fieldname,
        'type': req.file.mimetype,
        'size': req.file.size

    }
    res.json(data);
}

module.exports = router;