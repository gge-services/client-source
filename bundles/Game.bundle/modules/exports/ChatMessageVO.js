Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ChatMessageVO() {
    this.playerID = 0;
  }
  ChatMessageVO.prototype.parseObj = function (__s5param0) {
    this.playerID = __dep_exact_f855840627e6e145.int(__s5param0.PID);
    this.playerName = __s5param0.PN;
    this.messageText = __dep_exact_9e901e8e2483a22f.TextValide.parseChatJSONMessage(__s5param0.MT);
    var __s5local0 = new Date();
    __s5local0.setTime(__s5local0.getTime() - __s5param0.MA * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC);
    this.bornDate = __s5local0;
  };
  return ChatMessageVO;
}();
exports.ChatMessageVO = __s0local0;
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
