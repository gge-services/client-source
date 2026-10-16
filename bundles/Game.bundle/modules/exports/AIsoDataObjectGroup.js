Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_Iso = require("gge-module:export_Iso");
var __s0local0 = function () {
  function AIsoDataObjectGroup() {}
  AIsoDataObjectGroup.prototype.init = function (__s5param0) {
    this._isoData = __s5param0;
  };
  AIsoDataObjectGroup.prototype.destroy = function () {};
  AIsoDataObjectGroup.prototype.initObjects = function () {};
  AIsoDataObjectGroup.prototype.addObject = function (__s11param0) {};
  AIsoDataObjectGroup.prototype.updateObjectByServer = function (__s13param0, __s13param1) {
    return null;
  };
  AIsoDataObjectGroup.prototype.removeObject = function (__s15param0) {};
  AIsoDataObjectGroup.prototype.isObjectForThisList = function (__s17param0) {
    return __s17param0.objectType.groupType == this.groupType;
  };
  AIsoDataObjectGroup.prototype.containsObject = function (__s19param0) {
    return false;
  };
  AIsoDataObjectGroup.prototype.containsObjectById = function (__s21param0) {
    return false;
  };
  AIsoDataObjectGroup.prototype.fillInCompleteList = function (__s23param0) {};
  AIsoDataObjectGroup.prototype.parseGCA = function (__s25param0) {};
  Object.defineProperty(AIsoDataObjectGroup.prototype, "isoData", {
    get: function () {
      return __dep_export_Iso.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  AIsoDataObjectGroup.prototype.destroyObject = function (__s29param0) {
    if (__s29param0) {
      __s29param0.destroy();
    }
    return null;
  };
  Object.defineProperty(AIsoDataObjectGroup.prototype, "groupType", {
    get: function () {
      return this._groupType;
    },
    set: function (__s34param0) {
      this._groupType = __s34param0;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoDataObjectGroup;
}();
exports.AIsoDataObjectGroup = __s0local0;
