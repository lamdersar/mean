'use strict';

// Articles routes use articles controller
var entries = require('../controllers/entries');
var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.entry.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/entries', entries.all);
    app.post('/entries', authorization.requiresLogin, entries.create);
    app.get('/entries/:entryId', entries.show);
    app.put('/entries/:entryId', authorization.requiresLogin, hasAuthorization, entries.update);
    app.del('/entries/:entryId', authorization.requiresLogin, hasAuthorization, entries.destroy);

    // Finish with setting up the articleId param
    app.param('entryId', entries.entry);

};
