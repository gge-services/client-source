// Lexically nested helper class excerpt (not executable by itself).
// Bundle: vendor.bundle; Webpack module: null; original: modules/vendor-runtime.js
function JSONPLoader(t) {
    this.AbstractLoader_constructor(t, false, createjs.AbstractLoader.JSONP);
    this.setTag(document.createElement("script"));
    this.getTag().type = "text/javascript";
  }
