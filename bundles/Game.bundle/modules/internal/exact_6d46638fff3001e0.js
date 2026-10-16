module.exports = function enhanceError(__s1param0, __s1param1, __s1param2, __s1param3, __s1param4) {
  __s1param0.config = __s1param1;
  if (__s1param2) {
    __s1param0.code = __s1param2;
  }
  __s1param0.request = __s1param3;
  __s1param0.response = __s1param4;
  __s1param0.isAxiosError = true;
  __s1param0.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return __s1param0;
};
