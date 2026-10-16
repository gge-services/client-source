Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleAllianceInfoDialogMemberlist(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentStartItem = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_member, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_alliance_member"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_rank, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("rank"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_playerName, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("generic_name"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_playerLevel, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("level"));
    __s3local0.itxt_memberAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_memberAmount, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(""));
    __s3local0.sublayerDisp.icon_honor.toolTipText = "playerMight";
    __s3local0.sublayerDisp.icon_distance.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("distance");
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.btn_down);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogMemberlist, __s1param0);
  CastleAllianceInfoDialogMemberlist.prototype.fillList = function () {
    this.sublayerDisp.btn_up.visible = this._currentStartItem > 0;
    this.sublayerDisp.btn_down.visible = this._currentStartItem < this.MAX_ITEM_INDEX && this.allianceInfoVO.memberAmount > CastleAllianceInfoDialogMemberlist.NUM_ITEMS;
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_memberList);
    for (var __s5local0 = this._currentStartItem; __s5local0 < CastleAllianceInfoDialogMemberlist.NUM_ITEMS + this._currentStartItem; __s5local0++) {
      var __s5local1;
      if (this.allianceInfoVO.memberAmount > __s5local0) {
        var __s5local2 = this.allianceInfoVO.memberList[__s5local0];
        __dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleAllianceInfoMemberListItem");
        __s5local1 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("CastleAllianceInfoMemberListItem"))();
        this.fillItem(__s5local1, __s5local2);
        __s5local1.y = (__s5local0 - this._currentStartItem) * 30;
        this.sublayerDisp.mc_memberList.addChild(__s5local1);
      }
    }
  };
  CastleAllianceInfoDialogMemberlist.prototype.fillItem = function (__s10param0, __s10param1) {
    __s10param0.icon_rank_area.icon_rank.gotoAndStop(__s10param1.allianceRank + 1);
    __s10param0.icon_rank_area.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(__s10param1.allianceRank));
    if (__s10param0.btn_memberName.itxt_playerName) {
      __s10param0.btn_memberName.itxt_playerName.textContentVO.stringValue = __s10param1.playerName;
    } else {
      __s10param0.btn_memberName.itxt_playerName = this.textFieldManager.registerTextField(__s10param0.btn_memberName.txt_playerName, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s10param1.playerName));
    }
    __s10param0.btn_memberName.playerID = __s10param1.playerID;
    __s10param0.btn_memberName.txt_playerName.mouseEnabled = true;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s10param0.btn_memberName);
    __s10param0.itxt_level = this.textFieldManager.registerTextField(__s10param0.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s10param1.playerLevel));
    __s10param0.itxt_honor = this.textFieldManager.registerTextField(__s10param0.txt_honor, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s10param1.might, true));
    var __s10local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    var __s10local1 = __s10param1.getMainCastlePositionByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
    var __s10local2 = 0;
    __s10local2 = __s10local0 && __s10local1 ? Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(__s10local1, new __s0local1(__s10local0.absAreaPosX, __s10local0.absAreaPosY))) : 0;
    if (__s10param0.itxt_distance) {
      __s10param0.itxt_distance.textContentVO.numberValue = __s10local2;
    } else {
      __s10param0.itxt_distance = this.textFieldManager.registerTextField(__s10param0.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s10local2));
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "MAX_ITEM_INDEX", {
    get: function () {
      return this.allianceInfoVO.memberAmount - CastleAllianceInfoDialogMemberlist.NUM_ITEMS;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.prototype.onMouseWheel_0 = function (__s18param0) {
    __s1param0.prototype.onMouseOut.call(this, __s18param0);
    if (__s18param0.delta < 0) {
      this.currentStartItem = this._currentStartItem - CastleAllianceInfoDialogMemberlist.STEPSIZE;
      this.fillList();
    } else if (__s18param0.delta > 0) {
      this.currentStartItem = this._currentStartItem + CastleAllianceInfoDialogMemberlist.STEPSIZE;
      this.fillList();
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "currentStartItem", {
    set: function (__s22param0) {
      this._currentStartItem = __s22param0;
      if (this._currentStartItem > this.MAX_ITEM_INDEX) {
        this._currentStartItem = this.MAX_ITEM_INDEX;
      }
      if (this._currentStartItem < 0) {
        this._currentStartItem = 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.prototype.show = function (__s26param0) {
    __s1param0.prototype.show.call(this, __s26param0);
    this._currentStartItem = 0;
    this.itxt_memberAmount.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    this.fillList();
    this.sublayerDisp.parent.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  CastleAllianceInfoDialogMemberlist.prototype.hide = function () {
    this.sublayerDisp.parent.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
    __s1param0.prototype.hide.call(this);
  };
  CastleAllianceInfoDialogMemberlist.prototype.onMouseUp = function (__s30param0) {
    switch (__s30param0.target) {
      case this.sublayerDisp.btn_editAnouncement:
        break;
      case this.sublayerDisp.btn_up:
        this.currentStartItem = this._currentStartItem - CastleAllianceInfoDialogMemberlist.STEPSIZE;
        this.fillList();
        break;
      case this.sublayerDisp.btn_down:
        this.currentStartItem = this._currentStartItem + CastleAllianceInfoDialogMemberlist.STEPSIZE;
        this.fillList();
    }
    if (__s30param0.target.playerID) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s30param0.target.playerID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogMemberlist.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceInfoDialogMemberlist.__initialize_static_members = function () {
    CastleAllianceInfoDialogMemberlist.STEPSIZE = 1;
    CastleAllianceInfoDialogMemberlist.NUM_ITEMS = 8;
  };
  return CastleAllianceInfoDialogMemberlist;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceInfoDialogMemberlist = __s0local2;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "ISublayer");
__s0local2.__initialize_static_members();
