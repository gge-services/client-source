Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_GoodgameAdvancedTextFieldFactory = require("gge-module:class_GoodgameAdvancedTextFieldFactory");
var __dep_opaque_c83528567256175cfb346d7d = require("gge-module:opaque_c83528567256175cfb346d7d");
var __dep_class_GGSCountryController = require("gge-module:class_GGSCountryController");
var __dep_exact_c95e4ededfdf159c = require("gge-module:exact_c95e4ededfdf159c");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __s0local0 = createjs.Event;
var __s0local1 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.TEXT_FIELDS_LOGGER + ".GoodgameTextFieldManager");
var __s0local2 = function () {
  function GoodgameTextFieldManager() {
    this._minimumAutoFitFontSize = 8;
    this._maximumAutoFitFontSize = 20;
    this.resetTextFieldList();
    if (GoodgameTextFieldManager.textFieldManager) {
      throw new Error(GoodgameTextFieldManager.NAME + " Calling constructor not allowed! Use getInstance instead.");
    }
  }
  GoodgameTextFieldManager.getInstance = function () {
    GoodgameTextFieldManager.textFieldManager ||= new GoodgameTextFieldManager();
    return GoodgameTextFieldManager.textFieldManager;
  };
  GoodgameTextFieldManager.prototype.resetTextFieldList = function () {
    this._textFieldList = new Map();
    this._maxRegisteredTextFields = 0;
  };
  Object.defineProperty(GoodgameTextFieldManager.prototype, "countryController", {
    get: function () {
      return __dep_class_GGSCountryController.GGSCountryController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "textFieldFactory", {
    get: function () {
      this._textFieldFactory ||= new __dep_class_GoodgameAdvancedTextFieldFactory.GoodgameAdvancedTextFieldFactory();
      return this._textFieldFactory;
    },
    set: function (__s14param0) {
      this._textFieldFactory = __s14param0;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.prototype.isTextFieldRegistered = function (__s16param0) {
    return __dep_exact_c95e4ededfdf159c.DictionaryUtil.containsKey(this._textFieldList, __s16param0);
  };
  GoodgameTextFieldManager.prototype.getTextField = function (__s18param0) {
    return this.getInternalTextField(__s18param0);
  };
  GoodgameTextFieldManager.prototype.getInternalTextField = function (__s20param0) {
    if (__s20param0) {
      return this._textFieldList.get(__s20param0) || this.referenceTextField(__s20param0);
    } else {
      __s0local1.info("textField is null");
      return null;
    }
  };
  GoodgameTextFieldManager.prototype.referenceTextField = function (__s24param0) {
    var __s24local0 = this.textFieldFactory.createAdvancedTextField(__s24param0);
    this._textFieldList.set(__s24param0, __s24local0);
    return __s24local0;
  };
  GoodgameTextFieldManager.prototype.onMouseOut = function (__s26param0) {
    this._mouseOutBehaviour.execute();
  };
  GoodgameTextFieldManager.prototype.onMouseOver = function (__s28param0) {
    this._mouseOverBehaviour.execute();
  };
  GoodgameTextFieldManager.prototype.unregisterTextField = function (__s30param0) {
    var __s30local0;
    return !!__dep_exact_c95e4ededfdf159c.DictionaryUtil.containsKey(this._textFieldList, __s30param0) && (__s30local0 = this._textFieldList.get(__s30param0), this._textFieldList.delete(__s30param0), __s30local0.unregister(), true);
  };
  GoodgameTextFieldManager.prototype.unregisterTextFieldByReference = function (__s32param0) {
    var __s32local0;
    if (__dep_exact_c95e4ededfdf159c.DictionaryUtil.containsValue(this._textFieldList, __s32param0)) {
      var __s32local1 = __dep_exact_c95e4ededfdf159c.DictionaryUtil.getKeyForValue(this._textFieldList, __s32param0);
      __s32local0 = this._textFieldList.get(__s32local1);
      this._textFieldList.delete(__s32local1);
      __s32local0.unregister();
      return true;
    }
    return false;
  };
  Object.defineProperty(GoodgameTextFieldManager.prototype, "registeredTextFieldAmount", {
    get: function () {
      return this._textFieldList.size;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.prototype.unregisterAllTextFields = function () {
    for (var __s37local0 = 0, __s37local1 = Array.from(this._textFieldList.values()); __s37local0 < __s37local1.length; __s37local0++) {
      var __s37local2 = __s37local1[__s37local0];
      this._textFieldList.delete(__s37local2.originalTextField);
      __s37local2.unregister();
      __s37local2 = null;
    }
    this.resetTextFieldList();
  };
  GoodgameTextFieldManager.prototype.saveAndSetText = function (__s41param0, __s41param1, __s41param2 = null, __s41param3 = true) {
    if (__s41param0) {
      if (__s41param1 != null) {
        var __s41local0 = this.getInternalTextField(__s41param0);
        this.updateText(__s41local0, new __dep_opaque_c83528567256175cfb346d7d.LocalizedTextVO(__s41param1, __s41param2, __s41param3));
      } else {
        __s0local1.warn("id for textField: " + __s41param0.name + " is null");
      }
    } else {
      __s0local1.warn("textfield for id: " + __s41param1 + " is missing");
    }
  };
  GoodgameTextFieldManager.prototype.setText = function (__s47param0, __s47param1, __s47param2 = true) {
    if (__s47param0) {
      if (__s47param1 == null) {
        __s0local1.warn("text for textField: " + __s47param0.name + " is null");
        __s47param1 = "";
      }
      var __s47local0 = this.getInternalTextField(__s47param0);
      var __s47local1 = Number(__s47param1);
      if (__s47param1 != "" && __s47param2 && !Number.isNaN(__s47local1)) {
        __s47local0.textContentVO = new __dep_opaque_c83528567256175cfb346d7d.LocalizedNumberVO(__s47local1);
      } else {
        __s47local0.textContentVO = new __dep_opaque_c83528567256175cfb346d7d.TextVO(__s47param1);
      }
    } else {
      __s0local1.warn("textfield for id: " + __s47param1 + " is missing");
    }
  };
  GoodgameTextFieldManager.prototype.updateText = function (__s54param0, __s54param1) {
    __s0local1.debug("updateText ", __s54param0, __s54param1);
    if (!this._languageData || !this._languageData.languageXMLLoaded) {
      __s0local1.debug("Language XML not loaded yet, cannot update textfields." + this._languageData, this._languageData.languageXMLLoaded, __s54param0.textContentVO);
      __s54param1.triggerUpdate = false;
      __s54param0.textContentVO = __s54param1;
      __s54param0.clearText();
      return;
    }
    __s54param1.triggerUpdate = true;
    if (__s54param0.type == __dep_export_CSSMouseCursor.TextFieldType.INPUT) {
      __s54param0.mouseOver.add(this.bindFunction(this.onMouseOver));
      __s54param0.mouseOut.add(this.bindFunction(this.onMouseOut));
    }
    __s54param0.displayLocalizedText(__dep_class_GGSCountryController.GGSCountryController.instance.currentCountry.ggsLanguageCode, __s54param1);
  };
  GoodgameTextFieldManager.prototype.registerInputTextField = function (__s58param0, __s58param1, __s58param2 = null, __s58param3 = true) {
    return this.saveAndSetText(__s58param0, __s58param1, __s58param2, __s58param3);
  };
  GoodgameTextFieldManager.prototype.validateColor = function (__s60param0) {
    if (typeof __s60param0 == "string") {
      return __s60param0;
    } else {
      return __dep_export_CSSMouseCursor.ColorTransform.colorNumToString(__s60param0);
    }
  };
  GoodgameTextFieldManager.prototype.registerTextField = function (__s64param0, __s64param1, __s64param2 = null) {
    if (!__s64param0) {
      var __s64local0 = __s64param1 ? " textContentVO: " + __s64param1.toString() : "";
      __s0local1.error("TextField is null." + __s64local0);
      return null;
    }
    if (__s64param1 === null) {
      __s0local1.error("textObject is null");
      return null;
    }
    if (__s64param2) {
      this.applyInternalGGSTextFieldConfiguration(__s64param2, __s64param0);
    }
    if (__s64param1 instanceof __dep_opaque_c83528567256175cfb346d7d.HTMLTextVO && __s64param1.linkFormats) {
      var __s64local1 = __s64param1.linkFormats;
      __s64param0.htmlLinkFormats = {
        hover: {
          color: this.validateColor(__s64local1.linkHoverFormat.color),
          underline: __s64local1.linkHoverFormat.textDecoration === __dep_export_AssetLoadingFlowType.GGSTextDecoration.UNDERLINE
        },
        normal: {
          color: this.validateColor(__s64local1.linkNormalFormat.color),
          underline: __s64local1.linkNormalFormat.textDecoration === __dep_export_AssetLoadingFlowType.GGSTextDecoration.UNDERLINE
        },
        active: {
          color: this.validateColor(__s64local1.linkActiveFormat.color),
          underline: __s64local1.linkActiveFormat.textDecoration === __dep_export_AssetLoadingFlowType.GGSTextDecoration.UNDERLINE
        }
      };
    }
    var __s64local2 = this.getInternalTextField(__s64param0);
    if (__s64local2.model.type === "input") {
      __s64local2.textContentVO = __s64param1;
    }
    this.updateText(__s64local2, __s64param1);
    return __s64local2;
  };
  GoodgameTextFieldManager.prototype.applyInternalGGSTextFieldConfiguration = function (__s71param0, __s71param1) {
    __s0local1.debug("applyInternalGGSTextFieldConfiguration", __s71param0, __s71param1);
    if (__s71param0.unRegisterAutomaticallyOnRemovedFromStage) {
      __s71param1.addEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onOriginalTextFieldRemoved));
    }
  };
  GoodgameTextFieldManager.prototype.onOriginalTextFieldRemoved = function (__s74param0) {
    __s74param0.target.removeEventListener(__s0local0.REMOVED_FROM_STAGE, this.bindFunction(this.onOriginalTextFieldRemoved));
    this.unregisterTextField(__s74param0.target);
  };
  GoodgameTextFieldManager.prototype.updateTextInAllTextFields = function () {
    for (var __s76local0 = 0, __s76local1 = Array.from(this._textFieldList.values()); __s76local0 < __s76local1.length; __s76local0++) {
      var __s76local2 = __s76local1[__s76local0];
      if (__s76local2.textContentVO) {
        __s76local2.textStrategy.activate();
        this.updateText(__s76local2, __s76local2.textContentVO);
      }
    }
  };
  GoodgameTextFieldManager.prototype.dispose = function () {};
  Object.defineProperty(GoodgameTextFieldManager.prototype, "mouseOutBehaviour", {
    set: function (__s83param0) {
      this._mouseOutBehaviour = __s83param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "mouseOverBehaviour", {
    set: function (__s85param0) {
      this._mouseOverBehaviour = __s85param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "languageData", {
    get: function () {
      return this._languageData;
    },
    set: function (__s89param0) {
      this._languageData = __s89param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "minimumAutoFitFontSize", {
    get: function () {
      return this._minimumAutoFitFontSize;
    },
    set: function (__s93param0) {
      this._minimumAutoFitFontSize = __s93param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "maximumAutoFitFontSize", {
    get: function () {
      return this._maximumAutoFitFontSize;
    },
    set: function (__s97param0) {
      this._maximumAutoFitFontSize = __s97param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameTextFieldManager.prototype, "textFieldList", {
    get: function () {
      return this._textFieldList;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameTextFieldManager.NAME = "GoodgameTextFieldManager";
  return GoodgameTextFieldManager;
}();
exports.GoodgameTextFieldManager = __s0local2;
