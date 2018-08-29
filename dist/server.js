'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _routing = require('./modules/routing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var server = new _http.Server(app);

app.use(_routing.routing);

server.listen(3000);
//# sourceMappingURL=server.js.map