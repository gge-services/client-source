Object.defineProperty(Object.prototype, "bindFunction", {
  enumerable: false,
  writable: true,
  value: function (__s1param0) {
    if (__s1param0 === null || __s1param0 === undefined) {
      return __s1param0;
    }
    if (typeof __s1param0 != "function") {
      throw new Error("Parameter \"func\" is not a funciton");
    }
    this._bindFunction_boundFunctions ||= new WeakMap();
    if (!this._bindFunction_boundFunctions.has(__s1param0)) {
      this._bindFunction_boundFunctions.set(__s1param0, __s1param0.bind(this));
    }
    var __s1local0 = this._bindFunction_boundFunctions.get(__s1param0);
    __s1local0.functionIsBound = true;
    return __s1local0;
  }
});
