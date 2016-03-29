'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('User');
var _ = require('lodash');

var schema = new mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    date: Date,
    fields: [mongoose.Schema.Types.Mixed]
});


mongoose.model('Entry', schema);