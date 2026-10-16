Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AdvisorAttackOverviewCancelDialog = require("gge-module:export_AdvisorAttackOverviewCancelDialog");
var __dep_export_AdvisorAttackOverviewCancelDialogProperties = require("gge-module:export_AdvisorAttackOverviewCancelDialogProperties");
var __dep_export_CastleAskRereatDialogProperties = require("gge-module:export_CastleAskRereatDialogProperties");
var __dep_export_RenderArmyTravel = require("gge-module:export_RenderArmyTravel");
var __dep_export_RenderPlaguemonk = require("gge-module:export_RenderPlaguemonk");
var __dep_export_RenderSiege = require("gge-module:export_RenderSiege");
var __dep_export_RenderSpy = require("gge-module:export_RenderSpy");
var __dep_export_RenderSupportDefence = require("gge-module:export_RenderSupportDefence");
var __dep_export_RenderTreasureHunt = require("gge-module:export_RenderTreasureHunt");
var __s0local0 = function (__s1param0) {
  function CastleMovementItem(__s3param0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMovementItem, __s1param0);
  CastleMovementItem.prototype.customFillItem = function () {
    var __s5local0 = this._scrollItemVO.movement;
    var __s5local1 = __s5local0.name;
    this.render = CastleMovementItem.RENDER_STRATEGIES.get(__s5local1);
    this.render.reset(this.disp, __s5local0);
    this.render.renderData(this.disp, __s5local0);
    this.render.updateContainer(this.disp, __s5local0);
  };
  CastleMovementItem.prototype.onMouseClick = function (__s7param0) {
    __s1param0.prototype.onMouseClick.call(this, __s7param0);
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s7param0.target, "MovieClip")) {
      var __s7local0 = __dep_exact_81dacdf05bd32292.castAs(__s7param0.target.movementVO, "IMapMovementVO");
      switch (__s7param0.target) {
        case this.disp.btn_retreat:
        case this.disp.btn_sendHome:
          if (__s7local0 && __s7param0.target.enabled) {
            if (__s7local0.advisorType > 0) {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_AdvisorAttackOverviewCancelDialog.AdvisorAttackOverviewCancelDialog, new __dep_export_AdvisorAttackOverviewCancelDialogProperties.AdvisorAttackOverviewCancelDialogProperties([__s7local0]));
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAskRetreatDialog.CastleAskRetreatDialog, new __dep_export_CastleAskRereatDialogProperties.CastleAskRereatDialogProperties(__s7local0));
            }
          }
          break;
        case this.disp.btn_armyInfo:
        case this.disp.btn_spyInfo:
        case this.disp.btn_goods:
          __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_MOVEMENT_INFO_DIALOG_COMMAND, __s7local0);
          break;
        case this.disp.btn_destination:
          if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s7local0, "TreasureHuntMovementVO")) {
            if (__dep_exact_26a421b704832cff.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(__s7local0.treasureMapID) > -1) {
              __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.loadTreasureMapAssets(this.bindFunction(this.switchToSeasonMap));
            } else {
              __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleTreasureMapDialog.CastleTreasureMapDialog);
            }
          } else if (__dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s7local0.kingdomID).isPaid) {
            __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, __s7local0.targetArea);
          }
      }
    }
  };
  CastleMovementItem.prototype.reset = function () {
    if (this._scrollItemVO) {
      this.render.updateContainer(this.disp, this._scrollItemVO.movement);
    } else {
      this.hide();
    }
  };
  CastleMovementItem.prototype.switchToSeasonMap = function () {
    CastleMovementItem.layoutManager.state = __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP;
  };
  Object.defineProperty(CastleMovementItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementItem, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMovementItem, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleMovementItem.__initialize_static_members = function () {
    var __s30local0;
    (__s30local0 = new Map()).set(__dep_export_AlienAttackMovementVO.AlienAttackMovementVO.NAME, new __dep_export_RenderArmyAttack.RenderArmyAttack());
    __s30local0.set(__dep_export_ArmyAttackMapmovementVO.ArmyAttackMapmovementVO.NAME, new __dep_export_RenderArmyAttack.RenderArmyAttack());
    __s30local0.set(__dep_export_ArmyTravelMapMovementVO.ArmyTravelMapMovementVO.NAME, new __dep_export_RenderArmyTravel.RenderArmyTravel());
    __s30local0.set(__dep_export_MarketMapmovementVO.MarketMapmovementVO.NAME, new __dep_export_RenderMarket.RenderMarket());
    __s30local0.set(__dep_export_PlaguemonkMapmovementVO.PlaguemonkMapmovementVO.NAME, new __dep_export_RenderPlaguemonk.RenderPlaguemonk());
    __s30local0.set(__dep_export_SiegeMapmovementVO.SiegeMapmovementVO.NAME, new __dep_export_RenderSiege.RenderSiege());
    __s30local0.set(__dep_export_SpyMapmovementVO.SpyMapmovementVO.NAME, new __dep_export_RenderSpy.RenderSpy());
    __s30local0.set(__dep_export_SupportDefenceMapmovementVO.SupportDefenceMapmovementVO.NAME, new __dep_export_RenderSupportDefence.RenderSupportDefence());
    __s30local0.set(__dep_export_TreasureHuntMovementVO.TreasureHuntMovementVO.NAME, new __dep_export_RenderTreasureHunt.RenderTreasureHunt());
    CastleMovementItem.RENDER_STRATEGIES = __s30local0;
  };
  return CastleMovementItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.CastleMovementItem = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_AlienAttackMovementVO = require("gge-module:export_AlienAttackMovementVO");
var __dep_export_ArmyAttackMapmovementVO = require("gge-module:export_ArmyAttackMapmovementVO");
var __dep_export_ArmyTravelMapMovementVO = require("gge-module:export_ArmyTravelMapMovementVO");
var __dep_export_MarketMapmovementVO = require("gge-module:export_MarketMapmovementVO");
var __dep_export_PlaguemonkMapmovementVO = require("gge-module:export_PlaguemonkMapmovementVO");
var __dep_export_SiegeMapmovementVO = require("gge-module:export_SiegeMapmovementVO");
var __dep_export_SpyMapmovementVO = require("gge-module:export_SpyMapmovementVO");
var __dep_export_SupportDefenceMapmovementVO = require("gge-module:export_SupportDefenceMapmovementVO");
var __dep_export_TreasureHuntMovementVO = require("gge-module:export_TreasureHuntMovementVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleAskRetreatDialog = require("gge-module:export_CastleAskRetreatDialog");
var __dep_export_CastleTreasureMapDialog = require("gge-module:export_CastleTreasureMapDialog");
var __dep_export_RenderArmyAttack = require("gge-module:export_RenderArmyAttack");
var __dep_export_RenderMarket = require("gge-module:export_RenderMarket");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "MovieClip");
__s0local0.__initialize_static_members();
