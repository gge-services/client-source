Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CollectableParserC2SCosts() {}
  CollectableParserC2SCosts.prototype.createCostsListForServer = function (__s5param0) {
    var __s5local0 = __s5param0.clone();
    __s5local0.combineDuplicatedItems();
    var __s5local1;
    var __s5local2;
    var __s5local3 = [];
    for (var __s5local4 = 0; __s5local4 < __s5local0.length; ++__s5local4) {
      if (__s5local2 = (__s5local1 = __s5local0.getItemByIndex(__s5local4)).itemType.serverKey) {
        __s5local3.push([__s5local2, __s5local1.amount]);
      }
    }
    return __s5local3;
  };
  return CollectableParserC2SCosts;
}();
exports.CollectableParserC2SCosts = __s0local0;
