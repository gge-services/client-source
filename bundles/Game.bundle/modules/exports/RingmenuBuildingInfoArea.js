Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function () {
  function RingmenuBuildingInfoArea(__s3param0) {
    this.infostate = 0;
    this.ringMenu = __s3param0;
    this.progressInfo = new __dep_export_RingmenuBuildingProgressInfo.RingmenuBuildingProgressInfo(__s3param0.progressInfo);
    this.priceInfo = new __dep_export_RingmenuBuildingPriceInfo.RingmenuBuildingPriceInfo(__s3param0.mc_priceInfo);
    this.iinfotxtInfo = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s3param0.mc_infoText.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    this.iinfotxtInfo.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this.iinfotxtInfo.autoFitToBounds = true;
  }
  RingmenuBuildingInfoArea.prototype.onMouseOver = function (__s5param0) {
    var __s5local0 = __s5param0.getInfoText();
    if (__s5local0) {
      this.showInfoText(__s5local0);
    } else {
      this.showPriceInfo(__s5param0.getAction());
    }
  };
  RingmenuBuildingInfoArea.prototype.onMouseOut = function () {
    this.hideInfoTexts();
  };
  RingmenuBuildingInfoArea.prototype.init = function (__s11param0) {
    this.targetBuilding = __s11param0;
    this.progressInfo.init(__s11param0);
    this.priceInfo.init(__s11param0);
    this.hideInfoTexts();
  };
  RingmenuBuildingInfoArea.prototype.update = function () {
    if (this.infostate == RingmenuBuildingInfoArea.INFOSTATE_PROGRESS) {
      this.progressInfo.update();
    } else if (this.infostate == RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO) {
      this.priceInfo.update();
    }
  };
  RingmenuBuildingInfoArea.prototype.showPriceInfo = function (__s17param0) {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO);
    this.priceInfo.setAction(__s17param0);
  };
  RingmenuBuildingInfoArea.prototype.showInfoText = function (__s19param0) {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO);
    this.iinfotxtInfo.textContentVO.textId = __s19param0;
  };
  RingmenuBuildingInfoArea.prototype.hideInfoTexts = function () {
    this.setInfoState(RingmenuBuildingInfoArea.INFOSTATE_PROGRESS);
    this.progressInfo.update();
  };
  RingmenuBuildingInfoArea.prototype.setInfoState = function (__s23param0) {
    this.infostate = __s23param0;
    this.ringMenu.progressInfo.visible = false;
    this.ringMenu.mc_infoText.visible = false;
    this.ringMenu.mc_priceInfo.visible = false;
    switch (__s23param0) {
      case RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO:
        this.ringMenu.mc_infoText.visible = true;
        break;
      case RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO:
        this.ringMenu.mc_priceInfo.visible = true;
        break;
      case RingmenuBuildingInfoArea.INFOSTATE_PROGRESS:
        this.ringMenu.progressInfo.visible = true;
    }
  };
  RingmenuBuildingInfoArea.INFOSTATE_PROGRESS = 0;
  RingmenuBuildingInfoArea.INFOSTATE_PRICEINFO = 1;
  RingmenuBuildingInfoArea.INFOSTATE_SIMPLEINFO = 2;
  return RingmenuBuildingInfoArea;
}();
exports.RingmenuBuildingInfoArea = __s0local0;
var __dep_export_RingmenuBuildingPriceInfo = require("gge-module:export_RingmenuBuildingPriceInfo");
var __dep_export_RingmenuBuildingProgressInfo = require("gge-module:export_RingmenuBuildingProgressInfo");
