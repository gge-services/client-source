Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function AIsoDataObjectGroupSimpleList() {
    var __s3local0 = this;
    __s3local0._list = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoDataObjectGroupSimpleList, __s1param0);
  AIsoDataObjectGroupSimpleList.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.resetList();
  };
  AIsoDataObjectGroupSimpleList.prototype.resetList = function () {
    this._list = __dep_export_IsoHelper.IsoHelper.data.destroyAndCreateNewVOList(this.list);
  };
  AIsoDataObjectGroupSimpleList.prototype.addObject = function (__s9param0) {
    if (__s9param0) {
      this.list.push(__s9param0);
    }
  };
  AIsoDataObjectGroupSimpleList.prototype.removeObject = function (__s12param0) {
    var __s12local0 = __dep_exact_f855840627e6e145.int(this.list.indexOf(__s12param0));
    if (__s12local0 >= 0) {
      this.destroyObject(__s12param0);
      this.list.splice(__s12local0, 1);
    }
  };
  AIsoDataObjectGroupSimpleList.prototype.containsObjectById = function (__s15param0) {
    if (__s15param0 < 0) {
      return false;
    }
    if (this.list != null) {
      for (var __s15local0 = 0, __s15local1 = this.list; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined && __s15local2.objectId == __s15param0) {
          return true;
        }
      }
    }
    return false;
  };
  AIsoDataObjectGroupSimpleList.prototype.containsObject = function (__s22param0) {
    return !!__s22param0 && this.list.indexOf(__s22param0) >= 0;
  };
  AIsoDataObjectGroupSimpleList.prototype.fillInCompleteList = function (__s24param0) {
    if (this.list != null) {
      for (var __s24local0 = 0, __s24local1 = this.list; __s24local0 < __s24local1.length; __s24local0++) {
        var __s24local2 = __s24local1[__s24local0];
        if (__s24local2 !== undefined) {
          __s24param0.push(__s24local2);
        }
      }
    }
  };
  Object.defineProperty(AIsoDataObjectGroupSimpleList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoDataObjectGroupSimpleList;
}(require("gge-module:export_AIsoDataObjectGroup").AIsoDataObjectGroup);
exports.AIsoDataObjectGroupSimpleList = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
