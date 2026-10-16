module.exports = Method;
var __dep_class_ReflectionObject = require("gge-module:class_ReflectionObject");
((Method.prototype = Object.create(__dep_class_ReflectionObject.prototype)).constructor = Method).className = "Method";
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function Method(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4, __s1param5, __s1param6, __s1param7) {
  if (__dep_exact_2865b4ce4f048b89.isObject(__s1param4)) {
    __s1param6 = __s1param4;
    __s1param4 = __s1param5 = undefined;
  } else if (__dep_exact_2865b4ce4f048b89.isObject(__s1param5)) {
    __s1param6 = __s1param5;
    __s1param5 = undefined;
  }
  if (__s1param1 !== undefined && !__dep_exact_2865b4ce4f048b89.isString(__s1param1)) {
    throw TypeError("type must be a string");
  }
  if (!__dep_exact_2865b4ce4f048b89.isString(__s1param2)) {
    throw TypeError("requestType must be a string");
  }
  if (!__dep_exact_2865b4ce4f048b89.isString(__s1param3)) {
    throw TypeError("responseType must be a string");
  }
  __dep_class_ReflectionObject.call(this, __s1param0, __s1param6);
  this.type = __s1param1 || "rpc";
  this.requestType = __s1param2;
  this.requestStream = !!__s1param4 || undefined;
  this.responseType = __s1param3;
  this.responseStream = !!__s1param5 || undefined;
  this.resolvedRequestType = null;
  this.resolvedResponseType = null;
  this.comment = __s1param7;
}
Method.fromJSON = function fromJSON(__s8param0, __s8param1) {
  return new Method(__s8param0, __s8param1.type, __s8param1.requestType, __s8param1.responseType, __s8param1.requestStream, __s8param1.responseStream, __s8param1.options, __s8param1.comment);
};
Method.prototype.toJSON = function toJSON(__s10param0) {
  var __s10local0 = !!__s10param0 && Boolean(__s10param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["type", this.type !== "rpc" && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", __s10local0 ? this.comment : undefined]);
};
Method.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  } else {
    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);
    return __dep_class_ReflectionObject.prototype.resolve.call(this);
  }
};
