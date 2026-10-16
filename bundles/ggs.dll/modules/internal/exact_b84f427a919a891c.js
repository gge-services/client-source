var __s0local0;
Object.defineProperty(exports, "__esModule", {
  value: true
});
(function (__s1param0) {
  __s1param0[__s1param0.None = 0] = "None";
  __s1param0[__s1param0.Fallback = 1] = "Fallback";
  __s1param0[__s1param0.Akamai = 2] = "Akamai";
  __s1param0[__s1param0.CDNetworks = 3] = "CDNetworks";
  __s1param0[__s1param0.Cloudfront = 4] = "Cloudfront";
  __s1param0[__s1param0.Limelight = 5] = "Limelight";
})(__s0local0 ||= {});
exports.CDN = __s0local0;
(function (__s3param0) {
  __s3param0.abbreviation = function abbreviation(__s5param0) {
    switch (__s5param0) {
      case __s3param0.None:
        return "";
      case __s3param0.Fallback:
        return "fb";
      case __s3param0.Akamai:
        return "ak";
      case __s3param0.CDNetworks:
        return "cd";
      case __s3param0.Cloudfront:
        return "cl";
      case __s3param0.Limelight:
        return "ll";
    }
  };
})(__s0local0 ||= {});
exports.CDN = __s0local0;
