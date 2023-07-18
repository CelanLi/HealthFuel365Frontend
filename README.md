# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


```bash
.
├── node_modules
│   ├── @alloc
│   │   └── quick-lru
│   ├── @ampproject
│   │   └── remapping
│   │       └── dist
│   │           └── types
│   ├── @ant-design
│   │   ├── colors
│   │   │   ├── es
│   │   │   └── lib
│   │   ├── cssinjs
│   │   │   ├── es
│   │   │   │   ├── hooks
│   │   │   │   ├── linters
│   │   │   │   ├── theme
│   │   │   │   └── transformers
│   │   │   └── lib
│   │   │       ├── hooks
│   │   │       ├── linters
│   │   │       ├── theme
│   │   │       └── transformers
│   │   ├── icons
│   │   │   ├── dist
│   │   │   │   └── umd
│   │   │   ├── docs
│   │   │   │   ├── demo
│   │   │   │   └── examples
│   │   │   ├── es
│   │   │   │   ├── components
│   │   │   │   └── icons
│   │   │   └── lib
│   │   │       ├── components
│   │   │       └── icons
│   │   ├── icons-svg
│   │   │   ├── es
│   │   │   │   └── asn
│   │   │   ├── inline-namespaced-svg
│   │   │   │   ├── filled
│   │   │   │   ├── outlined
│   │   │   │   └── twotone
│   │   │   ├── inline-svg
│   │   │   │   ├── filled
│   │   │   │   ├── outlined
│   │   │   │   └── twotone
│   │   │   └── lib
│   │   │       └── asn
│   │   └── react-slick
│   │       ├── dist
│   │       ├── es
│   │       │   └── utils
│   │       └── lib
│   │           └── utils
│   ├── @babel
│   │   ├── code-frame
│   │   │   └── lib
│   │   ├── compat-data
│   │   │   └── data
│   │   ├── core
│   │   │   ├── lib
│   │   │   │   ├── config
│   │   │   │   │   ├── files
│   │   │   │   │   ├── helpers
│   │   │   │   │   └── validation
│   │   │   │   ├── errors
│   │   │   │   ├── gensync-utils
│   │   │   │   ├── parser
│   │   │   │   │   └── util
│   │   │   │   ├── tools
│   │   │   │   ├── transformation
│   │   │   │   │   ├── file
│   │   │   │   │   └── util
│   │   │   │   └── vendor
│   │   │   ├── node_modules
│   │   │   │   └── semver
│   │   │   │       └── bin
│   │   │   └── src
│   │   │       └── config
│   │   │           └── files
│   │   ├── eslint-parser
│   │   │   ├── lib
│   │   │   │   ├── convert
│   │   │   │   ├── utils
│   │   │   │   └── worker
│   │   │   └── node_modules
│   │   │       ├── eslint-visitor-keys
│   │   │       │   └── lib
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── generator
│   │   │   └── lib
│   │   │       ├── generators
│   │   │       └── node
│   │   ├── helper-annotate-as-pure
│   │   │   └── lib
│   │   ├── helper-builder-binary-assignment-operator-visitor
│   │   │   └── lib
│   │   ├── helper-compilation-targets
│   │   │   ├── lib
│   │   │   └── node_modules
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── helper-create-class-features-plugin
│   │   │   ├── lib
│   │   │   └── node_modules
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── helper-create-regexp-features-plugin
│   │   │   ├── lib
│   │   │   └── node_modules
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── helper-define-polyfill-provider
│   │   │   ├── esm
│   │   │   ├── lib
│   │   │   │   ├── browser
│   │   │   │   ├── node
│   │   │   │   └── visitors
│   │   │   └── node_modules
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── helper-environment-visitor
│   │   │   └── lib
│   │   ├── helper-function-name
│   │   │   └── lib
│   │   ├── helper-hoist-variables
│   │   │   └── lib
│   │   ├── helper-member-expression-to-functions
│   │   │   └── lib
│   │   ├── helper-module-imports
│   │   │   └── lib
│   │   ├── helper-module-transforms
│   │   │   └── lib
│   │   ├── helper-optimise-call-expression
│   │   │   └── lib
│   │   ├── helper-plugin-utils
│   │   │   └── lib
│   │   ├── helper-remap-async-to-generator
│   │   │   └── lib
│   │   ├── helper-replace-supers
│   │   │   └── lib
│   │   ├── helper-simple-access
│   │   │   └── lib
│   │   ├── helper-skip-transparent-expression-wrappers
│   │   │   └── lib
│   │   ├── helper-split-export-declaration
│   │   │   └── lib
│   │   ├── helper-string-parser
│   │   │   └── lib
│   │   ├── helper-validator-identifier
│   │   │   ├── lib
│   │   │   └── scripts
│   │   ├── helper-validator-option
│   │   │   └── lib
│   │   ├── helper-wrap-function
│   │   │   └── lib
│   │   ├── helpers
│   │   │   ├── lib
│   │   │   │   └── helpers
│   │   │   └── scripts
│   │   ├── highlight
│   │   │   └── lib
│   │   ├── parser
│   │   │   ├── bin
│   │   │   ├── lib
│   │   │   └── typings
│   │   ├── plugin-bugfix-safari-id-destructuring-collision-in-function-expression
│   │   │   └── lib
│   │   ├── plugin-bugfix-v8-spread-parameters-in-optional-chaining
│   │   │   └── lib
│   │   ├── plugin-proposal-async-generator-functions
│   │   │   └── lib
│   │   ├── plugin-proposal-class-properties
│   │   │   └── lib
│   │   ├── plugin-proposal-class-static-block
│   │   │   └── lib
│   │   ├── plugin-proposal-decorators
│   │   │   └── lib
│   │   ├── plugin-proposal-dynamic-import
│   │   │   └── lib
│   │   ├── plugin-proposal-export-namespace-from
│   │   │   └── lib
│   │   ├── plugin-proposal-json-strings
│   │   │   └── lib
│   │   ├── plugin-proposal-logical-assignment-operators
│   │   │   └── lib
│   │   ├── plugin-proposal-nullish-coalescing-operator
│   │   │   └── lib
│   │   ├── plugin-proposal-numeric-separator
│   │   │   └── lib
│   │   ├── plugin-proposal-object-rest-spread
│   │   │   └── lib
│   │   ├── plugin-proposal-optional-catch-binding
│   │   │   └── lib
│   │   ├── plugin-proposal-optional-chaining
│   │   │   └── lib
│   │   ├── plugin-proposal-private-methods
│   │   │   └── lib
│   │   ├── plugin-proposal-private-property-in-object
│   │   │   └── lib
│   │   ├── plugin-proposal-unicode-property-regex
│   │   │   └── lib
│   │   ├── plugin-syntax-async-generators
│   │   │   └── lib
│   │   ├── plugin-syntax-bigint
│   │   │   └── lib
│   │   ├── plugin-syntax-class-properties
│   │   │   └── lib
│   │   ├── plugin-syntax-class-static-block
│   │   │   └── lib
│   │   ├── plugin-syntax-decorators
│   │   │   └── lib
│   │   ├── plugin-syntax-dynamic-import
│   │   │   └── lib
│   │   ├── plugin-syntax-export-namespace-from
│   │   │   └── lib
│   │   ├── plugin-syntax-flow
│   │   │   └── lib
│   │   ├── plugin-syntax-import-assertions
│   │   │   └── lib
│   │   ├── plugin-syntax-import-meta
│   │   │   └── lib
│   │   ├── plugin-syntax-json-strings
│   │   │   └── lib
│   │   ├── plugin-syntax-jsx
│   │   │   └── lib
│   │   ├── plugin-syntax-logical-assignment-operators
│   │   │   └── lib
│   │   ├── plugin-syntax-nullish-coalescing-operator
│   │   │   └── lib
│   │   ├── plugin-syntax-numeric-separator
│   │   │   └── lib
│   │   ├── plugin-syntax-object-rest-spread
│   │   │   └── lib
│   │   ├── plugin-syntax-optional-catch-binding
│   │   │   └── lib
│   │   ├── plugin-syntax-optional-chaining
│   │   │   └── lib
│   │   ├── plugin-syntax-private-property-in-object
│   │   │   └── lib
│   │   ├── plugin-syntax-top-level-await
│   │   │   └── lib
│   │   ├── plugin-syntax-typescript
│   │   │   └── lib
│   │   ├── plugin-transform-arrow-functions
│   │   │   └── lib
│   │   ├── plugin-transform-async-to-generator
│   │   │   └── lib
│   │   ├── plugin-transform-block-scoped-functions
│   │   │   └── lib
│   │   ├── plugin-transform-block-scoping
│   │   │   └── lib
│   │   ├── plugin-transform-classes
│   │   │   └── lib
│   │   ├── plugin-transform-computed-properties
│   │   │   └── lib
│   │   ├── plugin-transform-destructuring
│   │   │   └── lib
│   │   ├── plugin-transform-dotall-regex
│   │   │   └── lib
│   │   ├── plugin-transform-duplicate-keys
│   │   │   └── lib
│   │   ├── plugin-transform-exponentiation-operator
│   │   │   └── lib
│   │   ├── plugin-transform-flow-strip-types
│   │   │   └── lib
│   │   ├── plugin-transform-for-of
│   │   │   └── lib
│   │   ├── plugin-transform-function-name
│   │   │   └── lib
│   │   ├── plugin-transform-literals
│   │   │   └── lib
│   │   ├── plugin-transform-member-expression-literals
│   │   │   └── lib
│   │   ├── plugin-transform-modules-amd
│   │   │   └── lib
│   │   ├── plugin-transform-modules-commonjs
│   │   │   └── lib
│   │   ├── plugin-transform-modules-systemjs
│   │   │   └── lib
│   │   ├── plugin-transform-modules-umd
│   │   │   └── lib
│   │   ├── plugin-transform-named-capturing-groups-regex
│   │   │   └── lib
│   │   ├── plugin-transform-new-target
│   │   │   └── lib
│   │   ├── plugin-transform-object-super
│   │   │   └── lib
│   │   ├── plugin-transform-parameters
│   │   │   └── lib
│   │   ├── plugin-transform-property-literals
│   │   │   └── lib
│   │   ├── plugin-transform-react-constant-elements
│   │   │   └── lib
│   │   ├── plugin-transform-react-display-name
│   │   │   └── lib
│   │   ├── plugin-transform-react-jsx
│   │   │   └── lib
│   │   ├── plugin-transform-react-jsx-development
│   │   │   └── lib
│   │   ├── plugin-transform-react-pure-annotations
│   │   │   └── lib
│   │   ├── plugin-transform-regenerator
│   │   │   └── lib
│   │   ├── plugin-transform-reserved-words
│   │   │   └── lib
│   │   ├── plugin-transform-runtime
│   │   │   ├── lib
│   │   │   │   └── get-runtime-path
│   │   │   ├── node_modules
│   │   │   │   └── semver
│   │   │   │       └── bin
│   │   │   └── src
│   │   │       └── get-runtime-path
│   │   ├── plugin-transform-shorthand-properties
│   │   │   └── lib
│   │   ├── plugin-transform-spread
│   │   │   └── lib
│   │   ├── plugin-transform-sticky-regex
│   │   │   └── lib
│   │   ├── plugin-transform-template-literals
│   │   │   └── lib
│   │   ├── plugin-transform-typeof-symbol
│   │   │   └── lib
│   │   ├── plugin-transform-typescript
│   │   │   └── lib
│   │   ├── plugin-transform-unicode-escapes
│   │   │   └── lib
│   │   ├── plugin-transform-unicode-regex
│   │   │   └── lib
│   │   ├── preset-env
│   │   │   ├── data
│   │   │   ├── lib
│   │   │   │   └── polyfills
│   │   │   └── node_modules
│   │   │       └── semver
│   │   │           └── bin
│   │   ├── preset-modules
│   │   │   ├── lib
│   │   │   │   └── plugins
│   │   │   │       ├── transform-async-arrows-in-class
│   │   │   │       ├── transform-edge-default-parameters
│   │   │   │       ├── transform-edge-function-name
│   │   │   │       ├── transform-jsx-spread
│   │   │   │       ├── transform-safari-block-shadowing
│   │   │   │       ├── transform-safari-for-shadowing
│   │   │   │       └── transform-tagged-template-caching
│   │   │   └── src
│   │   │       └── plugins
│   │   │           ├── transform-async-arrows-in-class
│   │   │           ├── transform-edge-default-parameters
│   │   │           ├── transform-edge-function-name
│   │   │           ├── transform-jsx-spread
│   │   │           ├── transform-safari-block-shadowing
│   │   │           ├── transform-safari-for-shadowing
│   │   │           └── transform-tagged-template-caching
│   │   ├── preset-react
│   │   │   └── lib
│   │   ├── preset-typescript
│   │   │   └── lib
│   │   ├── regjsgen
│   │   ├── runtime
│   │   │   ├── helpers
│   │   │   │   └── esm
│   │   │   └── regenerator
│   │   ├── template
│   │   │   └── lib
│   │   ├── traverse
│   │   │   └── lib
│   │   │       ├── path
│   │   │       │   ├── inference
│   │   │       │   └── lib
│   │   │       └── scope
│   │   │           └── lib
│   │   └── types
│   │       └── lib
│   │           ├── asserts
│   │           │   └── generated
│   │           ├── ast-types
│   │           │   └── generated
│   │           ├── builders
│   │           │   ├── flow
│   │           │   ├── generated
│   │           │   ├── react
│   │           │   └── typescript
│   │           ├── clone
│   │           ├── comments
│   │           ├── constants
│   │           │   └── generated
│   │           ├── converters
│   │           ├── definitions
│   │           ├── modifications
│   │           │   ├── flow
│   │           │   └── typescript
│   │           ├── retrievers
│   │           ├── traverse
│   │           ├── utils
│   │           │   └── react
│   │           └── validators
│   │               ├── generated
│   │               └── react
│   ├── @bcoe
│   │   └── v8-coverage
│   │       ├── dist
│   │       │   └── lib
│   │       │       └── _src
│   │       └── src
│   │           ├── lib
│   │           └── test
│   ├── @csstools
│   │   ├── normalize.css
│   │   ├── postcss-cascade-layers
│   │   │   └── dist
│   │   ├── postcss-color-function
│   │   │   └── dist
│   │   │       └── css-color-4
│   │   ├── postcss-font-format-keywords
│   │   │   └── dist
│   │   ├── postcss-hwb-function
│   │   │   └── dist
│   │   ├── postcss-ic-unit
│   │   │   └── dist
│   │   ├── postcss-is-pseudo-class
│   │   │   └── dist
│   │   │       └── split-selectors
│   │   │           └── complex
│   │   ├── postcss-nested-calc
│   │   │   └── dist
│   │   ├── postcss-normalize-display-values
│   │   │   └── dist
│   │   ├── postcss-oklab-function
│   │   │   └── dist
│   │   │       └── css-color-4
│   │   ├── postcss-progressive-custom-properties
│   │   │   └── dist
│   │   │       └── custom
│   │   ├── postcss-stepped-value-functions
│   │   │   └── dist
│   │   ├── postcss-text-decoration-shorthand
│   │   │   └── dist
│   │   ├── postcss-trigonometric-functions
│   │   │   └── dist
│   │   ├── postcss-unset-value
│   │   │   └── dist
│   │   └── selector-specificity
│   │       └── dist
│   ├── @ctrl
│   │   └── tinycolor
│   │       └── dist
│   │           ├── bundles
│   │           └── module
│   ├── @emotion
│   │   ├── hash
│   │   │   ├── dist
│   │   │   ├── src
│   │   │   └── types
│   │   └── unitless
│   │       ├── dist
│   │       └── src
│   ├── @eslint
│   │   ├── eslintrc
│   │   │   ├── conf
│   │   │   ├── dist
│   │   │   ├── lib
│   │   │   │   ├── config-array
│   │   │   │   └── shared
│   │   │   └── node_modules
│   │   │       ├── argparse
│   │   │       │   └── lib
│   │   │       ├── globals
│   │   │       ├── js-yaml
│   │   │       │   ├── bin
│   │   │       │   ├── dist
│   │   │       │   └── lib
│   │   │       │       ├── schema
│   │   │       │       └── type
│   │   │       └── type-fest
│   │   │           ├── source
│   │   │           └── ts41
│   │   └── js
│   │       └── src
│   │           └── configs
│   ├── @eslint-community
│   │   ├── eslint-utils
│   │   └── regexpp
│   ├── @humanwhocodes
│   │   ├── config-array
│   │   ├── module-importer
│   │   │   ├── dist
│   │   │   └── src
│   │   └── object-schema
│   │       ├── src
│   │       └── tests
│   ├── @istanbuljs
│   │   ├── load-nyc-config
│   │   │   └── node_modules
│   │   │       ├── camelcase
│   │   │       ├── find-up
│   │   │       ├── locate-path
│   │   │       ├── p-limit
│   │   │       └── p-locate
│   │   └── schema
│   ├── @jest
│   │   ├── console
│   │   │   ├── build
│   │   │   └── node_modules
│   │   │       ├── ansi-styles
│   │   │       ├── chalk
│   │   │       │   └── source
│   │   │       ├── color-convert
│   │   │       ├── color-name
│   │   │       ├── has-flag
│   │   │       └── supports-color
│   │   ├── core
│   │   │   ├── build
│   │   │   │   ├── assets
│   │   │   │   ├── cli
│   │   │   │   ├── lib
│   │   │   │   └── plugins
│   │   │   └── node_modules
│   │   │       ├── ansi-styles
│   │   │       ├── chalk
│   │   │       │   └── source
│   │   │       ├── color-convert
│   │   │       ├── color-name
│   │   │       ├── has-flag
│   │   │       └── supports-color
│   │   ├── environment
│   │   │   └── build
│   │   ├── fake-timers
│   │   │   └── build
│   │   ├── globals
│   │   │   └── build
│   │   ├── reporters
│   │   │   ├── build
│   │   │   └── node_modules
│   │   │       ├── ansi-styles
│   │   │       ├── chalk
│   │   │       │   └── source
│   │   │       ├── color-convert
│   │   │       ├── color-name
│   │   │       ├── has-flag
│   │   │       ├── source-map
│   │   │       │   ├── dist
│   │   │       │   └── lib
│   │   │       └── supports-color
│   │   ├── schemas
│   │   │   └── build
│   │   ├── source-map
│   │   │   ├── build
│   │   │   └── node_modules
│   │   │       └── source-map
│   │   │           ├── dist
│   │   │           └── lib
│   │   ├── test-result
│   │   │   └── build
│   │   ├── test-sequencer
│   │   │   └── build
│   │   ├── transform
│   │   │   ├── build
│   │   │   └── node_modules
│   │   │       ├── ansi-styles
│   │   │       ├── chalk
│   │   │       │   └── source
│   │   │       ├── color-convert
│   │   │       ├── color-name
│   │   │       ├── has-flag
│   │   │       ├── source-map
│   │   │       │   ├── dist
│   │   │       │   └── lib
│   │   │       └── supports-color
│   │   └── types
│   │       ├── build
│   │       └── node_modules
│   │           ├── ansi-styles
│   │           ├── chalk
│   │           │   └── source
│   │           ├── color-convert
│   │           ├── color-name
│   │           ├── has-flag
│   │           └── supports-color
│   ├── @jridgewell
│   │   ├── gen-mapping
│   │   │   └── dist
│   │   │       └── types
│   │   ├── resolve-uri
│   │   │   └── dist
│   │   │       └── types
│   │   ├── set-array
│   │   │   ├── dist
│   │   │   │   └── types
│   │   │   └── src
│   │   ├── source-map
│   │   │   └── dist
│   │   │       └── types
│   │   ├── sourcemap-codec
│   │   │   └── dist
│   │   │       └── types
│   │   └── trace-mapping
│   │       ├── dist
│   │       │   └── types
│   │       └── node_modules
│   │           └── @jridgewell
│   │               └── sourcemap-codec
│   │                   ├── dist
│   │                   │   └── types
│   │                   └── src
│   ├── @leichtgewicht
│   │   └── ip-codec
│   │       └── types
│   ├── @nicolo-ribaudo
│   │   └── eslint-scope-5-internals
│   │       └── node_modules
│   │           ├── eslint-scope
│   │           │   └── lib
│   │           └── estraverse
│   ├── @nodelib
│   │   ├── fs.scandir
│   │   │   └── out
│   │   │       ├── adapters
│   │   │       ├── providers
│   │   │       ├── types
│   │   │       └── utils
│   │   ├── fs.stat
│   │   │   └── out
│   │   │       ├── adapters
│   │   │       ├── providers
│   │   │       └── types
│   │   └── fs.walk
│   │       └── out
│   │           ├── providers
│   │           ├── readers
│   │           └── types
│   ├── @paypal
│   │   ├── paypal-js
│   │   │   ├── dist
│   │   │   │   ├── cjs
│   │   │   │   ├── esm
│   │   │   │   └── iife
│   │   │   └── types
│   │   │       ├── apis
│   │   │       │   └── subscriptions
│   │   │       └── components
│   │   ├── react-paypal-js
│   │   │   └── dist
│   │   │       ├── cjs
│   │   │       ├── esm
│   │   │       └── types
│   │   │           ├── components
│   │   │           │   ├── braintree
│   │   │           │   └── hostedFields
│   │   │           ├── context
│   │   │           ├── hooks
│   │   │           └── types
│   │   │               └── braintree
│   │   └── sdk-constants
│   │       ├── dist
│   │       │   └── module
│   │       └── src
│   │           └── styles
│   ├── @pmmmwh
│   │   └── react-refresh-webpack-plugin
│   │       ├── client
│   │       │   └── utils
│   │       ├── lib
│   │       │   ├── runtime
│   │       │   └── utils
│   │       ├── loader
│   │       │   └── utils
│   │       ├── options
│   │       ├── overlay
│   │       │   ├── components
│   │       │   └── containers
│   │       ├── sockets
│   │       │   └── utils
│   │       └── types
│   │           ├── lib
│   │           ├── loader
│   │           └── options
│   ├── @rc-component
│   │   ├── color-picker
│   │   │   ├── es
│   │   │   │   ├── components
│   │   │   │   └── hooks
│   │   │   └── lib
│   │   │       ├── components
│   │   │       └── hooks
│   │   ├── context
│   │   │   ├── es
│   │   │   └── lib
│   │   ├── mini-decimal
│   │   │   ├── es
│   │   │   └── lib
│   │   ├── mutate-observer
│   │   │   ├── es
│   │   │   └── lib
│   │   ├── portal
│   │   │   ├── es
│   │   │   └── lib
│   │   ├── tour
│   │   │   ├── es
│   │   │   │   ├── TourStep
│   │   │   │   └── hooks
│   │   │   └── lib
│   │   │       ├── TourStep
│   │   │       └── hooks
│   │   └── trigger
│   │       ├── assets
│   │       │   └── index
│   │       ├── es
│   │       │   ├── Popup
│   │       │   └── hooks
│   │       └── lib
│   │           ├── Popup
│   │           └── hooks
│   ├── @remix-run
│   │   └── router
│   │       └── dist
│   ├── @rollup
│   │   ├── plugin-babel
│   │   │   ├── dist
│   │   │   └── types
│   │   ├── plugin-node-resolve
│   │   │   ├── dist
│   │   │   │   ├── cjs
│   │   │   │   └── es
│   │   │   └── types
│   │   ├── plugin-replace
│   │   │   ├── dist
│   │   │   ├── src
│   │   │   └── types
│   │   └── pluginutils
│   │       ├── dist
│   │       │   ├── cjs
│   │       │   └── es
│   │       ├── node_modules
│   │       │   └── @types
│   │       │       └── estree
│   │       └── types
│   ├── @rushstack
│   │   └── eslint-patch
│   │       └── lib
│   ├── @sinclair
│   │   └── typebox
│   │       ├── compiler
│   │       ├── conditional
│   │       ├── errors
│   │       ├── format
│   │       ├── guard
│   │       └── value
│   ├── @sinonjs
│   │   ├── commons
│   │   │   ├── lib
│   │   │   │   └── prototypes
│   │   │   └── types
│   │   │       └── prototypes
│   │   └── fake-timers
│   │       └── src
│   ├── @surma
│   │   └── rollup-plugin-off-main-thread
│   │       └── tests
│   │           └── fixtures
│   │               ├── amd-function-name
│   │               │   └── build
│   │               ├── assets-in-worker
│   │               │   └── build
│   │               │       └── assets
│   │               ├── dynamic-import
│   │               │   └── build
│   │               ├── import-meta
│   │               │   └── build
│   │               ├── import-meta-worker
│   │               │   └── build
│   │               ├── import-worker-url
│   │               │   └── build
│   │               ├── import-worker-url-custom-scheme
│   │               │   └── build
│   │               ├── module-worker
│   │               │   └── build
│   │               ├── more-workers
│   │               │   └── build
│   │               ├── public-path
│   │               │   └── build
│   │               ├── simple-bundle
│   │               │   └── build
│   │               ├── single-default
│   │               │   └── build
│   │               ├── url-import-meta-worker
│   │               │   └── build
│   │               └── worker
│   │                   └── build
│   ├── @svgr
│   │   ├── babel-plugin-add-jsx-attribute
│   │   │   └── lib
│   │   ├── babel-plugin-remove-jsx-attribute
│   │   │   └── lib
│   │   ├── babel-plugin-remove-jsx-empty-expression
│   │   │   └── lib
│   │   ├── babel-plugin-replace-jsx-attribute-value
│   │   │   └── lib
│   │   ├── babel-plugin-svg-dynamic-title
│   │   │   └── lib
│   │   ├── babel-plugin-svg-em-dimensions
│   │   │   └── lib
│   │   ├── babel-plugin-transform-react-native-svg
│   │   │   └── lib
│   │   ├── babel-plugin-transform-svg-component
│   │   │   └── lib
│   │   ├── babel-preset
│   │   │   └── lib
│   │   ├── core
│   │   │   └── lib
│   │   ├── hast-util-to-babel-ast
│   │   │   └── lib
│   │   ├── plugin-jsx
│   │   │   └── lib
│   │   ├── plugin-svgo
│   │   │   └── lib
│   │   └── webpack
│   │       └── lib
│   ├── @tootallnate
│   │   └── once
│   │       └── dist
│   ├── @trysound
│   │   └── sax
│   │       └── lib
│   ├── @types
│   │   ├── babel__core
│   │   ├── babel__generator
│   │   ├── babel__template
│   │   ├── babel__traverse
│   │   ├── body-parser
│   │   ├── bonjour
│   │   ├── connect
│   │   ├── connect-history-api-fallback
│   │   ├── eslint
│   │   │   └── rules
│   │   ├── eslint-scope
│   │   ├── estree
│   │   ├── express
│   │   ├── express-serve-static-core
│   │   ├── graceful-fs
│   │   ├── html-minifier-terser
│   │   ├── http-proxy
│   │   ├── istanbul-lib-coverage
│   │   ├── istanbul-lib-report
│   │   ├── istanbul-reports
│   │   ├── json-schema
│   │   ├── json5
│   │   ├── mime
│   │   ├── node
│   │   │   ├── assert
│   │   │   ├── dns
│   │   │   ├── fs
│   │   │   ├── readline
│   │   │   ├── stream
│   │   │   ├── timers
│   │   │   └── ts4.8
│   │   │       ├── assert
│   │   │       ├── dns
│   │   │       ├── fs
│   │   │       ├── readline
│   │   │       ├── stream
│   │   │       └── timers
│   │   ├── parse-json
│   │   ├── prettier
│   │   ├── q
│   │   ├── qs
│   │   ├── range-parser
│   │   ├── resolve
│   │   ├── retry
│   │   ├── semver
│   │   │   ├── classes
│   │   │   ├── functions
│   │   │   ├── internals
│   │   │   └── ranges
│   │   ├── send
│   │   ├── serve-index
│   │   ├── serve-static
│   │   ├── sockjs
│   │   ├── stack-utils
│   │   ├── trusted-types
│   │   │   └── lib
│   │   ├── ws
│   │   ├── yargs
│   │   └── yargs-parser
│   ├── @typescript-eslint
│   │   ├── eslint-plugin
│   │   │   ├── dist
│   │   │   │   ├── configs
│   │   │   │   ├── rules
│   │   │   │   │   ├── enum-utils
│   │   │   │   │   └── naming-convention-utils
│   │   │   │   └── util
│   │   │   └── docs
│   │   │       └── rules
│   │   ├── experimental-utils
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   └── dist
│   │   ├── parser
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   └── dist
│   │   ├── scope-manager
│   │   │   └── dist
│   │   │       ├── definition
│   │   │       ├── lib
│   │   │       ├── referencer
│   │   │       ├── scope
│   │   │       └── variable
│   │   ├── type-utils
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   └── dist
│   │   ├── types
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       └── generated
│   │   │   └── dist
│   │   │       └── generated
│   │   ├── typescript-estree
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── create-program
│   │   │   │       ├── jsx
│   │   │   │       ├── parseSettings
│   │   │   │       └── ts-estree
│   │   │   └── dist
│   │   │       ├── create-program
│   │   │       ├── jsx
│   │   │       ├── parseSettings
│   │   │       └── ts-estree
│   │   ├── utils
│   │   │   ├── _ts3.4
│   │   │   │   └── dist
│   │   │   │       ├── ast-utils
│   │   │   │       │   └── eslint-utils
│   │   │   │       ├── eslint-utils
│   │   │   │       │   └── rule-tester
│   │   │   │       ├── ts-eslint
│   │   │   │       └── ts-eslint-scope
│   │   │   ├── dist
│   │   │   │   ├── ast-utils
│   │   │   │   │   └── eslint-utils
│   │   │   │   ├── eslint-utils
│   │   │   │   │   └── rule-tester
│   │   │   │   ├── ts-eslint
│   │   │   │   └── ts-eslint-scope
│   │   │   └── node_modules
│   │   │       ├── eslint-scope
│   │   │       │   └── lib
│   │   │       └── estraverse
│   │   └── visitor-keys
│   │       ├── _ts3.4
│   │       │   └── dist
│   │       └── dist
│   ├── @webassemblyjs
│   │   ├── ast
│   │   │   ├── lib
│   │   │   │   ├── transform
│   │   │   │   │   ├── ast-module-to-module-context
│   │   │   │   │   ├── denormalize-type-references
│   │   │   │   │   └── wast-identifier-to-index
│   │   │   │   └── types
│   │   │   └── scripts
│   │   ├── floating-point-hex-parser
│   │   │   └── lib
│   │   ├── helper-api-error
│   │   │   └── lib
│   │   ├── helper-buffer
│   │   │   └── lib
│   │   ├── helper-numbers
│   │   │   ├── lib
│   │   │   └── src
│   │   ├── helper-wasm-bytecode
│   │   │   └── lib
│   │   ├── helper-wasm-section
│   │   │   └── lib
│   │   ├── ieee754
│   │   │   ├── lib
│   │   │   └── src
│   │   ├── leb128
│   │   │   └── lib
│   │   ├── utf8
│   │   │   ├── lib
│   │   │   ├── src
│   │   │   └── test
│   │   ├── wasm-edit
│   │   │   └── lib
│   │   ├── wasm-gen
│   │   │   └── lib
│   │   │       └── encoder
│   │   ├── wasm-opt
│   │   │   └── lib
│   │   ├── wasm-parser
│   │   │   └── lib
│   │   │       └── types
│   │   └── wast-printer
│   │       └── lib
│   ├── @xtuc
│   │   ├── ieee754
│   │   │   └── dist
│   │   └── long
│   │       ├── dist
│   │       └── src
│   ├── abab
│   │   └── lib
│   ├── accepts
│   ├── acorn
│   │   ├── bin
│   │   └── dist
│   ├── acorn-globals
│   │   └── node_modules
│   │       └── acorn
│   │           ├── bin
│   │           └── dist
│   ├── acorn-import-assertions
│   │   ├── lib
│   │   └── src
│   ├── acorn-jsx
│   ├── acorn-walk
│   │   └── dist
│   ├── address
│   │   └── lib
│   ├── adjust-sourcemap-loader
│   │   ├── codec
│   │   │   └── utility
│   │   └── lib
│   │       └── process
│   ├── agent-base
│   │   ├── dist
│   │   │   └── src
│   │   └── src
│   ├── ajv
│   │   ├── dist
│   │   ├── lib
│   │   │   ├── compile
│   │   │   ├── dot
│   │   │   ├── dotjs
│   │   │   └── refs
│   │   └── scripts
│   ├── ajv-formats
│   │   ├── dist
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   └── json-schema-traverse
│   │   │       └── spec
│   │   │           └── fixtures
│   │   └── src
│   ├── ajv-keywords
│   │   └── keywords
│   │       ├── dot
│   │       └── dotjs
│   ├── ansi-escapes
│   ├── ansi-html-community
│   │   └── bin
│   ├── ansi-regex
│   ├── ansi-styles
│   ├── antd
│   │   ├── dist
│   │   ├── es
│   │   │   ├── _util
│   │   │   │   ├── hooks
│   │   │   │   └── wave
│   │   │   ├── affix
│   │   │   │   └── style
│   │   │   ├── alert
│   │   │   │   └── style
│   │   │   ├── anchor
│   │   │   │   └── style
│   │   │   ├── app
│   │   │   │   └── style
│   │   │   ├── auto-complete
│   │   │   ├── avatar
│   │   │   │   └── style
│   │   │   ├── back-top
│   │   │   │   └── style
│   │   │   ├── badge
│   │   │   │   └── style
│   │   │   ├── breadcrumb
│   │   │   │   └── style
│   │   │   ├── button
│   │   │   │   └── style
│   │   │   ├── calendar
│   │   │   │   ├── locale
│   │   │   │   └── style
│   │   │   ├── card
│   │   │   │   └── style
│   │   │   ├── carousel
│   │   │   │   └── style
│   │   │   ├── cascader
│   │   │   │   └── style
│   │   │   ├── checkbox
│   │   │   │   └── style
│   │   │   ├── col
│   │   │   │   └── style
│   │   │   ├── collapse
│   │   │   │   └── style
│   │   │   ├── color-picker
│   │   │   │   ├── components
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── config-provider
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── date-picker
│   │   │   │   ├── generatePicker
│   │   │   │   ├── locale
│   │   │   │   └── style
│   │   │   ├── descriptions
│   │   │   │   └── style
│   │   │   ├── divider
│   │   │   │   └── style
│   │   │   ├── drawer
│   │   │   │   └── style
│   │   │   ├── dropdown
│   │   │   │   └── style
│   │   │   ├── empty
│   │   │   │   └── style
│   │   │   ├── float-button
│   │   │   │   └── style
│   │   │   ├── form
│   │   │   │   ├── FormItem
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── grid
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── icon
│   │   │   ├── image
│   │   │   │   └── style
│   │   │   ├── input
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── input-number
│   │   │   │   └── style
│   │   │   ├── layout
│   │   │   │   └── style
│   │   │   ├── list
│   │   │   │   └── style
│   │   │   ├── locale
│   │   │   ├── mentions
│   │   │   │   └── style
│   │   │   ├── menu
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── message
│   │   │   │   └── style
│   │   │   ├── modal
│   │   │   │   ├── style
│   │   │   │   └── useModal
│   │   │   ├── notification
│   │   │   │   └── style
│   │   │   ├── pagination
│   │   │   │   └── style
│   │   │   ├── popconfirm
│   │   │   │   └── style
│   │   │   ├── popover
│   │   │   │   └── style
│   │   │   ├── progress
│   │   │   │   └── style
│   │   │   ├── qrcode
│   │   │   │   └── style
│   │   │   ├── radio
│   │   │   │   └── style
│   │   │   ├── rate
│   │   │   │   └── style
│   │   │   ├── result
│   │   │   │   └── style
│   │   │   ├── row
│   │   │   │   └── style
│   │   │   ├── segmented
│   │   │   │   └── style
│   │   │   ├── select
│   │   │   │   ├── style
│   │   │   │   └── utils
│   │   │   ├── skeleton
│   │   │   │   └── style
│   │   │   ├── slider
│   │   │   │   └── style
│   │   │   ├── space
│   │   │   │   └── style
│   │   │   ├── spin
│   │   │   │   └── style
│   │   │   ├── statistic
│   │   │   │   └── style
│   │   │   ├── steps
│   │   │   │   └── style
│   │   │   ├── style
│   │   │   │   └── motion
│   │   │   ├── switch
│   │   │   │   └── style
│   │   │   ├── table
│   │   │   │   ├── hooks
│   │   │   │   │   └── useFilter
│   │   │   │   └── style
│   │   │   ├── tabs
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── tag
│   │   │   │   └── style
│   │   │   ├── theme
│   │   │   │   ├── interface
│   │   │   │   │   └── maps
│   │   │   │   ├── themes
│   │   │   │   │   ├── compact
│   │   │   │   │   ├── dark
│   │   │   │   │   ├── default
│   │   │   │   │   └── shared
│   │   │   │   └── util
│   │   │   ├── time-picker
│   │   │   │   └── locale
│   │   │   ├── timeline
│   │   │   │   └── style
│   │   │   ├── tooltip
│   │   │   │   └── style
│   │   │   ├── tour
│   │   │   │   └── style
│   │   │   ├── transfer
│   │   │   │   └── style
│   │   │   ├── tree
│   │   │   │   ├── style
│   │   │   │   └── utils
│   │   │   ├── tree-select
│   │   │   │   └── style
│   │   │   ├── typography
│   │   │   │   ├── Base
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── upload
│   │   │   │   ├── UploadList
│   │   │   │   └── style
│   │   │   ├── version
│   │   │   └── watermark
│   │   ├── lib
│   │   │   ├── _util
│   │   │   │   ├── hooks
│   │   │   │   └── wave
│   │   │   ├── affix
│   │   │   │   └── style
│   │   │   ├── alert
│   │   │   │   └── style
│   │   │   ├── anchor
│   │   │   │   └── style
│   │   │   ├── app
│   │   │   │   └── style
│   │   │   ├── auto-complete
│   │   │   ├── avatar
│   │   │   │   └── style
│   │   │   ├── back-top
│   │   │   │   └── style
│   │   │   ├── badge
│   │   │   │   └── style
│   │   │   ├── breadcrumb
│   │   │   │   └── style
│   │   │   ├── button
│   │   │   │   └── style
│   │   │   ├── calendar
│   │   │   │   ├── locale
│   │   │   │   └── style
│   │   │   ├── card
│   │   │   │   └── style
│   │   │   ├── carousel
│   │   │   │   └── style
│   │   │   ├── cascader
│   │   │   │   └── style
│   │   │   ├── checkbox
│   │   │   │   └── style
│   │   │   ├── col
│   │   │   │   └── style
│   │   │   ├── collapse
│   │   │   │   └── style
│   │   │   ├── color-picker
│   │   │   │   ├── components
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── config-provider
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── date-picker
│   │   │   │   ├── generatePicker
│   │   │   │   ├── locale
│   │   │   │   └── style
│   │   │   ├── descriptions
│   │   │   │   └── style
│   │   │   ├── divider
│   │   │   │   └── style
│   │   │   ├── drawer
│   │   │   │   └── style
│   │   │   ├── dropdown
│   │   │   │   └── style
│   │   │   ├── empty
│   │   │   │   └── style
│   │   │   ├── float-button
│   │   │   │   └── style
│   │   │   ├── form
│   │   │   │   ├── FormItem
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── grid
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── icon
│   │   │   ├── image
│   │   │   │   └── style
│   │   │   ├── input
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── input-number
│   │   │   │   └── style
│   │   │   ├── layout
│   │   │   │   └── style
│   │   │   ├── list
│   │   │   │   └── style
│   │   │   ├── locale
│   │   │   ├── mentions
│   │   │   │   └── style
│   │   │   ├── menu
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── message
│   │   │   │   └── style
│   │   │   ├── modal
│   │   │   │   ├── style
│   │   │   │   └── useModal
│   │   │   ├── notification
│   │   │   │   └── style
│   │   │   ├── pagination
│   │   │   │   └── style
│   │   │   ├── popconfirm
│   │   │   │   └── style
│   │   │   ├── popover
│   │   │   │   └── style
│   │   │   ├── progress
│   │   │   │   └── style
│   │   │   ├── qrcode
│   │   │   │   └── style
│   │   │   ├── radio
│   │   │   │   └── style
│   │   │   ├── rate
│   │   │   │   └── style
│   │   │   ├── result
│   │   │   │   └── style
│   │   │   ├── row
│   │   │   │   └── style
│   │   │   ├── segmented
│   │   │   │   └── style
│   │   │   ├── select
│   │   │   │   ├── style
│   │   │   │   └── utils
│   │   │   ├── skeleton
│   │   │   │   └── style
│   │   │   ├── slider
│   │   │   │   └── style
│   │   │   ├── space
│   │   │   │   └── style
│   │   │   ├── spin
│   │   │   │   └── style
│   │   │   ├── statistic
│   │   │   │   └── style
│   │   │   ├── steps
│   │   │   │   └── style
│   │   │   ├── style
│   │   │   │   └── motion
│   │   │   ├── switch
│   │   │   │   └── style
│   │   │   ├── table
│   │   │   │   ├── hooks
│   │   │   │   │   └── useFilter
│   │   │   │   └── style
│   │   │   ├── tabs
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── tag
│   │   │   │   └── style
│   │   │   ├── theme
│   │   │   │   ├── interface
│   │   │   │   │   └── maps
│   │   │   │   ├── themes
│   │   │   │   │   ├── compact
│   │   │   │   │   ├── dark
│   │   │   │   │   ├── default
│   │   │   │   │   └── shared
│   │   │   │   └── util
│   │   │   ├── time-picker
│   │   │   │   └── locale
│   │   │   ├── timeline
│   │   │   │   └── style
│   │   │   ├── tooltip
│   │   │   │   └── style
│   │   │   ├── tour
│   │   │   │   └── style
│   │   │   ├── transfer
│   │   │   │   └── style
│   │   │   ├── tree
│   │   │   │   ├── style
│   │   │   │   └── utils
│   │   │   ├── tree-select
│   │   │   │   └── style
│   │   │   ├── typography
│   │   │   │   ├── Base
│   │   │   │   ├── hooks
│   │   │   │   └── style
│   │   │   ├── upload
│   │   │   │   ├── UploadList
│   │   │   │   └── style
│   │   │   ├── version
│   │   │   └── watermark
│   │   └── locale
│   ├── any-promise
│   │   └── register
│   ├── anymatch
│   ├── arg
│   ├── argparse
│   │   └── lib
│   │       ├── action
│   │       │   ├── append
│   │       │   └── store
│   │       ├── argument
│   │       └── help
│   ├── aria-query
│   │   └── lib
│   │       ├── etc
│   │       │   └── roles
│   │       │       ├── abstract
│   │       │       ├── dpub
│   │       │       ├── graphics
│   │       │       └── literal
│   │       └── util
│   ├── array-buffer-byte-length
│   │   └── test
│   ├── array-flatten
│   ├── array-includes
│   │   └── test
│   ├── array-tree-filter
│   │   └── lib
│   ├── array-union
│   ├── array.prototype.flat
│   │   └── test
│   ├── array.prototype.flatmap
│   │   └── test
│   ├── array.prototype.reduce
│   │   └── test
│   ├── array.prototype.tosorted
│   │   └── test
│   ├── asap
│   ├── asn1.js
│   │   ├── lib
│   │   │   └── asn1
│   │   │       ├── base
│   │   │       ├── constants
│   │   │       ├── decoders
│   │   │       └── encoders
│   │   └── node_modules
│   │       └── bn.js
│   │           └── lib
│   ├── ast-types-flow
│   │   └── lib
│   ├── async
│   │   ├── dist
│   │   └── internal
│   ├── async-validator
│   │   ├── dist-node
│   │   ├── dist-types
│   │   │   ├── rule
│   │   │   └── validator
│   │   └── dist-web
│   ├── asynckit
│   │   └── lib
│   ├── at-least-node
│   ├── autoprefixer
│   │   ├── bin
│   │   ├── data
│   │   └── lib
│   │       └── hacks
│   ├── available-typed-arrays
│   │   └── test
│   ├── axe-core
│   │   └── locales
│   ├── axios
│   │   ├── dist
│   │   │   ├── browser
│   │   │   ├── esm
│   │   │   └── node
│   │   ├── lib
│   │   │   ├── adapters
│   │   │   ├── cancel
│   │   │   ├── core
│   │   │   ├── defaults
│   │   │   ├── env
│   │   │   │   └── classes
│   │   │   ├── helpers
│   │   │   └── platform
│   │   │       ├── browser
│   │   │       │   └── classes
│   │   │       └── node
│   │   │           └── classes
│   │   └── node_modules
│   │       └── form-data
│   │           └── lib
│   ├── axobject-query
│   │   └── lib
│   │       ├── etc
│   │       │   └── objects
│   │       └── util
│   ├── babel-jest
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── babel-loader
│   │   ├── lib
│   │   └── node_modules
│   │       └── schema-utils
│   │           ├── declarations
│   │           │   ├── keywords
│   │           │   └── util
│   │           └── dist
│   │               ├── keywords
│   │               └── util
│   ├── babel-plugin-istanbul
│   │   └── lib
│   ├── babel-plugin-jest-hoist
│   │   └── build
│   ├── babel-plugin-macros
│   │   └── dist
│   ├── babel-plugin-named-asset-import
│   ├── babel-plugin-polyfill-corejs2
│   │   ├── esm
│   │   ├── lib
│   │   └── node_modules
│   │       └── semver
│   │           └── bin
│   ├── babel-plugin-polyfill-corejs3
│   │   ├── core-js-compat
│   │   ├── esm
│   │   └── lib
│   ├── babel-plugin-polyfill-regenerator
│   │   ├── esm
│   │   └── lib
│   ├── babel-plugin-transform-react-remove-prop-types
│   │   ├── lib
│   │   └── src
│   ├── babel-preset-current-node-syntax
│   │   ├── scripts
│   │   └── src
│   ├── babel-preset-jest
│   ├── babel-preset-react-app
│   ├── balanced-match
│   ├── base64-js
│   ├── batch
│   ├── bfj
│   │   ├── src
│   │   └── test
│   │       └── unit
│   ├── big.js
│   ├── bignumber.js
│   │   └── doc
│   ├── binary-extensions
│   ├── bluebird
│   │   └── js
│   │       ├── browser
│   │       └── release
│   ├── blueimp-canvas-to-blob
│   │   └── js
│   ├── bn.js
│   │   └── lib
│   ├── body-parser
│   │   ├── lib
│   │   │   └── types
│   │   └── node_modules
│   │       ├── bytes
│   │       ├── debug
│   │       │   └── src
│   │       ├── iconv-lite
│   │       │   ├── encodings
│   │       │   │   └── tables
│   │       │   └── lib
│   │       ├── ms
│   │       └── qs
│   │           ├── dist
│   │           ├── lib
│   │           └── test
│   ├── bonjour-service
│   │   ├── dist
│   │   │   └── lib
│   │   │       └── utils
│   │   └── types
│   ├── boolbase
│   ├── brace-expansion
│   ├── braces
│   │   └── lib
│   ├── brorand
│   │   └── test
│   ├── browser-process-hrtime
│   ├── browserify-aes
│   │   └── modes
│   ├── browserify-cipher
│   ├── browserify-des
│   ├── browserify-rsa
│   ├── browserify-sign
│   │   └── browser
│   ├── browserslist
│   ├── bser
│   ├── buffer
│   ├── buffer-equal-constant-time
│   ├── buffer-from
│   ├── buffer-xor
│   │   └── test
│   ├── builtin-modules
│   ├── bytes
│   ├── call-bind
│   │   └── test
│   ├── callsites
│   ├── camel-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── camelcase
│   ├── camelcase-css
│   ├── caniuse-api
│   │   └── dist
│   ├── caniuse-lite
│   │   ├── data
│   │   │   ├── features
│   │   │   └── regions
│   │   └── dist
│   │       ├── lib
│   │       └── unpacker
│   ├── case-sensitive-paths-webpack-plugin
│   ├── chalk
│   │   └── types
│   ├── char-regex
│   ├── check-types
│   │   └── src
│   ├── chokidar
│   │   ├── lib
│   │   ├── node_modules
│   │   │   └── glob-parent
│   │   └── types
│   ├── chrome-trace-event
│   │   └── dist
│   ├── ci-info
│   ├── cipher-base
│   ├── cjs-module-lexer
│   │   └── dist
│   ├── classnames
│   ├── clean-css
│   │   ├── lib
│   │   │   ├── optimizer
│   │   │   │   ├── configuration
│   │   │   │   │   └── properties
│   │   │   │   ├── level-0
│   │   │   │   ├── level-1
│   │   │   │   │   ├── property-optimizers
│   │   │   │   │   └── value-optimizers
│   │   │   │   │       └── color
│   │   │   │   └── level-2
│   │   │   │       └── properties
│   │   │   ├── options
│   │   │   ├── reader
│   │   │   ├── tokenizer
│   │   │   ├── utils
│   │   │   └── writer
│   │   └── node_modules
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── cliui
│   │   └── build
│   │       └── lib
│   ├── co
│   ├── coa
│   │   └── lib
│   ├── collect-v8-coverage
│   ├── color-convert
│   ├── color-name
│   ├── colord
│   │   └── plugins
│   ├── colorette
│   ├── combined-stream
│   │   └── lib
│   ├── commander
│   │   ├── lib
│   │   └── typings
│   ├── common-path-prefix
│   ├── common-tags
│   │   ├── dist
│   │   ├── es
│   │   │   ├── TemplateTag
│   │   │   ├── codeBlock
│   │   │   ├── commaLists
│   │   │   ├── commaListsAnd
│   │   │   ├── commaListsOr
│   │   │   ├── html
│   │   │   ├── inlineArrayTransformer
│   │   │   ├── inlineLists
│   │   │   ├── oneLine
│   │   │   ├── oneLineCommaLists
│   │   │   ├── oneLineCommaListsAnd
│   │   │   ├── oneLineCommaListsOr
│   │   │   ├── oneLineInlineLists
│   │   │   ├── oneLineTrim
│   │   │   ├── removeNonPrintingValuesTransformer
│   │   │   ├── replaceResultTransformer
│   │   │   ├── replaceStringTransformer
│   │   │   ├── replaceSubstitutionTransformer
│   │   │   ├── safeHtml
│   │   │   ├── source
│   │   │   ├── splitStringTransformer
│   │   │   ├── stripIndent
│   │   │   ├── stripIndentTransformer
│   │   │   ├── stripIndents
│   │   │   ├── trimResultTransformer
│   │   │   └── utils
│   │   │       └── readFromFixture
│   │   └── lib
│   │       ├── TemplateTag
│   │       ├── codeBlock
│   │       ├── commaLists
│   │       ├── commaListsAnd
│   │       ├── commaListsOr
│   │       ├── html
│   │       ├── inlineArrayTransformer
│   │       ├── inlineLists
│   │       ├── oneLine
│   │       ├── oneLineCommaLists
│   │       ├── oneLineCommaListsAnd
│   │       ├── oneLineCommaListsOr
│   │       ├── oneLineInlineLists
│   │       ├── oneLineTrim
│   │       ├── removeNonPrintingValuesTransformer
│   │       ├── replaceResultTransformer
│   │       ├── replaceStringTransformer
│   │       ├── replaceSubstitutionTransformer
│   │       ├── safeHtml
│   │       ├── source
│   │       ├── splitStringTransformer
│   │       ├── stripIndent
│   │       ├── stripIndentTransformer
│   │       ├── stripIndents
│   │       ├── trimResultTransformer
│   │       └── utils
│   │           └── readFromFixture
│   ├── commondir
│   │   ├── example
│   │   └── test
│   ├── compressible
│   ├── compression
│   │   └── node_modules
│   │       ├── debug
│   │       │   └── src
│   │       ├── ms
│   │       └── safe-buffer
│   ├── compute-scroll-into-view
│   │   ├── dist
│   │   └── src
│   ├── concat-map
│   │   ├── example
│   │   └── test
│   ├── confusing-browser-globals
│   ├── connect-history-api-fallback
│   │   └── lib
│   ├── content-disposition
│   ├── content-type
│   ├── convert-source-map
│   ├── cookie
│   ├── cookie-signature
│   ├── copy-to-clipboard
│   │   └── example
│   ├── core-js
│   │   ├── actual
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-iterator
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── es
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── features
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-disposable-stack
│   │   │   ├── async-iterator
│   │   │   ├── bigint
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── observable
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── full
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-disposable-stack
│   │   │   ├── async-iterator
│   │   │   ├── bigint
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── observable
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── internals
│   │   ├── modules
│   │   ├── proposals
│   │   ├── stable
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── stage
│   │   └── web
│   ├── core-js-compat
│   ├── core-js-pure
│   │   ├── actual
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-iterator
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── es
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── features
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-disposable-stack
│   │   │   ├── async-iterator
│   │   │   ├── bigint
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── observable
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── full
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── async-disposable-stack
│   │   │   ├── async-iterator
│   │   │   ├── bigint
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── disposable-stack
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── iterator
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── observable
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── internals
│   │   ├── modules
│   │   ├── proposals
│   │   ├── stable
│   │   │   ├── array
│   │   │   │   └── virtual
│   │   │   ├── array-buffer
│   │   │   ├── data-view
│   │   │   ├── date
│   │   │   ├── dom-collections
│   │   │   ├── dom-exception
│   │   │   ├── error
│   │   │   ├── function
│   │   │   │   └── virtual
│   │   │   ├── instance
│   │   │   ├── json
│   │   │   ├── map
│   │   │   ├── math
│   │   │   ├── number
│   │   │   │   └── virtual
│   │   │   ├── object
│   │   │   ├── promise
│   │   │   ├── reflect
│   │   │   ├── regexp
│   │   │   ├── set
│   │   │   ├── string
│   │   │   │   └── virtual
│   │   │   ├── symbol
│   │   │   ├── typed-array
│   │   │   ├── url
│   │   │   ├── url-search-params
│   │   │   ├── weak-map
│   │   │   └── weak-set
│   │   ├── stage
│   │   └── web
│   ├── core-util-is
│   │   └── lib
│   ├── cosmiconfig
│   │   └── dist
│   ├── create-ecdh
│   │   └── node_modules
│   │       └── bn.js
│   │           └── lib
│   ├── create-hash
│   ├── create-hmac
│   ├── cross-spawn
│   │   └── lib
│   │       └── util
│   ├── crypto-browserify
│   │   ├── example
│   │   └── test
│   │       └── node
│   ├── crypto-random-string
│   ├── css-blank-pseudo
│   │   └── dist
│   ├── css-declaration-sorter
│   │   ├── dist
│   │   ├── orders
│   │   └── src
│   ├── css-has-pseudo
│   │   └── dist
│   ├── css-loader
│   │   └── dist
│   │       ├── plugins
│   │       └── runtime
│   ├── css-minimizer-webpack-plugin
│   │   ├── dist
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── ajv-keywords
│   │   │   │   ├── dist
│   │   │   │   │   ├── definitions
│   │   │   │   │   └── keywords
│   │   │   │   └── src
│   │   │   │       ├── definitions
│   │   │   │       └── keywords
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   ├── schema-utils
│   │   │   │   ├── declarations
│   │   │   │   │   ├── keywords
│   │   │   │   │   └── util
│   │   │   │   └── dist
│   │   │   │       ├── keywords
│   │   │   │       └── util
│   │   │   └── source-map
│   │   │       ├── dist
│   │   │       └── lib
│   │   └── types
│   ├── css-prefers-color-scheme
│   │   └── dist
│   ├── css-select
│   │   └── lib
│   │       └── pseudo-selectors
│   ├── css-select-base-adapter
│   │   └── test
│   ├── css-tree
│   │   ├── data
│   │   ├── dist
│   │   ├── lib
│   │   │   ├── common
│   │   │   ├── convertor
│   │   │   ├── definition-syntax
│   │   │   ├── generator
│   │   │   ├── lexer
│   │   │   ├── parser
│   │   │   ├── syntax
│   │   │   │   ├── atrule
│   │   │   │   ├── config
│   │   │   │   ├── function
│   │   │   │   ├── node
│   │   │   │   ├── pseudo
│   │   │   │   │   └── common
│   │   │   │   └── scope
│   │   │   ├── tokenizer
│   │   │   ├── utils
│   │   │   └── walker
│   │   └── node_modules
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── css-what
│   │   └── lib
│   │       ├── commonjs
│   │       └── es
│   ├── cssdb
│   ├── cssesc
│   │   ├── bin
│   │   └── man
│   ├── cssnano
│   │   ├── src
│   │   │   ├── postcss-discard-comments
│   │   │   ├── postcss-discard-empty
│   │   │   └── postcss-normalize-whitespace
│   │   └── types
│   ├── cssnano-preset-default
│   │   ├── src
│   │   └── types
│   ├── cssnano-utils
│   │   ├── src
│   │   └── types
│   ├── csso
│   │   ├── dist
│   │   ├── lib
│   │   │   ├── clean
│   │   │   ├── replace
│   │   │   │   ├── atrule
│   │   │   │   └── property
│   │   │   └── restructure
│   │   │       └── prepare
│   │   └── node_modules
│   │       ├── css-tree
│   │       │   ├── data
│   │       │   ├── dist
│   │       │   └── lib
│   │       │       ├── common
│   │       │       ├── convertor
│   │       │       ├── definition-syntax
│   │       │       ├── generator
│   │       │       ├── lexer
│   │       │       ├── parser
│   │       │       ├── syntax
│   │       │       │   ├── atrule
│   │       │       │   ├── config
│   │       │       │   ├── function
│   │       │       │   ├── node
│   │       │       │   ├── pseudo
│   │       │       │   │   └── common
│   │       │       │   └── scope
│   │       │       ├── tokenizer
│   │       │       ├── utils
│   │       │       └── walker
│   │       ├── mdn-data
│   │       │   ├── api
│   │       │   ├── css
│   │       │   └── l10n
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── cssom
│   │   └── lib
│   ├── cssstyle
│   │   ├── lib
│   │   │   ├── properties
│   │   │   └── utils
│   │   └── node_modules
│   │       └── cssom
│   │           └── lib
│   ├── csstype
│   ├── damerau-levenshtein
│   │   ├── scripts
│   │   └── test
│   ├── data-urls
│   │   └── lib
│   ├── dayjs
│   │   ├── esm
│   │   │   ├── locale
│   │   │   └── plugin
│   │   │       ├── advancedFormat
│   │   │       ├── arraySupport
│   │   │       ├── badMutable
│   │   │       ├── bigIntSupport
│   │   │       ├── buddhistEra
│   │   │       ├── calendar
│   │   │       ├── customParseFormat
│   │   │       ├── dayOfYear
│   │   │       ├── devHelper
│   │   │       ├── duration
│   │   │       ├── isBetween
│   │   │       ├── isLeapYear
│   │   │       ├── isMoment
│   │   │       ├── isSameOrAfter
│   │   │       ├── isSameOrBefore
│   │   │       ├── isToday
│   │   │       ├── isTomorrow
│   │   │       ├── isYesterday
│   │   │       ├── isoWeek
│   │   │       ├── isoWeeksInYear
│   │   │       ├── localeData
│   │   │       ├── localizedFormat
│   │   │       ├── minMax
│   │   │       ├── objectSupport
│   │   │       ├── pluralGetSet
│   │   │       ├── preParsePostFormat
│   │   │       ├── quarterOfYear
│   │   │       ├── relativeTime
│   │   │       ├── timezone
│   │   │       ├── toArray
│   │   │       ├── toObject
│   │   │       ├── updateLocale
│   │   │       ├── utc
│   │   │       ├── weekOfYear
│   │   │       ├── weekYear
│   │   │       └── weekday
│   │   ├── locale
│   │   └── plugin
│   ├── debug
│   │   └── src
│   ├── decimal.js
│   ├── dedent
│   │   └── dist
│   ├── deep-equal
│   │   ├── example
│   │   └── test
│   ├── deep-is
│   │   ├── example
│   │   └── test
│   ├── deepmerge
│   │   └── dist
│   ├── default-gateway
│   ├── define-lazy-prop
│   ├── define-properties
│   ├── delayed-stream
│   │   └── lib
│   ├── depd
│   │   └── lib
│   │       └── browser
│   ├── des.js
│   │   ├── lib
│   │   │   └── des
│   │   └── test
│   ├── destroy
│   ├── detect-newline
│   ├── detect-node
│   ├── detect-port-alt
│   │   ├── bin
│   │   ├── lib
│   │   └── node_modules
│   │       ├── debug
│   │       │   └── src
│   │       └── ms
│   ├── didyoumean
│   ├── diff-sequences
│   │   ├── build
│   │   └── perf
│   ├── diffie-hellman
│   │   ├── lib
│   │   └── node_modules
│   │       └── bn.js
│   │           └── lib
│   ├── dir-glob
│   ├── dlv
│   │   └── dist
│   ├── dns-equal
│   ├── dns-packet
│   ├── doctrine
│   │   └── lib
│   ├── dom-align
│   │   ├── dist-node
│   │   ├── dist-types
│   │   └── dist-web
│   ├── dom-converter
│   │   └── lib
│   ├── dom-serializer
│   │   └── lib
│   │       └── esm
│   ├── domelementtype
│   │   └── lib
│   │       └── esm
│   ├── domexception
│   │   ├── lib
│   │   └── node_modules
│   │       └── webidl-conversions
│   │           └── lib
│   ├── domhandler
│   │   └── lib
│   ├── domutils
│   │   └── lib
│   ├── dot-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── dotenv
│   │   ├── lib
│   │   └── types
│   ├── dotenv-expand
│   │   └── lib
│   ├── duplexer
│   │   └── test
│   ├── ecdsa-sig-formatter
│   │   └── src
│   ├── ee-first
│   ├── ejs
│   │   ├── bin
│   │   └── lib
│   ├── electron-to-chromium
│   ├── elliptic
│   │   ├── lib
│   │   │   └── elliptic
│   │   │       ├── curve
│   │   │       ├── ec
│   │   │       ├── eddsa
│   │   │       └── precomputed
│   │   └── node_modules
│   │       └── bn.js
│   │           └── lib
│   ├── emittery
│   ├── emoji-regex
│   │   └── es2015
│   ├── emojis-list
│   ├── encodeurl
│   ├── enhanced-resolve
│   │   └── lib
│   │       └── util
│   ├── entities
│   │   └── lib
│   │       └── maps
│   ├── error-ex
│   ├── error-stack-parser
│   │   └── dist
│   ├── es-abstract
│   │   ├── 2015
│   │   ├── 2016
│   │   ├── 2017
│   │   ├── 2018
│   │   ├── 2019
│   │   ├── 2020
│   │   │   ├── BigInt
│   │   │   └── Number
│   │   ├── 2021
│   │   │   ├── BigInt
│   │   │   └── Number
│   │   ├── 2022
│   │   │   ├── BigInt
│   │   │   └── Number
│   │   ├── 5
│   │   ├── helpers
│   │   └── operations
│   ├── es-array-method-boxes-properly
│   │   └── test
│   ├── es-get-iterator
│   │   └── test
│   ├── es-module-lexer
│   │   ├── dist
│   │   └── types
│   ├── es-set-tostringtag
│   │   └── test
│   ├── es-shim-unscopables
│   │   └── test
│   ├── es-to-primitive
│   │   ├── helpers
│   │   └── test
│   ├── escalade
│   │   ├── dist
│   │   └── sync
│   ├── escape-html
│   ├── escape-string-regexp
│   ├── escodegen
│   │   ├── bin
│   │   └── node_modules
│   │       ├── levn
│   │       │   └── lib
│   │       ├── optionator
│   │       │   └── lib
│   │       ├── prelude-ls
│   │       │   └── lib
│   │       ├── source-map
│   │       │   ├── dist
│   │       │   └── lib
│   │       └── type-check
│   │           └── lib
│   ├── eslint
│   │   ├── bin
│   │   ├── conf
│   │   ├── lib
│   │   │   ├── cli-engine
│   │   │   │   └── formatters
│   │   │   ├── config
│   │   │   ├── eslint
│   │   │   ├── linter
│   │   │   │   └── code-path-analysis
│   │   │   ├── rule-tester
│   │   │   ├── rules
│   │   │   │   └── utils
│   │   │   │       ├── patterns
│   │   │   │       └── unicode
│   │   │   ├── shared
│   │   │   └── source-code
│   │   │       └── token-store
│   │   ├── messages
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── argparse
│   │       │   └── lib
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── escape-string-regexp
│   │       ├── globals
│   │       ├── has-flag
│   │       ├── js-yaml
│   │       │   ├── bin
│   │       │   ├── dist
│   │       │   └── lib
│   │       │       ├── schema
│   │       │       └── type
│   │       ├── supports-color
│   │       └── type-fest
│   │           ├── source
│   │           └── ts41
│   ├── eslint-config-react-app
│   ├── eslint-import-resolver-node
│   │   └── node_modules
│   │       └── debug
│   │           └── src
│   ├── eslint-module-utils
│   │   └── node_modules
│   │       └── debug
│   │           └── src
│   ├── eslint-plugin-flowtype
│   │   └── dist
│   │       ├── bin
│   │       ├── configs
│   │       ├── rules
│   │       │   ├── arrayStyle
│   │       │   └── typeColonSpacing
│   │       └── utilities
│   ├── eslint-plugin-import
│   │   ├── config
│   │   ├── docs
│   │   │   └── rules
│   │   ├── lib
│   │   │   ├── core
│   │   │   └── rules
│   │   ├── memo-parser
│   │   └── node_modules
│   │       ├── debug
│   │       │   └── src
│   │       ├── doctrine
│   │       │   └── lib
│   │       └── semver
│   │           └── bin
│   ├── eslint-plugin-jest
│   │   ├── docs
│   │   │   └── rules
│   │   └── lib
│   │       ├── processors
│   │       └── rules
│   ├── eslint-plugin-jsx-a11y
│   │   ├── __mocks__
│   │   ├── __tests__
│   │   │   ├── __util__
│   │   │   └── src
│   │   │       ├── rules
│   │   │       └── util
│   │   │           └── implicitRoles
│   │   ├── docs
│   │   │   └── rules
│   │   ├── lib
│   │   │   ├── rules
│   │   │   └── util
│   │   │       └── implicitRoles
│   │   └── node_modules
│   │       └── semver
│   │           └── bin
│   ├── eslint-plugin-react
│   │   ├── configs
│   │   ├── lib
│   │   │   ├── rules
│   │   │   └── util
│   │   └── node_modules
│   │       ├── doctrine
│   │       │   └── lib
│   │       ├── resolve
│   │       │   ├── bin
│   │       │   ├── example
│   │       │   ├── lib
│   │       │   └── test
│   │       │       ├── dotdot
│   │       │       │   └── abc
│   │       │       ├── module_dir
│   │       │       │   ├── xmodules
│   │       │       │   │   └── aaa
│   │       │       │   ├── ymodules
│   │       │       │   │   └── aaa
│   │       │       │   └── zmodules
│   │       │       │       └── bbb
│   │       │       ├── node_path
│   │       │       │   ├── x
│   │       │       │   │   ├── aaa
│   │       │       │   │   └── ccc
│   │       │       │   └── y
│   │       │       │       ├── bbb
│   │       │       │       └── ccc
│   │       │       ├── pathfilter
│   │       │       │   └── deep_ref
│   │       │       ├── precedence
│   │       │       │   ├── aaa
│   │       │       │   └── bbb
│   │       │       ├── resolver
│   │       │       │   ├── baz
│   │       │       │   ├── browser_field
│   │       │       │   ├── dot_main
│   │       │       │   ├── dot_slash_main
│   │       │       │   ├── empty_main
│   │       │       │   ├── false_main
│   │       │       │   ├── incorrect_main
│   │       │       │   ├── invalid_main
│   │       │       │   ├── malformed_package_json
│   │       │       │   ├── missing_index
│   │       │       │   ├── missing_main
│   │       │       │   ├── multirepo
│   │       │       │   │   └── packages
│   │       │       │   │       ├── package-a
│   │       │       │   │       └── package-b
│   │       │       │   ├── nested_symlinks
│   │       │       │   │   └── mylib
│   │       │       │   ├── null_main
│   │       │       │   ├── other_path
│   │       │       │   │   └── lib
│   │       │       │   ├── quux
│   │       │       │   │   └── foo
│   │       │       │   ├── same_names
│   │       │       │   │   └── foo
│   │       │       │   ├── symlinked
│   │       │       │   │   ├── _
│   │       │       │   │   │   ├── node_modules
│   │       │       │   │   │   └── symlink_target
│   │       │       │   │   └── package
│   │       │       │   └── without_basedir
│   │       │       └── shadowed_core
│   │       │           └── node_modules
│   │       │               └── util
│   │       └── semver
│   │           └── bin
│   ├── eslint-plugin-react-hooks
│   │   └── cjs
│   ├── eslint-plugin-testing-library
│   │   ├── configs
│   │   ├── create-testing-library-rule
│   │   ├── node-utils
│   │   ├── rules
│   │   └── utils
│   ├── eslint-scope
│   │   ├── dist
│   │   └── lib
│   ├── eslint-visitor-keys
│   │   ├── dist
│   │   └── lib
│   ├── eslint-webpack-plugin
│   │   ├── dist
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── ajv-keywords
│   │   │   │   ├── dist
│   │   │   │   │   ├── definitions
│   │   │   │   │   └── keywords
│   │   │   │   └── src
│   │   │   │       ├── definitions
│   │   │   │       └── keywords
│   │   │   ├── has-flag
│   │   │   ├── jest-worker
│   │   │   │   └── build
│   │   │   │       ├── base
│   │   │   │       └── workers
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   ├── schema-utils
│   │   │   │   ├── declarations
│   │   │   │   │   ├── keywords
│   │   │   │   │   └── util
│   │   │   │   └── dist
│   │   │   │       ├── keywords
│   │   │   │       └── util
│   │   │   └── supports-color
│   │   └── types
│   ├── espree
│   │   ├── dist
│   │   └── lib
│   ├── esprima
│   │   ├── bin
│   │   └── dist
│   ├── esquery
│   │   └── dist
│   ├── esrecurse
│   ├── estraverse
│   ├── estree-walker
│   │   ├── dist
│   │   ├── src
│   │   └── types
│   ├── esutils
│   │   └── lib
│   ├── etag
│   ├── eventemitter3
│   │   └── umd
│   ├── events
│   │   └── tests
│   ├── evp_bytestokey
│   ├── execa
│   │   └── lib
│   ├── exit
│   │   ├── lib
│   │   └── test
│   │       └── fixtures
│   ├── expect
│   │   └── build
│   ├── express
│   │   ├── lib
│   │   │   ├── middleware
│   │   │   └── router
│   │   └── node_modules
│   │       ├── array-flatten
│   │       ├── debug
│   │       │   └── src
│   │       ├── ms
│   │       └── qs
│   │           ├── dist
│   │           ├── lib
│   │           └── test
│   ├── fast-deep-equal
│   │   └── es6
│   ├── fast-glob
│   │   ├── node_modules
│   │   │   └── glob-parent
│   │   └── out
│   │       ├── managers
│   │       ├── providers
│   │       │   ├── filters
│   │       │   ├── matchers
│   │       │   └── transformers
│   │       ├── readers
│   │       ├── types
│   │       └── utils
│   ├── fast-json-stable-stringify
│   │   ├── benchmark
│   │   ├── example
│   │   └── test
│   ├── fast-levenshtein
│   ├── fastq
│   │   └── test
│   ├── faye-websocket
│   │   └── lib
│   │       └── faye
│   │           └── websocket
│   │               └── api
│   ├── fb-watchman
│   ├── file-entry-cache
│   ├── file-loader
│   │   └── dist
│   ├── filelist
│   │   └── node_modules
│   │       ├── brace-expansion
│   │       └── minimatch
│   │           └── lib
│   ├── filesize
│   │   └── lib
│   ├── fill-range
│   ├── finalhandler
│   │   └── node_modules
│   │       ├── debug
│   │       │   └── src
│   │       └── ms
│   ├── find-cache-dir
│   ├── find-up
│   ├── flat-cache
│   │   └── src
│   ├── flatted
│   │   ├── cjs
│   │   ├── esm
│   │   └── php
│   ├── follow-redirects
│   ├── for-each
│   │   └── test
│   ├── fork-ts-checker-webpack-plugin
│   │   ├── lib
│   │   │   ├── error
│   │   │   ├── eslint-reporter
│   │   │   │   ├── issue
│   │   │   │   ├── reporter
│   │   │   │   └── types
│   │   │   ├── formatter
│   │   │   │   └── types
│   │   │   ├── hooks
│   │   │   ├── issue
│   │   │   ├── logger
│   │   │   ├── profile
│   │   │   ├── reporter
│   │   │   │   └── reporter-rpc
│   │   │   ├── rpc
│   │   │   │   ├── error
│   │   │   │   └── rpc-ipc
│   │   │   │       └── error
│   │   │   ├── typescript-reporter
│   │   │   │   ├── extension
│   │   │   │   │   └── vue
│   │   │   │   │       └── types
│   │   │   │   ├── file-system
│   │   │   │   ├── issue
│   │   │   │   ├── profile
│   │   │   │   └── reporter
│   │   │   ├── utils
│   │   │   │   ├── array
│   │   │   │   ├── async
│   │   │   │   └── path
│   │   │   └── watch
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── cosmiconfig
│   │       │   └── dist
│   │       ├── fs-extra
│   │       │   └── lib
│   │       │       ├── copy
│   │       │       ├── copy-sync
│   │       │       ├── empty
│   │       │       ├── ensure
│   │       │       ├── fs
│   │       │       ├── json
│   │       │       ├── mkdirs
│   │       │       ├── move
│   │       │       ├── move-sync
│   │       │       ├── output
│   │       │       ├── path-exists
│   │       │       ├── remove
│   │       │       └── util
│   │       ├── has-flag
│   │       ├── schema-utils
│   │       │   ├── declarations
│   │       │   │   ├── keywords
│   │       │   │   └── util
│   │       │   └── dist
│   │       │       ├── keywords
│   │       │       └── util
│   │       ├── supports-color
│   │       └── tapable
│   │           └── lib
│   ├── form-data
│   │   └── lib
│   ├── forwarded
│   ├── fraction.js
│   ├── fresh
│   ├── fs-extra
│   │   └── lib
│   │       ├── copy
│   │       ├── empty
│   │       ├── ensure
│   │       ├── fs
│   │       ├── json
│   │       ├── mkdirs
│   │       ├── move
│   │       ├── output-file
│   │       ├── path-exists
│   │       ├── remove
│   │       └── util
│   ├── fs-monkey
│   │   ├── docs
│   │   │   └── api
│   │   └── lib
│   │       └── util
│   ├── fs.realpath
│   ├── fsevents
│   ├── function-bind
│   │   └── test
│   ├── function.prototype.name
│   │   ├── helpers
│   │   └── test
│   ├── functions-have-names
│   │   └── test
│   ├── gensync
│   │   └── test
│   ├── get-caller-file
│   ├── get-intrinsic
│   │   └── test
│   ├── get-own-enumerable-property-symbols
│   │   └── lib
│   ├── get-package-type
│   ├── get-stream
│   ├── get-symbol-description
│   │   └── test
│   ├── glob
│   ├── glob-parent
│   ├── glob-to-regexp
│   ├── global-modules
│   ├── global-prefix
│   │   └── node_modules
│   │       └── which
│   │           └── bin
│   ├── globals
│   ├── globalthis
│   │   └── test
│   ├── globby
│   ├── gopd
│   │   └── test
│   ├── graceful-fs
│   ├── grapheme-splitter
│   │   └── tests
│   ├── graphemer
│   │   └── lib
│   ├── gzip-size
│   ├── handle-thing
│   │   ├── lib
│   │   └── test
│   ├── harmony-reflect
│   ├── has
│   │   ├── src
│   │   └── test
│   ├── has-bigints
│   │   └── test
│   ├── has-flag
│   ├── has-property-descriptors
│   │   └── test
│   ├── has-proto
│   │   └── test
│   ├── has-symbols
│   │   └── test
│   │       └── shams
│   ├── has-tostringtag
│   │   └── test
│   │       └── shams
│   ├── hash-base
│   ├── hash.js
│   │   ├── lib
│   │   │   └── hash
│   │   │       └── sha
│   │   └── test
│   ├── he
│   │   ├── bin
│   │   └── man
│   ├── hi-base32
│   │   ├── build
│   │   └── src
│   ├── hmac-drbg
│   │   ├── lib
│   │   └── test
│   │       └── fixtures
│   ├── hoopy
│   ├── hpack.js
│   │   ├── bin
│   │   ├── lib
│   │   │   └── hpack
│   │   ├── node_modules
│   │   │   ├── isarray
│   │   │   ├── readable-stream
│   │   │   │   ├── doc
│   │   │   │   │   └── wg-meetings
│   │   │   │   └── lib
│   │   │   │       └── internal
│   │   │   │           └── streams
│   │   │   ├── safe-buffer
│   │   │   └── string_decoder
│   │   │       └── lib
│   │   ├── test
│   │   └── tools
│   ├── html-encoding-sniffer
│   │   └── lib
│   ├── html-entities
│   │   └── lib
│   ├── html-escaper
│   │   ├── cjs
│   │   ├── esm
│   │   └── test
│   ├── html-minifier-terser
│   │   └── src
│   ├── html-webpack-plugin
│   │   └── lib
│   ├── htmlparser2
│   │   └── lib
│   ├── http-deceiver
│   │   ├── lib
│   │   └── test
│   ├── http-errors
│   ├── http-parser-js
│   ├── http-proxy
│   │   └── lib
│   │       └── http-proxy
│   │           └── passes
│   ├── http-proxy-agent
│   │   └── dist
│   ├── http-proxy-middleware
│   │   └── dist
│   │       └── handlers
│   ├── https-proxy-agent
│   │   └── dist
│   ├── human-signals
│   │   └── build
│   │       └── src
│   ├── iconv-lite
│   │   ├── encodings
│   │   │   └── tables
│   │   └── lib
│   ├── icss-utils
│   │   └── src
│   ├── idb
│   │   └── build
│   ├── identity-obj-proxy
│   │   └── src
│   │       ├── __tests__
│   │       └── test-redirections
│   ├── ieee754
│   ├── ignore
│   ├── image-compressor.js
│   │   ├── dist
│   │   ├── src
│   │   └── types
│   ├── immer
│   │   ├── compat
│   │   │   └── pre-3.7
│   │   │       └── dist
│   │   ├── dist
│   │   │   ├── core
│   │   │   ├── plugins
│   │   │   ├── types
│   │   │   └── utils
│   │   └── src
│   │       ├── core
│   │       ├── plugins
│   │       ├── types
│   │       └── utils
│   ├── import-fresh
│   │   └── node_modules
│   │       └── resolve-from
│   ├── import-local
│   │   └── fixtures
│   ├── imurmurhash
│   ├── inflight
│   ├── inherits
│   ├── ini
│   ├── internal-slot
│   │   └── test
│   ├── ipaddr.js
│   │   └── lib
│   ├── is-arguments
│   │   └── test
│   ├── is-array-buffer
│   │   └── test
│   ├── is-arrayish
│   ├── is-bigint
│   │   └── test
│   ├── is-binary-path
│   ├── is-blob
│   ├── is-boolean-object
│   │   └── test
│   ├── is-callable
│   │   └── test
│   ├── is-core-module
│   │   └── test
│   ├── is-date-object
│   │   └── test
│   ├── is-docker
│   ├── is-extglob
│   ├── is-fullwidth-code-point
│   ├── is-generator-fn
│   ├── is-generator-function
│   │   └── test
│   ├── is-glob
│   ├── is-map
│   │   └── test
│   ├── is-module
│   ├── is-negative-zero
│   │   └── test
│   ├── is-number
│   ├── is-number-object
│   │   └── test
│   ├── is-obj
│   ├── is-path-inside
│   ├── is-plain-obj
│   ├── is-potential-custom-element-name
│   ├── is-regex
│   │   └── test
│   ├── is-regexp
│   ├── is-root
│   ├── is-set
│   │   └── test
│   ├── is-shared-array-buffer
│   │   └── test
│   ├── is-stream
│   ├── is-string
│   │   └── test
│   ├── is-symbol
│   │   └── test
│   ├── is-typed-array
│   │   └── test
│   ├── is-typedarray
│   ├── is-weakmap
│   │   └── test
│   ├── is-weakref
│   │   └── test
│   ├── is-weakset
│   │   └── test
│   ├── is-wsl
│   ├── isarray
│   ├── isexe
│   │   └── test
│   ├── istanbul-lib-coverage
│   │   └── lib
│   ├── istanbul-lib-instrument
│   │   ├── node_modules
│   │   │   └── semver
│   │   │       └── bin
│   │   └── src
│   ├── istanbul-lib-report
│   │   ├── lib
│   │   └── node_modules
│   │       ├── has-flag
│   │       └── supports-color
│   ├── istanbul-lib-source-maps
│   │   ├── lib
│   │   └── node_modules
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── istanbul-reports
│   │   └── lib
│   │       ├── clover
│   │       ├── cobertura
│   │       ├── html
│   │       │   └── assets
│   │       │       └── vendor
│   │       ├── html-spa
│   │       │   ├── assets
│   │       │   └── src
│   │       ├── json
│   │       ├── json-summary
│   │       ├── lcov
│   │       ├── lcovonly
│   │       ├── none
│   │       ├── teamcity
│   │       ├── text
│   │       ├── text-lcov
│   │       └── text-summary
│   ├── jake
│   │   ├── bin
│   │   ├── lib
│   │   │   ├── task
│   │   │   └── utils
│   │   ├── node_modules
│   │   │   ├── ansi-styles
│   │   │   ├── chalk
│   │   │   │   └── source
│   │   │   ├── color-convert
│   │   │   ├── color-name
│   │   │   ├── has-flag
│   │   │   └── supports-color
│   │   └── test
│   │       ├── integration
│   │       │   └── jakelib
│   │       └── unit
│   ├── jest
│   │   ├── bin
│   │   └── build
│   ├── jest-changed-files
│   │   └── build
│   ├── jest-circus
│   │   ├── build
│   │   │   └── legacy-code-todo-rewrite
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-cli
│   │   ├── bin
│   │   ├── build
│   │   │   ├── cli
│   │   │   └── init
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-config
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-diff
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-docblock
│   │   └── build
│   ├── jest-each
│   │   ├── build
│   │   │   └── table
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-environment-jsdom
│   │   └── build
│   ├── jest-environment-node
│   │   └── build
│   ├── jest-get-type
│   │   └── build
│   ├── jest-haste-map
│   │   └── build
│   │       ├── crawlers
│   │       ├── lib
│   │       └── watchers
│   ├── jest-jasmine2
│   │   ├── build
│   │   │   └── jasmine
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-leak-detector
│   │   └── build
│   ├── jest-matcher-utils
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-message-util
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-mock
│   │   └── build
│   ├── jest-pnp-resolver
│   ├── jest-regex-util
│   │   └── build
│   ├── jest-resolve
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-resolve-dependencies
│   │   └── build
│   ├── jest-runner
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-runtime
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-serializer
│   │   └── build
│   ├── jest-snapshot
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-util
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-validate
│   │   ├── build
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-watch-typeahead
│   │   ├── build
│   │   │   ├── file_name_plugin
│   │   │   ├── lib
│   │   │   ├── test_name_plugin
│   │   │   └── types
│   │   └── node_modules
│   │       ├── @jest
│   │       │   ├── console
│   │       │   │   ├── build
│   │       │   │   └── node_modules
│   │       │   │       └── slash
│   │       │   ├── test-result
│   │       │   │   └── build
│   │       │   └── types
│   │       │       └── build
│   │       ├── @types
│   │       │   └── yargs
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── emittery
│   │       ├── has-flag
│   │       ├── jest-message-util
│   │       │   ├── build
│   │       │   └── node_modules
│   │       │       └── slash
│   │       ├── jest-regex-util
│   │       │   └── build
│   │       ├── jest-util
│   │       │   └── build
│   │       ├── jest-watcher
│   │       │   ├── build
│   │       │   │   └── lib
│   │       │   └── node_modules
│   │       │       ├── string-length
│   │       │       └── strip-ansi
│   │       ├── pretty-format
│   │       │   ├── build
│   │       │   │   └── plugins
│   │       │   │       └── lib
│   │       │   └── node_modules
│   │       │       └── ansi-styles
│   │       ├── react-is
│   │       │   ├── cjs
│   │       │   └── umd
│   │       ├── slash
│   │       ├── string-length
│   │       │   └── node_modules
│   │       │       └── char-regex
│   │       ├── strip-ansi
│   │       │   └── node_modules
│   │       │       └── ansi-regex
│   │       └── supports-color
│   ├── jest-watcher
│   │   ├── build
│   │   │   └── lib
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jest-worker
│   │   ├── build
│   │   │   ├── base
│   │   │   └── workers
│   │   └── node_modules
│   │       ├── has-flag
│   │       └── supports-color
│   ├── jiti
│   │   ├── bin
│   │   ├── dist
│   │   │   └── plugins
│   │   └── lib
│   ├── js-tokens
│   ├── js-yaml
│   │   ├── bin
│   │   ├── dist
│   │   └── lib
│   │       └── js-yaml
│   │           ├── schema
│   │           └── type
│   │               └── js
│   ├── jsdom
│   │   └── lib
│   │       └── jsdom
│   │           ├── browser
│   │           │   ├── parser
│   │           │   └── resources
│   │           ├── level2
│   │           ├── level3
│   │           └── living
│   │               ├── aborting
│   │               ├── attributes
│   │               ├── constraint-validation
│   │               ├── cssom
│   │               ├── custom-elements
│   │               ├── domparsing
│   │               ├── events
│   │               ├── fetch
│   │               ├── file-api
│   │               ├── generated
│   │               ├── helpers
│   │               │   └── svg
│   │               ├── hr-time
│   │               ├── mutation-observer
│   │               ├── navigator
│   │               ├── nodes
│   │               ├── range
│   │               ├── selection
│   │               ├── svg
│   │               ├── traversal
│   │               ├── websockets
│   │               ├── webstorage
│   │               ├── window
│   │               └── xhr
│   ├── jsesc
│   │   ├── bin
│   │   └── man
│   ├── json-parse-even-better-errors
│   ├── json-schema
│   │   └── lib
│   ├── json-schema-traverse
│   │   └── spec
│   │       └── fixtures
│   ├── json-stable-stringify-without-jsonify
│   │   ├── example
│   │   └── test
│   ├── json2mq
│   │   └── test
│   ├── json5
│   │   ├── dist
│   │   └── lib
│   ├── jsonfile
│   ├── jsonpointer
│   ├── jsonwebtoken
│   │   └── lib
│   ├── jsx-ast-utils
│   │   ├── __tests__
│   │   │   └── src
│   │   ├── lib
│   │   │   └── values
│   │   │       └── expressions
│   │   └── src
│   │       └── values
│   │           └── expressions
│   ├── jwa
│   ├── jws
│   │   └── lib
│   ├── kind-of
│   ├── kleur
│   ├── klona
│   │   ├── dist
│   │   ├── full
│   │   ├── json
│   │   └── lite
│   ├── language-subtag-registry
│   │   └── data
│   │       └── json
│   ├── language-tags
│   │   ├── lib
│   │   └── test
│   │       └── lib
│   ├── launch-editor
│   │   └── editor-info
│   ├── leven
│   ├── levn
│   │   └── lib
│   ├── lilconfig
│   │   └── dist
│   ├── lines-and-columns
│   │   └── build
│   ├── loader-runner
│   │   └── lib
│   ├── loader-utils
│   │   └── lib
│   │       └── hash
│   ├── locate-path
│   ├── lodash
│   │   └── fp
│   ├── lodash.debounce
│   ├── lodash.memoize
│   ├── lodash.merge
│   ├── lodash.sortby
│   ├── lodash.uniq
│   ├── loose-envify
│   ├── lower-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── lru-cache
│   ├── magic-string
│   │   └── dist
│   ├── make-dir
│   │   └── node_modules
│   │       └── semver
│   │           └── bin
│   ├── makeerror
│   │   └── lib
│   ├── md5.js
│   ├── mdn-data
│   │   ├── api
│   │   ├── css
│   │   └── l10n
│   ├── media-typer
│   ├── memfs
│   │   └── lib
│   │       └── internal
│   ├── merge-descriptors
│   ├── merge-stream
│   ├── merge2
│   ├── methods
│   ├── micromatch
│   ├── miller-rabin
│   │   ├── bin
│   │   ├── lib
│   │   ├── node_modules
│   │   │   └── bn.js
│   │   │       └── lib
│   │   └── test
│   ├── mime
│   │   └── src
│   ├── mime-db
│   ├── mime-types
│   ├── mimic-fn
│   ├── mini-css-extract-plugin
│   │   ├── dist
│   │   │   └── hmr
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── ajv-keywords
│   │   │   │   ├── dist
│   │   │   │   │   ├── definitions
│   │   │   │   │   └── keywords
│   │   │   │   └── src
│   │   │   │       ├── definitions
│   │   │   │       └── keywords
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   └── schema-utils
│   │   │       ├── declarations
│   │   │       │   ├── keywords
│   │   │       │   └── util
│   │   │       └── dist
│   │   │           ├── keywords
│   │   │           └── util
│   │   └── types
│   │       └── hmr
│   ├── minimalistic-assert
│   ├── minimalistic-crypto-utils
│   │   ├── lib
│   │   └── test
│   ├── minimatch
│   ├── minimist
│   │   ├── example
│   │   └── test
│   ├── mkdirp
│   │   └── bin
│   ├── ms
│   ├── multicast-dns
│   ├── mz
│   ├── nanoid
│   │   ├── async
│   │   ├── bin
│   │   ├── non-secure
│   │   └── url-alphabet
│   ├── natural-compare
│   ├── natural-compare-lite
│   ├── negotiator
│   │   └── lib
│   ├── neo-async
│   ├── no-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── node-forge
│   │   ├── dist
│   │   ├── flash
│   │   │   └── swf
│   │   └── lib
│   ├── node-int64
│   ├── node-releases
│   │   └── data
│   │       ├── processed
│   │       └── release-schedule
│   ├── normalize-path
│   ├── normalize-range
│   ├── normalize-url
│   ├── npm-run-path
│   ├── nth-check
│   │   └── lib
│   │       └── esm
│   ├── nwsapi
│   │   ├── dist
│   │   └── src
│   │       └── modules
│   ├── object-assign
│   ├── object-hash
│   │   └── dist
│   ├── object-inspect
│   │   ├── example
│   │   └── test
│   │       └── browser
│   ├── object-is
│   │   └── test
│   ├── object-keys
│   │   └── test
│   ├── object.assign
│   │   ├── dist
│   │   └── test
│   ├── object.entries
│   │   └── test
│   ├── object.fromentries
│   │   └── test
│   ├── object.getownpropertydescriptors
│   │   └── test
│   ├── object.hasown
│   │   └── test
│   ├── object.values
│   │   └── test
│   ├── obuf
│   │   └── test
│   ├── on-finished
│   ├── on-headers
│   ├── once
│   ├── onetime
│   ├── open
│   ├── optionator
│   │   └── lib
│   ├── p-limit
│   ├── p-locate
│   ├── p-retry
│   ├── p-try
│   ├── param-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── parent-module
│   ├── parse-asn1
│   ├── parse-json
│   ├── parse5
│   │   └── lib
│   │       ├── common
│   │       ├── extensions
│   │       │   ├── error-reporting
│   │       │   ├── location-info
│   │       │   └── position-tracking
│   │       ├── parser
│   │       ├── serializer
│   │       ├── tokenizer
│   │       ├── tree-adapters
│   │       └── utils
│   ├── parseurl
│   ├── pascal-case
│   │   ├── dist
│   │   └── dist.es2015
│   ├── path-exists
│   ├── path-is-absolute
│   ├── path-key
│   ├── path-parse
│   ├── path-to-regexp
│   ├── path-type
│   ├── pbkdf2
│   │   └── lib
│   ├── performance-now
│   │   ├── lib
│   │   ├── src
│   │   └── test
│   │       └── scripts
│   ├── picocolors
│   ├── picomatch
│   │   └── lib
│   ├── pify
│   ├── pirates
│   │   └── lib
│   ├── pkg-dir
│   │   └── node_modules
│   │       ├── find-up
│   │       ├── locate-path
│   │       ├── p-limit
│   │       └── p-locate
│   ├── pkg-up
│   │   └── node_modules
│   │       ├── find-up
│   │       ├── locate-path
│   │       ├── p-limit
│   │       ├── p-locate
│   │       └── path-exists
│   ├── postcss
│   │   └── lib
│   ├── postcss-attribute-case-insensitive
│   │   └── dist
│   ├── postcss-browser-comments
│   ├── postcss-calc
│   │   ├── src
│   │   │   ├── __tests__
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-clamp
│   ├── postcss-color-functional-notation
│   │   └── dist
│   ├── postcss-color-hex-alpha
│   │   └── dist
│   ├── postcss-color-rebeccapurple
│   │   └── dist
│   ├── postcss-colormin
│   │   ├── src
│   │   └── types
│   ├── postcss-convert-values
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-custom-media
│   │   └── dist
│   ├── postcss-custom-properties
│   │   └── dist
│   │       └── lib
│   ├── postcss-custom-selectors
│   │   └── dist
│   ├── postcss-dir-pseudo-class
│   │   └── dist
│   ├── postcss-discard-comments
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-discard-duplicates
│   │   ├── src
│   │   └── types
│   ├── postcss-discard-empty
│   │   ├── src
│   │   └── types
│   ├── postcss-discard-overridden
│   │   └── src
│   ├── postcss-double-position-gradients
│   │   └── dist
│   ├── postcss-env-function
│   │   └── dist
│   ├── postcss-flexbugs-fixes
│   │   └── bugs
│   ├── postcss-focus-visible
│   │   └── dist
│   ├── postcss-focus-within
│   │   └── dist
│   ├── postcss-font-variant
│   ├── postcss-gap-properties
│   │   └── dist
│   ├── postcss-image-set-function
│   │   └── dist
│   │       └── lib
│   ├── postcss-import
│   │   └── lib
│   ├── postcss-initial
│   │   ├── lib
│   │   └── ~
│   ├── postcss-js
│   ├── postcss-lab-function
│   │   └── dist
│   │       └── css-color-4
│   ├── postcss-load-config
│   │   ├── node_modules
│   │   │   └── yaml
│   │   │       ├── browser
│   │   │       │   └── dist
│   │   │       │       ├── compose
│   │   │       │       ├── doc
│   │   │       │       ├── node_modules
│   │   │       │       │   └── tslib
│   │   │       │       ├── nodes
│   │   │       │       ├── parse
│   │   │       │       ├── schema
│   │   │       │       │   ├── common
│   │   │       │       │   ├── core
│   │   │       │       │   ├── json
│   │   │       │       │   └── yaml-1.1
│   │   │       │       └── stringify
│   │   │       └── dist
│   │   │           ├── compose
│   │   │           ├── doc
│   │   │           ├── nodes
│   │   │           ├── parse
│   │   │           ├── schema
│   │   │           │   ├── common
│   │   │           │   ├── core
│   │   │           │   ├── json
│   │   │           │   └── yaml-1.1
│   │   │           └── stringify
│   │   └── src
│   ├── postcss-loader
│   │   └── dist
│   ├── postcss-logical
│   │   └── dist
│   ├── postcss-media-minmax
│   ├── postcss-merge-longhand
│   │   ├── src
│   │   │   └── lib
│   │   │       └── decl
│   │   └── types
│   │       └── lib
│   │           └── decl
│   ├── postcss-merge-rules
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-minify-font-values
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-minify-gradients
│   │   ├── src
│   │   └── types
│   ├── postcss-minify-params
│   │   ├── src
│   │   └── types
│   ├── postcss-minify-selectors
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-modules-extract-imports
│   │   └── src
│   ├── postcss-modules-local-by-default
│   │   └── src
│   ├── postcss-modules-scope
│   │   └── src
│   ├── postcss-modules-values
│   │   └── src
│   ├── postcss-nested
│   ├── postcss-nesting
│   │   └── dist
│   │       └── lib
│   │           └── merge-selectors
│   ├── postcss-normalize
│   ├── postcss-normalize-charset
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-display-values
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-normalize-positions
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-repeat-style
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-normalize-string
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-timing-functions
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-unicode
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-url
│   │   ├── src
│   │   └── types
│   ├── postcss-normalize-whitespace
│   │   ├── src
│   │   └── types
│   ├── postcss-opacity-percentage
│   ├── postcss-ordered-values
│   │   ├── src
│   │   │   ├── lib
│   │   │   └── rules
│   │   └── types
│   │       ├── lib
│   │       └── rules
│   ├── postcss-overflow-shorthand
│   │   └── dist
│   ├── postcss-page-break
│   ├── postcss-place
│   │   └── dist
│   ├── postcss-preset-env
│   │   └── dist
│   ├── postcss-pseudo-class-any-link
│   │   └── dist
│   ├── postcss-reduce-initial
│   │   ├── src
│   │   │   └── data
│   │   └── types
│   ├── postcss-reduce-transforms
│   │   ├── src
│   │   └── types
│   ├── postcss-replace-overflow-wrap
│   ├── postcss-selector-not
│   │   └── dist
│   ├── postcss-selector-parser
│   │   └── dist
│   │       ├── selectors
│   │       └── util
│   ├── postcss-svgo
│   │   ├── node_modules
│   │   │   ├── commander
│   │   │   │   └── typings
│   │   │   ├── css-tree
│   │   │   │   ├── data
│   │   │   │   ├── dist
│   │   │   │   └── lib
│   │   │   │       ├── common
│   │   │   │       ├── convertor
│   │   │   │       ├── definition-syntax
│   │   │   │       ├── generator
│   │   │   │       ├── lexer
│   │   │   │       ├── parser
│   │   │   │       ├── syntax
│   │   │   │       │   ├── atrule
│   │   │   │       │   ├── config
│   │   │   │       │   ├── function
│   │   │   │       │   ├── node
│   │   │   │       │   ├── pseudo
│   │   │   │       │   │   └── common
│   │   │   │       │   └── scope
│   │   │   │       ├── tokenizer
│   │   │   │       ├── utils
│   │   │   │       └── walker
│   │   │   ├── mdn-data
│   │   │   │   ├── api
│   │   │   │   ├── css
│   │   │   │   └── l10n
│   │   │   ├── source-map
│   │   │   │   ├── dist
│   │   │   │   └── lib
│   │   │   └── svgo
│   │   │       ├── bin
│   │   │       ├── dist
│   │   │       ├── lib
│   │   │       │   └── svgo
│   │   │       └── plugins
│   │   ├── src
│   │   │   └── lib
│   │   └── types
│   │       └── lib
│   ├── postcss-unique-selectors
│   │   ├── src
│   │   └── types
│   ├── postcss-value-parser
│   │   └── lib
│   ├── prelude-ls
│   │   └── lib
│   ├── pretty-bytes
│   ├── pretty-error
│   │   ├── lib
│   │   ├── src
│   │   └── test
│   ├── pretty-format
│   │   ├── build
│   │   │   └── plugins
│   │   │       └── lib
│   │   └── node_modules
│   │       └── ansi-styles
│   ├── process-nextick-args
│   ├── promise
│   │   ├── domains
│   │   ├── lib
│   │   ├── setimmediate
│   │   └── src
│   ├── promise-polyfill
│   │   ├── dist
│   │   ├── lib
│   │   └── src
│   ├── prompts
│   │   ├── dist
│   │   │   ├── dateparts
│   │   │   ├── elements
│   │   │   └── util
│   │   └── lib
│   │       ├── dateparts
│   │       ├── elements
│   │       └── util
│   ├── prop-types
│   │   ├── lib
│   │   └── node_modules
│   │       └── react-is
│   │           ├── cjs
│   │           └── umd
│   ├── proxy-addr
│   │   └── node_modules
│   │       └── ipaddr.js
│   │           └── lib
│   ├── proxy-from-env
│   ├── psl
│   │   ├── data
│   │   └── dist
│   ├── public-encrypt
│   │   ├── node_modules
│   │   │   └── bn.js
│   │   │       └── lib
│   │   └── test
│   ├── punycode
│   ├── q
│   ├── qrcode.react
│   │   └── lib
│   │       └── esm
│   ├── qs
│   │   ├── dist
│   │   ├── lib
│   │   └── test
│   ├── querystringify
│   ├── queue-microtask
│   ├── raf
│   ├── randombytes
│   ├── randomfill
│   ├── range-parser
│   ├── raw-body
│   │   └── node_modules
│   │       ├── bytes
│   │       └── iconv-lite
│   │           ├── encodings
│   │           │   └── tables
│   │           └── lib
│   ├── rc-align
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-cascader
│   │   ├── assets
│   │   ├── es
│   │   │   ├── OptionList
│   │   │   ├── hooks
│   │   │   └── utils
│   │   └── lib
│   │       ├── OptionList
│   │       ├── hooks
│   │       └── utils
│   ├── rc-checkbox
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-collapse
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-dialog
│   │   ├── assets
│   │   ├── es
│   │   │   └── Dialog
│   │   │       └── Content
│   │   └── lib
│   │       └── Dialog
│   │           └── Content
│   ├── rc-drawer
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-dropdown
│   │   ├── assets
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-field-form
│   │   ├── es
│   │   │   └── utils
│   │   └── lib
│   │       └── utils
│   ├── rc-image
│   │   ├── assets
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-input
│   │   ├── assets
│   │   ├── es
│   │   │   └── utils
│   │   └── lib
│   │       └── utils
│   ├── rc-input-number
│   │   ├── assets
│   │   ├── es
│   │   │   ├── hooks
│   │   │   └── utils
│   │   └── lib
│   │       ├── hooks
│   │       └── utils
│   ├── rc-mentions
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-menu
│   │   ├── assets
│   │   ├── es
│   │   │   ├── SubMenu
│   │   │   ├── context
│   │   │   ├── hooks
│   │   │   └── utils
│   │   └── lib
│   │       ├── SubMenu
│   │       ├── context
│   │       ├── hooks
│   │       └── utils
│   ├── rc-motion
│   │   ├── es
│   │   │   ├── hooks
│   │   │   └── util
│   │   └── lib
│   │       ├── hooks
│   │       └── util
│   ├── rc-notification
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-overflow
│   │   ├── assets
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-pagination
│   │   ├── assets
│   │   ├── es
│   │   │   └── locale
│   │   └── lib
│   │       └── locale
│   ├── rc-picker
│   │   ├── assets
│   │   ├── es
│   │   │   ├── generate
│   │   │   ├── hooks
│   │   │   ├── locale
│   │   │   ├── panels
│   │   │   │   ├── DatePanel
│   │   │   │   ├── DatetimePanel
│   │   │   │   ├── DecadePanel
│   │   │   │   ├── MonthPanel
│   │   │   │   ├── QuarterPanel
│   │   │   │   ├── TimePanel
│   │   │   │   ├── WeekPanel
│   │   │   │   └── YearPanel
│   │   │   └── utils
│   │   └── lib
│   │       ├── generate
│   │       ├── hooks
│   │       ├── locale
│   │       ├── panels
│   │       │   ├── DatePanel
│   │       │   ├── DatetimePanel
│   │       │   ├── DecadePanel
│   │       │   ├── MonthPanel
│   │       │   ├── QuarterPanel
│   │       │   ├── TimePanel
│   │       │   ├── WeekPanel
│   │       │   └── YearPanel
│   │       └── utils
│   ├── rc-progress
│   │   ├── es
│   │   │   └── hooks
│   │   └── lib
│   │       └── hooks
│   ├── rc-rate
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-resize-observer
│   │   ├── assets
│   │   ├── es
│   │   │   ├── SingleObserver
│   │   │   └── utils
│   │   └── lib
│   │       ├── SingleObserver
│   │       └── utils
│   ├── rc-segmented
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-select
│   │   ├── assets
│   │   ├── es
│   │   │   ├── Selector
│   │   │   ├── hooks
│   │   │   └── utils
│   │   │       └── __mocks__
│   │   └── lib
│   │       ├── Selector
│   │       ├── hooks
│   │       └── utils
│   │           └── __mocks__
│   ├── rc-slider
│   │   ├── assets
│   │   ├── es
│   │   │   ├── Handles
│   │   │   ├── Marks
│   │   │   ├── Steps
│   │   │   ├── Tracks
│   │   │   └── hooks
│   │   └── lib
│   │       ├── Handles
│   │       ├── Marks
│   │       ├── Steps
│   │       ├── Tracks
│   │       └── hooks
│   ├── rc-steps
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-switch
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-table
│   │   ├── assets
│   │   ├── es
│   │   │   ├── Body
│   │   │   ├── Cell
│   │   │   ├── FixedHolder
│   │   │   ├── Footer
│   │   │   ├── Header
│   │   │   ├── Panel
│   │   │   ├── context
│   │   │   ├── hooks
│   │   │   ├── sugar
│   │   │   └── utils
│   │   └── lib
│   │       ├── Body
│   │       ├── Cell
│   │       ├── FixedHolder
│   │       ├── Footer
│   │       ├── Header
│   │       ├── Panel
│   │       ├── context
│   │       ├── hooks
│   │       ├── sugar
│   │       └── utils
│   ├── rc-tabs
│   │   ├── assets
│   │   ├── es
│   │   │   ├── TabNavList
│   │   │   ├── TabPanelList
│   │   │   └── hooks
│   │   └── lib
│   │       ├── TabNavList
│   │       ├── TabPanelList
│   │       └── hooks
│   ├── rc-textarea
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-tooltip
│   │   ├── assets
│   │   ├── es
│   │   └── lib
│   ├── rc-tree
│   │   ├── assets
│   │   ├── es
│   │   │   └── utils
│   │   └── lib
│   │       └── utils
│   ├── rc-tree-select
│   │   ├── assets
│   │   ├── es
│   │   │   ├── hooks
│   │   │   └── utils
│   │   └── lib
│   │       ├── hooks
│   │       └── utils
│   ├── rc-trigger
│   │   ├── assets
│   │   │   └── index
│   │   ├── es
│   │   │   ├── Popup
│   │   │   └── utils
│   │   └── lib
│   │       ├── Popup
│   │       └── utils
│   ├── rc-upload
│   │   ├── es
│   │   └── lib
│   ├── rc-util
│   │   ├── es
│   │   │   ├── Children
│   │   │   ├── Dom
│   │   │   ├── React
│   │   │   ├── debug
│   │   │   ├── hooks
│   │   │   ├── test
│   │   │   └── utils
│   │   ├── lib
│   │   │   ├── Children
│   │   │   ├── Dom
│   │   │   ├── React
│   │   │   ├── debug
│   │   │   ├── hooks
│   │   │   ├── test
│   │   │   └── utils
│   │   └── node_modules
│   │       └── react-is
│   │           ├── cjs
│   │           └── umd
│   ├── rc-virtual-list
│   │   ├── es
│   │   │   ├── hooks
│   │   │   └── utils
│   │   └── lib
│   │       ├── hooks
│   │       └── utils
│   ├── react
│   │   ├── cjs
│   │   └── umd
│   ├── react-app-polyfill
│   ├── react-async
│   │   ├── dist-node
│   │   ├── dist-src
│   │   ├── dist-types
│   │   ├── dist-umd
│   │   └── dist-web
│   ├── react-dev-utils
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── chalk
│   │       │   └── source
│   │       ├── color-convert
│   │       ├── color-name
│   │       ├── escape-string-regexp
│   │       ├── has-flag
│   │       ├── loader-utils
│   │       │   └── lib
│   │       │       └── hash
│   │       └── supports-color
│   ├── react-dom
│   │   ├── cjs
│   │   └── umd
│   ├── react-error-overlay
│   │   └── lib
│   ├── react-is
│   │   ├── cjs
│   │   └── umd
│   ├── react-refresh
│   │   └── cjs
│   ├── react-router
│   │   └── dist
│   │       ├── lib
│   │       └── umd
│   ├── react-router-dom
│   │   └── dist
│   │       └── umd
│   ├── react-scripts
│   │   ├── bin
│   │   ├── config
│   │   │   ├── jest
│   │   │   └── webpack
│   │   │       └── persistentCache
│   │   ├── lib
│   │   ├── scripts
│   │   │   └── utils
│   │   ├── template
│   │   └── template-typescript
│   ├── read-cache
│   ├── readable-stream
│   │   └── lib
│   │       └── internal
│   │           └── streams
│   ├── readdirp
│   ├── recursive-readdir
│   ├── regenerate
│   ├── regenerate-unicode-properties
│   │   ├── Binary_Property
│   │   ├── General_Category
│   │   ├── Property_of_Strings
│   │   ├── Script
│   │   └── Script_Extensions
│   ├── regenerator-runtime
│   ├── regenerator-transform
│   │   ├── lib
│   │   └── src
│   ├── regex-parser
│   │   └── lib
│   │       └── typings
│   ├── regexp.prototype.flags
│   │   └── test
│   ├── regexpu-core
│   │   └── data
│   ├── regjsparser
│   │   ├── bin
│   │   └── node_modules
│   │       └── jsesc
│   │           ├── bin
│   │           └── man
│   ├── relateurl
│   │   └── lib
│   │       ├── parse
│   │       ├── relate
│   │       └── util
│   ├── renderkid
│   │   ├── docs
│   │   │   └── images
│   │   └── lib
│   │       ├── ansiPainter
│   │       ├── layout
│   │       │   └── block
│   │       │       ├── blockAppendor
│   │       │       ├── blockPrependor
│   │       │       ├── lineAppendor
│   │       │       ├── linePrependor
│   │       │       └── lineWrapper
│   │       └── renderKid
│   │           ├── styleApplier
│   │           └── styles
│   │               └── rule
│   │                   └── declarationBlock
│   ├── require-directory
│   ├── require-from-string
│   ├── requires-port
│   ├── resize-observer-polyfill
│   │   ├── dist
│   │   └── src
│   │       ├── shims
│   │       └── utils
│   ├── resolve
│   │   ├── bin
│   │   ├── example
│   │   ├── lib
│   │   └── test
│   │       ├── dotdot
│   │       │   └── abc
│   │       ├── module_dir
│   │       │   ├── xmodules
│   │       │   │   └── aaa
│   │       │   ├── ymodules
│   │       │   │   └── aaa
│   │       │   └── zmodules
│   │       │       └── bbb
│   │       ├── node_path
│   │       │   ├── x
│   │       │   │   ├── aaa
│   │       │   │   └── ccc
│   │       │   └── y
│   │       │       ├── bbb
│   │       │       └── ccc
│   │       ├── pathfilter
│   │       │   └── deep_ref
│   │       ├── precedence
│   │       │   ├── aaa
│   │       │   └── bbb
│   │       ├── resolver
│   │       │   ├── baz
│   │       │   ├── browser_field
│   │       │   ├── dot_main
│   │       │   ├── dot_slash_main
│   │       │   ├── false_main
│   │       │   ├── incorrect_main
│   │       │   ├── invalid_main
│   │       │   ├── malformed_package_json
│   │       │   ├── multirepo
│   │       │   │   └── packages
│   │       │   │       ├── package-a
│   │       │   │       └── package-b
│   │       │   ├── nested_symlinks
│   │       │   │   └── mylib
│   │       │   ├── other_path
│   │       │   │   └── lib
│   │       │   ├── quux
│   │       │   │   └── foo
│   │       │   ├── same_names
│   │       │   │   └── foo
│   │       │   ├── symlinked
│   │       │   │   ├── _
│   │       │   │   │   ├── node_modules
│   │       │   │   │   └── symlink_target
│   │       │   │   └── package
│   │       │   └── without_basedir
│   │       └── shadowed_core
│   │           └── node_modules
│   │               └── util
│   ├── resolve-cwd
│   ├── resolve-from
│   ├── resolve-url-loader
│   │   ├── docs
│   │   ├── lib
│   │   │   ├── engine
│   │   │   └── join-function
│   │   └── node_modules
│   │       ├── picocolors
│   │       ├── postcss
│   │       │   └── lib
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── resolve.exports
│   │   └── dist
│   ├── retry
│   │   ├── example
│   │   └── lib
│   ├── reusify
│   │   └── benchmarks
│   ├── rimraf
│   ├── ripemd160
│   ├── rollup
│   │   └── dist
│   │       ├── bin
│   │       ├── es
│   │       │   └── shared
│   │       └── shared
│   ├── rollup-plugin-terser
│   │   └── node_modules
│   │       ├── has-flag
│   │       ├── jest-worker
│   │       │   └── build
│   │       │       ├── base
│   │       │       └── workers
│   │       ├── serialize-javascript
│   │       └── supports-color
│   ├── run-parallel
│   ├── safe-array-concat
│   │   └── test
│   ├── safe-buffer
│   ├── safe-regex-test
│   │   └── test
│   ├── safer-buffer
│   ├── sanitize.css
│   ├── sass-loader
│   │   └── dist
│   ├── sax
│   │   └── lib
│   ├── saxes
│   ├── scheduler
│   │   ├── cjs
│   │   └── umd
│   ├── schema-utils
│   │   ├── declarations
│   │   │   ├── keywords
│   │   │   └── util
│   │   └── dist
│   │       ├── keywords
│   │       └── util
│   ├── scroll-into-view-if-needed
│   │   ├── dist
│   │   └── src
│   ├── select-hose
│   │   ├── lib
│   │   └── test
│   ├── selfsigned
│   │   └── test
│   ├── semver
│   │   ├── bin
│   │   ├── classes
│   │   ├── functions
│   │   ├── internal
│   │   ├── node_modules
│   │   │   ├── lru-cache
│   │   │   └── yallist
│   │   └── ranges
│   ├── send
│   │   └── node_modules
│   │       ├── debug
│   │       │   ├── node_modules
│   │       │   │   └── ms
│   │       │   └── src
│   │       └── ms
│   ├── serialize-javascript
│   ├── serve-index
│   │   ├── node_modules
│   │   │   ├── debug
│   │   │   │   └── src
│   │   │   ├── depd
│   │   │   │   └── lib
│   │   │   │       ├── browser
│   │   │   │       └── compat
│   │   │   ├── http-errors
│   │   │   ├── inherits
│   │   │   ├── ms
│   │   │   ├── setprototypeof
│   │   │   └── statuses
│   │   └── public
│   │       └── icons
│   ├── serve-static
│   ├── setprototypeof
│   │   └── test
│   ├── sha.js
│   │   └── test
│   ├── shebang-command
│   ├── shebang-regex
│   ├── shell-quote
│   │   ├── example
│   │   └── test
│   ├── side-channel
│   │   └── test
│   ├── signal-exit
│   ├── sisteransi
│   │   └── src
│   ├── slash
│   ├── sockjs
│   │   └── lib
│   ├── source-list-map
│   │   └── lib
│   ├── source-map
│   │   ├── dist
│   │   └── lib
│   ├── source-map-js
│   │   └── lib
│   ├── source-map-loader
│   │   └── dist
│   ├── source-map-support
│   │   └── node_modules
│   │       └── source-map
│   │           ├── dist
│   │           └── lib
│   ├── sourcemap-codec
│   │   └── dist
│   │       └── types
│   ├── spdy
│   │   ├── lib
│   │   │   └── spdy
│   │   └── test
│   ├── spdy-transport
│   │   └── lib
│   │       └── spdy-transport
│   │           └── protocol
│   │               ├── base
│   │               ├── http2
│   │               └── spdy
│   ├── sprintf-js
│   │   ├── demo
│   │   ├── dist
│   │   ├── src
│   │   └── test
│   ├── stable
│   ├── stack-utils
│   │   └── node_modules
│   │       └── escape-string-regexp
│   ├── stackframe
│   │   └── dist
│   ├── statuses
│   ├── stop-iteration-iterator
│   │   └── test
│   ├── stream-browserify
│   │   └── test
│   ├── string-convert
│   │   └── test
│   ├── string-length
│   ├── string-natural-compare
│   ├── string-width
│   │   └── node_modules
│   │       └── emoji-regex
│   │           └── es2015
│   ├── string.prototype.matchall
│   │   └── test
│   ├── string.prototype.trim
│   │   └── test
│   ├── string.prototype.trimend
│   │   └── test
│   ├── string.prototype.trimstart
│   │   └── test
│   ├── string_decoder
│   │   └── lib
│   ├── stringify-object
│   ├── strip-ansi
│   ├── strip-bom
│   ├── strip-comments
│   │   └── lib
│   ├── strip-final-newline
│   ├── strip-json-comments
│   ├── style-loader
│   │   └── dist
│   │       └── runtime
│   ├── stylehacks
│   │   ├── src
│   │   │   ├── dictionary
│   │   │   └── plugins
│   │   └── types
│   │       ├── dictionary
│   │       └── plugins
│   ├── stylis
│   │   ├── dist
│   │   │   └── umd
│   │   └── src
│   ├── sucrase
│   │   ├── bin
│   │   ├── dist
│   │   │   ├── esm
│   │   │   │   ├── parser
│   │   │   │   │   ├── plugins
│   │   │   │   │   │   └── jsx
│   │   │   │   │   ├── tokenizer
│   │   │   │   │   ├── traverser
│   │   │   │   │   └── util
│   │   │   │   ├── transformers
│   │   │   │   └── util
│   │   │   ├── parser
│   │   │   │   ├── plugins
│   │   │   │   │   └── jsx
│   │   │   │   ├── tokenizer
│   │   │   │   ├── traverser
│   │   │   │   └── util
│   │   │   ├── transformers
│   │   │   ├── types
│   │   │   │   ├── parser
│   │   │   │   │   ├── plugins
│   │   │   │   │   │   └── jsx
│   │   │   │   │   ├── tokenizer
│   │   │   │   │   ├── traverser
│   │   │   │   │   └── util
│   │   │   │   ├── transformers
│   │   │   │   └── util
│   │   │   └── util
│   │   ├── node_modules
│   │   │   ├── commander
│   │   │   │   └── typings
│   │   │   └── glob
│   │   ├── register
│   │   └── ts-node-plugin
│   ├── supports-color
│   ├── supports-hyperlinks
│   │   └── node_modules
│   │       ├── has-flag
│   │       └── supports-color
│   ├── supports-preserve-symlinks-flag
│   │   └── test
│   ├── svg-parser
│   │   └── dist
│   ├── svgo
│   │   ├── bin
│   │   ├── lib
│   │   │   └── svgo
│   │   ├── node_modules
│   │   │   ├── css-select
│   │   │   │   └── lib
│   │   │   ├── css-what
│   │   │   │   └── lib
│   │   │   ├── dom-serializer
│   │   │   ├── domutils
│   │   │   │   ├── lib
│   │   │   │   ├── node_modules
│   │   │   │   │   └── domelementtype
│   │   │   │   └── test
│   │   │   │       └── tests
│   │   │   └── nth-check
│   │   └── plugins
│   ├── symbol-tree
│   │   └── lib
│   ├── tailwindcss
│   │   ├── lib
│   │   │   ├── cli
│   │   │   │   ├── build
│   │   │   │   ├── help
│   │   │   │   └── init
│   │   │   ├── css
│   │   │   ├── lib
│   │   │   ├── oxide
│   │   │   │   └── cli
│   │   │   │       ├── build
│   │   │   │       ├── help
│   │   │   │       └── init
│   │   │   ├── postcss-plugins
│   │   │   │   └── nesting
│   │   │   ├── public
│   │   │   └── util
│   │   ├── nesting
│   │   ├── peers
│   │   ├── scripts
│   │   ├── src
│   │   │   ├── cli
│   │   │   │   ├── build
│   │   │   │   ├── help
│   │   │   │   └── init
│   │   │   ├── css
│   │   │   ├── lib
│   │   │   ├── oxide
│   │   │   │   └── cli
│   │   │   │       ├── build
│   │   │   │       ├── help
│   │   │   │       └── init
│   │   │   ├── postcss-plugins
│   │   │   │   └── nesting
│   │   │   ├── public
│   │   │   └── util
│   │   ├── stubs
│   │   └── types
│   │       └── generated
│   ├── tapable
│   │   └── lib
│   ├── temp-dir
│   ├── tempy
│   │   └── node_modules
│   │       └── type-fest
│   │           └── source
│   ├── terminal-link
│   ├── terser
│   │   ├── bin
│   │   ├── dist
│   │   ├── lib
│   │   │   ├── compress
│   │   │   └── utils
│   │   ├── node_modules
│   │   │   └── commander
│   │   │       └── typings
│   │   └── tools
│   ├── terser-webpack-plugin
│   │   ├── dist
│   │   └── types
│   ├── test-exclude
│   ├── text-table
│   │   ├── example
│   │   └── test
│   ├── thenify
│   ├── thenify-all
│   ├── throat
│   ├── throttle-debounce
│   │   ├── cjs
│   │   ├── esm
│   │   └── umd
│   ├── thunky
│   ├── tmpl
│   │   └── lib
│   ├── to-fast-properties
│   ├── to-regex-range
│   ├── toggle-selection
│   │   └── example
│   ├── toidentifier
│   ├── tough-cookie
│   │   ├── lib
│   │   └── node_modules
│   │       └── universalify
│   ├── tr46
│   │   └── lib
│   ├── treer
│   │   ├── node_modules
│   │   │   └── commander
│   │   │       └── typings
│   │   └── src
│   ├── tryer
│   │   ├── lib
│   │   ├── src
│   │   └── test
│   ├── ts-interface-checker
│   │   └── dist
│   ├── tsconfig-paths
│   │   ├── lib
│   │   │   └── __tests__
│   │   │       └── data
│   │   ├── node_modules
│   │   │   ├── json5
│   │   │   │   ├── dist
│   │   │   │   └── lib
│   │   │   └── strip-bom
│   │   └── src
│   │       └── __tests__
│   │           └── data
│   ├── tslib
│   │   └── modules
│   ├── tsutils
│   │   ├── node_modules
│   │   │   └── tslib
│   │   │       ├── modules
│   │   │       └── test
│   │   │           └── validateModuleExportsMatchCommonJS
│   │   ├── typeguard
│   │   │   ├── 2.8
│   │   │   ├── 2.9
│   │   │   ├── 3.0
│   │   │   ├── 3.2
│   │   │   └── next
│   │   └── util
│   ├── type-check
│   │   └── lib
│   ├── type-detect
│   ├── type-fest
│   │   ├── source
│   │   └── ts41
│   ├── type-is
│   ├── typed-array-length
│   │   └── test
│   ├── typedarray-to-buffer
│   │   └── test
│   ├── typescript
│   │   ├── bin
│   │   └── lib
│   │       ├── cs
│   │       ├── de
│   │       ├── es
│   │       ├── fr
│   │       ├── it
│   │       ├── ja
│   │       ├── ko
│   │       ├── pl
│   │       ├── pt-br
│   │       ├── ru
│   │       ├── tr
│   │       ├── zh-cn
│   │       └── zh-tw
│   ├── unbox-primitive
│   │   └── test
│   ├── unicode-canonical-property-names-ecmascript
│   ├── unicode-match-property-ecmascript
│   ├── unicode-match-property-value-ecmascript
│   │   └── data
│   ├── unicode-property-aliases-ecmascript
│   ├── unique-string
│   ├── universalify
│   ├── unpipe
│   ├── unquote
│   ├── upath
│   │   └── build
│   │       └── code
│   ├── update-browserslist-db
│   ├── uri-js
│   │   └── dist
│   │       ├── es5
│   │       └── esnext
│   │           └── schemes
│   ├── url-parse
│   │   └── dist
│   ├── util
│   │   └── support
│   ├── util-deprecate
│   ├── util.promisify
│   ├── utila
│   │   ├── lib
│   │   └── test
│   ├── utils-merge
│   ├── uuid
│   │   └── dist
│   │       ├── bin
│   │       ├── esm-browser
│   │       ├── esm-node
│   │       └── umd
│   ├── v8-to-istanbul
│   │   └── lib
│   ├── vary
│   ├── w3c-hr-time
│   │   └── lib
│   ├── w3c-xmlserializer
│   │   └── lib
│   ├── walker
│   │   └── lib
│   ├── watchpack
│   │   └── lib
│   ├── wbuf
│   │   └── test
│   ├── web-vitals
│   │   ├── dist
│   │   │   └── modules
│   │   │       └── lib
│   │   │           └── polyfills
│   │   └── src
│   │       └── lib
│   │           └── polyfills
│   ├── webidl-conversions
│   │   └── lib
│   ├── webpack
│   │   ├── bin
│   │   ├── hot
│   │   ├── lib
│   │   │   ├── asset
│   │   │   ├── async-modules
│   │   │   ├── cache
│   │   │   ├── config
│   │   │   ├── container
│   │   │   ├── css
│   │   │   ├── debug
│   │   │   ├── dependencies
│   │   │   ├── electron
│   │   │   ├── errors
│   │   │   ├── esm
│   │   │   ├── hmr
│   │   │   ├── ids
│   │   │   ├── javascript
│   │   │   ├── json
│   │   │   ├── library
│   │   │   ├── logging
│   │   │   ├── node
│   │   │   ├── optimize
│   │   │   ├── performance
│   │   │   ├── prefetch
│   │   │   ├── rules
│   │   │   ├── runtime
│   │   │   ├── schemes
│   │   │   ├── serialization
│   │   │   ├── sharing
│   │   │   ├── stats
│   │   │   ├── util
│   │   │   │   └── hash
│   │   │   ├── wasm
│   │   │   ├── wasm-async
│   │   │   ├── wasm-sync
│   │   │   ├── web
│   │   │   └── webworker
│   │   ├── node_modules
│   │   │   ├── eslint-scope
│   │   │   │   └── lib
│   │   │   └── estraverse
│   │   └── schemas
│   │       └── plugins
│   │           ├── asset
│   │           ├── container
│   │           ├── css
│   │           ├── debug
│   │           ├── ids
│   │           ├── optimize
│   │           ├── schemes
│   │           └── sharing
│   ├── webpack-dev-middleware
│   │   ├── dist
│   │   │   └── utils
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── ajv-keywords
│   │   │   │   ├── dist
│   │   │   │   │   ├── definitions
│   │   │   │   │   └── keywords
│   │   │   │   └── src
│   │   │   │       ├── definitions
│   │   │   │       └── keywords
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   └── schema-utils
│   │   │       ├── declarations
│   │   │       │   ├── keywords
│   │   │       │   └── util
│   │   │       └── dist
│   │   │           ├── keywords
│   │   │           └── util
│   │   └── types
│   │       └── utils
│   ├── webpack-dev-server
│   │   ├── bin
│   │   ├── client
│   │   │   ├── clients
│   │   │   ├── modules
│   │   │   │   ├── logger
│   │   │   │   └── sockjs-client
│   │   │   ├── overlay
│   │   │   └── utils
│   │   ├── lib
│   │   │   └── servers
│   │   ├── node_modules
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── ajv-keywords
│   │   │   │   ├── dist
│   │   │   │   │   ├── definitions
│   │   │   │   │   └── keywords
│   │   │   │   └── src
│   │   │   │       ├── definitions
│   │   │   │       └── keywords
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   ├── schema-utils
│   │   │   │   ├── declarations
│   │   │   │   │   ├── keywords
│   │   │   │   │   └── util
│   │   │   │   └── dist
│   │   │   │       ├── keywords
│   │   │   │       └── util
│   │   │   └── ws
│   │   │       └── lib
│   │   └── types
│   │       ├── bin
│   │       └── lib
│   │           └── servers
│   ├── webpack-manifest-plugin
│   │   ├── dist
│   │   └── node_modules
│   │       ├── source-map
│   │       │   ├── dist
│   │       │   └── lib
│   │       └── webpack-sources
│   │           └── lib
│   ├── webpack-sources
│   │   └── lib
│   │       └── helpers
│   ├── websocket-driver
│   │   └── lib
│   │       └── websocket
│   │           └── driver
│   │               └── hybi
│   ├── websocket-extensions
│   │   └── lib
│   │       └── pipeline
│   ├── whatwg-encoding
│   │   ├── lib
│   │   └── node_modules
│   │       └── iconv-lite
│   │           ├── encodings
│   │           │   └── tables
│   │           └── lib
│   ├── whatwg-fetch
│   │   └── dist
│   ├── whatwg-mimetype
│   │   └── lib
│   ├── whatwg-url
│   │   └── dist
│   ├── which
│   │   └── bin
│   ├── which-boxed-primitive
│   │   └── test
│   ├── which-collection
│   │   └── test
│   ├── which-typed-array
│   │   └── test
│   ├── word-wrap
│   ├── workbox-background-sync
│   │   ├── build
│   │   ├── lib
│   │   └── src
│   │       └── lib
│   ├── workbox-broadcast-update
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-build
│   │   ├── build
│   │   │   ├── lib
│   │   │   ├── schema
│   │   │   └── templates
│   │   ├── node_modules
│   │   │   ├── @apideck
│   │   │   │   └── better-ajv-errors
│   │   │   │       ├── dist
│   │   │   │       │   ├── lib
│   │   │   │       │   └── types
│   │   │   │       └── src
│   │   │   │           ├── lib
│   │   │   │           └── types
│   │   │   ├── ajv
│   │   │   │   ├── dist
│   │   │   │   │   ├── compile
│   │   │   │   │   │   ├── codegen
│   │   │   │   │   │   ├── jtd
│   │   │   │   │   │   └── validate
│   │   │   │   │   ├── refs
│   │   │   │   │   │   ├── json-schema-2019-09
│   │   │   │   │   │   │   └── meta
│   │   │   │   │   │   └── json-schema-2020-12
│   │   │   │   │   │       └── meta
│   │   │   │   │   ├── runtime
│   │   │   │   │   ├── standalone
│   │   │   │   │   ├── types
│   │   │   │   │   └── vocabularies
│   │   │   │   │       ├── applicator
│   │   │   │   │       ├── core
│   │   │   │   │       ├── discriminator
│   │   │   │   │       ├── dynamic
│   │   │   │   │       ├── format
│   │   │   │   │       ├── jtd
│   │   │   │   │       ├── unevaluated
│   │   │   │   │       └── validation
│   │   │   │   └── lib
│   │   │   │       ├── compile
│   │   │   │       │   ├── codegen
│   │   │   │       │   ├── jtd
│   │   │   │       │   └── validate
│   │   │   │       ├── refs
│   │   │   │       │   ├── json-schema-2019-09
│   │   │   │       │   │   └── meta
│   │   │   │       │   └── json-schema-2020-12
│   │   │   │       │       └── meta
│   │   │   │       ├── runtime
│   │   │   │       ├── standalone
│   │   │   │       ├── types
│   │   │   │       └── vocabularies
│   │   │   │           ├── applicator
│   │   │   │           ├── core
│   │   │   │           ├── discriminator
│   │   │   │           ├── dynamic
│   │   │   │           ├── format
│   │   │   │           ├── jtd
│   │   │   │           ├── unevaluated
│   │   │   │           └── validation
│   │   │   ├── fs-extra
│   │   │   │   └── lib
│   │   │   │       ├── copy
│   │   │   │       ├── copy-sync
│   │   │   │       ├── empty
│   │   │   │       ├── ensure
│   │   │   │       ├── fs
│   │   │   │       ├── json
│   │   │   │       ├── mkdirs
│   │   │   │       ├── move
│   │   │   │       ├── move-sync
│   │   │   │       ├── output
│   │   │   │       ├── path-exists
│   │   │   │       ├── remove
│   │   │   │       └── util
│   │   │   ├── json-schema-traverse
│   │   │   │   └── spec
│   │   │   │       └── fixtures
│   │   │   ├── source-map
│   │   │   │   └── lib
│   │   │   ├── tr46
│   │   │   │   └── lib
│   │   │   ├── webidl-conversions
│   │   │   │   └── lib
│   │   │   └── whatwg-url
│   │   │       └── lib
│   │   └── src
│   │       ├── lib
│   │       ├── schema
│   │       └── templates
│   ├── workbox-cacheable-response
│   │   ├── build
│   │   └── src
│   ├── workbox-core
│   │   ├── _private
│   │   ├── build
│   │   ├── models
│   │   │   └── messages
│   │   ├── src
│   │   │   ├── _private
│   │   │   ├── models
│   │   │   │   └── messages
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-expiration
│   │   ├── build
│   │   ├── models
│   │   └── src
│   │       └── models
│   ├── workbox-google-analytics
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-navigation-preload
│   │   ├── build
│   │   └── src
│   ├── workbox-precaching
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-range-requests
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-recipes
│   │   ├── build
│   │   └── src
│   ├── workbox-routing
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-strategies
│   │   ├── build
│   │   ├── plugins
│   │   ├── src
│   │   │   ├── plugins
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-streams
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── workbox-sw
│   │   ├── build
│   │   └── controllers
│   ├── workbox-webpack-plugin
│   │   ├── build
│   │   │   └── lib
│   │   ├── node_modules
│   │   │   ├── source-map
│   │   │   │   ├── dist
│   │   │   │   └── lib
│   │   │   └── webpack-sources
│   │   │       └── lib
│   │   └── src
│   │       └── lib
│   ├── workbox-window
│   │   ├── build
│   │   ├── src
│   │   │   └── utils
│   │   └── utils
│   ├── wrap-ansi
│   │   └── node_modules
│   │       ├── ansi-styles
│   │       ├── color-convert
│   │       └── color-name
│   ├── wrappy
│   ├── write-file-atomic
│   ├── ws
│   │   └── lib
│   ├── xml-name-validator
│   │   └── lib
│   ├── xmlchars
│   │   ├── xml
│   │   │   ├── 1.0
│   │   │   └── 1.1
│   │   └── xmlns
│   │       └── 1.0
│   ├── y18n
│   │   └── build
│   │       └── lib
│   │           └── platform-shims
│   ├── yallist
│   ├── yaml
│   │   ├── browser
│   │   │   ├── dist
│   │   │   └── types
│   │   ├── dist
│   │   └── types
│   ├── yargs
│   │   ├── build
│   │   │   └── lib
│   │   │       ├── typings
│   │   │       └── utils
│   │   ├── helpers
│   │   ├── lib
│   │   │   └── platform-shims
│   │   └── locales
│   ├── yargs-parser
│   │   └── build
│   │       └── lib
│   └── yocto-queue
├── public
├── scripts
└── src
    ├── assets
    │   ├── font
    │   └── images
    │       ├── category
    │       ├── homepage
    │       │   ├── junkfood
    │       │   └── suppliers
    │       ├── myaccount
    │       ├── nova_score
    │       └── nutri_score
    ├── components
    │   ├── add_to_sc_button
    │   ├── category
    │   ├── footer
    │   ├── layout
    │   ├── loading
    │   ├── nutri
    │   ├── product
    │   └── topnav
    ├── models
    ├── routers
    ├── services
    ├── util
    └── views
        ├── admin
        │   ├── component
        │   │   ├── addProduct
        │   │   ├── layout
        │   │   ├── topnav
        │   │   └── updateProduct
        │   ├── login
        │   ├── orderManagement
        │   │   └── orderDetail
        │   ├── productManagement
        │   ├── promoCodeManagement
        │   │   └── components
        │   │       ├── add_promocode
        │   │       └── edit_promocode
        │   └── userManagement
        ├── allproducts
        │   └── components
        │       ├── filter
        │       ├── product_list
        │       └── sort
        ├── faqs
        ├── homepage
        │   └── components
        │       ├── alternatives
        │       ├── carousel
        │       └── recommendation
        ├── login
        │   └── components
        ├── me
        │   ├── addressmanagement
        │   ├── components
        │   │   ├── me_address
        │   │   ├── me_info
        │   │   ├── me_nav
        │   │   ├── me_order
        │   │   ├── me_order_product
        │   │   └── me_profile
        │   ├── myaccount
        │   ├── myorder
        │   ├── myprofile
        │   ├── orderdetail
        │   │   └── component
        │   │       ├── order_detail_address
        │   │       ├── order_detail_product
        │   │       └── order_detail_service
        │   └── profileedit
        │       └── component
        ├── order
        │   └── components
        │       ├── or_add_address
        │       ├── or_additional_service
        │       ├── or_address
        │       ├── or_delivery
        │       └── or_summary
        ├── productdetail
        │   └── components
        │       ├── content_level
        │       └── nova
        ├── register
        │   └── components
        ├── shoppingcart
        │   └── components
        │       ├── sc_item_counter
        │       ├── sc_summary
        │       └── shoppingcart_item
        └── welcomepage
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
