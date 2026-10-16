Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ACollapsibleItem = require("gge-module:export_ACollapsibleItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleLegendSkillSceatListItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2) || this;
    __s3local0._markAsNew = false;
    __s3local0._treeComponent = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0._headerMC], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    __s3local0._headerMC.mc_open.visible = false;
    if (__s3param2.isExpanded) {
      __s3local0._isExpanded = true;
      __s3local0._contentMC.alpha = 1;
      __s3local0._contentMC.visible = true;
      __s3local0._contentMC.mask.height = __s3local0._contentMC.height;
      __s3local0._headerMC.mc_open.visible = true;
    }
    __s3local0.update();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLegendSkillSceatListItem, __s1param0);
  CastleLegendSkillSceatListItem.prototype.update = function () {
    var __s6local0 = this;
    this._treeComponent.updateTree();
    if (this._treeComponent.treeNode.isUnlocked()) {
      if (__dep_export_CastleModel.CastleModel.legendSkillData.isTreeMaxedOut(this._treeComponent.treeNode.id)) {
        this._headerMC.mc_stateIcon.gotoAndStop(3);
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, [__dep_exact_92d05af59ee2ff30.Localize.text("done")]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      } else {
        this._headerMC.mc_stateIcon.gotoAndStop(2);
        var __s6local1 = this._markAsNew ? [__dep_exact_92d05af59ee2ff30.Localize.text("new")] : [""];
        __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, __s6local1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      }
    } else {
      this._headerMC.mc_stateIcon.gotoAndStop(1);
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this._headerMC.txt_label, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_legendTemple_title_keepSkill_" + this._treeComponent.treeNode.id, [__dep_exact_92d05af59ee2ff30.Localize.text("locked")]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    if (this._isExpanded) {
      setTimeout(function () {
        __s6local0._contentMC.mask.height = __s6local0._contentMC.height;
      }, 1);
    }
  };
  CastleLegendSkillSceatListItem.prototype.onClick = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s15param0.target) && this.isEnabled) {
      switch (__s15param0.target) {
        case this._headerMC:
          this.expand(!this._isExpanded, true);
      }
    }
  };
  CastleLegendSkillSceatListItem.prototype.onRollOver = function (__s19param0) {
    this.disp.uncache();
  };
  CastleLegendSkillSceatListItem.prototype.onRollOut = function (__s21param0) {
    this.disp.uncache();
  };
  CastleLegendSkillSceatListItem.prototype.expand = function (__s23param0, __s23param1, __s23param2 = false) {
    __s1param0.prototype.expand.call(this, __s23param0, __s23param1, __s23param2);
    this._headerMC.mc_open.visible = __s23param0;
  };
  Object.defineProperty(CastleLegendSkillSceatListItem.prototype, "treeComponent", {
    get: function () {
      return this._treeComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillSceatListItem.prototype, "markAsNew", {
    get: function () {
      return this._markAsNew;
    },
    set: function (__s29param0) {
      this._markAsNew = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillSceatListItem;
}(__dep_export_ACollapsibleItem.ACollapsibleItem);
exports.CastleLegendSkillSceatListItem = __s0local0;
