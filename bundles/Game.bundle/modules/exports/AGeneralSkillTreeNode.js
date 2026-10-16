Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function AGeneralSkillTreeNode(__s3param0) {
    this._id = 0;
    this._id = __s3param0;
    this._childs = [];
    this._unlockRequirements = [];
  }
  AGeneralSkillTreeNode.prototype.insertSkill = function (__s5param0) {
    if (this.childNodeClass != null) {
      if (!this.getChildNode(this.childIDProperty(__s5param0))) {
        this._childs.push(new this.childNodeClass(this.childIDProperty(__s5param0)));
      }
      this.getChildNode(this.childIDProperty(__s5param0)).insertSkill(__s5param0);
    }
  };
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "childNodeClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AGeneralSkillTreeNode.prototype.childIDProperty = function (__s11param0) {
    return 0;
  };
  AGeneralSkillTreeNode.prototype.getChildNode = function (__s13param0) {
    if (this._childs != null) {
      for (var __s13local0 = 0, __s13local1 = this._childs; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined && __s13local2.id == __s13param0) {
          return __s13local2;
        }
      }
    }
    return null;
  };
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "childs", {
    get: function () {
      return this._childs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGeneralSkillTreeNode.prototype, "unlockRequirements", {
    get: function () {
      return this._unlockRequirements;
    },
    enumerable: true,
    configurable: true
  });
  AGeneralSkillTreeNode.prototype.isUnlocked = function () {
    for (var __s25local0 = 0; __s25local0 < this._unlockRequirements.length; __s25local0++) {
      if (!this._unlockRequirements[__s25local0].isUnlocked()) {
        return false;
      }
    }
    return true;
  };
  AGeneralSkillTreeNode.prototype.getUnlockText = function () {
    var __s30local0 = "";
    for (var __s30local1 = 0; __s30local1 < this._unlockRequirements.length; __s30local1++) {
      var __s30local2 = this._unlockRequirements[__s30local1];
      if (!__s30local2.isUnlocked() && (__s30local0 += __s30local0 != "" ? "\n" : "", __s30local0 += __s30local2.getUnlockRequirementText(), !__s30local2.showFollowingRequirements)) {
        break;
      }
    }
    return __s30local0;
  };
  AGeneralSkillTreeNode.prototype.addUnlockRequirement = function (__s35param0) {
    this._unlockRequirements.push(__s35param0);
  };
  return AGeneralSkillTreeNode;
}();
exports.AGeneralSkillTreeNode = __s0local0;
