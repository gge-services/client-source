module.exports = OneOf;
var __dep_class_ReflectionObject = require("gge-module:class_ReflectionObject");
((OneOf.prototype = Object.create(__dep_class_ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
var __dep_class_Field = require("gge-module:class_Field");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
function OneOf(__s1param0, __s1param1, __s1param2, __s1param3) {
  if (!Array.isArray(__s1param1)) {
    __s1param2 = __s1param1;
    __s1param1 = undefined;
  }
  __dep_class_ReflectionObject.call(this, __s1param0, __s1param2);
  if (__s1param1 !== undefined && !Array.isArray(__s1param1)) {
    throw TypeError("fieldNames must be an Array");
  }
  this.oneof = __s1param1 || [];
  this.fieldsArray = [];
  this.comment = __s1param3;
}
function addFieldsToParent(__s5param0) {
  if (__s5param0.parent) {
    for (var __s5local0 = 0; __s5local0 < __s5param0.fieldsArray.length; ++__s5local0) {
      if (!__s5param0.fieldsArray[__s5local0].parent) {
        __s5param0.parent.add(__s5param0.fieldsArray[__s5local0]);
      }
    }
  }
}
OneOf.fromJSON = function fromJSON(__s11param0, __s11param1) {
  return new OneOf(__s11param0, __s11param1.oneof, __s11param1.options, __s11param1.comment);
};
OneOf.prototype.toJSON = function toJSON(__s13param0) {
  var __s13local0 = !!__s13param0 && Boolean(__s13param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["options", this.options, "oneof", this.oneof, "comment", __s13local0 ? this.comment : undefined]);
};
OneOf.prototype.add = function add(__s15param0) {
  if (!(__s15param0 instanceof __dep_class_Field)) {
    throw TypeError("field must be a Field");
  }
  if (__s15param0.parent && __s15param0.parent !== this.parent) {
    __s15param0.parent.remove(__s15param0);
  }
  this.oneof.push(__s15param0.name);
  this.fieldsArray.push(__s15param0);
  __s15param0.partOf = this;
  addFieldsToParent(this);
  return this;
};
OneOf.prototype.remove = function remove(__s19param0) {
  if (!(__s19param0 instanceof __dep_class_Field)) {
    throw TypeError("field must be a Field");
  }
  var __s19local0 = this.fieldsArray.indexOf(__s19param0);
  if (__s19local0 < 0) {
    throw Error(__s19param0 + " is not a member of " + this);
  }
  this.fieldsArray.splice(__s19local0, 1);
  if ((__s19local0 = this.oneof.indexOf(__s19param0.name)) > -1) {
    this.oneof.splice(__s19local0, 1);
  }
  __s19param0.partOf = null;
  return this;
};
OneOf.prototype.onAdd = function onAdd(__s24param0) {
  __dep_class_ReflectionObject.prototype.onAdd.call(this, __s24param0);
  for (var __s24local0 = 0; __s24local0 < this.oneof.length; ++__s24local0) {
    var __s24local1 = __s24param0.get(this.oneof[__s24local0]);
    if (__s24local1 && !__s24local1.partOf) {
      __s24local1.partOf = this;
      this.fieldsArray.push(__s24local1);
    }
  }
  addFieldsToParent(this);
};
OneOf.prototype.onRemove = function onRemove(__s29param0) {
  var __s29local0;
  for (var __s29local1 = 0; __s29local1 < this.fieldsArray.length; ++__s29local1) {
    if ((__s29local0 = this.fieldsArray[__s29local1]).parent) {
      __s29local0.parent.remove(__s29local0);
    }
  }
  __dep_class_ReflectionObject.prototype.onRemove.call(this, __s29param0);
};
OneOf.d = function decorateOneOf() {
  var __s34local0 = new Array(arguments.length);
  for (var __s34local1 = 0; __s34local1 < arguments.length;) {
    __s34local0[__s34local1] = arguments[__s34local1++];
  }
  return function oneOfDecorator(__s38param0, __s38param1) {
    __dep_exact_2865b4ce4f048b89.decorateType(__s38param0.constructor).add(new OneOf(__s38param1, __s34local0));
    Object.defineProperty(__s38param0, __s38param1, {
      get: __dep_exact_2865b4ce4f048b89.oneOfGetter(__s34local0),
      set: __dep_exact_2865b4ce4f048b89.oneOfSetter(__s34local0)
    });
  };
};
