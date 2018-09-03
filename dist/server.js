'use strict';

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _routing = require('./modules/routing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var server = new _http.Server(app);

app.use(_routing.routing);

var port = process.env.PORT || _config2.default.get('port');
server.listen(port, function () {
  console.log('CS249 Portfolio running on port ' + port + ', press ^C to exit.');
});
//# sourceMappingURL=server.js.map