Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleRandomDungeonWinDialogProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.lootC2 = 0;
    __s3local0.dungeonProtectionTime = 0;
    __s3local0.skinID = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).skinID = __dep_exact_f855840627e6e145.int(__s3param0.SID);
    __s3local0.lootC2 = __dep_exact_f855840627e6e145.int(__s3param0.C2);
    __s3local0.dungeonProtectionTime = __dep_exact_f855840627e6e145.int(__s3param0.DPT);
    __s3local0.rewards = __dep_export_CastleModel.CastleModel.rewardData.getListById(__s3param0.RID);
    if (__s3local0.lootC2 > 0) {
      __s3local0.rewards.addItem(new __dep_export_CollectableItemC2VO.CollectableItemC2VO(__s3local0.lootC2));
    }
    if (__s3local0.dungeonProtectionTime > 0) {
      __s3local0.rewards.addItem(new __dep_export_CollectableItemDungeonProtectionVO.CollectableItemDungeonProtectionVO(__s3local0.dungeonProtectionTime));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRandomDungeonWinDialogProperties, __s1param0);
  return CastleRandomDungeonWinDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleRandomDungeonWinDialogProperties = __s0local0;
var __dep_export_CollectableItemC2VO = require("gge-module:export_CollectableItemC2VO");
var __dep_export_CollectableItemDungeonProtectionVO = require("gge-module:export_CollectableItemDungeonProtectionVO");
