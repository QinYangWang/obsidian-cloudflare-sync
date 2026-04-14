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
    new import_obsidian.Setting(containerEl).setName("Exclude Patterns").setDesc("Comma-separated glob patterns to exclude (e.g., *.tmp, _drafts/**, *.excalidraw)").addText(
      (text) => text.setPlaceholder("*.tmp, _drafts/**, *.excalidraw").setValue((this.plugin.settings.excludePatterns || []).join(", ")).onChange(async (value) => {
        this.plugin.settings.excludePatterns = value.split(",").map((s) => s.trim()).filter(Boolean);
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
        excludePatterns: [],
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
    for (const pattern of this.settings.excludePatterns || []) {
      if (matchesGlob(filePath, pattern)) {
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
function matchesGlob(filePath, pattern) {
  const parts = pattern.split("/");
  const pathParts = filePath.split("/");
  if (parts.length === 1 && !pattern.includes("/")) {
    const fileName = pathParts[pathParts.length - 1];
    return globToRegex(pattern).test(fileName);
  }
  return globToRegex(pattern).test(filePath);
}
function globToRegex(pattern) {
  let regex = "";
  let i = 0;
  while (i < pattern.length) {
    const c = pattern[i];
    if (c === "*") {
      if (pattern[i + 1] === "*") {
        regex += ".*";
        i += 2;
      } else {
        regex += "[^/]*";
        i++;
      }
    } else if (c === "?") {
      regex += "[^/]";
      i++;
    } else if (c === ".") {
      regex += "\\.";
      i++;
    } else {
      regex += c;
      i++;
    }
  }
  return new RegExp(`^${regex}$`);
}
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2tpbmQtb2YvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2lzLWV4dGVuZGFibGUvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9zZWN0aW9uLW1hdHRlci9pbmRleC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvY29tbW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9leGNlcHRpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL21hcmsuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9zdHIuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2VxLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL21hcC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL251bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYm9vbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9pbnQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvZmxvYXQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9qc29uLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvY29yZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS90aW1lc3RhbXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvbWVyZ2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvYmluYXJ5LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL29tYXAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvcGFpcnMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvc2V0LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC9zY2hlbWEvZGVmYXVsdF9zYWZlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC90eXBlL2pzL3VuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvdHlwZS9qcy9yZWdleHAuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3R5cGUvanMvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL25vZGVfbW9kdWxlcy9qcy15YW1sL2xpYi9qcy15YW1sL2xvYWRlci5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvbGliL2pzLXlhbWwvZHVtcGVyLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9ub2RlX21vZHVsZXMvanMteWFtbC9saWIvanMteWFtbC5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbm9kZV9tb2R1bGVzL2pzLXlhbWwvaW5kZXguanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9lbmdpbmVzLmpzIiwgIm5vZGVfbW9kdWxlcy9zdHJpcC1ib20tc3RyaW5nL2luZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvdXRpbHMuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi9kZWZhdWx0cy5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2VuZ2luZS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL3N0cmluZ2lmeS5qcyIsICJub2RlX21vZHVsZXMvZ3JheS1tYXR0ZXIvbGliL2V4Y2VycHQuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2xpYi90by1maWxlLmpzIiwgIm5vZGVfbW9kdWxlcy9ncmF5LW1hdHRlci9saWIvcGFyc2UuanMiLCAibm9kZV9tb2R1bGVzL2dyYXktbWF0dGVyL2luZGV4LmpzIiwgInNyYy9tYWluLnRzIiwgInNyYy9zZXR0aW5ncy50cyIsICJzcmMvc3luYy1lbmdpbmUudHMiLCAic3JjL3N0YXR1cy1iYXIudHMiLCAic3JjL2NvbmZsaWN0LW1vZGFsLnRzIiwgInNyYy9wdWJsaXNoLWVuZ2luZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuICdib29sZWFuJztcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gJ3N0cmluZyc7XG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHJldHVybiAnc3ltYm9sJztcbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaXNHZW5lcmF0b3JGbih2YWwpID8gJ2dlbmVyYXRvcmZ1bmN0aW9uJyA6ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHJldHVybiAnYnVmZmVyJztcbiAgaWYgKGlzQXJndW1lbnRzKHZhbCkpIHJldHVybiAnYXJndW1lbnRzJztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgaWYgKGlzUmVnZXhwKHZhbCkpIHJldHVybiAncmVnZXhwJztcblxuICBzd2l0Y2ggKGN0b3JOYW1lKHZhbCkpIHtcbiAgICBjYXNlICdTeW1ib2wnOiByZXR1cm4gJ3N5bWJvbCc7XG4gICAgY2FzZSAnUHJvbWlzZSc6IHJldHVybiAncHJvbWlzZSc7XG5cbiAgICAvLyBTZXQsIE1hcCwgV2Vha1NldCwgV2Vha01hcFxuICAgIGNhc2UgJ1dlYWtNYXAnOiByZXR1cm4gJ3dlYWttYXAnO1xuICAgIGNhc2UgJ1dlYWtTZXQnOiByZXR1cm4gJ3dlYWtzZXQnO1xuICAgIGNhc2UgJ01hcCc6IHJldHVybiAnbWFwJztcbiAgICBjYXNlICdTZXQnOiByZXR1cm4gJ3NldCc7XG5cbiAgICAvLyA4LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQ4QXJyYXknOiByZXR1cm4gJ2ludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhBcnJheSc6IHJldHVybiAndWludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhDbGFtcGVkQXJyYXknOiByZXR1cm4gJ3VpbnQ4Y2xhbXBlZGFycmF5JztcblxuICAgIC8vIDE2LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQxNkFycmF5JzogcmV0dXJuICdpbnQxNmFycmF5JztcbiAgICBjYXNlICdVaW50MTZBcnJheSc6IHJldHVybiAndWludDE2YXJyYXknO1xuXG4gICAgLy8gMzItYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDMyQXJyYXknOiByZXR1cm4gJ2ludDMyYXJyYXknO1xuICAgIGNhc2UgJ1VpbnQzMkFycmF5JzogcmV0dXJuICd1aW50MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQzMkFycmF5JzogcmV0dXJuICdmbG9hdDMyYXJyYXknO1xuICAgIGNhc2UgJ0Zsb2F0NjRBcnJheSc6IHJldHVybiAnZmxvYXQ2NGFycmF5JztcbiAgfVxuXG4gIGlmIChpc0dlbmVyYXRvck9iaih2YWwpKSB7XG4gICAgcmV0dXJuICdnZW5lcmF0b3InO1xuICB9XG5cbiAgLy8gTm9uLXBsYWluIG9iamVjdHNcbiAgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzogcmV0dXJuICdvYmplY3QnO1xuICAgIC8vIGl0ZXJhdG9yc1xuICAgIGNhc2UgJ1tvYmplY3QgTWFwIEl0ZXJhdG9yXSc6IHJldHVybiAnbWFwaXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc6IHJldHVybiAnc2V0aXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nIEl0ZXJhdG9yXSc6IHJldHVybiAnc3RyaW5naXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXkgSXRlcmF0b3JdJzogcmV0dXJuICdhcnJheWl0ZXJhdG9yJztcbiAgfVxuXG4gIC8vIG90aGVyXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59O1xuXG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCAodHlwZW9mIHZhbC5tZXNzYWdlID09PSAnc3RyaW5nJyAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5zdGFja1RyYWNlTGltaXQgPT09ICdudW1iZXInKTtcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdleHAodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC5mbGFncyA9PT0gJ3N0cmluZydcbiAgICAmJiB0eXBlb2YgdmFsLmlnbm9yZUNhc2UgPT09ICdib29sZWFuJ1xuICAgICYmIHR5cGVvZiB2YWwubXVsdGlsaW5lID09PSAnYm9vbGVhbidcbiAgICAmJiB0eXBlb2YgdmFsLmdsb2JhbCA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZuKG5hbWUsIHZhbCkge1xuICByZXR1cm4gY3Rvck5hbWUobmFtZSkgPT09ICdHZW5lcmF0b3JGdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yT2JqKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC50aHJvdyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiB2YWwucmV0dXJuID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5uZXh0ID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc0FyZ3VtZW50cyh2YWwpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHZhbC5sZW5ndGggPT09ICdudW1iZXInICYmIHR5cGVvZiB2YWwuY2FsbGVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjYWxsZWUnKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogSWYgeW91IG5lZWQgdG8gc3VwcG9ydCBTYWZhcmkgNS03ICg4LTEwIHlyLW9sZCBicm93c2VyKSxcbiAqIHRha2UgYSBsb29rIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvaXMtYnVmZmVyXG4gKi9cblxuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIGlmICh2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiLyohXG4gKiBpcy1leHRlbmRhYmxlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1leHRlbmRhYmxlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgSm9uIFNjaGxpbmtlcnQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXh0ZW5kYWJsZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbFxuICAgICYmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpcy1leHRlbmRhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKG8vKiwgb2JqZWN0cyovKSB7XG4gIGlmICghaXNPYmplY3QobykpIHsgbyA9IHt9OyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGFzc2lnbihvLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIHR5cGVPZiA9IHJlcXVpcmUoJ2tpbmQtb2YnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQtc2hhbGxvdycpO1xuXG4vKipcbiAqIFBhcnNlIHNlY3Rpb25zIGluIGBpbnB1dGAgd2l0aCB0aGUgZ2l2ZW4gYG9wdGlvbnNgLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgc2VjdGlvbnMgPSByZXF1aXJlKCd7JT0gbmFtZSAlfScpO1xuICogdmFyIHJlc3VsdCA9IHNlY3Rpb25zKGlucHV0LCBvcHRpb25zKTtcbiAqIC8vIHsgY29udGVudDogJ0NvbnRlbnQgYmVmb3JlIHNlY3Rpb25zJywgc2VjdGlvbnM6IFtdIH1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd8QnVmZmVyfE9iamVjdH0gYGlucHV0YCBJZiBpbnB1dCBpcyBhbiBvYmplY3QsIGl0J3MgYGNvbnRlbnRgIHByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgb3IgYnVmZmVyLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhIGBjb250ZW50YCBzdHJpbmcgYW5kIGFuIGFycmF5IG9mIGBzZWN0aW9uc2Agb2JqZWN0cy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbnB1dCwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zID0geyBwYXJzZTogb3B0aW9ucyB9O1xuICB9XG5cbiAgdmFyIGZpbGUgPSB0b09iamVjdChpbnB1dCk7XG4gIHZhciBkZWZhdWx0cyA9IHtzZWN0aW9uX2RlbGltaXRlcjogJy0tLScsIHBhcnNlOiBpZGVudGl0eX07XG4gIHZhciBvcHRzID0gZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gIHZhciBkZWxpbSA9IG9wdHMuc2VjdGlvbl9kZWxpbWl0ZXI7XG4gIHZhciBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdCgvXFxyP1xcbi8pO1xuICB2YXIgc2VjdGlvbnMgPSBudWxsO1xuICB2YXIgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oKTtcbiAgdmFyIGNvbnRlbnQgPSBbXTtcbiAgdmFyIHN0YWNrID0gW107XG5cbiAgZnVuY3Rpb24gaW5pdFNlY3Rpb25zKHZhbCkge1xuICAgIGZpbGUuY29udGVudCA9IHZhbDtcbiAgICBzZWN0aW9ucyA9IFtdO1xuICAgIGNvbnRlbnQgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlU2VjdGlvbih2YWwpIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoKSB7XG4gICAgICBzZWN0aW9uLmtleSA9IGdldEtleShzdGFja1swXSwgZGVsaW0pO1xuICAgICAgc2VjdGlvbi5jb250ZW50ID0gdmFsO1xuICAgICAgb3B0cy5wYXJzZShzZWN0aW9uLCBzZWN0aW9ucyk7XG4gICAgICBzZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgc2VjdGlvbiA9IGNyZWF0ZVNlY3Rpb24oKTtcbiAgICAgIGNvbnRlbnQgPSBbXTtcbiAgICAgIHN0YWNrID0gW107XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsaW5lID0gbGluZXNbaV07XG4gICAgdmFyIGxlbiA9IHN0YWNrLmxlbmd0aDtcbiAgICB2YXIgbG4gPSBsaW5lLnRyaW0oKTtcblxuICAgIGlmIChpc0RlbGltaXRlcihsbiwgZGVsaW0pKSB7XG4gICAgICBpZiAobG4ubGVuZ3RoID09PSAzICYmIGkgIT09IDApIHtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCB8fCBsZW4gPT09IDIpIHtcbiAgICAgICAgICBjb250ZW50LnB1c2gobGluZSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgc3RhY2sucHVzaChsbik7XG4gICAgICAgIHNlY3Rpb24uZGF0YSA9IGNvbnRlbnQuam9pbignXFxuJyk7XG4gICAgICAgIGNvbnRlbnQgPSBbXTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICBpbml0U2VjdGlvbnMoY29udGVudC5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZW4gPT09IDIpIHtcbiAgICAgICAgY2xvc2VTZWN0aW9uKGNvbnRlbnQuam9pbignXFxuJykpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wdXNoKGxuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGNvbnRlbnQucHVzaChsaW5lKTtcbiAgfVxuXG4gIGlmIChzZWN0aW9ucyA9PT0gbnVsbCkge1xuICAgIGluaXRTZWN0aW9ucyhjb250ZW50LmpvaW4oJ1xcbicpKTtcbiAgfSBlbHNlIHtcbiAgICBjbG9zZVNlY3Rpb24oY29udGVudC5qb2luKCdcXG4nKSk7XG4gIH1cblxuICBmaWxlLnNlY3Rpb25zID0gc2VjdGlvbnM7XG4gIHJldHVybiBmaWxlO1xufTtcblxuZnVuY3Rpb24gaXNEZWxpbWl0ZXIobGluZSwgZGVsaW0pIHtcbiAgaWYgKGxpbmUuc2xpY2UoMCwgZGVsaW0ubGVuZ3RoKSAhPT0gZGVsaW0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGxpbmUuY2hhckF0KGRlbGltLmxlbmd0aCArIDEpID09PSBkZWxpbS5zbGljZSgtMSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KGlucHV0KSB7XG4gIGlmICh0eXBlT2YoaW5wdXQpICE9PSAnb2JqZWN0Jykge1xuICAgIGlucHV0ID0geyBjb250ZW50OiBpbnB1dCB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dC5jb250ZW50ICE9PSAnc3RyaW5nJyAmJiAhaXNCdWZmZXIoaW5wdXQuY29udGVudCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBhIGJ1ZmZlciBvciBzdHJpbmcnKTtcbiAgfVxuXG4gIGlucHV0LmNvbnRlbnQgPSBpbnB1dC5jb250ZW50LnRvU3RyaW5nKCk7XG4gIGlucHV0LnNlY3Rpb25zID0gW107XG4gIHJldHVybiBpbnB1dDtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5KHZhbCwgZGVsaW0pIHtcbiAgcmV0dXJuIHZhbCA/IHZhbC5zbGljZShkZWxpbS5sZW5ndGgpLnRyaW0oKSA6ICcnO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWN0aW9uKCkge1xuICByZXR1cm4geyBrZXk6ICcnLCBkYXRhOiAnJywgY29udGVudDogJycgfTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkodmFsKSB7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICBpZiAodmFsICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICIndXNlIHN0cmljdCc7XG5cblxuZnVuY3Rpb24gaXNOb3RoaW5nKHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHx8IChzdWJqZWN0ID09PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnKSAmJiAoc3ViamVjdCAhPT0gbnVsbCk7XG59XG5cblxuZnVuY3Rpb24gdG9BcnJheShzZXF1ZW5jZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShzZXF1ZW5jZSkpIHJldHVybiBzZXF1ZW5jZTtcbiAgZWxzZSBpZiAoaXNOb3RoaW5nKHNlcXVlbmNlKSkgcmV0dXJuIFtdO1xuXG4gIHJldHVybiBbIHNlcXVlbmNlIF07XG59XG5cblxuZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBpbmRleCwgbGVuZ3RoLCBrZXksIHNvdXJjZUtleXM7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHNvdXJjZUtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAga2V5ID0gc291cmNlS2V5c1tpbmRleF07XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cblxuZnVuY3Rpb24gcmVwZWF0KHN0cmluZywgY291bnQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnLCBjeWNsZTtcblxuICBmb3IgKGN5Y2xlID0gMDsgY3ljbGUgPCBjb3VudDsgY3ljbGUgKz0gMSkge1xuICAgIHJlc3VsdCArPSBzdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKG51bWJlcikge1xuICByZXR1cm4gKG51bWJlciA9PT0gMCkgJiYgKE51bWJlci5ORUdBVElWRV9JTkZJTklUWSA9PT0gMSAvIG51bWJlcik7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuaXNOb3RoaW5nICAgICAgPSBpc05vdGhpbmc7XG5tb2R1bGUuZXhwb3J0cy5pc09iamVjdCAgICAgICA9IGlzT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMudG9BcnJheSAgICAgICAgPSB0b0FycmF5O1xubW9kdWxlLmV4cG9ydHMucmVwZWF0ICAgICAgICAgPSByZXBlYXQ7XG5tb2R1bGUuZXhwb3J0cy5pc05lZ2F0aXZlWmVybyA9IGlzTmVnYXRpdmVaZXJvO1xubW9kdWxlLmV4cG9ydHMuZXh0ZW5kICAgICAgICAgPSBleHRlbmQ7XG4iLCAiLy8gWUFNTCBlcnJvciBjbGFzcy4gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NDU4OTg0XG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBZQU1MRXhjZXB0aW9uKHJlYXNvbiwgbWFyaykge1xuICAvLyBTdXBlciBjb25zdHJ1Y3RvclxuICBFcnJvci5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubmFtZSA9ICdZQU1MRXhjZXB0aW9uJztcbiAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gIHRoaXMubWFyayA9IG1hcms7XG4gIHRoaXMubWVzc2FnZSA9ICh0aGlzLnJlYXNvbiB8fCAnKHVua25vd24gcmVhc29uKScpICsgKHRoaXMubWFyayA/ICcgJyArIHRoaXMubWFyay50b1N0cmluZygpIDogJycpO1xuXG4gIC8vIEluY2x1ZGUgc3RhY2sgdHJhY2UgaW4gZXJyb3Igb2JqZWN0XG4gIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgIC8vIENocm9tZSBhbmQgTm9kZUpTXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gRkYsIElFIDEwKyBhbmQgU2FmYXJpIDYrLiBGYWxsYmFjayBmb3Igb3RoZXJzXG4gICAgdGhpcy5zdGFjayA9IChuZXcgRXJyb3IoKSkuc3RhY2sgfHwgJyc7XG4gIH1cbn1cblxuXG4vLyBJbmhlcml0IGZyb20gRXJyb3JcbllBTUxFeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuWUFNTEV4Y2VwdGlvbi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBZQU1MRXhjZXB0aW9uO1xuXG5cbllBTUxFeGNlcHRpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoY29tcGFjdCkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5uYW1lICsgJzogJztcblxuICByZXN1bHQgKz0gdGhpcy5yZWFzb24gfHwgJyh1bmtub3duIHJlYXNvbiknO1xuXG4gIGlmICghY29tcGFjdCAmJiB0aGlzLm1hcmspIHtcbiAgICByZXN1bHQgKz0gJyAnICsgdGhpcy5tYXJrLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFlBTUxFeGNlcHRpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBjb21tb24gPSByZXF1aXJlKCcuL2NvbW1vbicpO1xuXG5cbmZ1bmN0aW9uIE1hcmsobmFtZSwgYnVmZmVyLCBwb3NpdGlvbiwgbGluZSwgY29sdW1uKSB7XG4gIHRoaXMubmFtZSAgICAgPSBuYW1lO1xuICB0aGlzLmJ1ZmZlciAgID0gYnVmZmVyO1xuICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIHRoaXMubGluZSAgICAgPSBsaW5lO1xuICB0aGlzLmNvbHVtbiAgID0gY29sdW1uO1xufVxuXG5cbk1hcmsucHJvdG90eXBlLmdldFNuaXBwZXQgPSBmdW5jdGlvbiBnZXRTbmlwcGV0KGluZGVudCwgbWF4TGVuZ3RoKSB7XG4gIHZhciBoZWFkLCBzdGFydCwgdGFpbCwgZW5kLCBzbmlwcGV0O1xuXG4gIGlmICghdGhpcy5idWZmZXIpIHJldHVybiBudWxsO1xuXG4gIGluZGVudCA9IGluZGVudCB8fCA0O1xuICBtYXhMZW5ndGggPSBtYXhMZW5ndGggfHwgNzU7XG5cbiAgaGVhZCA9ICcnO1xuICBzdGFydCA9IHRoaXMucG9zaXRpb247XG5cbiAgd2hpbGUgKHN0YXJ0ID4gMCAmJiAnXFx4MDBcXHJcXG5cXHg4NVxcdTIwMjhcXHUyMDI5Jy5pbmRleE9mKHRoaXMuYnVmZmVyLmNoYXJBdChzdGFydCAtIDEpKSA9PT0gLTEpIHtcbiAgICBzdGFydCAtPSAxO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uIC0gc3RhcnQgPiAobWF4TGVuZ3RoIC8gMiAtIDEpKSB7XG4gICAgICBoZWFkID0gJyAuLi4gJztcbiAgICAgIHN0YXJ0ICs9IDU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB0YWlsID0gJyc7XG4gIGVuZCA9IHRoaXMucG9zaXRpb247XG5cbiAgd2hpbGUgKGVuZCA8IHRoaXMuYnVmZmVyLmxlbmd0aCAmJiAnXFx4MDBcXHJcXG5cXHg4NVxcdTIwMjhcXHUyMDI5Jy5pbmRleE9mKHRoaXMuYnVmZmVyLmNoYXJBdChlbmQpKSA9PT0gLTEpIHtcbiAgICBlbmQgKz0gMTtcbiAgICBpZiAoZW5kIC0gdGhpcy5wb3NpdGlvbiA+IChtYXhMZW5ndGggLyAyIC0gMSkpIHtcbiAgICAgIHRhaWwgPSAnIC4uLiAnO1xuICAgICAgZW5kIC09IDU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzbmlwcGV0ID0gdGhpcy5idWZmZXIuc2xpY2Uoc3RhcnQsIGVuZCk7XG5cbiAgcmV0dXJuIGNvbW1vbi5yZXBlYXQoJyAnLCBpbmRlbnQpICsgaGVhZCArIHNuaXBwZXQgKyB0YWlsICsgJ1xcbicgK1xuICAgICAgICAgY29tbW9uLnJlcGVhdCgnICcsIGluZGVudCArIHRoaXMucG9zaXRpb24gLSBzdGFydCArIGhlYWQubGVuZ3RoKSArICdeJztcbn07XG5cblxuTWFyay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhjb21wYWN0KSB7XG4gIHZhciBzbmlwcGV0LCB3aGVyZSA9ICcnO1xuXG4gIGlmICh0aGlzLm5hbWUpIHtcbiAgICB3aGVyZSArPSAnaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiICc7XG4gIH1cblxuICB3aGVyZSArPSAnYXQgbGluZSAnICsgKHRoaXMubGluZSArIDEpICsgJywgY29sdW1uICcgKyAodGhpcy5jb2x1bW4gKyAxKTtcblxuICBpZiAoIWNvbXBhY3QpIHtcbiAgICBzbmlwcGV0ID0gdGhpcy5nZXRTbmlwcGV0KCk7XG5cbiAgICBpZiAoc25pcHBldCkge1xuICAgICAgd2hlcmUgKz0gJzpcXG4nICsgc25pcHBldDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2hlcmU7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTWFyaztcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBZQU1MRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcblxudmFyIFRZUEVfQ09OU1RSVUNUT1JfT1BUSU9OUyA9IFtcbiAgJ2tpbmQnLFxuICAncmVzb2x2ZScsXG4gICdjb25zdHJ1Y3QnLFxuICAnaW5zdGFuY2VPZicsXG4gICdwcmVkaWNhdGUnLFxuICAncmVwcmVzZW50JyxcbiAgJ2RlZmF1bHRTdHlsZScsXG4gICdzdHlsZUFsaWFzZXMnXG5dO1xuXG52YXIgWUFNTF9OT0RFX0tJTkRTID0gW1xuICAnc2NhbGFyJyxcbiAgJ3NlcXVlbmNlJyxcbiAgJ21hcHBpbmcnXG5dO1xuXG5mdW5jdGlvbiBjb21waWxlU3R5bGVBbGlhc2VzKG1hcCkge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgaWYgKG1hcCAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICAgIG1hcFtzdHlsZV0uZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgcmVzdWx0W1N0cmluZyhhbGlhcyldID0gc3R5bGU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIFR5cGUodGFnLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignVW5rbm93biBvcHRpb24gXCInICsgbmFtZSArICdcIiBpcyBtZXQgaW4gZGVmaW5pdGlvbiBvZiBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVE9ETzogQWRkIHRhZyBmb3JtYXQgY2hlY2suXG4gIHRoaXMudGFnICAgICAgICAgID0gdGFnO1xuICB0aGlzLmtpbmQgICAgICAgICA9IG9wdGlvbnNbJ2tpbmQnXSAgICAgICAgIHx8IG51bGw7XG4gIHRoaXMucmVzb2x2ZSAgICAgID0gb3B0aW9uc1sncmVzb2x2ZSddICAgICAgfHwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZTsgfTtcbiAgdGhpcy5jb25zdHJ1Y3QgICAgPSBvcHRpb25zWydjb25zdHJ1Y3QnXSAgICB8fCBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YTsgfTtcbiAgdGhpcy5pbnN0YW5jZU9mICAgPSBvcHRpb25zWydpbnN0YW5jZU9mJ10gICB8fCBudWxsO1xuICB0aGlzLnByZWRpY2F0ZSAgICA9IG9wdGlvbnNbJ3ByZWRpY2F0ZSddICAgIHx8IG51bGw7XG4gIHRoaXMucmVwcmVzZW50ICAgID0gb3B0aW9uc1sncmVwcmVzZW50J10gICAgfHwgbnVsbDtcbiAgdGhpcy5kZWZhdWx0U3R5bGUgPSBvcHRpb25zWydkZWZhdWx0U3R5bGUnXSB8fCBudWxsO1xuICB0aGlzLnN0eWxlQWxpYXNlcyA9IGNvbXBpbGVTdHlsZUFsaWFzZXMob3B0aW9uc1snc3R5bGVBbGlhc2VzJ10gfHwgbnVsbCk7XG5cbiAgaWYgKFlBTUxfTk9ERV9LSU5EUy5pbmRleE9mKHRoaXMua2luZCkgPT09IC0xKSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1Vua25vd24ga2luZCBcIicgKyB0aGlzLmtpbmQgKyAnXCIgaXMgc3BlY2lmaWVkIGZvciBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbiovXG5cbnZhciBjb21tb24gICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBZQU1MRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcbnZhciBUeXBlICAgICAgICAgID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cblxuZnVuY3Rpb24gY29tcGlsZUxpc3Qoc2NoZW1hLCBuYW1lLCByZXN1bHQpIHtcbiAgdmFyIGV4Y2x1ZGUgPSBbXTtcblxuICBzY2hlbWEuaW5jbHVkZS5mb3JFYWNoKGZ1bmN0aW9uIChpbmNsdWRlZFNjaGVtYSkge1xuICAgIHJlc3VsdCA9IGNvbXBpbGVMaXN0KGluY2x1ZGVkU2NoZW1hLCBuYW1lLCByZXN1bHQpO1xuICB9KTtcblxuICBzY2hlbWFbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudFR5cGUpIHtcbiAgICByZXN1bHQuZm9yRWFjaChmdW5jdGlvbiAocHJldmlvdXNUeXBlLCBwcmV2aW91c0luZGV4KSB7XG4gICAgICBpZiAocHJldmlvdXNUeXBlLnRhZyA9PT0gY3VycmVudFR5cGUudGFnICYmIHByZXZpb3VzVHlwZS5raW5kID09PSBjdXJyZW50VHlwZS5raW5kKSB7XG4gICAgICAgIGV4Y2x1ZGUucHVzaChwcmV2aW91c0luZGV4KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRUeXBlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGUuaW5kZXhPZihpbmRleCkgPT09IC0xO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBjb21waWxlTWFwKC8qIGxpc3RzLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHNjYWxhcjoge30sXG4gICAgICAgIHNlcXVlbmNlOiB7fSxcbiAgICAgICAgbWFwcGluZzoge30sXG4gICAgICAgIGZhbGxiYWNrOiB7fVxuICAgICAgfSwgaW5kZXgsIGxlbmd0aDtcblxuICBmdW5jdGlvbiBjb2xsZWN0VHlwZSh0eXBlKSB7XG4gICAgcmVzdWx0W3R5cGUua2luZF1bdHlwZS50YWddID0gcmVzdWx0WydmYWxsYmFjayddW3R5cGUudGFnXSA9IHR5cGU7XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBhcmd1bWVudHNbaW5kZXhdLmZvckVhY2goY29sbGVjdFR5cGUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gU2NoZW1hKGRlZmluaXRpb24pIHtcbiAgdGhpcy5pbmNsdWRlICA9IGRlZmluaXRpb24uaW5jbHVkZSAgfHwgW107XG4gIHRoaXMuaW1wbGljaXQgPSBkZWZpbml0aW9uLmltcGxpY2l0IHx8IFtdO1xuICB0aGlzLmV4cGxpY2l0ID0gZGVmaW5pdGlvbi5leHBsaWNpdCB8fCBbXTtcblxuICB0aGlzLmltcGxpY2l0LmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAodHlwZS5sb2FkS2luZCAmJiB0eXBlLmxvYWRLaW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1RoZXJlIGlzIGEgbm9uLXNjYWxhciB0eXBlIGluIHRoZSBpbXBsaWNpdCBsaXN0IG9mIGEgc2NoZW1hLiBJbXBsaWNpdCByZXNvbHZpbmcgb2Ygc3VjaCB0eXBlcyBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbiAgfSk7XG5cbiAgdGhpcy5jb21waWxlZEltcGxpY2l0ID0gY29tcGlsZUxpc3QodGhpcywgJ2ltcGxpY2l0JywgW10pO1xuICB0aGlzLmNvbXBpbGVkRXhwbGljaXQgPSBjb21waWxlTGlzdCh0aGlzLCAnZXhwbGljaXQnLCBbXSk7XG4gIHRoaXMuY29tcGlsZWRUeXBlTWFwICA9IGNvbXBpbGVNYXAodGhpcy5jb21waWxlZEltcGxpY2l0LCB0aGlzLmNvbXBpbGVkRXhwbGljaXQpO1xufVxuXG5cblNjaGVtYS5ERUZBVUxUID0gbnVsbDtcblxuXG5TY2hlbWEuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlU2NoZW1hKCkge1xuICB2YXIgc2NoZW1hcywgdHlwZXM7XG5cbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgc2NoZW1hcyA9IFNjaGVtYS5ERUZBVUxUO1xuICAgICAgdHlwZXMgPSBhcmd1bWVudHNbMF07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjpcbiAgICAgIHNjaGVtYXMgPSBhcmd1bWVudHNbMF07XG4gICAgICB0eXBlcyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdXcm9uZyBudW1iZXIgb2YgYXJndW1lbnRzIGZvciBTY2hlbWEuY3JlYXRlIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBzY2hlbWFzID0gY29tbW9uLnRvQXJyYXkoc2NoZW1hcyk7XG4gIHR5cGVzID0gY29tbW9uLnRvQXJyYXkodHlwZXMpO1xuXG4gIGlmICghc2NoZW1hcy5ldmVyeShmdW5jdGlvbiAoc2NoZW1hKSB7IHJldHVybiBzY2hlbWEgaW5zdGFuY2VvZiBTY2hlbWE7IH0pKSB7XG4gICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ1NwZWNpZmllZCBsaXN0IG9mIHN1cGVyIHNjaGVtYXMgKG9yIGEgc2luZ2xlIFNjaGVtYSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVNjaGVtYSBvYmplY3QuJyk7XG4gIH1cblxuICBpZiAoIXR5cGVzLmV2ZXJ5KGZ1bmN0aW9uICh0eXBlKSB7IHJldHVybiB0eXBlIGluc3RhbmNlb2YgVHlwZTsgfSkpIHtcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignU3BlY2lmaWVkIGxpc3Qgb2YgWUFNTCB0eXBlcyAob3IgYSBzaW5nbGUgVHlwZSBvYmplY3QpIGNvbnRhaW5zIGEgbm9uLVR5cGUgb2JqZWN0LicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEoe1xuICAgIGluY2x1ZGU6IHNjaGVtYXMsXG4gICAgZXhwbGljaXQ6IHR5cGVzXG4gIH0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzdHInLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6ICcnOyB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXEnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107IH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm1hcCcsIHtcbiAga2luZDogJ21hcHBpbmcnLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9OyB9XG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgRmFpbHNhZmUgc2NoZW1hLlxuLy8gaHR0cDovL3d3dy55YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyODAyMzQ2XG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTY2hlbWEoe1xuICBleHBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvc3RyJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9zZXEnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL21hcCcpXG4gIF1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTnVsbChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGg7XG5cbiAgcmV0dXJuIChtYXggPT09IDEgJiYgZGF0YSA9PT0gJ34nKSB8fFxuICAgICAgICAgKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ251bGwnIHx8IGRhdGEgPT09ICdOdWxsJyB8fCBkYXRhID09PSAnTlVMTCcpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc051bGwob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm51bGwnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE51bGwsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE51bGwsXG4gIHByZWRpY2F0ZTogaXNOdWxsLFxuICByZXByZXNlbnQ6IHtcbiAgICBjYW5vbmljYWw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICd+JzsgICAgfSxcbiAgICBsb3dlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdudWxsJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOVUxMJzsgfSxcbiAgICBjYW1lbGNhc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdOdWxsJzsgfVxuICB9LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJvb2xlYW4oZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ3RydWUnIHx8IGRhdGEgPT09ICdUcnVlJyB8fCBkYXRhID09PSAnVFJVRScpKSB8fFxuICAgICAgICAgKG1heCA9PT0gNSAmJiAoZGF0YSA9PT0gJ2ZhbHNlJyB8fCBkYXRhID09PSAnRmFsc2UnIHx8IGRhdGEgPT09ICdGQUxTRScpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJvb2xlYW4oZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICBkYXRhID09PSAnVHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUUlVFJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6Ym9vbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQm9vbGVhbixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQm9vbGVhbixcbiAgcHJlZGljYXRlOiBpc0Jvb2xlYW4sXG4gIHJlcHJlc2VudDoge1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ3RydWUnIDogJ2ZhbHNlJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUUlVFJyA6ICdGQUxTRSc7IH0sXG4gICAgY2FtZWxjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAnVHJ1ZScgOiAnRmFsc2UnOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoJy4uL2NvbW1vbicpO1xudmFyIFR5cGUgICA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gaXNIZXhDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKSB8fFxuICAgICAgICAgKCgweDQxLyogQSAqLyA8PSBjKSAmJiAoYyA8PSAweDQ2LyogRiAqLykpIHx8XG4gICAgICAgICAoKDB4NjEvKiBhICovIDw9IGMpICYmIChjIDw9IDB4NjYvKiBmICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzT2N0Q29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzcvKiA3ICovKSk7XG59XG5cbmZ1bmN0aW9uIGlzRGVjQ29kZShjKSB7XG4gIHJldHVybiAoKDB4MzAvKiAwICovIDw9IGMpICYmIChjIDw9IDB4MzkvKiA5ICovKSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sSW50ZWdlcihkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgaGFzRGlnaXRzID0gZmFsc2UsXG4gICAgICBjaDtcblxuICBpZiAoIW1heCkgcmV0dXJuIGZhbHNlO1xuXG4gIGNoID0gZGF0YVtpbmRleF07XG5cbiAgLy8gc2lnblxuICBpZiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnKSB7XG4gICAgY2ggPSBkYXRhWysraW5kZXhdO1xuICB9XG5cbiAgaWYgKGNoID09PSAnMCcpIHtcbiAgICAvLyAwXG4gICAgaWYgKGluZGV4ICsgMSA9PT0gbWF4KSByZXR1cm4gdHJ1ZTtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG5cbiAgICAvLyBiYXNlIDIsIGJhc2UgOCwgYmFzZSAxNlxuXG4gICAgaWYgKGNoID09PSAnYicpIHtcbiAgICAgIC8vIGJhc2UgMlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNoICE9PSAnMCcgJiYgY2ggIT09ICcxJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0RpZ2l0cyAmJiBjaCAhPT0gJ18nO1xuICAgIH1cblxuXG4gICAgaWYgKGNoID09PSAneCcpIHtcbiAgICAgIC8vIGJhc2UgMTZcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICAgIGlmICghaXNIZXhDb2RlKGRhdGEuY2hhckNvZGVBdChpbmRleCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG4gICAgLy8gYmFzZSA4XG4gICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgaWYgKCFpc09jdENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgfVxuXG4gIC8vIGJhc2UgMTAgKGV4Y2VwdCAwKSBvciBiYXNlIDYwXG5cbiAgLy8gdmFsdWUgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGBfYDtcbiAgaWYgKGNoID09PSAnXycpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICBpZiAoY2ggPT09ICc6JykgYnJlYWs7XG4gICAgaWYgKCFpc0RlY0NvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNob3VsZCBoYXZlIGRpZ2l0cyBhbmQgc2hvdWxkIG5vdCBlbmQgd2l0aCBgX2BcbiAgaWYgKCFoYXNEaWdpdHMgfHwgY2ggPT09ICdfJykgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIGlmICFiYXNlNjAgLSBkb25lO1xuICBpZiAoY2ggIT09ICc6JykgcmV0dXJuIHRydWU7XG5cbiAgLy8gYmFzZTYwIGFsbW9zdCBub3QgdXNlZCwgbm8gbmVlZHMgdG8gb3B0aW1pemVcbiAgcmV0dXJuIC9eKDpbMC01XT9bMC05XSkrJC8udGVzdChkYXRhLnNsaWNlKGluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YSwgc2lnbiA9IDEsIGNoLCBiYXNlLCBkaWdpdHMgPSBbXTtcblxuICBpZiAodmFsdWUuaW5kZXhPZignXycpICE9PSAtMSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXy9nLCAnJyk7XG4gIH1cblxuICBjaCA9IHZhbHVlWzBdO1xuXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBpZiAoY2ggPT09ICctJykgc2lnbiA9IC0xO1xuICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgY2ggPSB2YWx1ZVswXTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJzAnKSByZXR1cm4gMDtcblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ2InKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCAyKTtcbiAgICBpZiAodmFsdWVbMV0gPT09ICd4JykgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZSwgMTYpO1xuICAgIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUsIDgpO1xuICB9XG5cbiAgaWYgKHZhbHVlLmluZGV4T2YoJzonKSAhPT0gLTEpIHtcbiAgICB2YWx1ZS5zcGxpdCgnOicpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgIGRpZ2l0cy51bnNoaWZ0KHBhcnNlSW50KHYsIDEwKSk7XG4gICAgfSk7XG5cbiAgICB2YWx1ZSA9IDA7XG4gICAgYmFzZSA9IDE7XG5cbiAgICBkaWdpdHMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgdmFsdWUgKz0gKGQgKiBiYXNlKTtcbiAgICAgIGJhc2UgKj0gNjA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2lnbiAqIHZhbHVlO1xuXG4gIH1cblxuICByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGlzSW50ZWdlcihvYmplY3QpIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSkgPT09ICdbb2JqZWN0IE51bWJlcl0nICYmXG4gICAgICAgICAob2JqZWN0ICUgMSA9PT0gMCAmJiAhY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjppbnQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEludGVnZXIsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEludGVnZXIsXG4gIHByZWRpY2F0ZTogaXNJbnRlZ2VyLFxuICByZXByZXNlbnQ6IHtcbiAgICBiaW5hcnk6ICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMGInICsgb2JqLnRvU3RyaW5nKDIpIDogJy0wYicgKyBvYmoudG9TdHJpbmcoMikuc2xpY2UoMSk7IH0sXG4gICAgb2N0YWw6ICAgICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiA+PSAwID8gJzAnICArIG9iai50b1N0cmluZyg4KSA6ICctMCcgICsgb2JqLnRvU3RyaW5nKDgpLnNsaWNlKDEpOyB9LFxuICAgIGRlY2ltYWw6ICAgICBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmoudG9TdHJpbmcoMTApOyB9LFxuICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbiAgICBoZXhhZGVjaW1hbDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpIDogICctMHgnICsgb2JqLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpLnNsaWNlKDEpOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2RlY2ltYWwnLFxuICBzdHlsZUFsaWFzZXM6IHtcbiAgICBiaW5hcnk6ICAgICAgWyAyLCAgJ2JpbicgXSxcbiAgICBvY3RhbDogICAgICAgWyA4LCAgJ29jdCcgXSxcbiAgICBkZWNpbWFsOiAgICAgWyAxMCwgJ2RlYycgXSxcbiAgICBoZXhhZGVjaW1hbDogWyAxNiwgJ2hleCcgXVxuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb24gPSByZXF1aXJlKCcuLi9jb21tb24nKTtcbnZhciBUeXBlICAgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBZQU1MX0ZMT0FUX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFxuICAvLyAyLjVlNCwgMi41IGFuZCBpbnRlZ2Vyc1xuICAnXig/OlstK10/KD86MHxbMS05XVswLTlfXSopKD86XFxcXC5bMC05X10qKT8oPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAuMmU0LCAuMlxuICAvLyBzcGVjaWFsIGNhc2UsIHNlZW1zIG5vdCBmcm9tIHNwZWNcbiAgJ3xcXFxcLlswLTlfXSsoPzpbZUVdWy0rXT9bMC05XSspPycgK1xuICAvLyAyMDo1OVxuICAnfFstK10/WzAtOV1bMC05X10qKD86OlswLTVdP1swLTldKStcXFxcLlswLTlfXSonICtcbiAgLy8gLmluZlxuICAnfFstK10/XFxcXC4oPzppbmZ8SW5mfElORiknICtcbiAgLy8gLm5hblxuICAnfFxcXFwuKD86bmFufE5hTnxOQU4pKSQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxGbG9hdChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKCFZQU1MX0ZMT0FUX1BBVFRFUk4udGVzdChkYXRhKSB8fFxuICAgICAgLy8gUXVpY2sgaGFjayB0byBub3QgYWxsb3cgaW50ZWdlcnMgZW5kIHdpdGggYF9gXG4gICAgICAvLyBQcm9iYWJseSBzaG91bGQgdXBkYXRlIHJlZ2V4cCAmIGNoZWNrIHNwZWVkXG4gICAgICBkYXRhW2RhdGEubGVuZ3RoIC0gMV0gPT09ICdfJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sRmxvYXQoZGF0YSkge1xuICB2YXIgdmFsdWUsIHNpZ24sIGJhc2UsIGRpZ2l0cztcblxuICB2YWx1ZSAgPSBkYXRhLnJlcGxhY2UoL18vZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHNpZ24gICA9IHZhbHVlWzBdID09PSAnLScgPyAtMSA6IDE7XG4gIGRpZ2l0cyA9IFtdO1xuXG4gIGlmICgnKy0nLmluZGV4T2YodmFsdWVbMF0pID49IDApIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnLmluZicpIHtcbiAgICByZXR1cm4gKHNpZ24gPT09IDEpID8gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZIDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZO1xuXG4gIH0gZWxzZSBpZiAodmFsdWUgPT09ICcubmFuJykge1xuICAgIHJldHVybiBOYU47XG5cbiAgfSBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKCc6JykgPj0gMCkge1xuICAgIHZhbHVlLnNwbGl0KCc6JykuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgZGlnaXRzLnVuc2hpZnQocGFyc2VGbG9hdCh2LCAxMCkpO1xuICAgIH0pO1xuXG4gICAgdmFsdWUgPSAwLjA7XG4gICAgYmFzZSA9IDE7XG5cbiAgICBkaWdpdHMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgdmFsdWUgKz0gZCAqIGJhc2U7XG4gICAgICBiYXNlICo9IDYwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNpZ24gKiB2YWx1ZTtcblxuICB9XG4gIHJldHVybiBzaWduICogcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xufVxuXG5cbnZhciBTQ0lFTlRJRklDX1dJVEhPVVRfRE9UID0gL15bLStdP1swLTldK2UvO1xuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sRmxvYXQob2JqZWN0LCBzdHlsZSkge1xuICB2YXIgcmVzO1xuXG4gIGlmIChpc05hTihvYmplY3QpKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcubmFuJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLk5BTic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5OYU4nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLmluZic7XG4gICAgICBjYXNlICd1cHBlcmNhc2UnOiByZXR1cm4gJy5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICcuSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSBvYmplY3QpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy0uaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLS5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICctLkluZic7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbW1vbi5pc05lZ2F0aXZlWmVybyhvYmplY3QpKSB7XG4gICAgcmV0dXJuICctMC4wJztcbiAgfVxuXG4gIHJlcyA9IG9iamVjdC50b1N0cmluZygxMCk7XG5cbiAgLy8gSlMgc3RyaW5naWZpZXIgY2FuIGJ1aWxkIHNjaWVudGlmaWMgZm9ybWF0IHdpdGhvdXQgZG90czogNWUtMTAwLFxuICAvLyB3aGlsZSBZQU1MIHJlcXVyZXMgZG90OiA1LmUtMTAwLiBGaXggaXQgd2l0aCBzaW1wbGUgaGFja1xuXG4gIHJldHVybiBTQ0lFTlRJRklDX1dJVEhPVVRfRE9ULnRlc3QocmVzKSA/IHJlcy5yZXBsYWNlKCdlJywgJy5lJykgOiByZXM7XG59XG5cbmZ1bmN0aW9uIGlzRmxvYXQob2JqZWN0KSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IE51bWJlcl0nKSAmJlxuICAgICAgICAgKG9iamVjdCAlIDEgIT09IDAgfHwgY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpmbG9hdCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sRmxvYXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEZsb2F0LFxuICBwcmVkaWNhdGU6IGlzRmxvYXQsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEZsb2F0LFxuICBkZWZhdWx0U3R5bGU6ICdsb3dlcmNhc2UnXG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgSlNPTiBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDMyMzFcbi8vXG4vLyBOT1RFOiBKUy1ZQU1MIGRvZXMgbm90IHN1cHBvcnQgc2NoZW1hLXNwZWNpZmljIHRhZyByZXNvbHV0aW9uIHJlc3RyaWN0aW9ucy5cbi8vIFNvLCB0aGlzIHNjaGVtYSBpcyBub3Qgc3VjaCBzdHJpY3QgYXMgZGVmaW5lZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy8gSXQgYWxsb3dzIG51bWJlcnMgaW4gYmluYXJ5IG5vdGFpb24sIHVzZSBgTnVsbGAgYW5kIGBOVUxMYCBhcyBgbnVsbGAsIGV0Yy5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2ZhaWxzYWZlJylcbiAgXSxcbiAgaW1wbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL251bGwnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2Jvb2wnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2ludCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvZmxvYXQnKVxuICBdXG59KTtcbiIsICIvLyBTdGFuZGFyZCBZQU1MJ3MgQ29yZSBzY2hlbWEuXG4vLyBodHRwOi8vd3d3LnlhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNpZDI4MDQ5MjNcbi8vXG4vLyBOT1RFOiBKUy1ZQU1MIGRvZXMgbm90IHN1cHBvcnQgc2NoZW1hLXNwZWNpZmljIHRhZyByZXNvbHV0aW9uIHJlc3RyaWN0aW9ucy5cbi8vIFNvLCBDb3JlIHNjaGVtYSBoYXMgbm8gZGlzdGluY3Rpb25zIGZyb20gSlNPTiBzY2hlbWEgaXMgSlMtWUFNTC5cblxuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4uL3NjaGVtYScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2pzb24nKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG52YXIgWUFNTF9EQVRFX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldKScgICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0pJCcpOyAgICAgICAgICAgICAgICAgICAvLyBbM10gZGF5XG5cbnZhciBZQU1MX1RJTUVTVEFNUF9SRUdFWFAgPSBuZXcgUmVnRXhwKFxuICAnXihbMC05XVswLTldWzAtOV1bMC05XSknICAgICAgICAgICsgLy8gWzFdIHllYXJcbiAgJy0oWzAtOV1bMC05XT8pJyAgICAgICAgICAgICAgICAgICArIC8vIFsyXSBtb250aFxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzNdIGRheVxuICAnKD86W1R0XXxbIFxcXFx0XSspJyAgICAgICAgICAgICAgICAgKyAvLyAuLi5cbiAgJyhbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICArIC8vIFs0XSBob3VyXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNV0gbWludXRlXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNl0gc2Vjb25kXG4gICcoPzpcXFxcLihbMC05XSopKT8nICAgICAgICAgICAgICAgICArIC8vIFs3XSBmcmFjdGlvblxuICAnKD86WyBcXFxcdF0qKFp8KFstK10pKFswLTldWzAtOV0/KScgKyAvLyBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyXG4gICcoPzo6KFswLTldWzAtOV0pKT8pKT8kJyk7ICAgICAgICAgICAvLyBbMTFdIHR6X21pbnV0ZVxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChZQU1MX0RBVEVfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICBpZiAoWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAoZGF0YSkge1xuICB2YXIgbWF0Y2gsIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbiA9IDAsXG4gICAgICBkZWx0YSA9IG51bGwsIHR6X2hvdXIsIHR6X21pbnV0ZSwgZGF0ZTtcblxuICBtYXRjaCA9IFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKTtcbiAgaWYgKG1hdGNoID09PSBudWxsKSBtYXRjaCA9IFlBTUxfVElNRVNUQU1QX1JFR0VYUC5leGVjKGRhdGEpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdEYXRlIHJlc29sdmUgZXJyb3InKTtcblxuICAvLyBtYXRjaDogWzFdIHllYXIgWzJdIG1vbnRoIFszXSBkYXlcblxuICB5ZWFyID0gKyhtYXRjaFsxXSk7XG4gIG1vbnRoID0gKyhtYXRjaFsyXSkgLSAxOyAvLyBKUyBtb250aCBzdGFydHMgd2l0aCAwXG4gIGRheSA9ICsobWF0Y2hbM10pO1xuXG4gIGlmICghbWF0Y2hbNF0pIHsgLy8gbm8gaG91clxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5KSk7XG4gIH1cblxuICAvLyBtYXRjaDogWzRdIGhvdXIgWzVdIG1pbnV0ZSBbNl0gc2Vjb25kIFs3XSBmcmFjdGlvblxuXG4gIGhvdXIgPSArKG1hdGNoWzRdKTtcbiAgbWludXRlID0gKyhtYXRjaFs1XSk7XG4gIHNlY29uZCA9ICsobWF0Y2hbNl0pO1xuXG4gIGlmIChtYXRjaFs3XSkge1xuICAgIGZyYWN0aW9uID0gbWF0Y2hbN10uc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKGZyYWN0aW9uLmxlbmd0aCA8IDMpIHsgLy8gbWlsbGktc2Vjb25kc1xuICAgICAgZnJhY3Rpb24gKz0gJzAnO1xuICAgIH1cbiAgICBmcmFjdGlvbiA9ICtmcmFjdGlvbjtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyIFsxMV0gdHpfbWludXRlXG5cbiAgaWYgKG1hdGNoWzldKSB7XG4gICAgdHpfaG91ciA9ICsobWF0Y2hbMTBdKTtcbiAgICB0el9taW51dGUgPSArKG1hdGNoWzExXSB8fCAwKTtcbiAgICBkZWx0YSA9ICh0el9ob3VyICogNjAgKyB0el9taW51dGUpICogNjAwMDA7IC8vIGRlbHRhIGluIG1pbGktc2Vjb25kc1xuICAgIGlmIChtYXRjaFs5XSA9PT0gJy0nKSBkZWx0YSA9IC1kZWx0YTtcbiAgfVxuXG4gIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24pKTtcblxuICBpZiAoZGVsdGEpIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSAtIGRlbHRhKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbFRpbWVzdGFtcChvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgcmV0dXJuIG9iamVjdC50b0lTT1N0cmluZygpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjp0aW1lc3RhbXAnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbFRpbWVzdGFtcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sVGltZXN0YW1wLFxuICBpbnN0YW5jZU9mOiBEYXRlLFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxUaW1lc3RhbXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTWVyZ2UoZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJzw8JyB8fCBkYXRhID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTWVyZ2Vcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuLyplc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlKi9cblxudmFyIE5vZGVCdWZmZXI7XG5cbnRyeSB7XG4gIC8vIEEgdHJpY2sgZm9yIGJyb3dzZXJpZmllZCB2ZXJzaW9uLCB0byBub3QgaW5jbHVkZSBgQnVmZmVyYCBzaGltXG4gIHZhciBfcmVxdWlyZSA9IHJlcXVpcmU7XG4gIE5vZGVCdWZmZXIgPSBfcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xufSBjYXRjaCAoX18pIHt9XG5cbnZhciBUeXBlICAgICAgID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5cbi8vIFsgNjQsIDY1LCA2NiBdIC0+IFsgcGFkZGluZywgQ1IsIExGIF1cbnZhciBCQVNFNjRfTUFQID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XFxuXFxyJztcblxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJpbmFyeShkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGNvZGUsIGlkeCwgYml0bGVuID0gMCwgbWF4ID0gZGF0YS5sZW5ndGgsIG1hcCA9IEJBU0U2NF9NQVA7XG5cbiAgLy8gQ29udmVydCBvbmUgYnkgb25lLlxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBjb2RlID0gbWFwLmluZGV4T2YoZGF0YS5jaGFyQXQoaWR4KSk7XG5cbiAgICAvLyBTa2lwIENSL0xGXG4gICAgaWYgKGNvZGUgPiA2NCkgY29udGludWU7XG5cbiAgICAvLyBGYWlsIG9uIGlsbGVnYWwgY2hhcmFjdGVyc1xuICAgIGlmIChjb2RlIDwgMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgYml0bGVuICs9IDY7XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgYW55IGJpdHMgbGVmdCwgc291cmNlIHdhcyBjb3JydXB0ZWRcbiAgcmV0dXJuIChiaXRsZW4gJSA4KSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJpbmFyeShkYXRhKSB7XG4gIHZhciBpZHgsIHRhaWxiaXRzLFxuICAgICAgaW5wdXQgPSBkYXRhLnJlcGxhY2UoL1tcXHJcXG49XS9nLCAnJyksIC8vIHJlbW92ZSBDUi9MRiAmIHBhZGRpbmcgdG8gc2ltcGxpZnkgc2NhblxuICAgICAgbWF4ID0gaW5wdXQubGVuZ3RoLFxuICAgICAgbWFwID0gQkFTRTY0X01BUCxcbiAgICAgIGJpdHMgPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgLy8gQ29sbGVjdCBieSA2KjQgYml0cyAoMyBieXRlcylcblxuICBmb3IgKGlkeCA9IDA7IGlkeCA8IG1heDsgaWR4KyspIHtcbiAgICBpZiAoKGlkeCAlIDQgPT09IDApICYmIGlkeCkge1xuICAgICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMTYpICYgMHhGRik7XG4gICAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgICAgcmVzdWx0LnB1c2goYml0cyAmIDB4RkYpO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA2KSB8IG1hcC5pbmRleE9mKGlucHV0LmNoYXJBdChpZHgpKTtcbiAgfVxuXG4gIC8vIER1bXAgdGFpbFxuXG4gIHRhaWxiaXRzID0gKG1heCAlIDQpICogNjtcblxuICBpZiAodGFpbGJpdHMgPT09IDApIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxNikgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiA4KSAmIDB4RkYpO1xuICAgIHJlc3VsdC5wdXNoKGJpdHMgJiAweEZGKTtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTgpIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAxMCkgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiAyKSAmIDB4RkYpO1xuICB9IGVsc2UgaWYgKHRhaWxiaXRzID09PSAxMikge1xuICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDQpICYgMHhGRik7XG4gIH1cblxuICAvLyBXcmFwIGludG8gQnVmZmVyIGZvciBOb2RlSlMgYW5kIGxlYXZlIEFycmF5IGZvciBicm93c2VyXG4gIGlmIChOb2RlQnVmZmVyKSB7XG4gICAgLy8gU3VwcG9ydCBub2RlIDYuKyBCdWZmZXIgQVBJIHdoZW4gYXZhaWxhYmxlXG4gICAgcmV0dXJuIE5vZGVCdWZmZXIuZnJvbSA/IE5vZGVCdWZmZXIuZnJvbShyZXN1bHQpIDogbmV3IE5vZGVCdWZmZXIocmVzdWx0KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxCaW5hcnkob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHZhciByZXN1bHQgPSAnJywgYml0cyA9IDAsIGlkeCwgdGFpbCxcbiAgICAgIG1heCA9IG9iamVjdC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQO1xuXG4gIC8vIENvbnZlcnQgZXZlcnkgdGhyZWUgYnl0ZXMgdG8gNCBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgMyA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA4KSArIG9iamVjdFtpZHhdO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbCA9IG1heCAlIDM7XG5cbiAgaWYgKHRhaWwgPT09IDApIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IDIpIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEwKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMSkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDQpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0JpbmFyeShvYmplY3QpIHtcbiAgcmV0dXJuIE5vZGVCdWZmZXIgJiYgTm9kZUJ1ZmZlci5pc0J1ZmZlcihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpiaW5hcnknLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEJpbmFyeSxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQmluYXJ5LFxuICBwcmVkaWNhdGU6IGlzQmluYXJ5LFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxCaW5hcnlcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF90b1N0cmluZyAgICAgICA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sT21hcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgb2JqZWN0S2V5cyA9IFtdLCBpbmRleCwgbGVuZ3RoLCBwYWlyLCBwYWlyS2V5LCBwYWlySGFzS2V5LFxuICAgICAgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcbiAgICBwYWlySGFzS2V5ID0gZmFsc2U7XG5cbiAgICBpZiAoX3RvU3RyaW5nLmNhbGwocGFpcikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKHBhaXJLZXkgaW4gcGFpcikge1xuICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhaXIsIHBhaXJLZXkpKSB7XG4gICAgICAgIGlmICghcGFpckhhc0tleSkgcGFpckhhc0tleSA9IHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghcGFpckhhc0tleSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKG9iamVjdEtleXMuaW5kZXhPZihwYWlyS2V5KSA9PT0gLTEpIG9iamVjdEtleXMucHVzaChwYWlyS2V5KTtcbiAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sT21hcChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpvbWFwJywge1xuICBraW5kOiAnc2VxdWVuY2UnLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE9tYXAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbE9tYXBcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi90eXBlJyk7XG5cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFBhaXJzKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHZhciBpbmRleCwgbGVuZ3RoLCBwYWlyLCBrZXlzLCByZXN1bHQsXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIHJlc3VsdCA9IG5ldyBBcnJheShvYmplY3QubGVuZ3RoKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGlmIChfdG9TdHJpbmcuY2FsbChwYWlyKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHJldHVybiBmYWxzZTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhwYWlyKTtcblxuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxQYWlycyhkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gW107XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHBhaXIpO1xuXG4gICAgcmVzdWx0W2luZGV4XSA9IFsga2V5c1swXSwgcGFpcltrZXlzWzBdXSBdO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6cGFpcnMnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sUGFpcnMsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFBhaXJzXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxTZXQoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGtleSwgb2JqZWN0ID0gZGF0YTtcblxuICBmb3IgKGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSB7XG4gICAgICBpZiAob2JqZWN0W2tleV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbFNldChkYXRhKSB7XG4gIHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXQnLCB7XG4gIGtpbmQ6ICdtYXBwaW5nJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxTZXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFNldFxufSk7XG4iLCAiLy8gSlMtWUFNTCdzIGRlZmF1bHQgc2NoZW1hIGZvciBgc2FmZUxvYWRgIGZ1bmN0aW9uLlxuLy8gSXQgaXMgbm90IGRlc2NyaWJlZCBpbiB0aGUgWUFNTCBzcGVjaWZpY2F0aW9uLlxuLy9cbi8vIFRoaXMgc2NoZW1hIGlzIGJhc2VkIG9uIHN0YW5kYXJkIFlBTUwncyBDb3JlIHNjaGVtYSBhbmQgaW5jbHVkZXMgbW9zdCBvZlxuLy8gZXh0cmEgdHlwZXMgZGVzY3JpYmVkIGF0IFlBTUwgdGFnIHJlcG9zaXRvcnkuIChodHRwOi8veWFtbC5vcmcvdHlwZS8pXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBTY2hlbWEoe1xuICBpbmNsdWRlOiBbXG4gICAgcmVxdWlyZSgnLi9jb3JlJylcbiAgXSxcbiAgaW1wbGljaXQ6IFtcbiAgICByZXF1aXJlKCcuLi90eXBlL3RpbWVzdGFtcCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvbWVyZ2UnKVxuICBdLFxuICBleHBsaWNpdDogW1xuICAgIHJlcXVpcmUoJy4uL3R5cGUvYmluYXJ5JyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9vbWFwJyksXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9wYWlycycpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvc2V0JylcbiAgXVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHlwZSA9IHJlcXVpcmUoJy4uLy4uL3R5cGUnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RKYXZhc2NyaXB0VW5kZWZpbmVkKCkge1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXVuZGVmaW5lZCovXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudEphdmFzY3JpcHRVbmRlZmluZWQoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6anMvdW5kZWZpbmVkJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRVbmRlZmluZWQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdFVuZGVmaW5lZCxcbiAgcHJlZGljYXRlOiBpc1VuZGVmaW5lZCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0VW5kZWZpbmVkXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBUeXBlID0gcmVxdWlyZSgnLi4vLi4vdHlwZScpO1xuXG5mdW5jdGlvbiByZXNvbHZlSmF2YXNjcmlwdFJlZ0V4cChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciByZWdleHAgPSBkYXRhLFxuICAgICAgdGFpbCAgID0gL1xcLyhbZ2ltXSopJC8uZXhlYyhkYXRhKSxcbiAgICAgIG1vZGlmaWVycyA9ICcnO1xuXG4gIC8vIGlmIHJlZ2V4cCBzdGFydHMgd2l0aCAnLycgaXQgY2FuIGhhdmUgbW9kaWZpZXJzIGFuZCBtdXN0IGJlIHByb3Blcmx5IGNsb3NlZFxuICAvLyBgL2Zvby9naW1gIC0gbW9kaWZpZXJzIHRhaWwgY2FuIGJlIG1heGltdW0gMyBjaGFyc1xuICBpZiAocmVnZXhwWzBdID09PSAnLycpIHtcbiAgICBpZiAodGFpbCkgbW9kaWZpZXJzID0gdGFpbFsxXTtcblxuICAgIGlmIChtb2RpZmllcnMubGVuZ3RoID4gMykgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGlmIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggLywgaXMgc2hvdWxkIGJlIHByb3Blcmx5IHRlcm1pbmF0ZWRcbiAgICBpZiAocmVnZXhwW3JlZ2V4cC5sZW5ndGggLSBtb2RpZmllcnMubGVuZ3RoIC0gMV0gIT09ICcvJykgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEphdmFzY3JpcHRSZWdFeHAoZGF0YSkge1xuICB2YXIgcmVnZXhwID0gZGF0YSxcbiAgICAgIHRhaWwgICA9IC9cXC8oW2dpbV0qKSQvLmV4ZWMoZGF0YSksXG4gICAgICBtb2RpZmllcnMgPSAnJztcblxuICAvLyBgL2Zvby9naW1gIC0gdGFpbCBjYW4gYmUgbWF4aW11bSA0IGNoYXJzXG4gIGlmIChyZWdleHBbMF0gPT09ICcvJykge1xuICAgIGlmICh0YWlsKSBtb2RpZmllcnMgPSB0YWlsWzFdO1xuICAgIHJlZ2V4cCA9IHJlZ2V4cC5zbGljZSgxLCByZWdleHAubGVuZ3RoIC0gbW9kaWZpZXJzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhwLCBtb2RpZmllcnMpO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRKYXZhc2NyaXB0UmVnRXhwKG9iamVjdCAvKiwgc3R5bGUqLykge1xuICB2YXIgcmVzdWx0ID0gJy8nICsgb2JqZWN0LnNvdXJjZSArICcvJztcblxuICBpZiAob2JqZWN0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKG9iamVjdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmIChvYmplY3QuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVHlwZSgndGFnOnlhbWwub3JnLDIwMDI6anMvcmVnZXhwJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZUphdmFzY3JpcHRSZWdFeHAsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdFJlZ0V4cCxcbiAgcHJlZGljYXRlOiBpc1JlZ0V4cCxcbiAgcmVwcmVzZW50OiByZXByZXNlbnRKYXZhc2NyaXB0UmVnRXhwXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbnZhciBlc3ByaW1hO1xuXG4vLyBCcm93c2VyaWZpZWQgdmVyc2lvbiBkb2VzIG5vdCBoYXZlIGVzcHJpbWFcbi8vXG4vLyAxLiBGb3Igbm9kZS5qcyBqdXN0IHJlcXVpcmUgbW9kdWxlIGFzIGRlcHNcbi8vIDIuIEZvciBicm93c2VyIHRyeSB0byByZXF1aXJlIG11ZHVsZSB2aWEgZXh0ZXJuYWwgQU1EIHN5c3RlbS5cbi8vICAgIElmIG5vdCBmb3VuZCAtIHRyeSB0byBmYWxsYmFjayB0byB3aW5kb3cuZXNwcmltYS4gSWYgbm90XG4vLyAgICBmb3VuZCB0b28gLSB0aGVuIGZhaWwgdG8gcGFyc2UuXG4vL1xudHJ5IHtcbiAgLy8gd29ya2Fyb3VuZCB0byBleGNsdWRlIHBhY2thZ2UgZnJvbSBicm93c2VyaWZ5IGxpc3QuXG4gIHZhciBfcmVxdWlyZSA9IHJlcXVpcmU7XG4gIGVzcHJpbWEgPSBfcmVxdWlyZSgnZXNwcmltYScpO1xufSBjYXRjaCAoXykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1yZWRlY2xhcmUgKi9cbiAgLyogZ2xvYmFsIHdpbmRvdyAqL1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIGVzcHJpbWEgPSB3aW5kb3cuZXNwcmltYTtcbn1cblxudmFyIFR5cGUgPSByZXF1aXJlKCcuLi8uLi90eXBlJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVKYXZhc2NyaXB0RnVuY3Rpb24oZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHRyeSB7XG4gICAgdmFyIHNvdXJjZSA9ICcoJyArIGRhdGEgKyAnKScsXG4gICAgICAgIGFzdCAgICA9IGVzcHJpbWEucGFyc2Uoc291cmNlLCB7IHJhbmdlOiB0cnVlIH0pO1xuXG4gICAgaWYgKGFzdC50eXBlICAgICAgICAgICAgICAgICAgICAhPT0gJ1Byb2dyYW0nICAgICAgICAgICAgIHx8XG4gICAgICAgIGFzdC5ib2R5Lmxlbmd0aCAgICAgICAgICAgICAhPT0gMSAgICAgICAgICAgICAgICAgICAgIHx8XG4gICAgICAgIGFzdC5ib2R5WzBdLnR5cGUgICAgICAgICAgICAhPT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnIHx8XG4gICAgICAgIChhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicgJiZcbiAgICAgICAgICBhc3QuYm9keVswXS5leHByZXNzaW9uLnR5cGUgIT09ICdGdW5jdGlvbkV4cHJlc3Npb24nKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uc3RydWN0SmF2YXNjcmlwdEZ1bmN0aW9uKGRhdGEpIHtcbiAgLypqc2xpbnQgZXZpbDp0cnVlKi9cblxuICB2YXIgc291cmNlID0gJygnICsgZGF0YSArICcpJyxcbiAgICAgIGFzdCAgICA9IGVzcHJpbWEucGFyc2Uoc291cmNlLCB7IHJhbmdlOiB0cnVlIH0pLFxuICAgICAgcGFyYW1zID0gW10sXG4gICAgICBib2R5O1xuXG4gIGlmIChhc3QudHlwZSAgICAgICAgICAgICAgICAgICAgIT09ICdQcm9ncmFtJyAgICAgICAgICAgICB8fFxuICAgICAgYXN0LmJvZHkubGVuZ3RoICAgICAgICAgICAgICE9PSAxICAgICAgICAgICAgICAgICAgICAgfHxcbiAgICAgIGFzdC5ib2R5WzBdLnR5cGUgICAgICAgICAgICAhPT0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnIHx8XG4gICAgICAoYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi50eXBlICE9PSAnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nICYmXG4gICAgICAgIGFzdC5ib2R5WzBdLmV4cHJlc3Npb24udHlwZSAhPT0gJ0Z1bmN0aW9uRXhwcmVzc2lvbicpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVzb2x2ZSBmdW5jdGlvbicpO1xuICB9XG5cbiAgYXN0LmJvZHlbMF0uZXhwcmVzc2lvbi5wYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBwYXJhbXMucHVzaChwYXJhbS5uYW1lKTtcbiAgfSk7XG5cbiAgYm9keSA9IGFzdC5ib2R5WzBdLmV4cHJlc3Npb24uYm9keS5yYW5nZTtcblxuICAvLyBFc3ByaW1hJ3MgcmFuZ2VzIGluY2x1ZGUgdGhlIGZpcnN0ICd7JyBhbmQgdGhlIGxhc3QgJ30nIGNoYXJhY3RlcnMgb25cbiAgLy8gZnVuY3Rpb24gZXhwcmVzc2lvbnMuIFNvIGN1dCB0aGVtIG91dC5cbiAgaWYgKGFzdC5ib2R5WzBdLmV4cHJlc3Npb24uYm9keS50eXBlID09PSAnQmxvY2tTdGF0ZW1lbnQnKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihwYXJhbXMsIHNvdXJjZS5zbGljZShib2R5WzBdICsgMSwgYm9keVsxXSAtIDEpKTtcbiAgfVxuICAvLyBFUzYgYXJyb3cgZnVuY3Rpb25zIGNhbiBvbWl0IHRoZSBCbG9ja1N0YXRlbWVudC4gSW4gdGhhdCBjYXNlLCBqdXN0IHJldHVyblxuICAvLyB0aGUgYm9keS5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1uZXctZnVuYyovXG4gIHJldHVybiBuZXcgRnVuY3Rpb24ocGFyYW1zLCAncmV0dXJuICcgKyBzb3VyY2Uuc2xpY2UoYm9keVswXSwgYm9keVsxXSkpO1xufVxuXG5mdW5jdGlvbiByZXByZXNlbnRKYXZhc2NyaXB0RnVuY3Rpb24ob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBUeXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpqcy9mdW5jdGlvbicsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVKYXZhc2NyaXB0RnVuY3Rpb24sXG4gIGNvbnN0cnVjdDogY29uc3RydWN0SmF2YXNjcmlwdEZ1bmN0aW9uLFxuICBwcmVkaWNhdGU6IGlzRnVuY3Rpb24sXG4gIHJlcHJlc2VudDogcmVwcmVzZW50SmF2YXNjcmlwdEZ1bmN0aW9uXG59KTtcbiIsICIvLyBKUy1ZQU1MJ3MgZGVmYXVsdCBzY2hlbWEgZm9yIGBsb2FkYCBmdW5jdGlvbi5cbi8vIEl0IGlzIG5vdCBkZXNjcmliZWQgaW4gdGhlIFlBTUwgc3BlY2lmaWNhdGlvbi5cbi8vXG4vLyBUaGlzIHNjaGVtYSBpcyBiYXNlZCBvbiBKUy1ZQU1MJ3MgZGVmYXVsdCBzYWZlIHNjaGVtYSBhbmQgaW5jbHVkZXNcbi8vIEphdmFTY3JpcHQtc3BlY2lmaWMgdHlwZXM6ICEhanMvdW5kZWZpbmVkLCAhIWpzL3JlZ2V4cCBhbmQgISFqcy9mdW5jdGlvbi5cbi8vXG4vLyBBbHNvIHRoaXMgc2NoZW1hIGlzIHVzZWQgYXMgZGVmYXVsdCBiYXNlIHNjaGVtYSBhdCBgU2NoZW1hLmNyZWF0ZWAgZnVuY3Rpb24uXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuLi9zY2hlbWEnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYS5ERUZBVUxUID0gbmV3IFNjaGVtYSh7XG4gIGluY2x1ZGU6IFtcbiAgICByZXF1aXJlKCcuL2RlZmF1bHRfc2FmZScpXG4gIF0sXG4gIGV4cGxpY2l0OiBbXG4gICAgcmVxdWlyZSgnLi4vdHlwZS9qcy91bmRlZmluZWQnKSxcbiAgICByZXF1aXJlKCcuLi90eXBlL2pzL3JlZ2V4cCcpLFxuICAgIHJlcXVpcmUoJy4uL3R5cGUvanMvZnVuY3Rpb24nKVxuICBdXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbixuby11c2UtYmVmb3JlLWRlZmluZSovXG5cbnZhciBjb21tb24gICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9jb21tb24nKTtcbnZhciBZQU1MRXhjZXB0aW9uICAgICAgID0gcmVxdWlyZSgnLi9leGNlcHRpb24nKTtcbnZhciBNYXJrICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9tYXJrJyk7XG52YXIgREVGQVVMVF9TQUZFX1NDSEVNQSA9IHJlcXVpcmUoJy4vc2NoZW1hL2RlZmF1bHRfc2FmZScpO1xudmFyIERFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcblxuXG52YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuXG52YXIgQ09OVEVYVF9GTE9XX0lOICAgPSAxO1xudmFyIENPTlRFWFRfRkxPV19PVVQgID0gMjtcbnZhciBDT05URVhUX0JMT0NLX0lOICA9IDM7XG52YXIgQ09OVEVYVF9CTE9DS19PVVQgPSA0O1xuXG5cbnZhciBDSE9NUElOR19DTElQICA9IDE7XG52YXIgQ0hPTVBJTkdfU1RSSVAgPSAyO1xudmFyIENIT01QSU5HX0tFRVAgID0gMztcblxuXG52YXIgUEFUVEVSTl9OT05fUFJJTlRBQkxFICAgICAgICAgPSAvW1xceDAwLVxceDA4XFx4MEJcXHgwQ1xceDBFLVxceDFGXFx4N0YtXFx4ODRcXHg4Ni1cXHg5RlxcdUZGRkVcXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXSg/IVtcXHVEQzAwLVxcdURGRkZdKXwoPzpbXlxcdUQ4MDAtXFx1REJGRl18XilbXFx1REMwMC1cXHVERkZGXS87XG52YXIgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MgPSAvW1xceDg1XFx1MjAyOFxcdTIwMjldLztcbnZhciBQQVRURVJOX0ZMT1dfSU5ESUNBVE9SUyAgICAgICA9IC9bLFxcW1xcXVxce1xcfV0vO1xudmFyIFBBVFRFUk5fVEFHX0hBTkRMRSAgICAgICAgICAgID0gL14oPzohfCEhfCFbYS16XFwtXSshKSQvaTtcbnZhciBQQVRURVJOX1RBR19VUkkgICAgICAgICAgICAgICA9IC9eKD86IXxbXixcXFtcXF1cXHtcXH1dKSg/OiVbMC05YS1mXXsyfXxbMC05YS16XFwtIztcXC9cXD86QCY9XFwrXFwkLF9cXC4hflxcKidcXChcXClcXFtcXF1dKSokL2k7XG5cblxuZnVuY3Rpb24gX2NsYXNzKG9iaikgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7IH1cblxuZnVuY3Rpb24gaXNfRU9MKGMpIHtcbiAgcmV0dXJuIChjID09PSAweDBBLyogTEYgKi8pIHx8IChjID09PSAweDBELyogQ1IgKi8pO1xufVxuXG5mdW5jdGlvbiBpc19XSElURV9TUEFDRShjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHwgKGMgPT09IDB4MjAvKiBTcGFjZSAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX1dTX09SX0VPTChjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwOS8qIFRhYiAqLykgfHxcbiAgICAgICAgIChjID09PSAweDIwLyogU3BhY2UgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgwQS8qIExGICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MEQvKiBDUiAqLyk7XG59XG5cbmZ1bmN0aW9uIGlzX0ZMT1dfSU5ESUNBVE9SKGMpIHtcbiAgcmV0dXJuIGMgPT09IDB4MkMvKiAsICovIHx8XG4gICAgICAgICBjID09PSAweDVCLyogWyAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg1RC8qIF0gKi8gfHxcbiAgICAgICAgIGMgPT09IDB4N0IvKiB7ICovIHx8XG4gICAgICAgICBjID09PSAweDdELyogfSAqLztcbn1cblxuZnVuY3Rpb24gZnJvbUhleENvZGUoYykge1xuICB2YXIgbGM7XG5cbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UqL1xuICBsYyA9IGMgfCAweDIwO1xuXG4gIGlmICgoMHg2MS8qIGEgKi8gPD0gbGMpICYmIChsYyA8PSAweDY2LyogZiAqLykpIHtcbiAgICByZXR1cm4gbGMgLSAweDYxICsgMTA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZWRIZXhMZW4oYykge1xuICBpZiAoYyA9PT0gMHg3OC8qIHggKi8pIHsgcmV0dXJuIDI7IH1cbiAgaWYgKGMgPT09IDB4NzUvKiB1ICovKSB7IHJldHVybiA0OyB9XG4gIGlmIChjID09PSAweDU1LyogVSAqLykgeyByZXR1cm4gODsgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gZnJvbURlY2ltYWxDb2RlKGMpIHtcbiAgaWYgKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHtcbiAgICByZXR1cm4gYyAtIDB4MzA7XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUVzY2FwZVNlcXVlbmNlKGMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gIHJldHVybiAoYyA9PT0gMHgzMC8qIDAgKi8pID8gJ1xceDAwJyA6XG4gICAgICAgIChjID09PSAweDYxLyogYSAqLykgPyAnXFx4MDcnIDpcbiAgICAgICAgKGMgPT09IDB4NjIvKiBiICovKSA/ICdcXHgwOCcgOlxuICAgICAgICAoYyA9PT0gMHg3NC8qIHQgKi8pID8gJ1xceDA5JyA6XG4gICAgICAgIChjID09PSAweDA5LyogVGFiICovKSA/ICdcXHgwOScgOlxuICAgICAgICAoYyA9PT0gMHg2RS8qIG4gKi8pID8gJ1xceDBBJyA6XG4gICAgICAgIChjID09PSAweDc2LyogdiAqLykgPyAnXFx4MEInIDpcbiAgICAgICAgKGMgPT09IDB4NjYvKiBmICovKSA/ICdcXHgwQycgOlxuICAgICAgICAoYyA9PT0gMHg3Mi8qIHIgKi8pID8gJ1xceDBEJyA6XG4gICAgICAgIChjID09PSAweDY1LyogZSAqLykgPyAnXFx4MUInIDpcbiAgICAgICAgKGMgPT09IDB4MjAvKiBTcGFjZSAqLykgPyAnICcgOlxuICAgICAgICAoYyA9PT0gMHgyMi8qIFwiICovKSA/ICdcXHgyMicgOlxuICAgICAgICAoYyA9PT0gMHgyRi8qIC8gKi8pID8gJy8nIDpcbiAgICAgICAgKGMgPT09IDB4NUMvKiBcXCAqLykgPyAnXFx4NUMnIDpcbiAgICAgICAgKGMgPT09IDB4NEUvKiBOICovKSA/ICdcXHg4NScgOlxuICAgICAgICAoYyA9PT0gMHg1Ri8qIF8gKi8pID8gJ1xceEEwJyA6XG4gICAgICAgIChjID09PSAweDRDLyogTCAqLykgPyAnXFx1MjAyOCcgOlxuICAgICAgICAoYyA9PT0gMHg1MC8qIFAgKi8pID8gJ1xcdTIwMjknIDogJyc7XG59XG5cbmZ1bmN0aW9uIGNoYXJGcm9tQ29kZXBvaW50KGMpIHtcbiAgaWYgKGMgPD0gMHhGRkZGKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gIH1cbiAgLy8gRW5jb2RlIFVURi0xNiBzdXJyb2dhdGUgcGFpclxuICAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtMTYjQ29kZV9wb2ludHNfVS4yQjAxMDAwMF90b19VLjJCMTBGRkZGXG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKFxuICAgICgoYyAtIDB4MDEwMDAwKSA+PiAxMCkgKyAweEQ4MDAsXG4gICAgKChjIC0gMHgwMTAwMDApICYgMHgwM0ZGKSArIDB4REMwMFxuICApO1xufVxuXG4vLyBzZXQgYSBwcm9wZXJ0eSBvZiBhIGxpdGVyYWwgb2JqZWN0LCB3aGlsZSBwcm90ZWN0aW5nIGFnYWluc3QgcHJvdG90eXBlIHBvbGx1dGlvbixcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL2pzLXlhbWwvaXNzdWVzLzE2NCBmb3IgbW9yZSBkZXRhaWxzXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgLy8gdXNlZCBmb3IgdGhpcyBzcGVjaWZpYyBrZXkgb25seSBiZWNhdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBzbG93XG4gIGlmIChrZXkgPT09ICdfX3Byb3RvX18nKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbnZhciBzaW1wbGVFc2NhcGVDaGVjayA9IG5ldyBBcnJheSgyNTYpOyAvLyBpbnRlZ2VyLCBmb3IgZmFzdCBhY2Nlc3NcbnZhciBzaW1wbGVFc2NhcGVNYXAgPSBuZXcgQXJyYXkoMjU2KTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgc2ltcGxlRXNjYXBlQ2hlY2tbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKSA/IDEgOiAwO1xuICBzaW1wbGVFc2NhcGVNYXBbaV0gPSBzaW1wbGVFc2NhcGVTZXF1ZW5jZShpKTtcbn1cblxuXG5mdW5jdGlvbiBTdGF0ZShpbnB1dCwgb3B0aW9ucykge1xuICB0aGlzLmlucHV0ID0gaW5wdXQ7XG5cbiAgdGhpcy5maWxlbmFtZSAgPSBvcHRpb25zWydmaWxlbmFtZSddICB8fCBudWxsO1xuICB0aGlzLnNjaGVtYSAgICA9IG9wdGlvbnNbJ3NjaGVtYSddICAgIHx8IERFRkFVTFRfRlVMTF9TQ0hFTUE7XG4gIHRoaXMub25XYXJuaW5nID0gb3B0aW9uc1snb25XYXJuaW5nJ10gfHwgbnVsbDtcbiAgdGhpcy5sZWdhY3kgICAgPSBvcHRpb25zWydsZWdhY3knXSAgICB8fCBmYWxzZTtcbiAgdGhpcy5qc29uICAgICAgPSBvcHRpb25zWydqc29uJ10gICAgICB8fCBmYWxzZTtcbiAgdGhpcy5saXN0ZW5lciAgPSBvcHRpb25zWydsaXN0ZW5lciddICB8fCBudWxsO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMudHlwZU1hcCAgICAgICA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkVHlwZU1hcDtcblxuICB0aGlzLmxlbmd0aCAgICAgPSBpbnB1dC5sZW5ndGg7XG4gIHRoaXMucG9zaXRpb24gICA9IDA7XG4gIHRoaXMubGluZSAgICAgICA9IDA7XG4gIHRoaXMubGluZVN0YXJ0ICA9IDA7XG4gIHRoaXMubGluZUluZGVudCA9IDA7XG5cbiAgdGhpcy5kb2N1bWVudHMgPSBbXTtcblxuICAvKlxuICB0aGlzLnZlcnNpb247XG4gIHRoaXMuY2hlY2tMaW5lQnJlYWtzO1xuICB0aGlzLnRhZ01hcDtcbiAgdGhpcy5hbmNob3JNYXA7XG4gIHRoaXMudGFnO1xuICB0aGlzLmFuY2hvcjtcbiAgdGhpcy5raW5kO1xuICB0aGlzLnJlc3VsdDsqL1xuXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFlBTUxFeGNlcHRpb24oXG4gICAgbWVzc2FnZSxcbiAgICBuZXcgTWFyayhzdGF0ZS5maWxlbmFtZSwgc3RhdGUuaW5wdXQsIHN0YXRlLnBvc2l0aW9uLCBzdGF0ZS5saW5lLCAoc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnQpKSk7XG59XG5cbmZ1bmN0aW9uIHRocm93RXJyb3Ioc3RhdGUsIG1lc3NhZ2UpIHtcbiAgdGhyb3cgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIHRocm93V2FybmluZyhzdGF0ZSwgbWVzc2FnZSkge1xuICBpZiAoc3RhdGUub25XYXJuaW5nKSB7XG4gICAgc3RhdGUub25XYXJuaW5nLmNhbGwobnVsbCwgZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkpO1xuICB9XG59XG5cblxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge1xuXG4gIFlBTUw6IGZ1bmN0aW9uIGhhbmRsZVlhbWxEaXJlY3RpdmUoc3RhdGUsIG5hbWUsIGFyZ3MpIHtcblxuICAgIHZhciBtYXRjaCwgbWFqb3IsIG1pbm9yO1xuXG4gICAgaWYgKHN0YXRlLnZlcnNpb24gIT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiAlWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdZQU1MIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgb25lIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgbWF0Y2ggPSAvXihbMC05XSspXFwuKFswLTldKykkLy5leGVjKGFyZ3NbMF0pO1xuXG4gICAgaWYgKG1hdGNoID09PSBudWxsKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCBhcmd1bWVudCBvZiB0aGUgWUFNTCBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBtYWpvciA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gICAgbWlub3IgPSBwYXJzZUludChtYXRjaFsyXSwgMTApO1xuXG4gICAgaWYgKG1ham9yICE9PSAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIFlBTUwgdmVyc2lvbiBvZiB0aGUgZG9jdW1lbnQnKTtcbiAgICB9XG5cbiAgICBzdGF0ZS52ZXJzaW9uID0gYXJnc1swXTtcbiAgICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSAobWlub3IgPCAyKTtcblxuICAgIGlmIChtaW5vciAhPT0gMSAmJiBtaW5vciAhPT0gMikge1xuICAgICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAndW5zdXBwb3J0ZWQgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cbiAgfSxcblxuICBUQUc6IGZ1bmN0aW9uIGhhbmRsZVRhZ0RpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIGhhbmRsZSwgcHJlZml4O1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoICE9PSAyKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnVEFHIGRpcmVjdGl2ZSBhY2NlcHRzIGV4YWN0bHkgdHdvIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGhhbmRsZSA9IGFyZ3NbMF07XG4gICAgcHJlZml4ID0gYXJnc1sxXTtcblxuICAgIGlmICghUEFUVEVSTl9UQUdfSEFORExFLnRlc3QoaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2lsbC1mb3JtZWQgdGFnIGhhbmRsZSAoZmlyc3QgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnRhZ01hcCwgaGFuZGxlKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RoZXJlIGlzIGEgcHJldmlvdXNseSBkZWNsYXJlZCBzdWZmaXggZm9yIFwiJyArIGhhbmRsZSArICdcIiB0YWcgaGFuZGxlJyk7XG4gICAgfVxuXG4gICAgaWYgKCFQQVRURVJOX1RBR19VUkkudGVzdChwcmVmaXgpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgcHJlZml4IChzZWNvbmQgYXJndW1lbnQpIG9mIHRoZSBUQUcgZGlyZWN0aXZlJyk7XG4gICAgfVxuXG4gICAgc3RhdGUudGFnTWFwW2hhbmRsZV0gPSBwcmVmaXg7XG4gIH1cbn07XG5cblxuZnVuY3Rpb24gY2FwdHVyZVNlZ21lbnQoc3RhdGUsIHN0YXJ0LCBlbmQsIGNoZWNrSnNvbikge1xuICB2YXIgX3Bvc2l0aW9uLCBfbGVuZ3RoLCBfY2hhcmFjdGVyLCBfcmVzdWx0O1xuXG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIF9yZXN1bHQgPSBzdGF0ZS5pbnB1dC5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIGlmIChjaGVja0pzb24pIHtcbiAgICAgIGZvciAoX3Bvc2l0aW9uID0gMCwgX2xlbmd0aCA9IF9yZXN1bHQubGVuZ3RoOyBfcG9zaXRpb24gPCBfbGVuZ3RoOyBfcG9zaXRpb24gKz0gMSkge1xuICAgICAgICBfY2hhcmFjdGVyID0gX3Jlc3VsdC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG4gICAgICAgIGlmICghKF9jaGFyYWN0ZXIgPT09IDB4MDkgfHxcbiAgICAgICAgICAgICAgKDB4MjAgPD0gX2NoYXJhY3RlciAmJiBfY2hhcmFjdGVyIDw9IDB4MTBGRkZGKSkpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgdmFsaWQgSlNPTiBjaGFyYWN0ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoUEFUVEVSTl9OT05fUFJJTlRBQkxFLnRlc3QoX3Jlc3VsdCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0aGUgc3RyZWFtIGNvbnRhaW5zIG5vbi1wcmludGFibGUgY2hhcmFjdGVycycpO1xuICAgIH1cblxuICAgIHN0YXRlLnJlc3VsdCArPSBfcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWFwcGluZ3Moc3RhdGUsIGRlc3RpbmF0aW9uLCBzb3VyY2UsIG92ZXJyaWRhYmxlS2V5cykge1xuICB2YXIgc291cmNlS2V5cywga2V5LCBpbmRleCwgcXVhbnRpdHk7XG5cbiAgaWYgKCFjb21tb24uaXNPYmplY3Qoc291cmNlKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW5ub3QgbWVyZ2UgbWFwcGluZ3M7IHRoZSBwcm92aWRlZCBzb3VyY2Ugb2JqZWN0IGlzIHVuYWNjZXB0YWJsZScpO1xuICB9XG5cbiAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgcXVhbnRpdHk7IGluZGV4ICs9IDEpIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcblxuICAgIGlmICghX2hhc093blByb3BlcnR5LmNhbGwoZGVzdGluYXRpb24sIGtleSkpIHtcbiAgICAgIHNldFByb3BlcnR5KGRlc3RpbmF0aW9uLCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIG92ZXJyaWRhYmxlS2V5c1trZXldID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgc3RhcnRMaW5lLCBzdGFydFBvcykge1xuICB2YXIgaW5kZXgsIHF1YW50aXR5O1xuXG4gIC8vIFRoZSBvdXRwdXQgaXMgYSBwbGFpbiBvYmplY3QgaGVyZSwgc28ga2V5cyBjYW4gb25seSBiZSBzdHJpbmdzLlxuICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQga2V5Tm9kZSB0byBhIHN0cmluZywgYnV0IGRvaW5nIHNvIGNhbiBoYW5nIHRoZSBwcm9jZXNzXG4gIC8vIChkZWVwbHkgbmVzdGVkIGFycmF5cyB0aGF0IGV4cGxvZGUgZXhwb25lbnRpYWxseSB1c2luZyBhbGlhc2VzKS5cbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZSkpIHtcbiAgICBrZXlOb2RlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoa2V5Tm9kZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSBrZXlOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5Tm9kZVtpbmRleF0pKSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduZXN0ZWQgYXJyYXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluc2lkZSBrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGVbaW5kZXhdKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAga2V5Tm9kZVtpbmRleF0gPSAnW29iamVjdCBPYmplY3RdJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBdm9pZCBjb2RlIGV4ZWN1dGlvbiBpbiBsb2FkKCkgdmlhIHRvU3RyaW5nIHByb3BlcnR5XG4gIC8vIChzdGlsbCB1c2UgaXRzIG93biB0b1N0cmluZyBmb3IgYXJyYXlzLCB0aW1lc3RhbXBzLFxuICAvLyBhbmQgd2hhdGV2ZXIgdXNlciBzY2hlbWEgZXh0ZW5zaW9ucyBoYXBwZW4gdG8gaGF2ZSBAQHRvU3RyaW5nVGFnKVxuICBpZiAodHlwZW9mIGtleU5vZGUgPT09ICdvYmplY3QnICYmIF9jbGFzcyhrZXlOb2RlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICBrZXlOb2RlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIH1cblxuXG4gIGtleU5vZGUgPSBTdHJpbmcoa2V5Tm9kZSk7XG5cbiAgaWYgKF9yZXN1bHQgPT09IG51bGwpIHtcbiAgICBfcmVzdWx0ID0ge307XG4gIH1cblxuICBpZiAoa2V5VGFnID09PSAndGFnOnlhbWwub3JnLDIwMDI6bWVyZ2UnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVOb2RlKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gdmFsdWVOb2RlLmxlbmd0aDsgaW5kZXggPCBxdWFudGl0eTsgaW5kZXggKz0gMSkge1xuICAgICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGVbaW5kZXhdLCBvdmVycmlkYWJsZUtleXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZU1hcHBpbmdzKHN0YXRlLCBfcmVzdWx0LCB2YWx1ZU5vZGUsIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICghc3RhdGUuanNvbiAmJlxuICAgICAgICAhX2hhc093blByb3BlcnR5LmNhbGwob3ZlcnJpZGFibGVLZXlzLCBrZXlOb2RlKSAmJlxuICAgICAgICBfaGFzT3duUHJvcGVydHkuY2FsbChfcmVzdWx0LCBrZXlOb2RlKSkge1xuICAgICAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSB8fCBzdGF0ZS5saW5lO1xuICAgICAgc3RhdGUucG9zaXRpb24gPSBzdGFydFBvcyB8fCBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGVkIG1hcHBpbmcga2V5Jyk7XG4gICAgfVxuICAgIHNldFByb3BlcnR5KF9yZXN1bHQsIGtleU5vZGUsIHZhbHVlTm9kZSk7XG4gICAgZGVsZXRlIG92ZXJyaWRhYmxlS2V5c1trZXlOb2RlXTtcbiAgfVxuXG4gIHJldHVybiBfcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZWFkTGluZUJyZWFrKHN0YXRlKSB7XG4gIHZhciBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgwRC8qIENSICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MEEvKiBMRiAqLykge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2EgbGluZSBicmVhayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgc3RhdGUubGluZSArPSAxO1xuICBzdGF0ZS5saW5lU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbn1cblxuZnVuY3Rpb24gc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgYWxsb3dDb21tZW50cywgY2hlY2tJbmRlbnQpIHtcbiAgdmFyIGxpbmVCcmVha3MgPSAwLFxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGFsbG93Q29tbWVudHMgJiYgY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH0gd2hpbGUgKGNoICE9PSAweDBBLyogTEYgKi8gJiYgY2ggIT09IDB4MEQvKiBDUiAqLyAmJiBjaCAhPT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgbGluZUJyZWFrcysrO1xuICAgICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICAgIHdoaWxlIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSB7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQrKztcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoY2hlY2tJbmRlbnQgIT09IC0xICYmIGxpbmVCcmVha3MgIT09IDAgJiYgc3RhdGUubGluZUluZGVudCA8IGNoZWNrSW5kZW50KSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnZGVmaWNpZW50IGluZGVudGF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbGluZUJyZWFrcztcbn1cblxuZnVuY3Rpb24gdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24pO1xuXG4gIC8vIENvbmRpdGlvbiBzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0IGlzIHRlc3RlZFxuICAvLyBpbiBwYXJlbnQgb24gZWFjaCBjYWxsLCBmb3IgZWZmaWNpZW5jeS4gTm8gbmVlZHMgdG8gdGVzdCBoZXJlIGFnYWluLlxuICBpZiAoKGNoID09PSAweDJELyogLSAqLyB8fCBjaCA9PT0gMHgyRS8qIC4gKi8pICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAxKSAmJlxuICAgICAgY2ggPT09IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uICsgMikpIHtcblxuICAgIF9wb3NpdGlvbiArPSAzO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDAgfHwgaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBjb3VudCkge1xuICBpZiAoY291bnQgPT09IDEpIHtcbiAgICBzdGF0ZS5yZXN1bHQgKz0gJyAnO1xuICB9IGVsc2UgaWYgKGNvdW50ID4gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBjb3VudCAtIDEpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gcmVhZFBsYWluU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50LCB3aXRoaW5GbG93Q29sbGVjdGlvbikge1xuICB2YXIgcHJlY2VkaW5nLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgY2FwdHVyZVN0YXJ0LFxuICAgICAgY2FwdHVyZUVuZCxcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50LFxuICAgICAgX2xpbmUsXG4gICAgICBfbGluZVN0YXJ0LFxuICAgICAgX2xpbmVJbmRlbnQsXG4gICAgICBfa2luZCA9IHN0YXRlLmtpbmQsXG4gICAgICBfcmVzdWx0ID0gc3RhdGUucmVzdWx0LFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoaXNfV1NfT1JfRU9MKGNoKSAgICAgIHx8XG4gICAgICBpc19GTE9XX0lORElDQVRPUihjaCkgfHxcbiAgICAgIGNoID09PSAweDIzLyogIyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjYvKiAmICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyQS8qICogKi8gICAgfHxcbiAgICAgIGNoID09PSAweDIxLyogISAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4N0MvKiB8ICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgzRS8qID4gKi8gICAgfHxcbiAgICAgIGNoID09PSAweDI3LyogJyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjIvKiBcIiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjUvKiAlICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg0MC8qIEAgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDYwLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjaCA9PT0gMHgzRi8qID8gKi8gfHwgY2ggPT09IDB4MkQvKiAtICovKSB7XG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpIHx8XG4gICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihmb2xsb3dpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIHByZWNlZGluZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gLSAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChwcmVjZWRpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB8fFxuICAgICAgICAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgICBicmVhaztcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgICAgX2xpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgIF9saW5lSW5kZW50ID0gc3RhdGUubGluZUluZGVudDtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCAtMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID49IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uID0gY2FwdHVyZUVuZDtcbiAgICAgICAgc3RhdGUubGluZSA9IF9saW5lO1xuICAgICAgICBzdGF0ZS5saW5lU3RhcnQgPSBfbGluZVN0YXJ0O1xuICAgICAgICBzdGF0ZS5saW5lSW5kZW50ID0gX2xpbmVJbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNQZW5kaW5nQ29udGVudCkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc3RhdGUubGluZSAtIF9saW5lKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbiArIDE7XG4gICAgfVxuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuXG4gIGlmIChzdGF0ZS5yZXN1bHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSBfa2luZDtcbiAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNy8qICcgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBzdGF0ZS5wb3NpdGlvbisrO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKChjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pKSAhPT0gMCkge1xuICAgIGlmIChjaCA9PT0gMHgyNy8qICcgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIHRydWUpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIG5vZGVJbmRlbnQpKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIGRvY3VtZW50IHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBzaW5nbGUgcXVvdGVkIHNjYWxhcicpO1xufVxuXG5mdW5jdGlvbiByZWFkRG91YmxlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGV4TGVuZ3RoLFxuICAgICAgaGV4UmVzdWx0LFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjIvKiBcIiAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDIyLyogXCIgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMvKiBcXCAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCk7XG5cbiAgICAgICAgLy8gVE9ETzogcmV3b3JrIHRvIGlubGluZSBmbiB3aXRoIG5vIHR5cGUgY2FzdD9cbiAgICAgIH0gZWxzZSBpZiAoY2ggPCAyNTYgJiYgc2ltcGxlRXNjYXBlQ2hlY2tbY2hdKSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBzaW1wbGVFc2NhcGVNYXBbY2hdO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2UgaWYgKCh0bXAgPSBlc2NhcGVkSGV4TGVuKGNoKSkgPiAwKSB7XG4gICAgICAgIGhleExlbmd0aCA9IHRtcDtcbiAgICAgICAgaGV4UmVzdWx0ID0gMDtcblxuICAgICAgICBmb3IgKDsgaGV4TGVuZ3RoID4gMDsgaGV4TGVuZ3RoLS0pIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoKHRtcCA9IGZyb21IZXhDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgICAgICAgaGV4UmVzdWx0ID0gKGhleFJlc3VsdCA8PCA0KSArIHRtcDtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgaGV4YWRlY2ltYWwgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNoYXJGcm9tQ29kZXBvaW50KGhleFJlc3VsdCk7XG5cbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gZXNjYXBlIHNlcXVlbmNlJyk7XG4gICAgICB9XG5cbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGRvdWJsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgcmVhZE5leHQgPSB0cnVlLFxuICAgICAgX2xpbmUsXG4gICAgICBfdGFnICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9yZXN1bHQsXG4gICAgICBfYW5jaG9yICA9IHN0YXRlLmFuY2hvcixcbiAgICAgIGZvbGxvd2luZyxcbiAgICAgIHRlcm1pbmF0b3IsXG4gICAgICBpc1BhaXIsXG4gICAgICBpc0V4cGxpY2l0UGFpcixcbiAgICAgIGlzTWFwcGluZyxcbiAgICAgIG92ZXJyaWRhYmxlS2V5cyA9IHt9LFxuICAgICAga2V5Tm9kZSxcbiAgICAgIGtleVRhZyxcbiAgICAgIHZhbHVlTm9kZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoID09PSAweDVCLyogWyAqLykge1xuICAgIHRlcm1pbmF0b3IgPSAweDVEOy8qIF0gKi9cbiAgICBpc01hcHBpbmcgPSBmYWxzZTtcbiAgICBfcmVzdWx0ID0gW107XG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4N0IvKiB7ICovKSB7XG4gICAgdGVybWluYXRvciA9IDB4N0Q7LyogfSAqL1xuICAgIGlzTWFwcGluZyA9IHRydWU7XG4gICAgX3Jlc3VsdCA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSB0ZXJtaW5hdG9yKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgc3RhdGUudGFnID0gX3RhZztcbiAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICBzdGF0ZS5raW5kID0gaXNNYXBwaW5nID8gJ21hcHBpbmcnIDogJ3NlcXVlbmNlJztcbiAgICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFyZWFkTmV4dCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ21pc3NlZCBjb21tYSBiZXR3ZWVuIGZsb3cgY29sbGVjdGlvbiBlbnRyaWVzJyk7XG4gICAgfVxuXG4gICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSBmYWxzZTtcblxuICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG4gICAgICAgIGlzUGFpciA9IGlzRXhwbGljaXRQYWlyID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICBrZXlUYWcgPSBzdGF0ZS50YWc7XG4gICAga2V5Tm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcblxuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoKGlzRXhwbGljaXRQYWlyIHx8IHN0YXRlLmxpbmUgPT09IF9saW5lKSAmJiBjaCA9PT0gMHgzQS8qIDogKi8pIHtcbiAgICAgIGlzUGFpciA9IHRydWU7XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0ZMT1dfSU4sIGZhbHNlLCB0cnVlKTtcbiAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoaXNNYXBwaW5nKSB7XG4gICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlKTtcbiAgICB9IGVsc2UgaWYgKGlzUGFpcikge1xuICAgICAgX3Jlc3VsdC5wdXNoKHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIG51bGwsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCB2YWx1ZU5vZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Jlc3VsdC5wdXNoKGtleU5vZGUpO1xuICAgIH1cblxuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMHgyQy8qICwgKi8pIHtcbiAgICAgIHJlYWROZXh0ID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhZE5leHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBmbG93IGNvbGxlY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBmb2xkaW5nLFxuICAgICAgY2hvbXBpbmcgICAgICAgPSBDSE9NUElOR19DTElQLFxuICAgICAgZGlkUmVhZENvbnRlbnQgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkSW5kZW50ID0gZmFsc2UsXG4gICAgICB0ZXh0SW5kZW50ICAgICA9IG5vZGVJbmRlbnQsXG4gICAgICBlbXB0eUxpbmVzICAgICA9IDAsXG4gICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlLFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4N0MvKiB8ICovKSB7XG4gICAgZm9sZGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDNFLyogPiAqLykge1xuICAgIGZvbGRpbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJCLyogKyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICAgIGlmIChDSE9NUElOR19DTElQID09PSBjaG9tcGluZykge1xuICAgICAgICBjaG9tcGluZyA9IChjaCA9PT0gMHgyQi8qICsgKi8pID8gQ0hPTVBJTkdfS0VFUCA6IENIT01QSU5HX1NUUklQO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3JlcGVhdCBvZiBhIGNob21waW5nIG1vZGUgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgodG1wID0gZnJvbURlY2ltYWxDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgaWYgKHRtcCA9PT0gMCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGV4cGxpY2l0IGluZGVudGF0aW9uIHdpZHRoIG9mIGEgYmxvY2sgc2NhbGFyOyBpdCBjYW5ub3QgYmUgbGVzcyB0aGFuIG9uZScpO1xuICAgICAgfSBlbHNlIGlmICghZGV0ZWN0ZWRJbmRlbnQpIHtcbiAgICAgICAgdGV4dEluZGVudCA9IG5vZGVJbmRlbnQgKyB0bXAgLSAxO1xuICAgICAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGFuIGluZGVudGF0aW9uIHdpZHRoIGlkZW50aWZpZXInKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSk7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG4gICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKCghZGV0ZWN0ZWRJbmRlbnQgfHwgc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpICYmXG4gICAgICAgICAgIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSkge1xuICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghZGV0ZWN0ZWRJbmRlbnQgJiYgc3RhdGUubGluZUluZGVudCA+IHRleHRJbmRlbnQpIHtcbiAgICAgIHRleHRJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgIH1cblxuICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBlbXB0eUxpbmVzKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBFbmQgb2YgdGhlIHNjYWxhci5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpIHtcblxuICAgICAgLy8gUGVyZm9ybSB0aGUgY2hvbXBpbmcuXG4gICAgICBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0tFRVApIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGRpZFJlYWRDb250ZW50ID8gMSArIGVtcHR5TGluZXMgOiBlbXB0eUxpbmVzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0NMSVApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB0aGUgc2NhbGFyIGlzIG5vdCBlbXB0eS5cbiAgICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnJlYWsgdGhpcyBgd2hpbGVgIGN5Y2xlIGFuZCBnbyB0byB0aGUgZnVuY2l0b24ncyBlcGlsb2d1ZS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEZvbGRlZCBzdHlsZTogdXNlIGZhbmN5IHJ1bGVzIHRvIGhhbmRsZSBsaW5lIGJyZWFrcy5cbiAgICBpZiAoZm9sZGluZykge1xuXG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgKG1vcmUtaW5kZW50ZWQgbGluZXMpIGFyZSBub3QgZm9sZGVkLlxuICAgICAgaWYgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IHRydWU7XG4gICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNvbnRlbnQgbGluZSAoY2YuIEV4YW1wbGUgOC4xKVxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuXG4gICAgICAvLyBFbmQgb2YgbW9yZS1pbmRlbnRlZCBibG9jay5cbiAgICAgIH0gZWxzZSBpZiAoYXRNb3JlSW5kZW50ZWQpIHtcbiAgICAgICAgYXRNb3JlSW5kZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMgKyAxKTtcblxuICAgICAgLy8gSnVzdCBvbmUgbGluZSBicmVhayAtIHBlcmNlaXZlIGFzIHRoZSBzYW1lIGxpbmUuXG4gICAgICB9IGVsc2UgaWYgKGVtcHR5TGluZXMgPT09IDApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB3ZSBoYXZlIGFscmVhZHkgcmVhZCBzb21lIHNjYWxhciBjb250ZW50LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gICAgICAgIH1cblxuICAgICAgLy8gU2V2ZXJhbCBsaW5lIGJyZWFrcyAtIHBlcmNlaXZlIGFzIGRpZmZlcmVudCBsaW5lcy5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBlbXB0eUxpbmVzKTtcbiAgICAgIH1cblxuICAgIC8vIExpdGVyYWwgc3R5bGU6IGp1c3QgYWRkIGV4YWN0IG51bWJlciBvZiBsaW5lIGJyZWFrcyBiZXR3ZWVuIGNvbnRlbnQgbGluZXMuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEtlZXAgYWxsIGxpbmUgYnJlYWtzIGV4Y2VwdCB0aGUgaGVhZGVyIGxpbmUgYnJlYWsuXG4gICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgIH1cblxuICAgIGRpZFJlYWRDb250ZW50ID0gdHJ1ZTtcbiAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgZW1wdHlMaW5lcyA9IDA7XG4gICAgY2FwdHVyZVN0YXJ0ID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2VxdWVuY2Uoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIF9saW5lLFxuICAgICAgX3RhZyAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgX3Jlc3VsdCAgID0gW10sXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBkZXRlY3RlZCAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuXG4gICAgaWYgKGNoICE9PSAweDJELyogLSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKCFpc19XU19PUl9FT0woZm9sbG93aW5nKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA8PSBub2RlSW5kZW50KSB7XG4gICAgICAgIF9yZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX0lOLCBmYWxzZSwgdHJ1ZSk7XG4gICAgX3Jlc3VsdC5wdXNoKHN0YXRlLnJlc3VsdCk7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpICYmIChjaCAhPT0gMCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgaW5kZW50YXRpb24gb2YgYSBzZXF1ZW5jZSBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ3NlcXVlbmNlJztcbiAgICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgbm9kZUluZGVudCwgZmxvd0luZGVudCkge1xuICB2YXIgZm9sbG93aW5nLFxuICAgICAgYWxsb3dDb21wYWN0LFxuICAgICAgX2xpbmUsXG4gICAgICBfcG9zLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9hbmNob3IgICAgICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgICAgID0ge30sXG4gICAgICBvdmVycmlkYWJsZUtleXMgPSB7fSxcbiAgICAgIGtleVRhZyAgICAgICAgPSBudWxsLFxuICAgICAga2V5Tm9kZSAgICAgICA9IG51bGwsXG4gICAgICB2YWx1ZU5vZGUgICAgID0gbnVsbCxcbiAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkICAgICAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IF9yZXN1bHQ7XG4gIH1cblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIGZvbGxvd2luZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKTtcbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgbGluZS5cbiAgICBfcG9zID0gc3RhdGUucG9zaXRpb247XG5cbiAgICAvL1xuICAgIC8vIEV4cGxpY2l0IG5vdGF0aW9uIGNhc2UuIFRoZXJlIGFyZSB0d28gc2VwYXJhdGUgYmxvY2tzOlxuICAgIC8vIGZpcnN0IGZvciB0aGUga2V5IChkZW5vdGVkIGJ5IFwiP1wiKSBhbmQgc2Vjb25kIGZvciB0aGUgdmFsdWUgKGRlbm90ZWQgYnkgXCI6XCIpXG4gICAgLy9cbiAgICBpZiAoKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgzQS8qIDogKi8pICYmIGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCk7XG4gICAgICAgICAga2V5VGFnID0ga2V5Tm9kZSA9IHZhbHVlTm9kZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSB0cnVlO1xuICAgICAgICBhbGxvd0NvbXBhY3QgPSB0cnVlO1xuXG4gICAgICB9IGVsc2UgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgLy8gaS5lLiAweDNBLyogOiAqLyA9PT0gY2hhcmFjdGVyIGFmdGVyIHRoZSBleHBsaWNpdCBrZXkuXG4gICAgICAgIGF0RXhwbGljaXRLZXkgPSBmYWxzZTtcbiAgICAgICAgYWxsb3dDb21wYWN0ID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2luY29tcGxldGUgZXhwbGljaXQgbWFwcGluZyBwYWlyOyBhIGtleSBub2RlIGlzIG1pc3NlZDsgb3IgZm9sbG93ZWQgYnkgYSBub24tdGFidWxhdGVkIGVtcHR5IGxpbmUnKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgICAgIGNoID0gZm9sbG93aW5nO1xuXG4gICAgLy9cbiAgICAvLyBJbXBsaWNpdCBub3RhdGlvbiBjYXNlLiBGbG93LXN0eWxlIG5vZGUgYXMgdGhlIGtleSBmaXJzdCwgdGhlbiBcIjpcIiwgYW5kIHRoZSB2YWx1ZS5cbiAgICAvL1xuICAgIH0gZWxzZSBpZiAoY29tcG9zZU5vZGUoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19PVVQsIGZhbHNlLCB0cnVlKSkge1xuXG4gICAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUpIHtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmICghaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXIgaXMgZXhwZWN0ZWQgYWZ0ZXIgdGhlIGtleS12YWx1ZSBzZXBhcmF0b3Igd2l0aGluIGEgYmxvY2sgbWFwcGluZycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCk7XG4gICAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICAgIGFsbG93Q29tcGFjdCA9IGZhbHNlO1xuICAgICAgICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGFuIGltcGxpY2l0IG1hcHBpbmcgcGFpcjsgYSBjb2xvbiBpcyBtaXNzZWQnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCB0aGUgcmVzdWx0IG9mIGBjb21wb3NlTm9kZWAuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGEgYmxvY2sgbWFwcGluZyBlbnRyeTsgYSBtdWx0aWxpbmUga2V5IG1heSBub3QgYmUgYW4gaW1wbGljaXQga2V5Jyk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhazsgLy8gUmVhZGluZyBpcyBkb25lLiBHbyB0byB0aGUgZXBpbG9ndWUuXG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBDb21tb24gcmVhZGluZyBjb2RlIGZvciBib3RoIGV4cGxpY2l0IGFuZCBpbXBsaWNpdCBub3RhdGlvbnMuXG4gICAgLy9cbiAgICBpZiAoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpIHtcbiAgICAgIGlmIChjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9CTE9DS19PVVQsIHRydWUsIGFsbG93Q29tcGFjdCkpIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgX2xpbmUsIF9wb3MpO1xuICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQgJiYgKGNoICE9PSAwKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2JhZCBpbmRlbnRhdGlvbiBvZiBhIG1hcHBpbmcgZW50cnknKTtcbiAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBub2RlSW5kZW50KSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBFcGlsb2d1ZS5cbiAgLy9cblxuICAvLyBTcGVjaWFsIGNhc2U6IGxhc3QgbWFwcGluZydzIG5vZGUgY29udGFpbnMgb25seSB0aGUga2V5IGluIGV4cGxpY2l0IG5vdGF0aW9uLlxuICBpZiAoYXRFeHBsaWNpdEtleSkge1xuICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsKTtcbiAgfVxuXG4gIC8vIEV4cG9zZSB0aGUgcmVzdWx0aW5nIG1hcHBpbmcuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ21hcHBpbmcnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uLFxuICAgICAgaXNWZXJiYXRpbSA9IGZhbHNlLFxuICAgICAgaXNOYW1lZCAgICA9IGZhbHNlLFxuICAgICAgdGFnSGFuZGxlLFxuICAgICAgdGFnTmFtZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDIxLyogISAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS50YWcgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYSB0YWcgcHJvcGVydHknKTtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4M0MvKiA8ICovKSB7XG4gICAgaXNWZXJiYXRpbSA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgaXNOYW1lZCA9IHRydWU7XG4gICAgdGFnSGFuZGxlID0gJyEhJztcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIHtcbiAgICB0YWdIYW5kbGUgPSAnISc7XG4gIH1cblxuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICBpZiAoaXNWZXJiYXRpbSkge1xuICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgd2hpbGUgKGNoICE9PSAwICYmIGNoICE9PSAweDNFLyogPiAqLyk7XG5cbiAgICBpZiAoc3RhdGUucG9zaXRpb24gPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgdmVyYmF0aW0gdGFnJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgICAgIGlmICghaXNOYW1lZCkge1xuICAgICAgICAgIHRhZ0hhbmRsZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiAtIDEsIHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgICAgICBpZiAoIVBBVFRFUk5fVEFHX0hBTkRMRS50ZXN0KHRhZ0hhbmRsZSkpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduYW1lZCB0YWcgaGFuZGxlIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVycycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlzTmFtZWQgPSB0cnVlO1xuICAgICAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBleGNsYW1hdGlvbiBtYXJrcycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0YWdOYW1lID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoUEFUVEVSTl9GTE9XX0lORElDQVRPUlMudGVzdCh0YWdOYW1lKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBzdWZmaXggY2Fubm90IGNvbnRhaW4gZmxvdyBpbmRpY2F0b3IgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YWdOYW1lICYmICFQQVRURVJOX1RBR19VUkkudGVzdCh0YWdOYW1lKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgbmFtZSBjYW5ub3QgY29udGFpbiBzdWNoIGNoYXJhY3RlcnM6ICcgKyB0YWdOYW1lKTtcbiAgfVxuXG4gIGlmIChpc1ZlcmJhdGltKSB7XG4gICAgc3RhdGUudGFnID0gdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLnRhZ01hcCwgdGFnSGFuZGxlKSkge1xuICAgIHN0YXRlLnRhZyA9IHN0YXRlLnRhZ01hcFt0YWdIYW5kbGVdICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEnKSB7XG4gICAgc3RhdGUudGFnID0gJyEnICsgdGFnTmFtZTtcblxuICB9IGVsc2UgaWYgKHRhZ0hhbmRsZSA9PT0gJyEhJykge1xuICAgIHN0YXRlLnRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnTmFtZTtcblxuICB9IGVsc2Uge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmRlY2xhcmVkIHRhZyBoYW5kbGUgXCInICsgdGFnSGFuZGxlICsgJ1wiJyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNi8qICYgKi8pIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mIGFuIGFuY2hvciBwcm9wZXJ0eScpO1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYW5jaG9yIG5vZGUgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgfVxuXG4gIHN0YXRlLmFuY2hvciA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEFsaWFzKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24sIGFsaWFzLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MkEvKiAqICovKSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX1dTX09SX0VPTChjaCkgJiYgIWlzX0ZMT1dfSU5ESUNBVE9SKGNoKSkge1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gX3Bvc2l0aW9uKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25hbWUgb2YgYW4gYWxpYXMgbm9kZSBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNoYXJhY3RlcicpO1xuICB9XG5cbiAgYWxpYXMgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoIV9oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0YXRlLmFuY2hvck1hcCwgYWxpYXMpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuaWRlbnRpZmllZCBhbGlhcyBcIicgKyBhbGlhcyArICdcIicpO1xuICB9XG5cbiAgc3RhdGUucmVzdWx0ID0gc3RhdGUuYW5jaG9yTWFwW2FsaWFzXTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZU5vZGUoc3RhdGUsIHBhcmVudEluZGVudCwgbm9kZUNvbnRleHQsIGFsbG93VG9TZWVrLCBhbGxvd0NvbXBhY3QpIHtcbiAgdmFyIGFsbG93QmxvY2tTdHlsZXMsXG4gICAgICBhbGxvd0Jsb2NrU2NhbGFycyxcbiAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyxcbiAgICAgIGluZGVudFN0YXR1cyA9IDEsIC8vIDE6IHRoaXM+cGFyZW50LCAwOiB0aGlzPXBhcmVudCwgLTE6IHRoaXM8cGFyZW50XG4gICAgICBhdE5ld0xpbmUgID0gZmFsc2UsXG4gICAgICBoYXNDb250ZW50ID0gZmFsc2UsXG4gICAgICB0eXBlSW5kZXgsXG4gICAgICB0eXBlUXVhbnRpdHksXG4gICAgICB0eXBlLFxuICAgICAgZmxvd0luZGVudCxcbiAgICAgIGJsb2NrSW5kZW50O1xuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdvcGVuJywgc3RhdGUpO1xuICB9XG5cbiAgc3RhdGUudGFnICAgID0gbnVsbDtcbiAgc3RhdGUuYW5jaG9yID0gbnVsbDtcbiAgc3RhdGUua2luZCAgID0gbnVsbDtcbiAgc3RhdGUucmVzdWx0ID0gbnVsbDtcblxuICBhbGxvd0Jsb2NrU3R5bGVzID0gYWxsb3dCbG9ja1NjYWxhcnMgPSBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPVxuICAgIENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCB8fFxuICAgIENPTlRFWFRfQkxPQ0tfSU4gID09PSBub2RlQ29udGV4dDtcblxuICBpZiAoYWxsb3dUb1NlZWspIHtcbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuXG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA+IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgaW5kZW50U3RhdHVzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgd2hpbGUgKHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkgfHwgcmVhZEFuY2hvclByb3BlcnR5KHN0YXRlKSkge1xuICAgICAgaWYgKHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKSkge1xuICAgICAgICBhdE5ld0xpbmUgPSB0cnVlO1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBhbGxvd0Jsb2NrU3R5bGVzO1xuXG4gICAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgICAgaW5kZW50U3RhdHVzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPCBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucykge1xuICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGF0TmV3TGluZSB8fCBhbGxvd0NvbXBhY3Q7XG4gIH1cblxuICBpZiAoaW5kZW50U3RhdHVzID09PSAxIHx8IENPTlRFWFRfQkxPQ0tfT1VUID09PSBub2RlQ29udGV4dCkge1xuICAgIGlmIChDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0IHx8IENPTlRFWFRfRkxPV19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBmbG93SW5kZW50ID0gcGFyZW50SW5kZW50ICsgMTtcbiAgICB9XG5cbiAgICBibG9ja0luZGVudCA9IHN0YXRlLnBvc2l0aW9uIC0gc3RhdGUubGluZVN0YXJ0O1xuXG4gICAgaWYgKGluZGVudFN0YXR1cyA9PT0gMSkge1xuICAgICAgaWYgKGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJlxuICAgICAgICAgIChyZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpIHx8XG4gICAgICAgICAgIHJlYWRCbG9ja01hcHBpbmcoc3RhdGUsIGJsb2NrSW5kZW50LCBmbG93SW5kZW50KSkgfHxcbiAgICAgICAgICByZWFkRmxvd0NvbGxlY3Rpb24oc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKChhbGxvd0Jsb2NrU2NhbGFycyAmJiByZWFkQmxvY2tTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgICAgcmVhZFNpbmdsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkgfHxcbiAgICAgICAgICAgIHJlYWREb3VibGVRdW90ZWRTY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkQWxpYXMoc3RhdGUpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsIHx8IHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2FsaWFzIG5vZGUgc2hvdWxkIG5vdCBoYXZlIGFueSBwcm9wZXJ0aWVzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVhZFBsYWluU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50LCBDT05URVhUX0ZMT1dfSU4gPT09IG5vZGVDb250ZXh0KSkge1xuICAgICAgICAgIGhhc0NvbnRlbnQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlLnRhZyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUudGFnID0gJz8nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaW5kZW50U3RhdHVzID09PSAwKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2U6IGJsb2NrIHNlcXVlbmNlcyBhcmUgYWxsb3dlZCB0byBoYXZlIHNhbWUgaW5kZW50YXRpb24gbGV2ZWwgYXMgdGhlIHBhcmVudC5cbiAgICAgIC8vIGh0dHA6Ly93d3cueWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2lkMjc5OTc4NFxuICAgICAgaGFzQ29udGVudCA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyAmJiByZWFkQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYmxvY2tJbmRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnIScpIHtcbiAgICBpZiAoc3RhdGUudGFnID09PSAnPycpIHtcbiAgICAgIC8vIEltcGxpY2l0IHJlc29sdmluZyBpcyBub3QgYWxsb3dlZCBmb3Igbm9uLXNjYWxhciB0eXBlcywgYW5kICc/J1xuICAgICAgLy8gbm9uLXNwZWNpZmljIHRhZyBpcyBvbmx5IGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgdG8gcGxhaW4gc2NhbGFycy5cbiAgICAgIC8vXG4gICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gY2hlY2sga2luZCBjb25mb3JtaXR5IGluIGNhc2UgdXNlciBleHBsaWNpdGx5IGFzc2lnbnMgJz8nXG4gICAgICAvLyB0YWcsIGZvciBleGFtcGxlIGxpa2UgdGhpczogXCIhPD8+IFswXVwiXG4gICAgICAvL1xuICAgICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiBzdGF0ZS5raW5kICE9PSAnc2NhbGFyJykge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITw/PiB0YWc7IGl0IHNob3VsZCBiZSBcInNjYWxhclwiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHR5cGVJbmRleCA9IDAsIHR5cGVRdWFudGl0eSA9IHN0YXRlLmltcGxpY2l0VHlwZXMubGVuZ3RoOyB0eXBlSW5kZXggPCB0eXBlUXVhbnRpdHk7IHR5cGVJbmRleCArPSAxKSB7XG4gICAgICAgIHR5cGUgPSBzdGF0ZS5pbXBsaWNpdFR5cGVzW3R5cGVJbmRleF07XG5cbiAgICAgICAgaWYgKHR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQpKSB7IC8vIGBzdGF0ZS5yZXN1bHRgIHVwZGF0ZWQgaW4gcmVzb2x2ZXIgaWYgbWF0Y2hlZFxuICAgICAgICAgIHN0YXRlLnJlc3VsdCA9IHR5cGUuY29uc3RydWN0KHN0YXRlLnJlc3VsdCk7XG4gICAgICAgICAgc3RhdGUudGFnID0gdHlwZS50YWc7XG4gICAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbChzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ10sIHN0YXRlLnRhZykpIHtcbiAgICAgIHR5cGUgPSBzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ11bc3RhdGUudGFnXTtcblxuICAgICAgaWYgKHN0YXRlLnJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlLmtpbmQgIT09IHN0YXRlLmtpbmQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuYWNjZXB0YWJsZSBub2RlIGtpbmQgZm9yICE8JyArIHN0YXRlLnRhZyArICc+IHRhZzsgaXQgc2hvdWxkIGJlIFwiJyArIHR5cGUua2luZCArICdcIiwgbm90IFwiJyArIHN0YXRlLmtpbmQgKyAnXCInKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0eXBlLnJlc29sdmUoc3RhdGUucmVzdWx0KSkgeyAvLyBgc3RhdGUucmVzdWx0YCB1cGRhdGVkIGluIHJlc29sdmVyIGlmIG1hdGNoZWRcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2Nhbm5vdCByZXNvbHZlIGEgbm9kZSB3aXRoICE8JyArIHN0YXRlLnRhZyArICc+IGV4cGxpY2l0IHRhZycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0KTtcbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmtub3duIHRhZyAhPCcgKyBzdGF0ZS50YWcgKyAnPicpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5saXN0ZW5lciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmxpc3RlbmVyKCdjbG9zZScsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gc3RhdGUudGFnICE9PSBudWxsIHx8ICBzdGF0ZS5hbmNob3IgIT09IG51bGwgfHwgaGFzQ29udGVudDtcbn1cblxuZnVuY3Rpb24gcmVhZERvY3VtZW50KHN0YXRlKSB7XG4gIHZhciBkb2N1bWVudFN0YXJ0ID0gc3RhdGUucG9zaXRpb24sXG4gICAgICBfcG9zaXRpb24sXG4gICAgICBkaXJlY3RpdmVOYW1lLFxuICAgICAgZGlyZWN0aXZlQXJncyxcbiAgICAgIGhhc0RpcmVjdGl2ZXMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIHN0YXRlLnZlcnNpb24gPSBudWxsO1xuICBzdGF0ZS5jaGVja0xpbmVCcmVha3MgPSBzdGF0ZS5sZWdhY3k7XG4gIHN0YXRlLnRhZ01hcCA9IHt9O1xuICBzdGF0ZS5hbmNob3JNYXAgPSB7fTtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gMCB8fCBjaCAhPT0gMHgyNS8qICUgKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZXMgPSB0cnVlO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRpcmVjdGl2ZU5hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICBkaXJlY3RpdmVBcmdzID0gW107XG5cbiAgICBpZiAoZGlyZWN0aXZlTmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlIG5hbWUgbXVzdCBub3QgYmUgbGVzcyB0aGFuIG9uZSBjaGFyYWN0ZXIgaW4gbGVuZ3RoJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX0VPTChjaCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzX0VPTChjaCkpIGJyZWFrO1xuXG4gICAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGlyZWN0aXZlQXJncy5wdXNoKHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBpZiAoY2ggIT09IDApIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcmVjdGl2ZUhhbmRsZXJzLCBkaXJlY3RpdmVOYW1lKSkge1xuICAgICAgZGlyZWN0aXZlSGFuZGxlcnNbZGlyZWN0aXZlTmFtZV0oc3RhdGUsIGRpcmVjdGl2ZU5hbWUsIGRpcmVjdGl2ZUFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bmtub3duIGRvY3VtZW50IGRpcmVjdGl2ZSBcIicgKyBkaXJlY3RpdmVOYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9XG5cbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5saW5lSW5kZW50ID09PSAwICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSAgICAgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSkgPT09IDB4MkQvKiAtICovICYmXG4gICAgICBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMikgPT09IDB4MkQvKiAtICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMztcbiAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgfSBlbHNlIGlmIChoYXNEaXJlY3RpdmVzKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2RpcmVjdGl2ZXMgZW5kIG1hcmsgaXMgZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGNvbXBvc2VOb2RlKHN0YXRlLCBzdGF0ZS5saW5lSW5kZW50IC0gMSwgQ09OVEVYVF9CTE9DS19PVVQsIGZhbHNlLCB0cnVlKTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gIGlmIChzdGF0ZS5jaGVja0xpbmVCcmVha3MgJiZcbiAgICAgIFBBVFRFUk5fTk9OX0FTQ0lJX0xJTkVfQlJFQUtTLnRlc3Qoc3RhdGUuaW5wdXQuc2xpY2UoZG9jdW1lbnRTdGFydCwgc3RhdGUucG9zaXRpb24pKSkge1xuICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ25vbi1BU0NJSSBsaW5lIGJyZWFrcyBhcmUgaW50ZXJwcmV0ZWQgYXMgY29udGVudCcpO1xuICB9XG5cbiAgc3RhdGUuZG9jdW1lbnRzLnB1c2goc3RhdGUucmVzdWx0KTtcblxuICBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG5cbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MkUvKiAuICovKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUucG9zaXRpb24gPCAoc3RhdGUubGVuZ3RoIC0gMSkpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZW5kIG9mIHRoZSBzdHJlYW0gb3IgYSBkb2N1bWVudCBzZXBhcmF0b3IgaXMgZXhwZWN0ZWQnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKSB7XG4gIGlucHV0ID0gU3RyaW5nKGlucHV0KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gMCkge1xuXG4gICAgLy8gQWRkIHRhaWxpbmcgYFxcbmAgaWYgbm90IGV4aXN0c1xuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBBLyogTEYgKi8gJiZcbiAgICAgICAgaW5wdXQuY2hhckNvZGVBdChpbnB1dC5sZW5ndGggLSAxKSAhPT0gMHgwRC8qIENSICovKSB7XG4gICAgICBpbnB1dCArPSAnXFxuJztcbiAgICB9XG5cbiAgICAvLyBTdHJpcCBCT01cbiAgICBpZiAoaW5wdXQuY2hhckNvZGVBdCgwKSA9PT0gMHhGRUZGKSB7XG4gICAgICBpbnB1dCA9IGlucHV0LnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZShpbnB1dCwgb3B0aW9ucyk7XG5cbiAgdmFyIG51bGxwb3MgPSBpbnB1dC5pbmRleE9mKCdcXDAnKTtcblxuICBpZiAobnVsbHBvcyAhPT0gLTEpIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiA9IG51bGxwb3M7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ251bGwgYnl0ZSBpcyBub3QgYWxsb3dlZCBpbiBpbnB1dCcpO1xuICB9XG5cbiAgLy8gVXNlIDAgYXMgc3RyaW5nIHRlcm1pbmF0b3IuIFRoYXQgc2lnbmlmaWNhbnRseSBzaW1wbGlmaWVzIGJvdW5kcyBjaGVjay5cbiAgc3RhdGUuaW5wdXQgKz0gJ1xcMCc7XG5cbiAgd2hpbGUgKHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pID09PSAweDIwLyogU3BhY2UgKi8pIHtcbiAgICBzdGF0ZS5saW5lSW5kZW50ICs9IDE7XG4gICAgc3RhdGUucG9zaXRpb24gKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHJlYWREb2N1bWVudChzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGUuZG9jdW1lbnRzO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBvcHRpb25zKSB7XG4gIGlmIChpdGVyYXRvciAhPT0gbnVsbCAmJiB0eXBlb2YgaXRlcmF0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IG51bGw7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRzID0gbG9hZERvY3VtZW50cyhpbnB1dCwgb3B0aW9ucyk7XG5cbiAgaWYgKHR5cGVvZiBpdGVyYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkb2N1bWVudHM7XG4gIH1cblxuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGRvY3VtZW50cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgaXRlcmF0b3IoZG9jdW1lbnRzW2luZGV4XSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBkb2N1bWVudHMgPSBsb2FkRG9jdW1lbnRzKGlucHV0LCBvcHRpb25zKTtcblxuICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8qZXNsaW50LWRpc2FibGUgbm8tdW5kZWZpbmVkKi9cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2UgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnRzWzBdO1xuICB9XG4gIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdleHBlY3RlZCBhIHNpbmdsZSBkb2N1bWVudCBpbiB0aGUgc3RyZWFtLCBidXQgZm91bmQgbW9yZScpO1xufVxuXG5cbmZ1bmN0aW9uIHNhZmVMb2FkQWxsKGlucHV0LCBpdGVyYXRvciwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGl0ZXJhdG9yID09PSAnb2JqZWN0JyAmJiBpdGVyYXRvciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zID0gaXRlcmF0b3I7XG4gICAgaXRlcmF0b3IgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGxvYWRBbGwoaW5wdXQsIGl0ZXJhdG9yLCBjb21tb24uZXh0ZW5kKHsgc2NoZW1hOiBERUZBVUxUX1NBRkVfU0NIRU1BIH0sIG9wdGlvbnMpKTtcbn1cblxuXG5mdW5jdGlvbiBzYWZlTG9hZChpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gbG9hZChpbnB1dCwgY29tbW9uLmV4dGVuZCh7IHNjaGVtYTogREVGQVVMVF9TQUZFX1NDSEVNQSB9LCBvcHRpb25zKSk7XG59XG5cblxubW9kdWxlLmV4cG9ydHMubG9hZEFsbCAgICAgPSBsb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMubG9hZCAgICAgICAgPSBsb2FkO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWRBbGwgPSBzYWZlTG9hZEFsbDtcbm1vZHVsZS5leHBvcnRzLnNhZmVMb2FkICAgID0gc2FmZUxvYWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG4vKmVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lKi9cblxudmFyIGNvbW1vbiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2NvbW1vbicpO1xudmFyIFlBTUxFeGNlcHRpb24gICAgICAgPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xudmFyIERFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcbnZhciBERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9zY2hlbWEvZGVmYXVsdF9zYWZlJyk7XG5cbnZhciBfdG9TdHJpbmcgICAgICAgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBDSEFSX1RBQiAgICAgICAgICAgICAgICAgID0gMHgwOTsgLyogVGFiICovXG52YXIgQ0hBUl9MSU5FX0ZFRUQgICAgICAgICAgICA9IDB4MEE7IC8qIExGICovXG52YXIgQ0hBUl9DQVJSSUFHRV9SRVRVUk4gICAgICA9IDB4MEQ7IC8qIENSICovXG52YXIgQ0hBUl9TUEFDRSAgICAgICAgICAgICAgICA9IDB4MjA7IC8qIFNwYWNlICovXG52YXIgQ0hBUl9FWENMQU1BVElPTiAgICAgICAgICA9IDB4MjE7IC8qICEgKi9cbnZhciBDSEFSX0RPVUJMRV9RVU9URSAgICAgICAgID0gMHgyMjsgLyogXCIgKi9cbnZhciBDSEFSX1NIQVJQICAgICAgICAgICAgICAgID0gMHgyMzsgLyogIyAqL1xudmFyIENIQVJfUEVSQ0VOVCAgICAgICAgICAgICAgPSAweDI1OyAvKiAlICovXG52YXIgQ0hBUl9BTVBFUlNBTkQgICAgICAgICAgICA9IDB4MjY7IC8qICYgKi9cbnZhciBDSEFSX1NJTkdMRV9RVU9URSAgICAgICAgID0gMHgyNzsgLyogJyAqL1xudmFyIENIQVJfQVNURVJJU0sgICAgICAgICAgICAgPSAweDJBOyAvKiAqICovXG52YXIgQ0hBUl9DT01NQSAgICAgICAgICAgICAgICA9IDB4MkM7IC8qICwgKi9cbnZhciBDSEFSX01JTlVTICAgICAgICAgICAgICAgID0gMHgyRDsgLyogLSAqL1xudmFyIENIQVJfQ09MT04gICAgICAgICAgICAgICAgPSAweDNBOyAvKiA6ICovXG52YXIgQ0hBUl9FUVVBTFMgICAgICAgICAgICAgICA9IDB4M0Q7IC8qID0gKi9cbnZhciBDSEFSX0dSRUFURVJfVEhBTiAgICAgICAgID0gMHgzRTsgLyogPiAqL1xudmFyIENIQVJfUVVFU1RJT04gICAgICAgICAgICAgPSAweDNGOyAvKiA/ICovXG52YXIgQ0hBUl9DT01NRVJDSUFMX0FUICAgICAgICA9IDB4NDA7IC8qIEAgKi9cbnZhciBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQgID0gMHg1QjsgLyogWyAqL1xudmFyIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQgPSAweDVEOyAvKiBdICovXG52YXIgQ0hBUl9HUkFWRV9BQ0NFTlQgICAgICAgICA9IDB4NjA7IC8qIGAgKi9cbnZhciBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVCAgID0gMHg3QjsgLyogeyAqL1xudmFyIENIQVJfVkVSVElDQUxfTElORSAgICAgICAgPSAweDdDOyAvKiB8ICovXG52YXIgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUICA9IDB4N0Q7IC8qIH0gKi9cblxudmFyIEVTQ0FQRV9TRVFVRU5DRVMgPSB7fTtcblxuRVNDQVBFX1NFUVVFTkNFU1sweDAwXSAgID0gJ1xcXFwwJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwN10gICA9ICdcXFxcYSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDhdICAgPSAnXFxcXGInO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA5XSAgID0gJ1xcXFx0JztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQV0gICA9ICdcXFxcbic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MEJdICAgPSAnXFxcXHYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBDXSAgID0gJ1xcXFxmJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwRF0gICA9ICdcXFxccic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MUJdICAgPSAnXFxcXGUnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIyXSAgID0gJ1xcXFxcIic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4NUNdICAgPSAnXFxcXFxcXFwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDg1XSAgID0gJ1xcXFxOJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHhBMF0gICA9ICdcXFxcXyc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOF0gPSAnXFxcXEwnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDIwMjldID0gJ1xcXFxQJztcblxudmFyIERFUFJFQ0FURURfQk9PTEVBTlNfU1lOVEFYID0gW1xuICAneScsICdZJywgJ3llcycsICdZZXMnLCAnWUVTJywgJ29uJywgJ09uJywgJ09OJyxcbiAgJ24nLCAnTicsICdubycsICdObycsICdOTycsICdvZmYnLCAnT2ZmJywgJ09GRidcbl07XG5cbmZ1bmN0aW9uIGNvbXBpbGVTdHlsZU1hcChzY2hlbWEsIG1hcCkge1xuICB2YXIgcmVzdWx0LCBrZXlzLCBpbmRleCwgbGVuZ3RoLCB0YWcsIHN0eWxlLCB0eXBlO1xuXG4gIGlmIChtYXAgPT09IG51bGwpIHJldHVybiB7fTtcblxuICByZXN1bHQgPSB7fTtcbiAga2V5cyA9IE9iamVjdC5rZXlzKG1hcCk7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IGtleXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHRhZyA9IGtleXNbaW5kZXhdO1xuICAgIHN0eWxlID0gU3RyaW5nKG1hcFt0YWddKTtcblxuICAgIGlmICh0YWcuc2xpY2UoMCwgMikgPT09ICchIScpIHtcbiAgICAgIHRhZyA9ICd0YWc6eWFtbC5vcmcsMjAwMjonICsgdGFnLnNsaWNlKDIpO1xuICAgIH1cbiAgICB0eXBlID0gc2NoZW1hLmNvbXBpbGVkVHlwZU1hcFsnZmFsbGJhY2snXVt0YWddO1xuXG4gICAgaWYgKHR5cGUgJiYgX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5zdHlsZUFsaWFzZXMsIHN0eWxlKSkge1xuICAgICAgc3R5bGUgPSB0eXBlLnN0eWxlQWxpYXNlc1tzdHlsZV07XG4gICAgfVxuXG4gICAgcmVzdWx0W3RhZ10gPSBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUhleChjaGFyYWN0ZXIpIHtcbiAgdmFyIHN0cmluZywgaGFuZGxlLCBsZW5ndGg7XG5cbiAgc3RyaW5nID0gY2hhcmFjdGVyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgPD0gMHhGRikge1xuICAgIGhhbmRsZSA9ICd4JztcbiAgICBsZW5ndGggPSAyO1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA8PSAweEZGRkYpIHtcbiAgICBoYW5kbGUgPSAndSc7XG4gICAgbGVuZ3RoID0gNDtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPD0gMHhGRkZGRkZGRikge1xuICAgIGhhbmRsZSA9ICdVJztcbiAgICBsZW5ndGggPSA4O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCdjb2RlIHBvaW50IHdpdGhpbiBhIHN0cmluZyBtYXkgbm90IGJlIGdyZWF0ZXIgdGhhbiAweEZGRkZGRkZGJyk7XG4gIH1cblxuICByZXR1cm4gJ1xcXFwnICsgaGFuZGxlICsgY29tbW9uLnJlcGVhdCgnMCcsIGxlbmd0aCAtIHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBTdGF0ZShvcHRpb25zKSB7XG4gIHRoaXMuc2NoZW1hICAgICAgICA9IG9wdGlvbnNbJ3NjaGVtYSddIHx8IERFRkFVTFRfRlVMTF9TQ0hFTUE7XG4gIHRoaXMuaW5kZW50ICAgICAgICA9IE1hdGgubWF4KDEsIChvcHRpb25zWydpbmRlbnQnXSB8fCAyKSk7XG4gIHRoaXMubm9BcnJheUluZGVudCA9IG9wdGlvbnNbJ25vQXJyYXlJbmRlbnQnXSB8fCBmYWxzZTtcbiAgdGhpcy5za2lwSW52YWxpZCAgID0gb3B0aW9uc1snc2tpcEludmFsaWQnXSB8fCBmYWxzZTtcbiAgdGhpcy5mbG93TGV2ZWwgICAgID0gKGNvbW1vbi5pc05vdGhpbmcob3B0aW9uc1snZmxvd0xldmVsJ10pID8gLTEgOiBvcHRpb25zWydmbG93TGV2ZWwnXSk7XG4gIHRoaXMuc3R5bGVNYXAgICAgICA9IGNvbXBpbGVTdHlsZU1hcCh0aGlzLnNjaGVtYSwgb3B0aW9uc1snc3R5bGVzJ10gfHwgbnVsbCk7XG4gIHRoaXMuc29ydEtleXMgICAgICA9IG9wdGlvbnNbJ3NvcnRLZXlzJ10gfHwgZmFsc2U7XG4gIHRoaXMubGluZVdpZHRoICAgICA9IG9wdGlvbnNbJ2xpbmVXaWR0aCddIHx8IDgwO1xuICB0aGlzLm5vUmVmcyAgICAgICAgPSBvcHRpb25zWydub1JlZnMnXSB8fCBmYWxzZTtcbiAgdGhpcy5ub0NvbXBhdE1vZGUgID0gb3B0aW9uc1snbm9Db21wYXRNb2RlJ10gfHwgZmFsc2U7XG4gIHRoaXMuY29uZGVuc2VGbG93ICA9IG9wdGlvbnNbJ2NvbmRlbnNlRmxvdyddIHx8IGZhbHNlO1xuXG4gIHRoaXMuaW1wbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkSW1wbGljaXQ7XG4gIHRoaXMuZXhwbGljaXRUeXBlcyA9IHRoaXMuc2NoZW1hLmNvbXBpbGVkRXhwbGljaXQ7XG5cbiAgdGhpcy50YWcgPSBudWxsO1xuICB0aGlzLnJlc3VsdCA9ICcnO1xuXG4gIHRoaXMuZHVwbGljYXRlcyA9IFtdO1xuICB0aGlzLnVzZWREdXBsaWNhdGVzID0gbnVsbDtcbn1cblxuLy8gSW5kZW50cyBldmVyeSBsaW5lIGluIGEgc3RyaW5nLiBFbXB0eSBsaW5lcyAoXFxuIG9ubHkpIGFyZSBub3QgaW5kZW50ZWQuXG5mdW5jdGlvbiBpbmRlbnRTdHJpbmcoc3RyaW5nLCBzcGFjZXMpIHtcbiAgdmFyIGluZCA9IGNvbW1vbi5yZXBlYXQoJyAnLCBzcGFjZXMpLFxuICAgICAgcG9zaXRpb24gPSAwLFxuICAgICAgbmV4dCA9IC0xLFxuICAgICAgcmVzdWx0ID0gJycsXG4gICAgICBsaW5lLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAocG9zaXRpb24gPCBsZW5ndGgpIHtcbiAgICBuZXh0ID0gc3RyaW5nLmluZGV4T2YoJ1xcbicsIHBvc2l0aW9uKTtcbiAgICBpZiAobmV4dCA9PT0gLTEpIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24pO1xuICAgICAgcG9zaXRpb24gPSBsZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUgPSBzdHJpbmcuc2xpY2UocG9zaXRpb24sIG5leHQgKyAxKTtcbiAgICAgIHBvc2l0aW9uID0gbmV4dCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGxpbmUubGVuZ3RoICYmIGxpbmUgIT09ICdcXG4nKSByZXN1bHQgKz0gaW5kO1xuXG4gICAgcmVzdWx0ICs9IGxpbmU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCkge1xuICByZXR1cm4gJ1xcbicgKyBjb21tb24ucmVwZWF0KCcgJywgc3RhdGUuaW5kZW50ICogbGV2ZWwpO1xufVxuXG5mdW5jdGlvbiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cikge1xuICB2YXIgaW5kZXgsIGxlbmd0aCwgdHlwZTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdHlwZSA9IHN0YXRlLmltcGxpY2l0VHlwZXNbaW5kZXhdO1xuXG4gICAgaWYgKHR5cGUucmVzb2x2ZShzdHIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFszM10gcy13aGl0ZSA6Oj0gcy1zcGFjZSB8IHMtdGFiXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoYykge1xuICByZXR1cm4gYyA9PT0gQ0hBUl9TUEFDRSB8fCBjID09PSBDSEFSX1RBQjtcbn1cblxuLy8gUmV0dXJucyB0cnVlIGlmIHRoZSBjaGFyYWN0ZXIgY2FuIGJlIHByaW50ZWQgd2l0aG91dCBlc2NhcGluZy5cbi8vIEZyb20gWUFNTCAxLjI6IFwiYW55IGFsbG93ZWQgY2hhcmFjdGVycyBrbm93biB0byBiZSBub24tcHJpbnRhYmxlXG4vLyBzaG91bGQgYWxzbyBiZSBlc2NhcGVkLiBbSG93ZXZlcixdIFRoaXMgaXNuXHUyMDE5dCBtYW5kYXRvcnlcIlxuLy8gRGVyaXZlZCBmcm9tIG5iLWNoYXIgLSBcXHQgLSAjeDg1IC0gI3hBMCAtICN4MjAyOCAtICN4MjAyOS5cbmZ1bmN0aW9uIGlzUHJpbnRhYmxlKGMpIHtcbiAgcmV0dXJuICAoMHgwMDAyMCA8PSBjICYmIGMgPD0gMHgwMDAwN0UpXG4gICAgICB8fCAoKDB4MDAwQTEgPD0gYyAmJiBjIDw9IDB4MDBEN0ZGKSAmJiBjICE9PSAweDIwMjggJiYgYyAhPT0gMHgyMDI5KVxuICAgICAgfHwgKCgweDBFMDAwIDw9IGMgJiYgYyA8PSAweDAwRkZGRCkgJiYgYyAhPT0gMHhGRUZGIC8qIEJPTSAqLylcbiAgICAgIHx8ICAoMHgxMDAwMCA8PSBjICYmIGMgPD0gMHgxMEZGRkYpO1xufVxuXG4vLyBbMzRdIG5zLWNoYXIgOjo9IG5iLWNoYXIgLSBzLXdoaXRlXG4vLyBbMjddIG5iLWNoYXIgOjo9IGMtcHJpbnRhYmxlIC0gYi1jaGFyIC0gYy1ieXRlLW9yZGVyLW1hcmtcbi8vIFsyNl0gYi1jaGFyICA6Oj0gYi1saW5lLWZlZWQgfCBiLWNhcnJpYWdlLXJldHVyblxuLy8gWzI0XSBiLWxpbmUtZmVlZCAgICAgICA6Oj0gICAgICN4QSAgICAvKiBMRiAqL1xuLy8gWzI1XSBiLWNhcnJpYWdlLXJldHVybiA6Oj0gICAgICN4RCAgICAvKiBDUiAqL1xuLy8gWzNdICBjLWJ5dGUtb3JkZXItbWFyayA6Oj0gICAgICN4RkVGRlxuZnVuY3Rpb24gaXNOc0NoYXIoYykge1xuICByZXR1cm4gaXNQcmludGFibGUoYykgJiYgIWlzV2hpdGVzcGFjZShjKVxuICAgIC8vIGJ5dGUtb3JkZXItbWFya1xuICAgICYmIGMgIT09IDB4RkVGRlxuICAgIC8vIGItY2hhclxuICAgICYmIGMgIT09IENIQVJfQ0FSUklBR0VfUkVUVVJOXG4gICAgJiYgYyAhPT0gQ0hBUl9MSU5FX0ZFRUQ7XG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYWZ0ZXIgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlKGMsIHByZXYpIHtcbiAgLy8gVXNlcyBhIHN1YnNldCBvZiBuYi1jaGFyIC0gYy1mbG93LWluZGljYXRvciAtIFwiOlwiIC0gXCIjXCJcbiAgLy8gd2hlcmUgbmItY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWNoYXIgLSBjLWJ5dGUtb3JkZXItbWFyay5cbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpICYmIGMgIT09IDB4RkVGRlxuICAgIC8vIC0gYy1mbG93LWluZGljYXRvclxuICAgICYmIGMgIT09IENIQVJfQ09NTUFcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUXG4gICAgJiYgYyAhPT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVRcbiAgICAvLyAtIFwiOlwiIC0gXCIjXCJcbiAgICAvLyAvKiBBbiBucy1jaGFyIHByZWNlZGluZyAqLyBcIiNcIlxuICAgICYmIGMgIT09IENIQVJfQ09MT05cbiAgICAmJiAoKGMgIT09IENIQVJfU0hBUlApIHx8IChwcmV2ICYmIGlzTnNDaGFyKHByZXYpKSk7XG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYXMgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlRmlyc3QoYykge1xuICAvLyBVc2VzIGEgc3Vic2V0IG9mIG5zLWNoYXIgLSBjLWluZGljYXRvclxuICAvLyB3aGVyZSBucy1jaGFyID0gbmItY2hhciAtIHMtd2hpdGUuXG4gIHJldHVybiBpc1ByaW50YWJsZShjKSAmJiBjICE9PSAweEZFRkZcbiAgICAmJiAhaXNXaGl0ZXNwYWNlKGMpIC8vIC0gcy13aGl0ZVxuICAgIC8vIC0gKGMtaW5kaWNhdG9yIDo6PVxuICAgIC8vIFx1MjAxQy1cdTIwMUQgfCBcdTIwMUM/XHUyMDFEIHwgXHUyMDFDOlx1MjAxRCB8IFx1MjAxQyxcdTIwMUQgfCBcdTIwMUNbXHUyMDFEIHwgXHUyMDFDXVx1MjAxRCB8IFx1MjAxQ3tcdTIwMUQgfCBcdTIwMUN9XHUyMDFEXG4gICAgJiYgYyAhPT0gQ0hBUl9NSU5VU1xuICAgICYmIGMgIT09IENIQVJfUVVFU1RJT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTE9OXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICAgIC8vIHwgXHUyMDFDI1x1MjAxRCB8IFx1MjAxQyZcdTIwMUQgfCBcdTIwMUMqXHUyMDFEIHwgXHUyMDFDIVx1MjAxRCB8IFx1MjAxQ3xcdTIwMUQgfCBcdTIwMUM9XHUyMDFEIHwgXHUyMDFDPlx1MjAxRCB8IFx1MjAxQydcdTIwMUQgfCBcdTIwMUNcIlx1MjAxRFxuICAgICYmIGMgIT09IENIQVJfU0hBUlBcbiAgICAmJiBjICE9PSBDSEFSX0FNUEVSU0FORFxuICAgICYmIGMgIT09IENIQVJfQVNURVJJU0tcbiAgICAmJiBjICE9PSBDSEFSX0VYQ0xBTUFUSU9OXG4gICAgJiYgYyAhPT0gQ0hBUl9WRVJUSUNBTF9MSU5FXG4gICAgJiYgYyAhPT0gQ0hBUl9FUVVBTFNcbiAgICAmJiBjICE9PSBDSEFSX0dSRUFURVJfVEhBTlxuICAgICYmIGMgIT09IENIQVJfU0lOR0xFX1FVT1RFXG4gICAgJiYgYyAhPT0gQ0hBUl9ET1VCTEVfUVVPVEVcbiAgICAvLyB8IFx1MjAxQyVcdTIwMUQgfCBcdTIwMUNAXHUyMDFEIHwgXHUyMDFDYFx1MjAxRClcbiAgICAmJiBjICE9PSBDSEFSX1BFUkNFTlRcbiAgICAmJiBjICE9PSBDSEFSX0NPTU1FUkNJQUxfQVRcbiAgICAmJiBjICE9PSBDSEFSX0dSQVZFX0FDQ0VOVDtcbn1cblxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGJsb2NrIGluZGVudGF0aW9uIGluZGljYXRvciBpcyByZXF1aXJlZC5cbmZ1bmN0aW9uIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSB7XG4gIHZhciBsZWFkaW5nU3BhY2VSZSA9IC9eXFxuKiAvO1xuICByZXR1cm4gbGVhZGluZ1NwYWNlUmUudGVzdChzdHJpbmcpO1xufVxuXG52YXIgU1RZTEVfUExBSU4gICA9IDEsXG4gICAgU1RZTEVfU0lOR0xFICA9IDIsXG4gICAgU1RZTEVfTElURVJBTCA9IDMsXG4gICAgU1RZTEVfRk9MREVEICA9IDQsXG4gICAgU1RZTEVfRE9VQkxFICA9IDU7XG5cbi8vIERldGVybWluZXMgd2hpY2ggc2NhbGFyIHN0eWxlcyBhcmUgcG9zc2libGUgYW5kIHJldHVybnMgdGhlIHByZWZlcnJlZCBzdHlsZS5cbi8vIGxpbmVXaWR0aCA9IC0xID0+IG5vIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0ci5sZW5ndGggPiAwLlxuLy8gUG9zdC1jb25kaXRpb25zOlxuLy8gICAgU1RZTEVfUExBSU4gb3IgU1RZTEVfU0lOR0xFID0+IG5vIFxcbiBhcmUgaW4gdGhlIHN0cmluZy5cbi8vICAgIFNUWUxFX0xJVEVSQUwgPT4gbm8gbGluZXMgYXJlIHN1aXRhYmxlIGZvciBmb2xkaW5nIChvciBsaW5lV2lkdGggaXMgLTEpLlxuLy8gICAgU1RZTEVfRk9MREVEID0+IGEgbGluZSA+IGxpbmVXaWR0aCBhbmQgY2FuIGJlIGZvbGRlZCAoYW5kIGxpbmVXaWR0aCAhPSAtMSkuXG5mdW5jdGlvbiBjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBpbmRlbnRQZXJMZXZlbCwgbGluZVdpZHRoLCB0ZXN0QW1iaWd1b3VzVHlwZSkge1xuICB2YXIgaTtcbiAgdmFyIGNoYXIsIHByZXZfY2hhcjtcbiAgdmFyIGhhc0xpbmVCcmVhayA9IGZhbHNlO1xuICB2YXIgaGFzRm9sZGFibGVMaW5lID0gZmFsc2U7IC8vIG9ubHkgY2hlY2tlZCBpZiBzaG91bGRUcmFja1dpZHRoXG4gIHZhciBzaG91bGRUcmFja1dpZHRoID0gbGluZVdpZHRoICE9PSAtMTtcbiAgdmFyIHByZXZpb3VzTGluZUJyZWFrID0gLTE7IC8vIGNvdW50IHRoZSBmaXJzdCBsaW5lIGNvcnJlY3RseVxuICB2YXIgcGxhaW4gPSBpc1BsYWluU2FmZUZpcnN0KHN0cmluZy5jaGFyQ29kZUF0KDApKVxuICAgICAgICAgICYmICFpc1doaXRlc3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoc3RyaW5nLmxlbmd0aCAtIDEpKTtcblxuICBpZiAoc2luZ2xlTGluZU9ubHkpIHtcbiAgICAvLyBDYXNlOiBubyBibG9jayBzdHlsZXMuXG4gICAgLy8gQ2hlY2sgZm9yIGRpc2FsbG93ZWQgY2hhcmFjdGVycyB0byBydWxlIG91dCBwbGFpbiBhbmQgc2luZ2xlLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIGlmICghaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgICAgcmV0dXJuIFNUWUxFX0RPVUJMRTtcbiAgICAgIH1cbiAgICAgIHByZXZfY2hhciA9IGkgPiAwID8gc3RyaW5nLmNoYXJDb2RlQXQoaSAtIDEpIDogbnVsbDtcbiAgICAgIHBsYWluID0gcGxhaW4gJiYgaXNQbGFpblNhZmUoY2hhciwgcHJldl9jaGFyKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2FzZTogYmxvY2sgc3R5bGVzIHBlcm1pdHRlZC5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICBpZiAoY2hhciA9PT0gQ0hBUl9MSU5FX0ZFRUQpIHtcbiAgICAgICAgaGFzTGluZUJyZWFrID0gdHJ1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGxpbmUgY2FuIGJlIGZvbGRlZC5cbiAgICAgICAgaWYgKHNob3VsZFRyYWNrV2lkdGgpIHtcbiAgICAgICAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHxcbiAgICAgICAgICAgIC8vIEZvbGRhYmxlIGxpbmUgPSB0b28gbG9uZywgYW5kIG5vdCBtb3JlLWluZGVudGVkLlxuICAgICAgICAgICAgKGkgLSBwcmV2aW91c0xpbmVCcmVhayAtIDEgPiBsaW5lV2lkdGggJiZcbiAgICAgICAgICAgICBzdHJpbmdbcHJldmlvdXNMaW5lQnJlYWsgKyAxXSAhPT0gJyAnKTtcbiAgICAgICAgICBwcmV2aW91c0xpbmVCcmVhayA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJpbnRhYmxlKGNoYXIpKSB7XG4gICAgICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gICAgICB9XG4gICAgICBwcmV2X2NoYXIgPSBpID4gMCA/IHN0cmluZy5jaGFyQ29kZUF0KGkgLSAxKSA6IG51bGw7XG4gICAgICBwbGFpbiA9IHBsYWluICYmIGlzUGxhaW5TYWZlKGNoYXIsIHByZXZfY2hhcik7XG4gICAgfVxuICAgIC8vIGluIGNhc2UgdGhlIGVuZCBpcyBtaXNzaW5nIGEgXFxuXG4gICAgaGFzRm9sZGFibGVMaW5lID0gaGFzRm9sZGFibGVMaW5lIHx8IChzaG91bGRUcmFja1dpZHRoICYmXG4gICAgICAoaSAtIHByZXZpb3VzTGluZUJyZWFrIC0gMSA+IGxpbmVXaWR0aCAmJlxuICAgICAgIHN0cmluZ1twcmV2aW91c0xpbmVCcmVhayArIDFdICE9PSAnICcpKTtcbiAgfVxuICAvLyBBbHRob3VnaCBldmVyeSBzdHlsZSBjYW4gcmVwcmVzZW50IFxcbiB3aXRob3V0IGVzY2FwaW5nLCBwcmVmZXIgYmxvY2sgc3R5bGVzXG4gIC8vIGZvciBtdWx0aWxpbmUsIHNpbmNlIHRoZXkncmUgbW9yZSByZWFkYWJsZSBhbmQgdGhleSBkb24ndCBhZGQgZW1wdHkgbGluZXMuXG4gIC8vIEFsc28gcHJlZmVyIGZvbGRpbmcgYSBzdXBlci1sb25nIGxpbmUuXG4gIGlmICghaGFzTGluZUJyZWFrICYmICFoYXNGb2xkYWJsZUxpbmUpIHtcbiAgICAvLyBTdHJpbmdzIGludGVycHJldGFibGUgYXMgYW5vdGhlciB0eXBlIGhhdmUgdG8gYmUgcXVvdGVkO1xuICAgIC8vIGUuZy4gdGhlIHN0cmluZyAndHJ1ZScgdnMuIHRoZSBib29sZWFuIHRydWUuXG4gICAgcmV0dXJuIHBsYWluICYmICF0ZXN0QW1iaWd1b3VzVHlwZShzdHJpbmcpXG4gICAgICA/IFNUWUxFX1BMQUlOIDogU1RZTEVfU0lOR0xFO1xuICB9XG4gIC8vIEVkZ2UgY2FzZTogYmxvY2sgaW5kZW50YXRpb24gaW5kaWNhdG9yIGNhbiBvbmx5IGhhdmUgb25lIGRpZ2l0LlxuICBpZiAoaW5kZW50UGVyTGV2ZWwgPiA5ICYmIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSkge1xuICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gIH1cbiAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IGJsb2NrIHN0eWxlcyBhcmUgdmFsaWQuXG4gIC8vIFByZWZlciBsaXRlcmFsIHN0eWxlIHVubGVzcyB3ZSB3YW50IHRvIGZvbGQuXG4gIHJldHVybiBoYXNGb2xkYWJsZUxpbmUgPyBTVFlMRV9GT0xERUQgOiBTVFlMRV9MSVRFUkFMO1xufVxuXG4vLyBOb3RlOiBsaW5lIGJyZWFraW5nL2ZvbGRpbmcgaXMgaW1wbGVtZW50ZWQgZm9yIG9ubHkgdGhlIGZvbGRlZCBzdHlsZS5cbi8vIE5CLiBXZSBkcm9wIHRoZSBsYXN0IHRyYWlsaW5nIG5ld2xpbmUgKGlmIGFueSkgb2YgYSByZXR1cm5lZCBibG9jayBzY2FsYXJcbi8vICBzaW5jZSB0aGUgZHVtcGVyIGFkZHMgaXRzIG93biBuZXdsaW5lLiBUaGlzIGFsd2F5cyB3b3Jrczpcbi8vICAgIFx1MjAyMiBObyBlbmRpbmcgbmV3bGluZSA9PiB1bmFmZmVjdGVkOyBhbHJlYWR5IHVzaW5nIHN0cmlwIFwiLVwiIGNob21waW5nLlxuLy8gICAgXHUyMDIyIEVuZGluZyBuZXdsaW5lICAgID0+IHJlbW92ZWQgdGhlbiByZXN0b3JlZC5cbi8vICBJbXBvcnRhbnRseSwgdGhpcyBrZWVwcyB0aGUgXCIrXCIgY2hvbXAgaW5kaWNhdG9yIGZyb20gZ2FpbmluZyBhbiBleHRyYSBsaW5lLlxuZnVuY3Rpb24gd3JpdGVTY2FsYXIoc3RhdGUsIHN0cmluZywgbGV2ZWwsIGlza2V5KSB7XG4gIHN0YXRlLmR1bXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCInJ1wiO1xuICAgIH1cbiAgICBpZiAoIXN0YXRlLm5vQ29tcGF0TW9kZSAmJlxuICAgICAgICBERVBSRUNBVEVEX0JPT0xFQU5TX1NZTlRBWC5pbmRleE9mKHN0cmluZykgIT09IC0xKSB7XG4gICAgICByZXR1cm4gXCInXCIgKyBzdHJpbmcgKyBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZW50ID0gc3RhdGUuaW5kZW50ICogTWF0aC5tYXgoMSwgbGV2ZWwpOyAvLyBubyAwLWluZGVudCBzY2FsYXJzXG4gICAgLy8gQXMgaW5kZW50YXRpb24gZ2V0cyBkZWVwZXIsIGxldCB0aGUgd2lkdGggZGVjcmVhc2UgbW9ub3RvbmljYWxseVxuICAgIC8vIHRvIHRoZSBsb3dlciBib3VuZCBtaW4oc3RhdGUubGluZVdpZHRoLCA0MCkuXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaW1wbGllc1xuICAgIC8vICBzdGF0ZS5saW5lV2lkdGggXHUyMjY0IDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBpcyBmaXhlZCBhdCB0aGUgbG93ZXIgYm91bmQuXG4gICAgLy8gIHN0YXRlLmxpbmVXaWR0aCA+IDQwICsgc3RhdGUuaW5kZW50OiB3aWR0aCBkZWNyZWFzZXMgdW50aWwgdGhlIGxvd2VyIGJvdW5kLlxuICAgIC8vIFRoaXMgYmVoYXZlcyBiZXR0ZXIgdGhhbiBhIGNvbnN0YW50IG1pbmltdW0gd2lkdGggd2hpY2ggZGlzYWxsb3dzIG5hcnJvd2VyIG9wdGlvbnMsXG4gICAgLy8gb3IgYW4gaW5kZW50IHRocmVzaG9sZCB3aGljaCBjYXVzZXMgdGhlIHdpZHRoIHRvIHN1ZGRlbmx5IGluY3JlYXNlLlxuICAgIHZhciBsaW5lV2lkdGggPSBzdGF0ZS5saW5lV2lkdGggPT09IC0xXG4gICAgICA/IC0xIDogTWF0aC5tYXgoTWF0aC5taW4oc3RhdGUubGluZVdpZHRoLCA0MCksIHN0YXRlLmxpbmVXaWR0aCAtIGluZGVudCk7XG5cbiAgICAvLyBXaXRob3V0IGtub3dpbmcgaWYga2V5cyBhcmUgaW1wbGljaXQvZXhwbGljaXQsIGFzc3VtZSBpbXBsaWNpdCBmb3Igc2FmZXR5LlxuICAgIHZhciBzaW5nbGVMaW5lT25seSA9IGlza2V5XG4gICAgICAvLyBObyBibG9jayBzdHlsZXMgaW4gZmxvdyBtb2RlLlxuICAgICAgfHwgKHN0YXRlLmZsb3dMZXZlbCA+IC0xICYmIGxldmVsID49IHN0YXRlLmZsb3dMZXZlbCk7XG4gICAgZnVuY3Rpb24gdGVzdEFtYmlndWl0eShzdHJpbmcpIHtcbiAgICAgIHJldHVybiB0ZXN0SW1wbGljaXRSZXNvbHZpbmcoc3RhdGUsIHN0cmluZyk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBzdGF0ZS5pbmRlbnQsIGxpbmVXaWR0aCwgdGVzdEFtYmlndWl0eSkpIHtcbiAgICAgIGNhc2UgU1RZTEVfUExBSU46XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICBjYXNlIFNUWUxFX1NJTkdMRTpcbiAgICAgICAgcmV0dXJuIFwiJ1wiICsgc3RyaW5nLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICAgICAgY2FzZSBTVFlMRV9MSVRFUkFMOlxuICAgICAgICByZXR1cm4gJ3wnICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoc3RyaW5nLCBpbmRlbnQpKTtcbiAgICAgIGNhc2UgU1RZTEVfRk9MREVEOlxuICAgICAgICByZXR1cm4gJz4nICsgYmxvY2tIZWFkZXIoc3RyaW5nLCBzdGF0ZS5pbmRlbnQpXG4gICAgICAgICAgKyBkcm9wRW5kaW5nTmV3bGluZShpbmRlbnRTdHJpbmcoZm9sZFN0cmluZyhzdHJpbmcsIGxpbmVXaWR0aCksIGluZGVudCkpO1xuICAgICAgY2FzZSBTVFlMRV9ET1VCTEU6XG4gICAgICAgIHJldHVybiAnXCInICsgZXNjYXBlU3RyaW5nKHN0cmluZywgbGluZVdpZHRoKSArICdcIic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignaW1wb3NzaWJsZSBlcnJvcjogaW52YWxpZCBzY2FsYXIgc3R5bGUnKTtcbiAgICB9XG4gIH0oKSk7XG59XG5cbi8vIFByZS1jb25kaXRpb25zOiBzdHJpbmcgaXMgdmFsaWQgZm9yIGEgYmxvY2sgc2NhbGFyLCAxIDw9IGluZGVudFBlckxldmVsIDw9IDkuXG5mdW5jdGlvbiBibG9ja0hlYWRlcihzdHJpbmcsIGluZGVudFBlckxldmVsKSB7XG4gIHZhciBpbmRlbnRJbmRpY2F0b3IgPSBuZWVkSW5kZW50SW5kaWNhdG9yKHN0cmluZykgPyBTdHJpbmcoaW5kZW50UGVyTGV2ZWwpIDogJyc7XG5cbiAgLy8gbm90ZSB0aGUgc3BlY2lhbCBjYXNlOiB0aGUgc3RyaW5nICdcXG4nIGNvdW50cyBhcyBhIFwidHJhaWxpbmdcIiBlbXB0eSBsaW5lLlxuICB2YXIgY2xpcCA9ICAgICAgICAgIHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMV0gPT09ICdcXG4nO1xuICB2YXIga2VlcCA9IGNsaXAgJiYgKHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMl0gPT09ICdcXG4nIHx8IHN0cmluZyA9PT0gJ1xcbicpO1xuICB2YXIgY2hvbXAgPSBrZWVwID8gJysnIDogKGNsaXAgPyAnJyA6ICctJyk7XG5cbiAgcmV0dXJuIGluZGVudEluZGljYXRvciArIGNob21wICsgJ1xcbic7XG59XG5cbi8vIChTZWUgdGhlIG5vdGUgZm9yIHdyaXRlU2NhbGFyLilcbmZ1bmN0aW9uIGRyb3BFbmRpbmdOZXdsaW5lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nW3N0cmluZy5sZW5ndGggLSAxXSA9PT0gJ1xcbicgPyBzdHJpbmcuc2xpY2UoMCwgLTEpIDogc3RyaW5nO1xufVxuXG4vLyBOb3RlOiBhIGxvbmcgbGluZSB3aXRob3V0IGEgc3VpdGFibGUgYnJlYWsgcG9pbnQgd2lsbCBleGNlZWQgdGhlIHdpZHRoIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IGV2ZXJ5IGNoYXIgaW4gc3RyIGlzUHJpbnRhYmxlLCBzdHIubGVuZ3RoID4gMCwgd2lkdGggPiAwLlxuZnVuY3Rpb24gZm9sZFN0cmluZyhzdHJpbmcsIHdpZHRoKSB7XG4gIC8vIEluIGZvbGRlZCBzdHlsZSwgJGskIGNvbnNlY3V0aXZlIG5ld2xpbmVzIG91dHB1dCBhcyAkaysxJCBuZXdsaW5lc1x1MjAxNFxuICAvLyB1bmxlc3MgdGhleSdyZSBiZWZvcmUgb3IgYWZ0ZXIgYSBtb3JlLWluZGVudGVkIGxpbmUsIG9yIGF0IHRoZSB2ZXJ5XG4gIC8vIGJlZ2lubmluZyBvciBlbmQsIGluIHdoaWNoIGNhc2UgJGskIG1hcHMgdG8gJGskLlxuICAvLyBUaGVyZWZvcmUsIHBhcnNlIGVhY2ggY2h1bmsgYXMgbmV3bGluZShzKSBmb2xsb3dlZCBieSBhIGNvbnRlbnQgbGluZS5cbiAgdmFyIGxpbmVSZSA9IC8oXFxuKykoW15cXG5dKikvZztcblxuICAvLyBmaXJzdCBsaW5lIChwb3NzaWJseSBhbiBlbXB0eSBsaW5lKVxuICB2YXIgcmVzdWx0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV4dExGID0gc3RyaW5nLmluZGV4T2YoJ1xcbicpO1xuICAgIG5leHRMRiA9IG5leHRMRiAhPT0gLTEgPyBuZXh0TEYgOiBzdHJpbmcubGVuZ3RoO1xuICAgIGxpbmVSZS5sYXN0SW5kZXggPSBuZXh0TEY7XG4gICAgcmV0dXJuIGZvbGRMaW5lKHN0cmluZy5zbGljZSgwLCBuZXh0TEYpLCB3aWR0aCk7XG4gIH0oKSk7XG4gIC8vIElmIHdlIGhhdmVuJ3QgcmVhY2hlZCB0aGUgZmlyc3QgY29udGVudCBsaW5lIHlldCwgZG9uJ3QgYWRkIGFuIGV4dHJhIFxcbi5cbiAgdmFyIHByZXZNb3JlSW5kZW50ZWQgPSBzdHJpbmdbMF0gPT09ICdcXG4nIHx8IHN0cmluZ1swXSA9PT0gJyAnO1xuICB2YXIgbW9yZUluZGVudGVkO1xuXG4gIC8vIHJlc3Qgb2YgdGhlIGxpbmVzXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IGxpbmVSZS5leGVjKHN0cmluZykpKSB7XG4gICAgdmFyIHByZWZpeCA9IG1hdGNoWzFdLCBsaW5lID0gbWF0Y2hbMl07XG4gICAgbW9yZUluZGVudGVkID0gKGxpbmVbMF0gPT09ICcgJyk7XG4gICAgcmVzdWx0ICs9IHByZWZpeFxuICAgICAgKyAoIXByZXZNb3JlSW5kZW50ZWQgJiYgIW1vcmVJbmRlbnRlZCAmJiBsaW5lICE9PSAnJ1xuICAgICAgICA/ICdcXG4nIDogJycpXG4gICAgICArIGZvbGRMaW5lKGxpbmUsIHdpZHRoKTtcbiAgICBwcmV2TW9yZUluZGVudGVkID0gbW9yZUluZGVudGVkO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gR3JlZWR5IGxpbmUgYnJlYWtpbmcuXG4vLyBQaWNrcyB0aGUgbG9uZ2VzdCBsaW5lIHVuZGVyIHRoZSBsaW1pdCBlYWNoIHRpbWUsXG4vLyBvdGhlcndpc2Ugc2V0dGxlcyBmb3IgdGhlIHNob3J0ZXN0IGxpbmUgb3ZlciB0aGUgbGltaXQuXG4vLyBOQi4gTW9yZS1pbmRlbnRlZCBsaW5lcyAqY2Fubm90KiBiZSBmb2xkZWQsIGFzIHRoYXQgd291bGQgYWRkIGFuIGV4dHJhIFxcbi5cbmZ1bmN0aW9uIGZvbGRMaW5lKGxpbmUsIHdpZHRoKSB7XG4gIGlmIChsaW5lID09PSAnJyB8fCBsaW5lWzBdID09PSAnICcpIHJldHVybiBsaW5lO1xuXG4gIC8vIFNpbmNlIGEgbW9yZS1pbmRlbnRlZCBsaW5lIGFkZHMgYSBcXG4sIGJyZWFrcyBjYW4ndCBiZSBmb2xsb3dlZCBieSBhIHNwYWNlLlxuICB2YXIgYnJlYWtSZSA9IC8gW14gXS9nOyAvLyBub3RlOiB0aGUgbWF0Y2ggaW5kZXggd2lsbCBhbHdheXMgYmUgPD0gbGVuZ3RoLTIuXG4gIHZhciBtYXRjaDtcbiAgLy8gc3RhcnQgaXMgYW4gaW5jbHVzaXZlIGluZGV4LiBlbmQsIGN1cnIsIGFuZCBuZXh0IGFyZSBleGNsdXNpdmUuXG4gIHZhciBzdGFydCA9IDAsIGVuZCwgY3VyciA9IDAsIG5leHQgPSAwO1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgLy8gSW52YXJpYW50czogMCA8PSBzdGFydCA8PSBsZW5ndGgtMS5cbiAgLy8gICAwIDw9IGN1cnIgPD0gbmV4dCA8PSBtYXgoMCwgbGVuZ3RoLTIpLiBjdXJyIC0gc3RhcnQgPD0gd2lkdGguXG4gIC8vIEluc2lkZSB0aGUgbG9vcDpcbiAgLy8gICBBIG1hdGNoIGltcGxpZXMgbGVuZ3RoID49IDIsIHNvIGN1cnIgYW5kIG5leHQgYXJlIDw9IGxlbmd0aC0yLlxuICB3aGlsZSAoKG1hdGNoID0gYnJlYWtSZS5leGVjKGxpbmUpKSkge1xuICAgIG5leHQgPSBtYXRjaC5pbmRleDtcbiAgICAvLyBtYWludGFpbiBpbnZhcmlhbnQ6IGN1cnIgLSBzdGFydCA8PSB3aWR0aFxuICAgIGlmIChuZXh0IC0gc3RhcnQgPiB3aWR0aCkge1xuICAgICAgZW5kID0gKGN1cnIgPiBzdGFydCkgPyBjdXJyIDogbmV4dDsgLy8gZGVyaXZlIGVuZCA8PSBsZW5ndGgtMlxuICAgICAgcmVzdWx0ICs9ICdcXG4nICsgbGluZS5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgIC8vIHNraXAgdGhlIHNwYWNlIHRoYXQgd2FzIG91dHB1dCBhcyBcXG5cbiAgICAgIHN0YXJ0ID0gZW5kICsgMTsgICAgICAgICAgICAgICAgICAgIC8vIGRlcml2ZSBzdGFydCA8PSBsZW5ndGgtMVxuICAgIH1cbiAgICBjdXJyID0gbmV4dDtcbiAgfVxuXG4gIC8vIEJ5IHRoZSBpbnZhcmlhbnRzLCBzdGFydCA8PSBsZW5ndGgtMSwgc28gdGhlcmUgaXMgc29tZXRoaW5nIGxlZnQgb3Zlci5cbiAgLy8gSXQgaXMgZWl0aGVyIHRoZSB3aG9sZSBzdHJpbmcgb3IgYSBwYXJ0IHN0YXJ0aW5nIGZyb20gbm9uLXdoaXRlc3BhY2UuXG4gIHJlc3VsdCArPSAnXFxuJztcbiAgLy8gSW5zZXJ0IGEgYnJlYWsgaWYgdGhlIHJlbWFpbmRlciBpcyB0b28gbG9uZyBhbmQgdGhlcmUgaXMgYSBicmVhayBhdmFpbGFibGUuXG4gIGlmIChsaW5lLmxlbmd0aCAtIHN0YXJ0ID4gd2lkdGggJiYgY3VyciA+IHN0YXJ0KSB7XG4gICAgcmVzdWx0ICs9IGxpbmUuc2xpY2Uoc3RhcnQsIGN1cnIpICsgJ1xcbicgKyBsaW5lLnNsaWNlKGN1cnIgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgKz0gbGluZS5zbGljZShzdGFydCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0LnNsaWNlKDEpOyAvLyBkcm9wIGV4dHJhIFxcbiBqb2luZXJcbn1cblxuLy8gRXNjYXBlcyBhIGRvdWJsZS1xdW90ZWQgc3RyaW5nLlxuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBjaGFyLCBuZXh0Q2hhcjtcbiAgdmFyIGVzY2FwZVNlcTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAvLyBDaGVjayBmb3Igc3Vycm9nYXRlIHBhaXJzIChyZWZlcmVuY2UgVW5pY29kZSAzLjAgc2VjdGlvbiBcIjMuNyBTdXJyb2dhdGVzXCIpLlxuICAgIGlmIChjaGFyID49IDB4RDgwMCAmJiBjaGFyIDw9IDB4REJGRi8qIGhpZ2ggc3Vycm9nYXRlICovKSB7XG4gICAgICBuZXh0Q2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgIGlmIChuZXh0Q2hhciA+PSAweERDMDAgJiYgbmV4dENoYXIgPD0gMHhERkZGLyogbG93IHN1cnJvZ2F0ZSAqLykge1xuICAgICAgICAvLyBDb21iaW5lIHRoZSBzdXJyb2dhdGUgcGFpciBhbmQgc3RvcmUgaXQgZXNjYXBlZC5cbiAgICAgICAgcmVzdWx0ICs9IGVuY29kZUhleCgoY2hhciAtIDB4RDgwMCkgKiAweDQwMCArIG5leHRDaGFyIC0gMHhEQzAwICsgMHgxMDAwMCk7XG4gICAgICAgIC8vIEFkdmFuY2UgaW5kZXggb25lIGV4dHJhIHNpbmNlIHdlIGFscmVhZHkgdXNlZCB0aGF0IGNoYXIgaGVyZS5cbiAgICAgICAgaSsrOyBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgZXNjYXBlU2VxID0gRVNDQVBFX1NFUVVFTkNFU1tjaGFyXTtcbiAgICByZXN1bHQgKz0gIWVzY2FwZVNlcSAmJiBpc1ByaW50YWJsZShjaGFyKVxuICAgICAgPyBzdHJpbmdbaV1cbiAgICAgIDogZXNjYXBlU2VxIHx8IGVuY29kZUhleChjaGFyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvd1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgb2JqZWN0KSB7XG4gIHZhciBfcmVzdWx0ID0gJycsXG4gICAgICBfdGFnICAgID0gc3RhdGUudGFnLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGg7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgLy8gV3JpdGUgb25seSB2YWxpZCBlbGVtZW50cy5cbiAgICBpZiAod3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0W2luZGV4XSwgZmFsc2UsIGZhbHNlKSkge1xuICAgICAgaWYgKGluZGV4ICE9PSAwKSBfcmVzdWx0ICs9ICcsJyArICghc3RhdGUuY29uZGVuc2VGbG93ID8gJyAnIDogJycpO1xuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSAnWycgKyBfcmVzdWx0ICsgJ10nO1xufVxuXG5mdW5jdGlvbiB3cml0ZUJsb2NrU2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QsIGNvbXBhY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLlxuICAgIGlmICh3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0W2luZGV4XSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgIGlmICghY29tcGFjdCB8fCBpbmRleCAhPT0gMCkge1xuICAgICAgICBfcmVzdWx0ICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICBfcmVzdWx0ICs9ICctJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZXN1bHQgKz0gJy0gJztcbiAgICAgIH1cblxuICAgICAgX3Jlc3VsdCArPSBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICdbXSc7IC8vIEVtcHR5IHNlcXVlbmNlIGlmIG5vIHZhbGlkIHZhbHVlcy5cbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93TWFwcGluZyhzdGF0ZSwgbGV2ZWwsIG9iamVjdCkge1xuICB2YXIgX3Jlc3VsdCAgICAgICA9ICcnLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICBvYmplY3RLZXksXG4gICAgICBvYmplY3RWYWx1ZSxcbiAgICAgIHBhaXJCdWZmZXI7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuXG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuICAgIGlmIChpbmRleCAhPT0gMCkgcGFpckJ1ZmZlciArPSAnLCAnO1xuXG4gICAgaWYgKHN0YXRlLmNvbmRlbnNlRmxvdykgcGFpckJ1ZmZlciArPSAnXCInO1xuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0S2V5LCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIGtleTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KSBwYWlyQnVmZmVyICs9ICc/ICc7XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXAgKyAoc3RhdGUuY29uZGVuc2VGbG93ID8gJ1wiJyA6ICcnKSArICc6JyArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnJyA6ICcgJyk7XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdFZhbHVlLCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIHZhbHVlLlxuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICd7JyArIF9yZXN1bHQgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0LCBjb21wYWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgZXhwbGljaXRQYWlyLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICAvLyBBbGxvdyBzb3J0aW5nIGtleXMgc28gdGhhdCB0aGUgb3V0cHV0IGZpbGUgaXMgZGV0ZXJtaW5pc3RpY1xuICBpZiAoc3RhdGUuc29ydEtleXMgPT09IHRydWUpIHtcbiAgICAvLyBEZWZhdWx0IHNvcnRpbmdcbiAgICBvYmplY3RLZXlMaXN0LnNvcnQoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3RhdGUuc29ydEtleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBDdXN0b20gc29ydCBmdW5jdGlvblxuICAgIG9iamVjdEtleUxpc3Quc29ydChzdGF0ZS5zb3J0S2V5cyk7XG4gIH0gZWxzZSBpZiAoc3RhdGUuc29ydEtleXMpIHtcbiAgICAvLyBTb21ldGhpbmcgaXMgd3JvbmdcbiAgICB0aHJvdyBuZXcgWUFNTEV4Y2VwdGlvbignc29ydEtleXMgbXVzdCBiZSBhIGJvb2xlYW4gb3IgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdEtleUxpc3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXJCdWZmZXIgPSAnJztcblxuICAgIGlmICghY29tcGFjdCB8fCBpbmRleCAhPT0gMCkge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgb2JqZWN0S2V5ID0gb2JqZWN0S2V5TGlzdFtpbmRleF07XG4gICAgb2JqZWN0VmFsdWUgPSBvYmplY3Rbb2JqZWN0S2V5XTtcblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIG9iamVjdEtleSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSkpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQga2V5LlxuICAgIH1cblxuICAgIGV4cGxpY2l0UGFpciA9IChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHx8XG4gICAgICAgICAgICAgICAgICAgKHN0YXRlLmR1bXAgJiYgc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KTtcblxuICAgIGlmIChleHBsaWNpdFBhaXIpIHtcbiAgICAgIGlmIChzdGF0ZS5kdW1wICYmIENIQVJfTElORV9GRUVEID09PSBzdGF0ZS5kdW1wLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgcGFpckJ1ZmZlciArPSAnPyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWlyQnVmZmVyICs9ICc/ICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgaWYgKGV4cGxpY2l0UGFpcikge1xuICAgICAgcGFpckJ1ZmZlciArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgaWYgKCF3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgb2JqZWN0VmFsdWUsIHRydWUsIGV4cGxpY2l0UGFpcikpIHtcbiAgICAgIGNvbnRpbnVlOyAvLyBTa2lwIHRoaXMgcGFpciBiZWNhdXNlIG9mIGludmFsaWQgdmFsdWUuXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmR1bXAgJiYgQ0hBUl9MSU5FX0ZFRUQgPT09IHN0YXRlLmR1bXAuY2hhckNvZGVBdCgwKSkge1xuICAgICAgcGFpckJ1ZmZlciArPSAnOic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gJzogJztcbiAgICB9XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXA7XG5cbiAgICAvLyBCb3RoIGtleSBhbmQgdmFsdWUgYXJlIHZhbGlkLlxuICAgIF9yZXN1bHQgKz0gcGFpckJ1ZmZlcjtcbiAgfVxuXG4gIHN0YXRlLnRhZyA9IF90YWc7XG4gIHN0YXRlLmR1bXAgPSBfcmVzdWx0IHx8ICd7fSc7IC8vIEVtcHR5IG1hcHBpbmcgaWYgbm8gdmFsaWQgcGFpcnMuXG59XG5cbmZ1bmN0aW9uIGRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgZXhwbGljaXQpIHtcbiAgdmFyIF9yZXN1bHQsIHR5cGVMaXN0LCBpbmRleCwgbGVuZ3RoLCB0eXBlLCBzdHlsZTtcblxuICB0eXBlTGlzdCA9IGV4cGxpY2l0ID8gc3RhdGUuZXhwbGljaXRUeXBlcyA6IHN0YXRlLmltcGxpY2l0VHlwZXM7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHR5cGVMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0eXBlID0gdHlwZUxpc3RbaW5kZXhdO1xuXG4gICAgaWYgKCh0eXBlLmluc3RhbmNlT2YgIHx8IHR5cGUucHJlZGljYXRlKSAmJlxuICAgICAgICAoIXR5cGUuaW5zdGFuY2VPZiB8fCAoKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSAmJiAob2JqZWN0IGluc3RhbmNlb2YgdHlwZS5pbnN0YW5jZU9mKSkpICYmXG4gICAgICAgICghdHlwZS5wcmVkaWNhdGUgIHx8IHR5cGUucHJlZGljYXRlKG9iamVjdCkpKSB7XG5cbiAgICAgIHN0YXRlLnRhZyA9IGV4cGxpY2l0ID8gdHlwZS50YWcgOiAnPyc7XG5cbiAgICAgIGlmICh0eXBlLnJlcHJlc2VudCkge1xuICAgICAgICBzdHlsZSA9IHN0YXRlLnN0eWxlTWFwW3R5cGUudGFnXSB8fCB0eXBlLmRlZmF1bHRTdHlsZTtcblxuICAgICAgICBpZiAoX3RvU3RyaW5nLmNhbGwodHlwZS5yZXByZXNlbnQpID09PSAnW29iamVjdCBGdW5jdGlvbl0nKSB7XG4gICAgICAgICAgX3Jlc3VsdCA9IHR5cGUucmVwcmVzZW50KG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHR5cGUucmVwcmVzZW50LCBzdHlsZSkpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnRbc3R5bGVdKG9iamVjdCwgc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBZQU1MRXhjZXB0aW9uKCchPCcgKyB0eXBlLnRhZyArICc+IHRhZyByZXNvbHZlciBhY2NlcHRzIG5vdCBcIicgKyBzdHlsZSArICdcIiBzdHlsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUuZHVtcCA9IF9yZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gU2VyaWFsaXplcyBgb2JqZWN0YCBhbmQgd3JpdGVzIGl0IHRvIGdsb2JhbCBgcmVzdWx0YC5cbi8vIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLCBvciBmYWxzZSBvbiBpbnZhbGlkIG9iamVjdC5cbi8vXG5mdW5jdGlvbiB3cml0ZU5vZGUoc3RhdGUsIGxldmVsLCBvYmplY3QsIGJsb2NrLCBjb21wYWN0LCBpc2tleSkge1xuICBzdGF0ZS50YWcgPSBudWxsO1xuICBzdGF0ZS5kdW1wID0gb2JqZWN0O1xuXG4gIGlmICghZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCBmYWxzZSkpIHtcbiAgICBkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIHRydWUpO1xuICB9XG5cbiAgdmFyIHR5cGUgPSBfdG9TdHJpbmcuY2FsbChzdGF0ZS5kdW1wKTtcblxuICBpZiAoYmxvY2spIHtcbiAgICBibG9jayA9IChzdGF0ZS5mbG93TGV2ZWwgPCAwIHx8IHN0YXRlLmZsb3dMZXZlbCA+IGxldmVsKTtcbiAgfVxuXG4gIHZhciBvYmplY3RPckFycmF5ID0gdHlwZSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICAgIGR1cGxpY2F0ZUluZGV4LFxuICAgICAgZHVwbGljYXRlO1xuXG4gIGlmIChvYmplY3RPckFycmF5KSB7XG4gICAgZHVwbGljYXRlSW5kZXggPSBzdGF0ZS5kdXBsaWNhdGVzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBkdXBsaWNhdGUgPSBkdXBsaWNhdGVJbmRleCAhPT0gLTE7XG4gIH1cblxuICBpZiAoKHN0YXRlLnRhZyAhPT0gbnVsbCAmJiBzdGF0ZS50YWcgIT09ICc/JykgfHwgZHVwbGljYXRlIHx8IChzdGF0ZS5pbmRlbnQgIT09IDIgJiYgbGV2ZWwgPiAwKSkge1xuICAgIGNvbXBhY3QgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChkdXBsaWNhdGUgJiYgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdKSB7XG4gICAgc3RhdGUuZHVtcCA9ICcqcmVmXycgKyBkdXBsaWNhdGVJbmRleDtcbiAgfSBlbHNlIHtcbiAgICBpZiAob2JqZWN0T3JBcnJheSAmJiBkdXBsaWNhdGUgJiYgIXN0YXRlLnVzZWREdXBsaWNhdGVzW2R1cGxpY2F0ZUluZGV4XSkge1xuICAgICAgc3RhdGUudXNlZER1cGxpY2F0ZXNbZHVwbGljYXRlSW5kZXhdID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICBpZiAoYmxvY2sgJiYgKE9iamVjdC5rZXlzKHN0YXRlLmR1bXApLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgICAgd3JpdGVCbG9ja01hcHBpbmcoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZSkge1xuICAgICAgICAgIHN0YXRlLmR1bXAgPSAnJnJlZl8nICsgZHVwbGljYXRlSW5kZXggKyBzdGF0ZS5kdW1wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3cml0ZUZsb3dNYXBwaW5nKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFyIGFycmF5TGV2ZWwgPSAoc3RhdGUubm9BcnJheUluZGVudCAmJiAobGV2ZWwgPiAwKSkgPyBsZXZlbCAtIDEgOiBsZXZlbDtcbiAgICAgIGlmIChibG9jayAmJiAoc3RhdGUuZHVtcC5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgYXJyYXlMZXZlbCwgc3RhdGUuZHVtcCwgY29tcGFjdCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGFycmF5TGV2ZWwsIHN0YXRlLmR1bXApO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArICcgJyArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XG4gICAgICBpZiAoc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgICAgd3JpdGVTY2FsYXIoc3RhdGUsIHN0YXRlLmR1bXAsIGxldmVsLCBpc2tleSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGF0ZS5za2lwSW52YWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhyb3cgbmV3IFlBTUxFeGNlcHRpb24oJ3VuYWNjZXB0YWJsZSBraW5kIG9mIGFuIG9iamVjdCB0byBkdW1wICcgKyB0eXBlKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB7XG4gICAgICBzdGF0ZS5kdW1wID0gJyE8JyArIHN0YXRlLnRhZyArICc+ICcgKyBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXREdXBsaWNhdGVSZWZlcmVuY2VzKG9iamVjdCwgc3RhdGUpIHtcbiAgdmFyIG9iamVjdHMgPSBbXSxcbiAgICAgIGR1cGxpY2F0ZXNJbmRleGVzID0gW10sXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpbnNwZWN0Tm9kZShvYmplY3QsIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gZHVwbGljYXRlc0luZGV4ZXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHN0YXRlLmR1cGxpY2F0ZXMucHVzaChvYmplY3RzW2R1cGxpY2F0ZXNJbmRleGVzW2luZGV4XV0pO1xuICB9XG4gIHN0YXRlLnVzZWREdXBsaWNhdGVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpIHtcbiAgdmFyIG9iamVjdEtleUxpc3QsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpZiAob2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgaW5kZXggPSBvYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoZHVwbGljYXRlc0luZGV4ZXMuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGR1cGxpY2F0ZXNJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3RbaW5kZXhdLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3RLZXlMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3Rbb2JqZWN0S2V5TGlzdFtpbmRleF1dLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHVtcChpbnB1dCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgc3RhdGUgPSBuZXcgU3RhdGUob3B0aW9ucyk7XG5cbiAgaWYgKCFzdGF0ZS5ub1JlZnMpIGdldER1cGxpY2F0ZVJlZmVyZW5jZXMoaW5wdXQsIHN0YXRlKTtcblxuICBpZiAod3JpdGVOb2RlKHN0YXRlLCAwLCBpbnB1dCwgdHJ1ZSwgdHJ1ZSkpIHJldHVybiBzdGF0ZS5kdW1wICsgJ1xcbic7XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBzYWZlRHVtcChpbnB1dCwgb3B0aW9ucykge1xuICByZXR1cm4gZHVtcChpbnB1dCwgY29tbW9uLmV4dGVuZCh7IHNjaGVtYTogREVGQVVMVF9TQUZFX1NDSEVNQSB9LCBvcHRpb25zKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmR1bXAgICAgID0gZHVtcDtcbm1vZHVsZS5leHBvcnRzLnNhZmVEdW1wID0gc2FmZUR1bXA7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBsb2FkZXIgPSByZXF1aXJlKCcuL2pzLXlhbWwvbG9hZGVyJyk7XG52YXIgZHVtcGVyID0gcmVxdWlyZSgnLi9qcy15YW1sL2R1bXBlcicpO1xuXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZWQobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gJyArIG5hbWUgKyAnIGlzIGRlcHJlY2F0ZWQgYW5kIGNhbm5vdCBiZSB1c2VkLicpO1xuICB9O1xufVxuXG5cbm1vZHVsZS5leHBvcnRzLlR5cGUgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvdHlwZScpO1xubW9kdWxlLmV4cG9ydHMuU2NoZW1hICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEnKTtcbm1vZHVsZS5leHBvcnRzLkZBSUxTQUZFX1NDSEVNQSAgICAgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2ZhaWxzYWZlJyk7XG5tb2R1bGUuZXhwb3J0cy5KU09OX1NDSEVNQSAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9qc29uJyk7XG5tb2R1bGUuZXhwb3J0cy5DT1JFX1NDSEVNQSAgICAgICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9jb3JlJyk7XG5tb2R1bGUuZXhwb3J0cy5ERUZBVUxUX1NBRkVfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfRlVMTF9TQ0hFTUEgPSByZXF1aXJlKCcuL2pzLXlhbWwvc2NoZW1hL2RlZmF1bHRfZnVsbCcpO1xubW9kdWxlLmV4cG9ydHMubG9hZCAgICAgICAgICAgICAgICA9IGxvYWRlci5sb2FkO1xubW9kdWxlLmV4cG9ydHMubG9hZEFsbCAgICAgICAgICAgICA9IGxvYWRlci5sb2FkQWxsO1xubW9kdWxlLmV4cG9ydHMuc2FmZUxvYWQgICAgICAgICAgICA9IGxvYWRlci5zYWZlTG9hZDtcbm1vZHVsZS5leHBvcnRzLnNhZmVMb2FkQWxsICAgICAgICAgPSBsb2FkZXIuc2FmZUxvYWRBbGw7XG5tb2R1bGUuZXhwb3J0cy5kdW1wICAgICAgICAgICAgICAgID0gZHVtcGVyLmR1bXA7XG5tb2R1bGUuZXhwb3J0cy5zYWZlRHVtcCAgICAgICAgICAgID0gZHVtcGVyLnNhZmVEdW1wO1xubW9kdWxlLmV4cG9ydHMuWUFNTEV4Y2VwdGlvbiAgICAgICA9IHJlcXVpcmUoJy4vanMteWFtbC9leGNlcHRpb24nKTtcblxuLy8gRGVwcmVjYXRlZCBzY2hlbWEgbmFtZXMgZnJvbSBKUy1ZQU1MIDIuMC54XG5tb2R1bGUuZXhwb3J0cy5NSU5JTUFMX1NDSEVNQSA9IHJlcXVpcmUoJy4vanMteWFtbC9zY2hlbWEvZmFpbHNhZmUnKTtcbm1vZHVsZS5leHBvcnRzLlNBRkVfU0NIRU1BICAgID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X3NhZmUnKTtcbm1vZHVsZS5leHBvcnRzLkRFRkFVTFRfU0NIRU1BID0gcmVxdWlyZSgnLi9qcy15YW1sL3NjaGVtYS9kZWZhdWx0X2Z1bGwnKTtcblxuLy8gRGVwcmVjYXRlZCBmdW5jdGlvbnMgZnJvbSBKUy1ZQU1MIDEueC54XG5tb2R1bGUuZXhwb3J0cy5zY2FuICAgICAgICAgICA9IGRlcHJlY2F0ZWQoJ3NjYW4nKTtcbm1vZHVsZS5leHBvcnRzLnBhcnNlICAgICAgICAgID0gZGVwcmVjYXRlZCgncGFyc2UnKTtcbm1vZHVsZS5leHBvcnRzLmNvbXBvc2UgICAgICAgID0gZGVwcmVjYXRlZCgnY29tcG9zZScpO1xubW9kdWxlLmV4cG9ydHMuYWRkQ29uc3RydWN0b3IgPSBkZXByZWNhdGVkKCdhZGRDb25zdHJ1Y3RvcicpO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuXG52YXIgeWFtbCA9IHJlcXVpcmUoJy4vbGliL2pzLXlhbWwuanMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHlhbWw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB5YW1sID0gcmVxdWlyZSgnanMteWFtbCcpO1xuXG4vKipcbiAqIERlZmF1bHQgZW5naW5lc1xuICovXG5cbmNvbnN0IGVuZ2luZXMgPSBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogWUFNTFxuICovXG5cbmVuZ2luZXMueWFtbCA9IHtcbiAgcGFyc2U6IHlhbWwuc2FmZUxvYWQuYmluZCh5YW1sKSxcbiAgc3RyaW5naWZ5OiB5YW1sLnNhZmVEdW1wLmJpbmQoeWFtbClcbn07XG5cbi8qKlxuICogSlNPTlxuICovXG5cbmVuZ2luZXMuanNvbiA9IHtcbiAgcGFyc2U6IEpTT04ucGFyc2UuYmluZChKU09OKSxcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbihvYmosIG9wdGlvbnMpIHtcbiAgICBjb25zdCBvcHRzID0gT2JqZWN0LmFzc2lnbih7cmVwbGFjZXI6IG51bGwsIHNwYWNlOiAyfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgb3B0cy5yZXBsYWNlciwgb3B0cy5zcGFjZSk7XG4gIH1cbn07XG5cbi8qKlxuICogSmF2YVNjcmlwdFxuICovXG5cbmVuZ2luZXMuamF2YXNjcmlwdCA9IHtcbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucywgd3JhcCkge1xuICAgIC8qIGVzbGludCBuby1ldmFsOiAwICovXG4gICAgdHJ5IHtcbiAgICAgIGlmICh3cmFwICE9PSBmYWxzZSkge1xuICAgICAgICBzdHIgPSAnKGZ1bmN0aW9uKCkge1xcbnJldHVybiAnICsgc3RyLnRyaW0oKSArICc7XFxufSgpKTsnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGV2YWwoc3RyKSB8fCB7fTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmICh3cmFwICE9PSBmYWxzZSAmJiAvKHVuZXhwZWN0ZWR8aWRlbnRpZmllcikvaS50ZXN0KGVyci5tZXNzYWdlKSkge1xuICAgICAgICByZXR1cm4gcGFyc2Uoc3RyLCBvcHRpb25zLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoZXJyKTtcbiAgICB9XG4gIH0sXG4gIHN0cmluZ2lmeTogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzdHJpbmdpZnlpbmcgSmF2YVNjcmlwdCBpcyBub3Qgc3VwcG9ydGVkJyk7XG4gIH1cbn07XG4iLCAiLyohXG4gKiBzdHJpcC1ib20tc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9zdHJpcC1ib20tc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNSwgMjAxNywgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyLmNoYXJBdCgwKSA9PT0gJ1xcdWZlZmYnKSB7XG4gICAgcmV0dXJuIHN0ci5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmlwQm9tID0gcmVxdWlyZSgnc3RyaXAtYm9tLXN0cmluZycpO1xuY29uc3QgdHlwZU9mID0gcmVxdWlyZSgna2luZC1vZicpO1xuXG5leHBvcnRzLmRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWwpIHtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogdmFsXG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYHZhbGAgaXMgYSBidWZmZXJcbiAqL1xuXG5leHBvcnRzLmlzQnVmZmVyID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlT2YodmFsKSA9PT0gJ2J1ZmZlcic7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsYCBpcyBhbiBvYmplY3RcbiAqL1xuXG5leHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0eXBlT2YodmFsKSA9PT0gJ29iamVjdCc7XG59O1xuXG4vKipcbiAqIENhc3QgYGlucHV0YCB0byBhIGJ1ZmZlclxuICovXG5cbmV4cG9ydHMudG9CdWZmZXIgPSBmdW5jdGlvbihpbnB1dCkge1xuICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IEJ1ZmZlci5mcm9tKGlucHV0KSA6IGlucHV0O1xufTtcblxuLyoqXG4gKiBDYXN0IGB2YWxgIHRvIGEgc3RyaW5nLlxuICovXG5cbmV4cG9ydHMudG9TdHJpbmcgPSBmdW5jdGlvbihpbnB1dCkge1xuICBpZiAoZXhwb3J0cy5pc0J1ZmZlcihpbnB1dCkpIHJldHVybiBzdHJpcEJvbShTdHJpbmcoaW5wdXQpKTtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBpbnB1dCB0byBiZSBhIHN0cmluZyBvciBidWZmZXInKTtcbiAgfVxuICByZXR1cm4gc3RyaXBCb20oaW5wdXQpO1xufTtcblxuLyoqXG4gKiBDYXN0IGB2YWxgIHRvIGFuIGFycmF5LlxuICovXG5cbmV4cG9ydHMuYXJyYXlpZnkgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCA/IChBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXSkgOiBbXTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGBzdHJgIHN0YXJ0cyB3aXRoIGBzdWJzdHJgLlxuICovXG5cbmV4cG9ydHMuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uKHN0ciwgc3Vic3RyLCBsZW4pIHtcbiAgaWYgKHR5cGVvZiBsZW4gIT09ICdudW1iZXInKSBsZW4gPSBzdWJzdHIubGVuZ3RoO1xuICByZXR1cm4gc3RyLnNsaWNlKDAsIGxlbikgPT09IHN1YnN0cjtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlbmdpbmVzID0gcmVxdWlyZSgnLi9lbmdpbmVzJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAvLyBlbnN1cmUgdGhhdCBkZWxpbWl0ZXJzIGFyZSBhbiBhcnJheVxuICBvcHRzLmRlbGltaXRlcnMgPSB1dGlscy5hcnJheWlmeShvcHRzLmRlbGltcyB8fCBvcHRzLmRlbGltaXRlcnMgfHwgJy0tLScpO1xuICBpZiAob3B0cy5kZWxpbWl0ZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgIG9wdHMuZGVsaW1pdGVycy5wdXNoKG9wdHMuZGVsaW1pdGVyc1swXSk7XG4gIH1cblxuICBvcHRzLmxhbmd1YWdlID0gKG9wdHMubGFuZ3VhZ2UgfHwgb3B0cy5sYW5nIHx8ICd5YW1sJykudG9Mb3dlckNhc2UoKTtcbiAgb3B0cy5lbmdpbmVzID0gT2JqZWN0LmFzc2lnbih7fSwgZW5naW5lcywgb3B0cy5wYXJzZXJzLCBvcHRzLmVuZ2luZXMpO1xuICByZXR1cm4gb3B0cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUsIG9wdGlvbnMpIHtcbiAgbGV0IGVuZ2luZSA9IG9wdGlvbnMuZW5naW5lc1tuYW1lXSB8fCBvcHRpb25zLmVuZ2luZXNbYWxpYXNlKG5hbWUpXTtcbiAgaWYgKHR5cGVvZiBlbmdpbmUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdncmF5LW1hdHRlciBlbmdpbmUgXCInICsgbmFtZSArICdcIiBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICB9XG4gIGlmICh0eXBlb2YgZW5naW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZW5naW5lID0geyBwYXJzZTogZW5naW5lIH07XG4gIH1cbiAgcmV0dXJuIGVuZ2luZTtcbn07XG5cbmZ1bmN0aW9uIGFsaWFzZShuYW1lKSB7XG4gIHN3aXRjaCAobmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnanMnOlxuICAgIGNhc2UgJ2phdmFzY3JpcHQnOlxuICAgICAgcmV0dXJuICdqYXZhc2NyaXB0JztcbiAgICBjYXNlICdjb2ZmZWUnOlxuICAgIGNhc2UgJ2NvZmZlZXNjcmlwdCc6XG4gICAgY2FzZSAnY3Nvbic6XG4gICAgICByZXR1cm4gJ2NvZmZlZSc7XG4gICAgY2FzZSAneWFtbCc6XG4gICAgY2FzZSAneW1sJzpcbiAgICAgIHJldHVybiAneWFtbCc7XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5jb25zdCBnZXRFbmdpbmUgPSByZXF1aXJlKCcuL2VuZ2luZScpO1xuY29uc3QgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZmlsZSwgZGF0YSwgb3B0aW9ucykge1xuICBpZiAoZGF0YSA9PSBudWxsICYmIG9wdGlvbnMgPT0gbnVsbCkge1xuICAgIHN3aXRjaCAodHlwZU9mKGZpbGUpKSB7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBkYXRhID0gZmlsZS5kYXRhO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4cGVjdGVkIGZpbGUgdG8gYmUgYSBzdHJpbmcgb3Igb2JqZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyID0gZmlsZS5jb250ZW50O1xuICBjb25zdCBvcHRzID0gZGVmYXVsdHMob3B0aW9ucyk7XG4gIGlmIChkYXRhID09IG51bGwpIHtcbiAgICBpZiAoIW9wdHMuZGF0YSkgcmV0dXJuIGZpbGU7XG4gICAgZGF0YSA9IG9wdHMuZGF0YTtcbiAgfVxuXG4gIGNvbnN0IGxhbmd1YWdlID0gZmlsZS5sYW5ndWFnZSB8fCBvcHRzLmxhbmd1YWdlO1xuICBjb25zdCBlbmdpbmUgPSBnZXRFbmdpbmUobGFuZ3VhZ2UsIG9wdHMpO1xuICBpZiAodHlwZW9mIGVuZ2luZS5zdHJpbmdpZnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBcIicgKyBsYW5ndWFnZSArICcuc3RyaW5naWZ5XCIgdG8gYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGZpbGUuZGF0YSwgZGF0YSk7XG4gIGNvbnN0IG9wZW4gPSBvcHRzLmRlbGltaXRlcnNbMF07XG4gIGNvbnN0IGNsb3NlID0gb3B0cy5kZWxpbWl0ZXJzWzFdO1xuICBjb25zdCBtYXR0ZXIgPSBlbmdpbmUuc3RyaW5naWZ5KGRhdGEsIG9wdGlvbnMpLnRyaW0oKTtcbiAgbGV0IGJ1ZiA9ICcnO1xuXG4gIGlmIChtYXR0ZXIgIT09ICd7fScpIHtcbiAgICBidWYgPSBuZXdsaW5lKG9wZW4pICsgbmV3bGluZShtYXR0ZXIpICsgbmV3bGluZShjbG9zZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGZpbGUuZXhjZXJwdCA9PT0gJ3N0cmluZycgJiYgZmlsZS5leGNlcnB0ICE9PSAnJykge1xuICAgIGlmIChzdHIuaW5kZXhPZihmaWxlLmV4Y2VycHQudHJpbSgpKSA9PT0gLTEpIHtcbiAgICAgIGJ1ZiArPSBuZXdsaW5lKGZpbGUuZXhjZXJwdCkgKyBuZXdsaW5lKGNsb3NlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmICsgbmV3bGluZShzdHIpO1xufTtcblxuZnVuY3Rpb24gbmV3bGluZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zbGljZSgtMSkgIT09ICdcXG4nID8gc3RyICsgJ1xcbicgOiBzdHI7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmaWxlLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcblxuICBpZiAoZmlsZS5kYXRhID09IG51bGwpIHtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0cy5leGNlcnB0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdHMuZXhjZXJwdChmaWxlLCBvcHRzKTtcbiAgfVxuXG4gIGNvbnN0IHNlcCA9IGZpbGUuZGF0YS5leGNlcnB0X3NlcGFyYXRvciB8fCBvcHRzLmV4Y2VycHRfc2VwYXJhdG9yO1xuICBpZiAoc2VwID09IG51bGwgJiYgKG9wdHMuZXhjZXJwdCA9PT0gZmFsc2UgfHwgb3B0cy5leGNlcnB0ID09IG51bGwpKSB7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBjb25zdCBkZWxpbWl0ZXIgPSB0eXBlb2Ygb3B0cy5leGNlcnB0ID09PSAnc3RyaW5nJ1xuICAgID8gb3B0cy5leGNlcnB0XG4gICAgOiAoc2VwIHx8IG9wdHMuZGVsaW1pdGVyc1swXSk7XG5cbiAgLy8gaWYgZW5hYmxlZCwgZ2V0IHRoZSBleGNlcnB0IGRlZmluZWQgYWZ0ZXIgZnJvbnQtbWF0dGVyXG4gIGNvbnN0IGlkeCA9IGZpbGUuY29udGVudC5pbmRleE9mKGRlbGltaXRlcik7XG4gIGlmIChpZHggIT09IC0xKSB7XG4gICAgZmlsZS5leGNlcnB0ID0gZmlsZS5jb250ZW50LnNsaWNlKDAsIGlkeCk7XG4gIH1cblxuICByZXR1cm4gZmlsZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0eXBlT2YgPSByZXF1aXJlKCdraW5kLW9mJyk7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiB2YWx1ZSB0byBlbnN1cmUgYW4gb2JqZWN0IGlzIHJldHVybmVkXG4gKiB3aXRoIHRoZSBleHBlY3RlZCBwcm9wZXJ0aWVzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZmlsZSkge1xuICBpZiAodHlwZU9mKGZpbGUpICE9PSAnb2JqZWN0Jykge1xuICAgIGZpbGUgPSB7IGNvbnRlbnQ6IGZpbGUgfTtcbiAgfVxuXG4gIGlmICh0eXBlT2YoZmlsZS5kYXRhKSAhPT0gJ29iamVjdCcpIHtcbiAgICBmaWxlLmRhdGEgPSB7fTtcbiAgfVxuXG4gIC8vIGlmIGZpbGUgd2FzIHBhc3NlZCBhcyBhbiBvYmplY3QsIGVuc3VyZSB0aGF0XG4gIC8vIFwiZmlsZS5jb250ZW50XCIgaXMgc2V0XG4gIGlmIChmaWxlLmNvbnRlbnRzICYmIGZpbGUuY29udGVudCA9PSBudWxsKSB7XG4gICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50cztcbiAgfVxuXG4gIC8vIHNldCBub24tZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9uIHRoZSBmaWxlIG9iamVjdFxuICB1dGlscy5kZWZpbmUoZmlsZSwgJ29yaWcnLCB1dGlscy50b0J1ZmZlcihmaWxlLmNvbnRlbnQpKTtcbiAgdXRpbHMuZGVmaW5lKGZpbGUsICdsYW5ndWFnZScsIGZpbGUubGFuZ3VhZ2UgfHwgJycpO1xuICB1dGlscy5kZWZpbmUoZmlsZSwgJ21hdHRlcicsIGZpbGUubWF0dGVyIHx8ICcnKTtcbiAgdXRpbHMuZGVmaW5lKGZpbGUsICdzdHJpbmdpZnknLCBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sYW5ndWFnZSkge1xuICAgICAgZmlsZS5sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmdpZnkoZmlsZSwgZGF0YSwgb3B0aW9ucyk7XG4gIH0pO1xuXG4gIC8vIHN0cmlwIEJPTSBhbmQgZW5zdXJlIHRoYXQgXCJmaWxlLmNvbnRlbnRcIiBpcyBhIHN0cmluZ1xuICBmaWxlLmNvbnRlbnQgPSB1dGlscy50b1N0cmluZyhmaWxlLmNvbnRlbnQpO1xuICBmaWxlLmlzRW1wdHkgPSBmYWxzZTtcbiAgZmlsZS5leGNlcnB0ID0gJyc7XG4gIHJldHVybiBmaWxlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdldEVuZ2luZSA9IHJlcXVpcmUoJy4vZW5naW5lJyk7XG5jb25zdCBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsYW5ndWFnZSwgc3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IG9wdHMgPSBkZWZhdWx0cyhvcHRpb25zKTtcbiAgY29uc3QgZW5naW5lID0gZ2V0RW5naW5lKGxhbmd1YWdlLCBvcHRzKTtcbiAgaWYgKHR5cGVvZiBlbmdpbmUucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleHBlY3RlZCBcIicgKyBsYW5ndWFnZSArICcucGFyc2VcIiB0byBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgcmV0dXJuIGVuZ2luZS5wYXJzZShzdHIsIG9wdHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHNlY3Rpb25zID0gcmVxdWlyZSgnc2VjdGlvbi1tYXR0ZXInKTtcbmNvbnN0IGRlZmF1bHRzID0gcmVxdWlyZSgnLi9saWIvZGVmYXVsdHMnKTtcbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vbGliL3N0cmluZ2lmeScpO1xuY29uc3QgZXhjZXJwdCA9IHJlcXVpcmUoJy4vbGliL2V4Y2VycHQnKTtcbmNvbnN0IGVuZ2luZXMgPSByZXF1aXJlKCcuL2xpYi9lbmdpbmVzJyk7XG5jb25zdCB0b0ZpbGUgPSByZXF1aXJlKCcuL2xpYi90by1maWxlJyk7XG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoJy4vbGliL3BhcnNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vbGliL3V0aWxzJyk7XG5cbi8qKlxuICogVGFrZXMgYSBzdHJpbmcgb3Igb2JqZWN0IHdpdGggYGNvbnRlbnRgIHByb3BlcnR5LCBleHRyYWN0c1xuICogYW5kIHBhcnNlcyBmcm9udC1tYXR0ZXIgZnJvbSB0aGUgc3RyaW5nLCB0aGVuIHJldHVybnMgYW4gb2JqZWN0XG4gKiB3aXRoIGBkYXRhYCwgYGNvbnRlbnRgIGFuZCBvdGhlciBbdXNlZnVsIHByb3BlcnRpZXNdKCNyZXR1cm5lZC1vYmplY3QpLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtYXR0ZXIgPSByZXF1aXJlKCdncmF5LW1hdHRlcicpO1xuICogY29uc29sZS5sb2cobWF0dGVyKCctLS1cXG50aXRsZTogSG9tZVxcbi0tLVxcbk90aGVyIHN0dWZmJykpO1xuICogLy89PiB7IGRhdGE6IHsgdGl0bGU6ICdIb21lJ30sIGNvbnRlbnQ6ICdPdGhlciBzdHVmZicgfVxuICogYGBgXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGBpbnB1dGAgU3RyaW5nLCBvciBvYmplY3Qgd2l0aCBgY29udGVudGAgc3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG1hdHRlcihpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoaW5wdXQgPT09ICcnKSB7XG4gICAgcmV0dXJuIHsgZGF0YToge30sIGNvbnRlbnQ6IGlucHV0LCBleGNlcnB0OiAnJywgb3JpZzogaW5wdXQgfTtcbiAgfVxuXG4gIGxldCBmaWxlID0gdG9GaWxlKGlucHV0KTtcbiAgY29uc3QgY2FjaGVkID0gbWF0dGVyLmNhY2hlW2ZpbGUuY29udGVudF07XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgZmlsZSA9IE9iamVjdC5hc3NpZ24oe30sIGNhY2hlZCk7XG4gICAgICBmaWxlLm9yaWcgPSBjYWNoZWQub3JpZztcbiAgICAgIHJldHVybiBmaWxlO1xuICAgIH1cblxuICAgIC8vIG9ubHkgY2FjaGUgaWYgdGhlcmUgYXJlIG5vIG9wdGlvbnMgcGFzc2VkLiBpZiB3ZSBjYWNoZSB3aGVuIG9wdGlvbnNcbiAgICAvLyBhcmUgcGFzc2VkLCB3ZSB3b3VsZCBuZWVkIHRvIGFsc28gY2FjaGUgb3B0aW9ucyB2YWx1ZXMsIHdoaWNoIHdvdWxkXG4gICAgLy8gbmVnYXRlIGFueSBwZXJmb3JtYW5jZSBiZW5lZml0cyBvZiBjYWNoaW5nXG4gICAgbWF0dGVyLmNhY2hlW2ZpbGUuY29udGVudF0gPSBmaWxlO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlTWF0dGVyKGZpbGUsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIFBhcnNlIGZyb250IG1hdHRlclxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTWF0dGVyKGZpbGUsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBvcGVuID0gb3B0cy5kZWxpbWl0ZXJzWzBdO1xuICBjb25zdCBjbG9zZSA9ICdcXG4nICsgb3B0cy5kZWxpbWl0ZXJzWzFdO1xuICBsZXQgc3RyID0gZmlsZS5jb250ZW50O1xuXG4gIGlmIChvcHRzLmxhbmd1YWdlKSB7XG4gICAgZmlsZS5sYW5ndWFnZSA9IG9wdHMubGFuZ3VhZ2U7XG4gIH1cblxuICAvLyBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgb3BlbmluZyBkZWxpbWl0ZXJcbiAgY29uc3Qgb3BlbkxlbiA9IG9wZW4ubGVuZ3RoO1xuICBpZiAoIXV0aWxzLnN0YXJ0c1dpdGgoc3RyLCBvcGVuLCBvcGVuTGVuKSkge1xuICAgIGV4Y2VycHQoZmlsZSwgb3B0cyk7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICAvLyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgYWZ0ZXIgdGhlIG9wZW5pbmcgZGVsaW1pdGVyIGlzXG4gIC8vIGEgY2hhcmFjdGVyIGZyb20gdGhlIGRlbGltaXRlciwgdGhlbiBpdCdzIG5vdCBhIGZyb250LVxuICAvLyBtYXR0ZXIgZGVsaW1pdGVyXG4gIGlmIChzdHIuY2hhckF0KG9wZW5MZW4pID09PSBvcGVuLnNsaWNlKC0xKSkge1xuICAgIHJldHVybiBmaWxlO1xuICB9XG5cbiAgLy8gc3RyaXAgdGhlIG9wZW5pbmcgZGVsaW1pdGVyXG4gIHN0ciA9IHN0ci5zbGljZShvcGVuTGVuKTtcbiAgY29uc3QgbGVuID0gc3RyLmxlbmd0aDtcblxuICAvLyB1c2UgdGhlIGxhbmd1YWdlIGRlZmluZWQgYWZ0ZXIgZmlyc3QgZGVsaW1pdGVyLCBpZiBpdCBleGlzdHNcbiAgY29uc3QgbGFuZ3VhZ2UgPSBtYXR0ZXIubGFuZ3VhZ2Uoc3RyLCBvcHRzKTtcbiAgaWYgKGxhbmd1YWdlLm5hbWUpIHtcbiAgICBmaWxlLmxhbmd1YWdlID0gbGFuZ3VhZ2UubmFtZTtcbiAgICBzdHIgPSBzdHIuc2xpY2UobGFuZ3VhZ2UucmF3Lmxlbmd0aCk7XG4gIH1cblxuICAvLyBnZXQgdGhlIGluZGV4IG9mIHRoZSBjbG9zaW5nIGRlbGltaXRlclxuICBsZXQgY2xvc2VJbmRleCA9IHN0ci5pbmRleE9mKGNsb3NlKTtcbiAgaWYgKGNsb3NlSW5kZXggPT09IC0xKSB7XG4gICAgY2xvc2VJbmRleCA9IGxlbjtcbiAgfVxuXG4gIC8vIGdldCB0aGUgcmF3IGZyb250LW1hdHRlciBibG9ja1xuICBmaWxlLm1hdHRlciA9IHN0ci5zbGljZSgwLCBjbG9zZUluZGV4KTtcblxuICBjb25zdCBibG9jayA9IGZpbGUubWF0dGVyLnJlcGxhY2UoL15cXHMqI1teXFxuXSsvZ20sICcnKS50cmltKCk7XG4gIGlmIChibG9jayA9PT0gJycpIHtcbiAgICBmaWxlLmlzRW1wdHkgPSB0cnVlO1xuICAgIGZpbGUuZW1wdHkgPSBmaWxlLmNvbnRlbnQ7XG4gICAgZmlsZS5kYXRhID0ge307XG4gIH0gZWxzZSB7XG5cbiAgICAvLyBjcmVhdGUgZmlsZS5kYXRhIGJ5IHBhcnNpbmcgdGhlIHJhdyBmaWxlLm1hdHRlciBibG9ja1xuICAgIGZpbGUuZGF0YSA9IHBhcnNlKGZpbGUubGFuZ3VhZ2UsIGZpbGUubWF0dGVyLCBvcHRzKTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBmaWxlLmNvbnRlbnRcbiAgaWYgKGNsb3NlSW5kZXggPT09IGxlbikge1xuICAgIGZpbGUuY29udGVudCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGZpbGUuY29udGVudCA9IHN0ci5zbGljZShjbG9zZUluZGV4ICsgY2xvc2UubGVuZ3RoKTtcbiAgICBpZiAoZmlsZS5jb250ZW50WzBdID09PSAnXFxyJykge1xuICAgICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50LnNsaWNlKDEpO1xuICAgIH1cbiAgICBpZiAoZmlsZS5jb250ZW50WzBdID09PSAnXFxuJykge1xuICAgICAgZmlsZS5jb250ZW50ID0gZmlsZS5jb250ZW50LnNsaWNlKDEpO1xuICAgIH1cbiAgfVxuXG4gIGV4Y2VycHQoZmlsZSwgb3B0cyk7XG5cbiAgaWYgKG9wdHMuc2VjdGlvbnMgPT09IHRydWUgfHwgdHlwZW9mIG9wdHMuc2VjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlY3Rpb25zKGZpbGUsIG9wdHMuc2VjdGlvbik7XG4gIH1cbiAgcmV0dXJuIGZpbGU7XG59XG5cbi8qKlxuICogRXhwb3NlIGVuZ2luZXNcbiAqL1xuXG5tYXR0ZXIuZW5naW5lcyA9IGVuZ2luZXM7XG5cbi8qKlxuICogU3RyaW5naWZ5IGFuIG9iamVjdCB0byBZQU1MIG9yIHRoZSBzcGVjaWZpZWQgbGFuZ3VhZ2UsIGFuZFxuICogYXBwZW5kIGl0IHRvIHRoZSBnaXZlbiBzdHJpbmcuIEJ5IGRlZmF1bHQsIG9ubHkgWUFNTCBhbmQgSlNPTlxuICogY2FuIGJlIHN0cmluZ2lmaWVkLiBTZWUgdGhlIFtlbmdpbmVzXSgjZW5naW5lcykgc2VjdGlvbiB0byBsZWFyblxuICogaG93IHRvIHN0cmluZ2lmeSBvdGhlciBsYW5ndWFnZXMuXG4gKlxuICogYGBganNcbiAqIGNvbnNvbGUubG9nKG1hdHRlci5zdHJpbmdpZnkoJ2ZvbyBiYXIgYmF6Jywge3RpdGxlOiAnSG9tZSd9KSk7XG4gKiAvLyByZXN1bHRzIGluOlxuICogLy8gLS0tXG4gKiAvLyB0aXRsZTogSG9tZVxuICogLy8gLS0tXG4gKiAvLyBmb28gYmFyIGJhelxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGBmaWxlYCBUaGUgY29udGVudCBzdHJpbmcgdG8gYXBwZW5kIHRvIHN0cmluZ2lmaWVkIGZyb250LW1hdHRlciwgb3IgYSBmaWxlIG9iamVjdCB3aXRoIGBmaWxlLmNvbnRlbnRgIHN0cmluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgZGF0YWAgRnJvbnQgbWF0dGVyIHRvIHN0cmluZ2lmeS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgW09wdGlvbnNdKCNvcHRpb25zKSB0byBwYXNzIHRvIGdyYXktbWF0dGVyIGFuZCBbanMteWFtbF0uXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJldHVybnMgYSBzdHJpbmcgY3JlYXRlZCBieSB3cmFwcGluZyBzdHJpbmdpZmllZCB5YW1sIHdpdGggZGVsaW1pdGVycywgYW5kIGFwcGVuZGluZyB0aGF0IHRvIHRoZSBnaXZlbiBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1hdHRlci5zdHJpbmdpZnkgPSBmdW5jdGlvbihmaWxlLCBkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZmlsZSA9PT0gJ3N0cmluZycpIGZpbGUgPSBtYXR0ZXIoZmlsZSwgb3B0aW9ucyk7XG4gIHJldHVybiBzdHJpbmdpZnkoZmlsZSwgZGF0YSwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIFN5bmNocm9ub3VzbHkgcmVhZCBhIGZpbGUgZnJvbSB0aGUgZmlsZSBzeXN0ZW0gYW5kIHBhcnNlXG4gKiBmcm9udCBtYXR0ZXIuIFJldHVybnMgdGhlIHNhbWUgb2JqZWN0IGFzIHRoZSBbbWFpbiBmdW5jdGlvbl0oI21hdHRlcikuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGZpbGUgPSBtYXR0ZXIucmVhZCgnLi9jb250ZW50L2Jsb2ctcG9zdC5tZCcpO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGZpbGVwYXRoYCBmaWxlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVhZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgW09wdGlvbnNdKCNvcHRpb25zKSB0byBwYXNzIHRvIGdyYXktbWF0dGVyLlxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIFthbiBvYmplY3RdKCNyZXR1cm5lZC1vYmplY3QpIHdpdGggYGRhdGFgIGFuZCBgY29udGVudGBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWF0dGVyLnJlYWQgPSBmdW5jdGlvbihmaWxlcGF0aCwgb3B0aW9ucykge1xuICBjb25zdCBzdHIgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZXBhdGgsICd1dGY4Jyk7XG4gIGNvbnN0IGZpbGUgPSBtYXR0ZXIoc3RyLCBvcHRpb25zKTtcbiAgZmlsZS5wYXRoID0gZmlsZXBhdGg7XG4gIHJldHVybiBmaWxlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGBzdHJpbmdgIGhhcyBmcm9udCBtYXR0ZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGBzdHJpbmdgXG4gKiBAcGFyYW0gIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiBmcm9udCBtYXR0ZXIgZXhpc3RzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tYXR0ZXIudGVzdCA9IGZ1bmN0aW9uKHN0ciwgb3B0aW9ucykge1xuICByZXR1cm4gdXRpbHMuc3RhcnRzV2l0aChzdHIsIGRlZmF1bHRzKG9wdGlvbnMpLmRlbGltaXRlcnNbMF0pO1xufTtcblxuLyoqXG4gKiBEZXRlY3QgdGhlIGxhbmd1YWdlIHRvIHVzZSwgaWYgb25lIGlzIGRlZmluZWQgYWZ0ZXIgdGhlXG4gKiBmaXJzdCBmcm9udC1tYXR0ZXIgZGVsaW1pdGVyLlxuICogQHBhcmFtICB7U3RyaW5nfSBgc3RyaW5nYFxuICogQHBhcmFtICB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gT2JqZWN0IHdpdGggYHJhd2AgKGFjdHVhbCBsYW5ndWFnZSBzdHJpbmcpLCBhbmQgYG5hbWVgLCB0aGUgbGFuZ3VhZ2Ugd2l0aCB3aGl0ZXNwYWNlIHRyaW1tZWRcbiAqL1xuXG5tYXR0ZXIubGFuZ3VhZ2UgPSBmdW5jdGlvbihzdHIsIG9wdGlvbnMpIHtcbiAgY29uc3Qgb3B0cyA9IGRlZmF1bHRzKG9wdGlvbnMpO1xuICBjb25zdCBvcGVuID0gb3B0cy5kZWxpbWl0ZXJzWzBdO1xuXG4gIGlmIChtYXR0ZXIudGVzdChzdHIpKSB7XG4gICAgc3RyID0gc3RyLnNsaWNlKG9wZW4ubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbnN0IGxhbmd1YWdlID0gc3RyLnNsaWNlKDAsIHN0ci5zZWFyY2goL1xccj9cXG4vKSk7XG4gIHJldHVybiB7XG4gICAgcmF3OiBsYW5ndWFnZSxcbiAgICBuYW1lOiBsYW5ndWFnZSA/IGxhbmd1YWdlLnRyaW0oKSA6ICcnXG4gIH07XG59O1xuXG4vKipcbiAqIEV4cG9zZSBgbWF0dGVyYFxuICovXG5cbm1hdHRlci5jYWNoZSA9IHt9O1xubWF0dGVyLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgbWF0dGVyLmNhY2hlID0ge307XG59O1xubW9kdWxlLmV4cG9ydHMgPSBtYXR0ZXI7XG4iLCAiaW1wb3J0IHsgUGx1Z2luLCBOb3RpY2UsIFRGaWxlLCBURm9sZGVyLCBub3JtYWxpemVQYXRoIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgeyBDbG91ZGZsYXJlU3luY1NldHRpbmdUYWIsIENsb3VkZmxhcmVTeW5jU2V0dGluZ3MgfSBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCB7IFN5bmNFbmdpbmUsIENvbmZsaWN0SW5mbywgQ29uZmxpY3RSZXNvbHV0aW9uIH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5pbXBvcnQgeyBTeW5jU3RhdHVzQmFyIH0gZnJvbSAnLi9zdGF0dXMtYmFyJztcbmltcG9ydCB7IENvbmZsaWN0TW9kYWwgfSBmcm9tICcuL2NvbmZsaWN0LW1vZGFsJztcbmltcG9ydCB7IFB1Ymxpc2hFbmdpbmUgfSBmcm9tICcuL3B1Ymxpc2gtZW5naW5lJztcblxuaW50ZXJmYWNlIEZyb250bWF0dGVyRGF0YSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBzbHVnPzogc3RyaW5nO1xuICBkYXRlPzogc3RyaW5nO1xuICBzdW1tYXJ5Pzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIHB1Ymxpc2g/OiBib29sZWFuO1xuICBjb3ZlckltYWdlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUmVtb3RlRmlsZSB7XG4gIGtleTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICBzaXplOiBudW1iZXI7XG4gIHVwbG9hZGVkPzogc3RyaW5nO1xuICBodHRwRXRhZz86IHN0cmluZztcbiAgY29udGVudEhhc2g/OiBzdHJpbmc7XG4gIGVuY29kaW5nPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZGZsYXJlU3luY1BsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzOiBDbG91ZGZsYXJlU3luY1NldHRpbmdzO1xuICBzeW5jRW5naW5lOiBTeW5jRW5naW5lO1xuICBzdGF0dXNCYXI6IFN5bmNTdGF0dXNCYXI7XG4gIHB1Ymxpc2hFbmdpbmU6IFB1Ymxpc2hFbmdpbmU7XG5cbiAgYXN5bmMgb25sb2FkKCkge1xuICAgIGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG5cbiAgICAvLyBcdTUyMURcdTU5Q0JcdTUzMTZcdTU0MENcdTZCNjVcdTVGMTVcdTY0Q0VcbiAgICB0aGlzLnN5bmNFbmdpbmUgPSBuZXcgU3luY0VuZ2luZSh0aGlzKTtcbiAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUubG9hZFN5bmNTdGF0ZSgpO1xuXG4gICAgLy8gXHU1MjFEXHU1OUNCXHU1MzE2XHU1M0QxXHU1RTAzXHU1RjE1XHU2NENFXG4gICAgdGhpcy5wdWJsaXNoRW5naW5lID0gbmV3IFB1Ymxpc2hFbmdpbmUodGhpcyk7XG4gICAgYXdhaXQgdGhpcy5wdWJsaXNoRW5naW5lLmxvYWRTdGF0ZSgpO1xuICAgIGF3YWl0IHRoaXMucHVibGlzaEVuZ2luZS5yZWZyZXNoQWxsU3RhdHVzZXMoKTtcblxuICAgIC8vIFx1NTIxRFx1NTlDQlx1NTMxNlx1NzJCNlx1NjAwMVx1NjgwRlxuICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN5bmNTdGF0dXNCYXIodGhpcywge1xuICAgICAgb25TaG93Q29uZmxpY3RzOiAoKSA9PiB0aGlzLnNob3dDb25mbGljdE1vZGFsKCksXG4gICAgICBvblRyaWdnZXJTeW5jOiAoKSA9PiB0aGlzLnRyaWdnZXJGdWxsU3luYygpLFxuICAgIH0pO1xuXG4gICAgLy8gXHU3RUQxXHU1QjlBXHU1NDBDXHU2QjY1XHU1RjE1XHU2NENFXHU1NkRFXHU4QzAzXG4gICAgdGhpcy5zeW5jRW5naW5lLm9uU3RhdHNDaGFuZ2VkID0gKHN0YXRzKSA9PiB7XG4gICAgICB0aGlzLnN0YXR1c0Jhci51cGRhdGVTdGF0cyhzdGF0cyk7XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vbkNvbmZsaWN0c0ZvdW5kID0gKGNvbmZsaWN0cykgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlQ29uZmxpY3RzKGNvbmZsaWN0cyk7XG4gICAgICBuZXcgTm90aWNlKGBcdTI2QTBcdUZFMEYgJHtjb25mbGljdHMubGVuZ3RofSBzeW5jIGNvbmZsaWN0KHMpIGZvdW5kLiBDbGljayBzdGF0dXMgYmFyIHRvIHJlc29sdmUuYCk7XG4gICAgICB0aGlzLnNob3dDb25mbGljdE1vZGFsKCk7XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vblN5bmNDb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRzID0gdGhpcy5zeW5jRW5naW5lLnN0YXRzO1xuICAgICAgaWYgKHN0YXRzLmNvbmZsaWN0cyA9PT0gMCkge1xuICAgICAgICBuZXcgTm90aWNlKGBcdTI3MDUgU3luYyBjb21wbGV0ZTogJHtzdGF0cy5zeW5jZWRGaWxlc30gZmlsZXMgc3luY2VkYCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuc3luY0VuZ2luZS5vblN5bmNFcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgbmV3IE5vdGljZShgXHUyNzRDIFN5bmMgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgfTtcblxuICAgIC8vIFx1NkRGQlx1NTJBMFx1OEJCRVx1N0Y2RVx1OTc2Mlx1Njc3RlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgQ2xvdWRmbGFyZVN5bmNTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAvLyBcdTZERkJcdTUyQTBcdTU0N0RcdTRFRTRcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdzeW5jLWZ1bGwnLFxuICAgICAgbmFtZTogJ0Z1bGwgc3luYyB3aXRoIENsb3VkZmxhcmUnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMudHJpZ2dlckZ1bGxTeW5jKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdzeW5jLXRvLXJlbW90ZScsXG4gICAgICBuYW1lOiAnU3luYyBlbnRpcmUgdmF1bHQgdG8gQ2xvdWRmbGFyZSAodXBsb2FkIG9ubHkpJyxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnN5bmNUb1JlbW90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1mcm9tLXJlbW90ZScsXG4gICAgICBuYW1lOiAnRG93bmxvYWQgZW50aXJlIHZhdWx0IGZyb20gQ2xvdWRmbGFyZScsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zeW5jRnJvbVJlbW90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAndXBkYXRlLWZyb250bWF0dGVyJyxcbiAgICAgIG5hbWU6ICdVcGRhdGUgZnJvbnRtYXR0ZXIgZm9yIGN1cnJlbnQgZmlsZScsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKGVkaXRvcikgPT4gdGhpcy51cGRhdGVDdXJyZW50RmlsZUZyb250bWF0dGVyKGVkaXRvciksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdnZW5lcmF0ZS1hbGwtZnJvbnRtYXR0ZXInLFxuICAgICAgbmFtZTogJ0dlbmVyYXRlIGZyb250bWF0dGVyIGZvciBhbGwgbWFya2Rvd24gZmlsZXMnLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuZ2VuZXJhdGVBbGxGcm9udG1hdHRlcigpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc3luYy1jdXJyZW50LWZpbGUnLFxuICAgICAgbmFtZTogJ1N5bmMgY3VycmVudCBmaWxlIHRvIENsb3VkZmxhcmUnLFxuICAgICAgZWRpdG9yQ2FsbGJhY2s6ICgpID0+IHRoaXMuc3luY0N1cnJlbnRGaWxlKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6ICdyZXNvbHZlLWNvbmZsaWN0cycsXG4gICAgICBuYW1lOiAnUmVzb2x2ZSBzeW5jIGNvbmZsaWN0cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93Q29uZmxpY3RNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncHVibGlzaC1jdXJyZW50LW5vdGUnLFxuICAgICAgbmFtZTogJ1B1Ymxpc2g6IFB1Ymxpc2ggY3VycmVudCBub3RlJyxcbiAgICAgIGVkaXRvckNhbGxiYWNrOiAoKSA9PiB0aGlzLnB1Ymxpc2hDdXJyZW50Tm90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAndW5wdWJsaXNoLWN1cnJlbnQtbm90ZScsXG4gICAgICBuYW1lOiAnUHVibGlzaDogVW5wdWJsaXNoIGN1cnJlbnQgbm90ZScsXG4gICAgICBlZGl0b3JDYWxsYmFjazogKCkgPT4gdGhpcy51bnB1Ymxpc2hDdXJyZW50Tm90ZSgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAncHVibGlzaC1hbGwtY2hhbmdlcycsXG4gICAgICBuYW1lOiAnUHVibGlzaDogUHVibGlzaCBhbGwgY2hhbmdlcycsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5wdWJsaXNoQWxsQ2hhbmdlcygpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiAnc2hvdy1zeW5jLXN0YXR1cycsXG4gICAgICBuYW1lOiAnU2hvdyBzeW5jIHN0YXR1cycsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAvLyBcdTg5RTZcdTUzRDFcdTcyQjZcdTYwMDFcdTY4MEZcdTcwQjlcdTUxRkJcdTkwM0JcdThGOTFcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJbJ3Nob3dEZXRhaWxNb2RhbCddKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gXHU3NkQxXHU1NDJDXHU2NTg3XHU0RUY2XHU0RkREXHU1QjU4XHU0RThCXHU0RUY2XHVGRjBDXHU0RjdGXHU3NTI4IGRlYm91bmNlZCBcdTU0MENcdTZCNjVcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbignbW9kaWZ5JywgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiB0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICAgICAgdGhpcy5zeW5jRW5naW5lLnNjaGVkdWxlRmlsZVN5bmMoZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFx1NzZEMVx1NTQyQ1x1NjU4N1x1NEVGNlx1NTIxQlx1NUVGQVx1NEU4Qlx1NEVGNlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKCdjcmVhdGUnLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIHRoaXMuc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKSB7XG4gICAgICAgICAgaWYgKGZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmlsZUZyb250bWF0dGVyKGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gXHU2NTg3XHU0RUY2XHU1M0YzXHU5NTJFXHU4M0RDXHU1MzVBXHU1M0QxXHU1RTAzXHU5MDA5XHU5ODc5XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKCdmaWxlLW1lbnUnLCAobWVudSwgZmlsZSkgPT4ge1xuICAgICAgICBpZiAoIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wdWJsaXNoRW5naW5lLmdldFB1Ymxpc2hTdGF0ZShmaWxlLnBhdGgpO1xuICAgICAgICBpZiAoIXN0YXRlIHx8IHN0YXRlLnN0YXR1cyA9PT0gJ2RyYWZ0Jykge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zZXRUaXRsZSgnUHVibGlzaCBOb3RlJykuc2V0SWNvbigndXBsb2FkLWNsb3VkJykub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHVibGlzaEVuZ2luZS5wdWJsaXNoRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5zZXRUaXRsZSgnVW5wdWJsaXNoIE5vdGUnKS5zZXRJY29uKCd4LWNpcmNsZScpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnB1Ymxpc2hFbmdpbmUudW5wdWJsaXNoRmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBcdTZERkJcdTUyQTAgUmliYm9uIFx1NTZGRVx1NjgwN1xuICAgIHRoaXMuYWRkUmliYm9uSWNvbignY2xvdWQtdXBsb2FkJywgJ0Z1bGwgU3luYyB3aXRoIENsb3VkZmxhcmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXJGdWxsU3luYygpO1xuICAgIH0pO1xuXG4gICAgLy8gXHU1NDJGXHU1MkE4XHU4MUVBXHU1MkE4XHU1NDBDXHU2QjY1XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b1N5bmMpIHtcbiAgICAgIHRoaXMuc3luY0VuZ2luZS5zdGFydEF1dG9TeW5jKCk7XG4gICAgfVxuXG4gICAgLy8gXHU1NDJGXHU1MkE4XHU2NUY2XHU1NDBDXHU2QjY1XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3luY09uU3RhcnR1cCkge1xuICAgICAgLy8gXHU1RUY2XHU4RkRGIDMgXHU3OUQyXHU3QjQ5IE9ic2lkaWFuIFx1NUI4Q1x1NTE2OFx1NTJBMFx1OEY3RFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHJpZ2dlckZ1bGxTeW5jKCk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICAvLyBcdTU0MkZcdTUyQThcdTY1RjZcdTYyNkJcdTYzQ0ZcdTYyNDBcdTY3MDkgbWQgXHU2NTg3XHU0RUY2XHVGRjBDXHU4MUVBXHU1MkE4XHU4ODY1XHU1MTY4XHU3RjNBXHU1OTMxXHU3Njg0IGZyb250bWF0dGVyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyKSB7XG4gICAgICAvLyBcdTVFRjZcdThGREYgMiBcdTc5RDJcdTdCNDlcdTVGODUgdmF1bHQgXHU1QjhDXHU1MTY4XHU1MkEwXHU4RjdEXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zY2FuQW5kR2VuZXJhdGVGcm9udG1hdHRlcigpO1xuICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gbG9hZGVkJyk7XG4gIH1cblxuICBhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIHNlcnZlclVybDogJycsXG4gICAgICAgIGFwaVRva2VuOiAnJyxcbiAgICAgICAgYXV0b1N5bmM6IHRydWUsXG4gICAgICAgIGF1dG9Gcm9udG1hdHRlcjogdHJ1ZSxcbiAgICAgICAgc3luY0FsbEZpbGVzOiB0cnVlLFxuICAgICAgICBleGNsdWRlRm9sZGVyczogWydfdGVtcGxhdGVzJywgJy50cmFzaCddLFxuICAgICAgICBleGNsdWRlRmlsZXM6IFtdLFxuICAgICAgICBleGNsdWRlUGF0dGVybnM6IFtdLFxuICAgICAgICBhdXRvU3luY0ludGVydmFsOiA1LFxuICAgICAgICBjb25mbGljdFN0cmF0ZWd5OiAnYXNrJyBhcyBjb25zdCxcbiAgICAgICAgc3luY09uU3RhcnR1cDogdHJ1ZSxcbiAgICAgICAgZGVib3VuY2VEZWxheTogMzAsXG4gICAgICAgIHB1Ymxpc2hCZWhhdmlvcjogJ2Zyb250bWF0dGVyLW9ubHknLFxuICAgICAgICBwdWJsaXNoU2VydmVyVXJsOiAnJyxcbiAgICAgICAgcHVibGlzaEFwaVRva2VuOiAnJyxcbiAgICAgICAgYXR0YWNobWVudHNQYXRoUHJlZml4OiAnYXR0YWNobWVudHMnLFxuICAgICAgfSxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcblxuICAgIC8vIFx1OTFDRFx1NTQyRlx1ODFFQVx1NTJBOFx1NTQwQ1x1NkI2NVx1RkYwOFx1OTVGNFx1OTY5NFx1NTNFRlx1ODBGRFx1NjUzOVx1NTNEOFx1RkYwOVxuICAgIGlmICh0aGlzLnN5bmNFbmdpbmUpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TeW5jKSB7XG4gICAgICAgIHRoaXMuc3luY0VuZ2luZS5zdGFydEF1dG9TeW5jKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN5bmNFbmdpbmUuc3RvcEF1dG9TeW5jKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gPT09PT09PT09PSBTeW5jIFRyaWdnZXJzID09PT09PT09PT1cblxuICBhc3luYyB0cmlnZ2VyRnVsbFN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnNlcnZlclVybCB8fCAhdGhpcy5zZXR0aW5ncy5hcGlUb2tlbikge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIGNvbmZpZ3VyZSBTZXJ2ZXIgVVJMIGFuZCBBUEkgVG9rZW4gaW4gc2V0dGluZ3MnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUZXN0IGNvbm5lY3Rpb24gZmlyc3RcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvYmxvZy9zaXRlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgbmV3IE5vdGljZShgQ29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKCdTdGFydGluZyBmdWxsIHN5bmMuLi4nKTtcbiAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUuZnVsbFN5bmMoKTtcbiAgfVxuXG4gIHNob3dDb25mbGljdE1vZGFsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZsaWN0cyA9IHRoaXMuc3luY0VuZ2luZS5jb25mbGljdHM7XG4gICAgaWYgKGNvbmZsaWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIGNvbmZsaWN0cyB0byByZXNvbHZlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3IENvbmZsaWN0TW9kYWwoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIGNvbmZsaWN0cyxcbiAgICAgIGFzeW5jIChjb25mbGljdCwgcmVzb2x1dGlvbikgPT4ge1xuICAgICAgICBhd2FpdCB0aGlzLnN5bmNFbmdpbmUucmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIudXBkYXRlQ29uZmxpY3RzKHRoaXMuc3luY0VuZ2luZS5jb25mbGljdHMpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIChyZXNvbHV0aW9uKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY0VuZ2luZS5yZXNvbHZlQWxsQ29uZmxpY3RzKHJlc29sdXRpb24pO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci51cGRhdGVDb25mbGljdHModGhpcy5zeW5jRW5naW5lLmNvbmZsaWN0cyk7XG4gICAgICB9XG4gICAgKS5vcGVuKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEFQSSBcdThDMDNcdTc1MjggPT09PT09PT09PVxuXG4gIGFzeW5jIGFwaTxUID0gYW55PihlbmRwb2ludDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdEluaXQpOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCB7IHNlcnZlclVybCwgYXBpVG9rZW4gfSA9IHRoaXMuc2V0dGluZ3M7XG5cbiAgICBpZiAoIXNlcnZlclVybCB8fCAhYXBpVG9rZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIFVSTCAoJHtzZXJ2ZXJVcmwgfHwgJ2VtcHR5J30pIGFuZCBBUEkgdG9rZW4gKCR7YXBpVG9rZW4gPyAnc2V0JyA6ICdlbXB0eSd9KSBhcmUgcmVxdWlyZWRgKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvJC8sICcnKSArIGVuZHBvaW50O1xuICAgIGNvbnNvbGUubG9nKGBbQVBJXSAke29wdGlvbnM/Lm1ldGhvZCB8fCAnR0VUJ30gJHt1cmx9YCk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucz8uaGVhZGVycyk7XG4gICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YXBpVG9rZW59YCk7XG4gICAgaWYgKG9wdGlvbnM/Lm1ldGhvZCAmJiBvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICAgIGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGBbQVBJXSBSZXNwb25zZTogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiByZXNwb25zZS5zdGF0dXNUZXh0IH0pKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIGVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfTogJHtlcnJvci5lcnJvciB8fCByZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFx1NEUwQVx1NEYyMC9cdTRFMEJcdThGN0QgPT09PT09PT09PVxuXG4gIGFzeW5jIHVwbG9hZEZpbGUoa2V5OiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgY29udGVudFR5cGUgPSAndGV4dC9tYXJrZG93bicsIGVuY29kaW5nOiAndXRmLTgnIHwgJ2Jhc2U2NCcgPSAndXRmLTgnKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5hcGkoJy9hcGkvc3luYy91cGxvYWQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsga2V5LCBjb250ZW50LCBjb250ZW50VHlwZSwgZW5jb2RpbmcgfSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkb3dubG9hZEZpbGUoa2V5OiBzdHJpbmcpOiBQcm9taXNlPFJlbW90ZUZpbGU+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmFwaTx7IHN1Y2Nlc3M6IGJvb2xlYW47IGRhdGE6IFJlbW90ZUZpbGUgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke2tleX1gKTtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH1cblxuICBhc3luYyBsaXN0RmlsZXMocHJlZml4ID0gJycpOiBQcm9taXNlPHsga2V5OiBzdHJpbmc7IHNpemU6IG51bWJlcjsgdXBsb2FkZWQ/OiBzdHJpbmc7IGh0dHBFdGFnPzogc3RyaW5nIH1bXT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuYXBpPHsgc3VjY2VzczogYm9vbGVhbjsgZGF0YTogeyBmaWxlczogYW55W10gfSB9PihcbiAgICAgIGAvYXBpL3N5bmMvbGlzdD9wcmVmaXg9JHtlbmNvZGVVUklDb21wb25lbnQocHJlZml4KX1gXG4gICAgKTtcbiAgICByZXR1cm4gcmVzLmRhdGEuZmlsZXM7XG4gIH1cblxuICBhc3luYyBkZWxldGVGaWxlKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5hcGkoYC9hcGkvc3luYy9kZWxldGUvJHtrZXl9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBGcm9udG1hdHRlciBcdTU5MDRcdTc0MDYgPT09PT09PT09PVxuXG4gIGFzeW5jIGdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZTogVEZpbGUpOiBQcm9taXNlPEZyb250bWF0dGVyRGF0YT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gbWF0dGVyKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBleGlzdGluZy5kYXRhLnRpdGxlIHx8IGZpbGUuYmFzZW5hbWUsXG4gICAgICBzbHVnOiBleGlzdGluZy5kYXRhLnNsdWcgfHwgdGhpcy5nZW5lcmF0ZVNsdWcoZmlsZS5iYXNlbmFtZSksXG4gICAgICBkYXRlOiBleGlzdGluZy5kYXRhLmRhdGUgfHwgbmV3IERhdGUoZmlsZS5zdGF0LmN0aW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgc3VtbWFyeTogZXhpc3RpbmcuZGF0YS5zdW1tYXJ5IHx8IHRoaXMuZXh0cmFjdFN1bW1hcnkoZXhpc3RpbmcuY29udGVudCksXG4gICAgICB0YWdzOiBleGlzdGluZy5kYXRhLnRhZ3MgfHwgW10sXG4gICAgICBwdWJsaXNoOiBleGlzdGluZy5kYXRhLnB1Ymxpc2ggPz8gZmFsc2UsXG4gICAgICBjb3ZlckltYWdlOiBleGlzdGluZy5kYXRhLmNvdmVySW1hZ2UsXG4gICAgfTtcbiAgfVxuXG4gIGdlbmVyYXRlU2x1ZyhmaWxlbmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZW5hbWVcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvW15cXHctXS9nLCAnJylcbiAgICAgIC5zdWJzdHJpbmcoMCwgMTAwKTtcbiAgfVxuXG4gIGV4dHJhY3RTdW1tYXJ5KGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZmlyc3RQYXJhZ3JhcGggPSBjb250ZW50LnNwbGl0KCdcXG5cXG4nKVswXTtcbiAgICByZXR1cm4gZmlyc3RQYXJhZ3JhcGgucmVwbGFjZSgvWyMqYF9cXFtcXF1dL2csICcnKS5zdWJzdHJpbmcoMCwgMjAwKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUZpbGVGcm9udG1hdHRlcihmaWxlOiBURmlsZSwgc2lsZW50ID0gZmFsc2UpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIC8vIFx1NTk4Mlx1Njc5Q1x1NURGMlx1NjcwOSBmcm9udG1hdHRlclx1RkYwQ1x1OERGM1x1OEZDN1x1RkYwOFx1NEVDNVx1NEUzQVx1N0YzQVx1NTkzMVx1NzY4NFx1NjU4N1x1NEVGNlx1NzUxRlx1NjIxMFx1RkYwOVxuICAgIGlmIChjb250ZW50LnN0YXJ0c1dpdGgoJy0tLScpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBmcm9udG1hdHRlciA9IGF3YWl0IHRoaXMuZ2VuZXJhdGVGcm9udG1hdHRlcihmaWxlKTtcbiAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShjb250ZW50LCBmcm9udG1hdHRlcik7XG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIG5ld0NvbnRlbnQpO1xuXG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIG5ldyBOb3RpY2UoYFVwZGF0ZWQgZnJvbnRtYXR0ZXIgZm9yICR7ZmlsZS5uYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUN1cnJlbnRGaWxlRnJvbnRtYXR0ZXIoZWRpdG9yOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ05vIGFjdGl2ZSBmaWxlJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoYWN0aXZlRmlsZSk7XG4gICAgY29uc3QgY29udGVudCA9IGVkaXRvci5nZXRWYWx1ZSgpO1xuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBtYXR0ZXIuc3RyaW5naWZ5KGNvbnRlbnQsIGZyb250bWF0dGVyKTtcblxuICAgIGVkaXRvci5zZXRWYWx1ZShuZXdDb250ZW50KTtcbiAgICBuZXcgTm90aWNlKCdVcGRhdGVkIGZyb250bWF0dGVyJyk7XG4gIH1cblxuICAvKipcbiAgICogXHU2MjZCXHU2M0NGXHU2MjQwXHU2NzA5IG1kIFx1NjU4N1x1NEVGNlx1RkYwQ1x1Nzg2RVx1NEZERFx1NkJDRlx1NEUyQVx1NjU4N1x1NEVGNlx1OTBGRFx1NjcwOVx1NUI4Q1x1NjU3NFx1NzY4NCBmcm9udG1hdHRlclxuICAgKiBcdTdFREZcdTRFMDBcdTU5MDRcdTc0MDZcdTRFMDlcdTc5Q0RcdTYwQzVcdTUxQjVcdUZGMUFcbiAgICogMS4gXHU1QjhDXHU1MTY4XHU2Q0ExXHU2NzA5IGZyb250bWF0dGVyIFx1MjE5MiBcdTc1MUZcdTYyMTBcdTUxNjhcdTkwRThcdTVCNTdcdTZCQjVcbiAgICogMi4gXHU2NzA5XHU5MEU4XHU1MjA2IGZyb250bWF0dGVyXHVGRjA4XHU3RjNBXHU1QzExXHU2N0QwXHU0RTlCXHU1QjU3XHU2QkI1XHVGRjA5XHUyMTkyIFx1ODg2NVx1NTE2OFx1N0YzQVx1NTkzMVx1NUI1N1x1NkJCNVxuICAgKiAzLiBcdTVERjJcdTY3MDlcdTVCOENcdTY1NzQgZnJvbnRtYXR0ZXIgXHUyMTkyIFx1OERGM1x1OEZDN1xuICAgKi9cbiAgYXN5bmMgc2NhbkFuZEdlbmVyYXRlRnJvbnRtYXR0ZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRGaWxlcygpLmZpbHRlcihcbiAgICAgIChmKSA9PiBmLnBhdGguZW5kc1dpdGgoJy5tZCcpICYmIHRoaXMuc2hvdWxkU3luY0ZpbGUoZi5wYXRoKVxuICAgICk7XG5cbiAgICBsZXQgZ2VuZXJhdGVkID0gMDtcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFsndGl0bGUnLCAnc2x1ZycsICdkYXRlJywgJ3N1bW1hcnknLCAndGFncycsICdwdWJsaXNoJ10gYXMgY29uc3Q7XG5cbiAgICBjb25zb2xlLmxvZyhgW0Zyb250bWF0dGVyXSBTY2FubmluZyAke2ZpbGVzLmxlbmd0aH0gbWFya2Rvd24gZmlsZXMuLi5gKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG5cbiAgICAgICAgLy8gZ3JheS1tYXR0ZXIgXHU3RURGXHU0RTAwXHU4OUUzXHU2NzkwXHVGRjFBXHU2NUUwXHU4QkJBXHU2NzA5XHU2Q0ExXHU2NzA5IC0tLSBcdTkwRkRcdTgwRkRcdTZCNjNcdTc4NkVcdTg5RTNcdTY3OTBcbiAgICAgICAgLy8gXHU2Q0ExXHU2NzA5IGZyb250bWF0dGVyIFx1MjE5MiBkYXRhPXt9LCBjb250ZW50PVx1NTM5Rlx1NTlDQlx1NTE4NVx1NUJCOVxuICAgICAgICAvLyBcdTY3MDkgZnJvbnRtYXR0ZXIgXHUyMTkyIGRhdGE9e1x1NURGMlx1NjcwOVx1NUI1N1x1NkJCNX0sIGNvbnRlbnQ9XHU2QjYzXHU2NTg3XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihjb250ZW50KTtcblxuICAgICAgICAvLyBcdTc1MUZcdTYyMTBcdTlFRDhcdThCQTRcdTUwM0NcbiAgICAgICAgY29uc3QgZGVmYXVsdHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7XG4gICAgICAgICAgdGl0bGU6IGZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgc2x1ZzogdGhpcy5nZW5lcmF0ZVNsdWcoZmlsZS5iYXNlbmFtZSksXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoZmlsZS5zdGF0LmN0aW1lKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHN1bW1hcnk6IHRoaXMuZXh0cmFjdFN1bW1hcnkocGFyc2VkLmNvbnRlbnQpLFxuICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgIHB1Ymxpc2g6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFx1NjhDMFx1NjdFNVx1NTRFQVx1NEU5Qlx1NUZDNVx1ODk4MVx1NUI1N1x1NkJCNVx1N0YzQVx1NTkzMVxuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHJlcXVpcmVkRmllbGRzKSB7XG4gICAgICAgICAgaWYgKHBhcnNlZC5kYXRhW2ZpZWxkXSA9PT0gdW5kZWZpbmVkIHx8IHBhcnNlZC5kYXRhW2ZpZWxkXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcGFyc2VkLmRhdGFbZmllbGRdID0gZGVmYXVsdHNbZmllbGRdO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgICAvLyBcdTc1MjggZ3JheS1tYXR0ZXIgXHU5MUNEXHU2NUIwXHU1RThGXHU1MjE3XHU1MzE2XHVGRjA4XHU4MUVBXHU1MkE4XHU2REZCXHU1MkEwIC0tLSBcdTUyMDZcdTk2OTRcdTdCMjZcdUZGMDlcbiAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gbWF0dGVyLnN0cmluZ2lmeShwYXJzZWQuY29udGVudCwgcGFyc2VkLmRhdGEpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICBnZW5lcmF0ZWQrKztcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW0Zyb250bWF0dGVyXSBcdTI3MDUgJHtmaWxlLnBhdGh9IFx1MjAxNCBhZGRlZCBtaXNzaW5nIGZpZWxkc2ApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbRnJvbnRtYXR0ZXJdIFx1Mjc0QyBGYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdlbmVyYXRlZCA+IDApIHtcbiAgICAgIG5ldyBOb3RpY2UoYFx1MjcwNSBHZW5lcmF0ZWQvdXBkYXRlZCBmcm9udG1hdHRlciBmb3IgJHtnZW5lcmF0ZWR9IGZpbGUocylgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYFtGcm9udG1hdHRlcl0gRG9uZTogJHtnZW5lcmF0ZWR9LyR7ZmlsZXMubGVuZ3RofSBmaWxlcyB1cGRhdGVkYCk7XG4gIH1cblxuICAvKipcbiAgICogXHU0RTNBXHU2MjQwXHU2NzA5IG1kIFx1NjU4N1x1NEVGNlx1NUYzQVx1NTIzNlx1NzUxRlx1NjIxMC9cdTY2RjRcdTY1QjAgZnJvbnRtYXR0ZXJcdUZGMDhcdTUzMDVcdTYyRUNcdTVERjJcdTY3MDkgZnJvbnRtYXR0ZXIgXHU3Njg0XHU2NTg3XHU0RUY2XHVGRjA5XG4gICAqL1xuICBhc3luYyBnZW5lcmF0ZUFsbEZyb250bWF0dGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoXG4gICAgICAoZikgPT4gZi5wYXRoLmVuZHNXaXRoKCcubWQnKSAmJiB0aGlzLnNob3VsZFN5bmNGaWxlKGYucGF0aClcbiAgICApO1xuXG4gICAgbGV0IHVwZGF0ZWQgPSAwO1xuICAgIG5ldyBOb3RpY2UoYEdlbmVyYXRpbmcgZnJvbnRtYXR0ZXIgZm9yICR7ZmlsZXMubGVuZ3RofSBmaWxlcy4uLmApO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBhd2FpdCB0aGlzLmdlbmVyYXRlRnJvbnRtYXR0ZXIoZmlsZSk7XG4gICAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBtYXR0ZXIuc3RyaW5naWZ5KFxuICAgICAgICAgIG1hdHRlcihjb250ZW50KS5jb250ZW50LCAvLyBcdTUzQkJcdTYzODlcdTY1RTcgZnJvbnRtYXR0ZXJcdUZGMENcdTc1MjhcdTY1QjBcdTc2ODRcdTY2RkZcdTYzNjJcbiAgICAgICAgICBmcm9udG1hdHRlclxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFx1NEVDNVx1NTcyOFx1NTE4NVx1NUJCOVx1NUI5RVx1OTY0NVx1NTNEOFx1NTMxNlx1NjVGNlx1NTE5OVx1NTE2NVxuICAgICAgICBpZiAoY29udGVudCAhPT0gbmV3Q29udGVudCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBuZXdDb250ZW50KTtcbiAgICAgICAgICB1cGRhdGVkKys7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFtGcm9udG1hdHRlcl0gRmFpbGVkIGZvciAke2ZpbGUucGF0aH06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFx1MjcwNSBVcGRhdGVkIGZyb250bWF0dGVyIGZvciAke3VwZGF0ZWR9LyR7ZmlsZXMubGVuZ3RofSBmaWxlc2ApO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBcdTU0MENcdTZCNjVcdTkwM0JcdThGOTEgPT09PT09PT09PVxuXG4gIHNob3VsZFN5bmNGaWxlKGZpbGVQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAvLyBcdTYzOTJcdTk2NjRcdTcyNzlcdTVCOUFcdTY1ODdcdTRFRjZcdTU5MzlcbiAgICBmb3IgKGNvbnN0IGV4Y2x1ZGUgb2YgdGhpcy5zZXR0aW5ncy5leGNsdWRlRm9sZGVycyB8fCBbXSkge1xuICAgICAgaWYgKGZpbGVQYXRoLnN0YXJ0c1dpdGgoZXhjbHVkZSArICcvJykgfHwgZmlsZVBhdGguc3RhcnRzV2l0aChleGNsdWRlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gXHU2MzkyXHU5NjY0IGdsb2IgXHU2QTIxXHU1RjBGXG4gICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHRoaXMuc2V0dGluZ3MuZXhjbHVkZVBhdHRlcm5zIHx8IFtdKSB7XG4gICAgICBpZiAobWF0Y2hlc0dsb2IoZmlsZVBhdGgsIHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBcdTYzOTJcdTk2NjQgLmNvbmZsaWN0IFx1NjU4N1x1NEVGNlxuICAgIGlmIChmaWxlUGF0aC5pbmNsdWRlcygnLmNvbmZsaWN0LScpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRSZW1vdGVLZXkoZmlsZTogVEZpbGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlLnBhdGg7XG4gIH1cblxuICBnZXRNaW1lVHlwZShleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAganBnOiAnaW1hZ2UvanBlZycsIGpwZWc6ICdpbWFnZS9qcGVnJywgcG5nOiAnaW1hZ2UvcG5nJyxcbiAgICAgIGdpZjogJ2ltYWdlL2dpZicsIHdlYnA6ICdpbWFnZS93ZWJwJywgc3ZnOiAnaW1hZ2Uvc3ZnK3htbCcsXG4gICAgICBhdmlmOiAnaW1hZ2UvYXZpZicsIHBkZjogJ2FwcGxpY2F0aW9uL3BkZicsXG4gICAgICBtcDM6ICdhdWRpby9tcGVnJywgbXA0OiAndmlkZW8vbXA0JyxcbiAgICAgIGpzb246ICdhcHBsaWNhdGlvbi9qc29uJywgeWFtbDogJ3RleHQveWFtbCcsIHltbDogJ3RleHQveWFtbCcsXG4gICAgICBjc3M6ICd0ZXh0L2NzcycsIGpzOiAndGV4dC9qYXZhc2NyaXB0JywgdHM6ICd0ZXh0L3R5cGVzY3JpcHQnLFxuICAgIH07XG4gICAgcmV0dXJuIG1hcFtleHQudG9Mb3dlckNhc2UoKV0gfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSc7XG4gIH1cblxuICBhc3luYyBzeW5jRmlsZVRvUmVtb3RlKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLnNob3VsZFN5bmNGaWxlKGZpbGUucGF0aCkpIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBpc01hcmtkb3duID0gZmlsZS5wYXRoLmVuZHNXaXRoKCcubWQnKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gUmVhZGluZyBmaWxlOiAke2ZpbGUucGF0aH0gKCR7aXNNYXJrZG93biA/ICdtYXJrZG93bicgOiBmaWxlLmV4dGVuc2lvbn0pYCk7XG5cbiAgICAgIGxldCBjb250ZW50OiBzdHJpbmc7XG4gICAgICBsZXQgY29udGVudFR5cGU6IHN0cmluZztcbiAgICAgIGxldCBlbmNvZGluZzogJ3V0Zi04JyB8ICdiYXNlNjQnID0gJ3V0Zi04JztcblxuICAgICAgaWYgKGlzTWFya2Rvd24pIHtcbiAgICAgICAgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgIGNvbnRlbnRUeXBlID0gJ3RleHQvbWFya2Rvd24nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU0RThDXHU4RkRCXHU1MjM2XHU2NTg3XHU0RUY2XHU3NTI4IGJhc2U2NCBcdTdGMTZcdTc4MDFcbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgICAgY29udGVudCA9IHRoaXMuYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXIpO1xuICAgICAgICBlbmNvZGluZyA9ICdiYXNlNjQnO1xuICAgICAgICBjb250ZW50VHlwZSA9IHRoaXMuZ2V0TWltZVR5cGUoZmlsZS5leHRlbnNpb24pO1xuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIEZpbGUgc2l6ZTogJHtmaWxlLnN0YXQuc2l6ZX0gYnl0ZXMsIGVuY29kaW5nOiAke2VuY29kaW5nfWApO1xuXG4gICAgICAvLyBcdTU5ODJcdTY3OUNcdTY2MkYgbWFya2Rvd25cdUZGMENcdTY4QzBcdTY3RTVcdTY2MkZcdTU0MjZcdTVERjJcdTUzRDFcdTVFMDNcdTRFRTVcdTUxQjNcdTVCOUFcdTY2MkZcdTU0MjZcdTRFMEFcdTRGMjBcdTU2RkVcdTcyNDdcbiAgICAgIGNvbnN0IGlzUHVibGlzaGVkID0gaXNNYXJrZG93blxuICAgICAgICA/ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBtYXR0ZXIoY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkLmRhdGEucHVibGlzaCA9PT0gdHJ1ZTtcbiAgICAgICAgICB9KSgpXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAgIC8vIFx1NEUwQVx1NEYyMFx1NjU4N1x1NEVGNlxuICAgICAgY29uc3QgcmVtb3RlS2V5ID0gdGhpcy5nZXRSZW1vdGVLZXkoZmlsZSk7XG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIFVwbG9hZGluZyB0bzogJHtyZW1vdGVLZXl9YCk7XG4gICAgICBhd2FpdCB0aGlzLnVwbG9hZEZpbGUocmVtb3RlS2V5LCBjb250ZW50LCBjb250ZW50VHlwZSwgZW5jb2RpbmcpO1xuICAgICAgY29uc29sZS5sb2coYFtTeW5jXSBcdTI3MDUgVXBsb2FkZWQgJHtmaWxlLm5hbWV9YCk7XG5cbiAgICAgIC8vIFx1NTk4Mlx1Njc5QyBtYXJrZG93biBcdTVERjJcdTUzRDFcdTVFMDNcdUZGMENcdTYzRDBcdTUzRDZcdTVFNzZcdTRFMEFcdTRGMjBcdTU2RkVcdTcyNDdcbiAgICAgIGlmIChpc01hcmtkb3duICYmIGlzUHVibGlzaGVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gRXh0cmFjdGluZyBpbWFnZXMgZnJvbSAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgYXdhaXQgdGhpcy5leHRyYWN0QW5kVXBsb2FkSW1hZ2VzKGNvbnRlbnQsIGZpbGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jXSBcdTI3NEMgRmFpbGVkIHRvIHN5bmMgJHtmaWxlLm5hbWV9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY0ZpbGVGcm9tUmVtb3RlKHJlbW90ZUZpbGU6IHsga2V5OiBzdHJpbmcgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kb3dubG9hZEZpbGUocmVtb3RlRmlsZS5rZXkpO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZGF0YS5rZXk7XG5cbiAgICAgIGNvbnN0IGV4aXN0aW5nRmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChsb2NhbFBhdGgpO1xuICAgICAgY29uc3QgaXNNYXJrZG93biA9IGxvY2FsUGF0aC5lbmRzV2l0aCgnLm1kJyk7XG5cbiAgICAgIGlmIChleGlzdGluZ0ZpbGUgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgICBpZiAoaXNNYXJrZG93biB8fCBkYXRhLmVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgLy8gXHU2NTg3XHU2NzJDXHU2NTg3XHU0RUY2XHU3NkY0XHU2M0E1XHU2QkQ0XHU4RjgzXG4gICAgICAgICAgY29uc3QgbG9jYWxDb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChleGlzdGluZ0ZpbGUpO1xuICAgICAgICAgIGlmIChsb2NhbENvbnRlbnQgIT09IGRhdGEuY29udGVudCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGV4aXN0aW5nRmlsZSwgZGF0YS5jb250ZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIFVwZGF0ZWQgJHtsb2NhbFBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFx1NEU4Q1x1OEZEQlx1NTIzNlx1NjU4N1x1NEVGNlx1NkJENFx1OEY4M1x1NTkyN1x1NUMwRlxuICAgICAgICAgIGlmIChleGlzdGluZ0ZpbGUuc3RhdC5zaXplICE9PSBkYXRhLnNpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuYmFzZTY0VG9BcnJheUJ1ZmZlcihkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5QmluYXJ5KGV4aXN0aW5nRmlsZSwgYnVmZmVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIFVwZGF0ZWQgJHtsb2NhbFBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTY1ODdcdTRFRjZcdTRFMERcdTVCNThcdTU3MjhcdUZGMENcdTUyMUJcdTVFRkFcbiAgICAgICAgY29uc3QgZm9sZGVyUGF0aCA9IGxvY2FsUGF0aC5zdWJzdHJpbmcoMCwgbG9jYWxQYXRoLmxhc3RJbmRleE9mKCcvJykpO1xuICAgICAgICBpZiAoZm9sZGVyUGF0aCkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXJQYXRoKS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNYXJrZG93biB8fCBkYXRhLmVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGxvY2FsUGF0aCwgZGF0YS5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLmJhc2U2NFRvQXJyYXlCdWZmZXIoZGF0YS5jb250ZW50KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkobG9jYWxQYXRoLCBidWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIENyZWF0ZWQgJHtsb2NhbFBhdGh9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihgW0Rvd25sb2FkXSBGYWlsZWQgdG8gc3luYyAke3JlbW90ZUZpbGUua2V5fTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBiYXNlNjRUb0FycmF5QnVmZmVyKGJhc2U2NDogc3RyaW5nKTogQXJyYXlCdWZmZXIge1xuICAgIGNvbnN0IGJpbmFyeSA9IGF0b2IoYmFzZTY0KTtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJpbmFyeS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBieXRlc1tpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xuICB9XG5cbiAgYXN5bmMgc3luY1RvUmVtb3RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIG5ldyBOb3RpY2UoJ1N5bmNpbmcgdmF1bHQgdG8gQ2xvdWRmbGFyZS4uLicpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0RmlsZXMoKTtcbiAgICAgIGxldCBzeW5jZWQgPSAwO1xuICAgICAgbGV0IHNraXBwZWQgPSAwO1xuXG4gICAgICBjb25zb2xlLmxvZyhgW1N5bmNdIEZvdW5kICR7ZmlsZXMubGVuZ3RofSBmaWxlcyBpbiB2YXVsdGApO1xuXG4gICAgICAvLyBUZXN0IEFQSSBjb25uZWN0aW9uIGZpcnN0XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwaSgnL2FwaS9ibG9nL3NpdGUnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1tTeW5jXSBcdTI3MDUgQVBJIGNvbm5lY3Rpb24gdGVzdCBwYXNzZWQnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1N5bmNdIFx1Mjc0QyBBUEkgY29ubmVjdGlvbiB0ZXN0IGZhaWxlZDonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgbmV3IE5vdGljZShgQ29ubmVjdGlvbiBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZFN5bmNGaWxlKGZpbGUucGF0aCkpIHtcbiAgICAgICAgICBza2lwcGVkKys7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0ZpbGVUb1JlbW90ZShmaWxlKTtcbiAgICAgICAgICBzeW5jZWQrKztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jXSBcdTI3NEMgRmFpbGVkIHRvIHN5bmMgJHtmaWxlLnBhdGh9OmAsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGBbU3luY10gRG9uZTogJHtzeW5jZWR9IHN5bmNlZCwgJHtza2lwcGVkfSBza2lwcGVkYCk7XG4gICAgICBuZXcgTm90aWNlKGBTeW5jZWQgJHtzeW5jZWR9LyR7ZmlsZXMubGVuZ3RofSBmaWxlcyAoJHtza2lwcGVkfSBza2lwcGVkKWApO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tTeW5jXSBGYWlsZWQgdG8gc3luYzonLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBTeW5jIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHN5bmNGcm9tUmVtb3RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIG5ldyBOb3RpY2UoJ0Rvd25sb2FkaW5nIGZyb20gQ2xvdWRmbGFyZS4uLicpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdbRG93bmxvYWRdIExpc3RpbmcgcmVtb3RlIGZpbGVzLi4uJyk7XG4gICAgICBjb25zdCByZW1vdGVGaWxlcyA9IGF3YWl0IHRoaXMubGlzdEZpbGVzKCcnKTtcbiAgICAgIGNvbnNvbGUubG9nKGBbRG93bmxvYWRdIEZvdW5kICR7cmVtb3RlRmlsZXMubGVuZ3RofSByZW1vdGUgZmlsZXNgKTtcblxuICAgICAgbGV0IHN5bmNlZCA9IDA7XG5cbiAgICAgIGZvciAoY29uc3QgcmVtb3RlRmlsZSBvZiByZW1vdGVGaWxlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBQcm9jZXNzaW5nOiAke3JlbW90ZUZpbGUua2V5fWApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMuc3luY0ZpbGVGcm9tUmVtb3RlKHJlbW90ZUZpbGUpO1xuICAgICAgICAgIHN5bmNlZCsrO1xuICAgICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgW0Rvd25sb2FkXSBGYWlsZWQgdG8gc3luYyAke3JlbW90ZUZpbGUua2V5fTpgLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhgW0Rvd25sb2FkXSBEb25lOiAke3N5bmNlZH0gZmlsZXMgcHJvY2Vzc2VkYCk7XG4gICAgICBuZXcgTm90aWNlKGBEb3dubG9hZGVkICR7c3luY2VkfSBmaWxlcyBmcm9tIENsb3VkZmxhcmVgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbRG93bmxvYWRdIEZhaWxlZDonLCBlcnJvcik7XG4gICAgICBuZXcgTm90aWNlKGBEb3dubG9hZCBmYWlsZWQ6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzeW5jQ3VycmVudEZpbGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZlRmlsZSA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKCk7XG4gICAgaWYgKCFhY3RpdmVGaWxlKSB7XG4gICAgICBuZXcgTm90aWNlKCdObyBhY3RpdmUgZmlsZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuc3luY0ZpbGVUb1JlbW90ZShhY3RpdmVGaWxlKTtcbiAgICBuZXcgTm90aWNlKGBTeW5jZWQgJHthY3RpdmVGaWxlLm5hbWV9IHRvIENsb3VkZmxhcmVgKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gXHU1NkZFXHU3MjQ3XHU1OTA0XHU3NDA2ID09PT09PT09PT1cblxuICBhc3luYyBleHRyYWN0QW5kVXBsb2FkSW1hZ2VzKGNvbnRlbnQ6IHN0cmluZywgZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpbWFnZVJlZ2V4ID0gLyFcXFsuKj9cXF1cXCgoLio/KVxcKS9nO1xuICAgIGxldCBtYXRjaDtcblxuICAgIHdoaWxlICgobWF0Y2ggPSBpbWFnZVJlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbWFnZVBhdGggPSBtYXRjaFsxXTtcblxuICAgICAgaWYgKGltYWdlUGF0aC5zdGFydHNXaXRoKCcuLycpIHx8ICFpbWFnZVBhdGguc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIGNvbnN0IGZvbGRlciA9IGZpbGUucGFyZW50Py5wYXRoIHx8ICcnO1xuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IG5vcm1hbGl6ZVBhdGgoYCR7Zm9sZGVyfS8ke2ltYWdlUGF0aH1gKTtcbiAgICAgICAgY29uc3QgaW1hZ2VGaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZ1bGxQYXRoKTtcblxuICAgICAgICBpZiAoaW1hZ2VGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICBjb25zdCBpbWFnZUJ1ZmZlciA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWRCaW5hcnkoaW1hZ2VGaWxlKTtcbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSB0aGlzLmFycmF5QnVmZmVyVG9CYXNlNjQoaW1hZ2VCdWZmZXIpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGltYWdlRmlsZS5leHRlbnNpb24udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgIGxldCBjb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nO1xuICAgICAgICAgIGlmIChbJ2pwZycsICdqcGVnJ10uaW5jbHVkZXMoZXh0KSkgY29udGVudFR5cGUgPSBgaW1hZ2UvanBlZ2A7XG4gICAgICAgICAgZWxzZSBpZiAoZXh0ID09PSAncG5nJykgY29udGVudFR5cGUgPSAnaW1hZ2UvcG5nJztcbiAgICAgICAgICBlbHNlIGlmIChleHQgPT09ICdnaWYnKSBjb250ZW50VHlwZSA9ICdpbWFnZS9naWYnO1xuICAgICAgICAgIGVsc2UgaWYgKGV4dCA9PT0gJ3dlYnAnKSBjb250ZW50VHlwZSA9ICdpbWFnZS93ZWJwJztcbiAgICAgICAgICBlbHNlIGlmIChleHQgPT09ICdzdmcnKSBjb250ZW50VHlwZSA9ICdpbWFnZS9zdmcreG1sJztcblxuICAgICAgICAgIGF3YWl0IHRoaXMuYXBpKCcvYXBpL3N5bmMvdXBsb2FkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIGtleTogYGltYWdlcy8ke2ltYWdlRmlsZS5uYW1lfWAsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGJhc2U2NCxcbiAgICAgICAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXJyYXlCdWZmZXJUb0Jhc2U2NChidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XG4gICAgbGV0IGJpbmFyeSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBidG9hKGJpbmFyeSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFB1Ymxpc2ggTWV0aG9kcyA9PT09PT09PT09XG5cbiAgYXN5bmMgcHVibGlzaEN1cnJlbnROb3RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpbGUgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpO1xuICAgIGlmICghYWN0aXZlRmlsZSB8fCAhYWN0aXZlRmlsZS5wYXRoLmVuZHNXaXRoKCcubWQnKSkge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIG9wZW4gYSBtYXJrZG93biBub3RlIHRvIHB1Ymxpc2gnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHRoaXMucHVibGlzaEVuZ2luZS5wdWJsaXNoRmlsZShhY3RpdmVGaWxlKTtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgbmV3IE5vdGljZShgUHVibGlzaGVkICR7YWN0aXZlRmlsZS5uYW1lfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXcgTm90aWNlKGBGYWlsZWQgdG8gcHVibGlzaCAke2FjdGl2ZUZpbGUubmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1bnB1Ymxpc2hDdXJyZW50Tm90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3RpdmVGaWxlID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZUZpbGUoKTtcbiAgICBpZiAoIWFjdGl2ZUZpbGUgfHwgIWFjdGl2ZUZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ1BsZWFzZSBvcGVuIGEgbWFya2Rvd24gbm90ZSB0byB1bnB1Ymxpc2gnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHRoaXMucHVibGlzaEVuZ2luZS51bnB1Ymxpc2hGaWxlKGFjdGl2ZUZpbGUpO1xuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICBuZXcgTm90aWNlKGBVbnB1Ymxpc2hlZCAke2FjdGl2ZUZpbGUubmFtZX1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3IE5vdGljZShgRmFpbGVkIHRvIHVucHVibGlzaCAke2FjdGl2ZUZpbGUubmFtZX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwdWJsaXNoQWxsQ2hhbmdlcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3Muc2VydmVyVXJsIHx8ICF0aGlzLnNldHRpbmdzLmFwaVRva2VuKSB7XG4gICAgICBuZXcgTm90aWNlKCdQbGVhc2UgY29uZmlndXJlIFNlcnZlciBVUkwgYW5kIEFQSSBUb2tlbiBpbiBzZXR0aW5ncycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgTm90aWNlKCdQdWJsaXNoaW5nIGFsbCBjaGFuZ2VzLi4uJyk7XG4gICAgYXdhaXQgdGhpcy5wdWJsaXNoRW5naW5lLnB1Ymxpc2hBbGxDaGFuZ2VzKCk7XG4gICAgbmV3IE5vdGljZSgnUHVibGlzaCBjb21wbGV0ZScpO1xuICB9XG5cbiAgb251bmxvYWQoKSB7XG4gICAgY29uc29sZS5sb2coJ0Nsb3VkZmxhcmUgU3luYyBwbHVnaW4gdW5sb2FkaW5nLi4uJyk7XG4gICAgdGhpcy5zeW5jRW5naW5lPy5kZXN0cm95KCk7XG4gICAgdGhpcy5zdGF0dXNCYXI/LmRlc3Ryb3koKTtcbiAgICBjb25zb2xlLmxvZygnQ2xvdWRmbGFyZSBTeW5jIHBsdWdpbiB1bmxvYWRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXNHbG9iKGZpbGVQYXRoOiBzdHJpbmcsIHBhdHRlcm46IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBDb252ZXJ0IGdsb2IgcGF0dGVybiB0byByZWdleFxuICAvLyBTdXBwb3J0czogKiAoYW55IGNoYXJzIGV4Y2VwdCAvKSwgKiogKGFueSBjaGFycyBpbmNsdWRpbmcgLyksID8gKHNpbmdsZSBjaGFyKVxuICBjb25zdCBwYXJ0cyA9IHBhdHRlcm4uc3BsaXQoJy8nKTtcbiAgY29uc3QgcGF0aFBhcnRzID0gZmlsZVBhdGguc3BsaXQoJy8nKTtcblxuICAvLyBTaW1wbGUgY2FzZTogcGF0dGVybiBoYXMgbm8gLywgbWF0Y2ggYWdhaW5zdCBmaWxlbmFtZSBvbmx5XG4gIGlmIChwYXJ0cy5sZW5ndGggPT09IDEgJiYgIXBhdHRlcm4uaW5jbHVkZXMoJy8nKSkge1xuICAgIGNvbnN0IGZpbGVOYW1lID0gcGF0aFBhcnRzW3BhdGhQYXJ0cy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gZ2xvYlRvUmVnZXgocGF0dGVybikudGVzdChmaWxlTmFtZSk7XG4gIH1cblxuICAvLyBGdWxsIHBhdGggbWF0Y2hpbmdcbiAgcmV0dXJuIGdsb2JUb1JlZ2V4KHBhdHRlcm4pLnRlc3QoZmlsZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBnbG9iVG9SZWdleChwYXR0ZXJuOiBzdHJpbmcpOiBSZWdFeHAge1xuICBsZXQgcmVnZXggPSAnJztcbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IHBhdHRlcm4ubGVuZ3RoKSB7XG4gICAgY29uc3QgYyA9IHBhdHRlcm5baV07XG4gICAgaWYgKGMgPT09ICcqJykge1xuICAgICAgaWYgKHBhdHRlcm5baSArIDFdID09PSAnKicpIHtcbiAgICAgICAgcmVnZXggKz0gJy4qJztcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVnZXggKz0gJ1teL10qJztcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYyA9PT0gJz8nKSB7XG4gICAgICByZWdleCArPSAnW14vXSc7XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmIChjID09PSAnLicpIHtcbiAgICAgIHJlZ2V4ICs9ICdcXFxcLic7XG4gICAgICBpKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZ2V4ICs9IGM7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCk7XG59XG4iLCAiaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IENsb3VkZmxhcmVTeW5jUGx1Z2luIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgdHlwZSB7IENvbmZsaWN0U3RyYXRlZ3kgfSBmcm9tICcuL3N5bmMtZW5naW5lJztcblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZGZsYXJlU3luY1NldHRpbmdzIHtcbiAgc2VydmVyVXJsOiBzdHJpbmc7XG4gIGFwaVRva2VuOiBzdHJpbmc7XG4gIGF1dG9TeW5jOiBib29sZWFuO1xuICBhdXRvRnJvbnRtYXR0ZXI6IGJvb2xlYW47XG4gIHN5bmNBbGxGaWxlczogYm9vbGVhbjtcbiAgZXhjbHVkZUZvbGRlcnM6IHN0cmluZ1tdO1xuICBleGNsdWRlUGF0dGVybnM6IHN0cmluZ1tdO1xuICBhdXRvU3luY0ludGVydmFsOiBudW1iZXI7XG4gIGNvbmZsaWN0U3RyYXRlZ3k6IENvbmZsaWN0U3RyYXRlZ3k7XG4gIHN5bmNPblN0YXJ0dXA6IGJvb2xlYW47XG4gIGRlYm91bmNlRGVsYXk6IG51bWJlcjtcbiAgcHVibGlzaEJlaGF2aW9yOiAnZnJvbnRtYXR0ZXItb25seScgfCAnYWxsLW5vdGVzJztcbiAgcHVibGlzaFNlcnZlclVybDogc3RyaW5nO1xuICBwdWJsaXNoQXBpVG9rZW46IHN0cmluZztcbiAgYXR0YWNobWVudHNQYXRoUHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDbG91ZGZsYXJlU3luY1NldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywgeyB0ZXh0OiAnQ2xvdWRmbGFyZSBTeW5jJyB9KTtcblxuICAgIC8vID09PT09IENvbm5lY3Rpb24gPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb25uZWN0aW9uJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1NlcnZlciBVUkwnKVxuICAgICAgLnNldERlc2MoJ1lvdXIgQ2xvdWRmbGFyZSBXb3JrZXJzIFVSTCAoZS5nLiwgaHR0cHM6Ly9teXNpdGUueW91ci1hY2NvdW50LndvcmtlcnMuZGV2KScpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignaHR0cHM6Ly9teXNpdGUueW91ci1hY2NvdW50LndvcmtlcnMuZGV2JylcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdBUEkgVG9rZW4nKVxuICAgICAgLnNldERlc2MoJ1lvdXIgQVBJIHRva2VuIGZvciBhdXRoZW50aWNhdGlvbicpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT4ge1xuICAgICAgICB0ZXh0LmlucHV0RWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIHJldHVybiB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIEFQSSB0b2tlbicpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gPT09PT0gU3luYyBTZXR0aW5ncyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1N5bmMgU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0byBTeW5jJylcbiAgICAgIC5zZXREZXNjKCdBdXRvbWF0aWNhbGx5IHN5bmMgZmlsZXMgd2hlbiB0aGV5IGFyZSBtb2RpZmllZCAod2l0aCBkZWJvdW5jZSknKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGVcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnQXV0byBTeW5jIEludGVydmFsJylcbiAgICAgIC5zZXREZXNjKCdIb3cgb2Z0ZW4gdG8gcnVuIGEgZnVsbCBzeW5jIChpbiBtaW51dGVzKS4gU2V0IHRvIDAgdG8gZGlzYWJsZSBwZXJpb2RpYyBzeW5jLicpXG4gICAgICAuYWRkU2xpZGVyKChzbGlkZXIpID0+XG4gICAgICAgIHNsaWRlclxuICAgICAgICAgIC5zZXRMaW1pdHMoMCwgNjAsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dG9TeW5jSW50ZXJ2YWwpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvU3luY0ludGVydmFsID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0RlYm91bmNlIERlbGF5JylcbiAgICAgIC5zZXREZXNjKCdTZWNvbmRzIHRvIHdhaXQgYWZ0ZXIgYSBmaWxlIGNoYW5nZSBiZWZvcmUgc3luY2luZyAocHJldmVudHMgZXhjZXNzaXZlIHVwbG9hZHMgd2hpbGUgdHlwaW5nKScpXG4gICAgICAuYWRkU2xpZGVyKChzbGlkZXIpID0+XG4gICAgICAgIHNsaWRlclxuICAgICAgICAgIC5zZXRMaW1pdHMoNSwgMTIwLCA1KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWJvdW5jZURlbGF5KVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVib3VuY2VEZWxheSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdTeW5jIG9uIFN0YXJ0dXAnKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgcnVuIGEgZnVsbCBzeW5jIHdoZW4gT2JzaWRpYW4gc3RhcnRzJylcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5bmNPblN0YXJ0dXApXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY09uU3RhcnR1cCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyA9PT09PSBDb25mbGljdCBSZXNvbHV0aW9uID09PT09XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29uZmxpY3QgUmVzb2x1dGlvbicgfSk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKCdDb25mbGljdCBTdHJhdGVneScpXG4gICAgICAuc2V0RGVzYygnSG93IHRvIGhhbmRsZSBjb25mbGljdHMgd2hlbiBib3RoIGxvY2FsIGFuZCByZW1vdGUgaGF2ZSBjaGFuZ2VkJylcbiAgICAgIC5hZGREcm9wZG93bigoZHJvcGRvd24pID0+XG4gICAgICAgIGRyb3Bkb3duXG4gICAgICAgICAgLmFkZE9wdGlvbignYXNrJywgJ0FzayBtZSBldmVyeSB0aW1lJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdsb2NhbC13aW5zJywgJ0xvY2FsIGFsd2F5cyB3aW5zJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdyZW1vdGUtd2lucycsICdSZW1vdGUgYWx3YXlzIHdpbnMnKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jb25mbGljdFN0cmF0ZWd5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY29uZmxpY3RTdHJhdGVneSA9IHZhbHVlIGFzIENvbmZsaWN0U3RyYXRlZ3k7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vID09PT09IENvbnRlbnQgU2V0dGluZ3MgPT09PT1cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbCgnaDMnLCB7IHRleHQ6ICdDb250ZW50IFNldHRpbmdzJyB9KTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0F1dG8gRnJvbnRtYXR0ZXInKVxuICAgICAgLnNldERlc2MoJ0F1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgZnJvbnRtYXR0ZXIgZm9yIG5ldyBtYXJrZG93biBmaWxlcycpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdXRvRnJvbnRtYXR0ZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b0Zyb250bWF0dGVyID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ1N5bmMgQWxsIEZpbGVzJylcbiAgICAgIC5zZXREZXNjKCdTeW5jIGFsbCBmaWxlcyBpbiB0aGUgdmF1bHQgKG5vdCBqdXN0IG1hcmtkb3duKScpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeW5jQWxsRmlsZXMpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3luY0FsbEZpbGVzID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0V4Y2x1ZGUgRm9sZGVycycpXG4gICAgICAuc2V0RGVzYygnQ29tbWEtc2VwYXJhdGVkIGxpc3Qgb2YgZm9sZGVycyB0byBleGNsdWRlIGZyb20gc3luYycpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcignX3RlbXBsYXRlcywgLnRyYXNoJylcbiAgICAgICAgICAuc2V0VmFsdWUoKHRoaXMucGx1Z2luLnNldHRpbmdzLmV4Y2x1ZGVGb2xkZXJzIHx8IFtdKS5qb2luKCcsICcpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmV4Y2x1ZGVGb2xkZXJzID0gdmFsdWVcbiAgICAgICAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgICAgICAgLm1hcCgocykgPT4gcy50cmltKCkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0V4Y2x1ZGUgUGF0dGVybnMnKVxuICAgICAgLnNldERlc2MoJ0NvbW1hLXNlcGFyYXRlZCBnbG9iIHBhdHRlcm5zIHRvIGV4Y2x1ZGUgKGUuZy4sICoudG1wLCBfZHJhZnRzLyoqLCAqLmV4Y2FsaWRyYXcpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCcqLnRtcCwgX2RyYWZ0cy8qKiwgKi5leGNhbGlkcmF3JylcbiAgICAgICAgICAuc2V0VmFsdWUoKHRoaXMucGx1Z2luLnNldHRpbmdzLmV4Y2x1ZGVQYXR0ZXJucyB8fCBbXSkuam9pbignLCAnKSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5leGNsdWRlUGF0dGVybnMgPSB2YWx1ZVxuICAgICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgICAubWFwKChzKSA9PiBzLnRyaW0oKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gPT09PT0gUHVibGlzaCBTZXR0aW5ncyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ1B1Ymxpc2ggU2V0dGluZ3MnIH0pO1xuXG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZSgnUHVibGlzaCBCZWhhdmlvcicpXG4gICAgICAuc2V0RGVzYygnV2hpY2ggbm90ZXMgc2hvdWxkIGJlIHB1Ymxpc2hlZD8nKVxuICAgICAgLmFkZERyb3Bkb3duKChkcm9wZG93bikgPT5cbiAgICAgICAgZHJvcGRvd25cbiAgICAgICAgICAuYWRkT3B0aW9uKCdmcm9udG1hdHRlci1vbmx5JywgJ09ubHkgbm90ZXMgd2l0aCBwdWJsaXNoOiB0cnVlIGluIGZyb250bWF0dGVyJylcbiAgICAgICAgICAuYWRkT3B0aW9uKCdhbGwtbm90ZXMnLCAnQWxsIG5vdGVzIChleGNlcHQgdGhvc2Ugd2l0aCBwdWJsaXNoOiBmYWxzZSknKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wdWJsaXNoQmVoYXZpb3IgfHwgJ2Zyb250bWF0dGVyLW9ubHknKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucHVibGlzaEJlaGF2aW9yID0gdmFsdWUgYXMgJ2Zyb250bWF0dGVyLW9ubHknIHwgJ2FsbC1ub3Rlcyc7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgLnNldE5hbWUoJ0F0dGFjaG1lbnRzIFBhdGggUHJlZml4JylcbiAgICAgIC5zZXREZXNjKCdSZW1vdGUgcGF0aCBwcmVmaXggZm9yIHVwbG9hZGVkIGF0dGFjaG1lbnRzIChlLmcuLCBhdHRhY2htZW50cyBvciBpbWFnZXMpJylcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKCdhdHRhY2htZW50cycpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF0dGFjaG1lbnRzUGF0aFByZWZpeCB8fCAnYXR0YWNobWVudHMnKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmF0dGFjaG1lbnRzUGF0aFByZWZpeCA9IHZhbHVlIHx8ICdhdHRhY2htZW50cyc7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vID09PT09IEluc3RydWN0aW9ucyA9PT09PVxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKCdoMycsIHsgdGV4dDogJ0luc3RydWN0aW9ucycgfSk7XG5cbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBjb250YWluZXJFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdtYXJrZG93bi1wcmV2aWV3LXZpZXcnIH0pO1xuICAgIGluc3RydWN0aW9ucy5pbm5lckhUTUwgPSBgXG4gICAgICA8aDQ+U2VydmVyIFNldHVwOjwvaDQ+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5EZXBsb3kgdGhlIENsb3VkZmxhcmUgV29ya2VycyBzaXRlPC9saT5cbiAgICAgICAgPGxpPlNldCA8Y29kZT5BUElfVE9LRU48L2NvZGU+IHNlY3JldDogPGNvZGU+bnB4IHdyYW5nbGVyIHNlY3JldCBwdXQgQVBJX1RPS0VOPC9jb2RlPjwvbGk+XG4gICAgICAgIDxsaT5Db3B5IHRoZSBXb3JrZXJzIFVSTCBhbmQgdG9rZW4gdG8gc2V0dGluZ3MgYWJvdmU8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxoND5TeW5jIEJlaGF2aW9yOjwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT48c3Ryb25nPkF1dG8gU3luYzwvc3Ryb25nPiBcdTIwMTQgRmlsZXMgc3luYyBhZnRlciBhIGRlYm91bmNlIGRlbGF5IHdoZW4gbW9kaWZpZWQ8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5QZXJpb2RpYyBTeW5jPC9zdHJvbmc+IFx1MjAxNCBGdWxsIHN5bmMgcnVucyBhdCB0aGUgY29uZmlndXJlZCBpbnRlcnZhbDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN0YXJ0dXAgU3luYzwvc3Ryb25nPiBcdTIwMTQgRnVsbCBzeW5jIG9uIE9ic2lkaWFuIGxhdW5jaDwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPkNvbmZsaWN0IERldGVjdGlvbjwvc3Ryb25nPiBcdTIwMTQgVGhyZWUtd2F5IGhhc2ggY29tcGFyaXNvbiBkZXRlY3RzIGNvbmZsaWN0czwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg0PkZyb250bWF0dGVyIGZpZWxkczo8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PGNvZGU+dGl0bGU8L2NvZGU+IC0gUG9zdCB0aXRsZTwvbGk+XG4gICAgICAgIDxsaT48Y29kZT5zbHVnPC9jb2RlPiAtIFVSTC1mcmllbmRseSBpZGVudGlmaWVyPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmRhdGU8L2NvZGU+IC0gUHVibGljYXRpb24gZGF0ZSAoSVNPIGZvcm1hdCk8L2xpPlxuICAgICAgICA8bGk+PGNvZGU+c3VtbWFyeTwvY29kZT4gLSBQb3N0IHN1bW1hcnkvZXhjZXJwdDwvbGk+XG4gICAgICAgIDxsaT48Y29kZT50YWdzPC9jb2RlPiAtIEFycmF5IG9yIGNvbW1hLXNlcGFyYXRlZCB0YWdzPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPnB1Ymxpc2g8L2NvZGU+IC0gV2hldGhlciB0byBtYWtlIHB1YmxpYyAoZGVmYXVsdDogZmFsc2UpPC9saT5cbiAgICAgICAgPGxpPjxjb2RlPmNvdmVySW1hZ2U8L2NvZGU+IC0gQ292ZXIgaW1hZ2UgZmlsZW5hbWU8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoND5Db21tYW5kczo8L2g0PlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+PHN0cm9uZz5GdWxsIFN5bmM8L3N0cm9uZz4gXHUyMDE0IEJpZGlyZWN0aW9uYWwgc3luYyB3aXRoIGNvbmZsaWN0IGRldGVjdGlvbjwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlN5bmMgdG8gQ2xvdWRmbGFyZTwvc3Ryb25nPiBcdTIwMTQgVXBsb2FkIGFsbCBub3RlcyAob25lLXdheSk8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5Eb3dubG9hZCBmcm9tIENsb3VkZmxhcmU8L3N0cm9uZz4gXHUyMDE0IERvd25sb2FkIGFsbCBub3RlcyAob25lLXdheSk8L2xpPlxuICAgICAgICA8bGk+PHN0cm9uZz5TeW5jIGN1cnJlbnQgZmlsZTwvc3Ryb25nPiBcdTIwMTQgVXBsb2FkIGN1cnJlbnQgZmlsZTwvbGk+XG4gICAgICAgIDxsaT48c3Ryb25nPlJlc29sdmUgY29uZmxpY3RzPC9zdHJvbmc+IFx1MjAxNCBPcGVuIGNvbmZsaWN0IHJlc29sdXRpb24gZGlhbG9nPC9saT5cbiAgICAgICAgPGxpPjxzdHJvbmc+U2hvdyBzeW5jIHN0YXR1czwvc3Ryb25nPiBcdTIwMTQgVmlldyBzeW5jIHN0YXRpc3RpY3M8L2xpPlxuICAgICAgPC91bD5cbiAgICBgO1xuICB9XG59XG4iLCAiaW1wb3J0IHsgVEZpbGUsIFZhdWx0LCBub3JtYWxpemVQYXRoIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgQ2xvdWRmbGFyZVN5bmNQbHVnaW4gZnJvbSAnLi9tYWluJztcblxuLy8gPT09PT09PT09PSBUeXBlcyA9PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFN5bmNGaWxlU3RhdHVzID1cbiAgfCAnc3luY2VkJyAgICAgICAvLyBcdTY3MkNcdTU3MzBcdTU0OENcdThGRENcdTdBMEJcdTRFMDBcdTgxRjRcbiAgfCAnbG9jYWwtb25seScgICAvLyBcdTRFQzVcdTY3MkNcdTU3MzBcdTVCNThcdTU3MjhcbiAgfCAncmVtb3RlLW9ubHknICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTVCNThcdTU3MjhcbiAgfCAnbG9jYWwtbW9kaWZpZWQnICAvLyBcdTY3MkNcdTU3MzBcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAncmVtb3RlLW1vZGlmaWVkJyAvLyBcdThGRENcdTdBMEJcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAnY29uZmxpY3QnICAgICAvLyBcdTUzQ0NcdTY1QjlcdTkwRkRcdTY3MDlcdTRGRUVcdTY1MzlcbiAgfCAnZXJyb3InOyAgICAgICAvLyBcdTU0MENcdTZCNjVcdTUxRkFcdTk1MTlcblxuZXhwb3J0IGludGVyZmFjZSBTeW5jRmlsZVN0YXRlIHtcbiAgbG9jYWxQYXRoOiBzdHJpbmc7XG4gIHJlbW90ZUtleTogc3RyaW5nO1xuICBsb2NhbEhhc2g6IHN0cmluZyB8IG51bGw7XG4gIHJlbW90ZUhhc2g6IHN0cmluZyB8IG51bGw7XG4gIGxhc3RTeW5jZWRIYXNoOiBzdHJpbmcgfCBudWxsO1xuICBzdGF0dXM6IFN5bmNGaWxlU3RhdHVzO1xuICBlcnJvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTeW5jU3RhdHMge1xuICBsYXN0U3luY1RpbWU6IG51bWJlciB8IG51bGw7XG4gIHRvdGFsRmlsZXM6IG51bWJlcjtcbiAgc3luY2VkRmlsZXM6IG51bWJlcjtcbiAgcGVuZGluZ1VwbG9hZDogbnVtYmVyO1xuICBwZW5kaW5nRG93bmxvYWQ6IG51bWJlcjtcbiAgY29uZmxpY3RzOiBudW1iZXI7XG4gIGVycm9yczogbnVtYmVyO1xuICBpc1N5bmNpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3RlRmlsZU1ldGEge1xuICBrZXk6IHN0cmluZztcbiAgc2l6ZTogbnVtYmVyO1xuICB1cGxvYWRlZD86IHN0cmluZztcbiAgaHR0cEV0YWc/OiBzdHJpbmc7XG4gIGNvbnRlbnRIYXNoPzogc3RyaW5nO1xuICBjb250ZW50VHlwZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN5bmNTdGF0ZVN0b3JlIHtcbiAgW2xvY2FsUGF0aDogc3RyaW5nXToge1xuICAgIHJlbW90ZUtleTogc3RyaW5nO1xuICAgIGxhc3RTeW5jZWRIYXNoOiBzdHJpbmc7XG4gICAgbGFzdFN5bmNlZFRpbWU6IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZmxpY3RSZXNvbHV0aW9uID0gJ2xvY2FsJyB8ICdyZW1vdGUnIHwgJ2JvdGgnO1xuZXhwb3J0IHR5cGUgQ29uZmxpY3RTdHJhdGVneSA9ICdhc2snIHwgJ2xvY2FsLXdpbnMnIHwgJ3JlbW90ZS13aW5zJztcblxuZXhwb3J0IGludGVyZmFjZSBDb25mbGljdEluZm8ge1xuICBsb2NhbFBhdGg6IHN0cmluZztcbiAgcmVtb3RlS2V5OiBzdHJpbmc7XG4gIGxvY2FsQ29udGVudDogc3RyaW5nO1xuICByZW1vdGVDb250ZW50OiBzdHJpbmc7XG4gIGxvY2FsSGFzaDogc3RyaW5nO1xuICByZW1vdGVIYXNoOiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT0gU3luY0VuZ2luZSA9PT09PT09PT09XG5cbmV4cG9ydCBjbGFzcyBTeW5jRW5naW5lIHtcbiAgcHJpdmF0ZSBwbHVnaW46IENsb3VkZmxhcmVTeW5jUGx1Z2luO1xuICBwcml2YXRlIHN5bmNTdGF0ZXM6IFN5bmNTdGF0ZVN0b3JlID0ge307XG4gIHByaXZhdGUgYXV0b1N5bmNUaW1lcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVib3VuY2VUaW1lcnM6IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+PiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBfc3RhdHM6IFN5bmNTdGF0cyA9IHtcbiAgICBsYXN0U3luY1RpbWU6IG51bGwsXG4gICAgdG90YWxGaWxlczogMCxcbiAgICBzeW5jZWRGaWxlczogMCxcbiAgICBwZW5kaW5nVXBsb2FkOiAwLFxuICAgIHBlbmRpbmdEb3dubG9hZDogMCxcbiAgICBjb25mbGljdHM6IDAsXG4gICAgZXJyb3JzOiAwLFxuICAgIGlzU3luY2luZzogZmFsc2UsXG4gIH07XG4gIHByaXZhdGUgX2NvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgcHJpdmF0ZSBfaXNTeW5jaW5nID0gZmFsc2U7XG5cbiAgLy8gQ2FsbGJhY2tzXG4gIG9uU3RhdHNDaGFuZ2VkOiAoKHN0YXRzOiBTeW5jU3RhdHMpID0+IHZvaWQpIHwgbnVsbCA9IG51bGw7XG4gIG9uQ29uZmxpY3RzRm91bmQ6ICgoY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSkgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25TeW5jRXJyb3I6ICgoZXJyb3I6IHN0cmluZykgPT4gdm9pZCkgfCBudWxsID0gbnVsbDtcbiAgb25TeW5jQ29tcGxldGU6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldCBzdGF0cygpOiBTeW5jU3RhdHMge1xuICAgIHJldHVybiB7IC4uLnRoaXMuX3N0YXRzIH07XG4gIH1cblxuICBnZXQgY29uZmxpY3RzKCk6IENvbmZsaWN0SW5mb1tdIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NvbmZsaWN0c107XG4gIH1cblxuICBnZXQgaXNTeW5jaW5nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc1N5bmNpbmc7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFN0YXRlIFBlcnNpc3RlbmNlID09PT09PT09PT1cblxuICBhc3luYyBsb2FkU3luY1N0YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpO1xuICAgIHRoaXMuc3luY1N0YXRlcyA9IGRhdGE/Ll9zeW5jU3RhdGVzIHx8IHt9O1xuICB9XG5cbiAgYXN5bmMgc2F2ZVN5bmNTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gKGF3YWl0IHRoaXMucGx1Z2luLmxvYWREYXRhKCkpIHx8IHt9O1xuICAgIGRhdGEuX3N5bmNTdGF0ZXMgPSB0aGlzLnN5bmNTdGF0ZXM7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZURhdGEoZGF0YSk7XG4gIH1cblxuICAvLyA9PT09PT09PT09IEhhc2ggQ29tcHV0YXRpb24gPT09PT09PT09PVxuXG4gIGFzeW5jIGNvbXB1dGVMb2NhbEhhc2goY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIC8vIFx1NEY3Rlx1NzUyOFx1N0I4MFx1NTM1NVx1NzY4NFx1NTRDOFx1NUUwQ1x1N0I5N1x1NkNENVx1RkYwOFx1OTAwMlx1NzUyOFx1NEU4RSBPYnNpZGlhbiBcdTczQUZcdTU4ODNcdUZGMDlcbiAgICBjb25zdCBkYXRhID1cbiAgICAgIHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShjb250ZW50KVxuICAgICAgICA6IG5ldyBVaW50OEFycmF5KGNvbnRlbnQpO1xuXG4gICAgLy8gXHU0RjdGXHU3NTI4IFdlYiBDcnlwdG8gQVBJXHVGRjA4XHU2MjQwXHU2NzA5IE9ic2lkaWFuIFx1NUU3M1x1NTNGMFx1OTBGRFx1NjUyRlx1NjMwMVx1RkYwOVxuICAgIGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTI1NicsIGRhdGEpO1xuICAgIGNvbnN0IGhhc2hBcnJheSA9IEFycmF5LmZyb20obmV3IFVpbnQ4QXJyYXkoaGFzaEJ1ZmZlcikpO1xuICAgIHJldHVybiBoYXNoQXJyYXkubWFwKChiKSA9PiBiLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQXV0byBTeW5jIFNjaGVkdWxpbmcgPT09PT09PT09PVxuXG4gIHN0YXJ0QXV0b1N5bmMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wQXV0b1N5bmMoKTtcblxuICAgIGNvbnN0IGludGVydmFsTXMgPSAodGhpcy5wbHVnaW4uc2V0dGluZ3MuYXV0b1N5bmNJbnRlcnZhbCB8fCA1KSAqIDYwICogMTAwMDtcbiAgICBjb25zb2xlLmxvZyhgW1N5bmNFbmdpbmVdIEF1dG8gc3luYyBzdGFydGVkLCBpbnRlcnZhbDogJHtpbnRlcnZhbE1zIC8gMTAwMH1zYCk7XG5cbiAgICB0aGlzLmF1dG9TeW5jVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2lzU3luY2luZykge1xuICAgICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIEF1dG8gc3luYyB0cmlnZ2VyZWQnKTtcbiAgICAgICAgdGhpcy5mdWxsU3luYygpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gQXV0byBzeW5jIGZhaWxlZDonLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBpbnRlcnZhbE1zKTtcbiAgfVxuXG4gIHN0b3BBdXRvU3luYygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdXRvU3luY1RpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b1N5bmNUaW1lcik7XG4gICAgICB0aGlzLmF1dG9TeW5jVGltZXIgPSBudWxsO1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jRW5naW5lXSBBdXRvIHN5bmMgc3RvcHBlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gRGVib3VuY2VkIEZpbGUgU3luYyA9PT09PT09PT09XG5cbiAgc2NoZWR1bGVGaWxlU3luYyhmaWxlOiBURmlsZSk6IHZvaWQge1xuICAgIGNvbnN0IGV4aXN0aW5nVGltZXIgPSB0aGlzLmRlYm91bmNlVGltZXJzLmdldChmaWxlLnBhdGgpO1xuICAgIGlmIChleGlzdGluZ1RpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoZXhpc3RpbmdUaW1lcik7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXlNcyA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWJvdW5jZURlbGF5IHx8IDMwKSAqIDEwMDA7XG5cbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVycy5kZWxldGUoZmlsZS5wYXRoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuc3luY1NpbmdsZUZpbGUoZmlsZSk7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gRGVib3VuY2VkIHN5bmMgZmFpbGVkIGZvciAke2ZpbGUucGF0aH06YCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0sIGRlbGF5TXMpO1xuXG4gICAgdGhpcy5kZWJvdW5jZVRpbWVycy5zZXQoZmlsZS5wYXRoLCB0aW1lcik7XG4gICAgdGhpcy51cGRhdGVQZW5kaW5nU3RhdHMoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ29yZSBTeW5jIExvZ2ljID09PT09PT09PT1cblxuICBhc3luYyBmdWxsU3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNTeW5jaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNFbmdpbmVdIFN5bmMgYWxyZWFkeSBpbiBwcm9ncmVzcywgc2tpcHBpbmcnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1N5bmNpbmcgPSB0cnVlO1xuICAgIHRoaXMuX3N0YXRzLmlzU3luY2luZyA9IHRydWU7XG4gICAgdGhpcy5fY29uZmxpY3RzID0gW107XG4gICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2coJ1tTeW5jRW5naW5lXSBTdGFydGluZyBmdWxsIHN5bmMuLi4nKTtcblxuICAgICAgLy8gMS4gXHU4M0I3XHU1M0Q2XHU2NzJDXHU1NzMwXHU2MjQwXHU2NzA5XHU2NTg3XHU0RUY2XHU1M0NBXHU1MTc2IGhhc2hcbiAgICAgIGNvbnN0IGxvY2FsRmlsZXMgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoXG4gICAgICAgIChmKSA9PiB0aGlzLnBsdWdpbi5zaG91bGRTeW5jRmlsZShmLnBhdGgpXG4gICAgICApO1xuXG4gICAgICBjb25zdCBsb2NhbEZpbGVNYXAgPSBuZXcgTWFwPHN0cmluZywgeyBmaWxlOiBURmlsZTsgaGFzaDogc3RyaW5nIH0+KCk7XG4gICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgbG9jYWxGaWxlcykge1xuICAgICAgICBjb25zdCByZW1vdGVLZXkgPSB0aGlzLnBsdWdpbi5nZXRSZW1vdGVLZXkoZmlsZSk7XG4gICAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgICAvLyBcdTVCRjkgdGV4dCBcdTY1ODdcdTRFRjYgaGFzaCBcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENcdTVCRjlcdTRFOENcdThGREJcdTUyMzZcdTY1ODdcdTRFRjYgaGFzaCBcdTUzOUZcdTU5Q0IgQXJyYXlCdWZmZXJcdUZGMDhcdTRFMEVcdTY3MERcdTUyQTFcdTdBRUZcdTRFMDBcdTgxRjRcdUZGMDlcbiAgICAgICAgY29uc3QgY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgPSBpc01hcmtkb3duXG4gICAgICAgICAgPyBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZChmaWxlKVxuICAgICAgICAgIDogYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWRCaW5hcnkoZmlsZSk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB0aGlzLmNvbXB1dGVMb2NhbEhhc2goY29udGVudCk7XG4gICAgICAgIGxvY2FsRmlsZU1hcC5zZXQocmVtb3RlS2V5LCB7IGZpbGUsIGhhc2ggfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIFx1NjI3OVx1OTFDRlx1ODNCN1x1NTNENlx1OEZEQ1x1N0EwQlx1NjU4N1x1NEVGNlx1NTE0M1x1NjU3MFx1NjM2RVxuICAgICAgY29uc3QgcmVtb3RlTWV0YXMgPSBhd2FpdCB0aGlzLmZldGNoUmVtb3RlTWV0YXMoJycpO1xuICAgICAgY29uc3QgcmVtb3RlTWV0YU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZW1vdGVGaWxlTWV0YT4oKTtcbiAgICAgIGZvciAoY29uc3QgbWV0YSBvZiByZW1vdGVNZXRhcykge1xuICAgICAgICByZW1vdGVNZXRhTWFwLnNldChtZXRhLmtleSwgbWV0YSk7XG4gICAgICB9XG5cbiAgICAgIC8vIDMuIFx1NEUwOVx1NjVCOVx1NkJENFx1NUJGOVxuICAgICAgY29uc3QgYWxsS2V5cyA9IG5ldyBTZXQoWy4uLmxvY2FsRmlsZU1hcC5rZXlzKCksIC4uLnJlbW90ZU1ldGFNYXAua2V5cygpXSk7XG4gICAgICBjb25zdCB0b1VwbG9hZDogeyBmaWxlOiBURmlsZTsga2V5OiBzdHJpbmc7IGhhc2g6IHN0cmluZyB9W10gPSBbXTtcbiAgICAgIGNvbnN0IHRvRG93bmxvYWQ6IHsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gICAgICBjb25zdCBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdID0gW107XG4gICAgICBsZXQgc3luY2VkQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBhbGxLZXlzKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsID0gbG9jYWxGaWxlTWFwLmdldChrZXkpO1xuICAgICAgICBjb25zdCByZW1vdGUgPSByZW1vdGVNZXRhTWFwLmdldChrZXkpO1xuICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBrZXk7XG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcblxuICAgICAgICBjb25zdCBsb2NhbEhhc2ggPSBsb2NhbD8uaGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCByZW1vdGVIYXNoID0gcmVtb3RlPy5jb250ZW50SGFzaCB8fCBudWxsO1xuICAgICAgICBjb25zdCBsYXN0U3luY2VkSGFzaCA9IHNhdmVkU3RhdGU/Lmxhc3RTeW5jZWRIYXNoIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGxvY2FsSGFzaCAmJiAhcmVtb3RlSGFzaCkge1xuICAgICAgICAgIC8vIFx1NjcyQ1x1NTczMFx1NjcwOVx1MzAwMVx1OEZEQ1x1N0EwQlx1NkNBMVx1NjcwOVxuICAgICAgICAgIGlmIChsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RTRCXHU1MjREXHU1NDBDXHU2QjY1XHU4RkM3XHU0RjQ2XHU4RkRDXHU3QTBCXHU4OEFCXHU1MjIwXHU0RTg2IFx1MjE5MiBcdTRFMEJcdThGN0RcdTUyMjBcdTk2NjRcdUZGMDhcdTYyMTZcdThERjNcdThGQzdcdUZGMDlcbiAgICAgICAgICAgIC8vIFx1OEZEOVx1OTFDQ1x1OTAwOVx1NjJFOVx1OTFDRFx1NjVCMFx1NEUwQVx1NEYyMFxuICAgICAgICAgICAgdG9VcGxvYWQucHVzaCh7IGZpbGU6IGxvY2FsIS5maWxlLCBrZXksIGhhc2g6IGxvY2FsSGFzaCB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBBXHU0RjIwXG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghbG9jYWxIYXNoICYmIHJlbW90ZUhhc2gpIHtcbiAgICAgICAgICAvLyBcdThGRENcdTdBMEJcdTY3MDlcdTMwMDFcdTY3MkNcdTU3MzBcdTZDQTFcdTY3MDlcbiAgICAgICAgICBpZiAobGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1NEU0Qlx1NTI0RFx1NTQwQ1x1NkI2NVx1OEZDN1x1NEY0Nlx1NjcyQ1x1NTczMFx1ODhBQlx1NTIyMFx1NEU4NiBcdTIxOTIgXHU4REYzXHU4RkM3XHVGRjA4XHU2MjE2XHU5MUNEXHU2NUIwXHU0RTBCXHU4RjdEXHVGRjA5XG4gICAgICAgICAgICAvLyBcdThGRDlcdTkxQ0NcdTkwMDlcdTYyRTlcdTkxQ0RcdTY1QjBcdTRFMEJcdThGN0RcbiAgICAgICAgICAgIHRvRG93bmxvYWQucHVzaCh7IGtleSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gXHU2NUIwXHU3Njg0XHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHVGRjBDXHU0RTBCXHU4RjdEXG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxvY2FsSGFzaCAmJiByZW1vdGVIYXNoKSB7XG4gICAgICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU1REYyXHU1NDBDXHU2QjY1XG4gICAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleToga2V5LFxuICAgICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogbG9jYWxIYXNoLFxuICAgICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmICghbGFzdFN5bmNlZEhhc2gpIHtcbiAgICAgICAgICAgIC8vIFx1OTk5Nlx1NkIyMVx1NTQwQ1x1NkI2NVx1RkYwQ1x1OTcwMFx1ODk4MVx1NTFCMlx1N0E4MVx1NjhDMFx1NkQ0Qlx1RkYwOFx1OTBGRFx1NjYyRlx1NjVCMFx1NzY4NFx1RkYwOVxuICAgICAgICAgICAgLy8gXHU0RjE4XHU1MTQ4XHU0RjdGXHU3NTI4XHU2NzJDXHU1NzMwXHU3MjQ4XHU2NzJDXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoICE9PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoID09PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU2NzJDXHU1NzMwXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b1VwbG9hZC5wdXNoKHsgZmlsZTogbG9jYWwhLmZpbGUsIGtleSwgaGFzaDogbG9jYWxIYXNoIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAgICAgLy8gXHU0RUM1XHU4RkRDXHU3QTBCXHU0RkVFXHU2NTM5XG4gICAgICAgICAgICB0b0Rvd25sb2FkLnB1c2goeyBrZXkgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFx1NTNDQ1x1NjVCOVx1OTBGRFx1NEZFRVx1NjUzOVx1NEU4NiBcdTIxOTIgXHU1MUIyXHU3QTgxXHVGRjAxXG4gICAgICAgICAgICBjb25mbGljdHMucHVzaChhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGxvY2FsIS5maWxlLCBrZXksIGxvY2FsSGFzaCwgcmVtb3RlSGFzaCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgYFtTeW5jRW5naW5lXSBBbmFseXNpczogJHt0b1VwbG9hZC5sZW5ndGh9IHVwbG9hZCwgJHt0b0Rvd25sb2FkLmxlbmd0aH0gZG93bmxvYWQsICR7Y29uZmxpY3RzLmxlbmd0aH0gY29uZmxpY3RzLCAke3N5bmNlZENvdW50fSBzeW5jZWRgXG4gICAgICApO1xuXG4gICAgICAvLyA0LiBcdTYyNjdcdTg4NENcdTRFMEFcdTRGMjBcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0b1VwbG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnN5bmNGaWxlVG9SZW1vdGUoaXRlbS5maWxlKTtcbiAgICAgICAgICBjb25zdCBsb2NhbFBhdGggPSBpdGVtLmtleTtcbiAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgIHJlbW90ZUtleTogaXRlbS5rZXksXG4gICAgICAgICAgICBsYXN0U3luY2VkSGFzaDogaXRlbS5oYXNoLFxuICAgICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtTeW5jRW5naW5lXSBVcGxvYWQgZmFpbGVkIGZvciAke2l0ZW0ua2V5fTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNS4gXHU2MjY3XHU4ODRDXHU0RTBCXHU4RjdEXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdG9Eb3dubG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShpdGVtLmtleSk7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGl0ZW0ua2V5O1xuICAgICAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgICAgIHJlbW90ZUtleTogaXRlbS5rZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8ICcnLFxuICAgICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzeW5jZWRDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gRG93bmxvYWQgZmFpbGVkIGZvciAke2l0ZW0ua2V5fTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhpcy5fc3RhdHMuZXJyb3JzKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNi4gXHU1OTA0XHU3NDA2XHU1MUIyXHU3QTgxXG4gICAgICB0aGlzLl9jb25mbGljdHMgPSBjb25mbGljdHM7XG4gICAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNvbmZsaWN0U3RyYXRlZ3kgfHwgJ2Fzayc7XG5cbiAgICAgIGlmIChjb25mbGljdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3RyYXRlZ3kgPT09ICdhc2snKSB7XG4gICAgICAgICAgLy8gXHU5MDFBXHU3N0U1IFVJIFx1NUM0Mlx1NUYzOVx1NTFGQVx1NTFCMlx1N0E4MVx1ODlFM1x1NTFCM1x1NUJGOVx1OEJERFx1Njg0NlxuICAgICAgICAgIHRoaXMub25Db25mbGljdHNGb3VuZD8uKGNvbmZsaWN0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU4OUUzXHU1MUIzXG4gICAgICAgICAgZm9yIChjb25zdCBjb25mbGljdCBvZiBjb25mbGljdHMpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzb2x2ZUNvbmZsaWN0KFxuICAgICAgICAgICAgICBjb25mbGljdCxcbiAgICAgICAgICAgICAgc3RyYXRlZ3kgPT09ICdsb2NhbC13aW5zJyA/ICdsb2NhbCcgOiAncmVtb3RlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY29uZmxpY3RzID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gNy4gXHU2NkY0XHU2NUIwXHU3RURGXHU4QkExXG4gICAgICB0aGlzLl9zdGF0cyA9IHtcbiAgICAgICAgbGFzdFN5bmNUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICB0b3RhbEZpbGVzOiBhbGxLZXlzLnNpemUsXG4gICAgICAgIHN5bmNlZEZpbGVzOiBzeW5jZWRDb3VudCxcbiAgICAgICAgcGVuZGluZ1VwbG9hZDogMCxcbiAgICAgICAgcGVuZGluZ0Rvd25sb2FkOiAwLFxuICAgICAgICBjb25mbGljdHM6IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGgsXG4gICAgICAgIGVycm9yczogdGhpcy5fc3RhdHMuZXJyb3JzLFxuICAgICAgICBpc1N5bmNpbmc6IGZhbHNlLFxuICAgICAgfTtcblxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3luY1N0YXRlKCk7XG4gICAgICB0aGlzLm9uU3luY0NvbXBsZXRlPy4oKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1N5bmNFbmdpbmVdIEZ1bGwgc3luYyBmYWlsZWQ6JywgZXJyKTtcbiAgICAgIHRoaXMuX3N0YXRzLmVycm9ycysrO1xuICAgICAgdGhpcy5fc3RhdHMuaXNTeW5jaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLm9uU3luY0Vycm9yPy4oZXJyLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9pc1N5bmNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N0YXRzLmlzU3luY2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc3luY1NpbmdsZUZpbGUoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodGhpcy5faXNTeW5jaW5nKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVtb3RlS2V5ID0gdGhpcy5wbHVnaW4uZ2V0UmVtb3RlS2V5KGZpbGUpO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZmlsZS5wYXRoO1xuXG4gICAgICAvLyBcdTgzQjdcdTUzRDZcdTY3MkNcdTU3MzAgaGFzaFx1RkYwOHRleHQgaGFzaCBcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENiaW5hcnkgaGFzaCBcdTUzOUZcdTU5Q0IgQXJyYXlCdWZmZXJcdUZGMENcdTRFMEVcdTY3MERcdTUyQTFcdTdBRUZcdTRFMDBcdTgxRjRcdUZGMDlcbiAgICAgIGNvbnN0IGlzTWFya2Rvd24gPSBmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpO1xuICAgICAgY29uc3QgY29udGVudDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgPSBpc01hcmtkb3duXG4gICAgICAgID8gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSlcbiAgICAgICAgOiBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZEJpbmFyeShmaWxlKTtcbiAgICAgIGNvbnN0IGxvY2FsSGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcblxuICAgICAgLy8gXHU4M0I3XHU1M0Q2XHU4RkRDXHU3QTBCIGhhc2hcbiAgICAgIGxldCByZW1vdGVIYXNoOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8eyBzdWNjZXNzOiBib29sZWFuOyBkYXRhOiBSZW1vdGVGaWxlTWV0YSB9PihcbiAgICAgICAgICBgL2FwaS9zeW5jL21ldGEvJHtyZW1vdGVLZXl9YFxuICAgICAgICApO1xuICAgICAgICByZW1vdGVIYXNoID0gbWV0YS5kYXRhLmNvbnRlbnRIYXNoIHx8IG51bGw7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gXHU4RkRDXHU3QTBCXHU2NTg3XHU0RUY2XHU0RTBEXHU1QjU4XHU1NzI4XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXTtcbiAgICAgIGNvbnN0IGxhc3RTeW5jZWRIYXNoID0gc2F2ZWRTdGF0ZT8ubGFzdFN5bmNlZEhhc2ggfHwgbnVsbDtcblxuICAgICAgaWYgKGxvY2FsSGFzaCA9PT0gcmVtb3RlSGFzaCkge1xuICAgICAgICAvLyBcdTVERjJcdTU0MENcdTZCNjVcbiAgICAgICAgdGhpcy5zeW5jU3RhdGVzW2xvY2FsUGF0aF0gPSB7XG4gICAgICAgICAgcmVtb3RlS2V5LFxuICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBsb2NhbEhhc2gsXG4gICAgICAgICAgbGFzdFN5bmNlZFRpbWU6IERhdGUubm93KCksXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKCFyZW1vdGVIYXNoIHx8IChsb2NhbEhhc2ggIT09IGxhc3RTeW5jZWRIYXNoICYmIHJlbW90ZUhhc2ggPT09IGxhc3RTeW5jZWRIYXNoKSkge1xuICAgICAgICAvLyBcdTY3MkNcdTU3MzBcdTRGRUVcdTY1MzlcdTYyMTZcdThGRENcdTdBMEJcdTRFMERcdTVCNThcdTU3MjggXHUyMTkyIFx1NEUwQVx1NEYyMFxuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICByZW1vdGVLZXksXG4gICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGxvY2FsSGFzaCxcbiAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxIYXNoID09PSBsYXN0U3luY2VkSGFzaCAmJiByZW1vdGVIYXNoICE9PSBsYXN0U3luY2VkSGFzaCkge1xuICAgICAgICAvLyBcdTRFQzVcdThGRENcdTdBMEJcdTRGRUVcdTY1MzkgXHUyMTkyIFx1NEUwQlx1OEY3RFxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5kb3dubG9hZEFuZFNhdmUocmVtb3RlS2V5KTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgIHJlbW90ZUtleSxcbiAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IHJlbW90ZUhhc2gsXG4gICAgICAgICAgICBsYXN0U3luY2VkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBcdTUxQjJcdTdBODFcbiAgICAgICAgY29uc3QgY29uZmxpY3QgPSBhd2FpdCB0aGlzLmJ1aWxkQ29uZmxpY3RJbmZvKGZpbGUsIHJlbW90ZUtleSwgbG9jYWxIYXNoLCByZW1vdGVIYXNoKTtcbiAgICAgICAgdGhpcy5fY29uZmxpY3RzLnB1c2goY29uZmxpY3QpO1xuICAgICAgICB0aGlzLl9zdGF0cy5jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMubGVuZ3RoO1xuICAgICAgICB0aGlzLm9uQ29uZmxpY3RzRm91bmQ/LihbY29uZmxpY3RdKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3luY1N0YXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVBlbmRpbmdTdGF0cygpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gU2luZ2xlIGZpbGUgc3luYyBmYWlsZWQgZm9yICR7ZmlsZS5wYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gQ29uZmxpY3QgUmVzb2x1dGlvbiA9PT09PT09PT09XG5cbiAgYXN5bmMgcmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0OiBDb25mbGljdEluZm8sIHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvY2FsUGF0aCA9IGNvbmZsaWN0LmxvY2FsUGF0aDtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChsb2NhbFBhdGgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHN3aXRjaCAocmVzb2x1dGlvbikge1xuICAgICAgICBjYXNlICdsb2NhbCc6IHtcbiAgICAgICAgICAvLyBcdTc1MjhcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTg5ODZcdTc2RDZcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAncmVtb3RlJzoge1xuICAgICAgICAgIC8vIFx1NzUyOFx1OEZEQ1x1N0EwQlx1NzI0OFx1NjcyQ1x1ODk4Nlx1NzZENlx1NjcyQ1x1NTczMFxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRvd25sb2FkQW5kU2F2ZShjb25mbGljdC5yZW1vdGVLZXkpO1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdGF0ZXNbbG9jYWxQYXRoXSA9IHtcbiAgICAgICAgICAgICAgcmVtb3RlS2V5OiBjb25mbGljdC5yZW1vdGVLZXksXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRIYXNoOiBkYXRhLmNvbnRlbnRIYXNoIHx8IGNvbmZsaWN0LnJlbW90ZUhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYm90aCc6IHtcbiAgICAgICAgICAvLyBcdTRGRERcdTc1NTlcdTRFMjRcdTRFMkFcdTcyNDhcdTY3MkNcdUZGMENcdTY3MkNcdTU3MzBcdTUyMUJcdTVFRkEgLmNvbmZsaWN0IFx1NTI2Rlx1NjcyQ1xuICAgICAgICAgIGNvbnN0IGNvbmZsaWN0UGF0aCA9IGxvY2FsUGF0aC5yZXBsYWNlKC9cXC5tZCQvLCBgLmNvbmZsaWN0LSR7RGF0ZS5ub3coKX0ubWRgKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlKGNvbmZsaWN0UGF0aCwgY29uZmxpY3QucmVtb3RlQ29udGVudCk7XG5cbiAgICAgICAgICAvLyBcdTRFMEFcdTRGMjBcdTY3MkNcdTU3MzBcdTcyNDhcdTY3MkNcdTUyMzBcdThGRENcdTdBMEJcbiAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zeW5jRmlsZVRvUmVtb3RlKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMuY29tcHV0ZUxvY2FsSGFzaChjb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuc3luY1N0YXRlc1tsb2NhbFBhdGhdID0ge1xuICAgICAgICAgICAgICByZW1vdGVLZXk6IGNvbmZsaWN0LnJlbW90ZUtleSxcbiAgICAgICAgICAgICAgbGFzdFN5bmNlZEhhc2g6IGhhc2gsXG4gICAgICAgICAgICAgIGxhc3RTeW5jZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHU0RUNFXHU1MUIyXHU3QTgxXHU1MjE3XHU4ODY4XHU0RTJEXHU3OUZCXHU5NjY0XG4gICAgICB0aGlzLl9jb25mbGljdHMgPSB0aGlzLl9jb25mbGljdHMuZmlsdGVyKChjKSA9PiBjLmxvY2FsUGF0aCAhPT0gbG9jYWxQYXRoKTtcbiAgICAgIHRoaXMuX3N0YXRzLmNvbmZsaWN0cyA9IHRoaXMuX2NvbmZsaWN0cy5sZW5ndGg7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTeW5jU3RhdGUoKTtcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBbU3luY0VuZ2luZV0gQ29uZmxpY3QgcmVzb2x1dGlvbiBmYWlsZWQgZm9yICR7bG9jYWxQYXRofTpgLCBlcnIubWVzc2FnZSk7XG4gICAgICB0aGlzLl9zdGF0cy5lcnJvcnMrKztcbiAgICAgIHRoaXMuZW1pdFN0YXRzQ2hhbmdlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc29sdmVBbGxDb25mbGljdHMocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29uZmxpY3RzVG9SZXNvbHZlID0gWy4uLnRoaXMuX2NvbmZsaWN0c107XG4gICAgZm9yIChjb25zdCBjb25mbGljdCBvZiBjb25mbGljdHNUb1Jlc29sdmUpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzb2x2ZUNvbmZsaWN0KGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09IEhlbHBlcnMgPT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgZmV0Y2hSZW1vdGVNZXRhcyhwcmVmaXg6IHN0cmluZyk6IFByb21pc2U8UmVtb3RlRmlsZU1ldGFbXT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBkYXRhOiB7IGZpbGVzOiBSZW1vdGVGaWxlTWV0YVtdOyBjb3VudDogbnVtYmVyIH07XG4gICAgICB9PignL2FwaS9zeW5jL2JhdGNoLW1ldGEnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHByZWZpeCB9KSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlcy5kYXRhLmZpbGVzO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbU3luY0VuZ2luZV0gRmFpbGVkIHRvIGZldGNoIHJlbW90ZSBtZXRhczonLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBkb3dubG9hZEFuZFNhdmUoXG4gICAgcmVtb3RlS2V5OiBzdHJpbmdcbiAgKTogUHJvbWlzZTx7IGNvbnRlbnRIYXNoPzogc3RyaW5nIH0gfCBudWxsPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucGx1Z2luLmFwaTx7XG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBrZXk6IHN0cmluZztcbiAgICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgICAgY29udGVudFR5cGU/OiBzdHJpbmc7XG4gICAgICAgICAgc2l6ZTogbnVtYmVyO1xuICAgICAgICAgIHVwbG9hZGVkPzogc3RyaW5nO1xuICAgICAgICAgIGNvbnRlbnRIYXNoPzogc3RyaW5nO1xuICAgICAgICAgIGVuY29kaW5nPzogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke3JlbW90ZUtleX1gKTtcblxuICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgY29uc3QgbG9jYWxQYXRoID0gZGF0YS5rZXk7XG4gICAgICBjb25zdCBpc01hcmtkb3duID0gbG9jYWxQYXRoLmVuZHNXaXRoKCcubWQnKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRmlsZSA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgobG9jYWxQYXRoKTtcblxuICAgICAgaWYgKGV4aXN0aW5nRmlsZSBpbnN0YW5jZW9mIFRGaWxlKSB7XG4gICAgICAgIGlmIChpc01hcmtkb3duIHx8IGRhdGEuZW5jb2RpbmcgPT09ICd1dGYtOCcpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQubW9kaWZ5KGV4aXN0aW5nRmlsZSwgZGF0YS5jb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSB0aGlzLnBsdWdpbi5iYXNlNjRUb0FycmF5QnVmZmVyKGRhdGEuY29udGVudCk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0Lm1vZGlmeUJpbmFyeShleGlzdGluZ0ZpbGUsIGJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYFtTeW5jRW5naW5lXSBVcGRhdGVkICR7bG9jYWxQYXRofWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gXHU1MjFCXHU1RUZBXHU2NTg3XHU0RUY2XG4gICAgICAgIGNvbnN0IGZvbGRlclBhdGggPSBsb2NhbFBhdGguc3Vic3RyaW5nKDAsIGxvY2FsUGF0aC5sYXN0SW5kZXhPZignLycpKTtcbiAgICAgICAgaWYgKGZvbGRlclBhdGgpIHtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlclBhdGgpLmNhdGNoKCgpID0+IHt9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNNYXJrZG93biB8fCBkYXRhLmVuY29kaW5nID09PSAndXRmLTgnKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmNyZWF0ZShsb2NhbFBhdGgsIGRhdGEuY29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy5wbHVnaW4uYmFzZTY0VG9BcnJheUJ1ZmZlcihkYXRhLmNvbnRlbnQpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5jcmVhdGVCaW5hcnkobG9jYWxQYXRoLCBidWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbU3luY0VuZ2luZV0gQ3JlYXRlZCAke2xvY2FsUGF0aH1gKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgY29udGVudEhhc2g6IGRhdGEuY29udGVudEhhc2ggfTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcihgW1N5bmNFbmdpbmVdIERvd25sb2FkIGZhaWxlZCBmb3IgJHtyZW1vdGVLZXl9OmAsIGVyci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYnVpbGRDb25mbGljdEluZm8oXG4gICAgZmlsZTogVEZpbGUsXG4gICAgcmVtb3RlS2V5OiBzdHJpbmcsXG4gICAgbG9jYWxIYXNoOiBzdHJpbmcsXG4gICAgcmVtb3RlSGFzaDogc3RyaW5nXG4gICk6IFByb21pc2U8Q29uZmxpY3RJbmZvPiB7XG4gICAgY29uc3QgbG9jYWxDb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG5cbiAgICBsZXQgcmVtb3RlQ29udGVudCA9ICcnO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnBsdWdpbi5hcGk8e1xuICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICBkYXRhOiB7IGNvbnRlbnQ6IHN0cmluZyB9O1xuICAgICAgfT4oYC9hcGkvc3luYy9kb3dubG9hZC8ke3JlbW90ZUtleX1gKTtcbiAgICAgIHJlbW90ZUNvbnRlbnQgPSByZXMuZGF0YS5jb250ZW50O1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmVtb3RlQ29udGVudCA9ICcoRmFpbGVkIHRvIGZldGNoIHJlbW90ZSBjb250ZW50KSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2FsUGF0aDogZmlsZS5wYXRoLFxuICAgICAgcmVtb3RlS2V5LFxuICAgICAgbG9jYWxDb250ZW50LFxuICAgICAgcmVtb3RlQ29udGVudCxcbiAgICAgIGxvY2FsSGFzaCxcbiAgICAgIHJlbW90ZUhhc2gsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGVuZGluZ1N0YXRzKCk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXRzLnBlbmRpbmdVcGxvYWQgPSB0aGlzLmRlYm91bmNlVGltZXJzLnNpemU7XG4gICAgdGhpcy5lbWl0U3RhdHNDaGFuZ2VkKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRTdGF0c0NoYW5nZWQoKTogdm9pZCB7XG4gICAgdGhpcy5vblN0YXRzQ2hhbmdlZD8uKHRoaXMuc3RhdHMpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBDbGVhbnVwID09PT09PT09PT1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcEF1dG9TeW5jKCk7XG4gICAgZm9yIChjb25zdCB0aW1lciBvZiB0aGlzLmRlYm91bmNlVGltZXJzLnZhbHVlcygpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgICB0aGlzLmRlYm91bmNlVGltZXJzLmNsZWFyKCk7XG4gIH1cbn1cbiIsICJpbXBvcnQgeyBQbHVnaW4sIHNldEljb24sIE1vZGFsLCBBcHAgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgdHlwZSB7IFN5bmNTdGF0cywgQ29uZmxpY3RJbmZvIH0gZnJvbSAnLi9zeW5jLWVuZ2luZSc7XG5cbmV4cG9ydCBjbGFzcyBTeW5jU3RhdHVzQmFyIHtcbiAgcHJpdmF0ZSBwbHVnaW46IFBsdWdpbjtcbiAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgaWNvbkVsOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSB0ZXh0RWw6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9zdGF0czogU3luY1N0YXRzIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2NvbmZsaWN0czogQ29uZmxpY3RJbmZvW10gPSBbXTtcbiAgcHJpdmF0ZSBvblNob3dDb25mbGljdHM6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIG9uVHJpZ2dlclN5bmM6ICgoKSA9PiB2b2lkKSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBsdWdpbjogUGx1Z2luLFxuICAgIG9wdHM6IHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0cz86ICgpID0+IHZvaWQ7XG4gICAgICBvblRyaWdnZXJTeW5jPzogKCkgPT4gdm9pZDtcbiAgICB9XG4gICkge1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMub25TaG93Q29uZmxpY3RzID0gb3B0cy5vblNob3dDb25mbGljdHMgfHwgbnVsbDtcbiAgICB0aGlzLm9uVHJpZ2dlclN5bmMgPSBvcHRzLm9uVHJpZ2dlclN5bmMgfHwgbnVsbDtcblxuICAgIC8vIENyZWF0ZSBzdGF0dXMgYmFyIGVsZW1lbnRcbiAgICB0aGlzLnN0YXR1c0JhckVsID0gcGx1Z2luLmFkZFN0YXR1c0Jhckl0ZW0oKTtcbiAgICB0aGlzLnN0YXR1c0JhckVsLmFkZENsYXNzKCdjZi1zeW5jLXN0YXR1cycpO1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0Nsb3VkZmxhcmUgU3luYyBTdGF0dXMnKTtcblxuICAgIHRoaXMuaWNvbkVsID0gdGhpcy5zdGF0dXNCYXJFbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2Ytc3RhdHVzLWljb24nIH0pO1xuICAgIHRoaXMudGV4dEVsID0gdGhpcy5zdGF0dXNCYXJFbC5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2Ytc3RhdHVzLXRleHQnIH0pO1xuXG4gICAgLy8gQ2xpY2sgaGFuZGxlciBcdTIwMTQgb3BlbnMgZGV0YWlsIHBhbmVsXG4gICAgdGhpcy5zdGF0dXNCYXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuc2hvd0RldGFpbE1vZGFsKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgc3R5bGVzXG4gICAgdGhpcy5hZGRTdHlsZXMoKTtcblxuICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKHN0YXRzOiBTeW5jU3RhdHMpOiB2b2lkIHtcbiAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICB1cGRhdGVDb25mbGljdHMoY29uZmxpY3RzOiBDb25mbGljdEluZm9bXSk6IHZvaWQge1xuICAgIHRoaXMuX2NvbmZsaWN0cyA9IGNvbmZsaWN0cztcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdHMgPSB0aGlzLl9zdGF0cztcblxuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICdjbG91ZCcpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSAnTm90IHN5bmNlZCc7XG4gICAgICB0aGlzLnN0YXR1c0JhckVsLmNsYXNzTmFtZSA9ICdjZi1zeW5jLXN0YXR1cyBjZi1zdGF0dXMtaWRsZSc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmlzU3luY2luZykge1xuICAgICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ3JlZnJlc2gtY3cnKTtcbiAgICAgIHRoaXMudGV4dEVsLnRleHRDb250ZW50ID0gJ1N5bmNpbmcuLi4nO1xuICAgICAgdGhpcy5zdGF0dXNCYXJFbC5jbGFzc05hbWUgPSAnY2Ytc3luYy1zdGF0dXMgY2Ytc3RhdHVzLXN5bmNpbmcnO1xuICAgICAgdGhpcy5pY29uRWwuYWRkQ2xhc3MoJ2NmLXNwaW4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmljb25FbC5yZW1vdmVDbGFzcygnY2Ytc3BpbicpO1xuXG4gICAgaWYgKHN0YXRzLmNvbmZsaWN0cyA+IDApIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICdhbGVydC10cmlhbmdsZScpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBgJHtzdGF0cy5jb25mbGljdHN9IGNvbmZsaWN0JHtzdGF0cy5jb25mbGljdHMgPiAxID8gJ3MnIDogJyd9YDtcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1jb25mbGljdCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXRzLmVycm9ycyA+IDApIHtcbiAgICAgIHNldEljb24odGhpcy5pY29uRWwsICd4LWNpcmNsZScpO1xuICAgICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBgJHtzdGF0cy5lcnJvcnN9IGVycm9yJHtzdGF0cy5lcnJvcnMgPiAxID8gJ3MnIDogJyd9YDtcbiAgICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1lcnJvcic7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3luY2VkIHN0YXRlXG4gICAgc2V0SWNvbih0aGlzLmljb25FbCwgJ2NoZWNrLWNpcmNsZScpO1xuICAgIGNvbnN0IHRpbWVBZ28gPSBzdGF0cy5sYXN0U3luY1RpbWUgPyB0aGlzLmZvcm1hdFRpbWVBZ28oc3RhdHMubGFzdFN5bmNUaW1lKSA6ICduZXZlcic7XG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW3RpbWVBZ29dO1xuICAgIGlmIChzdGF0cy5wZW5kaW5nVXBsb2FkID4gMCkgcGFydHMucHVzaChgJHtzdGF0cy5wZW5kaW5nVXBsb2FkfSBwZW5kaW5nYCk7XG4gICAgdGhpcy50ZXh0RWwudGV4dENvbnRlbnQgPSBwYXJ0cy5qb2luKCcgXHUwMEI3ICcpO1xuICAgIHRoaXMuc3RhdHVzQmFyRWwuY2xhc3NOYW1lID0gJ2NmLXN5bmMtc3RhdHVzIGNmLXN0YXR1cy1zeW5jZWQnO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lQWdvKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBkaWZmID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihkaWZmIC8gMTAwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcblxuICAgIGlmIChzZWNvbmRzIDwgNjApIHJldHVybiAnanVzdCBub3cnO1xuICAgIGlmIChtaW51dGVzIDwgNjApIHJldHVybiBgJHttaW51dGVzfW0gYWdvYDtcbiAgICBpZiAoaG91cnMgPCAyNCkgcmV0dXJuIGAke2hvdXJzfWggYWdvYDtcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihob3VycyAvIDI0KX1kIGFnb2A7XG4gIH1cblxuICBwcml2YXRlIHNob3dEZXRhaWxNb2RhbCgpOiB2b2lkIHtcbiAgICBuZXcgU3luY0RldGFpbE1vZGFsKHRoaXMucGx1Z2luLmFwcCwgdGhpcy5fc3RhdHMsIHRoaXMuX2NvbmZsaWN0cywge1xuICAgICAgb25TaG93Q29uZmxpY3RzOiB0aGlzLm9uU2hvd0NvbmZsaWN0cyxcbiAgICAgIG9uVHJpZ2dlclN5bmM6IHRoaXMub25UcmlnZ2VyU3luYyxcbiAgICB9KS5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NmLXN0YXR1cy1iYXItc3R5bGVzJykpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdjZi1zdGF0dXMtYmFyLXN0eWxlcyc7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICAuY2Ytc3luYy1zdGF0dXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgfVxuICAgICAgLmNmLXN5bmMtc3RhdHVzOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ob3Zlcik7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy1pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdHVzLXRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXR1cy1pZGxlIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgfVxuICAgICAgLmNmLXN0YXR1cy1zeW5jaW5nIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7IH1cbiAgICAgIC5jZi1zdGF0dXMtc3luY2VkIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LXN1Y2Nlc3MsICM0YWRlODApOyB9XG4gICAgICAuY2Ytc3RhdHVzLWNvbmZsaWN0IC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LXdhcm5pbmcsICNmYWNjMTUpOyB9XG4gICAgICAuY2Ytc3RhdHVzLWVycm9yIC5jZi1zdGF0dXMtaWNvbiB7IGNvbG9yOiB2YXIoLS10ZXh0LWVycm9yLCAjZjg3MTcxKTsgfVxuICAgICAgLmNmLXNwaW4ge1xuICAgICAgICBhbmltYXRpb246IGNmLXNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBjZi1zcGluIHtcbiAgICAgICAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgICAgfVxuICAgIGA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdHVzQmFyRWwucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gPT09PT09PT09PSBEZXRhaWwgTW9kYWwgPT09PT09PT09PVxuXG5jbGFzcyBTeW5jRGV0YWlsTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG4gIHByaXZhdGUgc3RhdHM6IFN5bmNTdGF0cyB8IG51bGw7XG4gIHByaXZhdGUgY29uZmxpY3RzOiBDb25mbGljdEluZm9bXTtcbiAgcHJpdmF0ZSBvblNob3dDb25mbGljdHM6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gIHByaXZhdGUgb25UcmlnZ2VyU3luYzogKCgpID0+IHZvaWQpIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBhcHA6IEFwcCxcbiAgICBzdGF0czogU3luY1N0YXRzIHwgbnVsbCxcbiAgICBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdLFxuICAgIG9wdHM6IHtcbiAgICAgIG9uU2hvd0NvbmZsaWN0cz86ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gICAgICBvblRyaWdnZXJTeW5jPzogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKGFwcCk7XG4gICAgdGhpcy5zdGF0cyA9IHN0YXRzO1xuICAgIHRoaXMuY29uZmxpY3RzID0gY29uZmxpY3RzO1xuICAgIHRoaXMub25TaG93Q29uZmxpY3RzID0gb3B0cy5vblNob3dDb25mbGljdHMgfHwgbnVsbDtcbiAgICB0aGlzLm9uVHJpZ2dlclN5bmMgPSBvcHRzLm9uVHJpZ2dlclN5bmMgfHwgbnVsbDtcbiAgfVxuXG4gIG9uT3BlbigpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRlbnRFbCB9ID0gdGhpcztcbiAgICBjb250ZW50RWwuZW1wdHkoKTtcbiAgICBjb250ZW50RWwuYWRkQ2xhc3MoJ2NmLXN5bmMtZGV0YWlsLW1vZGFsJyk7XG5cbiAgICB0aGlzLmFkZFN0eWxlcygpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC1oZWFkZXInIH0pO1xuICAgIGNvbnN0IHRpdGxlUm93ID0gaGVhZGVyLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC10aXRsZS1yb3cnIH0pO1xuICAgIGNvbnN0IGljb25FbCA9IHRpdGxlUm93LmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1kZXRhaWwtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsICdjbG91ZCcpO1xuICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdoMicsIHsgdGV4dDogJ1N5bmMgU3RhdHVzJywgY2xzOiAnY2YtZGV0YWlsLXRpdGxlJyB9KTtcblxuICAgIGNvbnN0IHN0YXRzID0gdGhpcy5zdGF0cztcblxuICAgIGlmICghc3RhdHMpIHtcbiAgICAgIGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgICBjbHM6ICdjZi1kZXRhaWwtZW1wdHknLFxuICAgICAgICB0ZXh0OiAnTm8gc3luYyBkYXRhIGF2YWlsYWJsZS4gUnVuIGEgc3luYyBmaXJzdC4nLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0YXRzIGdyaWRcbiAgICAgIGNvbnN0IGdyaWQgPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtZGV0YWlsLWdyaWQnIH0pO1xuXG4gICAgICB0aGlzLmFkZFN0YXRDYXJkKGdyaWQsICdjbG9jaycsICdMYXN0IFN5bmMnLCBzdGF0cy5sYXN0U3luY1RpbWUgPyB0aGlzLmZvcm1hdFRpbWUoc3RhdHMubGFzdFN5bmNUaW1lKSA6ICdOZXZlcicpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnZmlsZXMnLCAnVG90YWwgRmlsZXMnLCBTdHJpbmcoc3RhdHMudG90YWxGaWxlcykpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnY2hlY2stY2lyY2xlJywgJ1N5bmNlZCcsIFN0cmluZyhzdGF0cy5zeW5jZWRGaWxlcykpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAndXBsb2FkJywgJ1BlbmRpbmcgXHUyMTkxJywgU3RyaW5nKHN0YXRzLnBlbmRpbmdVcGxvYWQpKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ2Rvd25sb2FkJywgJ1BlbmRpbmcgXHUyMTkzJywgU3RyaW5nKHN0YXRzLnBlbmRpbmdEb3dubG9hZCkpO1xuICAgICAgdGhpcy5hZGRTdGF0Q2FyZChncmlkLCAnYWxlcnQtdHJpYW5nbGUnLCAnQ29uZmxpY3RzJywgU3RyaW5nKHN0YXRzLmNvbmZsaWN0cyksIHN0YXRzLmNvbmZsaWN0cyA+IDAgPyAnY2Ytc3RhdC13YXJuaW5nJyA6ICcnKTtcbiAgICAgIHRoaXMuYWRkU3RhdENhcmQoZ3JpZCwgJ3gtY2lyY2xlJywgJ0Vycm9ycycsIFN0cmluZyhzdGF0cy5lcnJvcnMpLCBzdGF0cy5lcnJvcnMgPiAwID8gJ2NmLXN0YXQtZXJyb3InIDogJycpO1xuXG4gICAgICAvLyBDb25mbGljdCBsaXN0XG4gICAgICBpZiAodGhpcy5jb25mbGljdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBjb25mbGljdFNlY3Rpb24gPSBjb250ZW50RWwuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgICAgICBjbHM6ICdjZi1kZXRhaWwtc2VjdGlvbicsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25mbGljdFNlY3Rpb24uY3JlYXRlRWwoJ2gzJywgeyB0ZXh0OiAnQ29uZmxpY3RpbmcgRmlsZXMnIH0pO1xuXG4gICAgICAgIGNvbnN0IGNvbmZsaWN0TGlzdCA9IGNvbmZsaWN0U2VjdGlvbi5jcmVhdGVFbCgndWwnLCB7XG4gICAgICAgICAgY2xzOiAnY2YtY29uZmxpY3QtbGlzdCcsXG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5jb25mbGljdHMpIHtcbiAgICAgICAgICBjb25zdCBsaSA9IGNvbmZsaWN0TGlzdC5jcmVhdGVFbCgnbGknLCB7IGNsczogJ2NmLWNvbmZsaWN0LWl0ZW0nIH0pO1xuICAgICAgICAgIGNvbnN0IGZpbGVJY29uID0gbGkuY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWl0ZW0taWNvbicgfSk7XG4gICAgICAgICAgc2V0SWNvbihmaWxlSWNvbiwgJ2ZpbGUtd2FybmluZycpO1xuICAgICAgICAgIGxpLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiBjLmxvY2FsUGF0aCwgY2xzOiAnY2YtaXRlbS1wYXRoJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uU2hvd0NvbmZsaWN0cykge1xuICAgICAgICAgIGNvbnN0IHJlc29sdmVCdG4gPSBjb25mbGljdFNlY3Rpb24uY3JlYXRlRWwoJ2J1dHRvbicsIHtcbiAgICAgICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tcHJpbWFyeScsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgYnRuSWNvbiA9IHJlc29sdmVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICAgICAgICBzZXRJY29uKGJ0bkljb24sICdhbGVydC10cmlhbmdsZScpO1xuICAgICAgICAgIHJlc29sdmVCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdSZXNvbHZlIENvbmZsaWN0cycgfSk7XG4gICAgICAgICAgcmVzb2x2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMub25TaG93Q29uZmxpY3RzPy4oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFjdGlvbnNcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWRldGFpbC1hY3Rpb25zJyB9KTtcblxuICAgIGlmICh0aGlzLm9uVHJpZ2dlclN5bmMpIHtcbiAgICAgIGNvbnN0IHN5bmNCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7IGNsczogJ2NmLWJ0biBjZi1idG4tcHJpbWFyeScgfSk7XG4gICAgICBjb25zdCBzeW5jSWNvbiA9IHN5bmNCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICAgIHNldEljb24oc3luY0ljb24sICdyZWZyZXNoLWN3Jyk7XG4gICAgICBzeW5jQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnU3luYyBOb3cnIH0pO1xuICAgICAgc3luY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLm9uVHJpZ2dlclN5bmM/LigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4nLFxuICAgICAgdGV4dDogJ0Nsb3NlJyxcbiAgICB9KTtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cblxuICBvbkNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0YXRDYXJkKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGljb246IHN0cmluZywgbGFiZWw6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXh0cmFDbGFzcz86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRWwoJ2RpdicsIHtcbiAgICAgIGNsczogYGNmLXN0YXQtY2FyZCAke2V4dHJhQ2xhc3MgfHwgJyd9YCxcbiAgICB9KTtcbiAgICBjb25zdCBpY29uRWwgPSBjYXJkLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXN0YXQtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsIGljb24pO1xuICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2Ytc3RhdC12YWx1ZScsIHRleHQ6IHZhbHVlIH0pO1xuICAgIGNhcmQuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2Ytc3RhdC1sYWJlbCcsIHRleHQ6IGxhYmVsIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHRpbWVzdGFtcDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZXMoKTogdm9pZCB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjZi1kZXRhaWwtbW9kYWwtc3R5bGVzJykpIHJldHVybjtcblxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5pZCA9ICdjZi1kZXRhaWwtbW9kYWwtc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jZi1zeW5jLWRldGFpbC1tb2RhbCB7XG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweCAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC10aXRsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWFjY2VudCk7XG4gICAgICB9XG4gICAgICAuY2YtZGV0YWlsLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLWRldGFpbC1ncmlkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTIwcHgsIDFmcikpO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWNhcmQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtaWNvbiBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC13YXJuaW5nIC5jZi1zdGF0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7XG4gICAgICB9XG4gICAgICAuY2Ytc3RhdC13YXJuaW5nIC5jZi1zdGF0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nLCAjZmFjYzE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1zdGF0LWVycm9yIC5jZi1zdGF0LXZhbHVlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZXJyb3IsICNmODcxNzEpO1xuICAgICAgfVxuICAgICAgLmNmLXN0YXQtZXJyb3IgLmNmLXN0YXQtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWVycm9yLCAjZjg3MTcxKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtc2VjdGlvbiBoMyB7XG4gICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtbGlzdCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1pY29uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtd2FybmluZywgI2ZhY2MxNSk7XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAuY2YtaXRlbS1wYXRoIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ub3NwYWNlKTtcbiAgICAgIH1cbiAgICAgIC5jZi1kZXRhaWwtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICB9XG4gICAgICAuY2YtYnRuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG46aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWhvdmVyKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWludGVyYWN0aXZlLWFjY2VudCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW9uLWFjY2VudCk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50KTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW50ZXJhY3RpdmUtYWNjZW50LWhvdmVyLCB2YXIoLS1pbnRlcmFjdGl2ZS1hY2NlbnQpKTtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IE1vZGFsLCBBcHAsIFRGaWxlLCBzZXRJY29uIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IHR5cGUgeyBDb25mbGljdEluZm8sIENvbmZsaWN0UmVzb2x1dGlvbiB9IGZyb20gJy4vc3luYy1lbmdpbmUnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmxpY3RNb2RhbCBleHRlbmRzIE1vZGFsIHtcbiAgcHJpdmF0ZSBjb25mbGljdHM6IENvbmZsaWN0SW5mb1tdO1xuICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBvblJlc29sdmU6IChjb25mbGljdDogQ29uZmxpY3RJbmZvLCByZXNvbHV0aW9uOiBDb25mbGljdFJlc29sdXRpb24pID0+IFByb21pc2U8dm9pZD47XG4gIHByaXZhdGUgb25SZXNvbHZlQWxsOiAocmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGFwcDogQXBwLFxuICAgIGNvbmZsaWN0czogQ29uZmxpY3RJbmZvW10sXG4gICAgb25SZXNvbHZlOiAoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKSA9PiBQcm9taXNlPHZvaWQ+LFxuICAgIG9uUmVzb2x2ZUFsbDogKHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbikgPT4gUHJvbWlzZTx2b2lkPlxuICApIHtcbiAgICBzdXBlcihhcHApO1xuICAgIHRoaXMuY29uZmxpY3RzID0gY29uZmxpY3RzO1xuICAgIHRoaXMub25SZXNvbHZlID0gb25SZXNvbHZlO1xuICAgIHRoaXMub25SZXNvbHZlQWxsID0gb25SZXNvbHZlQWxsO1xuICB9XG5cbiAgb25PcGVuKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuICAgIGNvbnRlbnRFbC5hZGRDbGFzcygnY2Ytc3luYy1jb25mbGljdC1tb2RhbCcpO1xuXG4gICAgdGhpcy5yZW5kZXJDdXJyZW50Q29uZmxpY3QoKTtcbiAgfVxuXG4gIG9uQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQ3VycmVudENvbmZsaWN0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGVudEVsIH0gPSB0aGlzO1xuICAgIGNvbnRlbnRFbC5lbXB0eSgpO1xuXG4gICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGVudEVsLmNyZWF0ZUVsKCdkaXYnLCB7XG4gICAgICAgIGNsczogJ2NmLWNvbmZsaWN0LWVtcHR5JyxcbiAgICAgICAgdGV4dDogJ1x1MjcwNSBBbGwgY29uZmxpY3RzIHJlc29sdmVkIScsXG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZSgpLCAxNTAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25mbGljdCA9IHRoaXMuY29uZmxpY3RzW3RoaXMuY3VycmVudEluZGV4XTtcbiAgICBpZiAoIWNvbmZsaWN0KSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gPT09PT0gXHU2ODM3XHU1RjBGID09PT09XG4gICAgdGhpcy5hZGRTdHlsZXMoKTtcblxuICAgIC8vID09PT09IEhlYWRlciA9PT09PVxuICAgIGNvbnN0IGhlYWRlciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1oZWFkZXInIH0pO1xuXG4gICAgY29uc3QgdGl0bGVSb3cgPSBoZWFkZXIuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtY29uZmxpY3QtdGl0bGUtcm93JyB9KTtcbiAgICBjb25zdCBpY29uRWwgPSB0aXRsZVJvdy5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtY29uZmxpY3QtaWNvbicgfSk7XG4gICAgc2V0SWNvbihpY29uRWwsICdhbGVydC10cmlhbmdsZScpO1xuICAgIHRpdGxlUm93LmNyZWF0ZUVsKCdoMicsIHtcbiAgICAgIHRleHQ6ICdTeW5jIENvbmZsaWN0JyxcbiAgICAgIGNsczogJ2NmLWNvbmZsaWN0LXRpdGxlJyxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtY29uZmxpY3Qtc3VidGl0bGUnLFxuICAgICAgdGV4dDogYCR7dGhpcy5jdXJyZW50SW5kZXggKyAxfSBvZiAke3RoaXMuY29uZmxpY3RzLmxlbmd0aH0gY29uZmxpY3RzYCxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtY29uZmxpY3QtZmlsZXBhdGgnLFxuICAgICAgdGV4dDogY29uZmxpY3QubG9jYWxQYXRoLFxuICAgIH0pO1xuXG4gICAgLy8gPT09PT0gRGlmZiBWaWV3ID09PT09XG4gICAgY29uc3QgZGlmZkNvbnRhaW5lciA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1kaWZmJyB9KTtcblxuICAgIC8vIExvY2FsIHNpZGVcbiAgICBjb25zdCBsb2NhbFBhbmVsID0gZGlmZkNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1wYW5lbCBjZi1sb2NhbCcgfSk7XG4gICAgY29uc3QgbG9jYWxIZWFkZXIgPSBsb2NhbFBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWhlYWRlcicgfSk7XG4gICAgY29uc3QgbG9jYWxJY29uRWwgPSBsb2NhbEhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtcGFuZWwtaWNvbicgfSk7XG4gICAgc2V0SWNvbihsb2NhbEljb25FbCwgJ21vbml0b3InKTtcbiAgICBsb2NhbEhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgdGV4dDogJ0xvY2FsIFZlcnNpb24nIH0pO1xuICAgIGxvY2FsSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1oYXNoJywgdGV4dDogY29uZmxpY3QubG9jYWxIYXNoLnN1YnN0cmluZygwLCA4KSB9KTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGVudCA9IGxvY2FsUGFuZWwuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtcGFuZWwtY29udGVudCcgfSk7XG4gICAgdGhpcy5yZW5kZXJEaWZmQ29udGVudChsb2NhbENvbnRlbnQsIGNvbmZsaWN0LmxvY2FsQ29udGVudCwgY29uZmxpY3QucmVtb3RlQ29udGVudCwgJ2xvY2FsJyk7XG5cbiAgICAvLyBSZW1vdGUgc2lkZVxuICAgIGNvbnN0IHJlbW90ZVBhbmVsID0gZGlmZkNvbnRhaW5lci5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1wYW5lbCBjZi1yZW1vdGUnIH0pO1xuICAgIGNvbnN0IHJlbW90ZUhlYWRlciA9IHJlbW90ZVBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWhlYWRlcicgfSk7XG4gICAgY29uc3QgcmVtb3RlSWNvbkVsID0gcmVtb3RlSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1wYW5lbC1pY29uJyB9KTtcbiAgICBzZXRJY29uKHJlbW90ZUljb25FbCwgJ2Nsb3VkJyk7XG4gICAgcmVtb3RlSGVhZGVyLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnUmVtb3RlIFZlcnNpb24nIH0pO1xuICAgIHJlbW90ZUhlYWRlci5jcmVhdGVFbCgnc3BhbicsIHsgY2xzOiAnY2YtaGFzaCcsIHRleHQ6IGNvbmZsaWN0LnJlbW90ZUhhc2guc3Vic3RyaW5nKDAsIDgpIH0pO1xuXG4gICAgY29uc3QgcmVtb3RlQ29udGVudCA9IHJlbW90ZVBhbmVsLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLXBhbmVsLWNvbnRlbnQnIH0pO1xuICAgIHRoaXMucmVuZGVyRGlmZkNvbnRlbnQocmVtb3RlQ29udGVudCwgY29uZmxpY3QucmVtb3RlQ29udGVudCwgY29uZmxpY3QubG9jYWxDb250ZW50LCAncmVtb3RlJyk7XG5cbiAgICAvLyA9PT09PSBBY3Rpb25zID09PT09XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnRFbC5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1jb25mbGljdC1hY3Rpb25zJyB9KTtcblxuICAgIC8vIEluZGl2aWR1YWwgYWN0aW9uc1xuICAgIGNvbnN0IGluZGl2aWR1YWxBY3Rpb25zID0gYWN0aW9ucy5jcmVhdGVFbCgnZGl2Jywge1xuICAgICAgY2xzOiAnY2YtaW5kaXZpZHVhbC1hY3Rpb25zJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGtlZXBMb2NhbEJ0biA9IGluZGl2aWR1YWxBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLWxvY2FsJyxcbiAgICB9KTtcbiAgICBjb25zdCBsb2NhbEJ0bkljb24gPSBrZWVwTG9jYWxCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICBzZXRJY29uKGxvY2FsQnRuSWNvbiwgJ21vbml0b3InKTtcbiAgICBrZWVwTG9jYWxCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IHRleHQ6ICdLZWVwIExvY2FsJyB9KTtcbiAgICBrZWVwTG9jYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmUoY29uZmxpY3QsICdsb2NhbCcpKTtcblxuICAgIGNvbnN0IGtlZXBSZW1vdGVCdG4gPSBpbmRpdmlkdWFsQWN0aW9ucy5jcmVhdGVFbCgnYnV0dG9uJywge1xuICAgICAgY2xzOiAnY2YtYnRuIGNmLWJ0bi1yZW1vdGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IHJlbW90ZUJ0bkljb24gPSBrZWVwUmVtb3RlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyBjbHM6ICdjZi1idG4taWNvbicgfSk7XG4gICAgc2V0SWNvbihyZW1vdGVCdG5JY29uLCAnY2xvdWQnKTtcbiAgICBrZWVwUmVtb3RlQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnS2VlcCBSZW1vdGUnIH0pO1xuICAgIGtlZXBSZW1vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc29sdmUoY29uZmxpY3QsICdyZW1vdGUnKSk7XG5cbiAgICBjb25zdCBrZWVwQm90aEJ0biA9IGluZGl2aWR1YWxBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICBjbHM6ICdjZi1idG4gY2YtYnRuLWJvdGgnLFxuICAgIH0pO1xuICAgIGNvbnN0IGJvdGhCdG5JY29uID0ga2VlcEJvdGhCdG4uY3JlYXRlRWwoJ3NwYW4nLCB7IGNsczogJ2NmLWJ0bi1pY29uJyB9KTtcbiAgICBzZXRJY29uKGJvdGhCdG5JY29uLCAnY29weScpO1xuICAgIGtlZXBCb3RoQnRuLmNyZWF0ZUVsKCdzcGFuJywgeyB0ZXh0OiAnS2VlcCBCb3RoJyB9KTtcbiAgICBrZWVwQm90aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGFuZGxlUmVzb2x2ZShjb25mbGljdCwgJ2JvdGgnKSk7XG5cbiAgICAvLyBCYXRjaCBhY3Rpb25zIChpZiBtdWx0aXBsZSBjb25mbGljdHMpXG4gICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IGJhdGNoQWN0aW9ucyA9IGFjdGlvbnMuY3JlYXRlRWwoJ2RpdicsIHsgY2xzOiAnY2YtYmF0Y2gtYWN0aW9ucycgfSk7XG4gICAgICBiYXRjaEFjdGlvbnMuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogJ2NmLWJhdGNoLWxhYmVsJyxcbiAgICAgICAgdGV4dDogJ0FwcGx5IHRvIGFsbDonLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFsbExvY2FsQnRuID0gYmF0Y2hBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tc21hbGwgY2YtYnRuLWxvY2FsJyxcbiAgICAgICAgdGV4dDogJ0FsbCBMb2NhbCcsXG4gICAgICB9KTtcbiAgICAgIGFsbExvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlQWxsKCdsb2NhbCcpKTtcblxuICAgICAgY29uc3QgYWxsUmVtb3RlQnRuID0gYmF0Y2hBY3Rpb25zLmNyZWF0ZUVsKCdidXR0b24nLCB7XG4gICAgICAgIGNsczogJ2NmLWJ0biBjZi1idG4tc21hbGwgY2YtYnRuLXJlbW90ZScsXG4gICAgICAgIHRleHQ6ICdBbGwgUmVtb3RlJyxcbiAgICAgIH0pO1xuICAgICAgYWxsUmVtb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oYW5kbGVSZXNvbHZlQWxsKCdyZW1vdGUnKSk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgIGlmICh0aGlzLmNvbmZsaWN0cy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBuYXYgPSBhY3Rpb25zLmNyZWF0ZUVsKCdkaXYnLCB7IGNsczogJ2NmLWNvbmZsaWN0LW5hdicgfSk7XG5cbiAgICAgIGNvbnN0IHByZXZCdG4gPSBuYXYuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnY2YtYnRuIGNmLWJ0bi1uYXYnIH0pO1xuICAgICAgc2V0SWNvbihwcmV2QnRuLCAnY2hldnJvbi1sZWZ0Jyk7XG4gICAgICBwcmV2QnRuLmRpc2FibGVkID0gdGhpcy5jdXJyZW50SW5kZXggPT09IDA7XG4gICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmF2LmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICB0ZXh0OiBgJHt0aGlzLmN1cnJlbnRJbmRleCArIDF9IC8gJHt0aGlzLmNvbmZsaWN0cy5sZW5ndGh9YCxcbiAgICAgICAgY2xzOiAnY2YtbmF2LXRleHQnLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG5leHRCdG4gPSBuYXYuY3JlYXRlRWwoJ2J1dHRvbicsIHsgY2xzOiAnY2YtYnRuIGNmLWJ0bi1uYXYnIH0pO1xuICAgICAgc2V0SWNvbihuZXh0QnRuLCAnY2hldnJvbi1yaWdodCcpO1xuICAgICAgbmV4dEJ0bi5kaXNhYmxlZCA9IHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuY29uZmxpY3RzLmxlbmd0aCAtIDE7XG4gICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXggPCB0aGlzLmNvbmZsaWN0cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICAgICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRpZmZDb250ZW50KFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIG90aGVyQ29udGVudDogc3RyaW5nLFxuICAgIHNpZGU6ICdsb2NhbCcgfCAncmVtb3RlJ1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IG90aGVyTGluZXMgPSBvdGhlckNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXG4gICAgY29uc3QgcHJlID0gY29udGFpbmVyLmNyZWF0ZUVsKCdwcmUnLCB7IGNsczogJ2NmLWRpZmYtcHJlJyB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVFbCA9IHByZS5jcmVhdGVFbCgnZGl2JywgeyBjbHM6ICdjZi1kaWZmLWxpbmUnIH0pO1xuXG4gICAgICAvLyBMaW5lIG51bWJlclxuICAgICAgbGluZUVsLmNyZWF0ZUVsKCdzcGFuJywge1xuICAgICAgICBjbHM6ICdjZi1saW5lLW51bScsXG4gICAgICAgIHRleHQ6IFN0cmluZyhpICsgMSksXG4gICAgICB9KTtcblxuICAgICAgLy8gRGV0ZXJtaW5lIGlmIGxpbmUgZGlmZmVyc1xuICAgICAgY29uc3QgaXNEaWZmID0gaSA+PSBvdGhlckxpbmVzLmxlbmd0aCB8fCBsaW5lc1tpXSAhPT0gb3RoZXJMaW5lc1tpXTtcblxuICAgICAgY29uc3QgbGluZUNvbnRlbnQgPSBsaW5lRWwuY3JlYXRlRWwoJ3NwYW4nLCB7XG4gICAgICAgIGNsczogYGNmLWxpbmUtY29udGVudCAke2lzRGlmZiA/IChzaWRlID09PSAnbG9jYWwnID8gJ2NmLWRpZmYtbG9jYWwnIDogJ2NmLWRpZmYtcmVtb3RlJykgOiAnJ31gLFxuICAgICAgfSk7XG4gICAgICBsaW5lQ29udGVudC50ZXh0Q29udGVudCA9IGxpbmVzW2ldIHx8ICcgJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVJlc29sdmUoY29uZmxpY3Q6IENvbmZsaWN0SW5mbywgcmVzb2x1dGlvbjogQ29uZmxpY3RSZXNvbHV0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYnV0dG9ucyA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiAoYnRuLmRpc2FibGVkID0gdHJ1ZSkpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMub25SZXNvbHZlKGNvbmZsaWN0LCByZXNvbHV0aW9uKTtcbiAgICAgIHRoaXMuY29uZmxpY3RzID0gdGhpcy5jb25mbGljdHMuZmlsdGVyKChjKSA9PiBjLmxvY2FsUGF0aCAhPT0gY29uZmxpY3QubG9jYWxQYXRoKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmNvbmZsaWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBNYXRoLm1heCgwLCB0aGlzLmNvbmZsaWN0cy5sZW5ndGggLSAxKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVuZGVyQ3VycmVudENvbmZsaWN0KCk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbmZsaWN0IHJlc29sdXRpb24gZmFpbGVkOicsIGVycik7XG4gICAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVSZXNvbHZlQWxsKHJlc29sdXRpb246IENvbmZsaWN0UmVzb2x1dGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goKGJ0bikgPT4gKGJ0bi5kaXNhYmxlZCA9IHRydWUpKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm9uUmVzb2x2ZUFsbChyZXNvbHV0aW9uKTtcbiAgICAgIHRoaXMuY29uZmxpY3RzID0gW107XG4gICAgICB0aGlzLnJlbmRlckN1cnJlbnRDb25mbGljdCgpO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdCYXRjaCBjb25mbGljdCByZXNvbHV0aW9uIGZhaWxlZDonLCBlcnIpO1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidG4pID0+IChidG4uZGlzYWJsZWQgPSBmYWxzZSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVzKCk6IHZvaWQge1xuICAgIC8vIE9ubHkgYWRkIG9uY2VcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NmLWNvbmZsaWN0LXN0eWxlcycpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuaWQgPSAnY2YtY29uZmxpY3Qtc3R5bGVzJztcbiAgICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIC5jZi1zeW5jLWNvbmZsaWN0LW1vZGFsIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICAgICAgd2lkdGg6IDkwdnc7XG4gICAgICB9XG4gICAgICAuY2Ytc3luYy1jb25mbGljdC1tb2RhbCAubW9kYWwtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LXRpdGxlLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgfVxuICAgICAgLmNmLWNvbmZsaWN0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC13YXJuaW5nKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1maWxlcGF0aCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtZGlmZiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ2FwOiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtcGFuZWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmNmLXBhbmVsLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgICAgLmNmLWxvY2FsIC5jZi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSksIDAuMSk7XG4gICAgICB9XG4gICAgICAuY2YtcmVtb3RlIC5jZi1wYW5lbC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCksIDAuMSk7XG4gICAgICB9XG4gICAgICAuY2YtcGFuZWwtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtaGFzaCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vc3BhY2UpO1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgcGFkZGluZzogMXB4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgICAgLmNmLXBhbmVsLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1wcmUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm9zcGFjZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICB9XG4gICAgICAuY2YtZGlmZi1saW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICAgIC5jZi1saW5lLW51bSB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtZmFpbnQpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jZi1saW5lLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtbG9jYWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWNvbG9yLWJsdWUtcmdiLCAwLCAxMjAsIDIxNSksIDAuMTUpO1xuICAgICAgfVxuICAgICAgLmNmLWRpZmYtcmVtb3RlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ncmVlbi1yZ2IsIDAsIDE4MCwgODApLCAwLjE1KTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEwcHg7XG4gICAgICB9XG4gICAgICAuY2YtaW5kaXZpZHVhbC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJ0biB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDZweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgICB9XG4gICAgICAuY2YtYnRuOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ob3Zlcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICAgIC5jZi1idG4taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLWxvY2FsOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1ibHVlLXJnYiwgMCwgMTIwLCAyMTUpLCAwLjE1KTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IodmFyKC0tY29sb3ItYmx1ZS1yZ2IsIDAsIDEyMCwgMjE1KSk7XG4gICAgICB9XG4gICAgICAuY2YtYnRuLXJlbW90ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItZ3JlZW4tcmdiLCAwLCAxODAsIDgwKSwgMC4xNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWNvbG9yLWdyZWVuLXJnYiwgMCwgMTgwLCA4MCkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1ib3RoOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci1vcmFuZ2UtcmdiLCAyMzAsIDE1MCwgMCksIDAuMTUpO1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYih2YXIoLS1jb2xvci1vcmFuZ2UtcmdiLCAyMzAsIDE1MCwgMCkpO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1zbWFsbCB7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgfVxuICAgICAgLmNmLWJhdGNoLWFjdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2YtYmF0Y2gtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgICAuY2YtY29uZmxpY3QtbmF2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNmLWJ0bi1uYXYge1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgfVxuICAgICAgLmNmLW5hdi10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICAgIC5jZi1jb25mbGljdC1lbXB0eSB7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zdWNjZXNzLCB2YXIoLS1pbnRlcmFjdGl2ZS1zdWNjZXNzKSk7XG4gICAgICB9XG4gICAgYDtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuIiwgImltcG9ydCB7IFRGaWxlLCBWYXVsdCwgbm9ybWFsaXplUGF0aCwgTm90aWNlLCBNZW51LCBNZXRhZGF0YUNhY2hlIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgdHlwZSBDbG91ZGZsYXJlU3luY1BsdWdpbiBmcm9tICcuL21haW4nO1xuXG5leHBvcnQgdHlwZSBQdWJsaXNoU3RhdHVzID0gJ2RyYWZ0JyB8ICdwdWJsaXNoZWQnIHwgJ21vZGlmaWVkJyB8ICdkZWxldGVkJztcblxuZXhwb3J0IGludGVyZmFjZSBQdWJsaXNoRmlsZVN0YXRlIHtcbiAgc3RhdHVzOiBQdWJsaXNoU3RhdHVzO1xuICBsYXN0UHVibGlzaGVkQXQ/OiBzdHJpbmc7XG4gIHJlbW90ZVVybD86IHN0cmluZztcbiAgbGFzdFB1Ymxpc2hlZEhhc2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVibGlzaEluZGV4RW50cnkge1xuICBwYXRoOiBzdHJpbmc7XG4gIHN0YXR1czogUHVibGlzaFN0YXR1cztcbiAgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIGhlYWRpbmdzOiB7IGxldmVsOiBudW1iZXI7IHRleHQ6IHN0cmluZyB9W107XG4gIG91dGdvaW5nTGlua3M6IHN0cmluZ1tdO1xuICBiYWNrbGlua3M6IG51bWJlcjtcbiAgbGFzdFB1Ymxpc2hlZEF0Pzogc3RyaW5nO1xuICByZW1vdGVVcmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVibGlzaEluZGV4IHtcbiAgZ2VuZXJhdGVkQXQ6IHN0cmluZztcbiAgc2l0ZVVybDogc3RyaW5nO1xuICBlbnRyaWVzOiBQdWJsaXNoSW5kZXhFbnRyeVtdO1xufVxuXG5leHBvcnQgY2xhc3MgUHVibGlzaEVuZ2luZSB7XG4gIHByaXZhdGUgcGx1Z2luOiBDbG91ZGZsYXJlU3luY1BsdWdpbjtcbiAgcHJpdmF0ZSBwdWJsaXNoU3RhdGU6IFJlY29yZDxzdHJpbmcsIFB1Ymxpc2hGaWxlU3RhdGU+ID0ge307XG4gIHByaXZhdGUgcHVibGlzaFN0YXR1c0JhckVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHBsdWdpbjogQ2xvdWRmbGFyZVN5bmNQbHVnaW4pIHtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGFzeW5jIGxvYWRTdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5wbHVnaW4ubG9hZERhdGEoKTtcbiAgICB0aGlzLnB1Ymxpc2hTdGF0ZSA9IGRhdGE/Ll9wdWJsaXNoU3RhdGUgfHwge307XG4gIH1cblxuICBhc3luYyBzYXZlU3RhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZGF0YSA9IChhd2FpdCB0aGlzLnBsdWdpbi5sb2FkRGF0YSgpKSB8fCB7fTtcbiAgICBkYXRhLl9wdWJsaXNoU3RhdGUgPSB0aGlzLnB1Ymxpc2hTdGF0ZTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHNldFN0YXR1c0JhckVsKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMucHVibGlzaFN0YXR1c0JhckVsID0gZWw7XG4gICAgdGhpcy51cGRhdGVTdGF0dXNCYXIoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT0gU3RhdHVzIGNvbXB1dGF0aW9uID09PT09PT09PT1cblxuICBnZXRQdWJsaXNoU3RhdGUocGF0aDogc3RyaW5nKTogUHVibGlzaEZpbGVTdGF0ZSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaFN0YXRlW3BhdGhdO1xuICB9XG5cbiAgYXN5bmMgY29tcHV0ZUZpbGVTdGF0dXMoZmlsZTogVEZpbGUpOiBQcm9taXNlPFB1Ymxpc2hTdGF0dXM+IHtcbiAgICBpZiAoIWZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHJldHVybiAnZHJhZnQnO1xuXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IHBhcnNlZCA9IG1hdHRlcihjb250ZW50KTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF07XG5cbiAgICAvLyBJZiBleHBsaWNpdGx5IG1hcmtlZCBhcyBub3QgcHVibGlzaCBhbmQgbmV2ZXIgcHVibGlzaGVkXG4gICAgaWYgKHBhcnNlZC5kYXRhLnB1Ymxpc2ggPT09IGZhbHNlICYmICFzdGF0ZSkge1xuICAgICAgcmV0dXJuICdkcmFmdCc7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoaXMgZmlsZSBzaG91bGQgYmUgY29uc2lkZXJlZCBmb3IgcHVibGlzaGluZ1xuICAgIGNvbnN0IHNob3VsZFB1Ymxpc2ggPSBhd2FpdCB0aGlzLnNob3VsZFB1Ymxpc2hGaWxlKGZpbGUsIHBhcnNlZC5kYXRhKTtcbiAgICBpZiAoIXNob3VsZFB1Ymxpc2gpIHtcbiAgICAgIHJldHVybiBzdGF0ZT8uc3RhdHVzID09PSAncHVibGlzaGVkJyA/ICdkZWxldGVkJyA6ICdkcmFmdCc7XG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZSB8fCBzdGF0ZS5zdGF0dXMgPT09ICdkcmFmdCcpIHtcbiAgICAgIHJldHVybiAnZHJhZnQnO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgaGFzaCB0byBkZXRlY3QgbW9kaWZpY2F0aW9uc1xuICAgIGNvbnN0IGN1cnJlbnRIYXNoID0gYXdhaXQgdGhpcy5wbHVnaW4uc3luY0VuZ2luZS5jb21wdXRlTG9jYWxIYXNoKGNvbnRlbnQpO1xuICAgIGlmIChzdGF0ZS5sYXN0UHVibGlzaGVkSGFzaCAmJiBzdGF0ZS5sYXN0UHVibGlzaGVkSGFzaCAhPT0gY3VycmVudEhhc2gpIHtcbiAgICAgIHJldHVybiAnbW9kaWZpZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZS5zdGF0dXM7XG4gIH1cblxuICBhc3luYyBzaG91bGRQdWJsaXNoRmlsZShmaWxlOiBURmlsZSwgZnJvbnRtYXR0ZXI/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFmaWxlLnBhdGguZW5kc1dpdGgoJy5tZCcpKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCBmbSA9IGZyb250bWF0dGVyID8/IG1hdHRlcihhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQuY2FjaGVkUmVhZChmaWxlKSB8fCAnJykuZGF0YTtcblxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wdWJsaXNoQmVoYXZpb3IgPT09ICdmcm9udG1hdHRlci1vbmx5Jykge1xuICAgICAgcmV0dXJuIGZtLnB1Ymxpc2ggPT09IHRydWU7XG4gICAgfVxuXG4gICAgLy8gJ2FsbC1ub3RlcycgYmVoYXZpb3I6IHB1Ymxpc2ggdW5sZXNzIGV4cGxpY2l0bHkgZmFsc2VcbiAgICByZXR1cm4gZm0ucHVibGlzaCAhPT0gZmFsc2U7XG4gIH1cblxuICBhc3luYyByZWZyZXNoQWxsU3RhdHVzZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoKGYpID0+IGYucGF0aC5lbmRzV2l0aCgnLm1kJykpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5jb21wdXRlRmlsZVN0YXR1cyhmaWxlKTtcbiAgICAgIGlmICh0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdKSB7XG4gICAgICAgIHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0uc3RhdHVzID0gc3RhdHVzO1xuICAgICAgfVxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlU3RhdHVzQmFyKCk7XG4gIH1cblxuICBnZXRQZW5kaW5nRmlsZXMoKTogeyBmaWxlOiBURmlsZTsgc3RhdHVzOiBQdWJsaXNoU3RhdHVzIH1bXSB7XG4gICAgY29uc3QgcmVzdWx0OiB7IGZpbGU6IFRGaWxlOyBzdGF0dXM6IFB1Ymxpc2hTdGF0dXMgfVtdID0gW107XG4gICAgZm9yIChjb25zdCBbcGF0aCwgc3RhdGVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucHVibGlzaFN0YXRlKSkge1xuICAgICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gJ2RyYWZ0JyB8fCBzdGF0ZS5zdGF0dXMgPT09ICdtb2RpZmllZCcpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMucGx1Z2luLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IGZpbGUsIHN0YXR1czogc3RhdGUuc3RhdHVzIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFsc28gaW5jbHVkZSBmaWxlcyB0aGF0IHNob3VsZCBiZSBwdWJsaXNoZWQgYnV0IGhhdmUgbm8gc3RhdGUgeWV0XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0RmlsZXMoKS5maWx0ZXIoKGYpID0+IGYucGF0aC5lbmRzV2l0aCgnLm1kJykpO1xuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgaWYgKCF0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMucGx1Z2luLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgcHVibGlzaEZsYWcgPSBjYWNoZWQ/LmZyb250bWF0dGVyPy5wdWJsaXNoO1xuICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MucHVibGlzaEJlaGF2aW9yID09PSAnZnJvbnRtYXR0ZXItb25seScgJiYgcHVibGlzaEZsYWcgPT09IHRydWUpIHtcbiAgICAgICAgICByZXN1bHQucHVzaCh7IGZpbGUsIHN0YXR1czogJ2RyYWZ0JyB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wdWJsaXNoQmVoYXZpb3IgPT09ICdhbGwtbm90ZXMnICYmIHB1Ymxpc2hGbGFnICE9PSBmYWxzZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZmlsZSwgc3RhdHVzOiAnZHJhZnQnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyA9PT09PT09PT09IFB1Ymxpc2hpbmcgYWN0aW9ucyA9PT09PT09PT09XG5cbiAgYXN5bmMgcHVibGlzaEZpbGUoZmlsZTogVEZpbGUpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWZpbGUucGF0aC5lbmRzV2l0aCgnLm1kJykpIHtcbiAgICAgIG5ldyBOb3RpY2UoJ09ubHkgbWFya2Rvd24gZmlsZXMgY2FuIGJlIHB1Ymxpc2hlZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHNlcnZlclVybCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybDtcbiAgICBjb25zdCBhcGlUb2tlbiA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuO1xuICAgIGlmICghc2VydmVyVXJsIHx8ICFhcGlUb2tlbikge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIGNvbmZpZ3VyZSBQdWJsaXNoIFNlcnZlciBVUkwgYW5kIEFQSSBUb2tlbiBpbiBzZXR0aW5ncycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByYXdDb250ZW50ID0gYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBtYXR0ZXIocmF3Q29udGVudCk7XG5cbiAgICAgIC8vIFByb2Nlc3MgYXR0YWNobWVudHMgYW5kIHJlcGxhY2UgbGlua3NcbiAgICAgIGNvbnN0IHsgY29udGVudDogcHJvY2Vzc2VkQ29udGVudCwgYXNzZXRzIH0gPSBhd2FpdCB0aGlzLnByb2Nlc3NBdHRhY2htZW50cyhwYXJzZWQuY29udGVudCwgZmlsZSk7XG5cbiAgICAgIC8vIFVwbG9hZCBhc3NldHMgaWYgYW55XG4gICAgICBpZiAoYXNzZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgdGhpcy51cGxvYWRQdWJsaXNoQXNzZXRzKGFzc2V0cyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIHB1Ymxpc2ggcGF5bG9hZCB3aXRoIGVuaGFuY2VkIGZyb250bWF0dGVyXG4gICAgICBjb25zdCBwdWJsaXNoUGF5bG9hZCA9IHtcbiAgICAgICAga2V5OiB0aGlzLmdldFB1Ymxpc2hLZXkoZmlsZSwgcGFyc2VkLmRhdGEpLFxuICAgICAgICBjb250ZW50OiBwcm9jZXNzZWRDb250ZW50LFxuICAgICAgICBmcm9udG1hdHRlcjogdGhpcy5idWlsZFB1Ymxpc2hGcm9udG1hdHRlcihwYXJzZWQuZGF0YSksXG4gICAgICAgIG1ldGE6IHtcbiAgICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgYmFzZW5hbWU6IGZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgaGVhZGluZ3M6IHRoaXMuZXh0cmFjdEhlYWRpbmdzKHJhd0NvbnRlbnQpLFxuICAgICAgICAgIG91dGdvaW5nTGlua3M6IHRoaXMuZXh0cmFjdE91dGdvaW5nTGlua3MocmF3Q29udGVudCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcGkoJy9hcGkvc3luYy9wdWJsaXNoJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHVibGlzaFBheWxvYWQpLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IHRoaXMucGx1Z2luLnN5bmNFbmdpbmUuY29tcHV0ZUxvY2FsSGFzaChyYXdDb250ZW50KTtcbiAgICAgIGNvbnN0IHJlbW90ZVVybCA9IGAke3NlcnZlclVybC5yZXBsYWNlKC9cXC8kLywgJycpfS9ibG9nLyR7cHVibGlzaFBheWxvYWQua2V5fWA7XG4gICAgICB0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdID0ge1xuICAgICAgICBzdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgICBsYXN0UHVibGlzaGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgcmVtb3RlVXJsLFxuICAgICAgICBsYXN0UHVibGlzaGVkSGFzaDogaGFzaCxcbiAgICAgIH07XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0dXNCYXIoKTtcblxuICAgICAgbmV3IE5vdGljZShgUHVibGlzaGVkICR7ZmlsZS5uYW1lfWApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tQdWJsaXNoRW5naW5lXSBQdWJsaXNoIGZhaWxlZDonLCBlcnIpO1xuICAgICAgbmV3IE5vdGljZShgUHVibGlzaCBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdW5wdWJsaXNoRmlsZShmaWxlOiBURmlsZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHNlcnZlclVybCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybDtcbiAgICBjb25zdCBhcGlUb2tlbiA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFwaVRva2VuO1xuICAgIGlmICghc2VydmVyVXJsIHx8ICFhcGlUb2tlbikge1xuICAgICAgbmV3IE5vdGljZSgnUGxlYXNlIGNvbmZpZ3VyZSBQdWJsaXNoIFNlcnZlciBVUkwgYW5kIEFQSSBUb2tlbiBpbiBzZXR0aW5ncycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBtYXR0ZXIoYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LnJlYWQoZmlsZSkpO1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5nZXRQdWJsaXNoS2V5KGZpbGUsIHBhcnNlZC5kYXRhKTtcblxuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBpKCcvYXBpL3N5bmMvdW5wdWJsaXNoJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBrZXksIHBhdGg6IGZpbGUucGF0aCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wdWJsaXNoU3RhdGVbZmlsZS5wYXRoXSkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdLnN0YXR1cyA9ICdkZWxldGVkJztcbiAgICAgICAgZGVsZXRlIHRoaXMucHVibGlzaFN0YXRlW2ZpbGUucGF0aF0ubGFzdFB1Ymxpc2hlZEF0O1xuICAgICAgICBkZWxldGUgdGhpcy5wdWJsaXNoU3RhdGVbZmlsZS5wYXRoXS5yZW1vdGVVcmw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdLmxhc3RQdWJsaXNoZWRIYXNoO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdHVzQmFyKCk7XG5cbiAgICAgIG5ldyBOb3RpY2UoYFVucHVibGlzaGVkICR7ZmlsZS5uYW1lfWApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tQdWJsaXNoRW5naW5lXSBVbnB1Ymxpc2ggZmFpbGVkOicsIGVycik7XG4gICAgICBuZXcgTm90aWNlKGBVbnB1Ymxpc2ggZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHB1Ymxpc2hBbGxDaGFuZ2VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLmdldFBlbmRpbmdGaWxlcygpO1xuICAgIGlmIChwZW5kaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbmV3IE5vdGljZSgnTm8gcGVuZGluZyBjaGFuZ2VzIHRvIHB1Ymxpc2gnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKGBQdWJsaXNoaW5nICR7cGVuZGluZy5sZW5ndGh9IGZpbGUocykuLi5gKTtcbiAgICBsZXQgc3VjY2VzcyA9IDA7XG4gICAgZm9yIChjb25zdCB7IGZpbGUgfSBvZiBwZW5kaW5nKSB7XG4gICAgICBjb25zdCBvayA9IGF3YWl0IHRoaXMucHVibGlzaEZpbGUoZmlsZSk7XG4gICAgICBpZiAob2spIHN1Y2Nlc3MrKztcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgdXBsb2FkIGluZGV4XG4gICAgYXdhaXQgdGhpcy5nZW5lcmF0ZUFuZFVwbG9hZEluZGV4KCk7XG5cbiAgICBuZXcgTm90aWNlKGBQdWJsaXNoZWQgJHtzdWNjZXNzfS8ke3BlbmRpbmcubGVuZ3RofSBmaWxlc2ApO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBBdHRhY2htZW50IHByb2Nlc3NpbmcgPT09PT09PT09PVxuXG4gIGFzeW5jIHByb2Nlc3NBdHRhY2htZW50cyhcbiAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgZmlsZTogVEZpbGVcbiAgKTogUHJvbWlzZTx7IGNvbnRlbnQ6IHN0cmluZzsgYXNzZXRzOiB7IGZpbGVuYW1lOiBzdHJpbmc7IGJhc2U2NDogc3RyaW5nOyBjb250ZW50VHlwZTogc3RyaW5nIH1bXSB9PiB7XG4gICAgY29uc3QgYXNzZXRzOiB7IGZpbGVuYW1lOiBzdHJpbmc7IGJhc2U2NDogc3RyaW5nOyBjb250ZW50VHlwZTogc3RyaW5nIH1bXSA9IFtdO1xuICAgIGxldCByZXN1bHQgPSBjb250ZW50O1xuXG4gICAgY29uc3Qgc2VydmVyVXJsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2VydmVyVXJsO1xuICAgIGNvbnN0IHByZWZpeCA9ICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5hdHRhY2htZW50c1BhdGhQcmVmaXggfHwgJ2F0dGFjaG1lbnRzJyk7XG5cbiAgICAvLyBQcm9jZXNzIG1hcmtkb3duIGltYWdlIGxpbmtzOiAhW2FsdF0ocGF0aClcbiAgICBjb25zdCBtZEltYWdlUmVnZXggPSAvIVxcWyhbXlxcXV0qKVxcXVxcKChbXildKylcXCkvZztcbiAgICBsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG4gICAgd2hpbGUgKChtYXRjaCA9IG1kSW1hZ2VSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgW2Z1bGxNYXRjaCwgYWx0LCByYXdQYXRoXSA9IG1hdGNoO1xuICAgICAgY29uc3QgYXNzZXRQYXRoID0gdGhpcy5yZXNvbHZlQXNzZXRQYXRoKHJhd1BhdGgsIGZpbGUpO1xuICAgICAgaWYgKCFhc3NldFBhdGgpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBhc3NldEZpbGUgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGFzc2V0UGF0aCk7XG4gICAgICBpZiAoIShhc3NldEZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBiYXNlNjQgPSB0aGlzLnBsdWdpbi5hcnJheUJ1ZmZlclRvQmFzZTY0KGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkQmluYXJ5KGFzc2V0RmlsZSkpO1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSB0aGlzLnBsdWdpbi5nZXRNaW1lVHlwZShhc3NldEZpbGUuZXh0ZW5zaW9uKTtcbiAgICAgIGFzc2V0cy5wdXNoKHsgZmlsZW5hbWU6IGFzc2V0RmlsZS5uYW1lLCBiYXNlNjQsIGNvbnRlbnRUeXBlIH0pO1xuXG4gICAgICBjb25zdCByZW1vdGVVcmwgPSBgJHtzZXJ2ZXJVcmwucmVwbGFjZSgvXFwvJC8sICcnKX0vYXBpL2Jsb2cvaW1hZ2VzLyR7YXNzZXRGaWxlLm5hbWV9YDtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGZ1bGxNYXRjaCwgYCFbJHthbHR9XSgke3JlbW90ZVVybH0pYCk7XG4gICAgfVxuXG4gICAgLy8gUHJvY2VzcyB3aWtpbGluayBpbWFnZXM6ICFbW2ZpbGVuYW1lLnBuZ11dXG4gICAgY29uc3Qgd2lraUltYWdlUmVnZXggPSAvIVxcW1xcWyhbXlxcXV0rKVxcXVxcXS9nO1xuICAgIHdoaWxlICgobWF0Y2ggPSB3aWtpSW1hZ2VSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgW2Z1bGxNYXRjaCwgcmF3UGF0aF0gPSBtYXRjaDtcbiAgICAgIGNvbnN0IGFzc2V0UGF0aCA9IHRoaXMucmVzb2x2ZUFzc2V0UGF0aChyYXdQYXRoLCBmaWxlKTtcbiAgICAgIGlmICghYXNzZXRQYXRoKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgYXNzZXRGaWxlID0gdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChhc3NldFBhdGgpO1xuICAgICAgaWYgKCEoYXNzZXRGaWxlIGluc3RhbmNlb2YgVEZpbGUpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgYmFzZTY0ID0gdGhpcy5wbHVnaW4uYXJyYXlCdWZmZXJUb0Jhc2U2NChhd2FpdCB0aGlzLnBsdWdpbi5hcHAudmF1bHQucmVhZEJpbmFyeShhc3NldEZpbGUpKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gdGhpcy5wbHVnaW4uZ2V0TWltZVR5cGUoYXNzZXRGaWxlLmV4dGVuc2lvbik7XG4gICAgICBhc3NldHMucHVzaCh7IGZpbGVuYW1lOiBhc3NldEZpbGUubmFtZSwgYmFzZTY0LCBjb250ZW50VHlwZSB9KTtcblxuICAgICAgY29uc3QgcmVtb3RlVXJsID0gYCR7c2VydmVyVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyl9L2FwaS9ibG9nL2ltYWdlcy8ke2Fzc2V0RmlsZS5uYW1lfWA7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShmdWxsTWF0Y2gsIGAhW10oJHtyZW1vdGVVcmx9KWApO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNvbnRlbnQ6IHJlc3VsdCwgYXNzZXRzIH07XG4gIH1cblxuICByZXNvbHZlQXNzZXRQYXRoKHJhd1BhdGg6IHN0cmluZywgc291cmNlRmlsZTogVEZpbGUpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAocmF3UGF0aC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybiBudWxsOyAvLyBBbHJlYWR5IHJlbW90ZVxuXG4gICAgY29uc3QgZm9sZGVyID0gc291cmNlRmlsZS5wYXJlbnQ/LnBhdGggfHwgJyc7XG5cbiAgICBpZiAocmF3UGF0aC5zdGFydHNXaXRoKCcuLycpIHx8IHJhd1BhdGguc3RhcnRzV2l0aCgnLi4vJykpIHtcbiAgICAgIHJldHVybiBub3JtYWxpemVQYXRoKGAke2ZvbGRlcn0vJHtyYXdQYXRofWApO1xuICAgIH1cblxuICAgIC8vIFRyeSBkaXJlY3QgcGF0aCBmaXJzdFxuICAgIGxldCBkaXJlY3QgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZVBhdGgocmF3UGF0aCkpO1xuICAgIGlmIChkaXJlY3QgaW5zdGFuY2VvZiBURmlsZSkge1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVBhdGgocmF3UGF0aCk7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHJlbGF0aXZlIHRvIHNvdXJjZSBmaWxlXG4gICAgcmV0dXJuIG5vcm1hbGl6ZVBhdGgoYCR7Zm9sZGVyfS8ke3Jhd1BhdGh9YCk7XG4gIH1cblxuICBhc3luYyB1cGxvYWRQdWJsaXNoQXNzZXRzKFxuICAgIGFzc2V0czogeyBmaWxlbmFtZTogc3RyaW5nOyBiYXNlNjQ6IHN0cmluZzsgY29udGVudFR5cGU6IHN0cmluZyB9W11cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKGFzc2V0cy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBUcnkgYmF0Y2ggdXBsb2FkIHRvIHB1Ymxpc2gtYXNzZXRzIGVuZHBvaW50IGZpcnN0XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hcGkoJy9hcGkvc3luYy9wdWJsaXNoLWFzc2V0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXNzZXRzIH0pLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUud2FybignW1B1Ymxpc2hFbmdpbmVdIEJhdGNoIGFzc2V0IHVwbG9hZCBmYWlsZWQsIGZhbGxpbmcgYmFjayB0byBpbmRpdmlkdWFsIHVwbG9hZHM6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgLy8gRmFsbGJhY2sgdG8gaW5kaXZpZHVhbCB1cGxvYWRzXG4gICAgICBmb3IgKGNvbnN0IGFzc2V0IG9mIGFzc2V0cykge1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi51cGxvYWRGaWxlKFxuICAgICAgICAgIGBpbWFnZXMvJHthc3NldC5maWxlbmFtZX1gLFxuICAgICAgICAgIGFzc2V0LmJhc2U2NCxcbiAgICAgICAgICBhc3NldC5jb250ZW50VHlwZSxcbiAgICAgICAgICAnYmFzZTY0J1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT0gRnJvbnRtYXR0ZXIgJiBtZXRhZGF0YSA9PT09PT09PT09XG5cbiAgZ2V0UHVibGlzaEtleShmaWxlOiBURmlsZSwgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBzdHJpbmcge1xuICAgIGlmIChmcm9udG1hdHRlci5wZXJtYWxpbmspIHtcbiAgICAgIHJldHVybiBmcm9udG1hdHRlci5wZXJtYWxpbms7XG4gICAgfVxuICAgIGlmIChmcm9udG1hdHRlci5zbHVnKSB7XG4gICAgICByZXR1cm4gZnJvbnRtYXR0ZXIuc2x1ZztcbiAgICB9XG4gICAgcmV0dXJuIGZpbGUuYmFzZW5hbWVcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvW15cXHctXS9nLCAnJyk7XG4gIH1cblxuICBidWlsZFB1Ymxpc2hGcm9udG1hdHRlcihmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgYW55Pik6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIGNvbnN0IHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG4gICAgY29uc3QgcGljayA9IChrZXk6IHN0cmluZywgdGFyZ2V0S2V5Pzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoZnJvbnRtYXR0ZXJba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlc3VsdFt0YXJnZXRLZXkgfHwga2V5XSA9IGZyb250bWF0dGVyW2tleV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHBpY2soJ3RpdGxlJyk7XG4gICAgcGljaygnc2x1ZycpO1xuICAgIHBpY2soJ3Blcm1hbGluaycpO1xuICAgIHBpY2soJ2Rlc2NyaXB0aW9uJyk7XG4gICAgcGljaygndGFncycpO1xuICAgIHBpY2soJ2RhdGUnKTtcbiAgICBwaWNrKCdjb3ZlcicpO1xuICAgIHBpY2soJ2hpZGUnKTtcbiAgICBwaWNrKCdjc3NjbGFzc2VzJyk7XG4gICAgcGljaygncHVibGlzaCcpO1xuICAgIHBpY2soJ3N1bW1hcnknKTtcbiAgICBwaWNrKCdjb3ZlckltYWdlJywgJ2NvdmVyJyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZXh0cmFjdEhlYWRpbmdzKGNvbnRlbnQ6IHN0cmluZyk6IHsgbGV2ZWw6IG51bWJlcjsgdGV4dDogc3RyaW5nIH1bXSB7XG4gICAgY29uc3QgaGVhZGluZ3M6IHsgbGV2ZWw6IG51bWJlcjsgdGV4dDogc3RyaW5nIH1bXSA9IFtdO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdCgnXFxuJyk7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL14oI3sxLDZ9KVxccysoLispJC8pO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGhlYWRpbmdzLnB1c2goeyBsZXZlbDogbWF0Y2hbMV0ubGVuZ3RoLCB0ZXh0OiBtYXRjaFsyXS50cmltKCkgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWFkaW5ncztcbiAgfVxuXG4gIGV4dHJhY3RPdXRnb2luZ0xpbmtzKGNvbnRlbnQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBsaW5rczogc3RyaW5nW10gPSBbXTtcbiAgICAvLyBNYXJrZG93biBsaW5rc1xuICAgIGNvbnN0IG1kTGlua1JlZ2V4ID0gL1xcWyhbXlxcXV0rKVxcXVxcKChbXildKylcXCkvZztcbiAgICBsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGw7XG4gICAgd2hpbGUgKChtYXRjaCA9IG1kTGlua1JlZ2V4LmV4ZWMoY29udGVudCkpICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB1cmwgPSBtYXRjaFsyXTtcbiAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSAmJiAhdXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBsaW5rcy5wdXNoKGRlY29kZVVSSUNvbXBvbmVudCh1cmwuc3BsaXQoJyMnKVswXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBXaWtpbGlua3NcbiAgICBjb25zdCB3aWtpTGlua1JlZ2V4ID0gL1xcW1xcWyhbXlxcXXxdKykoPzpcXHxbXlxcXV0rKT9cXF1cXF0vZztcbiAgICB3aGlsZSAoKG1hdGNoID0gd2lraUxpbmtSZWdleC5leGVjKGNvbnRlbnQpKSAhPT0gbnVsbCkge1xuICAgICAgbGlua3MucHVzaChtYXRjaFsxXSk7XG4gICAgfVxuICAgIHJldHVybiBbLi4ubmV3IFNldChsaW5rcyldO1xuICB9XG5cbiAgLy8gPT09PT09PT09PSBJbmRleCBnZW5lcmF0aW9uID09PT09PT09PT1cblxuICBhc3luYyBnZW5lcmF0ZUFuZFVwbG9hZEluZGV4KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlcnZlclVybCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNlcnZlclVybDtcbiAgICBjb25zdCBlbnRyaWVzOiBQdWJsaXNoSW5kZXhFbnRyeVtdID0gW107XG5cbiAgICAvLyBDb21wdXRlIGJhY2tsaW5rIGNvdW50c1xuICAgIGNvbnN0IGJhY2tsaW5rQ291bnRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgZm9yIChjb25zdCBbcGF0aCwgc3RhdGVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucHVibGlzaFN0YXRlKSkge1xuICAgICAgaWYgKHN0YXRlLnN0YXR1cyA9PT0gJ3B1Ymxpc2hlZCcgfHwgc3RhdGUuc3RhdHVzID09PSAnbW9kaWZpZWQnKSB7XG4gICAgICAgIGJhY2tsaW5rQ291bnRzW3BhdGhdID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmdldEZpbGVzKCkuZmlsdGVyKChmKSA9PiBmLnBhdGguZW5kc1dpdGgoJy5tZCcpKSkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnB1Ymxpc2hTdGF0ZVtmaWxlLnBhdGhdO1xuICAgICAgaWYgKCFzdGF0ZSB8fCAoc3RhdGUuc3RhdHVzICE9PSAncHVibGlzaGVkJyAmJiBzdGF0ZS5zdGF0dXMgIT09ICdtb2RpZmllZCcpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMucGx1Z2luLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgcGFyc2VkID0gbWF0dGVyKGNvbnRlbnQpO1xuICAgICAgY29uc3Qgb3V0Z29pbmcgPSB0aGlzLmV4dHJhY3RPdXRnb2luZ0xpbmtzKGNvbnRlbnQpO1xuXG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBwYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgIHN0YXR1czogc3RhdGUuc3RhdHVzLFxuICAgICAgICBmcm9udG1hdHRlcjogdGhpcy5idWlsZFB1Ymxpc2hGcm9udG1hdHRlcihwYXJzZWQuZGF0YSksXG4gICAgICAgIGhlYWRpbmdzOiB0aGlzLmV4dHJhY3RIZWFkaW5ncyhjb250ZW50KSxcbiAgICAgICAgb3V0Z29pbmdMaW5rczogb3V0Z29pbmcsXG4gICAgICAgIGJhY2tsaW5rczogYmFja2xpbmtDb3VudHNbZmlsZS5wYXRoXSB8fCAwLFxuICAgICAgICBsYXN0UHVibGlzaGVkQXQ6IHN0YXRlLmxhc3RQdWJsaXNoZWRBdCxcbiAgICAgICAgcmVtb3RlVXJsOiBzdGF0ZS5yZW1vdGVVcmwsXG4gICAgICB9KTtcblxuICAgICAgLy8gQ291bnQgYmFja2xpbmtzIHRvIG90aGVyIHB1Ymxpc2hlZCBmaWxlc1xuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIG91dGdvaW5nKSB7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5yZXNvbHZlTGlua1BhdGgobGluaywgZmlsZSk7XG4gICAgICAgIGlmIChyZXNvbHZlZCAmJiBiYWNrbGlua0NvdW50c1tyZXNvbHZlZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGJhY2tsaW5rQ291bnRzW3Jlc29sdmVkXSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVjb21wdXRlIHdpdGggYmFja2xpbmsgY291bnRzXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBlbnRyeS5iYWNrbGlua3MgPSBiYWNrbGlua0NvdW50c1tlbnRyeS5wYXRoXSB8fCAwO1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4OiBQdWJsaXNoSW5kZXggPSB7XG4gICAgICBnZW5lcmF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgc2l0ZVVybDogc2VydmVyVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyksXG4gICAgICBlbnRyaWVzLFxuICAgIH07XG5cbiAgICAvLyBTYXZlIGxvY2FsIGluZGV4XG4gICAgY29uc3QgaW5kZXhKc29uID0gSlNPTi5zdHJpbmdpZnkoaW5kZXgsIG51bGwsIDIpO1xuICAgIGF3YWl0IHRoaXMuc2F2ZUxvY2FsSW5kZXgoaW5kZXhKc29uKTtcblxuICAgIC8vIFVwbG9hZCB0byByZW1vdGVcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBpKCcvYXBpL3N5bmMvcHVibGlzaC1pbmRleCcsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5kZXggfSksXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignW1B1Ymxpc2hFbmdpbmVdIEZhaWxlZCB0byB1cGxvYWQgcHVibGlzaCBpbmRleDonLCBlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2F2ZUxvY2FsSW5kZXgoaW5kZXhKc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwbHVnaW5EaXIgPSB0aGlzLnBsdWdpbi5tYW5pZmVzdC5kaXI7XG4gICAgaWYgKHBsdWdpbkRpcikge1xuICAgICAgY29uc3QgaW5kZXhQYXRoID0gbm9ybWFsaXplUGF0aChgJHtwbHVnaW5EaXJ9L3B1Ymxpc2gtaW5kZXguanNvbmApO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uYXBwLnZhdWx0LmFkYXB0ZXIud3JpdGUoaW5kZXhQYXRoLCBpbmRleEpzb24pO1xuICAgICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignW1B1Ymxpc2hFbmdpbmVdIEZhaWxlZCB0byB3cml0ZSBsb2NhbCBpbmRleDonLCBlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUxpbmtQYXRoKGxpbms6IHN0cmluZywgc291cmNlRmlsZTogVEZpbGUpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBUcnkgZGlyZWN0IHBhdGhcbiAgICBjb25zdCBkaXJlY3QgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZVBhdGgobGluayArICcubWQnKSk7XG4gICAgaWYgKGRpcmVjdCBpbnN0YW5jZW9mIFRGaWxlKSByZXR1cm4gZGlyZWN0LnBhdGg7XG5cbiAgICAvLyBUcnkgcmVsYXRpdmUgdG8gc291cmNlXG4gICAgY29uc3QgZm9sZGVyID0gc291cmNlRmlsZS5wYXJlbnQ/LnBhdGggfHwgJyc7XG4gICAgY29uc3QgcmVsYXRpdmUgPSB0aGlzLnBsdWdpbi5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKG5vcm1hbGl6ZVBhdGgoYCR7Zm9sZGVyfS8ke2xpbmt9Lm1kYCkpO1xuICAgIGlmIChyZWxhdGl2ZSBpbnN0YW5jZW9mIFRGaWxlKSByZXR1cm4gcmVsYXRpdmUucGF0aDtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdXBkYXRlU3RhdHVzQmFyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wdWJsaXNoU3RhdHVzQmFyRWwpIHJldHVybjtcbiAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5nZXRQZW5kaW5nRmlsZXMoKTtcbiAgICBpZiAocGVuZGluZy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnB1Ymxpc2hTdGF0dXNCYXJFbC5zZXRUZXh0KGBQdWJsaXNoOiAke3BlbmRpbmcubGVuZ3RofSBwZW5kaW5nYCk7XG4gICAgICB0aGlzLnB1Ymxpc2hTdGF0dXNCYXJFbC5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVibGlzaFN0YXR1c0JhckVsLnNldFRleHQoJ1B1Ymxpc2g6IHVwIHRvIGRhdGUnKTtcbiAgICAgIHRoaXMucHVibGlzaFN0YXR1c0JhckVsLnNob3coKTtcbiAgICB9XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxrQ0FBQUEsVUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdNcEIsYUFBUyxLQUFLLFlBQVksS0FBSztBQUFBLEVBQ2pDO0FBQ0Y7OztBQ3RjQSxJQUFBQyxtQkFBeUU7QUFDekUseUJBQW1CO0FBNkJaLElBQU0sZ0JBQU4sTUFBb0I7QUFBQSxFQUt6QixZQUFZLFFBQThCO0FBSDFDLFNBQVEsZUFBaUQsQ0FBQztBQUMxRCxTQUFRLHFCQUF5QztBQUcvQyxTQUFLLFNBQVM7QUFBQSxFQUNoQjtBQUFBLEVBRUEsTUFBTSxZQUEyQjtBQUMvQixVQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sU0FBUztBQUN4QyxTQUFLLGdCQUFlLDZCQUFNLGtCQUFpQixDQUFDO0FBQUEsRUFDOUM7QUFBQSxFQUVBLE1BQU0sWUFBMkI7QUFDL0IsVUFBTSxPQUFRLE1BQU0sS0FBSyxPQUFPLFNBQVMsS0FBTSxDQUFDO0FBQ2hELFNBQUssZ0JBQWdCLEtBQUs7QUFDMUIsVUFBTSxLQUFLLE9BQU8sU0FBUyxJQUFJO0FBQUEsRUFDakM7QUFBQSxFQUVBLGVBQWUsSUFBdUI7QUFDcEMsU0FBSyxxQkFBcUI7QUFDMUIsU0FBSyxnQkFBZ0I7QUFBQSxFQUN2QjtBQUFBO0FBQUEsRUFJQSxnQkFBZ0IsTUFBNEM7QUFDMUQsV0FBTyxLQUFLLGFBQWEsSUFBSTtBQUFBLEVBQy9CO0FBQUEsRUFFQSxNQUFNLGtCQUFrQixNQUFxQztBQUMzRCxRQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFHLGFBQU87QUFFdkMsVUFBTSxVQUFVLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLElBQUk7QUFDckQsVUFBTSxhQUFTLG1CQUFBQyxTQUFPLE9BQU87QUFDN0IsVUFBTSxRQUFRLEtBQUssYUFBYSxLQUFLLElBQUk7QUFHekMsUUFBSSxPQUFPLEtBQUssWUFBWSxTQUFTLENBQUMsT0FBTztBQUMzQyxhQUFPO0FBQUEsSUFDVDtBQUdBLFVBQU0sZ0JBQWdCLE1BQU0sS0FBSyxrQkFBa0IsTUFBTSxPQUFPLElBQUk7QUFDcEUsUUFBSSxDQUFDLGVBQWU7QUFDbEIsY0FBTywrQkFBTyxZQUFXLGNBQWMsWUFBWTtBQUFBLElBQ3JEO0FBRUEsUUFBSSxDQUFDLFNBQVMsTUFBTSxXQUFXLFNBQVM7QUFDdEMsYUFBTztBQUFBLElBQ1Q7QUFHQSxVQUFNLGNBQWMsTUFBTSxLQUFLLE9BQU8sV0FBVyxpQkFBaUIsT0FBTztBQUN6RSxRQUFJLE1BQU0scUJBQXFCLE1BQU0sc0JBQXNCLGFBQWE7QUFDdEUsYUFBTztBQUFBLElBQ1Q7QUFFQSxXQUFPLE1BQU07QUFBQSxFQUNmO0FBQUEsRUFFQSxNQUFNLGtCQUFrQixNQUFhLGFBQXFEO0FBQ3hGLFFBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxLQUFLO0FBQUcsYUFBTztBQUV2QyxVQUFNLEtBQUssd0NBQWUsbUJBQUFBLFNBQU8sTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLFdBQVcsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUVyRixRQUFJLEtBQUssT0FBTyxTQUFTLG9CQUFvQixvQkFBb0I7QUFDL0QsYUFBTyxHQUFHLFlBQVk7QUFBQSxJQUN4QjtBQUdBLFdBQU8sR0FBRyxZQUFZO0FBQUEsRUFDeEI7QUFBQSxFQUVBLE1BQU0scUJBQW9DO0FBQ3hDLFVBQU0sUUFBUSxLQUFLLE9BQU8sSUFBSSxNQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssU0FBUyxLQUFLLENBQUM7QUFDbkYsZUFBVyxRQUFRLE9BQU87QUFDeEIsWUFBTSxTQUFTLE1BQU0sS0FBSyxrQkFBa0IsSUFBSTtBQUNoRCxVQUFJLEtBQUssYUFBYSxLQUFLLElBQUksR0FBRztBQUNoQyxhQUFLLGFBQWEsS0FBSyxJQUFJLEVBQUUsU0FBUztBQUFBLE1BQ3hDO0FBQUEsSUFDRjtBQUNBLFVBQU0sS0FBSyxVQUFVO0FBQ3JCLFNBQUssZ0JBQWdCO0FBQUEsRUFDdkI7QUFBQSxFQUVBLGtCQUE0RDtBQXJIOUQ7QUFzSEksVUFBTSxTQUFtRCxDQUFDO0FBQzFELGVBQVcsQ0FBQyxNQUFNLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxZQUFZLEdBQUc7QUFDN0QsVUFBSSxNQUFNLFdBQVcsV0FBVyxNQUFNLFdBQVcsWUFBWTtBQUMzRCxjQUFNLE9BQU8sS0FBSyxPQUFPLElBQUksTUFBTSxzQkFBc0IsSUFBSTtBQUM3RCxZQUFJLGdCQUFnQix3QkFBTztBQUN6QixpQkFBTyxLQUFLLEVBQUUsTUFBTSxRQUFRLE1BQU0sT0FBTyxDQUFDO0FBQUEsUUFDNUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVBLFVBQU0sUUFBUSxLQUFLLE9BQU8sSUFBSSxNQUFNLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssU0FBUyxLQUFLLENBQUM7QUFDbkYsZUFBVyxRQUFRLE9BQU87QUFDeEIsVUFBSSxDQUFDLEtBQUssYUFBYSxLQUFLLElBQUksR0FBRztBQUNqQyxjQUFNLFNBQVMsS0FBSyxPQUFPLElBQUksY0FBYyxhQUFhLElBQUk7QUFDOUQsY0FBTSxlQUFjLHNDQUFRLGdCQUFSLG1CQUFxQjtBQUN6QyxZQUFJLEtBQUssT0FBTyxTQUFTLG9CQUFvQixzQkFBc0IsZ0JBQWdCLE1BQU07QUFDdkYsaUJBQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxRQUFRLENBQUM7QUFBQSxRQUN2QyxXQUFXLEtBQUssT0FBTyxTQUFTLG9CQUFvQixlQUFlLGdCQUFnQixPQUFPO0FBQ3hGLGlCQUFPLEtBQUssRUFBRSxNQUFNLFFBQVEsUUFBUSxDQUFDO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUlBLE1BQU0sWUFBWSxNQUErQjtBQUMvQyxRQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsS0FBSyxHQUFHO0FBQzlCLFVBQUksd0JBQU8sc0NBQXNDO0FBQ2pELGFBQU87QUFBQSxJQUNUO0FBRUEsVUFBTSxZQUFZLEtBQUssT0FBTyxTQUFTO0FBQ3ZDLFVBQU0sV0FBVyxLQUFLLE9BQU8sU0FBUztBQUN0QyxRQUFJLENBQUMsYUFBYSxDQUFDLFVBQVU7QUFDM0IsVUFBSSx3QkFBTywrREFBK0Q7QUFDMUUsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJO0FBQ0YsWUFBTSxhQUFhLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLElBQUk7QUFDeEQsWUFBTSxhQUFTLG1CQUFBQSxTQUFPLFVBQVU7QUFHaEMsWUFBTSxFQUFFLFNBQVMsa0JBQWtCLE9BQU8sSUFBSSxNQUFNLEtBQUssbUJBQW1CLE9BQU8sU0FBUyxJQUFJO0FBR2hHLFVBQUksT0FBTyxTQUFTLEdBQUc7QUFDckIsY0FBTSxLQUFLLG9CQUFvQixNQUFNO0FBQUEsTUFDdkM7QUFHQSxZQUFNLGlCQUFpQjtBQUFBLFFBQ3JCLEtBQUssS0FBSyxjQUFjLE1BQU0sT0FBTyxJQUFJO0FBQUEsUUFDekMsU0FBUztBQUFBLFFBQ1QsYUFBYSxLQUFLLHdCQUF3QixPQUFPLElBQUk7QUFBQSxRQUNyRCxNQUFNO0FBQUEsVUFDSixNQUFNLEtBQUs7QUFBQSxVQUNYLFVBQVUsS0FBSztBQUFBLFVBQ2YsVUFBVSxLQUFLLGdCQUFnQixVQUFVO0FBQUEsVUFDekMsZUFBZSxLQUFLLHFCQUFxQixVQUFVO0FBQUEsUUFDckQ7QUFBQSxNQUNGO0FBRUEsWUFBTSxLQUFLLE9BQU8sSUFBSSxxQkFBcUI7QUFBQSxRQUN6QyxRQUFRO0FBQUEsUUFDUixNQUFNLEtBQUssVUFBVSxjQUFjO0FBQUEsTUFDckMsQ0FBQztBQUdELFlBQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxXQUFXLGlCQUFpQixVQUFVO0FBQ3JFLFlBQU0sWUFBWSxHQUFHLFVBQVUsUUFBUSxPQUFPLEVBQUUsVUFBVSxlQUFlO0FBQ3pFLFdBQUssYUFBYSxLQUFLLElBQUksSUFBSTtBQUFBLFFBQzdCLFFBQVE7QUFBQSxRQUNSLGlCQUFpQixJQUFJLEtBQUssRUFBRSxZQUFZO0FBQUEsUUFDeEM7QUFBQSxRQUNBLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQ0EsWUFBTSxLQUFLLFVBQVU7QUFDckIsV0FBSyxnQkFBZ0I7QUFFckIsVUFBSSx3QkFBTyxhQUFhLEtBQUssTUFBTTtBQUNuQyxhQUFPO0FBQUEsSUFDVCxTQUFTLEtBQVA7QUFDQSxjQUFRLE1BQU0sbUNBQW1DLEdBQUc7QUFDcEQsVUFBSSx3QkFBTyxtQkFBbUIsSUFBSSxTQUFTO0FBQzNDLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxjQUFjLE1BQStCO0FBQ2pELFVBQU0sWUFBWSxLQUFLLE9BQU8sU0FBUztBQUN2QyxVQUFNLFdBQVcsS0FBSyxPQUFPLFNBQVM7QUFDdEMsUUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVO0FBQzNCLFVBQUksd0JBQU8sK0RBQStEO0FBQzFFLGFBQU87QUFBQSxJQUNUO0FBRUEsUUFBSTtBQUNGLFlBQU0sYUFBUyxtQkFBQUEsU0FBTyxNQUFNLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDNUQsWUFBTSxNQUFNLEtBQUssY0FBYyxNQUFNLE9BQU8sSUFBSTtBQUVoRCxZQUFNLEtBQUssT0FBTyxJQUFJLHVCQUF1QjtBQUFBLFFBQzNDLFFBQVE7QUFBQSxRQUNSLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FBSyxNQUFNLEtBQUssS0FBSyxDQUFDO0FBQUEsTUFDL0MsQ0FBQztBQUVELFVBQUksS0FBSyxhQUFhLEtBQUssSUFBSSxHQUFHO0FBQ2hDLGFBQUssYUFBYSxLQUFLLElBQUksRUFBRSxTQUFTO0FBQ3RDLGVBQU8sS0FBSyxhQUFhLEtBQUssSUFBSSxFQUFFO0FBQ3BDLGVBQU8sS0FBSyxhQUFhLEtBQUssSUFBSSxFQUFFO0FBQ3BDLGVBQU8sS0FBSyxhQUFhLEtBQUssSUFBSSxFQUFFO0FBQUEsTUFDdEM7QUFDQSxZQUFNLEtBQUssVUFBVTtBQUNyQixXQUFLLGdCQUFnQjtBQUVyQixVQUFJLHdCQUFPLGVBQWUsS0FBSyxNQUFNO0FBQ3JDLGFBQU87QUFBQSxJQUNULFNBQVMsS0FBUDtBQUNBLGNBQVEsTUFBTSxxQ0FBcUMsR0FBRztBQUN0RCxVQUFJLHdCQUFPLHFCQUFxQixJQUFJLFNBQVM7QUFDN0MsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLG9CQUFtQztBQUN2QyxVQUFNLFVBQVUsS0FBSyxnQkFBZ0I7QUFDckMsUUFBSSxRQUFRLFdBQVcsR0FBRztBQUN4QixVQUFJLHdCQUFPLCtCQUErQjtBQUMxQztBQUFBLElBQ0Y7QUFFQSxRQUFJLHdCQUFPLGNBQWMsUUFBUSxtQkFBbUI7QUFDcEQsUUFBSSxVQUFVO0FBQ2QsZUFBVyxFQUFFLEtBQUssS0FBSyxTQUFTO0FBQzlCLFlBQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxJQUFJO0FBQ3RDLFVBQUk7QUFBSTtBQUFBLElBQ1Y7QUFHQSxVQUFNLEtBQUssdUJBQXVCO0FBRWxDLFFBQUksd0JBQU8sYUFBYSxXQUFXLFFBQVEsY0FBYztBQUFBLEVBQzNEO0FBQUE7QUFBQSxFQUlBLE1BQU0sbUJBQ0osU0FDQSxNQUNtRztBQUNuRyxVQUFNLFNBQXNFLENBQUM7QUFDN0UsUUFBSSxTQUFTO0FBRWIsVUFBTSxZQUFZLEtBQUssT0FBTyxTQUFTO0FBQ3ZDLFVBQU0sU0FBVSxLQUFLLE9BQU8sU0FBUyx5QkFBeUI7QUFHOUQsVUFBTSxlQUFlO0FBQ3JCLFFBQUk7QUFDSixZQUFRLFFBQVEsYUFBYSxLQUFLLE9BQU8sT0FBTyxNQUFNO0FBQ3BELFlBQU0sQ0FBQyxXQUFXLEtBQUssT0FBTyxJQUFJO0FBQ2xDLFlBQU0sWUFBWSxLQUFLLGlCQUFpQixTQUFTLElBQUk7QUFDckQsVUFBSSxDQUFDO0FBQVc7QUFFaEIsWUFBTSxZQUFZLEtBQUssT0FBTyxJQUFJLE1BQU0sc0JBQXNCLFNBQVM7QUFDdkUsVUFBSSxFQUFFLHFCQUFxQjtBQUFRO0FBRW5DLFlBQU0sU0FBUyxLQUFLLE9BQU8sb0JBQW9CLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxXQUFXLFNBQVMsQ0FBQztBQUNoRyxZQUFNLGNBQWMsS0FBSyxPQUFPLFlBQVksVUFBVSxTQUFTO0FBQy9ELGFBQU8sS0FBSyxFQUFFLFVBQVUsVUFBVSxNQUFNLFFBQVEsWUFBWSxDQUFDO0FBRTdELFlBQU0sWUFBWSxHQUFHLFVBQVUsUUFBUSxPQUFPLEVBQUUscUJBQXFCLFVBQVU7QUFDL0UsZUFBUyxPQUFPLFFBQVEsV0FBVyxLQUFLLFFBQVEsWUFBWTtBQUFBLElBQzlEO0FBR0EsVUFBTSxpQkFBaUI7QUFDdkIsWUFBUSxRQUFRLGVBQWUsS0FBSyxPQUFPLE9BQU8sTUFBTTtBQUN0RCxZQUFNLENBQUMsV0FBVyxPQUFPLElBQUk7QUFDN0IsWUFBTSxZQUFZLEtBQUssaUJBQWlCLFNBQVMsSUFBSTtBQUNyRCxVQUFJLENBQUM7QUFBVztBQUVoQixZQUFNLFlBQVksS0FBSyxPQUFPLElBQUksTUFBTSxzQkFBc0IsU0FBUztBQUN2RSxVQUFJLEVBQUUscUJBQXFCO0FBQVE7QUFFbkMsWUFBTSxTQUFTLEtBQUssT0FBTyxvQkFBb0IsTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLFdBQVcsU0FBUyxDQUFDO0FBQ2hHLFlBQU0sY0FBYyxLQUFLLE9BQU8sWUFBWSxVQUFVLFNBQVM7QUFDL0QsYUFBTyxLQUFLLEVBQUUsVUFBVSxVQUFVLE1BQU0sUUFBUSxZQUFZLENBQUM7QUFFN0QsWUFBTSxZQUFZLEdBQUcsVUFBVSxRQUFRLE9BQU8sRUFBRSxxQkFBcUIsVUFBVTtBQUMvRSxlQUFTLE9BQU8sUUFBUSxXQUFXLE9BQU8sWUFBWTtBQUFBLElBQ3hEO0FBRUEsV0FBTyxFQUFFLFNBQVMsUUFBUSxPQUFPO0FBQUEsRUFDbkM7QUFBQSxFQUVBLGlCQUFpQixTQUFpQixZQUFrQztBQTVUdEU7QUE2VEksUUFBSSxRQUFRLFdBQVcsTUFBTTtBQUFHLGFBQU87QUFFdkMsVUFBTSxXQUFTLGdCQUFXLFdBQVgsbUJBQW1CLFNBQVE7QUFFMUMsUUFBSSxRQUFRLFdBQVcsSUFBSSxLQUFLLFFBQVEsV0FBVyxLQUFLLEdBQUc7QUFDekQsaUJBQU8sZ0NBQWMsR0FBRyxVQUFVLFNBQVM7QUFBQSxJQUM3QztBQUdBLFFBQUksU0FBUyxLQUFLLE9BQU8sSUFBSSxNQUFNLDBCQUFzQixnQ0FBYyxPQUFPLENBQUM7QUFDL0UsUUFBSSxrQkFBa0Isd0JBQU87QUFDM0IsaUJBQU8sZ0NBQWMsT0FBTztBQUFBLElBQzlCO0FBR0EsZUFBTyxnQ0FBYyxHQUFHLFVBQVUsU0FBUztBQUFBLEVBQzdDO0FBQUEsRUFFQSxNQUFNLG9CQUNKLFFBQ2U7QUFDZixRQUFJLE9BQU8sV0FBVztBQUFHO0FBRXpCLFFBQUk7QUFFRixZQUFNLEtBQUssT0FBTyxJQUFJLDRCQUE0QjtBQUFBLFFBQ2hELFFBQVE7QUFBQSxRQUNSLE1BQU0sS0FBSyxVQUFVLEVBQUUsT0FBTyxDQUFDO0FBQUEsTUFDakMsQ0FBQztBQUFBLElBQ0gsU0FBUyxLQUFQO0FBQ0EsY0FBUSxLQUFLLGtGQUFrRixJQUFJLE9BQU87QUFFMUcsaUJBQVcsU0FBUyxRQUFRO0FBQzFCLGNBQU0sS0FBSyxPQUFPO0FBQUEsVUFDaEIsVUFBVSxNQUFNO0FBQUEsVUFDaEIsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ047QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUlBLGNBQWMsTUFBYSxhQUEwQztBQUNuRSxRQUFJLFlBQVksV0FBVztBQUN6QixhQUFPLFlBQVk7QUFBQSxJQUNyQjtBQUNBLFFBQUksWUFBWSxNQUFNO0FBQ3BCLGFBQU8sWUFBWTtBQUFBLElBQ3JCO0FBQ0EsV0FBTyxLQUFLLFNBQ1QsWUFBWSxFQUNaLFFBQVEsUUFBUSxHQUFHLEVBQ25CLFFBQVEsV0FBVyxFQUFFO0FBQUEsRUFDMUI7QUFBQSxFQUVBLHdCQUF3QixhQUF1RDtBQUM3RSxVQUFNLFNBQThCLENBQUM7QUFFckMsVUFBTSxPQUFPLENBQUMsS0FBYSxjQUF1QjtBQUNoRCxVQUFJLFlBQVksR0FBRyxNQUFNLFFBQVc7QUFDbEMsZUFBTyxhQUFhLEdBQUcsSUFBSSxZQUFZLEdBQUc7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFFQSxTQUFLLE9BQU87QUFDWixTQUFLLE1BQU07QUFDWCxTQUFLLFdBQVc7QUFDaEIsU0FBSyxhQUFhO0FBQ2xCLFNBQUssTUFBTTtBQUNYLFNBQUssTUFBTTtBQUNYLFNBQUssT0FBTztBQUNaLFNBQUssTUFBTTtBQUNYLFNBQUssWUFBWTtBQUNqQixTQUFLLFNBQVM7QUFDZCxTQUFLLFNBQVM7QUFDZCxTQUFLLGNBQWMsT0FBTztBQUUxQixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsZ0JBQWdCLFNBQW9EO0FBQ2xFLFVBQU0sV0FBOEMsQ0FBQztBQUNyRCxVQUFNLFFBQVEsUUFBUSxNQUFNLElBQUk7QUFDaEMsZUFBVyxRQUFRLE9BQU87QUFDeEIsWUFBTSxRQUFRLEtBQUssTUFBTSxtQkFBbUI7QUFDNUMsVUFBSSxPQUFPO0FBQ1QsaUJBQVMsS0FBSyxFQUFFLE9BQU8sTUFBTSxDQUFDLEVBQUUsUUFBUSxNQUFNLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQUEsTUFDakU7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLHFCQUFxQixTQUEyQjtBQUM5QyxVQUFNLFFBQWtCLENBQUM7QUFFekIsVUFBTSxjQUFjO0FBQ3BCLFFBQUk7QUFDSixZQUFRLFFBQVEsWUFBWSxLQUFLLE9BQU8sT0FBTyxNQUFNO0FBQ25ELFlBQU0sTUFBTSxNQUFNLENBQUM7QUFDbkIsVUFBSSxDQUFDLElBQUksV0FBVyxNQUFNLEtBQUssQ0FBQyxJQUFJLFdBQVcsR0FBRyxHQUFHO0FBQ25ELGNBQU0sS0FBSyxtQkFBbUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUFBLE1BQ2xEO0FBQUEsSUFDRjtBQUVBLFVBQU0sZ0JBQWdCO0FBQ3RCLFlBQVEsUUFBUSxjQUFjLEtBQUssT0FBTyxPQUFPLE1BQU07QUFDckQsWUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQUEsSUFDckI7QUFDQSxXQUFPLENBQUMsR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDO0FBQUEsRUFDM0I7QUFBQTtBQUFBLEVBSUEsTUFBTSx5QkFBd0M7QUFDNUMsVUFBTSxZQUFZLEtBQUssT0FBTyxTQUFTO0FBQ3ZDLFVBQU0sVUFBK0IsQ0FBQztBQUd0QyxVQUFNLGlCQUF5QyxDQUFDO0FBQ2hELGVBQVcsQ0FBQyxNQUFNLEtBQUssS0FBSyxPQUFPLFFBQVEsS0FBSyxZQUFZLEdBQUc7QUFDN0QsVUFBSSxNQUFNLFdBQVcsZUFBZSxNQUFNLFdBQVcsWUFBWTtBQUMvRCx1QkFBZSxJQUFJLElBQUk7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFFQSxlQUFXLFFBQVEsS0FBSyxPQUFPLElBQUksTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLFNBQVMsS0FBSyxDQUFDLEdBQUc7QUFDekYsWUFBTSxRQUFRLEtBQUssYUFBYSxLQUFLLElBQUk7QUFDekMsVUFBSSxDQUFDLFNBQVUsTUFBTSxXQUFXLGVBQWUsTUFBTSxXQUFXO0FBQWE7QUFFN0UsWUFBTSxVQUFVLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLLElBQUk7QUFDckQsWUFBTSxhQUFTLG1CQUFBQSxTQUFPLE9BQU87QUFDN0IsWUFBTSxXQUFXLEtBQUsscUJBQXFCLE9BQU87QUFFbEQsY0FBUSxLQUFLO0FBQUEsUUFDWCxNQUFNLEtBQUs7QUFBQSxRQUNYLFFBQVEsTUFBTTtBQUFBLFFBQ2QsYUFBYSxLQUFLLHdCQUF3QixPQUFPLElBQUk7QUFBQSxRQUNyRCxVQUFVLEtBQUssZ0JBQWdCLE9BQU87QUFBQSxRQUN0QyxlQUFlO0FBQUEsUUFDZixXQUFXLGVBQWUsS0FBSyxJQUFJLEtBQUs7QUFBQSxRQUN4QyxpQkFBaUIsTUFBTTtBQUFBLFFBQ3ZCLFdBQVcsTUFBTTtBQUFBLE1BQ25CLENBQUM7QUFHRCxpQkFBVyxRQUFRLFVBQVU7QUFDM0IsY0FBTSxXQUFXLEtBQUssZ0JBQWdCLE1BQU0sSUFBSTtBQUNoRCxZQUFJLFlBQVksZUFBZSxRQUFRLE1BQU0sUUFBVztBQUN0RCx5QkFBZSxRQUFRO0FBQUEsUUFDekI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLGVBQVcsU0FBUyxTQUFTO0FBQzNCLFlBQU0sWUFBWSxlQUFlLE1BQU0sSUFBSSxLQUFLO0FBQUEsSUFDbEQ7QUFFQSxVQUFNLFFBQXNCO0FBQUEsTUFDMUIsYUFBYSxJQUFJLEtBQUssRUFBRSxZQUFZO0FBQUEsTUFDcEMsU0FBUyxVQUFVLFFBQVEsT0FBTyxFQUFFO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBR0EsVUFBTSxZQUFZLEtBQUssVUFBVSxPQUFPLE1BQU0sQ0FBQztBQUMvQyxVQUFNLEtBQUssZUFBZSxTQUFTO0FBR25DLFFBQUk7QUFDRixZQUFNLEtBQUssT0FBTyxJQUFJLDJCQUEyQjtBQUFBLFFBQy9DLFFBQVE7QUFBQSxRQUNSLE1BQU0sS0FBSyxVQUFVLEVBQUUsTUFBTSxDQUFDO0FBQUEsTUFDaEMsQ0FBQztBQUFBLElBQ0gsU0FBUyxLQUFQO0FBQ0EsY0FBUSxNQUFNLG1EQUFtRCxJQUFJLE9BQU87QUFBQSxJQUM5RTtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0sZUFBZSxXQUFrQztBQUNyRCxVQUFNLFlBQVksS0FBSyxPQUFPLFNBQVM7QUFDdkMsUUFBSSxXQUFXO0FBQ2IsWUFBTSxnQkFBWSxnQ0FBYyxHQUFHLDhCQUE4QjtBQUNqRSxVQUFJO0FBQ0YsY0FBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLFFBQVEsTUFBTSxXQUFXLFNBQVM7QUFBQSxNQUNoRSxTQUFTLEtBQVA7QUFDQSxnQkFBUSxNQUFNLGdEQUFnRCxJQUFJLE9BQU87QUFBQSxNQUMzRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxnQkFBZ0IsTUFBYyxZQUFrQztBQS9mbEU7QUFpZ0JJLFVBQU0sU0FBUyxLQUFLLE9BQU8sSUFBSSxNQUFNLDBCQUFzQixnQ0FBYyxPQUFPLEtBQUssQ0FBQztBQUN0RixRQUFJLGtCQUFrQjtBQUFPLGFBQU8sT0FBTztBQUczQyxVQUFNLFdBQVMsZ0JBQVcsV0FBWCxtQkFBbUIsU0FBUTtBQUMxQyxVQUFNLFdBQVcsS0FBSyxPQUFPLElBQUksTUFBTSwwQkFBc0IsZ0NBQWMsR0FBRyxVQUFVLFNBQVMsQ0FBQztBQUNsRyxRQUFJLG9CQUFvQjtBQUFPLGFBQU8sU0FBUztBQUUvQyxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsa0JBQXdCO0FBQ3RCLFFBQUksQ0FBQyxLQUFLO0FBQW9CO0FBQzlCLFVBQU0sVUFBVSxLQUFLLGdCQUFnQjtBQUNyQyxRQUFJLFFBQVEsU0FBUyxHQUFHO0FBQ3RCLFdBQUssbUJBQW1CLFFBQVEsWUFBWSxRQUFRLGdCQUFnQjtBQUNwRSxXQUFLLG1CQUFtQixLQUFLO0FBQUEsSUFDL0IsT0FBTztBQUNMLFdBQUssbUJBQW1CLFFBQVEscUJBQXFCO0FBQ3JELFdBQUssbUJBQW1CLEtBQUs7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFDRjs7O0FMMWZBLElBQXFCLHVCQUFyQixjQUFrRCx3QkFBTztBQUFBLEVBTXZELE1BQU0sU0FBUztBQUNiLFVBQU0sS0FBSyxhQUFhO0FBR3hCLFNBQUssYUFBYSxJQUFJLFdBQVcsSUFBSTtBQUNyQyxVQUFNLEtBQUssV0FBVyxjQUFjO0FBR3BDLFNBQUssZ0JBQWdCLElBQUksY0FBYyxJQUFJO0FBQzNDLFVBQU0sS0FBSyxjQUFjLFVBQVU7QUFDbkMsVUFBTSxLQUFLLGNBQWMsbUJBQW1CO0FBRzVDLFNBQUssWUFBWSxJQUFJLGNBQWMsTUFBTTtBQUFBLE1BQ3ZDLGlCQUFpQixNQUFNLEtBQUssa0JBQWtCO0FBQUEsTUFDOUMsZUFBZSxNQUFNLEtBQUssZ0JBQWdCO0FBQUEsSUFDNUMsQ0FBQztBQUdELFNBQUssV0FBVyxpQkFBaUIsQ0FBQyxVQUFVO0FBQzFDLFdBQUssVUFBVSxZQUFZLEtBQUs7QUFBQSxJQUNsQztBQUVBLFNBQUssV0FBVyxtQkFBbUIsQ0FBQyxjQUFjO0FBQ2hELFdBQUssVUFBVSxnQkFBZ0IsU0FBUztBQUN4QyxVQUFJLHdCQUFPLGdCQUFNLFVBQVUsNkRBQTZEO0FBQ3hGLFdBQUssa0JBQWtCO0FBQUEsSUFDekI7QUFFQSxTQUFLLFdBQVcsaUJBQWlCLE1BQU07QUFDckMsWUFBTSxRQUFRLEtBQUssV0FBVztBQUM5QixVQUFJLE1BQU0sY0FBYyxHQUFHO0FBQ3pCLFlBQUksd0JBQU8seUJBQW9CLE1BQU0sMEJBQTBCO0FBQUEsTUFDakU7QUFBQSxJQUNGO0FBRUEsU0FBSyxXQUFXLGNBQWMsQ0FBQyxVQUFVO0FBQ3ZDLFVBQUksd0JBQU8sc0JBQWlCLE9BQU87QUFBQSxJQUNyQztBQUdBLFNBQUssY0FBYyxJQUFJLHlCQUF5QixLQUFLLEtBQUssSUFBSSxDQUFDO0FBRy9ELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNLEtBQUssZ0JBQWdCO0FBQUEsSUFDdkMsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sVUFBVSxNQUFNLEtBQUssYUFBYTtBQUFBLElBQ3BDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTSxLQUFLLGVBQWU7QUFBQSxJQUN0QyxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsQ0FBQyxXQUFXLEtBQUssNkJBQTZCLE1BQU07QUFBQSxJQUN0RSxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU0sS0FBSyx1QkFBdUI7QUFBQSxJQUM5QyxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixnQkFBZ0IsTUFBTSxLQUFLLGdCQUFnQjtBQUFBLElBQzdDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTSxLQUFLLGtCQUFrQjtBQUFBLElBQ3pDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixNQUFNLEtBQUssbUJBQW1CO0FBQUEsSUFDaEQsQ0FBQztBQUVELFNBQUssV0FBVztBQUFBLE1BQ2QsSUFBSTtBQUFBLE1BQ0osTUFBTTtBQUFBLE1BQ04sZ0JBQWdCLE1BQU0sS0FBSyxxQkFBcUI7QUFBQSxJQUNsRCxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU0sS0FBSyxrQkFBa0I7QUFBQSxJQUN6QyxDQUFDO0FBRUQsU0FBSyxXQUFXO0FBQUEsTUFDZCxJQUFJO0FBQUEsTUFDSixNQUFNO0FBQUEsTUFDTixVQUFVLE1BQU07QUFFZCxhQUFLLFVBQVUsaUJBQWlCLEVBQUU7QUFBQSxNQUNwQztBQUFBLElBQ0YsQ0FBQztBQUdELFNBQUs7QUFBQSxNQUNILEtBQUssSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLFNBQVM7QUFDcEMsWUFBSSxnQkFBZ0IsMEJBQVMsS0FBSyxTQUFTLFVBQVU7QUFDbkQsZUFBSyxXQUFXLGlCQUFpQixJQUFJO0FBQUEsUUFDdkM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBR0EsU0FBSztBQUFBLE1BQ0gsS0FBSyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUztBQUNwQyxZQUFJLGdCQUFnQiwwQkFBUyxLQUFLLFNBQVMsaUJBQWlCO0FBQzFELGNBQUksS0FBSyxLQUFLLFNBQVMsS0FBSyxHQUFHO0FBQzdCLGlCQUFLLHNCQUFzQixJQUFJO0FBQUEsVUFDakM7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUdBLFNBQUs7QUFBQSxNQUNILEtBQUssSUFBSSxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sU0FBUztBQUNqRCxZQUFJLEVBQUUsZ0JBQWdCO0FBQVE7QUFDOUIsY0FBTSxRQUFRLEtBQUssY0FBYyxnQkFBZ0IsS0FBSyxJQUFJO0FBQzFELFlBQUksQ0FBQyxTQUFTLE1BQU0sV0FBVyxTQUFTO0FBQ3RDLGVBQUssUUFBUSxDQUFDLFNBQVM7QUFDckIsaUJBQUssU0FBUyxjQUFjLEVBQUUsUUFBUSxjQUFjLEVBQUUsUUFBUSxNQUFNO0FBQ2xFLG1CQUFLLGNBQWMsWUFBWSxJQUFJO0FBQUEsWUFDckMsQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUFBLFFBQ0gsT0FBTztBQUNMLGVBQUssUUFBUSxDQUFDLFNBQVM7QUFDckIsaUJBQUssU0FBUyxnQkFBZ0IsRUFBRSxRQUFRLFVBQVUsRUFBRSxRQUFRLE1BQU07QUFDaEUsbUJBQUssY0FBYyxjQUFjLElBQUk7QUFBQSxZQUN2QyxDQUFDO0FBQUEsVUFDSCxDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxTQUFLLGNBQWMsZ0JBQWdCLDZCQUE2QixNQUFNO0FBQ3BFLFdBQUssZ0JBQWdCO0FBQUEsSUFDdkIsQ0FBQztBQUdELFFBQUksS0FBSyxTQUFTLFVBQVU7QUFDMUIsV0FBSyxXQUFXLGNBQWM7QUFBQSxJQUNoQztBQUdBLFFBQUksS0FBSyxTQUFTLGVBQWU7QUFFL0IsaUJBQVcsTUFBTTtBQUNmLGFBQUssZ0JBQWdCO0FBQUEsTUFDdkIsR0FBRyxHQUFJO0FBQUEsSUFDVDtBQUdBLFFBQUksS0FBSyxTQUFTLGlCQUFpQjtBQUVqQyxpQkFBVyxNQUFNO0FBQ2YsYUFBSywyQkFBMkI7QUFBQSxNQUNsQyxHQUFHLEdBQUk7QUFBQSxJQUNUO0FBRUEsWUFBUSxJQUFJLCtCQUErQjtBQUFBLEVBQzdDO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDbkIsU0FBSyxXQUFXLE9BQU87QUFBQSxNQUNyQjtBQUFBLFFBQ0UsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFFBQ1YsaUJBQWlCO0FBQUEsUUFDakIsY0FBYztBQUFBLFFBQ2QsZ0JBQWdCLENBQUMsY0FBYyxRQUFRO0FBQUEsUUFDdkMsY0FBYyxDQUFDO0FBQUEsUUFDZixpQkFBaUIsQ0FBQztBQUFBLFFBQ2xCLGtCQUFrQjtBQUFBLFFBQ2xCLGtCQUFrQjtBQUFBLFFBQ2xCLGVBQWU7QUFBQSxRQUNmLGVBQWU7QUFBQSxRQUNmLGlCQUFpQjtBQUFBLFFBQ2pCLGtCQUFrQjtBQUFBLFFBQ2xCLGlCQUFpQjtBQUFBLFFBQ2pCLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsTUFDQSxNQUFNLEtBQUssU0FBUztBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ25CLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUdqQyxRQUFJLEtBQUssWUFBWTtBQUNuQixVQUFJLEtBQUssU0FBUyxVQUFVO0FBQzFCLGFBQUssV0FBVyxjQUFjO0FBQUEsTUFDaEMsT0FBTztBQUNMLGFBQUssV0FBVyxhQUFhO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJQSxNQUFNLGtCQUFpQztBQUNyQyxRQUFJLENBQUMsS0FBSyxTQUFTLGFBQWEsQ0FBQyxLQUFLLFNBQVMsVUFBVTtBQUN2RCxVQUFJLHdCQUFPLHVEQUF1RDtBQUNsRTtBQUFBLElBQ0Y7QUFHQSxRQUFJO0FBQ0YsWUFBTSxLQUFLLElBQUksZ0JBQWdCO0FBQUEsSUFDakMsU0FBUyxPQUFQO0FBQ0EsVUFBSSx3QkFBTyxzQkFBc0IsTUFBTSxTQUFTO0FBQ2hEO0FBQUEsSUFDRjtBQUVBLFFBQUksd0JBQU8sdUJBQXVCO0FBQ2xDLFVBQU0sS0FBSyxXQUFXLFNBQVM7QUFBQSxFQUNqQztBQUFBLEVBRUEsb0JBQTBCO0FBQ3hCLFVBQU0sWUFBWSxLQUFLLFdBQVc7QUFDbEMsUUFBSSxVQUFVLFdBQVcsR0FBRztBQUMxQixVQUFJLHdCQUFPLHlCQUF5QjtBQUNwQztBQUFBLElBQ0Y7QUFFQSxRQUFJO0FBQUEsTUFDRixLQUFLO0FBQUEsTUFDTDtBQUFBLE1BQ0EsT0FBTyxVQUFVLGVBQWU7QUFDOUIsY0FBTSxLQUFLLFdBQVcsZ0JBQWdCLFVBQVUsVUFBVTtBQUMxRCxhQUFLLFVBQVUsZ0JBQWdCLEtBQUssV0FBVyxTQUFTO0FBQUEsTUFDMUQ7QUFBQSxNQUNBLE9BQU8sZUFBZTtBQUNwQixjQUFNLEtBQUssV0FBVyxvQkFBb0IsVUFBVTtBQUNwRCxhQUFLLFVBQVUsZ0JBQWdCLEtBQUssV0FBVyxTQUFTO0FBQUEsTUFDMUQ7QUFBQSxJQUNGLEVBQUUsS0FBSztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBSUEsTUFBTSxJQUFhLFVBQWtCQyxVQUFtQztBQUN0RSxVQUFNLEVBQUUsV0FBVyxTQUFTLElBQUksS0FBSztBQUVyQyxRQUFJLENBQUMsYUFBYSxDQUFDLFVBQVU7QUFDM0IsWUFBTSxJQUFJLE1BQU0sZUFBZSxhQUFhLDJCQUEyQixXQUFXLFFBQVEsdUJBQXVCO0FBQUEsSUFDbkg7QUFFQSxVQUFNLE1BQU0sVUFBVSxRQUFRLE9BQU8sRUFBRSxJQUFJO0FBQzNDLFlBQVEsSUFBSSxVQUFTQSxZQUFBLGdCQUFBQSxTQUFTLFdBQVUsU0FBUyxLQUFLO0FBRXRELFVBQU0sVUFBVSxJQUFJLFFBQVFBLFlBQUEsZ0JBQUFBLFNBQVMsT0FBTztBQUM1QyxZQUFRLElBQUksaUJBQWlCLFVBQVUsVUFBVTtBQUNqRCxTQUFJQSxZQUFBLGdCQUFBQSxTQUFTLFdBQVVBLFNBQVEsV0FBVyxPQUFPO0FBQy9DLGNBQVEsSUFBSSxnQkFBZ0Isa0JBQWtCO0FBQUEsSUFDaEQ7QUFFQSxVQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUs7QUFBQSxNQUNoQyxHQUFHQTtBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFFRCxZQUFRLElBQUksbUJBQW1CLFNBQVMsVUFBVSxTQUFTLFlBQVk7QUFFdkUsUUFBSSxDQUFDLFNBQVMsSUFBSTtBQUNoQixZQUFNLFFBQVEsTUFBTSxTQUFTLEtBQUssRUFBRSxNQUFNLE9BQU8sRUFBRSxPQUFPLFNBQVMsV0FBVyxFQUFFO0FBQ2hGLFlBQU0sSUFBSSxNQUFNLGFBQWEsU0FBUyxXQUFXLE1BQU0sU0FBUyxTQUFTLFlBQVk7QUFBQSxJQUN2RjtBQUVBLFdBQU8sU0FBUyxLQUFLO0FBQUEsRUFDdkI7QUFBQTtBQUFBLEVBSUEsTUFBTSxXQUFXLEtBQWEsU0FBaUIsY0FBYyxpQkFBaUIsV0FBK0IsU0FBd0I7QUFDbkksVUFBTSxLQUFLLElBQUksb0JBQW9CO0FBQUEsTUFDakMsUUFBUTtBQUFBLE1BQ1IsTUFBTSxLQUFLLFVBQVUsRUFBRSxLQUFLLFNBQVMsYUFBYSxTQUFTLENBQUM7QUFBQSxJQUM5RCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsTUFBTSxhQUFhLEtBQWtDO0FBQ25ELFVBQU0sTUFBTSxNQUFNLEtBQUssSUFBNEMsc0JBQXNCLEtBQUs7QUFDOUYsV0FBTyxJQUFJO0FBQUEsRUFDYjtBQUFBLEVBRUEsTUFBTSxVQUFVLFNBQVMsSUFBb0Y7QUFDM0csVUFBTSxNQUFNLE1BQU0sS0FBSztBQUFBLE1BQ3JCLHlCQUF5QixtQkFBbUIsTUFBTTtBQUFBLElBQ3BEO0FBQ0EsV0FBTyxJQUFJLEtBQUs7QUFBQSxFQUNsQjtBQUFBLEVBRUEsTUFBTSxXQUFXLEtBQTRCO0FBQzNDLFVBQU0sS0FBSyxJQUFJLG9CQUFvQixPQUFPLEVBQUUsUUFBUSxTQUFTLENBQUM7QUFBQSxFQUNoRTtBQUFBO0FBQUEsRUFJQSxNQUFNLG9CQUFvQixNQUF1QztBQXBXbkU7QUFxV0ksVUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUFJO0FBQzlDLFVBQU0sZUFBVyxvQkFBQUMsU0FBTyxPQUFPO0FBRS9CLFdBQU87QUFBQSxNQUNMLE9BQU8sU0FBUyxLQUFLLFNBQVMsS0FBSztBQUFBLE1BQ25DLE1BQU0sU0FBUyxLQUFLLFFBQVEsS0FBSyxhQUFhLEtBQUssUUFBUTtBQUFBLE1BQzNELE1BQU0sU0FBUyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEVBQUUsWUFBWTtBQUFBLE1BQ2xFLFNBQVMsU0FBUyxLQUFLLFdBQVcsS0FBSyxlQUFlLFNBQVMsT0FBTztBQUFBLE1BQ3RFLE1BQU0sU0FBUyxLQUFLLFFBQVEsQ0FBQztBQUFBLE1BQzdCLFVBQVMsY0FBUyxLQUFLLFlBQWQsWUFBeUI7QUFBQSxNQUNsQyxZQUFZLFNBQVMsS0FBSztBQUFBLElBQzVCO0FBQUEsRUFDRjtBQUFBLEVBRUEsYUFBYSxVQUEwQjtBQUNyQyxXQUFPLFNBQ0osWUFBWSxFQUNaLFFBQVEsUUFBUSxHQUFHLEVBQ25CLFFBQVEsV0FBVyxFQUFFLEVBQ3JCLFVBQVUsR0FBRyxHQUFHO0FBQUEsRUFDckI7QUFBQSxFQUVBLGVBQWUsU0FBeUI7QUFDdEMsVUFBTSxpQkFBaUIsUUFBUSxNQUFNLE1BQU0sRUFBRSxDQUFDO0FBQzlDLFdBQU8sZUFBZSxRQUFRLGVBQWUsRUFBRSxFQUFFLFVBQVUsR0FBRyxHQUFHO0FBQUEsRUFDbkU7QUFBQSxFQUVBLE1BQU0sc0JBQXNCLE1BQWEsU0FBUyxPQUF5QjtBQUN6RSxRQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFHLGFBQU87QUFFdkMsVUFBTSxVQUFVLE1BQU0sS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUFJO0FBRTlDLFFBQUksUUFBUSxXQUFXLEtBQUs7QUFBRyxhQUFPO0FBRXRDLFVBQU0sY0FBYyxNQUFNLEtBQUssb0JBQW9CLElBQUk7QUFDdkQsVUFBTSxhQUFhLG9CQUFBQSxRQUFPLFVBQVUsU0FBUyxXQUFXO0FBQ3hELFVBQU0sS0FBSyxJQUFJLE1BQU0sT0FBTyxNQUFNLFVBQVU7QUFFNUMsUUFBSSxDQUFDLFFBQVE7QUFDWCxVQUFJLHdCQUFPLDJCQUEyQixLQUFLLE1BQU07QUFBQSxJQUNuRDtBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFNLDZCQUE2QixRQUE0QjtBQUM3RCxVQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVUsY0FBYztBQUNwRCxRQUFJLENBQUMsWUFBWTtBQUNmLFVBQUksd0JBQU8sZ0JBQWdCO0FBQzNCO0FBQUEsSUFDRjtBQUVBLFVBQU0sY0FBYyxNQUFNLEtBQUssb0JBQW9CLFVBQVU7QUFDN0QsVUFBTSxVQUFVLE9BQU8sU0FBUztBQUNoQyxVQUFNLGFBQWEsb0JBQUFBLFFBQU8sVUFBVSxTQUFTLFdBQVc7QUFFeEQsV0FBTyxTQUFTLFVBQVU7QUFDMUIsUUFBSSx3QkFBTyxxQkFBcUI7QUFBQSxFQUNsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxNQUFNLDZCQUE0QztBQUNoRCxVQUFNLFFBQVEsS0FBSyxJQUFJLE1BQU0sU0FBUyxFQUFFO0FBQUEsTUFDdEMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxTQUFTLEtBQUssS0FBSyxLQUFLLGVBQWUsRUFBRSxJQUFJO0FBQUEsSUFDN0Q7QUFFQSxRQUFJLFlBQVk7QUFDaEIsVUFBTSxpQkFBaUIsQ0FBQyxTQUFTLFFBQVEsUUFBUSxXQUFXLFFBQVEsU0FBUztBQUU3RSxZQUFRLElBQUksMEJBQTBCLE1BQU0sMEJBQTBCO0FBRXRFLGVBQVcsUUFBUSxPQUFPO0FBQ3hCLFVBQUk7QUFDRixjQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUk7QUFLOUMsY0FBTSxhQUFTLG9CQUFBQSxTQUFPLE9BQU87QUFHN0IsY0FBTSxXQUFnQztBQUFBLFVBQ3BDLE9BQU8sS0FBSztBQUFBLFVBQ1osTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRO0FBQUEsVUFDckMsTUFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssRUFBRSxZQUFZO0FBQUEsVUFDNUMsU0FBUyxLQUFLLGVBQWUsT0FBTyxPQUFPO0FBQUEsVUFDM0MsTUFBTSxDQUFDO0FBQUEsVUFDUCxTQUFTO0FBQUEsUUFDWDtBQUdBLFlBQUksVUFBVTtBQUNkLG1CQUFXLFNBQVMsZ0JBQWdCO0FBQ2xDLGNBQUksT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTTtBQUNuRSxtQkFBTyxLQUFLLEtBQUssSUFBSSxTQUFTLEtBQUs7QUFDbkMsc0JBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUVBLFlBQUksU0FBUztBQUVYLGdCQUFNLGFBQWEsb0JBQUFBLFFBQU8sVUFBVSxPQUFPLFNBQVMsT0FBTyxJQUFJO0FBQy9ELGdCQUFNLEtBQUssSUFBSSxNQUFNLE9BQU8sTUFBTSxVQUFVO0FBQzVDO0FBQ0Esa0JBQVEsSUFBSSx3QkFBbUIsS0FBSyxrQ0FBNkI7QUFBQSxRQUNuRTtBQUFBLE1BQ0YsU0FBUyxLQUFQO0FBQ0EsZ0JBQVEsTUFBTSxtQ0FBOEIsS0FBSyxTQUFTLElBQUksT0FBTztBQUFBLE1BQ3ZFO0FBQUEsSUFDRjtBQUVBLFFBQUksWUFBWSxHQUFHO0FBQ2pCLFVBQUksd0JBQU8sNENBQXVDLG1CQUFtQjtBQUFBLElBQ3ZFO0FBQ0EsWUFBUSxJQUFJLHVCQUF1QixhQUFhLE1BQU0sc0JBQXNCO0FBQUEsRUFDOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLE1BQU0seUJBQXdDO0FBQzVDLFVBQU0sUUFBUSxLQUFLLElBQUksTUFBTSxTQUFTLEVBQUU7QUFBQSxNQUN0QyxDQUFDLE1BQU0sRUFBRSxLQUFLLFNBQVMsS0FBSyxLQUFLLEtBQUssZUFBZSxFQUFFLElBQUk7QUFBQSxJQUM3RDtBQUVBLFFBQUksVUFBVTtBQUNkLFFBQUksd0JBQU8sOEJBQThCLE1BQU0saUJBQWlCO0FBRWhFLGVBQVcsUUFBUSxPQUFPO0FBQ3hCLFVBQUk7QUFDRixjQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUk7QUFDOUMsY0FBTSxjQUFjLE1BQU0sS0FBSyxvQkFBb0IsSUFBSTtBQUN2RCxjQUFNLGFBQWEsb0JBQUFBLFFBQU87QUFBQSxjQUN4QixvQkFBQUEsU0FBTyxPQUFPLEVBQUU7QUFBQTtBQUFBLFVBQ2hCO0FBQUEsUUFDRjtBQUdBLFlBQUksWUFBWSxZQUFZO0FBQzFCLGdCQUFNLEtBQUssSUFBSSxNQUFNLE9BQU8sTUFBTSxVQUFVO0FBQzVDO0FBQUEsUUFDRjtBQUFBLE1BQ0YsU0FBUyxLQUFQO0FBQ0EsZ0JBQVEsTUFBTSw0QkFBNEIsS0FBSyxTQUFTLElBQUksT0FBTztBQUFBLE1BQ3JFO0FBQUEsSUFDRjtBQUVBLFFBQUksd0JBQU8sa0NBQTZCLFdBQVcsTUFBTSxjQUFjO0FBQUEsRUFDekU7QUFBQTtBQUFBLEVBSUEsZUFBZSxVQUEyQjtBQUV4QyxlQUFXLFdBQVcsS0FBSyxTQUFTLGtCQUFrQixDQUFDLEdBQUc7QUFDeEQsVUFBSSxTQUFTLFdBQVcsVUFBVSxHQUFHLEtBQUssU0FBUyxXQUFXLE9BQU8sR0FBRztBQUN0RSxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFHQSxlQUFXLFdBQVcsS0FBSyxTQUFTLG1CQUFtQixDQUFDLEdBQUc7QUFDekQsVUFBSSxZQUFZLFVBQVUsT0FBTyxHQUFHO0FBQ2xDLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUdBLFFBQUksU0FBUyxTQUFTLFlBQVksR0FBRztBQUNuQyxhQUFPO0FBQUEsSUFDVDtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxhQUFhLE1BQXFCO0FBQ2hDLFdBQU8sS0FBSztBQUFBLEVBQ2Q7QUFBQSxFQUVBLFlBQVksS0FBcUI7QUFDL0IsVUFBTSxNQUE4QjtBQUFBLE1BQ2xDLEtBQUs7QUFBQSxNQUFjLE1BQU07QUFBQSxNQUFjLEtBQUs7QUFBQSxNQUM1QyxLQUFLO0FBQUEsTUFBYSxNQUFNO0FBQUEsTUFBYyxLQUFLO0FBQUEsTUFDM0MsTUFBTTtBQUFBLE1BQWMsS0FBSztBQUFBLE1BQ3pCLEtBQUs7QUFBQSxNQUFjLEtBQUs7QUFBQSxNQUN4QixNQUFNO0FBQUEsTUFBb0IsTUFBTTtBQUFBLE1BQWEsS0FBSztBQUFBLE1BQ2xELEtBQUs7QUFBQSxNQUFZLElBQUk7QUFBQSxNQUFtQixJQUFJO0FBQUEsSUFDOUM7QUFDQSxXQUFPLElBQUksSUFBSSxZQUFZLENBQUMsS0FBSztBQUFBLEVBQ25DO0FBQUEsRUFFQSxNQUFNLGlCQUFpQixNQUE0QjtBQUNqRCxRQUFJLENBQUMsS0FBSyxlQUFlLEtBQUssSUFBSTtBQUFHO0FBRXJDLFFBQUk7QUFDRixZQUFNLGFBQWEsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUMzQyxjQUFRLElBQUksd0JBQXdCLEtBQUssU0FBUyxhQUFhLGFBQWEsS0FBSyxZQUFZO0FBRTdGLFVBQUk7QUFDSixVQUFJO0FBQ0osVUFBSSxXQUErQjtBQUVuQyxVQUFJLFlBQVk7QUFDZCxrQkFBVSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSTtBQUN4QyxzQkFBYztBQUFBLE1BQ2hCLE9BQU87QUFFTCxjQUFNLFNBQVMsTUFBTSxLQUFLLElBQUksTUFBTSxXQUFXLElBQUk7QUFDbkQsa0JBQVUsS0FBSyxvQkFBb0IsTUFBTTtBQUN6QyxtQkFBVztBQUNYLHNCQUFjLEtBQUssWUFBWSxLQUFLLFNBQVM7QUFBQSxNQUMvQztBQUVBLGNBQVEsSUFBSSxxQkFBcUIsS0FBSyxLQUFLLHlCQUF5QixVQUFVO0FBRzlFLFlBQU0sY0FBYyxjQUNmLE1BQU07QUFDTCxjQUFNLGFBQVMsb0JBQUFBLFNBQU8sT0FBTztBQUM3QixlQUFPLE9BQU8sS0FBSyxZQUFZO0FBQUEsTUFDakMsR0FBRyxJQUNIO0FBR0osWUFBTSxZQUFZLEtBQUssYUFBYSxJQUFJO0FBQ3hDLGNBQVEsSUFBSSx3QkFBd0IsV0FBVztBQUMvQyxZQUFNLEtBQUssV0FBVyxXQUFXLFNBQVMsYUFBYSxRQUFRO0FBQy9ELGNBQVEsSUFBSSwwQkFBcUIsS0FBSyxNQUFNO0FBRzVDLFVBQUksY0FBYyxhQUFhO0FBQzdCLGdCQUFRLElBQUksaUNBQWlDLEtBQUssTUFBTTtBQUN4RCxjQUFNLEtBQUssdUJBQXVCLFNBQVMsSUFBSTtBQUFBLE1BQ2pEO0FBQUEsSUFDRixTQUFTLE9BQVA7QUFDQSxjQUFRLE1BQU0sZ0NBQTJCLEtBQUssU0FBUyxNQUFNLE9BQU87QUFDcEUsWUFBTTtBQUFBLElBQ1I7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLG1CQUFtQixZQUE0QztBQUNuRSxRQUFJO0FBQ0YsWUFBTSxPQUFPLE1BQU0sS0FBSyxhQUFhLFdBQVcsR0FBRztBQUNuRCxZQUFNLFlBQVksS0FBSztBQUV2QixZQUFNLGVBQWUsS0FBSyxJQUFJLE1BQU0sc0JBQXNCLFNBQVM7QUFDbkUsWUFBTSxhQUFhLFVBQVUsU0FBUyxLQUFLO0FBRTNDLFVBQUksd0JBQXdCLHdCQUFPO0FBQ2pDLFlBQUksY0FBYyxLQUFLLGFBQWEsU0FBUztBQUUzQyxnQkFBTSxlQUFlLE1BQU0sS0FBSyxJQUFJLE1BQU0sS0FBSyxZQUFZO0FBQzNELGNBQUksaUJBQWlCLEtBQUssU0FBUztBQUNqQyxrQkFBTSxLQUFLLElBQUksTUFBTSxPQUFPLGNBQWMsS0FBSyxPQUFPO0FBQ3RELG9CQUFRLElBQUksc0JBQXNCLFdBQVc7QUFBQSxVQUMvQztBQUFBLFFBQ0YsT0FBTztBQUVMLGNBQUksYUFBYSxLQUFLLFNBQVMsS0FBSyxNQUFNO0FBQ3hDLGtCQUFNLFNBQVMsS0FBSyxvQkFBb0IsS0FBSyxPQUFPO0FBQ3BELGtCQUFNLEtBQUssSUFBSSxNQUFNLGFBQWEsY0FBYyxNQUFNO0FBQ3RELG9CQUFRLElBQUksc0JBQXNCLFdBQVc7QUFBQSxVQUMvQztBQUFBLFFBQ0Y7QUFBQSxNQUNGLE9BQU87QUFFTCxjQUFNLGFBQWEsVUFBVSxVQUFVLEdBQUcsVUFBVSxZQUFZLEdBQUcsQ0FBQztBQUNwRSxZQUFJLFlBQVk7QUFDZCxnQkFBTSxLQUFLLElBQUksTUFBTSxhQUFhLFVBQVUsRUFBRSxNQUFNLE1BQU07QUFBQSxVQUFDLENBQUM7QUFBQSxRQUM5RDtBQUVBLFlBQUksY0FBYyxLQUFLLGFBQWEsU0FBUztBQUMzQyxnQkFBTSxLQUFLLElBQUksTUFBTSxPQUFPLFdBQVcsS0FBSyxPQUFPO0FBQUEsUUFDckQsT0FBTztBQUNMLGdCQUFNLFNBQVMsS0FBSyxvQkFBb0IsS0FBSyxPQUFPO0FBQ3BELGdCQUFNLEtBQUssSUFBSSxNQUFNLGFBQWEsV0FBVyxNQUFNO0FBQUEsUUFDckQ7QUFDQSxnQkFBUSxJQUFJLHNCQUFzQixXQUFXO0FBQUEsTUFDL0M7QUFBQSxJQUNGLFNBQVMsT0FBUDtBQUNBLGNBQVEsTUFBTSw2QkFBNkIsV0FBVyxRQUFRLE1BQU0sT0FBTztBQUFBLElBQzdFO0FBQUEsRUFDRjtBQUFBLEVBRUEsb0JBQW9CLFFBQTZCO0FBQy9DLFVBQU0sU0FBUyxLQUFLLE1BQU07QUFDMUIsVUFBTSxRQUFRLElBQUksV0FBVyxPQUFPLE1BQU07QUFDMUMsYUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLFFBQVEsS0FBSztBQUN0QyxZQUFNLENBQUMsSUFBSSxPQUFPLFdBQVcsQ0FBQztBQUFBLElBQ2hDO0FBQ0EsV0FBTyxNQUFNO0FBQUEsRUFDZjtBQUFBLEVBRUEsTUFBTSxlQUE4QjtBQUNsQyxRQUFJLHdCQUFPLGdDQUFnQztBQUUzQyxRQUFJO0FBQ0YsWUFBTSxRQUFRLEtBQUssSUFBSSxNQUFNLFNBQVM7QUFDdEMsVUFBSSxTQUFTO0FBQ2IsVUFBSSxVQUFVO0FBRWQsY0FBUSxJQUFJLGdCQUFnQixNQUFNLHVCQUF1QjtBQUd6RCxVQUFJO0FBQ0YsY0FBTSxLQUFLLElBQUksZ0JBQWdCO0FBQy9CLGdCQUFRLElBQUksMENBQXFDO0FBQUEsTUFDbkQsU0FBUyxPQUFQO0FBQ0EsZ0JBQVEsTUFBTSw2Q0FBd0MsTUFBTSxPQUFPO0FBQ25FLFlBQUksd0JBQU8sc0JBQXNCLE1BQU0sU0FBUztBQUNoRDtBQUFBLE1BQ0Y7QUFFQSxpQkFBVyxRQUFRLE9BQU87QUFDeEIsWUFBSSxDQUFDLEtBQUssZUFBZSxLQUFLLElBQUksR0FBRztBQUNuQztBQUNBO0FBQUEsUUFDRjtBQUVBLFlBQUk7QUFDRixnQkFBTSxLQUFLLGlCQUFpQixJQUFJO0FBQ2hDO0FBQUEsUUFDRixTQUFTLE9BQVA7QUFDQSxrQkFBUSxNQUFNLGdDQUEyQixLQUFLLFNBQVMsTUFBTSxPQUFPO0FBQUEsUUFDdEU7QUFBQSxNQUNGO0FBRUEsY0FBUSxJQUFJLGdCQUFnQixrQkFBa0IsaUJBQWlCO0FBQy9ELFVBQUksd0JBQU8sVUFBVSxVQUFVLE1BQU0saUJBQWlCLGtCQUFrQjtBQUFBLElBQzFFLFNBQVMsT0FBUDtBQUNBLGNBQVEsTUFBTSwwQkFBMEIsS0FBSztBQUM3QyxVQUFJLHdCQUFPLGdCQUFnQixNQUFNLFNBQVM7QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU0saUJBQWdDO0FBQ3BDLFFBQUksd0JBQU8sZ0NBQWdDO0FBRTNDLFFBQUk7QUFDRixjQUFRLElBQUksb0NBQW9DO0FBQ2hELFlBQU0sY0FBYyxNQUFNLEtBQUssVUFBVSxFQUFFO0FBQzNDLGNBQVEsSUFBSSxvQkFBb0IsWUFBWSxxQkFBcUI7QUFFakUsVUFBSSxTQUFTO0FBRWIsaUJBQVcsY0FBYyxhQUFhO0FBQ3BDLGdCQUFRLElBQUksMEJBQTBCLFdBQVcsS0FBSztBQUN0RCxZQUFJO0FBQ0YsZ0JBQU0sS0FBSyxtQkFBbUIsVUFBVTtBQUN4QztBQUFBLFFBQ0YsU0FBUyxPQUFQO0FBQ0Esa0JBQVEsTUFBTSw2QkFBNkIsV0FBVyxRQUFRLE1BQU0sT0FBTztBQUFBLFFBQzdFO0FBQUEsTUFDRjtBQUVBLGNBQVEsSUFBSSxvQkFBb0Isd0JBQXdCO0FBQ3hELFVBQUksd0JBQU8sY0FBYyw4QkFBOEI7QUFBQSxJQUN6RCxTQUFTLE9BQVA7QUFDQSxjQUFRLE1BQU0sc0JBQXNCLEtBQUs7QUFDekMsVUFBSSx3QkFBTyxvQkFBb0IsTUFBTSxTQUFTO0FBQUEsSUFDaEQ7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLGtCQUFpQztBQUNyQyxVQUFNLGFBQWEsS0FBSyxJQUFJLFVBQVUsY0FBYztBQUNwRCxRQUFJLENBQUMsWUFBWTtBQUNmLFVBQUksd0JBQU8sZ0JBQWdCO0FBQzNCO0FBQUEsSUFDRjtBQUVBLFVBQU0sS0FBSyxpQkFBaUIsVUFBVTtBQUN0QyxRQUFJLHdCQUFPLFVBQVUsV0FBVyxvQkFBb0I7QUFBQSxFQUN0RDtBQUFBO0FBQUEsRUFJQSxNQUFNLHVCQUF1QixTQUFpQixNQUE0QjtBQWx1QjVFO0FBbXVCSSxVQUFNLGFBQWE7QUFDbkIsUUFBSTtBQUVKLFlBQVEsUUFBUSxXQUFXLEtBQUssT0FBTyxPQUFPLE1BQU07QUFDbEQsWUFBTSxZQUFZLE1BQU0sQ0FBQztBQUV6QixVQUFJLFVBQVUsV0FBVyxJQUFJLEtBQUssQ0FBQyxVQUFVLFdBQVcsTUFBTSxHQUFHO0FBQy9ELGNBQU0sV0FBUyxVQUFLLFdBQUwsbUJBQWEsU0FBUTtBQUNwQyxjQUFNLGVBQVcsZ0NBQWMsR0FBRyxVQUFVLFdBQVc7QUFDdkQsY0FBTSxZQUFZLEtBQUssSUFBSSxNQUFNLHNCQUFzQixRQUFRO0FBRS9ELFlBQUkscUJBQXFCLHdCQUFPO0FBQzlCLGdCQUFNLGNBQWMsTUFBTSxLQUFLLElBQUksTUFBTSxXQUFXLFNBQVM7QUFDN0QsZ0JBQU0sU0FBUyxLQUFLLG9CQUFvQixXQUFXO0FBQ25ELGdCQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVk7QUFFNUMsY0FBSSxjQUFjO0FBQ2xCLGNBQUksQ0FBQyxPQUFPLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBRywwQkFBYztBQUFBLG1CQUN4QyxRQUFRO0FBQU8sMEJBQWM7QUFBQSxtQkFDN0IsUUFBUTtBQUFPLDBCQUFjO0FBQUEsbUJBQzdCLFFBQVE7QUFBUSwwQkFBYztBQUFBLG1CQUM5QixRQUFRO0FBQU8sMEJBQWM7QUFFdEMsZ0JBQU0sS0FBSyxJQUFJLG9CQUFvQjtBQUFBLFlBQ2pDLFFBQVE7QUFBQSxZQUNSLE1BQU0sS0FBSyxVQUFVO0FBQUEsY0FDbkIsS0FBSyxVQUFVLFVBQVU7QUFBQSxjQUN6QixTQUFTO0FBQUEsY0FDVDtBQUFBLGNBQ0EsVUFBVTtBQUFBLFlBQ1osQ0FBQztBQUFBLFVBQ0gsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLG9CQUFvQixRQUE2QjtBQUMvQyxVQUFNLFFBQVEsSUFBSSxXQUFXLE1BQU07QUFDbkMsUUFBSSxTQUFTO0FBQ2IsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFlBQVksS0FBSztBQUN6QyxnQkFBVSxPQUFPLGFBQWEsTUFBTSxDQUFDLENBQUM7QUFBQSxJQUN4QztBQUNBLFdBQU8sS0FBSyxNQUFNO0FBQUEsRUFDcEI7QUFBQTtBQUFBLEVBSUEsTUFBTSxxQkFBb0M7QUFDeEMsVUFBTSxhQUFhLEtBQUssSUFBSSxVQUFVLGNBQWM7QUFDcEQsUUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEtBQUssU0FBUyxLQUFLLEdBQUc7QUFDbkQsVUFBSSx3QkFBTyx3Q0FBd0M7QUFDbkQ7QUFBQSxJQUNGO0FBQ0EsVUFBTSxVQUFVLE1BQU0sS0FBSyxjQUFjLFlBQVksVUFBVTtBQUMvRCxRQUFJLFNBQVM7QUFDWCxVQUFJLHdCQUFPLGFBQWEsV0FBVyxNQUFNO0FBQUEsSUFDM0MsT0FBTztBQUNMLFVBQUksd0JBQU8scUJBQXFCLFdBQVcsTUFBTTtBQUFBLElBQ25EO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSx1QkFBc0M7QUFDMUMsVUFBTSxhQUFhLEtBQUssSUFBSSxVQUFVLGNBQWM7QUFDcEQsUUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEtBQUssU0FBUyxLQUFLLEdBQUc7QUFDbkQsVUFBSSx3QkFBTywwQ0FBMEM7QUFDckQ7QUFBQSxJQUNGO0FBQ0EsVUFBTSxVQUFVLE1BQU0sS0FBSyxjQUFjLGNBQWMsVUFBVTtBQUNqRSxRQUFJLFNBQVM7QUFDWCxVQUFJLHdCQUFPLGVBQWUsV0FBVyxNQUFNO0FBQUEsSUFDN0MsT0FBTztBQUNMLFVBQUksd0JBQU8sdUJBQXVCLFdBQVcsTUFBTTtBQUFBLElBQ3JEO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxvQkFBbUM7QUFDdkMsUUFBSSxDQUFDLEtBQUssU0FBUyxhQUFhLENBQUMsS0FBSyxTQUFTLFVBQVU7QUFDdkQsVUFBSSx3QkFBTyx1REFBdUQ7QUFDbEU7QUFBQSxJQUNGO0FBQ0EsUUFBSSx3QkFBTywyQkFBMkI7QUFDdEMsVUFBTSxLQUFLLGNBQWMsa0JBQWtCO0FBQzNDLFFBQUksd0JBQU8sa0JBQWtCO0FBQUEsRUFDL0I7QUFBQSxFQUVBLFdBQVc7QUF6ekJiO0FBMHpCSSxZQUFRLElBQUkscUNBQXFDO0FBQ2pELGVBQUssZUFBTCxtQkFBaUI7QUFDakIsZUFBSyxjQUFMLG1CQUFnQjtBQUNoQixZQUFRLElBQUksaUNBQWlDO0FBQUEsRUFDL0M7QUFDRjtBQUVBLFNBQVMsWUFBWSxVQUFrQixTQUEwQjtBQUcvRCxRQUFNLFFBQVEsUUFBUSxNQUFNLEdBQUc7QUFDL0IsUUFBTSxZQUFZLFNBQVMsTUFBTSxHQUFHO0FBR3BDLE1BQUksTUFBTSxXQUFXLEtBQUssQ0FBQyxRQUFRLFNBQVMsR0FBRyxHQUFHO0FBQ2hELFVBQU0sV0FBVyxVQUFVLFVBQVUsU0FBUyxDQUFDO0FBQy9DLFdBQU8sWUFBWSxPQUFPLEVBQUUsS0FBSyxRQUFRO0FBQUEsRUFDM0M7QUFHQSxTQUFPLFlBQVksT0FBTyxFQUFFLEtBQUssUUFBUTtBQUMzQztBQUVBLFNBQVMsWUFBWSxTQUF5QjtBQUM1QyxNQUFJLFFBQVE7QUFDWixNQUFJLElBQUk7QUFDUixTQUFPLElBQUksUUFBUSxRQUFRO0FBQ3pCLFVBQU0sSUFBSSxRQUFRLENBQUM7QUFDbkIsUUFBSSxNQUFNLEtBQUs7QUFDYixVQUFJLFFBQVEsSUFBSSxDQUFDLE1BQU0sS0FBSztBQUMxQixpQkFBUztBQUNULGFBQUs7QUFBQSxNQUNQLE9BQU87QUFDTCxpQkFBUztBQUNUO0FBQUEsTUFDRjtBQUFBLElBQ0YsV0FBVyxNQUFNLEtBQUs7QUFDcEIsZUFBUztBQUNUO0FBQUEsSUFDRixXQUFXLE1BQU0sS0FBSztBQUNwQixlQUFTO0FBQ1Q7QUFBQSxJQUNGLE9BQU87QUFDTCxlQUFTO0FBQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNBLFNBQU8sSUFBSSxPQUFPLElBQUksUUFBUTtBQUNoQzsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAib3B0aW9ucyIsICJzdHIiLCAic3RyaW5nIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgInJlcXVpcmVfanNfeWFtbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJ5YW1sIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAic3RyIiwgImV4cG9ydHMiLCAic3RyIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImVuZ2luZXMiLCAib3B0aW9ucyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAic3RyIiwgIm1hdHRlciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJvcHRpb25zIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAic3RyIiwgIm9wdGlvbnMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZW5naW5lcyIsICJwYXJzZSIsICJtYXR0ZXIiLCAib3B0aW9ucyIsICJzdHIiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9ncmF5X21hdHRlciIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAibWF0dGVyIiwgIm9wdGlvbnMiLCAibWF0dGVyIl0KfQo=
