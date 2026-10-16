Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = function (__s1param0) {
  function CastleSagaMapData(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.parseXML(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSagaMapData, __s1param0);
  CastleSagaMapData.prototype.getXmlList = function (__s5param0) {
    return __s5param0.sagamaps;
  };
  CastleSagaMapData.prototype.getNewNode = function () {
    return new __dep_export_CastleSagaMapNodeVO.CastleSagaMapNodeVO();
  };
  return CastleSagaMapData;
}(require("gge-module:export_CastleXmlData").CastleXmlData);
exports.CastleSagaMapData = __s0local0;
var __dep_export_CastleSagaMapNodeVO = require("gge-module:export_CastleSagaMapNodeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
