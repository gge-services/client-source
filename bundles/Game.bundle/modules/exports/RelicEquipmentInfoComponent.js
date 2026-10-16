Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_BasicEquippableVO = require("gge-module:export_BasicEquippableVO");
var __dep_export_XmlRelicEffectVO = require("gge-module:export_XmlRelicEffectVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_RelicEquipmentInfoElementEnum = require("gge-module:export_RelicEquipmentInfoElementEnum");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = createjs.Rectangle;
var __s0local3 = function (__s1param0) {
  function RelicEquipmentInfoComponent() {
    var __s3local0 = this;
    __s3local0._currentElements = [];
    __s3local0._isLoaded = false;
    __s3local0._hideTitle = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicEquipmentInfoComponent, __s1param0);
  RelicEquipmentInfoComponent.prototype.init = function (__s5param0, __s5param1 = false) {
    this._hideTitle = __s5param1;
    this._disp = new __s0local0();
    __s5param0.addChild(this._disp);
    var __s5local0 = new __dep_export_RelicEquipmentInfoElement.RelicEquipmentInfoElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE, "load");
    if (__s5local0.clip.isLoaded) {
      this.onLoaded(__s5local0.clip);
    } else {
      __s5local0.clip.clipLoaded.add(this.bindFunction(this.onLoaded));
    }
  };
  RelicEquipmentInfoComponent.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this.clearElements();
  };
  RelicEquipmentInfoComponent.prototype.updateWithNewVO = function (__s11param0) {
    this._vo = __s11param0;
    this.update();
  };
  RelicEquipmentInfoComponent.prototype.update = function () {
    if (this.isLoaded) {
      this.clearElements();
      if (!this.vo) {
        this.constructElementsByRandomRelic();
      }
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "RelicEquipmentVO")) {
        this.constructElementsByRelicEquipment();
      } else if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(this.vo, "RelicGemVO")) {
        this.constructElementsByRelicGem();
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRandomRelic = function () {
    this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + "title");
    var __s19local0 = [];
    __s19local0.push(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_equipmentMystery"));
    __s19local0.push(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_itemType"));
    __s19local0.push(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_effectRandom"));
    __s19local0.push(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_category_undefined"));
    var __s19local1 = __dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_category_placeholder_" + __s19local0.length, __s19local0);
    this.setupElementTitle(this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), __dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_name"), __s19local1, new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS), __dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_sellValue"));
    this.addElementText(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_desc"));
    this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRelicEquipment = function () {
    var __s21local0 = this.vo;
    var __s21local1 = __s21local0.relicInfoVO.isRelicDefined();
    if (!this.hideTitle) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + "title");
      this.setupElementTitle(this.addElement(__s21local0.relicInfoVO.isRelicDefined() ? __dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE : __dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), __s21local0.nameString + this.getDebugIdString(this.vo), __s21local0.getDescriptionText(), new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS), __dep_export_RelicItemInfoVO.RelicItemInfoVO.getSellPriceTextByInfoVO(__s21local0.relicInfoVO, __s21local0.getSellPrice().amount));
    }
    if (!__s21local1 && !this.hideTitle) {
      this.addElementText(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_desc"));
    }
    this.setupElementsEffects(__s21local0.relicInfoVO, __s21local0.slotType);
    if (__s21local0.canSlotGem) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT + RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM + "socket");
      if (__s21local0.gemVO && __dep_exact_81dacdf05bd32292_1.instanceOfClass(__s21local0.gemVO, "RelicGemVO")) {
        this.setupElementsEffects(__s21local0.gemVO.relicInfoVO, __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM);
      } else {
        this.addElementHeader("relicequip_dialog_category_relicGem");
        this.addElementGemSocket();
      }
    }
    this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.constructElementsByRelicGem = function () {
    var __s28local0 = this.vo;
    var __s28local1 = __s28local0.relicInfoVO.isRelicDefined();
    if (!this.hideTitle) {
      this.startNewCategory(RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM + "title");
      this.setupElementTitle(this.addElement(__s28local0.relicInfoVO.isRelicDefined() ? __dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE : __dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TITLE_UNDEFINED), __s28local0.nameString + this.getDebugIdString(this.vo), __s28local0.getDescriptionText(), new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_RELIC_FRAGMENTS), __s28local0.relicInfoVO.getSellPriceText());
    }
    if (!__s28local1 && !this.hideTitle) {
      this.addElementText(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomRelic_desc"));
    }
    this.setupElementsEffects(__s28local0.relicInfoVO, __s28local0.slotType);
    this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.END);
  };
  RelicEquipmentInfoComponent.prototype.getDebugIdString = function (__s32param0) {
    var __s32local0 = "";
    if (__dep_export_CastleModel.CastleModel.equipData.showEquipmentIds) {
      __s32local0 = __dep_export_CastleModel.CastleModel.equipData.showEquipmentIds ? " (ID: " + __s32param0.id + ")" : "";
      var __s32local1 = __s32param0;
      if (__s32local1 && __s32local1.gemVO != null) {
        __s32local0 += " (GemID: " + __s32local1.gemVO.id + ")";
      }
    }
    return __s32local0;
  };
  RelicEquipmentInfoComponent.prototype.alignElementsToTarget = function (__s36param0) {
    if (__s36param0 && this.isLoaded && !(this._currentElements.length <= 0)) {
      this._disp.x = 0;
      this._disp.y = 0;
      var __s36local0 = this.getCurrentElementsWidth();
      var __s36local1 = this._currentElements[0].clip.height;
      var __s36local2 = __s36param0.getBounds(null);
      var __s36local3 = new __s0local2();
      var __s36local4 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(__s36local2.topLeft, __s36param0, this._disp);
      var __s36local5 = __dep_export_IsoHelper.IsoHelper.view.calcPosToCoordinateSystem(__s36local2.bottomRight, __s36param0, this._disp);
      __s36local3.top = __s36local4.y;
      __s36local3.left = __s36local4.x;
      __s36local3.bottom = __s36local5.y;
      __s36local3.right = __s36local5.x;
      var __s36local6 = new __s0local1(__s36param0.stage.stageWidth, __s36param0.stage.stageHeight);
      var __s36local7 = new __s0local2();
      __s36local7.left = __s36local3.left;
      __s36local7.right = __s36local6.x - __s36local3.right;
      __s36local7.top = __s36local3.top;
      __s36local7.bottom = __s36local6.y - __s36local3.bottom;
      var __s36local8 = this.getNumberOfNecessaryPages(__s36local3, __s36local7, __s36local6, __s36local1) * __s36local0 - __s36local0 * 0.5;
      var __s36local9 = new __s0local1(__s36local7.right - __s36local8 >= 0 || __s36local7.left - __s36local8 < 0 ? 1 : -1, __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s36local7.bottom - __s36local7.top, -1, 1));
      var __s36local10 = 0;
      var __s36local11 = 0;
      var __s36local12 = 0;
      var __s36local13 = true;
      var __s36local14 = false;
      for (var __s36local15 = 0; __s36local15 < this._disp.numChildren; ++__s36local15) {
        var __s36local16 = this._disp.getChildAt(__s36local15);
        var __s36local17 = __s36local11 == 0 ? __s36local7.top : __s36local6.y - (__s36local3.top - (__s36local13 ? __s36local12 : 0));
        if (__s36local10 + __s36local16.height > __s36local17) {
          if (__s36local11 == 0) {
            __s36local12 = __s36local10;
          }
          if (__s36local11 == 0 && __s36local15 == 0) {
            __s36local14 = true;
          }
          if (__s36local11 == 0 && __s36local15 <= 1) {
            __s36local13 = false;
          }
          __s36local11++;
          __s36local10 = __s36local13 ? __s36local1 : 0;
          true;
        }
        if (__s36local14) {
          if (__s36local9.x > 0) {
            __s36local16.x = __s36local2.right + (__s36local11 - 1) * __s36local0;
          } else {
            __s36local16.x = -__s36local2.left + (__s36local11 - 1) * __s36local0 * -1 - __s36local0;
          }
        } else {
          __s36local16.x = __s36local11 * __s36local0 * __s36local9.x;
        }
        __s36local16.y = __s36local10;
        __s36local10 += __s36local16.height - 2;
      }
      if (__s36local11 == 0) {
        __s36local12 = __s36local10;
      }
      this._disp.x = __s36local3.x + __s36local3.width * 0.5 - __s36local0 * 0.5;
      this._disp.y = __s36local3.top - __s36local12;
      if (__dep_exact_81dacdf05bd32292.MobileHelper.isScreenTooSmall()) {
        var __s36local18 = this._disp.stage.stageWidth - (this._disp.x + this._disp.width);
        if (__s36local18 < 0) {
          this._disp.x += __s36local18;
        }
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.getNumberOfNecessaryPages = function (__s52param0, __s52param1, __s52param2, __s52param3) {
    var __s52local0 = 0;
    var __s52local1 = 0;
    var __s52local2 = 0;
    var __s52local3 = true;
    for (var __s52local4 = 0; __s52local4 < this._disp.numChildren; ++__s52local4) {
      var __s52local5 = this._disp.getChildAt(__s52local4);
      var __s52local6 = __s52local1 == 0 ? __s52param1.top : __s52param2.y - (__s52param0.top - (__s52local3 ? __s52local2 : 0));
      var __s52local7 = false;
      if (__s52local0 + __s52local5.height > __s52local6) {
        if (__s52local1 == 0) {
          __s52local2 = __s52local0;
        }
        if (__s52local1 == 0 && __s52local4 <= 1) {
          __s52local3 = false;
        }
        __s52local1++;
        __s52local0 = __s52local3 ? __s52param3 : 0;
        __s52local7 = true;
      }
      if (!__s52local7) {
        __s52local0 += __s52local5.height;
      }
    }
    return __s52local1 + 1;
  };
  RelicEquipmentInfoComponent.prototype.clearElements = function () {
    this._currentElements = [];
    this._currentCategoryDisp = null;
    this._disp.removeChildren();
    this._disp.x = 0;
    this._disp.y = 0;
    this.destroyCollectableRenderList();
  };
  RelicEquipmentInfoComponent.prototype.startNewCategory = function (__s62param0) {
    var __s62local0 = this._currentCategoryDisp;
    this._currentCategoryDisp = new __s0local0();
    this._disp.addChild(this._currentCategoryDisp);
    this._currentCategoryDisp.name = __s62param0;
    this._currentCategoryDisp.x = __s62local0 ? __s62local0.x : 0;
    this._currentCategoryDisp.y = __s62local0 ? __s62local0.y + __s62local0.height : 0;
  };
  RelicEquipmentInfoComponent.prototype.addElement = function (__s64param0) {
    if (!this._currentCategoryDisp) {
      this.startNewCategory("commonLayer");
    }
    var __s64local0 = this._currentElements.length > 0 ? this._currentElements[this._currentElements.length - 1] : null;
    var __s64local1 = new __dep_export_RelicEquipmentInfoElement.RelicEquipmentInfoElement(__s64param0, this._currentCategoryDisp.name);
    this._currentCategoryDisp.addChild(__s64local1.clip);
    this._currentElements.push(__s64local1);
    var __s64local2 = !!__s64local0 && __s64local0.category == __s64local1.category;
    __s64local1.clip.x = __s64local2 ? __s64local0.clip.x : 0;
    __s64local1.clip.y = __s64local2 ? __s64local0.clip.y + __s64local0.clip.height - 2 : 0;
    if (this.disp.scaleX > 1) {
      this.disp.changeTextFieldCacheScale(2);
    }
    return __s64local1.clip.currentshownDisplayObject;
  };
  RelicEquipmentInfoComponent.prototype.setupElementTitle = function (__s68param0, __s68param1, __s68param2, __s68param3, __s68param4) {
    var __s68local0 = 0;
    __s68param0.mc_backgroundEdgeTop.y = __s68local0;
    __s68local0 += __s68param0.mc_backgroundEdgeTop.height;
    var __s68local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s68param0.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__s68param1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s68local1.y = __s68local0 + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    __s68local1.height = __s68local1.textHeight;
    __s68param0.mc_backgroundTitle.y = __s68local0;
    __s68param0.mc_backgroundTitle.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s68local1.textHeight;
    __s68local0 += __s68param0.mc_backgroundTitle.height - 1;
    if (__s68param0.mc_backgroundLineTitle) {
      __s68param0.mc_backgroundLineTitle.y = __s68local0;
      __s68local0 += __s68param0.mc_backgroundLineTitle.height - 2;
    }
    (__s68local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s68param0.txt_desc, new __dep_exact_92d05af59ee2ff30.TextVO(__s68param2), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true))).height = __s68local1.textHeight;
    __s68local1.y = __s68local0 + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    __s68param0.mc_backgroundDesc.y = __s68local0;
    __s68param0.mc_backgroundDesc.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s68local1.textHeight;
    __s68local0 += __s68param0.mc_backgroundDesc.height - 2;
    if (__s68param0.mc_backgroundLineDesc) {
      __s68param0.mc_backgroundLineDesc.y = __s68local0;
      __s68local0 += __s68param0.mc_backgroundLineDesc.height;
    }
    (__s68local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s68param0.mc_sell.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s68param4), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true))).height = __s68local1.textHeight;
    __s68param0.mc_sell.y = __s68local0 + RelicEquipmentInfoComponent.ELEMENT_PADDING_Y;
    __s68param0.mc_backgroundSell.y = __s68local0;
    __s68param0.mc_backgroundSell.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s68param0.mc_sell.height;
    __s68local0 += __s68param0.mc_backgroundSell.height - 2;
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s68param0.mc_sell.mc_icon).addIconMc(__s68param0.mc_sell.mc_icon), __dep_export_CollectableHelper.CollectableHelper.createVO(__s68param3.type, 0, __s68param3.id), new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON, new __s0local1(20, 20)));
    __s68param0.mc_sell.mc_icon.y = __s68local1.y + __s68local1.height * 0.5;
    __s68param0.mc_backgroundEdgeBottom.y = __s68local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementHeader = function (__s72param0, __s72param1 = null) {
    var __s72local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.HEADER);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s72local0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s72param0, __s72param1), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    return __s72local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementEffect = function (__s74param0, __s74param1) {
    var __s74local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.EFFECT_ITEM);
    var __s74local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s74local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s74param0.descriptionText), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s74local1.height = __s74local1.textHeight;
    __s74local0.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s74local1.textHeight;
    var __s74local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.equipData.relicXml.getStarRating(__s74param0.power));
    var __s74local3 = 0;
    var __s74local4 = 0;
    var __s74local5 = 0;
    if (__s74local2 >= 7) {
      __s74local3 = __s74local4 = __s74local5 = 4;
    } else if (__s74local2 >= 4) {
      __s74local3 = 3;
      __s74local4 = __s74local2 >= 5 ? 3 : 2;
      __s74local5 = __s74local2 >= 6 ? 3 : 2;
    } else {
      __s74local3 = 2;
      __s74local4 = __s74local2 >= 2 ? 2 : 1;
      __s74local5 = __s74local2 >= 3 ? 2 : 1;
    }
    __s74local0.mc_rating.mc_star0.gotoAndStop(__s74local3);
    __s74local0.mc_rating.mc_star1.gotoAndStop(__s74local4);
    __s74local0.mc_rating.mc_star2.gotoAndStop(__s74local5);
    __s74local0.mc_rating.y = __s74local0.mc_background.height * 0.5;
    return __s74local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementGemSocket = function () {
    var __s79local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.GEM_SOCKET);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s79local0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("relicequip_dialog_emptyGemSocket_name"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    return __s79local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementText = function (__s81param0) {
    var __s81local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.TEXT);
    var __s81local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s81local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s81param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    __s81local1.height = __s81local1.textHeight;
    __s81local0.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s81local1.textHeight;
    return __s81local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementEffectUndefined = function (__s83param0) {
    var __s83local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.EFFECT_ITEM_UNDEFINED);
    var __s83local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s83local0.txt_text, new __dep_exact_92d05af59ee2ff30.TextVO(__s83param0.getUndefinedDescriptionText()), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s83local2 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s83local0.txt_value, new __dep_exact_92d05af59ee2ff30.TextVO(__s83param0.getUndefinedValueText()), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    var __s83local3 = __dep_exact_9e901e8e2483a22f.MathBase.max(__s83local1.textHeight, __s83local2.textHeight);
    __s83local1.height = __s83local3;
    __s83local2.height = __s83local3;
    __s83local0.mc_background.height = RelicEquipmentInfoComponent.ELEMENT_PADDING_Y * 2 + __s83local3;
    __s83local0.mc_valueBackground.height = __s83local3;
    return __s83local0;
  };
  RelicEquipmentInfoComponent.prototype.addElementSubHeader = function (__s85param0) {
    var __s85local0 = this.addElement(__dep_export_RelicEquipmentInfoElementEnum.RelicEquipmentInfoElementEnum.HEADER_SUB);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s85local0.txt_text, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__s85param0), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    return __s85local0;
  };
  RelicEquipmentInfoComponent.prototype.setupElementsEffects = function (__s87param0, __s87param1) {
    var __s87local0 = __s87param0.isRelicDefined();
    var __s87local1 = __s87local0 ? __s87param0.getCategorisedEffectsDefined() : __s87param0.getCategorisedEffectsUndefined();
    var __s87local2 = __s87param1 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM ? RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM : RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT;
    var __s87local3 = __dep_exact_f855840627e6e145.int(this.getEnchantmentLevelBySlotType(__s87param1));
    var __s87local4 = "relicequip_dialog_primaryEffects_title";
    if (__s87param1 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_HERO) {
      __s87local4 = "relicequip_dialog_heroEffects_title";
    } else if (__s87param1 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM) {
      __s87local4 = "relicequip_dialog_gemEffects_title";
    }
    if (__s87local1 != null) {
      for (var __s87local5 = 0, __s87local6 = __s87local1; __s87local5 < __s87local6.length; __s87local5++) {
        var __s87local7 = __s87local6[__s87local5];
        if (__s87local7 !== undefined) {
          this.startNewCategory(__s87local2 + RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS + __s87local7.categoryType);
          if (__s87local7.categoryType == __dep_export_XmlRelicEffectVO.XmlRelicEffectVO.EFFECT_TYPE_NORMAL) {
            if (__s87local3 > 0) {
              this.addElementHeader("dialog_relicEnchanter_stats_effectTitleLevel", [__s87local4, __s87local3]);
            } else {
              this.addElementHeader(__s87local4);
            }
          } else {
            this.addElementHeader("relicequip_dialog_" + __s87local7.categoryType + "Effects_title");
          }
          if (!__s87local0 && __s87local7.effects.length > 0) {
            this.addElementSubHeader("relicequip_dialog_predefinedEffect_title");
          }
          for (var __s87local8 = 0, __s87local9 = __s87local7.effects; __s87local8 < __s87local9.length; __s87local8++) {
            var __s87local10 = __s87local9[__s87local8];
            if (__s87local10 !== undefined) {
              if (__s87local0) {
                this.addElementEffect(__s87local10, __s87param1);
              } else {
                this.addElementEffectUndefined(__s87local10);
              }
            }
          }
          if (!__s87local0 && __s87local7.numberOfUnknownEffects > 0) {
            this.addElementSubHeader("relicequip_dialog_randomizedEffect_title");
            this.addElementText(__dep_exact_92d05af59ee2ff30_2.Localize.text("relicequip_dialog_randomizedEffectMultiple_desc", [__s87local7.numberOfUnknownEffects]));
          }
          this.onEffectCategoryAdded(__s87local7.categoryType, __s87param1);
        }
      }
    }
  };
  RelicEquipmentInfoComponent.prototype.getCurrentElementsWidth = function () {
    var __s106local0 = 0;
    if (this._currentElements != null) {
      for (var __s106local1 = 0, __s106local2 = this._currentElements; __s106local1 < __s106local2.length; __s106local1++) {
        var __s106local3 = __s106local2[__s106local1];
        if (__s106local3 !== undefined && __s106local3.clip.width > __s106local0) {
          __s106local0 = __s106local3.clip.width;
        }
      }
    }
    return __s106local0;
  };
  RelicEquipmentInfoComponent.prototype.getEnchantmentLevelBySlotType = function (__s112param0) {
    var __s112local0 = this.vo;
    if (__s112local0) {
      if (__s112param0 == __dep_export_BasicEquippableVO.BasicEquippableVO.SLOT_TYPE_GEM && __s112local0.gemVO) {
        return __dep_exact_f855840627e6e145.int(__s112local0.gemVO.enchantmentLevel);
      } else {
        return __dep_exact_f855840627e6e145.int(__s112local0.enchantmentLevel);
      }
    }
    var __s112local1 = this.vo;
    if (__s112local1) {
      return __s112local1.enchantmentLevel;
    } else {
      return 0;
    }
  };
  RelicEquipmentInfoComponent.prototype.getCategoryYPosition = function (__s119param0) {
    if (this._currentElements != null) {
      for (var __s119local0 = 0, __s119local1 = this._currentElements; __s119local0 < __s119local1.length; __s119local0++) {
        var __s119local2 = __s119local1[__s119local0];
        if (__s119local2 !== undefined && __s119local2.category == __s119param0) {
          return __s119local2.clip.getBounds(this._disp).y;
        }
      }
    }
    return 0;
  };
  RelicEquipmentInfoComponent.prototype.onLoaded = function (__s125param0) {
    __s125param0.clipLoaded.remove(this.bindFunction(this.onLoaded));
    this.clearElements();
    this._isLoaded = true;
    this.update();
  };
  RelicEquipmentInfoComponent.prototype.onEffectCategoryAdded = function (__s127param0, __s127param1) {};
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicEquipmentInfoComponent.prototype, "hideTitle", {
    get: function () {
      return this._hideTitle;
    },
    enumerable: true,
    configurable: true
  });
  RelicEquipmentInfoComponent.ASSET_NAME = "RelicEquipmentInfo";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_EQUIPMENT = "equipment_";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_GEM = "gem_";
  RelicEquipmentInfoComponent.CATEGORY_PREFIX_EFFECTS = "effects_";
  RelicEquipmentInfoComponent.ELEMENT_PADDING_Y = 2;
  return RelicEquipmentInfoComponent;
}(__dep_export_CastleComponent.CastleComponent);
exports.RelicEquipmentInfoComponent = __s0local3;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "ICollectableRendererList");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_RelicItemInfoVO = require("gge-module:export_RelicItemInfoVO");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_RelicEquipmentInfoElement = require("gge-module:export_RelicEquipmentInfoElement");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
