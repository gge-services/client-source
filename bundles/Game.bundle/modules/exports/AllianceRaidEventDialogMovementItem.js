Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventDialogMovementItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventDialogMovementItem, __s1param0);
  AllianceRaidEventDialogMovementItem.prototype.fill = function () {
    var __s5local0 = this.movementVO.movementOwnerInfo.allianceRank;
    var __s5local1 = this.movementVO.movementOwnerInfo.playerName;
    this.getItemMc().icon_rank.gotoAndStop(__s5local0 + 1);
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s5local1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.itxt_timer = __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.getItemMc().txt_timer, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    this.updateRemainingTime();
  };
  AllianceRaidEventDialogMovementItem.prototype.updateRemainingTime = function () {
    if (this.isVisible && this.itxt_timer && this.itxt_timer.textContentVO && this.movementVO) {
      this.itxt_timer.textContentVO.stringValue = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getShortTimeString(this.movementVO.getTimeUnitMovmentReachTargetInSeconds());
    }
  };
  AllianceRaidEventDialogMovementItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
  };
  Object.defineProperty(AllianceRaidEventDialogMovementItem.prototype, "movementVO", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventDialogMovementItem;
}(require("gge-module:export_AInfiniteScrollListItem").AInfiniteScrollListItem);
exports.AllianceRaidEventDialogMovementItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
