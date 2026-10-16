Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function TutorialStepVO() {
    this._id = 0;
  }
  TutorialStepVO.prototype.parseData = function (__s5param0) {
    this._attributes = new Map();
    this._id = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("tutorialStepID", __s5param0, "-1"));
    this._command = __dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("action", __s5param0, "");
    for (var __s5local0 = 0, __s5local1 = Object.keys(__s5param0); __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (["id", "action"].indexOf(__s5local2) == -1) {
        var __s5local3 = __s5param0[__s5local2];
        this._attributes.set(__s5local2, __s5local3);
      }
    }
    return this;
  };
  Object.defineProperty(TutorialStepVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialStepVO.prototype, "command", {
    get: function () {
      return this._command;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialStepVO.prototype, "attributes", {
    get: function () {
      return this._attributes;
    },
    enumerable: true,
    configurable: true
  });
  TutorialStepVO.prototype.getIntAttribute = function (__s16param0, __s16param1) {
    if (this._attributes.has(__s16param0)) {
      return parseInt(this._attributes.get(__s16param0));
    } else {
      return __s16param1;
    }
  };
  return TutorialStepVO;
}();
exports.TutorialStepVO = __s0local0;
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
