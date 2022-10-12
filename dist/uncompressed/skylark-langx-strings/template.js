define([
    "./strings"
],function(strings){
    /**
     * https://github.com/cho45/micro-template.js
     * (c) cho45 http://cho45.github.com/mit-license
     *
    function template (id, data) {

        function include(name, args) {
            var stash = {};
            for (var key in template.context.stash) if (template.context.stash.hasOwnProperty(key)) {
                stash[key] = template.context.stash[key];
            }
            if (args) for (var key in args) if (args.hasOwnProperty(key)) {
                stash[key] = args[key];
            }
            var context = template.context;
            context.ret += template(name, stash);
            template.context = context;
        }

        function wrapper(name, fun) {
            var current = template.context.ret;
            template.context.ret = '';
            fun.apply(template.context);
            var content = template.context.ret;
            var orig_content = template.context.stash.content;
            template.context.stash.content = content;
            template.context.ret = current + template(name, template.context.stash);
            template.context.stash.content = orig_content;
        }

        var me = arguments.callee;
        if (!me.cache[id]) me.cache[id] = (function () {
            var name = id, string = /^[\w\-]+$/.test(id) ? me.get(id): (name = 'template(string)', id); // no warnings
            var line = 1, body = (
                "try { " +
                    (me.variable ?  "var " + me.variable + " = this.stash;" : "with (this.stash) { ") +
                        "this.ret += '"  +
                        string.
                            replace(/<%/g, '\x11').replace(/%>/g, '\x13'). // if you want other tag, just edit this line
                            replace(/'(?![^\x11\x13]+?\x13)/g, '\\x27').
                            replace(/^\s*|\s*$/g, '').
                            replace(/\n|\r\n/g, function () { return "';\nthis.line = " + (++line) + "; this.ret += '\\n" }).
                            replace(/\x11=raw(.+?)\x13/g, "' + ($1) + '").
                            replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").
                            replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") +
                    "'; " + (me.variable ? "" : "}") + "return this.ret;" +
                "} catch (e) { throw 'TemplateError: ' + e + ' (on " + name + "' + ' line ' + this.line + ')'; } " +
                "//@ sourceURL=" + name + "\n" // source map
            ).replace(/this\.ret \+= '';/g, '');
            var func = new Function(body);
            var map  = { '&' : '&amp;', '<' : '&lt;', '>' : '&gt;', '\x22' : '&#x22;', '\x27' : '&#x27;' };
            var escapeHTML = function (string) { return (''+string).replace(/[&<>\'\"]/g, function (_) { return map[_] }) };
            return function (stash) { return func.call(me.context = { escapeHTML: escapeHTML, line: 1, ret : '', stash: stash }) };
        })();
        return data ? me.cache[id](data) : me.cache[id];
    }

    template.cache = {};
    

    template.get = function (id) {
        return document.getElementById(id).innerHTML;
    };
    **/

    //     Underscore.js 1.8.3
    //     http://underscorejs.org
    //     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.

    // When customizing `templateSettings`, if you don't want to define an
    // interpolation, evaluation or escaping regex, we need one that is
    // guaranteed not to match.
    var noMatch = /(.)^/;

    // Certain characters need to be escaped so that they can be put into a
    // string literal.
    var escapes = {
        "'":      "'",
        '\\':     '\\',
        '\r':     'r',
        '\n':     'n',
        '\u2028': 'u2028',
        '\u2029': 'u2029'
    };

    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

    var escapeChar = function(match) {
        return '\\' + escapes[match];
    };

    // JavaScript micro-templating, similar to John Resig's implementation.
    // Underscore templating handles arbitrary delimiters, preserves whitespace,
    // and correctly escapes quotes within interpolated code.
    // NB: `oldSettings` only exists for backwards compatibility.
    function template(text, settings, oldSettings) {
        if (!settings && oldSettings) settings = oldSettings;
        settings = Object.assign({}, template.templateSettings,settings);

        // Combine delimiters into one regular expression via alternation.
        var matcher = RegExp([
          (settings.escape || noMatch).source,
          (settings.interpolate || noMatch).source,
          (settings.evaluate || noMatch).source
        ].join('|') + '|$', 'g');

        // Compile the template source, escaping string literals appropriately.
        var index = 0;
        var source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
          source += text.slice(index, offset).replace(escaper, escapeChar);
          index = offset + match.length;

          if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
          } else if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
          } else if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
          }

          // Adobe VMs need the match returned to produce the correct offest.
          return match;
        });
        source += "';\n";

        // If a variable is not specified, place data values in local scope.
        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

        source = "var __t,__p='',__j=Array.prototype.join," +
          "print=function(){__p+=__j.call(arguments,'');};\n" +
          source + 'return __p;\n';

        try {
          var render = new Function(settings.variable || 'obj', '_', source);
        } catch (e) {
          e.source = source;
          throw e;
        }

        var self = this;
        var ret = function(data) {
          return render.call(self, data, self);
        };

        // Provide the compiled source as a convenience for precompilation.
        var argument = settings.variable || 'obj';
        ret.source = 'function(' + argument + '){\n' + source + '}';

        return ret;
    }

    // By default, Underscore uses ERB-style template delimiters, change the
    // following template settings to use alternative delimiters.
    template.templateSettings = {
        evaluate    : /<%([\s\S]+?)%>/g,
        interpolate : /<%=([\s\S]+?)%>/g,
        escape      : /<%-([\s\S]+?)%>/g
    };


    return strings.template = template;
});