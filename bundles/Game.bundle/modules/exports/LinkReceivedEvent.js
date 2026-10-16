Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function LinkReceivedEvent(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, LinkReceivedEvent.LINK_RECEIVED, false, false) || this).url = __s3param0;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LinkReceivedEvent, __s1param0);
  LinkReceivedEvent.__initialize_static_members = function () {
    LinkReceivedEvent.LINK_RECEIVED = "link-received";
  };
  return LinkReceivedEvent;
}(createjs.Event);
exports.LinkReceivedEvent = __s0local0;
__s0local0.__initialize_static_members();
