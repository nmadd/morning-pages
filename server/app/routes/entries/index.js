'use strict';
let router = require('express').Router();
let Entry = require('mongoose').model('Entry');
module.exports = router;

router.route('/')
    .get((req, res, next) => {
        Entry.find({})
            .sort('-date')
            .then(entries => {
                res.json(entries);
            })
            .then(null, next);
    })
    .post((req, res, next) => {
        console.log('req body', req.body);
        Entry.create(req.body)
            .then(entry => {
                res.status(201).json(entry);
            })
            .then(null, next);
    })