# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package / Description                                                                                             | Status |
| :---------------------------------------------------------------------------------------------------------------- | -----: |
| [@angular-package/callback][callback-github-readme]   <br> Manages the callback [`function`][js-function].        | [![npm version][callback-npm-badge-svg]][callback-npm-badge] |
| [@angular-package/change-detection][cd-github-readme] <br> Improves application performance.                      | [![npm version][cd-npm-badge-svg]][cd-npm-badge] |
| [@angular-package/component-loader][cl-github-readme] <br> Handles dynamic loading components.                    | [![npm version][cl-npm-badge-svg]][cl-npm-badge] |
| [@angular-package/core][core-github-readme]           <br> Core features.                                         | [![npm version][core-npm-badge-svg]][core-npm-badge] |
| [@angular-package/error][error-github-readme]         <br> Manages an [`Error`][js-error].                        | [![npm version][error-npm-badge-svg]][error-npm-badge] |
| [@angular-package/prism][prism-github-readme]         <br> [`Prism`][prism-js] highlighter module.                | [![npm version][prism-npm-badge-svg]][prism-npm-badge] |
| [@angular-package/property][property-github-readme]   <br> Handles object properties.                             | [![npm version][property-npm-badge-svg]][property-npm-badge] |
| [@angular-package/reactive][reactive-github-readme]   <br> Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-svg]][reactive-npm-badge] |
| [@angular-package/testing][testing-github-readme]     <br> Support for testing other packages.                    | [![npm version][testing-npm-badge-svg]][testing-npm-badge] |
| [@angular-package/type][type-github-readme]           <br> Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-svg]][type-npm-badge] |
| [@angular-package/ui][ui-github-readme]               <br> User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/error

Manages an [`Error`][js-error].

<!-- npm badge -->
[![npm version][error-npm-badge-svg]][error-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][error-badge-issues]][error-issues]
[![GitHub forks][error-badge-forks]][error-forks]
[![GitHub stars][error-badge-stars]][error-stars]
[![GitHub license][error-badge-license]][error-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [`ValidationError`](#validationerror)
* [Interface](#interface)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Sets
> Sets the existing given value in the `object`.

Defines
> Returns defined value from the method of the `object`.  
> Defines the new value in the `object`.  
> Both above at the same time.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

Copy this package to the `packages/error` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build error` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test error` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/error` package with command:

```bash
npm i @angular-package/error --save
```

<br>

## Api

```typescript
import {
  // Class.
  ValidationError,
  // Interface.
  ErrorMessage,
} from '@angular-package/error';
```

<br>

## `ValidationError`

Manages an [`Error`][js-error] of the validation.

**Static methods:**

| ValidationError.                                   | Description |
| :------------------------------------------------- | :---------- |
| [`defineMessage()`](#validationerrordefinemessage) | Defines the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface |

**Constructor:**

| Constructor                                         | Description |
| :-------------------------------------------------- | :---------- |
| [`ValidationError()`](#validationerror-constructor) | Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance |

<br>

### `ValidationError` static properties

----

#### `ValidationError.template`

Template of the error message with the replaceable `[problem]` and `[fix]`. By default, it's set to `Problem: [problem] => Fix: [fix]`.

```typescript
static template = `Problem: [problem] => Fix: [fix]`;
```

<br>

### `ValidationError` instance public properties

----

#### `ValidationError.prototype.fix`

A possible solution to the described problem of a [`string`][js-string] type. By default, it's an empty [`string`][js-string].

```typescript
public fix = '';
```

<br>

### `ValidationError.prototype.name`

Error name of a [`string`][js-string] type that is being thrown. By default, it's [`ValidationError`](#validationerror).

```typescript
public name = ValidationError.name;
```

<br>

### `ValidationError.prototype.problem`

The validation problem of a [`string`][js-string] type. By default, it's an empty [`string`][js-string].

```typescript
public problem = '';
```

<br>

### `ValidationError` static methods

----

### `ValidationError.defineMessage()`

Defines the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface.

```typescript
static defineMessage(
  message: ErrorMessage,
  template: string = ValidationError.template,
  callback?: ResultCallback
): string {
  if (is.objectKey(message, ['fix', 'problem'], callback)) {
    if (is.string(template)) {
      return template
        .replace(`[fix]`, message.fix)
        .replace(`[problem]`, message.problem);
    }
  }
  return '';
}
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `message: ErrorMessage`     | An [`object`][js-object] of the [`ErrorMessage`](#errormessage) interface to build a message of a [`string`][js-string] type. The value is checked against the proper [`object`][js-object] |
| `template: string`          | A message template of a [`string`][js-string] type with replaceable `[problem]` and `[fix]` from the given `message`. The value is checked against a [`string`][js-string]. By default, it's set to `Problem: [problem] => Fix: [fix]` |
| `callback?: ResultCallback` | An optional callback function of [`ResultCallback`][package-type-resultcallback] type to handle the check whether the provided message contains required `problem` and `fix` properties |

**Returns:**

The **return value** is a message of a `string` type created from the provided `message` of [`ErrorMessage`](#errormessage) interface, or it's an empty [`string`][js-string] if the provided message [`object`][js-object] isn't proper.

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/core';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';

/**
 * Returns
 * --------
 * Problem: The problem has no solution. => Fix: There is no solution to the described problem.
 */
const errorMessage = ValidationError.defineMessage({ fix, problem });
```

<br>

### `ValidationError` constructor

----

### `ValidationError()`

Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance.

```typescript
new ValidationError(message: string | ErrorMessage) {
  super(
    is.string(message) ? message : ValidationError.defineMessage(message)
  );
  if (is.object(message)) {
    Object.assign(this, {
      problem: message.problem,
      fix: message.fix,
    });
  }
}
```

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of a [`string`][js-string] type or of an [`ErrorMessage`](#errormessage) interface that is used to throw with an [`error`][js-error] |

**Returns:**

The **return value** is an instance of [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/core';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';
const validationError = new ValidationError({ fix, problem });
```

<br>

## Interface

### ErrorMessage

The shape of an [`object`][js-object] for an [`error`][js-error] message that contains a possible solution to the described problem.

```typescript
interface ErrorMessage {
  /**
   * Possible solution to the described problem of a `string` type.
   */
  fix: string;
  /**
   * Error problem of a `string` type.
   */
  problem: string;
}
```

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][error-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: error  -->
  <!-- GitHub: badges -->
  [error-badge-issues]: https://img.shields.io/github/issues/angular-package/error
  [error-badge-forks]: https://img.shields.io/github/forks/angular-package/error
  [error-badge-stars]: https://img.shields.io/github/stars/angular-package/error
  [error-badge-license]: https://img.shields.io/github/license/angular-package/error
  <!-- GitHub: badges links -->
  [error-issues]: https://github.com/angular-package/error/issues
  [error-forks]: https://github.com/angular-package/error/network
  [error-license]: https://github.com/angular-package/error/blob/master/LICENSE
  [error-stars]: https://github.com/angular-package/error/stargazers
<!-- This package -->

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-function-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
