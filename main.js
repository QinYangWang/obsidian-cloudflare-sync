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

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports2, module2) {
    var toString = Object.prototype.toString;
    module2.exports = function kindOf(val) {
      if (val === void 0)
        return "undefined";
      if (val === null)
        return "null";
      var type = typeof val;
      if (type === "boolean")
        return "boolean";
      if (type === "string")
        return "string";
      if (type === "number")
        return "number";
      if (type === "symbol")
        return "symbol";
      if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
      }
      if (isArray(val))
        return "array";
      if (isBuffer(val))
        return "buffer";
      if (isArguments(val))
        return "arguments";
      if (isDate(val))
        return "date";
      if (isError(val))
        return "error";
      if (isRegexp(val))
        return "regexp";
      switch (ctorName(val)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (isGeneratorObj(val)) {
        return "generator";
      }
      type = toString.call(val);
      switch (type) {
        case "[object Object]":
          return "object";
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function ctorName(val) {
      return typeof val.constructor === "function" ? val.constructor.name : null;
    }
    function isArray(val) {
      if (Array.isArray)
        return Array.isArray(val);
      return val instanceof Array;
    }
    function isError(val) {
      return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
    }
    function isDate(val) {
      if (val instanceof Date)
        return true;
      return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
    }
    function isRegexp(val) {
      if (val instanceof RegExp)
        return true;
      return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
    }
    function isGeneratorFn(name, val) {
      return ctorName(name) === "GeneratorFunction";
    }
    function isGeneratorObj(val) {
      return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
    }
    function isArguments(val) {
      try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
          return true;
        }
      } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/extend-shallow/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_extendable();
    module2.exports = function extend(o) {
      if (!isObject(o)) {
        o = {};
      }
      var len = arguments.length;
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (isObject(obj)) {
          assign(o, obj);
        }
      }
      return o;
    };
    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/section-matter/index.js
var require_section_matter = __commonJS({
  "node_modules/section-matter/index.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var extend = require_extend_shallow();
    module2.exports = function(input, options2) {
      if (typeof options2 === "function") {
        options2 = { parse: options2 };
      }
      var file = toObject(input);
      var defaults = { section_delimiter: "---", parse: identity };
      var opts = extend({}, defaults, options2);
      var delim = opts.section_delimiter;
      var lines = file.content.split(/\r?\n/);
      var sections = null;
      var section = createSection();
      var content = [];
      var stack = [];
      function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
      }
      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim);
          section.content = val;
          opts.parse(section, sections);
          sections.push(section);
          section = createSection();
          content = [];
          stack = [];
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line);
              continue;
            }
            stack.push(ln);
            section.data = content.join("\n");
            content = [];
            continue;
          }
          if (sections === null) {
            initSections(content.join("\n"));
          }
          if (len === 2) {
            closeSection(content.join("\n"));
          }
          stack.push(ln);
          continue;
        }
        content.push(line);
      }
      if (sections === null) {
        initSections(content.join("\n"));
      } else {
        closeSection(content.join("\n"));
      }
      file.sections = sections;
      return file;
    };
    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false;
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(input) {
      if (typeOf(input) !== "object") {
        input = { content: input };
      }
      if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
      }
      input.content = input.content.toString();
      input.sections = [];
      return input;
    }
    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : "";
    }
    function createSection() {
      return { key: "", data: "", content: "" };
    }
    function identity(val) {
      return val;
    }
    function isBuffer(val) {
      if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js
var require_common = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js"(exports2, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence))
        return sequence;
      else if (isNothing(sequence))
        return [];
      return [sequence];
    }
    function extend(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string;
      }
      return result;
    }
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js"(exports2, module2) {
    "use strict";
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ": ";
      result += this.reason || "(unknown reason)";
      if (!compact && this.mark) {
        result += " " + this.mark.toString();
      }
      return result;
    };
    module2.exports = YAMLException;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    function Mark(name, buffer, position, line, column) {
      this.name = name;
      this.buffer = buffer;
      this.position = position;
      this.line = line;
      this.column = column;
    }
    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;
      if (!this.buffer)
        return null;
      indent = indent || 4;
      maxLength = maxLength || 75;
      head = "";
      start = this.position;
      while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
          head = " ... ";
          start += 5;
          break;
        }
      }
      tail = "";
      end = this.position;
      while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
          tail = " ... ";
          end -= 5;
          break;
        }
      }
      snippet = this.buffer.slice(start, end);
      return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
    };
    Mark.prototype.toString = function toString(compact) {
      var snippet, where = "";
      if (this.name) {
        where += 'in "' + this.name + '" ';
      }
      where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
      if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
          where += ":\n" + snippet;
        }
      }
      return where;
    };
    module2.exports = Mark;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js
var require_type = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js"(exports2, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options2) {
      options2 = options2 || {};
      Object.keys(options2).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.tag = tag;
      this.kind = options2["kind"] || null;
      this.resolve = options2["resolve"] || function() {
        return true;
      };
      this.construct = options2["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options2["instanceOf"] || null;
      this.predicate = options2["predicate"] || null;
      this.represent = options2["represent"] || null;
      this.defaultStyle = options2["defaultStyle"] || null;
      this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name, result) {
      var exclude = [];
      schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
      });
      schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });
        result.push(currentType);
      });
      return result.filter(function(type, index) {
        return exclude.indexOf(index) === -1;
      });
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;
      function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      this.include = definition.include || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];
      this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
      });
      this.compiledImplicit = compileList(this, "implicit", []);
      this.compiledExplicit = compileList(this, "explicit", []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var schemas, types;
      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;
        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;
        default:
          throw new YAMLException("Wrong number of arguments for Schema.create function");
      }
      schemas = common.toArray(schemas);
      types = common.toArray(types);
      if (!schemas.every(function(schema) {
        return schema instanceof Schema;
      })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      }
      if (!types.every(function(type) {
        return type instanceof Type;
      })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      return new Schema({
        include: schemas,
        explicit: types
      });
    };
    module2.exports = Schema;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null)
        return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object) {
      return object === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null)
        return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object) {
      return Object.prototype.toString.call(object) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object) {
          return object ? "true" : "false";
        },
        uppercase: function(object) {
          return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
          return object ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null)
        return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max)
        return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max)
          return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (ch !== "0" && ch !== "1")
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_")
              continue;
            if (!isHexCode(data.charCodeAt(index)))
              return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_")
            continue;
          if (!isOctCode(data.charCodeAt(index)))
            return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "_")
        return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_")
          continue;
        if (ch === ":")
          break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_")
        return false;
      if (ch !== ":")
        return true;
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base, digits = [];
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-")
          sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0")
        return 0;
      if (ch === "0") {
        if (value[1] === "b")
          return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x")
          return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }
      if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null)
        return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign, base, digits;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      digits = [];
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseFloat(v, 10));
        });
        value = 0;
        base = 1;
        digits.forEach(function(d) {
          value += d * base;
          base *= 60;
        });
        return sign * value;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object, style) {
      var res;
      if (isNaN(object)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object)) {
        return "-0.0";
      }
      res = object.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object) {
      return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_failsafe()
      ],
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_json()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null)
        return false;
      if (YAML_DATE_REGEXP.exec(data) !== null)
        return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null)
        return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null)
        match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null)
        throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-")
          delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta)
        date.setTime(date.getTime() - delta);
      return date;
    }
    function representYamlTimestamp(object) {
      return object.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js"(exports2, module2) {
    "use strict";
    var NodeBuffer;
    try {
      _require = require;
      NodeBuffer = _require("buffer").Buffer;
    } catch (__) {
    }
    var _require;
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null)
        return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64)
          continue;
        if (code < 0)
          return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }
      return result;
    }
    function representYamlBinary(object) {
      var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(object) {
      return NodeBuffer && NodeBuffer.isBuffer(object);
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null)
        return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]")
          return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey)
              pairHasKey = true;
            else
              return false;
          }
        }
        if (!pairHasKey)
          return false;
        if (objectKeys.indexOf(pairKey) === -1)
          objectKeys.push(pairKey);
        else
          return false;
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null)
        return true;
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        if (_toString.call(pair) !== "[object Object]")
          return false;
        keys = Object.keys(pair);
        if (keys.length !== 1)
          return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null)
        return [];
      var index, length, pair, keys, result, object = data;
      result = new Array(object.length);
      for (index = 0, length = object.length; index < length; index += 1) {
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null)
        return true;
      var key, object = data;
      for (key in object) {
        if (_hasOwnProperty.call(object, key)) {
          if (object[key] !== null)
            return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_core()
      ],
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return void 0;
    }
    function representJavascriptUndefined() {
      return "";
    }
    function isUndefined(object) {
      return typeof object === "undefined";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptRegExp(data) {
      if (data === null)
        return false;
      if (data.length === 0)
        return false;
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        if (modifiers.length > 3)
          return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/")
          return false;
      }
      return true;
    }
    function constructJavascriptRegExp(data) {
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail)
          modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }
      return new RegExp(regexp, modifiers);
    }
    function representJavascriptRegExp(object) {
      var result = "/" + object.source + "/";
      if (object.global)
        result += "g";
      if (object.multiline)
        result += "m";
      if (object.ignoreCase)
        result += "i";
      return result;
    }
    function isRegExp(object) {
      return Object.prototype.toString.call(object) === "[object RegExp]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js"(exports2, module2) {
    "use strict";
    var esprima;
    try {
      _require = require;
      esprima = _require("esprima");
    } catch (_) {
      if (typeof window !== "undefined")
        esprima = window.esprima;
    }
    var _require;
    var Type = require_type();
    function resolveJavascriptFunction(data) {
      if (data === null)
        return false;
      try {
        var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function constructJavascriptFunction(data) {
      var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
      if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
      }
      ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
      });
      body = ast.body[0].expression.body.range;
      if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      return new Function(params, "return " + source.slice(body[0], body[1]));
    }
    function representJavascriptFunction(object) {
      return object.toString();
    }
    function isFunction(object) {
      return Object.prototype.toString.call(object) === "[object Function]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = Schema.DEFAULT = new Schema({
      include: [
        require_default_safe()
      ],
      explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var Mark = require_mark();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    function setProperty(object, key, value) {
      if (key === "__proto__") {
        Object.defineProperty(object, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      } else {
        object[key] = value;
      }
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options2) {
      this.input = input;
      this.filename = options2["filename"] || null;
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.onWarning = options2["onWarning"] || null;
      this.legacy = options2["legacy"] || false;
      this.json = options2["json"] || false;
      this.listener = options2["listener"] || null;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.documents = [];
    }
    function generateError(state, message) {
      return new YAMLException(
        message,
        new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart)
      );
    }
    function throwError(state, message) {
      throw generateError(state, message);
    }
    function throwWarning(state, message) {
      if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
          throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state.tagMap, handle)) {
          throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
      }
    }
    function mergeMappings(state, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (!_hasOwnProperty.call(destination, key)) {
          setProperty(destination, key, source[key]);
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state.line = startLine || state.line;
          state.position = startPos || state.position;
          throwError(state, "duplicated mapping key");
        }
        setProperty(_result, keyNode, valueNode);
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state) {
      var ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 10) {
        state.position++;
      } else if (ch === 13) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 10) {
          state.position++;
        }
      } else {
        throwError(state, "a line break is expected");
      }
      state.line += 1;
      state.lineStart = state.position;
    }
    function skipSeparationSpace(state, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state);
          ch = state.input.charCodeAt(state.position);
          lineBreaks++;
          state.lineIndent = 0;
          while (ch === 32) {
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state) {
      var _position = state.position, ch;
      ch = state.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state, count) {
      if (count === 1) {
        state.result += " ";
      } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
      ch = state.input.charCodeAt(state.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state.kind = "scalar";
      state.result = "";
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state.input.charCodeAt(state.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state.line;
          _lineStart = state.lineStart;
          _lineIndent = state.lineIndent;
          skipSeparationSpace(state, false, -1);
          if (state.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state.input.charCodeAt(state.position);
            continue;
          } else {
            state.position = captureEnd;
            state.line = _line;
            state.lineStart = _lineStart;
            state.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state, captureStart, captureEnd, false);
          writeFoldedLines(state, state.line - _line);
          captureStart = captureEnd = state.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
      }
      captureSegment(state, captureStart, captureEnd, false);
      if (state.result) {
        return true;
      }
      state.kind = _kind;
      state.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 39) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (ch === 39) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 34) {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      state.position++;
      captureStart = captureEnd = state.position;
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state, captureStart, state.position, true);
          state.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state, captureStart, state.position, true);
          ch = state.input.charCodeAt(++state.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state.result += simpleEscapeMap[ch];
            state.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state.input.charCodeAt(++state.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state, "expected hexadecimal character");
              }
            }
            state.result += charFromCodepoint(hexResult);
            state.position++;
          } else {
            throwError(state, "unknown escape sequence");
          }
          captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
          captureSegment(state, captureStart, captureEnd, true);
          writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
          captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
          throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
          state.position++;
          captureEnd = state.position;
        }
      }
      throwError(state, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state, nodeIndent) {
      var readNext = true, _line, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(++state.position);
      while (ch !== 0) {
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
          state.position++;
          state.tag = _tag;
          state.anchor = _anchor;
          state.kind = isMapping ? "mapping" : "sequence";
          state.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state.input.charCodeAt(state.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state.position++;
            skipSeparationSpace(state, true, nodeIndent);
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 58) {
          isPair = true;
          ch = state.input.charCodeAt(++state.position);
          skipSeparationSpace(state, true, nodeIndent);
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state.result;
        }
        if (isMapping) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 44) {
          readNext = true;
          ch = state.input.charCodeAt(++state.position);
        } else {
          readNext = false;
        }
      }
      throwError(state, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state.kind = "scalar";
      state.result = "";
      while (ch !== 0) {
        ch = state.input.charCodeAt(++state.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
          state.lineIndent++;
          ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
          textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state.result += " ";
            }
          } else {
            state.result += common.repeat("\n", emptyLines);
          }
        } else {
          state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
      }
      return true;
    }
    function readBlockSequence(state, nodeIndent) {
      var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        if (ch !== 45) {
          break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
          if (state.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state.input.charCodeAt(state.position);
            continue;
          }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _pos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
      }
      ch = state.input.charCodeAt(state.position);
      while (ch !== 0) {
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line;
        _pos = state.position;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state.position += 1;
          ch = following;
        } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          if (state.line === _line) {
            ch = state.input.charCodeAt(state.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 58) {
              ch = state.input.charCodeAt(++state.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state.tag;
              keyNode = state.result;
            } else if (detected) {
              throwError(state, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state.tag = _tag;
              state.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state.tag = _tag;
            state.anchor = _anchor;
            return true;
          }
        } else {
          break;
        }
        if (state.line === _line || state.lineIndent > nodeIndent) {
          if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state.result;
            } else {
              valueNode = state.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state, true, -1);
          ch = state.input.charCodeAt(state.position);
        }
        if (state.lineIndent > nodeIndent && ch !== 0) {
          throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
      }
      if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
      }
      return detected;
    }
    function readTagProperty(state) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 33)
        return false;
      if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
      }
      ch = state.input.charCodeAt(++state.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
      } else {
        tagHandle = "!";
      }
      _position = state.position;
      if (isVerbatim) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && ch !== 62);
        if (state.position < state.length) {
          tagName = state.input.slice(_position, state.position);
          ch = state.input.charCodeAt(++state.position);
        } else {
          throwError(state, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state.input.slice(_position - 1, state.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state.position + 1;
            } else {
              throwError(state, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
      }
      if (isVerbatim) {
        state.tag = tagName;
      } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state) {
      var _position, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 38)
        return false;
      if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
      }
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
      }
      state.anchor = state.input.slice(_position, state.position);
      return true;
    }
    function readAlias(state) {
      var _position, alias, ch;
      ch = state.input.charCodeAt(state.position);
      if (ch !== 42)
        return false;
      ch = state.input.charCodeAt(++state.position);
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
      }
      alias = state.input.slice(_position, state.position);
      if (!_hasOwnProperty.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
      }
      state.result = state.anchorMap[alias];
      skipSeparationSpace(state, true, -1);
      return true;
    }
    function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
      if (state.listener !== null) {
        state.listener("open", state);
      }
      state.tag = null;
      state.anchor = null;
      state.kind = null;
      state.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
          atNewLine = true;
          if (state.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state) || readAnchorProperty(state)) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state)) {
              hasContent = true;
              if (state.tag !== null || state.anchor !== null) {
                throwError(state, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state.tag === null) {
                state.tag = "?";
              }
            }
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
      }
      if (state.tag !== null && state.tag !== "!") {
        if (state.tag === "?") {
          if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
              state.result = type.construct(state.result);
              state.tag = type.tag;
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state.typeMap[state.kind || "fallback"], state.tag)) {
          type = state.typeMap[state.kind || "fallback"][state.tag];
          if (state.result !== null && type.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
          }
          if (!type.resolve(state.result)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
          } else {
            state.result = type.construct(state.result);
            if (state.anchor !== null) {
              state.anchorMap[state.anchor] = state.result;
            }
          }
        } else {
          throwError(state, "unknown tag !<" + state.tag + ">");
        }
      }
      if (state.listener !== null) {
        state.listener("close", state);
      }
      return state.tag !== null || state.anchor !== null || hasContent;
    }
    function readDocument(state) {
      var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state.version = null;
      state.checkLineBreaks = state.legacy;
      state.tagMap = {};
      state.anchorMap = {};
      while ((ch = state.input.charCodeAt(state.position)) !== 0) {
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          if (ch === 35) {
            do {
              ch = state.input.charCodeAt(++state.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch))
            break;
          _position = state.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position);
          }
          directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0)
          readLineBreak(state);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
          throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state, true, -1);
      if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
      }
      composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state, true, -1);
      if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
      }
      state.documents.push(state.result);
      if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 46) {
          state.position += 3;
          skipSeparationSpace(state, true, -1);
        }
        return;
      }
      if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options2) {
      input = String(input);
      options2 = options2 || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state = new State(input, options2);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
      }
      state.input += "\0";
      while (state.input.charCodeAt(state.position) === 32) {
        state.lineIndent += 1;
        state.position += 1;
      }
      while (state.position < state.length - 1) {
        readDocument(state);
      }
      return state.documents;
    }
    function loadAll(input, iterator, options2) {
      if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options2);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    function load(input, options2) {
      var documents = loadDocuments(input, options2);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    function safeLoadAll(input, iterator, options2) {
      if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    function safeLoad(input, options2) {
      return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load;
    module2.exports.safeLoadAll = safeLoadAll;
    module2.exports.safeLoad = safeLoad;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js"(exports2, module2) {
    "use strict";
    var common = require_common();
    var YAMLException = require_exception();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null)
        return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string, handle, length;
      string = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string.length) + string;
    }
    function State(options2) {
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.indent = Math.max(1, options2["indent"] || 2);
      this.noArrayIndent = options2["noArrayIndent"] || false;
      this.skipInvalid = options2["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
      this.sortKeys = options2["sortKeys"] || false;
      this.lineWidth = options2["lineWidth"] || 80;
      this.noRefs = options2["noRefs"] || false;
      this.noCompatMode = options2["noCompatMode"] || false;
      this.condenseFlow = options2["condenseFlow"] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
      while (position < length) {
        next = string.indexOf("\n", position);
        if (next === -1) {
          line = string.slice(position);
          position = length;
        } else {
          line = string.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n")
          result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state, level) {
      return "\n" + common.repeat(" ", state.indent * level);
    }
    function testImplicitResolving(state, str2) {
      var index, length, type;
      for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
        type = state.implicitTypes[index];
        if (type.resolve(str2)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
    }
    function isNsChar(c) {
      return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev) {
      return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function needIndentIndicator(string) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char, prev_char;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));
      if (singleLineOnly) {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
      } else {
        for (i = 0; i < string.length; i++) {
          char = string.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
      }
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    function writeScalar(state, string, level, iskey) {
      state.dump = function() {
        if (string.length === 0) {
          return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
          return "'" + string + "'";
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string2) {
          return testImplicitResolving(state, string2);
        }
        switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string;
          case STYLE_SINGLE:
            return "'" + string.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      }();
    }
    function blockHeader(string, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
      var clip = string[string.length - 1] === "\n";
      var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string) {
      return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
    }
    function foldString(string, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
      }();
      var prevMoreIndented = string[0] === "\n" || string[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ")
        return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string) {
      var result = "";
      var char, nextChar;
      var escapeSeq;
      for (var i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
          nextChar = string.charCodeAt(i + 1);
          if (nextChar >= 56320 && nextChar <= 57343) {
            result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
            i++;
            continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
      }
      return result;
    }
    function writeFlowSequence(state, level, object) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level, object[index], false, false)) {
          if (index !== 0)
            _result += "," + (!state.condenseFlow ? " " : "");
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state, level, object, compact) {
      var _result = "", _tag = state.tag, index, length;
      for (index = 0, length = object.length; index < length; index += 1) {
        if (writeNode(state, level + 1, object[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state, level);
          }
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state.dump;
        }
      }
      state.tag = _tag;
      state.dump = _result || "[]";
    }
    function writeFlowMapping(state, level, object) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (index !== 0)
          pairBuffer += ", ";
        if (state.condenseFlow)
          pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
          continue;
        }
        if (state.dump.length > 1024)
          pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state, level, object, compact) {
      var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
      } else if (state.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
      }
      state.tag = _tag;
      state.dump = _result || "{}";
    }
    function detectType(state, object, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state.explicitTypes : state.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
          state.tag = explicit ? type.tag : "?";
          if (type.represent) {
            style = state.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state, level, object, block, compact, iskey) {
      state.tag = null;
      state.dump = object;
      if (!detectType(state, object, false)) {
        detectType(state, object, true);
      }
      var type = _toString.call(state.dump);
      if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
      }
      if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
          state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state.dump).length !== 0) {
            writeBlockMapping(state, level, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowMapping(state, level, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object Array]") {
          var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
          if (block && state.dump.length !== 0) {
            writeBlockSequence(state, arrayLevel, state.dump, compact);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + state.dump;
            }
          } else {
            writeFlowSequence(state, arrayLevel, state.dump);
            if (duplicate) {
              state.dump = "&ref_" + duplicateIndex + " " + state.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state.tag !== "?") {
            writeScalar(state, state.dump, level, iskey);
          }
        } else {
          if (state.skipInvalid)
            return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
          state.dump = "!<" + state.tag + "> " + state.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object, state) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state.usedDuplicates = new Array(length);
    }
    function inspectNode(object, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object);
          if (Array.isArray(object)) {
            for (index = 0, length = object.length; index < length; index += 1) {
              inspectNode(object[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options2) {
      options2 = options2 || {};
      var state = new State(options2);
      if (!state.noRefs)
        getDuplicateReferences(input, state);
      if (writeNode(state, 0, input, true, true))
        return state.dump + "\n";
      return "";
    }
    function safeDump(input, options2) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.dump = dump;
    module2.exports.safeDump = safeDump;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js"(exports2, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function deprecated(name) {
      return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.safeLoad = loader.safeLoad;
    module2.exports.safeLoadAll = loader.safeLoadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.safeDump = dumper.safeDump;
    module2.exports.YAMLException = require_exception();
    module2.exports.MINIMAL_SCHEMA = require_failsafe();
    module2.exports.SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_SCHEMA = require_default_full();
    module2.exports.scan = deprecated("scan");
    module2.exports.parse = deprecated("parse");
    module2.exports.compose = deprecated("compose");
    module2.exports.addConstructor = deprecated("addConstructor");
  }
});

// node_modules/gray-matter/node_modules/js-yaml/index.js
var require_js_yaml2 = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/index.js"(exports2, module2) {
    "use strict";
    var yaml2 = require_js_yaml();
    module2.exports = yaml2;
  }
});

// node_modules/gray-matter/lib/engines.js
var require_engines = __commonJS({
  "node_modules/gray-matter/lib/engines.js"(exports, module) {
    "use strict";
    var yaml = require_js_yaml2();
    var engines = exports = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(obj, options2) {
        const opts = Object.assign({ replacer: null, space: 2 }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
      }
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = "(function() {\nreturn " + str.trim() + ";\n}());";
          }
          return eval(str) || {};
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(err);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  }
});

// node_modules/strip-bom-string/index.js
var require_strip_bom_string = __commonJS({
  "node_modules/strip-bom-string/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(str2) {
      if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
        return str2.slice(1);
      }
      return str2;
    };
  }
});

// node_modules/gray-matter/lib/utils.js
var require_utils = __commonJS({
  "node_modules/gray-matter/lib/utils.js"(exports2) {
    "use strict";
    var stripBom = require_strip_bom_string();
    var typeOf = require_kind_of();
    exports2.define = function(obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      });
    };
    exports2.isBuffer = function(val) {
      return typeOf(val) === "buffer";
    };
    exports2.isObject = function(val) {
      return typeOf(val) === "object";
    };
    exports2.toBuffer = function(input) {
      return typeof input === "string" ? Buffer.from(input) : input;
    };
    exports2.toString = function(input) {
      if (exports2.isBuffer(input))
        return stripBom(String(input));
      if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
      }
      return stripBom(input);
    };
    exports2.arrayify = function(val) {
      return val ? Array.isArray(val) ? val : [val] : [];
    };
    exports2.startsWith = function(str2, substr, len) {
      if (typeof len !== "number")
        len = substr.length;
      return str2.slice(0, len) === substr;
    };
  }
});

// node_modules/gray-matter/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/gray-matter/lib/defaults.js"(exports2, module2) {
    "use strict";
    var engines2 = require_engines();
    var utils = require_utils();
    module2.exports = function(options2) {
      const opts = Object.assign({}, options2);
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
      }
      opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
      opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
      return opts;
    };
  }
});

// node_modules/gray-matter/lib/engine.js
var require_engine = __commonJS({
  "node_modules/gray-matter/lib/engine.js"(exports2, module2) {
    "use strict";
    module2.exports = function(name, options2) {
      let engine = options2.engines[name] || options2.engines[aliase(name)];
      if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
      }
      if (typeof engine === "function") {
        engine = { parse: engine };
      }
      return engine;
    };
    function aliase(name) {
      switch (name.toLowerCase()) {
        case "js":
        case "javascript":
          return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
          return "coffee";
        case "yaml":
        case "yml":
          return "yaml";
        default: {
          return name;
        }
      }
    }
  }
});

// node_modules/gray-matter/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/gray-matter/lib/stringify.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(file, data, options2) {
      if (data == null && options2 == null) {
        switch (typeOf(file)) {
          case "object":
            data = file.data;
            options2 = {};
            break;
          case "string":
            return file;
          default: {
            throw new TypeError("expected file to be a string or object");
          }
        }
      }
      const str2 = file.content;
      const opts = defaults(options2);
      if (data == null) {
        if (!opts.data)
          return file;
        data = opts.data;
      }
      const language = file.language || opts.language;
      const engine = getEngine(language, opts);
      if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
      }
      data = Object.assign({}, file.data, data);
      const open = opts.delimiters[0];
      const close = opts.delimiters[1];
      const matter3 = engine.stringify(data, options2).trim();
      let buf = "";
      if (matter3 !== "{}") {
        buf = newline(open) + newline(matter3) + newline(close);
      }
      if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str2.indexOf(file.excerpt.trim()) === -1) {
          buf += newline(file.excerpt) + newline(close);
        }
      }
      return buf + newline(str2);
    };
    function newline(str2) {
      return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
    }
  }
});

// node_modules/gray-matter/lib/excerpt.js
var require_excerpt = __commonJS({
  "node_modules/gray-matter/lib/excerpt.js"(exports2, module2) {
    "use strict";
    var defaults = require_defaults();
    module2.exports = function(file, options2) {
      const opts = defaults(options2);
      if (file.data == null) {
        file.data = {};
      }
      if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
      }
      const sep = file.data.excerpt_separator || opts.excerpt_separator;
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
      }
      const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
      const idx = file.content.indexOf(delimiter);
      if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
      }
      return file;
    };
  }
});

// node_modules/gray-matter/lib/to-file.js
var require_to_file = __commonJS({
  "node_modules/gray-matter/lib/to-file.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var stringify = require_stringify();
    var utils = require_utils();
    module2.exports = function(file) {
      if (typeOf(file) !== "object") {
        file = { content: file };
      }
      if (typeOf(file.data) !== "object") {
        file.data = {};
      }
      if (file.contents && file.content == null) {
        file.content = file.contents;
      }
      utils.define(file, "orig", utils.toBuffer(file.content));
      utils.define(file, "language", file.language || "");
      utils.define(file, "matter", file.matter || "");
      utils.define(file, "stringify", function(data, options2) {
        if (options2 && options2.language) {
          file.language = options2.language;
        }
        return stringify(file, data, options2);
      });
      file.content = utils.toString(file.content);
      file.isEmpty = false;
      file.excerpt = "";
      return file;
    };
  }
});

// node_modules/gray-matter/lib/parse.js
var require_parse = __commonJS({
  "node_modules/gray-matter/lib/parse.js"(exports2, module2) {
    "use strict";
    var getEngine = require_engine();
    var defaults = require_defaults();
    module2.exports = function(language, str2, options2) {
      const opts = defaults(options2);
      const engine = getEngine(language, opts);
      if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
      }
      return engine.parse(str2, opts);
    };
  }
});

// node_modules/gray-matter/index.js
var require_gray_matter = __commonJS({
  "node_modules/gray-matter/index.js"(exports2, module2) {
    "use strict";
    var fs = require_fs();
    var sections = require_section_matter();
    var defaults = require_defaults();
    var stringify = require_stringify();
    var excerpt = require_excerpt();
    var engines2 = require_engines();
    var toFile = require_to_file();
    var parse2 = require_parse();
    var utils = require_utils();
    function matter3(input, options2) {
      if (input === "") {
        return { data: {}, content: input, excerpt: "", orig: input };
      }
      let file = toFile(input);
      const cached = matter3.cache[file.content];
      if (!options2) {
        if (cached) {
          file = Object.assign({}, cached);
          file.orig = cached.orig;
          return file;
        }
        matter3.cache[file.content] = file;
      }
      return parseMatter(file, options2);
    }
    function parseMatter(file, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      const close = "\n" + opts.delimiters[1];
      let str2 = file.content;
      if (opts.language) {
        file.language = opts.language;
      }
      const openLen = open.length;
      if (!utils.startsWith(str2, open, openLen)) {
        excerpt(file, opts);
        return file;
      }
      if (str2.charAt(openLen) === open.slice(-1)) {
        return file;
      }
      str2 = str2.slice(openLen);
      const len = str2.length;
      const language = matter3.language(str2, opts);
      if (language.name) {
        file.language = language.name;
        str2 = str2.slice(language.raw.length);
      }
      let closeIndex = str2.indexOf(close);
      if (closeIndex === -1) {
        closeIndex = len;
      }
      file.matter = str2.slice(0, closeIndex);
      const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
      if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
      } else {
        file.data = parse2(file.language, file.matter, opts);
      }
      if (closeIndex === len) {
        file.content = "";
      } else {
        file.content = str2.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
          file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
          file.content = file.content.slice(1);
        }
      }
      excerpt(file, opts);
      if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
      }
      return file;
    }
    matter3.engines = engines2;
    matter3.stringify = function(file, data, options2) {
      if (typeof file === "string")
        file = matter3(file, options2);
      return stringify(file, data, options2);
    };
    matter3.read = function(filepath, options2) {
      const str2 = fs.readFileSync(filepath, "utf8");
      const file = matter3(str2, options2);
      file.path = filepath;
      return file;
    };
    matter3.test = function(str2, options2) {
      return utils.startsWith(str2, defaults(options2).delimiters[0]);
    };
    matter3.language = function(str2, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      if (matter3.test(str2)) {
        str2 = str2.slice(open.length);
      }
      const language = str2.slice(0, str2.search(/\r?\n/));
      return {
        raw: language,
        name: language ? language.trim() : ""
      };
    };
    matter3.cache = {};
    matter3.clearCache = function() {
      matter3.cache = {};
    };
    module2.exports = matter3;
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => CloudflareSyncPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");
var import_gray_matter2 = __toESM(require_gray_matter());

// src/settings.ts
var import_obsidian = require("obsidian");
var CloudflareSyncSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Cloudflare Sync" });
    containerEl.createEl("h3", { text: "Connection" });
    new import_obsidian.Setting(containerEl).setName("Server URL").setDesc("Your Cloudflare Workers URL (e.g., https://mysite.your-account.workers.dev)").addText(
      (text) => text.setPlaceholder("https://mysite.your-account.workers.dev").setValue(this.plugin.settings.serverUrl).onChange(async (value) => {
        this.plugin.settings.serverUrl = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("API Token").setDesc("Your API token for authentication").addText((text) => {
      text.inputEl.type = "password";
      return text.setPlaceholder("Enter your API token").setValue(this.plugin.settings.apiToken).onChange(async (value) => {
        this.plugin.settings.apiToken = value;
        await this.plugin.saveSettings();
      });
    });
    containerEl.createEl("h3", { text: "Sync Settings" });
    new import_obsidian.Setting(containerEl).setName("Auto Sync").setDesc("Automatically sync files when they are modified (with debounce)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoSync).onChange(async (value) => {
        this.plugin.settings.autoSync = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Auto Sync Interval").setDesc("How often to run a full sync (in minutes). Set to 0 to disable periodic sync.").addSlider(
      (slider) => slider.setLimits(0, 60, 1).setValue(this.plugin.settings.autoSyncInterval).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.autoSyncInterval = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Debounce Delay").setDesc("Seconds to wait after a file change before syncing (prevents excessive uploads while typing)").addSlider(
      (slider) => slider.setLimits(5, 120, 5).setValue(this.plugin.settings.debounceDelay).setDynamicTooltip().onChange(async (value) => {
        this.plugin.settings.debounceDelay = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Sync on Startup").setDesc("Automatically run a full sync when Obsidian starts").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.syncOnStartup).onChange(async (value) => {
        this.plugin.settings.syncOnStartup = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Conflict Resolution" });
    new import_obsidian.Setting(containerEl).setName("Conflict Strategy").setDesc("How to handle conflicts when both local and remote have changed").addDropdown(
      (dropdown) => dropdown.addOption("ask", "Ask me every time").addOption("local-wins", "Local always wins").addOption("remote-wins", "Remote always wins").setValue(this.plugin.settings.conflictStrategy).onChange(async (value) => {
        this.plugin.settings.conflictStrategy = value;
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Content Settings" });
    new import_obsidian.Setting(containerEl).setName("Auto Frontmatter").setDesc("Automatically generate frontmatter for new markdown files").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoFrontmatter).onChange(async (value) => {
        this.plugin.settings.autoFrontmatter = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Sync All Files").setDesc("Sync all files in the vault (not just markdown)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.syncAllFiles).onChange(async (value) => {
        this.plugin.settings.syncAllFiles = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Exclude Folders").setDesc("Comma-separated list of folders to exclude from sync").addText(
      (text) => text.setPlaceholder("_templates, .trash").setValue((this.plugin.settings.excludeFolders || []).join(", ")).onChange(async (value) => {
        this.plugin.settings.excludeFolders = value.split(",").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Publish Settings" });
    new import_obsidian.Setting(containerEl).setName("Publish Behavior").setDesc("Which notes should be published?").addDropdown(
      (dropdown) => dropdown.addOption("frontmatter-only", "Only notes with publish: true in frontmatter").addOption("all-notes", "All notes (except those with publish: false)").setValue(this.plugin.settings.publishBehavior || "frontmatter-only").onChange(async (value) => {
        this.plugin.settings.publishBehavior = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Attachments Path Prefix").setDesc("Remote path prefix for uploaded attachments (e.g., attachments or images)").addText(
      (text) => text.setPlaceholder("attachments").setValue(this.plugin.settings.attachmentsPathPrefix || "attachments").onChange(async (value) => {
        this.plugin.settings.attachmentsPathPrefix = value || "attachments";
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Instructions" });
    const instructions = containerEl.createEl("div", { cls: "markdown-preview-view" });
    instructions.innerHTML = `
      <h4>Server Setup:</h4>
      <ol>
        <li>Deploy the Cloudflare Workers site</li>
        <li>Set <code>API_TOKEN</code> secret: <code>npx wrangler secret put API_TOKEN</code></li>
        <li>Copy the Workers URL and token to settings above</li>
      </ol>
      <h4>Sync Behavior:</h4>
      <ul>
        <li><strong>Auto Sync</strong> \u2014 Files sync after a debounce delay when modified</li>
        <li><strong>Periodic Sync</strong> \u2014 Full sync runs at the configured interval</li>
        <li><strong>Startup Sync</strong> \u2014 Full sync on Obsidian launch</li>
        <li><strong>Conflict Detection</strong> \u2014 Three-way hash comparison detects conflicts</li>
      </ul>
      <h4>Frontmatter fields:</h4>
      <ul>
        <li><code>title</code> - Post title</li>
        <li><code>slug</code> - URL-friendly identifier</li>
        <li><code>date</code> - Publication date (ISO format)</li>
        <li><code>summary</code> - Post summary/excerpt</li>
        <li><code>tags</code> - Array or comma-separated tags</li>
        <li><code>publish</code> - Whether to make public (default: false)</li>
        <li><code>coverImage</code> - Cover image filename</li>
      </ul>
      <h4>Commands:</h4>
      <ul>
        <li><strong>Full Sync</strong> \u2014 Bidirectional sync with conflict detection</li>
        <li><strong>Sync to Cloudflare</strong> \u2014 Upload all notes (one-way)</li>
        <li><strong>Download from Cloudflare</strong> \u2014 Download all notes (one-way)</li>
        <li><strong>Sync current file</strong> \u2014 Upload current file</li>
        <li><strong>Resolve conflicts</strong> \u2014 Open conflict resolution dialog</li>
        <li><strong>Show sync status</strong> \u2014 View sync statistics</li>
      </ul>
    `;
  }
};

// src/sync-engine.ts
var import_obsidian2 = require("obsidian");
var SyncEngine = class {
  constructor(plugin) {
    this.syncStates = {};
    this.autoSyncTimer = null;
    this.debounceTimers = /* @__PURE__ */ new Map();
    this._stats = {
      lastSyncTime: null,
      totalFiles: 0,
      syncedFiles: 0,
      pendingUpload: 0,
      pendingDownload: 0,
      conflicts: 0,
      errors: 0,
      isSyncing: false
    };
    this._conflicts = [];
    this._isSyncing = false;
    // Callbacks
    this.onStatsChanged = null;
    this.onConflictsFound = null;
    this.onSyncError = null;
    this.onSyncComplete = null;
    this.plugin = plugin;
  }
  get stats() {
    return { ...this._stats };
  }
  get conflicts() {
    return [...this._conflicts];
  }
  get isSyncing() {
    return this._isSyncing;
  }
  // ========== State Persistence ==========
  async loadSyncState() {
    const data = await this.plugin.loadData();
    this.syncStates = (data == null ? void 0 : data._syncStates) || {};
  }
  async saveSyncState() {
    const data = await this.plugin.loadData() || {};
    data._syncStates = this.syncStates;
    await this.plugin.saveData(data);
  }
  // ========== Hash Computation ==========
  async computeLocalHash(content) {
    const data = typeof content === "string" ? new TextEncoder().encode(content) : new Uint8Array(content);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  // ========== Auto Sync Scheduling ==========
  startAutoSync() {
    this.stopAutoSync();
    const intervalMs = (this.plugin.settings.autoSyncInterval || 5) * 60 * 1e3;
    console.log(`[SyncEngine] Auto sync started, interval: ${intervalMs / 1e3}s`);
    this.autoSyncTimer = setInterval(() => {
      if (!this._isSyncing) {
        console.log("[SyncEngine] Auto sync triggered");
        this.fullSync().catch((err) => {
          console.error("[SyncEngine] Auto sync failed:", err);
        });
      }
    }, intervalMs);
  }
  stopAutoSync() {
    if (this.autoSyncTimer) {
      clearInterval(this.autoSyncTimer);
      this.autoSyncTimer = null;
      console.log("[SyncEngine] Auto sync stopped");
    }
  }
  // ========== Debounced File Sync ==========
  scheduleFileSync(file) {
    const existingTimer = this.debounceTimers.get(file.path);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }
    const delayMs = (this.plugin.settings.debounceDelay || 30) * 1e3;
    const timer = setTimeout(async () => {
      this.debounceTimers.delete(file.path);
      try {
        await this.syncSingleFile(file);
      } catch (err) {
        console.error(`[SyncEngine] Debounced sync failed for ${file.path}:`, err.message);
      }
    }, delayMs);
    this.debounceTimers.set(file.path, timer);
    this.updatePendingStats();
  }
  // ========== Core Sync Logic ==========
  async fullSync() {
    var _a, _b, _c;
    if (this._isSyncing) {
      console.log("[SyncEngine] Sync already in progress, skipping");
      return;
    }
    this._isSyncing = true;
    this._stats.isSyncing = true;
    this._conflicts = [];
    this.emitStatsChanged();
    try {
      console.log("[SyncEngine] Starting full sync...");
      const localFiles = this.plugin.app.vault.getFiles().filter(
        (f) => this.plugin.shouldSyncFile(f.path)
      );
      const localFileMap = /* @__PURE__ */ new Map();
      for (const file of localFiles) {
        const remoteKey = this.plugin.getRemoteKey(file);
        const isMarkdown = file.path.endsWith(".md");
        const content = isMarkdown ? await this.plugin.app.vault.read(file) : await this.plugin.app.vault.readBinary(file);
        const hash = await this.computeLocalHash(content);
        localFileMap.set(remoteKey, { file, hash });
      }
      const remoteMetas = await this.fetchRemoteMetas("");
      const remoteMetaMap = /* @__PURE__ */ new Map();
      for (const meta of remoteMetas) {
        remoteMetaMap.set(meta.key, meta);
      }
      const allKeys = /* @__PURE__ */ new Set([...localFileMap.keys(), ...remoteMetaMap.keys()]);
      const toUpload = [];
      const toDownload = [];
      const conflicts = [];
      let syncedCount = 0;
      for (const key of allKeys) {
        const local = localFileMap.get(key);
        const remote = remoteMetaMap.get(key);
        const localPath = key;
        const savedState = this.syncStates[localPath];
        const localHash = (local == null ? void 0 : local.hash) || null;
        const remoteHash = (remote == null ? void 0 : remote.contentHash) || null;
        const lastSyncedHash = (savedState == null ? void 0 : savedState.lastSyncedHash) || null;
        if (localHash && !remoteHash) {
          if (lastSyncedHash) {
            toUpload.push({ file: local.file, key, hash: localHash });
          } else {
            toUpload.push({ file: local.file, key, hash: localHash });
          }
        } else if (!localHash && remoteHash) {
          if (lastSyncedHash) {
            toDownload.push({ key });
          } else {
            toDownload.push({ key });
          }
        } else if (localHash && remoteHash) {
          if (localHash === remoteHash) {
            syncedCount++;
            this.syncStates[localPath] = {
              remoteKey: key,
              lastSyncedHash: localHash,
              lastSyncedTime: Date.now()
            };
          } else if (!lastSyncedHash) {
            conflicts.push(await this.buildConflictInfo(local.file, key, localHash, remoteHash));
          } else if (localHash !== lastSyncedHash && remoteHash === lastSyncedHash) {
            toUpload.push({ file: local.file, key, hash: localHash });
          } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
            toDownload.push({ key });
          } else {
            conflicts.push(await this.buildConflictInfo(local.file, key, localHash, remoteHash));
          }
        }
      }
      console.log(
        `[SyncEngine] Analysis: ${toUpload.length} upload, ${toDownload.length} download, ${conflicts.length} conflicts, ${syncedCount} synced`
      );
      for (const item of toUpload) {
        try {
          await this.plugin.syncFileToRemote(item.file);
          const localPath = item.key;
          this.syncStates[localPath] = {
            remoteKey: item.key,
            lastSyncedHash: item.hash,
            lastSyncedTime: Date.now()
          };
          syncedCount++;
        } catch (err) {
          console.error(`[SyncEngine] Upload failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }
      for (const item of toDownload) {
        try {
          const data = await this.downloadAndSave(item.key);
          if (data) {
            const localPath = item.key;
            this.syncStates[localPath] = {
              remoteKey: item.key,
              lastSyncedHash: data.contentHash || "",
              lastSyncedTime: Date.now()
            };
            syncedCount++;
          }
        } catch (err) {
          console.error(`[SyncEngine] Download failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }
      this._conflicts = conflicts;
      const strategy = this.plugin.settings.conflictStrategy || "ask";
      if (conflicts.length > 0) {
        if (strategy === "ask") {
          (_a = this.onConflictsFound) == null ? void 0 : _a.call(this, conflicts);
        } else {
          for (const conflict of conflicts) {
            await this.resolveConflict(
              conflict,
              strategy === "local-wins" ? "local" : "remote"
            );
          }
          this._conflicts = [];
        }
      }
      this._stats = {
        lastSyncTime: Date.now(),
        totalFiles: allKeys.size,
        syncedFiles: syncedCount,
        pendingUpload: 0,
        pendingDownload: 0,
        conflicts: this._conflicts.length,
        errors: this._stats.errors,
        isSyncing: false
      };
      await this.saveSyncState();
      (_b = this.onSyncComplete) == null ? void 0 : _b.call(this);
    } catch (err) {
      console.error("[SyncEngine] Full sync failed:", err);
      this._stats.errors++;
      this._stats.isSyncing = false;
      (_c = this.onSyncError) == null ? void 0 : _c.call(this, err.message);
    } finally {
      this._isSyncing = false;
      this._stats.isSyncing = false;
      this.emitStatsChanged();
    }
  }
  async syncSingleFile(file) {
    var _a;
    if (this._isSyncing)
      return;
    try {
      const remoteKey = this.plugin.getRemoteKey(file);
      const localPath = file.path;
      const isMarkdown = file.path.endsWith(".md");
      const content = isMarkdown ? await this.plugin.app.vault.read(file) : await this.plugin.app.vault.readBinary(file);
      const localHash = await this.computeLocalHash(content);
      let remoteHash = null;
      try {
        const meta = await this.plugin.api(
          `/api/sync/meta/${remoteKey}`
        );
        remoteHash = meta.data.contentHash || null;
      } catch (e) {
      }
      const savedState = this.syncStates[localPath];
      const lastSyncedHash = (savedState == null ? void 0 : savedState.lastSyncedHash) || null;
      if (localHash === remoteHash) {
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now()
        };
      } else if (!remoteHash || localHash !== lastSyncedHash && remoteHash === lastSyncedHash) {
        await this.plugin.syncFileToRemote(file);
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now()
        };
      } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
        const data = await this.downloadAndSave(remoteKey);
        if (data) {
          this.syncStates[localPath] = {
            remoteKey,
            lastSyncedHash: data.contentHash || remoteHash,
            lastSyncedTime: Date.now()
          };
        }
      } else {
        const conflict = await this.buildConflictInfo(file, remoteKey, localHash, remoteHash);
        this._conflicts.push(conflict);
        this._stats.conflicts = this._conflicts.length;
        (_a = this.onConflictsFound) == null ? void 0 : _a.call(this, [conflict]);
      }
      await this.saveSyncState();
      this.updatePendingStats();
    } catch (err) {
      console.error(`[SyncEngine] Single file sync failed for ${file.path}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }
  // ========== Conflict Resolution ==========
  async resolveConflict(conflict, resolution) {
    const localPath = conflict.localPath;
    const file = this.plugin.app.vault.getAbstractFileByPath(localPath);
    try {
      switch (resolution) {
        case "local": {
          if (file instanceof import_obsidian2.TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
        case "remote": {
          const data = await this.downloadAndSave(conflict.remoteKey);
          if (data) {
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: data.contentHash || conflict.remoteHash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
        case "both": {
          const conflictPath = localPath.replace(/\.md$/, `.conflict-${Date.now()}.md`);
          await this.plugin.app.vault.create(conflictPath, conflict.remoteContent);
          if (file instanceof import_obsidian2.TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now()
            };
          }
          break;
        }
      }
      this._conflicts = this._conflicts.filter((c) => c.localPath !== localPath);
      this._stats.conflicts = this._conflicts.length;
      await this.saveSyncState();
      this.emitStatsChanged();
    } catch (err) {
      console.error(`[SyncEngine] Conflict resolution failed for ${localPath}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }
  async resolveAllConflicts(resolution) {
    const conflictsToResolve = [...this._conflicts];
    for (const conflict of conflictsToResolve) {
      await this.resolveConflict(conflict, resolution);
    }
  }
  // ========== Helpers ==========
  async fetchRemoteMetas(prefix) {
    try {
      const res = await this.plugin.api("/api/sync/batch-meta", {
        method: "POST",
        body: JSON.stringify({ prefix })
      });
      return res.data.files;
    } catch (err) {
      console.error("[SyncEngine] Failed to fetch remote metas:", err.message);
      return [];
    }
  }
  async downloadAndSave(remoteKey) {
    try {
      const res = await this.plugin.api(`/api/sync/download/${remoteKey}`);
      const data = res.data;
      const localPath = data.key;
      const isMarkdown = localPath.endsWith(".md");
      const existingFile = this.plugin.app.vault.getAbstractFileByPath(localPath);
      if (existingFile instanceof import_obsidian2.TFile) {
        if (isMarkdown || data.encoding === "utf-8") {
          await this.plugin.app.vault.modify(existingFile, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.modifyBinary(existingFile, buffer);
        }
        console.log(`[SyncEngine] Updated ${localPath}`);
      } else {
        const folderPath = localPath.substring(0, localPath.lastIndexOf("/"));
        if (folderPath) {
          await this.plugin.app.vault.createFolder(folderPath).catch(() => {
          });
        }
        if (isMarkdown || data.encoding === "utf-8") {
          await this.plugin.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[SyncEngine] Created ${localPath}`);
      }
      return { contentHash: data.contentHash };
    } catch (err) {
      console.error(`[SyncEngine] Download failed for ${remoteKey}:`, err.message);
      return null;
    }
  }
  async buildConflictInfo(file, remoteKey, localHash, remoteHash) {
    const localContent = await this.plugin.app.vault.read(file);
    let remoteContent = "";
    try {
      const res = await this.plugin.api(`/api/sync/download/${remoteKey}`);
      remoteContent = res.data.content;
    } catch (e) {
      remoteContent = "(Failed to fetch remote content)";
    }
    return {
      localPath: file.path,
      remoteKey,
      localContent,
      remoteContent,
      localHash,
      remoteHash
    };
  }
  updatePendingStats() {
    this._stats.pendingUpload = this.debounceTimers.size;
    this.emitStatsChanged();
  }
  emitStatsChanged() {
    var _a;
    (_a = this.onStatsChanged) == null ? void 0 : _a.call(this, this.stats);
  }
  // ========== Cleanup ==========
  destroy() {
    this.stopAutoSync();
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
  }
};

// src/status-bar.ts
var import_obsidian3 = require("obsidian");
var SyncStatusBar = class {
  constructor(plugin, opts) {
    this._stats = null;
    this._conflicts = [];
    this.onShowConflicts = null;
    this.onTriggerSync = null;
    this.plugin = plugin;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;
    this.statusBarEl = plugin.addStatusBarItem();
    this.statusBarEl.addClass("cf-sync-status");
    this.statusBarEl.setAttribute("aria-label", "Cloudflare Sync Status");
    this.iconEl = this.statusBarEl.createEl("span", { cls: "cf-status-icon" });
    this.textEl = this.statusBarEl.createEl("span", { cls: "cf-status-text" });
    this.statusBarEl.addEventListener("click", () => {
      this.showDetailModal();
    });
    this.addStyles();
    this.render();
  }
  updateStats(stats) {
    this._stats = stats;
    this.render();
  }
  updateConflicts(conflicts) {
    this._conflicts = conflicts;
    this.render();
  }
  render() {
    const stats = this._stats;
    if (!stats) {
      (0, import_obsidian3.setIcon)(this.iconEl, "cloud");
      this.textEl.textContent = "Not synced";
      this.statusBarEl.className = "cf-sync-status cf-status-idle";
      return;
    }
    if (stats.isSyncing) {
      (0, import_obsidian3.setIcon)(this.iconEl, "refresh-cw");
      this.textEl.textContent = "Syncing...";
      this.statusBarEl.className = "cf-sync-status cf-status-syncing";
      this.iconEl.addClass("cf-spin");
      return;
    }
    this.iconEl.removeClass("cf-spin");
    if (stats.conflicts > 0) {
      (0, import_obsidian3.setIcon)(this.iconEl, "alert-triangle");
      this.textEl.textContent = `${stats.conflicts} conflict${stats.conflicts > 1 ? "s" : ""}`;
      this.statusBarEl.className = "cf-sync-status cf-status-conflict";
      return;
    }
    if (stats.errors > 0) {
      (0, import_obsidian3.setIcon)(this.iconEl, "x-circle");
      this.textEl.textContent = `${stats.errors} error${stats.errors > 1 ? "s" : ""}`;
      this.statusBarEl.className = "cf-sync-status cf-status-error";
      return;
    }
    (0, import_obsidian3.setIcon)(this.iconEl, "check-circle");
    const timeAgo = stats.lastSyncTime ? this.formatTimeAgo(stats.lastSyncTime) : "never";
    const parts = [timeAgo];
    if (stats.pendingUpload > 0)
      parts.push(`${stats.pendingUpload} pending`);
    this.textEl.textContent = parts.join(" \xB7 ");
    this.statusBarEl.className = "cf-sync-status cf-status-synced";
  }
  formatTimeAgo(timestamp) {
    const diff = Date.now() - timestamp;
    const seconds = Math.floor(diff / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (seconds < 60)
      return "just now";
    if (minutes < 60)
      return `${minutes}m ago`;
    if (hours < 24)
      return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }
  showDetailModal() {
    new SyncDetailModal(this.plugin.app, this._stats, this._conflicts, {
      onShowConflicts: this.onShowConflicts,
      onTriggerSync: this.onTriggerSync
    }).open();
  }
  addStyles() {
    if (document.querySelector("#cf-status-bar-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-status-bar-styles";
    style.textContent = `
      .cf-sync-status {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        padding: 0 6px;
        border-radius: 4px;
        transition: background 0.15s ease;
        font-size: 0.85em;
      }
      .cf-sync-status:hover {
        background: var(--background-modifier-hover);
      }
      .cf-status-icon {
        display: flex;
        align-items: center;
        width: 14px;
        height: 14px;
      }
      .cf-status-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-status-text {
        white-space: nowrap;
      }
      .cf-status-idle .cf-status-icon { color: var(--text-muted); }
      .cf-status-syncing .cf-status-icon { color: var(--text-accent); }
      .cf-status-synced .cf-status-icon { color: var(--text-success, #4ade80); }
      .cf-status-conflict .cf-status-icon { color: var(--text-warning, #facc15); }
      .cf-status-error .cf-status-icon { color: var(--text-error, #f87171); }
      .cf-spin {
        animation: cf-spin 1s linear infinite;
      }
      @keyframes cf-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
  destroy() {
    this.statusBarEl.remove();
  }
};
var SyncDetailModal = class extends import_obsidian3.Modal {
  constructor(app, stats, conflicts, opts) {
    super(app);
    this.stats = stats;
    this.conflicts = conflicts;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("cf-sync-detail-modal");
    this.addStyles();
    const header = contentEl.createEl("div", { cls: "cf-detail-header" });
    const titleRow = header.createEl("div", { cls: "cf-detail-title-row" });
    const iconEl = titleRow.createEl("span", { cls: "cf-detail-icon" });
    (0, import_obsidian3.setIcon)(iconEl, "cloud");
    titleRow.createEl("h2", { text: "Sync Status", cls: "cf-detail-title" });
    const stats = this.stats;
    if (!stats) {
      contentEl.createEl("div", {
        cls: "cf-detail-empty",
        text: "No sync data available. Run a sync first."
      });
    } else {
      const grid = contentEl.createEl("div", { cls: "cf-detail-grid" });
      this.addStatCard(grid, "clock", "Last Sync", stats.lastSyncTime ? this.formatTime(stats.lastSyncTime) : "Never");
      this.addStatCard(grid, "files", "Total Files", String(stats.totalFiles));
      this.addStatCard(grid, "check-circle", "Synced", String(stats.syncedFiles));
      this.addStatCard(grid, "upload", "Pending \u2191", String(stats.pendingUpload));
      this.addStatCard(grid, "download", "Pending \u2193", String(stats.pendingDownload));
      this.addStatCard(grid, "alert-triangle", "Conflicts", String(stats.conflicts), stats.conflicts > 0 ? "cf-stat-warning" : "");
      this.addStatCard(grid, "x-circle", "Errors", String(stats.errors), stats.errors > 0 ? "cf-stat-error" : "");
      if (this.conflicts.length > 0) {
        const conflictSection = contentEl.createEl("div", {
          cls: "cf-detail-section"
        });
        conflictSection.createEl("h3", { text: "Conflicting Files" });
        const conflictList = conflictSection.createEl("ul", {
          cls: "cf-conflict-list"
        });
        for (const c of this.conflicts) {
          const li = conflictList.createEl("li", { cls: "cf-conflict-item" });
          const fileIcon = li.createEl("span", { cls: "cf-item-icon" });
          (0, import_obsidian3.setIcon)(fileIcon, "file-warning");
          li.createEl("span", { text: c.localPath, cls: "cf-item-path" });
        }
        if (this.onShowConflicts) {
          const resolveBtn = conflictSection.createEl("button", {
            cls: "cf-btn cf-btn-primary"
          });
          const btnIcon = resolveBtn.createEl("span", { cls: "cf-btn-icon" });
          (0, import_obsidian3.setIcon)(btnIcon, "alert-triangle");
          resolveBtn.createEl("span", { text: "Resolve Conflicts" });
          resolveBtn.addEventListener("click", () => {
            var _a;
            this.close();
            (_a = this.onShowConflicts) == null ? void 0 : _a.call(this);
          });
        }
      }
    }
    const actions = contentEl.createEl("div", { cls: "cf-detail-actions" });
    if (this.onTriggerSync) {
      const syncBtn = actions.createEl("button", { cls: "cf-btn cf-btn-primary" });
      const syncIcon = syncBtn.createEl("span", { cls: "cf-btn-icon" });
      (0, import_obsidian3.setIcon)(syncIcon, "refresh-cw");
      syncBtn.createEl("span", { text: "Sync Now" });
      syncBtn.addEventListener("click", () => {
        var _a;
        this.close();
        (_a = this.onTriggerSync) == null ? void 0 : _a.call(this);
      });
    }
    const closeBtn = actions.createEl("button", {
      cls: "cf-btn",
      text: "Close"
    });
    closeBtn.addEventListener("click", () => this.close());
  }
  onClose() {
    this.contentEl.empty();
  }
  addStatCard(container, icon, label, value, extraClass) {
    const card = container.createEl("div", {
      cls: `cf-stat-card ${extraClass || ""}`
    });
    const iconEl = card.createEl("div", { cls: "cf-stat-icon" });
    (0, import_obsidian3.setIcon)(iconEl, icon);
    card.createEl("div", { cls: "cf-stat-value", text: value });
    card.createEl("div", { cls: "cf-stat-label", text: label });
  }
  formatTime(timestamp) {
    return new Date(timestamp).toLocaleString();
  }
  addStyles() {
    if (document.querySelector("#cf-detail-modal-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-detail-modal-styles";
    style.textContent = `
      .cf-sync-detail-modal {
        max-width: 600px;
      }
      .cf-detail-header {
        padding: 16px 20px 12px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-detail-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-detail-icon {
        color: var(--text-accent);
      }
      .cf-detail-title {
        margin: 0;
        font-size: 1.15em;
      }
      .cf-detail-empty {
        padding: 30px 20px;
        text-align: center;
        color: var(--text-muted);
      }
      .cf-detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        padding: 16px 20px;
      }
      .cf-stat-card {
        background: var(--background-secondary);
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        border: 1px solid var(--background-modifier-border);
      }
      .cf-stat-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
        color: var(--text-muted);
      }
      .cf-stat-icon svg {
        width: 16px;
        height: 16px;
      }
      .cf-stat-value {
        font-size: 1.3em;
        font-weight: 700;
        line-height: 1.2;
      }
      .cf-stat-label {
        font-size: 0.75em;
        color: var(--text-muted);
        margin-top: 2px;
      }
      .cf-stat-warning .cf-stat-value {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-warning .cf-stat-icon {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-error .cf-stat-value {
        color: var(--text-error, #f87171);
      }
      .cf-stat-error .cf-stat-icon {
        color: var(--text-error, #f87171);
      }
      .cf-detail-section {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-detail-section h3 {
        margin: 0 0 8px;
        font-size: 0.95em;
      }
      .cf-conflict-list {
        list-style: none;
        padding: 0;
        margin: 0 0 10px;
      }
      .cf-conflict-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        font-size: 0.85em;
      }
      .cf-item-icon {
        display: flex;
        color: var(--text-warning, #facc15);
      }
      .cf-item-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-item-path {
        font-family: var(--font-monospace);
      }
      .cf-detail-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
        transition: all 0.15s ease;
      }
      .cf-btn:hover {
        background: var(--background-modifier-hover);
      }
      .cf-btn-primary {
        background: var(--interactive-accent);
        color: var(--text-on-accent);
        border-color: var(--interactive-accent);
      }
      .cf-btn-primary:hover {
        opacity: 0.9;
        background: var(--interactive-accent-hover, var(--interactive-accent));
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
    `;
    document.head.appendChild(style);
  }
};

// src/conflict-modal.ts
var import_obsidian4 = require("obsidian");
var ConflictModal = class extends import_obsidian4.Modal {
  constructor(app, conflicts, onResolve, onResolveAll) {
    super(app);
    this.currentIndex = 0;
    this.conflicts = conflicts;
    this.onResolve = onResolve;
    this.onResolveAll = onResolveAll;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass("cf-sync-conflict-modal");
    this.renderCurrentConflict();
  }
  onClose() {
    this.contentEl.empty();
  }
  renderCurrentConflict() {
    const { contentEl } = this;
    contentEl.empty();
    if (this.conflicts.length === 0) {
      contentEl.createEl("div", {
        cls: "cf-conflict-empty",
        text: "\u2705 All conflicts resolved!"
      });
      setTimeout(() => this.close(), 1500);
      return;
    }
    const conflict = this.conflicts[this.currentIndex];
    if (!conflict) {
      this.close();
      return;
    }
    this.addStyles();
    const header = contentEl.createEl("div", { cls: "cf-conflict-header" });
    const titleRow = header.createEl("div", { cls: "cf-conflict-title-row" });
    const iconEl = titleRow.createEl("span", { cls: "cf-conflict-icon" });
    (0, import_obsidian4.setIcon)(iconEl, "alert-triangle");
    titleRow.createEl("h2", {
      text: "Sync Conflict",
      cls: "cf-conflict-title"
    });
    header.createEl("div", {
      cls: "cf-conflict-subtitle",
      text: `${this.currentIndex + 1} of ${this.conflicts.length} conflicts`
    });
    header.createEl("div", {
      cls: "cf-conflict-filepath",
      text: conflict.localPath
    });
    const diffContainer = contentEl.createEl("div", { cls: "cf-conflict-diff" });
    const localPanel = diffContainer.createEl("div", { cls: "cf-conflict-panel cf-local" });
    const localHeader = localPanel.createEl("div", { cls: "cf-panel-header" });
    const localIconEl = localHeader.createEl("span", { cls: "cf-panel-icon" });
    (0, import_obsidian4.setIcon)(localIconEl, "monitor");
    localHeader.createEl("span", { text: "Local Version" });
    localHeader.createEl("span", { cls: "cf-hash", text: conflict.localHash.substring(0, 8) });
    const localContent = localPanel.createEl("div", { cls: "cf-panel-content" });
    this.renderDiffContent(localContent, conflict.localContent, conflict.remoteContent, "local");
    const remotePanel = diffContainer.createEl("div", { cls: "cf-conflict-panel cf-remote" });
    const remoteHeader = remotePanel.createEl("div", { cls: "cf-panel-header" });
    const remoteIconEl = remoteHeader.createEl("span", { cls: "cf-panel-icon" });
    (0, import_obsidian4.setIcon)(remoteIconEl, "cloud");
    remoteHeader.createEl("span", { text: "Remote Version" });
    remoteHeader.createEl("span", { cls: "cf-hash", text: conflict.remoteHash.substring(0, 8) });
    const remoteContent = remotePanel.createEl("div", { cls: "cf-panel-content" });
    this.renderDiffContent(remoteContent, conflict.remoteContent, conflict.localContent, "remote");
    const actions = contentEl.createEl("div", { cls: "cf-conflict-actions" });
    const individualActions = actions.createEl("div", {
      cls: "cf-individual-actions"
    });
    const keepLocalBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-local"
    });
    const localBtnIcon = keepLocalBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(localBtnIcon, "monitor");
    keepLocalBtn.createEl("span", { text: "Keep Local" });
    keepLocalBtn.addEventListener("click", () => this.handleResolve(conflict, "local"));
    const keepRemoteBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-remote"
    });
    const remoteBtnIcon = keepRemoteBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(remoteBtnIcon, "cloud");
    keepRemoteBtn.createEl("span", { text: "Keep Remote" });
    keepRemoteBtn.addEventListener("click", () => this.handleResolve(conflict, "remote"));
    const keepBothBtn = individualActions.createEl("button", {
      cls: "cf-btn cf-btn-both"
    });
    const bothBtnIcon = keepBothBtn.createEl("span", { cls: "cf-btn-icon" });
    (0, import_obsidian4.setIcon)(bothBtnIcon, "copy");
    keepBothBtn.createEl("span", { text: "Keep Both" });
    keepBothBtn.addEventListener("click", () => this.handleResolve(conflict, "both"));
    if (this.conflicts.length > 1) {
      const batchActions = actions.createEl("div", { cls: "cf-batch-actions" });
      batchActions.createEl("span", {
        cls: "cf-batch-label",
        text: "Apply to all:"
      });
      const allLocalBtn = batchActions.createEl("button", {
        cls: "cf-btn cf-btn-small cf-btn-local",
        text: "All Local"
      });
      allLocalBtn.addEventListener("click", () => this.handleResolveAll("local"));
      const allRemoteBtn = batchActions.createEl("button", {
        cls: "cf-btn cf-btn-small cf-btn-remote",
        text: "All Remote"
      });
      allRemoteBtn.addEventListener("click", () => this.handleResolveAll("remote"));
    }
    if (this.conflicts.length > 1) {
      const nav = actions.createEl("div", { cls: "cf-conflict-nav" });
      const prevBtn = nav.createEl("button", { cls: "cf-btn cf-btn-nav" });
      (0, import_obsidian4.setIcon)(prevBtn, "chevron-left");
      prevBtn.disabled = this.currentIndex === 0;
      prevBtn.addEventListener("click", () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderCurrentConflict();
        }
      });
      nav.createEl("span", {
        text: `${this.currentIndex + 1} / ${this.conflicts.length}`,
        cls: "cf-nav-text"
      });
      const nextBtn = nav.createEl("button", { cls: "cf-btn cf-btn-nav" });
      (0, import_obsidian4.setIcon)(nextBtn, "chevron-right");
      nextBtn.disabled = this.currentIndex >= this.conflicts.length - 1;
      nextBtn.addEventListener("click", () => {
        if (this.currentIndex < this.conflicts.length - 1) {
          this.currentIndex++;
          this.renderCurrentConflict();
        }
      });
    }
  }
  renderDiffContent(container, content, otherContent, side) {
    const lines = content.split("\n");
    const otherLines = otherContent.split("\n");
    const pre = container.createEl("pre", { cls: "cf-diff-pre" });
    for (let i = 0; i < lines.length; i++) {
      const lineEl = pre.createEl("div", { cls: "cf-diff-line" });
      lineEl.createEl("span", {
        cls: "cf-line-num",
        text: String(i + 1)
      });
      const isDiff = i >= otherLines.length || lines[i] !== otherLines[i];
      const lineContent = lineEl.createEl("span", {
        cls: `cf-line-content ${isDiff ? side === "local" ? "cf-diff-local" : "cf-diff-remote" : ""}`
      });
      lineContent.textContent = lines[i] || " ";
    }
  }
  async handleResolve(conflict, resolution) {
    const buttons = this.contentEl.querySelectorAll("button");
    buttons.forEach((btn) => btn.disabled = true);
    try {
      await this.onResolve(conflict, resolution);
      this.conflicts = this.conflicts.filter((c) => c.localPath !== conflict.localPath);
      if (this.currentIndex >= this.conflicts.length) {
        this.currentIndex = Math.max(0, this.conflicts.length - 1);
      }
      this.renderCurrentConflict();
    } catch (err) {
      console.error("Conflict resolution failed:", err);
      buttons.forEach((btn) => btn.disabled = false);
    }
  }
  async handleResolveAll(resolution) {
    const buttons = this.contentEl.querySelectorAll("button");
    buttons.forEach((btn) => btn.disabled = true);
    try {
      await this.onResolveAll(resolution);
      this.conflicts = [];
      this.renderCurrentConflict();
    } catch (err) {
      console.error("Batch conflict resolution failed:", err);
      buttons.forEach((btn) => btn.disabled = false);
    }
  }
  addStyles() {
    if (document.querySelector("#cf-conflict-styles"))
      return;
    const style = document.createElement("style");
    style.id = "cf-conflict-styles";
    style.textContent = `
      .cf-sync-conflict-modal {
        max-width: 900px;
        width: 90vw;
      }
      .cf-sync-conflict-modal .modal-content {
        padding: 0;
      }
      .cf-conflict-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-conflict-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-conflict-icon {
        color: var(--text-warning);
      }
      .cf-conflict-title {
        margin: 0;
        font-size: 1.2em;
      }
      .cf-conflict-subtitle {
        color: var(--text-muted);
        font-size: 0.85em;
        margin-top: 4px;
      }
      .cf-conflict-filepath {
        font-family: var(--font-monospace);
        font-size: 0.85em;
        color: var(--text-accent);
        margin-top: 4px;
        padding: 4px 8px;
        background: var(--background-secondary);
        border-radius: 4px;
        display: inline-block;
      }
      .cf-conflict-diff {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--background-modifier-border);
        max-height: 400px;
        overflow: hidden;
      }
      .cf-conflict-panel {
        background: var(--background-primary);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .cf-panel-header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 0.85em;
        border-bottom: 1px solid var(--background-modifier-border);
        flex-shrink: 0;
      }
      .cf-local .cf-panel-header {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.1);
      }
      .cf-remote .cf-panel-header {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.1);
      }
      .cf-panel-icon {
        display: flex;
        align-items: center;
      }
      .cf-hash {
        margin-left: auto;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        color: var(--text-muted);
        background: var(--background-secondary);
        padding: 1px 6px;
        border-radius: 3px;
      }
      .cf-panel-content {
        overflow: auto;
        flex: 1;
        max-height: 350px;
      }
      .cf-diff-pre {
        margin: 0;
        padding: 0;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        line-height: 1.5;
      }
      .cf-diff-line {
        display: flex;
        white-space: pre;
      }
      .cf-line-num {
        flex-shrink: 0;
        width: 36px;
        text-align: right;
        padding-right: 8px;
        color: var(--text-faint);
        user-select: none;
        border-right: 1px solid var(--background-modifier-border);
        margin-right: 8px;
      }
      .cf-line-content {
        flex: 1;
      }
      .cf-diff-local {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
      }
      .cf-diff-remote {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
      }
      .cf-conflict-actions {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .cf-individual-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
      }
      .cf-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
        transition: all 0.15s ease;
      }
      .cf-btn:hover:not(:disabled) {
        background: var(--background-modifier-hover);
        border-color: var(--text-accent);
      }
      .cf-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
      .cf-btn-local:hover:not(:disabled) {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
        border-color: rgb(var(--color-blue-rgb, 0, 120, 215));
      }
      .cf-btn-remote:hover:not(:disabled) {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
        border-color: rgb(var(--color-green-rgb, 0, 180, 80));
      }
      .cf-btn-both:hover:not(:disabled) {
        background: rgba(var(--color-orange-rgb, 230, 150, 0), 0.15);
        border-color: rgb(var(--color-orange-rgb, 230, 150, 0));
      }
      .cf-btn-small {
        padding: 3px 10px;
        font-size: 0.8em;
      }
      .cf-batch-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-batch-label {
        font-size: 0.8em;
        color: var(--text-muted);
      }
      .cf-conflict-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-btn-nav {
        padding: 4px 8px;
      }
      .cf-nav-text {
        font-size: 0.85em;
        color: var(--text-muted);
      }
      .cf-conflict-empty {
        padding: 40px 20px;
        text-align: center;
        font-size: 1.2em;
        color: var(--text-success, var(--interactive-success));
      }
    `;
    document.head.appendChild(style);
  }
};

// src/publish-engine.ts
var import_obsidian5 = require("obsidian");
var import_gray_matter = __toESM(require_gray_matter());
var PublishEngine = class {
  constructor(plugin) {
    this.publishState = {};
    this.publishStatusBarEl = null;
    this.plugin = plugin;
  }
  async loadState() {
    const data = await this.plugin.loadData();
    this.publishState = (data == null ? void 0 : data._publishState) || {};
  }
  async saveState() {
    const data = await this.plugin.loadData() || {};
    data._publishState = this.publishState;
    await this.plugin.saveData(data);
  }
  setStatusBarEl(el) {
    this.publishStatusBarEl = el;
    this.updateStatusBar();
  }
  // ========== Status computation ==========
  getPublishState(path) {
    return this.publishState[path];
  }
  async computeFileStatus(file) {
    if (!file.path.endsWith(".md"))
      return "draft";
    const content = await this.plugin.app.vault.read(file);
    const parsed = (0, import_gray_matter.default)(content);
    const state = this.publishState[file.path];
    if (parsed.data.publish === false && !state) {
      return "draft";
    }
    const shouldPublish = await this.shouldPublishFile(file, parsed.data);
    if (!shouldPublish) {
      return (state == null ? void 0 : state.status) === "published" ? "deleted" : "draft";
    }
    if (!state || state.status === "draft") {
      return "draft";
    }
    const currentHash = await this.plugin.syncEngine.computeLocalHash(content);
    if (state.lastPublishedHash && state.lastPublishedHash !== currentHash) {
      return "modified";
    }
    return state.status;
  }
  async shouldPublishFile(file, frontmatter) {
    if (!file.path.endsWith(".md"))
      return false;
    const fm = frontmatter != null ? frontmatter : (0, import_gray_matter.default)(await this.plugin.app.vault.cachedRead(file) || "").data;
    if (this.plugin.settings.publishBehavior === "frontmatter-only") {
      return fm.publish === true;
    }
    return fm.publish !== false;
  }
  async refreshAllStatuses() {
    const files = this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith(".md"));
    for (const file of files) {
      const status = await this.computeFileStatus(file);
      if (this.publishState[file.path]) {
        this.publishState[file.path].status = status;
      }
    }
    await this.saveState();
    this.updateStatusBar();
  }
  getPendingFiles() {
    var _a;
    const result = [];
    for (const [path, state] of Object.entries(this.publishState)) {
      if (state.status === "draft" || state.status === "modified") {
        const file = this.plugin.app.vault.getAbstractFileByPath(path);
        if (file instanceof import_obsidian5.TFile) {
          result.push({ file, status: state.status });
        }
      }
    }
    const files = this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith(".md"));
    for (const file of files) {
      if (!this.publishState[file.path]) {
        const cached = this.plugin.app.metadataCache.getFileCache(file);
        const publishFlag = (_a = cached == null ? void 0 : cached.frontmatter) == null ? void 0 : _a.publish;
        if (this.plugin.settings.publishBehavior === "frontmatter-only" && publishFlag === true) {
          result.push({ file, status: "draft" });
        } else if (this.plugin.settings.publishBehavior === "all-notes" && publishFlag !== false) {
          result.push({ file, status: "draft" });
        }
      }
    }
    return result;
  }
  // ========== Publishing actions ==========
  async publishFile(file) {
    if (!file.path.endsWith(".md")) {
      new import_obsidian5.Notice("Only markdown files can be published");
      return false;
    }
    const serverUrl = this.plugin.settings.serverUrl;
    const apiToken = this.plugin.settings.apiToken;
    if (!serverUrl || !apiToken) {
      new import_obsidian5.Notice("Please configure Publish Server URL and API Token in settings");
      return false;
    }
    try {
      const rawContent = await this.plugin.app.vault.read(file);
      const parsed = (0, import_gray_matter.default)(rawContent);
      const { content: processedContent, assets } = await this.processAttachments(parsed.content, file);
      if (assets.length > 0) {
        await this.uploadPublishAssets(assets);
      }
      const publishPayload = {
        key: this.getPublishKey(file, parsed.data),
        content: processedContent,
        frontmatter: this.buildPublishFrontmatter(parsed.data),
        meta: {
          path: file.path,
          basename: file.basename,
          headings: this.extractHeadings(rawContent),
          outgoingLinks: this.extractOutgoingLinks(rawContent)
        }
      };
      await this.plugin.api("/api/sync/publish", {
        method: "POST",
        body: JSON.stringify(publishPayload)
      });
      const hash = await this.plugin.syncEngine.computeLocalHash(rawContent);
      const remoteUrl = `${serverUrl.replace(/\/$/, "")}/blog/${publishPayload.key}`;
      this.publishState[file.path] = {
        status: "published",
        lastPublishedAt: new Date().toISOString(),
        remoteUrl,
        lastPublishedHash: hash
      };
      await this.saveState();
      this.updateStatusBar();
      new import_obsidian5.Notice(`Published ${file.name}`);
      return true;
    } catch (err) {
      console.error("[PublishEngine] Publish failed:", err);
      new import_obsidian5.Notice(`Publish failed: ${err.message}`);
      return false;
    }
  }
  async unpublishFile(file) {
    const serverUrl = this.plugin.settings.serverUrl;
    const apiToken = this.plugin.settings.apiToken;
    if (!serverUrl || !apiToken) {
      new import_obsidian5.Notice("Please configure Publish Server URL and API Token in settings");
      return false;
    }
    try {
      const parsed = (0, import_gray_matter.default)(await this.plugin.app.vault.read(file));
      const key = this.getPublishKey(file, parsed.data);
      await this.plugin.api("/api/sync/unpublish", {
        method: "POST",
        body: JSON.stringify({ key, path: file.path })
      });
      if (this.publishState[file.path]) {
        this.publishState[file.path].status = "deleted";
        delete this.publishState[file.path].lastPublishedAt;
        delete this.publishState[file.path].remoteUrl;
        delete this.publishState[file.path].lastPublishedHash;
      }
      await this.saveState();
      this.updateStatusBar();
      new import_obsidian5.Notice(`Unpublished ${file.name}`);
      return true;
    } catch (err) {
      console.error("[PublishEngine] Unpublish failed:", err);
      new import_obsidian5.Notice(`Unpublish failed: ${err.message}`);
      return false;
    }
  }
  async publishAllChanges() {
    const pending = this.getPendingFiles();
    if (pending.length === 0) {
      new import_obsidian5.Notice("No pending changes to publish");
      return;
    }
    new import_obsidian5.Notice(`Publishing ${pending.length} file(s)...`);
    let success = 0;
    for (const { file } of pending) {
      const ok = await this.publishFile(file);
      if (ok)
        success++;
    }
    await this.generateAndUploadIndex();
    new import_obsidian5.Notice(`Published ${success}/${pending.length} files`);
  }
  // ========== Attachment processing ==========
  async processAttachments(content, file) {
    const assets = [];
    let result = content;
    const serverUrl = this.plugin.settings.serverUrl;
    const prefix = this.plugin.settings.attachmentsPathPrefix || "attachments";
    const mdImageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdImageRegex.exec(content)) !== null) {
      const [fullMatch, alt, rawPath] = match;
      const assetPath = this.resolveAssetPath(rawPath, file);
      if (!assetPath)
        continue;
      const assetFile = this.plugin.app.vault.getAbstractFileByPath(assetPath);
      if (!(assetFile instanceof import_obsidian5.TFile))
        continue;
      const base64 = this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(assetFile));
      const contentType = this.plugin.getMimeType(assetFile.extension);
      assets.push({ filename: assetFile.name, base64, contentType });
      const remoteUrl = `${serverUrl.replace(/\/$/, "")}/api/blog/images/${assetFile.name}`;
      result = result.replace(fullMatch, `![${alt}](${remoteUrl})`);
    }
    const wikiImageRegex = /!\[\[([^\]]+)\]\]/g;
    while ((match = wikiImageRegex.exec(content)) !== null) {
      const [fullMatch, rawPath] = match;
      const assetPath = this.resolveAssetPath(rawPath, file);
      if (!assetPath)
        continue;
      const assetFile = this.plugin.app.vault.getAbstractFileByPath(assetPath);
      if (!(assetFile instanceof import_obsidian5.TFile))
        continue;
      const base64 = this.plugin.arrayBufferToBase64(await this.plugin.app.vault.readBinary(assetFile));
      const contentType = this.plugin.getMimeType(assetFile.extension);
      assets.push({ filename: assetFile.name, base64, contentType });
      const remoteUrl = `${serverUrl.replace(/\/$/, "")}/api/blog/images/${assetFile.name}`;
      result = result.replace(fullMatch, `![](${remoteUrl})`);
    }
    return { content: result, assets };
  }
  resolveAssetPath(rawPath, sourceFile) {
    var _a;
    if (rawPath.startsWith("http"))
      return null;
    const folder = ((_a = sourceFile.parent) == null ? void 0 : _a.path) || "";
    if (rawPath.startsWith("./") || rawPath.startsWith("../")) {
      return (0, import_obsidian5.normalizePath)(`${folder}/${rawPath}`);
    }
    let direct = this.plugin.app.vault.getAbstractFileByPath((0, import_obsidian5.normalizePath)(rawPath));
    if (direct instanceof import_obsidian5.TFile) {
      return (0, import_obsidian5.normalizePath)(rawPath);
    }
    return (0, import_obsidian5.normalizePath)(`${folder}/${rawPath}`);
  }
  async uploadPublishAssets(assets) {
    if (assets.length === 0)
      return;
    try {
      await this.plugin.api("/api/sync/publish-assets", {
        method: "POST",
        body: JSON.stringify({ assets })
      });
    } catch (err) {
      console.warn("[PublishEngine] Batch asset upload failed, falling back to individual uploads:", err.message);
      for (const asset of assets) {
        await this.plugin.uploadFile(
          `images/${asset.filename}`,
          asset.base64,
          asset.contentType,
          "base64"
        );
      }
    }
  }
  // ========== Frontmatter & metadata ==========
  getPublishKey(file, frontmatter) {
    if (frontmatter.permalink) {
      return frontmatter.permalink;
    }
    if (frontmatter.slug) {
      return frontmatter.slug;
    }
    return file.basename.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  }
  buildPublishFrontmatter(frontmatter) {
    const result = {};
    const pick = (key, targetKey) => {
      if (frontmatter[key] !== void 0) {
        result[targetKey || key] = frontmatter[key];
      }
    };
    pick("title");
    pick("slug");
    pick("permalink");
    pick("description");
    pick("tags");
    pick("date");
    pick("cover");
    pick("hide");
    pick("cssclasses");
    pick("publish");
    pick("summary");
    pick("coverImage", "cover");
    return result;
  }
  extractHeadings(content) {
    const headings = [];
    const lines = content.split("\n");
    for (const line of lines) {
      const match = line.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        headings.push({ level: match[1].length, text: match[2].trim() });
      }
    }
    return headings;
  }
  extractOutgoingLinks(content) {
    const links = [];
    const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = mdLinkRegex.exec(content)) !== null) {
      const url = match[2];
      if (!url.startsWith("http") && !url.startsWith("#")) {
        links.push(decodeURIComponent(url.split("#")[0]));
      }
    }
    const wikiLinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    while ((match = wikiLinkRegex.exec(content)) !== null) {
      links.push(match[1]);
    }
    return [...new Set(links)];
  }
  // ========== Index generation ==========
  async generateAndUploadIndex() {
    const serverUrl = this.plugin.settings.serverUrl;
    const entries = [];
    const backlinkCounts = {};
    for (const [path, state] of Object.entries(this.publishState)) {
      if (state.status === "published" || state.status === "modified") {
        backlinkCounts[path] = 0;
      }
    }
    for (const file of this.plugin.app.vault.getFiles().filter((f) => f.path.endsWith(".md"))) {
      const state = this.publishState[file.path];
      if (!state || state.status !== "published" && state.status !== "modified")
        continue;
      const content = await this.plugin.app.vault.read(file);
      const parsed = (0, import_gray_matter.default)(content);
      const outgoing = this.extractOutgoingLinks(content);
      entries.push({
        path: file.path,
        status: state.status,
        frontmatter: this.buildPublishFrontmatter(parsed.data),
        headings: this.extractHeadings(content),
        outgoingLinks: outgoing,
        backlinks: backlinkCounts[file.path] || 0,
        lastPublishedAt: state.lastPublishedAt,
        remoteUrl: state.remoteUrl
      });
      for (const link of outgoing) {
        const resolved = this.resolveLinkPath(link, file);
        if (resolved && backlinkCounts[resolved] !== void 0) {
          backlinkCounts[resolved]++;
        }
      }
    }
    for (const entry of entries) {
      entry.backlinks = backlinkCounts[entry.path] || 0;
    }
    const index = {
      generatedAt: new Date().toISOString(),
      siteUrl: serverUrl.replace(/\/$/, ""),
      entries
    };
    const indexJson = JSON.stringify(index, null, 2);
    await this.saveLocalIndex(indexJson);
    try {
      await this.plugin.api("/api/sync/publish-index", {
        method: "POST",
        body: JSON.stringify({ index })
      });
    } catch (err) {
      console.error("[PublishEngine] Failed to upload publish index:", err.message);
    }
  }
  async saveLocalIndex(indexJson) {
    const pluginDir = this.plugin.manifest.dir;
    if (pluginDir) {
      const indexPath = (0, import_obsidian5.normalizePath)(`${pluginDir}/publish-index.json`);
      try {
        await this.plugin.app.vault.adapter.write(indexPath, indexJson);
      } catch (err) {
        console.error("[PublishEngine] Failed to write local index:", err.message);
      }
    }
  }
  resolveLinkPath(link, sourceFile) {
    var _a;
    const direct = this.plugin.app.vault.getAbstractFileByPath((0, import_obsidian5.normalizePath)(link + ".md"));
    if (direct instanceof import_obsidian5.TFile)
      return direct.path;
    const folder = ((_a = sourceFile.parent) == null ? void 0 : _a.path) || "";
    const relative = this.plugin.app.vault.getAbstractFileByPath((0, import_obsidian5.normalizePath)(`${folder}/${link}.md`));
    if (relative instanceof import_obsidian5.TFile)
      return relative.path;
    return null;
  }
  updateStatusBar() {
    if (!this.publishStatusBarEl)
      return;
    const pending = this.getPendingFiles();
    if (pending.length > 0) {
      this.publishStatusBarEl.setText(`Publish: ${pending.length} pending`);
      this.publishStatusBarEl.show();
    } else {
      this.publishStatusBarEl.setText("Publish: up to date");
      this.publishStatusBarEl.show();
    }
  }
};

// src/main.ts
var CloudflareSyncPlugin = class extends import_obsidian6.Plugin {
  async onload() {
    await this.loadSettings();
    this.syncEngine = new SyncEngine(this);
    await this.syncEngine.loadSyncState();
    this.publishEngine = new PublishEngine(this);
    await this.publishEngine.loadState();
    await this.publishEngine.refreshAllStatuses();
    this.statusBar = new SyncStatusBar(this, {
      onShowConflicts: () => this.showConflictModal(),
      onTriggerSync: () => this.triggerFullSync()
    });
    this.syncEngine.onStatsChanged = (stats) => {
      this.statusBar.updateStats(stats);
    };
    this.syncEngine.onConflictsFound = (conflicts) => {
      this.statusBar.updateConflicts(conflicts);
      new import_obsidian6.Notice(`\u26A0\uFE0F ${conflicts.length} sync conflict(s) found. Click status bar to resolve.`);
      this.showConflictModal();
    };
    this.syncEngine.onSyncComplete = () => {
      const stats = this.syncEngine.stats;
      if (stats.conflicts === 0) {
        new import_obsidian6.Notice(`\u2705 Sync complete: ${stats.syncedFiles} files synced`);
      }
    };
    this.syncEngine.onSyncError = (error) => {
      new import_obsidian6.Notice(`\u274C Sync error: ${error}`);
    };
    this.addSettingTab(new CloudflareSyncSettingTab(this.app, this));
    this.addCommand({
      id: "sync-full",
      name: "Full sync with Cloudflare",
      callback: () => this.triggerFullSync()
    });
    this.addCommand({
      id: "sync-to-remote",
      name: "Sync entire vault to Cloudflare (upload only)",
      callback: () => this.syncToRemote()
    });
    this.addCommand({
      id: "sync-from-remote",
      name: "Download entire vault from Cloudflare",
      callback: () => this.syncFromRemote()
    });
    this.addCommand({
      id: "update-frontmatter",
      name: "Update frontmatter for current file",
      editorCallback: (editor) => this.updateCurrentFileFrontmatter(editor)
    });
    this.addCommand({
      id: "generate-all-frontmatter",
      name: "Generate frontmatter for all markdown files",
      callback: () => this.generateAllFrontmatter()
    });
    this.addCommand({
      id: "sync-current-file",
      name: "Sync current file to Cloudflare",
      editorCallback: () => this.syncCurrentFile()
    });
    this.addCommand({
      id: "resolve-conflicts",
      name: "Resolve sync conflicts",
      callback: () => this.showConflictModal()
    });
    this.addCommand({
      id: "publish-current-note",
      name: "Publish: Publish current note",
      editorCallback: () => this.publishCurrentNote()
    });
    this.addCommand({
      id: "unpublish-current-note",
      name: "Publish: Unpublish current note",
      editorCallback: () => this.unpublishCurrentNote()
    });
    this.addCommand({
      id: "publish-all-changes",
      name: "Publish: Publish all changes",
      callback: () => this.publishAllChanges()
    });
    this.addCommand({
      id: "show-sync-status",
      name: "Show sync status",
      callback: () => {
        this.statusBar["showDetailModal"]();
      }
    });
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian6.TFile && this.settings.autoSync) {
          this.syncEngine.scheduleFileSync(file);
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("create", (file) => {
        if (file instanceof import_obsidian6.TFile && this.settings.autoFrontmatter) {
          if (file.path.endsWith(".md")) {
            this.updateFileFrontmatter(file);
          }
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof import_obsidian6.TFile))
          return;
        const state = this.publishEngine.getPublishState(file.path);
        if (!state || state.status === "draft") {
          menu.addItem((item) => {
            item.setTitle("Publish Note").setIcon("upload-cloud").onClick(() => {
              this.publishEngine.publishFile(file);
            });
          });
        } else {
          menu.addItem((item) => {
            item.setTitle("Unpublish Note").setIcon("x-circle").onClick(() => {
              this.publishEngine.unpublishFile(file);
            });
          });
        }
      })
    );
    this.addRibbonIcon("cloud-upload", "Full Sync with Cloudflare", () => {
      this.triggerFullSync();
    });
    if (this.settings.autoSync) {
      this.syncEngine.startAutoSync();
    }
    if (this.settings.syncOnStartup) {
      setTimeout(() => {
        this.triggerFullSync();
      }, 3e3);
    }
    if (this.settings.autoFrontmatter) {
      setTimeout(() => {
        this.scanAndGenerateFrontmatter();
      }, 2e3);
    }
    console.log("Cloudflare Sync plugin loaded");
  }
  async loadSettings() {
    this.settings = Object.assign(
      {
        serverUrl: "",
        apiToken: "",
        autoSync: true,
        autoFrontmatter: true,
        syncAllFiles: true,
        excludeFolders: ["_templates", ".trash"],
        excludeFiles: [],
        autoSyncInterval: 5,
        conflictStrategy: "ask",
        syncOnStartup: true,
        debounceDelay: 30,
        publishBehavior: "frontmatter-only",
        publishServerUrl: "",
        publishApiToken: "",
        attachmentsPathPrefix: "attachments"
      },
      await this.loadData()
    );
  }
  async saveSettings() {
    await this.saveData(this.settings);
    if (this.syncEngine) {
      if (this.settings.autoSync) {
        this.syncEngine.startAutoSync();
      } else {
        this.syncEngine.stopAutoSync();
      }
    }
  }
  // ========== Sync Triggers ==========
  async triggerFullSync() {
    if (!this.settings.serverUrl || !this.settings.apiToken) {
      new import_obsidian6.Notice("Please configure Server URL and API Token in settings");
      return;
    }
    try {
      await this.api("/api/blog/site");
    } catch (error) {
      new import_obsidian6.Notice(`Connection failed: ${error.message}`);
      return;
    }
    new import_obsidian6.Notice("Starting full sync...");
    await this.syncEngine.fullSync();
  }
  showConflictModal() {
    const conflicts = this.syncEngine.conflicts;
    if (conflicts.length === 0) {
      new import_obsidian6.Notice("No conflicts to resolve");
      return;
    }
    new ConflictModal(
      this.app,
      conflicts,
      async (conflict, resolution) => {
        await this.syncEngine.resolveConflict(conflict, resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      },
      async (resolution) => {
        await this.syncEngine.resolveAllConflicts(resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      }
    ).open();
  }
  // ========== API 调用 ==========
  async api(endpoint, options2) {
    const { serverUrl, apiToken } = this.settings;
    if (!serverUrl || !apiToken) {
      throw new Error(`Server URL (${serverUrl || "empty"}) and API token (${apiToken ? "set" : "empty"}) are required`);
    }
    const url = serverUrl.replace(/\/$/, "") + endpoint;
    console.log(`[API] ${(options2 == null ? void 0 : options2.method) || "GET"} ${url}`);
    const headers = new Headers(options2 == null ? void 0 : options2.headers);
    headers.set("Authorization", `Bearer ${apiToken}`);
    if ((options2 == null ? void 0 : options2.method) && options2.method !== "GET") {
      headers.set("Content-Type", "application/json");
    }
    const response = await fetch(url, {
      ...options2,
      headers
    });
    console.log(`[API] Response: ${response.status} ${response.statusText}`);
    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`API error ${response.status}: ${error.error || response.statusText}`);
    }
    return response.json();
  }
  // ========== 上传/下载 ==========
  async uploadFile(key, content, contentType = "text/markdown", encoding = "utf-8") {
    await this.api("/api/sync/upload", {
      method: "POST",
      body: JSON.stringify({ key, content, contentType, encoding })
    });
  }
  async downloadFile(key) {
    const res = await this.api(`/api/sync/download/${key}`);
    return res.data;
  }
  async listFiles(prefix = "") {
    const res = await this.api(
      `/api/sync/list?prefix=${encodeURIComponent(prefix)}`
    );
    return res.data.files;
  }
  async deleteFile(key) {
    await this.api(`/api/sync/delete/${key}`, { method: "DELETE" });
  }
  // ========== Frontmatter 处理 ==========
  async generateFrontmatter(file) {
    var _a;
    const content = await this.app.vault.read(file);
    const existing = (0, import_gray_matter2.default)(content);
    return {
      title: existing.data.title || file.basename,
      slug: existing.data.slug || this.generateSlug(file.basename),
      date: existing.data.date || new Date(file.stat.ctime).toISOString(),
      summary: existing.data.summary || this.extractSummary(existing.content),
      tags: existing.data.tags || [],
      publish: (_a = existing.data.publish) != null ? _a : false,
      coverImage: existing.data.coverImage
    };
  }
  generateSlug(filename) {
    return filename.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "").substring(0, 100);
  }
  extractSummary(content) {
    const firstParagraph = content.split("\n\n")[0];
    return firstParagraph.replace(/[#*`_\[\]]/g, "").substring(0, 200);
  }
  async updateFileFrontmatter(file, silent = false) {
    if (!file.path.endsWith(".md"))
      return false;
    const content = await this.app.vault.read(file);
    if (content.startsWith("---"))
      return false;
    const frontmatter = await this.generateFrontmatter(file);
    const newContent = import_gray_matter2.default.stringify(content, frontmatter);
    await this.app.vault.modify(file, newContent);
    if (!silent) {
      new import_obsidian6.Notice(`Updated frontmatter for ${file.name}`);
    }
    return true;
  }
  async updateCurrentFileFrontmatter(editor) {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new import_obsidian6.Notice("No active file");
      return;
    }
    const frontmatter = await this.generateFrontmatter(activeFile);
    const content = editor.getValue();
    const newContent = import_gray_matter2.default.stringify(content, frontmatter);
    editor.setValue(newContent);
    new import_obsidian6.Notice("Updated frontmatter");
  }
  /**
   * 扫描所有 md 文件，确保每个文件都有完整的 frontmatter
   * 统一处理三种情况：
   * 1. 完全没有 frontmatter → 生成全部字段
   * 2. 有部分 frontmatter（缺少某些字段）→ 补全缺失字段
   * 3. 已有完整 frontmatter → 跳过
   */
  async scanAndGenerateFrontmatter() {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith(".md") && this.shouldSyncFile(f.path)
    );
    let generated = 0;
    const requiredFields = ["title", "slug", "date", "summary", "tags", "publish"];
    console.log(`[Frontmatter] Scanning ${files.length} markdown files...`);
    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);
        const parsed = (0, import_gray_matter2.default)(content);
        const defaults = {
          title: file.basename,
          slug: this.generateSlug(file.basename),
          date: new Date(file.stat.ctime).toISOString(),
          summary: this.extractSummary(parsed.content),
          tags: [],
          publish: false
        };
        let changed = false;
        for (const field of requiredFields) {
          if (parsed.data[field] === void 0 || parsed.data[field] === null) {
            parsed.data[field] = defaults[field];
            changed = true;
          }
        }
        if (changed) {
          const newContent = import_gray_matter2.default.stringify(parsed.content, parsed.data);
          await this.app.vault.modify(file, newContent);
          generated++;
          console.log(`[Frontmatter] \u2705 ${file.path} \u2014 added missing fields`);
        }
      } catch (err) {
        console.error(`[Frontmatter] \u274C Failed for ${file.path}:`, err.message);
      }
    }
    if (generated > 0) {
      new import_obsidian6.Notice(`\u2705 Generated/updated frontmatter for ${generated} file(s)`);
    }
    console.log(`[Frontmatter] Done: ${generated}/${files.length} files updated`);
  }
  /**
   * 为所有 md 文件强制生成/更新 frontmatter（包括已有 frontmatter 的文件）
   */
  async generateAllFrontmatter() {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith(".md") && this.shouldSyncFile(f.path)
    );
    let updated = 0;
    new import_obsidian6.Notice(`Generating frontmatter for ${files.length} files...`);
    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);
        const frontmatter = await this.generateFrontmatter(file);
        const newContent = import_gray_matter2.default.stringify(
          (0, import_gray_matter2.default)(content).content,
          // 去掉旧 frontmatter，用新的替换
          frontmatter
        );
        if (content !== newContent) {
          await this.app.vault.modify(file, newContent);
          updated++;
        }
      } catch (err) {
        console.error(`[Frontmatter] Failed for ${file.path}:`, err.message);
      }
    }
    new import_obsidian6.Notice(`\u2705 Updated frontmatter for ${updated}/${files.length} files`);
  }
  // ========== 同步逻辑 ==========
  shouldSyncFile(filePath) {
    for (const exclude of this.settings.excludeFolders || []) {
      if (filePath.startsWith(exclude + "/") || filePath.startsWith(exclude)) {
        return false;
      }
    }
    if (filePath.includes(".conflict-")) {
      return false;
    }
    return true;
  }
  getRemoteKey(file) {
    return file.path;
  }
  getMimeType(ext) {
    const map = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      avif: "image/avif",
      pdf: "application/pdf",
      mp3: "audio/mpeg",
      mp4: "video/mp4",
      json: "application/json",
      yaml: "text/yaml",
      yml: "text/yaml",
      css: "text/css",
      js: "text/javascript",
      ts: "text/typescript"
    };
    return map[ext.toLowerCase()] || "application/octet-stream";
  }
  async syncFileToRemote(file) {
    if (!this.shouldSyncFile(file.path))
      return;
    try {
      const isMarkdown = file.path.endsWith(".md");
      console.log(`[Sync] Reading file: ${file.path} (${isMarkdown ? "markdown" : file.extension})`);
      let content;
      let contentType;
      let encoding = "utf-8";
      if (isMarkdown) {
        content = await this.app.vault.read(file);
        contentType = "text/markdown";
      } else {
        const buffer = await this.app.vault.readBinary(file);
        content = this.arrayBufferToBase64(buffer);
        encoding = "base64";
        contentType = this.getMimeType(file.extension);
      }
      console.log(`[Sync] File size: ${file.stat.size} bytes, encoding: ${encoding}`);
      const isPublished = isMarkdown ? (() => {
        const parsed = (0, import_gray_matter2.default)(content);
        return parsed.data.publish === true;
      })() : false;
      const remoteKey = this.getRemoteKey(file);
      console.log(`[Sync] Uploading to: ${remoteKey}`);
      await this.uploadFile(remoteKey, content, contentType, encoding);
      console.log(`[Sync] \u2705 Uploaded ${file.name}`);
      if (isMarkdown && isPublished) {
        console.log(`[Sync] Extracting images from ${file.name}`);
        await this.extractAndUploadImages(content, file);
      }
    } catch (error) {
      console.error(`[Sync] \u274C Failed to sync ${file.name}:`, error.message);
      throw error;
    }
  }
  async syncFileFromRemote(remoteFile) {
    try {
      const data = await this.downloadFile(remoteFile.key);
      const localPath = data.key;
      const existingFile = this.app.vault.getAbstractFileByPath(localPath);
      const isMarkdown = localPath.endsWith(".md");
      if (existingFile instanceof import_obsidian6.TFile) {
        if (isMarkdown || data.encoding === "utf-8") {
          const localContent = await this.app.vault.read(existingFile);
          if (localContent !== data.content) {
            await this.app.vault.modify(existingFile, data.content);
            console.log(`[Download] Updated ${localPath}`);
          }
        } else {
          if (existingFile.stat.size !== data.size) {
            const buffer = this.base64ToArrayBuffer(data.content);
            await this.app.vault.modifyBinary(existingFile, buffer);
            console.log(`[Download] Updated ${localPath}`);
          }
        }
      } else {
        const folderPath = localPath.substring(0, localPath.lastIndexOf("/"));
        if (folderPath) {
          await this.app.vault.createFolder(folderPath).catch(() => {
          });
        }
        if (isMarkdown || data.encoding === "utf-8") {
          await this.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.base64ToArrayBuffer(data.content);
          await this.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[Download] Created ${localPath}`);
      }
    } catch (error) {
      console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
    }
  }
  base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }
  async syncToRemote() {
    new import_obsidian6.Notice("Syncing vault to Cloudflare...");
    try {
      const files = this.app.vault.getFiles();
      let synced = 0;
      let skipped = 0;
      console.log(`[Sync] Found ${files.length} files in vault`);
      try {
        await this.api("/api/blog/site");
        console.log("[Sync] \u2705 API connection test passed");
      } catch (error) {
        console.error("[Sync] \u274C API connection test failed:", error.message);
        new import_obsidian6.Notice(`Connection failed: ${error.message}`);
        return;
      }
      for (const file of files) {
        if (!this.shouldSyncFile(file.path)) {
          skipped++;
          continue;
        }
        try {
          await this.syncFileToRemote(file);
          synced++;
        } catch (error) {
          console.error(`[Sync] \u274C Failed to sync ${file.path}:`, error.message);
        }
      }
      console.log(`[Sync] Done: ${synced} synced, ${skipped} skipped`);
      new import_obsidian6.Notice(`Synced ${synced}/${files.length} files (${skipped} skipped)`);
    } catch (error) {
      console.error("[Sync] Failed to sync:", error);
      new import_obsidian6.Notice(`Sync failed: ${error.message}`);
    }
  }
  async syncFromRemote() {
    new import_obsidian6.Notice("Downloading from Cloudflare...");
    try {
      console.log("[Download] Listing remote files...");
      const remoteFiles = await this.listFiles("");
      console.log(`[Download] Found ${remoteFiles.length} remote files`);
      let synced = 0;
      for (const remoteFile of remoteFiles) {
        console.log(`[Download] Processing: ${remoteFile.key}`);
        try {
          await this.syncFileFromRemote(remoteFile);
          synced++;
        } catch (error) {
          console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
        }
      }
      console.log(`[Download] Done: ${synced} files processed`);
      new import_obsidian6.Notice(`Downloaded ${synced} files from Cloudflare`);
    } catch (error) {
      console.error("[Download] Failed:", error);
      new import_obsidian6.Notice(`Download failed: ${error.message}`);
    }
  }
  async syncCurrentFile() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new import_obsidian6.Notice("No active file");
      return;
    }
    await this.syncFileToRemote(activeFile);
    new import_obsidian6.Notice(`Synced ${activeFile.name} to Cloudflare`);
  }
  // ========== 图片处理 ==========
  async extractAndUploadImages(content, file) {
    var _a;
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = match[1];
      if (imagePath.startsWith("./") || !imagePath.startsWith("http")) {
        const folder = ((_a = file.parent) == null ? void 0 : _a.path) || "";
        const fullPath = (0, import_obsidian6.normalizePath)(`${folder}/${imagePath}`);
        const imageFile = this.app.vault.getAbstractFileByPath(fullPath);
        if (imageFile instanceof import_obsidian6.TFile) {
          const imageBuffer = await this.app.vault.readBinary(imageFile);
          const base64 = this.arrayBufferToBase64(imageBuffer);
          const ext = imageFile.extension.toLowerCase();
          let contentType = "application/octet-stream";
          if (["jpg", "jpeg"].includes(ext))
            contentType = `image/jpeg`;
          else if (ext === "png")
            contentType = "image/png";
          else if (ext === "gif")
            contentType = "image/gif";
          else if (ext === "webp")
            contentType = "image/webp";
          else if (ext === "svg")
            contentType = "image/svg+xml";
          await this.api("/api/sync/upload", {
            method: "POST",
            body: JSON.stringify({
              key: `images/${imageFile.name}`,
              content: base64,
              contentType,
              encoding: "base64"
            })
          });
        }
      }
    }
  }
  arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  // ========== Publish Methods ==========
  async publishCurrentNote() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile || !activeFile.path.endsWith(".md")) {
      new import_obsidian6.Notice("Please open a markdown note to publish");
      return;
    }
    const success = await this.publishEngine.publishFile(activeFile);
    if (success) {
      new import_obsidian6.Notice(`Published ${activeFile.name}`);
    } else {
      new import_obsidian6.Notice(`Failed to publish ${activeFile.name}`);
    }
  }
  async unpublishCurrentNote() {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile || !activeFile.path.endsWith(".md")) {
      new import_obsidian6.Notice("Please open a markdown note to unpublish");
      return;
    }
    const success = await this.publishEngine.unpublishFile(activeFile);
    if (success) {
      new import_obsidian6.Notice(`Unpublished ${activeFile.name}`);
    } else {
      new import_obsidian6.Notice(`Failed to unpublish ${activeFile.name}`);
    }
  }
  async publishAllChanges() {
    if (!this.settings.serverUrl || !this.settings.apiToken) {
      new import_obsidian6.Notice("Please configure Server URL and API Token in settings");
      return;
    }
    new import_obsidian6.Notice("Publishing all changes...");
    await this.publishEngine.publishAllChanges();
    new import_obsidian6.Notice("Publish complete");
  }
  onunload() {
    var _a, _b;
    console.log("Cloudflare Sync plugin unloading...");
    (_a = this.syncEngine) == null ? void 0 : _a.destroy();
    (_b = this.statusBar) == null ? void 0 : _b.destroy();
    console.log("Cloudflare Sync plugin unloaded");
  }
};
/*! Bundled license information:

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

strip-bom-string/index.js:
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zZWN0aW9uLW1hdHRlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvY29tbW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9leGNlcHRpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL21hcmsuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9zdHIuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2VxLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL21hcC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL251bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYm9vbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9pbnQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvZmxvYXQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvY29yZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS90aW1lc3RhbXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvbWVyZ2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYmluYXJ5LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL29tYXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvcGFpcnMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvZGVmYXVsdF9zYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL2pzL3VuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9qcy9yZWdleHAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvanMvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL2xvYWRlci5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvZHVtcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9lbmdpbmVzLmpzIiwgIm5vZGVfbW9kdWxlcy9zdHJpcC1ib20tc3RyaW5nL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9kZWZhdWx0cy5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2VuZ2luZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL3N0cmluZ2lmeS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2V4Y2VycHQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi90by1maWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvcGFyc2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2luZGV4LmpzIiwgInNyYy9tYWluLnRzIiwgInNyYy9zZXR0aW5ncy50cyIsICJzcmMvc3luYy1lbmdpbmUudHMiLCAic3JjL3N0YXR1cy1iYXIudHMiLCAic3JjL2NvbmZsaWN0LW1vZGFsLnRzIiwgInNyYy9wdWJsaXNoLWVuZ2luZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuICdib29sZWFuJztcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gJ3N0cmluZyc7XG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHJldHVybiAnc3ltYm9sJztcbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaXNHZW5lcmF0b3JGbih2YWwpID8gJ2dlbmVyYXRvcmZ1bmN0aW9uJyA6ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHJldHVybiAnYnVmZmVyJztcbiAgaWYgKGlzQXJndW1lbnRzKHZhbCkpIHJldHVybiAnYXJndW1lbnRzJztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgaWYgKGlzUmVnZXhwKHZhbCkpIHJldHVybiAncmVnZXhwJztcblxuICBzd2l0Y2ggKGN0b3JOYW1lKHZhbCkpIHtcbiAgICBjYXNlICdTeW1ib2wnOiByZXR1cm4gJ3N5bWJvbCc7XG4gICAgY2FzZSAnUHJvbWlzZSc6IHJldHVybiAncHJvbWlzZSc7XG5cbiAgICAvLyBTZXQsIE1hcCwgV2Vha1NldCwgV2Vha01hcFxuICAgIGNhc2UgJ1dlYWtNYXAnOiByZXR1cm4gJ3dlYWttYXAnO1xuICAgIGNhc2UgJ1dlYWtTZXQnOiByZXR1cm4gJ3dlYWtzZXQnO1xuICAgIGNhc2UgJ01hcCc6IHJldHVybiAnbWFwJztcbiAgICBjYXNlICdTZXQnOiByZXR1cm4gJ3NldCc7XG5cbiAgICAvLyA4LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQ4QXJyYXknOiByZXR1cm4gJ2ludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhBcnJheSc6IHJldHVybiAndWludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhDbGFtcGVkQXJyYXknOiByZXR1cm4gJ3VpbnQ4Y2xhbXBlZGFycmF5JztcblxuICAgIC8vIDE2LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQxNkFycmF5JzogcmV0dXJuICdpbnQxNmFycmF5JztcbiAgICBjYXNlICdVaW50MTZBcnJheSc6IHJldHVybiAndWludDE2YXJyYXknO1xuXG4gICAgLy8gMzItYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDMyQXJyYXknOiByZXR1cm4gJ2ludDMyYXJyYXknO1xuICAgIGNhc2UgJ1VpbnQzMkFycmF5JzogcmV0dXJuICd1aW50MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQzMkFycmF5JzogcmV0dXJuICdmbG9hdDMyYXJyYXknO1xuICAgIGNhc2UgJ0Zsb2F0NjRBcnJheSc6IHJldHVybiAnZmxvYXQ2NGFycmF5JztcbiAgfVxuXG4gIGlmIChpc0dlbmVyYXRvck9iaih2YWwpKSB7XG4gICAgcmV0dXJuICdnZW5lcmF0b3InO1xuICB9XG5cbiAgLy8gTm9uLXBsYWluIG9iamVjdHNcbiAgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzogcmV0dXJuICdvYmplY3QnO1xuICAgIC8vIGl0ZXJhdG9yc1xuICAgIGNhc2UgJ1tvYmplY3QgTWFwIEl0ZXJhdG9yXSc6IHJldHVybiAnbWFwaXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc6IHJldHVybiAnc2V0aXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nIEl0ZXJhdG9yXSc6IHJldHVybiAnc3RyaW5naXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXkgSXRlcmF0b3JdJzogcmV0dXJuICdhcnJheWl0ZXJhdG9yJztcbiAgfVxuXG4gIC8vIG90aGVyXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59O1xuXG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCAodHlwZW9mIHZhbC5tZXNzYWdlID09PSAnc3RyaW5nJyAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5zdGFja1RyYWNlTGltaXQgPT09ICdudW1iZXInKTtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdleHAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC5mbGFncyA9PT0gJ3N0cmluZydcbiAgICAmJiB0eXBlb2YgdmFsLmlnbm9yZUNhc2UgPT09ICdib29sZWFuJ1xuICAgICYmIHR5cGVvZiB2YWwubXVsdGlsaW5lID09PSAnYm9vbGVhbidcbiAgICAmJiB0eXBlb2YgdmFsLmdsb2JhbCA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZuKG5hbWUsIHZhbCkge1xuICByZXR1cm4gY3Rvck5hbWUobmFtZSkgPT09ICdHZW5lcmF0b3JGdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yT2JqKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC50aHJvdyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwucmV0dXJuID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5uZXh0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWwpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHZhbC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWwuY2FsbGVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjYWxsZWUnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogSWYgeW91IG5lZWQgdG8gc3VwcG9ydCBTYWZhcmkgNS03ICg4LTEwIHlyLW9sZCBicm93c2VyKSxcbiAqIHRha2UgYSBsb29rIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaXMtYnVmZmVyXG4gKi9cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIGlmICh2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiLyohXG4gKiBpcy1leHRlbmRhYmxlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1leHRlbmRhYmxlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXh0ZW5kYWJsZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbFxuICAgICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpcy1leHRlbmRhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKG8vKiwgb2JqZWN0cyovKSB7XG4gIGlmICghaXNPYmplY3QobykpIHsgbyA9IHt9OyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGFzc2lnbihvLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQtc2hhbGxvdycpO1xuXG4vKipcbiAqIFBhcnNlIHNlY3Rpb25zIGluIGBpbnB1dGAgd2l0aCB0aGUgZ2l2ZW4gYG9wdGlvbnNgLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgc2VjdGlvbnMgPSByZXF1aXJlKCd7JT0gbmFtZSAlfScpO1xuICogdmFyIHJlc3VsdCA9IHNlY3Rpb25zKGlucHV0LCBvcHRpb25zKTtcbiAqIC8vIHsgY29udGVudDogJ0NvbnRlbnQgYmVmb3JlIHNlY3Rpb25zJywgc2VjdGlvbnM6IFtdIH1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd8QnVmZmVyfE9iamVjdH0gYGlucHV0YCBJZiBpbnB1dCBpcyBhbiBvYmplY3QsIGl0J3MgYGNvbnRlbnRgIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgb3IgYnVmZmVyLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhIGBjb250ZW50YCBzdHJpbmcgYW5kIGFuIGFycmF5IG9mIGBzZWN0aW9uc2Agb2JqZWN0cy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbnB1dCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0geyBwYXJzZTogb3B0aW9ucyB9O1xuICB9XG5cbiAgdmFyIGZpbGUgPSB0b09iamVjdChpbnB1dCk7XG4gIHZhciBkZWZhdWx0cyA9IHtzZWN0aW9uX2RlbGltaXRlcjogJy0tLScsIHBhcnNlOiBpZGVudGl0eX07XG4gIHZhciBvcHRzID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIHZhciBkZWxpbSA9IG9wdHMuc2VjdGlvbl9kZWxpbWl0ZXI7XG4gIHZhciBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgc2VjdGlvbnMgPSBudWxsO1xuICB2YXIgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oKTtcbiAgdmFyIGNvbnRlbnQgPSBbXTtcbiAgdmFyIHN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdFNlY3Rpb25zKHZhbCkge1xuICAgIGZpbGUuY29udGVudCA9IHZhbDtcbiAgICBzZWN0aW9ucyA9IFtdO1xuICAgIGNvbnRlbnQgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlU2VjdGlvbih2YWwpIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoKSB7XG4gICAgICBzZWN0aW9uLmtleSA9IGdldEtleShzdGFja1swXSwgZGVsaW0pO1xuICAgICAgc2VjdGlvbi5jb250ZW50ID0gdmFsO1xuICAgICAgb3B0cy5wYXJzZShzZWN0aW9uLCBzZWN0aW9ucyk7XG4gICAgICBzZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oKTtcbiAgICAgIGNvbnRlbnQgPSBbXTtcbiAgICAgIHN0YWNrID0gW107XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsaW5lID0gbGluZXNbaV07XG4gICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICB2YXIgbG4gPSBsaW5lLnRyaW0oKTtcblxuICAgIGlmIChpc0RlbGltaXRlcihsbiwgZGVsaW0pKSB7XG4gICAgICBpZiAobG4ubGVuZ3RoID09PSAzICYmIGkgIT09IDApIHtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCB8fCBsZW4gPT09IDIpIHtcbiAgICAgICAgICBjb250ZW50LnB1c2gobGluZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sucHVzaChsbik7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IGNvbnRlbnQuam9pbignXFxuJyk7XG4gICAgICAgIGNvbnRlbnQgPSBbXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICBpbml0U2VjdGlvbnMoY29udGVudC5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgY2xvc2VTZWN0aW9uKGNvbnRlbnQuam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wdXNoKGxuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnRlbnQucHVzaChsaW5lKTtcbiAgfVxuXG4gIGlmIChzZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgIGluaXRTZWN0aW9ucyhjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgfSBlbHNlIHtcbiAgICBjbG9zZVNlY3Rpb24oY29udGVudC5qb2luKCdcXG4nKSk7XG4gIH1cblxuICBmaWxlLnNlY3Rpb25zID0gc2VjdGlvbnM7XG4gIHJldHVybiBmaWxlO1xufTtcblxuZnVuY3Rpb24gaXNEZWxpbWl0ZXIobGluZSwgZGVsaW0pIHtcbiAgaWYgKGxpbmUuc2xpY2UoMCwgZGVsaW0ubGVuZ3RoKSAhPT0gZGVsaW0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGxpbmUuY2hhckF0KGRlbGltLmxlbmd0aCArIDEpID09PSBkZWxpbS5zbGljZSgtMSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KGlucHV0KSB7XG4gIGlmICh0eXBlT2YoaW5wdXQpICE9PSAnb2JqZWN0Jykge1xuICAgIGlucHV0ID0geyBjb250ZW50OiBpbnB1dCB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC5jb250ZW50ICE9PSAnc3RyaW5nJyAmJiAhaXNCdWZmZXIoaW5wdXQuY29udGVudCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIGJ1ZmZlciBvciBzdHJpbmcnKTtcbiAgfVxuXG4gIGlucHV0LmNvbnRlbnQgPSBpbnB1dC5jb250ZW50LnRvU3RyaW5nKCk7XG4gIGlucHV0LnNlY3Rpb25zID0gW107XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5KHZhbCwgZGVsaW0pIHtcbiAgcmV0dXJuIHZhbCA/IHZhbC5zbGljZShkZWxpbS5sZW5ndGgpLnRyaW0oKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKCkge1xuICByZXR1cm4geyBrZXk6ICcnLCBkYXRhOiAnJywgY29udGVudDogJycgfTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkodmFsKSB7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICBpZiAodmFsICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gaXNOb3RoaW5nKHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHx8IChzdWJqZWN0ID09PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnKSAmJiAoc3ViamVjdCAhPT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gdG9BcnJheShzZXF1ZW5jZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShzZXF1ZW5jZSkpIHJldHVybiBzZXF1ZW5jZTtcbiAgZWxzZSBpZiAoaXNOb3RoaW5nKHNlcXVlbmNlKSkgcmV0dXJuIFtdO1xuXG4gIHJldHVybiBbIHNlcXVlbmNlIF07XG59XG5cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCBrZXksIHNvdXJjZUtleXM7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHNvdXJjZUtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpbmRleF07XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0KHN0cmluZywgY291bnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBjeWNsZTtcblxuICBmb3IgKGN5Y2xlID0gMDsgY3ljbGUgPCBjb3VudDsgY3ljbGUgKz0gMSkge1xuICAgIHJlc3VsdCArPSBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKG51bWJlcikge1xuICByZXR1cm4gKG51bWJlciA9PT0gMCkgJiYgKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA9PT0gMSAvIG51bWJlcik7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuaXNOb3RoaW5nICAgICAgPSBpc05vdGhpbmc7XG5tb2R1bGUuZXhwb3J0cy5pc09iamVjdCAgICAgICA9IGlzT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMudG9BcnJheSAgICAgICAgPSB0b0FycmF5O1xubW9kdWxlLmV4cG9ydHMucmVwZWF0ICAgICAgICAgPSByZXBlYXQ7XG5tb2R1bGUuZXhwb3J0cy5pc05lZ2F0aXZlWmVybyA9IGlzTmVnYXRpdmVaZXJvO1xubW9kdWxlLmV4cG9ydHMuZXh0ZW5kICAgICAgICAgPSBleHRlbmQ7XG4iLCAiLy8gWUFNTCBlcnJvciBjbGFzcy4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDU4OTg0XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBZQU1MRXhjZXB0aW9uKHJlYXNvbiwgbWFyaykge1xuICAvLyBTdXBlciBjb25zdHJ1Y3RvclxuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmFtZSA9ICdZQU1MRXhjZXB0aW9uJztcbiAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gIHRoaXMubWFyayA9IG1hcms7XG4gIHRoaXMubWVzc2FnZSA9ICh0aGlzLnJlYXNvbiB8fCAnKHVua25vd24gcmVhc29uKScpICsgKHRoaXMubWFyayA/ICcgJyArIHRoaXMubWFyay50b1N0cmluZygpIDogJycpO1xuXG4gIC8vIEluY2x1ZGUgc3RhY2sgdHJhY2UgaW4gZXJyb3Igb2JqZWN0XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIC8vIENocm9tZSBhbmQgTm9kZUpTXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRkYsIElFIDEwKyBhbmQgU2FmYXJpIDYrLiBGYWxsYmFjayBmb3Igb3RoZXJzXG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2sgfHwgJyc7XG4gIH1cbn1cblxuXG4vLyBJbmhlcml0IGZyb20gRXJyb3JcbllBTUxFeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBZQU1MRXhjZXB0aW9uO1xuXG5cbllBTUxFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoY29tcGFjdCkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5uYW1lICsgJzogJztcblxuICByZXN1bHQgKz0gdGhpcy5yZWFzb24gfHwgJyh1bmtub3duIHJlYXNvbiknO1xuXG4gIGlmICghY29tcGFjdCAmJiB0aGlzLm1hcmspIHtcbiAgICByZXN1bHQgKz0gJyAnICsgdGhpcy5tYXJrLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFlBTUxFeGNlcHRpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuXG5cbmZ1bmN0aW9uIE1hcmsobmFtZSwgYnVmZmVyLCBwb3NpdGlvbiwgbGluZSwgY29sdW1uKSB7XG4gIHRoaXMubmFtZSAgICAgPSBuYW1lO1xuICB0aGlzLmJ1ZmZlciAgID0gYnVmZmVyO1xuICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIHRoaXMubGluZSAgICAgPSBsaW5lO1xuICB0aGlzLmNvbHVtbiAgID0gY29sdW1uO1xufVxuXG5cbk1hcmsucHJvdG90eXBlLmdldFNuaXBwZXQgPSBmdW5jdGlvbiBnZXRTbmlwcGV0KGluZGVudCwgbWF4TGVuZ3RoKSB7XG4gIHZhciBoZWFkLCBzdGFydCwgdGFpbCwgZW5kLCBzbmlwcGV0O1xuXG4gIGlmICghdGhpcy5idWZmZXIpIHJldHVybiBudWxsO1xuXG4gIGluZGVudCA9IGluZGVudCB8fCA0O1xuICBtYXhMZW5ndGggPSBtYXhMZW5ndGggfHwgNzU7XG5cbiAgaGVhZCA9ICcnO1xuICBzdGFydCA9IHRoaXMucG9zaXRpb247XG5cbiAgd2hpbGUgKHN0YXJ0ID4gMCAmJiAnXFx4MDBcXHJcXG5cXHg4NVxcdTIwMjhcXHUyMDI5Jy5pbmRleE9mKHRoaXMuYnVmZmVyLmNoYXJBdChzdGFydCAtIDEpKSA9PT0gLTEpIHtcbiAgICBzdGFydCAtPSAxO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uIC0gc3RhcnQgPiAobWF4TGVuZ3RoIC8gMiAtIDEpKSB7XG4gICAgICBoZWFkID0gJyAuLi4gJztcbiAgICAgIHN0YXJ0ICs9IDU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0YWlsID0gJyc7XG4gIGVuZCA9IHRoaXMucG9zaXRpb247XG5cbiAgd2hpbGUgKGVuZCA8IHRoaXMuYnVmZmVyLmxlbmd0aCAmJiAnXFx4MDBcXHJcXG5cXHg4NVxcdTIwMjhcXHUyMDI5Jy5pbmRleE9mKHRoaXMuYnVmZmVyLmNoYXJBdChlbmQpKSA9PT0gLTEpIHtcbiAgICBlbmQgKz0gMTtcbiAgICBpZiAoZW5kIC0gdGhpcy5wb3NpdGlvbiA+IChtYXhMZW5ndGggLyAyIC0gMSkpIHtcbiAgICAgIHRhaWwgPSAnIC4uLiAnO1xuICAgICAgZW5kIC09IDU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzbmlwcGV0ID0gdGhpcy5idWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgcmV0dXJuIGNvbW1vbi5yZXBlYXQoJyAnLCBpbmRlbnQpICsgaGVhZCArIHNuaXBwZXQgKyB0YWlsICsgJ1xcbicgK1xuICAgICAgICAgY29tbW9uLnJlcGVhdCgnICcsIGluZGVudCArIHRoaXMucG9zaXRpb24gLSBzdGFydCArIGhlYWQubGVuZ3RoKSArICdeJztcbn07XG5cblxuTWFyay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhjb21wYWN0KSB7XG4gIHZhciBzbmlwcGV0LCB3aGVyZSA9ICcnO1xuXG4gIGlmICh0aGlzLm5hbWUpIHtcbiAgICB3aGVyZSArPSAnaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiICc7XG4gIH1cblxuICB3aGVyZSArPSAnYXQgbGluZSAnICsgKHRoaXMubGluZSArIDEpICsgJywgY29sdW1uICcgKyAodGhpcy5jb2x1bW4gKyAxKTtcblxuICBpZiAoIWNvbXBhY3QpIHtcbiAgICBzbmlwcGV0ID0gdGhpcy5nZXRTbmlwcGV0KCk7XG5cbiAgICBpZiAoc25pcHBldCkge1xuICAgICAgd2hlcmUgKz0gJzpcXG4nICsgc25pcHBldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2hlcmU7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTWFyaztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBZQU1MRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIFRZUEVfQ09OU1RSVUNUT1JfT1BUSU9OUyA9IFtcbiAgJ2tpbmQnLFxuICAncmVzb2x2ZScsXG4gICdjb25zdHJ1Y3QnLFxuICAnaW5zdGFuY2VPZicsXG4gICdwcmVkaWNhdGUnLFxuICAncmVwcmVzZW50JyxcbiAgJ2RlZmF1bHRTdHlsZScsXG4gICdzdHlsZUFsaWFzZXMnXG5dO1xuXG52YXIgWUFNTF9OT0RFX0tJTkRTID0gW1xuICAnc2NhbGFyJyxcbiAgJ3NlcXVlbmNlJyxcbiAgJ21hcHBpbmcnXG5dO1xuXG5mdW5jdGlvbiBjb21waWxlU3R5bGVBbGlhc2VzKG1hcCkge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgaWYgKG1hcCAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIG1hcFtzdHlsZV0uZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgcmVzdWx0W1N0cmluZyhhbGlhcyldID0gc3R5bGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIFR5cGUodGFnLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVW5rbm93biBvcHRpb24gXCInICsgbmFtZSArICdcIiBpcyBtZXQgaW4gZGVmaW5pdGlvbiBvZiBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETzogQWRkIHRhZyBmb3JtYXQgY2hlY2suXG4gIHRoaXMudGFnICAgICAgICAgID0gdGFnO1xuICB0aGlzLmtpbmQgICAgICAgICA9IG9wdGlvbnNbJ2tpbmQnXSAgICAgICAgIHx8IG51bGw7XG4gIHRoaXMucmVzb2x2ZSAgICAgID0gb3B0aW9uc1sncmVzb2x2ZSddICAgICAgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcbiAgdGhpcy5jb25zdHJ1Y3QgICAgPSBvcHRpb25zWydjb25zdHJ1Y3QnXSAgICB8fCBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfTtcbiAgdGhpcy5pbnN0YW5jZU9mICAgPSBvcHRpb25zWydpbnN0YW5jZU9mJ10gICB8fCBudWxsO1xuICB0aGlzLnByZWRpY2F0ZSAgICA9IG9wdGlvbnNbJ3ByZWRpY2F0ZSddICAgIHx8IG51bGw7XG4gIHRoaXMucmVwcmVzZW50ICAgID0gb3B0aW9uc1sncmVwcmVzZW50J10gICAgfHwgbnVsbDtcbiAgdGhpcy5kZWZhdWx0U3R5bGUgPSBvcHRpb25zWydkZWZhdWx0U3R5bGUnXSB8fCBudWxsO1xuICB0aGlzLnN0eWxlQWxpYXNlcyA9IGNvbXBpbGVTdHlsZUFsaWFzZXMob3B0aW9uc1snc3R5bGVBbGlhc2VzJ10gfHwgbnVsbCk7XG5cbiAgaWYgKFlBTUxfTk9ERV9LSU5EUy5pbmRleE9mKHRoaXMua2luZCkgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1Vua25vd24ga2luZCBcIicgKyB0aGlzLmtpbmQgKyAnXCIgaXMgc3BlY2lmaWVkIGZvciBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbiovXG5cbnZhciBjb21tb24gICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBZQU1MRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcbnZhciBUeXBlICAgICAgICAgID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cblxuZnVuY3Rpb24gY29tcGlsZUxpc3Qoc2NoZW1hLCBuYW1lLCByZXN1bHQpIHtcbiAgdmFyIGV4Y2x1ZGUgPSBbXTtcblxuICBzY2hlbWEuaW5jbHVkZS5mb3JFYWNoKGZ1bmN0aW9uIChpbmNsdWRlZFNjaGVtYSkge1xuICAgIHJlc3VsdCA9IGNvbXBpbGVMaXN0KGluY2x1ZGVkU2NoZW1hLCBuYW1lLCByZXN1bHQpO1xuICB9KTtcblxuICBzY2hlbWFbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudFR5cGUpIHtcbiAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAocHJldmlvdXNUeXBlLCBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAocHJldmlvdXNUeXBlLnRhZyA9PT0gY3VycmVudFR5cGUudGFnICYmIHByZXZpb3VzVHlwZS5raW5kID09PSBjdXJyZW50VHlwZS5raW5kKSB7XG4gICAgICAgIGV4Y2x1ZGUucHVzaChwcmV2aW91c0luZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRUeXBlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGUuaW5kZXhPZihpbmRleCkgPT09IC0xO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjb21waWxlTWFwKC8qIGxpc3RzLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHNjYWxhcjoge30sXG4gICAgICAgIHNlcXVlbmNlOiB7fSxcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGZhbGxiYWNrOiB7fVxuICAgICAgfSwgaW5kZXgsIGxlbmd0aDtcblxuICBmdW5jdGlvbiBjb2xsZWN0VHlwZSh0eXBlKSB7XG4gICAgcmVzdWx0W3R5cGUua2luZF1bdHlwZS50YWddID0gcmVzdWx0WydmYWxsYmFjayddW3R5cGUudGFnXSA9IHR5cGU7XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBhcmd1bWVudHNbaW5kZXhdLmZvckVhY2goY29sbGVjdFR5cGUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gU2NoZW1hKGRlZmluaXRpb24pIHtcbiAgdGhpcy5pbmNsdWRlICA9IGRlZmluaXRpb24uaW5jbHVkZSAgfHwgW107XG4gIHRoaXMuaW1wbGljaXQgPSBkZWZpbml0aW9uLmltcGxpY2l0IHx8IFtdO1xuICB0aGlzLmV4cGxpY2l0ID0gZGVmaW5pdGlvbi5leHBsaWNpdCB8fCBbXTtcblxuICB0aGlzLmltcGxpY2l0LmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAodHlwZS5sb2FkS2luZCAmJiB0eXBlLmxvYWRLaW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1RoZXJlIGlzIGEgbm9uLXNjYWxhciB0eXBlIGluIHRoZSBpbXBsaWNpdCBsaXN0IG9mIGEgc2NoZW1hLiBJbXBsaWNpdCByZXNvbHZpbmcgb2Ygc3VjaCB0eXBlcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5jb21waWxlZEltcGxpY2l0ID0gY29tcGlsZUxpc3QodGhpcywgJ2ltcGxpY2l0JywgW10pO1xuICB0aGlzLmNvbXBpbGVkRXhwbGljaXQgPSBjb21waWxlTGlzdCh0aGlzLCAnZXhwbGljaXQnLCBbXSk7XG4gIHRoaXMuY29tcGlsZWRUeXBlTWFwICA9IGNvbXBpbGVNYXAodGhpcy5jb21waWxlZEltcGxpY2l0LCB0aGlzLmNvbXBpbGVkRXhwbGljaXQpO1xufVxuXG5cblNjaGVtYS5ERUZBVUxUID0gbnVsbDtcblxuXG5TY2hlbWEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlU2NoZW1hKCkge1xuICB2YXIgc2NoZW1hcywgdHlwZXM7XG5cbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgc2NoZW1hcyA9IFNjaGVtYS5ERUZBVUxUO1xuICAgICAgdHlwZXMgPSBhcmd1bWVudHNbMF07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIHNjaGVtYXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB0eXBlcyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdXcm9uZyBudW1iZXIgb2YgYXJndW1lbnRzIGZvciBTY2hlbWEuY3JlYXRlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBzY2hlbWFzID0gY29tbW9uLnRvQXJyYXkoc2NoZW1hcyk7XG4gIHR5cGVzID0gY29tbW9uLnRvQXJyYXkodHlwZXMpO1xuXG4gIGlmICghc2NoZW1hcy5ldmVyeShmdW5jdGlvbiAoc2NoZW1hKSB7IHJldHVybiBzY2hlbWEgaW5zdGFuY2VvZiBTY2hlbWE7IH0pKSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1NwZWNpZmllZCBsaXN0IG9mIHN1cGVyIHNjaGVtYXMgKG9yIGEgc2luZ2xlIFNjaGVtYSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVNjaGVtYSBvYmplY3QuJyk7XG4gIH1cblxuICBpZiAoIXR5cGVzLmV2ZXJ5KGZ1bmN0aW9uICh0eXBlKSB7IHJldHVybiB0eXBlIGluc3RhbmNlb2YgVHlwZTsgfSkpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2YgWUFNTCB0eXBlcyAob3IgYSBzaW5nbGUgVHlwZSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVR5cGUgb2JqZWN0LicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEoe1xuICAgIGluY2x1ZGU6IHNjaGVtYXMsXG4gICAgZXhwbGljaXQ6IHR5cGVzXG4gIH0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzdHInLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6ICcnOyB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXEnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107IH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1hcCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9OyB9XG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgRmFpbHNhZmUgc2NoZW1hLlxuLy8gaHR0cDovL3d3dy55YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyODAyMzQ2XG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTY2hlbWEoe1xuICBleHBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvc3RyJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zZXEnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL21hcCcpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTnVsbChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGg7XG5cbiAgcmV0dXJuIChtYXggPT09IDEgJiYgZGF0YSA9PT0gJ34nKSB8fFxuICAgICAgICAgKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ251bGwnIHx8IGRhdGEgPT09ICdOdWxsJyB8fCBkYXRhID09PSAnTlVMTCcpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc051bGwob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm51bGwnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE51bGwsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE51bGwsXG4gIHByZWRpY2F0ZTogaXNOdWxsLFxuICByZXByZXNlbnQ6IHtcbiAgICBjYW5vbmljYWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICd+JzsgICAgfSxcbiAgICBsb3dlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdudWxsJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOVUxMJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOdWxsJzsgfVxuICB9LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJvb2xlYW4oZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ3RydWUnIHx8IGRhdGEgPT09ICdUcnVlJyB8fCBkYXRhID09PSAnVFJVRScpKSB8fFxuICAgICAgICAgKG1heCA9PT0gNSAmJiAoZGF0YSA9PT0gJ2ZhbHNlJyB8fCBkYXRhID09PSAnRmFsc2UnIHx8IGRhdGEgPT09ICdGQUxTRScpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJvb2xlYW4oZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICBkYXRhID09PSAnVHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUUlVFJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6Ym9vbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQm9vbGVhbixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQm9vbGVhbixcbiAgcHJlZGljYXRlOiBpc0Jvb2xlYW4sXG4gIHJlcHJlc2VudDoge1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ3RydWUnIDogJ2ZhbHNlJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUUlVFJyA6ICdGQUxTRSc7IH0sXG4gICAgY2FtZWxjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAnVHJ1ZScgOiAnRmFsc2UnOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL2NvbW1vbicpO1xudmFyIFR5cGUgICA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gaXNIZXhDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKSB8fFxuICAgICAgICAgKCgweDQxLyogQSAqLyA8PSBjKSAmJiAoYyA8PSAweDQ2LyogRiAqLykpIHx8XG4gICAgICAgICAoKDB4NjEvKiBhICovIDw9IGMpICYmIChjIDw9IDB4NjYvKiBmICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzT2N0Q29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzcvKiA3ICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzRGVjQ29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sSW50ZWdlcihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgaGFzRGlnaXRzID0gZmFsc2UsXG4gICAgICBjaDtcblxuICBpZiAoIW1heCkgcmV0dXJuIGZhbHNlO1xuXG4gIGNoID0gZGF0YVtpbmRleF07XG5cbiAgLy8gc2lnblxuICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7XG4gICAgY2ggPSBkYXRhWysraW5kZXhdO1xuICB9XG5cbiAgaWYgKGNoID09PSAnMCcpIHtcbiAgICAvLyAwXG4gICAgaWYgKGluZGV4ICsgMSA9PT0gbWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG5cbiAgICAvLyBiYXNlIDIsIGJhc2UgOCwgYmFzZSAxNlxuXG4gICAgaWYgKGNoID09PSAnYicpIHtcbiAgICAgIC8vIGJhc2UgMlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNoICE9PSAnMCcgJiYgY2ggIT09ICcxJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICAgIH1cblxuXG4gICAgaWYgKGNoID09PSAneCcpIHtcbiAgICAgIC8vIGJhc2UgMTZcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICAgIGlmICghaXNIZXhDb2RlKGRhdGEuY2hhckNvZGVBdChpbmRleCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG4gICAgLy8gYmFzZSA4XG4gICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgaWYgKCFpc09jdENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgfVxuXG4gIC8vIGJhc2UgMTAgKGV4Y2VwdCAwKSBvciBiYXNlIDYwXG5cbiAgLy8gdmFsdWUgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGBfYDtcbiAgaWYgKGNoID09PSAnXycpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICBpZiAoY2ggPT09ICc6JykgYnJlYWs7XG4gICAgaWYgKCFpc0RlY0NvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNob3VsZCBoYXZlIGRpZ2l0cyBhbmQgc2hvdWxkIG5vdCBlbmQgd2l0aCBgX2BcbiAgaWYgKCFoYXNEaWdpdHMgfHwgY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIGlmICFiYXNlNjAgLSBkb25lO1xuICBpZiAoY2ggIT09ICc6JykgcmV0dXJuIHRydWU7XG5cbiAgLy8gYmFzZTYwIGFsbW9zdCBub3QgdXNlZCwgbm8gbmVlZHMgdG8gb3B0aW1pemVcbiAgcmV0dXJuIC9eKDpbMC01XT9bMC05XSkrJC8udGVzdChkYXRhLnNsaWNlKGluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YSwgc2lnbiA9IDEsIGNoLCBiYXNlLCBkaWdpdHMgPSBbXTtcblxuICBpZiAodmFsdWUuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXy9nLCAnJyk7XG4gIH1cblxuICBjaCA9IHZhbHVlWzBdO1xuXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBpZiAoY2ggPT09ICctJykgc2lnbiA9IC0xO1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgY2ggPSB2YWx1ZVswXTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJzAnKSByZXR1cm4gMDtcblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ2InKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCAyKTtcbiAgICBpZiAodmFsdWVbMV0gPT09ICd4JykgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICAgIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUsIDgpO1xuICB9XG5cbiAgaWYgKHZhbHVlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB2YWx1ZS5zcGxpdCgnOicpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGRpZ2l0cy51bnNoaWZ0KHBhcnNlSW50KHYsIDEwKSk7XG4gICAgfSk7XG5cbiAgICB2YWx1ZSA9IDA7XG4gICAgYmFzZSA9IDE7XG5cbiAgICBkaWdpdHMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgdmFsdWUgKz0gKGQgKiBiYXNlKTtcbiAgICAgIGJhc2UgKj0gNjA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHZhbHVlO1xuXG4gIH1cblxuICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcihvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSkgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmXG4gICAgICAgICAob2JqZWN0ICUgMSA9PT0gMCAmJiAhY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjppbnQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEludGVnZXIsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEludGVnZXIsXG4gIHByZWRpY2F0ZTogaXNJbnRlZ2VyLFxuICByZXByZXNlbnQ6IHtcbiAgICBiaW5hcnk6ICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMGInICsgb2JqLnRvU3RyaW5nKDIpIDogJy0wYicgKyBvYmoudG9TdHJpbmcoMikuc2xpY2UoMSk7IH0sXG4gICAgb2N0YWw6ICAgICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiA+PSAwID8gJzAnICArIG9iai50b1N0cmluZyg4KSA6ICctMCcgICsgb2JqLnRvU3RyaW5nKDgpLnNsaWNlKDEpOyB9LFxuICAgIGRlY2ltYWw6ICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudG9TdHJpbmcoMTApOyB9LFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBoZXhhZGVjaW1hbDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpIDogICctMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLnNsaWNlKDEpOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2RlY2ltYWwnLFxuICBzdHlsZUFsaWFzZXM6IHtcbiAgICBiaW5hcnk6ICAgICAgWyAyLCAgJ2JpbicgXSxcbiAgICBvY3RhbDogICAgICAgWyA4LCAgJ29jdCcgXSxcbiAgICBkZWNpbWFsOiAgICAgWyAxMCwgJ2RlYycgXSxcbiAgICBoZXhhZGVjaW1hbDogWyAxNiwgJ2hleCcgXVxuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb24gPSByZXF1aXJlKCcuLi9jb21tb24nKTtcbnZhciBUeXBlICAgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBZQU1MX0ZMT0FUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAvLyAyLjVlNCwgMi41IGFuZCBpbnRlZ2Vyc1xuICAnXig/OlstK10/KD86MHxbMS05XVswLTlfXSopKD86XFxcXC5bMC05X10qKT8oPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAuMmU0LCAuMlxuICAvLyBzcGVjaWFsIGNhc2UsIHNlZW1zIG5vdCBmcm9tIHNwZWNcbiAgJ3xcXFxcLlswLTlfXSsoPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAyMDo1OVxuICAnfFstK10/WzAtOV1bMC05X10qKD86OlswLTVdP1swLTldKStcXFxcLlswLTlfXSonICtcbiAgLy8gLmluZlxuICAnfFstK10/XFxcXC4oPzppbmZ8SW5mfElORiknICtcbiAgLy8gLm5hblxuICAnfFxcXFwuKD86bmFufE5hTnxOQU4pKSQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxGbG9hdChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFZQU1MX0ZMT0FUX1BBVFRFUk4udGVzdChkYXRhKSB8fFxuICAgICAgLy8gUXVpY2sgaGFjayB0byBub3QgYWxsb3cgaW50ZWdlcnMgZW5kIHdpdGggYF9gXG4gICAgICAvLyBQcm9iYWJseSBzaG91bGQgdXBkYXRlIHJlZ2V4cCAmIGNoZWNrIHNwZWVkXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gPT09ICdfJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sRmxvYXQoZGF0YSkge1xuICB2YXIgdmFsdWUsIHNpZ24sIGJhc2UsIGRpZ2l0cztcblxuICB2YWx1ZSAgPSBkYXRhLnJlcGxhY2UoL18vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHNpZ24gICA9IHZhbHVlWzBdID09PSAnLScgPyAtMSA6IDE7XG4gIGRpZ2l0cyA9IFtdO1xuXG4gIGlmICgnKy0nLmluZGV4T2YodmFsdWVbMF0pID49IDApIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnLmluZicpIHtcbiAgICByZXR1cm4gKHNpZ24gPT09IDEpID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICcubmFuJykge1xuICAgIHJldHVybiBOYU47XG5cbiAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCc6JykgPj0gMCkge1xuICAgIHZhbHVlLnNwbGl0KCc6JykuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgZGlnaXRzLnVuc2hpZnQocGFyc2VGbG9hdCh2LCAxMCkpO1xuICAgIH0pO1xuXG4gICAgdmFsdWUgPSAwLjA7XG4gICAgYmFzZSA9IDE7XG5cbiAgICBkaWdpdHMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgdmFsdWUgKz0gZCAqIGJhc2U7XG4gICAgICBiYXNlICo9IDYwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ24gKiB2YWx1ZTtcblxuICB9XG4gIHJldHVybiBzaWduICogcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xufVxuXG5cbnZhciBTQ0lFTlRJRklDX1dJVEhPVVRfRE9UID0gL15bLStdP1swLTldK2UvO1xuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sRmxvYXQob2JqZWN0LCBzdHlsZSkge1xuICB2YXIgcmVzO1xuXG4gIGlmIChpc05hTihvYmplY3QpKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcubmFuJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLk5BTic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5OYU4nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLmluZic7XG4gICAgICBjYXNlICd1cHBlcmNhc2UnOiByZXR1cm4gJy5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICcuSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSBvYmplY3QpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy0uaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLS5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICctLkluZic7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbW1vbi5pc05lZ2F0aXZlWmVybyhvYmplY3QpKSB7XG4gICAgcmV0dXJuICctMC4wJztcbiAgfVxuXG4gIHJlcyA9IG9iamVjdC50b1N0cmluZygxMCk7XG5cbiAgLy8gSlMgc3RyaW5naWZpZXIgY2FuIGJ1aWxkIHNjaWVudGlmaWMgZm9ybWF0IHdpdGhvdXQgZG90czogNWUtMTAwLFxuICAvLyB3aGlsZSBZQU1MIHJlcXVyZXMgZG90OiA1LmUtMTAwLiBGaXggaXQgd2l0aCBzaW1wbGUgaGFja1xuXG4gIHJldHVybiBTQ0lFTlRJRklDX1dJVEhPVVRfRE9ULnRlc3QocmVzKSA/IHJlcy5yZXBsYWNlKCdlJywgJy5lJykgOiByZXM7XG59XG5cbmZ1bmN0aW9uIGlzRmxvYXQob2JqZWN0KSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IE51bWJlcl0nKSAmJlxuICAgICAgICAgKG9iamVjdCAlIDEgIT09IDAgfHwgY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpmbG9hdCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sRmxvYXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEZsb2F0LFxuICBwcmVkaWNhdGU6IGlzRmxvYXQsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEZsb2F0LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgSlNPTiBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDMyMzFcbi8vXG4vLyBOT1RFOiBKUy1ZQU1MIGRvZXMgbm90IHN1cHBvcnQgc2NoZW1hLXNwZWNpZmljIHRhZyByZXNvbHV0aW9uIHJlc3RyaWN0aW9ucy5cbi8vIFNvLCB0aGlzIHNjaGVtYSBpcyBub3Qgc3VjaCBzdHJpY3QgYXMgZGVmaW5lZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy8gSXQgYWxsb3dzIG51bWJlcnMgaW4gYmluYXJ5IG5vdGFpb24sIHVzZSBgTnVsbGAgYW5kIGBOVUxMYCBhcyBgbnVsbGAsIGV0Yy5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2ZhaWxzYWZlJylcbiAgXSxcbiAgaW1wbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL251bGwnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2Jvb2wnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2ludCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvZmxvYXQnKVxuICBdXG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgQ29yZSBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDQ5MjNcbi8vXG4vLyBOT1RFOiBKUy1ZQU1MIGRvZXMgbm90IHN1cHBvcnQgc2NoZW1hLXNwZWNpZmljIHRhZyByZXNvbHV0aW9uIHJlc3RyaWN0aW9ucy5cbi8vIFNvLCBDb3JlIHNjaGVtYSBoYXMgbm8gZGlzdGluY3Rpb25zIGZyb20gSlNPTiBzY2hlbWEgaXMgSlMtWUFNTC5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2pzb24nKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG52YXIgWUFNTF9EQVRFX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldKScgICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0pJCcpOyAgICAgICAgICAgICAgICAgICAvLyBbM10gZGF5XG5cbnZhciBZQU1MX1RJTUVTVEFNUF9SRUdFWFAgPSBuZXcgUmVnRXhwKFxuICAnXihbMC05XVswLTldWzAtOV1bMC05XSknICAgICAgICAgICsgLy8gWzFdIHllYXJcbiAgJy0oWzAtOV1bMC05XT8pJyAgICAgICAgICAgICAgICAgICArIC8vIFsyXSBtb250aFxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzNdIGRheVxuICAnKD86W1R0XXxbIFxcXFx0XSspJyAgICAgICAgICAgICAgICAgKyAvLyAuLi5cbiAgJyhbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICArIC8vIFs0XSBob3VyXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNV0gbWludXRlXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNl0gc2Vjb25kXG4gICcoPzpcXFxcLihbMC05XSopKT8nICAgICAgICAgICAgICAgICArIC8vIFs3XSBmcmFjdGlvblxuICAnKD86WyBcXFxcdF0qKFp8KFstK10pKFswLTldWzAtOV0/KScgKyAvLyBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyXG4gICcoPzo6KFswLTldWzAtOV0pKT8pKT8kJyk7ICAgICAgICAgICAvLyBbMTFdIHR6X21pbnV0ZVxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChZQU1MX0RBVEVfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICBpZiAoWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAoZGF0YSkge1xuICB2YXIgbWF0Y2gsIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbiA9IDAsXG4gICAgICBkZWx0YSA9IG51bGwsIHR6X2hvdXIsIHR6X21pbnV0ZSwgZGF0ZTtcblxuICBtYXRjaCA9IFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKTtcbiAgaWYgKG1hdGNoID09PSBudWxsKSBtYXRjaCA9IFlBTUxfVElNRVNUQU1QX1JFR0VYUC5leGVjKGRhdGEpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdEYXRlIHJlc29sdmUgZXJyb3InKTtcblxuICAvLyBtYXRjaDogWzFdIHllYXIgWzJdIG1vbnRoIFszXSBkYXlcblxuICB5ZWFyID0gKyhtYXRjaFsxXSk7XG4gIG1vbnRoID0gKyhtYXRjaFsyXSkgLSAxOyAvLyBKUyBtb250aCBzdGFydHMgd2l0aCAwXG4gIGRheSA9ICsobWF0Y2hbM10pO1xuXG4gIGlmICghbWF0Y2hbNF0pIHsgLy8gbm8gaG91clxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5KSk7XG4gIH1cblxuICAvLyBtYXRjaDogWzRdIGhvdXIgWzVdIG1pbnV0ZSBbNl0gc2Vjb25kIFs3XSBmcmFjdGlvblxuXG4gIGhvdXIgPSArKG1hdGNoWzRdKTtcbiAgbWludXRlID0gKyhtYXRjaFs1XSk7XG4gIHNlY29uZCA9ICsobWF0Y2hbNl0pO1xuXG4gIGlmIChtYXRjaFs3XSkge1xuICAgIGZyYWN0aW9uID0gbWF0Y2hbN10uc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKGZyYWN0aW9uLmxlbmd0aCA8IDMpIHsgLy8gbWlsbGktc2Vjb25kc1xuICAgICAgZnJhY3Rpb24gKz0gJzAnO1xuICAgIH1cbiAgICBmcmFjdGlvbiA9ICtmcmFjdGlvbjtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyIFsxMV0gdHpfbWludXRlXG5cbiAgaWYgKG1hdGNoWzldKSB7XG4gICAgdHpfaG91ciA9ICsobWF0Y2hbMTBdKTtcbiAgICB0el9taW51dGUgPSArKG1hdGNoWzExXSB8fCAwKTtcbiAgICBkZWx0YSA9ICh0el9ob3VyICogNjAgKyB0el9taW51dGUpICogNjAwMDA7IC8vIGRlbHRhIGluIG1pbGktc2Vjb25kc1xuICAgIGlmIChtYXRjaFs5XSA9PT0gJy0nKSBkZWx0YSA9IC1kZWx0YTtcbiAgfVxuXG4gIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24pKTtcblxuICBpZiAoZGVsdGEpIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSAtIGRlbHRhKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbFRpbWVzdGFtcChvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgcmV0dXJuIG9iamVjdC50b0lTT1N0cmluZygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjp0aW1lc3RhbXAnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFRpbWVzdGFtcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sVGltZXN0YW1wLFxuICBpbnN0YW5jZU9mOiBEYXRlLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxUaW1lc3RhbXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTWVyZ2UoZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJzw8JyB8fCBkYXRhID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTWVyZ2Vcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlKi9cblxudmFyIE5vZGVCdWZmZXI7XG5cbnRyeSB7XG4gIC8vIEEgdHJpY2sgZm9yIGJyb3dzZXJpZmllZCB2ZXJzaW9uLCB0byBub3QgaW5jbHVkZSBgQnVmZmVyYCBzaGltXG4gIHZhciBfcmVxdWlyZSA9IHJlcXVpcmU7XG4gIE5vZGVCdWZmZXIgPSBfcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xufSBjYXRjaCAoX18pIHt9XG5cbnZhciBUeXBlICAgICAgID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5cbi8vIFsgNjQsIDY1LCA2NiBdIC0+IFsgcGFkZGluZywgQ1IsIExGIF1cbnZhciBCQVNFNjRfTUFQID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XFxuXFxyJztcblxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJpbmFyeShkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGNvZGUsIGlkeCwgYml0bGVuID0gMCwgbWF4ID0gZGF0YS5sZW5ndGgsIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBvbmUgYnkgb25lLlxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBjb2RlID0gbWFwLmluZGV4T2YoZGF0YS5jaGFyQXQoaWR4KSk7XG5cbiAgICAvLyBTa2lwIENSL0xGXG4gICAgaWYgKGNvZGUgPiA2NCkgY29udGludWU7XG5cbiAgICAvLyBGYWlsIG9uIGlsbGVnYWwgY2hhcmFjdGVyc1xuICAgIGlmIChjb2RlIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYml0bGVuICs9IDY7XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgYW55IGJpdHMgbGVmdCwgc291cmNlIHdhcyBjb3JydXB0ZWRcbiAgcmV0dXJuIChiaXRsZW4gJSA4KSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJpbmFyeShkYXRhKSB7XG4gIHZhciBpZHgsIHRhaWxiaXRzLFxuICAgICAgaW5wdXQgPSBkYXRhLnJlcGxhY2UoL1tcXHJcXG49XS9nLCAnJyksIC8vIHJlbW92ZSBDUi9MRiAmIHBhZGRpbmcgdG8gc2ltcGxpZnkgc2NhblxuICAgICAgbWF4ID0gaW5wdXQubGVuZ3RoLFxuICAgICAgbWFwID0gQkFTRTY0X01BUCxcbiAgICAgIGJpdHMgPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgLy8gQ29sbGVjdCBieSA2KjQgYml0cyAoMyBieXRlcylcblxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBpZiAoKGlkeCAlIDQgPT09IDApICYmIGlkeCkge1xuICAgICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMTYpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA2KSB8IG1hcC5pbmRleE9mKGlucHV0LmNoYXJBdChpZHgpKTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHRhaWxiaXRzID0gKG1heCAlIDQpICogNjtcblxuICBpZiAodGFpbGJpdHMgPT09IDApIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKGJpdHMgJiAweEZGKTtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTgpIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxMCkgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAyKSAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxMikge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDQpICYgMHhGRik7XG4gIH1cblxuICAvLyBXcmFwIGludG8gQnVmZmVyIGZvciBOb2RlSlMgYW5kIGxlYXZlIEFycmF5IGZvciBicm93c2VyXG4gIGlmIChOb2RlQnVmZmVyKSB7XG4gICAgLy8gU3VwcG9ydCBub2RlIDYuKyBCdWZmZXIgQVBJIHdoZW4gYXZhaWxhYmxlXG4gICAgcmV0dXJuIE5vZGVCdWZmZXIuZnJvbSA/IE5vZGVCdWZmZXIuZnJvbShyZXN1bHQpIDogbmV3IE5vZGVCdWZmZXIocmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxCaW5hcnkob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHZhciByZXN1bHQgPSAnJywgYml0cyA9IDAsIGlkeCwgdGFpbCxcbiAgICAgIG1heCA9IG9iamVjdC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQO1xuXG4gIC8vIENvbnZlcnQgZXZlcnkgdGhyZWUgYnl0ZXMgdG8gNCBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgMyA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA4KSArIG9iamVjdFtpZHhdO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbCA9IG1heCAlIDM7XG5cbiAgaWYgKHRhaWwgPT09IDApIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IDIpIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEwKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMSkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDQpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0JpbmFyeShvYmplY3QpIHtcbiAgcmV0dXJuIE5vZGVCdWZmZXIgJiYgTm9kZUJ1ZmZlci5pc0J1ZmZlcihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpiaW5hcnknLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEJpbmFyeSxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQmluYXJ5LFxuICBwcmVkaWNhdGU6IGlzQmluYXJ5LFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxCaW5hcnlcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF90b1N0cmluZyAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sT21hcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgb2JqZWN0S2V5cyA9IFtdLCBpbmRleCwgbGVuZ3RoLCBwYWlyLCBwYWlyS2V5LCBwYWlySGFzS2V5LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcbiAgICBwYWlySGFzS2V5ID0gZmFsc2U7XG5cbiAgICBpZiAoX3RvU3RyaW5nLmNhbGwocGFpcikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKHBhaXJLZXkgaW4gcGFpcikge1xuICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhaXIsIHBhaXJLZXkpKSB7XG4gICAgICAgIGlmICghcGFpckhhc0tleSkgcGFpckhhc0tleSA9IHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFpckhhc0tleSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9iamVjdEtleXMuaW5kZXhPZihwYWlyS2V5KSA9PT0gLTEpIG9iamVjdEtleXMucHVzaChwYWlyS2V5KTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sT21hcChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpvbWFwJywge1xuICBraW5kOiAnc2VxdWVuY2UnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE9tYXAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE9tYXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBpbmRleCwgbGVuZ3RoLCBwYWlyLCBrZXlzLCByZXN1bHQsXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIHJlc3VsdCA9IG5ldyBBcnJheShvYmplY3QubGVuZ3RoKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGlmIChfdG9TdHJpbmcuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhwYWlyKTtcblxuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxQYWlycyhkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gW107XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6cGFpcnMnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sUGFpcnMsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFBhaXJzXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxTZXQoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGtleSwgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICBpZiAob2JqZWN0W2tleV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFNldChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXQnLCB7XG4gIGtpbmQ6ICdtYXBwaW5nJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxTZXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFNldFxufSk7XG4iLCAiLy8gSlMtWUFNTCdzIGRlZmF1bHQgc2NoZW1hIGZvciBgc2FmZUxvYWRgIGZ1bmN0aW9uLlxuLy8gSXQgaXMgbm90IGRlc2NyaWJlZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy9cbi8vIFRoaXMgc2NoZW1hIGlzIGJhc2VkIG9uIHN0YW5kYXJkIFlBTUwncyBDb3JlIHNjaGVtYSBhbmQgaW5jbHVkZXMgbW9zdCBvZlxuLy8gZXh0cmEgdHlwZXMgZGVzY3JpYmVkIGF0IFlBTUwgdGFnIHJlcG9zaXRvcnkuIChodHRwOi8veWFtbC5vcmcvdHlwZS8pXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTY2hlbWEoe1xuICBpbmNsdWRlOiBbXG4gICAgcmVxdWlyZSgnLi9jb3JlJylcbiAgXSxcbiAgaW1wbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL3RpbWVzdGFtcCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvbWVyZ2UnKVxuICBdLFxuICBleHBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvYmluYXJ5JyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9vbWFwJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9wYWlycycpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvc2V0JylcbiAgXVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uLy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RKYXZhc2NyaXB0VW5kZWZpbmVkKCkge1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCovXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6anMvdW5kZWZpbmVkJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRVbmRlZmluZWQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdFVuZGVmaW5lZCxcbiAgcHJlZGljYXRlOiBpc1VuZGVmaW5lZCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0VW5kZWZpbmVkXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlSmF2YXNjcmlwdFJlZ0V4cChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciByZWdleHAgPSBkYXRhLFxuICAgICAgdGFpbCAgID0gL1xcLyhbZ2ltXSopJC8uZXhlYyhkYXRhKSxcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuXG4gIC8vIGlmIHJlZ2V4cCBzdGFydHMgd2l0aCAnLycgaXQgY2FuIGhhdmUgbW9kaWZpZXJzIGFuZCBtdXN0IGJlIHByb3Blcmx5IGNsb3NlZFxuICAvLyBgL2Zvby9naW1gIC0gbW9kaWZpZXJzIHRhaWwgY2FuIGJlIG1heGltdW0gMyBjaGFyc1xuICBpZiAocmVnZXhwWzBdID09PSAnLycpIHtcbiAgICBpZiAodGFpbCkgbW9kaWZpZXJzID0gdGFpbFsxXTtcblxuICAgIGlmIChtb2RpZmllcnMubGVuZ3RoID4gMykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGlmIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggLywgaXMgc2hvdWxkIGJlIHByb3Blcmx5IHRlcm1pbmF0ZWRcbiAgICBpZiAocmVnZXhwW3JlZ2V4cC5sZW5ndGggLSBtb2RpZmllcnMubGVuZ3RoIC0gMV0gIT09ICcvJykgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEphdmFzY3JpcHRSZWdFeHAoZGF0YSkge1xuICB2YXIgcmVnZXhwID0gZGF0YSxcbiAgICAgIHRhaWwgICA9IC9cXC8oW2dpbV0qKSQvLmV4ZWMoZGF0YSksXG4gICAgICBtb2RpZmllcnMgPSAnJztcblxuICAvLyBgL2Zvby9naW1gIC0gdGFpbCBjYW4gYmUgbWF4aW11bSA0IGNoYXJzXG4gIGlmIChyZWdleHBbMF0gPT09ICcvJykge1xuICAgIGlmICh0YWlsKSBtb2RpZmllcnMgPSB0YWlsWzFdO1xuICAgIHJlZ2V4cCA9IHJlZ2V4cC5zbGljZSgxLCByZWdleHAubGVuZ3RoIC0gbW9kaWZpZXJzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwLCBtb2RpZmllcnMpO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRKYXZhc2NyaXB0UmVnRXhwKG9iamVjdCAvKiwgc3R5bGUqLykge1xuICB2YXIgcmVzdWx0ID0gJy8nICsgb2JqZWN0LnNvdXJjZSArICcvJztcblxuICBpZiAob2JqZWN0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKG9iamVjdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmIChvYmplY3QuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6anMvcmVnZXhwJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRSZWdFeHAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdFJlZ0V4cCxcbiAgcHJlZGljYXRlOiBpc1JlZ0V4cCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0UmVnRXhwXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBlc3ByaW1hO1xuXG4vLyBCcm93c2VyaWZpZWQgdmVyc2lvbiBkb2VzIG5vdCBoYXZlIGVzcHJpbWFcbi8vXG4vLyAxLiBGb3Igbm9kZS5qcyBqdXN0IHJlcXVpcmUgbW9kdWxlIGFzIGRlcHNcbi8vIDIuIEZvciBicm93c2VyIHRyeSB0byByZXF1aXJlIG11ZHVsZSB2aWEgZXh0ZXJuYWwgQU1EIHN5c3RlbS5cbi8vICAgIElmIG5vdCBmb3VuZCAtIHRyeSB0byBmYWxsYmFjayB0byB3aW5kb3cuZXNwcmltYS4gSWYgbm90XG4vLyAgICBmb3VuZCB0b28gLSB0aGVuIGZhaWwgdG8gcGFyc2UuXG4vL1xudHJ5IHtcbiAgLy8gd29ya2Fyb3VuZCB0byBleGNsdWRlIHBhY2thZ2UgZnJvbSBicm93c2VyaWZ5IGxpc3QuXG4gIHZhciBfcmVxdWlyZSA9IHJlcXVpcmU7XG4gIGVzcHJpbWEgPSBfcmVxdWlyZSgnZXNwcmltYScpO1xufSBjYXRjaCAoXykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgLyogZ2xvYmFsIHdpbmRvdyAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIGVzcHJpbWEgPSB3aW5kb3cuZXNwcmltYTtcbn1cblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi8uLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVKYXZhc2NyaXB0RnVuY3Rpb24oZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHNvdXJjZSA9ICcoJyArIGRhdGEgKyAnKScsXG4gICAgICAgIGFzdCAgICA9IGVzcHJpbWEucGFyc2Uoc291cmNlLCB7IHJhbmdlOiB0cnVlIH0pO1xuXG4gICAgaWYgKGFzdC50eXBlICAgICAgICAgICAgICAgICAgICAhPT0gJ1Byb2dyYW0nICAgICAgICAgICAgIHx8XG4gICAgICAgIGFzdC5ib2R5Lmxlbmd0aCAgICAgICAgICAgICAhPT0gMSAgICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgIGFzdC5ib2R5WzBdLnR5cGUgICAgICAgICAgICAhPT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnIHx8XG4gICAgICAgIChhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicgJiZcbiAgICAgICAgICBhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdGdW5jdGlvbkV4cHJlc3Npb24nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SmF2YXNjcmlwdEZ1bmN0aW9uKGRhdGEpIHtcbiAgLypqc2xpbnQgZXZpbDp0cnVlKi9cblxuICB2YXIgc291cmNlID0gJygnICsgZGF0YSArICcpJyxcbiAgICAgIGFzdCAgICA9IGVzcHJpbWEucGFyc2Uoc291cmNlLCB7IHJhbmdlOiB0cnVlIH0pLFxuICAgICAgcGFyYW1zID0gW10sXG4gICAgICBib2R5O1xuXG4gIGlmIChhc3QudHlwZSAgICAgICAgICAgICAgICAgICAgIT09ICdQcm9ncmFtJyAgICAgICAgICAgICB8fFxuICAgICAgYXN0LmJvZHkubGVuZ3RoICAgICAgICAgICAgICE9PSAxICAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgIGFzdC5ib2R5WzBdLnR5cGUgICAgICAgICAgICAhPT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnIHx8XG4gICAgICAoYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlICE9PSAnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nICYmXG4gICAgICAgIGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Z1bmN0aW9uRXhwcmVzc2lvbicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVzb2x2ZSBmdW5jdGlvbicpO1xuICB9XG5cbiAgYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5wYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBwYXJhbXMucHVzaChwYXJhbS5uYW1lKTtcbiAgfSk7XG5cbiAgYm9keSA9IGFzdC5ib2R5WzBdLmV4cHJlc3Npb24uYm9keS5yYW5nZTtcblxuICAvLyBFc3ByaW1hJ3MgcmFuZ2VzIGluY2x1ZGUgdGhlIGZpcnN0ICd7JyBhbmQgdGhlIGxhc3QgJ30nIGNoYXJhY3RlcnMgb25cbiAgLy8gZnVuY3Rpb24gZXhwcmVzc2lvbnMuIFNvIGN1dCB0aGVtIG91dC5cbiAgaWYgKGFzdC5ib2R5WzBdLmV4cHJlc3Npb24uYm9keS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihwYXJhbXMsIHNvdXJjZS5zbGljZShib2R5WzBdICsgMSwgYm9keVsxXSAtIDEpKTtcbiAgfVxuICAvLyBFUzYgYXJyb3cgZnVuY3Rpb25zIGNhbiBvbWl0IHRoZSBCbG9ja1N0YXRlbWVudC4gSW4gdGhhdCBjYXNlLCBqdXN0IHJldHVyblxuICAvLyB0aGUgYm9keS5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyovXG4gIHJldHVybiBuZXcgRnVuY3Rpb24ocGFyYW1zLCAncmV0dXJuICcgKyBzb3VyY2Uuc2xpY2UoYm9keVswXSwgYm9keVsxXSkpO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRKYXZhc2NyaXB0RnVuY3Rpb24ob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy9mdW5jdGlvbicsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVKYXZhc2NyaXB0RnVuY3Rpb24sXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdEZ1bmN0aW9uLFxuICBwcmVkaWNhdGU6IGlzRnVuY3Rpb24sXG4gIHJlcHJlc2VudDogcmVwcmVzZW50SmF2YXNjcmlwdEZ1bmN0aW9uXG59KTtcbiIsICIvLyBKUy1ZQU1MJ3MgZGVmYXVsdCBzY2hlbWEgZm9yIGBsb2FkYCBmdW5jdGlvbi5cbi8vIEl0IGlzIG5vdCBkZXNjcmliZWQgaW4gdGhlIFlBTUwgc3BlY2lmaWNhdGlvbi5cbi8vXG4vLyBUaGlzIHNjaGVtYSBpcyBiYXNlZCBvbiBKUy1ZQU1MJ3MgZGVmYXVsdCBzYWZlIHNjaGVtYSBhbmQgaW5jbHVkZXNcbi8vIEphdmFTY3JpcHQtc3BlY2lmaWMgdHlwZXM6ICEhanMvdW5kZWZpbmVkLCAhIWpzL3JlZ2V4cCBhbmQgISFqcy9mdW5jdGlvbi5cbi8vXG4vLyBBbHNvIHRoaXMgc2NoZW1hIGlzIHVzZWQgYXMgZGVmYXVsdCBiYXNlIHNjaGVtYSBhdCBgU2NoZW1hLmNyZWF0ZWAgZnVuY3Rpb24uXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYS5ERUZBVUxUID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2RlZmF1bHRfc2FmZScpXG4gIF0sXG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9qcy91bmRlZmluZWQnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2pzL3JlZ2V4cCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvanMvZnVuY3Rpb24nKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbixuby11c2UtYmVmb3JlLWRlZmluZSovXG5cbnZhciBjb21tb24gICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBZQU1MRXhjZXB0aW9uICAgICAgID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcbnZhciBNYXJrICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9tYXJrJyk7XG52YXIgREVGQVVMVF9TQUZFX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xudmFyIERFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcblxuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuXG52YXIgQ09OVEVYVF9GTE9XX0lOICAgPSAxO1xudmFyIENPTlRFWFRfRkxPV19PVVQgID0gMjtcbnZhciBDT05URVhUX0JMT0NLX0lOICA9IDM7XG52YXIgQ09OVEVYVF9CTE9DS19PVVQgPSA0O1xuXG5cbnZhciBDSE9NUElOR19DTElQICA9IDE7XG52YXIgQ0hPTVBJTkdfU1RSSVAgPSAyO1xudmFyIENIT01QSU5HX0tFRVAgID0gMztcblxuXG52YXIgUEFUVEVSTl9OT05fUFJJTlRBQkxFICAgICAgICAgPSAvW1xceDAwLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4N0YtXFx4ODRcXHg4Ni1cXHg5RlxcdUZGRkVcXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS87XG52YXIgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MgPSAvW1xceDg1XFx1MjAyOFxcdTIwMjldLztcbnZhciBQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUyAgICAgICA9IC9bLFxcW1xcXVxce1xcfV0vO1xudmFyIFBBVFRFUk5fVEFHX0hBTkRMRSAgICAgICAgICAgID0gL14oPzohfCEhfCFbYS16XFwtXSshKSQvaTtcbnZhciBQQVRURVJOX1RBR19VUkkgICAgICAgICAgICAgICA9IC9eKD86IXxbXixcXFtcXF1cXHtcXH1dKSg/OiVbMC05YS1mXXsyfXxbMC05YS16XFwtIztcXC9cXD86QCY9XFwrXFwkLF9cXC4hflxcKidcXChcXClcXFtcXF1dKSokL2k7XG5cblxuZnVuY3Rpb24gX2NsYXNzKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7IH1cblxuZnVuY3Rpb24gaXNfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDBBLyogTEYgKi8pIHx8IChjID09PSAweDBELyogQ1IgKi8pO1xufVxuXG5mdW5jdGlvbiBpc19XSElURV9TUEFDRShjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHwgKGMgPT09IDB4MjAvKiBTcGFjZSAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dTX09SX0VPTChjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHxcbiAgICAgICAgIChjID09PSAweDIwLyogU3BhY2UgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwQS8qIExGICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX0ZMT1dfSU5ESUNBVE9SKGMpIHtcbiAgcmV0dXJuIGMgPT09IDB4MkMvKiAsICovIHx8XG4gICAgICAgICBjID09PSAweDVCLyogWyAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg1RC8qIF0gKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0IvKiB7ICovIHx8XG4gICAgICAgICBjID09PSAweDdELyogfSAqLztcbn1cblxuZnVuY3Rpb24gZnJvbUhleENvZGUoYykge1xuICB2YXIgbGM7XG5cbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuICBsYyA9IGMgfCAweDIwO1xuXG4gIGlmICgoMHg2MS8qIGEgKi8gPD0gbGMpICYmIChsYyA8PSAweDY2LyogZiAqLykpIHtcbiAgICByZXR1cm4gbGMgLSAweDYxICsgMTA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZWRIZXhMZW4oYykge1xuICBpZiAoYyA9PT0gMHg3OC8qIHggKi8pIHsgcmV0dXJuIDI7IH1cbiAgaWYgKGMgPT09IDB4NzUvKiB1ICovKSB7IHJldHVybiA0OyB9XG4gIGlmIChjID09PSAweDU1LyogVSAqLykgeyByZXR1cm4gODsgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZnJvbURlY2ltYWxDb2RlKGMpIHtcbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUVzY2FwZVNlcXVlbmNlKGMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gIHJldHVybiAoYyA9PT0gMHgzMC8qIDAgKi8pID8gJ1xceDAwJyA6XG4gICAgICAgIChjID09PSAweDYxLyogYSAqLykgPyAnXFx4MDcnIDpcbiAgICAgICAgKGMgPT09IDB4NjIvKiBiICovKSA/ICdcXHgwOCcgOlxuICAgICAgICAoYyA9PT0gMHg3NC8qIHQgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDA5LyogVGFiICovKSA/ICdcXHgwOScgOlxuICAgICAgICAoYyA9PT0gMHg2RS8qIG4gKi8pID8gJ1xceDBBJyA6XG4gICAgICAgIChjID09PSAweDc2LyogdiAqLykgPyAnXFx4MEInIDpcbiAgICAgICAgKGMgPT09IDB4NjYvKiBmICovKSA/ICdcXHgwQycgOlxuICAgICAgICAoYyA9PT0gMHg3Mi8qIHIgKi8pID8gJ1xceDBEJyA6XG4gICAgICAgIChjID09PSAweDY1LyogZSAqLykgPyAnXFx4MUInIDpcbiAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgPyAnICcgOlxuICAgICAgICAoYyA9PT0gMHgyMi8qIFwiICovKSA/ICdcXHgyMicgOlxuICAgICAgICAoYyA9PT0gMHgyRi8qIC8gKi8pID8gJy8nIDpcbiAgICAgICAgKGMgPT09IDB4NUMvKiBcXCAqLykgPyAnXFx4NUMnIDpcbiAgICAgICAgKGMgPT09IDB4NEUvKiBOICovKSA/ICdcXHg4NScgOlxuICAgICAgICAoYyA9PT0gMHg1Ri8qIF8gKi8pID8gJ1xceEEwJyA6XG4gICAgICAgIChjID09PSAweDRDLyogTCAqLykgPyAnXFx1MjAyOCcgOlxuICAgICAgICAoYyA9PT0gMHg1MC8qIFAgKi8pID8gJ1xcdTIwMjknIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNoYXJGcm9tQ29kZXBvaW50KGMpIHtcbiAgaWYgKGMgPD0gMHhGRkZGKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gIH1cbiAgLy8gRW5jb2RlIFVURi0xNiBzdXJyb2dhdGUgcGFpclxuICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtMTYjQ29kZV9wb2ludHNfVS4yQjAxMDAwMF90b19VLjJCMTBGRkZGXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICgoYyAtIDB4MDEwMDAwKSA+PiAxMCkgKyAweEQ4MDAsXG4gICAgKChjIC0gMHgwMTAwMDApICYgMHgwM0ZGKSArIDB4REMwMFxuICApO1xufVxuXG4vLyBzZXQgYSBwcm9wZXJ0eSBvZiBhIGxpdGVyYWwgb2JqZWN0LCB3aGlsZSBwcm90ZWN0aW5nIGFnYWluc3QgcHJvdG90eXBlIHBvbGx1dGlvbixcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL2pzLXlhbWwvaXNzdWVzLzE2NCBmb3IgbW9yZSBkZXRhaWxzXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgLy8gdXNlZCBmb3IgdGhpcyBzcGVjaWZpYyBrZXkgb25seSBiZWNhdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBzbG93XG4gIGlmIChrZXkgPT09ICdfX3Byb3RvX18nKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbnZhciBzaW1wbGVFc2NhcGVDaGVjayA9IG5ldyBBcnJheSgyNTYpOyAvLyBpbnRlZ2VyLCBmb3IgZmFzdCBhY2Nlc3NcbnZhciBzaW1wbGVFc2NhcGVNYXAgPSBuZXcgQXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgc2ltcGxlRXNjYXBlQ2hlY2tbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKSA/IDEgOiAwO1xuICBzaW1wbGVFc2NhcGVNYXBbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKTtcbn1cblxuXG5mdW5jdGlvbiBTdGF0ZShpbnB1dCwgb3B0aW9ucykge1xuICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgdGhpcy5maWxlbmFtZSAgPSBvcHRpb25zWydmaWxlbmFtZSddICB8fCBudWxsO1xuICB0aGlzLnNjaGVtYSAgICA9IG9wdGlvbnNbJ3NjaGVtYSddICAgIHx8IERFRkFVTFRfRlVMTF9TQ0hFTUE7XG4gIHRoaXMub25XYXJuaW5nID0gb3B0aW9uc1snb25XYXJuaW5nJ10gfHwgbnVsbDtcbiAgdGhpcy5sZWdhY3kgICAgPSBvcHRpb25zWydsZWdhY3knXSAgICB8fCBmYWxzZTtcbiAgdGhpcy5qc29uICAgICAgPSBvcHRpb25zWydqc29uJ10gICAgICB8fCBmYWxzZTtcbiAgdGhpcy5saXN0ZW5lciAgPSBvcHRpb25zWydsaXN0ZW5lciddICB8fCBudWxsO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMudHlwZU1hcCAgICAgICA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkVHlwZU1hcDtcblxuICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gIHRoaXMucG9zaXRpb24gICA9IDA7XG4gIHRoaXMubGluZSAgICAgICA9IDA7XG4gIHRoaXMubGluZVN0YXJ0ICA9IDA7XG4gIHRoaXMubGluZUluZGVudCA9IDA7XG5cbiAgdGhpcy5kb2N1bWVudHMgPSBbXTtcblxuICAvKlxuICB0aGlzLnZlcnNpb247XG4gIHRoaXMuY2hlY2tMaW5lQnJlYWtzO1xuICB0aGlzLnRhZ01hcDtcbiAgdGhpcy5hbmNob3JNYXA7XG4gIHRoaXMudGFnO1xuICB0aGlzLmFuY2hvcjtcbiAgdGhpcy5raW5kO1xuICB0aGlzLnJlc3VsdDsqL1xuXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFlBTUxFeGNlcHRpb24oXG4gICAgbWVzc2FnZSxcbiAgICBuZXcgTWFyayhzdGF0ZS5maWxlbmFtZSwgc3RhdGUuaW5wdXQsIHN0YXRlLnBvc2l0aW9uLCBzdGF0ZS5saW5lLCAoc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnQpKSk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3Ioc3RhdGUsIG1lc3NhZ2UpIHtcbiAgdGhyb3cgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHRocm93V2FybmluZyhzdGF0ZSwgbWVzc2FnZSkge1xuICBpZiAoc3RhdGUub25XYXJuaW5nKSB7XG4gICAgc3RhdGUub25XYXJuaW5nLmNhbGwobnVsbCwgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkpO1xuICB9XG59XG5cblxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge1xuXG4gIFlBTUw6IGZ1bmN0aW9uIGhhbmRsZVlhbWxEaXJlY3RpdmUoc3RhdGUsIG5hbWUsIGFyZ3MpIHtcblxuICAgIHZhciBtYXRjaCwgbWFqb3IsIG1pbm9yO1xuXG4gICAgaWYgKHN0YXRlLnZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiAlWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdZQU1MIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgbWF0Y2ggPSAvXihbMC05XSspXFwuKFswLTldKykkLy5leGVjKGFyZ3NbMF0pO1xuXG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCBhcmd1bWVudCBvZiB0aGUgWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBtYWpvciA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgbWlub3IgPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuXG4gICAgaWYgKG1ham9yICE9PSAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIFlBTUwgdmVyc2lvbiBvZiB0aGUgZG9jdW1lbnQnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS52ZXJzaW9uID0gYXJnc1swXTtcbiAgICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSAobWlub3IgPCAyKTtcblxuICAgIGlmIChtaW5vciAhPT0gMSAmJiBtaW5vciAhPT0gMikge1xuICAgICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAndW5zdXBwb3J0ZWQgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cbiAgfSxcblxuICBUQUc6IGZ1bmN0aW9uIGhhbmRsZVRhZ0RpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIGhhbmRsZSwgcHJlZml4O1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAyKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnVEFHIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgdHdvIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGhhbmRsZSA9IGFyZ3NbMF07XG4gICAgcHJlZml4ID0gYXJnc1sxXTtcblxuICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QoaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2lsbC1mb3JtZWQgdGFnIGhhbmRsZSAoZmlyc3QgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnRhZ01hcCwgaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZXJlIGlzIGEgcHJldmlvdXNseSBkZWNsYXJlZCBzdWZmaXggZm9yIFwiJyArIGhhbmRsZSArICdcIiB0YWcgaGFuZGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFQQVRURVJOX1RBR19VUkkudGVzdChwcmVmaXgpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgcHJlZml4IChzZWNvbmQgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3RhdGUudGFnTWFwW2hhbmRsZV0gPSBwcmVmaXg7XG4gIH1cbn07XG5cblxuZnVuY3Rpb24gY2FwdHVyZVNlZ21lbnQoc3RhdGUsIHN0YXJ0LCBlbmQsIGNoZWNrSnNvbikge1xuICB2YXIgX3Bvc2l0aW9uLCBfbGVuZ3RoLCBfY2hhcmFjdGVyLCBfcmVzdWx0O1xuXG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIF9yZXN1bHQgPSBzdGF0ZS5pbnB1dC5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIGlmIChjaGVja0pzb24pIHtcbiAgICAgIGZvciAoX3Bvc2l0aW9uID0gMCwgX2xlbmd0aCA9IF9yZXN1bHQubGVuZ3RoOyBfcG9zaXRpb24gPCBfbGVuZ3RoOyBfcG9zaXRpb24gKz0gMSkge1xuICAgICAgICBfY2hhcmFjdGVyID0gX3Jlc3VsdC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG4gICAgICAgIGlmICghKF9jaGFyYWN0ZXIgPT09IDB4MDkgfHxcbiAgICAgICAgICAgICAgKDB4MjAgPD0gX2NoYXJhY3RlciAmJiBfY2hhcmFjdGVyIDw9IDB4MTBGRkZGKSkpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgdmFsaWQgSlNPTiBjaGFyYWN0ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoUEFUVEVSTl9OT05fUFJJTlRBQkxFLnRlc3QoX3Jlc3VsdCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0aGUgc3RyZWFtIGNvbnRhaW5zIG5vbi1wcmludGFibGUgY2hhcmFjdGVycycpO1xuICAgIH1cblxuICAgIHN0YXRlLnJlc3VsdCArPSBfcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWFwcGluZ3Moc3RhdGUsIGRlc3RpbmF0aW9uLCBzb3VyY2UsIG92ZXJyaWRhYmxlS2V5cykge1xuICB2YXIgc291cmNlS2V5cywga2V5LCBpbmRleCwgcXVhbnRpdHk7XG5cbiAgaWYgKCFjb21tb24uaXNPYmplY3Qoc291cmNlKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW5ub3QgbWVyZ2UgbWFwcGluZ3M7IHRoZSBwcm92aWRlZCBzb3VyY2Ugb2JqZWN0IGlzIHVuYWNjZXB0YWJsZScpO1xuICB9XG5cbiAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgcXVhbnRpdHk7IGluZGV4ICs9IDEpIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcblxuICAgIGlmICghX2hhc093blByb3BlcnR5LmNhbGwoZGVzdGluYXRpb24sIGtleSkpIHtcbiAgICAgIHNldFByb3BlcnR5KGRlc3RpbmF0aW9uLCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIG92ZXJyaWRhYmxlS2V5c1trZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgc3RhcnRMaW5lLCBzdGFydFBvcykge1xuICB2YXIgaW5kZXgsIHF1YW50aXR5O1xuXG4gIC8vIFRoZSBvdXRwdXQgaXMgYSBwbGFpbiBvYmplY3QgaGVyZSwgc28ga2V5cyBjYW4gb25seSBiZSBzdHJpbmdzLlxuICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQga2V5Tm9kZSB0byBhIHN0cmluZywgYnV0IGRvaW5nIHNvIGNhbiBoYW5nIHRoZSBwcm9jZXNzXG4gIC8vIChkZWVwbHkgbmVzdGVkIGFycmF5cyB0aGF0IGV4cGxvZGUgZXhwb25lbnRpYWxseSB1c2luZyBhbGlhc2VzKS5cbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZSkpIHtcbiAgICBrZXlOb2RlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoa2V5Tm9kZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBrZXlOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZVtpbmRleF0pKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduZXN0ZWQgYXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGVbaW5kZXhdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAga2V5Tm9kZVtpbmRleF0gPSAnW29iamVjdCBPYmplY3RdJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBdm9pZCBjb2RlIGV4ZWN1dGlvbiBpbiBsb2FkKCkgdmlhIHRvU3RyaW5nIHByb3BlcnR5XG4gIC8vIChzdGlsbCB1c2UgaXRzIG93biB0b1N0cmluZyBmb3IgYXJyYXlzLCB0aW1lc3RhbXBzLFxuICAvLyBhbmQgd2hhdGV2ZXIgdXNlciBzY2hlbWEgZXh0ZW5zaW9ucyBoYXBwZW4gdG8gaGF2ZSBAQHRvU3RyaW5nVGFnKVxuICBpZiAodHlwZW9mIGtleU5vZGUgPT09ICdvYmplY3QnICYmIF9jbGFzcyhrZXlOb2RlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBrZXlOb2RlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIH1cblxuXG4gIGtleU5vZGUgPSBTdHJpbmcoa2V5Tm9kZSk7XG5cbiAgaWYgKF9yZXN1bHQgPT09IG51bGwpIHtcbiAgICBfcmVzdWx0ID0ge307XG4gIH1cblxuICBpZiAoa2V5VGFnID09PSAndGFnOnlhbWwub3JnLDIwMDI6bWVyZ2UnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVOb2RlKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gdmFsdWVOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGVbaW5kZXhdLCBvdmVycmlkYWJsZUtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGUsIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghc3RhdGUuanNvbiAmJlxuICAgICAgICAhX2hhc093blByb3BlcnR5LmNhbGwob3ZlcnJpZGFibGVLZXlzLCBrZXlOb2RlKSAmJlxuICAgICAgICBfaGFzT3duUHJvcGVydHkuY2FsbChfcmVzdWx0LCBrZXlOb2RlKSkge1xuICAgICAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSB8fCBzdGF0ZS5saW5lO1xuICAgICAgc3RhdGUucG9zaXRpb24gPSBzdGFydFBvcyB8fCBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGVkIG1hcHBpbmcga2V5Jyk7XG4gICAgfVxuICAgIHNldFByb3BlcnR5KF9yZXN1bHQsIGtleU5vZGUsIHZhbHVlTm9kZSk7XG4gICAgZGVsZXRlIG92ZXJyaWRhYmxlS2V5c1trZXlOb2RlXTtcbiAgfVxuXG4gIHJldHVybiBfcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZWFkTGluZUJyZWFrKHN0YXRlKSB7XG4gIHZhciBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgwRC8qIENSICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MEEvKiBMRiAqLykge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2EgbGluZSBicmVhayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgc3RhdGUubGluZSArPSAxO1xuICBzdGF0ZS5saW5lU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgYWxsb3dDb21tZW50cywgY2hlY2tJbmRlbnQpIHtcbiAgdmFyIGxpbmVCcmVha3MgPSAwLFxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGFsbG93Q29tbWVudHMgJiYgY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH0gd2hpbGUgKGNoICE9PSAweDBBLyogTEYgKi8gJiYgY2ggIT09IDB4MEQvKiBDUiAqLyAmJiBjaCAhPT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgbGluZUJyZWFrcysrO1xuICAgICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICAgIHdoaWxlIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSB7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQrKztcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoY2hlY2tJbmRlbnQgIT09IC0xICYmIGxpbmVCcmVha3MgIT09IDAgJiYgc3RhdGUubGluZUluZGVudCA8IGNoZWNrSW5kZW50KSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnZGVmaWNpZW50IGluZGVudGF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbGluZUJyZWFrcztcbn1cblxuZnVuY3Rpb24gdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24pO1xuXG4gIC8vIENvbmRpdGlvbiBzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0IGlzIHRlc3RlZFxuICAvLyBpbiBwYXJlbnQgb24gZWFjaCBjYWxsLCBmb3IgZWZmaWNpZW5jeS4gTm8gbmVlZHMgdG8gdGVzdCBoZXJlIGFnYWluLlxuICBpZiAoKGNoID09PSAweDJELyogLSAqLyB8fCBjaCA9PT0gMHgyRS8qIC4gKi8pICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAxKSAmJlxuICAgICAgY2ggPT09IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uICsgMikpIHtcblxuICAgIF9wb3NpdGlvbiArPSAzO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDAgfHwgaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBjb3VudCkge1xuICBpZiAoY291bnQgPT09IDEpIHtcbiAgICBzdGF0ZS5yZXN1bHQgKz0gJyAnO1xuICB9IGVsc2UgaWYgKGNvdW50ID4gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBjb3VudCAtIDEpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gcmVhZFBsYWluU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50LCB3aXRoaW5GbG93Q29sbGVjdGlvbikge1xuICB2YXIgcHJlY2VkaW5nLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgY2FwdHVyZVN0YXJ0LFxuICAgICAgY2FwdHVyZUVuZCxcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50LFxuICAgICAgX2xpbmUsXG4gICAgICBfbGluZVN0YXJ0LFxuICAgICAgX2xpbmVJbmRlbnQsXG4gICAgICBfa2luZCA9IHN0YXRlLmtpbmQsXG4gICAgICBfcmVzdWx0ID0gc3RhdGUucmVzdWx0LFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoaXNfV1NfT1JfRU9MKGNoKSAgICAgIHx8XG4gICAgICBpc19GTE9XX0lORElDQVRPUihjaCkgfHxcbiAgICAgIGNoID09PSAweDIzLyogIyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjYvKiAmICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyQS8qICogKi8gICAgfHxcbiAgICAgIGNoID09PSAweDIxLyogISAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4N0MvKiB8ICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgzRS8qID4gKi8gICAgfHxcbiAgICAgIGNoID09PSAweDI3LyogJyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjIvKiBcIiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjUvKiAlICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg0MC8qIEAgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDYwLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjaCA9PT0gMHgzRi8qID8gKi8gfHwgY2ggPT09IDB4MkQvKiAtICovKSB7XG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpIHx8XG4gICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihmb2xsb3dpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIHByZWNlZGluZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gLSAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChwcmVjZWRpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB8fFxuICAgICAgICAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgICBicmVhaztcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgICAgX2xpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgIF9saW5lSW5kZW50ID0gc3RhdGUubGluZUluZGVudDtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCAtMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID49IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uID0gY2FwdHVyZUVuZDtcbiAgICAgICAgc3RhdGUubGluZSA9IF9saW5lO1xuICAgICAgICBzdGF0ZS5saW5lU3RhcnQgPSBfbGluZVN0YXJ0O1xuICAgICAgICBzdGF0ZS5saW5lSW5kZW50ID0gX2xpbmVJbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNQZW5kaW5nQ29udGVudCkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc3RhdGUubGluZSAtIF9saW5lKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbiArIDE7XG4gICAgfVxuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuXG4gIGlmIChzdGF0ZS5yZXN1bHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSBfa2luZDtcbiAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNy8qICcgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBzdGF0ZS5wb3NpdGlvbisrO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKChjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pKSAhPT0gMCkge1xuICAgIGlmIChjaCA9PT0gMHgyNy8qICcgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIHRydWUpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIG5vZGVJbmRlbnQpKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIGRvY3VtZW50IHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBzaW5nbGUgcXVvdGVkIHNjYWxhcicpO1xufVxuXG5mdW5jdGlvbiByZWFkRG91YmxlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGV4TGVuZ3RoLFxuICAgICAgaGV4UmVzdWx0LFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjIvKiBcIiAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDIyLyogXCIgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMvKiBcXCAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCk7XG5cbiAgICAgICAgLy8gVE9ETzogcmV3b3JrIHRvIGlubGluZSBmbiB3aXRoIG5vIHR5cGUgY2FzdD9cbiAgICAgIH0gZWxzZSBpZiAoY2ggPCAyNTYgJiYgc2ltcGxlRXNjYXBlQ2hlY2tbY2hdKSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBzaW1wbGVFc2NhcGVNYXBbY2hdO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2UgaWYgKCh0bXAgPSBlc2NhcGVkSGV4TGVuKGNoKSkgPiAwKSB7XG4gICAgICAgIGhleExlbmd0aCA9IHRtcDtcbiAgICAgICAgaGV4UmVzdWx0ID0gMDtcblxuICAgICAgICBmb3IgKDsgaGV4TGVuZ3RoID4gMDsgaGV4TGVuZ3RoLS0pIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoKHRtcCA9IGZyb21IZXhDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgICAgICAgaGV4UmVzdWx0ID0gKGhleFJlc3VsdCA8PCA0KSArIHRtcDtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgaGV4YWRlY2ltYWwgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNoYXJGcm9tQ29kZXBvaW50KGhleFJlc3VsdCk7XG5cbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gZXNjYXBlIHNlcXVlbmNlJyk7XG4gICAgICB9XG5cbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGRvdWJsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgcmVhZE5leHQgPSB0cnVlLFxuICAgICAgX2xpbmUsXG4gICAgICBfdGFnICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9yZXN1bHQsXG4gICAgICBfYW5jaG9yICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIHRlcm1pbmF0b3IsXG4gICAgICBpc1BhaXIsXG4gICAgICBpc0V4cGxpY2l0UGFpcixcbiAgICAgIGlzTWFwcGluZyxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IHt9LFxuICAgICAga2V5Tm9kZSxcbiAgICAgIGtleVRhZyxcbiAgICAgIHZhbHVlTm9kZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDVCLyogWyAqLykge1xuICAgIHRlcm1pbmF0b3IgPSAweDVEOy8qIF0gKi9cbiAgICBpc01hcHBpbmcgPSBmYWxzZTtcbiAgICBfcmVzdWx0ID0gW107XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4N0IvKiB7ICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4N0Q7LyogfSAqL1xuICAgIGlzTWFwcGluZyA9IHRydWU7XG4gICAgX3Jlc3VsdCA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSB0ZXJtaW5hdG9yKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICBzdGF0ZS5raW5kID0gaXNNYXBwaW5nID8gJ21hcHBpbmcnIDogJ3NlcXVlbmNlJztcbiAgICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFyZWFkTmV4dCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ21pc3NlZCBjb21tYSBiZXR3ZWVuIGZsb3cgY29sbGVjdGlvbiBlbnRyaWVzJyk7XG4gICAgfVxuXG4gICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSBmYWxzZTtcblxuICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICAgIGlzUGFpciA9IGlzRXhwbGljaXRQYWlyID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBrZXlUYWcgPSBzdGF0ZS50YWc7XG4gICAga2V5Tm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoKGlzRXhwbGljaXRQYWlyIHx8IHN0YXRlLmxpbmUgPT09IF9saW5lKSAmJiBjaCA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGlzUGFpciA9IHRydWU7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXBwaW5nKSB7XG4gICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlKTtcbiAgICB9IGVsc2UgaWYgKGlzUGFpcikge1xuICAgICAgX3Jlc3VsdC5wdXNoKHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIG51bGwsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Jlc3VsdC5wdXNoKGtleU5vZGUpO1xuICAgIH1cblxuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMHgyQy8qICwgKi8pIHtcbiAgICAgIHJlYWROZXh0ID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhZE5leHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBmbG93IGNvbGxlY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBmb2xkaW5nLFxuICAgICAgY2hvbXBpbmcgICAgICAgPSBDSE9NUElOR19DTElQLFxuICAgICAgZGlkUmVhZENvbnRlbnQgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkSW5kZW50ID0gZmFsc2UsXG4gICAgICB0ZXh0SW5kZW50ICAgICA9IG5vZGVJbmRlbnQsXG4gICAgICBlbXB0eUxpbmVzICAgICA9IDAsXG4gICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlLFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4N0MvKiB8ICovKSB7XG4gICAgZm9sZGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDNFLyogPiAqLykge1xuICAgIGZvbGRpbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJCLyogKyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICAgIGlmIChDSE9NUElOR19DTElQID09PSBjaG9tcGluZykge1xuICAgICAgICBjaG9tcGluZyA9IChjaCA9PT0gMHgyQi8qICsgKi8pID8gQ0hPTVBJTkdfS0VFUCA6IENIT01QSU5HX1NUUklQO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3JlcGVhdCBvZiBhIGNob21waW5nIG1vZGUgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgodG1wID0gZnJvbURlY2ltYWxDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgaWYgKHRtcCA9PT0gMCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGV4cGxpY2l0IGluZGVudGF0aW9uIHdpZHRoIG9mIGEgYmxvY2sgc2NhbGFyOyBpdCBjYW5ub3QgYmUgbGVzcyB0aGFuIG9uZScpO1xuICAgICAgfSBlbHNlIGlmICghZGV0ZWN0ZWRJbmRlbnQpIHtcbiAgICAgICAgdGV4dEluZGVudCA9IG5vZGVJbmRlbnQgKyB0bXAgLSAxO1xuICAgICAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGFuIGluZGVudGF0aW9uIHdpZHRoIGlkZW50aWZpZXInKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSk7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG4gICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKCghZGV0ZWN0ZWRJbmRlbnQgfHwgc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpICYmXG4gICAgICAgICAgIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSkge1xuICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghZGV0ZWN0ZWRJbmRlbnQgJiYgc3RhdGUubGluZUluZGVudCA+IHRleHRJbmRlbnQpIHtcbiAgICAgIHRleHRJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgIH1cblxuICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBlbXB0eUxpbmVzKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBFbmQgb2YgdGhlIHNjYWxhci5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpIHtcblxuICAgICAgLy8gUGVyZm9ybSB0aGUgY2hvbXBpbmcuXG4gICAgICBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0tFRVApIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGRpZFJlYWRDb250ZW50ID8gMSArIGVtcHR5TGluZXMgOiBlbXB0eUxpbmVzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0NMSVApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB0aGUgc2NhbGFyIGlzIG5vdCBlbXB0eS5cbiAgICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnJlYWsgdGhpcyBgd2hpbGVgIGN5Y2xlIGFuZCBnbyB0byB0aGUgZnVuY2l0b24ncyBlcGlsb2d1ZS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEZvbGRlZCBzdHlsZTogdXNlIGZhbmN5IHJ1bGVzIHRvIGhhbmRsZSBsaW5lIGJyZWFrcy5cbiAgICBpZiAoZm9sZGluZykge1xuXG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgKG1vcmUtaW5kZW50ZWQgbGluZXMpIGFyZSBub3QgZm9sZGVkLlxuICAgICAgaWYgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IHRydWU7XG4gICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNvbnRlbnQgbGluZSAoY2YuIEV4YW1wbGUgOC4xKVxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuXG4gICAgICAvLyBFbmQgb2YgbW9yZS1pbmRlbnRlZCBibG9jay5cbiAgICAgIH0gZWxzZSBpZiAoYXRNb3JlSW5kZW50ZWQpIHtcbiAgICAgICAgYXRNb3JlSW5kZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMgKyAxKTtcblxuICAgICAgLy8gSnVzdCBvbmUgbGluZSBicmVhayAtIHBlcmNlaXZlIGFzIHRoZSBzYW1lIGxpbmUuXG4gICAgICB9IGVsc2UgaWYgKGVtcHR5TGluZXMgPT09IDApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB3ZSBoYXZlIGFscmVhZHkgcmVhZCBzb21lIHNjYWxhciBjb250ZW50LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gICAgICAgIH1cblxuICAgICAgLy8gU2V2ZXJhbCBsaW5lIGJyZWFrcyAtIHBlcmNlaXZlIGFzIGRpZmZlcmVudCBsaW5lcy5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBlbXB0eUxpbmVzKTtcbiAgICAgIH1cblxuICAgIC8vIExpdGVyYWwgc3R5bGU6IGp1c3QgYWRkIGV4YWN0IG51bWJlciBvZiBsaW5lIGJyZWFrcyBiZXR3ZWVuIGNvbnRlbnQgbGluZXMuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEtlZXAgYWxsIGxpbmUgYnJlYWtzIGV4Y2VwdCB0aGUgaGVhZGVyIGxpbmUgYnJlYWsuXG4gICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgIH1cblxuICAgIGRpZFJlYWRDb250ZW50ID0gdHJ1ZTtcbiAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgZW1wdHlMaW5lcyA9IDA7XG4gICAgY2FwdHVyZVN0YXJ0ID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2VxdWVuY2Uoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIF9saW5lLFxuICAgICAgX3RhZyAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgX3Jlc3VsdCAgID0gW10sXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBkZXRlY3RlZCAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuXG4gICAgaWYgKGNoICE9PSAweDJELyogLSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKCFpc19XU19PUl9FT0woZm9sbG93aW5nKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA8PSBub2RlSW5kZW50KSB7XG4gICAgICAgIF9yZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX0lOLCBmYWxzZSwgdHJ1ZSk7XG4gICAgX3Jlc3VsdC5wdXNoKHN0YXRlLnJlc3VsdCk7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpICYmIChjaCAhPT0gMCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgaW5kZW50YXRpb24gb2YgYSBzZXF1ZW5jZSBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ3NlcXVlbmNlJztcbiAgICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgbm9kZUluZGVudCwgZmxvd0luZGVudCkge1xuICB2YXIgZm9sbG93aW5nLFxuICAgICAgYWxsb3dDb21wYWN0LFxuICAgICAgX2xpbmUsXG4gICAgICBfcG9zLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9hbmNob3IgICAgICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgICAgID0ge30sXG4gICAgICBvdmVycmlkYWJsZUtleXMgPSB7fSxcbiAgICAgIGtleVRhZyAgICAgICAgPSBudWxsLFxuICAgICAga2V5Tm9kZSAgICAgICA9IG51bGwsXG4gICAgICB2YWx1ZU5vZGUgICAgID0gbnVsbCxcbiAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkICAgICAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgbGluZS5cbiAgICBfcG9zID0gc3RhdGUucG9zaXRpb247XG5cbiAgICAvL1xuICAgIC8vIEV4cGxpY2l0IG5vdGF0aW9uIGNhc2UuIFRoZXJlIGFyZSB0d28gc2VwYXJhdGUgYmxvY2tzOlxuICAgIC8vIGZpcnN0IGZvciB0aGUga2V5IChkZW5vdGVkIGJ5IFwiP1wiKSBhbmQgc2Vjb25kIGZvciB0aGUgdmFsdWUgKGRlbm90ZWQgYnkgXCI6XCIpXG4gICAgLy9cbiAgICBpZiAoKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgzQS8qIDogKi8pICYmIGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCk7XG4gICAgICAgICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSB0cnVlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2UgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgLy8gaS5lLiAweDNBLyogOiAqLyA9PT0gY2hhcmFjdGVyIGFmdGVyIHRoZSBleHBsaWNpdCBrZXkuXG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZTtcbiAgICAgICAgYWxsb3dDb21wYWN0ID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2luY29tcGxldGUgZXhwbGljaXQgbWFwcGluZyBwYWlyOyBhIGtleSBub2RlIGlzIG1pc3NlZDsgb3IgZm9sbG93ZWQgYnkgYSBub24tdGFidWxhdGVkIGVtcHR5IGxpbmUnKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgICAgIGNoID0gZm9sbG93aW5nO1xuXG4gICAgLy9cbiAgICAvLyBJbXBsaWNpdCBub3RhdGlvbiBjYXNlLiBGbG93LXN0eWxlIG5vZGUgYXMgdGhlIGtleSBmaXJzdCwgdGhlbiBcIjpcIiwgYW5kIHRoZSB2YWx1ZS5cbiAgICAvL1xuICAgIH0gZWxzZSBpZiAoY29tcG9zZU5vZGUoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19PVVQsIGZhbHNlLCB0cnVlKSkge1xuXG4gICAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICghaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXIgaXMgZXhwZWN0ZWQgYWZ0ZXIgdGhlIGtleS12YWx1ZSBzZXBhcmF0b3Igd2l0aGluIGEgYmxvY2sgbWFwcGluZycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCk7XG4gICAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICAgIGFsbG93Q29tcGFjdCA9IGZhbHNlO1xuICAgICAgICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGFuIGltcGxpY2l0IG1hcHBpbmcgcGFpcjsgYSBjb2xvbiBpcyBtaXNzZWQnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCB0aGUgcmVzdWx0IG9mIGBjb21wb3NlTm9kZWAuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGEgYmxvY2sgbWFwcGluZyBlbnRyeTsgYSBtdWx0aWxpbmUga2V5IG1heSBub3QgYmUgYW4gaW1wbGljaXQga2V5Jyk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhazsgLy8gUmVhZGluZyBpcyBkb25lLiBHbyB0byB0aGUgZXBpbG9ndWUuXG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBDb21tb24gcmVhZGluZyBjb2RlIGZvciBib3RoIGV4cGxpY2l0IGFuZCBpbXBsaWNpdCBub3RhdGlvbnMuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpIHtcbiAgICAgIGlmIChjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9CTE9DS19PVVQsIHRydWUsIGFsbG93Q29tcGFjdCkpIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgX2xpbmUsIF9wb3MpO1xuICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIG1hcHBpbmcgZW50cnknKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBub2RlSW5kZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBFcGlsb2d1ZS5cbiAgLy9cblxuICAvLyBTcGVjaWFsIGNhc2U6IGxhc3QgbWFwcGluZydzIG5vZGUgY29udGFpbnMgb25seSB0aGUga2V5IGluIGV4cGxpY2l0IG5vdGF0aW9uLlxuICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgfVxuXG4gIC8vIEV4cG9zZSB0aGUgcmVzdWx0aW5nIG1hcHBpbmcuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ21hcHBpbmcnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uLFxuICAgICAgaXNWZXJiYXRpbSA9IGZhbHNlLFxuICAgICAgaXNOYW1lZCAgICA9IGZhbHNlLFxuICAgICAgdGFnSGFuZGxlLFxuICAgICAgdGFnTmFtZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDIxLyogISAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS50YWcgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYSB0YWcgcHJvcGVydHknKTtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4M0MvKiA8ICovKSB7XG4gICAgaXNWZXJiYXRpbSA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgaXNOYW1lZCA9IHRydWU7XG4gICAgdGFnSGFuZGxlID0gJyEhJztcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIHtcbiAgICB0YWdIYW5kbGUgPSAnISc7XG4gIH1cblxuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICBpZiAoaXNWZXJiYXRpbSkge1xuICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgd2hpbGUgKGNoICE9PSAwICYmIGNoICE9PSAweDNFLyogPiAqLyk7XG5cbiAgICBpZiAoc3RhdGUucG9zaXRpb24gPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgdmVyYmF0aW0gdGFnJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgICAgIGlmICghaXNOYW1lZCkge1xuICAgICAgICAgIHRhZ0hhbmRsZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiAtIDEsIHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgICAgICBpZiAoIVBBVFRFUk5fVEFHX0hBTkRMRS50ZXN0KHRhZ0hhbmRsZSkpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduYW1lZCB0YWcgaGFuZGxlIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVycycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlzTmFtZWQgPSB0cnVlO1xuICAgICAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBleGNsYW1hdGlvbiBtYXJrcycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0YWdOYW1lID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoUEFUVEVSTl9GTE9XX0lORElDQVRPUlMudGVzdCh0YWdOYW1lKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBzdWZmaXggY2Fubm90IGNvbnRhaW4gZmxvdyBpbmRpY2F0b3IgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YWdOYW1lICYmICFQQVRURVJOX1RBR19VUkkudGVzdCh0YWdOYW1lKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgbmFtZSBjYW5ub3QgY29udGFpbiBzdWNoIGNoYXJhY3RlcnM6ICcgKyB0YWdOYW1lKTtcbiAgfVxuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgc3RhdGUudGFnID0gdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnRhZ01hcCwgdGFnSGFuZGxlKSkge1xuICAgIHN0YXRlLnRhZyA9IHN0YXRlLnRhZ01hcFt0YWdIYW5kbGVdICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEnKSB7XG4gICAgc3RhdGUudGFnID0gJyEnICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEhJykge1xuICAgIHN0YXRlLnRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnTmFtZTtcblxuICB9IGVsc2Uge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmRlY2xhcmVkIHRhZyBoYW5kbGUgXCInICsgdGFnSGFuZGxlICsgJ1wiJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNi8qICYgKi8pIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mIGFuIGFuY2hvciBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYW5jaG9yIG5vZGUgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgfVxuXG4gIHN0YXRlLmFuY2hvciA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFsaWFzKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sIGFsaWFzLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MkEvKiAqICovKSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYWxpYXMgbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgYWxpYXMgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoIV9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLmFuY2hvck1hcCwgYWxpYXMpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuaWRlbnRpZmllZCBhbGlhcyBcIicgKyBhbGlhcyArICdcIicpO1xuICB9XG5cbiAgc3RhdGUucmVzdWx0ID0gc3RhdGUuYW5jaG9yTWFwW2FsaWFzXTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZU5vZGUoc3RhdGUsIHBhcmVudEluZGVudCwgbm9kZUNvbnRleHQsIGFsbG93VG9TZWVrLCBhbGxvd0NvbXBhY3QpIHtcbiAgdmFyIGFsbG93QmxvY2tTdHlsZXMsXG4gICAgICBhbGxvd0Jsb2NrU2NhbGFycyxcbiAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyxcbiAgICAgIGluZGVudFN0YXR1cyA9IDEsIC8vIDE6IHRoaXM+cGFyZW50LCAwOiB0aGlzPXBhcmVudCwgLTE6IHRoaXM8cGFyZW50XG4gICAgICBhdE5ld0xpbmUgID0gZmFsc2UsXG4gICAgICBoYXNDb250ZW50ID0gZmFsc2UsXG4gICAgICB0eXBlSW5kZXgsXG4gICAgICB0eXBlUXVhbnRpdHksXG4gICAgICB0eXBlLFxuICAgICAgZmxvd0luZGVudCxcbiAgICAgIGJsb2NrSW5kZW50O1xuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdvcGVuJywgc3RhdGUpO1xuICB9XG5cbiAgc3RhdGUudGFnICAgID0gbnVsbDtcbiAgc3RhdGUuYW5jaG9yID0gbnVsbDtcbiAgc3RhdGUua2luZCAgID0gbnVsbDtcbiAgc3RhdGUucmVzdWx0ID0gbnVsbDtcblxuICBhbGxvd0Jsb2NrU3R5bGVzID0gYWxsb3dCbG9ja1NjYWxhcnMgPSBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPVxuICAgIENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCB8fFxuICAgIENPTlRFWFRfQkxPQ0tfSU4gID09PSBub2RlQ29udGV4dDtcblxuICBpZiAoYWxsb3dUb1NlZWspIHtcbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgaW5kZW50U3RhdHVzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgd2hpbGUgKHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkgfHwgcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSkge1xuICAgICAgaWYgKHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKSkge1xuICAgICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBhbGxvd0Jsb2NrU3R5bGVzO1xuXG4gICAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgICAgaW5kZW50U3RhdHVzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucykge1xuICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGF0TmV3TGluZSB8fCBhbGxvd0NvbXBhY3Q7XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxIHx8IENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCkge1xuICAgIGlmIChDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0IHx8IENPTlRFWFRfRkxPV19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50ICsgMTtcbiAgICB9XG5cbiAgICBibG9ja0luZGVudCA9IHN0YXRlLnBvc2l0aW9uIC0gc3RhdGUubGluZVN0YXJ0O1xuXG4gICAgaWYgKGluZGVudFN0YXR1cyA9PT0gMSkge1xuICAgICAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJlxuICAgICAgICAgIChyZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpIHx8XG4gICAgICAgICAgIHJlYWRCbG9ja01hcHBpbmcoc3RhdGUsIGJsb2NrSW5kZW50LCBmbG93SW5kZW50KSkgfHxcbiAgICAgICAgICByZWFkRmxvd0NvbGxlY3Rpb24oc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChhbGxvd0Jsb2NrU2NhbGFycyAmJiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgICAgcmVhZFNpbmdsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkgfHxcbiAgICAgICAgICAgIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkQWxpYXMoc3RhdGUpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsIHx8IHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2FsaWFzIG5vZGUgc2hvdWxkIG5vdCBoYXZlIGFueSBwcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVhZFBsYWluU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50LCBDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0KSkge1xuICAgICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlLnRhZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUudGFnID0gJz8nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5kZW50U3RhdHVzID09PSAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2U6IGJsb2NrIHNlcXVlbmNlcyBhcmUgYWxsb3dlZCB0byBoYXZlIHNhbWUgaW5kZW50YXRpb24gbGV2ZWwgYXMgdGhlIHBhcmVudC5cbiAgICAgIC8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjc5OTc4NFxuICAgICAgaGFzQ29udGVudCA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnIScpIHtcbiAgICBpZiAoc3RhdGUudGFnID09PSAnPycpIHtcbiAgICAgIC8vIEltcGxpY2l0IHJlc29sdmluZyBpcyBub3QgYWxsb3dlZCBmb3Igbm9uLXNjYWxhciB0eXBlcywgYW5kICc/J1xuICAgICAgLy8gbm9uLXNwZWNpZmljIHRhZyBpcyBvbmx5IGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgdG8gcGxhaW4gc2NhbGFycy5cbiAgICAgIC8vXG4gICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gY2hlY2sga2luZCBjb25mb3JtaXR5IGluIGNhc2UgdXNlciBleHBsaWNpdGx5IGFzc2lnbnMgJz8nXG4gICAgICAvLyB0YWcsIGZvciBleGFtcGxlIGxpa2UgdGhpczogXCIhPD8+IFswXVwiXG4gICAgICAvL1xuICAgICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiBzdGF0ZS5raW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITw/PiB0YWc7IGl0IHNob3VsZCBiZSBcInNjYWxhclwiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHR5cGVJbmRleCA9IDAsIHR5cGVRdWFudGl0eSA9IHN0YXRlLmltcGxpY2l0VHlwZXMubGVuZ3RoOyB0eXBlSW5kZXggPCB0eXBlUXVhbnRpdHk7IHR5cGVJbmRleCArPSAxKSB7XG4gICAgICAgIHR5cGUgPSBzdGF0ZS5pbXBsaWNpdFR5cGVzW3R5cGVJbmRleF07XG5cbiAgICAgICAgaWYgKHR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgICAgIHN0YXRlLnJlc3VsdCA9IHR5cGUuY29uc3RydWN0KHN0YXRlLnJlc3VsdCk7XG4gICAgICAgICAgc3RhdGUudGFnID0gdHlwZS50YWc7XG4gICAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ10sIHN0YXRlLnRhZykpIHtcbiAgICAgIHR5cGUgPSBzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ11bc3RhdGUudGFnXTtcblxuICAgICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlLmtpbmQgIT09IHN0YXRlLmtpbmQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuYWNjZXB0YWJsZSBub2RlIGtpbmQgZm9yICE8JyArIHN0YXRlLnRhZyArICc+IHRhZzsgaXQgc2hvdWxkIGJlIFwiJyArIHR5cGUua2luZCArICdcIiwgbm90IFwiJyArIHN0YXRlLmtpbmQgKyAnXCInKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0eXBlLnJlc29sdmUoc3RhdGUucmVzdWx0KSkgeyAvLyBgc3RhdGUucmVzdWx0YCB1cGRhdGVkIGluIHJlc29sdmVyIGlmIG1hdGNoZWRcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCByZXNvbHZlIGEgbm9kZSB3aXRoICE8JyArIHN0YXRlLnRhZyArICc+IGV4cGxpY2l0IHRhZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0KTtcbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmtub3duIHRhZyAhPCcgKyBzdGF0ZS50YWcgKyAnPicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdjbG9zZScsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gc3RhdGUudGFnICE9PSBudWxsIHx8ICBzdGF0ZS5hbmNob3IgIT09IG51bGwgfHwgaGFzQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcmVhZERvY3VtZW50KHN0YXRlKSB7XG4gIHZhciBkb2N1bWVudFN0YXJ0ID0gc3RhdGUucG9zaXRpb24sXG4gICAgICBfcG9zaXRpb24sXG4gICAgICBkaXJlY3RpdmVOYW1lLFxuICAgICAgZGlyZWN0aXZlQXJncyxcbiAgICAgIGhhc0RpcmVjdGl2ZXMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIHN0YXRlLnZlcnNpb24gPSBudWxsO1xuICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSBzdGF0ZS5sZWdhY3k7XG4gIHN0YXRlLnRhZ01hcCA9IHt9O1xuICBzdGF0ZS5hbmNob3JNYXAgPSB7fTtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gMCB8fCBjaCAhPT0gMHgyNS8qICUgKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZXMgPSB0cnVlO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRpcmVjdGl2ZU5hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICBkaXJlY3RpdmVBcmdzID0gW107XG5cbiAgICBpZiAoZGlyZWN0aXZlTmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlIG5hbWUgbXVzdCBub3QgYmUgbGVzcyB0aGFuIG9uZSBjaGFyYWN0ZXIgaW4gbGVuZ3RoJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX0VPTChjaCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzX0VPTChjaCkpIGJyZWFrO1xuXG4gICAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGlyZWN0aXZlQXJncy5wdXNoKHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBpZiAoY2ggIT09IDApIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcmVjdGl2ZUhhbmRsZXJzLCBkaXJlY3RpdmVOYW1lKSkge1xuICAgICAgZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlTmFtZV0oc3RhdGUsIGRpcmVjdGl2ZU5hbWUsIGRpcmVjdGl2ZUFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bmtub3duIGRvY3VtZW50IGRpcmVjdGl2ZSBcIicgKyBkaXJlY3RpdmVOYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9XG5cbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSAwICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSAgICAgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSkgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMikgPT09IDB4MkQvKiAtICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMztcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgfSBlbHNlIGlmIChoYXNEaXJlY3RpdmVzKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2RpcmVjdGl2ZXMgZW5kIG1hcmsgaXMgZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGNvbXBvc2VOb2RlKHN0YXRlLCBzdGF0ZS5saW5lSW5kZW50IC0gMSwgQ09OVEVYVF9CTE9DS19PVVQsIGZhbHNlLCB0cnVlKTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5jaGVja0xpbmVCcmVha3MgJiZcbiAgICAgIFBBVFRFUk5fTk9OX0FTQ0lJX0xJTkVfQlJFQUtTLnRlc3Qoc3RhdGUuaW5wdXQuc2xpY2UoZG9jdW1lbnRTdGFydCwgc3RhdGUucG9zaXRpb24pKSkge1xuICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ25vbi1BU0NJSSBsaW5lIGJyZWFrcyBhcmUgaW50ZXJwcmV0ZWQgYXMgY29udGVudCcpO1xuICB9XG5cbiAgc3RhdGUuZG9jdW1lbnRzLnB1c2goc3RhdGUucmVzdWx0KTtcblxuICBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG5cbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MkUvKiAuICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUucG9zaXRpb24gPCAoc3RhdGUubGVuZ3RoIC0gMSkpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZW5kIG9mIHRoZSBzdHJlYW0gb3IgYSBkb2N1bWVudCBzZXBhcmF0b3IgaXMgZXhwZWN0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKSB7XG4gIGlucHV0ID0gU3RyaW5nKGlucHV0KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gMCkge1xuXG4gICAgLy8gQWRkIHRhaWxpbmcgYFxcbmAgaWYgbm90IGV4aXN0c1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBBLyogTEYgKi8gJiZcbiAgICAgICAgaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSAhPT0gMHgwRC8qIENSICovKSB7XG4gICAgICBpbnB1dCArPSAnXFxuJztcbiAgICB9XG5cbiAgICAvLyBTdHJpcCBCT01cbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZShpbnB1dCwgb3B0aW9ucyk7XG5cbiAgdmFyIG51bGxwb3MgPSBpbnB1dC5pbmRleE9mKCdcXDAnKTtcblxuICBpZiAobnVsbHBvcyAhPT0gLTEpIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiA9IG51bGxwb3M7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ251bGwgYnl0ZSBpcyBub3QgYWxsb3dlZCBpbiBpbnB1dCcpO1xuICB9XG5cbiAgLy8gVXNlIDAgYXMgc3RyaW5nIHRlcm1pbmF0b3IuIFRoYXQgc2lnbmlmaWNhbnRseSBzaW1wbGlmaWVzIGJvdW5kcyBjaGVjay5cbiAgc3RhdGUuaW5wdXQgKz0gJ1xcMCc7XG5cbiAgd2hpbGUgKHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICBzdGF0ZS5saW5lSW5kZW50ICs9IDE7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHJlYWREb2N1bWVudChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUuZG9jdW1lbnRzO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBvcHRpb25zKSB7XG4gIGlmIChpdGVyYXRvciAhPT0gbnVsbCAmJiB0eXBlb2YgaXRlcmF0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IG51bGw7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRzID0gbG9hZERvY3VtZW50cyhpbnB1dCwgb3B0aW9ucyk7XG5cbiAgaWYgKHR5cGVvZiBpdGVyYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkb2N1bWVudHM7XG4gIH1cblxuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGRvY3VtZW50cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgaXRlcmF0b3IoZG9jdW1lbnRzW2luZGV4XSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8qZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkKi9cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRzWzBdO1xuICB9XG4gIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdleHBlY3RlZCBhIHNpbmdsZSBkb2N1bWVudCBpbiB0aGUgc3RyZWFtLCBidXQgZm91bmQgbW9yZScpO1xufVxuXG5cbmZ1bmN0aW9uIHNhZmVMb2FkQWxsKGlucHV0LCBpdGVyYXRvciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGl0ZXJhdG9yID09PSAnb2JqZWN0JyAmJiBpdGVyYXRvciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gaXRlcmF0b3I7XG4gICAgaXRlcmF0b3IgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxuXG5mdW5jdGlvbiBzYWZlTG9hZChpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gbG9hZChpbnB1dCwgY29tbW9uLmV4dGVuZCh7IHNjaGVtYTogREVGQVVMVF9TQUZFX1NDSEVNQSB9LCBvcHRpb25zKSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMubG9hZEFsbCAgICAgPSBsb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMubG9hZCAgICAgICAgPSBsb2FkO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWRBbGwgPSBzYWZlTG9hZEFsbDtcbm1vZHVsZS5leHBvcnRzLnNhZmVMb2FkICAgID0gc2FmZUxvYWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxudmFyIGNvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gICAgICAgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIERFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcbnZhciBERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9zY2hlbWEvZGVmYXVsdF9zYWZlJyk7XG5cbnZhciBfdG9TdHJpbmcgICAgICAgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBDSEFSX1RBQiAgICAgICAgICAgICAgICAgID0gMHgwOTsgLyogVGFiICovXG52YXIgQ0hBUl9MSU5FX0ZFRUQgICAgICAgICAgICA9IDB4MEE7IC8qIExGICovXG52YXIgQ0hBUl9DQVJSSUFHRV9SRVRVUk4gICAgICA9IDB4MEQ7IC8qIENSICovXG52YXIgQ0hBUl9TUEFDRSAgICAgICAgICAgICAgICA9IDB4MjA7IC8qIFNwYWNlICovXG52YXIgQ0hBUl9FWENMQU1BVElPTiAgICAgICAgICA9IDB4MjE7IC8qICEgKi9cbnZhciBDSEFSX0RPVUJMRV9RVU9URSAgICAgICAgID0gMHgyMjsgLyogXCIgKi9cbnZhciBDSEFSX1NIQVJQICAgICAgICAgICAgICAgID0gMHgyMzsgLyogIyAqL1xudmFyIENIQVJfUEVSQ0VOVCAgICAgICAgICAgICAgPSAweDI1OyAvKiAlICovXG52YXIgQ0hBUl9BTVBFUlNBTkQgICAgICAgICAgICA9IDB4MjY7IC8qICYgKi9cbnZhciBDSEFSX1NJTkdMRV9RVU9URSAgICAgICAgID0gMHgyNzsgLyogJyAqL1xudmFyIENIQVJfQVNURVJJU0sgICAgICAgICAgICAgPSAweDJBOyAvKiAqICovXG52YXIgQ0hBUl9DT01NQSAgICAgICAgICAgICAgICA9IDB4MkM7IC8qICwgKi9cbnZhciBDSEFSX01JTlVTICAgICAgICAgICAgICAgID0gMHgyRDsgLyogLSAqL1xudmFyIENIQVJfQ09MT04gICAgICAgICAgICAgICAgPSAweDNBOyAvKiA6ICovXG52YXIgQ0hBUl9FUVVBTFMgICAgICAgICAgICAgICA9IDB4M0Q7IC8qID0gKi9cbnZhciBDSEFSX0dSRUFURVJfVEhBTiAgICAgICAgID0gMHgzRTsgLyogPiAqL1xudmFyIENIQVJfUVVFU1RJT04gICAgICAgICAgICAgPSAweDNGOyAvKiA/ICovXG52YXIgQ0hBUl9DT01NRVJDSUFMX0FUICAgICAgICA9IDB4NDA7IC8qIEAgKi9cbnZhciBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQgID0gMHg1QjsgLyogWyAqL1xudmFyIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQgPSAweDVEOyAvKiBdICovXG52YXIgQ0hBUl9HUkFWRV9BQ0NFTlQgICAgICAgICA9IDB4NjA7IC8qIGAgKi9cbnZhciBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVCAgID0gMHg3QjsgLyogeyAqL1xudmFyIENIQVJfVkVSVElDQUxfTElORSAgICAgICAgPSAweDdDOyAvKiB8ICovXG52YXIgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUICA9IDB4N0Q7IC8qIH0gKi9cblxudmFyIEVTQ0FQRV9TRVFVRU5DRVMgPSB7fTtcblxuRVNDQVBFX1NFUVVFTkNFU1sweDAwXSAgID0gJ1xcXFwwJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwN10gICA9ICdcXFxcYSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDhdICAgPSAnXFxcXGInO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA5XSAgID0gJ1xcXFx0JztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQV0gICA9ICdcXFxcbic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MEJdICAgPSAnXFxcXHYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBDXSAgID0gJ1xcXFxmJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwRF0gICA9ICdcXFxccic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MUJdICAgPSAnXFxcXGUnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIyXSAgID0gJ1xcXFxcIic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4NUNdICAgPSAnXFxcXFxcXFwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDg1XSAgID0gJ1xcXFxOJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHhBMF0gICA9ICdcXFxcXyc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOF0gPSAnXFxcXEwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIwMjldID0gJ1xcXFxQJztcblxudmFyIERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYID0gW1xuICAneScsICdZJywgJ3llcycsICdZZXMnLCAnWUVTJywgJ29uJywgJ09uJywgJ09OJyxcbiAgJ24nLCAnTicsICdubycsICdObycsICdOTycsICdvZmYnLCAnT2ZmJywgJ09GRidcbl07XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZU1hcChzY2hlbWEsIG1hcCkge1xuICB2YXIgcmVzdWx0LCBrZXlzLCBpbmRleCwgbGVuZ3RoLCB0YWcsIHN0eWxlLCB0eXBlO1xuXG4gIGlmIChtYXAgPT09IG51bGwpIHJldHVybiB7fTtcblxuICByZXN1bHQgPSB7fTtcbiAga2V5cyA9IE9iamVjdC5rZXlzKG1hcCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHRhZyA9IGtleXNbaW5kZXhdO1xuICAgIHN0eWxlID0gU3RyaW5nKG1hcFt0YWddKTtcblxuICAgIGlmICh0YWcuc2xpY2UoMCwgMikgPT09ICchIScpIHtcbiAgICAgIHRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnLnNsaWNlKDIpO1xuICAgIH1cbiAgICB0eXBlID0gc2NoZW1hLmNvbXBpbGVkVHlwZU1hcFsnZmFsbGJhY2snXVt0YWddO1xuXG4gICAgaWYgKHR5cGUgJiYgX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5zdHlsZUFsaWFzZXMsIHN0eWxlKSkge1xuICAgICAgc3R5bGUgPSB0eXBlLnN0eWxlQWxpYXNlc1tzdHlsZV07XG4gICAgfVxuXG4gICAgcmVzdWx0W3RhZ10gPSBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUhleChjaGFyYWN0ZXIpIHtcbiAgdmFyIHN0cmluZywgaGFuZGxlLCBsZW5ndGg7XG5cbiAgc3RyaW5nID0gY2hhcmFjdGVyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgPD0gMHhGRikge1xuICAgIGhhbmRsZSA9ICd4JztcbiAgICBsZW5ndGggPSAyO1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkYpIHtcbiAgICBoYW5kbGUgPSAndSc7XG4gICAgbGVuZ3RoID0gNDtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPD0gMHhGRkZGRkZGRikge1xuICAgIGhhbmRsZSA9ICdVJztcbiAgICBsZW5ndGggPSA4O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdjb2RlIHBvaW50IHdpdGhpbiBhIHN0cmluZyBtYXkgbm90IGJlIGdyZWF0ZXIgdGhhbiAweEZGRkZGRkZGJyk7XG4gIH1cblxuICByZXR1cm4gJ1xcXFwnICsgaGFuZGxlICsgY29tbW9uLnJlcGVhdCgnMCcsIGxlbmd0aCAtIHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBTdGF0ZShvcHRpb25zKSB7XG4gIHRoaXMuc2NoZW1hICAgICAgICA9IG9wdGlvbnNbJ3NjaGVtYSddIHx8IERFRkFVTFRfRlVMTF9TQ0hFTUE7XG4gIHRoaXMuaW5kZW50ICAgICAgICA9IE1hdGgubWF4KDEsIChvcHRpb25zWydpbmRlbnQnXSB8fCAyKSk7XG4gIHRoaXMubm9BcnJheUluZGVudCA9IG9wdGlvbnNbJ25vQXJyYXlJbmRlbnQnXSB8fCBmYWxzZTtcbiAgdGhpcy5za2lwSW52YWxpZCAgID0gb3B0aW9uc1snc2tpcEludmFsaWQnXSB8fCBmYWxzZTtcbiAgdGhpcy5mbG93TGV2ZWwgICAgID0gKGNvbW1vbi5pc05vdGhpbmcob3B0aW9uc1snZmxvd0xldmVsJ10pID8gLTEgOiBvcHRpb25zWydmbG93TGV2ZWwnXSk7XG4gIHRoaXMuc3R5bGVNYXAgICAgICA9IGNvbXBpbGVTdHlsZU1hcCh0aGlzLnNjaGVtYSwgb3B0aW9uc1snc3R5bGVzJ10gfHwgbnVsbCk7XG4gIHRoaXMuc29ydEtleXMgICAgICA9IG9wdGlvbnNbJ3NvcnRLZXlzJ10gfHwgZmFsc2U7XG4gIHRoaXMubGluZVdpZHRoICAgICA9IG9wdGlvbnNbJ2xpbmVXaWR0aCddIHx8IDgwO1xuICB0aGlzLm5vUmVmcyAgICAgICAgPSBvcHRpb25zWydub1JlZnMnXSB8fCBmYWxzZTtcbiAgdGhpcy5ub0NvbXBhdE1vZGUgID0gb3B0aW9uc1snbm9Db21wYXRNb2RlJ10gfHwgZmFsc2U7XG4gIHRoaXMuY29uZGVuc2VGbG93ICA9IG9wdGlvbnNbJ2NvbmRlbnNlRmxvdyddIHx8IGZhbHNlO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMuZXhwbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkRXhwbGljaXQ7XG5cbiAgdGhpcy50YWcgPSBudWxsO1xuICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIHRoaXMuZHVwbGljYXRlcyA9IFtdO1xuICB0aGlzLnVzZWREdXBsaWNhdGVzID0gbnVsbDtcbn1cblxuLy8gSW5kZW50cyBldmVyeSBsaW5lIGluIGEgc3RyaW5nLiBFbXB0eSBsaW5lcyAoXFxuIG9ubHkpIGFyZSBub3QgaW5kZW50ZWQuXG5mdW5jdGlvbiBpbmRlbnRTdHJpbmcoc3RyaW5nLCBzcGFjZXMpIHtcbiAgdmFyIGluZCA9IGNvbW1vbi5yZXBlYXQoJyAnLCBzcGFjZXMpLFxuICAgICAgcG9zaXRpb24gPSAwLFxuICAgICAgbmV4dCA9IC0xLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBsaW5lLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICBuZXh0ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicsIHBvc2l0aW9uKTtcbiAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24pO1xuICAgICAgcG9zaXRpb24gPSBsZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24sIG5leHQgKyAxKTtcbiAgICAgIHBvc2l0aW9uID0gbmV4dCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGxpbmUubGVuZ3RoICYmIGxpbmUgIT09ICdcXG4nKSByZXN1bHQgKz0gaW5kO1xuXG4gICAgcmVzdWx0ICs9IGxpbmU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCkge1xuICByZXR1cm4gJ1xcbicgKyBjb21tb24ucmVwZWF0KCcgJywgc3RhdGUuaW5kZW50ICogbGV2ZWwpO1xufVxuXG5mdW5jdGlvbiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cikge1xuICB2YXIgaW5kZXgsIGxlbmd0aCwgdHlwZTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbaW5kZXhdO1xuXG4gICAgaWYgKHR5cGUucmVzb2x2ZShzdHIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFszM10gcy13aGl0ZSA6Oj0gcy1zcGFjZSB8IHMtdGFiXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoYykge1xuICByZXR1cm4gYyA9PT0gQ0hBUl9TUEFDRSB8fCBjID09PSBDSEFSX1RBQjtcbn1cblxuLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIHByaW50ZWQgd2l0aG91dCBlc2NhcGluZy5cbi8vIEZyb20gWUFNTCAxLjI6IFwiYW55IGFsbG93ZWQgY2hhcmFjdGVycyBrbm93biB0byBiZSBub24tcHJpbnRhYmxlXG4vLyBzaG91bGQgYWxzbyBiZSBlc2NhcGVkLiBbSG93ZXZlcixdIFRoaXMgaXNuXHUyMDE5dCBtYW5kYXRvcnlcIlxuLy8gRGVyaXZlZCBmcm9tIG5iLWNoYXIgLSBcXHQgLSAjeDg1IC0gI3hBMCAtICN4MjAyOCAtICN4MjAyOS5cbmZ1bmN0aW9uIGlzUHJpbnRhYmxlKGMpIHtcbiAgcmV0dXJuICAoMHgwMDAyMCA8PSBjICYmIGMgPD0gMHgwMDAwN0UpXG4gICAgICB8fCAoKDB4MDAwQTEgPD0gYyAmJiBjIDw9IDB4MDBEN0ZGKSAmJiBjICE9PSAweDIwMjggJiYgYyAhPT0gMHgyMDI5KVxuICAgICAgfHwgKCgweDBFMDAwIDw9IGMgJiYgYyA8PSAweDAwRkZGRCkgJiYgYyAhPT0gMHhGRUZGIC8qIEJPTSAqLylcbiAgICAgIHx8ICAoMHgxMDAwMCA8PSBjICYmIGMgPD0gMHgxMEZGRkYpO1xufVxuXG4vLyBbMzRdIG5zLWNoYXIgOjo9IG5iLWNoYXIgLSBzLXdoaXRlXG4vLyBbMjddIG5iLWNoYXIgOjo9IGMtcHJpbnRhYmxlIC0gYi1jaGFyIC0gYy1ieXRlLW9yZGVyLW1hcmtcbi8vIFsyNl0gYi1jaGFyICA6Oj0gYi1saW5lLWZlZWQgfCBiLWNhcnJpYWdlLXJldHVyblxuLy8gWzI0XSBiLWxpbmUtZmVlZCAgICAgICA6Oj0gICAgICN4QSAgICAvKiBMRiAqL1xuLy8gWzI1XSBiLWNhcnJpYWdlLXJldHVybiA6Oj0gICAgICN4RCAgICAvKiBDUiAqL1xuLy8gWzNdICBjLWJ5dGUtb3JkZXItbWFyayA6Oj0gICAgICN4RkVGRlxuZnVuY3Rpb24gaXNOc0NoYXIoYykge1xuICByZXR1cm4gaXNQcmludGFibGUoYykgJiYgIWlzV2hpdGVzcGFjZShjKVxuICAgIC8vIGJ5dGUtb3JkZXItbWFya1xuICAgICYmIGMgIT09IDB4RkVGRlxuICAgIC8vIGItY2hhclxuICAgICYmIGMgIT09IENIQVJfQ0FSUklBR0VfUkVUVVJOXG4gICAgJiYgYyAhPT0gQ0hBUl9MSU5FX0ZFRUQ7XG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYWZ0ZXIgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlKGMsIHByZXYpIHtcbiAgLy8gVXNlcyBhIHN1YnNldCBvZiBuYi1jaGFyIC0gYy1mbG93LWluZGljYXRvciAtIFwiOlwiIC0gXCIjXCJcbiAgLy8gd2hlcmUgbmItY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWNoYXIgLSBjLWJ5dGUtb3JkZXItbWFyay5cbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpICYmIGMgIT09IDB4RkVGRlxuICAgIC8vIC0gYy1mbG93LWluZGljYXRvclxuICAgICYmIGMgIT09IENIQVJfQ09NTUFcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVRcbiAgICAvLyAtIFwiOlwiIC0gXCIjXCJcbiAgICAvLyAvKiBBbiBucy1jaGFyIHByZWNlZGluZyAqLyBcIiNcIlxuICAgICYmIGMgIT09IENIQVJfQ09MT05cbiAgICAmJiAoKGMgIT09IENIQVJfU0hBUlApIHx8IChwcmV2ICYmIGlzTnNDaGFyKHByZXYpKSk7XG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYXMgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlRmlyc3QoYykge1xuICAvLyBVc2VzIGEgc3Vic2V0IG9mIG5zLWNoYXIgLSBjLWluZGljYXRvclxuICAvLyB3aGVyZSBucy1jaGFyID0gbmItY2hhciAtIHMtd2hpdGUuXG4gIHJldHVybiBpc1ByaW50YWJsZShjKSAmJiBjICE9PSAweEZFRkZcbiAgICAmJiAhaXNXaGl0ZXNwYWNlKGMpIC8vIC0gcy13aGl0ZVxuICAgIC8vIC0gKGMtaW5kaWNhdG9yIDo6PVxuICAgIC8vIFx1MjAxQy1cdTIwMUQgfCBcdTIwMUM/XHUyMDFEIHwgXHUyMDFDOlx1MjAxRCB8IFx1MjAxQyxcdTIwMUQgfCBcdTIwMUNbXHUyMDFEIHwgXHUyMDFDXVx1MjAxRCB8IFx1MjAxQ3tcdTIwMUQgfCBcdTIwMUN9XHUyMDFEXG4gICAgJiYgYyAhPT0gQ0hBUl9NSU5VU1xuICAgICYmIGMgIT09IENIQVJfUVVFU1RJT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTE9OXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICAgIC8vIHwgXHUyMDFDI1x1MjAxRCB8IFx1MjAxQyZcdTIwMUQgfCBcdTIwMUMqXHUyMDFEIHwgXHUyMDFDIVx1MjAxRCB8IFx1MjAxQ3xcdTIwMUQgfCBcdTIwMUM9XHUyMDFEIHwgXHUyMDFDPlx1MjAxRCB8IFx1MjAxQydcdTIwMUQgfCBcdTIwMUNcIlx1MjAxRFxuICAgICYmIGMgIT09IENIQVJfU0hBUlBcbiAgICAmJiBjICE9PSBDSEFSX0FNUEVSU0FORFxuICAgICYmIGMgIT09IENIQVJfQVNURVJJU0tcbiAgICAmJiBjICE9PSBDSEFSX0VYQ0xBTUFUSU9OXG4gICAgJiYgYyAhPT0gQ0hBUl9WRVJUSUNBTF9MSU5FXG4gICAgJiYgYyAhPT0gQ0hBUl9FUVVBTFNcbiAgICAmJiBjICE9PSBDSEFSX0dSRUFURVJfVEhBTlxuICAgICYmIGMgIT09IENIQVJfU0lOR0xFX1FVT1RFXG4gICAgJiYgYyAhPT0gQ0hBUl9ET1VCTEVfUVVPVEVcbiAgICAvLyB8IFx1MjAxQyVcdTIwMUQgfCBcdTIwMUNAXHUyMDFEIHwgXHUyMDFDYFx1MjAxRClcbiAgICAmJiBjICE9PSBDSEFSX1BFUkNFTlRcbiAgICAmJiBjICE9PSBDSEFSX0NPTU1FUkNJQUxfQVRcbiAgICAmJiBjICE9PSBDSEFSX0dSQVZFX0FDQ0VOVDtcbn1cblxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGJsb2NrIGluZGVudGF0aW9uIGluZGljYXRvciBpcyByZXF1aXJlZC5cbmZ1bmN0aW9uIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSB7XG4gIHZhciBsZWFkaW5nU3BhY2VSZSA9IC9eXFxuKiAvO1xuICByZXR1cm4gbGVhZGluZ1NwYWNlUmUudGVzdChzdHJpbmcpO1xufVxuXG52YXIgU1RZTEVfUExBSU4gICA9IDEsXG4gICAgU1RZTEVfU0lOR0xFICA9IDIsXG4gICAgU1RZTEVfTElURVJBTCA9IDMsXG4gICAgU1RZTEVfRk9MREVEICA9IDQsXG4gICAgU1RZTEVfRE9VQkxFICA9IDU7XG5cbi8vIERldGVybWluZXMgd2hpY2ggc2NhbGFyIHN0eWxlcyBhcmUgcG9zc2libGUgYW5kIHJldHVybnMgdGhlIHByZWZlcnJlZCBzdHlsZS5cbi8vIGxpbmVXaWR0aCA9IC0xID0+IG5vIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0ci5sZW5ndGggPiAwLlxuLy8gUG9zdC1jb25kaXRpb25zOlxuLy8gICAgU1RZTEVfUExBSU4gb3IgU1RZTEVfU0lOR0xFID0+IG5vIFxcbiBhcmUgaW4gdGhlIHN0cmluZy5cbi8vICAgIFNUWUxFX0xJVEVSQUwgPT4gbm8gbGluZXMgYXJlIHN1aXRhYmxlIGZvciBmb2xkaW5nIChvciBsaW5lV2lkdGggaXMgLTEpLlxuLy8gICAgU1RZTEVfRk9MREVEID0+IGEgbGluZSA+IGxpbmVXaWR0aCBhbmQgY2FuIGJlIGZvbGRlZCAoYW5kIGxpbmVXaWR0aCAhPSAtMSkuXG5mdW5jdGlvbiBjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBpbmRlbnRQZXJMZXZlbCwgbGluZVdpZHRoLCB0ZXN0QW1iaWd1b3VzVHlwZSkge1xuICB2YXIgaTtcbiAgdmFyIGNoYXIsIHByZXZfY2hhcjtcbiAgdmFyIGhhc0xpbmVCcmVhayA9IGZhbHNlO1xuICB2YXIgaGFzRm9sZGFibGVMaW5lID0gZmFsc2U7IC8vIG9ubHkgY2hlY2tlZCBpZiBzaG91bGRUcmFja1dpZHRoXG4gIHZhciBzaG91bGRUcmFja1dpZHRoID0gbGluZVdpZHRoICE9PSAtMTtcbiAgdmFyIHByZXZpb3VzTGluZUJyZWFrID0gLTE7IC8vIGNvdW50IHRoZSBmaXJzdCBsaW5lIGNvcnJlY3RseVxuICB2YXIgcGxhaW4gPSBpc1BsYWluU2FmZUZpcnN0KHN0cmluZy5jaGFyQ29kZUF0KDApKVxuICAgICAgICAgICYmICFpc1doaXRlc3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoc3RyaW5nLmxlbmd0aCAtIDEpKTtcblxuICBpZiAoc2luZ2xlTGluZU9ubHkpIHtcbiAgICAvLyBDYXNlOiBubyBibG9jayBzdHlsZXMuXG4gICAgLy8gQ2hlY2sgZm9yIGRpc2FsbG93ZWQgY2hhcmFjdGVycyB0byBydWxlIG91dCBwbGFpbiBhbmQgc2luZ2xlLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHByZXZfY2hhciA9IGkgPiAwID8gc3RyaW5nLmNoYXJDb2RlQXQoaSAtIDEpIDogbnVsbDtcbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldl9jaGFyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2FzZTogYmxvY2sgc3R5bGVzIHBlcm1pdHRlZC5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICBpZiAoY2hhciA9PT0gQ0hBUl9MSU5FX0ZFRUQpIHtcbiAgICAgICAgaGFzTGluZUJyZWFrID0gdHJ1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGxpbmUgY2FuIGJlIGZvbGRlZC5cbiAgICAgICAgaWYgKHNob3VsZFRyYWNrV2lkdGgpIHtcbiAgICAgICAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHxcbiAgICAgICAgICAgIC8vIEZvbGRhYmxlIGxpbmUgPSB0b28gbG9uZywgYW5kIG5vdCBtb3JlLWluZGVudGVkLlxuICAgICAgICAgICAgKGkgLSBwcmV2aW91c0xpbmVCcmVhayAtIDEgPiBsaW5lV2lkdGggJiZcbiAgICAgICAgICAgICBzdHJpbmdbcHJldmlvdXNMaW5lQnJlYWsgKyAxXSAhPT0gJyAnKTtcbiAgICAgICAgICBwcmV2aW91c0xpbmVCcmVhayA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJpbnRhYmxlKGNoYXIpKSB7XG4gICAgICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gICAgICB9XG4gICAgICBwcmV2X2NoYXIgPSBpID4gMCA/IHN0cmluZy5jaGFyQ29kZUF0KGkgLSAxKSA6IG51bGw7XG4gICAgICBwbGFpbiA9IHBsYWluICYmIGlzUGxhaW5TYWZlKGNoYXIsIHByZXZfY2hhcik7XG4gICAgfVxuICAgIC8vIGluIGNhc2UgdGhlIGVuZCBpcyBtaXNzaW5nIGEgXFxuXG4gICAgaGFzRm9sZGFibGVMaW5lID0gaGFzRm9sZGFibGVMaW5lIHx8IChzaG91bGRUcmFja1dpZHRoICYmXG4gICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpKTtcbiAgfVxuICAvLyBBbHRob3VnaCBldmVyeSBzdHlsZSBjYW4gcmVwcmVzZW50IFxcbiB3aXRob3V0IGVzY2FwaW5nLCBwcmVmZXIgYmxvY2sgc3R5bGVzXG4gIC8vIGZvciBtdWx0aWxpbmUsIHNpbmNlIHRoZXkncmUgbW9yZSByZWFkYWJsZSBhbmQgdGhleSBkb24ndCBhZGQgZW1wdHkgbGluZXMuXG4gIC8vIEFsc28gcHJlZmVyIGZvbGRpbmcgYSBzdXBlci1sb25nIGxpbmUuXG4gIGlmICghaGFzTGluZUJyZWFrICYmICFoYXNGb2xkYWJsZUxpbmUpIHtcbiAgICAvLyBTdHJpbmdzIGludGVycHJldGFibGUgYXMgYW5vdGhlciB0eXBlIGhhdmUgdG8gYmUgcXVvdGVkO1xuICAgIC8vIGUuZy4gdGhlIHN0cmluZyAndHJ1ZScgdnMuIHRoZSBib29sZWFuIHRydWUuXG4gICAgcmV0dXJuIHBsYWluICYmICF0ZXN0QW1iaWd1b3VzVHlwZShzdHJpbmcpXG4gICAgICA/IFNUWUxFX1BMQUlOIDogU1RZTEVfU0lOR0xFO1xuICB9XG4gIC8vIEVkZ2UgY2FzZTogYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGNhbiBvbmx5IGhhdmUgb25lIGRpZ2l0LlxuICBpZiAoaW5kZW50UGVyTGV2ZWwgPiA5ICYmIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSkge1xuICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gIH1cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IGJsb2NrIHN0eWxlcyBhcmUgdmFsaWQuXG4gIC8vIFByZWZlciBsaXRlcmFsIHN0eWxlIHVubGVzcyB3ZSB3YW50IHRvIGZvbGQuXG4gIHJldHVybiBoYXNGb2xkYWJsZUxpbmUgPyBTVFlMRV9GT0xERUQgOiBTVFlMRV9MSVRFUkFMO1xufVxuXG4vLyBOb3RlOiBsaW5lIGJyZWFraW5nL2ZvbGRpbmcgaXMgaW1wbGVtZW50ZWQgZm9yIG9ubHkgdGhlIGZvbGRlZCBzdHlsZS5cbi8vIE5CLiBXZSBkcm9wIHRoZSBsYXN0IHRyYWlsaW5nIG5ld2xpbmUgKGlmIGFueSkgb2YgYSByZXR1cm5lZCBibG9jayBzY2FsYXJcbi8vICBzaW5jZSB0aGUgZHVtcGVyIGFkZHMgaXRzIG93biBuZXdsaW5lLiBUaGlzIGFsd2F5cyB3b3Jrczpcbi8vICAgIFx1MjAyMiBObyBlbmRpbmcgbmV3bGluZSA9PiB1bmFmZmVjdGVkOyBhbHJlYWR5IHVzaW5nIHN0cmlwIFwiLVwiIGNob21waW5nLlxuLy8gICAgXHUyMDIyIEVuZGluZyBuZXdsaW5lICAgID0+IHJlbW92ZWQgdGhlbiByZXN0b3JlZC5cbi8vICBJbXBvcnRhbnRseSwgdGhpcyBrZWVwcyB0aGUgXCIrXCIgY2hvbXAgaW5kaWNhdG9yIGZyb20gZ2FpbmluZyBhbiBleHRyYSBsaW5lLlxuZnVuY3Rpb24gd3JpdGVTY2FsYXIoc3RhdGUsIHN0cmluZywgbGV2ZWwsIGlza2V5KSB7XG4gIHN0YXRlLmR1bXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCInJ1wiO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vQ29tcGF0TW9kZSAmJlxuICAgICAgICBERVBSRUNBVEVEX0JPT0xFQU5TX1NZTlRBWC5pbmRleE9mKHN0cmluZykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gXCInXCIgKyBzdHJpbmcgKyBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gc3RhdGUuaW5kZW50ICogTWF0aC5tYXgoMSwgbGV2ZWwpOyAvLyBubyAwLWluZGVudCBzY2FsYXJzXG4gICAgLy8gQXMgaW5kZW50YXRpb24gZ2V0cyBkZWVwZXIsIGxldCB0aGUgd2lkdGggZGVjcmVhc2UgbW9ub3RvbmljYWxseVxuICAgIC8vIHRvIHRoZSBsb3dlciBib3VuZCBtaW4oc3RhdGUubGluZVdpZHRoLCA0MCkuXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaW1wbGllc1xuICAgIC8vICBzdGF0ZS5saW5lV2lkdGggXHUyMjY0IDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBpcyBmaXhlZCBhdCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCA+IDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBkZWNyZWFzZXMgdW50aWwgdGhlIGxvd2VyIGJvdW5kLlxuICAgIC8vIFRoaXMgYmVoYXZlcyBiZXR0ZXIgdGhhbiBhIGNvbnN0YW50IG1pbmltdW0gd2lkdGggd2hpY2ggZGlzYWxsb3dzIG5hcnJvd2VyIG9wdGlvbnMsXG4gICAgLy8gb3IgYW4gaW5kZW50IHRocmVzaG9sZCB3aGljaCBjYXVzZXMgdGhlIHdpZHRoIHRvIHN1ZGRlbmx5IGluY3JlYXNlLlxuICAgIHZhciBsaW5lV2lkdGggPSBzdGF0ZS5saW5lV2lkdGggPT09IC0xXG4gICAgICA/IC0xIDogTWF0aC5tYXgoTWF0aC5taW4oc3RhdGUubGluZVdpZHRoLCA0MCksIHN0YXRlLmxpbmVXaWR0aCAtIGluZGVudCk7XG5cbiAgICAvLyBXaXRob3V0IGtub3dpbmcgaWYga2V5cyBhcmUgaW1wbGljaXQvZXhwbGljaXQsIGFzc3VtZSBpbXBsaWNpdCBmb3Igc2FmZXR5LlxuICAgIHZhciBzaW5nbGVMaW5lT25seSA9IGlza2V5XG4gICAgICAvLyBObyBibG9jayBzdHlsZXMgaW4gZmxvdyBtb2RlLlxuICAgICAgfHwgKHN0YXRlLmZsb3dMZXZlbCA+IC0xICYmIGxldmVsID49IHN0YXRlLmZsb3dMZXZlbCk7XG4gICAgZnVuY3Rpb24gdGVzdEFtYmlndWl0eShzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBzdGF0ZS5pbmRlbnQsIGxpbmVXaWR0aCwgdGVzdEFtYmlndWl0eSkpIHtcbiAgICAgIGNhc2UgU1RZTEVfUExBSU46XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICBjYXNlIFNUWUxFX1NJTkdMRTpcbiAgICAgICAgcmV0dXJuIFwiJ1wiICsgc3RyaW5nLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICAgICAgY2FzZSBTVFlMRV9MSVRFUkFMOlxuICAgICAgICByZXR1cm4gJ3wnICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoc3RyaW5nLCBpbmRlbnQpKTtcbiAgICAgIGNhc2UgU1RZTEVfRk9MREVEOlxuICAgICAgICByZXR1cm4gJz4nICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoZm9sZFN0cmluZyhzdHJpbmcsIGxpbmVXaWR0aCksIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9ET1VCTEU6XG4gICAgICAgIHJldHVybiAnXCInICsgZXNjYXBlU3RyaW5nKHN0cmluZywgbGluZVdpZHRoKSArICdcIic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignaW1wb3NzaWJsZSBlcnJvcjogaW52YWxpZCBzY2FsYXIgc3R5bGUnKTtcbiAgICB9XG4gIH0oKSk7XG59XG5cbi8vIFByZS1jb25kaXRpb25zOiBzdHJpbmcgaXMgdmFsaWQgZm9yIGEgYmxvY2sgc2NhbGFyLCAxIDw9IGluZGVudFBlckxldmVsIDw9IDkuXG5mdW5jdGlvbiBibG9ja0hlYWRlcihzdHJpbmcsIGluZGVudFBlckxldmVsKSB7XG4gIHZhciBpbmRlbnRJbmRpY2F0b3IgPSBuZWVkSW5kZW50SW5kaWNhdG9yKHN0cmluZykgPyBTdHJpbmcoaW5kZW50UGVyTGV2ZWwpIDogJyc7XG5cbiAgLy8gbm90ZSB0aGUgc3BlY2lhbCBjYXNlOiB0aGUgc3RyaW5nICdcXG4nIGNvdW50cyBhcyBhIFwidHJhaWxpbmdcIiBlbXB0eSBsaW5lLlxuICB2YXIgY2xpcCA9ICAgICAgICAgIHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMV0gPT09ICdcXG4nO1xuICB2YXIga2VlcCA9IGNsaXAgJiYgKHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMl0gPT09ICdcXG4nIHx8IHN0cmluZyA9PT0gJ1xcbicpO1xuICB2YXIgY2hvbXAgPSBrZWVwID8gJysnIDogKGNsaXAgPyAnJyA6ICctJyk7XG5cbiAgcmV0dXJuIGluZGVudEluZGljYXRvciArIGNob21wICsgJ1xcbic7XG59XG5cbi8vIChTZWUgdGhlIG5vdGUgZm9yIHdyaXRlU2NhbGFyLilcbmZ1bmN0aW9uIGRyb3BFbmRpbmdOZXdsaW5lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbicgPyBzdHJpbmcuc2xpY2UoMCwgLTEpIDogc3RyaW5nO1xufVxuXG4vLyBOb3RlOiBhIGxvbmcgbGluZSB3aXRob3V0IGEgc3VpdGFibGUgYnJlYWsgcG9pbnQgd2lsbCBleGNlZWQgdGhlIHdpZHRoIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IGV2ZXJ5IGNoYXIgaW4gc3RyIGlzUHJpbnRhYmxlLCBzdHIubGVuZ3RoID4gMCwgd2lkdGggPiAwLlxuZnVuY3Rpb24gZm9sZFN0cmluZyhzdHJpbmcsIHdpZHRoKSB7XG4gIC8vIEluIGZvbGRlZCBzdHlsZSwgJGskIGNvbnNlY3V0aXZlIG5ld2xpbmVzIG91dHB1dCBhcyAkaysxJCBuZXdsaW5lc1x1MjAxNFxuICAvLyB1bmxlc3MgdGhleSdyZSBiZWZvcmUgb3IgYWZ0ZXIgYSBtb3JlLWluZGVudGVkIGxpbmUsIG9yIGF0IHRoZSB2ZXJ5XG4gIC8vIGJlZ2lubmluZyBvciBlbmQsIGluIHdoaWNoIGNhc2UgJGskIG1hcHMgdG8gJGskLlxuICAvLyBUaGVyZWZvcmUsIHBhcnNlIGVhY2ggY2h1bmsgYXMgbmV3bGluZShzKSBmb2xsb3dlZCBieSBhIGNvbnRlbnQgbGluZS5cbiAgdmFyIGxpbmVSZSA9IC8oXFxuKykoW15cXG5dKikvZztcblxuICAvLyBmaXJzdCBsaW5lIChwb3NzaWJseSBhbiBlbXB0eSBsaW5lKVxuICB2YXIgcmVzdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dExGID0gc3RyaW5nLmluZGV4T2YoJ1xcbicpO1xuICAgIG5leHRMRiA9IG5leHRMRiAhPT0gLTEgPyBuZXh0TEYgOiBzdHJpbmcubGVuZ3RoO1xuICAgIGxpbmVSZS5sYXN0SW5kZXggPSBuZXh0TEY7XG4gICAgcmV0dXJuIGZvbGRMaW5lKHN0cmluZy5zbGljZSgwLCBuZXh0TEYpLCB3aWR0aCk7XG4gIH0oKSk7XG4gIC8vIElmIHdlIGhhdmVuJ3QgcmVhY2hlZCB0aGUgZmlyc3QgY29udGVudCBsaW5lIHlldCwgZG9uJ3QgYWRkIGFuIGV4dHJhIFxcbi5cbiAgdmFyIHByZXZNb3JlSW5kZW50ZWQgPSBzdHJpbmdbMF0gPT09ICdcXG4nIHx8IHN0cmluZ1swXSA9PT0gJyAnO1xuICB2YXIgbW9yZUluZGVudGVkO1xuXG4gIC8vIHJlc3Qgb2YgdGhlIGxpbmVzXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IGxpbmVSZS5leGVjKHN0cmluZykpKSB7XG4gICAgdmFyIHByZWZpeCA9IG1hdGNoWzFdLCBsaW5lID0gbWF0Y2hbMl07XG4gICAgbW9yZUluZGVudGVkID0gKGxpbmVbMF0gPT09ICcgJyk7XG4gICAgcmVzdWx0ICs9IHByZWZpeFxuICAgICAgKyAoIXByZXZNb3JlSW5kZW50ZWQgJiYgIW1vcmVJbmRlbnRlZCAmJiBsaW5lICE9PSAnJ1xuICAgICAgICA/ICdcXG4nIDogJycpXG4gICAgICArIGZvbGRMaW5lKGxpbmUsIHdpZHRoKTtcbiAgICBwcmV2TW9yZUluZGVudGVkID0gbW9yZUluZGVudGVkO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR3JlZWR5IGxpbmUgYnJlYWtpbmcuXG4vLyBQaWNrcyB0aGUgbG9uZ2VzdCBsaW5lIHVuZGVyIHRoZSBsaW1pdCBlYWNoIHRpbWUsXG4vLyBvdGhlcndpc2Ugc2V0dGxlcyBmb3IgdGhlIHNob3J0ZXN0IGxpbmUgb3ZlciB0aGUgbGltaXQuXG4vLyBOQi4gTW9yZS1pbmRlbnRlZCBsaW5lcyAqY2Fubm90KiBiZSBmb2xkZWQsIGFzIHRoYXQgd291bGQgYWRkIGFuIGV4dHJhIFxcbi5cbmZ1bmN0aW9uIGZvbGRMaW5lKGxpbmUsIHdpZHRoKSB7XG4gIGlmIChsaW5lID09PSAnJyB8fCBsaW5lWzBdID09PSAnICcpIHJldHVybiBsaW5lO1xuXG4gIC8vIFNpbmNlIGEgbW9yZS1pbmRlbnRlZCBsaW5lIGFkZHMgYSBcXG4sIGJyZWFrcyBjYW4ndCBiZSBmb2xsb3dlZCBieSBhIHNwYWNlLlxuICB2YXIgYnJlYWtSZSA9IC8gW14gXS9nOyAvLyBub3RlOiB0aGUgbWF0Y2ggaW5kZXggd2lsbCBhbHdheXMgYmUgPD0gbGVuZ3RoLTIuXG4gIHZhciBtYXRjaDtcbiAgLy8gc3RhcnQgaXMgYW4gaW5jbHVzaXZlIGluZGV4LiBlbmQsIGN1cnIsIGFuZCBuZXh0IGFyZSBleGNsdXNpdmUuXG4gIHZhciBzdGFydCA9IDAsIGVuZCwgY3VyciA9IDAsIG5leHQgPSAwO1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgLy8gSW52YXJpYW50czogMCA8PSBzdGFydCA8PSBsZW5ndGgtMS5cbiAgLy8gICAwIDw9IGN1cnIgPD0gbmV4dCA8PSBtYXgoMCwgbGVuZ3RoLTIpLiBjdXJyIC0gc3RhcnQgPD0gd2lkdGguXG4gIC8vIEluc2lkZSB0aGUgbG9vcDpcbiAgLy8gICBBIG1hdGNoIGltcGxpZXMgbGVuZ3RoID49IDIsIHNvIGN1cnIgYW5kIG5leHQgYXJlIDw9IGxlbmd0aC0yLlxuICB3aGlsZSAoKG1hdGNoID0gYnJlYWtSZS5leGVjKGxpbmUpKSkge1xuICAgIG5leHQgPSBtYXRjaC5pbmRleDtcbiAgICAvLyBtYWludGFpbiBpbnZhcmlhbnQ6IGN1cnIgLSBzdGFydCA8PSB3aWR0aFxuICAgIGlmIChuZXh0IC0gc3RhcnQgPiB3aWR0aCkge1xuICAgICAgZW5kID0gKGN1cnIgPiBzdGFydCkgPyBjdXJyIDogbmV4dDsgLy8gZGVyaXZlIGVuZCA8PSBsZW5ndGgtMlxuICAgICAgcmVzdWx0ICs9ICdcXG4nICsgbGluZS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIC8vIHNraXAgdGhlIHNwYWNlIHRoYXQgd2FzIG91dHB1dCBhcyBcXG5cbiAgICAgIHN0YXJ0ID0gZW5kICsgMTsgICAgICAgICAgICAgICAgICAgIC8vIGRlcml2ZSBzdGFydCA8PSBsZW5ndGgtMVxuICAgIH1cbiAgICBjdXJyID0gbmV4dDtcbiAgfVxuXG4gIC8vIEJ5IHRoZSBpbnZhcmlhbnRzLCBzdGFydCA8PSBsZW5ndGgtMSwgc28gdGhlcmUgaXMgc29tZXRoaW5nIGxlZnQgb3Zlci5cbiAgLy8gSXQgaXMgZWl0aGVyIHRoZSB3aG9sZSBzdHJpbmcgb3IgYSBwYXJ0IHN0YXJ0aW5nIGZyb20gbm9uLXdoaXRlc3BhY2UuXG4gIHJlc3VsdCArPSAnXFxuJztcbiAgLy8gSW5zZXJ0IGEgYnJlYWsgaWYgdGhlIHJlbWFpbmRlciBpcyB0b28gbG9uZyBhbmQgdGhlcmUgaXMgYSBicmVhayBhdmFpbGFibGUuXG4gIGlmIChsaW5lLmxlbmd0aCAtIHN0YXJ0ID4gd2lkdGggJiYgY3VyciA+IHN0YXJ0KSB7XG4gICAgcmVzdWx0ICs9IGxpbmUuc2xpY2Uoc3RhcnQsIGN1cnIpICsgJ1xcbicgKyBsaW5lLnNsaWNlKGN1cnIgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpOyAvLyBkcm9wIGV4dHJhIFxcbiBqb2luZXJcbn1cblxuLy8gRXNjYXBlcyBhIGRvdWJsZS1xdW90ZWQgc3RyaW5nLlxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjaGFyLCBuZXh0Q2hhcjtcbiAgdmFyIGVzY2FwZVNlcTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAvLyBDaGVjayBmb3Igc3Vycm9nYXRlIHBhaXJzIChyZWZlcmVuY2UgVW5pY29kZSAzLjAgc2VjdGlvbiBcIjMuNyBTdXJyb2dhdGVzXCIpLlxuICAgIGlmIChjaGFyID49IDB4RDgwMCAmJiBjaGFyIDw9IDB4REJGRi8qIGhpZ2ggc3Vycm9nYXRlICovKSB7XG4gICAgICBuZXh0Q2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgIGlmIChuZXh0Q2hhciA+PSAweERDMDAgJiYgbmV4dENoYXIgPD0gMHhERkZGLyogbG93IHN1cnJvZ2F0ZSAqLykge1xuICAgICAgICAvLyBDb21iaW5lIHRoZSBzdXJyb2dhdGUgcGFpciBhbmQgc3RvcmUgaXQgZXNjYXBlZC5cbiAgICAgICAgcmVzdWx0ICs9IGVuY29kZUhleCgoY2hhciAtIDB4RDgwMCkgKiAweDQwMCArIG5leHRDaGFyIC0gMHhEQzAwICsgMHgxMDAwMCk7XG4gICAgICAgIC8vIEFkdmFuY2UgaW5kZXggb25lIGV4dHJhIHNpbmNlIHdlIGFscmVhZHkgdXNlZCB0aGF0IGNoYXIgaGVyZS5cbiAgICAgICAgaSsrOyBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXNjYXBlU2VxID0gRVNDQVBFX1NFUVVFTkNFU1tjaGFyXTtcbiAgICByZXN1bHQgKz0gIWVzY2FwZVNlcSAmJiBpc1ByaW50YWJsZShjaGFyKVxuICAgICAgPyBzdHJpbmdbaV1cbiAgICAgIDogZXNjYXBlU2VxIHx8IGVuY29kZUhleChjaGFyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvd1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ID0gJycsXG4gICAgICBfdGFnICAgID0gc3RhdGUudGFnLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGg7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgLy8gV3JpdGUgb25seSB2YWxpZCBlbGVtZW50cy5cbiAgICBpZiAod3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0W2luZGV4XSwgZmFsc2UsIGZhbHNlKSkge1xuICAgICAgaWYgKGluZGV4ICE9PSAwKSBfcmVzdWx0ICs9ICcsJyArICghc3RhdGUuY29uZGVuc2VGbG93ID8gJyAnIDogJycpO1xuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSAnWycgKyBfcmVzdWx0ICsgJ10nO1xufVxuXG5mdW5jdGlvbiB3cml0ZUJsb2NrU2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0W2luZGV4XSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgIGlmICghY29tcGFjdCB8fCBpbmRleCAhPT0gMCkge1xuICAgICAgICBfcmVzdWx0ICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBfcmVzdWx0ICs9ICctJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0gJztcbiAgICAgIH1cblxuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICdbXSc7IC8vIEVtcHR5IHNlcXVlbmNlIGlmIG5vIHZhbGlkIHZhbHVlcy5cbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93TWFwcGluZyhzdGF0ZSwgbGV2ZWwsIG9iamVjdCkge1xuICB2YXIgX3Jlc3VsdCAgICAgICA9ICcnLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICBvYmplY3RLZXksXG4gICAgICBvYmplY3RWYWx1ZSxcbiAgICAgIHBhaXJCdWZmZXI7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuXG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuICAgIGlmIChpbmRleCAhPT0gMCkgcGFpckJ1ZmZlciArPSAnLCAnO1xuXG4gICAgaWYgKHN0YXRlLmNvbmRlbnNlRmxvdykgcGFpckJ1ZmZlciArPSAnXCInO1xuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0S2V5LCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIGtleTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KSBwYWlyQnVmZmVyICs9ICc/ICc7XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXAgKyAoc3RhdGUuY29uZGVuc2VGbG93ID8gJ1wiJyA6ICcnKSArICc6JyArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnJyA6ICcgJyk7XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdFZhbHVlLCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIHZhbHVlLlxuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICd7JyArIF9yZXN1bHQgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0LCBjb21wYWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgZXhwbGljaXRQYWlyLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICAvLyBBbGxvdyBzb3J0aW5nIGtleXMgc28gdGhhdCB0aGUgb3V0cHV0IGZpbGUgaXMgZGV0ZXJtaW5pc3RpY1xuICBpZiAoc3RhdGUuc29ydEtleXMgPT09IHRydWUpIHtcbiAgICAvLyBEZWZhdWx0IHNvcnRpbmdcbiAgICBvYmplY3RLZXlMaXN0LnNvcnQoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3RhdGUuc29ydEtleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBDdXN0b20gc29ydCBmdW5jdGlvblxuICAgIG9iamVjdEtleUxpc3Quc29ydChzdGF0ZS5zb3J0S2V5cyk7XG4gIH0gZWxzZSBpZiAoc3RhdGUuc29ydEtleXMpIHtcbiAgICAvLyBTb21ldGhpbmcgaXMgd3JvbmdcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignc29ydEtleXMgbXVzdCBiZSBhIGJvb2xlYW4gb3IgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXJCdWZmZXIgPSAnJztcblxuICAgIGlmICghY29tcGFjdCB8fCBpbmRleCAhPT0gMCkge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIG9iamVjdEtleSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5LlxuICAgIH1cblxuICAgIGV4cGxpY2l0UGFpciA9IChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgKHN0YXRlLmR1bXAgJiYgc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KTtcblxuICAgIGlmIChleHBsaWNpdFBhaXIpIHtcbiAgICAgIGlmIChzdGF0ZS5kdW1wICYmIENIQVJfTElORV9GRUVEID09PSBzdGF0ZS5kdW1wLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgcGFpckJ1ZmZlciArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/ICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0VmFsdWUsIHRydWUsIGV4cGxpY2l0UGFpcikpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gJzogJztcbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICAvLyBCb3RoIGtleSBhbmQgdmFsdWUgYXJlIHZhbGlkLlxuICAgIF9yZXN1bHQgKz0gcGFpckJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICd7fSc7IC8vIEVtcHR5IG1hcHBpbmcgaWYgbm8gdmFsaWQgcGFpcnMuXG59XG5cbmZ1bmN0aW9uIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgZXhwbGljaXQpIHtcbiAgdmFyIF9yZXN1bHQsIHR5cGVMaXN0LCBpbmRleCwgbGVuZ3RoLCB0eXBlLCBzdHlsZTtcblxuICB0eXBlTGlzdCA9IGV4cGxpY2l0ID8gc3RhdGUuZXhwbGljaXRUeXBlcyA6IHN0YXRlLmltcGxpY2l0VHlwZXM7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHR5cGVMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gdHlwZUxpc3RbaW5kZXhdO1xuXG4gICAgaWYgKCh0eXBlLmluc3RhbmNlT2YgIHx8IHR5cGUucHJlZGljYXRlKSAmJlxuICAgICAgICAoIXR5cGUuaW5zdGFuY2VPZiB8fCAoKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSAmJiAob2JqZWN0IGluc3RhbmNlb2YgdHlwZS5pbnN0YW5jZU9mKSkpICYmXG4gICAgICAgICghdHlwZS5wcmVkaWNhdGUgIHx8IHR5cGUucHJlZGljYXRlKG9iamVjdCkpKSB7XG5cbiAgICAgIHN0YXRlLnRhZyA9IGV4cGxpY2l0ID8gdHlwZS50YWcgOiAnPyc7XG5cbiAgICAgIGlmICh0eXBlLnJlcHJlc2VudCkge1xuICAgICAgICBzdHlsZSA9IHN0YXRlLnN0eWxlTWFwW3R5cGUudGFnXSB8fCB0eXBlLmRlZmF1bHRTdHlsZTtcblxuICAgICAgICBpZiAoX3RvU3RyaW5nLmNhbGwodHlwZS5yZXByZXNlbnQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgICAgX3Jlc3VsdCA9IHR5cGUucmVwcmVzZW50KG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHR5cGUucmVwcmVzZW50LCBzdHlsZSkpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnRbc3R5bGVdKG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCchPCcgKyB0eXBlLnRhZyArICc+IHRhZyByZXNvbHZlciBhY2NlcHRzIG5vdCBcIicgKyBzdHlsZSArICdcIiBzdHlsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZHVtcCA9IF9yZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gU2VyaWFsaXplcyBgb2JqZWN0YCBhbmQgd3JpdGVzIGl0IHRvIGdsb2JhbCBgcmVzdWx0YC5cbi8vIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLCBvciBmYWxzZSBvbiBpbnZhbGlkIG9iamVjdC5cbi8vXG5mdW5jdGlvbiB3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3QsIGJsb2NrLCBjb21wYWN0LCBpc2tleSkge1xuICBzdGF0ZS50YWcgPSBudWxsO1xuICBzdGF0ZS5kdW1wID0gb2JqZWN0O1xuXG4gIGlmICghZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBmYWxzZSkpIHtcbiAgICBkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIHRydWUpO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBfdG9TdHJpbmcuY2FsbChzdGF0ZS5kdW1wKTtcblxuICBpZiAoYmxvY2spIHtcbiAgICBibG9jayA9IChzdGF0ZS5mbG93TGV2ZWwgPCAwIHx8IHN0YXRlLmZsb3dMZXZlbCA+IGxldmVsKTtcbiAgfVxuXG4gIHZhciBvYmplY3RPckFycmF5ID0gdHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICAgIGR1cGxpY2F0ZUluZGV4LFxuICAgICAgZHVwbGljYXRlO1xuXG4gIGlmIChvYmplY3RPckFycmF5KSB7XG4gICAgZHVwbGljYXRlSW5kZXggPSBzdGF0ZS5kdXBsaWNhdGVzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBkdXBsaWNhdGUgPSBkdXBsaWNhdGVJbmRleCAhPT0gLTE7XG4gIH1cblxuICBpZiAoKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHwgZHVwbGljYXRlIHx8IChzdGF0ZS5pbmRlbnQgIT09IDIgJiYgbGV2ZWwgPiAwKSkge1xuICAgIGNvbXBhY3QgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChkdXBsaWNhdGUgJiYgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgc3RhdGUuZHVtcCA9ICcqcmVmXycgKyBkdXBsaWNhdGVJbmRleDtcbiAgfSBlbHNlIHtcbiAgICBpZiAob2JqZWN0T3JBcnJheSAmJiBkdXBsaWNhdGUgJiYgIXN0YXRlLnVzZWREdXBsaWNhdGVzW2R1cGxpY2F0ZUluZGV4XSkge1xuICAgICAgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICBpZiAoYmxvY2sgJiYgKE9iamVjdC5rZXlzKHN0YXRlLmR1bXApLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFyIGFycmF5TGV2ZWwgPSAoc3RhdGUubm9BcnJheUluZGVudCAmJiAobGV2ZWwgPiAwKSkgPyBsZXZlbCAtIDEgOiBsZXZlbDtcbiAgICAgIGlmIChibG9jayAmJiAoc3RhdGUuZHVtcC5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYXJyYXlMZXZlbCwgc3RhdGUuZHVtcCwgY29tcGFjdCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGFycmF5TGV2ZWwsIHN0YXRlLmR1bXApO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArICcgJyArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICBpZiAoc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgICAgd3JpdGVTY2FsYXIoc3RhdGUsIHN0YXRlLmR1bXAsIGxldmVsLCBpc2tleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGF0ZS5za2lwSW52YWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ3VuYWNjZXB0YWJsZSBraW5kIG9mIGFuIG9iamVjdCB0byBkdW1wICcgKyB0eXBlKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB7XG4gICAgICBzdGF0ZS5kdW1wID0gJyE8JyArIHN0YXRlLnRhZyArICc+ICcgKyBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXREdXBsaWNhdGVSZWZlcmVuY2VzKG9iamVjdCwgc3RhdGUpIHtcbiAgdmFyIG9iamVjdHMgPSBbXSxcbiAgICAgIGR1cGxpY2F0ZXNJbmRleGVzID0gW10sXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpbnNwZWN0Tm9kZShvYmplY3QsIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gZHVwbGljYXRlc0luZGV4ZXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHN0YXRlLmR1cGxpY2F0ZXMucHVzaChvYmplY3RzW2R1cGxpY2F0ZXNJbmRleGVzW2luZGV4XV0pO1xuICB9XG4gIHN0YXRlLnVzZWREdXBsaWNhdGVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpIHtcbiAgdmFyIG9iamVjdEtleUxpc3QsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpZiAob2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgaW5kZXggPSBvYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoZHVwbGljYXRlc0luZGV4ZXMuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGR1cGxpY2F0ZXNJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3RbaW5kZXhdLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3RLZXlMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3Rbb2JqZWN0S2V5TGlzdFtpbmRleF1dLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHVtcChpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGUob3B0aW9ucyk7XG5cbiAgaWYgKCFzdGF0ZS5ub1JlZnMpIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMoaW5wdXQsIHN0YXRlKTtcblxuICBpZiAod3JpdGVOb2RlKHN0YXRlLCAwLCBpbnB1dCwgdHJ1ZSwgdHJ1ZSkpIHJldHVybiBzdGF0ZS5kdW1wICsgJ1xcbic7XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBzYWZlRHVtcChpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gZHVtcChpbnB1dCwgY29tbW9uLmV4dGVuZCh7IHNjaGVtYTogREVGQVVMVF9TQUZFX1NDSEVNQSB9LCBvcHRpb25zKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmR1bXAgICAgID0gZHVtcDtcbm1vZHVsZS5leHBvcnRzLnNhZmVEdW1wID0gc2FmZUR1bXA7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBsb2FkZXIgPSByZXF1aXJlKCcuL2pzLXlhbWwvbG9hZGVyJyk7XG52YXIgZHVtcGVyID0gcmVxdWlyZSgnLi9qcy15YW1sL2R1bXBlcicpO1xuXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gJyArIG5hbWUgKyAnIGlzIGRlcHJlY2F0ZWQgYW5kIGNhbm5vdCBiZSB1c2VkLicpO1xuICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzLlR5cGUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvdHlwZScpO1xubW9kdWxlLmV4cG9ydHMuU2NoZW1hICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEnKTtcbm1vZHVsZS5leHBvcnRzLkZBSUxTQUZFX1NDSEVNQSAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlJyk7XG5tb2R1bGUuZXhwb3J0cy5KU09OX1NDSEVNQSAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9qc29uJyk7XG5tb2R1bGUuZXhwb3J0cy5DT1JFX1NDSEVNQSAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9jb3JlJyk7XG5tb2R1bGUuZXhwb3J0cy5ERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xubW9kdWxlLmV4cG9ydHMubG9hZCAgICAgICAgICAgICAgICA9IGxvYWRlci5sb2FkO1xubW9kdWxlLmV4cG9ydHMubG9hZEFsbCAgICAgICAgICAgICA9IGxvYWRlci5sb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWQgICAgICAgICAgICA9IGxvYWRlci5zYWZlTG9hZDtcbm1vZHVsZS5leHBvcnRzLnNhZmVMb2FkQWxsICAgICAgICAgPSBsb2FkZXIuc2FmZUxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5kdW1wICAgICAgICAgICAgICAgID0gZHVtcGVyLmR1bXA7XG5tb2R1bGUuZXhwb3J0cy5zYWZlRHVtcCAgICAgICAgICAgID0gZHVtcGVyLnNhZmVEdW1wO1xubW9kdWxlLmV4cG9ydHMuWUFNTEV4Y2VwdGlvbiAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9leGNlcHRpb24nKTtcblxuLy8gRGVwcmVjYXRlZCBzY2hlbWEgbmFtZXMgZnJvbSBKUy1ZQU1MIDIuMC54XG5tb2R1bGUuZXhwb3J0cy5NSU5JTUFMX1NDSEVNQSA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZmFpbHNhZmUnKTtcbm1vZHVsZS5leHBvcnRzLlNBRkVfU0NIRU1BICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcblxuLy8gRGVwcmVjYXRlZCBmdW5jdGlvbnMgZnJvbSBKUy1ZQU1MIDEueC54XG5tb2R1bGUuZXhwb3J0cy5zY2FuICAgICAgICAgICA9IGRlcHJlY2F0ZWQoJ3NjYW4nKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlICAgICAgICAgID0gZGVwcmVjYXRlZCgncGFyc2UnKTtcbm1vZHVsZS5leHBvcnRzLmNvbXBvc2UgICAgICAgID0gZGVwcmVjYXRlZCgnY29tcG9zZScpO1xubW9kdWxlLmV4cG9ydHMuYWRkQ29uc3RydWN0b3IgPSBkZXByZWNhdGVkKCdhZGRDb25zdHJ1Y3RvcicpO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuXG52YXIgeWFtbCA9IHJlcXVpcmUoJy4vbGliL2pzLXlhbWwuanMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHlhbWw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB5YW1sID0gcmVxdWlyZSgnanMteWFtbCcpO1xuXG4vKipcbiAqIERlZmF1bHQgZW5naW5lc1xuICovXG5cbmNvbnN0IGVuZ2luZXMgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogWUFNTFxuICovXG5cbmVuZ2luZXMueWFtbCA9IHtcbiAgcGFyc2U6IHlhbWwuc2FmZUxvYWQuYmluZCh5YW1sKSxcbiAgc3RyaW5naWZ5OiB5YW1sLnNhZmVEdW1wLmJpbmQoeWFtbClcbn07XG5cbi8qKlxuICogSlNPTlxuICovXG5cbmVuZ2luZXMuanNvbiA9IHtcbiAgcGFyc2U6IEpTT04ucGFyc2UuYmluZChKU09OKSxcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbihvYmosIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7cmVwbGFjZXI6IG51bGwsIHNwYWNlOiAyfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgb3B0cy5yZXBsYWNlciwgb3B0cy5zcGFjZSk7XG4gIH1cbn07XG5cbi8qKlxuICogSmF2YVNjcmlwdFxuICovXG5cbmVuZ2luZXMuamF2YXNjcmlwdCA9IHtcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucywgd3JhcCkge1xuICAgIC8qIGVzbGludCBuby1ldmFsOiAwICovXG4gICAgdHJ5IHtcbiAgICAgIGlmICh3cmFwICE9PSBmYWxzZSkge1xuICAgICAgICBzdHIgPSAnKGZ1bmN0aW9uKCkge1xcbnJldHVybiAnICsgc3RyLnRyaW0oKSArICc7XFxufSgpKTsnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2YWwoc3RyKSB8fCB7fTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICh3cmFwICE9PSBmYWxzZSAmJiAvKHVuZXhwZWN0ZWR8aWRlbnRpZmllcikvaS50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgICByZXR1cm4gcGFyc2Uoc3RyLCBvcHRpb25zLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoZXJyKTtcbiAgICB9XG4gIH0sXG4gIHN0cmluZ2lmeTogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzdHJpbmdpZnlpbmcgSmF2YVNjcmlwdCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gIH1cbn07XG4iLCAiLyohXG4gKiBzdHJpcC1ib20tc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9zdHJpcC1ib20tc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLmNoYXJBdCgwKSA9PT0gJ1xcdWZlZmYnKSB7XG4gICAgcmV0dXJuIHN0ci5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmlwQm9tID0gcmVxdWlyZSgnc3RyaXAtYm9tLXN0cmluZycpO1xuY29uc3QgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xuXG5leHBvcnRzLmRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWwpIHtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsXG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYHZhbGAgaXMgYSBidWZmZXJcbiAqL1xuXG5leHBvcnRzLmlzQnVmZmVyID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlT2YodmFsKSA9PT0gJ2J1ZmZlcic7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsYCBpcyBhbiBvYmplY3RcbiAqL1xuXG5leHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlT2YodmFsKSA9PT0gJ29iamVjdCc7XG59O1xuXG4vKipcbiAqIENhc3QgYGlucHV0YCB0byBhIGJ1ZmZlclxuICovXG5cbmV4cG9ydHMudG9CdWZmZXIgPSBmdW5jdGlvbihpbnB1dCkge1xuICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IEJ1ZmZlci5mcm9tKGlucHV0KSA6IGlucHV0O1xufTtcblxuLyoqXG4gKiBDYXN0IGB2YWxgIHRvIGEgc3RyaW5nLlxuICovXG5cbmV4cG9ydHMudG9TdHJpbmcgPSBmdW5jdGlvbihpbnB1dCkge1xuICBpZiAoZXhwb3J0cy5pc0J1ZmZlcihpbnB1dCkpIHJldHVybiBzdHJpcEJvbShTdHJpbmcoaW5wdXQpKTtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBpbnB1dCB0byBiZSBhIHN0cmluZyBvciBidWZmZXInKTtcbiAgfVxuICByZXR1cm4gc3RyaXBCb20oaW5wdXQpO1xufTtcblxuLyoqXG4gKiBDYXN0IGB2YWxgIHRvIGFuIGFycmF5LlxuICovXG5cbmV4cG9ydHMuYXJyYXlpZnkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCA/IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSkgOiBbXTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBzdHJgIHN0YXJ0cyB3aXRoIGBzdWJzdHJgLlxuICovXG5cbmV4cG9ydHMuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHN0ciwgc3Vic3RyLCBsZW4pIHtcbiAgaWYgKHR5cGVvZiBsZW4gIT09ICdudW1iZXInKSBsZW4gPSBzdWJzdHIubGVuZ3RoO1xuICByZXR1cm4gc3RyLnNsaWNlKDAsIGxlbikgPT09IHN1YnN0cjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbmdpbmVzID0gcmVxdWlyZSgnLi9lbmdpbmVzJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAvLyBlbnN1cmUgdGhhdCBkZWxpbWl0ZXJzIGFyZSBhbiBhcnJheVxuICBvcHRzLmRlbGltaXRlcnMgPSB1dGlscy5hcnJheWlmeShvcHRzLmRlbGltcyB8fCBvcHRzLmRlbGltaXRlcnMgfHwgJy0tLScpO1xuICBpZiAob3B0cy5kZWxpbWl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgIG9wdHMuZGVsaW1pdGVycy5wdXNoKG9wdHMuZGVsaW1pdGVyc1swXSk7XG4gIH1cblxuICBvcHRzLmxhbmd1YWdlID0gKG9wdHMubGFuZ3VhZ2UgfHwgb3B0cy5sYW5nIHx8ICd5YW1sJykudG9Mb3dlckNhc2UoKTtcbiAgb3B0cy5lbmdpbmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZW5naW5lcywgb3B0cy5wYXJzZXJzLCBvcHRzLmVuZ2luZXMpO1xuICByZXR1cm4gb3B0cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMpIHtcbiAgbGV0IGVuZ2luZSA9IG9wdGlvbnMuZW5naW5lc1tuYW1lXSB8fCBvcHRpb25zLmVuZ2luZXNbYWxpYXNlKG5hbWUpXTtcbiAgaWYgKHR5cGVvZiBlbmdpbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdncmF5LW1hdHRlciBlbmdpbmUgXCInICsgbmFtZSArICdcIiBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICB9XG4gIGlmICh0eXBlb2YgZW5naW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5naW5lID0geyBwYXJzZTogZW5naW5lIH07XG4gIH1cbiAgcmV0dXJuIGVuZ2luZTtcbn07XG5cbmZ1bmN0aW9uIGFsaWFzZShuYW1lKSB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnanMnOlxuICAgIGNhc2UgJ2phdmFzY3JpcHQnOlxuICAgICAgcmV0dXJuICdqYXZhc2NyaXB0JztcbiAgICBjYXNlICdjb2ZmZWUnOlxuICAgIGNhc2UgJ2NvZmZlZXNjcmlwdCc6XG4gICAgY2FzZSAnY3Nvbic6XG4gICAgICByZXR1cm4gJ2NvZmZlZSc7XG4gICAgY2FzZSAneWFtbCc6XG4gICAgY2FzZSAneW1sJzpcbiAgICAgIHJldHVybiAneWFtbCc7XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5jb25zdCBnZXRFbmdpbmUgPSByZXF1aXJlKCcuL2VuZ2luZScpO1xuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZmlsZSwgZGF0YSwgb3B0aW9ucykge1xuICBpZiAoZGF0YSA9PSBudWxsICYmIG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIHN3aXRjaCAodHlwZU9mKGZpbGUpKSB7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBkYXRhID0gZmlsZS5kYXRhO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGZpbGUgdG8gYmUgYSBzdHJpbmcgb3Igb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyID0gZmlsZS5jb250ZW50O1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGlmIChkYXRhID09IG51bGwpIHtcbiAgICBpZiAoIW9wdHMuZGF0YSkgcmV0dXJuIGZpbGU7XG4gICAgZGF0YSA9IG9wdHMuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGxhbmd1YWdlID0gZmlsZS5sYW5ndWFnZSB8fCBvcHRzLmxhbmd1YWdlO1xuICBjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUobGFuZ3VhZ2UsIG9wdHMpO1xuICBpZiAodHlwZW9mIGVuZ2luZS5zdHJpbmdpZnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBcIicgKyBsYW5ndWFnZSArICcuc3RyaW5naWZ5XCIgdG8gYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGZpbGUuZGF0YSwgZGF0YSk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG4gIGNvbnN0IGNsb3NlID0gb3B0cy5kZWxpbWl0ZXJzWzFdO1xuICBjb25zdCBtYXR0ZXIgPSBlbmdpbmUuc3RyaW5naWZ5KGRhdGEsIG9wdGlvbnMpLnRyaW0oKTtcbiAgbGV0IGJ1ZiA9ICcnO1xuXG4gIGlmIChtYXR0ZXIgIT09ICd7fScpIHtcbiAgICBidWYgPSBuZXdsaW5lKG9wZW4pICsgbmV3bGluZShtYXR0ZXIpICsgbmV3bGluZShjbG9zZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGZpbGUuZXhjZXJwdCA9PT0gJ3N0cmluZycgJiYgZmlsZS5leGNlcnB0ICE9PSAnJykge1xuICAgIGlmIChzdHIuaW5kZXhPZihmaWxlLmV4Y2VycHQudHJpbSgpKSA9PT0gLTEpIHtcbiAgICAgIGJ1ZiArPSBuZXdsaW5lKGZpbGUuZXhjZXJwdCkgKyBuZXdsaW5lKGNsb3NlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmICsgbmV3bGluZShzdHIpO1xufTtcblxuZnVuY3Rpb24gbmV3bGluZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zbGljZSgtMSkgIT09ICdcXG4nID8gc3RyICsgJ1xcbicgOiBzdHI7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcblxuICBpZiAoZmlsZS5kYXRhID09IG51bGwpIHtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0cy5leGNlcnB0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdHMuZXhjZXJwdChmaWxlLCBvcHRzKTtcbiAgfVxuXG4gIGNvbnN0IHNlcCA9IGZpbGUuZGF0YS5leGNlcnB0X3NlcGFyYXRvciB8fCBvcHRzLmV4Y2VycHRfc2VwYXJhdG9yO1xuICBpZiAoc2VwID09IG51bGwgJiYgKG9wdHMuZXhjZXJwdCA9PT0gZmFsc2UgfHwgb3B0cy5leGNlcnB0ID09IG51bGwpKSB7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBjb25zdCBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0cy5leGNlcnB0ID09PSAnc3RyaW5nJ1xuICAgID8gb3B0cy5leGNlcnB0XG4gICAgOiAoc2VwIHx8IG9wdHMuZGVsaW1pdGVyc1swXSk7XG5cbiAgLy8gaWYgZW5hYmxlZCwgZ2V0IHRoZSBleGNlcnB0IGRlZmluZWQgYWZ0ZXIgZnJvbnQtbWF0dGVyXG4gIGNvbnN0IGlkeCA9IGZpbGUuY29udGVudC5pbmRleE9mKGRlbGltaXRlcik7XG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgZmlsZS5leGNlcnB0ID0gZmlsZS5jb250ZW50LnNsaWNlKDAsIGlkeCk7XG4gIH1cblxuICByZXR1cm4gZmlsZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiB2YWx1ZSB0byBlbnN1cmUgYW4gb2JqZWN0IGlzIHJldHVybmVkXG4gKiB3aXRoIHRoZSBleHBlY3RlZCBwcm9wZXJ0aWVzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZmlsZSkge1xuICBpZiAodHlwZU9mKGZpbGUpICE9PSAnb2JqZWN0Jykge1xuICAgIGZpbGUgPSB7IGNvbnRlbnQ6IGZpbGUgfTtcbiAgfVxuXG4gIGlmICh0eXBlT2YoZmlsZS5kYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfVxuXG4gIC8vIGlmIGZpbGUgd2FzIHBhc3NlZCBhcyBhbiBvYmplY3QsIGVuc3VyZSB0aGF0XG4gIC8vIFwiZmlsZS5jb250ZW50XCIgaXMgc2V0XG4gIGlmIChmaWxlLmNvbnRlbnRzICYmIGZpbGUuY29udGVudCA9PSBudWxsKSB7XG4gICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50cztcbiAgfVxuXG4gIC8vIHNldCBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9uIHRoZSBmaWxlIG9iamVjdFxuICB1dGlscy5kZWZpbmUoZmlsZSwgJ29yaWcnLCB1dGlscy50b0J1ZmZlcihmaWxlLmNvbnRlbnQpKTtcbiAgdXRpbHMuZGVmaW5lKGZpbGUsICdsYW5ndWFnZScsIGZpbGUubGFuZ3VhZ2UgfHwgJycpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ21hdHRlcicsIGZpbGUubWF0dGVyIHx8ICcnKTtcbiAgdXRpbHMuZGVmaW5lKGZpbGUsICdzdHJpbmdpZnknLCBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sYW5ndWFnZSkge1xuICAgICAgZmlsZS5sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdpZnkoZmlsZSwgZGF0YSwgb3B0aW9ucyk7XG4gIH0pO1xuXG4gIC8vIHN0cmlwIEJPTSBhbmQgZW5zdXJlIHRoYXQgXCJmaWxlLmNvbnRlbnRcIiBpcyBhIHN0cmluZ1xuICBmaWxlLmNvbnRlbnQgPSB1dGlscy50b1N0cmluZyhmaWxlLmNvbnRlbnQpO1xuICBmaWxlLmlzRW1wdHkgPSBmYWxzZTtcbiAgZmlsZS5leGNlcnB0ID0gJyc7XG4gIHJldHVybiBmaWxlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdldEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lJyk7XG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsYW5ndWFnZSwgc3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcbiAgY29uc3QgZW5naW5lID0gZ2V0RW5naW5lKGxhbmd1YWdlLCBvcHRzKTtcbiAgaWYgKHR5cGVvZiBlbmdpbmUucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBcIicgKyBsYW5ndWFnZSArICcucGFyc2VcIiB0byBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIGVuZ2luZS5wYXJzZShzdHIsIG9wdHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHNlY3Rpb25zID0gcmVxdWlyZSgnc2VjdGlvbi1tYXR0ZXInKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9saWIvZGVmYXVsdHMnKTtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vbGliL3N0cmluZ2lmeScpO1xuY29uc3QgZXhjZXJwdCA9IHJlcXVpcmUoJy4vbGliL2V4Y2VycHQnKTtcbmNvbnN0IGVuZ2luZXMgPSByZXF1aXJlKCcuL2xpYi9lbmdpbmVzJyk7XG5jb25zdCB0b0ZpbGUgPSByZXF1aXJlKCcuL2xpYi90by1maWxlJyk7XG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vbGliL3BhcnNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XG5cbi8qKlxuICogVGFrZXMgYSBzdHJpbmcgb3Igb2JqZWN0IHdpdGggYGNvbnRlbnRgIHByb3BlcnR5LCBleHRyYWN0c1xuICogYW5kIHBhcnNlcyBmcm9udC1tYXR0ZXIgZnJvbSB0aGUgc3RyaW5nLCB0aGVuIHJldHVybnMgYW4gb2JqZWN0XG4gKiB3aXRoIGBkYXRhYCwgYGNvbnRlbnRgIGFuZCBvdGhlciBbdXNlZnVsIHByb3BlcnRpZXNdKCNyZXR1cm5lZC1vYmplY3QpLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtYXR0ZXIgPSByZXF1aXJlKCdncmF5LW1hdHRlcicpO1xuICogY29uc29sZS5sb2cobWF0dGVyKCctLS1cXG50aXRsZTogSG9tZVxcbi0tLVxcbk90aGVyIHN0dWZmJykpO1xuICogLy89PiB7IGRhdGE6IHsgdGl0bGU6ICdIb21lJ30sIGNvbnRlbnQ6ICdPdGhlciBzdHVmZicgfVxuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGBpbnB1dGAgU3RyaW5nLCBvciBvYmplY3Qgd2l0aCBgY29udGVudGAgc3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG1hdHRlcihpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHsgZGF0YToge30sIGNvbnRlbnQ6IGlucHV0LCBleGNlcnB0OiAnJywgb3JpZzogaW5wdXQgfTtcbiAgfVxuXG4gIGxldCBmaWxlID0gdG9GaWxlKGlucHV0KTtcbiAgY29uc3QgY2FjaGVkID0gbWF0dGVyLmNhY2hlW2ZpbGUuY29udGVudF07XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGNhY2hlZCk7XG4gICAgICBmaWxlLm9yaWcgPSBjYWNoZWQub3JpZztcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cblxuICAgIC8vIG9ubHkgY2FjaGUgaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgcGFzc2VkLiBpZiB3ZSBjYWNoZSB3aGVuIG9wdGlvbnNcbiAgICAvLyBhcmUgcGFzc2VkLCB3ZSB3b3VsZCBuZWVkIHRvIGFsc28gY2FjaGUgb3B0aW9ucyB2YWx1ZXMsIHdoaWNoIHdvdWxkXG4gICAgLy8gbmVnYXRlIGFueSBwZXJmb3JtYW5jZSBiZW5lZml0cyBvZiBjYWNoaW5nXG4gICAgbWF0dGVyLmNhY2hlW2ZpbGUuY29udGVudF0gPSBmaWxlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlTWF0dGVyKGZpbGUsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFBhcnNlIGZyb250IG1hdHRlclxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTWF0dGVyKGZpbGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBvcGVuID0gb3B0cy5kZWxpbWl0ZXJzWzBdO1xuICBjb25zdCBjbG9zZSA9ICdcXG4nICsgb3B0cy5kZWxpbWl0ZXJzWzFdO1xuICBsZXQgc3RyID0gZmlsZS5jb250ZW50O1xuXG4gIGlmIChvcHRzLmxhbmd1YWdlKSB7XG4gICAgZmlsZS5sYW5ndWFnZSA9IG9wdHMubGFuZ3VhZ2U7XG4gIH1cblxuICAvLyBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgb3BlbmluZyBkZWxpbWl0ZXJcbiAgY29uc3Qgb3BlbkxlbiA9IG9wZW4ubGVuZ3RoO1xuICBpZiAoIXV0aWxzLnN0YXJ0c1dpdGgoc3RyLCBvcGVuLCBvcGVuTGVuKSkge1xuICAgIGV4Y2VycHQoZmlsZSwgb3B0cyk7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICAvLyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIG9wZW5pbmcgZGVsaW1pdGVyIGlzXG4gIC8vIGEgY2hhcmFjdGVyIGZyb20gdGhlIGRlbGltaXRlciwgdGhlbiBpdCdzIG5vdCBhIGZyb250LVxuICAvLyBtYXR0ZXIgZGVsaW1pdGVyXG4gIGlmIChzdHIuY2hhckF0KG9wZW5MZW4pID09PSBvcGVuLnNsaWNlKC0xKSkge1xuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgLy8gc3RyaXAgdGhlIG9wZW5pbmcgZGVsaW1pdGVyXG4gIHN0ciA9IHN0ci5zbGljZShvcGVuTGVuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICAvLyB1c2UgdGhlIGxhbmd1YWdlIGRlZmluZWQgYWZ0ZXIgZmlyc3QgZGVsaW1pdGVyLCBpZiBpdCBleGlzdHNcbiAgY29uc3QgbGFuZ3VhZ2UgPSBtYXR0ZXIubGFuZ3VhZ2Uoc3RyLCBvcHRzKTtcbiAgaWYgKGxhbmd1YWdlLm5hbWUpIHtcbiAgICBmaWxlLmxhbmd1YWdlID0gbGFuZ3VhZ2UubmFtZTtcbiAgICBzdHIgPSBzdHIuc2xpY2UobGFuZ3VhZ2UucmF3Lmxlbmd0aCk7XG4gIH1cblxuICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBjbG9zaW5nIGRlbGltaXRlclxuICBsZXQgY2xvc2VJbmRleCA9IHN0ci5pbmRleE9mKGNsb3NlKTtcbiAgaWYgKGNsb3NlSW5kZXggPT09IC0xKSB7XG4gICAgY2xvc2VJbmRleCA9IGxlbjtcbiAgfVxuXG4gIC8vIGdldCB0aGUgcmF3IGZyb250LW1hdHRlciBibG9ja1xuICBmaWxlLm1hdHRlciA9IHN0ci5zbGljZSgwLCBjbG9zZUluZGV4KTtcblxuICBjb25zdCBibG9jayA9IGZpbGUubWF0dGVyLnJlcGxhY2UoL15cXHMqI1teXFxuXSsvZ20sICcnKS50cmltKCk7XG4gIGlmIChibG9jayA9PT0gJycpIHtcbiAgICBmaWxlLmlzRW1wdHkgPSB0cnVlO1xuICAgIGZpbGUuZW1wdHkgPSBmaWxlLmNvbnRlbnQ7XG4gICAgZmlsZS5kYXRhID0ge307XG4gIH0gZWxzZSB7XG5cbiAgICAvLyBjcmVhdGUgZmlsZS5kYXRhIGJ5IHBhcnNpbmcgdGhlIHJhdyBmaWxlLm1hdHRlciBibG9ja1xuICAgIGZpbGUuZGF0YSA9IHBhcnNlKGZpbGUubGFuZ3VhZ2UsIGZpbGUubWF0dGVyLCBvcHRzKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBmaWxlLmNvbnRlbnRcbiAgaWYgKGNsb3NlSW5kZXggPT09IGxlbikge1xuICAgIGZpbGUuY29udGVudCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGZpbGUuY29udGVudCA9IHN0ci5zbGljZShjbG9zZUluZGV4ICsgY2xvc2UubGVuZ3RoKTtcbiAgICBpZiAoZmlsZS5jb250ZW50WzBdID09PSAnXFxyJykge1xuICAgICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50LnNsaWNlKDEpO1xuICAgIH1cbiAgICBpZiAoZmlsZS5jb250ZW50WzBdID09PSAnXFxuJykge1xuICAgICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50LnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIGV4Y2VycHQoZmlsZSwgb3B0cyk7XG5cbiAgaWYgKG9wdHMuc2VjdGlvbnMgPT09IHRydWUgfHwgdHlwZW9mIG9wdHMuc2VjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlY3Rpb25zKGZpbGUsIG9wdHMuc2VjdGlvbik7XG4gIH1cbiAgcmV0dXJuIGZpbGU7XG59XG5cbi8qKlxuICogRXhwb3NlIGVuZ2luZXNcbiAqL1xuXG5tYXR0ZXIuZW5naW5lcyA9IGVuZ2luZXM7XG5cbi8qKlxuICogU3RyaW5naWZ5IGFuIG9iamVjdCB0byBZQU1MIG9yIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UsIGFuZFxuICogYXBwZW5kIGl0IHRvIHRoZSBnaXZlbiBzdHJpbmcuIEJ5IGRlZmF1bHQsIG9ubHkgWUFNTCBhbmQgSlNPTlxuICogY2FuIGJlIHN0cmluZ2lmaWVkLiBTZWUgdGhlIFtlbmdpbmVzXSgjZW5naW5lcykgc2VjdGlvbiB0byBsZWFyblxuICogaG93IHRvIHN0cmluZ2lmeSBvdGhlciBsYW5ndWFnZXMuXG4gKlxuICogYGBganNcbiAqIGNvbnNvbGUubG9nKG1hdHRlci5zdHJpbmdpZnkoJ2ZvbyBiYXIgYmF6Jywge3RpdGxlOiAnSG9tZSd9KSk7XG4gKiAvLyByZXN1bHRzIGluOlxuICogLy8gLS0tXG4gKiAvLyB0aXRsZTogSG9tZVxuICogLy8gLS0tXG4gKiAvLyBmb28gYmFyIGJhelxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGBmaWxlYCBUaGUgY29udGVudCBzdHJpbmcgdG8gYXBwZW5kIHRvIHN0cmluZ2lmaWVkIGZyb250LW1hdHRlciwgb3IgYSBmaWxlIG9iamVjdCB3aXRoIGBmaWxlLmNvbnRlbnRgIHN0cmluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgZGF0YWAgRnJvbnQgbWF0dGVyIHRvIHN0cmluZ2lmeS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgW09wdGlvbnNdKCNvcHRpb25zKSB0byBwYXNzIHRvIGdyYXktbWF0dGVyIGFuZCBbanMteWFtbF0uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgYSBzdHJpbmcgY3JlYXRlZCBieSB3cmFwcGluZyBzdHJpbmdpZmllZCB5YW1sIHdpdGggZGVsaW1pdGVycywgYW5kIGFwcGVuZGluZyB0aGF0IHRvIHRoZSBnaXZlbiBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1hdHRlci5zdHJpbmdpZnkgPSBmdW5jdGlvbihmaWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3N0cmluZycpIGZpbGUgPSBtYXR0ZXIoZmlsZSwgb3B0aW9ucyk7XG4gIHJldHVybiBzdHJpbmdpZnkoZmlsZSwgZGF0YSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFN5bmNocm9ub3VzbHkgcmVhZCBhIGZpbGUgZnJvbSB0aGUgZmlsZSBzeXN0ZW0gYW5kIHBhcnNlXG4gKiBmcm9udCBtYXR0ZXIuIFJldHVybnMgdGhlIHNhbWUgb2JqZWN0IGFzIHRoZSBbbWFpbiBmdW5jdGlvbl0oI21hdHRlcikuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGZpbGUgPSBtYXR0ZXIucmVhZCgnLi9jb250ZW50L2Jsb2ctcG9zdC5tZCcpO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGZpbGVwYXRoYCBmaWxlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVhZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgW09wdGlvbnNdKCNvcHRpb25zKSB0byBwYXNzIHRvIGdyYXktbWF0dGVyLlxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIFthbiBvYmplY3RdKCNyZXR1cm5lZC1vYmplY3QpIHdpdGggYGRhdGFgIGFuZCBgY29udGVudGBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWF0dGVyLnJlYWQgPSBmdW5jdGlvbihmaWxlcGF0aCwgb3B0aW9ucykge1xuICBjb25zdCBzdHIgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGgsICd1dGY4Jyk7XG4gIGNvbnN0IGZpbGUgPSBtYXR0ZXIoc3RyLCBvcHRpb25zKTtcbiAgZmlsZS5wYXRoID0gZmlsZXBhdGg7XG4gIHJldHVybiBmaWxlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBzdHJpbmdgIGhhcyBmcm9udCBtYXR0ZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBmcm9udCBtYXR0ZXIgZXhpc3RzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tYXR0ZXIudGVzdCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdXRpbHMuc3RhcnRzV2l0aChzdHIsIGRlZmF1bHRzKG9wdGlvbnMpLmRlbGltaXRlcnNbMF0pO1xufTtcblxuLyoqXG4gKiBEZXRlY3QgdGhlIGxhbmd1YWdlIHRvIHVzZSwgaWYgb25lIGlzIGRlZmluZWQgYWZ0ZXIgdGhlXG4gKiBmaXJzdCBmcm9udC1tYXR0ZXIgZGVsaW1pdGVyLlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyaW5nYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHdpdGggYHJhd2AgKGFjdHVhbCBsYW5ndWFnZSBzdHJpbmcpLCBhbmQgYG5hbWVgLCB0aGUgbGFuZ3VhZ2Ugd2l0aCB3aGl0ZXNwYWNlIHRyaW1tZWRcbiAqL1xuXG5tYXR0ZXIubGFuZ3VhZ2UgPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBvcGVuID0gb3B0cy5kZWxpbWl0ZXJzWzBdO1xuXG4gIGlmIChtYXR0ZXIudGVzdChzdHIpKSB7XG4gICAgc3RyID0gc3RyLnNsaWNlKG9wZW4ubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbnN0IGxhbmd1YWdlID0gc3RyLnNsaWNlKDAsIHN0ci5zZWFyY2goL1xccj9cXG4vKSk7XG4gIHJldHVybiB7XG4gICAgcmF3OiBsYW5ndWFnZSxcbiAgICBuYW1lOiBsYW5ndWFnZSA/IGxhbmd1YWdlLnRyaW0oKSA6ICcnXG4gIH07XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgbWF0dGVyYFxuICovXG5cbm1hdHRlci5jYWNoZSA9IHt9O1xubWF0dGVyLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgbWF0dGVyLmNhY2hlID0ge307XG59O1xubW9kdWxlLmV4cG9ydHMgPSBtYXR0ZXI7XG4iLCAiaW1wb3J0IHsgUGx1Z2luLCBOb3RpY2UsIFRGaWxlLCBURm9sZGVyLCBub3JtYWxpemVQYXRoIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgeyBDbG91ZGZsYXJlU3luY1NldHRpbmdUYWIsIENsb3VkZmxhcmVTeW5jU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IFN5bmNFbmdpbmUsIENvbmZsaWN0SW5mbywgQ29uZmxpY3RSZXNvbHV0aW9uIH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5pbXBvcnQgeyBTeW5jU3RhdHVzQmFyIH0gZnJvbSAnLi9zdGF0dXMtYmFyJztcbmltcG9ydCB7IENvbmZsaWN0TW9kYWwgfSBmcm9tICcuL2NvbmZsaWN0LW1vZGFsJztcbmltcG9ydCB7IFB1Ymxpc2hFbmdpbmUgfSBmcm9tICcuL3B1Ymxpc2gtZW5naW5lJztcblxuaW50ZXJmYWNlIEZyb250bWF0dGVyRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBzbHVnPzogc3RyaW5nO1xuICBkYXRlPzogc3RyaW5nO1xuICBzdW1tYXJ5Pzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIHB1Ymxpc2g/OiBib29sZWFuO1xuICBjb3ZlckltYWdlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVtb3RlRmlsZSB7XG4gIGtleTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHVwbG9hZGVkPzogc3RyaW5nO1xuICBodHRwRXRhZz86IHN0cmluZztcbiAgY29udGVudEhhc2g/OiBzdHJpbmc7XG4gIGVuY29kaW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZGZsYXJlU3luY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzOiBDbG91ZGZsYXJlU3luY1NldHRpbmdzO1xuICBzeW5jRW5naW5lOiBTeW5jRW5naW5lO1xuICBzdGF0dXNCYXI6IFN5bmNTdGF0dXNCYXI7XG4gIHB1Ymxpc2hFbmdpbmU6IFB1Ymxpc2hFbmdpbmU7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdTU0MENcdTZCNjVcdTVGMTVcdTY0Q0VcbiAgICB0aGlzLnN5bmNFbmdpbmUgPSBuZXcgU3luY0VuZ2luZSh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUubG9hZFN5bmNTdGF0ZSgpO1xuXG4gICAgLy8gXHU1MjFEXHU1OUNCXHU1MzE2XHU1M0QxXHU1RTAzXHU1RjE1XHU2NENFXG4gICAgdGhpcy5wdWJsaXNoRW5naW5lID0gbmV3IFB1Ymxpc2hFbmdpbmUodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5wdWJsaXNoRW5naW5lLmxvYWRTdGF0ZSgpO1xuICAgIGF3YWl0IHRoaXMucHVibGlzaEVuZ2luZS5yZWZyZXNoQWxsU3RhdHVzZXMoKTtcblxuICAgIC8vIFx1NTIxRFx1NTlDQlx1NTMxNlx1NzJCNlx1NjAwMVx1NjgwRlxuICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN5bmNTdGF0dXNCYXIodGhpcywge1xuICAgICAgb25TaG93Q29uZmxpY3RzOiAoKSA9PiB0aGlzLnNob3dDb25mbGljdE1vZGFsKCksXG4gICAgICBvblRyaWdnZXJTeW5jOiAoKSA9PiB0aGlzLnRyaWdnZXJGdWxsU3luYygpLFxuICAgIH0pO1xuXG4gICAgLy8gXHU3RUQxXHU1QjlBXHU1NDBDXHU2QjY1XHU1RjE1XHU2NENFXHU1NkRFXHU4QzAzXG4gICAgdGhpcy5zeW5jRW5naW5lLm9uU3RhdHNDaGFuZ2VkID0gKHN0YXRzKSA9PiB7XG4gICAgICB0aGlzLnN0YXR1c0Jhci51cGRhdGVTdGF0cyhzdGF0cyk7XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vbkNvbmZsaWN0c0ZvdW5kID0gKGNvbmZsaWN0cykgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlQ29uZmxpY3RzKGNvbmZsaWN0cyk7XG4gICAgICBuZXcgTm90aWNlKGBcdTI2QTBcdUZFMEYgJHtjb25mbGljdHMubGVuZ3RofSBzeW5jIGNvbmZsaWN0KHMpIGZvdW5kLiBDbGljayBzdGF0dXMgYmFyIHRvIHJlc29sdmUuYCk7XG4gICAgICB0aGlzLnNob3dDb25mbGljdE1vZGFsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vblN5bmNDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5zeW5jRW5naW5lLnN0YXRzO1xuICAgICAgaWYgKHN0YXRzLmNvbmZsaWN0cyA9PT0gMCkge1xuICAgICAgICBuZXcgTm90aWNlKGBcdTI3MDUgU3luYyBjb21wbGV0ZTogJHtzdGF0cy5zeW5jZWRGaWxlc30gZmlsZXMgc3luY2VkYCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vblN5bmNFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgbmV3IE5vdGljZShgXHUyNzRDIFN5bmMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgfTtcblxuICAgIC8vIFx1NkRGQlx1NTJBMFx1OEJCRVx1N0Y2RVx1OTc2Mlx1Njc3RlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ2xvdWRmbGFyZVN5bmNTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAvLyBcdTZERkJcdTUyQTBcdTU0N0RcdTRFRTRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdzeW5jLWZ1bGwnLFxuICAgICAgbmFtZTogJ0Z1bGwgc3luYyB3aXRoIENsb3VkZmxhcmUnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMudHJpZ2dlckZ1bGxTeW5jKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdzeW5jLXRvLXJlbW90ZScsXG4gICAgICBuYW1lOiAnU3luYyBlbnRpcmUgdmF1bHQgdG8gQ2xvdWRmbGFyZSAodXBsb2FkIG9ubHkpJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnN5bmNUb1JlbW90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1mcm9tLXJlbW90ZScsXG4gICAgICBuYW1lOiAnRG93bmxvYWQgZW50aXJlIHZhdWx0IGZyb20gQ2xvdWRmbGFyZScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zeW5jRnJvbVJlbW90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAndXBkYXRlLWZyb250bWF0dGVyJyxcbiAgICAgIG5hbWU6ICdVcGRhdGUgZnJvbnRtYXR0ZXIgZm9yIGN1cnJlbnQgZmlsZScsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4gdGhpcy51cGRhdGVDdXJyZW50RmlsZUZyb250bWF0dGVyKGVkaXRvciksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdnZW5lcmF0ZS1hbGwtZnJvbnRtYXR0ZXInLFxuICAgICAgbmFtZTogJ0dlbmVyYXRlIGZyb250bWF0dGVyIGZvciBhbGwgbWFya2Rvd24gZmlsZXMnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZ2VuZXJhdGVBbGxGcm9udG1hdHRlcigpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1jdXJyZW50LWZpbGUnLFxuICAgICAgbmFtZTogJ1N5bmMgY3VycmVudCBmaWxlIHRvIENsb3VkZmxhcmUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0N1cnJlbnRGaWxlKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZXNvbHZlLWNvbmZsaWN0cycsXG4gICAgICBuYW1lOiAnUmVzb2x2ZSBzeW5jIGNvbmZsaWN0cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncHVibGlzaC1jdXJyZW50LW5vdGUnLFxuICAgICAgbmFtZTogJ1B1Ymxpc2g6IFB1Ymxpc2ggY3VycmVudCBub3RlJyxcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoKSA9PiB0aGlzLnB1Ymxpc2hDdXJyZW50Tm90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAndW5wdWJsaXNoLWN1cnJlbnQtbm90ZScsXG4gICAgICBuYW1lOiAnUHVibGlzaDogVW5wdWJsaXNoIGN1cnJlbnQgbm90ZScsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKCkgPT4gdGhpcy51bnB1Ymxpc2hDdXJyZW50Tm90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncHVibGlzaC1hbGwtY2hhbmdlcycsXG4gICAgICBuYW1lOiAnUHVibGlzaDogUHVibGlzaCBhbGwgY2hhbmdlcycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5wdWJsaXNoQWxsQ2hhbmdlcygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy1zeW5jLXN0YXR1cycsXG4gICAgICBuYW1lOiAnU2hvdyBzeW5jIHN0YXR1cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAvLyBcdTg5RTZcdTUzRDFcdTcyQjZcdTYwMDFcdTY4MEZcdTcwQjlcdTUxRkJcdTkwM0JcdThGOTFcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJbJ3Nob3dEZXRhaWxNb2RhbCddKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gXHU3NkQxXHU1NDJDXHU2NTg3XHU0RUY2XHU0RkREXHU1QjU4XHU0RThCXHU0RUY2XHVGRjBDXHU0RjdGXHU3NTI4IGRlYm91bmNlZCBcdTU0MENcdTZCNjVcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbignbW9kaWZ5JywgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiB0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICAgICAgdGhpcy5zeW5jRW5naW5lLnNjaGVkdWxlRmlsZVN5bmMoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTIxQlx1NUVGQVx1NEU4Qlx1NEVGNlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKCdjcmVhdGUnLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIHRoaXMuc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKSB7XG4gICAgICAgICAgaWYgKGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZUZyb250bWF0dGVyKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gXHU2NTg3XHU0RUY2XHU1M0YzXHU5NTJFXHU4M0RDXHU1MzVBXHU1M0QxXHU1RTAzXHU5MDA5XHU5ODc5XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZSkgPT4ge1xuICAgICAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wdWJsaXNoRW5naW5lLmdldFB1Ymxpc2hTdGF0ZShmaWxlLnBhdGgpO1xuICAgICAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLnN0YXR1cyA9PT0gJ2RyYWZ0Jykge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zZXRUaXRsZSgnUHVibGlzaCBOb3RlJykuc2V0SWNvbigndXBsb2FkLWNsb3VkJykub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHVibGlzaEVuZ2luZS5wdWJsaXNoRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zZXRUaXRsZSgnVW5wdWJsaXNoIE5vdGUnKS5zZXRJY29uKCd4LWNpcmNsZScpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFbmdpbmUudW5wdWJsaXNoRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBcdTZERkJcdTUyQTAgUmliYm9uIFx1NTZGRVx1NjgwN1xuICAgIHRoaXMuYWRkUmliYm9uSWNvbignY2xvdWQtdXBsb2FkJywgJ0Z1bGwgU3luYyB3aXRoIENsb3VkZmxhcmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJGdWxsU3luYygpO1xuICAgIH0pO1xuXG4gICAgLy8gXHU1NDJGXHU1MkE4XHU4MUVBXHU1MkE4XHU1NDBDXHU2QjY1XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1N5bmMpIHtcbiAgICAgIHRoaXMuc3luY0VuZ2luZS5zdGFydEF1dG9TeW5jKCk7XG4gICAgfVxuXG4gICAgLy8gXHU1NDJGXHU1MkE4XHU2NUY2XHU1NDBDXHU2QjY1XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3luY09uU3RhcnR1cCkge1xuICAgICAgLy8gXHU1RUY2XHU4RkRGIDMgXHU3OUQyXHU3QjQ5IE9ic2lkaWFuIFx1NUI4Q1x1NTE2OFx1NTJBMFx1OEY3RFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHJpZ2dlckZ1bGxTeW5jKCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBcdTU0MkZcdTUyQThcdTY1RjZcdTYyNkJcdTYzQ0ZcdTYyNDBcdTY3MDkgbWQgXHU2NTg3XHU0RUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU4ODY1XHU1MTY4XHU3RjNBXHU1OTMxXHU3Njg0IGZyb250bWF0dGVyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKSB7XG4gICAgICAvLyBcdTVFRjZcdThGREYgMiBcdTc5RDJcdTdCNDlcdTVGODUgdmF1bHQgXHU1QjhDXHU1MTY4XHU1MkEwXHU4RjdEXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zY2FuQW5kR2VuZXJhdGVGcm9udG1hdHRlcigpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gbG9hZGVkJyk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHNlcnZlclVybDogJycsXG4gICAgICAgIGFwaVRva2VuOiAnJyxcbiAgICAgICAgYXV0b1N5bmM6IHRydWUsXG4gICAgICAgIGF1dG9Gcm9udG1hdHRlcjogdHJ1ZSxcbiAgICAgICAgc3luY0FsbEZpbGVzOiB0cnVlLFxuICAgICAgICBleGNsdWRlRm9sZGVyczogWydfdGVtcGxhdGVzJywgJy50cmFzaCddLFxuICAgICAgICBleGNsdWRlRmlsZXM6IFtdLFxuICAgICAgICBhdXRvU3luY0ludGVydmFsOiA1LFxuICAgICAgICBjb25mbGljdFN0cmF0ZWd5OiAnYXNrJyBhcyBjb25zdCxcbiAgICAgICAgc3luY09uU3RhcnR1cDogdHJ1ZSxcbiAgICAgICAgZGVib3VuY2VEZWxheTogMzAsXG4gICAgICAgIHB1Ymxpc2hCZWhhdmlvcjogJ2Zyb250bWF0dGVyLW9ubHknLFxuICAgICAgICBwdWJsaXNoU2VydmVyVXJsOiAnJyxcbiAgICAgICAgcHVibGlzaEFwaVRva2VuOiAnJyxcbiAgICAgICAgYXR0YWNobWVudHNQYXRoUHJlZml4OiAnYXR0YWNobWVudHMnLFxuICAgICAgfSxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcblxuICAgIC8vIFx1OTFDRFx1NTQyRlx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1RkYwOFx1OTVGNFx1OTY5NFx1NTNFRlx1ODBGRFx1NjUzOVx1NTNEOFx1RkYwOVxuICAgIGlmICh0aGlzLnN5bmNFbmdpbmUpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICAgIHRoaXMuc3luY0VuZ2luZS5zdGFydEF1dG9TeW5jKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN5bmNFbmdpbmUuc3RvcEF1dG9TeW5jKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBTeW5jIFRyaWdnZXJzID09PT09PT09PT1cblxuICBhc3luYyB0cmlnZ2VyRnVsbFN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnNlcnZlclVybCB8fCAhdGhpcy5zZXR0aW5ncy5hcGlUb2tlbikge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIGNvbmZpZ3VyZSBTZXJ2ZXIgVVJMIGFuZCBBUEkgVG9rZW4gaW4gc2V0dGluZ3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGNvbm5lY3Rpb24gZmlyc3RcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvYmxvZy9zaXRlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgbmV3IE5vdGljZShgQ29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKCdTdGFydGluZyBmdWxsIHN5bmMuLi4nKTtcbiAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUuZnVsbFN5bmMoKTtcbiAgfVxuXG4gIHNob3dDb25mbGljdE1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZsaWN0cyA9IHRoaXMuc3luY0VuZ2luZS5jb25mbGljdHM7XG4gICAgaWYgKGNvbmZsaWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIGNvbmZsaWN0cyB0byByZXNvbHZlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IENvbmZsaWN0TW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIGNvbmZsaWN0cyxcbiAgICAgIGFzeW5jIChjb25mbGljdCwgcmVzb2x1dGlvbikgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUucmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlQ29uZmxpY3RzKHRoaXMuc3luY0VuZ2luZS5jb25mbGljdHMpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIChyZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5yZXNvbHZlQWxsQ29uZmxpY3RzKHJlc29sdXRpb24pO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci51cGRhdGVDb25mbGljdHModGhpcy5zeW5jRW5naW5lLmNvbmZsaWN0cyk7XG4gICAgICB9XG4gICAgKS5vcGVuKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEFQSSBcdThDMDNcdTc1MjggPT09PT09PT09PVxuXG4gIGFzeW5jIGFwaTxUID0gYW55PihlbmRwb2ludDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCB7IHNlcnZlclVybCwgYXBpVG9rZW4gfSA9IHRoaXMuc2V0dGluZ3M7XG5cbiAgICBpZiAoIXNlcnZlclVybCB8fCAhYXBpVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIFVSTCAoJHtzZXJ2ZXJVcmwgfHwgJ2VtcHR5J30pIGFuZCBBUEkgdG9rZW4gKCR7YXBpVG9rZW4gPyAnc2V0JyA6ICdlbXB0eSd9KSBhcmUgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArIGVuZHBvaW50O1xuICAgIGNvbnNvbGUubG9nKGBbQVBJXSAke29wdGlvbnM/Lm1ldGhvZCB8fCAnR0VUJ30gJHt1cmx9YCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucz8uaGVhZGVycyk7XG4gICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpVG9rZW59YCk7XG4gICAgaWYgKG9wdGlvbnM/Lm1ldGhvZCAmJiBvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGBbQVBJXSBSZXNwb25zZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiByZXNwb25zZS5zdGF0dXNUZXh0IH0pKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvci5lcnJvciB8fCByZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFx1NEUwQVx1NEYyMC9cdTRFMEJcdThGN0QgPT09PT09PT09PVxuXG4gIGFzeW5jIHVwbG9hZEZpbGUoa2V5OiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgY29udGVudFR5cGUgPSAndGV4dC9tYXJrZG93bicsIGVuY29kaW5nOiAndXRmLTgnIHwgJ2Jhc2U2NCcgPSAndXRmLTgnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvc3luYy91cGxvYWQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2V5LCBjb250ZW50LCBjb250ZW50VHlwZSwgZW5jb2RpbmcgfSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkb3dubG9hZEZpbGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPFJlbW90ZUZpbGU+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmFwaTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGRhdGE6IFJlbW90ZUZpbGUgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke2tleX1gKTtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH1cblxuICBhc3luYyBsaXN0RmlsZXMocHJlZml4ID0gJycpOiBQcm9taXNlPHsga2V5OiBzdHJpbmc7IHNpemU6IG51bWJlcjsgdXBsb2FkZWQ/OiBzdHJpbmc7IGh0dHBFdGFnPzogc3RyaW5nIH1bXT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXBpPHsgc3VjY2VzczogYm9vbGVhbjsgZGF0YTogeyBmaWxlczogYW55W10gfSB9PihcbiAgICAgIGAvYXBpL3N5bmMvbGlzdD9wcmVmaXg9JHtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KX1gXG4gICAgKTtcbiAgICByZXR1cm4gcmVzLmRhdGEuZmlsZXM7XG4gIH1cblxuICBhc3luYyBkZWxldGVGaWxlKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5hcGkoYC9hcGkvc3luYy9kZWxldGUvJHtrZXl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBGcm9udG1hdHRlciBcdTU5MDRcdTc0MDYgPT09PT09PT09PVxuXG4gIGFzeW5jIGdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZTogVEZpbGUpOiBQcm9taXNlPEZyb250bWF0dGVyRGF0YT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gbWF0dGVyKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBleGlzdGluZy5kYXRhLnRpdGxlIHx8IGZpbGUuYmFzZW5hbWUsXG4gICAgICBzbHVnOiBleGlzdGluZy5kYXRhLnNsdWcgfHwgdGhpcy5nZW5lcmF0ZVNsdWcoZmlsZS5iYXNlbmFtZSksXG4gICAgICBkYXRlOiBleGlzdGluZy5kYXRhLmRhdGUgfHwgbmV3IERhdGUoZmlsZS5zdGF0LmN0aW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgc3VtbWFyeTogZXhpc3RpbmcuZGF0YS5zdW1tYXJ5IHx8IHRoaXMuZXh0cmFjdFN1bW1hcnkoZXhpc3RpbmcuY29udGVudCksXG4gICAgICB0YWdzOiBleGlzdGluZy5kYXRhLnRhZ3MgfHwgW10sXG4gICAgICBwdWJsaXNoOiBleGlzdGluZy5kYXRhLnB1Ymxpc2ggPz8gZmFsc2UsXG4gICAgICBjb3ZlckltYWdlOiBleGlzdGluZy5kYXRhLmNvdmVySW1hZ2UsXG4gICAgfTtcbiAgfVxuXG4gIGdlbmVyYXRlU2x1ZyhmaWxlbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZW5hbWVcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvW15cXHctXS9nLCAnJylcbiAgICAgIC5zdWJzdHJpbmcoMCwgMTAwKTtcbiAgfVxuXG4gIGV4dHJhY3RTdW1tYXJ5KGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZmlyc3RQYXJhZ3JhcGggPSBjb250ZW50LnNwbGl0KCdcXG5cXG4nKVswXTtcbiAgICByZXR1cm4gZmlyc3RQYXJhZ3JhcGgucmVwbGFjZSgvWyMqYF9cXFtcXF1dL2csICcnKS5zdWJzdHJpbmcoMCwgMjAwKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUZpbGVGcm9udG1hdHRlcihmaWxlOiBURmlsZSwgc2lsZW50ID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NURGMlx1NjcwOSBmcm9udG1hdHRlclx1RkYwQ1x1OERGM1x1OEZDN1x1RkYwOFx1NEVDNVx1NEUzQVx1N0YzQVx1NTkzMVx1NzY4NFx1NjU4N1x1NEVGNlx1NzUxRlx1NjIxMFx1RkYwOVxuICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy0tLScpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBmcm9udG1hdHRlciA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVGcm9udG1hdHRlcihmaWxlKTtcbiAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShjb250ZW50LCBmcm9udG1hdHRlcik7XG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5ld0NvbnRlbnQpO1xuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIG5ldyBOb3RpY2UoYFVwZGF0ZWQgZnJvbnRtYXR0ZXIgZm9yICR7ZmlsZS5uYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUN1cnJlbnRGaWxlRnJvbnRtYXR0ZXIoZWRpdG9yOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIGFjdGl2ZSBmaWxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoYWN0aXZlRmlsZSk7XG4gICAgY29uc3QgY29udGVudCA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBtYXR0ZXIuc3RyaW5naWZ5KGNvbnRlbnQsIGZyb250bWF0dGVyKTtcblxuICAgIGVkaXRvci5zZXRWYWx1ZShuZXdDb250ZW50KTtcbiAgICBuZXcgTm90aWNlKCdVcGRhdGVkIGZyb250bWF0dGVyJyk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MjZCXHU2M0NGXHU2MjQwXHU2NzA5IG1kIFx1NjU4N1x1NEVGNlx1RkYwQ1x1Nzg2RVx1NEZERFx1NkJDRlx1NEUyQVx1NjU4N1x1NEVGNlx1OTBGRFx1NjcwOVx1NUI4Q1x1NjU3NFx1NzY4NCBmcm9udG1hdHRlclxuICAgKiBcdTdFREZcdTRFMDBcdTU5MDRcdTc0MDZcdTRFMDlcdTc5Q0RcdTYwQzVcdTUxQjVcdUZGMUFcbiAgICogMS4gXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5IGZyb250bWF0dGVyIFx1MjE5MiBcdTc1MUZcdTYyMTBcdTUxNjhcdTkwRThcdTVCNTdcdTZCQjVcbiAgICogMi4gXHU2NzA5XHU5MEU4XHU1MjA2IGZyb250bWF0dGVyXHVGRjA4XHU3RjNBXHU1QzExXHU2N0QwXHU0RTlCXHU1QjU3XHU2QkI1XHVGRjA5XHUyMTkyIFx1ODg2NVx1NTE2OFx1N0YzQVx1NTkzMVx1NUI1N1x1NkJCNVxuICAgKiAzLiBcdTVERjJcdTY3MDlcdTVCOENcdTY1NzQgZnJvbnRtYXR0ZXIgXHUyMTkyIFx1OERGM1x1OEZDN1xuICAgKi9cbiAgYXN5bmMgc2NhbkFuZEdlbmVyYXRlRnJvbnRtYXR0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihcbiAgICAgIChmKSA9PiBmLnBhdGguZW5kc1dpdGgoJy5tZCcpICYmIHRoaXMuc2hvdWxkU3luY0ZpbGUoZi5wYXRoKVxuICAgICk7XG5cbiAgICBsZXQgZ2VuZXJhdGVkID0gMDtcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFsndGl0bGUnLCAnc2x1ZycsICdkYXRlJywgJ3N1bW1hcnknLCAndGFncycsICdwdWJsaXNoJ10gYXMgY29uc3Q7XG5cbiAgICBjb25zb2xlLmxvZyhgW0Zyb250bWF0dGVyXSBTY2FubmluZyAke2ZpbGVzLmxlbmd0aH0gbWFya2Rvd24gZmlsZXMuLi5gKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG5cbiAgICAgICAgLy8gZ3JheS1tYXR0ZXIgXHU3RURGXHU0RTAwXHU4OUUzXHU2NzkwXHVGRjFBXHU2NUUwXHU4QkJBXHU2NzA5XHU2Q0ExXHU2NzA5IC0tLSBcdTkwRkRcdTgwRkRcdTZCNjNcdTc4NkVcdTg5RTNcdTY3OTBcbiAgICAgICAgLy8gXHU2Q0ExXHU2NzA5IGZyb250bWF0dGVyIFx1MjE5MiBkYXRhPXt9LCBjb250ZW50PVx1NTM5Rlx1NTlDQlx1NTE4NVx1NUJCOVxuICAgICAgICAvLyBcdTY3MDkgZnJvbnRtYXR0ZXIgXHUyMTkyIGRhdGE9e1x1NURGMlx1NjcwOVx1NUI1N1x1NkJCNX0sIGNvbnRlbnQ9XHU2QjYzXHU2NTg3XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihjb250ZW50KTtcblxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTlFRDhcdThCQTRcdTUwM0NcbiAgICAgICAgY29uc3QgZGVmYXVsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgICAgICAgdGl0bGU6IGZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgc2x1ZzogdGhpcy5nZW5lcmF0ZVNsdWcoZmlsZS5iYXNlbmFtZSksXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoZmlsZS5zdGF0LmN0aW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN1bW1hcnk6IHRoaXMuZXh0cmFjdFN1bW1hcnkocGFyc2VkLmNvbnRlbnQpLFxuICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgIHB1Ymxpc2g6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFx1NjhDMFx1NjdFNVx1NTRFQVx1NEU5Qlx1NUZDNVx1ODk4MVx1NUI1N1x1NkJCNVx1N0YzQVx1NTkzMVxuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHJlcXVpcmVkRmllbGRzKSB7XG4gICAgICAgICAgaWYgKHBhcnNlZC5kYXRhW2ZpZWxkXSA9PT0gdW5kZWZpbmVkIHx8IHBhcnNlZC5kYXRhW2ZpZWxkXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyc2VkLmRhdGFbZmllbGRdID0gZGVmYXVsdHNbZmllbGRdO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAvLyBcdTc1MjggZ3JheS1tYXR0ZXIgXHU5MUNEXHU2NUIwXHU1RThGXHU1MjE3XHU1MzE2XHVGRjA4XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwIC0tLSBcdTUyMDZcdTk2OTRcdTdCMjZcdUZGMDlcbiAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShwYXJzZWQuY29udGVudCwgcGFyc2VkLmRhdGEpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICBnZW5lcmF0ZWQrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW0Zyb250bWF0dGVyXSBcdTI3MDUgJHtmaWxlLnBhdGh9IFx1MjAxNCBhZGRlZCBtaXNzaW5nIGZpZWxkc2ApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbRnJvbnRtYXR0ZXJdIFx1Mjc0QyBGYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlbmVyYXRlZCA+IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoYFx1MjcwNSBHZW5lcmF0ZWQvdXBkYXRlZCBmcm9udG1hdHRlciBmb3IgJHtnZW5lcmF0ZWR9IGZpbGUocylgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFtGcm9udG1hdHRlcl0gRG9uZTogJHtnZW5lcmF0ZWR9LyR7ZmlsZXMubGVuZ3RofSBmaWxlcyB1cGRhdGVkYCk7XG4gIH1cblxuICAvKipcbiAgICogXHU0RTNBXHU2MjQwXHU2NzA5IG1kIFx1NjU4N1x1NEVGNlx1NUYzQVx1NTIzNlx1NzUxRlx1NjIxMC9cdTY2RjRcdTY1QjAgZnJvbnRtYXR0ZXJcdUZGMDhcdTUzMDVcdTYyRUNcdTVERjJcdTY3MDkgZnJvbnRtYXR0ZXIgXHU3Njg0XHU2NTg3XHU0RUY2XHVGRjA5XG4gICAqL1xuICBhc3luYyBnZW5lcmF0ZUFsbEZyb250bWF0dGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoXG4gICAgICAoZikgPT4gZi5wYXRoLmVuZHNXaXRoKCcubWQnKSAmJiB0aGlzLnNob3VsZFN5bmNGaWxlKGYucGF0aClcbiAgICApO1xuXG4gICAgbGV0IHVwZGF0ZWQgPSAwO1xuICAgIG5ldyBOb3RpY2UoYEdlbmVyYXRpbmcgZnJvbnRtYXR0ZXIgZm9yICR7ZmlsZXMubGVuZ3RofSBmaWxlcy4uLmApO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZSk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBtYXR0ZXIuc3RyaW5naWZ5KFxuICAgICAgICAgIG1hdHRlcihjb250ZW50KS5jb250ZW50LCAvLyBcdTUzQkJcdTYzODlcdTY1RTcgZnJvbnRtYXR0ZXJcdUZGMENcdTc1MjhcdTY1QjBcdTc2ODRcdTY2RkZcdTYzNjJcbiAgICAgICAgICBmcm9udG1hdHRlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFx1NEVDNVx1NTcyOFx1NTE4NVx1NUJCOVx1NUI5RVx1OTY0NVx1NTNEOFx1NTMxNlx1NjVGNlx1NTE5OVx1NTE2NVxuICAgICAgICBpZiAoY29udGVudCAhPT0gbmV3Q29udGVudCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICB1cGRhdGVkKys7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtGcm9udG1hdHRlcl0gRmFpbGVkIGZvciAke2ZpbGUucGF0aH06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFx1MjcwNSBVcGRhdGVkIGZyb250bWF0dGVyIGZvciAke3VwZGF0ZWR9LyR7ZmlsZXMubGVuZ3RofSBmaWxlc2ApO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBcdTU0MENcdTZCNjVcdTkwM0JcdThGOTEgPT09PT09PT09PVxuXG4gIHNob3VsZFN5bmNGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBcdTYzOTJcdTk2NjRcdTcyNzlcdTVCOUFcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICBmb3IgKGNvbnN0IGV4Y2x1ZGUgb2YgdGhpcy5zZXR0aW5ncy5leGNsdWRlRm9sZGVycyB8fCBbXSkge1xuICAgICAgaWYgKGZpbGVQYXRoLnN0YXJ0c1dpdGgoZXhjbHVkZSArICcvJykgfHwgZmlsZVBhdGguc3RhcnRzV2l0aChleGNsdWRlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gXHU2MzkyXHU5NjY0IC5jb25mbGljdCBcdTY1ODdcdTRFRjZcbiAgICBpZiAoZmlsZVBhdGguaW5jbHVkZXMoJy5jb25mbGljdC0nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0UmVtb3RlS2V5KGZpbGU6IFRGaWxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZS5wYXRoO1xuICB9XG5cbiAgZ2V0TWltZVR5cGUoZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgIGpwZzogJ2ltYWdlL2pwZWcnLCBqcGVnOiAnaW1hZ2UvanBlZycsIHBuZzogJ2ltYWdlL3BuZycsXG4gICAgICBnaWY6ICdpbWFnZS9naWYnLCB3ZWJwOiAnaW1hZ2Uvd2VicCcsIHN2ZzogJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICAgYXZpZjogJ2ltYWdlL2F2aWYnLCBwZGY6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgbXAzOiAnYXVkaW8vbXBlZycsIG1wNDogJ3ZpZGVvL21wNCcsXG4gICAgICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsIHlhbWw6ICd0ZXh0L3lhbWwnLCB5bWw6ICd0ZXh0L3lhbWwnLFxuICAgICAgY3NzOiAndGV4dC9jc3MnLCBqczogJ3RleHQvamF2YXNjcmlwdCcsIHRzOiAndGV4dC90eXBlc2NyaXB0JyxcbiAgICB9O1xuICAgIHJldHVybiBtYXBbZXh0LnRvTG93ZXJDYXNlKCldIHx8ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICB9XG5cbiAgYXN5bmMgc3luY0ZpbGVUb1JlbW90ZShmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5zaG91bGRTeW5jRmlsZShmaWxlLnBhdGgpKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgaXNNYXJrZG93biA9IGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJyk7XG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIFJlYWRpbmcgZmlsZTogJHtmaWxlLnBhdGh9ICgke2lzTWFya2Rvd24gPyAnbWFya2Rvd24nIDogZmlsZS5leHRlbnNpb259KWApO1xuXG4gICAgICBsZXQgY29udGVudDogc3RyaW5nO1xuICAgICAgbGV0IGNvbnRlbnRUeXBlOiBzdHJpbmc7XG4gICAgICBsZXQgZW5jb2Rpbmc6ICd1dGYtOCcgfCAnYmFzZTY0JyA9ICd1dGYtOCc7XG5cbiAgICAgIGlmIChpc01hcmtkb3duKSB7XG4gICAgICAgIGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICBjb250ZW50VHlwZSA9ICd0ZXh0L21hcmtkb3duJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NEU4Q1x1OEZEQlx1NTIzNlx1NjU4N1x1NEVGNlx1NzUyOCBiYXNlNjQgXHU3RjE2XHU3ODAxXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWRCaW5hcnkoZmlsZSk7XG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyKTtcbiAgICAgICAgZW5jb2RpbmcgPSAnYmFzZTY0JztcbiAgICAgICAgY29udGVudFR5cGUgPSB0aGlzLmdldE1pbWVUeXBlKGZpbGUuZXh0ZW5zaW9uKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBGaWxlIHNpemU6ICR7ZmlsZS5zdGF0LnNpemV9IGJ5dGVzLCBlbmNvZGluZzogJHtlbmNvZGluZ31gKTtcblxuICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2NjJGIG1hcmtkb3duXHVGRjBDXHU2OEMwXHU2N0U1XHU2NjJGXHU1NDI2XHU1REYyXHU1M0QxXHU1RTAzXHU0RUU1XHU1MUIzXHU1QjlBXHU2NjJGXHU1NDI2XHU0RTBBXHU0RjIwXHU1NkZFXHU3MjQ3XG4gICAgICBjb25zdCBpc1B1Ymxpc2hlZCA9IGlzTWFya2Rvd25cbiAgICAgICAgPyAoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbWF0dGVyKGNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5kYXRhLnB1Ymxpc2ggPT09IHRydWU7XG4gICAgICAgICAgfSkoKVxuICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAvLyBcdTRFMEFcdTRGMjBcdTY1ODdcdTRFRjZcbiAgICAgIGNvbnN0IHJlbW90ZUtleSA9IHRoaXMuZ2V0UmVtb3RlS2V5KGZpbGUpO1xuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBVcGxvYWRpbmcgdG86ICR7cmVtb3RlS2V5fWApO1xuICAgICAgYXdhaXQgdGhpcy51cGxvYWRGaWxlKHJlbW90ZUtleSwgY29udGVudCwgY29udGVudFR5cGUsIGVuY29kaW5nKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gXHUyNzA1IFVwbG9hZGVkICR7ZmlsZS5uYW1lfWApO1xuXG4gICAgICAvLyBcdTU5ODJcdTY3OUMgbWFya2Rvd24gXHU1REYyXHU1M0QxXHU1RTAzXHVGRjBDXHU2M0QwXHU1M0Q2XHU1RTc2XHU0RTBBXHU0RjIwXHU1NkZFXHU3MjQ3XG4gICAgICBpZiAoaXNNYXJrZG93biAmJiBpc1B1Ymxpc2hlZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIEV4dHJhY3RpbmcgaW1hZ2VzIGZyb20gJHtmaWxlLm5hbWV9YCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZXh0cmFjdEFuZFVwbG9hZEltYWdlcyhjb250ZW50LCBmaWxlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY10gXHUyNzRDIEZhaWxlZCB0byBzeW5jICR7ZmlsZS5uYW1lfTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN5bmNGaWxlRnJvbVJlbW90ZShyZW1vdGVGaWxlOiB7IGtleTogc3RyaW5nIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZG93bmxvYWRGaWxlKHJlbW90ZUZpbGUua2V5KTtcbiAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGRhdGEua2V5O1xuXG4gICAgICBjb25zdCBleGlzdGluZ0ZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobG9jYWxQYXRoKTtcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBsb2NhbFBhdGguZW5kc1dpdGgoJy5tZCcpO1xuXG4gICAgICBpZiAoZXhpc3RpbmdGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIC8vIFx1NjU4N1x1NjcyQ1x1NjU4N1x1NEVGNlx1NzZGNFx1NjNBNVx1NkJENFx1OEY4M1xuICAgICAgICAgIGNvbnN0IGxvY2FsQ29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZXhpc3RpbmdGaWxlKTtcbiAgICAgICAgICBpZiAobG9jYWxDb250ZW50ICE9PSBkYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShleGlzdGluZ0ZpbGUsIGRhdGEuY29udGVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBcdTRFOENcdThGREJcdTUyMzZcdTY1ODdcdTRFRjZcdTZCRDRcdThGODNcdTU5MjdcdTVDMEZcbiAgICAgICAgICBpZiAoZXhpc3RpbmdGaWxlLnN0YXQuc2l6ZSAhPT0gZGF0YS5zaXplKSB7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLmJhc2U2NFRvQXJyYXlCdWZmZXIoZGF0YS5jb250ZW50KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeUJpbmFyeShleGlzdGluZ0ZpbGUsIGJ1ZmZlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XHVGRjBDXHU1MjFCXHU1RUZBXG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBsb2NhbFBhdGguc3Vic3RyaW5nKDAsIGxvY2FsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgaWYgKGZvbGRlclBhdGgpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyUGF0aCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShsb2NhbFBhdGgsIGRhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlQmluYXJ5KGxvY2FsUGF0aCwgYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBDcmVhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtEb3dubG9hZF0gRmFpbGVkIHRvIHN5bmMgJHtyZW1vdGVGaWxlLmtleX06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjQ6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcbiAgICBjb25zdCBiaW5hcnkgPSBhdG9iKGJhc2U2NCk7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShiaW5hcnkubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgYnl0ZXNbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbiAgfVxuXG4gIGFzeW5jIHN5bmNUb1JlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuZXcgTm90aWNlKCdTeW5jaW5nIHZhdWx0IHRvIENsb3VkZmxhcmUuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldEZpbGVzKCk7XG4gICAgICBsZXQgc3luY2VkID0gMDtcbiAgICAgIGxldCBza2lwcGVkID0gMDtcblxuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBGb3VuZCAke2ZpbGVzLmxlbmd0aH0gZmlsZXMgaW4gdmF1bHRgKTtcblxuICAgICAgLy8gVGVzdCBBUEkgY29ubmVjdGlvbiBmaXJzdFxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvYmxvZy9zaXRlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3luY10gXHUyNzA1IEFQSSBjb25uZWN0aW9uIHRlc3QgcGFzc2VkJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jXSBcdTI3NEMgQVBJIGNvbm5lY3Rpb24gdGVzdCBmYWlsZWQ6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIG5ldyBOb3RpY2UoYENvbm5lY3Rpb24gZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGlmICghdGhpcy5zaG91bGRTeW5jRmlsZShmaWxlLnBhdGgpKSB7XG4gICAgICAgICAgc2tpcHBlZCsrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNGaWxlVG9SZW1vdGUoZmlsZSk7XG4gICAgICAgICAgc3luY2VkKys7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY10gXHUyNzRDIEZhaWxlZCB0byBzeW5jICR7ZmlsZS5wYXRofTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIERvbmU6ICR7c3luY2VkfSBzeW5jZWQsICR7c2tpcHBlZH0gc2tpcHBlZGApO1xuICAgICAgbmV3IE5vdGljZShgU3luY2VkICR7c3luY2VkfS8ke2ZpbGVzLmxlbmd0aH0gZmlsZXMgKCR7c2tpcHBlZH0gc2tpcHBlZClgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY10gRmFpbGVkIHRvIHN5bmM6JywgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgU3luYyBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jRnJvbVJlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBuZXcgTm90aWNlKCdEb3dubG9hZGluZyBmcm9tIENsb3VkZmxhcmUuLi4nKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnW0Rvd25sb2FkXSBMaXN0aW5nIHJlbW90ZSBmaWxlcy4uLicpO1xuICAgICAgY29uc3QgcmVtb3RlRmlsZXMgPSBhd2FpdCB0aGlzLmxpc3RGaWxlcygnJyk7XG4gICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBGb3VuZCAke3JlbW90ZUZpbGVzLmxlbmd0aH0gcmVtb3RlIGZpbGVzYCk7XG5cbiAgICAgIGxldCBzeW5jZWQgPSAwO1xuXG4gICAgICBmb3IgKGNvbnN0IHJlbW90ZUZpbGUgb2YgcmVtb3RlRmlsZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gUHJvY2Vzc2luZzogJHtyZW1vdGVGaWxlLmtleX1gKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN5bmNGaWxlRnJvbVJlbW90ZShyZW1vdGVGaWxlKTtcbiAgICAgICAgICBzeW5jZWQrKztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtEb3dubG9hZF0gRmFpbGVkIHRvIHN5bmMgJHtyZW1vdGVGaWxlLmtleX06YCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coYFtEb3dubG9hZF0gRG9uZTogJHtzeW5jZWR9IGZpbGVzIHByb2Nlc3NlZGApO1xuICAgICAgbmV3IE5vdGljZShgRG93bmxvYWRlZCAke3N5bmNlZH0gZmlsZXMgZnJvbSBDbG91ZGZsYXJlYCk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW0Rvd25sb2FkXSBGYWlsZWQ6JywgZXJyb3IpO1xuICAgICAgbmV3IE5vdGljZShgRG93bmxvYWQgZmFpbGVkOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY0N1cnJlbnRGaWxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgIGlmICghYWN0aXZlRmlsZSkge1xuICAgICAgbmV3IE5vdGljZSgnTm8gYWN0aXZlIGZpbGUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLnN5bmNGaWxlVG9SZW1vdGUoYWN0aXZlRmlsZSk7XG4gICAgbmV3IE5vdGljZShgU3luY2VkICR7YWN0aXZlRmlsZS5uYW1lfSB0byBDbG91ZGZsYXJlYCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFx1NTZGRVx1NzI0N1x1NTkwNFx1NzQwNiA9PT09PT09PT09XG5cbiAgYXN5bmMgZXh0cmFjdEFuZFVwbG9hZEltYWdlcyhjb250ZW50OiBzdHJpbmcsIGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgaW1hZ2VSZWdleCA9IC8hXFxbLio/XFxdXFwoKC4qPylcXCkvZztcbiAgICBsZXQgbWF0Y2g7XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gaW1hZ2VSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VQYXRoID0gbWF0Y2hbMV07XG5cbiAgICAgIGlmIChpbWFnZVBhdGguc3RhcnRzV2l0aCgnLi8nKSB8fCAhaW1hZ2VQYXRoLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICBjb25zdCBmb2xkZXIgPSBmaWxlLnBhcmVudD8ucGF0aCB8fCAnJztcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBub3JtYWxpemVQYXRoKGAke2ZvbGRlcn0vJHtpbWFnZVBhdGh9YCk7XG4gICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmdWxsUGF0aCk7XG5cbiAgICAgICAgaWYgKGltYWdlRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgY29uc3QgaW1hZ2VCdWZmZXIgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkQmluYXJ5KGltYWdlRmlsZSk7XG4gICAgICAgICAgY29uc3QgYmFzZTY0ID0gdGhpcy5hcnJheUJ1ZmZlclRvQmFzZTY0KGltYWdlQnVmZmVyKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbWFnZUZpbGUuZXh0ZW5zaW9uLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBsZXQgY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICBpZiAoWydqcGcnLCAnanBlZyddLmluY2x1ZGVzKGV4dCkpIGNvbnRlbnRUeXBlID0gYGltYWdlL2pwZWdgO1xuICAgICAgICAgIGVsc2UgaWYgKGV4dCA9PT0gJ3BuZycpIGNvbnRlbnRUeXBlID0gJ2ltYWdlL3BuZyc7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAnZ2lmJykgY29udGVudFR5cGUgPSAnaW1hZ2UvZ2lmJztcbiAgICAgICAgICBlbHNlIGlmIChleHQgPT09ICd3ZWJwJykgY29udGVudFR5cGUgPSAnaW1hZ2Uvd2VicCc7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAnc3ZnJykgY29udGVudFR5cGUgPSAnaW1hZ2Uvc3ZnK3htbCc7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLmFwaSgnL2FwaS9zeW5jL3VwbG9hZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBrZXk6IGBpbWFnZXMvJHtpbWFnZUZpbGUubmFtZX1gLFxuICAgICAgICAgICAgICBjb250ZW50OiBiYXNlNjQsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFycmF5QnVmZmVyVG9CYXNlNjQoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgIGxldCBiaW5hcnkgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gYnRvYShiaW5hcnkpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBQdWJsaXNoIE1ldGhvZHMgPT09PT09PT09PVxuXG4gIGFzeW5jIHB1Ymxpc2hDdXJyZW50Tm90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUgfHwgIWFjdGl2ZUZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ1BsZWFzZSBvcGVuIGEgbWFya2Rvd24gbm90ZSB0byBwdWJsaXNoJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCB0aGlzLnB1Ymxpc2hFbmdpbmUucHVibGlzaEZpbGUoYWN0aXZlRmlsZSk7XG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIG5ldyBOb3RpY2UoYFB1Ymxpc2hlZCAke2FjdGl2ZUZpbGUubmFtZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIHB1Ymxpc2ggJHthY3RpdmVGaWxlLm5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdW5wdWJsaXNoQ3VycmVudE5vdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgaWYgKCFhY3RpdmVGaWxlIHx8ICFhY3RpdmVGaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpKSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2Ugb3BlbiBhIG1hcmtkb3duIG5vdGUgdG8gdW5wdWJsaXNoJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCB0aGlzLnB1Ymxpc2hFbmdpbmUudW5wdWJsaXNoRmlsZShhY3RpdmVGaWxlKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgbmV3IE5vdGljZShgVW5wdWJsaXNoZWQgJHthY3RpdmVGaWxlLm5hbWV9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ldyBOb3RpY2UoYEZhaWxlZCB0byB1bnB1Ymxpc2ggJHthY3RpdmVGaWxlLm5hbWV9YCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaEFsbENoYW5nZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnNlcnZlclVybCB8fCAhdGhpcy5zZXR0aW5ncy5hcGlUb2tlbikge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIGNvbmZpZ3VyZSBTZXJ2ZXIgVVJMIGFuZCBBUEkgVG9rZW4gaW4gc2V0dGluZ3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbmV3IE5vdGljZSgnUHVibGlzaGluZyBhbGwgY2hhbmdlcy4uLicpO1xuICAgIGF3YWl0IHRoaXMucHVibGlzaEVuZ2luZS5wdWJsaXNoQWxsQ2hhbmdlcygpO1xuICAgIG5ldyBOb3RpY2UoJ1B1Ymxpc2ggY29tcGxldGUnKTtcbiAgfVxuXG4gIG9udW5sb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdDbG91ZGZsYXJlIFN5bmMgcGx1Z2luIHVubG9hZGluZy4uLicpO1xuICAgIHRoaXMuc3luY0VuZ2luZT8uZGVzdHJveSgpO1xuICAgIHRoaXMuc3RhdHVzQmFyPy5kZXN0cm95KCk7XG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gdW5sb2FkZWQnKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZyB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCBDbG91ZGZsYXJlU3luY1BsdWdpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IHR5cGUgeyBDb25mbGljdFN0cmF0ZWd5IH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRmbGFyZVN5bmNTZXR0aW5ncyB7XG4gIHNlcnZlclVybDogc3RyaW5nO1xuICBhcGlUb2tlbjogc3RyaW5nO1xuICBhdXRvU3luYzogYm9vbGVhbjtcbiAgYXV0b0Zyb250bWF0dGVyOiBib29sZWFuO1xuICBzeW5jQWxsRmlsZXM6IGJvb2xlYW47XG4gIGV4Y2x1ZGVGb2xkZXJzOiBzdHJpbmdbXTtcbiAgYXV0b1N5bmNJbnRlcnZhbDogbnVtYmVyO1xuICBjb25mbGljdFN0cmF0ZWd5OiBDb25mbGljdFN0cmF0ZWd5O1xuICBzeW5jT25TdGFydHVwOiBib29sZWFuO1xuICBkZWJvdW5jZURlbGF5OiBudW1iZXI7XG4gIHB1Ymxpc2hCZWhhdmlvcjogJ2Zyb250bWF0dGVyLW9ubHknIHwgJ2FsbC1ub3Rlcyc7XG4gIHB1Ymxpc2hTZXJ2ZXJVcmw6IHN0cmluZztcbiAgcHVibGlzaEFwaVRva2VuOiBzdHJpbmc7XG4gIGF0dGFjaG1lbnRzUGF0aFByZWZpeDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvdWRmbGFyZVN5bmNTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ0Nsb3VkZmxhcmUgU3luYycgfSk7XG5cbiAgICAvLyA9PT09PSBDb25uZWN0aW9uID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29ubmVjdGlvbicgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTZXJ2ZXIgVVJMJylcbiAgICAgIC5zZXREZXNjKCdZb3VyIENsb3VkZmxhcmUgV29ya2VycyBVUkwgKGUuZy4sIGh0dHBzOi8vbXlzaXRlLnlvdXItYWNjb3VudC53b3JrZXJzLmRldiknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2h0dHBzOi8vbXlzaXRlLnlvdXItYWNjb3VudC53b3JrZXJzLmRldicpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXJ2ZXJVcmwgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQVBJIFRva2VuJylcbiAgICAgIC5zZXREZXNjKCdZb3VyIEFQSSB0b2tlbiBmb3IgYXV0aGVudGljYXRpb24nKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+IHtcbiAgICAgICAgdGV4dC5pbnB1dEVsLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICByZXR1cm4gdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignRW50ZXIgeW91ciBBUEkgdG9rZW4nKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hcGlUb2tlbilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hcGlUb2tlbiA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIC8vID09PT09IFN5bmMgU2V0dGluZ3MgPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdTeW5jIFNldHRpbmdzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0F1dG8gU3luYycpXG4gICAgICAuc2V0RGVzYygnQXV0b21hdGljYWxseSBzeW5jIGZpbGVzIHdoZW4gdGhleSBhcmUgbW9kaWZpZWQgKHdpdGggZGVib3VuY2UpJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9TeW5jKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9TeW5jID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0F1dG8gU3luYyBJbnRlcnZhbCcpXG4gICAgICAuc2V0RGVzYygnSG93IG9mdGVuIHRvIHJ1biBhIGZ1bGwgc3luYyAoaW4gbWludXRlcykuIFNldCB0byAwIHRvIGRpc2FibGUgcGVyaW9kaWMgc3luYy4nKVxuICAgICAgLmFkZFNsaWRlcigoc2xpZGVyKSA9PlxuICAgICAgICBzbGlkZXJcbiAgICAgICAgICAuc2V0TGltaXRzKDAsIDYwLCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luY0ludGVydmFsKVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmNJbnRlcnZhbCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdEZWJvdW5jZSBEZWxheScpXG4gICAgICAuc2V0RGVzYygnU2Vjb25kcyB0byB3YWl0IGFmdGVyIGEgZmlsZSBjaGFuZ2UgYmVmb3JlIHN5bmNpbmcgKHByZXZlbnRzIGV4Y2Vzc2l2ZSB1cGxvYWRzIHdoaWxlIHR5cGluZyknKVxuICAgICAgLmFkZFNsaWRlcigoc2xpZGVyKSA9PlxuICAgICAgICBzbGlkZXJcbiAgICAgICAgICAuc2V0TGltaXRzKDUsIDEyMCwgNSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVib3VuY2VEZWxheSlcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRlYm91bmNlRGVsYXkgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnU3luYyBvbiBTdGFydHVwJylcbiAgICAgIC5zZXREZXNjKCdBdXRvbWF0aWNhbGx5IHJ1biBhIGZ1bGwgc3luYyB3aGVuIE9ic2lkaWFuIHN0YXJ0cycpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jT25TdGFydHVwKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNPblN0YXJ0dXAgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gPT09PT0gQ29uZmxpY3QgUmVzb2x1dGlvbiA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0NvbmZsaWN0IFJlc29sdXRpb24nIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQ29uZmxpY3QgU3RyYXRlZ3knKVxuICAgICAgLnNldERlc2MoJ0hvdyB0byBoYW5kbGUgY29uZmxpY3RzIHdoZW4gYm90aCBsb2NhbCBhbmQgcmVtb3RlIGhhdmUgY2hhbmdlZCcpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PlxuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oJ2FzaycsICdBc2sgbWUgZXZlcnkgdGltZScpXG4gICAgICAgICAgLmFkZE9wdGlvbignbG9jYWwtd2lucycsICdMb2NhbCBhbHdheXMgd2lucycpXG4gICAgICAgICAgLmFkZE9wdGlvbigncmVtb3RlLXdpbnMnLCAnUmVtb3RlIGFsd2F5cyB3aW5zJylcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmxpY3RTdHJhdGVneSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZsaWN0U3RyYXRlZ3kgPSB2YWx1ZSBhcyBDb25mbGljdFN0cmF0ZWd5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyA9PT09PSBDb250ZW50IFNldHRpbmdzID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29udGVudCBTZXR0aW5ncycgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBdXRvIEZyb250bWF0dGVyJylcbiAgICAgIC5zZXREZXNjKCdBdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGZyb250bWF0dGVyIGZvciBuZXcgbWFya2Rvd24gZmlsZXMnKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9Gcm9udG1hdHRlciA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTeW5jIEFsbCBGaWxlcycpXG4gICAgICAuc2V0RGVzYygnU3luYyBhbGwgZmlsZXMgaW4gdGhlIHZhdWx0IChub3QganVzdCBtYXJrZG93biknKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY0FsbEZpbGVzKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNBbGxGaWxlcyA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdFeGNsdWRlIEZvbGRlcnMnKVxuICAgICAgLnNldERlc2MoJ0NvbW1hLXNlcGFyYXRlZCBsaXN0IG9mIGZvbGRlcnMgdG8gZXhjbHVkZSBmcm9tIHN5bmMnKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ190ZW1wbGF0ZXMsIC50cmFzaCcpXG4gICAgICAgICAgLnNldFZhbHVlKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5leGNsdWRlRm9sZGVycyB8fCBbXSkuam9pbignLCAnKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5leGNsdWRlRm9sZGVycyA9IHZhbHVlXG4gICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgIC5tYXAoKHMpID0+IHMudHJpbSgpKVxuICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyA9PT09PSBQdWJsaXNoIFNldHRpbmdzID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnUHVibGlzaCBTZXR0aW5ncycgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdQdWJsaXNoIEJlaGF2aW9yJylcbiAgICAgIC5zZXREZXNjKCdXaGljaCBub3RlcyBzaG91bGQgYmUgcHVibGlzaGVkPycpXG4gICAgICAuYWRkRHJvcGRvd24oKGRyb3Bkb3duKSA9PlxuICAgICAgICBkcm9wZG93blxuICAgICAgICAgIC5hZGRPcHRpb24oJ2Zyb250bWF0dGVyLW9ubHknLCAnT25seSBub3RlcyB3aXRoIHB1Ymxpc2g6IHRydWUgaW4gZnJvbnRtYXR0ZXInKVxuICAgICAgICAgIC5hZGRPcHRpb24oJ2FsbC1ub3RlcycsICdBbGwgbm90ZXMgKGV4Y2VwdCB0aG9zZSB3aXRoIHB1Ymxpc2g6IGZhbHNlKScpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnB1Ymxpc2hCZWhhdmlvciB8fCAnZnJvbnRtYXR0ZXItb25seScpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wdWJsaXNoQmVoYXZpb3IgPSB2YWx1ZSBhcyAnZnJvbnRtYXR0ZXItb25seScgfCAnYWxsLW5vdGVzJztcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXR0YWNobWVudHMgUGF0aCBQcmVmaXgnKVxuICAgICAgLnNldERlc2MoJ1JlbW90ZSBwYXRoIHByZWZpeCBmb3IgdXBsb2FkZWQgYXR0YWNobWVudHMgKGUuZy4sIGF0dGFjaG1lbnRzIG9yIGltYWdlcyknKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoJ2F0dGFjaG1lbnRzJylcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXR0YWNobWVudHNQYXRoUHJlZml4IHx8ICdhdHRhY2htZW50cycpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXR0YWNobWVudHNQYXRoUHJlZml4ID0gdmFsdWUgfHwgJ2F0dGFjaG1lbnRzJztcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gPT09PT0gSW5zdHJ1Y3Rpb25zID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnSW5zdHJ1Y3Rpb25zJyB9KTtcblxuICAgIGNvbnN0IGluc3RydWN0aW9ucyA9IGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ21hcmtkb3duLXByZXZpZXctdmlldycgfSk7XG4gICAgaW5zdHJ1Y3Rpb25zLmlubmVySFRNTCA9IGBcbiAgICAgIDxoND5TZXJ2ZXIgU2V0dXA6PC9oND5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPkRlcGxveSB0aGUgQ2xvdWRmbGFyZSBXb3JrZXJzIHNpdGU8L2xpPlxuICAgICAgICA8bGk+U2V0IDxjb2RlPkFQSV9UT0tFTjwvY29kZT4gc2VjcmV0OiA8Y29kZT5ucHggd3JhbmdsZXIgc2VjcmV0IHB1dCBBUElfVE9LRU48L2NvZGU+PC9saT5cbiAgICAgICAgPGxpPkNvcHkgdGhlIFdvcmtlcnMgVVJMIGFuZCB0b2tlbiB0byBzZXR0aW5ncyBhYm92ZTwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPGg0PlN5bmMgQmVoYXZpb3I6PC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPjxzdHJvbmc+QXV0byBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGaWxlcyBzeW5jIGFmdGVyIGEgZGVib3VuY2UgZGVsYXkgd2hlbiBtb2RpZmllZDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlBlcmlvZGljIFN5bmM8L3N0cm9uZz4gXHUyMDE0IEZ1bGwgc3luYyBydW5zIGF0IHRoZSBjb25maWd1cmVkIGludGVydmFsPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U3RhcnR1cCBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGdWxsIHN5bmMgb24gT2JzaWRpYW4gbGF1bmNoPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+Q29uZmxpY3QgRGV0ZWN0aW9uPC9zdHJvbmc+IFx1MjAxNCBUaHJlZS13YXkgaGFzaCBjb21wYXJpc29uIGRldGVjdHMgY29uZmxpY3RzPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aDQ+RnJvbnRtYXR0ZXIgZmllbGRzOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48Y29kZT50aXRsZTwvY29kZT4gLSBQb3N0IHRpdGxlPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnNsdWc8L2NvZGU+IC0gVVJMLWZyaWVuZGx5IGlkZW50aWZpZXI8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+ZGF0ZTwvY29kZT4gLSBQdWJsaWNhdGlvbiBkYXRlIChJU08gZm9ybWF0KTwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5zdW1tYXJ5PC9jb2RlPiAtIFBvc3Qgc3VtbWFyeS9leGNlcnB0PC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnRhZ3M8L2NvZGU+IC0gQXJyYXkgb3IgY29tbWEtc2VwYXJhdGVkIHRhZ3M8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+cHVibGlzaDwvY29kZT4gLSBXaGV0aGVyIHRvIG1ha2UgcHVibGljIChkZWZhdWx0OiBmYWxzZSk8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+Y292ZXJJbWFnZTwvY29kZT4gLSBDb3ZlciBpbWFnZSBmaWxlbmFtZTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg0PkNvbW1hbmRzOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48c3Ryb25nPkZ1bGwgU3luYzwvc3Ryb25nPiBcdTIwMTQgQmlkaXJlY3Rpb25hbCBzeW5jIHdpdGggY29uZmxpY3QgZGV0ZWN0aW9uPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U3luYyB0byBDbG91ZGZsYXJlPC9zdHJvbmc+IFx1MjAxNCBVcGxvYWQgYWxsIG5vdGVzIChvbmUtd2F5KTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPkRvd25sb2FkIGZyb20gQ2xvdWRmbGFyZTwvc3Ryb25nPiBcdTIwMTQgRG93bmxvYWQgYWxsIG5vdGVzIChvbmUtd2F5KTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN5bmMgY3VycmVudCBmaWxlPC9zdHJvbmc+IFx1MjAxNCBVcGxvYWQgY3VycmVudCBmaWxlPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+UmVzb2x2ZSBjb25mbGljdHM8L3N0cm9uZz4gXHUyMDE0IE9wZW4gY29uZmxpY3QgcmVzb2x1dGlvbiBkaWFsb2c8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5TaG93IHN5bmMgc3RhdHVzPC9zdHJvbmc+IFx1MjAxNCBWaWV3IHN5bmMgc3RhdGlzdGljczwvbGk+XG4gICAgICA8L3VsPlxuICAgIGA7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBURmlsZSwgVmF1bHQsIG5vcm1hbGl6ZVBhdGggfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgdHlwZSBDbG91ZGZsYXJlU3luY1BsdWdpbiBmcm9tICcuL21haW4nO1xuXG4vLyA9PT09PT09PT09IFR5cGVzID09PT09PT09PT1cblxuZXhwb3J0IHR5cGUgU3luY0ZpbGVTdGF0dXMgPVxuICB8ICdzeW5jZWQnICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NTQ4Q1x1OEZEQ1x1N0EwQlx1NEUwMFx1ODFGNFxuICB8ICdsb2NhbC1vbmx5JyAgIC8vIFx1NEVDNVx1NjcyQ1x1NTczMFx1NUI1OFx1NTcyOFxuICB8ICdyZW1vdGUtb25seScgIC8vIFx1NEVDNVx1OEZEQ1x1N0EwQlx1NUI1OFx1NTcyOFxuICB8ICdsb2NhbC1tb2RpZmllZCcgIC8vIFx1NjcyQ1x1NTczMFx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdyZW1vdGUtbW9kaWZpZWQnIC8vIFx1OEZEQ1x1N0EwQlx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdjb25mbGljdCcgICAgIC8vIFx1NTNDQ1x1NjVCOVx1OTBGRFx1NjcwOVx1NEZFRVx1NjUzOVxuICB8ICdlcnJvcic7ICAgICAgIC8vIFx1NTQwQ1x1NkI2NVx1NTFGQVx1OTUxOVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNGaWxlU3RhdGUge1xuICBsb2NhbFBhdGg6IHN0cmluZztcbiAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gIGxvY2FsSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgcmVtb3RlSGFzaDogc3RyaW5nIHwgbnVsbDtcbiAgbGFzdFN5bmNlZEhhc2g6IHN0cmluZyB8IG51bGw7XG4gIHN0YXR1czogU3luY0ZpbGVTdGF0dXM7XG4gIGVycm9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNTdGF0cyB7XG4gIGxhc3RTeW5jVGltZTogbnVtYmVyIHwgbnVsbDtcbiAgdG90YWxGaWxlczogbnVtYmVyO1xuICBzeW5jZWRGaWxlczogbnVtYmVyO1xuICBwZW5kaW5nVXBsb2FkOiBudW1iZXI7XG4gIHBlbmRpbmdEb3dubG9hZDogbnVtYmVyO1xuICBjb25mbGljdHM6IG51bWJlcjtcbiAgZXJyb3JzOiBudW1iZXI7XG4gIGlzU3luY2luZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdGVGaWxlTWV0YSB7XG4gIGtleTogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHVwbG9hZGVkPzogc3RyaW5nO1xuICBodHRwRXRhZz86IHN0cmluZztcbiAgY29udGVudEhhc2g/OiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3luY1N0YXRlU3RvcmUge1xuICBbbG9jYWxQYXRoOiBzdHJpbmddOiB7XG4gICAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gICAgbGFzdFN5bmNlZEhhc2g6IHN0cmluZztcbiAgICBsYXN0U3luY2VkVGltZTogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDb25mbGljdFJlc29sdXRpb24gPSAnbG9jYWwnIHwgJ3JlbW90ZScgfCAnYm90aCc7XG5leHBvcnQgdHlwZSBDb25mbGljdFN0cmF0ZWd5ID0gJ2FzaycgfCAnbG9jYWwtd2lucycgfCAncmVtb3RlLXdpbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZsaWN0SW5mbyB7XG4gIGxvY2FsUGF0aDogc3RyaW5nO1xuICByZW1vdGVLZXk6IHN0cmluZztcbiAgbG9jYWxDb250ZW50OiBzdHJpbmc7XG4gIHJlbW90ZUNvbnRlbnQ6IHN0cmluZztcbiAgbG9jYWxIYXNoOiBzdHJpbmc7XG4gIHJlbW90ZUhhc2g6IHN0cmluZztcbn1cblxuLy8gPT09PT09PT09PSBTeW5jRW5naW5lID09PT09PT09PT1cblxuZXhwb3J0IGNsYXNzIFN5bmNFbmdpbmUge1xuICBwcml2YXRlIHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW47XG4gIHByaXZhdGUgc3luY1N0YXRlczogU3luY1N0YXRlU3RvcmUgPSB7fTtcbiAgcHJpdmF0ZSBhdXRvU3luY1RpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWJvdW5jZVRpbWVyczogTWFwPHN0cmluZywgUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD4+ID0gbmV3IE1hcCgpO1xuICBwcml2YXRlIF9zdGF0czogU3luY1N0YXRzID0ge1xuICAgIGxhc3RTeW5jVGltZTogbnVsbCxcbiAgICB0b3RhbEZpbGVzOiAwLFxuICAgIHN5bmNlZEZpbGVzOiAwLFxuICAgIHBlbmRpbmdVcGxvYWQ6IDAsXG4gICAgcGVuZGluZ0Rvd25sb2FkOiAwLFxuICAgIGNvbmZsaWN0czogMCxcbiAgICBlcnJvcnM6IDAsXG4gICAgaXNTeW5jaW5nOiBmYWxzZSxcbiAgfTtcbiAgcHJpdmF0ZSBfY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSA9IFtdO1xuICBwcml2YXRlIF9pc1N5bmNpbmcgPSBmYWxzZTtcblxuICAvLyBDYWxsYmFja3NcbiAgb25TdGF0c0NoYW5nZWQ6ICgoc3RhdHM6IFN5bmNTdGF0cykgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25Db25mbGljdHNGb3VuZDogKChjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBvblN5bmNFcnJvcjogKChlcnJvcjogc3RyaW5nKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBvblN5bmNDb21wbGV0ZTogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0IHN0YXRzKCk6IFN5bmNTdGF0cyB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5fc3RhdHMgfTtcbiAgfVxuXG4gIGdldCBjb25mbGljdHMoKTogQ29uZmxpY3RJbmZvW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5fY29uZmxpY3RzXTtcbiAgfVxuXG4gIGdldCBpc1N5bmNpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzU3luY2luZztcbiAgfVxuXG4gIC8vID09PT09PT09PT0gU3RhdGUgUGVyc2lzdGVuY2UgPT09PT09PT09PVxuXG4gIGFzeW5jIGxvYWRTeW5jU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCk7XG4gICAgdGhpcy5zeW5jU3RhdGVzID0gZGF0YT8uX3N5bmNTdGF0ZXMgfHwge307XG4gIH1cblxuICBhc3luYyBzYXZlU3luY1N0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSAoYXdhaXQgdGhpcy5wbHVnaW4ubG9hZERhdGEoKSkgfHwge307XG4gICAgZGF0YS5fc3luY1N0YXRlcyA9IHRoaXMuc3luY1N0YXRlcztcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlRGF0YShkYXRhKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gSGFzaCBDb21wdXRhdGlvbiA9PT09PT09PT09XG5cbiAgYXN5bmMgY29tcHV0ZUxvY2FsSGFzaChjb250ZW50OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgLy8gXHU0RjdGXHU3NTI4XHU3QjgwXHU1MzU1XHU3Njg0XHU1NEM4XHU1RTBDXHU3Qjk3XHU2Q0Q1XHVGRjA4XHU5MDAyXHU3NTI4XHU0RThFIE9ic2lkaWFuIFx1NzNBRlx1NTg4M1x1RkYwOVxuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGNvbnRlbnQpXG4gICAgICAgIDogbmV3IFVpbnQ4QXJyYXkoY29udGVudCk7XG5cbiAgICAvLyBcdTRGN0ZcdTc1MjggV2ViIENyeXB0byBBUElcdUZGMDhcdTYyNDBcdTY3MDkgT2JzaWRpYW4gXHU1RTczXHU1M0YwXHU5MEZEXHU2NTJGXHU2MzAxXHVGRjA5XG4gICAgY29uc3QgaGFzaEJ1ZmZlciA9IGF3YWl0IGNyeXB0by5zdWJ0bGUuZGlnZXN0KCdTSEEtMjU2JywgZGF0YSk7XG4gICAgY29uc3QgaGFzaEFycmF5ID0gQXJyYXkuZnJvbShuZXcgVWludDhBcnJheShoYXNoQnVmZmVyKSk7XG4gICAgcmV0dXJuIGhhc2hBcnJheS5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBBdXRvIFN5bmMgU2NoZWR1bGluZyA9PT09PT09PT09XG5cbiAgc3RhcnRBdXRvU3luYygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BBdXRvU3luYygpO1xuXG4gICAgY29uc3QgaW50ZXJ2YWxNcyA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luY0ludGVydmFsIHx8IDUpICogNjAgKiAxMDAwO1xuICAgIGNvbnNvbGUubG9nKGBbU3luY0VuZ2luZV0gQXV0byBzeW5jIHN0YXJ0ZWQsIGludGVydmFsOiAke2ludGVydmFsTXMgLyAxMDAwfXNgKTtcblxuICAgIHRoaXMuYXV0b1N5bmNUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5faXNTeW5jaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdbU3luY0VuZ2luZV0gQXV0byBzeW5jIHRyaWdnZXJlZCcpO1xuICAgICAgICB0aGlzLmZ1bGxTeW5jKCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jRW5naW5lXSBBdXRvIHN5bmMgZmFpbGVkOicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIGludGVydmFsTXMpO1xuICB9XG5cbiAgc3RvcEF1dG9TeW5jKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9TeW5jVGltZXIpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvU3luY1RpbWVyKTtcbiAgICAgIHRoaXMuYXV0b1N5bmNUaW1lciA9IG51bGw7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIEF1dG8gc3luYyBzdG9wcGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBEZWJvdW5jZWQgRmlsZSBTeW5jID09PT09PT09PT1cblxuICBzY2hlZHVsZUZpbGVTeW5jKGZpbGU6IFRGaWxlKTogdm9pZCB7XG4gICAgY29uc3QgZXhpc3RpbmdUaW1lciA9IHRoaXMuZGVib3VuY2VUaW1lcnMuZ2V0KGZpbGUucGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChleGlzdGluZ1RpbWVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheU1zID0gKHRoaXMucGx1Z2luLnNldHRpbmdzLmRlYm91bmNlRGVsYXkgfHwgMzApICogMTAwMDtcblxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLmRlYm91bmNlVGltZXJzLmRlbGV0ZShmaWxlLnBhdGgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zeW5jU2luZ2xlRmlsZShmaWxlKTtcbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBEZWJvdW5jZWQgc3luYyBmYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSwgZGVsYXlNcyk7XG5cbiAgICB0aGlzLmRlYm91bmNlVGltZXJzLnNldChmaWxlLnBhdGgsIHRpbWVyKTtcbiAgICB0aGlzLnVwZGF0ZVBlbmRpbmdTdGF0cygpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBDb3JlIFN5bmMgTG9naWMgPT09PT09PT09PVxuXG4gIGFzeW5jIGZ1bGxTeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9pc1N5bmNpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbU3luY0VuZ2luZV0gU3luYyBhbHJlYWR5IGluIHByb2dyZXNzLCBza2lwcGluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2lzU3luY2luZyA9IHRydWU7XG4gICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9jb25mbGljdHMgPSBbXTtcbiAgICB0aGlzLmVtaXRTdGF0c0NoYW5nZWQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIFN0YXJ0aW5nIGZ1bGwgc3luYy4uLicpO1xuXG4gICAgICAvLyAxLiBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzBcdTYyNDBcdTY3MDlcdTY1ODdcdTRFRjZcdTUzQ0FcdTUxNzYgaGFzaFxuICAgICAgY29uc3QgbG9jYWxGaWxlcyA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihcbiAgICAgICAgKGYpID0+IHRoaXMucGx1Z2luLnNob3VsZFN5bmNGaWxlKGYucGF0aClcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGxvY2FsRmlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IGZpbGU6IFRGaWxlOyBoYXNoOiBzdHJpbmcgfT4oKTtcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBsb2NhbEZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHJlbW90ZUtleSA9IHRoaXMucGx1Z2luLmdldFJlbW90ZUtleShmaWxlKTtcbiAgICAgICAgY29uc3QgaXNNYXJrZG93biA9IGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJyk7XG4gICAgICAgIC8vIFx1NUJGOSB0ZXh0IFx1NjU4N1x1NEVGNiBoYXNoIFx1NUI1N1x1N0IyNlx1NEUzMlx1RkYwQ1x1NUJGOVx1NEU4Q1x1OEZEQlx1NTIzNlx1NjU4N1x1NEVGNiBoYXNoIFx1NTM5Rlx1NTlDQiBBcnJheUJ1ZmZlclx1RkYwOFx1NEUwRVx1NjcwRFx1NTJBMVx1N0FFRlx1NEUwMFx1ODFGNFx1RkYwOVxuICAgICAgICBjb25zdCBjb250ZW50OiBzdHJpbmcgfCBBcnJheUJ1ZmZlciA9IGlzTWFya2Rvd25cbiAgICAgICAgICA/IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpXG4gICAgICAgICAgOiBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgbG9jYWxGaWxlTWFwLnNldChyZW1vdGVLZXksIHsgZmlsZSwgaGFzaCB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gXHU2Mjc5XHU5MUNGXHU4M0I3XHU1M0Q2XHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHU1MTQzXHU2NTcwXHU2MzZFXG4gICAgICBjb25zdCByZW1vdGVNZXRhcyA9IGF3YWl0IHRoaXMuZmV0Y2hSZW1vdGVNZXRhcygnJyk7XG4gICAgICBjb25zdCByZW1vdGVNZXRhTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJlbW90ZUZpbGVNZXRhPigpO1xuICAgICAgZm9yIChjb25zdCBtZXRhIG9mIHJlbW90ZU1ldGFzKSB7XG4gICAgICAgIHJlbW90ZU1ldGFNYXAuc2V0KG1ldGEua2V5LCBtZXRhKTtcbiAgICAgIH1cblxuICAgICAgLy8gMy4gXHU0RTA5XHU2NUI5XHU2QkQ0XHU1QkY5XG4gICAgICBjb25zdCBhbGxLZXlzID0gbmV3IFNldChbLi4ubG9jYWxGaWxlTWFwLmtleXMoKSwgLi4ucmVtb3RlTWV0YU1hcC5rZXlzKCldKTtcbiAgICAgIGNvbnN0IHRvVXBsb2FkOiB7IGZpbGU6IFRGaWxlOyBrZXk6IHN0cmluZzsgaGFzaDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgY29uc3QgdG9Eb3dubG9hZDogeyBrZXk6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgIGNvbnN0IGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgICAgIGxldCBzeW5jZWRDb3VudCA9IDA7XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFsbEtleXMpIHtcbiAgICAgICAgY29uc3QgbG9jYWwgPSBsb2NhbEZpbGVNYXAuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHJlbW90ZSA9IHJlbW90ZU1ldGFNYXAuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGtleTtcbiAgICAgICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdO1xuXG4gICAgICAgIGNvbnN0IGxvY2FsSGFzaCA9IGxvY2FsPy5oYXNoIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IHJlbW90ZUhhc2ggPSByZW1vdGU/LmNvbnRlbnRIYXNoIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGxhc3RTeW5jZWRIYXNoID0gc2F2ZWRTdGF0ZT8ubGFzdFN5bmNlZEhhc2ggfHwgbnVsbDtcblxuICAgICAgICBpZiAobG9jYWxIYXNoICYmICFyZW1vdGVIYXNoKSB7XG4gICAgICAgICAgLy8gXHU2NzJDXHU1NzMwXHU2NzA5XHUzMDAxXHU4RkRDXHU3QTBCXHU2Q0ExXHU2NzA5XG4gICAgICAgICAgaWYgKGxhc3RTeW5jZWRIYXNoKSB7XG4gICAgICAgICAgICAvLyBcdTRFNEJcdTUyNERcdTU0MENcdTZCNjVcdThGQzdcdTRGNDZcdThGRENcdTdBMEJcdTg4QUJcdTUyMjBcdTRFODYgXHUyMTkyIFx1NEUwQlx1OEY3RFx1NTIyMFx1OTY2NFx1RkYwOFx1NjIxNlx1OERGM1x1OEZDN1x1RkYwOVxuICAgICAgICAgICAgLy8gXHU4RkQ5XHU5MUNDXHU5MDA5XHU2MkU5XHU5MUNEXHU2NUIwXHU0RTBBXHU0RjIwXG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBcdTY1QjBcdTY1ODdcdTRFRjZcdUZGMENcdTRFMEFcdTRGMjBcbiAgICAgICAgICAgIHRvVXBsb2FkLnB1c2goeyBmaWxlOiBsb2NhbCEuZmlsZSwga2V5LCBoYXNoOiBsb2NhbEhhc2ggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFsb2NhbEhhc2ggJiYgcmVtb3RlSGFzaCkge1xuICAgICAgICAgIC8vIFx1OEZEQ1x1N0EwQlx1NjcwOVx1MzAwMVx1NjcyQ1x1NTczMFx1NkNBMVx1NjcwOVxuICAgICAgICAgIGlmIChsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RTRCXHU1MjREXHU1NDBDXHU2QjY1XHU4RkM3XHU0RjQ2XHU2NzJDXHU1NzMwXHU4OEFCXHU1MjIwXHU0RTg2IFx1MjE5MiBcdThERjNcdThGQzdcdUZGMDhcdTYyMTZcdTkxQ0RcdTY1QjBcdTRFMEJcdThGN0RcdUZGMDlcbiAgICAgICAgICAgIC8vIFx1OEZEOVx1OTFDQ1x1OTAwOVx1NjJFOVx1OTFDRFx1NjVCMFx1NEUwQlx1OEY3RFxuICAgICAgICAgICAgdG9Eb3dubG9hZC5wdXNoKHsga2V5IH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBcdTY1QjBcdTc2ODRcdThGRENcdTdBMEJcdTY1ODdcdTRFRjZcdUZGMENcdTRFMEJcdThGN0RcbiAgICAgICAgICAgIHRvRG93bmxvYWQucHVzaCh7IGtleSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoICYmIHJlbW90ZUhhc2gpIHtcbiAgICAgICAgICBpZiAobG9jYWxIYXNoID09PSByZW1vdGVIYXNoKSB7XG4gICAgICAgICAgICAvLyBcdTVERjJcdTU0MENcdTZCNjVcbiAgICAgICAgICAgIHN5bmNlZENvdW50Kys7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBrZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBsb2NhbEhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU5OTk2XHU2QjIxXHU1NDBDXHU2QjY1XHVGRjBDXHU5NzAwXHU4OTgxXHU1MUIyXHU3QTgxXHU2OEMwXHU2RDRCXHVGRjA4XHU5MEZEXHU2NjJGXHU2NUIwXHU3Njg0XHVGRjA5XG4gICAgICAgICAgICAvLyBcdTRGMThcdTUxNDhcdTRGN0ZcdTc1MjhcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcbiAgICAgICAgICAgIGNvbmZsaWN0cy5wdXNoKGF3YWl0IHRoaXMuYnVpbGRDb25mbGljdEluZm8obG9jYWwhLmZpbGUsIGtleSwgbG9jYWxIYXNoLCByZW1vdGVIYXNoKSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsb2NhbEhhc2ggIT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggPT09IGxhc3RTeW5jZWRIYXNoKSB7XG4gICAgICAgICAgICAvLyBcdTRFQzVcdTY3MkNcdTU3MzBcdTRGRUVcdTY1MzlcbiAgICAgICAgICAgIHRvVXBsb2FkLnB1c2goeyBmaWxlOiBsb2NhbCEuZmlsZSwga2V5LCBoYXNoOiBsb2NhbEhhc2ggfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChsb2NhbEhhc2ggPT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggIT09IGxhc3RTeW5jZWRIYXNoKSB7XG4gICAgICAgICAgICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTRGRUVcdTY1MzlcbiAgICAgICAgICAgIHRvRG93bmxvYWQucHVzaCh7IGtleSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU1M0NDXHU2NUI5XHU5MEZEXHU0RkVFXHU2NTM5XHU0RTg2IFx1MjE5MiBcdTUxQjJcdTdBODFcdUZGMDFcbiAgICAgICAgICAgIGNvbmZsaWN0cy5wdXNoKGF3YWl0IHRoaXMuYnVpbGRDb25mbGljdEluZm8obG9jYWwhLmZpbGUsIGtleSwgbG9jYWxIYXNoLCByZW1vdGVIYXNoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICBgW1N5bmNFbmdpbmVdIEFuYWx5c2lzOiAke3RvVXBsb2FkLmxlbmd0aH0gdXBsb2FkLCAke3RvRG93bmxvYWQubGVuZ3RofSBkb3dubG9hZCwgJHtjb25mbGljdHMubGVuZ3RofSBjb25mbGljdHMsICR7c3luY2VkQ291bnR9IHN5bmNlZGBcbiAgICAgICk7XG5cbiAgICAgIC8vIDQuIFx1NjI2N1x1ODg0Q1x1NEUwQVx1NEYyMFxuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRvVXBsb2FkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc3luY0ZpbGVUb1JlbW90ZShpdGVtLmZpbGUpO1xuICAgICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGl0ZW0ua2V5O1xuICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgcmVtb3RlS2V5OiBpdGVtLmtleSxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBpdGVtLmhhc2gsXG4gICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHN5bmNlZENvdW50Kys7XG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW1N5bmNFbmdpbmVdIFVwbG9hZCBmYWlsZWQgZm9yICR7aXRlbS5rZXl9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyA1LiBcdTYyNjdcdTg4NENcdTRFMEJcdThGN0RcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b0Rvd25sb2FkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZG93bmxvYWRBbmRTYXZlKGl0ZW0ua2V5KTtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxQYXRoID0gaXRlbS5rZXk7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBpdGVtLmtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGRhdGEuY29udGVudEhhc2ggfHwgJycsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN5bmNlZENvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBEb3dubG9hZCBmYWlsZWQgZm9yICR7aXRlbS5rZXl9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyA2LiBcdTU5MDRcdTc0MDZcdTUxQjJcdTdBODFcbiAgICAgIHRoaXMuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmxpY3RTdHJhdGVneSB8fCAnYXNrJztcblxuICAgICAgaWYgKGNvbmZsaWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FzaycpIHtcbiAgICAgICAgICAvLyBcdTkwMUFcdTc3RTUgVUkgXHU1QzQyXHU1RjM5XHU1MUZBXHU1MUIyXHU3QTgxXHU4OUUzXHU1MUIzXHU1QkY5XHU4QkREXHU2ODQ2XG4gICAgICAgICAgdGhpcy5vbkNvbmZsaWN0c0ZvdW5kPy4oY29uZmxpY3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTg5RTNcdTUxQjNcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbmZsaWN0IG9mIGNvbmZsaWN0cykge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXNvbHZlQ29uZmxpY3QoXG4gICAgICAgICAgICAgIGNvbmZsaWN0LFxuICAgICAgICAgICAgICBzdHJhdGVneSA9PT0gJ2xvY2FsLXdpbnMnID8gJ2xvY2FsJyA6ICdyZW1vdGUnXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9jb25mbGljdHMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyA3LiBcdTY2RjRcdTY1QjBcdTdFREZcdThCQTFcbiAgICAgIHRoaXMuX3N0YXRzID0ge1xuICAgICAgICBsYXN0U3luY1RpbWU6IERhdGUubm93KCksXG4gICAgICAgIHRvdGFsRmlsZXM6IGFsbEtleXMuc2l6ZSxcbiAgICAgICAgc3luY2VkRmlsZXM6IHN5bmNlZENvdW50LFxuICAgICAgICBwZW5kaW5nVXBsb2FkOiAwLFxuICAgICAgICBwZW5kaW5nRG93bmxvYWQ6IDAsXG4gICAgICAgIGNvbmZsaWN0czogdGhpcy5fY29uZmxpY3RzLmxlbmd0aCxcbiAgICAgICAgZXJyb3JzOiB0aGlzLl9zdGF0cy5lcnJvcnMsXG4gICAgICAgIGlzU3luY2luZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMub25TeW5jQ29tcGxldGU/LigpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gRnVsbCBzeW5jIGZhaWxlZDonLCBlcnIpO1xuICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICB0aGlzLl9zdGF0cy5pc1N5bmNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMub25TeW5jRXJyb3I/LihlcnIubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2lzU3luY2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVtaXRTdGF0c0NoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jU2luZ2xlRmlsZShmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9pc1N5bmNpbmcpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZW1vdGVLZXkgPSB0aGlzLnBsdWdpbi5nZXRSZW1vdGVLZXkoZmlsZSk7XG4gICAgICBjb25zdCBsb2NhbFBhdGggPSBmaWxlLnBhdGg7XG5cbiAgICAgIC8vIFx1ODNCN1x1NTNENlx1NjcyQ1x1NTczMCBoYXNoXHVGRjA4dGV4dCBoYXNoIFx1NUI1N1x1N0IyNlx1NEUzMlx1RkYwQ2JpbmFyeSBoYXNoIFx1NTM5Rlx1NTlDQiBBcnJheUJ1ZmZlclx1RkYwQ1x1NEUwRVx1NjcwRFx1NTJBMVx1N0FFRlx1NEUwMFx1ODFGNFx1RkYwOVxuICAgICAgY29uc3QgaXNNYXJrZG93biA9IGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJyk7XG4gICAgICBjb25zdCBjb250ZW50OiBzdHJpbmcgfCBBcnJheUJ1ZmZlciA9IGlzTWFya2Rvd25cbiAgICAgICAgPyBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKVxuICAgICAgICA6IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkQmluYXJ5KGZpbGUpO1xuICAgICAgY29uc3QgbG9jYWxIYXNoID0gYXdhaXQgdGhpcy5jb21wdXRlTG9jYWxIYXNoKGNvbnRlbnQpO1xuXG4gICAgICAvLyBcdTgzQjdcdTUzRDZcdThGRENcdTdBMEIgaGFzaFxuICAgICAgbGV0IHJlbW90ZUhhc2g6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGRhdGE6IFJlbW90ZUZpbGVNZXRhIH0+KFxuICAgICAgICAgIGAvYXBpL3N5bmMvbWV0YS8ke3JlbW90ZUtleX1gXG4gICAgICAgICk7XG4gICAgICAgIHJlbW90ZUhhc2ggPSBtZXRhLmRhdGEuY29udGVudEhhc2ggfHwgbnVsbDtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBcdThGRENcdTdBMEJcdTY1ODdcdTRFRjZcdTRFMERcdTVCNThcdTU3MjhcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdO1xuICAgICAgY29uc3QgbGFzdFN5bmNlZEhhc2ggPSBzYXZlZFN0YXRlPy5sYXN0U3luY2VkSGFzaCB8fCBudWxsO1xuXG4gICAgICBpZiAobG9jYWxIYXNoID09PSByZW1vdGVIYXNoKSB7XG4gICAgICAgIC8vIFx1NURGMlx1NTQwQ1x1NkI2NVxuICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICByZW1vdGVLZXksXG4gICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGxvY2FsSGFzaCxcbiAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoIXJlbW90ZUhhc2ggfHwgKGxvY2FsSGFzaCAhPT0gbGFzdFN5bmNlZEhhc2ggJiYgcmVtb3RlSGFzaCA9PT0gbGFzdFN5bmNlZEhhc2gpKSB7XG4gICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NEZFRVx1NjUzOVx1NjIxNlx1OEZEQ1x1N0EwQlx1NEUwRFx1NUI1OFx1NTcyOCBcdTIxOTIgXHU0RTBBXHU0RjIwXG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoZmlsZSk7XG4gICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgIHJlbW90ZUtleSxcbiAgICAgICAgICBsYXN0U3luY2VkSGFzaDogbG9jYWxIYXNoLFxuICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChsb2NhbEhhc2ggPT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggIT09IGxhc3RTeW5jZWRIYXNoKSB7XG4gICAgICAgIC8vIFx1NEVDNVx1OEZEQ1x1N0EwQlx1NEZFRVx1NjUzOSBcdTIxOTIgXHU0RTBCXHU4RjdEXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShyZW1vdGVLZXkpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgcmVtb3RlS2V5LFxuICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGRhdGEuY29udGVudEhhc2ggfHwgcmVtb3RlSGFzaCxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFx1NTFCMlx1N0E4MVxuICAgICAgICBjb25zdCBjb25mbGljdCA9IGF3YWl0IHRoaXMuYnVpbGRDb25mbGljdEluZm8oZmlsZSwgcmVtb3RlS2V5LCBsb2NhbEhhc2gsIHJlbW90ZUhhc2gpO1xuICAgICAgICB0aGlzLl9jb25mbGljdHMucHVzaChjb25mbGljdCk7XG4gICAgICAgIHRoaXMuX3N0YXRzLmNvbmZsaWN0cyA9IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGg7XG4gICAgICAgIHRoaXMub25Db25mbGljdHNGb3VuZD8uKFtjb25mbGljdF0pO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlUGVuZGluZ1N0YXRzKCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBTaW5nbGUgZmlsZSBzeW5jIGZhaWxlZCBmb3IgJHtmaWxlLnBhdGh9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0YXRzLmVycm9ycysrO1xuICAgICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBDb25mbGljdCBSZXNvbHV0aW9uID09PT09PT09PT1cblxuICBhc3luYyByZXNvbHZlQ29uZmxpY3QoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9jYWxQYXRoID0gY29uZmxpY3QubG9jYWxQYXRoO1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGxvY2FsUGF0aCk7XG5cbiAgICB0cnkge1xuICAgICAgc3dpdGNoIChyZXNvbHV0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2xvY2FsJzoge1xuICAgICAgICAgIC8vIFx1NzUyOFx1NjcyQ1x1NTczMFx1NzI0OFx1NjcyQ1x1ODk4Nlx1NzZENlx1OEZEQ1x1N0EwQlxuICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgdGhpcy5jb21wdXRlTG9jYWxIYXNoKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleTogY29uZmxpY3QucmVtb3RlS2V5LFxuICAgICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogaGFzaCxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdyZW1vdGUnOiB7XG4gICAgICAgICAgLy8gXHU3NTI4XHU4RkRDXHU3QTBCXHU3MjQ4XHU2NzJDXHU4OTg2XHU3NkQ2XHU2NzJDXHU1NzMwXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuZG93bmxvYWRBbmRTYXZlKGNvbmZsaWN0LnJlbW90ZUtleSk7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGRhdGEuY29udGVudEhhc2ggfHwgY29uZmxpY3QucmVtb3RlSGFzaCxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdib3RoJzoge1xuICAgICAgICAgIC8vIFx1NEZERFx1NzU1OVx1NEUyNFx1NEUyQVx1NzI0OFx1NjcyQ1x1RkYwQ1x1NjcyQ1x1NTczMFx1NTIxQlx1NUVGQSAuY29uZmxpY3QgXHU1MjZGXHU2NzJDXG4gICAgICAgICAgY29uc3QgY29uZmxpY3RQYXRoID0gbG9jYWxQYXRoLnJlcGxhY2UoL1xcLm1kJC8sIGAuY29uZmxpY3QtJHtEYXRlLm5vdygpfS5tZGApO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jcmVhdGUoY29uZmxpY3RQYXRoLCBjb25mbGljdC5yZW1vdGVDb250ZW50KTtcblxuICAgICAgICAgIC8vIFx1NEUwQVx1NEYyMFx1NjcyQ1x1NTczMFx1NzI0OFx1NjcyQ1x1NTIzMFx1OEZEQ1x1N0EwQlxuICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgdGhpcy5jb21wdXRlTG9jYWxIYXNoKGNvbnRlbnQpO1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleTogY29uZmxpY3QucmVtb3RlS2V5LFxuICAgICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogaGFzaCxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBcdTRFQ0VcdTUxQjJcdTdBODFcdTUyMTdcdTg4NjhcdTRFMkRcdTc5RkJcdTk2NjRcbiAgICAgIHRoaXMuX2NvbmZsaWN0cyA9IHRoaXMuX2NvbmZsaWN0cy5maWx0ZXIoKGMpID0+IGMubG9jYWxQYXRoICE9PSBsb2NhbFBhdGgpO1xuICAgICAgdGhpcy5fc3RhdHMuY29uZmxpY3RzID0gdGhpcy5fY29uZmxpY3RzLmxlbmd0aDtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVN5bmNTdGF0ZSgpO1xuICAgICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBDb25mbGljdCByZXNvbHV0aW9uIGZhaWxlZCBmb3IgJHtsb2NhbFBhdGh9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgIHRoaXMuX3N0YXRzLmVycm9ycysrO1xuICAgICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVzb2x2ZUFsbENvbmZsaWN0cyhyZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb25mbGljdHNUb1Jlc29sdmUgPSBbLi4udGhpcy5fY29uZmxpY3RzXTtcbiAgICBmb3IgKGNvbnN0IGNvbmZsaWN0IG9mIGNvbmZsaWN0c1RvUmVzb2x2ZSkge1xuICAgICAgYXdhaXQgdGhpcy5yZXNvbHZlQ29uZmxpY3QoY29uZmxpY3QsIHJlc29sdXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gSGVscGVycyA9PT09PT09PT09XG5cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaFJlbW90ZU1ldGFzKHByZWZpeDogc3RyaW5nKTogUHJvbWlzZTxSZW1vdGVGaWxlTWV0YVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE6IHsgZmlsZXM6IFJlbW90ZUZpbGVNZXRhW107IGNvdW50OiBudW1iZXIgfTtcbiAgICAgIH0+KCcvYXBpL3N5bmMvYmF0Y2gtbWV0YScsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJlZml4IH0pLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLmRhdGEuZmlsZXM7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jRW5naW5lXSBGYWlsZWQgdG8gZmV0Y2ggcmVtb3RlIG1ldGFzOicsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGRvd25sb2FkQW5kU2F2ZShcbiAgICByZW1vdGVLZXk6IHN0cmluZ1xuICApOiBQcm9taXNlPHsgY29udGVudEhhc2g/OiBzdHJpbmcgfSB8IG51bGw+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBpPHtcbiAgICAgICAgc3VjY2VzczogYm9vbGVhbjtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgICBjb250ZW50VHlwZT86IHN0cmluZztcbiAgICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgICAgdXBsb2FkZWQ/OiBzdHJpbmc7XG4gICAgICAgICAgY29udGVudEhhc2g/OiBzdHJpbmc7XG4gICAgICAgICAgZW5jb2Rpbmc/OiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICB9PihgL2FwaS9zeW5jL2Rvd25sb2FkLyR7cmVtb3RlS2V5fWApO1xuXG4gICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICBjb25zdCBsb2NhbFBhdGggPSBkYXRhLmtleTtcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBsb2NhbFBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgY29uc3QgZXhpc3RpbmdGaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChsb2NhbFBhdGgpO1xuXG4gICAgICBpZiAoZXhpc3RpbmdGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgaWYgKGlzTWFya2Rvd24gfHwgZGF0YS5lbmNvZGluZyA9PT0gJ3V0Zi04Jykge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5tb2RpZnkoZXhpc3RpbmdGaWxlLCBkYXRhLmNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMucGx1Z2luLmJhc2U2NFRvQXJyYXlCdWZmZXIoZGF0YS5jb250ZW50KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQubW9kaWZ5QmluYXJ5KGV4aXN0aW5nRmlsZSwgYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgW1N5bmNFbmdpbmVdIFVwZGF0ZWQgJHtsb2NhbFBhdGh9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTUyMUJcdTVFRkFcdTY1ODdcdTRFRjZcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IGxvY2FsUGF0aC5zdWJzdHJpbmcoMCwgbG9jYWxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xuICAgICAgICBpZiAoZm9sZGVyUGF0aCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyUGF0aCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc01hcmtkb3duIHx8IGRhdGEuZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlKGxvY2FsUGF0aCwgZGF0YS5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnBsdWdpbi5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmNyZWF0ZUJpbmFyeShsb2NhbFBhdGgsIGJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFtTeW5jRW5naW5lXSBDcmVhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBjb250ZW50SGFzaDogZGF0YS5jb250ZW50SGFzaCB9O1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gRG93bmxvYWQgZmFpbGVkIGZvciAke3JlbW90ZUtleX06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBidWlsZENvbmZsaWN0SW5mbyhcbiAgICBmaWxlOiBURmlsZSxcbiAgICByZW1vdGVLZXk6IHN0cmluZyxcbiAgICBsb2NhbEhhc2g6IHN0cmluZyxcbiAgICByZW1vdGVIYXNoOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxDb25mbGljdEluZm8+IHtcbiAgICBjb25zdCBsb2NhbENvbnRlbnQgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKTtcblxuICAgIGxldCByZW1vdGVDb250ZW50ID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE6IHsgY29udGVudDogc3RyaW5nIH07XG4gICAgICB9PihgL2FwaS9zeW5jL2Rvd25sb2FkLyR7cmVtb3RlS2V5fWApO1xuICAgICAgcmVtb3RlQ29udGVudCA9IHJlcy5kYXRhLmNvbnRlbnQ7XG4gICAgfSBjYXRjaCB7XG4gICAgICByZW1vdGVDb250ZW50ID0gJyhGYWlsZWQgdG8gZmV0Y2ggcmVtb3RlIGNvbnRlbnQpJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYWxQYXRoOiBmaWxlLnBhdGgsXG4gICAgICByZW1vdGVLZXksXG4gICAgICBsb2NhbENvbnRlbnQsXG4gICAgICByZW1vdGVDb250ZW50LFxuICAgICAgbG9jYWxIYXNoLFxuICAgICAgcmVtb3RlSGFzaCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQZW5kaW5nU3RhdHMoKTogdm9pZCB7XG4gICAgdGhpcy5fc3RhdHMucGVuZGluZ1VwbG9hZCA9IHRoaXMuZGVib3VuY2VUaW1lcnMuc2l6ZTtcbiAgICB0aGlzLmVtaXRTdGF0c0NoYW5nZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFN0YXRzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uU3RhdHNDaGFuZ2VkPy4odGhpcy5zdGF0cyk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IENsZWFudXAgPT09PT09PT09PVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wQXV0b1N5bmMoKTtcbiAgICBmb3IgKGNvbnN0IHRpbWVyIG9mIHRoaXMuZGVib3VuY2VUaW1lcnMudmFsdWVzKCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfVxuICAgIHRoaXMuZGVib3VuY2VUaW1lcnMuY2xlYXIoKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFBsdWdpbiwgc2V0SWNvbiwgTW9kYWwsIEFwcCB9IGZyb20gJ29ic2lkaWFuJztcbmltcG9ydCB0eXBlIHsgU3luY1N0YXRzLCBDb25mbGljdEluZm8gfSBmcm9tICcuL3N5bmMtZW5naW5lJztcblxuZXhwb3J0IGNsYXNzIFN5bmNTdGF0dXNCYXIge1xuICBwcml2YXRlIHBsdWdpbjogUGx1Z2luO1xuICBwcml2YXRlIHN0YXR1c0JhckVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBpY29uRWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIHRleHRFbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX3N0YXRzOiBTeW5jU3RhdHMgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSA9IFtdO1xuICBwcml2YXRlIG9uU2hvd0NvbmZsaWN0czogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb25UcmlnZ2VyU3luYzogKCgpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGx1Z2luOiBQbHVnaW4sXG4gICAgb3B0czoge1xuICAgICAgb25TaG93Q29uZmxpY3RzPzogKCkgPT4gdm9pZDtcbiAgICAgIG9uVHJpZ2dlclN5bmM/OiAoKSA9PiB2b2lkO1xuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5vblNob3dDb25mbGljdHMgPSBvcHRzLm9uU2hvd0NvbmZsaWN0cyB8fCBudWxsO1xuICAgIHRoaXMub25UcmlnZ2VyU3luYyA9IG9wdHMub25UcmlnZ2VyU3luYyB8fCBudWxsO1xuXG4gICAgLy8gQ3JlYXRlIHN0YXR1cyBiYXIgZWxlbWVudFxuICAgIHRoaXMuc3RhdHVzQmFyRWwgPSBwbHVnaW4uYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuYWRkQ2xhc3MoJ2NmLXN5bmMtc3RhdHVzJyk7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnQ2xvdWRmbGFyZSBTeW5jIFN0YXR1cycpO1xuXG4gICAgdGhpcy5pY29uRWwgPSB0aGlzLnN0YXR1c0JhckVsLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1zdGF0dXMtaWNvbicgfSk7XG4gICAgdGhpcy50ZXh0RWwgPSB0aGlzLnN0YXR1c0JhckVsLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1zdGF0dXMtdGV4dCcgfSk7XG5cbiAgICAvLyBDbGljayBoYW5kbGVyIFx1MjAxNCBvcGVucyBkZXRhaWwgcGFuZWxcbiAgICB0aGlzLnN0YXR1c0JhckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5zaG93RGV0YWlsTW9kYWwoKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBzdHlsZXNcbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuXG4gICAgLy8gSW5pdGlhbCByZW5kZXJcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgdXBkYXRlU3RhdHMoc3RhdHM6IFN5bmNTdGF0cyk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbmZsaWN0cyhjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdKTogdm9pZCB7XG4gICAgdGhpcy5fY29uZmxpY3RzID0gY29uZmxpY3RzO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0cyA9IHRoaXMuX3N0YXRzO1xuXG4gICAgaWYgKCFzdGF0cykge1xuICAgICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ2Nsb3VkJyk7XG4gICAgICB0aGlzLnRleHRFbC50ZXh0Q29udGVudCA9ICdOb3Qgc3luY2VkJztcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1pZGxlJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHMuaXNTeW5jaW5nKSB7XG4gICAgICBzZXRJY29uKHRoaXMuaWNvbkVsLCAncmVmcmVzaC1jdycpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSAnU3luY2luZy4uLic7XG4gICAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtc3luY2luZyc7XG4gICAgICB0aGlzLmljb25FbC5hZGRDbGFzcygnY2Ytc3BpbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaWNvbkVsLnJlbW92ZUNsYXNzKCdjZi1zcGluJyk7XG5cbiAgICBpZiAoc3RhdHMuY29uZmxpY3RzID4gMCkge1xuICAgICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ2FsZXJ0LXRyaWFuZ2xlJyk7XG4gICAgICB0aGlzLnRleHRFbC50ZXh0Q29udGVudCA9IGAke3N0YXRzLmNvbmZsaWN0c30gY29uZmxpY3Qke3N0YXRzLmNvbmZsaWN0cyA+IDEgPyAncycgOiAnJ31gO1xuICAgICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLWNvbmZsaWN0JztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHMuZXJyb3JzID4gMCkge1xuICAgICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ3gtY2lyY2xlJyk7XG4gICAgICB0aGlzLnRleHRFbC50ZXh0Q29udGVudCA9IGAke3N0YXRzLmVycm9yc30gZXJyb3Ike3N0YXRzLmVycm9ycyA+IDEgPyAncycgOiAnJ31gO1xuICAgICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLWVycm9yJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTeW5jZWQgc3RhdGVcbiAgICBzZXRJY29uKHRoaXMuaWNvbkVsLCAnY2hlY2stY2lyY2xlJyk7XG4gICAgY29uc3QgdGltZUFnbyA9IHN0YXRzLmxhc3RTeW5jVGltZSA/IHRoaXMuZm9ybWF0VGltZUFnbyhzdGF0cy5sYXN0U3luY1RpbWUpIDogJ25ldmVyJztcbiAgICBjb25zdCBwYXJ0czogc3RyaW5nW10gPSBbdGltZUFnb107XG4gICAgaWYgKHN0YXRzLnBlbmRpbmdVcGxvYWQgPiAwKSBwYXJ0cy5wdXNoKGAke3N0YXRzLnBlbmRpbmdVcGxvYWR9IHBlbmRpbmdgKTtcbiAgICB0aGlzLnRleHRFbC50ZXh0Q29udGVudCA9IHBhcnRzLmpvaW4oJyBcdTAwQjcgJyk7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLXN5bmNlZCc7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRpbWVBZ28odGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRpZmYgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGRpZmYgLyAxMDAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xuXG4gICAgaWYgKHNlY29uZHMgPCA2MCkgcmV0dXJuICdqdXN0IG5vdyc7XG4gICAgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIGAke21pbnV0ZXN9bSBhZ29gO1xuICAgIGlmIChob3VycyA8IDI0KSByZXR1cm4gYCR7aG91cnN9aCBhZ29gO1xuICAgIHJldHVybiBgJHtNYXRoLmZsb29yKGhvdXJzIC8gMjQpfWQgYWdvYDtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0RldGFpbE1vZGFsKCk6IHZvaWQge1xuICAgIG5ldyBTeW5jRGV0YWlsTW9kYWwodGhpcy5wbHVnaW4uYXBwLCB0aGlzLl9zdGF0cywgdGhpcy5fY29uZmxpY3RzLCB7XG4gICAgICBvblNob3dDb25mbGljdHM6IHRoaXMub25TaG93Q29uZmxpY3RzLFxuICAgICAgb25UcmlnZ2VyU3luYzogdGhpcy5vblRyaWdnZXJTeW5jLFxuICAgIH0pLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVzKCk6IHZvaWQge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Ytc3RhdHVzLWJhci1zdHlsZXMnKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2NmLXN0YXR1cy1iYXItc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jZi1zeW5jLXN0YXR1cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICB9XG4gICAgICAuY2Ytc3luYy1zdGF0dXM6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWhvdmVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0dXMtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLWljb24gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0dXMtdGV4dCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLWlkbGUgLmNmLXN0YXR1cy1pY29uIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyB9XG4gICAgICAuY2Ytc3RhdHVzLXN5bmNpbmcgLmNmLXN0YXR1cy1pY29uIHsgY29sb3I6IHZhcigtLXRleHQtYWNjZW50KTsgfVxuICAgICAgLmNmLXN0YXR1cy1zeW5jZWQgLmNmLXN0YXR1cy1pY29uIHsgY29sb3I6IHZhcigtLXRleHQtc3VjY2VzcywgIzRhZGU4MCk7IH1cbiAgICAgIC5jZi1zdGF0dXMtY29uZmxpY3QgLmNmLXN0YXR1cy1pY29uIHsgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7IH1cbiAgICAgIC5jZi1zdGF0dXMtZXJyb3IgLmNmLXN0YXR1cy1pY29uIHsgY29sb3I6IHZhcigtLXRleHQtZXJyb3IsICNmODcxNzEpOyB9XG4gICAgICAuY2Ytc3BpbiB7XG4gICAgICAgIGFuaW1hdGlvbjogY2Ytc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGNmLXNwaW4ge1xuICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5yZW1vdmUoKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09IERldGFpbCBNb2RhbCA9PT09PT09PT09XG5cbmNsYXNzIFN5bmNEZXRhaWxNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSBzdGF0czogU3luY1N0YXRzIHwgbnVsbDtcbiAgcHJpdmF0ZSBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdO1xuICBwcml2YXRlIG9uU2hvd0NvbmZsaWN0czogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgcHJpdmF0ZSBvblRyaWdnZXJTeW5jOiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIHN0YXRzOiBTeW5jU3RhdHMgfCBudWxsLFxuICAgIGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10sXG4gICAgb3B0czoge1xuICAgICAgb25TaG93Q29uZmxpY3RzPzogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgICAgIG9uVHJpZ2dlclN5bmM/OiAoKCkgPT4gdm9pZCkgfCBudWxsO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoYXBwKTtcbiAgICB0aGlzLnN0YXRzID0gc3RhdHM7XG4gICAgdGhpcy5jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgdGhpcy5vblNob3dDb25mbGljdHMgPSBvcHRzLm9uU2hvd0NvbmZsaWN0cyB8fCBudWxsO1xuICAgIHRoaXMub25UcmlnZ2VyU3luYyA9IG9wdHMub25UcmlnZ2VyU3luYyB8fCBudWxsO1xuICB9XG5cbiAgb25PcGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygnY2Ytc3luYy1kZXRhaWwtbW9kYWwnKTtcblxuICAgIHRoaXMuYWRkU3R5bGVzKCk7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGV0YWlsLWhlYWRlcicgfSk7XG4gICAgY29uc3QgdGl0bGVSb3cgPSBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGV0YWlsLXRpdGxlLXJvdycgfSk7XG4gICAgY29uc3QgaWNvbkVsID0gdGl0bGVSb3cuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWRldGFpbC1pY29uJyB9KTtcbiAgICBzZXRJY29uKGljb25FbCwgJ2Nsb3VkJyk7XG4gICAgdGl0bGVSb3cuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnU3luYyBTdGF0dXMnLCBjbHM6ICdjZi1kZXRhaWwtdGl0bGUnIH0pO1xuXG4gICAgY29uc3Qgc3RhdHMgPSB0aGlzLnN0YXRzO1xuXG4gICAgaWYgKCFzdGF0cykge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2NmLWRldGFpbC1lbXB0eScsXG4gICAgICAgIHRleHQ6ICdObyBzeW5jIGRhdGEgYXZhaWxhYmxlLiBSdW4gYSBzeW5jIGZpcnN0LicsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RhdHMgZ3JpZFxuICAgICAgY29uc3QgZ3JpZCA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kZXRhaWwtZ3JpZCcgfSk7XG5cbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2Nsb2NrJywgJ0xhc3QgU3luYycsIHN0YXRzLmxhc3RTeW5jVGltZSA/IHRoaXMuZm9ybWF0VGltZShzdGF0cy5sYXN0U3luY1RpbWUpIDogJ05ldmVyJyk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdmaWxlcycsICdUb3RhbCBGaWxlcycsIFN0cmluZyhzdGF0cy50b3RhbEZpbGVzKSk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdjaGVjay1jaXJjbGUnLCAnU3luY2VkJywgU3RyaW5nKHN0YXRzLnN5bmNlZEZpbGVzKSk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICd1cGxvYWQnLCAnUGVuZGluZyBcdTIxOTEnLCBTdHJpbmcoc3RhdHMucGVuZGluZ1VwbG9hZCkpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnZG93bmxvYWQnLCAnUGVuZGluZyBcdTIxOTMnLCBTdHJpbmcoc3RhdHMucGVuZGluZ0Rvd25sb2FkKSk7XG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdhbGVydC10cmlhbmdsZScsICdDb25mbGljdHMnLCBTdHJpbmcoc3RhdHMuY29uZmxpY3RzKSwgc3RhdHMuY29uZmxpY3RzID4gMCA/ICdjZi1zdGF0LXdhcm5pbmcnIDogJycpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAneC1jaXJjbGUnLCAnRXJyb3JzJywgU3RyaW5nKHN0YXRzLmVycm9ycyksIHN0YXRzLmVycm9ycyA+IDAgPyAnY2Ytc3RhdC1lcnJvcicgOiAnJyk7XG5cbiAgICAgIC8vIENvbmZsaWN0IGxpc3RcbiAgICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNvbmZsaWN0U2VjdGlvbiA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICAgIGNsczogJ2NmLWRldGFpbC1zZWN0aW9uJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbmZsaWN0U2VjdGlvbi5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb25mbGljdGluZyBGaWxlcycgfSk7XG5cbiAgICAgICAgY29uc3QgY29uZmxpY3RMaXN0ID0gY29uZmxpY3RTZWN0aW9uLmNyZWF0ZUVsKCd1bCcsIHtcbiAgICAgICAgICBjbHM6ICdjZi1jb25mbGljdC1saXN0JyxcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLmNvbmZsaWN0cykge1xuICAgICAgICAgIGNvbnN0IGxpID0gY29uZmxpY3RMaXN0LmNyZWF0ZUVsKCdsaScsIHsgY2xzOiAnY2YtY29uZmxpY3QtaXRlbScgfSk7XG4gICAgICAgICAgY29uc3QgZmlsZUljb24gPSBsaS5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtaXRlbS1pY29uJyB9KTtcbiAgICAgICAgICBzZXRJY29uKGZpbGVJY29uLCAnZmlsZS13YXJuaW5nJyk7XG4gICAgICAgICAgbGkuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6IGMubG9jYWxQYXRoLCBjbHM6ICdjZi1pdGVtLXBhdGgnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25TaG93Q29uZmxpY3RzKSB7XG4gICAgICAgICAgY29uc3QgcmVzb2x2ZUJ0biA9IGNvbmZsaWN0U2VjdGlvbi5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1wcmltYXJ5JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCBidG5JY29uID0gcmVzb2x2ZUJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtYnRuLWljb24nIH0pO1xuICAgICAgICAgIHNldEljb24oYnRuSWNvbiwgJ2FsZXJ0LXRyaWFuZ2xlJyk7XG4gICAgICAgICAgcmVzb2x2ZUJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ1Jlc29sdmUgQ29uZmxpY3RzJyB9KTtcbiAgICAgICAgICByZXNvbHZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5vblNob3dDb25mbGljdHM/LigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uc1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGV0YWlsLWFjdGlvbnMnIH0pO1xuXG4gICAgaWYgKHRoaXMub25UcmlnZ2VyU3luYykge1xuICAgICAgY29uc3Qgc3luY0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnY2YtYnRuIGNmLWJ0bi1wcmltYXJ5JyB9KTtcbiAgICAgIGNvbnN0IHN5bmNJY29uID0gc3luY0J0bi5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtYnRuLWljb24nIH0pO1xuICAgICAgc2V0SWNvbihzeW5jSWNvbiwgJ3JlZnJlc2gtY3cnKTtcbiAgICAgIHN5bmNCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdTeW5jIE5vdycgfSk7XG4gICAgICBzeW5jQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIHRoaXMub25UcmlnZ2VyU3luYz8uKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsczogJ2NmLWJ0bicsXG4gICAgICB0ZXh0OiAnQ2xvc2UnLFxuICAgIH0pO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZSgpKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU3RhdENhcmQoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgaWNvbjogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHRyYUNsYXNzPzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiBgY2Ytc3RhdC1jYXJkICR7ZXh0cmFDbGFzcyB8fCAnJ31gLFxuICAgIH0pO1xuICAgIGNvbnN0IGljb25FbCA9IGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2Ytc3RhdC1pY29uJyB9KTtcbiAgICBzZXRJY29uKGljb25FbCwgaWNvbik7XG4gICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1zdGF0LXZhbHVlJywgdGV4dDogdmFsdWUgfSk7XG4gICAgY2FyZC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1zdGF0LWxhYmVsJywgdGV4dDogbGFiZWwgfSk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRpbWUodGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NmLWRldGFpbC1tb2RhbC1zdHlsZXMnKSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmlkID0gJ2NmLWRldGFpbC1tb2RhbC1zdHlsZXMnO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNmLXN5bmMtZGV0YWlsLW1vZGFsIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLXRpdGxlLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYWNjZW50KTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1lbXB0eSB7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxMjBweCwgMWZyKSk7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtY2FyZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LXdhcm5pbmcgLmNmLXN0YXQtdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nLCAjZmFjYzE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LXdhcm5pbmcgLmNmLXN0YXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcsICNmYWNjMTUpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtZXJyb3IgLmNmLXN0YXQtdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1lcnJvciwgI2Y4NzE3MSk7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1lcnJvciAuY2Ytc3RhdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZXJyb3IsICNmODcxNzEpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1zZWN0aW9uIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1saXN0IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1pdGVtLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nLCAjZmFjYzE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1pdGVtLWljb24gc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIH1cbiAgICAgIC5jZi1pdGVtLXBhdGgge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vc3BhY2UpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItaG92ZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtb24tYWNjZW50KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQtaG92ZXIsIHZhcigtLWludGVyYWN0aXZlLWFjY2VudCkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgTW9kYWwsIEFwcCwgVEZpbGUsIHNldEljb24gfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgdHlwZSB7IENvbmZsaWN0SW5mbywgQ29uZmxpY3RSZXNvbHV0aW9uIH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBDb25mbGljdE1vZGFsIGV4dGVuZHMgTW9kYWwge1xuICBwcml2YXRlIGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW107XG4gIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIG9uUmVzb2x2ZTogKGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgcHJpdmF0ZSBvblJlc29sdmVBbGw6IChyZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pID0+IFByb21pc2U8dm9pZD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgYXBwOiBBcHAsXG4gICAgY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSxcbiAgICBvblJlc29sdmU6IChjb25mbGljdDogQ29uZmxpY3RJbmZvLCByZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pID0+IFByb21pc2U8dm9pZD4sXG4gICAgb25SZXNvbHZlQWxsOiAocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+XG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgdGhpcy5vblJlc29sdmUgPSBvblJlc29sdmU7XG4gICAgdGhpcy5vblJlc29sdmVBbGwgPSBvblJlc29sdmVBbGw7XG4gIH1cblxuICBvbk9wZW4oKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmVtcHR5KCk7XG4gICAgY29udGVudEVsLmFkZENsYXNzKCdjZi1zeW5jLWNvbmZsaWN0LW1vZGFsJyk7XG5cbiAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICB9XG5cbiAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJDdXJyZW50Q29uZmxpY3QoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250ZW50RWwgfSA9IHRoaXM7XG4gICAgY29udGVudEVsLmVtcHR5KCk7XG5cbiAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgY2xzOiAnY2YtY29uZmxpY3QtZW1wdHknLFxuICAgICAgICB0ZXh0OiAnXHUyNzA1IEFsbCBjb25mbGljdHMgcmVzb2x2ZWQhJyxcbiAgICAgIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlKCksIDE1MDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbmZsaWN0ID0gdGhpcy5jb25mbGljdHNbdGhpcy5jdXJyZW50SW5kZXhdO1xuICAgIGlmICghY29uZmxpY3QpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyA9PT09PSBcdTY4MzdcdTVGMEYgPT09PT1cbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuXG4gICAgLy8gPT09PT0gSGVhZGVyID09PT09XG4gICAgY29uc3QgaGVhZGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LWhlYWRlcicgfSk7XG5cbiAgICBjb25zdCB0aXRsZVJvdyA9IGhlYWRlci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC10aXRsZS1yb3cnIH0pO1xuICAgIGNvbnN0IGljb25FbCA9IHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1jb25mbGljdC1pY29uJyB9KTtcbiAgICBzZXRJY29uKGljb25FbCwgJ2FsZXJ0LXRyaWFuZ2xlJyk7XG4gICAgdGl0bGVSb3cuY3JlYXRlRWwoJ2gyJywge1xuICAgICAgdGV4dDogJ1N5bmMgQ29uZmxpY3QnLFxuICAgICAgY2xzOiAnY2YtY29uZmxpY3QtdGl0bGUnLFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbHM6ICdjZi1jb25mbGljdC1zdWJ0aXRsZScsXG4gICAgICB0ZXh0OiBgJHt0aGlzLmN1cnJlbnRJbmRleCArIDF9IG9mICR7dGhpcy5jb25mbGljdHMubGVuZ3RofSBjb25mbGljdHNgLFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbHM6ICdjZi1jb25mbGljdC1maWxlcGF0aCcsXG4gICAgICB0ZXh0OiBjb25mbGljdC5sb2NhbFBhdGgsXG4gICAgfSk7XG5cbiAgICAvLyA9PT09PSBEaWZmIFZpZXcgPT09PT1cbiAgICBjb25zdCBkaWZmQ29udGFpbmVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LWRpZmYnIH0pO1xuXG4gICAgLy8gTG9jYWwgc2lkZVxuICAgIGNvbnN0IGxvY2FsUGFuZWwgPSBkaWZmQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LXBhbmVsIGNmLWxvY2FsJyB9KTtcbiAgICBjb25zdCBsb2NhbEhlYWRlciA9IGxvY2FsUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtcGFuZWwtaGVhZGVyJyB9KTtcbiAgICBjb25zdCBsb2NhbEljb25FbCA9IGxvY2FsSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1wYW5lbC1pY29uJyB9KTtcbiAgICBzZXRJY29uKGxvY2FsSWNvbkVsLCAnbW9uaXRvcicpO1xuICAgIGxvY2FsSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnTG9jYWwgVmVyc2lvbicgfSk7XG4gICAgbG9jYWxIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWhhc2gnLCB0ZXh0OiBjb25mbGljdC5sb2NhbEhhc2guc3Vic3RyaW5nKDAsIDgpIH0pO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZW50ID0gbG9jYWxQYW5lbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1wYW5lbC1jb250ZW50JyB9KTtcbiAgICB0aGlzLnJlbmRlckRpZmZDb250ZW50KGxvY2FsQ29udGVudCwgY29uZmxpY3QubG9jYWxDb250ZW50LCBjb25mbGljdC5yZW1vdGVDb250ZW50LCAnbG9jYWwnKTtcblxuICAgIC8vIFJlbW90ZSBzaWRlXG4gICAgY29uc3QgcmVtb3RlUGFuZWwgPSBkaWZmQ29udGFpbmVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LXBhbmVsIGNmLXJlbW90ZScgfSk7XG4gICAgY29uc3QgcmVtb3RlSGVhZGVyID0gcmVtb3RlUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtcGFuZWwtaGVhZGVyJyB9KTtcbiAgICBjb25zdCByZW1vdGVJY29uRWwgPSByZW1vdGVIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLXBhbmVsLWljb24nIH0pO1xuICAgIHNldEljb24ocmVtb3RlSWNvbkVsLCAnY2xvdWQnKTtcbiAgICByZW1vdGVIZWFkZXIuY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdSZW1vdGUgVmVyc2lvbicgfSk7XG4gICAgcmVtb3RlSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1oYXNoJywgdGV4dDogY29uZmxpY3QucmVtb3RlSGFzaC5zdWJzdHJpbmcoMCwgOCkgfSk7XG5cbiAgICBjb25zdCByZW1vdGVDb250ZW50ID0gcmVtb3RlUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtcGFuZWwtY29udGVudCcgfSk7XG4gICAgdGhpcy5yZW5kZXJEaWZmQ29udGVudChyZW1vdGVDb250ZW50LCBjb25mbGljdC5yZW1vdGVDb250ZW50LCBjb25mbGljdC5sb2NhbENvbnRlbnQsICdyZW1vdGUnKTtcblxuICAgIC8vID09PT09IEFjdGlvbnMgPT09PT1cbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LWFjdGlvbnMnIH0pO1xuXG4gICAgLy8gSW5kaXZpZHVhbCBhY3Rpb25zXG4gICAgY29uc3QgaW5kaXZpZHVhbEFjdGlvbnMgPSBhY3Rpb25zLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICBjbHM6ICdjZi1pbmRpdmlkdWFsLWFjdGlvbnMnLFxuICAgIH0pO1xuXG4gICAgY29uc3Qga2VlcExvY2FsQnRuID0gaW5kaXZpZHVhbEFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tbG9jYWwnLFxuICAgIH0pO1xuICAgIGNvbnN0IGxvY2FsQnRuSWNvbiA9IGtlZXBMb2NhbEJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtYnRuLWljb24nIH0pO1xuICAgIHNldEljb24obG9jYWxCdG5JY29uLCAnbW9uaXRvcicpO1xuICAgIGtlZXBMb2NhbEJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0tlZXAgTG9jYWwnIH0pO1xuICAgIGtlZXBMb2NhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZShjb25mbGljdCwgJ2xvY2FsJykpO1xuXG4gICAgY29uc3Qga2VlcFJlbW90ZUJ0biA9IGluZGl2aWR1YWxBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLXJlbW90ZScsXG4gICAgfSk7XG4gICAgY29uc3QgcmVtb3RlQnRuSWNvbiA9IGtlZXBSZW1vdGVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICBzZXRJY29uKHJlbW90ZUJ0bkljb24sICdjbG91ZCcpO1xuICAgIGtlZXBSZW1vdGVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdLZWVwIFJlbW90ZScgfSk7XG4gICAga2VlcFJlbW90ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZShjb25mbGljdCwgJ3JlbW90ZScpKTtcblxuICAgIGNvbnN0IGtlZXBCb3RoQnRuID0gaW5kaXZpZHVhbEFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tYm90aCcsXG4gICAgfSk7XG4gICAgY29uc3QgYm90aEJ0bkljb24gPSBrZWVwQm90aEJ0bi5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtYnRuLWljb24nIH0pO1xuICAgIHNldEljb24oYm90aEJ0bkljb24sICdjb3B5Jyk7XG4gICAga2VlcEJvdGhCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdLZWVwIEJvdGgnIH0pO1xuICAgIGtlZXBCb3RoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlKGNvbmZsaWN0LCAnYm90aCcpKTtcblxuICAgIC8vIEJhdGNoIGFjdGlvbnMgKGlmIG11bHRpcGxlIGNvbmZsaWN0cylcbiAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgYmF0Y2hBY3Rpb25zID0gYWN0aW9ucy5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1iYXRjaC1hY3Rpb25zJyB9KTtcbiAgICAgIGJhdGNoQWN0aW9ucy5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiAnY2YtYmF0Y2gtbGFiZWwnLFxuICAgICAgICB0ZXh0OiAnQXBwbHkgdG8gYWxsOicsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYWxsTG9jYWxCdG4gPSBiYXRjaEFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1zbWFsbCBjZi1idG4tbG9jYWwnLFxuICAgICAgICB0ZXh0OiAnQWxsIExvY2FsJyxcbiAgICAgIH0pO1xuICAgICAgYWxsTG9jYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmVBbGwoJ2xvY2FsJykpO1xuXG4gICAgICBjb25zdCBhbGxSZW1vdGVCdG4gPSBiYXRjaEFjdGlvbnMuY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1zbWFsbCBjZi1idG4tcmVtb3RlJyxcbiAgICAgICAgdGV4dDogJ0FsbCBSZW1vdGUnLFxuICAgICAgfSk7XG4gICAgICBhbGxSZW1vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmVBbGwoJ3JlbW90ZScpKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IG5hdiA9IGFjdGlvbnMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtbmF2JyB9KTtcblxuICAgICAgY29uc3QgcHJldkJ0biA9IG5hdi5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdjZi1idG4gY2YtYnRuLW5hdicgfSk7XG4gICAgICBzZXRJY29uKHByZXZCdG4sICdjaGV2cm9uLWxlZnQnKTtcbiAgICAgIHByZXZCdG4uZGlzYWJsZWQgPSB0aGlzLmN1cnJlbnRJbmRleCA9PT0gMDtcbiAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBuYXYuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIHRleHQ6IGAke3RoaXMuY3VycmVudEluZGV4ICsgMX0gLyAke3RoaXMuY29uZmxpY3RzLmxlbmd0aH1gLFxuICAgICAgICBjbHM6ICdjZi1uYXYtdGV4dCcsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmV4dEJ0biA9IG5hdi5jcmVhdGVFbCgnYnV0dG9uJywgeyBjbHM6ICdjZi1idG4gY2YtYnRuLW5hdicgfSk7XG4gICAgICBzZXRJY29uKG5leHRCdG4sICdjaGV2cm9uLXJpZ2h0Jyk7XG4gICAgICBuZXh0QnRuLmRpc2FibGVkID0gdGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5jb25mbGljdHMubGVuZ3RoIC0gMTtcbiAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA8IHRoaXMuY29uZmxpY3RzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgICAgICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRGlmZkNvbnRlbnQoXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgb3RoZXJDb250ZW50OiBzdHJpbmcsXG4gICAgc2lkZTogJ2xvY2FsJyB8ICdyZW1vdGUnXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgb3RoZXJMaW5lcyA9IG90aGVyQ29udGVudC5zcGxpdCgnXFxuJyk7XG5cbiAgICBjb25zdCBwcmUgPSBjb250YWluZXIuY3JlYXRlRWwoJ3ByZScsIHsgY2xzOiAnY2YtZGlmZi1wcmUnIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZUVsID0gcHJlLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRpZmYtbGluZScgfSk7XG5cbiAgICAgIC8vIExpbmUgbnVtYmVyXG4gICAgICBsaW5lRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ2NmLWxpbmUtbnVtJyxcbiAgICAgICAgdGV4dDogU3RyaW5nKGkgKyAxKSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgaWYgbGluZSBkaWZmZXJzXG4gICAgICBjb25zdCBpc0RpZmYgPSBpID49IG90aGVyTGluZXMubGVuZ3RoIHx8IGxpbmVzW2ldICE9PSBvdGhlckxpbmVzW2ldO1xuXG4gICAgICBjb25zdCBsaW5lQ29udGVudCA9IGxpbmVFbC5jcmVhdGVFbCgnc3BhbicsIHtcbiAgICAgICAgY2xzOiBgY2YtbGluZS1jb250ZW50ICR7aXNEaWZmID8gKHNpZGUgPT09ICdsb2NhbCcgPyAnY2YtZGlmZi1sb2NhbCcgOiAnY2YtZGlmZi1yZW1vdGUnKSA6ICcnfWAsXG4gICAgICB9KTtcbiAgICAgIGxpbmVDb250ZW50LnRleHRDb250ZW50ID0gbGluZXNbaV0gfHwgJyAnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlUmVzb2x2ZShjb25mbGljdDogQ29uZmxpY3RJbmZvLCByZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBidXR0b25zID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSB0cnVlKSk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5vblJlc29sdmUoY29uZmxpY3QsIHJlc29sdXRpb24pO1xuICAgICAgdGhpcy5jb25mbGljdHMgPSB0aGlzLmNvbmZsaWN0cy5maWx0ZXIoKGMpID0+IGMubG9jYWxQYXRoICE9PSBjb25mbGljdC5sb2NhbFBhdGgpO1xuICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuY29uZmxpY3RzLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignQ29uZmxpY3QgcmVzb2x1dGlvbiBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gZmFsc2UpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlc29sdmVBbGwocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gdHJ1ZSkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMub25SZXNvbHZlQWxsKHJlc29sdXRpb24pO1xuICAgICAgdGhpcy5jb25mbGljdHMgPSBbXTtcbiAgICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0JhdGNoIGNvbmZsaWN0IHJlc29sdXRpb24gZmFpbGVkOicsIGVycik7XG4gICAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZXMoKTogdm9pZCB7XG4gICAgLy8gT25seSBhZGQgb25jZVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2YtY29uZmxpY3Qtc3R5bGVzJykpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdjZi1jb25mbGljdC1zdHlsZXMnO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgLmNmLXN5bmMtY29uZmxpY3QtbW9kYWwge1xuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICAgICAgICB3aWR0aDogOTB2dztcbiAgICAgIH1cbiAgICAgIC5jZi1zeW5jLWNvbmZsaWN0LW1vZGFsIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtdGl0bGUtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWZpbGVwYXRoIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ub3NwYWNlKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1kaWZmIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICBnYXA6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1wYW5lbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuY2YtcGFuZWwtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgICAuY2YtbG9jYWwgLmNmLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmx1ZS1yZ2IsIDAsIDEyMCwgMjE1KSwgMC4xKTtcbiAgICAgIH1cbiAgICAgIC5jZi1yZW1vdGUgLmNmLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItZ3JlZW4tcmdiLCAwLCAxODAsIDgwKSwgMC4xKTtcbiAgICAgIH1cbiAgICAgIC5jZi1wYW5lbC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jZi1oYXNoIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBwYWRkaW5nOiAxcHggNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgICAuY2YtcGFuZWwtY29udGVudCB7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1kaWZmLXByZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ub3NwYWNlKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIH1cbiAgICAgIC5jZi1kaWZmLWxpbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgICAgfVxuICAgICAgLmNmLWxpbmUtbnVtIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1mYWludCk7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgfVxuICAgICAgLmNmLWxpbmUtY29udGVudCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1sb2NhbCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItYmx1ZS1yZ2IsIDAsIDEyMCwgMjE1KSwgMC4xNSk7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1yZW1vdGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCksIDAuMTUpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1pbmRpdmlkdWFsLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWhvdmVyKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tbG9jYWw6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSksIDAuMTUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYih2YXIoLS1jb2xvci1ibHVlLXJnYiwgMCwgMTIwLCAyMTUpKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tcmVtb3RlOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ncmVlbi1yZ2IsIDAsIDE4MCwgODApLCAwLjE1KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItZ3JlZW4tcmdiLCAwLCAxODAsIDgwKSk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLWJvdGg6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLW9yYW5nZS1yZ2IsIDIzMCwgMTUwLCAwKSwgMC4xNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWNvbG9yLW9yYW5nZS1yZ2IsIDIzMCwgMTUwLCAwKSk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLXNtYWxsIHtcbiAgICAgICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICB9XG4gICAgICAuY2YtYmF0Y2gtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5jZi1iYXRjaC1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1uYXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLW5hdiB7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICB9XG4gICAgICAuY2YtbmF2LXRleHQge1xuICAgICAgICBmb250LXNpemU6IDAuODVlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWVtcHR5IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXN1Y2Nlc3MsIHZhcigtLWludGVyYWN0aXZlLXN1Y2Nlc3MpKTtcbiAgICAgIH1cbiAgICBgO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgVEZpbGUsIFZhdWx0LCBub3JtYWxpemVQYXRoLCBOb3RpY2UsIE1lbnUsIE1ldGFkYXRhQ2FjaGUgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCB0eXBlIENsb3VkZmxhcmVTeW5jUGx1Z2luIGZyb20gJy4vbWFpbic7XG5cbmV4cG9ydCB0eXBlIFB1Ymxpc2hTdGF0dXMgPSAnZHJhZnQnIHwgJ3B1Ymxpc2hlZCcgfCAnbW9kaWZpZWQnIHwgJ2RlbGV0ZWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFB1Ymxpc2hGaWxlU3RhdGUge1xuICBzdGF0dXM6IFB1Ymxpc2hTdGF0dXM7XG4gIGxhc3RQdWJsaXNoZWRBdD86IHN0cmluZztcbiAgcmVtb3RlVXJsPzogc3RyaW5nO1xuICBsYXN0UHVibGlzaGVkSGFzaD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdWJsaXNoSW5kZXhFbnRyeSB7XG4gIHBhdGg6IHN0cmluZztcbiAgc3RhdHVzOiBQdWJsaXNoU3RhdHVzO1xuICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgaGVhZGluZ3M6IHsgbGV2ZWw6IG51bWJlcjsgdGV4dDogc3RyaW5nIH1bXTtcbiAgb3V0Z29pbmdMaW5rczogc3RyaW5nW107XG4gIGJhY2tsaW5rczogbnVtYmVyO1xuICBsYXN0UHVibGlzaGVkQXQ/OiBzdHJpbmc7XG4gIHJlbW90ZVVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQdWJsaXNoSW5kZXgge1xuICBnZW5lcmF0ZWRBdDogc3RyaW5nO1xuICBzaXRlVXJsOiBzdHJpbmc7XG4gIGVudHJpZXM6IFB1Ymxpc2hJbmRleEVudHJ5W107XG59XG5cbmV4cG9ydCBjbGFzcyBQdWJsaXNoRW5naW5lIHtcbiAgcHJpdmF0ZSBwbHVnaW46IENsb3VkZmxhcmVTeW5jUGx1Z2luO1xuICBwcml2YXRlIHB1Ymxpc2hTdGF0ZTogUmVjb3JkPHN0cmluZywgUHVibGlzaEZpbGVTdGF0ZT4gPSB7fTtcbiAgcHJpdmF0ZSBwdWJsaXNoU3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbikge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgYXN5bmMgbG9hZFN0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpO1xuICAgIHRoaXMucHVibGlzaFN0YXRlID0gZGF0YT8uX3B1Ymxpc2hTdGF0ZSB8fCB7fTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gKGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCkpIHx8IHt9O1xuICAgIGRhdGEuX3B1Ymxpc2hTdGF0ZSA9IHRoaXMucHVibGlzaFN0YXRlO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVEYXRhKGRhdGEpO1xuICB9XG5cbiAgc2V0U3RhdHVzQmFyRWwoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5wdWJsaXNoU3RhdHVzQmFyRWwgPSBlbDtcbiAgICB0aGlzLnVwZGF0ZVN0YXR1c0JhcigpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBTdGF0dXMgY29tcHV0YXRpb24gPT09PT09PT09PVxuXG4gIGdldFB1Ymxpc2hTdGF0ZShwYXRoOiBzdHJpbmcpOiBQdWJsaXNoRmlsZVN0YXRlIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoU3RhdGVbcGF0aF07XG4gIH1cblxuICBhc3luYyBjb21wdXRlRmlsZVN0YXR1cyhmaWxlOiBURmlsZSk6IFByb21pc2U8UHVibGlzaFN0YXR1cz4ge1xuICAgIGlmICghZmlsZS5wYXRoLmVuZHNXaXRoKCcubWQnKSkgcmV0dXJuICdkcmFmdCc7XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgY29uc3QgcGFyc2VkID0gbWF0dGVyKGNvbnRlbnQpO1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wdWJsaXNoU3RhdGVbZmlsZS5wYXRoXTtcblxuICAgIC8vIElmIGV4cGxpY2l0bHkgbWFya2VkIGFzIG5vdCBwdWJsaXNoIGFuZCBuZXZlciBwdWJsaXNoZWRcbiAgICBpZiAocGFyc2VkLmRhdGEucHVibGlzaCA9PT0gZmFsc2UgJiYgIXN0YXRlKSB7XG4gICAgICByZXR1cm4gJ2RyYWZ0JztcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhpcyBmaWxlIHNob3VsZCBiZSBjb25zaWRlcmVkIGZvciBwdWJsaXNoaW5nXG4gICAgY29uc3Qgc2hvdWxkUHVibGlzaCA9IGF3YWl0IHRoaXMuc2hvdWxkUHVibGlzaEZpbGUoZmlsZSwgcGFyc2VkLmRhdGEpO1xuICAgIGlmICghc2hvdWxkUHVibGlzaCkge1xuICAgICAgcmV0dXJuIHN0YXRlPy5zdGF0dXMgPT09ICdwdWJsaXNoZWQnID8gJ2RlbGV0ZWQnIDogJ2RyYWZ0JztcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLnN0YXR1cyA9PT0gJ2RyYWZ0Jykge1xuICAgICAgcmV0dXJuICdkcmFmdCc7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBoYXNoIHRvIGRldGVjdCBtb2RpZmljYXRpb25zXG4gICAgY29uc3QgY3VycmVudEhhc2ggPSBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRW5naW5lLmNvbXB1dGVMb2NhbEhhc2goY29udGVudCk7XG4gICAgaWYgKHN0YXRlLmxhc3RQdWJsaXNoZWRIYXNoICYmIHN0YXRlLmxhc3RQdWJsaXNoZWRIYXNoICE9PSBjdXJyZW50SGFzaCkge1xuICAgICAgcmV0dXJuICdtb2RpZmllZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlLnN0YXR1cztcbiAgfVxuXG4gIGFzeW5jIHNob3VsZFB1Ymxpc2hGaWxlKGZpbGU6IFRGaWxlLCBmcm9udG1hdHRlcj86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGZtID0gZnJvbnRtYXR0ZXIgPz8gbWF0dGVyKGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jYWNoZWRSZWFkKGZpbGUpIHx8ICcnKS5kYXRhO1xuXG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnB1Ymxpc2hCZWhhdmlvciA9PT0gJ2Zyb250bWF0dGVyLW9ubHknKSB7XG4gICAgICByZXR1cm4gZm0ucHVibGlzaCA9PT0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAnYWxsLW5vdGVzJyBiZWhhdmlvcjogcHVibGlzaCB1bmxlc3MgZXhwbGljaXRseSBmYWxzZVxuICAgIHJldHVybiBmbS5wdWJsaXNoICE9PSBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHJlZnJlc2hBbGxTdGF0dXNlcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcigoZikgPT4gZi5wYXRoLmVuZHNXaXRoKCcubWQnKSk7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmNvbXB1dGVGaWxlU3RhdHVzKGZpbGUpO1xuICAgICAgaWYgKHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0pIHtcbiAgICAgICAgdGhpcy5wdWJsaXNoU3RhdGVbZmlsZS5wYXRoXS5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgdGhpcy51cGRhdGVTdGF0dXNCYXIoKTtcbiAgfVxuXG4gIGdldFBlbmRpbmdGaWxlcygpOiB7IGZpbGU6IFRGaWxlOyBzdGF0dXM6IFB1Ymxpc2hTdGF0dXMgfVtdIHtcbiAgICBjb25zdCByZXN1bHQ6IHsgZmlsZTogVEZpbGU7IHN0YXR1czogUHVibGlzaFN0YXR1cyB9W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwYXRoLCBzdGF0ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wdWJsaXNoU3RhdGUpKSB7XG4gICAgICBpZiAoc3RhdGUuc3RhdHVzID09PSAnZHJhZnQnIHx8IHN0YXRlLnN0YXR1cyA9PT0gJ21vZGlmaWVkJykge1xuICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZmlsZSwgc3RhdHVzOiBzdGF0ZS5zdGF0dXMgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQWxzbyBpbmNsdWRlIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHB1Ymxpc2hlZCBidXQgaGF2ZSBubyBzdGF0ZSB5ZXRcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcigoZikgPT4gZi5wYXRoLmVuZHNXaXRoKCcubWQnKSk7XG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBpZiAoIXRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0pIHtcbiAgICAgICAgY29uc3QgY2FjaGVkID0gdGhpcy5wbHVnaW4uYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICBjb25zdCBwdWJsaXNoRmxhZyA9IGNhY2hlZD8uZnJvbnRtYXR0ZXI/LnB1Ymxpc2g7XG4gICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wdWJsaXNoQmVoYXZpb3IgPT09ICdmcm9udG1hdHRlci1vbmx5JyAmJiBwdWJsaXNoRmxhZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZmlsZSwgc3RhdHVzOiAnZHJhZnQnIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnB1Ymxpc2hCZWhhdmlvciA9PT0gJ2FsbC1ub3RlcycgJiYgcHVibGlzaEZsYWcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBmaWxlLCBzdGF0dXM6ICdkcmFmdCcgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gUHVibGlzaGluZyBhY3Rpb25zID09PT09PT09PT1cblxuICBhc3luYyBwdWJsaXNoRmlsZShmaWxlOiBURmlsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghZmlsZS5wYXRoLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgbmV3IE5vdGljZSgnT25seSBtYXJrZG93biBmaWxlcyBjYW4gYmUgcHVibGlzaGVkJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VydmVyVXJsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsO1xuICAgIGNvbnN0IGFwaVRva2VuID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXBpVG9rZW47XG4gICAgaWYgKCFzZXJ2ZXJVcmwgfHwgIWFwaVRva2VuKSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2UgY29uZmlndXJlIFB1Ymxpc2ggU2VydmVyIFVSTCBhbmQgQVBJIFRva2VuIGluIHNldHRpbmdzJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJhd0NvbnRlbnQgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihyYXdDb250ZW50KTtcblxuICAgICAgLy8gUHJvY2VzcyBhdHRhY2htZW50cyBhbmQgcmVwbGFjZSBsaW5rc1xuICAgICAgY29uc3QgeyBjb250ZW50OiBwcm9jZXNzZWRDb250ZW50LCBhc3NldHMgfSA9IGF3YWl0IHRoaXMucHJvY2Vzc0F0dGFjaG1lbnRzKHBhcnNlZC5jb250ZW50LCBmaWxlKTtcblxuICAgICAgLy8gVXBsb2FkIGFzc2V0cyBpZiBhbnlcbiAgICAgIGlmIChhc3NldHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCB0aGlzLnVwbG9hZFB1Ymxpc2hBc3NldHMoYXNzZXRzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgcHVibGlzaCBwYXlsb2FkIHdpdGggZW5oYW5jZWQgZnJvbnRtYXR0ZXJcbiAgICAgIGNvbnN0IHB1Ymxpc2hQYXlsb2FkID0ge1xuICAgICAgICBrZXk6IHRoaXMuZ2V0UHVibGlzaEtleShmaWxlLCBwYXJzZWQuZGF0YSksXG4gICAgICAgIGNvbnRlbnQ6IHByb2Nlc3NlZENvbnRlbnQsXG4gICAgICAgIGZyb250bWF0dGVyOiB0aGlzLmJ1aWxkUHVibGlzaEZyb250bWF0dGVyKHBhcnNlZC5kYXRhKSxcbiAgICAgICAgbWV0YToge1xuICAgICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICBiYXNlbmFtZTogZmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICBoZWFkaW5nczogdGhpcy5leHRyYWN0SGVhZGluZ3MocmF3Q29udGVudCksXG4gICAgICAgICAgb3V0Z29pbmdMaW5rczogdGhpcy5leHRyYWN0T3V0Z29pbmdMaW5rcyhyYXdDb250ZW50KSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwaSgnL2FwaS9zeW5jL3B1Ymxpc2gnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwdWJsaXNoUGF5bG9hZCksXG4gICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICBjb25zdCBoYXNoID0gYXdhaXQgdGhpcy5wbHVnaW4uc3luY0VuZ2luZS5jb21wdXRlTG9jYWxIYXNoKHJhd0NvbnRlbnQpO1xuICAgICAgY29uc3QgcmVtb3RlVXJsID0gYCR7c2VydmVyVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyl9L2Jsb2cvJHtwdWJsaXNoUGF5bG9hZC5rZXl9YDtcbiAgICAgIHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0gPSB7XG4gICAgICAgIHN0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICAgIGxhc3RQdWJsaXNoZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICByZW1vdGVVcmwsXG4gICAgICAgIGxhc3RQdWJsaXNoZWRIYXNoOiBoYXNoLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXR1c0JhcigpO1xuXG4gICAgICBuZXcgTm90aWNlKGBQdWJsaXNoZWQgJHtmaWxlLm5hbWV9YCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1B1Ymxpc2hFbmdpbmVdIFB1Ymxpc2ggZmFpbGVkOicsIGVycik7XG4gICAgICBuZXcgTm90aWNlKGBQdWJsaXNoIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1bnB1Ymxpc2hGaWxlKGZpbGU6IFRGaWxlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc2VydmVyVXJsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsO1xuICAgIGNvbnN0IGFwaVRva2VuID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXBpVG9rZW47XG4gICAgaWYgKCFzZXJ2ZXJVcmwgfHwgIWFwaVRva2VuKSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2UgY29uZmlndXJlIFB1Ymxpc2ggU2VydmVyIFVSTCBhbmQgQVBJIFRva2VuIGluIHNldHRpbmdzJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKSk7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLmdldFB1Ymxpc2hLZXkoZmlsZSwgcGFyc2VkLmRhdGEpO1xuXG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcGkoJy9hcGkvc3luYy91bnB1Ymxpc2gnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGtleSwgcGF0aDogZmlsZS5wYXRoIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdKSB7XG4gICAgICAgIHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0uc3RhdHVzID0gJ2RlbGV0ZWQnO1xuICAgICAgICBkZWxldGUgdGhpcy5wdWJsaXNoU3RhdGVbZmlsZS5wYXRoXS5sYXN0UHVibGlzaGVkQXQ7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdLnJlbW90ZVVybDtcbiAgICAgICAgZGVsZXRlIHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0ubGFzdFB1Ymxpc2hlZEhhc2g7XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0dXNCYXIoKTtcblxuICAgICAgbmV3IE5vdGljZShgVW5wdWJsaXNoZWQgJHtmaWxlLm5hbWV9YCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1B1Ymxpc2hFbmdpbmVdIFVucHVibGlzaCBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIG5ldyBOb3RpY2UoYFVucHVibGlzaCBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcHVibGlzaEFsbENoYW5nZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGVuZGluZyA9IHRoaXMuZ2V0UGVuZGluZ0ZpbGVzKCk7XG4gICAgaWYgKHBlbmRpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBwZW5kaW5nIGNoYW5nZXMgdG8gcHVibGlzaCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFB1Ymxpc2hpbmcgJHtwZW5kaW5nLmxlbmd0aH0gZmlsZShzKS4uLmApO1xuICAgIGxldCBzdWNjZXNzID0gMDtcbiAgICBmb3IgKGNvbnN0IHsgZmlsZSB9IG9mIHBlbmRpbmcpIHtcbiAgICAgIGNvbnN0IG9rID0gYXdhaXQgdGhpcy5wdWJsaXNoRmlsZShmaWxlKTtcbiAgICAgIGlmIChvaykgc3VjY2VzcysrO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIGFuZCB1cGxvYWQgaW5kZXhcbiAgICBhd2FpdCB0aGlzLmdlbmVyYXRlQW5kVXBsb2FkSW5kZXgoKTtcblxuICAgIG5ldyBOb3RpY2UoYFB1Ymxpc2hlZCAke3N1Y2Nlc3N9LyR7cGVuZGluZy5sZW5ndGh9IGZpbGVzYCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEF0dGFjaG1lbnQgcHJvY2Vzc2luZyA9PT09PT09PT09XG5cbiAgYXN5bmMgcHJvY2Vzc0F0dGFjaG1lbnRzKFxuICAgIGNvbnRlbnQ6IHN0cmluZyxcbiAgICBmaWxlOiBURmlsZVxuICApOiBQcm9taXNlPHsgY29udGVudDogc3RyaW5nOyBhc3NldHM6IHsgZmlsZW5hbWU6IHN0cmluZzsgYmFzZTY0OiBzdHJpbmc7IGNvbnRlbnRUeXBlOiBzdHJpbmcgfVtdIH0+IHtcbiAgICBjb25zdCBhc3NldHM6IHsgZmlsZW5hbWU6IHN0cmluZzsgYmFzZTY0OiBzdHJpbmc7IGNvbnRlbnRUeXBlOiBzdHJpbmcgfVtdID0gW107XG4gICAgbGV0IHJlc3VsdCA9IGNvbnRlbnQ7XG5cbiAgICBjb25zdCBzZXJ2ZXJVcmwgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXJ2ZXJVcmw7XG4gICAgY29uc3QgcHJlZml4ID0gKHRoaXMucGx1Z2luLnNldHRpbmdzLmF0dGFjaG1lbnRzUGF0aFByZWZpeCB8fCAnYXR0YWNobWVudHMnKTtcblxuICAgIC8vIFByb2Nlc3MgbWFya2Rvd24gaW1hZ2UgbGlua3M6ICFbYWx0XShwYXRoKVxuICAgIGNvbnN0IG1kSW1hZ2VSZWdleCA9IC8hXFxbKFteXFxdXSopXFxdXFwoKFteKV0rKVxcKS9nO1xuICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcbiAgICB3aGlsZSAoKG1hdGNoID0gbWRJbWFnZVJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBbZnVsbE1hdGNoLCBhbHQsIHJhd1BhdGhdID0gbWF0Y2g7XG4gICAgICBjb25zdCBhc3NldFBhdGggPSB0aGlzLnJlc29sdmVBc3NldFBhdGgocmF3UGF0aCwgZmlsZSk7XG4gICAgICBpZiAoIWFzc2V0UGF0aCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGFzc2V0RmlsZSA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoYXNzZXRQYXRoKTtcbiAgICAgIGlmICghKGFzc2V0RmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGJhc2U2NCA9IHRoaXMucGx1Z2luLmFycmF5QnVmZmVyVG9CYXNlNjQoYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWRCaW5hcnkoYXNzZXRGaWxlKSk7XG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHRoaXMucGx1Z2luLmdldE1pbWVUeXBlKGFzc2V0RmlsZS5leHRlbnNpb24pO1xuICAgICAgYXNzZXRzLnB1c2goeyBmaWxlbmFtZTogYXNzZXRGaWxlLm5hbWUsIGJhc2U2NCwgY29udGVudFR5cGUgfSk7XG5cbiAgICAgIGNvbnN0IHJlbW90ZVVybCA9IGAke3NlcnZlclVybC5yZXBsYWNlKC9cXC8kLywgJycpfS9hcGkvYmxvZy9pbWFnZXMvJHthc3NldEZpbGUubmFtZX1gO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoZnVsbE1hdGNoLCBgIVske2FsdH1dKCR7cmVtb3RlVXJsfSlgKTtcbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIHdpa2lsaW5rIGltYWdlczogIVtbZmlsZW5hbWUucG5nXV1cbiAgICBjb25zdCB3aWtpSW1hZ2VSZWdleCA9IC8hXFxbXFxbKFteXFxdXSspXFxdXFxdL2c7XG4gICAgd2hpbGUgKChtYXRjaCA9IHdpa2lJbWFnZVJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBbZnVsbE1hdGNoLCByYXdQYXRoXSA9IG1hdGNoO1xuICAgICAgY29uc3QgYXNzZXRQYXRoID0gdGhpcy5yZXNvbHZlQXNzZXRQYXRoKHJhd1BhdGgsIGZpbGUpO1xuICAgICAgaWYgKCFhc3NldFBhdGgpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBhc3NldEZpbGUgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGFzc2V0UGF0aCk7XG4gICAgICBpZiAoIShhc3NldEZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBiYXNlNjQgPSB0aGlzLnBsdWdpbi5hcnJheUJ1ZmZlclRvQmFzZTY0KGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkQmluYXJ5KGFzc2V0RmlsZSkpO1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSB0aGlzLnBsdWdpbi5nZXRNaW1lVHlwZShhc3NldEZpbGUuZXh0ZW5zaW9uKTtcbiAgICAgIGFzc2V0cy5wdXNoKHsgZmlsZW5hbWU6IGFzc2V0RmlsZS5uYW1lLCBiYXNlNjQsIGNvbnRlbnRUeXBlIH0pO1xuXG4gICAgICBjb25zdCByZW1vdGVVcmwgPSBgJHtzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvJC8sICcnKX0vYXBpL2Jsb2cvaW1hZ2VzLyR7YXNzZXRGaWxlLm5hbWV9YDtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGZ1bGxNYXRjaCwgYCFbXSgke3JlbW90ZVVybH0pYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY29udGVudDogcmVzdWx0LCBhc3NldHMgfTtcbiAgfVxuXG4gIHJlc29sdmVBc3NldFBhdGgocmF3UGF0aDogc3RyaW5nLCBzb3VyY2VGaWxlOiBURmlsZSk6IHN0cmluZyB8IG51bGwge1xuICAgIGlmIChyYXdQYXRoLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuIG51bGw7IC8vIEFscmVhZHkgcmVtb3RlXG5cbiAgICBjb25zdCBmb2xkZXIgPSBzb3VyY2VGaWxlLnBhcmVudD8ucGF0aCB8fCAnJztcblxuICAgIGlmIChyYXdQYXRoLnN0YXJ0c1dpdGgoJy4vJykgfHwgcmF3UGF0aC5zdGFydHNXaXRoKCcuLi8nKSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVBhdGgoYCR7Zm9sZGVyfS8ke3Jhd1BhdGh9YCk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IGRpcmVjdCBwYXRoIGZpcnN0XG4gICAgbGV0IGRpcmVjdCA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobm9ybWFsaXplUGF0aChyYXdQYXRoKSk7XG4gICAgaWYgKGRpcmVjdCBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplUGF0aChyYXdQYXRoKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgcmVsYXRpdmUgdG8gc291cmNlIGZpbGVcbiAgICByZXR1cm4gbm9ybWFsaXplUGF0aChgJHtmb2xkZXJ9LyR7cmF3UGF0aH1gKTtcbiAgfVxuXG4gIGFzeW5jIHVwbG9hZFB1Ymxpc2hBc3NldHMoXG4gICAgYXNzZXRzOiB7IGZpbGVuYW1lOiBzdHJpbmc7IGJhc2U2NDogc3RyaW5nOyBjb250ZW50VHlwZTogc3RyaW5nIH1bXVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoYXNzZXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFRyeSBiYXRjaCB1cGxvYWQgdG8gcHVibGlzaC1hc3NldHMgZW5kcG9pbnQgZmlyc3RcbiAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwaSgnL2FwaS9zeW5jL3B1Ymxpc2gtYXNzZXRzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhc3NldHMgfSksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS53YXJuKCdbUHVibGlzaEVuZ2luZV0gQmF0Y2ggYXNzZXQgdXBsb2FkIGZhaWxlZCwgZmFsbGluZyBiYWNrIHRvIGluZGl2aWR1YWwgdXBsb2FkczonLCBlcnIubWVzc2FnZSk7XG4gICAgICAvLyBGYWxsYmFjayB0byBpbmRpdmlkdWFsIHVwbG9hZHNcbiAgICAgIGZvciAoY29uc3QgYXNzZXQgb2YgYXNzZXRzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnVwbG9hZEZpbGUoXG4gICAgICAgICAgYGltYWdlcy8ke2Fzc2V0LmZpbGVuYW1lfWAsXG4gICAgICAgICAgYXNzZXQuYmFzZTY0LFxuICAgICAgICAgIGFzc2V0LmNvbnRlbnRUeXBlLFxuICAgICAgICAgICdiYXNlNjQnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBGcm9udG1hdHRlciAmIG1ldGFkYXRhID09PT09PT09PT1cblxuICBnZXRQdWJsaXNoS2V5KGZpbGU6IFRGaWxlLCBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgYW55Pik6IHN0cmluZyB7XG4gICAgaWYgKGZyb250bWF0dGVyLnBlcm1hbGluaykge1xuICAgICAgcmV0dXJuIGZyb250bWF0dGVyLnBlcm1hbGluaztcbiAgICB9XG4gICAgaWYgKGZyb250bWF0dGVyLnNsdWcpIHtcbiAgICAgIHJldHVybiBmcm9udG1hdHRlci5zbHVnO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZS5iYXNlbmFtZVxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgIC5yZXBsYWNlKC9bXlxcdy1dL2csICcnKTtcbiAgfVxuXG4gIGJ1aWxkUHVibGlzaEZyb250bWF0dGVyKGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICBjb25zdCBwaWNrID0gKGtleTogc3RyaW5nLCB0YXJnZXRLZXk/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChmcm9udG1hdHRlcltrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVzdWx0W3RhcmdldEtleSB8fCBrZXldID0gZnJvbnRtYXR0ZXJba2V5XTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcGljaygndGl0bGUnKTtcbiAgICBwaWNrKCdzbHVnJyk7XG4gICAgcGljaygncGVybWFsaW5rJyk7XG4gICAgcGljaygnZGVzY3JpcHRpb24nKTtcbiAgICBwaWNrKCd0YWdzJyk7XG4gICAgcGljaygnZGF0ZScpO1xuICAgIHBpY2soJ2NvdmVyJyk7XG4gICAgcGljaygnaGlkZScpO1xuICAgIHBpY2soJ2Nzc2NsYXNzZXMnKTtcbiAgICBwaWNrKCdwdWJsaXNoJyk7XG4gICAgcGljaygnc3VtbWFyeScpO1xuICAgIHBpY2soJ2NvdmVySW1hZ2UnLCAnY292ZXInKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBleHRyYWN0SGVhZGluZ3MoY29udGVudDogc3RyaW5nKTogeyBsZXZlbDogbnVtYmVyOyB0ZXh0OiBzdHJpbmcgfVtdIHtcbiAgICBjb25zdCBoZWFkaW5nczogeyBsZXZlbDogbnVtYmVyOyB0ZXh0OiBzdHJpbmcgfVtdID0gW107XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KCdcXG4nKTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXigjezEsNn0pXFxzKyguKykkLyk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgaGVhZGluZ3MucHVzaCh7IGxldmVsOiBtYXRjaFsxXS5sZW5ndGgsIHRleHQ6IG1hdGNoWzJdLnRyaW0oKSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhlYWRpbmdzO1xuICB9XG5cbiAgZXh0cmFjdE91dGdvaW5nTGlua3MoY29udGVudDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxpbmtzOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vIE1hcmtkb3duIGxpbmtzXG4gICAgY29uc3QgbWRMaW5rUmVnZXggPSAvXFxbKFteXFxdXSspXFxdXFwoKFteKV0rKVxcKS9nO1xuICAgIGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbDtcbiAgICB3aGlsZSAoKG1hdGNoID0gbWRMaW5rUmVnZXguZXhlYyhjb250ZW50KSkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHVybCA9IG1hdGNoWzJdO1xuICAgICAgaWYgKCF1cmwuc3RhcnRzV2l0aCgnaHR0cCcpICYmICF1cmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxpbmtzLnB1c2goZGVjb2RlVVJJQ29tcG9uZW50KHVybC5zcGxpdCgnIycpWzBdKSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFdpa2lsaW5rc1xuICAgIGNvbnN0IHdpa2lMaW5rUmVnZXggPSAvXFxbXFxbKFteXFxdfF0rKSg/OlxcfFteXFxdXSspP1xcXVxcXS9nO1xuICAgIHdoaWxlICgobWF0Y2ggPSB3aWtpTGlua1JlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBsaW5rcy5wdXNoKG1hdGNoWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5uZXcgU2V0KGxpbmtzKV07XG4gIH1cblxuICAvLyA9PT09PT09PT09IEluZGV4IGdlbmVyYXRpb24gPT09PT09PT09PVxuXG4gIGFzeW5jIGdlbmVyYXRlQW5kVXBsb2FkSW5kZXgoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VydmVyVXJsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsO1xuICAgIGNvbnN0IGVudHJpZXM6IFB1Ymxpc2hJbmRleEVudHJ5W10gPSBbXTtcblxuICAgIC8vIENvbXB1dGUgYmFja2xpbmsgY291bnRzXG4gICAgY29uc3QgYmFja2xpbmtDb3VudHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtwYXRoLCBzdGF0ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5wdWJsaXNoU3RhdGUpKSB7XG4gICAgICBpZiAoc3RhdGUuc3RhdHVzID09PSAncHVibGlzaGVkJyB8fCBzdGF0ZS5zdGF0dXMgPT09ICdtb2RpZmllZCcpIHtcbiAgICAgICAgYmFja2xpbmtDb3VudHNbcGF0aF0gPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoKGYpID0+IGYucGF0aC5lbmRzV2l0aCgnLm1kJykpKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF07XG4gICAgICBpZiAoIXN0YXRlIHx8IChzdGF0ZS5zdGF0dXMgIT09ICdwdWJsaXNoZWQnICYmIHN0YXRlLnN0YXR1cyAhPT0gJ21vZGlmaWVkJykpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBtYXR0ZXIoY29udGVudCk7XG4gICAgICBjb25zdCBvdXRnb2luZyA9IHRoaXMuZXh0cmFjdE91dGdvaW5nTGlua3MoY29udGVudCk7XG5cbiAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgIHBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgc3RhdHVzOiBzdGF0ZS5zdGF0dXMsXG4gICAgICAgIGZyb250bWF0dGVyOiB0aGlzLmJ1aWxkUHVibGlzaEZyb250bWF0dGVyKHBhcnNlZC5kYXRhKSxcbiAgICAgICAgaGVhZGluZ3M6IHRoaXMuZXh0cmFjdEhlYWRpbmdzKGNvbnRlbnQpLFxuICAgICAgICBvdXRnb2luZ0xpbmtzOiBvdXRnb2luZyxcbiAgICAgICAgYmFja2xpbmtzOiBiYWNrbGlua0NvdW50c1tmaWxlLnBhdGhdIHx8IDAsXG4gICAgICAgIGxhc3RQdWJsaXNoZWRBdDogc3RhdGUubGFzdFB1Ymxpc2hlZEF0LFxuICAgICAgICByZW1vdGVVcmw6IHN0YXRlLnJlbW90ZVVybCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDb3VudCBiYWNrbGlua3MgdG8gb3RoZXIgcHVibGlzaGVkIGZpbGVzXG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2Ygb3V0Z29pbmcpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnJlc29sdmVMaW5rUGF0aChsaW5rLCBmaWxlKTtcbiAgICAgICAgaWYgKHJlc29sdmVkICYmIGJhY2tsaW5rQ291bnRzW3Jlc29sdmVkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYmFja2xpbmtDb3VudHNbcmVzb2x2ZWRdKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWNvbXB1dGUgd2l0aCBiYWNrbGluayBjb3VudHNcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGVudHJ5LmJhY2tsaW5rcyA9IGJhY2tsaW5rQ291bnRzW2VudHJ5LnBhdGhdIHx8IDA7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXg6IFB1Ymxpc2hJbmRleCA9IHtcbiAgICAgIGdlbmVyYXRlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICBzaXRlVXJsOiBzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvJC8sICcnKSxcbiAgICAgIGVudHJpZXMsXG4gICAgfTtcblxuICAgIC8vIFNhdmUgbG9jYWwgaW5kZXhcbiAgICBjb25zdCBpbmRleEpzb24gPSBKU09OLnN0cmluZ2lmeShpbmRleCwgbnVsbCwgMik7XG4gICAgYXdhaXQgdGhpcy5zYXZlTG9jYWxJbmRleChpbmRleEpzb24pO1xuXG4gICAgLy8gVXBsb2FkIHRvIHJlbW90ZVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcGkoJy9hcGkvc3luYy9wdWJsaXNoLWluZGV4Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbmRleCB9KSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbUHVibGlzaEVuZ2luZV0gRmFpbGVkIHRvIHVwbG9hZCBwdWJsaXNoIGluZGV4OicsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzYXZlTG9jYWxJbmRleChpbmRleEpzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBsdWdpbkRpciA9IHRoaXMucGx1Z2luLm1hbmlmZXN0LmRpcjtcbiAgICBpZiAocGx1Z2luRGlyKSB7XG4gICAgICBjb25zdCBpbmRleFBhdGggPSBub3JtYWxpemVQYXRoKGAke3BsdWdpbkRpcn0vcHVibGlzaC1pbmRleC5qc29uYCk7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuYWRhcHRlci53cml0ZShpbmRleFBhdGgsIGluZGV4SnNvbik7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdbUHVibGlzaEVuZ2luZV0gRmFpbGVkIHRvIHdyaXRlIGxvY2FsIGluZGV4OicsIGVyci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNvbHZlTGlua1BhdGgobGluazogc3RyaW5nLCBzb3VyY2VGaWxlOiBURmlsZSk6IHN0cmluZyB8IG51bGwge1xuICAgIC8vIFRyeSBkaXJlY3QgcGF0aFxuICAgIGNvbnN0IGRpcmVjdCA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobm9ybWFsaXplUGF0aChsaW5rICsgJy5tZCcpKTtcbiAgICBpZiAoZGlyZWN0IGluc3RhbmNlb2YgVEZpbGUpIHJldHVybiBkaXJlY3QucGF0aDtcblxuICAgIC8vIFRyeSByZWxhdGl2ZSB0byBzb3VyY2VcbiAgICBjb25zdCBmb2xkZXIgPSBzb3VyY2VGaWxlLnBhcmVudD8ucGF0aCB8fCAnJztcbiAgICBjb25zdCByZWxhdGl2ZSA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobm9ybWFsaXplUGF0aChgJHtmb2xkZXJ9LyR7bGlua30ubWRgKSk7XG4gICAgaWYgKHJlbGF0aXZlIGluc3RhbmNlb2YgVEZpbGUpIHJldHVybiByZWxhdGl2ZS5wYXRoO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB1cGRhdGVTdGF0dXNCYXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnB1Ymxpc2hTdGF0dXNCYXJFbCkgcmV0dXJuO1xuICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLmdldFBlbmRpbmdGaWxlcygpO1xuICAgIGlmIChwZW5kaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucHVibGlzaFN0YXR1c0JhckVsLnNldFRleHQoYFB1Ymxpc2g6ICR7cGVuZGluZy5sZW5ndGh9IHBlbmRpbmdgKTtcbiAgICAgIHRoaXMucHVibGlzaFN0YXR1c0JhckVsLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdWJsaXNoU3RhdHVzQmFyRWwuc2V0VGV4dCgnUHVibGlzaDogdXAgdG8gZGF0ZScpO1xuICAgICAgdGhpcy5wdWJsaXNoU3RhdHVzQmFyRWwuc2hvdygpO1xuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLGtDQUFBQSxVQUFBQyxTQUFBO0FBQUEsUUFBSSxXQUFXLE9BQU8sVUFBVTtBQUVoQyxJQUFBQSxRQUFPLFVBQVUsU0FBUyxPQUFPLEtBQUs7QUFDcEMsVUFBSSxRQUFRO0FBQVEsZUFBTztBQUMzQixVQUFJLFFBQVE7QUFBTSxlQUFPO0FBRXpCLFVBQUksT0FBTyxPQUFPO0FBQ2xCLFVBQUksU0FBUztBQUFXLGVBQU87QUFDL0IsVUFB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a0I7QUFBQSxFQUMvQjtBQUFBLEVBRUEsV0FBVztBQWp6QmI7QUFrekJJLFlBQVEsSUFBSSxxQ0FBcUM7QUFDakQsZUFBSyxlQUFMLG1CQUFpQjtBQUNqQixlQUFLLGNBQUwsbUJBQWdCO0FBQ2hCLFlBQVEsSUFBSSxpQ0FBaUM7QUFBQSxFQUMvQztBQUNGOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgInN0ciIsICJzdHJpbmciLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAicmVxdWlyZV9qc195YW1sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInlhbWwiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAiZXhwb3J0cyIsICJzdHIiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZW5naW5lcyIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJzdHIiLCAibWF0dGVyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJzdHIiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJlbmdpbmVzIiwgInBhcnNlIiwgIm1hdHRlciIsICJvcHRpb25zIiwgInN0ciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X2dyYXlfbWF0dGVyIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJtYXR0ZXIiLCAib3B0aW9ucyIsICJtYXR0ZXIiXQp9Cg==
