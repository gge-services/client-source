Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function Room(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4, __s3param5, __s3param6, __s3param7, __s3param8 = 0, __s3param9 = 0) {
    this.id = __s3param0;
    this.name = __s3param1;
    this.maxSpectators = __s3param3;
    this.maxUsers = __s3param2;
    this.temp = __s3param4;
    this.game = __s3param5;
    this.priv = __s3param6;
    this.limbo = __s3param7;
    this.userCount = __s3param8;
    this.specCount = __s3param9;
    this.userList = [];
    this.variables = [];
  }
  Room.prototype.getUserList = function () {
    return this.userList;
  };
  Room.prototype.clearUserList = function () {
    this.userList = [];
    this.userCount = 0;
    this.specCount = 0;
  };
  Room.prototype.getVariable = function (__s9param0) {
    return this.variables[__s9param0];
  };
  Room.prototype.getVariables = function () {
    return this.variables;
  };
  Room.prototype.setVariables = function (__s13param0) {
    this.variables = __s13param0;
  };
  Room.prototype.clearVariables = function () {
    this.variables = [];
  };
  Room.prototype.getName = function () {
    return this.name;
  };
  Room.prototype.getId = function () {
    return this.id;
  };
  Room.prototype.isTemp = function () {
    return this.temp;
  };
  Room.prototype.isGame = function () {
    return this.game;
  };
  Room.prototype.isPrivate = function () {
    return this.priv;
  };
  Room.prototype.getUserCount = function () {
    return this.userCount;
  };
  Room.prototype.getSpectatorCount = function () {
    return this.specCount;
  };
  Room.prototype.getMaxUsers = function () {
    return this.maxUsers;
  };
  Room.prototype.getMaxSpectators = function () {
    return this.maxSpectators;
  };
  Room.prototype.setMyPlayerIndex = function (__s35param0) {
    this.myPlayerIndex = __s35param0;
  };
  Room.prototype.getMyPlayerIndex = function () {
    return this.myPlayerIndex;
  };
  Room.prototype.setIsLimbo = function (__s39param0) {
    this.limbo = __s39param0;
  };
  Room.prototype.isLimbo = function () {
    return this.limbo;
  };
  Room.prototype.setUserCount = function (__s43param0) {
    this.userCount = __s43param0;
  };
  Room.prototype.setSpectatorCount = function (__s45param0) {
    this.specCount = __s45param0;
  };
  Room.prototype.setUserList = function (__s47param0) {
    this.userList = __s47param0;
  };
  return Room;
}();
exports.Room = __s0local0;
