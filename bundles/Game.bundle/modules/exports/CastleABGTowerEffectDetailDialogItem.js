Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __s0local0 = function (__s1param0) {
  function CastleABGTowerEffectDetailDialogItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleABGTowerEffectDetailDialogItem, __s1param0);
  CastleABGTowerEffectDetailDialogItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    var __s5local0 = this.getItemMc();
    __s5local0.mc_c2.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.itxt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.itxt_value = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    this.itxt_cost = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local0.txt_cost, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
  };
  CastleABGTowerEffectDetailDialogItem.prototype.fill = function () {
    __s1param0.prototype.fill.call(this);
    this.itxt_level.textContentVO.numberValue = this.level;
    this.itxt_value.textContentVO.textReplacements = [this.towerEffectVO.getEffectValueForLevel(this.level)];
    this.itxt_cost.textContentVO.numberValue = this.towerEffectVO.getCostForLevel(this.level);
  };
  Object.defineProperty(CastleABGTowerEffectDetailDialogItem.prototype, "towerEffectVO", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleABGTowerEffectDetailDialogItem.prototype, "level", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return CastleABGTowerEffectDetailDialogItem;
}(require("gge-module:export_AInfiniteScrollListItem").AInfiniteScrollListItem);
exports.CastleABGTowerEffectDetailDialogItem = __s0local0;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
