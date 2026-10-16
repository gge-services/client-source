Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function OfficersSchoolUnlockedItems() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OfficersSchoolUnlockedItems, __s1param0);
  OfficersSchoolUnlockedItems.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.itemMc.unit_mc0.btn_info, this.itemMc.unit_mc1.btn_info, this.itemMc.unit_mc2.btn_info, this.itemMc.unit_mc3.btn_info], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
  };
  OfficersSchoolUnlockedItems.prototype.fill = function () {
    for (var __s7local0 = 0; __s7local0 < 4; __s7local0++) {
      var __s7local1 = this.itemMc["unit_mc" + __s7local0];
      if (__s7local0 < this.wodIDs.length) {
        __s7local1.visible = true;
        __dep_export_WodPicHelper.WodPicHelper.addUnitPic(__dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.wodIDs[__s7local0]), __s7local1.mc_icon, 130, 130, __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[0], __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo[1]);
        __s7local1.mc_icon.mouseChildren = false;
        __s7local1.mc_icon.toolTipText = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(this.wodIDs[__s7local0]).getNameString();
        var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.officerSchoolData.getUnlockBuildingWodIDByUnitWodID(this.wodIDs[__s7local0]));
        var __s7local3 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s7local2);
        var __s7local4 = __dep_exact_81dacdf05bd32292_1.castAs(__dep_export_CastleModel.CastleModel.areaData.activeArea.isoData.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.OFFICER_SCHOOL), "OfficersSchoolBuildingVO");
        var __s7local5 = !__s7local4 || __s7local3.level > __s7local4.level;
        __s7local1.mc_locked.visible = __s7local5;
        __s7local1.mc_locked.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_trainingProgram_unitUnlock_lock_tooltip", [__s7local3.level]);
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s7local1.mc_text.txt_copy, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s7local5 ? "dialog_trainingProgram_unitUnlock_lock" : "dialog_trainingProgram_unitUnlock_unlock"));
      } else {
        __s7local1.visible = false;
      }
    }
  };
  Object.defineProperty(OfficersSchoolUnlockedItems.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  OfficersSchoolUnlockedItems.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target)) {
      __s1param0.prototype.onClick.call(this, __s15param0);
      switch (__s15param0.target) {
        case this.itemMc.unit_mc0.btn_info:
          this.openInfoForWod(this.wodIDs[0]);
          break;
        case this.itemMc.unit_mc1.btn_info:
          this.openInfoForWod(this.wodIDs[1]);
          break;
        case this.itemMc.unit_mc2.btn_info:
          this.openInfoForWod(this.wodIDs[2]);
          break;
        case this.itemMc.unit_mc3.btn_info:
          this.openInfoForWod(this.wodIDs[3]);
      }
    }
  };
  OfficersSchoolUnlockedItems.prototype.openInfoForWod = function (__s19param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(new __dep_export_CollectableItemUnitVO.CollectableItemUnitVO(__s19param0).unitVO));
  };
  Object.defineProperty(OfficersSchoolUnlockedItems.prototype, "wodIDs", {
    get: function () {
      return this.data.wodIDs;
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolUnlockedItems;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.OfficersSchoolUnlockedItems = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableItemUnitVO = require("gge-module:export_CollectableItemUnitVO");
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
