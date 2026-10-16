Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CachedTimer = require("gge-module:export_CachedTimer");
var __dep_export_TempServerHelper = require("gge-module:export_TempServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastlePlayerInfoDialog = require("gge-module:export_CastlePlayerInfoDialog");
var __dep_export_CastlePlayerInfoDialogProperties = require("gge-module:export_CastlePlayerInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function TempServerEventDialogRankingItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    if (__s3local0.isOnTempServer) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3param0, 1);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(TempServerEventDialogRankingItem, __s1param0);
  TempServerEventDialogRankingItem.prototype.updateWithNewData = function (__s6param0, __s6param1, __s6param2, __s6param3, __s6param4) {
    this._currentData = __s6param1;
    this.disp.visible = true;
    this.disp.bg.gotoAndStop(1);
    this.txt_rank = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO("" + __s6param0));
    if (__s6param1) {
      var __s6local0 = __dep_exact_f855840627e6e145.int(__s6param1[1]);
      var __s6local1 = __s6param1[2];
      var __s6local2 = __s6param1[3];
      var __s6local3 = __dep_exact_f855840627e6e145.int(__s6param1.length >= 5 ? __s6param1[4] : 0);
      if ((__s6param0 = __s6local3 == 0 ? __s6param0 : __s6local3) <= 3) {
        this.disp.bg_left.gotoAndStop(__s6param0);
        this.disp.bg_left.visible = true;
      } else {
        this.disp.bg_left.visible = false;
      }
      if (!__s6local2 || __s6local2 == "") {
        __s6local2 = __s6local1.N;
      }
      __s6local2 ||= "-";
      if (__s6local2.toLowerCase() == __s6param3.toLowerCase() || __s6local2.toLowerCase() == __dep_export_CastleModel.CastleModel.userData.userName.toLowerCase()) {
        this.disp.bg_left.visible = true;
        this.disp.bg_left.gotoAndStop(4);
      }
      this.setName(__s6local2 ?? __s6local1.N);
      this.setAlliance(__s6local1.AN ? __s6local1.AN : "-");
      this.setLevel(__s6local1.L ? __s6local1.L : "-");
      this.handleNormalPoints(__s6local0, __s6param0);
      if (__s6param4 == __dep_exact_26a421b704832cff_1.HighscoreConst.TEMP_SERVER_DAILY_RANK_SWAP) {
        this.handleDailyRankSwap(__s6param0);
      } else {
        this.handleNormalPoints(__s6local0, __s6param0);
      }
      this.handleDistance(__s6param1);
      if (__s6local3 > 0) {
        this.txt_rank = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO("" + __s6local3));
      }
    } else if (__s6param0 > 0 && __s6param0 <= __s6param2) {
      this.setName("???");
      this.setAlliance("???");
      this.setLevel("???");
      this.txt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      this.txt_distance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      if (this.disp.txt_might) {
        this.txt_might = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      }
      if (this.disp.txt_points1_charge) {
        this.txt_points1_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points1_charge, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      }
      if (this.disp.txt_points2_charge) {
        this.txt_points2_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points2_charge, new __dep_exact_92d05af59ee2ff30.TextVO("???"));
      }
    } else {
      this.disp.visible = false;
    }
    if (this.txt_name_charge) {
      this.txt_name_charge.autoFitToBounds = true;
      this.txt_name_charge.visible = false;
    }
    if (this.txt_alliance_charge) {
      this.txt_alliance_charge.autoFitToBounds = true;
      this.txt_alliance_charge.visible = false;
    }
    if (this.txt_level_charge) {
      this.txt_level_charge.visible = false;
    }
    if (this.txt_points1_charge) {
      this.txt_points1_charge.visible = false;
    }
    if (this.txt_points2_charge) {
      this.txt_points2_charge.visible = false;
    }
    if (this.txt_rank) {
      this.txt_rank.autoFitToBounds = true;
    }
  };
  TempServerEventDialogRankingItem.prototype.handleNormalPoints = function (__s27param0, __s27param1) {
    if (this.disp.txt_might) {
      this.txt_might = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s27param0));
      this.txt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.tempServerData.getDailyRankPointsByRank(__s27param1)));
    } else {
      this.txt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s27param0));
    }
    if (this.disp.mc_rankSwap) {
      this.disp.mc_rankSwap.visible = false;
    }
    if (this.disp.mc_check) {
      this.disp.mc_check.visible = false;
    }
  };
  TempServerEventDialogRankingItem.prototype.handleOverallCharge = function (__s33param0, __s33param1) {
    var __s33local0 = __s33param0 % 10000;
    var __s33local1 = (__s33param0 - __s33local0) / 10000;
    this.txt_points1_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points1_charge, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s33local1));
    this.txt_points2_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points2_charge, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__s33local0));
    this.disp.mc_check.visible = this.isOnTempServer;
    this.disp.mc_check.gotoAndStop(2);
    this.disp.mc_check.toolTipText = "dialog_tempServer_collectPoints_tooltip_notAttackAble_charge";
    this.disp.mc_check.visible = this.disp.mc_check.visible && __dep_export_CastleModel.CastleModel.userData.userName != __s33param1;
    this.disp.mouseChildren = true;
  };
  TempServerEventDialogRankingItem.prototype.handleDailyRankSwap = function (__s35param0) {
    this.txt_points = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(" "));
    if (this.disp.txt_might) {
      this.txt_might = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_might, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(" "));
    }
    this.txt_rank_swap = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank_swap, new __dep_exact_92d05af59ee2ff30_2.LocalizedNumberVO(__dep_export_CastleModel.CastleModel.tempServerData.getDailyRankPointsByRank(__s35param0)));
    this.disp.mc_rankSwap.visible = this.eventVO.ownDailyRank != __s35param0;
    var __s35local0 = __s35param0 < this.eventVO.ownDailyRank;
    this.disp.mc_rankSwap.gotoAndStop(__s35local0 ? 1 : 2);
    this.disp.mc_rankSwap.toolTipText = __s35local0 ? "dialog_tempServer_collectPoints_tooltip_rankSwapAble" : "dialog_tempServer_collectPoints_tooltip_rankSwapNotAble";
    this.disp.mouseChildren = true;
  };
  TempServerEventDialogRankingItem.prototype.setName = function (__s38param0) {
    this.txt_name = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s38param0));
    if (this.disp.txt_name_charge) {
      this.txt_name_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name_charge, new __dep_exact_92d05af59ee2ff30.TextVO(__s38param0));
    }
  };
  TempServerEventDialogRankingItem.prototype.setAlliance = function (__s41param0) {
    this.txt_alliance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance, new __dep_exact_92d05af59ee2ff30.TextVO(__s41param0));
    if (this.disp.txt_alliance_charge) {
      this.txt_alliance_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_alliance_charge, new __dep_exact_92d05af59ee2ff30.TextVO(__s41param0));
    }
  };
  TempServerEventDialogRankingItem.prototype.setLevel = function (__s44param0) {
    this.txt_level = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(__s44param0));
    if (this.disp.txt_level_charge) {
      this.txt_level_charge = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level_charge, new __dep_exact_92d05af59ee2ff30.TextVO(__s44param0));
    }
  };
  TempServerEventDialogRankingItem.prototype.handleDistance = function (__s47param0) {
    if (this.isOnTempServer) {
      var __s47local0 = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s47param0[2], __dep_export_CachedTimer.CachedTimer.getCachedTimer());
      var __s47local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
      var __s47local2 = __s47local0.getMainCastlePositionByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
      var __s47local3 = Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(__s47local2, new __s0local1(__s47local1.absAreaPosX, __s47local1.absAreaPosY)));
      this.txt_distance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30.TextVO(__s47local3 + ""));
    } else {
      this.txt_distance = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_distance, new __dep_exact_92d05af59ee2ff30.TextVO("-"));
    }
  };
  Object.defineProperty(TempServerEventDialogRankingItem.prototype, "eventVO", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  TempServerEventDialogRankingItem.prototype.getPlayerIdFromData = function () {
    return __dep_exact_f855840627e6e145.int(this._currentData ? this._currentData[2].OID : -1);
  };
  TempServerEventDialogRankingItem.prototype.onClick = function (__s55param0) {
    __s1param0.prototype.onClick.call(this, __s55param0);
    if (this.isOnTempServer) {
      var __s55local0 = this.getPlayerIdFromData();
      if (__s55local0 >= 0) {
        __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDialogsWithTypeAndDefaultValues(__dep_export_CastlePlayerInfoDialog.CastlePlayerInfoDialog, new __dep_export_CastlePlayerInfoDialogProperties.CastlePlayerInfoDialogProperties(__s55local0), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseOver = function (__s59param0) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(2);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseOut = function (__s62param0) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(1);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseDown = function (__s65param0) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(3);
    }
  };
  TempServerEventDialogRankingItem.prototype.onMouseUp = function (__s68param0) {
    if (this.isOnTempServer) {
      this.disp.bg.gotoAndStop(1);
    }
  };
  TempServerEventDialogRankingItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    if (this.disp) {
      this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  TempServerEventDialogRankingItem.prototype.removeEventListener = function () {
    __s1param0.prototype.removeEventListener.call(this);
    if (this.disp) {
      this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
  };
  Object.defineProperty(TempServerEventDialogRankingItem.prototype, "isOnTempServer", {
    get: function () {
      return __dep_export_TempServerHelper.TempServerHelper.isOnTempServer;
    },
    enumerable: true,
    configurable: true
  });
  return TempServerEventDialogRankingItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.TempServerEventDialogRankingItem = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
