const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

router.post("/saveUser", (req, res) => {
    const user = new User(req.body);
    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/getUsers", (req, res) => {
    const query = User.find();
    User.find((err, doc) => {
        if (err) return res.json({ success: false, err });
        //console.log(doc);
        return res.status(200).send({
            success: true,
            doc
        });
    }).limit(50);
});

router.post("/deleteUser", (req, res) => {
    //const user = new User(req.body);
    console.log(req.body);
    User.findOneAndDelete({id:req.body},(err, doc) => {
        if (err) return res.json({ success: false, err });
        //console.log(doc);
        return res.status(200).send({
            success: true,
            doc
        });
    }).limit(50);
});

module.exports = router;
