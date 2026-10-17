function instanceOfLanguageMetaData(__s1param0) {
  return __s1param0 && __s1param0.branch !== undefined && __s1param0.versionNo !== undefined && __s1param0.deployTime !== undefined;
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.instanceOfLanguageMetaData = instanceOfLanguageMetaData;
exports.instanceOfLanguageData = function instanceOfLanguageData(__s3param0) {
  return __s3param0 && __s3param0["@metadata"] !== undefined && instanceOfLanguageMetaData(__s3param0["@metadata"]);
};
