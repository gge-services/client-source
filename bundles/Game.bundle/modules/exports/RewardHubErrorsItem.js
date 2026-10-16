Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function RewardHubErrorsItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubErrorsItem, __s1param0);
  RewardHubErrorsItem.prototype.fill = function () {
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.data.infoTextId));
  };
  Object.defineProperty(RewardHubErrorsItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubErrorsItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.RewardHubErrorsItem = __s0local0;
