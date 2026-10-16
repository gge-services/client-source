Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleSagaMapNodeVO() {
    this._active = 0;
    this._sagaMapID = 0;
    this._level = 0;
    this._legendLevel = 0;
    this._highlight = 0;
  }
  CastleSagaMapNodeVO.prototype.parseXML = function (__s5param0) {
    this._active = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("active", __s5param0, "0"));
    this._sagaMapID = parseInt(__s5param0.sagamapID || "");
    this._level = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("level", __s5param0, "0"));
    this._legendLevel = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("legendlevel", __s5param0, "0"));
    this._highlight = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("highlight", __s5param0, "0"));
    this.parseElements(__s5param0.elements || "");
    this._highlightType = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("highlightType", __s5param0, "");
  };
  CastleSagaMapNodeVO.prototype.parseElements = function (__s7param0) {
    this._unlocks = new __dep_export_CollectableList.CollectableList();
    if (__s7param0 != "") {
      var __s7local0 = __s7param0.split(",");
      if (__s7local0 != null) {
        for (var __s7local1 = 0, __s7local2 = __s7local0; __s7local1 < __s7local2.length; __s7local1++) {
          var __s7local3 = __s7local2[__s7local1];
          if (__s7local3 !== undefined) {
            var __s7local4 = new __dep_export_CollectableItemUnlockVO.CollectableItemUnlockVO();
            __s7local4.parseXmlObject(__s7local3);
            this._unlocks.addItem(__s7local4);
          }
        }
      }
    }
  };
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "active", {
    get: function () {
      return this._active;
    },
    enumerable: true,
    configurable: true
  });
  CastleSagaMapNodeVO.prototype.getId = function () {
    return this._sagaMapID;
  };
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "legendLevel", {
    get: function () {
      return this._legendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "highlight", {
    get: function () {
      return this._highlight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "highlightType", {
    get: function () {
      return this._highlightType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSagaMapNodeVO.prototype, "unlocks", {
    get: function () {
      return this._unlocks;
    },
    enumerable: true,
    configurable: true
  });
  CastleSagaMapNodeVO.__initialize_static_members = function () {
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_NONE = "";
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_UNLOCK = "unlock";
    CastleSagaMapNodeVO.HIGHLIGHT_TYPE_REMINDER = "reminder";
  };
  return CastleSagaMapNodeVO;
}();
exports.CastleSagaMapNodeVO = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CollectableItemUnlockVO = require("gge-module:export_CollectableItemUnlockVO");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
require("gge-module:exact_81dacdf05bd32292").classImplementsInterfaces(__s0local0, "ICastleXmlNode");
__s0local0.__initialize_static_members();
