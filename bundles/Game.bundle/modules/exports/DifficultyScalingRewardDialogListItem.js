Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_DifficultyScalingRewardDialogListItemHelper = require("gge-module:export_DifficultyScalingRewardDialogListItemHelper");
var __s0local0 = function (__s1param0) {
  function DifficultyScalingRewardDialogListItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("EventDifficultyRewardListItem"))(), __s3param1) || this;
    __s3local0._data = __s3param0;
    __s3local0.fill();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DifficultyScalingRewardDialogListItem, __s1param0);
  DifficultyScalingRewardDialogListItem.prototype.fill = function () {
    __dep_export_DifficultyScalingRewardDialogListItemHelper.DifficultyScalingRewardDialogListItemHelper.fillRewardMC(this.disp, this._data);
  };
  DifficultyScalingRewardDialogListItem.prototype.onClick = function (__s7param0) {
    __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target);
  };
  Object.defineProperty(DifficultyScalingRewardDialogListItem.prototype, "height", {
    get: function () {
      if (this._contentMC && this._contentMC.visible) {
        if (this._contentMC.mask) {
          return this._contentMC.y + this._contentMC.mask.height;
        } else {
          return this._contentMC.y;
        }
      } else if (this._headerMC) {
        return this._headerMC.height;
      } else {
        return 0;
      }
    },
    set: function (__s16param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ACollapsibleItem.ACollapsibleItem.prototype, "height").set.call(this, __s16param0);
    },
    enumerable: true,
    configurable: true
  });
  return DifficultyScalingRewardDialogListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.DifficultyScalingRewardDialogListItem = __s0local0;
