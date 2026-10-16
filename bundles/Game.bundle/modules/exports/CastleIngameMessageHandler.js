Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function CastleIngameMessageHandler() {
    this._blockMessages = false;
    this.init();
    if (CastleIngameMessageHandler.messageHandler) {
      throw new Error("Calling constructor not allowed! Use getInstance instead.");
    }
  }
  CastleIngameMessageHandler.prototype.init = function () {
    this._messages = [];
  };
  CastleIngameMessageHandler.getInstance = function () {
    CastleIngameMessageHandler.messageHandler ||= new CastleIngameMessageHandler();
    return CastleIngameMessageHandler.messageHandler;
  };
  CastleIngameMessageHandler.prototype.registerMessage = function (__s10param0, __s10param1 = null, __s10param2 = true, __s10param3 = CastleIngameMessageHandler.PRIORITY_LOW, __s10param4 = 0) {
    var __s10local0 = new __dep_exact_9e901e8e2483a22f.BasicDialogVO();
    __s10local0.key = __s10param0;
    __s10local0.properties = __s10param1;
    __s10local0.blockDialogs = __s10param2;
    __s10local0.delay = __s10param4;
    __s10local0.priority = __s10param3;
    this._messages.push(__s10local0);
    __dep_exact_9e901e8e2483a22f_2.VectorSortHelper.sort(this._messages, this.bindFunction(this.sortMessages));
  };
  CastleIngameMessageHandler.prototype.sortMessages = function (__s12param0, __s12param1) {
    if (__s12param0.priority > __s12param1.priority) {
      return -1;
    } else if (__s12param0.priority < __s12param1.priority) {
      return 1;
    } else {
      return 0;
    }
  };
  CastleIngameMessageHandler.prototype.showMessage = function (__s17param0 = 0) {
    if (this.layoutManager.currentState == __dep_exact_9e901e8e2483a22f_1.BasicLayoutManager.STATE_LOGIN) {
      this._messages = [];
    }
    if (this.layoutManager.isIngameState && this.isThereAMessage) {
      if (!this._blockMessages) {
        this._message = this._messages.shift();
        this._blockMessages = !!this._message.blockDialogs;
        this.layoutManager.showIngameMessage(this._message.key, this._message.properties);
      }
    }
  };
  CastleIngameMessageHandler.prototype.onHideCurrentMessage = function () {
    if (this._message) {
      this._message = null;
      this.blockMessages = false;
    }
  };
  Object.defineProperty(CastleIngameMessageHandler.prototype, "isThereAMessage", {
    get: function () {
      return this._messages.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessageHandler.prototype.destroy = function () {
    this._messages = [];
  };
  Object.defineProperty(CastleIngameMessageHandler.prototype, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleIngameMessageHandler.prototype, "blockMessages", {
    get: function () {
      return this._blockMessages;
    },
    set: function (__s33param0) {
      this._blockMessages = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  CastleIngameMessageHandler.__initialize_static_members = function () {
    CastleIngameMessageHandler.PRIORITY_LOW = 1;
    CastleIngameMessageHandler.PRIORITY_MIDDLE = 2;
    CastleIngameMessageHandler.PRIORITY_HIGH = 3;
  };
  return CastleIngameMessageHandler;
}();
exports.CastleIngameMessageHandler = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
__s0local0.__initialize_static_members();
