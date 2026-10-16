Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_EffectTypeEnum = require("gge-module:export_EffectTypeEnum");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __dep_export_ListMemberSearchItem = require("gge-module:export_ListMemberSearchItem");
var __dep_export_ListMemberSearchItemVO = require("gge-module:export_ListMemberSearchItemVO");
var __s0local0 = function (__s1param0) {
  function CastleSearchMemberDialogSearch(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_memberAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_memberAmount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_member, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_alliance_member"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    __s3local0.sublayerDisp.icon_distance.toolTipText = "distance";
    __s3local0.sublayerDisp.icon_honor.toolTipText = "honor";
    __s3local0._memberListComponent = new __dep_exact_9e901e8e2483a22f_2.ItemScrollList(__s3local0.sublayerDisp.mc_memberList, __s3local0.sublayerDisp);
    __s3local0._memberListComponent.scrollItemClass = __dep_export_ListMemberSearchItem.ListMemberSearchItem;
    __s3local0._memberListComponent.clear();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.btn_increaseMember);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.mc_memberList.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.mc_memberList.btn_down);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSearchMemberDialogSearch, __s1param0);
  CastleSearchMemberDialogSearch.prototype.onMouseUp = function (__s5param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s5param0.target)) {
      switch (__s5param0.target) {
        case this.sublayerDisp.btn_increaseMember:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_ALLIANCE_BUY_BOOSTER_COMMAND, [this.properties.allianceInfoVO, __dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS, __dep_export_EffectTypeEnum.EffectTypeEnum.EFFECT_TYPE_MEMBER]);
      }
    }
  };
  CastleSearchMemberDialogSearch.prototype.show = function (__s9param0) {
    __s1param0.prototype.show.call(this, __s9param0);
    this.itxt_memberAmount.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.properties.allianceInfoVO.memberAmount, this.properties.allianceInfoVO.memberMax];
    if (__dep_export_CastleModel.CastleModel.allianceData.myAllianceVO.isBoostUpgradeable(__dep_exact_26a421b704832cff.AllianceConst.TYPE_MEMBERS)) {
      if (__dep_export_CastleModel.CastleModel.allianceData.hasRight(__dep_export_CastleModel.CastleModel.userData.allianceRank, __dep_exact_26a421b704832cff.AllianceConst.RIGHT_UPGRADE)) {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, true);
        this.sublayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_raiseMemberLimit";
      } else {
        __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, false);
        this.subLayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_rankToLow";
      }
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.sublayerDisp.btn_increaseMember, false);
      this.sublayerDisp.btn_increaseMember.toolTipText = "dialog_alliance_maxUpgradeLevel";
    }
    this.fillList(this.properties.searchMemberList);
    this._memberListComponent.addEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  CastleSearchMemberDialogSearch.prototype.fillList = function (__s15param0) {
    this._memberListComponent.clear();
    if (__s15param0 != null) {
      for (var __s15local0 = 0, __s15local1 = __s15param0; __s15local0 < __s15local1.length; __s15local0++) {
        var __s15local2 = __s15local1[__s15local0];
        if (__s15local2 !== undefined) {
          var __s15local3 = new __dep_export_ListMemberSearchItemVO.ListMemberSearchItemVO();
          __s15local3.listVO = __s15local2;
          this._memberListComponent.pushContent(__s15local3);
        }
      }
    }
    this._memberListComponent.initList();
  };
  CastleSearchMemberDialogSearch.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._memberListComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_3.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
  };
  CastleSearchMemberDialogSearch.prototype.onClickScrollistItem = function (__s23param0) {
    var __s23local0 = __dep_exact_f855840627e6e145.int(__s23param0.scrollItem.itemVO.listVO.playerID);
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s23local0), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
  };
  CastleSearchMemberDialogSearch.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceSearchMember"));
  };
  Object.defineProperty(CastleSearchMemberDialogSearch.prototype, "properties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialogSearch.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSearchMemberDialogSearch;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleSearchMemberDialogSearch = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
