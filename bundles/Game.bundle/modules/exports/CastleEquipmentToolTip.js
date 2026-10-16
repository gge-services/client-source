Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstHero = require("gge-module:export_ClientConstHero");
var __dep_export_CastleStringHelper = require("gge-module:export_CastleStringHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_CastleMathHelper = require("gge-module:export_CastleMathHelper");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleEquipmentToolTip() {
    this._showCountdown = false;
    this._forceHideTimer = false;
    CastleEquipmentToolTip._equipToolTipClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("Equipment_ToolTip_H", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Equipment_ToolTip_H"), null, 24, true);
  }
  Object.defineProperty(CastleEquipmentToolTip.prototype, "equipToolTip", {
    get: function () {
      return CastleEquipmentToolTip._equipToolTipClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.prototype.initToolTip = function (__s7param0, __s7param1, __s7param2 = null, __s7param3 = true, __s7param4 = false) {
    if (CastleEquipmentToolTip._equipToolTipClip.isLoaded && (this._showCountdown = __s7param3, this._forceHideTimer = __s7param4, this._currentEquippableVO = __s7param0, this._currentLordVO = __s7param2, this._currentTarget = __s7param1, __s7param0)) {
      this.setItemInfo(this.equipToolTip.itemInfo);
      var __s7local0 = this.getSecondSetItem();
      if (this._currentEquippableVO.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
        this.setSetItemInfo(this.equipToolTip.setInfo_1, this._currentEquippableVO.setID > 0 ? this._currentEquippableVO : __s7local0);
        this.setSetItemInfo(this.equipToolTip.setInfo_2, this._currentEquippableVO.setID > 0 && __s7local0 ? __s7local0 : null);
      } else {
        this.setSetItemInfo(this.equipToolTip.setInfo_1, this._currentEquippableVO.setID > 0 ? this._currentEquippableVO : __s7local0);
        this.setSetItemInfo(this.equipToolTip.setInfo_2, this._currentEquippableVO.setID > 0 ? __s7local0 : null);
      }
      var __s7local1 = __dep_exact_f855840627e6e145.int(this.equipToolTip.bg.height);
      __s7local1 += __dep_exact_f855840627e6e145.int(Math.max(this.equipToolTip.setInfo_1.bg.height - 10, 0));
      __s7local1 += __dep_exact_f855840627e6e145.int(Math.max(this.equipToolTip.setInfo_2.bg.height - 10, 0));
      this.setPosition(__s7local1, this.bindFunction(this.positionAsCombinedTooltip), "positionAsCombinedTooltip");
    }
  };
  CastleEquipmentToolTip.prototype.setPosition = function (__s12param0, __s12param1, __s12param2) {
    var __s12local0 = this._currentTarget.localToGlobal(new __s0local0(0, 0));
    var __s12local1 = __s12local0.clone();
    __s12local0.y -= this._currentTarget.height / 2;
    __s12local1.y += this._currentTarget.height / 2 + __s12param0;
    if (__s12local0.y - __s12param0 < 0) {
      if (__s12local1.y < this.equipToolTip.stage.stageHeight || __s12param2 == "positionAsSplitTooltip") {
        __s12param1(__s12local1, __s12param0);
      } else if (this.equipToolTip.bg.height <= this.equipToolTip.stage.stageHeight && !this.hasSetInfo() && this._currentEquippableVO.setID <= 0) {
        this.positionAsNextToIcon(__s12local0, this.equipToolTip.bg.height);
        __s12param1(this.disp.localToGlobal(new __s0local0(0, 0)), __s12param0);
      } else {
        this.setPosition(this.equipToolTip.bg.height, this.bindFunction(this.positionAsSplitTooltip), "positionAsSplitTooltip");
      }
    } else {
      __s12param1(__s12local0, __s12param0);
    }
  };
  CastleEquipmentToolTip.prototype.hasSetInfo = function () {
    return this.equipToolTip.setInfo_1.visible || this.equipToolTip.setInfo_2.visible;
  };
  CastleEquipmentToolTip.prototype.positionAsNextToIcon = function (__s21param0, __s21param1) {
    if (__s21param0.x - 20 - CastleEquipmentToolTip.BOX_WIDTH > 0) {
      this.disp.x = __s21param0.x - 20 - CastleEquipmentToolTip.BOX_WIDTH * 0.5;
    } else if (__s21param0.x + 20 + CastleEquipmentToolTip.BOX_WIDTH < this.equipToolTip.stage.stageWidth) {
      this.disp.x = __s21param0.x + 20 + CastleEquipmentToolTip.BOX_WIDTH * 0.5;
    } else {
      this.disp.x = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s21param0.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    }
    this.disp.y = this.equipToolTip.stage.stageHeight - (this.equipToolTip.stage.stageHeight - __s21param1) / 2;
  };
  CastleEquipmentToolTip.prototype.positionAsSplitTooltip = function (__s26param0, __s26param1) {
    this.disp.x = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s26param0.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    this.disp.y = __s26param0.y;
    var __s26local0 = __dep_exact_f855840627e6e145.int(this.disp.x + CastleEquipmentToolTip.BOX_WIDTH * 1.5 > this.equipToolTip.stage.stageWidth ? -1 : 1);
    this.equipToolTip.setInfo_1.x = CastleEquipmentToolTip.BOX_WIDTH * __s26local0;
    __s26local0 = __dep_exact_f855840627e6e145.int(this.disp.x + CastleEquipmentToolTip.BOX_WIDTH * (__s26local0 * 2 + 0.5) > this.equipToolTip.stage.stageWidth ? -1 : __s26local0 * 2);
    this.equipToolTip.setInfo_2.x = CastleEquipmentToolTip.BOX_WIDTH * __s26local0;
    this.equipToolTip.itemInfo.y = 0;
    this.equipToolTip.bg.height = __s26param1;
    var __s26local1 = __dep_exact_f855840627e6e145.int(this.equipToolTip.stage.stageHeight - __s26param0.y);
    this.equipToolTip.setInfo_1.y = Math.min(this.equipToolTip.setInfo_1.bg.height - this.equipToolTip.bg.height, __s26local1);
    this.equipToolTip.setInfo_2.y = Math.min(this.equipToolTip.setInfo_2.bg.height - this.equipToolTip.bg.height, __s26local1);
  };
  CastleEquipmentToolTip.prototype.positionAsCombinedTooltip = function (__s28param0, __s28param1) {
    this.disp.x = __dep_export_CastleMathHelper.CastleMathHelper.clamp(__s28param0.x, 0 + CastleEquipmentToolTip.BOX_WIDTH * 0.5, this.equipToolTip.stage.stageWidth - CastleEquipmentToolTip.BOX_WIDTH * 0.5);
    this.disp.y = __s28param0.y;
    this.equipToolTip.setInfo_1.x = 0;
    this.equipToolTip.setInfo_2.x = 0;
    this.equipToolTip.bg.height = __s28param1;
    this.equipToolTip.setInfo_2.y = 0;
    this.equipToolTip.setInfo_1.y = this.equipToolTip.setInfo_2.y - (this.equipToolTip.setInfo_2.visible ? this.equipToolTip.setInfo_2.bg.height - 10 : 0);
    this.equipToolTip.itemInfo.y = this.equipToolTip.setInfo_1.y - (this.equipToolTip.setInfo_1.visible ? this.equipToolTip.setInfo_1.bg.height - 10 : 0);
    this.equipToolTip.setInfo_1.bg.visible = false;
    this.equipToolTip.setInfo_2.bg.visible = false;
  };
  CastleEquipmentToolTip.prototype.getSecondSetItem = function () {
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._currentEquippableVO, "BasicEquipmentVO")) {
      var __s30local0 = this._currentEquippableVO.gemVO;
      if (__s30local0 && __s30local0.setVO && (this._currentEquippableVO.setID <= 0 || __s30local0.setVO.id != this._currentEquippableVO.setVO.id)) {
        return __s30local0;
      }
    }
    return null;
  };
  CastleEquipmentToolTip.prototype.setItemInfo = function (__s34param0) {
    __s34param0.itxt_name = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this._currentEquippableVO.nameString));
    __s34param0.itxt_name.color = this._currentEquippableVO.nameColor;
    __s34param0.itxt_name.visible = !this.isTextEmpty(__s34param0.itxt_name.textContentVO.stringValue);
    __s34param0.itxt_short_description = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_short_description, new __dep_exact_92d05af59ee2ff30.TextVO(this.getShortDescriptionText(this._currentEquippableVO)));
    __s34param0.itxt_short_description.visible = !this.isTextEmpty(__s34param0.itxt_short_description.textContentVO.stringValue);
    __s34param0.itxt_short_description_starLevel = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_short_description_starLevel, new __dep_exact_92d05af59ee2ff30.TextVO(this._currentEquippableVO.typeDescriptionStarLevelText));
    __s34param0.itxt_short_description_starLevel.visible = !this.isTextEmpty(__s34param0.itxt_short_description_starLevel.textContentVO.stringValue);
    __s34param0.itxt_description = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_description, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this._currentEquippableVO.bonusDescriptionText));
    __s34param0.itxt_description.visible = !this.isTextEmpty(__s34param0.itxt_description.text);
    __s34param0.itxt_extraText = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_extraText, new __dep_exact_92d05af59ee2ff30.TextVO(this._currentEquippableVO.extraText));
    __s34param0.itxt_extraText.visible = !this.isTextEmpty(__s34param0.itxt_extraText.textContentVO.stringValue);
    __s34param0.itxt_extraTextAppearanceTarget = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_extraTextAppearanceTarget, new __dep_exact_92d05af59ee2ff30.TextVO(this._currentEquippableVO.extraTextAppearanceTarget));
    __s34param0.itxt_extraTextAppearanceTarget.visible = !this.isTextEmpty(__s34param0.itxt_extraTextAppearanceTarget.textContentVO.stringValue);
    if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this._currentEquippableVO, "BasicEquipmentVO")) {
      var __s34local0 = this._currentEquippableVO.gemVO;
      if (this._currentEquippableVO.canSlotGem) {
        __s34param0.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_gemText, __s34local0 ? new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s34local0.bonusDescriptionText) : new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("equip_effect_description_emptyGemSocket_name"));
      } else {
        __s34param0.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_gemText, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("equip_effect_description_noGemSocket_name"));
      }
      __s34param0.itxt_gemText.visible = !this.isTextEmpty(__s34param0.itxt_gemText.text);
      if (this._currentEquippableVO.isSkinItem() && this._currentEquippableVO.hasSkinInfo()) {
        __s34param0.mc_appearance.visible = true;
        this.setAppearanceInfo(__s34param0.mc_appearance);
      } else {
        __s34param0.mc_appearance.visible = false;
      }
    } else {
      __s34param0.itxt_gemText = CastleEquipmentToolTip.textFieldManager.registerTextField(__s34param0.txt_gemText, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      __s34param0.itxt_gemText.visible = false;
      __s34param0.mc_appearance.visible = false;
    }
    var __s34local1 = this.placeTextField(__s34param0.itxt_extraTextAppearanceTarget, null);
    __s34local1 = this.placeTextField(__s34param0.itxt_extraText, __s34local1);
    __s34local1 = this.placeMC(__s34param0.mc_appearance, __s34local1);
    __s34local1 = this.placeTextField(__s34param0.itxt_gemText, __s34local1);
    __s34local1 = this.placeTextField(__s34param0.itxt_description, __s34local1);
    __s34local1 = this.placeTextField(__s34param0.itxt_short_description_starLevel, __s34local1);
    __s34local1 = this.placeTextField(__s34param0.itxt_short_description, __s34local1);
    __s34local1 = this.placeTextField(__s34param0.itxt_name, __s34local1);
    __s34param0.line0.visible = !this.isTextEmpty(__s34param0.itxt_name.text) && !this.isTextEmpty(__s34param0.itxt_short_description.text);
    __s34param0.line0.y = __s34param0.itxt_short_description.y - 2;
    __s34param0.line1.visible = !this.isTextEmpty(__s34param0.itxt_short_description.text) && !this.isTextEmpty(__s34param0.itxt_description.text);
    __s34param0.line1.y = __s34param0.itxt_description.y - 2;
    __s34param0.line1_5.visible = !this.isTextEmpty(__s34param0.itxt_short_description_starLevel.text);
    __s34param0.line1_5.y = __s34param0.itxt_short_description_starLevel.y - 2;
    __s34param0.line2.visible = !this.isTextEmpty(__s34param0.itxt_gemText.text);
    __s34param0.line2.y = __s34param0.itxt_gemText.y - 2;
    __s34param0.line3.visible = !this.isTextEmpty(__s34param0.itxt_extraText.text);
    __s34param0.line3.y = __s34param0.itxt_extraText.y - 2;
    __s34param0.line4.visible = !this.isTextEmpty(__s34param0.itxt_extraTextAppearanceTarget.text);
    __s34param0.line4.y = __s34param0.itxt_extraTextAppearanceTarget.y - 2;
    this.equipToolTip.bg.height = Math.abs(__s34local1.y) + 5;
  };
  CastleEquipmentToolTip.prototype.setAppearanceInfo = function (__s42param0) {
    __s42param0.customHeight ||= __s42param0.height;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s42param0.mc_appearance_container.iconHolder);
    if (this._currentEquippableVO.lordType == __dep_export_BasicEquippableVO.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      var __s42local0 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID;
      var __s42local1 = __s42local0 ? __dep_export_CastleModel.CastleModel.kingdomData.getKingdomVOByID(__dep_exact_26a421b704832cff.WorldIsland.KINGDOM_ID).kingdomName : "Common";
      var __s42local2 = "Skin_Mapmovement_" + this._currentEquippableVO.skinAssetID + "_" + __s42local1;
      if (!__dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.isItemAssetVersioned(__s42local2)) {
        __s42local2 = "Skin_Mapmovement_" + this._currentEquippableVO.skinAssetID + "_Common";
      }
      var __s42local3 = __dep_exact_81dacdf05bd32292.getDefinitionByNameFromLibrary("LoadingAnimation_Centered");
      var __s42local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s42local2, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s42local2), this.clipColor, 0, false, __s42local3, false, 1, false, false, true);
      __s42param0.mc_appearance_container.iconHolder.addChild(__s42local4);
      __s42local4.doWhenLoaded(function (__s46param0) {
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s42local4, 215, 105, 1, true);
      });
      CastleEquipmentToolTip.textFieldManager.registerTextField(__s42param0.txt_appearance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s42local0 ? "equip_effect_description_appearance_commander_ship" : "equip_effect_description_appearance_commander_army"));
    } else {
      var __s42local5 = this._currentLordVO && this._currentLordVO.isBaron && this._currentLordVO.lockedInCastleID > -1 ? __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(this._currentLordVO.lockedInCastleID) : __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
      if (!__s42local5) {
        return;
      }
      var __s42local6 = __s42local5.equipmentUniqueIdSkin;
      __s42local5.equipmentUniqueIdSkin = this._currentEquippableVO.uniqueID;
      var __s42local7 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s42local5, new __s0local0(215, 105), true, false, false);
      __s42param0.mc_appearance_container.iconHolder.addChild(__s42local7);
      __s42local5.equipmentUniqueIdSkin = __s42local6;
      var __s42local8 = this.getAppearanceTextID(__s42local5);
      CastleEquipmentToolTip.textFieldManager.registerTextField(__s42param0.txt_appearance, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s42local8));
    }
  };
  CastleEquipmentToolTip.prototype.getAppearanceTextID = function (__s50param0) {
    switch (__s50param0.areaType) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_OUTPOST:
        return "equip_effect_description_appearance_baron_outpost";
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_CAPITAL:
        return "equip_effect_description_appearance_baron_capital";
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_METROPOL:
        return "equip_effect_description_appearance_baron_metropolis";
      default:
        return "equip_effect_description_appearance_baron_mainCastle";
    }
  };
  Object.defineProperty(CastleEquipmentToolTip.prototype, "clipColor", {
    get: function () {
      var __s53local0 = [];
      __s53local0.push(new __dep_exact_9e901e8e2483a22f.ClipColor("flag", __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsFour));
      return __s53local0;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.prototype.getShortDescriptionText = function (__s55param0) {
    var __s55local0 = this._currentEquippableVO.typeDescriptionText;
    if (!!__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s55param0, "BasicEquipmentVO") && !__s55param0.isPermanent && !this._forceHideTimer) {
      __s55local0 += "\n" + this.getDurationText(__s55param0, this._showCountdown);
    }
    return __s55local0;
  };
  CastleEquipmentToolTip.prototype.isTextEmpty = function (__s58param0) {
    return __s58param0.length == 0 || __s58param0 == "<p></p>";
  };
  CastleEquipmentToolTip.prototype.setSetItemInfo = function (__s60param0, __s60param1) {
    __s60param0.itxt_setReached = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60param0.txt_setReached, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s60param0.itxt_setNotReached = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60param0.txt_setNotReached, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s60param0.itxt_setName = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60param0.txt_setName, new __dep_exact_92d05af59ee2ff30.TextVO(""));
    __s60param0.itxt_setName.color = __dep_export_ClientConstColor.ClientConstColor.LORD_HAS_UNIQUE_ITEM_EQUIPPED;
    var __s60local0 = __s60param1 ? __s60param1.setVO : null;
    __s60param0.bg.visible = false;
    if (__s60local0) {
      __s60param0.itxt_setReached = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60param0.txt_setReached, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s60local0.getReachedSetBonusText(this._currentLordVO)));
      __s60param0.itxt_setNotReached = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60param0.txt_setNotReached, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s60local0.getNotReachedSetBonusText(this._currentLordVO)));
      var __s60local1 = "";
      if (this._currentLordVO) {
        var __s60local2 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this._currentLordVO.getCountOfSetId(__s60local0.id), __s60local0.maxNeededItems]);
        __s60local1 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_ASSIGN_COLON, [__s60local2, __s60local0.name]);
      } else {
        __s60local1 = __s60local0.name;
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param1, "BasicEquipmentVO")) {
        __s60local1 = this.getNameForSkinEquipment(__s60param1, __s60local1);
        if (__s60param1.isPermanent && __s60param1.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
          __s60param0.itxt_setName.color = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
        }
      }
      __s60param0.itxt_setName.textContentVO.stringValue = __s60local1;
      __s60param0.bg.visible = true;
    } else {
      __s60param0.itxt_setName.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO("");
      if (__s60param1 && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60param1, "BasicEquipmentVO")) {
        __s60param0.itxt_setName.textContentVO = new __dep_exact_92d05af59ee2ff30.TextVO(this.getNameForSkinEquipment(__s60param1));
        if (__s60param1.isPermanent && __s60param1.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN) {
          __s60param0.itxt_setName.color = __dep_export_ClientConstColor.ClientConstColor.EQUIPMENT_COLOR_GEM;
        }
      }
      __s60param0.itxt_setReached.textContentVO.stringValue = "";
      __s60param0.itxt_setNotReached.textContentVO.stringValue = "";
    }
    for (var __s60local3 = 0; __s60local3 < CastleEquipmentToolTip.NUMBER_OF_SET_MCS; __s60local3++) {
      var __s60local4 = __s60param0["mc_setItem" + (__s60local3 + 1)];
      __s60local4.itxt_value = CastleEquipmentToolTip.textFieldManager.registerTextField(__s60local4.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(""));
      __s60local4.itxt_value.textAlign = __dep_exact_9e901e8e2483a22f_3.GGSTextAlign.LEFT;
      if (!__s60local0 || __s60local3 >= __s60local0.setItems.length) {
        __s60local4.itxt_value.textContentVO.stringValue = "";
        __s60local4.visible = false;
      } else {
        var __s60local5 = __s60local0.setItems[__s60local3];
        __s60local4.itxt_value.textContentVO.stringValue = __s60local5.nameString;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60local5, "CastleHeroVO") && __dep_export_ClientConstHero.ClientConstHero.STARTER_HEROES.indexOf(__s60local5.uniqueID) > -1 && __s60local5.uniqueID != __dep_export_CastleModel.CastleModel.userData.selectedHeroID) {
          continue;
        }
        if (this._currentLordVO && this._currentLordVO.hasUniqueItemEquipped(__s60local5)) {
          __s60local4.itxt_value.color = __dep_export_ClientConstColor.ClientConstColor.LORD_HAS_UNIQUE_ITEM_EQUIPPED;
          __s60local4.mc_point.gotoAndStop(2);
        } else {
          __s60local4.itxt_value.color = __dep_export_ClientConstColor.ClientConstColor.LORD_HAS_NO_UNIQUE_ITEM_EQUIPPED;
          __s60local4.mc_point.gotoAndStop(1);
        }
        __s60local4.bg.height = __s60local4.itxt_value.textHeight + 3;
        __s60local4.mc_point.y = __s60local4.bg.height / 2;
        __s60local4.visible = true;
        __s60local4.mc_star.visible = false;
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60local5, "BasicEquipmentVO") && __s60local5.hasStar) {
          __s60local4.mc_star.visible = true;
          __s60local4.mc_star.gotoAndStop(__s60local5.starRarity + 1);
          CastleEquipmentToolTip.textFieldManager.registerTextField(__s60local4.mc_star.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(__s60local5.starLevel.toString()));
        }
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s60local5, "CastleGemVO") && __s60local5.hasStar) {
          __s60local4.mc_star.visible = true;
          __s60local4.mc_star.gotoAndStop(__s60local5.starRarity + 1);
          CastleEquipmentToolTip.textFieldManager.registerTextField(__s60local4.mc_star.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(__s60local5.starLevel.toString()));
        }
      }
    }
    __s60param0.itxt_setReached.visible = !this.isTextEmpty(__s60param0.itxt_setReached.text);
    __s60param0.itxt_setNotReached.visible = !this.isTextEmpty(__s60param0.itxt_setNotReached.text);
    __s60param0.itxt_setName.visible = __s60param1 && (__s60param1.setVO != null || __s60param1.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN);
    var __s60local6 = this.placeTextField(__s60param0.itxt_setNotReached, null);
    __s60local6 = this.placeTextField(__s60param0.itxt_setReached, __s60local6);
    for (var __s60local7 = CastleEquipmentToolTip.NUMBER_OF_SET_MCS; __s60local7 > 0; __s60local7--) {
      __s60local6 = this.placeMC(__s60param0["mc_setItem" + __s60local7], __s60local6);
    }
    __s60local6 = this.placeTextField(__s60param0.itxt_setName, __s60local6);
    __s60param0.line.visible = !this.isTextEmpty(__s60param0.itxt_setReached.text) && !this.isTextEmpty(__s60param0.itxt_setNotReached.text);
    __s60param0.line.y = __s60param0.itxt_setNotReached.y - 2;
    __s60param0.bg.height = __s60local6 ? Math.abs(__s60local6.y) + 5 : 0;
    __s60param0.visible = __s60local6 != null;
  };
  CastleEquipmentToolTip.prototype.getNameForSkinEquipment = function (__s81param0, __s81param1 = null) {
    var __s81local0 = "";
    if (__s81param0.isPermanent && __s81param0.slotType == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_SKIN && __s81param0.isPermanent) {
      __s81local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text("equip_effect_description_permanentAppearance");
    }
    if (!__dep_export_CastleStringHelper.CastleStringHelper.isNullOrEmpty(__s81param1)) {
      __s81local0 += (__s81local0.length > 0 ? "\n" : "") + __s81param1;
    }
    return __s81local0;
  };
  CastleEquipmentToolTip.prototype.placeTextField = function (__s85param0, __s85param1) {
    if (__s85param0.visible) {
      if (__s85param0.originalTextField) {
        __s85param0.originalTextField.height = __s85param0.textHeight;
      }
      __s85param0.y = (__s85param1 && __s85param1.visible ? __s85param1.y : -5) - __s85param0.textHeight - 4;
      return __s85param0;
    } else {
      return __s85param1;
    }
  };
  CastleEquipmentToolTip.prototype.placeMC = function (__s90param0, __s90param1) {
    if (__s90param0.visible) {
      var __s90local0 = __dep_exact_81dacdf05bd32292.castAs(__s90param1, "IBasicGGSTextField");
      __s90param0.y = (__s90param1 ? __s90param1.y : 0) - (__s90param0.itxt_value ? __s90param0.itxt_value.textHeight : __s90param0.customHeight ? __s90param0.customHeight : __s90param0.height) - (__s90local0 != null ? 7 : 5);
      return __s90param0;
    }
    return __s90param1;
  };
  CastleEquipmentToolTip.prototype.getDurationText = function (__s93param0, __s93param1 = true) {
    var __s93local0 = __dep_exact_f855840627e6e145.int(__s93param1 ? __s93param0.remainingDuration : __s93param0.totalDuration);
    var __s93local1 = __dep_exact_f855840627e6e145.int(__s93local0 / 60);
    var __s93local2 = __dep_exact_f855840627e6e145.int(__s93local1 / 60);
    var __s93local3 = __dep_exact_f855840627e6e145.int(__s93local2 / 24);
    if (__s93local3 > 0) {
      return __dep_exact_92d05af59ee2ff30_2.Localize.text("countdown_time_equipment_days", [__s93local3, __s93local2 - __s93local3 * 24]);
    } else if (__s93local2 > 0) {
      return __dep_exact_92d05af59ee2ff30_2.Localize.text("countdown_time_equipment_hours", [__s93local2, __s93local1 - __s93local2 * 60]);
    } else {
      return __dep_exact_92d05af59ee2ff30_2.Localize.text("countdown_time_equipment_minutes", [__s93local1]);
    }
  };
  Object.defineProperty(CastleEquipmentToolTip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentToolTip.prototype, "disp", {
    get: function () {
      return CastleEquipmentToolTip._equipToolTipClip;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentToolTip.BOX_WIDTH = 230;
  CastleEquipmentToolTip.NUMBER_OF_SET_MCS = 12;
  return CastleEquipmentToolTip;
}();
exports.CastleEquipmentToolTip = __s0local1;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
