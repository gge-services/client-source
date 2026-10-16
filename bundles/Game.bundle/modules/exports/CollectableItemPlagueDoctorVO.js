Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function CollectableItemPlagueDoctorVO(__s3param0 = 0) {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemPlagueDoctorVO, __s1param0);
  CollectableItemPlagueDoctorVO.prototype.parseServerObject = function (__s5param0) {
    __s1param0.prototype.parseServerObject.call(this, __s5param0);
    this.amount = __s5param0;
  };
  CollectableItemPlagueDoctorVO.prototype.getTooltipTextId = function () {
    return "plaguemonks";
  };
  CollectableItemPlagueDoctorVO.prototype.getDescriptionTextId = function () {
    return "plaguemonks_short_info";
  };
  CollectableItemPlagueDoctorVO.__initialize_static_members = function () {
    CollectableItemPlagueDoctorVO.SERVER_KEY = "PLD";
    CollectableItemPlagueDoctorVO.XML_KEY = "plagueDoctor";
  };
  return CollectableItemPlagueDoctorVO;
}(require("gge-module:export_ACollectableItemVO").ACollectableItemVO);
exports.CollectableItemPlagueDoctorVO = __s0local0;
__s0local0.__initialize_static_members();
