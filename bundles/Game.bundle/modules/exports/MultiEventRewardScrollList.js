Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_SliderItemScrollList = require("gge-module:export_SliderItemScrollList");
var __s0local0 = function (__s1param0) {
  function MultiEventRewardScrollList(__s3param0, __s3param1, __s3param2) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MultiEventRewardScrollList, __s1param0);
  Object.defineProperty(MultiEventRewardScrollList.prototype, "scrollItemClass", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_SliderItemScrollList.SliderItemScrollList.prototype, "scrollItemClass").get.call(this);
    },
    set: function (__s7param0) {
      this._itemVEList ||= [];
      for (var __s7local0, __s7local1 = 0; (__s7local0 = this._componentDisp.getChildByName(this.scrollInstanceName + __s7local1)) != null;) {
        this._itemVEList.push(new __s7param0(__s7local0));
        __s7local1++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
    },
    enumerable: true,
    configurable: true
  });
  return MultiEventRewardScrollList;
}(__dep_export_SliderItemScrollList.SliderItemScrollList);
exports.MultiEventRewardScrollList = __s0local0;
