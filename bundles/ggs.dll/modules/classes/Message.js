module.exports = Message;
var __dep_class_Buffer_allocUnsafe = require("gge-module:class_Buffer_allocUnsafe");
function Message(__s1param0) {
  if (__s1param0) {
    for (var __s1local0 = Object.keys(__s1param0), __s1local1 = 0; __s1local1 < __s1local0.length; ++__s1local1) {
      this[__s1local0[__s1local1]] = __s1param0[__s1local0[__s1local1]];
    }
  }
}
Message.create = function create(__s6param0) {
  return this.$type.create(__s6param0);
};
Message.encode = function encode(__s8param0, __s8param1) {
  return this.$type.encode(__s8param0, __s8param1);
};
Message.encodeDelimited = function encodeDelimited(__s10param0, __s10param1) {
  return this.$type.encodeDelimited(__s10param0, __s10param1);
};
Message.decode = function decode(__s12param0) {
  return this.$type.decode(__s12param0);
};
Message.decodeDelimited = function decodeDelimited(__s14param0) {
  return this.$type.decodeDelimited(__s14param0);
};
Message.verify = function verify(__s16param0) {
  return this.$type.verify(__s16param0);
};
Message.fromObject = function fromObject(__s18param0) {
  return this.$type.fromObject(__s18param0);
};
Message.toObject = function toObject(__s20param0, __s20param1) {
  return this.$type.toObject(__s20param0, __s20param1);
};
Message.prototype.toJSON = function toJSON() {
  return this.$type.toObject(this, __dep_class_Buffer_allocUnsafe.toJSONOptions);
};
