module.exports = Field;
var __dep_class_ReflectionObject = require("gge-module:class_ReflectionObject");
((Field.prototype = Object.create(__dep_class_ReflectionObject.prototype)).constructor = Field).className = "Field";
var __s0local0;
var __dep_class_Enum = require("gge-module:class_Enum");
var __dep_exact_e445b2ca0584aabe = require("gge-module:exact_e445b2ca0584aabe");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
var __s0local1 = /^required|optional|repeated$/;
function Field(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4, __s1param5, __s1param6) {
  if (__dep_exact_2865b4ce4f048b89.isObject(__s1param3)) {
    __s1param6 = __s1param4;
    __s1param5 = __s1param3;
    __s1param3 = __s1param4 = undefined;
  } else if (__dep_exact_2865b4ce4f048b89.isObject(__s1param4)) {
    __s1param6 = __s1param5;
    __s1param5 = __s1param4;
    __s1param4 = undefined;
  }
  __dep_class_ReflectionObject.call(this, __s1param0, __s1param5);
  if (!__dep_exact_2865b4ce4f048b89.isInteger(__s1param1) || __s1param1 < 0) {
    throw TypeError("id must be a non-negative integer");
  }
  if (!__dep_exact_2865b4ce4f048b89.isString(__s1param2)) {
    throw TypeError("type must be a string");
  }
  if (__s1param3 !== undefined && !__s0local1.test(__s1param3 = __s1param3.toString().toLowerCase())) {
    throw TypeError("rule must be a string rule");
  }
  if (__s1param4 !== undefined && !__dep_exact_2865b4ce4f048b89.isString(__s1param4)) {
    throw TypeError("extend must be a string");
  }
  this.rule = __s1param3 && __s1param3 !== "optional" ? __s1param3 : undefined;
  this.type = __s1param2;
  this.id = __s1param1;
  this.extend = __s1param4 || undefined;
  this.required = __s1param3 === "required";
  this.optional = !this.required;
  this.repeated = __s1param3 === "repeated";
  this.map = false;
  this.message = null;
  this.partOf = null;
  this.typeDefault = null;
  this.defaultValue = null;
  this.long = !!__dep_exact_2865b4ce4f048b89.Long && __dep_exact_e445b2ca0584aabe.long[__s1param2] !== undefined;
  this.bytes = __s1param2 === "bytes";
  this.resolvedType = null;
  this.extensionField = null;
  this.declaringField = null;
  this._packed = null;
  this.comment = __s1param6;
}
Field.fromJSON = function fromJSON(__s9param0, __s9param1) {
  return new Field(__s9param0, __s9param1.id, __s9param1.type, __s9param1.rule, __s9param1.extend, __s9param1.options, __s9param1.comment);
};
Object.defineProperty(Field.prototype, "packed", {
  get: function () {
    if (this._packed === null) {
      this._packed = this.getOption("packed") !== false;
    }
    return this._packed;
  }
});
Field.prototype.setOption = function setOption(__s14param0, __s14param1, __s14param2) {
  if (__s14param0 === "packed") {
    this._packed = null;
  }
  return __dep_class_ReflectionObject.prototype.setOption.call(this, __s14param0, __s14param1, __s14param2);
};
Field.prototype.toJSON = function toJSON(__s17param0) {
  var __s17local0 = !!__s17param0 && Boolean(__s17param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", __s17local0 ? this.comment : undefined]);
};
Field.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  }
  if ((this.typeDefault = __dep_exact_e445b2ca0584aabe.defaults[this.type]) === undefined) {
    this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
    if (this.resolvedType instanceof __s0local0) {
      this.typeDefault = null;
    } else {
      this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    }
  }
  if (this.options && this.options.default != null) {
    this.typeDefault = this.options.default;
    if (this.resolvedType instanceof __dep_class_Enum && typeof this.typeDefault == "string") {
      this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
  }
  if (this.options) {
    if (this.options.packed === true || this.options.packed !== undefined && !!this.resolvedType && !(this.resolvedType instanceof __dep_class_Enum)) {
      delete this.options.packed;
    }
    if (!Object.keys(this.options).length) {
      this.options = undefined;
    }
  }
  if (this.long) {
    this.typeDefault = __dep_exact_2865b4ce4f048b89.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
    if (Object.freeze) {
      Object.freeze(this.typeDefault);
    }
  } else if (this.bytes && typeof this.typeDefault == "string") {
    var __s19local0;
    if (__dep_exact_2865b4ce4f048b89.base64.test(this.typeDefault)) {
      __dep_exact_2865b4ce4f048b89.base64.decode(this.typeDefault, __s19local0 = __dep_exact_2865b4ce4f048b89.newBuffer(__dep_exact_2865b4ce4f048b89.base64.length(this.typeDefault)), 0);
    } else {
      __dep_exact_2865b4ce4f048b89.utf8.write(this.typeDefault, __s19local0 = __dep_exact_2865b4ce4f048b89.newBuffer(__dep_exact_2865b4ce4f048b89.utf8.length(this.typeDefault)), 0);
    }
    this.typeDefault = __s19local0;
  }
  if (this.map) {
    this.defaultValue = __dep_exact_2865b4ce4f048b89.emptyObject;
  } else if (this.repeated) {
    this.defaultValue = __dep_exact_2865b4ce4f048b89.emptyArray;
  } else {
    this.defaultValue = this.typeDefault;
  }
  if (this.parent instanceof __s0local0) {
    this.parent.ctor.prototype[this.name] = this.defaultValue;
  }
  return __dep_class_ReflectionObject.prototype.resolve.call(this);
};
Field.d = function decorateField(__s39param0, __s39param1, __s39param2, __s39param3) {
  if (typeof __s39param1 == "function") {
    __s39param1 = __dep_exact_2865b4ce4f048b89.decorateType(__s39param1).name;
  } else if (__s39param1 && typeof __s39param1 == "object") {
    __s39param1 = __dep_exact_2865b4ce4f048b89.decorateEnum(__s39param1).name;
  }
  return function fieldDecorator(__s43param0, __s43param1) {
    __dep_exact_2865b4ce4f048b89.decorateType(__s43param0.constructor).add(new Field(__s43param1, __s39param0, __s39param1, __s39param2, {
      default: __s39param3
    }));
  };
};
Field._configure = function configure(__s45param0) {
  __s0local0 = __s45param0;
};
