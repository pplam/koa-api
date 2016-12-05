'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (sequelize) {
  var basename = _path2.default.basename(module.filename);
  var models = {};
  _fs2.default.readdirSync(__dirname).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  }).forEach(function (file) {
    var model = sequelize.import(_path2.default.join(__dirname, file));
    models[model.name] = model;
  });

  Object.keys(models).forEach(function (modelName) {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  return models;
};