# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [`function`][js-function].        | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [`Error`][js-error].                        | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [prism][prism-github-readme]         | [`Prism`][prism-js] highlighter module.                | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

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
* [Experimental](#experimental)
* [Changelog](#changelog)
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

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

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

```typescript
/*
 * Experimental.
 */
import {
  // Class.
  MessageBuilder,
  MessageBuilderTemplate,
  MessageFunctionBuilder,
} from '@angular-package/error';
```

<br>

## `ValidationError`

Manages an [`Error`][js-error] of validation.

**Static properties:**

| ValidationError.                              | Description |
| :-------------------------------------------- | :---------- |
| [`template: string`][error-property-template] | A template of the error message guarded by a [`string`][js-string] type with the replaceable `[problem]` and `[fix]` words.  By default, it's set to `'Problem: [problem] => Fix: [fix]'`. |

[error-property-template]: #validationerrortemplate

**Instance properties:**

| ValidationError.prototype.                  | Description |
| :------------------------------------------ | :---------- |
| [`fix: string`][error-property-fix]         | A possible solution to the described [`problem`][error-property-problem] of validation that is guarded by a [`string`][js-string] type. |
| [`message: string`][error-property-message] | A validation error message guarded by a [`string`][js-string] type that can be built with the [`problem`][error-property-problem] and [`fix`][error-property-fix] of [`ValidationError`](#validationerror) by the [`throw()`][error-method-throw] and [`setMessage()`][error-method-setmessage] method. |
| [`name: string`][error-property-name]       | Error name of a [`string`][js-string] type that is being thrown. |
| [`problem: string`][error-property-problem] | Description of a validation problem guarded by a [`string`][js-string] type. |

[error-property-fix]: #validationerrorprototypefix
[error-property-message]: #validationerrorprototypemessage
[error-property-name]: #validationerrorprototypename
[error-property-problem]: #validationerrorprototypeproblem

**Static methods:**

| ValidationError.                                   | Description |
| :------------------------------------------------- | :---------- |
| [`defineMessage()`](#validationerrordefinemessage) | Defines the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface. |

**Constructor:**

| Constructor                                         | Description |
| :-------------------------------------------------- | :---------- |
| [`ValidationError()`](#validationerror-constructor) | Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance. |

**Instance methods:**

| ValidationError.prototype.                  | Description |
| :------------------------------------------ | :---------- |
| [`setFix()`][error-method-setfix]           | Sets the fix a possible solution to the described [`problem`][error-property-problem]. |
| [`setMessage()`][error-method-setmessage]   | Sets the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface. |
| [`setProblem()`][error-method-setproblem]   | Sets description problem of a [`ValidationError`](#validationerror). |
| [`setTemplate()`][error-method-settemplate] | Sets the template of validation error message. |
| [`throw()`][error-method-throw]             | Throws an error of [`ValidationError`](#validationerror) with actual settings. |

[error-method-setfix]: #validationerrorprototypesetfix
[error-method-setmessage]: #validationerrorprototypesetmessage
[error-method-setproblem]: #validationerrorprototypesetproblem
[error-method-settemplate]: #validationerrorprototypesettemplate
[error-method-throw]: #validationerrorprototypethrow

<br>

### `ValidationError` static properties

----

#### `ValidationError.template`

![update]

A template of the error message guarded by [`string`][js-string] type with the replaceable `[problem]` and `[fix]` words. By default, it's set to `Problem: [problem] => Fix: [fix]`.

```typescript
static get template(): string {
  return ValidationError.#template;
}
static set template(value: string) {
  ValidationError.#template = ValidationError.#guardTemplate(value)
    ? value
    : ValidationError.#template;
}
```

<br>

### `ValidationError` instance public properties

----

#### `ValidationError.prototype.fix`

![update]

A possible solution to the described [`problem`][error-property-problem] of validation that is guarded by a [`string`][js-string] type. By default, it's an empty [`string`][js-string].

```typescript
public get fix(): string {
  return this.#fix;
}
public set fix(value: string) {
  this.#fix = guard.string(value) ? value : this.#fix;
}
```

<br>

#### `ValidationError.prototype.message`

A validation error message guarded by a [`string`][js-string] type that can be build from the [`problem`][error-property-problem] and [`fix`][error-property-fix] of [`ValidationError`](#validationerror) on the [`template`][error-property-template].

```typescript
public set message(value: string) {
  super.message = guard.string(value) ? value : super.message;
}
public get message(): string {
  return super.message;
}
```

<br>

#### `ValidationError.prototype.name`

![update]

Error name of a [`string`][js-string] type that is being thrown. By default, it's ['ValidationError'](#validationerror).

```typescript
public name = ValidationError.name;
```

<br>

#### `ValidationError.prototype.problem`

![update]

Description of a validation [`problem`][error-property-problem] guarded by a [`string`][js-string] type. By default, it's an empty [`string`][js-string].

```typescript
public get problem(): string {
  return this.#problem;
}
public set problem(value: string) {
  this.#problem = guard.string(value) ? value : this.#problem;
}
```

<br>

### `ValidationError` static methods

----

#### `ValidationError.defineMessage()`

![update]

Defines the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface.

```typescript
public static defineMessage(
  message: ErrorMessage,
  callback?: ResultCallback<CallbackPayload & ErrorMessage>
): string {
  return ValidationError.#guardMessage(message, callback)
    ? (message.template || ValidationError.template)
        .replace(`[fix]`, message.fix)
        .replace(`[problem]`, message.problem)
    : '';
}
```

**Parameters:**

| Name: type                  | Description |
| :-------------------------- | :---------- |
| `message: ErrorMessage`     | An [`object`][js-object] of the [`ErrorMessage`](#errormessage) interface to build a message of a [`string`][js-string] type. The value is checked against the proper [`object`][js-object] |
| `template: string`          | A message template of a [`string`][js-string] type with replaceable `[problem]` and `[fix]` from the given `message`. The value is checked against a [`string`][js-string]. By default, it's set to `Problem: [problem] => Fix: [fix]` |
| `callback?: ResultCallback` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided message contains required `problem` and `fix` properties |

**Returns:**

The **return value** is a message of a [`string`][js-string] type created from the provided `message` of [`ErrorMessage`](#errormessage) interface, or it's an empty [`string`][js-string] if the provided message [`object`][js-object] isn't proper.

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';

/*
  Returns
  --------
  Problem: The problem has no solution. => Fix: There is no solution
  to the described problem.
*/
const errorMessage = ValidationError.defineMessage({ fix, problem });
```

```typescript
/*
  Example usage: create an error message of a string type
  from the provided object with a different template.
*/
import { ValidationError } from '@angular-package/error';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';
const template = `[problem] ... [fix]`;

/*
  Returns
  --------
  The problem has no solution. ... There is no solution to the described problem.
*/
const errorMessage = ValidationError.defineMessage({
  fix, problem, template
});
```

```typescript
/*
  Example usage: create an error message of a string type
  from the provided object and the changed template.
*/
import { ValidationError } from '@angular-package/error';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';

// Change the template by directly assign a new value.
ValidationError.template = `\nPROBLEM: [problem]\nFIX: [fix] `;

/*
  Returns
  -------
  PROBLEM: The problem has no solution.
  FIX: There is no solution to the described problem. 
*/
const errorMessage = ValidationError.defineMessage({ fix, problem });
```

```typescript
/*
  Example usage: create an error message of a string type
  from the provided object and the changed template.
*/
import { ValidationError } from '@angular-package/error';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';

const errorMessage = ValidationError.defineMessage(
  { fix, problem },
  (result, payload) => {
    // Do something with the `result` of the `message` check
    // and `payload`.
    return result;
  }
);
```

<br>

### `ValidationError` constructor

----

#### `ValidationError()`

![update]

Creates a new instance with the message. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance.

```typescript
constructor(
  message: string | ErrorMessage = '',
  callback?: (callback: Callback<AllowedCallback>) => void
) {
  super();

  // Sets the callback for an instance methods.
  if (is.function(callback)) {
    callback(this.#callback);
  }

  // Initializes the message and assigns message properties `fix`, `problem` and optionally `template` to a new instance.
  this.setMessage(message);
}
```

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of a [`string`][js-string] type or of an [`ErrorMessage`](#errormessage) interface that is used to throw with an [`Error`][js-error]. |
| `callback?: (callback: Callback<AllowedCallback>) => void` | An optional function to handle the internal instance of [`Callback`][callback-github-readme]. |

**Returns:**

The **return value** is an instance of [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

const fix = 'There is no solution to the described problem.';
const problem = 'The problem has no solution.';

const validationError = new ValidationError({ fix, problem });
```

```typescript
// Example usage with callback.

```

<br>

### `ValidationError` instance public methods

----

#### `ValidationError.prototype.setFix()`

![new]

Sets the [`fix`][error-property-fix] a possible solution to the described [`problem`][error-property-problem].

```typescript
// Syntax.
public setFix(
  fix: string,
  callback: ResultCallback<CallbackPayload> = this.#callback.getCallback(
    'setFix'
  )
): this {
  if (guard.string(fix, callback)) {
    this.#fix = fix;
  }
  return this;
}
```

**Parameters:**

| Name: type                                   | Description |
| :------------------------------------------- | :---------- |
| `fix: string`                                | A possible solution to the described problem guarded by a [`string`][js-string] type. |
| `callback?: ResultCallback<CallbackPayload>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided [`fix`][error-property-fix] is a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of an [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a fix.
const fix = 'There is no solution to the described problem.';

// Returns 'There is no solution to the described problem.'
validationError.setFix(fix).fix;
```

```typescript
// Example usage with a callback.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a fix.
const fix = 'There is no solution to the described problem.';

// Set the fix and handle the check of it with a callback.
validationError.setFix(fix, (result, payload) => {
  // Returns `true`.
  result;
  // Returns `There is no solution to the described problem.`.
  payload;
  return result;
});
```

<br>

#### `ValidationError.prototype.setMessage()`

![new]

Sets the validation error message of a [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface.

```typescript
// Syntax.
public setMessage(
  message: string | ErrorMessage,
  callback: ResultCallback<
    CallbackPayload & ErrorMessage
  > = this.#callback.getCallback('setMessage')
): this {
  this.message = is.string(message, callback)
    ? // Sets a message of a string type from the provided message of `string`.
      message
    : // Sets a message of a string type from the provided message of `ErrorMessage`.
      ValidationError.defineMessage(message, callback);

  // Sets `fix`, `problem` and optionally `template` from the provided `message`.
  if (is.object(message)) {
    this.setFix(message.fix).setProblem(message.problem);
    if (is.defined(message.template)) {
      this.setTemplate(message.template);
    }
  }
  return this;
}
```

**Parameters:**

| Name: type                                   | Description |
| :------------------------------------------- | :---------- |
| `message: string \| ErrorMessage`            | An object of an [`ErrorMessage`](#errormessage) interface to build the message of a [`string`][js-string] type. The value is checked against the proper `object`. |
| `callback?: ResultCallback<CallbackPayload>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `message` is a [`string`][js-string] type or whether it's an object that contains required [`problem`][error-property-problem] and [`fix`][error-property-fix] properties or whether it's a [`string`][js-string] type. |

**Returns:**

The **return value** is an instance of an [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage with a callback.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a fix.
const fix = 'There is no solution to the described problem.';

// Define a problem.
const problem = 'The problem has no solution.';

// Define a template.
const template = 'PROBLEM: [problem], FIX: [fix]';

// Set the message and handle the check of it with a callback.
validationError.setMessage({ fix, problem }, (result, payload) => {
  // Returns `false` then `true`.
  result;
  /*
    Returns {
      "fix": "There is no solution to the described problem.",
      "problem": "The problem has no solution.",
      "template": "PROBLEM: [problem] FIX: [fix]"
    }
  */
  payload;
  return result;
});
/*
  Returns
  PROBLEM: The problem has no solution. FIX: There is no solution to the described problem.
*/
console.log(validationError.message);
```

<br>

#### `ValidationError.prototype.setProblem()`

![new]

Sets description [`problem`][error-property-problem] of a validation error.

```typescript
public setProblem(
  problem: string,
  callback: ResultCallback<CallbackPayload> = this.#callback.getCallback(
    'setProblem'
  )
): this {
  this.#problem = guard.string(problem, callback) ? problem : this.#problem;
  return this;
}
```

**Parameters:**

| Name: type                                   | Description |
| :------------------------------------------- | :---------- |
| `fix: string`                                | A possible solution to the described [`problem`][error-property-problem] guarded by a [`string`][js-string] type. |
| `callback?: ResultCallback<CallbackPayload>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `fix` is a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of an [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a problem.
const problem = 'The problem has no solution.';

// Returns 'The problem has no solution.'
validationError.setProblem(problem).problem;
```

```typescript
// Example usage with a callback.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a problem.
const problem = 'The problem has no solution.';

// Set the problem and handle the check of it with a callback.
validationError.setProblem(problem, (result, payload) => {
  // Returns `true`.
  result;
  // Returns 'The problem has no solution.'
  payload;
  return result;
});
```

<br>

#### `ValidationError.prototype.setTemplate()`

![new]

Sets the [`template`][error-property-template] of validation error message.

```typescript
public setTemplate(
  template: string,
  callback: ResultCallback<CallbackPayload> = this.#callback.getCallback(
    'setTemplate'
  )
): this {
  this.#tpl = ValidationError.#guardTemplate(template, callback)
    ? template
    : this.#tpl;
  return this;
}
```

**Parameters:**

| Name: type                                   | Description |
| :------------------------------------------- | :---------- |
| `template: string`                           | A message [`template`][error-property-template] guarded by a [`string`][js-string] type with replaceable `[problem]` and `[fix]` words. |
| `callback?: ResultCallback<CallbackPayload>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `template` is a [`string`][js-string] that contains `[fix]` and `[problem]` words. |

**Returns:**

The **return value** is an instance of an [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a template.
const template = 'PROBLEM: [problem], FIX: [fix]';

// Set the template.
validationError.setTemplate(template);

// Returns 'PROBLEM: [problem], FIX: [fix]'
validationError.template;
```

```typescript
// Example usage with a callback.
import { ValidationError } from '@angular-package/error';

// Initialize an instance.
const validationError = new ValidationError();

// Define a template.
const template = 'PROBLEM: [problem], FIX: [fix]';

// Set the template and handle the check of it with a callback.
validationError.setTemplate(template, (result, payload) => {
  // Returns `true`.
  result;
  // Returns 'PROBLEM: [problem], FIX: [fix]'
  payload;
  return result;
});
```

<br>

#### `ValidationError.prototype.throw()`

![new]

Throws an error of [`ValidationError`](#validationerror) with the message built from the stored [`fix`][error-property-fix], [`problem`][error-property-problem] and [`template`][error-property-template] or optionally from the provided `message`.

```typescript
public throw(message?: string | ErrorMessage): void {
  if (is.defined(message)) {
    this.setMessage(message);
  } else {
    this.updateMessage();
  }
  throw this;
}
```

**Parameters:**

| Name: type                         | Description |
| :--------------------------------- | :---------- |
| `message?: string \| ErrorMessage` | An optional object of an [`ErrorMessage`](#errormessage) interface to build the message of a [`string`][js-string] type. The value is checked against the proper `object`. |

**Returns:**

The **return value** is an instance of an [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

// Define a fix.
const fix = 'There is no solution to the described problem.';

// Define a problem.
const problem = 'The problem has no solution.';

// Define a template.
const template = 'PROBLEM: [problem] FIX: [fix]';

// Initialize an instance.
const validationError = new ValidationError({ fix, problem, template });

// Throw an error.
validationError.throw();
```

<br>

### Complete usage of `ValidationError`

```typescript
//
```

<br>

## Interface

### Common

#### `ErrorMessage`

The shape of an [`object`][js-object] for an [`error`][js-error] message that contains a possible solution to the described problem.

```typescript
export interface ErrorMessage {
  fix: string;
  problem: string;
  template?: string;
}
```

**Properties:**

**`fix: string`**  
Possible solution to the described problem of a [`string`][js-string] type.

**`problem: string`**  
Description of validation problem of a [`string`][js-string] type.

**`template?: string`**  
An optional message template of a [`string`][js-string] type.

<br>

## Experimental

![experimental]

### Message builder

#### `MessageBuilder`

Message builder for error message of a [`string`][js-string] type.

```typescript
// Example usage of building a function.
import { MessageBuilder } from '@angular-package/error';

/**
 * Initialize `MessageBuilder`.
 */
const messageFunctionBuilder = new MessageBuilder('function');

messageFunctionBuilder
  .setFunctionName('guardString')
  .setParam('value', 'string')
  .setReturn('boolean');

// Console returns `guardString(value: string): boolean`
console.log(messageFunctionBuilder.get);
```

```typescript
// Example usage of building a method.
import { MessageBuilder } from '@angular-package/error';

/**
 * Initialize `MessageBuilder`.
 */
const messageMethodBuilder = new MessageBuilder('method');

// Build the method of any class.
messageMethodBuilder
  .setMethodName('setPerson')
  .setParam('value', 'string')
  .setReturn('this');

// Console returns `setPerson(value: string): this`
console.log(messageMethodBuilder.get);
```

```typescript
// Example usage of building a class.
import { MessageBuilder } from '@angular-package/error';

/**
 * Initialize `MessageBuilder`.
 */
const messageClassBuilder = new MessageBuilder('class');

// Build the method of a specified class.
messageClassBuilder
  .setClassName('Person.prototype.')
  .setMethodName('setPerson')
  .setParam('value?', 'object')
  .setReturn('object');

// Console returns `Person.prototype.setPerson(value?: object): object`
console.log(messageClassBuilder.get);
```

<br>

#### `MessageFunctionBuilder`

Message function builder for error message of a [`string`][js-string] type.

```typescript
// Example usage of building a function.
import { MessageFunctionBuilder } from '@angular-package/error';

/**
 * Initialize `MessageFunctionBuilder`.
 */
const messageFunctionBuilder = new MessageFunctionBuilder();

messageFunctionBuilder
  .setName('guardString')
  .setParam('value', 'string')
  .setReturn('boolean')
  .build();

// Console returns `guardString(value: string): boolean`
console.log(messageFunctionBuilder.get);
```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/error/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

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
[experimental]: https://img.shields.io/badge/-experimental-orange
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
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
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
