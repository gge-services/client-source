Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RewardHubManagedListItemVO = require("gge-module:export_RewardHubManagedListItemVO");
var __dep_export_RewardHubTextsFactory = require("gge-module:export_RewardHubTextsFactory");
var __s0local0 = function (__s1param0) {
  function RewardHubManageAllDialogProperties() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.createDataVOs();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubManageAllDialogProperties, __s1param0);
  RewardHubManageAllDialogProperties.prototype.createDataVOs = function () {
    this._listItemVOs = [];
    if (__dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs) {
      var __s5local0;
      var __s5local1;
      for (var __s5local2 = 0; __s5local2 < __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs.length; __s5local2++) {
        __s5local1 = __dep_export_CastleModel.CastleModel.rewardHubData.rewardHubVOs[__s5local2];
        __s5local0 = new __dep_export_RewardHubManagedListItemVO.RewardHubManagedListItemVO(__s5local1, __dep_export_RewardHubTextsFactory.RewardHubTextsFactory.createRewardHubItemTextVO(__s5local1));
        this._listItemVOs.push(__s5local0);
      }
    }
  };
  RewardHubManageAllDialogProperties.prototype.updateItemVOs = function () {
    this.createDataVOs();
  };
  Object.defineProperty(RewardHubManageAllDialogProperties.prototype, "listItemVOs", {
    get: function () {
      return this._listItemVOs;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubManageAllDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.RewardHubManageAllDialogProperties = __s0local0;
