Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_export_LoremIpsum = require("gge-module:export_LoremIpsum");
var __dep_export_CastlePanel = require("gge-module:export_CastlePanel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = createjs.Shape;
var __s0local3 = function (__s1param0) {
  function CastleLocationCheatPanel() {
    var __s3local0 = this;
    __s3local0.isShown = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, new __s0local0()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLocationCheatPanel, __s1param0);
  CastleLocationCheatPanel.prototype.addEventListenerOnInit = function () {
    this._input = __dep_exact_9e901e8e2483a22f_2.Input.instance;
    if (this.env.isTest || this.env.urlVariables.forceToShowTestServers) {
      document.addEventListener("keydown", this.bindFunction(this.keyboardInput));
      window.addEventListener("mousedown", this.bindFunction(this.recoverKeyboardFocus), true);
    }
  };
  CastleLocationCheatPanel.prototype.removeEventListenerOnDestroy = function () {
    document.removeEventListener("keydown", this.bindFunction(this.keyboardInput));
    window.removeEventListener("mousedown", this.bindFunction(this.recoverKeyboardFocus), true);
  };
  CastleLocationCheatPanel.prototype.recoverKeyboardFocus = function () {
    if (!document.hasFocus()) {
      window.focus();
    }
  };
  CastleLocationCheatPanel.prototype.keyboardInput = function (__s13param0) {
    if (__s13param0.ctrlKey && this.isKey(__s13param0, "q", "KeyQ", 81) && !this.isShown) {
      __s13param0.preventDefault();
      this.showAllTextfieldBoxes(true);
      return;
    } else if (__s13param0.ctrlKey && this.isKey(__s13param0, "y", "KeyY", 89) && !this.isShown) {
      __s13param0.preventDefault();
      this.showAllTextfieldBoxes(false);
      return;
    } else {
      if (this.isShown && this.isKey(__s13param0, " ", "Space", 32)) {
        this.clearLayer();
      }
      return;
    }
  };
  CastleLocationCheatPanel.prototype.isKey = function (__s19param0, __s19param1, __s19param2, __s19param3) {
    return !!__s19param0.key && __s19param0.key.toLowerCase() == __s19param1 || !!__s19param0.code && __s19param0.code == __s19param2 || __s19param0.keyCode == __s19param3;
  };
  CastleLocationCheatPanel.prototype.onClick = function (__s21param0) {
    __s1param0.prototype.onClick.call(this, __s21param0);
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s21param0.target, "MovieClip") && __s21param0.target.toolTipText) {
      __dep_exact_81dacdf05bd32292.System.setClipboard(__s21param0.target.toolTipText);
      this.setTextFromCheatPanel(__s21param0.target);
      if (__s21param0.target.close) {
        this.clearLayer();
      }
    }
  };
  CastleLocationCheatPanel.prototype.showAllTextfieldBoxes = function (__s25param0) {
    this.clearLayer();
    var __s25local0 = this.textFieldManager.textFieldList;
    if (__s25local0 != null) {
      for (var __s25local1 = 0, __s25local2 = Array.from(__s25local0.values()); __s25local1 < __s25local2.length; __s25local1++) {
        var __s25local3 = __s25local2[__s25local1];
        if (__s25local3 !== undefined && this.isTfVisible(__s25local3)) {
          this.setTextBoxByTextfield(__s25local3, __s25param0);
        }
      }
    }
    this.isShown = true;
  };
  CastleLocationCheatPanel.prototype.setTextBoxByTextfield = function (__s31param0, __s31param1) {
    var __s31local0 = new __s0local0();
    var __s31local1 = new __s0local2();
    __s31local1.graphics.beginFill(__dep_exact_9e901e8e2483a22f_4.Random.integer(0, __dep_export_ClientConstColor.ClientConstColor.GENERIC_WHITE), 1);
    var __s31local2 = this.disp.globalToLocal(__s31param0.originalTextField.localToGlobal(new __s0local1(0, 0)));
    var __s31local3 = this.disp.globalToLocal(__s31param0.originalTextField.localToGlobal(new __s0local1(__s31param0.originalTextField.getBounds(null).width, __s31param0.originalTextField.getBounds(null).height)));
    var __s31local4 = __s31local3.x - __s31local2.x;
    var __s31local5 = __s31local3.y - __s31local2.y;
    __s31local1.graphics.drawRect(0, 0, __s31local4, __s31local5);
    __s31local1.graphics.endFill();
    __s31local1.setBounds(0, 0, __s31local4, __s31local5);
    __s31local0.addChild(__s31local1);
    __s31local0.x = __s31local2.x;
    __s31local0.y = __s31local2.y;
    this.disp.addChild(__s31local0);
    __s31local0.mouseChildren = false;
    __s31local0.tf = __s31param0;
    this.setToolTip(__s31local0, __s31param0, __s31param1);
  };
  CastleLocationCheatPanel.prototype.setToolTip = function (__s33param0, __s33param1, __s33param2) {
    var __s33local0;
    var __s33local1 = __s33param1.textContentVO;
    var __s33local2 = __s33param1.autoFitToBounds;
    __s33param1.textContentVO = new __dep_exact_92d05af59ee2ff30_1.TextVO("");
    __s33param1.autoFitToBounds = false;
    switch (__dep_exact_9e901e8e2483a22f_1.GGSCountryController.instance.currentCountry.ggsLanguageCode) {
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_ARABIC:
        __s33local0 = "Arabic: " + __dep_exact_f855840627e6e145.int(this.testToFit(__s33param1, __dep_export_LoremIpsum.LoremIpsum.ARABIC)) + "\n";
        break;
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_JAPANESE:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_KOREAN:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_SIMPLE:
      case __dep_exact_9e901e8e2483a22f.BasicConstants.LANGUAGE_CHINESE_TRADITIONAL:
        __s33local0 = "ja/ko/ch: " + __dep_exact_f855840627e6e145.int(this.testToFit(__s33param1, __dep_export_LoremIpsum.LoremIpsum.JAPANESE)) + "\n";
        break;
      default:
        var __s33local3 = __dep_exact_f855840627e6e145.int(this.testToFit(__s33param1, __dep_export_LoremIpsum.LoremIpsum.LATIN));
        var __s33local4 = __dep_exact_f855840627e6e145.int(this.testToFit(__s33param1, __dep_export_LoremIpsum.LoremIpsum.GREEK));
        __s33local0 = "Latin: " + __s33local3 + "\nCyrillic: " + __dep_exact_f855840627e6e145.int(this.testToFit(__s33param1, __dep_export_LoremIpsum.LoremIpsum.CYRILLIC)) + "\nGreek: " + __s33local4 + "\n";
    }
    __s33param1.textContentVO = __s33local1;
    __s33param1.autoFitToBounds = __s33local2;
    var __s33local5 = __s33local0 + "\n";
    if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s33local1, "LocalizedTextVO")) {
      var __s33local6 = __s33local1;
      __s33local5 += "TextID:\n" + __s33local6.textId + "\n\n";
      if (__s33param2 && __s33local6.textReplacements != null) {
        __s33local5 += "TextReplacements:\n" + __s33local6.textReplacements + "\n\n";
      }
    }
    __s33local5 += "Text:\n" + __s33param1.text;
    if (__s33param2) {
      __s33local5 += "\n\n";
      __s33local5 += this.getMcSourceText(__s33param1);
    }
    __s33param0.useHandCursor = true;
    __s33param0.toolTipText = __s33local5;
  };
  CastleLocationCheatPanel.prototype.getMcSourceText = function (__s39param0) {
    var __s39local0;
    var __s39local1 = "*Disp-Hierarchy*\n";
    for (var __s39local2 = __s39param0.originalTextField.parent; __s39local2 != null && __s39local2.parent != __s39local2.stage;) {
      __s39local1 += (__s39local0 = (__s39local0 = __dep_exact_81dacdf05bd32292_1.getQualifiedClassName(__s39local2)).indexOf("::") > 0 ? __s39local0.substr(__s39local0.indexOf("::") + 2) : __s39local0) + "\n";
      __s39local2 = __s39local2.parent;
    }
    return __s39local1;
  };
  CastleLocationCheatPanel.prototype.testToFit = function (__s43param0, __s43param1) {
    var __s43local0;
    for (__s43local0 = 1; __s43local0 < __s43param1.length; __s43local0++) {
      __s43param0.textContentVO.stringValue = __s43param1.substr(0, __s43local0);
      if (__s43param0.textWidth > __s43param0.width || __s43param0.textHeight + (__s43param0.numLines > 1 ? CastleLocationCheatPanel.PIXEL_PADDING : 0) > __s43param0.height) {
        return __s43local0 - 1;
      }
    }
    return -1;
  };
  CastleLocationCheatPanel.prototype.clearLayer = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.disp);
    this.isShown = false;
  };
  CastleLocationCheatPanel.prototype.isTfVisible = function (__s50param0) {
    return !!__s50param0.visible && !!__s50param0.originalTextField && !!__s50param0.originalTextField.parent && this.isObjectVisible(__s50param0.originalTextField.parent);
  };
  CastleLocationCheatPanel.prototype.isObjectVisible = function (__s52param0) {
    return !!__s52param0 && !!__s52param0.visible && !!__s52param0.parent && !!__s52param0.stage && (__s52param0.parent == __s52param0.stage || this.isObjectVisible(__s52param0.parent));
  };
  CastleLocationCheatPanel.prototype.setTextFromCheatPanel = function (__s54param0) {
    var __s54local0 = this.layoutManager.getPanel(__dep_export_CastleCheatPanel.CastleCheatPanel);
    if (__s54local0 != null) {
      var __s54local1 = __dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__s54local0.i_cheat_txt_input.text);
      if (__s54param0.tf != null && __s54local1.indexOf("/i18n") != -1) {
        var __s54local2 = __s54param0.tf;
        var __s54local3 = __dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__s54local1.indexOf(" ") > 0 ? __s54local1.substr(__s54local1.indexOf(" ") + 1) : "");
        if (__s54local3.indexOf("\"") != -1) {
          this.fillTextfieldWithTextVO(__s54local2, __s54local3);
        } else {
          this.fillTextfieldWithLocalizedTextVO(__s54local2, __s54local3);
        }
      }
    }
  };
  CastleLocationCheatPanel.prototype.fillTextfieldWithLocalizedTextVO = function (__s60param0, __s60param1) {
    var __s60local0 = __s60param1.substring(0, __s60param1.indexOf(" ") > 0 ? __s60param1.indexOf(" ") : Number.MAX_VALUE);
    if (__s60local0 != "") {
      var __s60local1 = (__s60param1 = __dep_export_ClientConstUtils.ClientConstUtils.getTrimmedText(__s60param1.substring(__s60local0.length))).split(",");
      if (__s60local1.length == 1 && __s60local1[0] == "") {
        __s60local1 = [];
      }
      __s60param0.textContentVO = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s60local0, __s60local1);
    }
  };
  CastleLocationCheatPanel.prototype.fillTextfieldWithTextVO = function (__s64param0, __s64param1) {
    __s64param0.textContentVO = new __dep_exact_92d05af59ee2ff30_1.TextVO(__s64param1.replace(/"/g, ""));
  };
  CastleLocationCheatPanel.__initialize_static_members = function () {
    CastleLocationCheatPanel.NAME = "CastleLocationCheatPanel";
    CastleLocationCheatPanel.PIXEL_PADDING = 4.75;
  };
  return CastleLocationCheatPanel;
}(__dep_export_CastlePanel.CastlePanel);
exports.CastleLocationCheatPanel = __s0local3;
var __dep_export_CastleCheatPanel = require("gge-module:export_CastleCheatPanel");
__s0local3.__initialize_static_members();
