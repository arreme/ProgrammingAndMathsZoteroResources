{
	"translatorID": "19afa3fd-1c7f-4eb8-a37e-8d07768493e8",
	"label": "Citation graph",
	"description": "exports a citation graph in graphml format. Use gephi or yEd to clean up and visualize",
	"creator": "Emiliano heyns",
	"target": "dot",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"inRepository": false,
	"displayOptions": {
		"Title": false,
		"Authors": false,
		"Year": false
	},
	"configOptions": {
		"getCollections": true,
		"hash": "dbf74e90d160a505e1b5b989cc82d538d9eab452d53a2f28b9442e5a5dd5d049"
	},
	"priority": 100,
	"lastUpdated": "2024-07-15"
}

ZOTERO_CONFIG = {"GUID":"zotero@zotero.org","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/","PLUGINS_URL":"https://www.zotero.org/support/plugins"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"19afa3fd-1c7f-4eb8-a37e-8d07768493e8","label":"Citation graph","description":"exports a citation graph in graphml format. Use gephi or yEd to clean up and visualize","creator":"Emiliano heyns","target":"dot","minVersion":"4.0.27","maxVersion":"","translatorType":2,"browserSupport":"gcsv","inRepository":false,"displayOptions":{"Title":false,"Authors":false,"Year":false},"configOptions":{"getCollections":true},"priority":100}); // assign new data
      
var { doExport } = (() => {
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
      function parse(match) {
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
          tokens.push(parse(match));
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

  // translators/Citation graph.ts
  var Citation_graph_exports = {};
  __export(Citation_graph_exports, {
    doExport: () => doExport
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

  // gen/osfile.js
  var isWin = Services.appinfo.OS == "WINNT";
  var OS2 = {
    Constants: {
      Path: {
        get homeDir() {
          return FileUtils.getDir("Home", []).path;
        },
        get libDir() {
          return FileUtils.getDir("GreBinD", []).path;
        },
        get profileDir() {
          return FileUtils.getDir("ProfD", []).path;
        },
        get tmpDir() {
          return FileUtils.getDir("TmpD", []).path;
        }
      }
    },
    File: {
      DirectoryIterator: function(path) {
        var initialized = false;
        var paths = [];
        async function init() {
          paths.push(...await IOUtils.getChildren(path));
          initialized = true;
        }
        async function getEntry(path2) {
          var info = await IOUtils.stat(path2);
          return {
            name: PathUtils.filename(path2),
            path: path2,
            isDir: info.type == "directory"
          };
        }
        this.nextBatch = async function(num) {
          if (!initialized) {
            await init();
          }
          var entries = [];
          while (paths.length && num > 0) {
            entries.push(await getEntry(paths.shift()));
            num--;
          }
          return entries;
        };
        this.forEach = async function(func) {
          if (!initialized) {
            await init();
          }
          var i = 0;
          while (paths.length) {
            let entry = await getEntry(paths.shift());
            await func(entry, i++, this);
          }
        };
        this.close = function() {
        };
      },
      Error: function(msg) {
        this.message = msg;
        this.stack = new Error().stack;
      },
      copy: wrapWrite(async function(src, dest) {
        return IOUtils.copy(src, dest);
      }),
      exists: async function(path) {
        try {
          return await IOUtils.exists(path);
        } catch (e) {
          if (e.message.includes("NS_ERROR_FILE_UNRECOGNIZED_PATH")) {
            dump(e.message + "\n\n" + e.stack + "\n\n");
            Components.utils.reportError(e);
            return false;
          }
        }
      },
      makeDir: wrapWrite(async function(path, options2 = {}) {
        try {
          return await IOUtils.makeDirectory(
            path,
            {
              ignoreExisting: options2.ignoreExisting !== false,
              createAncestors: !!options2.from,
              permissions: options2.unixMode
            }
          );
        } catch (e) {
          if (e.name == "InvalidAccessError") {
            if (/Could not create directory because the target file(.+) exists and is not a directory/.test(e.message)) {
              let osFileError = new OS2.File.Error(e.message);
              osFileError.becauseExists = true;
              throw osFileError;
            }
          }
        }
      }),
      move: wrapWrite(async function(src, dest, options2 = {}) {
        if (options2.noCopy) {
          throw new Error("noCopy is no longer supported");
        }
        var destFileInfo = null;
        try {
          destFileInfo = await IOUtils.stat(dest);
        } catch (e) {
          if (e.name != "NotFoundError") {
            throw e;
          }
        }
        if (destFileInfo) {
          if (destFileInfo.type == "directory") {
            throw new Error("OS.File.move() destination cannot be a directory -- use IOUtils.move()");
          }
          if (options2.noOverwrite) {
            let e = new OS2.File.Error();
            e.becauseExists = true;
            throw e;
          }
        }
        return IOUtils.move(src, dest, options2);
      }),
      read: async function(path, options2 = {}) {
        if (options2.encoding) {
          if (!/^utf\-?8$/i.test(options2.encoding)) {
            throw new Error("Can only read UTF-8");
          }
          return IOUtils.readUTF8(path);
        }
        return IOUtils.read(
          path,
          {
            maxBytes: options2.bytes
          }
        );
      },
      remove: async function(path, options2 = {}) {
        return IOUtils.remove(path, options2);
      },
      removeDir: async function(path, options2 = {}) {
        return IOUtils.remove(
          path,
          {
            recursive: true,
            // OS.File.removeDir defaulted to ignoreAbsent: true
            ignoreAbsent: options2.ignoreAbsent !== false
          }
        );
      },
      removeEmptyDir: async function(path) {
        return IOUtils.remove(path);
      },
      setDates: async function(path, atime, mtime) {
        if (atime) {
          await IOUtils.setAccessTime(path, atime.valueOf());
        }
        return await IOUtils.setModificationTime(path, mtime ? mtime.valueOf() : void 0);
      },
      setPermissions: async function(path, { unixMode, winAttributes } = {}) {
        await IOUtils.setPermissions(path, unixMode);
        if (winAttributes && isWin) {
          let { readOnly, hidden, system } = winAttributes;
          await IOUtils.setWindowsAttributes(path, { readOnly, hidden, system });
        }
      },
      stat: async function stat(path) {
        var info;
        try {
          info = await IOUtils.stat(path);
        } catch (e) {
          if (e.name == "NotFoundError") {
            let osFileError = new this.Error("File not found");
            osFileError.becauseNoSuchFile = true;
            throw osFileError;
          }
          throw e;
        }
        return {
          isDir: info.type == "directory",
          isSymLink: true,
          // Supposedly was broken in Firefox
          size: info.size,
          lastAccessDate: new Date(info.lastAccessed),
          lastModificationDate: new Date(info.lastModified),
          unixMode: !isWin ? info.permissions : void 0
        };
      },
      unixSymLink: async function(pathTarget, pathCreate) {
        if (await IOUtils.exists(pathCreate)) {
          let osFileError = new this.Error(pathCreate + " already exists");
          osFileError.becauseExists = true;
          throw osFileError;
        }
        const { ctypes } = ChromeUtils.importESModule(
          "resource://gre/modules/ctypes.sys.mjs"
        );
        try {
          if (Services.appinfo.OS === "Darwin") {
            const libc = ctypes.open(
              Services.appinfo.OS === "Darwin" ? "libSystem.B.dylib" : "libc.so"
            );
            const symlink = libc.declare(
              "symlink",
              ctypes.default_abi,
              ctypes.int,
              // return value
              ctypes.char.ptr,
              // target
              ctypes.char.ptr
              //linkpath
            );
            if (symlink(pathTarget, pathCreate)) {
              throw new Error("Failed to create symlink at " + pathCreate);
            }
          } else {
            let ln = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsIFile);
            ln.initWithPath("/bin/ln");
            let process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
            process.init(ln);
            let args = ["-s", pathTarget, pathCreate];
            process.run(true, args, args.length);
          }
        } catch (e) {
          dump(e.message + "\n\n");
          throw new Error("Failed to create symlink at " + pathCreate);
        }
      },
      writeAtomic: async function(path, bytes, options2 = {}) {
        if (options2.backupTo) {
          options2.backupFile = options2.backupTo;
        }
        if (options2.noOverwrite) {
          options2.mode = "create";
        }
        if (options2.encoding == "utf-8") {
          return IOUtils.writeUTF8(path, bytes, options2);
        }
        return IOUtils.write(path, bytes, options2);
      }
    },
    Path: {
      basename: function(path) {
        return PathUtils.filename(path);
      },
      dirname: function(path) {
        return PathUtils.parent(path);
      },
      fromFileURI: function(uri) {
        let url = new URL(uri);
        if (url.protocol != "file:") {
          throw new Error("fromFileURI expects a file URI");
        }
        let path = this.normalize(decodeURIComponent(url.pathname));
        return path;
      },
      join: function(path, ...args) {
        var platformSlash = Services.appinfo.OS == "WINNT" ? "\\" : "/";
        try {
          if (args.length == 0) {
            return path;
          }
          if (args.length == 1 && args[0].includes(platformSlash)) {
            return PathUtils.joinRelative(path, ...args);
          }
          return PathUtils.join(path, ...args);
        } catch (e) {
          if (e.message.includes("NS_ERROR_FILE_UNRECOGNIZED_PATH")) {
            Cu.reportError("WARNING: " + e.message + " -- update for IOUtils");
            return [path, ...args].join(platformSlash);
          }
          throw e;
        }
      },
      // From Firefox 102
      normalize: function(path) {
        let stack = [];
        let absolute;
        if (path.length >= 0 && path[0] == "/") {
          absolute = true;
        } else {
          absolute = false;
        }
        path.split("/").forEach(function(v) {
          switch (v) {
            case "":
            case ".":
              break;
            case "..":
              if (!stack.length) {
                if (absolute) {
                  throw new Error("Path is ill-formed: attempting to go past root");
                } else {
                  stack.push("..");
                }
              } else if (stack[stack.length - 1] == "..") {
                stack.push("..");
              } else {
                stack.pop();
              }
              break;
            default:
              stack.push(v);
          }
        });
        let string = stack.join("/");
        return absolute ? "/" + string : string;
      },
      split: function(path) {
        if (Services.appinfo.OS == "WINNT") {
          let index = path.indexOf(":");
          let absolute = path.length > index + 1 && path[index + 1] == "\\";
          return {
            absolute,
            winDrive: winGetDrive(path),
            components: path.split("\\")
          };
        }
        return {
          absolute: path.length && path[0] == "/",
          components: path.split("/")
        };
      },
      toFileURI: function(path) {
        return PathUtils.toFileURI(path);
      }
    }
  };
  var winGetDrive = function(path) {
    if (path == null) {
      throw new TypeError("path is invalid");
    }
    if (path.startsWith("\\\\")) {
      if (path.length == 2) {
        return null;
      }
      let index2 = path.indexOf("\\", 2);
      if (index2 == -1) {
        return path;
      }
      return path.slice(0, index2);
    }
    let index = path.indexOf(":");
    if (index <= 0) return null;
    return path.slice(0, index + 1);
  };
  function wrapWrite(func) {
    return async function() {
      try {
        return await func(...arguments);
      } catch (e) {
        if (DOMException.isInstance(e)) {
          if (e.name == "NoModificationAllowedError") {
            e.becauseExists = true;
          }
        }
        throw e;
      }
    };
  }

  // content/os.ts
  var Shim = is7 ? OS2 : void 0;
  if (Shim) {
    const Path = platform.windows ? { start: /.*\\/, end: /\\$/ } : { start: /.*\//, end: /\/$/ };
    Shim.Path.basename = (path) => path && Shim.Path.normalize(path).replace(Path.end, "").replace(Path.start, "");
  }

  // gen/preferences/meta.ts
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: true,
    biblatexExtractEprint: true,
    bibtexEditionOrdinal: false,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    charmap: "",
    citeCommand: "cite",
    citekeyCaseInsensitive: true,
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatEditing: "",
    citekeySearch: true,
    citekeyUnsafeChars: `\\"#%'(),={}~`,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importDetectURLs: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importSentenceCaseQuoted: true,
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    logEvents: true,
    mapMath: "",
    mapText: "",
    packages: "",
    parseParticles: true,
    patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,pdf,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/, keywords",
    warnBulkModify: 10,
    warnTitleCased: false
  };
  var affectedBy = {
    "BetterBibTeX JSON": [],
    "Better BibLaTeX": [
      "ascii",
      "asciiBibLaTeX",
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "biblatexExtendedDateFormat",
      "biblatexExtendedNameFormat",
      "biblatexExtractEprint",
      "cache",
      "charmap",
      "csquotes",
      "DOIandURL",
      "exportBibTeXStrings",
      "exportBraceProtection",
      "exportTitleCase",
      "jabrefFormat",
      "language",
      "mapMath",
      "mapText",
      "packages",
      "parseParticles",
      "postscript",
      "qualityReport",
      "rawLaTag",
      "relativeFilePaths",
      "separatorList",
      "separatorNames",
      "skipFields",
      "skipWords",
      "strings",
      "verbatimFields"
    ],
    "Better BibTeX": [
      "ascii",
      "asciiBibTeX",
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "biblatexExtractEprint",
      "bibtexEditionOrdinal",
      "bibtexParticleNoOp",
      "bibtexURL",
      "cache",
      "charmap",
      "csquotes",
      "DOIandURL",
      "exportBibTeXStrings",
      "exportBraceProtection",
      "exportTitleCase",
      "jabrefFormat",
      "language",
      "mapMath",
      "mapText",
      "packages",
      "parseParticles",
      "postscript",
      "qualityReport",
      "rawLaTag",
      "relativeFilePaths",
      "separatorList",
      "separatorNames",
      "skipFields",
      "skipWords",
      "strings",
      "verbatimFields"
    ],
    "Better CSL JSON": [
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "cache",
      "parseParticles",
      "postscript",
      "skipFields"
    ],
    "Better CSL YAML": [
      "autoAbbrev",
      "autoAbbrevStyle",
      "automaticTags",
      "baseAttachmentPath",
      "cache",
      "parseParticles",
      "postscript",
      "skipFields"
    ]
  };
  var options = {
    "autoExport": {
      "immediate": "On Change",
      "idle": "When Idle",
      "off": "Paused"
    },
    "bibtexURL": {
      "off": "no",
      "note": "in the 'note' field",
      "note-url-ish": "in the 'note' field, but assuming the 'url' package is not loaded",
      "url": "in the 'url' field",
      "url-ish": "in the 'url' field, but assuming the 'url' package is not loaded"
    },
    "DOIandURL": {
      "both": "both",
      "doi": "DOI",
      "url": "URL"
    },
    "exportBibTeXStrings": {
      "off": "No",
      "detect": "Assume single-word fields to be @string vars",
      "match": "Match against the @string declarations below",
      "match+reverse": "Match against the @string declarations and their values below"
    },
    "importCaseProtection": {
      "as-needed": "minimal",
      "on": "yes",
      "off": "no"
    },
    "importSentenceCase": {
      "on+guess": "yes, but try to exclude already-sentence-cased titles",
      "on": "yes",
      "off": "no (import titles as-is)"
    },
    "jabrefFormat": {
      "0": "no",
      "3": "for JabRef 3",
      "4": "for JabRef 4",
      "5": "for JabRef 5"
    },
    "keyConflictPolicy": {
      "change": "postfixed (causes key changes)",
      "keep": "kept (causes key duplicates)"
    },
    "keyScope": {
      "global": "across all libraries",
      "library": "within each library"
    },
    "language": {
      "langid": "langid",
      "language": "language",
      "both": "both"
    },
    "quickCopyMode": {
      "latex": "LaTeX citation",
      "citekeys": "Cite Keys",
      "eta": "Eta template",
      "gitbook": "GitBook",
      "orgRef": "org-ref citation",
      "orgRef3": "org-ref v3 citation",
      "orgmode": "Org-mode select link",
      "pandoc": "Pandoc citation",
      "roamCiteKey": "Roam Cite Key",
      "rtfScan": "RTF Scan marker",
      "selectlink": "Zotero select link",
      "jupyter": "Jupyter notebook",
      "jekyll": "Jekyll cite"
    },
    "quickCopyOrgMode": {
      "zotero": "using Zotero item key",
      "citationkey": "using Better BibTeX citation key"
    },
    "quickCopySelectLink": {
      "zotero": "using Zotero item key",
      "citationkey": "using Better BibTeX citation key"
    }
  };

  // content/escape.ts
  var import_utils_escape_regexp_string = __toESM(require_lib12());
  function regex(text) {
    return (0, import_utils_escape_regexp_string.default)(text);
  }

  // translators/lib/translator.ts
  var $OS = is7 ? Shim : OS;
  var PrefNames = new Set(Object.keys(defaults));
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
    /*
    set(target, property, value): boolean {
      if (property === '$cacheable' && target.$cacheable && !value) log.debug('cache-rate: not for', target, (new Error).stack)
      target[property] = value
      return true
    }
    */
  }();
  var Items = class {
    constructor(items) {
      this.items = [];
      this.map = {};
      if (items) {
        this.items = items.map((item) => this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      } else {
        let item;
        while (item = Zotero.nextItem()) {
          this.items.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
        }
      }
      this.items.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
    }
    erase() {
      this.items = [];
      this.map = {};
      this.current = null;
    }
    cacheable(cacheable) {
      for (const item of this.items) {
        item.$cacheable = cacheable;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.items) {
        yield item;
      }
    }
    get regular() {
      return this._regular();
    }
    *_regular() {
      for (const item of this.items) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
      }
    }
  };
  var Collections = class {
    constructor(items, collections) {
      this.items = items;
      this.byKey = {};
      if (collections) {
        this.byKey = collections;
      } else if (Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
    }
    erase() {
      this.byKey = {};
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.byKey[key]) return;
      this.byKey[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.byKey[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.byKey[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.byKey).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this.items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.byKey[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
  };
  function collect() {
    const items = new Items();
    return { items, collections: new Collections(items) };
  }
  var Override = class {
    constructor(preferences) {
      this.preferences = preferences;
      this.orig = { ...this.preferences };
      this.exportPath = Zotero.getOption("exportPath");
      this.exportDir = Zotero.getOption("exportDir");
    }
    override(preference, extension) {
      var _a;
      const override = this.orig[`${preference}Override`];
      if (!this.exportPath || !override) {
        return false;
      }
      const candidates = [
        $OS.Path.basename(this.exportPath).replace(/\.[^.]+$/, "") + extension,
        override
      ].map((filename) => $OS.Path.join(this.exportDir, filename));
      for (const candidate of candidates) {
        Zotero.debug(`better-bibtex: looking for override ${preference} in ${candidate}`);
        try {
          const content = Zotero.BetterBibTeX.getContents(candidate);
          if (content === null) {
            Zotero.debug(`better-bibtex: override ${candidate} not found`);
            continue;
          }
          let prefs;
          if (preference === "preferences") {
            prefs = (_a = JSON.parse(content).override) == null ? void 0 : _a.preferences;
            if (!prefs) continue;
          } else {
            prefs = { [preference]: content };
          }
          for (const [pref, value] of Object.entries(prefs)) {
            if (!PrefNames.has(pref)) {
              Zotero.debug(`better-bibtex: unexpected preference override for ${pref}`);
            } else if (typeof value !== typeof defaults[pref]) {
              Zotero.debug(`better-bibtex: preference override for ${pref}: expected ${typeof defaults[pref]}, got ${typeof value}`);
            } else if (options[pref] && !options[pref][value]) {
              Zotero.debug(`better-bibtex: preference override for ${pref}: expected ${Object.keys(options[pref]).join(" / ")}, got ${value}`);
            } else {
              this.preferences[pref] = value;
            }
          }
          Zotero.debug(`better-bibtex: override ${candidate} loaded`);
          return true;
        } catch (err) {
          Zotero.debug(`better-bibtex: failed to load override ${candidate}: ${err}`);
        }
      }
      return false;
    }
  };
  var Translation = class {
    constructor(translator, mode) {
      this.translator = translator;
      this.mode = mode;
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.collections = {};
      // keep because it is being used in postscripts
      this.output = {
        body: "",
        attachments: []
      };
      this.cacheable = true;
      this[translator.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = { ...translator.displayOptions || {} };
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false) this.cacheable = false;
      } catch (err) {
      }
      for (const key in this.options) {
        this.options[key] = !!Zotero.getOption(key);
      }
      this.options.custom = Zotero.getOption("custom");
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a;
        acc[pref] = (_a = Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _a : dflt;
        return acc;
      }, {});
      const override = new Override(this.preferences);
      if (override.override("preferences", ".json")) this.cacheable = false;
      if (override.override("postscript", ".js")) this.cacheable = false;
      if (override.override("strings", ".bib")) this.cacheable = false;
      try {
        this.charmap = JSON.parse(this.preferences.charmap);
      } catch (err) {
        this.charmap = {};
      }
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      let m;
      if (this.skipFields.length) {
        this.skipField = new RegExp("^(" + this.skipFields.map((field) => {
          if (m = field.match(/^(csl|tex|bibtex|biblatex)[.]([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.]${m[2]}[.]${m[3]})`;
          }
          if (m = field.match(/^(tex|bibtex|biblatex)[.]([-a-z]+)$/)) {
            return `(${m[1] === "tex" ? "bib(la)?" : ""}[.][-a-z]+[.]${m[2]})`;
          }
          if (m = field.match(/^([-a-z]+)[.]([-a-z]+)$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.]${m[1]}[.]${m[2]})`;
          }
          if (m = field.match(/^[-a-z]+$/)) {
            return `(${this.BetterTeX ? "bib(la)?tex" : "csl"}[.][-a-z]+[.]${field})`;
          }
          return "";
        }).filter((field) => field).join("|") + ")$");
      }
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length) this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
    }
    get exportDir() {
      this.input.items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this.input.items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex.")) return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex.")) return this.mode === "import" || this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    static Import(translator) {
      return new this(translator, "import");
    }
    static Export(translator, input) {
      var _a, _b, _c, _d;
      const translation = new this(translator, "export");
      translation.input = input;
      translation.export = {
        dir: Zotero.getOption("exportDir"),
        path: Zotero.getOption("exportPath")
      };
      if ((_a = translation.export.dir) == null ? void 0 : _a.endsWith(translation.paths.sep)) translation.export.dir = translation.export.dir.slice(0, -1);
      translation.unicode = !translation.preferences[`ascii${translator.label.replace(/Better /, "")}`] || false;
      if (translation.preferences.baseAttachmentPath && (translation.export.dir === translation.preferences.baseAttachmentPath || ((_b = translation.export.dir) == null ? void 0 : _b.startsWith(translation.preferences.baseAttachmentPath + translation.paths.sep)))) {
        translation.preferences.relativeFilePaths = true;
      }
      translation.cacheable = translation.cacheable && translation.preferences.cache && !(translation.options.exportFileData || translation.preferences.relativeFilePaths || translation.preferences.baseAttachmentPath && ((_c = translation.export.dir) == null ? void 0 : _c.startsWith(translation.preferences.baseAttachmentPath)));
      if (translation.BetterTeX) {
        translation.preferences.separatorList = translation.preferences.separatorList.trim();
        translation.preferences.separatorNames = translation.preferences.separatorNames.trim();
        translation.and = {
          list: {
            re: new RegExp(regex(translation.preferences.separatorList), "g"),
            repl: ` {${translation.preferences.separatorList}} `
          },
          names: {
            re: new RegExp(` ${regex(translation.preferences.separatorNames)} `, "g"),
            repl: ` {${translation.preferences.separatorNames}} `
          }
        };
        translation.preferences.separatorList = ` ${translation.preferences.separatorList} `;
        translation.preferences.separatorNames = ` ${translation.preferences.separatorNames} `;
      }
      if (translation.preferences.testing && typeof __estrace === "undefined" && ((_d = translator.configOptions) == null ? void 0 : _d.cached)) {
        const allowedPreferences = (translator.label === "BetterBibTeX JSON" ? Object.keys(defaults) : affectedBy[translator.label]).concat(["testing"]).reduce((acc, pref) => {
          acc[pref] = translation.preferences[pref];
          return acc;
        }, {});
        translation.preferences = new Proxy(allowedPreferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            if (property === "toJSON") return object[property];
            if (!(property in allowedPreferences)) new TypeError(`Preference ${property} claims not to affect ${translator.label}`);
            return object[property];
          }
        });
      }
      translation.input.items.cacheable(translation.cacheable);
      translation.collections = translation.input.collections.byKey;
      return translation;
    }
    erase() {
      this.input.items.erase();
      this.input.collections.erase();
      this.output.body = "";
      this.output.attachments = [];
    }
    saveAttachments() {
      var _a;
      if (!((_a = this.output) == null ? void 0 : _a.attachments.length)) return;
      for (const attachment of this.output.attachments) {
        attachment.saveFile(attachment.defaultPath, true);
      }
    }
    isVerbatimField(field) {
      return !!this.verbatimFields.find((v) => typeof v === "string" ? v === field : field.match(v));
    }
  };

  // translators/Citation graph.ts
  function node(id, attributes = {}) {
    let n = JSON.stringify(id);
    const attrs = Object.entries(attributes).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(", ");
    if (attrs) n += ` [${attrs}]`;
    return `  ${n};
`;
  }
  function edge(source, target, attributes = {}) {
    let e = `${JSON.stringify(source)} -> ${JSON.stringify(target)}`;
    const attrs = Object.entries(attributes).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join(", ");
    if (attrs) e += ` [${attrs}]`;
    return `  ${e};
`;
  }
  function doExport() {
    var _a, _b;
    const translation = Translation.Export(ZOTERO_TRANSLATOR_INFO, collect());
    translation.output.body += "digraph CitationGraph {\n";
    translation.output.body += "  concentrate=true;\n";
    const add = {
      title: Zotero.getOption("Title"),
      authors: Zotero.getOption("Authors"),
      year: Zotero.getOption("Year")
    };
    const items = [];
    for (const ref of translation.input.items.regular) {
      const label = [ref.citationKey];
      if (add.title && ref.title) {
        label.push(`\u201C${ref.title.replace(/"/g, "'")}\u201D`);
      }
      const author = [];
      if (add.authors && ref.creators && ref.creators.length) {
        const name = (_a = ref.creators) == null ? void 0 : _a.map((creator) => (creator.name || creator.lastName || "").replace(/"/g, "'")).filter((creator) => creator).join(", ");
        if (name) author.push(name);
      }
      if (add.year && ref.date) {
        let date = Zotero.BetterBibTeX.parseDate(ref.date);
        if (date.from) date = date.from;
        if (date.year) author.push(`(${date.year})`);
      }
      if (author.length) label.push(author.join(" "));
      items.push({
        id: `node-${items.length}`,
        label: label.join("\n"),
        relations: ((_b = ref.relations) == null ? void 0 : _b["dc:relation"]) || [],
        // eslint-disable-next-line prefer-spread
        cites: [].concat.apply(
          [],
          (ref.extra || "").split("\n").filter((line) => line.startsWith("cites:")).map((line) => line.replace(/^cites:/, "").trim()).filter((keys) => keys).map((keys) => keys.split(/\s*,\s*/))
        ),
        citationKey: ref.citationKey,
        uri: ref.uri
      });
    }
    for (const item of items) {
      translation.output.body += node(item.id, { label: item.label });
      for (const uri of item.relations) {
        const other = items.find((o) => o.uri === uri);
        if (other) {
          translation.output.body += edge(item.id, other.id);
        } else {
          translation.output.body += edge(item.id, uri.replace(/.*\//, ""), { style: "dashed", dir: "both" });
        }
      }
      for (const citationKey of item.cites) {
        const other = items.find((o) => o.citationKey === citationKey);
        if (other) {
          translation.output.body += edge(item.id, other.id);
        } else {
          translation.output.body += edge(item.id, citationKey, { style: "dashed" });
        }
      }
    }
    translation.output.body += "}";
    Zotero.write(translation.output.body);
    translation.erase();
  }
  return __toCommonJS(Citation_graph_exports);
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
