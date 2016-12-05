'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    this.username = config.username || 'root';
    this.password = config.password || '';
    this.database = config.database || 'mfw';
    this.options = {
      dialect: config.dialect || 'mysql',
      host: config.host || '127.0.0.1',
      port: config.port || '3306'
    };
    // const opt
    this.sequelize = null;
  }

  _createClass(_class, [{
    key: 'connect',
    value: function connect() {
      try {
        this.sequelize = new _sequelize2.default(this.database, this.username, this.password, this.options);
      } catch (err) {
        throw err;
      }
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      try {
        this.sequelize.close();
      } catch (err) {
        throw err;
      }
    }
  }]);

  return _class;
}();

exports.default = _class;