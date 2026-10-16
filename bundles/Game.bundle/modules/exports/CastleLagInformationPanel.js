Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleSprite = require("gge-module:export_CastleSprite");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function CastleLagInformationPanel() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.initBackground();
    __s3local0.initTextArea();
    __s3local0._panelBackground.addChild(__s3local0._tfLagValues);
    __s3local0._panelBackground.addChild(__s3local0._tfLagValue);
    __s3local0.addChild(__s3local0._panelBackground);
    __s3local0.name = "CastleLagInformationPanel";
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleLagInformationPanel, __s1param0);
  CastleLagInformationPanel.prototype.initialize = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.onAvgNetworkLagTimeResponse.add(this.bindFunction(this.handleAvgNetworkLagTimeResponse));
    this.setVisibility(false);
  };
  CastleLagInformationPanel.prototype.destroy = function () {
    this.stopCheckingLag();
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.onAvgNetworkLagTimeResponse.remove(this.bindFunction(this.handleAvgNetworkLagTimeResponse));
  };
  CastleLagInformationPanel.prototype.setVisibility = function (__s9param0) {
    this.visible = __s9param0;
    this._tfLagValues.text = "";
  };
  CastleLagInformationPanel.prototype.checkLag = function (__s11param0, __s11param1) {
    if (__s11param0 > 0 && __s11param1 > 1) {
      __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.checkAvgNetworkLagTime(__s11param0, __s11param1);
    }
  };
  CastleLagInformationPanel.prototype.stopCheckingLag = function () {
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.stopAvgNetworkLagTimer();
  };
  CastleLagInformationPanel.prototype.addInformation = function (__s16param0) {
    this._tfLagValues.appendText(__s16param0 + "\n");
    this._tfLagValues.scrollV = this._tfLagValues.numLines;
    this._tfLagValue.text = __s16param0;
  };
  CastleLagInformationPanel.prototype.handleAvgNetworkLagTimeResponse = function (__s18param0) {
    if (!this.visible) {
      this.setVisibility(true);
    }
    __dep_exact_9e901e8e2483a22f_1.info("Average lag: " + __s18param0 + " milliseconds");
    this.addInformation("Average lag: " + __s18param0 + " milliseconds");
  };
  CastleLagInformationPanel.prototype.initBackground = function () {
    this._panelBackground = new __s0local0();
    this._panelBackground.graphics.beginFill(3342336, 0.75);
    this._panelBackground.graphics.drawRoundRect(0, 0, 170, 100, 3, 3);
    this._panelBackground.graphics.drawRoundRect(0, -30, 170, 25, 3, 3);
    this._panelBackground.y = -105;
    this._panelBackground.x = 5;
  };
  CastleLagInformationPanel.prototype.initTextArea = function () {
    this._tfLagValues = new __dep_exact_81dacdf05bd32292.TextField();
    this._tfLagValues.width = 160;
    this._tfLagValues.x = 5;
    this._tfLagValues.y = 5;
    this._tfLagValues.textColor = 16777215;
    this._tfLagValues.height = 90;
    this._textFormat = new __dep_exact_81dacdf05bd32292_1.TextFormat();
    this._textFormat.size = 9;
    this._tfLagValues.defaultTextFormat = this._textFormat;
    this._tfLagValue = new __dep_exact_81dacdf05bd32292.TextField();
    this._tfLagValue.width = 160;
    this._tfLagValue.x = 5;
    this._tfLagValue.y = -25;
    this._tfLagValue.textColor = 16776960;
    this._tfLagValue.height = 20;
    this._textFormat.size = 13;
    this._tfLagValue.defaultTextFormat = this._textFormat;
  };
  return CastleLagInformationPanel;
}(__dep_export_CastleSprite.CastleSprite);
exports.CastleLagInformationPanel = __s0local1;
__dep_exact_81dacdf05bd32292_2.classImplementsInterfaces(__s0local1, "Container");
