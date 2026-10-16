Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTitle = require("gge-module:export_ClientConstTitle");
var __dep_export_SublayerSwitcher = require("gge-module:export_SublayerSwitcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_CastleTitleSublayerFactionProperties = require("gge-module:export_CastleTitleSublayerFactionProperties");
var __dep_export_CastleTitleSublayerPropertiesFAME = require("gge-module:export_CastleTitleSublayerPropertiesFAME");
var __s0local0 = createjs.Event;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleTitleMainDialog() {
    var __s3local0 = this;
    __s3local0.sublayerSystemMap = new Map();
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleTitleMainDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTitleMainDialog, __s1param0);
  CastleTitleMainDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleTitleMainDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    var __s7local0 = this.sublayerSwitcher;
    var __s7local1 = this.sublayerSystemMap;
    var __s7local2 = this.checkAvailableSystems();
    if (__s7local0) {
      __s7local0.hide();
    }
    this.sublayerSwitcher = new __dep_export_SublayerSwitcher.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.sublayerSystemMap = new Map();
    for (var __s7local3 = 0; __s7local3 < __s7local2.length; __s7local3++) {
      var __s7local4 = __s7local2[__s7local3];
      this.sublayerSystemMap.set(__s7local4, __s7local3);
      this.sublayerSystemMap.set(__s7local3, __s7local4);
      var __s7local5 = this.dialogDisp["tab_" + __s7local3];
      __s7local5.visible = __s7local2.length > 1;
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s7local5.mc_systemIcon);
      __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(__s7local5.mc_systemIcon, __s7local4, new __s0local1(40, 40));
      __s7local5.toolTipText = __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getTitleSystemTextID(__s7local4);
      __s7local5.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
      this.sublayerSwitcher.add(__s7local3, __s7local5, this.getSublayerObject(__s7local4, __s7local0, __s7local1));
    }
    this.sublayerSwitcher.switchTo(this.sublayerSystemMap.get(this.dialogProperties.titleSystem));
    this.sublayerSwitcher.show();
  };
  CastleTitleMainDialog.prototype.onEnterTabFrame = function (__s12param0) {
    var __s12local0 = this.sublayerSystemMap.get(__dep_exact_f855840627e6e145.int(__s12param0.target.name.split("_")[1]));
    __dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.setTitleSystemIcon(__s12param0.target.mc_systemIcon, __s12local0, new __s0local1(40, 40));
    __s12param0.target.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
  };
  CastleTitleMainDialog.prototype.checkAvailableSystems = function () {
    var __s14local0 = [];
    for (var __s14local1 = 0; __s14local1 < CastleTitleMainDialog.TITLESYSTEMS.length; __s14local1++) {
      var __s14local2 = CastleTitleMainDialog.TITLESYSTEMS[__s14local1];
      if (__dep_export_CastleModel.CastleModel.titleData.isSystemAvailable(__s14local2)) {
        __s14local0.push(__s14local2);
      }
      this.dialogDisp["tab_" + __s14local1].visible = false;
    }
    return __s14local0;
  };
  CastleTitleMainDialog.prototype.createProperties = function (__s19param0) {
    switch (this.sublayerSystemMap.get(__s19param0)) {
      case __dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE:
        return new __dep_export_CastleTitleSublayerPropertiesFAME.CastleTitleSublayerPropertiesFAME();
      case __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE:
        return new __dep_export_CastleTitleSublayerFactionProperties.CastleTitleSublayerFactionProperties();
      default:
        return new __dep_export_CastleTitleSublayerPropertiesFAME.CastleTitleSublayerPropertiesFAME();
    }
  };
  CastleTitleMainDialog.prototype.getSublayerObject = function (__s22param0, __s22param1, __s22param2) {
    if (__s22param1 && __s22param2 && __s22param2.get(__s22param0) != null) {
      return __s22param1.getInfo(__dep_exact_f855840627e6e145.int(__s22param2.get(__s22param0))).sublayer;
    } else {
      return new __dep_export_CastleTitleSublayer.CastleTitleSublayer(this.dialogDisp.sublayer);
    }
  };
  CastleTitleMainDialog.prototype.onClick = function (__s26param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s26param0.target)) {
      switch (__s26param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleTitleMainDialog.prototype.hideLoaded = function (__s30param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s30param0);
    this.sublayerSwitcher.hide();
    for (var __s30local0 = 0; __s30local0 < CastleTitleMainDialog.TITLESYSTEMS.length; __s30local0++) {
      this.dialogDisp["tab_" + __s30local0].removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.onEnterTabFrame));
    }
  };
  Object.defineProperty(CastleTitleMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTitleMainDialog.__initialize_static_members = function () {
    CastleTitleMainDialog.TITLESYSTEMS = [__dep_export_ClientConstTitle.ClientConstTitle.GLORY_TITLE, __dep_export_ClientConstTitle.ClientConstTitle.BRAVERY_TITLE];
    CastleTitleMainDialog.NAME = "CastleTitleMain";
  };
  return CastleTitleMainDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleTitleMainDialog = __s0local2;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_CastleTitleSublayer = require("gge-module:export_CastleTitleSublayer");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
