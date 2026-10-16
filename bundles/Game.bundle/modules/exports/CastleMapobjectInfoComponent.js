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
var __dep_exact_9e901e8e2483a22f_6 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_C2SAllianceInvitePlayerVO = require("gge-module:export_C2SAllianceInvitePlayerVO");
var __dep_export_C2SSpySpyUnits = require("gge-module:export_C2SSpySpyUnits");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_EWorldmapBookmarkType = require("gge-module:export_EWorldmapBookmarkType");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleAllianceInfoDialogProperties = require("gge-module:export_CastleAllianceInfoDialogProperties");
var __dep_export_CastleAllianceDialogProperties = require("gge-module:export_CastleAllianceDialogProperties");
var __dep_export_AllianceCrestEnum = require("gge-module:export_AllianceCrestEnum");
var __dep_export_AllianceCrestSizeEnum = require("gge-module:export_AllianceCrestSizeEnum");
var __dep_export_CastleAllianceCrestHelper = require("gge-module:export_CastleAllianceCrestHelper");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleMapobjectInfoComponent(__s3param0) {
    var __s3local0 = __s1param0.call(this, new __s0local0()) || this;
    __s3local0.namePlateColor = 0;
    __s3local0.setVO(__s3param0);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMapobjectInfoComponent, __s1param0);
  CastleMapobjectInfoComponent.prototype.onRollOver = function (__s5param0) {
    this.updateTimerTooltips();
    __s1param0.prototype.onRollOver.call(this, __s5param0);
  };
  CastleMapobjectInfoComponent.prototype.setVO = function (__s7param0) {
    this._worldmapObjectVO = __s7param0;
    this.updateMapobjectInfo();
  };
  CastleMapobjectInfoComponent.prototype.destroy = function () {
    if (this.namePlate) {
      __dep_exact_9e901e8e2483a22f.assetsPool.recycle(this.namePlate);
      this.namePlate = null;
    }
    if (this._allianceCrestContainer && this._allianceCrestContainer.children.length) {
      var __s9local0 = this._allianceCrestContainer.children.shift();
      __dep_exact_9e901e8e2483a22f.assetsPool.recycle(__s9local0);
    }
    __s1param0.prototype.destroy.call(this);
  };
  CastleMapobjectInfoComponent.prototype.updateMapobjectInfo = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.nameMC);
    if (this._worldmapObjectVO.ownerInfo) {
      if (this._worldmapObjectVO.hasNameLabel) {
        this.namePlateColor = 0;
        if (this._worldmapObjectVO.isOwnMapobject) {
          this.namePlate = __dep_exact_9e901e8e2483a22f.assetsPool.obtain(Library.CastleInterfaceElements.Name_Mapobject_Own);
          this.namePlate.castleName_txt.defaultCacheScale = 2;
          this.nameMC.addChild(this.namePlate);
          this.setAllianceRankingIconOnNameLabel();
        } else {
          this.namePlate = __dep_exact_9e901e8e2483a22f.assetsPool.obtain(Library.CastleInterfaceElements.Name_Mapobject_Generic);
          this.namePlate.castleName_txt.defaultCacheScale = 2;
          this.nameMC.addChild(this.namePlate);
          this.updateNamePlateBgColor();
          this.setAllianceRankingIconOnNameLabel();
        }
        this.setNameOnNameLabel();
        this.setSpyIcon();
        this.setPeaceProtectionIconOnNameLabel();
      } else {
        this.setAllianceStatusIcon();
        this.setSpyIcon();
      }
    }
    if (this._worldmapObjectVO.bookmark) {
      this.setBookmarkIcon();
    } else {
      this.drawAllianceCrest();
    }
    this.drawABGTowerConnections();
  };
  CastleMapobjectInfoComponent.prototype.drawABGTowerConnections = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      var __s22local0 = new __s0local0();
      __s22local0.x = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS.x;
      __s22local0.y = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS.y;
      this.nameMC.addChild(__s22local0);
      new __dep_export_ABGTowerConnectionsComponent.ABGTowerConnectionsComponent(__s22local0, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_MAP, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_MAP, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SPACING_MAP).setConnections(this._worldmapObjectVO.connections);
    }
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldmapObjectVO, "CastleMapobjectVO") && __dep_export_ABGHelper.ABGHelper.isOnABGAndTower) {
      var __s22local1 = this._worldmapObjectVO.getMinConnectionsAsABGTowerConnection();
      var __s22local2 = new __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent(__dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.TYPE_MAP, __dep_export_ABGTowerConnectionStateComponent.ABGTowerConnectionStateComponent.SIZE_MAP, true);
      __s22local2.setConnection(__s22local1[0]);
      var __s22local3 = new __s0local0();
      __s22local3.addChild(__s22local2.disp);
      __s22local3.x = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS.x;
      __s22local3.y = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS.y;
      this.nameMC.addChild(__s22local3);
    }
  };
  CastleMapobjectInfoComponent.prototype.updateNamePlateBgColor = function () {
    if (this.namePlate && this.namePlate.bg && this._worldmapObjectVO && !this._worldmapObjectVO.isOwnMapobject && this._worldmapObjectVO.ownerInfo) {
      var __s26local0 = this.namePlateColor;
      this.namePlateColor = this.getColorByAllianceStatus(this._worldmapObjectVO.ownerInfo.allianceID);
      var __s26local1 = this.namePlateColor !== __s26local0;
      if (__s26local1) {
        var __s26local2 = new __dep_exact_81dacdf05bd32292.ColorTransform();
        __s26local2.color = this.namePlateColor;
        this.namePlate.bg.useFilters([new createjs.ColorFilter(__s26local2.redMultiplier, __s26local2.greenMultiplier, __s26local2.blueMultiplier, __s26local2.alphaMultiplier, __s26local2.redOffset, __s26local2.greenOffset, __s26local2.blueOffset, __s26local2.alphaOffset)]);
      }
      return __s26local1 && __s26local0 !== 0;
    }
    return false;
  };
  CastleMapobjectInfoComponent.prototype.drawAllianceCrestOn = function (__s30param0) {
    return __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s30param0, "CapitalMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s30param0, "MetropolMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s30param0, "CastleMapobjectVO") || __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s30param0, "ABGAllianceTowerMapobjectVO");
  };
  CastleMapobjectInfoComponent.prototype.drawAllianceCrest = function () {
    if (this._allianceCrestContainer && this._allianceCrestContainer.parent) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
    }
    if (this.drawAllianceCrestOn(this._worldmapObjectVO) && this._worldmapObjectVO.ownerInfo && this._worldmapObjectVO.ownerInfo.allianceCrestVO && (!__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO") || this._worldmapObjectVO.ownerInfo.allianceCrestVO != __dep_export_ABGAllianceTowerMapobjectVO.ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER)) {
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new __s0local0();
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
          this._allianceCrestContainer.x = CastleMapobjectInfoComponent._allianceCrestPositionTower.x;
          this._allianceCrestContainer.y = CastleMapobjectInfoComponent._allianceCrestPositionTower.y;
        } else {
          this._allianceCrestContainer.x = CastleMapobjectInfoComponent._allianceCrestPosition.x;
          this._allianceCrestContainer.y = CastleMapobjectInfoComponent._allianceCrestPosition.y;
        }
      }
      var __s32local0 = __dep_export_AllianceCrestEnum.AllianceCrestEnum.DEFAULT_CREST_SIMPLE;
      this.nameMC.addChild(this._allianceCrestContainer);
      __dep_export_CastleAllianceCrestHelper.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this._worldmapObjectVO.ownerInfo.allianceCrestVO, __dep_export_AllianceCrestSizeEnum.AllianceCrestSizeEnum.WORLD_MAP, __s32local0);
      CastleMapobjectInfoComponent.setOnClickFunction(this._allianceCrestContainer, this.bindFunction(this.onClickAllianceIcon));
    }
  };
  CastleMapobjectInfoComponent.prototype.setBookmarkIcon = function () {
    var __s39local0 = this._worldmapObjectVO.bookmark;
    this.bookmark = CastleMapobjectInfoComponent.createBookmarkIcon(__s39local0);
    this.bookmark.toolTipText = CastleMapobjectInfoComponent.getBookmarkTooltip(__s39local0);
    this.bookmark.x = this._worldmapObjectVO.hasNameLabel ? CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION.x : CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION.x;
    this.bookmark.y = this._worldmapObjectVO.hasNameLabel ? CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION.y : CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION.y;
    this.bookmark.scaleX = CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON;
    this.bookmark.scaleY = CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON;
    this.bookmark.scaleX = this.bookmark.scaleY /= 2;
    this.nameMC.addChild(this.bookmark);
  };
  CastleMapobjectInfoComponent.prototype.setNameOnNameLabel = function () {
    var __s41local0 = this._worldmapObjectVO.areaNameString || " ";
    var __s41local1 = __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance().registerTextField(this.namePlate.castleName_txt, new __dep_exact_92d05af59ee2ff30.TextVO(__s41local0), new __dep_exact_9e901e8e2483a22f_6.InternalGGSTextFieldConfigVO(true));
    __s41local1.autoFitToBounds = true;
    __s41local1.textAlign = __dep_exact_9e901e8e2483a22f_3.GGSTextAlign.CENTER;
  };
  CastleMapobjectInfoComponent.prototype.setPeaceProtectionIconOnNameLabel = function () {
    this.namePlate.mc_dove.visible = (this._worldmapObjectVO.ownerInfo.isPeaceProtected || this._worldmapObjectVO.ownerInfo.isNoobProtected) && this._worldmapObjectVO.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL && this._worldmapObjectVO.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL;
  };
  CastleMapobjectInfoComponent.prototype.setSpyIcon = function () {
    if (__dep_export_CastleModel.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldmapObjectVO)) {
      (__s45local0 = new Library.CastleInterfaceElements_Icons.MapobjectSpyIcon_AutoSpy()).scaleX = __s45local0.scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      __s45local0.toolTipText = "dialog_openSpyReport_Tooltip";
      __s45local0.x = CastleMapobjectInfoComponent.SPY_ICON_POSITION.x;
      __s45local0.y = CastleMapobjectInfoComponent.SPY_ICON_POSITION.y;
      CastleMapobjectInfoComponent.setOnClickFunction(__s45local0, this.bindFunction(this.onClickSpyIcon));
      this.nameMC.addChild(__s45local0);
    } else if (this._worldmapObjectVO.remainingSpyInfoTime > 0) {
      var __s45local0;
      (__s45local0 = new Library.CastleInterfaceElements_Icons.MapobjectSpyIcon()).scaleX = __s45local0.scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      __s45local0.toolTipText = "dialog_openSpyReport_Tooltip";
      __s45local0.x = CastleMapobjectInfoComponent.SPY_ICON_POSITION.x;
      __s45local0.y = CastleMapobjectInfoComponent.SPY_ICON_POSITION.y;
      CastleMapobjectInfoComponent.setOnClickFunction(__s45local0, this.bindFunction(this.onClickSpyIcon));
      this.nameMC.addChild(__s45local0);
    }
  };
  CastleMapobjectInfoComponent.prototype.setAllianceStatusIcon = function () {
    var __s49local0;
    var __s49local1 = __dep_exact_f855840627e6e145.int(this._worldmapObjectVO.ownerInfo.allianceID);
    if (this._worldmapObjectVO.isOwnMapobject) {
      (__s49local0 = new Library.CastleInterfaceElements.AllianceScroll_Own()).toolTipText = "dialog_playerOwnLocation_tooltip";
    } else {
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._worldmapObjectVO, "FactionInteractiveMapobjectVO") || this._worldmapObjectVO.areaType == __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
        return;
      }
      if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldmapObjectVO.ownerInfo)) {
        var __s49local2 = new Library.CastleInterfaceElements.AllianceScroll_SameAlliance();
        if (__s49local2 instanceof __s0local0) {
          (__s49local0 = __s49local2).toolTipText = "dialog_alliance_AllianceMate_tooltip";
        }
      } else if (__s49local1 >= 0) {
        switch (__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s49local1)) {
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
            var __s49local3 = new Library.CastleInterfaceElements.AllianceScroll_HardAllied();
            if (__s49local3 instanceof __s0local0) {
              (__s49local0 = __s49local3).toolTipText = "dialog_alliance_infoPact";
            }
            break;
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
            var __s49local4 = new Library.CastleInterfaceElements.AllianceScroll_SoftAllied();
            if (__s49local4 instanceof __s0local0) {
              (__s49local0 = __s49local4).toolTipText = "dialog_alliance_infoNoAttack";
            }
            break;
          case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
            var __s49local5 = new Library.CastleInterfaceElements.AllianceScroll_War();
            if (__s49local5 instanceof __s0local0) {
              (__s49local0 = __s49local5).toolTipText = "dialog_alliance_infoInWar";
            }
            break;
          default:
            return;
        }
      }
    }
    if (__s49local0 != null) {
      __s49local0.scaleX = __s49local0.scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
      __s49local0.x = CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION.x;
      __s49local0.y = CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION.y;
      this.nameMC.addChild(__s49local0);
    }
  };
  CastleMapobjectInfoComponent.prototype.setAllianceRankingIconOnNameLabel = function () {
    this.namePlate.mc_searchAlliance.visible = false;
    this.namePlate.mc_rank.visible = false;
    this.namePlate.iconHitArea.toolTipText = null;
    if (this._worldmapObjectVO.ownerInfo.isInAlliance) {
      this.namePlate.mc_rank.visible = true;
      var __s62local0 = __dep_exact_f855840627e6e145.int(this._worldmapObjectVO.ownerInfo.allianceRank + 1);
      this.namePlate.mc_rank.icon.gotoAndStop(__s62local0);
      this.namePlate.iconHitArea.toolTipText = "dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(this._worldmapObjectVO.ownerInfo.allianceRank);
      CastleMapobjectInfoComponent.setOnClickFunction(this.namePlate.iconHitArea, this.bindFunction(this.onClickAllianceIcon));
    } else if (this._worldmapObjectVO.ownerInfo.isSearchingAlliance) {
      this.namePlate.mc_searchAlliance.visible = true;
      if (__dep_export_CastleModel.CastleModel.userData.isInAlliance) {
        if (__dep_export_CastleModel.CastleModel.userData.canInviteToAlliance) {
          this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_active_tooltip";
          CastleMapobjectInfoComponent.setOnClickFunction(this.namePlate.iconHitArea, this.bindFunction(this.onClickAllianceSearchIcon));
        } else {
          this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_active_tooltip_noRights";
        }
      } else {
        this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_tooltip";
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.onClick = function (__s70param0) {
    __s1param0.prototype.onClick.call(this, __s70param0);
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      var __s70local0 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.getFirstMovieClipParent(__s70param0.target);
      if (__s70local0 && __s70local0.clickFunction) {
        __s70local0.clickFunction();
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.getColorByAllianceStatus = function (__s74param0) {
    if (__dep_export_CastleModel.CastleModel.userData.isUserInMyAlliance(this._worldmapObjectVO.ownerInfo)) {
      return 7714850;
    }
    switch (__dep_export_CastleModel.CastleModel.allianceData.getStatusByAlliance(__s74param0)) {
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_NEUTRAL:
        return 15388850;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_REAL_ALLIED:
        return 15124482;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        return 16771289;
      case __dep_exact_26a421b704832cff.AllianceConst.DIPLOMACY_IN_WAR:
        return 10360577;
      default:
        return 15388850;
    }
  };
  CastleMapobjectInfoComponent.prototype.onClickSpyIcon = function () {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SSpySpyUnits.C2SSpySpyUnits(this._worldmapObjectVO.absAreaPosX, this._worldmapObjectVO.absAreaPosY));
  };
  CastleMapobjectInfoComponent.prototype.onClickAllianceIcon = function () {
    if (__dep_export_CastleModel.CastleModel.userData.isInAlliance && __dep_export_CastleModel.CastleModel.userData.allianceID == this._worldmapObjectVO.ownerInfo.allianceID) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceDialog.CastleAllianceDialog, new __dep_export_CastleAllianceDialogProperties.CastleAllianceDialogProperties());
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog, new __dep_export_CastleAllianceInfoDialogProperties.CastleAllianceInfoDialogProperties(this._worldmapObjectVO.ownerInfo.allianceID), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleMapobjectInfoComponent.prototype.onClickAllianceSearchIcon = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardYesNoDialog.CastleStandardYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties(__dep_exact_92d05af59ee2ff30_1.Localize.text("generic_alert_watchout"), __dep_exact_92d05af59ee2ff30_1.Localize.text("dialog_allianceInvitationSecurityAlert_desc"), this.bindFunction(this.onInvitePlayerToAlliance)));
  };
  CastleMapobjectInfoComponent.setOnClickFunction = function (__s86param0, __s86param1) {
    __s86param0.clickFunction = __s86param1;
  };
  Object.defineProperty(CastleMapobjectInfoComponent.prototype, "nameMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectInfoComponent.prototype.onInvitePlayerToAlliance = function (__s90param0) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceInvitePlayerVO.C2SAllianceInvitePlayerVO(String(this._worldmapObjectVO.ownerInfo.playerID)));
  };
  CastleMapobjectInfoComponent.getBookmarkTooltip = function (__s92param0) {
    switch (__s92param0.type) {
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY:
        return "Bookmarks_worldmap_player_enemy_tooltip";
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND:
        return "Bookmarks_worldmap_player_friend_tooltip";
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        return "Bookmarks_worldmap_alliance_freeTarget_tooltip";
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        var __s92local0 = __dep_exact_f855840627e6e145.int(__s92param0.attackOrderDetails.remainingTimeInMilliSeconds);
        return {
          t: "Bookmarks_worldmap_alliance_plannedTarget_tooltip",
          p: [__dep_exact_9e901e8e2483a22f_5.TimeStringHelper.getShortTimeString(__s92local0, __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.ONE_TIME_FORMAT)]
        };
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        return "Bookmarks_worldmap_alliance_supportTarget_tooltip";
    }
    return null;
  };
  CastleMapobjectInfoComponent.createBookmarkIcon = function (__s95param0) {
    switch (__s95param0.type) {
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_ENEMY:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Enemy();
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.PLAYER_FRIEND:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Friend();
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_FreeAttack();
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_TimedAttack();
      case __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Support();
    }
    return null;
  };
  CastleMapobjectInfoComponent.prototype.updateTimerTooltips = function () {
    this.updateBookmarkTooltip();
    this.updatePeaceProtectionTooltip();
  };
  CastleMapobjectInfoComponent.prototype.updateBookmarkTooltip = function () {
    if (this.bookmark && this._worldmapObjectVO.bookmark && this._worldmapObjectVO.bookmark.attackOrderDetails) {
      var __s100local0 = __dep_exact_f855840627e6e145.int(this._worldmapObjectVO.bookmark.attackOrderDetails.remainingTimeInMilliSeconds);
      var __s100local1 = __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.getShortTimeString(__s100local0, __dep_exact_9e901e8e2483a22f_5.TimeStringHelper.ONE_TIME_FORMAT);
      if (this._worldmapObjectVO.bookmark.type == __dep_export_EWorldmapBookmarkType.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
        this.bookmark.toolTipText = {
          t: "Bookmarks_worldmap_alliance_plannedTarget_tooltip",
          p: [__s100local1]
        };
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.updatePeaceProtectionTooltip = function () {
    if (this.namePlate && this.namePlate.mc_dove.visible) {
      var __s104local0 = 0;
      if (this._worldmapObjectVO.isOwnMapobject) {
        __s104local0 = Math.max(__dep_export_CastleModel.CastleModel.userData.getRemainingNoobTime(), __dep_export_CastleModel.CastleModel.userData.getRemainingPeaceStatusTime());
      } else if (this._worldmapObjectVO.ownerInfo) {
        __s104local0 = Math.max(this._worldmapObjectVO.ownerInfo.remainingPeaceTime, this._worldmapObjectVO.ownerInfo.remainingNoobTime);
      }
      if (__s104local0 < 0) {
        this.namePlate.mc_dove.toolTipText = "castleHasCooldown_noTimeLimit";
      } else {
        var __s104local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getCantAttackTimeString(__s104local0);
        this.namePlate.mc_dove.toolTipText = {
          t: this._worldmapObjectVO.isOwnMapobject ? "dialog_peaceProtection_active_tooltip" : "dialog_attackCooldown_tooltip",
          p: [__s104local1]
        };
      }
    }
  };
  CastleMapobjectInfoComponent.__initialize_static_members = function () {
    CastleMapobjectInfoComponent.SPY_ICON_POSITION = new __s0local1(40, 50);
    CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION = new __s0local1(30, 40);
    CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION = new __s0local1(-20, 50);
    CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION = new __s0local1(10, 50);
    CastleMapobjectInfoComponent._allianceCrestPosition = new __s0local1(-20, 50);
    CastleMapobjectInfoComponent._allianceCrestPositionTower = new __s0local1(-25, 40);
    CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS = new __s0local1(-25, 73);
    CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS = new __s0local1(95, 45);
  };
  CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON = 0.8;
  return CastleMapobjectInfoComponent;
}(__dep_exact_9e901e8e2483a22f_2.FlashUIComponent);
exports.CastleMapobjectInfoComponent = __s0local2;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ABGTowerConnectionsComponent = require("gge-module:export_ABGTowerConnectionsComponent");
var __dep_export_ABGTowerConnectionStateComponent = require("gge-module:export_ABGTowerConnectionStateComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceDialog = require("gge-module:export_CastleAllianceDialog");
var __dep_export_CastleStandardYesNoDialog = require("gge-module:export_CastleStandardYesNoDialog");
var __dep_export_ABGAllianceTowerMapobjectVO = require("gge-module:export_ABGAllianceTowerMapobjectVO");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
__s0local2.__initialize_static_members();
