# Selling points

* Composable: https://www.npmjs.com/package/eslint-config-defaults
* Great documentation like: https://github.com/keithamus/eslint-config-strict
* Minimum dependencies
* it's made for pros and doesn't disable useful syntax in the fear that you may hurt yourself
* warn for styles and error for potential bugs (run it in pretest "eslint --quiet .")
* composable ruleset (use jsdoc? csp? you can add it on top)
* Respects the rest of your configs from
  * editorconfig (file ends with empty line, indent style: tab|spaces, indentation)
  * package.json engines (for setting es5/6 version), browser field
  * automatically detects plugins and adds their configs
* automatic package detection (if es6 is being used with lodash/underscore, it'll hint about possible native implementations)
* tested on actual code
* addresses all rules and is chases eslint for updation
* good documentation
* cli can generate an initial skeleton for config like tslint's --init: https://palantir.github.io/tslint/
* a cli utility that shows you the exact config that's being used for each dir/file
* the code is readable and structured after eslint itself
* cli can go through your source code and suggest some plugins (like json, promises, etc.) good for --init feature
* lints json: https://www.npmjs.com/package/eslint-plugin-json
* Consistency in your settings
* A bit more relax for things that don't matter much. Sure semicolon is a religious choice but not the line breaks in a tertirary expression
* tslint support: do you want to do ts in the same style as js?
  * (compare tslint with eslint rules): https://github.com/buzinas/tslint-eslint-rules
* don't configure a rule just because it exists. try to be mindful about what is important.

# Quick guide
Add the following scripts to your `package.json`:
```javascript
{
  "scripts": {
    "lint": "eslint .",
    "pretest": "eslint --quiet ."
  },
}
```

You can have eslint fix some errors automatically with `yarn run lint -- --fix` or
`npm run lint -- --fix`.

Write something like StandardJS's intro to highlighted rules: https://github.com/feross/standard/blob/master/RULES.md

# Editors
A little guide about how to enable it in popular editors:
* Atom
* Sublime
* WebStorm
* VS Code

one of the core ideas is to mark errors for things that affect program logic and show warn for aestetics and less serious mistakes that can be fixed when the code is ready to be commited

# High level principals
* Focus on iterative development: only show programming errors. Warnings can be used for code you commit.
* I'm a pro. I know what I'm doing. We don't limit perfectly valid js syntax which may confuse noobs (use Airbnb instead)
* We assume you use linting in your editor as you type
* We don't get in your way with stupid errors
* Address the most common stacks
* Full coverage. We address every single eslint rule even if it means turning it off.

# Workflow
document the workflow:
* Warnings ok during development but no errors. example node scripts. Mostly aestetics like whitespaces, etc.
  the idea is not to hinder you while developing code. Most editors show warning anyway so it's not like
  they are ignored.
* Error: a programming error that affects code in runtime. You should have it as part of your workflow
  like when running tests, you should first lint your code with only errors
  
Give an example node script of how this workflow works

# Editorconfig
There's an editorconfig in the root that can be used as needed.

# A note about JSDoc
http://eslint.org/docs/rules/valid-jsdoc
valid-jsdoc: warn # when jsdoc-specific comments are present they should have a level of usefulness

# Methodology
Explained about how the initial rule values are set.
1. Started with -Schibsted
2. Compared with airbnb to set the defaults
3. Added all missing rules and set a decent default
4. Ran it through some decent source code and adjusted it

What repos are passing them, etc.
*it is made for experienced developer in mind so it is a bit more relaxed and doesn't assume that the
developer is going to shoot himself in the foot. Therefor it doesn't nag about useful (but potentially
risky) syntax (examples: it doesn't require writing a description for parameters or return values)*

It is less noisy. For example:
no-mixed-requires:
  - warn # it's not an error, but good practice
  - grouping: false # no need to group calls. Let the developer decide
  - allowCall: true # let the developers call the result of a require call
Some developers like to enforce grouping, some don't. We don't nag about really unimportant things
like this.

# Warn wisely
The errors are really useful for bug hunting. The idea is that you put it in your `pre-test` script.
Why force you to refactor the code you're gonna throw away? You will either end up ignoring all
eslint errors or slavishly waste time cleaning up prototype code. The idea is to use eslint as an
extra hint engine for this language and its versatile syntax.
Errors are the ones that actually help you to haunt bugs. Warns are for styling and making the code
more readable.

# Relaxed. Doesn't get in your way when it really doesn't matter
We use the errors to prevent obvious errors. Warnings are used for aestetics and readability.
require variables within the same declaration block to be sorted
same with `sort-vars`

no-bitwise:
  - warn # might be an error, might be a valid use. Don't error on language features just because!
  - allow: # only warn for & | for potential conditional typos
    - "~"
    - ">>"
    - "^"
    - !!str '<<'
  - int32Hint: true # Allows the use of bitwise OR in |0 pattern for type casting.
no-multi-str: off # let the developers decide. it's no big deal.

Example:
enforce position of line comments
`line-comment-position: off` # let the developers decide. no big deal really. Don't nag.

Even though we are relaex, we don't ignore any rules. One of the criteria is that we should have
a setting for every rule that a modern version of eslint introduces.

 # require or disallow initialization in variable declarations
init-declarations: off # let the programmers decide
 # disallow the unary operators ++ and --
no-plusplus: off # come on! who writes i\n++\nj? It's a useful syntax
 # disallow void operators
no-void: warn # it's not off because you may have a reason to have it, but it's certainly not an error either


# No dumb rule
It is for experienced devs
 # require object keys to be sorted
sort-keys: off # expecting the object keys to be sorted is a hinderment
 # require variables within the same declaration block to be sorted
sort-vars: off # expecting the variables to be sorted is a hinderment
 # disallow division operators explicitly at the beginning of regular expressions
no-div-regex: off # not needed for experienced devs
 # enforce or disallow capitalization of the first letter of a comment
capitalized-comments: off # useless, honestly
 # require identifiers to match a specified regular expression
id-match: off # we need to come back to this later if needed.
 # require or disallow Unicode byte order mark (BOM) U+FEFF
unicode-bom: off # this really doesn't matter as the browser or editors don't care
 # disallow trailing whitespace at the end of lines
no-trailing-spaces: off # not an error, and will be fixed by --fix or removed by minifiers. It happens, why waste your time removing them?
 # disallow dangling underscores in identifiers
no-underscore-dangle: off # it's a convention and shouldn't confuse any experienced developer
 # require or disallow an empty line after variable declarations
newline-after-var: off # let the developers decide. it's not an end of the world scenario!
 # no-mixed-operators
These settings are there to mainly check for typos
They assume the developer knows how to use operator precedence properly




  
# How to disable
`eslint-disable-next-line` is prefered.
Write about how to override it.

# CLI
Can generate a basic eslint structure with options that you choose (yml)

# Project structure
 - base: covers ES3, ES5, ES5.1
 - es6: covers all new features in ES6 except modules (hence node compatible)
 - es6-modules: everything related to es6-modules
 - node: support for javascript in node (no alarm, etc.)
 - browser: support for javascript in browser environment (alarm allowed, console is a warning,
   etc.) browsers don't have require, so  we don't bother adding commonjs pattern here.
 - browser-transpiled: es6 and es6-modules are enabled here.
 - jsdoc: rules about jsdoc when it is present (jsdoc is not mandatory)
 - plugins: rules for plugins

Sometimes the rules are configured differently. For example:
Browser:
  global-require: error # many build tools do a static analysis of require calls at the top of the file
Base:
  global-require: warn # sometimes you want to require a module conditionally

# ss
document the name for single char variable names
document the TODO, BUG, etc. thingie

a note about overrriding rules. about different rule sets. about disabling one line

Coming from airbnb
Coming from StandardJS
Coming from XO

Using eslint --fix (http://eslint.org/docs/rules/)

# airbnb sucks why?
comma-dangle: [ 'error',
      { arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline' } ]
        
always-multiline = forces it http://eslint.org/docs/rules/comma-dangle

# Warn vs Errors
During the iterations it's ok to break some rules. But we still want to get notified about
critical errors before running the code.
var undef is an error but missing a space isn't
The style thingies are errors. I make them warning so they can be run before tests.
Use --quiet in CLI to prevent warnings from breaking things (http://eslint.org/docs/user-guide/command-line-interface)

example:
complexity:
  - warn # not an error
It's not really an error.

max-lines:
  - warn # not a programming error, but files that are too big are hard to navigate
  - max: 1000  # default is 300
  
 # disallow new operators with the String, Number, and Boolean objects
no-new-wrappers: error # it is confusing and hard to debug (in vase of new Boolean()). opt-in by disabling on a use-case basis.
  

# Lodash/Underscore/JQuery vs ES6
all those lodash warnings
http://eslint.org/docs/rules/func-names "as-needed"
> ECMAScript 6 introduced a name property on all functions. The value of name is determined by evaluating the code around the function to see if a name can be inferred. For example, a function assigned to a variable will automatically have a name property equal to the name of the variable. The value of name is then used in stack traces for easier debugging.

Rules that I need to revisit:
http://eslint.org/docs/rules/no-restricted-syntax

# guide
Write about some of the important rules:
no-shadow: error # this makes you avoid complicated edge cases where refactoring can change behaviour
guard-for-in: off # in practice, we rarely iterate over objects with prototype inheritence

# tested

No more dumbly linting the config!
This package comes with some code that actually test every single rule that is there.

# CONTRIBUTING:
See [CONTRIBUTING.md]
Project structure
Consensus process

---
Make note that sort-keys: off # expecting the object keys to be sorted is a hinderment
