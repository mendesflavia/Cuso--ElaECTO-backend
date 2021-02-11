const { response } = require('express');
const express = require('express');
const router = express.Router();

//router.METHOD(CAMINHO), HANDLER)//
router.get("/",(_, response)=>{
    response.send('Hello World')
});

module.exports = router;