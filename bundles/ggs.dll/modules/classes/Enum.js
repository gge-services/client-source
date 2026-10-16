module.exports = Enum;
var __dep_class_ReflectionObject = require("gge-module:class_ReflectionObject");
((Enum.prototype = Object.create(__dep_class_ReflectionObject.prototype)).constructor = Enum).className = "Enum";
var __dep_class_Namespace = require("gge-module:class_Namespace");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function Enum(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4) {
  __dep_class_ReflectionObject.call(this, __s1param0, __s1param2);
  if (__s1param1 && typeof __s1param1 != "object") {
    throw TypeError("values must be an object");
  }
  this.valuesById = {};
  this.values = Object.create(this.valuesById);
  this.comment = __s1param3;
  this.comments = __s1param4 || {};
  this.reserved = undefined;
  if (__s1param1) {
    for (var __s1local0 = Object.keys(__s1param1), __s1local1 = 0; __s1local1 < __s1local0.length; ++__s1local1) {
      if (typeof __s1param1[__s1local0[__s1local1]] == "number") {
        this.valuesById[this.values[__s1local0[__s1local1]] = __s1param1[__s1local0[__s1local1]]] = __s1local0[__s1local1];
      }
    }
  }
}
Enum.fromJSON = function fromJSON(__s8param0, __s8param1) {
  var __s8local0 = new Enum(__s8param0, __s8param1.values, __s8param1.options, __s8param1.comment, __s8param1.comments);
  __s8local0.reserved = __s8param1.reserved;
  return __s8local0;
};
Enum.prototype.toJSON = function toJSON(__s10param0) {
  var __s10local0 = !!__s10param0 && Boolean(__s10param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", __s10local0 ? this.comment : undefined, "comments", __s10local0 ? this.comments : undefined]);
};
Enum.prototype.add = function add(__s12param0, __s12param1, __s12param2) {
  if (!__dep_exact_2865b4ce4f048b89.isString(__s12param0)) {
    throw TypeError("name must be a string");
  }
  if (!__dep_exact_2865b4ce4f048b89.isInteger(__s12param1)) {
    throw TypeError("id must be an integer");
  }
  if (this.values[__s12param0] !== undefined) {
    throw Error("duplicate name '" + __s12param0 + "' in " + this);
  }
  if (this.isReservedId(__s12param1)) {
    throw Error("id " + __s12param1 + " is reserved in " + this);
  }
  if (this.isReservedName(__s12param0)) {
    throw Error("name '" + __s12param0 + "' is reserved in " + this);
  }
  if (this.valuesById[__s12param1] !== undefined) {
    if (!this.options || !this.options.allow_alias) {
      throw Error("duplicate id " + __s12param1 + " in " + this);
    }
    this.values[__s12param0] = __s12param1;
  } else {
    this.valuesById[this.values[__s12param0] = __s12param1] = __s12param0;
  }
  this.comments[__s12param0] = __s12param2 || null;
  return this;
};
Enum.prototype.remove = function remove(__s22param0) {
  if (!__dep_exact_2865b4ce4f048b89.isString(__s22param0)) {
    throw TypeError("name must be a string");
  }
  var __s22local0 = this.values[__s22param0];
  if (__s22local0 == null) {
    throw Error("name '" + __s22param0 + "' does not exist in " + this);
  }
  delete this.valuesById[__s22local0];
  delete this.values[__s22param0];
  delete this.comments[__s22param0];
  return this;
};
Enum.prototype.isReservedId = function isReservedId(__s26param0) {
  return __dep_class_Namespace.isReservedId(this.reserved, __s26param0);
};
Enum.prototype.isReservedName = function isReservedName(__s28param0) {
  return __dep_class_Namespace.isReservedName(this.reserved, __s28param0);
};
