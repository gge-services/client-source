var __dep_class_Item = require("gge-module:class_Item");
function emitErrorAndCloseNT(__s1param0, __s1param1) {
  emitErrorNT(__s1param0, __s1param1);
  emitCloseNT(__s1param0);
}
function emitCloseNT(__s3param0) {
  if ((!__s3param0._writableState || !!__s3param0._writableState.emitClose) && (!__s3param0._readableState || !!__s3param0._readableState.emitClose)) {
    __s3param0.emit("close");
  }
}
function emitErrorNT(__s6param0, __s6param1) {
  __s6param0.emit("error", __s6param1);
}
module.exports = {
  destroy: function destroy(__s8param0, __s8param1) {
    var __s8local0 = this;
    var __s8local1 = this._readableState && this._readableState.destroyed;
    var __s8local2 = this._writableState && this._writableState.destroyed;
    if (__s8local1 || __s8local2) {
      if (__s8param1) {
        __s8param1(__s8param0);
      } else if (__s8param0) {
        if (this._writableState) {
          if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            __dep_class_Item.nextTick(emitErrorNT, this, __s8param0);
          }
        } else {
          __dep_class_Item.nextTick(emitErrorNT, this, __s8param0);
        }
      }
      return this;
    } else {
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(__s8param0 || null, function (__s19param0) {
        if (!__s8param1 && __s19param0) {
          if (__s8local0._writableState) {
            if (__s8local0._writableState.errorEmitted) {
              __dep_class_Item.nextTick(emitCloseNT, __s8local0);
            } else {
              __s8local0._writableState.errorEmitted = true;
              __dep_class_Item.nextTick(emitErrorAndCloseNT, __s8local0, __s19param0);
            }
          } else {
            __dep_class_Item.nextTick(emitErrorAndCloseNT, __s8local0, __s19param0);
          }
        } else if (__s8param1) {
          __dep_class_Item.nextTick(emitCloseNT, __s8local0);
          __s8param1(__s19param0);
        } else {
          __dep_class_Item.nextTick(emitCloseNT, __s8local0);
        }
      });
      return this;
    }
  },
  undestroy: function undestroy() {
    if (this._readableState) {
      this._readableState.destroyed = false;
      this._readableState.reading = false;
      this._readableState.ended = false;
      this._readableState.endEmitted = false;
    }
    if (this._writableState) {
      this._writableState.destroyed = false;
      this._writableState.ended = false;
      this._writableState.ending = false;
      this._writableState.finalCalled = false;
      this._writableState.prefinished = false;
      this._writableState.finished = false;
      this._writableState.errorEmitted = false;
    }
  },
  errorOrDestroy: function errorOrDestroy(__s32param0, __s32param1) {
    var __s32local0 = __s32param0._readableState;
    var __s32local1 = __s32param0._writableState;
    if (__s32local0 && __s32local0.autoDestroy || __s32local1 && __s32local1.autoDestroy) {
      __s32param0.destroy(__s32param1);
    } else {
      __s32param0.emit("error", __s32param1);
    }
  }
};
