Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function AIsoViewObjectGroupSimpleList() {
    var __s3local0 = this;
    __s3local0._list = [];
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AIsoViewObjectGroupSimpleList, __s1param0);
  AIsoViewObjectGroupSimpleList.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.resetList();
  };
  AIsoViewObjectGroupSimpleList.prototype.resetList = function () {
    this._list = this.destroyAndCreateNewObjectList(this.list);
    this.isoRenderer.objects.invalidateCompleteObjectsList();
  };
  AIsoViewObjectGroupSimpleList.prototype.removeObjectByVE = function (__s9param0) {
    if (this.list != null) {
      for (var __s9local0 = 0, __s9local1 = this.list; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined && __s9local2 == __s9param0) {
          this.removeObjectFromList(__s9local2, this.list);
          break;
        }
      }
    }
  };
  AIsoViewObjectGroupSimpleList.prototype.render = function (__s15param0 = false) {
    if (this.list != null) {
      for (var __s15local0 = 0, __s15local1 = this.list; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          __s15local2.updateDisp();
        }
      }
    }
  };
  AIsoViewObjectGroupSimpleList.prototype.containsObject = function (__s21param0) {
    return this.list.indexOf(__s21param0) >= 0;
  };
  AIsoViewObjectGroupSimpleList.prototype.fillInCompleteList = function (__s23param0) {
    if (this.list != null) {
      for (var __s23local0 = 0, __s23local1 = this.list; __s23local0 < __s23local1.length; __s23local0++) {
        var __s23local2 = __s23local1[__s23local0];
        if (__s23local2 !== undefined) {
          __s23param0.push(__s23local2);
        }
      }
    }
  };
  Object.defineProperty(AIsoViewObjectGroupSimpleList.prototype, "list", {
    get: function () {
      return this._list;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewObjectGroupSimpleList;
}(require("gge-module:export_AIsoViewObjectGroup").AIsoViewObjectGroup);
exports.AIsoViewObjectGroupSimpleList = __s0local0;
