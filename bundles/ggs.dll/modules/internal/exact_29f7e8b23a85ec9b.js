Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToURL = function navigateToURL(__s1param0, __s1param1 = "_blank") {
  if (typeof __s1param0 != "string" && "url" in __s1param0) {
    __s1param0 = __s1param0.url;
  }
  window.open(__s1param0, __s1param1);
};
