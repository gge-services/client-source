Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function DefaultGlobalLeaderBoardItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DefaultGlobalLeaderBoardItem, __s1param0);
  DefaultGlobalLeaderBoardItem.prototype.update = function () {
    this.setVisibility(this._data != null);
    if (this.disp.visible) {
      this.disp.mc_mouseOver.visible = false;
      this.disp.mc_downState.visible = false;
      this.disp.mc_searched.visible = this._searchScoreID != "" && this._searchScoreID == this.scoreID;
      this.disp.gotoAndStop(this.getPrefixFrame());
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_rank, new __dep_exact_92d05af59ee2ff30.TextVO(this.rankText)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(this.playerName)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_allianceName, new __dep_exact_92d05af59ee2ff30.TextVO(this.allianceName)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_server, new __dep_exact_92d05af59ee2ff30.TextVO(this.serverName)).autoFitToBounds = true;
      __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.txt_points, new __dep_exact_92d05af59ee2ff30.TextVO(this.points)).autoFitToBounds = true;
    } else {
      this.disp.gotoAndStop(1);
    }
  };
  DefaultGlobalLeaderBoardItem.prototype.getPrefixFrame = function () {
    if (this.isOwnPlayer()) {
      return 4;
    }
    switch (this.rank) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
    }
    return 5;
  };
  return DefaultGlobalLeaderBoardItem;
}(require("gge-module:export_AGlobalLeaderBoardItem").AGlobalLeaderBoardItem);
exports.DefaultGlobalLeaderBoardItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
