Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleListActionPanelComponent(__s3param0, __s3param1, __s3param2) {
    this._enabled = false;
    this._parentPanel = __s3param2;
    __s3param0.castleList.bg.toolTipText = "panel_action_placeselection";
    __s3param0.castleList.bg.actLikeButton = true;
    __s3param0.castleList.bg.mouseChildren = false;
    __s3param1.toolTipText = "panel_action_jumpTo";
    this._castleList = new __dep_export_ComboboxComponent.ComboboxComponent(__s3param0.castleList, "", -1, 13, 17, -1, 0, new __dep_export_ComboboxItemRendererList.ComboboxItemRendererList(), 5, false, false, 2, "");
    this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onSelectCombobox));
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleDataLoaded));
    __dep_export_CastleModel.CastleModel.worldmapCameraData.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    if (__dep_export_CastleModel.CastleModel.userData.castleList) {
      this.onChangeCastleList();
    }
    this._jumpToButton = __s3param1;
  }
  CastleListActionPanelComponent.prototype.onChangeLayoutState = function (__s6param0) {
    this.hideItems();
    this._castleList.enabled = !__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive;
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onSelectCombobox = function (__s9param0) {
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onSelectCastle = function (__s12param0) {
    if (this.selectedWorldmapObjectVO.kingdomID == __dep_exact_26a421b704832cff_1.FactionConst.KINGDOM_ID && !__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_FACTION)) {
      this._castleList.selectedData.enabled = false;
      this._castleList.selectedData.visible = false;
      __dep_export_CastleBasicController.CastleBasicController.getInstance().dispatchEvent(new __dep_export_CastleUserDataEvent.CastleUserDataEvent(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST));
      return;
    }
    __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
    this.switchCastle();
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onChangeCastleList = function (__s16param0 = null) {
    var __s16local0;
    var __s16local1 = -1;
    var __s16local2 = -1;
    var __s16local3 = -1;
    var __s16local4 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
    if (this._castleList.itemData.length > 0) {
      __s16local1 = __dep_exact_f855840627e6e145.int(this.selectedWorldmapObjectVO.objectId);
    }
    this._castleList.clearItems();
    for (var __s16local5 = 0, __s16local6 = __dep_export_CastleModel.CastleModel.userData.castleList.listForActionPanel; __s16local5 < __s16local6.length; __s16local5++) {
      var __s16local7 = __s16local6[__s16local5];
      if (__s16local7 !== undefined) {
        (__s16local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s16local7.areaNameString;
        __s16local0.data = __s16local7;
        this._castleList.addItem(__s16local0);
        if (__s16local7.objectId == __s16local1 && __s16local7.kingdomID == __s16local4) {
          __s16local2 = __dep_exact_f855840627e6e145.int(this._castleList.itemData.length - 1);
        }
        if (__s16local7.kingdomID == __s16local4) {
          __s16local3 = __dep_exact_f855840627e6e145.int(this._castleList.itemData.length - 1);
        }
      }
    }
    if (__s16local2 != -1) {
      this._castleList.selectIndexWithoutEvent(__s16local2);
    } else if (__s16local3 != -1) {
      this._castleList.selectIndexWithoutEvent(__s16local3);
    } else {
      this._castleList.selectIndexWithoutEvent(0);
    }
    __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onChangeSelectedCastleListItem = function (__s28param0) {
    if (__dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel != this.selectedWorldmapObjectVO) {
      for (var __s28local0 = 0; __s28local0 < this._castleList.itemData.length; __s28local0++) {
        if (this._castleList.itemData[__s28local0].data == __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel) {
          this._castleList.selectIndexWithoutEvent(__s28local0);
          return;
        }
      }
    }
  };
  CastleListActionPanelComponent.prototype.onCastleDataLoaded = function (__s34param0) {
    var __s34local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaId);
    var __s34local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.kingdomID);
    for (var __s34local2 = 0; __s34local2 < this._castleList.itemData.length; __s34local2++) {
      var __s34local3 = this._castleList.itemData[__s34local2].data;
      if (__s34local3.objectId == __s34local0 && __s34local3.kingdomID == __s34local1) {
        this._castleList.selectIndexWithoutEvent(__s34local2);
        __dep_export_CastleModel.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = this.selectedWorldmapObjectVO;
      }
    }
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleListActionPanelComponent.prototype.onClickJumpToButton = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.switchCastle();
    }
  };
  CastleListActionPanelComponent.prototype.switchCastle = function () {
    this.hideItems();
    var __s43local0 = this.selectedWorldmapObjectVO;
    if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s43local0.kingdomID)) {
      this._castleList.selectItemIndex(this._castleList.previousSelectedItem);
    } else {
      switch (this.layoutManager.currentState) {
        case __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_KINGDOMMAP:
          var __s43local1 = [__s43local0.kingdomID, __s43local0.absAreaPosX, __s43local0.absAreaPosY];
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, __s43local1);
          break;
        case __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO:
          if (__s43local0.objectId == __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId && __s43local0.kingdomID == __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID) {
            return;
          }
          this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, []));
          __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s43local0);
          break;
        case __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP:
          var __s43local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID);
          if (__s43local0.kingdomID != __s43local2) {
            __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [__s43local0.kingdomID, __s43local0.absAreaPosX, __s43local0.absAreaPosY, __s43local2]);
            __dep_export_CastleModel.CastleModel.worldmapCameraData.savedMapPosition = null;
          } else {
            this.layoutManager.worldmapScreen.camera.centerArea(new __s0local0(__s43local0.absAreaPosX, __s43local0.absAreaPosY));
          }
      }
    }
  };
  CastleListActionPanelComponent.prototype.hideItems = function () {
    this._castleList.hideItems();
  };
  CastleListActionPanelComponent.prototype.destroy = function () {
    this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onSelectCombobox));
    this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onCastleDataLoaded));
    if (__dep_export_CastleModel.CastleModel.worldmapData) {
      __dep_export_CastleModel.CastleModel.worldmapData.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SELECTED_CASTLELIST_ITEM_CHANGED, this.bindFunction(this.onChangeSelectedCastleListItem));
    }
  };
  Object.defineProperty(CastleListActionPanelComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "selectedWorldmapObjectVO", {
    get: function () {
      return this._castleList.selectedData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleListActionPanelComponent.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (__s64param0) {
      this._enabled = __s64param0;
      this._castleList.enabled = __s64param0;
      this._jumpToButton.enableButton = __s64param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleListActionPanelComponent;
}();
exports.CastleListActionPanelComponent = __s0local1;
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ComboboxItemRendererList = require("gge-module:export_ComboboxItemRendererList");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
