'use strict';
let router = require('express').Router();
let Field = require('mongoose').model('Field');
module.exports = router;

router.route('/')
    .get((req, res, next) => {
        Field.find({})
            .then(fields => {
                res.json(fields);
            })
            .then(null, next);
    })
    .post((req, res, next) => {
        Field.create(req.body)
            .then(field => {
                res.status(201).json(field);
            })
            .then(null, next);
    })