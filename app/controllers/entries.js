'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Entry = mongoose.model('Entry'),
    _ = require('lodash');


/**
 * Find article by id
 */

exports.entry = function(req, res, next, id) {
    Entry.load(id, function(err, entry) {
        if (err) return next(err);
        if (!entry) return next(new Error('Failed to load entry ' + id));
        req.entry = entry;
        next();
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var entry = new Entry(req.body);
    entry.user = req.user;

    entry.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                entry: entry
            });
        } else {
            res.jsonp(entry);
        }
    });
};

/**
 * Update a article
 */
exports.update = function(req, res) {
    var entry = req.entry;

    entry = _.extend(entry, req.body);

    entry.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                entry: entry
            });
        } else {
            res.jsonp(entry);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var entry = req.entry;

    entry.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                entry: entry
            });
        } else {
            res.jsonp(entry);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.entry);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Entry.find().sort('-created').populate('user', 'name username').exec(function(err, entries) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(entries);
        }
    });
};
