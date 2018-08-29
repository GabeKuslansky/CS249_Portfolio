'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routing = undefined;

var _express = require('express');

var router = (0, _express.Router)();

router.get('/', function (req, res) {
    res.send('hello');
});

var routing = exports.routing = router;
//# sourceMappingURL=routing.js.map