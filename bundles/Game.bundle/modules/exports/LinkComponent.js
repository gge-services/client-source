Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_5 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function LinkComponent(__s3param0, __s3param1, __s3param2) {
    this.verticalAlign = __dep_exact_9e901e8e2483a22f_3.GGSVerticalAlign.MIDDLE;
    this._colorData = [];
    this._disp = __s3param0;
    this._textId = __s3param1;
    this._navigateURL = __s3param2;
    this._disp.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onOverAGB));
    this._disp.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onOutAGB));
  }
  LinkComponent.prototype.update = function (__s5param0 = null, __s5param1 = null) {
    if (__s5param0) {
      this._navigateURL = __s5param0;
    }
    if (__s5param1) {
      this._textId = __s5param1;
    }
    this.build();
  };
  LinkComponent.prototype.build = function () {
    var __s9local0 = this._disp.txt_desc.defaultTextFormat.color;
    var __s9local1 = new __dep_exact_92d05af59ee2ff30_2.HTMLTextCustomVO();
    __s9local1.addLocalizedTextVO(new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(this._textId));
    var __s9local2 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(this._colorData[0] || __s9local0, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s9local3 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(this._colorData[1] || __s9local0, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    var __s9local4 = new __dep_exact_92d05af59ee2ff30.HTMLLinkFormatVO(this._colorData[2] || __dep_export_ClientConstColor.ClientConstColor.DEFAULT_LINK_COLOR, __dep_exact_9e901e8e2483a22f_2.GGSTextDecoration.UNDERLINE);
    __s9local1.linkFormats = new __dep_exact_92d05af59ee2ff30_1.HTMLLinkFormatsVO(__s9local2, __s9local3, __s9local4);
    this._txtLabel = __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_desc, __s9local1);
    this._txtLabel.verticalAlign = this.verticalAlign;
    this._txtLabel.htmlLinkClick.add(this.bindFunction(this.onClick));
  };
  LinkComponent.prototype.dispose = function () {
    if (this._disp) {
      __dep_exact_9e901e8e2483a22f_4.GoodgameTextFieldManager.getInstance().unregisterTextField(this._disp.txt_desc);
      this._disp.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onOverAGB));
      this._disp.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onOutAGB));
      this._disp = null;
    }
    if (this._txtLabel) {
      this._txtLabel.htmlLinkClick.removeAll();
      this._txtLabel = null;
    }
  };
  LinkComponent.prototype.onClick = function (__s15param0, __s15param1) {
    try {
      var __s15local0 = new __dep_exact_81dacdf05bd32292.URLRequest(this.getLinkURL(__s15param1));
      __dep_exact_81dacdf05bd32292_1.navigateToURL(__s15local0, "goodgamestudios");
    } catch (__s18local0) {
      __dep_exact_9e901e8e2483a22f_5.error("cant navigate to url");
    }
  };
  LinkComponent.prototype.getLinkURL = function (__s20param0) {
    if (this._navigateURL != "") {
      return this._navigateURL;
    } else {
      return __s20param0;
    }
  };
  LinkComponent.prototype.onOverAGB = function (__s24param0) {
    try {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    } catch (__s27local0) {
      __dep_exact_9e901e8e2483a22f_5.error("User hovered to early on the link...");
    }
  };
  LinkComponent.prototype.onOutAGB = function (__s29param0) {
    try {
      this.layoutManager.customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    } catch (__s32local0) {
      __dep_exact_9e901e8e2483a22f_5.error("User hovered to early out of the link...");
    }
  };
  Object.defineProperty(LinkComponent.prototype, "layoutManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkComponent.prototype, "navigateURL", {
    get: function () {
      return this._navigateURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LinkComponent.prototype, "colorData", {
    get: function () {
      return this._colorData;
    },
    set: function (__s40param0) {
      this._colorData = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  return LinkComponent;
}();
exports.LinkComponent = __s0local1;
