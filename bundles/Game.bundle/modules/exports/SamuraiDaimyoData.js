Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleBasicData = require("gge-module:export_CastleBasicData");
var __dep_export_SamuraiDaimyoDataServer = require("gge-module:export_SamuraiDaimyoDataServer");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._xml = new __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml();
    __s3local0._server = new __dep_export_SamuraiDaimyoDataServer.SamuraiDaimyoDataServer();
    __s3local0._xml.parseXml(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoData, __s1param0);
  Object.defineProperty(SamuraiDaimyoData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoData.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoData;
}(__dep_export_CastleBasicData.CastleBasicData);
exports.SamuraiDaimyoData = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable", "ICastleBasicData");
