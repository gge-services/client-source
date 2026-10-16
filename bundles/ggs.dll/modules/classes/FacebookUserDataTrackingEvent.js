Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_b45c75bfe6706b06 = require("gge-module:exact_b45c75bfe6706b06");
var __s0local0 = function (__s1param0) {
  function FacebookUserDataTrackingEvent(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_b45c75bfe6706b06.__extends(FacebookUserDataTrackingEvent, __s1param0);
  FacebookUserDataTrackingEvent.prototype.getVars = function () {
    var __s5local0 = {
      playerId: this._playerId,
      timestamp: this._timestamp,
      facebook_id: this._facebookId,
      is_account_verified: this._isAccountVerified,
      full_name: this._fullName
    };
    if (this._firstName) {
      __s5local0.first_name = this._firstName;
    }
    if (this._lastName) {
      __s5local0.last_name = this._lastName;
    }
    if (this._profileLink) {
      __s5local0.profile_link = this._profileLink;
    }
    if (this._gender) {
      __s5local0.gender_name = this._gender;
    }
    if (this._locale) {
      __s5local0.locale_code = this._locale;
    }
    if (this._ageRange) {
      __s5local0.facebook_age_range = this._ageRange;
    }
    if (!isNaN(this._utcOffset)) {
      __s5local0.utc_offset = this._utcOffset;
    }
    if (this._birthday) {
      __s5local0.birthday = this._birthday;
    }
    if (this._email) {
      __s5local0.email = this._email;
    }
    if (this._facebookBusinessToken) {
      __s5local0.facebook_business_token = this._facebookBusinessToken;
    }
    return __s5local0;
  };
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "playerId", {
    set: function (__s17param0) {
      this._playerId = __s17param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "timestamp", {
    set: function (__s19param0) {
      this._timestamp = __s19param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "facebookId", {
    set: function (__s21param0) {
      this._facebookId = __s21param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "isAccountVerified", {
    set: function (__s23param0) {
      this._isAccountVerified = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "fullName", {
    set: function (__s25param0) {
      this._fullName = __s25param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "firstName", {
    set: function (__s27param0) {
      this._firstName = __s27param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "lastName", {
    set: function (__s29param0) {
      this._lastName = __s29param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "profileLink", {
    set: function (__s31param0) {
      this._profileLink = __s31param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "gender", {
    set: function (__s33param0) {
      this._gender = __s33param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "locale", {
    set: function (__s35param0) {
      this._locale = __s35param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "ageRange", {
    set: function (__s37param0) {
      this._ageRange = __s37param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "utcOffset", {
    set: function (__s39param0) {
      this._utcOffset = __s39param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "birthday", {
    set: function (__s41param0) {
      this._birthday = __s41param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "email", {
    set: function (__s43param0) {
      this._email = __s43param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserDataTrackingEvent.prototype, "facebookBusinessToken", {
    set: function (__s45param0) {
      this._facebookBusinessToken = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookUserDataTrackingEvent;
}(require("gge-module:class_BasicTrackingEvent").BasicTrackingEvent);
exports.FacebookUserDataTrackingEvent = __s0local0;
