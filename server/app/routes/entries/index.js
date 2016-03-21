'use strict';
let router = require('express').Router();
let Song = require('mongoose').model('Entry');
module.exports = router;

router.route('/')
    .get((req, res, next) => {
        Entry.find({})
            .then(entries => {
                res.json(entries);
            })
            .then(null, next);
    })
    .post((req, res, next) => {
        Entry.create(req.body)
            .then(entry => {
                res.status(201).json(entry);
            })
            .then(null, next);
    })