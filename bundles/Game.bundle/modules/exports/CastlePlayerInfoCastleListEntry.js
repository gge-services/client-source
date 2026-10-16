Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_4 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_MapHelper = require("gge-module:export_MapHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_KingdomCrestsAndSymbolsHelper = require("gge-module:export_KingdomCrestsAndSymbolsHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastlePlayerInfoCastleListEntry(__s3param0) {
    var __s3local0 = this;
    __s3local0.displayedFrame = 0;
    __s3local0._castleButton = new __s0local0();
    CONSTRUCTOR_HACK;
    __s3local0 = __s1param0.call(this, __s3param0) || this;
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s3param0.btn_bookmark, __s3param0.btn_jumptTo]);
    __s3local0._bookmarkButton = new __dep_export_ButtonBookmarkComponent.ButtonBookmarkComponent(__s3param0.btn_bookmark.basicButton);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePlayerInfoCastleListEntry, __s1param0);
  CastlePlayerInfoCastleListEntry.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.switchFrames();
    this.setNameAndDistance();
    this.setJumpToButton();
    this.setBookmarkButton();
  };
  CastlePlayerInfoCastleListEntry.prototype.switchFrames = function () {
    this.displayedFrame = CastlePlayerInfoCastleListEntry.CASTLE_FRAME;
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "VillageMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.VILLAGE_FRAME;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "KingstowerMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.TOWER_FRAME;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "MonumentMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.MONUMENT_FRAME;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "LaboratoryMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.LABORATORY_FRAME;
    } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "ABGAllianceTowerMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.OTHER_FRAME;
    }
    this.setCastleIcon(this.displayedFrame);
    this.handleKingdomIcon();
    this.dispItem.btn_jumptTo.gotoAndStop(this.displayedFrame);
  };
  CastlePlayerInfoCastleListEntry.prototype.setCastleIcon = function (__s14param0) {
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.dispItem.mc_leftIcons.mc_holder);
    var __s14local0;
    var __s14local1 = this.castleVO;
    __s14local0 = __dep_export_CastleModel.CastleModel.userData.userLevel < __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__s14local1.kingdomID).minLevel ? "errorCode_12" : __s14param0 == CastlePlayerInfoCastleListEntry.CASTLE_FRAME ? this.isJumpToButtonEnabled ? "panel_action_jumpTo" : __s14local1.ownerInfo.isRuin && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s14local1, "CastleMapobjectVO") ? "isRuin" : "not_unlocked" : "panel_action_jumpTo";
    var __s14local2 = __s14param0 == CastlePlayerInfoCastleListEntry.CASTLE_FRAME ? CastlePlayerInfoCastleListEntry.ICON_SIZE_CASTLES : CastlePlayerInfoCastleListEntry.ICON_SIZE_VILLAGE;
    this._castleButton = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s14local1, __s14local2, true, false, this.isJumpToButtonEnabled, __s14local0);
    this.dispItem.mc_leftIcons.mc_holder.addChild(this._castleButton);
  };
  CastlePlayerInfoCastleListEntry.prototype.handleKingdomIcon = function () {
    this.dispItem.mc_leftIcons.mc_kingdomIcon.mouseChildren = false;
    __dep_export_KingdomCrestsAndSymbolsHelper.KingdomCrestsAndSymbolsHelper.addSymbolToMC(this.dispItem.mc_leftIcons.mc_kingdomIcon, null, this.castleVO.kingdomID, new __s0local1(32, 32), 6178616);
    switch (this.castleVO.kingdomID) {
      case __dep_exact_26a421b704832cff_4.WorldIce.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Icecream";
        break;
      case __dep_exact_26a421b704832cff.WorldDessert.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Dessert";
        break;
      case __dep_exact_26a421b704832cff_1.WorldVolcano.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Volcano";
        break;
      case __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Eiland";
        break;
      case __dep_exact_26a421b704832cff_2.FactionConst.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Faction";
        break;
      default:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = __dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("kingdomName_Classic");
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.setNameAndDistance = function () {
    var __s19local0 = this.castleVO;
    var __s19local1 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__s19local0.kingdomID);
    if (__s19local1) {
      var __s19local2 = Math.round(__dep_export_MapHelper.MapHelper.getShortestDistance(new __s0local1(__s19local0.absAreaPosX, __s19local0.absAreaPosY), new __s0local1(__s19local1.absAreaPosX, __s19local1.absAreaPosY)));
      this.textFieldManager.registerTextField(this.dispItem.txt_distance, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s19local2), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    } else {
      this.textFieldManager.registerTextField(this.dispItem.txt_distance, new __dep_exact_92d05af59ee2ff30.TextVO("-"), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    }
    this.textFieldManager.registerTextField(this.dispItem.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s19local0.areaNameString), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    this.dispItem.icon_distance.toolTipText = "distance";
  };
  CastlePlayerInfoCastleListEntry.prototype.setBookmarkButton = function () {
    if (this.isJumpToButtonEnabled) {
      this.disp.btn_bookmark.toolTipText = "ringmenu_markLocation";
      this._bookmarkButton.targetWMO = this.castleVO;
      this._bookmarkButton.initBookmarkButton(true);
    } else {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_bookmark, false);
      this.disp.btn_bookmark.toolTipText = this.getJumpToButtonToolTip();
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.setJumpToButton = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dispItem.btn_jumptTo, this.isJumpToButtonEnabled);
    this.dispItem.btn_jumptTo.toolTipText = this.getJumpToButtonToolTip();
  };
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "isJumpToButtonEnabled", {
    get: function () {
      return (!this.castleVO.ownerInfo.isRuin || !__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "CastleMapobjectVO")) && __dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(this.castleVO.kingdomID) && !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoCastleListEntry.prototype.getJumpToButtonToolTip = function () {
    if (this.castleVO.ownerInfo.isRuin) {
      return "isRuin";
    } else if (__dep_export_CastleModel.CastleModel.userData.castleList.hasCastleInKingdom(this.castleVO.kingdomID)) {
      if (this.displayedFrame == CastlePlayerInfoCastleListEntry.CASTLE_FRAME) {
        return "ringmenu_visit_castle";
      } else {
        return "panel_action_jumpTo";
      }
    } else {
      return "not_unlocked";
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.villageIconToolTip = function () {
    return __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_4.GenericTextIds.VALUE_COORDS, [this.castleVO.absAreaPosX, this.castleVO.absAreaPosY]);
  };
  CastlePlayerInfoCastleListEntry.prototype.onMouseClick = function (__s40param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      switch (__s40param0.target) {
        case this.dispItem.btn_jumptTo:
          __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideAllDialogs();
          if (this.displayedFrame == CastlePlayerInfoCastleListEntry.VILLAGE_FRAME || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "KingstowerMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(this.castleVO, "UpgradableLandmarkMapobjectVO") || this.displayedFrame == CastlePlayerInfoCastleListEntry.OTHER_FRAME) {
            __dep_exact_9e901e8e2483a22f_5.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.castleVO);
          } else {
            __dep_exact_9e901e8e2483a22f_5.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.castleVO);
          }
          break;
        case this.dispItem.btn_bookmark:
          this._bookmarkButton.onClick();
      }
      __s1param0.prototype.onMouseClick.call(this, __s40param0);
    }
  };
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "dispItem", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "castleVO", {
    get: function () {
      return this._scrollItemVO.worldMapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_3.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoCastleListEntry.__initialize_static_members = function () {
    CastlePlayerInfoCastleListEntry.ICON_SIZE_VILLAGE = new __s0local1(38, 38);
    CastlePlayerInfoCastleListEntry.ICON_SIZE_CASTLES = new __s0local1(41, 41);
  };
  CastlePlayerInfoCastleListEntry.CASTLE_FRAME = 1;
  CastlePlayerInfoCastleListEntry.VILLAGE_FRAME = 2;
  CastlePlayerInfoCastleListEntry.TOWER_FRAME = 3;
  CastlePlayerInfoCastleListEntry.MONUMENT_FRAME = 4;
  CastlePlayerInfoCastleListEntry.LABORATORY_FRAME = 5;
  CastlePlayerInfoCastleListEntry.OTHER_FRAME = 6;
  return CastlePlayerInfoCastleListEntry;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.CastlePlayerInfoCastleListEntry = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "MovieClip");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ButtonBookmarkComponent = require("gge-module:export_ButtonBookmarkComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
__s0local2.__initialize_static_members();
