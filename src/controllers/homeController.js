const express = require('express');
const connection = require('../config/database/');

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getSer = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email = ", email, "name = ", name, "city = ", city)

    connection.query(
        `INSERT INTO User ( email, name, city)
        VALUES ( ? , ? , ? )`
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('Created user succeed');
        }
    )
}
module.exports = {
    getHomepage, getSer, postCreateUser
}