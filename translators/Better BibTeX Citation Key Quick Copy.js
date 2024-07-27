{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "9edbc5db464ee4790a713d2bd2da0afe4a25a973fad1da4f7ed3c00a35bf6706"
	},
	"lastUpdated": "2024-07-15"
}

ZOTERO_CONFIG = {"GUID":"zotero@zotero.org","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/","PLUGINS_URL":"https://www.zotero.org/support/plugins"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","label":"Better BibTeX Citation Key Quick Copy","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","creator":"Emiliano heyns","target":"txt","minVersion":"4.0.27","maxVersion":"","translatorType":2,"browserSupport":"gcsv","priority":100,"displayOptions":{"quickCopyMode":""},"inRepository":false}); // assign new data
      
var { citeCreators, doExport, yearFromDate } = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@stdlib/utils-define-property/lib/define_property.js
  var require_define_property = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/define_property.js"(exports, module) {
      var main = typeof Object.defineProperty === "function" ? Object.defineProperty : null;
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js
  var require_has_define_property_support = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/has_define_property_support.js"(exports, module) {
      var defineProperty = require_define_property();
      function hasDefinePropertySupport() {
        try {
          defineProperty({}, "x", {});
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = hasDefinePropertySupport;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/builtin.js
  var require_builtin = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/builtin.js"(exports, module) {
      var defineProperty = Object.defineProperty;
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/is_number.js
  var require_is_number = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/is_number.js"(exports, module) {
      function isNumber(value) {
        return typeof value === "number";
      }
      module.exports = isNumber;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/zero_pad.js
  var require_zero_pad = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/zero_pad.js"(exports, module) {
      function startsWithMinus(str) {
        return str[0] === "-";
      }
      function zeros(n) {
        var out = "";
        var i;
        for (i = 0; i < n; i++) {
          out += "0";
        }
        return out;
      }
      function zeroPad(str, width, right) {
        var negative = false;
        var pad = width - str.length;
        if (pad < 0) {
          return str;
        }
        if (startsWithMinus(str)) {
          negative = true;
          str = str.substr(1);
        }
        str = right ? str + zeros(pad) : zeros(pad) + str;
        if (negative) {
          str = "-" + str;
        }
        return str;
      }
      module.exports = zeroPad;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/format_integer.js
  var require_format_integer = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/format_integer.js"(exports, module) {
      var isNumber = require_is_number();
      var zeroPad = require_zero_pad();
      var lowercase = String.prototype.toLowerCase;
      var uppercase = String.prototype.toUpperCase;
      function formatInteger(token) {
        var base;
        var out;
        var i;
        switch (token.specifier) {
          case "b":
            base = 2;
            break;
          case "o":
            base = 8;
            break;
          case "x":
          case "X":
            base = 16;
            break;
          case "d":
          case "i":
          case "u":
          default:
            base = 10;
            break;
        }
        out = token.arg;
        i = parseInt(out, 10);
        if (!isFinite(i)) {
          if (!isNumber(out)) {
            throw new Error("invalid integer. Value: " + out);
          }
          i = 0;
        }
        if (i < 0 && (token.specifier === "u" || base !== 10)) {
          i = 4294967295 + i + 1;
        }
        if (i < 0) {
          out = (-i).toString(base);
          if (token.precision) {
            out = zeroPad(out, token.precision, token.padRight);
          }
          out = "-" + out;
        } else {
          out = i.toString(base);
          if (!i && !token.precision) {
            out = "";
          } else if (token.precision) {
            out = zeroPad(out, token.precision, token.padRight);
          }
          if (token.sign) {
            out = token.sign + out;
          }
        }
        if (base === 16) {
          if (token.alternate) {
            out = "0x" + out;
          }
          out = token.specifier === uppercase.call(token.specifier) ? uppercase.call(out) : lowercase.call(out);
        }
        if (base === 8) {
          if (token.alternate && out.charAt(0) !== "0") {
            out = "0" + out;
          }
        }
        return out;
      }
      module.exports = formatInteger;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/is_string.js
  var require_is_string = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/is_string.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/format_double.js
  var require_format_double = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/format_double.js"(exports, module) {
      var isNumber = require_is_number();
      var abs = Math.abs;
      var lowercase = String.prototype.toLowerCase;
      var uppercase = String.prototype.toUpperCase;
      var replace = String.prototype.replace;
      var RE_EXP_POS_DIGITS = /e\+(\d)$/;
      var RE_EXP_NEG_DIGITS = /e-(\d)$/;
      var RE_ONLY_DIGITS = /^(\d+)$/;
      var RE_DIGITS_BEFORE_EXP = /^(\d+)e/;
      var RE_TRAILING_PERIOD_ZERO = /\.0$/;
      var RE_PERIOD_ZERO_EXP = /\.0*e/;
      var RE_ZERO_BEFORE_EXP = /(\..*[^0])0*e/;
      function formatDouble(token) {
        var digits;
        var out;
        var f = parseFloat(token.arg);
        if (!isFinite(f)) {
          if (!isNumber(token.arg)) {
            throw new Error("invalid floating-point number. Value: " + out);
          }
          f = token.arg;
        }
        switch (token.specifier) {
          case "e":
          case "E":
            out = f.toExponential(token.precision);
            break;
          case "f":
          case "F":
            out = f.toFixed(token.precision);
            break;
          case "g":
          case "G":
            if (abs(f) < 1e-4) {
              digits = token.precision;
              if (digits > 0) {
                digits -= 1;
              }
              out = f.toExponential(digits);
            } else {
              out = f.toPrecision(token.precision);
            }
            if (!token.alternate) {
              out = replace.call(out, RE_ZERO_BEFORE_EXP, "$1e");
              out = replace.call(out, RE_PERIOD_ZERO_EXP, "e");
              out = replace.call(out, RE_TRAILING_PERIOD_ZERO, "");
            }
            break;
          default:
            throw new Error("invalid double notation. Value: " + token.specifier);
        }
        out = replace.call(out, RE_EXP_POS_DIGITS, "e+0$1");
        out = replace.call(out, RE_EXP_NEG_DIGITS, "e-0$1");
        if (token.alternate) {
          out = replace.call(out, RE_ONLY_DIGITS, "$1.");
          out = replace.call(out, RE_DIGITS_BEFORE_EXP, "$1.e");
        }
        if (f >= 0 && token.sign) {
          out = token.sign + out;
        }
        out = token.specifier === uppercase.call(token.specifier) ? uppercase.call(out) : lowercase.call(out);
        return out;
      }
      module.exports = formatDouble;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/space_pad.js
  var require_space_pad = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/space_pad.js"(exports, module) {
      function spaces(n) {
        var out = "";
        var i;
        for (i = 0; i < n; i++) {
          out += " ";
        }
        return out;
      }
      function spacePad(str, width, right) {
        var pad = width - str.length;
        if (pad < 0) {
          return str;
        }
        str = right ? str + spaces(pad) : spaces(pad) + str;
        return str;
      }
      module.exports = spacePad;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/main.js
  var require_main = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/main.js"(exports, module) {
      var formatInteger = require_format_integer();
      var isString = require_is_string();
      var formatDouble = require_format_double();
      var spacePad = require_space_pad();
      var zeroPad = require_zero_pad();
      var fromCharCode = String.fromCharCode;
      var isnan = isNaN;
      var isArray = Array.isArray;
      function initialize(token) {
        var out = {};
        out.specifier = token.specifier;
        out.precision = token.precision === void 0 ? 1 : token.precision;
        out.width = token.width;
        out.flags = token.flags || "";
        out.mapping = token.mapping;
        return out;
      }
      function formatInterpolate(tokens) {
        var hasPeriod;
        var flags;
        var token;
        var flag;
        var num;
        var out;
        var pos;
        var i;
        var j;
        if (!isArray(tokens)) {
          throw new TypeError("invalid argument. First argument must be an array. Value: `" + tokens + "`.");
        }
        out = "";
        pos = 1;
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          if (isString(token)) {
            out += token;
          } else {
            hasPeriod = token.precision !== void 0;
            token = initialize(token);
            if (!token.specifier) {
              throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + i + "`. Value: `" + token + "`.");
            }
            if (token.mapping) {
              pos = token.mapping;
            }
            flags = token.flags;
            for (j = 0; j < flags.length; j++) {
              flag = flags.charAt(j);
              switch (flag) {
                case " ":
                  token.sign = " ";
                  break;
                case "+":
                  token.sign = "+";
                  break;
                case "-":
                  token.padRight = true;
                  token.padZeros = false;
                  break;
                case "0":
                  token.padZeros = flags.indexOf("-") < 0;
                  break;
                case "#":
                  token.alternate = true;
                  break;
                default:
                  throw new Error("invalid flag: " + flag);
              }
            }
            if (token.width === "*") {
              token.width = parseInt(arguments[pos], 10);
              pos += 1;
              if (isnan(token.width)) {
                throw new TypeError("the argument for * width at position " + pos + " is not a number. Value: `" + token.width + "`.");
              }
              if (token.width < 0) {
                token.padRight = true;
                token.width = -token.width;
              }
            }
            if (hasPeriod) {
              if (token.precision === "*") {
                token.precision = parseInt(arguments[pos], 10);
                pos += 1;
                if (isnan(token.precision)) {
                  throw new TypeError("the argument for * precision at position " + pos + " is not a number. Value: `" + token.precision + "`.");
                }
                if (token.precision < 0) {
                  token.precision = 1;
                  hasPeriod = false;
                }
              }
            }
            token.arg = arguments[pos];
            switch (token.specifier) {
              case "b":
              case "o":
              case "x":
              case "X":
              case "d":
              case "i":
              case "u":
                if (hasPeriod) {
                  token.padZeros = false;
                }
                token.arg = formatInteger(token);
                break;
              case "s":
                token.maxWidth = hasPeriod ? token.precision : -1;
                break;
              case "c":
                if (!isnan(token.arg)) {
                  num = parseInt(token.arg, 10);
                  if (num < 0 || num > 127) {
                    throw new Error("invalid character code. Value: " + token.arg);
                  }
                  token.arg = isnan(num) ? String(token.arg) : fromCharCode(num);
                }
                break;
              case "e":
              case "E":
              case "f":
              case "F":
              case "g":
              case "G":
                if (!hasPeriod) {
                  token.precision = 6;
                }
                token.arg = formatDouble(token);
                break;
              default:
                throw new Error("invalid specifier: " + token.specifier);
            }
            if (token.maxWidth >= 0 && token.arg.length > token.maxWidth) {
              token.arg = token.arg.substring(0, token.maxWidth);
            }
            if (token.padZeros) {
              token.arg = zeroPad(token.arg, token.width || token.precision, token.padRight);
            } else if (token.width) {
              token.arg = spacePad(token.arg, token.width, token.padRight);
            }
            out += token.arg || "";
            pos += 1;
          }
        }
        return out;
      }
      module.exports = formatInterpolate;
    }
  });

  // node_modules/@stdlib/string-base-format-interpolate/lib/index.js
  var require_lib = __commonJS({
    "node_modules/@stdlib/string-base-format-interpolate/lib/index.js"(exports, module) {
      var main = require_main();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/string-base-format-tokenize/lib/main.js
  var require_main2 = __commonJS({
    "node_modules/@stdlib/string-base-format-tokenize/lib/main.js"(exports, module) {
      var RE = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
      function parse2(match) {
        var token = {
          "mapping": match[1] ? parseInt(match[1], 10) : void 0,
          "flags": match[2],
          "width": match[3],
          "precision": match[5],
          "specifier": match[6]
        };
        if (match[4] === "." && match[5] === void 0) {
          token.precision = "1";
        }
        return token;
      }
      function formatTokenize(str) {
        var content;
        var tokens;
        var match;
        var prev;
        tokens = [];
        prev = 0;
        match = RE.exec(str);
        while (match) {
          content = str.slice(prev, RE.lastIndex - match[0].length);
          if (content.length) {
            tokens.push(content);
          }
          tokens.push(parse2(match));
          prev = RE.lastIndex;
          match = RE.exec(str);
        }
        content = str.slice(prev);
        if (content.length) {
          tokens.push(content);
        }
        return tokens;
      }
      module.exports = formatTokenize;
    }
  });

  // node_modules/@stdlib/string-base-format-tokenize/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/@stdlib/string-base-format-tokenize/lib/index.js"(exports, module) {
      var main = require_main2();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/string-format/lib/is_string.js
  var require_is_string2 = __commonJS({
    "node_modules/@stdlib/string-format/lib/is_string.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/string-format/lib/main.js
  var require_main3 = __commonJS({
    "node_modules/@stdlib/string-format/lib/main.js"(exports, module) {
      var interpolate = require_lib();
      var tokenize = require_lib2();
      var isString = require_is_string2();
      function format(str) {
        var args;
        var i;
        if (!isString(str)) {
          throw new TypeError(format("invalid argument. First argument must be a string. Value: `%s`.", str));
        }
        args = [tokenize(str)];
        for (i = 1; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return interpolate.apply(null, args);
      }
      module.exports = format;
    }
  });

  // node_modules/@stdlib/string-format/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/@stdlib/string-format/lib/index.js"(exports, module) {
      var main = require_main3();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/polyfill.js
  var require_polyfill = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/polyfill.js"(exports, module) {
      var format = require_lib3();
      var objectProtoype = Object.prototype;
      var toStr = objectProtoype.toString;
      var defineGetter = objectProtoype.__defineGetter__;
      var defineSetter = objectProtoype.__defineSetter__;
      var lookupGetter = objectProtoype.__lookupGetter__;
      var lookupSetter = objectProtoype.__lookupSetter__;
      function defineProperty(obj, prop, descriptor) {
        var prototype;
        var hasValue;
        var hasGet;
        var hasSet;
        if (typeof obj !== "object" || obj === null || toStr.call(obj) === "[object Array]") {
          throw new TypeError(format("invalid argument. First argument must be an object. Value: `%s`.", obj));
        }
        if (typeof descriptor !== "object" || descriptor === null || toStr.call(descriptor) === "[object Array]") {
          throw new TypeError(format("invalid argument. Property descriptor must be an object. Value: `%s`.", descriptor));
        }
        hasValue = "value" in descriptor;
        if (hasValue) {
          if (lookupGetter.call(obj, prop) || lookupSetter.call(obj, prop)) {
            prototype = obj.__proto__;
            obj.__proto__ = objectProtoype;
            delete obj[prop];
            obj[prop] = descriptor.value;
            obj.__proto__ = prototype;
          } else {
            obj[prop] = descriptor.value;
          }
        }
        hasGet = "get" in descriptor;
        hasSet = "set" in descriptor;
        if (hasValue && (hasGet || hasSet)) {
          throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
        }
        if (hasGet && defineGetter) {
          defineGetter.call(obj, prop, descriptor.get);
        }
        if (hasSet && defineSetter) {
          defineSetter.call(obj, prop, descriptor.set);
        }
        return obj;
      }
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/utils-define-property/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/@stdlib/utils-define-property/lib/index.js"(exports, module) {
      var hasDefinePropertySupport = require_has_define_property_support();
      var builtin = require_builtin();
      var polyfill = require_polyfill();
      var defineProperty;
      if (hasDefinePropertySupport()) {
        defineProperty = builtin;
      } else {
        defineProperty = polyfill;
      }
      module.exports = defineProperty;
    }
  });

  // node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js
  var require_main4 = __commonJS({
    "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js"(exports, module) {
      var defineProperty = require_lib4();
      function setNonEnumerableReadOnly(obj, prop, value) {
        defineProperty(obj, prop, {
          "configurable": false,
          "enumerable": false,
          "writable": false,
          "value": value
        });
      }
      module.exports = setNonEnumerableReadOnly;
    }
  });

  // node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js"(exports, module) {
      var main = require_main4();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/primitive.js
  var require_primitive = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/primitive.js"(exports, module) {
      function isString(value) {
        return typeof value === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-has-symbol-support/lib/main.js
  var require_main5 = __commonJS({
    "node_modules/@stdlib/assert-has-symbol-support/lib/main.js"(exports, module) {
      function hasSymbolSupport() {
        return typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
      }
      module.exports = hasSymbolSupport;
    }
  });

  // node_modules/@stdlib/assert-has-symbol-support/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/@stdlib/assert-has-symbol-support/lib/index.js"(exports, module) {
      var main = require_main5();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js
  var require_main6 = __commonJS({
    "node_modules/@stdlib/assert-has-tostringtag-support/lib/main.js"(exports, module) {
      var hasSymbols = require_lib6();
      var FLG = hasSymbols();
      function hasToStringTagSupport() {
        return FLG && typeof Symbol.toStringTag === "symbol";
      }
      module.exports = hasToStringTagSupport;
    }
  });

  // node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/@stdlib/assert-has-tostringtag-support/lib/index.js"(exports, module) {
      var main = require_main6();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/tostring.js
  var require_tostring = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/tostring.js"(exports, module) {
      var toStr = Object.prototype.toString;
      module.exports = toStr;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/main.js
  var require_main7 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/main.js"(exports, module) {
      var toStr = require_tostring();
      function nativeClass(v) {
        return toStr.call(v);
      }
      module.exports = nativeClass;
    }
  });

  // node_modules/@stdlib/assert-has-own-property/lib/main.js
  var require_main8 = __commonJS({
    "node_modules/@stdlib/assert-has-own-property/lib/main.js"(exports, module) {
      var has = Object.prototype.hasOwnProperty;
      function hasOwnProp(value, property) {
        if (value === void 0 || value === null) {
          return false;
        }
        return has.call(value, property);
      }
      module.exports = hasOwnProp;
    }
  });

  // node_modules/@stdlib/assert-has-own-property/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/@stdlib/assert-has-own-property/lib/index.js"(exports, module) {
      var main = require_main8();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/symbol-ctor/lib/main.js
  var require_main9 = __commonJS({
    "node_modules/@stdlib/symbol-ctor/lib/main.js"(exports, module) {
      var Sym = typeof Symbol === "function" ? Symbol : void 0;
      module.exports = Sym;
    }
  });

  // node_modules/@stdlib/symbol-ctor/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/@stdlib/symbol-ctor/lib/index.js"(exports, module) {
      var main = require_main9();
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/tostringtag.js
  var require_tostringtag = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/tostringtag.js"(exports, module) {
      var Symbol2 = require_lib9();
      var toStrTag = typeof Symbol2 === "function" ? Symbol2.toStringTag : "";
      module.exports = toStrTag;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/polyfill.js
  var require_polyfill2 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/polyfill.js"(exports, module) {
      var hasOwnProp = require_lib8();
      var toStringTag = require_tostringtag();
      var toStr = require_tostring();
      function nativeClass(v) {
        var isOwn;
        var tag;
        var out;
        if (v === null || v === void 0) {
          return toStr.call(v);
        }
        tag = v[toStringTag];
        isOwn = hasOwnProp(v, toStringTag);
        try {
          v[toStringTag] = void 0;
        } catch (err) {
          return toStr.call(v);
        }
        out = toStr.call(v);
        if (isOwn) {
          v[toStringTag] = tag;
        } else {
          delete v[toStringTag];
        }
        return out;
      }
      module.exports = nativeClass;
    }
  });

  // node_modules/@stdlib/utils-native-class/lib/index.js
  var require_lib10 = __commonJS({
    "node_modules/@stdlib/utils-native-class/lib/index.js"(exports, module) {
      var hasToStringTag = require_lib7();
      var builtin = require_main7();
      var polyfill = require_polyfill2();
      var main;
      if (hasToStringTag()) {
        main = polyfill;
      } else {
        main = builtin;
      }
      module.exports = main;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/valueof.js
  var require_valueof = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/valueof.js"(exports, module) {
      var valueOf = String.prototype.valueOf;
      module.exports = valueOf;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/try2valueof.js
  var require_try2valueof = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/try2valueof.js"(exports, module) {
      var valueOf = require_valueof();
      function test(value) {
        try {
          valueOf.call(value);
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = test;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/object.js
  var require_object = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/object.js"(exports, module) {
      var hasToStringTag = require_lib7();
      var nativeClass = require_lib10();
      var test = require_try2valueof();
      var FLG = hasToStringTag();
      function isString(value) {
        if (typeof value === "object") {
          if (value instanceof String) {
            return true;
          }
          if (FLG) {
            return test(value);
          }
          return nativeClass(value) === "[object String]";
        }
        return false;
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/main.js
  var require_main10 = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/main.js"(exports, module) {
      var isPrimitive = require_primitive();
      var isObject = require_object();
      function isString(value) {
        return isPrimitive(value) || isObject(value);
      }
      module.exports = isString;
    }
  });

  // node_modules/@stdlib/assert-is-string/lib/index.js
  var require_lib11 = __commonJS({
    "node_modules/@stdlib/assert-is-string/lib/index.js"(exports, module) {
      var setReadOnly = require_lib5();
      var main = require_main10();
      var isPrimitive = require_primitive();
      var isObject = require_object();
      setReadOnly(main, "isPrimitive", isPrimitive);
      setReadOnly(main, "isObject", isObject);
      module.exports = main;
    }
  });

  // node_modules/@stdlib/utils-escape-regexp-string/lib/main.js
  var require_main11 = __commonJS({
    "node_modules/@stdlib/utils-escape-regexp-string/lib/main.js"(exports, module) {
      var isString = require_lib11().isPrimitive;
      var format = require_lib3();
      var RE_CHARS = /[-\/\\^$*+?.()|[\]{}]/g;
      function rescape2(str) {
        var len;
        var s;
        var i;
        if (!isString(str)) {
          throw new TypeError(format("invalid argument. Must provide a regular expression string. Value: `%s`.", str));
        }
        if (str[0] === "/") {
          len = str.length;
          for (i = len - 1; i >= 0; i--) {
            if (str[i] === "/") {
              break;
            }
          }
        }
        if (i === void 0 || i <= 0) {
          return str.replace(RE_CHARS, "\\$&");
        }
        s = str.substring(1, i);
        s = s.replace(RE_CHARS, "\\$&");
        str = str[0] + s + str.substring(i);
        return str;
      }
      module.exports = rescape2;
    }
  });

  // node_modules/@stdlib/utils-escape-regexp-string/lib/index.js
  var require_lib12 = __commonJS({
    "node_modules/@stdlib/utils-escape-regexp-string/lib/index.js"(exports, module) {
      var main = require_main11();
      module.exports = main;
    }
  });

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Better_BibTeX_Citation_Key_Quick_Copy_exports = {};
  __export(Better_BibTeX_Citation_Key_Quick_Copy_exports, {
    citeCreators: () => citeCreators,
    doExport: () => doExport,
    yearFromDate: () => yearFromDate
  });

  // content/client.ts
  var worker = typeof location !== "undefined" && location.search;
  var is7 = worker ? new URLSearchParams(location.search).get("is7") === "true" : Zotero.platformMajorVersion >= 102;
  function clientname() {
    var _a;
    if (typeof location !== "undefined" && location.search) return new URLSearchParams(location.search).get("clientName");
    if (Zotero.clientName) return Zotero.clientName;
    if ((_a = Zotero.BetterBibTeX) == null ? void 0 : _a.clientName) return Zotero.BetterBibTeX.clientName;
    throw new Error("Unable to detect clientName");
  }
  var platform = {
    name: "",
    windows: false,
    mac: false,
    linux: false
  };
  if (worker) {
    platform.name = new URLSearchParams(location.search).get("platform");
    platform.windows = platform.name === "win";
    platform.mac = platform.name === "mac";
    platform.linux = platform.name === "lin";
  } else {
    platform.name = Zotero.isWin ? "win" : Zotero.isMac ? "mac" : Zotero.isLinux ? "lin" : "unk";
    platform.windows = Zotero.isWin;
    platform.mac = Zotero.isMac;
    platform.linux = Zotero.isLinux;
  }
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // gen/items/simplify.ts
  var zotero = client === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted) item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType) item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber) item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage) item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle) item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio) item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct) item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType) item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume) item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.legislativeBody || item.court || item.issuingAuthority || item.organization) item.authority = v;
      if (scrub) {
        delete item.legislativeBody;
        delete item.court;
        delete item.issuingAuthority;
        delete item.organization;
      }
      if (item.format) item.medium = item.format;
      if (scrub) {
        delete item.format;
      }
      if (v = item.identifier || item.documentNumber || item.archiveID) item.number = v;
      if (scrub) {
        delete item.identifier;
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (item.repositoryLocation) item.place = item.repositoryLocation;
      if (scrub) {
        delete item.repositoryLocation;
      }
      if (v = item.repository || item.institution) item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
      if (item.legalStatus) item.status = item.legalStatus;
      if (scrub) {
        delete item.legalStatus;
      }
    }
    if (jurism) {
      if (item.release) item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation) item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody) item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber) item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter) item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber) item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType) item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { creators = true, dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate) item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (creators && item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }

  // content/escape.ts
  var import_utils_escape_regexp_string = __toESM(require_lib12());
  var entity = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function html(str) {
    return str.replace(/[<>&"']/g, (c) => entity[c] || `&#${c.charCodeAt(0)};`);
  }

  // setup/shims/path.js
  function join(path2, ...args) {
    if (!args.length) return path2;
    var platformSlash = Services.appinfo.OS == "WINNT" ? "\\" : "/";
    return [path2, ...args].join(platformSlash);
  }
  function dirname(filename) {
    return typeof OS !== "undefined" ? OS.Path.dirname(filename) : PathUtils.parent(path);
  }
  function extname(filename) {
    return filename.includes(".") ? "." + filename.split(".").pop() : "";
  }

  // setup/shims/fs.js
  function readFileSync(filename) {
    if (filename.match(/^(resource|chrome):/)) return Zotero.File.getContentsFromURL(filename);
    throw new Exception(`could not read ${JSON.stringify(filename)}`);
  }

  // node_modules/eta/dist/eta.module.mjs
  var Cacher = class {
    constructor(cache) {
      this.cache = void 0;
      this.cache = cache;
    }
    define(key, val) {
      this.cache[key] = val;
    }
    get(key) {
      return this.cache[key];
    }
    remove(key) {
      delete this.cache[key];
    }
    reset() {
      this.cache = {};
    }
    load(cacheObj) {
      this.cache = {
        ...this.cache,
        ...cacheObj
      };
    }
  };
  var EtaError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "Eta Error";
    }
  };
  var EtaParseError = class extends EtaError {
    constructor(message) {
      super(message);
      this.name = "EtaParser Error";
    }
  };
  var EtaRuntimeError = class extends EtaError {
    constructor(message) {
      super(message);
      this.name = "EtaRuntime Error";
    }
  };
  var EtaFileResolutionError = class extends EtaError {
    constructor(message) {
      super(message);
      this.name = "EtaFileResolution Error";
    }
  };
  var EtaNameResolutionError = class extends EtaError {
    constructor(message) {
      super(message);
      this.name = "EtaNameResolution Error";
    }
  };
  function ParseErr(message, str, indx) {
    const whitespace = str.slice(0, indx).split(/\n/);
    const lineNo = whitespace.length;
    const colNo = whitespace[lineNo - 1].length + 1;
    message += " at line " + lineNo + " col " + colNo + ":\n\n  " + str.split(/\n/)[lineNo - 1] + "\n  " + Array(colNo).join(" ") + "^";
    throw new EtaParseError(message);
  }
  function RuntimeErr(originalError, str, lineNo, path2) {
    const lines = str.split("\n");
    const start = Math.max(lineNo - 3, 0);
    const end = Math.min(lines.length, lineNo + 3);
    const filename = path2;
    const context = lines.slice(start, end).map(function(line, i) {
      const curr = i + start + 1;
      return (curr == lineNo ? " >> " : "    ") + curr + "| " + line;
    }).join("\n");
    const header = filename ? filename + ":" + lineNo + "\n" : "line " + lineNo + "\n";
    const err = new EtaRuntimeError(header + context + "\n\n" + originalError.message);
    err.name = originalError.name;
    throw err;
  }
  var AsyncFunction = async function() {
  }.constructor;
  function compile(str, options) {
    const config = this.config;
    const ctor = options && options.async ? AsyncFunction : Function;
    try {
      return new ctor(config.varName, "options", this.compileToString.call(this, str, options));
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw new EtaParseError(
          "Bad template syntax\n\n" + e.message + "\n" + Array(e.message.length + 1).join("=") + "\n" + this.compileToString.call(this, str, options) + "\n"
          // This will put an extra newline before the callstack for extra readability
        );
      } else {
        throw e;
      }
    }
  }
  function compileToString(str, options) {
    const config = this.config;
    const isAsync = options && options.async;
    const compileBody2 = this.compileBody;
    const buffer = this.parse.call(this, str);
    let res = `${config.functionHeader}
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction${config.debug ? ', line: 1, templateStr: "' + str.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : ""}};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}${config.debug ? "try {" : ""}${config.useWith ? "with(" + config.varName + "||{}){" : ""}

${compileBody2.call(this, buffer)}
if (__eta.layout) {
  __eta.res = ${isAsync ? "await includeAsync" : "include"} (__eta.layout, {...${config.varName}, body: __eta.res, ...__eta.layoutData});
}
${config.useWith ? "}" : ""}${config.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : ""}
return __eta.res;
`;
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processFnString) {
          res = plugin.processFnString(res, config);
        }
      }
    }
    return res;
  }
  function compileBody(buff) {
    const config = this.config;
    let i = 0;
    const buffLength = buff.length;
    let returnStr = "";
    for (i; i < buffLength; i++) {
      const currentBlock = buff[i];
      if (typeof currentBlock === "string") {
        const str = currentBlock;
        returnStr += "__eta.res+='" + str + "'\n";
      } else {
        const type = currentBlock.t;
        let content = currentBlock.val || "";
        if (config.debug) returnStr += "__eta.line=" + currentBlock.lineNo + "\n";
        if (type === "r") {
          if (config.autoFilter) {
            content = "__eta.f(" + content + ")";
          }
          returnStr += "__eta.res+=" + content + "\n";
        } else if (type === "i") {
          if (config.autoFilter) {
            content = "__eta.f(" + content + ")";
          }
          if (config.autoEscape) {
            content = "__eta.e(" + content + ")";
          }
          returnStr += "__eta.res+=" + content + "\n";
        } else if (type === "e") {
          returnStr += content + "\n";
        }
      }
    }
    return returnStr;
  }
  function trimWS(str, config, wsLeft, wsRight) {
    let leftTrim;
    let rightTrim;
    if (Array.isArray(config.autoTrim)) {
      leftTrim = config.autoTrim[1];
      rightTrim = config.autoTrim[0];
    } else {
      leftTrim = rightTrim = config.autoTrim;
    }
    if (wsLeft || wsLeft === false) {
      leftTrim = wsLeft;
    }
    if (wsRight || wsRight === false) {
      rightTrim = wsRight;
    }
    if (!rightTrim && !leftTrim) {
      return str;
    }
    if (leftTrim === "slurp" && rightTrim === "slurp") {
      return str.trim();
    }
    if (leftTrim === "_" || leftTrim === "slurp") {
      str = str.trimStart();
    } else if (leftTrim === "-" || leftTrim === "nl") {
      str = str.replace(/^(?:\r\n|\n|\r)/, "");
    }
    if (rightTrim === "_" || rightTrim === "slurp") {
      str = str.trimEnd();
    } else if (rightTrim === "-" || rightTrim === "nl") {
      str = str.replace(/(?:\r\n|\n|\r)$/, "");
    }
    return str;
  }
  var escMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  function replaceChar(s) {
    return escMap[s];
  }
  function XMLEscape(str) {
    const newStr = String(str);
    if (/[&<>"']/.test(newStr)) {
      return newStr.replace(/[&<>"']/g, replaceChar);
    } else {
      return newStr;
    }
  }
  var defaultConfig = {
    autoEscape: true,
    autoFilter: false,
    autoTrim: [false, "nl"],
    cache: false,
    cacheFilepaths: true,
    debug: false,
    escapeFunction: XMLEscape,
    // default filter function (not used unless enables) just stringifies the input
    filterFunction: (val) => String(val),
    functionHeader: "",
    parse: {
      exec: "",
      interpolate: "=",
      raw: "~"
    },
    plugins: [],
    rmWhitespace: false,
    tags: ["<%", "%>"],
    useWith: false,
    varName: "it",
    defaultExtension: ".eta"
  };
  var templateLitReg = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g;
  var singleQuoteReg = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g;
  var doubleQuoteReg = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  }
  function getLineNo(str, index) {
    return str.slice(0, index).split("\n").length;
  }
  function parse(str) {
    const config = this.config;
    let buffer = [];
    let trimLeftOfNextStr = false;
    let lastIndex = 0;
    const parseOptions = config.parse;
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processTemplate) {
          str = plugin.processTemplate(str, config);
        }
      }
    }
    if (config.rmWhitespace) {
      str = str.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
    }
    templateLitReg.lastIndex = 0;
    singleQuoteReg.lastIndex = 0;
    doubleQuoteReg.lastIndex = 0;
    function pushString(strng, shouldTrimRightOfString) {
      if (strng) {
        strng = trimWS(
          strng,
          config,
          trimLeftOfNextStr,
          // this will only be false on the first str, the next ones will be null or undefined
          shouldTrimRightOfString
        );
        if (strng) {
          strng = strng.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n");
          buffer.push(strng);
        }
      }
    }
    const prefixes = [parseOptions.exec, parseOptions.interpolate, parseOptions.raw].reduce(function(accumulator, prefix) {
      if (accumulator && prefix) {
        return accumulator + "|" + escapeRegExp(prefix);
      } else if (prefix) {
        return escapeRegExp(prefix);
      } else {
        return accumulator;
      }
    }, "");
    const parseOpenReg = new RegExp(escapeRegExp(config.tags[0]) + "(-|_)?\\s*(" + prefixes + ")?\\s*", "g");
    const parseCloseReg = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + escapeRegExp(config.tags[1]) + ")", "g");
    let m;
    while (m = parseOpenReg.exec(str)) {
      const precedingString = str.slice(lastIndex, m.index);
      lastIndex = m[0].length + m.index;
      const wsLeft = m[1];
      const prefix = m[2] || "";
      pushString(precedingString, wsLeft);
      parseCloseReg.lastIndex = lastIndex;
      let closeTag;
      let currentObj = false;
      while (closeTag = parseCloseReg.exec(str)) {
        if (closeTag[1]) {
          const content = str.slice(lastIndex, closeTag.index);
          parseOpenReg.lastIndex = lastIndex = parseCloseReg.lastIndex;
          trimLeftOfNextStr = closeTag[2];
          const currentType = prefix === parseOptions.exec ? "e" : prefix === parseOptions.raw ? "r" : prefix === parseOptions.interpolate ? "i" : "";
          currentObj = {
            t: currentType,
            val: content
          };
          break;
        } else {
          const char = closeTag[0];
          if (char === "/*") {
            const commentCloseInd = str.indexOf("*/", parseCloseReg.lastIndex);
            if (commentCloseInd === -1) {
              ParseErr("unclosed comment", str, closeTag.index);
            }
            parseCloseReg.lastIndex = commentCloseInd;
          } else if (char === "'") {
            singleQuoteReg.lastIndex = closeTag.index;
            const singleQuoteMatch = singleQuoteReg.exec(str);
            if (singleQuoteMatch) {
              parseCloseReg.lastIndex = singleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === '"') {
            doubleQuoteReg.lastIndex = closeTag.index;
            const doubleQuoteMatch = doubleQuoteReg.exec(str);
            if (doubleQuoteMatch) {
              parseCloseReg.lastIndex = doubleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === "`") {
            templateLitReg.lastIndex = closeTag.index;
            const templateLitMatch = templateLitReg.exec(str);
            if (templateLitMatch) {
              parseCloseReg.lastIndex = templateLitReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          }
        }
      }
      if (currentObj) {
        if (config.debug) {
          currentObj.lineNo = getLineNo(str, m.index);
        }
        buffer.push(currentObj);
      } else {
        ParseErr("unclosed tag", str, m.index);
      }
    }
    pushString(str.slice(lastIndex, str.length), false);
    if (config.plugins) {
      for (let i = 0; i < config.plugins.length; i++) {
        const plugin = config.plugins[i];
        if (plugin.processAST) {
          buffer = plugin.processAST(buffer, config);
        }
      }
    }
    return buffer;
  }
  function handleCache(template, options) {
    const templateStore = options && options.async ? this.templatesAsync : this.templatesSync;
    if (this.resolvePath && this.readFile && !template.startsWith("@")) {
      const templatePath = options.filepath;
      const cachedTemplate = templateStore.get(templatePath);
      if (this.config.cache && cachedTemplate) {
        return cachedTemplate;
      } else {
        const templateString = this.readFile(templatePath);
        const templateFn = this.compile(templateString, options);
        if (this.config.cache) templateStore.define(templatePath, templateFn);
        return templateFn;
      }
    } else {
      const cachedTemplate = templateStore.get(template);
      if (cachedTemplate) {
        return cachedTemplate;
      } else {
        throw new EtaNameResolutionError("Failed to get template '" + template + "'");
      }
    }
  }
  function render(template, data, meta) {
    let templateFn;
    const options = {
      ...meta,
      async: false
    };
    if (typeof template === "string") {
      if (this.resolvePath && this.readFile && !template.startsWith("@")) {
        options.filepath = this.resolvePath(template, options);
      }
      templateFn = handleCache.call(this, template, options);
    } else {
      templateFn = template;
    }
    const res = templateFn.call(this, data, options);
    return res;
  }
  function renderAsync(template, data, meta) {
    let templateFn;
    const options = {
      ...meta,
      async: true
    };
    if (typeof template === "string") {
      if (this.resolvePath && this.readFile && !template.startsWith("@")) {
        options.filepath = this.resolvePath(template, options);
      }
      templateFn = handleCache.call(this, template, options);
    } else {
      templateFn = template;
    }
    const res = templateFn.call(this, data, options);
    return Promise.resolve(res);
  }
  function renderString(template, data) {
    const templateFn = this.compile(template, {
      async: false
    });
    return render.call(this, templateFn, data);
  }
  function renderStringAsync(template, data) {
    const templateFn = this.compile(template, {
      async: true
    });
    return renderAsync.call(this, templateFn, data);
  }
  var Eta$1 = class {
    constructor(customConfig) {
      this.config = void 0;
      this.RuntimeErr = RuntimeErr;
      this.compile = compile;
      this.compileToString = compileToString;
      this.compileBody = compileBody;
      this.parse = parse;
      this.render = render;
      this.renderAsync = renderAsync;
      this.renderString = renderString;
      this.renderStringAsync = renderStringAsync;
      this.filepathCache = {};
      this.templatesSync = new Cacher({});
      this.templatesAsync = new Cacher({});
      this.resolvePath = null;
      this.readFile = null;
      if (customConfig) {
        this.config = {
          ...defaultConfig,
          ...customConfig
        };
      } else {
        this.config = {
          ...defaultConfig
        };
      }
    }
    // METHODS
    configure(customConfig) {
      this.config = {
        ...this.config,
        ...customConfig
      };
    }
    withConfig(customConfig) {
      return {
        ...this,
        config: {
          ...this.config,
          ...customConfig
        }
      };
    }
    loadTemplate(name, template, options) {
      if (typeof template === "string") {
        const templates = options && options.async ? this.templatesAsync : this.templatesSync;
        templates.define(name, this.compile(template, options));
      } else {
        let templates = this.templatesSync;
        if (template.constructor.name === "AsyncFunction" || options && options.async) {
          templates = this.templatesAsync;
        }
        templates.define(name, template);
      }
    }
  };
  function readFile(path2) {
    let res = "";
    try {
      res = readFileSync(path2, "utf8");
    } catch (err) {
      if ((err == null ? void 0 : err.code) === "ENOENT") {
        throw new EtaFileResolutionError(`Could not find template: ${path2}`);
      } else {
        throw err;
      }
    }
    return res;
  }
  function resolvePath(templatePath, options) {
    let resolvedFilePath = "";
    const views = this.config.views;
    if (!views) {
      throw new EtaFileResolutionError("Views directory is not defined");
    }
    const baseFilePath = options && options.filepath;
    const defaultExtension = this.config.defaultExtension === void 0 ? ".eta" : this.config.defaultExtension;
    const cacheIndex = JSON.stringify({
      filename: baseFilePath,
      path: templatePath,
      views: this.config.views
    });
    templatePath += extname(templatePath) ? "" : defaultExtension;
    if (baseFilePath) {
      if (this.config.cacheFilepaths && this.filepathCache[cacheIndex]) {
        return this.filepathCache[cacheIndex];
      }
      const absolutePathTest = absolutePathRegExp.exec(templatePath);
      if (absolutePathTest && absolutePathTest.length) {
        const formattedPath = templatePath.replace(/^\/*|^\\*/, "");
        resolvedFilePath = join(views, formattedPath);
      } else {
        resolvedFilePath = join(dirname(baseFilePath), templatePath);
      }
    } else {
      resolvedFilePath = join(views, templatePath);
    }
    if (dirIsChild(views, resolvedFilePath)) {
      if (baseFilePath && this.config.cacheFilepaths) {
        this.filepathCache[cacheIndex] = resolvedFilePath;
      }
      return resolvedFilePath;
    } else {
      throw new EtaFileResolutionError(`Template '${templatePath}' is not in the views directory`);
    }
  }
  function dirIsChild(parent, dir) {
    const relative2 = (void 0)(parent, dir);
    return relative2 && !relative2.startsWith("..") && !(void 0)(relative2);
  }
  var absolutePathRegExp = /^\\|^\//;
  var Eta = class extends Eta$1 {
    constructor(...args) {
      super(...args);
      this.readFile = readFile;
      this.resolvePath = resolvePath;
    }
  };

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var eta = new Eta({ autoEscape: true });
  function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
    return kind === "users" ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
  }
  function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
  }
  function citeCreators(creators) {
    creators = creators || [];
    const creator = creators[0] || {};
    let name = creator.name || creator.lastName || "no author";
    if (creators.length > 1) name += " et al.";
    return name;
  }
  function yearFromDate(d) {
    if (!d) return "no date";
    let date = Zotero.BetterBibTeX.parseDate(d);
    if (date.type === "interval") date = date.from;
    if (date.type === "verbatim" || !date.year) return d;
    return `${date.year}`;
  }
  var Mode = {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    gitbook(items) {
      const citations = items.map((item) => `{{ "${item.citationKey}" | cite }}`);
      Zotero.write(citations.join(""));
    },
    latex(items) {
      const keys = items.map((item) => item.citationKey);
      const cmd = `${Zotero.getHiddenPref("better-bibtex.citeCommand")}`.trim();
      if (cmd === "") {
        Zotero.write(keys.join(","));
      } else {
        Zotero.write(`\\${cmd}{${keys.join(", ")}}`);
      }
    },
    citekeys(items) {
      const keys = items.map((item) => item.citationKey);
      Zotero.write(keys.join(", "));
    },
    pandoc(items) {
      let keys = items.map((item) => `@${item.citationKey}`);
      keys = keys.join("; ");
      if (Zotero.getHiddenPref("better-bibtex.quickCopyPandocBrackets")) keys = `[${keys}]`;
      Zotero.write(keys);
    },
    roamCiteKey(items) {
      let keys = items.map((item) => `[[@${item.citationKey}]]`);
      keys = keys.join(" ");
      Zotero.write(keys);
    },
    orgRef(items) {
      if (!items.length) return "";
      Zotero.write(`cite:${items.map((item) => item.citationKey).join(", ")}`);
    },
    orgRef3(items) {
      if (!items.length) return "";
      Zotero.write(`cite:&${items.map((item) => item.citationKey).join(";&")}`);
    },
    orgmode(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopyOrgMode")) {
        case "zotero":
          for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
          }
          break;
        case "citationkey":
          for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
          }
          break;
      }
    },
    selectlink(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopySelectLink")) {
        case "zotero":
          Zotero.write(items.map(select_by_key).join("\n"));
          break;
        case "citationkey":
          Zotero.write(items.map(select_by_citekey).join("\n"));
          break;
      }
    },
    rtfScan(items) {
      const reference = items.map((item) => {
        const ref = [];
        ref.push(citeCreators(item.creators));
        if (item.title) ref.push(JSON.stringify(item.title));
        ref.push(yearFromDate(item.date));
        return ref.join(", ");
      });
      Zotero.write(`{${reference.join("; ")}}`);
    },
    jupyter(items) {
      Zotero.write(items.map((item) => `<cite data-cite="${html(item.citationKey)}">(${html(citeCreators(item.creators))}, ${html(yearFromDate(item.date))})</cite>`).join(""));
    },
    eta(items) {
      try {
        Zotero.write(eta.renderString(Zotero.getHiddenPref("better-bibtex.quickCopyEta"), { items: items.map(simplifyForExport) }));
      } catch (err) {
        Zotero.write(`${err}`);
      }
    },
    jekyll(items) {
      Zotero.write(items.map((item) => `{% cite ${item.citationKey} %}`).join(""));
    }
  };
  function doExport() {
    const items = [];
    let item;
    while (item = Zotero.nextItem()) {
      if (item.citationKey) items.push(item);
    }
    items.sort((a, b) => {
      const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
      const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
      return ka.localeCompare(kb, void 0, { sensitivity: "base" });
    });
    const mode = Mode[Zotero.getOption("quickCopyMode")] || Mode[Zotero.getHiddenPref("better-bibtex.quickCopyMode")];
    if (mode) {
      mode.call(null, items);
    } else {
      throw new Error(`Unsupported Quick Copy format '${Zotero.getOption("quickCopyMode") || Zotero.getHiddenPref("better-bibtex.quickCopyMode")}', I only know about: ${Object.keys(Mode).join(", ")}`);
    }
  }
  return __toCommonJS(Better_BibTeX_Citation_Key_Quick_Copy_exports);
})();
/*! Bundled license information:

@stdlib/utils-define-property/lib/define_property.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/has_define_property_support.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2021 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/builtin.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/is_number.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/zero_pad.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/format_integer.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/is_string.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/format_double.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/space_pad.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-interpolate/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-tokenize/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-base-format-tokenize/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-format/lib/is_string.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-format/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/string-format/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2022 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-nonenumerable-read-only-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-define-nonenumerable-read-only-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/primitive.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-symbol-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-symbol-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-tostringtag-support/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-tostringtag-support/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/tostring.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-own-property/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-has-own-property/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol-ctor/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/symbol-ctor/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/tostringtag.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/polyfill.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-native-class/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/valueof.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/try2valueof.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/object.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/assert-is-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-escape-regexp-string/lib/main.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@stdlib/utils-escape-regexp-string/lib/index.js:
  (**
  * @license Apache-2.0
  *
  * Copyright (c) 2018 The Stdlib Authors.
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *    http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
*/
