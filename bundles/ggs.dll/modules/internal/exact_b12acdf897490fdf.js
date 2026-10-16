module.exports = Transform;
var __s0local0 = require("gge-module:export_codes").codes;
var __s0local1 = __s0local0.ERR_METHOD_NOT_IMPLEMENTED;
var __s0local2 = __s0local0.ERR_MULTIPLE_CALLBACK;
var __s0local3 = __s0local0.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var __s0local4 = __s0local0.ERR_TRANSFORM_WITH_LENGTH_0;
var __dep_class_Duplex = require("gge-module:class_Duplex");
function Transform(__s1param0) {
  if (!(this instanceof Transform)) {
    return new Transform(__s1param0);
  }
  __dep_class_Duplex.call(this, __s1param0);
  this._transformState = {
    afterTransform: function afterTransform(__s4param0, __s4param1) {
      var __s4local0 = this._transformState;
      __s4local0.transforming = false;
      var __s4local1 = __s4local0.writecb;
      if (__s4local1 === null) {
        return this.emit("error", new __s0local2());
      }
      __s4local0.writechunk = null;
      __s4local0.writecb = null;
      if (__s4param1 != null) {
        this.push(__s4param1);
      }
      __s4local1(__s4param0);
      var __s4local2 = this._readableState;
      __s4local2.reading = false;
      if (__s4local2.needReadable || __s4local2.length < __s4local2.highWaterMark) {
        this._read(__s4local2.highWaterMark);
      }
    }.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (__s1param0) {
    if (typeof __s1param0.transform == "function") {
      this._transform = __s1param0.transform;
    }
    if (typeof __s1param0.flush == "function") {
      this._flush = __s1param0.flush;
    }
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  var __s12local0 = this;
  if (typeof this._flush != "function" || this._readableState.destroyed) {
    done(this, null, null);
  } else {
    this._flush(function (__s16param0, __s16param1) {
      done(__s12local0, __s16param0, __s16param1);
    });
  }
}
function done(__s18param0, __s18param1, __s18param2) {
  if (__s18param1) {
    return __s18param0.emit("error", __s18param1);
  }
  if (__s18param2 != null) {
    __s18param0.push(__s18param2);
  }
  if (__s18param0._writableState.length) {
    throw new __s0local4();
  }
  if (__s18param0._transformState.transforming) {
    throw new __s0local3();
  }
  return __s18param0.push(null);
}
require("gge-module:opaque_abbdd9b5728f0d40f7dc71b1")(Transform, __dep_class_Duplex);
Transform.prototype.push = function (__s24param0, __s24param1) {
  this._transformState.needTransform = false;
  return __dep_class_Duplex.prototype.push.call(this, __s24param0, __s24param1);
};
Transform.prototype._transform = function (__s26param0, __s26param1, __s26param2) {
  __s26param2(new __s0local1("_transform()"));
};
Transform.prototype._write = function (__s28param0, __s28param1, __s28param2) {
  var __s28local0 = this._transformState;
  __s28local0.writecb = __s28param2;
  __s28local0.writechunk = __s28param0;
  __s28local0.writeencoding = __s28param1;
  if (!__s28local0.transforming) {
    var __s28local1 = this._readableState;
    if (__s28local0.needTransform || __s28local1.needReadable || __s28local1.length < __s28local1.highWaterMark) {
      this._read(__s28local1.highWaterMark);
    }
  }
};
Transform.prototype._read = function (__s32param0) {
  var __s32local0 = this._transformState;
  if (__s32local0.writechunk === null || __s32local0.transforming) {
    __s32local0.needTransform = true;
  } else {
    __s32local0.transforming = true;
    this._transform(__s32local0.writechunk, __s32local0.writeencoding, __s32local0.afterTransform);
  }
};
Transform.prototype._destroy = function (__s36param0, __s36param1) {
  __dep_class_Duplex.prototype._destroy.call(this, __s36param0, function (__s38param0) {
    __s36param1(__s38param0);
  });
};
