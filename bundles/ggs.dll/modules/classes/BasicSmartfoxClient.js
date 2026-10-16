Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __dep_class_TextValide = require("gge-module:class_TextValide");
var __dep_class_ExternalLog = require("gge-module:class_ExternalLog");
var __dep_class_IntSignal = require("gge-module:class_IntSignal");
var __dep_class_EnvGlobalsHandler = require("gge-module:class_EnvGlobalsHandler");
var __dep_class_SmartfoxEvent = require("gge-module:class_SmartfoxEvent");
var __dep_export_CSSMouseCursor = require("gge-module:export_CSSMouseCursor");
var __dep_exact_becd07da092f4a09 = require("gge-module:exact_becd07da092f4a09");
var __dep_export_AssetLoadingFlowType = require("gge-module:export_AssetLoadingFlowType");
var __dep_export_LoggerConfigurator = require("gge-module:export_LoggerConfigurator");
var __dep_class_Room = require("gge-module:class_Room");
var __dep_class_ServerErrorLOFactory = require("gge-module:class_ServerErrorLOFactory");
var __dep_exact_15601d6150828cd6 = require("gge-module:exact_15601d6150828cd6");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = __dep_export_LoggerConfigurator.getLogger(__dep_export_AssetLoadingFlowType.SMARTFOX_CLIENT);
var __s0local3 = "<msg t='sys'>";
var __s0local4 = function (__s1param0) {
  function BasicSmartfoxClient() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.hasAutojoined = false;
    __s3local0._roundTripTime = 0;
    __s3local0._connectionTime = 0;
    __s3local0._lastSocketDataIdInQueue = 0;
    __s3local0._lastSocketDataIdHandled = 0;
    __s3local0._userForcedDisconnect = false;
    __s3local0.roomList = [];
    __s3local0.commandBuffer = "";
    __s3local0.getRandomLag = function () {
      return (__s3local0.env.laggyClientMaxDelay - __s3local0.env.laggyClientMinDelay) * Math.random() + __s3local0.env.laggyClientMinDelay;
    };
    __s3local0.totalPingTime = 0;
    __s3local0.pingCount = 0;
    __s3local0.roundTripResponseSignal = new __dep_exact_becd07da092f4a09.Signal();
    __s3local0.onAvgNetworkLagTimeResponse = new __dep_class_IntSignal.IntSignal();
    __s3local0.worldAssignmentFacade = window.ggs.worldAssignment.facade;
    return __s3local0;
  }
  __dep_exact_b45c75bfe6706b06.__extends(BasicSmartfoxClient, __s1param0);
  BasicSmartfoxClient.prototype.executeConnection = function (__s7param0, __s7param1) {
    var __s7local0 = this;
    if (__s7param1 === undefined) {
      __s7param1 = 443;
    }
    this._userForcedDisconnect = false;
    if (__s7param1 !== 443) {
      __s0local2.warn("HTML5 games currently support only WSS on 443");
      __s7param1 = 443;
    }
    this._ip = __s7param0;
    this._port = __s7param1;
    if (!!this.socket && (this.socket.readyState === WebSocket.CONNECTING || this.socket.readyState === WebSocket.OPEN)) {
      this.socket.onerror = undefined;
      this.socket.onclose = undefined;
      this.socket.onmessage = undefined;
      this.socket.onopen = undefined;
      this.socket.close(4999, "shutting down socket before opening a new one");
    }
    this.hasAutojoined = false;
    this._connectionTime = Date.now();
    this.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_START));
    this.socket = new WebSocket("wss://" + __s7param0 + ":" + __s7param1);
    __s0local2.debug("Will connect to " + this.socket.url);
    this.socket.onopen = function () {
      __s0local2.debug("Connected");
      __s7local0.sendXMLMessage(__s0local3, "verChk", 0, "<ver v='166' />");
    };
    this.socket.onerror = function (__s14param0) {
      __s0local2.error("websocket encounter unknow error");
      __s7local0.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_FAILED));
    };
    this.socket.onmessage = this.handleSocketData.bind(this);
    this.socket.onclose = function (__s16param0) {
      __s0local2.debug("Socket onclose:  (" + __s16param0.code + ") " + __s16param0.reason);
      __s7local0.hasAutojoined = false;
      __s7local0.socket.onerror = undefined;
      __s7local0.socket.onopen = undefined;
      __s7local0.socket.onmessage = undefined;
      __s7local0.socket.onclose = undefined;
      __s7local0.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECTION_LOST));
    };
  };
  BasicSmartfoxClient.prototype.executeRoundTrip = function () {
    this.doRoundTripBench();
  };
  BasicSmartfoxClient.prototype.onRoundTripResponse = function (__s20param0) {
    var __s20local0 = __s20param0.CTS;
    this._roundTripTime = __s20local0 - this._roundTripStartTime;
    this.roundTripResponseSignal.dispatch(this._roundTripTime, this.isConnectedViaHTTP());
  };
  BasicSmartfoxClient.prototype.startGameServerErrorDelayTimer = function (__s22param0) {
    this.currentGameServerErrorLogFunction = __s22param0;
    this.gameServerErrorDelayTimer = new __dep_export_CSSMouseCursor.Timer(10000);
    this.gameServerErrorDelayTimer.addEventListener(__s0local1.TIMER_COMPLETE, this.bindFunction(this.currentGameServerErrorLogFunction));
    this.gameServerErrorDelayTimer.start();
  };
  BasicSmartfoxClient.prototype.disposeGameServerErrorDelayTimer = function () {
    if (this.gameServerErrorDelayTimer) {
      this.gameServerErrorDelayTimer.stop();
      this.gameServerErrorDelayTimer.removeEventListener(__s0local1.TIMER_COMPLETE, this.bindFunction(this.currentGameServerErrorLogFunction));
      this.gameServerErrorDelayTimer = null;
    }
  };
  BasicSmartfoxClient.prototype.onRoomListFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var __s27local0 = this.worldAssignmentFacade.selectedNetworkInstance;
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_ServerErrorLOFactory.ServerErrorLOFactory(__dep_class_ServerErrorLOFactory.ServerErrorLOFactory.ROOMLIST_FAILED, __s27local0.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onRoomListFailed));
    __s0local2.error("RoomList failed!");
  };
  BasicSmartfoxClient.prototype.onJoinRoomFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var __s29local0 = this.worldAssignmentFacade.selectedNetworkInstance;
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_ServerErrorLOFactory.ServerErrorLOFactory(__dep_class_ServerErrorLOFactory.ServerErrorLOFactory.JOINROOM_FAILED, __s29local0.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onJoinRoomFailed));
    __s0local2.error("JoinRoom failed!");
  };
  BasicSmartfoxClient.prototype.onLoginResponseFailed = function () {
    this.disposeGameServerErrorDelayTimer();
    var __s31local0 = this.worldAssignmentFacade.selectedNetworkInstance;
    __dep_class_ExternalLog.ExternalLog.logger.log(new __dep_class_ServerErrorLOFactory.ServerErrorLOFactory(__dep_class_ServerErrorLOFactory.ServerErrorLOFactory.LOGIN_RESPONCE_FAILED, __s31local0.zone, this.isConnectedViaHTTP()));
    this.startGameServerErrorDelayTimer(this.bindFunction(this.onLoginResponseFailed));
    __s0local2.error("LoginResponce failed!");
  };
  BasicSmartfoxClient.prototype.onLoginResponceSuccess = function () {
    this.disposeGameServerErrorDelayTimer();
  };
  BasicSmartfoxClient.prototype.onExtensionResponse = function (__s35param0, __s35param1) {
    __s0local2.debug("received ext command: [" + __s35param0 + "](" + __s35param1 + ")");
    switch (__s35param0) {
      case BasicSmartfoxClient.S2C_ROOMLIST:
        this.disposeGameServerErrorDelayTimer();
        this.startGameServerErrorDelayTimer(this.bindFunction(this.onJoinRoomFailed));
        this.setRoomList(__s35param1);
        if (!this.hasAutojoined) {
          this.hasAutojoined = true;
          this.sendXMLMessage(__s0local3, "autoJoin", -1, "");
        }
        return;
      default:
        __s35param1.shift();
        this.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.EXTENSION_RESPONSE, __s35param0, __s35param1));
        return;
    }
  };
  BasicSmartfoxClient.prototype.setRoomList = function (__s39param0) {
    var __s39local0 = __s39param0[1];
    var __s39local1 = this.decompressInt(__s39param0[2]);
    var __s39local2 = this.decompressInt(__s39param0[3]);
    var __s39local3 = this.decompressInt(__s39param0[4]);
    var __s39local4 = __s39param0[5];
    this.roomList[__s39local0] = new __dep_class_Room.Room(__s39local0, __s39local4, __s39local2, 0, (__s39local3 >> 1 & 1) == 1, (__s39local3 >> 2 & 1) == 1, (__s39local3 >> 0 & 1) == 1, (__s39local3 >> 3 & 1) == 1, __s39local1, 0);
    __s0local2.debug("Rooms: ", this.roomList);
  };
  BasicSmartfoxClient.prototype.decompressInt = function (__s41param0) {
    var __s41local0 = "A".charCodeAt(0);
    var __s41local1 = "z".charCodeAt(0);
    var __s41local2 = __s41local1 - __s41local0 + 1;
    var __s41local3 = 0;
    if (__s41param0 && __s41param0.length > 0) {
      for (var __s41local4 = __s41param0.length - 1; __s41local4 >= 0; __s41local4--) {
        if (__s41param0.charCodeAt(__s41local4) < __s41local0 || __s41param0.charCodeAt(__s41local4) > __s41local1) {
          return -1;
        }
        __s41local3 = __s41local3 * __s41local2 + __s41param0.charCodeAt(__s41local4) - __s41local0;
      }
    }
    return __s41local3;
  };
  BasicSmartfoxClient.prototype.onJoinRoom = function () {
    this.disposeGameServerErrorDelayTimer();
    var __s47local0 = this.activeRoom;
    if (__s47local0 === BasicSmartfoxClient.LOBBY_ROOM_NAME) {
      this.doRoundTripBench();
      this.activatePing(60000);
    }
    __s0local2.debug("onJoinRoom:: received signal roomJoined --> will dispatch joinedRoom  Smartfox event");
    this.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.JOINED_ROOM, "", [__s47local0]));
  };
  BasicSmartfoxClient.prototype.changePingTimer = function (__s50param0) {
    this.activatePing(__s50param0);
  };
  BasicSmartfoxClient.prototype.activatePing = function (__s52param0) {
    var __s52local0 = this;
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
    __s0local2.debug("activating ping every " + __s52param0 + " ms");
    this.pingInterval = setInterval(function () {
      __s52local0.sendMessage(BasicSmartfoxClient.S2C_PING, [""]);
    }, __s52param0);
  };
  BasicSmartfoxClient.prototype.logout = function () {
    __s0local2.debug("logout");
    this.disposeGameServerErrorDelayTimer();
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
    }
    this._userForcedDisconnect = true;
    this.socket.close(4000, "manually disconnected");
  };
  BasicSmartfoxClient.prototype.sendMessage = function (__s60param0, __s60param1) {
    __s0local2.debug("BasicSmartfoxClient sendMessage: " + __s60param0 + " params: " + __s60param1);
    for (var __s60local0 = 0; __s60local0 < __s60param1.length; __s60local0++) {
      if (__s60param1[__s60local0] === 0) {
        __s60param1[__s60local0] = "0";
      } else if (__s60param1[__s60local0]) {
        if (typeof __s60param1[__s60local0] == "string") {
          __s60param1[__s60local0] = __dep_class_TextValide.TextValide.getValideSmartFoxText(__s60param1[__s60local0]);
        }
      } else {
        __s60param1[__s60local0] = "<RoundHouseKick>";
      }
    }
    this.sendCommand(this.defaultZone, __s60param0, __s60param1, this.activeRoomId);
  };
  BasicSmartfoxClient.prototype.sendEmptyCommandVO = function (__s68param0) {
    this.sendMessage(__s68param0.getCmdId(), []);
  };
  BasicSmartfoxClient.prototype.sendCommandVO = function (__s70param0) {
    if (this.env.useLaggyClientEmulation) {
      __s0local2.warn("Be Aware:  testing laggy client emulation");
      setTimeout(function () {
        this.sendMessage(__s70param0.getCmdId(), [JSON.stringify(__s70param0)]);
      }, this.getRandomLag());
    } else {
      this.sendMessage(__s70param0.getCmdId(), [JSON.stringify(__s70param0)]);
    }
  };
  BasicSmartfoxClient.prototype.doRoundTripBench = function () {
    this._roundTripStartTime = Date.now();
    this.sendXMLMessage(__s0local3, "roundTrip", this.activeRoomId, "");
  };
  BasicSmartfoxClient.prototype.isConnectedViaHTTP = function () {
    return 0;
  };
  Object.defineProperty(BasicSmartfoxClient.prototype, "userForcedDisconnect", {
    get: function () {
      return this._userForcedDisconnect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "connectionTime", {
    get: function () {
      return this._connectionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "roundTripTime", {
    get: function () {
      return this._roundTripTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "ip", {
    get: function () {
      return this._ip;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "port", {
    get: function () {
      return this._port;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "activeRoom", {
    get: function () {
      var __s90local0 = this.getRoom(this.activeRoomId);
      if (__s90local0) {
        return __s90local0.getName();
      } else {
        return "Not available.";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSmartfoxClient.prototype, "env", {
    get: function () {
      return __dep_class_EnvGlobalsHandler.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicSmartfoxClient.prototype.login = function (__s96param0, __s96param1, __s96param2) {
    var __s96local0 = "<login z='" + __s96param0 + "'><nick><![CDATA[" + __s96param1 + "]]></nick><pword><![CDATA[" + __s96param2 + "]]></pword></login>";
    this.sendXMLMessage(__s0local3, "login", 0, __s96local0);
  };
  BasicSmartfoxClient.prototype.sendCommand = function (__s98param0, __s98param1, __s98param2, __s98param3 = -1) {
    if (this.socket) {
      var __s98local0 = ["", "xt", __s98param0, __s98param1, __s98param3].concat(__s98param2, [""]).join("%");
      if (this.isConnected) {
        __s0local2.debug("[Sending xtMessage]: " + __s98local0);
        this.socket.send(__s98local0);
      } else {
        __s0local2.warn("[Wanted to send xtMessage]: " + __s98local0 + "  BUT socket has state: " + this.socket.readyState);
      }
    } else {
      __s0local2.warn("[Wanted to send xtMessage]: " + __s98param0 + " " + __s98param1 + "  BUT socket hasn't been initialized yet.");
    }
  };
  BasicSmartfoxClient.prototype.sendXMLMessage = function (__s104param0, __s104param1, __s104param2, __s104param3) {
    var __s104local0 = this;
    if (this.isConnected) {
      var __s104local1 = __s104param0 + "<body action='" + __s104param1 + "' r='" + __s104param2 + "'>" + __s104param3 + "</body></msg>";
      __s0local2.debug("[Sending XMLMessage]: " + __s104local1.replace(/]]>/g, "] ]>") + "\n");
      this.socket.send(__s104local1);
    } else {
      __s0local2.warn("socket not ready, scheduling retry");
      setTimeout(function () {
        __s0local2.warn("[sretrying to sendXMLMessage...");
        __s104local0.sendXMLMessage(__s104param0, __s104param1, __s104param2, __s104param3);
      }, 50);
    }
  };
  Object.defineProperty(BasicSmartfoxClient.prototype, "isConnected", {
    get: function () {
      return this.socket && this.socket.readyState === WebSocket.OPEN;
    },
    enumerable: true,
    configurable: true
  });
  BasicSmartfoxClient.prototype.handleSocketData = function (__s112param0) {
    var __s112local0 = this;
    var __s112local1 = new FileReader();
    var __s112local2 = ++this._lastSocketDataIdInQueue;
    __s112local1.onloadend = function () {
      return __s112local0.onDataReady(__s112local1.result, __s112local2);
    };
    __s112local1.readAsText(__s112param0.data, "utf-8");
  };
  BasicSmartfoxClient.prototype.onDataReady = function (__s116param0, __s116param1) {
    var __s116local0 = this;
    this._lastSocketDataIdHandled = __s116param1;
    var __s116local1 = __s116param0.length;
    __s116param0 = __s116param0.replace(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g, "");
    __s0local2.debug("[ RECEIVED ]: " + __s116param0 + ", (len: " + __s116local1 + ")");
    this.commandBuffer += __s116param0;
    var __s116local2;
    var __s116local3 = /<msg[\s\S]+<\/msg>/g;
    var __s116local4 = this.commandBuffer.match(__s116local3);
    if (__s116local4 && __s116local4.length > 0) {
      __s116local4.forEach(function (__s119param0) {
        __s116local0.handleSystemMessage(__s119param0);
      });
      this.commandBuffer = this.commandBuffer.replace(__s116local3, "");
    }
    __s116local2 = this.commandBuffer;
    if (/}?%$/.test(__s116local2)) {
      var __s116local5 = this.commandBuffer.split("%xt");
      this.commandBuffer = "";
      for (var __s116local6 = 0; __s116local6 < __s116local5.length; __s116local6++) {
        if (__s116local5[__s116local6].length > 0) {
          this.handleExtMessage(__s116local5[__s116local6]);
        }
      }
    }
    if (!this.isSocketDataInQueue()) {
      this.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.SOCKET_EMPTIED));
    }
  };
  BasicSmartfoxClient.prototype.isSocketDataInQueue = function () {
    return this._lastSocketDataIdInQueue > this._lastSocketDataIdHandled;
  };
  BasicSmartfoxClient.prototype.handleExtMessage = function (__s128param0) {
    var __s128local0 = __s128param0.substring(1, __s128param0.length - 1).split("%");
    var __s128local1 = __s128local0.shift();
    this.onExtensionResponse(__s128local1, __s128local0);
  };
  BasicSmartfoxClient.prototype.handleSystemMessage = function (__s130param0) {
    var __s130local0 = __dep_exact_15601d6150828cd6.XML(__s130param0);
    var __s130local1 = __s130local0.child("body").attribute("action");
    switch (__s130local1) {
      case "apiOK":
        __s0local2.debug("apiOK received");
        this._connectionTime = Date.now() - this._connectionTime;
        this.disposeGameServerErrorDelayTimer();
        this.startGameServerErrorDelayTimer(this.bindFunction(this.onRoomListFailed));
        var __s130local2 = this.worldAssignmentFacade.selectedNetworkInstance;
        this.defaultZone = __s130local2.zone;
        this.login(__s130local2.zone, "", this.env.versionDateGame + "%" + this.worldAssignmentFacade.currentCountry.ggsLanguageCode + "%" + this.env.distributorId);
        this.dispatchEvent(new __dep_class_SmartfoxEvent.SmartfoxEvent(__dep_class_SmartfoxEvent.SmartfoxEvent.CONNECT_SUCCESS));
        break;
      case "joinOK":
        var __s130local3 = Number(__s130local0.child("body").attribute("r"));
        this.activeRoomId = __s130local3;
        var __s130local4 = Number(__s130local0.child("body").child("pid").attribute("id"));
        this.playerId = __s130local4;
        this.onJoinRoom();
        break;
      case "roundTripRes":
        this.onRoundTripResponse({
          CTS: Date.now()
        });
        break;
      default:
        __s0local2.warn("Unexpected sys message: " + __s130local1);
    }
  };
  BasicSmartfoxClient.prototype.getRoom = function (__s133param0) {
    return this.roomList[__s133param0];
  };
  BasicSmartfoxClient.prototype.checkAvgNetworkLagTime = function (__s135param0 = 4000, __s135param1 = 8) {
    this.stopAvgNetworkLagTimer();
    this.totalPingTime = 0;
    this.pingCount = 0;
    this.roundTripResponseSignal.add(this.bindFunction(this.avgNetworkLagResponseHandler));
    this.averageNetworkLagTimer = new __dep_export_CSSMouseCursor.Timer(__s135param0, __s135param1);
    this.averageNetworkLagTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.avgNetworkLagTimerListener));
    this.averageNetworkLagTimer.addEventListener(__s0local1.TIMER_COMPLETE, this.bindFunction(this.avgNetworkLagTimerDone));
    this.averageNetworkLagTimer.start();
  };
  BasicSmartfoxClient.prototype.stopAvgNetworkLagTimer = function () {
    if (this.averageNetworkLagTimer) {
      this.roundTripResponseSignal.remove(this.bindFunction(this.avgNetworkLagResponseHandler));
      this.averageNetworkLagTimer.stop();
      this.averageNetworkLagTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.avgNetworkLagTimerListener));
      this.averageNetworkLagTimer.removeEventListener(__s0local1.TIMER_COMPLETE, this.bindFunction(this.avgNetworkLagTimerDone));
      this.averageNetworkLagTimer = null;
    }
  };
  BasicSmartfoxClient.prototype.avgNetworkLagTimerDone = function (__s140param0) {
    this.stopAvgNetworkLagTimer();
  };
  BasicSmartfoxClient.prototype.avgNetworkLagTimerListener = function (__s142param0) {
    this.doRoundTripBench();
  };
  BasicSmartfoxClient.prototype.avgNetworkLagResponseHandler = function (__s144param0) {
    this.totalPingTime += __s144param0 / 2;
    this.pingCount++;
    var __s144local0 = Math.round(this.totalPingTime / this.pingCount);
    this.onAvgNetworkLagTimeResponse.signal(__s144local0);
  };
  BasicSmartfoxClient.LOBBY_ROOM_NAME = "Lobby";
  BasicSmartfoxClient.S2C_ROOMLIST = "rlu";
  BasicSmartfoxClient.S2C_VERSION_CHECK = "vck";
  BasicSmartfoxClient.S2C_JOIN_ROOM = "jro";
  BasicSmartfoxClient.S2C_PING = "pin";
  return BasicSmartfoxClient;
}(__s0local0);
exports.BasicSmartfoxClient = __s0local4;
