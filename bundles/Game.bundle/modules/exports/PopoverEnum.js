Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __s0local0 = function (__s1param0) {
  function PopoverEnum(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = this;
    __s3local0._id = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0, __dep_exact_9e901e8e2483a22f.BasicEnum.instantiationKey) || this)._id = __s3param1;
    __s3local0._veClass = __s3param2;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(PopoverEnum, __s1param0);
  PopoverEnum.getTypeById = function (__s5param0) {
    return this.getByProperty(PopoverEnum, "id", __s5param0, PopoverEnum.UNKNOWN);
  };
  Object.defineProperty(PopoverEnum.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PopoverEnum.prototype, "veClass", {
    get: function () {
      return this._veClass;
    },
    enumerable: true,
    configurable: true
  });
  PopoverEnum.__initialize_static_members = function () {
    PopoverEnum.UNKNOWN = new PopoverEnum("unknown", -1, null);
    PopoverEnum.AUTO_SELL_EQUIPMENT = new PopoverEnum("autoSellEquipment", __dep_exact_26a421b704832cff.PopoverConst.EQUIPMENT_SOLD, __dep_export_AutoSellEquipmentPopoverVE.AutoSellEquipmentPopoverVE);
    PopoverEnum.AUTO_SELL_GEM = new PopoverEnum("autoSellGem", __dep_exact_26a421b704832cff.PopoverConst.GEM_SOLD, __dep_export_AutoSellGemPopoverVE.AutoSellGemPopoverVE);
    PopoverEnum.REWARD_HUB_NOTIFICATION = new PopoverEnum("rewardHubNotification", __dep_exact_26a421b704832cff.PopoverConst.GEM_SOLD, __dep_export_RewardHubPopoverVE.RewardHubPopoverVE);
  };
  return PopoverEnum;
}(require("gge-module:export_CastleEnum").CastleEnum);
exports.PopoverEnum = __s0local0;
var __dep_export_AutoSellEquipmentPopoverVE = require("gge-module:export_AutoSellEquipmentPopoverVE");
var __dep_export_AutoSellGemPopoverVE = require("gge-module:export_AutoSellGemPopoverVE");
var __dep_export_RewardHubPopoverVE = require("gge-module:export_RewardHubPopoverVE");
__s0local0.__initialize_static_members();
