Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __s0local0 = function (__s1param0) {
  function ListMemberSearchItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3param0.actLikeButton = true;
    __s3param0.mouseChildren = false;
    __s3local0.itxt_name = __s3local0.textFieldManager.registerTextField(__s3param0.txt_name, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    __s3local0.itxt_level = __s3local0.textFieldManager.registerTextField(__s3param0.txt_level, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    __s3local0.itxt_distance = __s3local0.textFieldManager.registerTextField(__s3param0.txt_distance, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    __s3local0.itxt_honor = __s3local0.textFieldManager.registerTextField(__s3param0.txt_honor, new __dep_exact_92d05af59ee2ff30.NumberVO(0));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ListMemberSearchItem, __s1param0);
  ListMemberSearchItem.prototype.customFillItem = function () {
    this.itxt_name.textContentVO.stringValue = this.itemVO.listVO.playerOwnerInfo.playerName;
    this.itxt_level.textContentVO.numberValue = this.itemVO.listVO.playerOwnerInfo.playerLevel;
    this.itxt_distance.textContentVO.numberValue = this.itemVO.listVO.distance;
    this.itxt_honor.textContentVO.numberValue = this.itemVO.listVO.playerOwnerInfo.honor;
  };
  Object.defineProperty(ListMemberSearchItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ListMemberSearchItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return ListMemberSearchItem;
}(__dep_exact_9e901e8e2483a22f_1.ScrollItem);
exports.ListMemberSearchItem = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
