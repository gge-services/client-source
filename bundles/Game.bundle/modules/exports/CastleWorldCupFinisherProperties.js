Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __s0local0 = function (__s1param0) {
  function CastleWorldCupFinisherProperties(__s3param0) {
    var __s3local0 = this;
    __s3local0.date = 0;
    __s3local0.teamA = 0;
    __s3local0.teamB = 0;
    __s3local0.winner = 0;
    __s3local0.bonusC2 = 0;
    __s3local0.paymentC2 = 0;
    __s3local0.vote = 0;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this) || this).date = __dep_exact_f855840627e6e145.int(__s3param0[0]);
    __s3local0.teamA = __dep_exact_f855840627e6e145.int(__s3param0[1]);
    __s3local0.teamB = __dep_exact_f855840627e6e145.int(__s3param0[2]);
    __s3local0.winner = __dep_exact_f855840627e6e145.int(__s3param0[3]);
    __s3local0.bonusC2 = __dep_exact_f855840627e6e145.int(__s3param0[4]);
    __s3local0.paymentC2 = __dep_exact_f855840627e6e145.int(__s3param0[5]);
    __s3local0.vote = __dep_exact_f855840627e6e145.int(__s3param0[6]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldCupFinisherProperties, __s1param0);
  return CastleWorldCupFinisherProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.CastleWorldCupFinisherProperties = __s0local0;
