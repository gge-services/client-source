module.exports = Service;
var __dep_class_Namespace = require("gge-module:class_Namespace");
((Service.prototype = Object.create(__dep_class_Namespace.prototype)).constructor = Service).className = "Service";
var __dep_class_Method = require("gge-module:class_Method");
var __dep_exact_2865b4ce4f048b89 = require("gge-module:exact_2865b4ce4f048b89");
var __dep_exact_d0b1810c227b741d = require("gge-module:exact_d0b1810c227b741d");
function Service(__s1param0, __s1param1) {
  __dep_class_Namespace.call(this, __s1param0, __s1param1);
  this.methods = {};
  this._methodsArray = null;
}
function clearCache(__s3param0) {
  __s3param0._methodsArray = null;
  return __s3param0;
}
Service.fromJSON = function fromJSON(__s5param0, __s5param1) {
  var __s5local0 = new Service(__s5param0, __s5param1.options);
  if (__s5param1.methods) {
    for (var __s5local1 = Object.keys(__s5param1.methods), __s5local2 = 0; __s5local2 < __s5local1.length; ++__s5local2) {
      __s5local0.add(__dep_class_Method.fromJSON(__s5local1[__s5local2], __s5param1.methods[__s5local1[__s5local2]]));
    }
  }
  if (__s5param1.nested) {
    __s5local0.addJSON(__s5param1.nested);
  }
  __s5local0.comment = __s5param1.comment;
  return __s5local0;
};
Service.prototype.toJSON = function toJSON(__s11param0) {
  var __s11local0 = __dep_class_Namespace.prototype.toJSON.call(this, __s11param0);
  var __s11local1 = !!__s11param0 && Boolean(__s11param0.keepComments);
  return __dep_exact_2865b4ce4f048b89.toObject(["options", __s11local0 && __s11local0.options || undefined, "methods", __dep_class_Namespace.arrayToJSON(this.methodsArray, __s11param0) || {}, "nested", __s11local0 && __s11local0.nested || undefined, "comment", __s11local1 ? this.comment : undefined]);
};
Object.defineProperty(Service.prototype, "methodsArray", {
  get: function () {
    return this._methodsArray ||= __dep_exact_2865b4ce4f048b89.toArray(this.methods);
  }
});
Service.prototype.get = function get(__s15param0) {
  return this.methods[__s15param0] || __dep_class_Namespace.prototype.get.call(this, __s15param0);
};
Service.prototype.resolveAll = function resolveAll() {
  for (var __s17local0 = this.methodsArray, __s17local1 = 0; __s17local1 < __s17local0.length; ++__s17local1) {
    __s17local0[__s17local1].resolve();
  }
  return __dep_class_Namespace.prototype.resolve.call(this);
};
Service.prototype.add = function add(__s21param0) {
  if (this.get(__s21param0.name)) {
    throw Error("duplicate name '" + __s21param0.name + "' in " + this);
  }
  if (__s21param0 instanceof __dep_class_Method) {
    this.methods[__s21param0.name] = __s21param0;
    __s21param0.parent = this;
    return clearCache(this);
  } else {
    return __dep_class_Namespace.prototype.add.call(this, __s21param0);
  }
};
Service.prototype.remove = function remove(__s26param0) {
  if (__s26param0 instanceof __dep_class_Method) {
    if (this.methods[__s26param0.name] !== __s26param0) {
      throw Error(__s26param0 + " is not a member of " + this);
    }
    delete this.methods[__s26param0.name];
    __s26param0.parent = null;
    return clearCache(this);
  }
  return __dep_class_Namespace.prototype.remove.call(this, __s26param0);
};
Service.prototype.create = function create(__s30param0, __s30param1, __s30param2) {
  var __s30local0;
  var __s30local1 = new __dep_exact_d0b1810c227b741d.Service(__s30param0, __s30param1, __s30param2);
  for (var __s30local2 = 0; __s30local2 < this.methodsArray.length; ++__s30local2) {
    var __s30local3 = __dep_exact_2865b4ce4f048b89.lcFirst((__s30local0 = this._methodsArray[__s30local2]).resolve().name).replace(/[^$\w_]/g, "");
    __s30local1[__s30local3] = __dep_exact_2865b4ce4f048b89.codegen(["r", "c"], __dep_exact_2865b4ce4f048b89.isReserved(__s30local3) ? __s30local3 + "_" : __s30local3)("return this.rpcCall(m,q,s,r,c)")({
      m: __s30local0,
      q: __s30local0.resolvedRequestType.ctor,
      s: __s30local0.resolvedResponseType.ctor
    });
  }
  return __s30local1;
};
