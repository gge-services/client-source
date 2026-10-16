Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function EventPackageCategoryFilterRelationVO() {}
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "relationID", {
    get: function () {
      return this._relationID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "categoryID", {
    get: function () {
      return this._categoryID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "filterID", {
    get: function () {
      return this._filterID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventPackageCategoryFilterRelationVO.prototype, "subFilterID", {
    get: function () {
      return this._subFilterID;
    },
    enumerable: true,
    configurable: true
  });
  EventPackageCategoryFilterRelationVO.prototype.fillFromParamXML = function (__s13param0) {
    this._relationID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("relationID", __s13param0, "-1", true));
    this._categoryID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("categoryID", __s13param0, "-1", true));
    this._filterID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("filterID", __s13param0, "-1", true));
    this._subFilterID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("subFilterID", __s13param0, "-1", false));
  };
  return EventPackageCategoryFilterRelationVO;
}();
exports.EventPackageCategoryFilterRelationVO = __s0local0;
