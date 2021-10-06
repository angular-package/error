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

[![Gitter][gitter-badge]][gitter-chat]
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
* [Type](#type)
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

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

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

| ValidationError.                               | Description |
| :--------------------------------------------- | :---------- |
| [`template: string`](#validationerrortemplate) | A template(guarded by a [`string`][js-string] type) of static [`ValidationError`](#validationerror) and the default value of [`template`][error-property-template] of an instance for the error message with the replaceable **required** `[fix]` and `[problem]` tags and **optional** `[id]` and `[value]`. |

**Instance properties:**

| ValidationError.prototype.                    | Description |
| :-------------------------------------------- | :---------- |
| [`fix: string`][error-property-fix]           | A possible [`solution`][error-property-fix] to the described [`problem`][error-property-problem] of validation that is guarded by [`string`][js-string] type. |
| [`id: number`][error-property-id]             | The identifier of the described [`problem`][error-property-problem], guarded by [`number`][js-number] type. |
| [`message: string`][error-property-message]   | A validation [`error`][js-error] message guarded by [`string`][js-string] type that can be built from the **required** [`problem`][error-property-problem] and [`fix`][error-property-fix] with **optional** [`id`][error-property-id] and [`value`][error-property-value] on the [`template`][error-property-template] of an instance of [`ValidationError`](#validationerror). |
| [`name: string`][error-property-name]         | [`Error`][js-error] name of [`string`][js-string] type that is being thrown. |
| [`problem: string`][error-property-problem]   | Description of the validation [`problem`][error-property-problem] guarded by [`string`][js-string] type. |
| [`template: string`][error-property-template] | A template of the [`error`][js-error] message guarded by [`string`][js-string] type with replaceable **required** `[problem]` and `[fix]` tags and **optional** `[id]` and`[value]` tags. |
| [`value: string`][error-property-value]       | The value of [`any`][ts-any] type affected by the validation error, which must be converted to a [`string`][js-string] to build a [`message`][error-property-message]. |

[error-property-fix]: #validationerrorprototypefix
[error-property-id]: #validationerrorprototypeid
[error-property-message]: #validationerrorprototypemessage
[error-property-name]: #validationerrorprototypename
[error-property-problem]: #validationerrorprototypeproblem
[error-property-template]: #validationerrorprototypetemplate
[error-property-value]: #validationerrorprototypevalue

**Static methods:**

| ValidationError.                                     | Description |
| :--------------------------------------------------- | :---------- |
| [`defineMessage()`](#validationerrordefinemessage)   | Defines the validation [`error`][js-error] message of [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface. |
| [`setTemplate()`](#validationerrorsettemplate)       | Sets the [`template`](#validationerrortemplate) of static [`ValidationError`](#validationerror) and as the **default** value for [`template`][error-property-template] of an instance. |
| [`setValueParser()`](#validationerrorsetvalueparser) | Sets the [`function`][js-function] to convert [`any`][ts-any] value to [`string`][js-string] during message creation performed by the static [`defineMessage()`](#validationerrorsetvalueparser) method. |

**Constructor:**

| Constructor                                         | Description |
| :-------------------------------------------------- | :---------- |
| [`ValidationError()`](#validationerror-constructor) | Creates a new instance with the [`message`][error-property-message]. If the provided `message` is an [`object`][js-object], then its properties are assigned to the instance. |

**Instance methods:**

| ValidationError.prototype.                        | Description |
| :------------------------------------------------ | :---------- |
| [`setFix()`][error-method-setfix]                 | Sets the [`fix`][error-property-fix] a possible solution to the described [`problem`][error-property-problem]. |
| [`setId()`][error-method-setid]                   | Sets the [`id`][error-property-id] an identifier of the described [`problem`][error-property-problem]. |
| [`setMessage()`][error-method-setmessage]         | Sets the validation [`error`][js-error] [`message`][error-property-message] of [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface or [`string`][js-string] type. |
| [`setProblem()`][error-method-setproblem]         | Sets description [`problem`][error-property-problem] of a validation. |
| [`setTemplate()`][error-method-settemplate]       | Sets the [`template`][error-property-template] of validation error [`message`][error-property-message]. |
| [`setValue()`][error-method-setvalue]             | Sets the [`value`][error-property-value] affected by the validation error (must be parsed to [`string`][js-string] type). |
| [`setValueParser()`][error-method-setvalueparser] | Sets the [`function`][js-function] to automatically **convert** the [`value`][error-property-value] to the [`string`][js-string] during [`message`][error-property-message] creation. |
| [`throw()`][error-method-throw]                   | Throws an error of [`ValidationError`](#validationerror) with the message built from the stored [`fix`][error-property-fix], [`problem`][error-property-problem] and [`template`][error-property-template] or optionally from the provided `message`. |
| [`updateMessage()`][error-method-updatemessage]   | Updates the [`message`][error-property-message] with a stored [`fix`][error-property-fix], [`problem`][error-property-problem], and [`template`][error-property-template]. |

[error-method-setfix]: #validationerrorprototypesetfix
[error-method-setid]: #validationerrorprototypesetid
[error-method-setmessage]: #validationerrorprototypesetmessage
[error-method-setproblem]: #validationerrorprototypesetproblem
[error-method-settemplate]: #validationerrorprototypesettemplate
[error-method-setvalue]: #validationerrorprototypesetvalue
[error-method-setvalueparser]: #validationerrorprototypesetvalueparser
[error-method-throw]: #validationerrorprototypethrow
[error-method-updatemessage]: #validationerrorprototypeupdatemessage

<br>

### `ValidationError` static properties

#### `ValidationError.template`

[![update]][error-github-changelog]

A template(guarded by a [`string`][js-string] type) of static [`ValidationError`](#validationerror) and the default value of [`template`][error-property-template] of an instance for the error message with the replaceable **required** `[fix]` and `[problem]` tags and **optional** `[id]` and `[value]`. The value is being checked against the existence of `[fix]` and `[problem]` tags by the static private `ValidationError.#guardTemplate()` method. It can be set directly or by the static [`ValidationError.setTemplate()`](#validationerrorsettemplate) method. By default, it's set to `Problem: [problem] => Fix: [fix]`.

```typescript
static get template(): string {
  return this.#defaultTemplate;
}
static set template(value: string) {
  this.#guardTemplate(value) && (this.#defaultTemplate = value);
}
```

**Tags:**

`[fix]`: **Required**, replaced by the [`fix`][error-property-fix] property.  

`[id]`: Optional, replaced by the [`id`][error-property-id] property.  

`[problem]`: **Required**, replaced by the [`problem`][error-property-problem] property.  

`[value]`: Optional, replaced by the [`value`][error-property-value] property.  

<br>

### `ValidationError` instance public properties

#### `ValidationError.prototype.fix`

[![update]][error-github-changelog]

A possible [`solution`][error-property-fix] to the described [`problem`][error-property-problem] of validation that is guarded by [`string`][js-string]. It refers to **`[fix]`** tag. It can be set directly or by the [`setFix()`][error-method-setfix], [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] methods. By default, it's an empty [`string`][js-string].

```typescript
public get fix(): string {
  return this.#fix;
}
public set fix(value: string) {
  guardString(value) && (this.#fix = value);
}
```

<br>

#### `ValidationError.prototype.id`

[![new]][error-github-changelog]

The identifier of the described [`problem`][error-property-problem], guarded by [`number`][js-number] type. It can be set directly or by the [`setId()`][error-method-setid], [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] method of an instance. By default, it's `0`.

```typescript
public get id(): number {
  return this.#id;
}
public set id(value: number) {
  guardNumber(value) && (this.#id = value);
}
```

<br>

#### `ValidationError.prototype.message`

[![update]][error-github-changelog]

A validation [`error`][js-error] message guarded by [`string`][js-string] type that can be built from the **required** [`problem`][error-property-problem] and [`fix`][error-property-fix] with **optional** [`id`][error-property-id] and [`value`][error-property-value] on the [`template`][error-property-template] of an instance of [`ValidationError`](#validationerror). It can be set directly or by the [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] methods.

```typescript
public get message(): string {
  return super.message;
}
public set message(value: string) {
  guardString(value) && (super.message = value);
}
```

<br>

#### `ValidationError.prototype.name`

[`Error`][js-error] name of [`string`][js-string] type that is being thrown. By default, it's ['ValidationError'](#validationerror).

```typescript
public name = ValidationError.name;
```

<br>

#### `ValidationError.prototype.problem`

[![update]][error-github-changelog]

Description of the validation [`problem`][error-property-problem] guarded by [`string`][js-string] type. It can be set directly or by the [`setProblem()`][error-method-setproblem], [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] method. By default, it's an empty [`string`][js-string].

```typescript
public get problem(): string {
  return this.#problem;
}
public set problem(value: string) {
  guardString(value) && (this.#problem = value);
}
```

<br>

#### `ValidationError.prototype.template`

[![new]][error-github-changelog]

A template of the [`error`][js-error] message guarded by [`string`][js-string] type with the replaceable **required** `[problem]` and `[fix]` tags and **optional** `[id]` and `[value]` tags. The value is being checked against the existence of **required** `[problem]` and `[fix]` tags by the static private `ValidationError.#guardTemplate()` method. It can be set directly or by the [`setTemplate()`][error-method-settemplate], [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] methods, and its **initial** value is from the static [`ValidationError.template`](#validationerrortemplate).

```typescript
public get template(): string {
  return this.#template;
}
public set template(value: string) {
  ValidationError.#guardTemplate(value) && (this.#template = value);
}
```

**Tags:**

Equivalent to the static [`ValidationError.template`](#validationerrortemplate).

<br>

#### `ValidationError.prototype.value`

[![new]][error-github-changelog]

The value of [`any`][ts-any] type affected by the validation error, which must be converted to a [`string`][js-string] to build a [`message`][error-property-message]. It can be set directly or by the [`setValue()`][error-method-setvalue], [`setMessage()`][error-method-setmessage] and [`throw()`][error-method-throw] methods.

**Conversion:**  
The conversion is performed only during [`message`][error-property-message] creation and can be done in **two** ways, **automatic** or **manual**.  

* The **manual**, by providing parser function as parameter (`parser?: ValueParser`) to the [`setMessage()`][error-method-setmessage] method.  
* The **automatic** by the defined function of the [`ValueParser`](#valueparser) type, set by the [`setValueParser()`][error-method-setvalueparser] method of an instance to automatize [`setMessage()`][error-method-setmessage].

```typescript
public get value(): any {
  return this.#value;
}
public set value(value: any) {
  this.#value = value;
}
```

<br>

### `ValidationError` static methods

#### `ValidationError.defineMessage()`

[![update]][error-github-changelog]

Defines the validation [`error`][js-error] message of [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface. The message is built on the provided `template` or the template from the static property [`ValidationError.template`](#validationerrortemplate). The **automatic** convert of the value is performed by the defined function of the [`ValueParser`](#valueparser) type, set by the static [`ValidationError.setValueParser()`](#validationerrorsetvalueparser) method.

```typescript
// Syntax.
public static defineMessage(
  message: ErrorMessage,
  callback?: ResultCallback<ErrorMessage>,
  parser: ValueParser = this.#defaultValueParser
): string {
  return this.#guardMessage(message, callback)
    ? this.#buildMessage(message, parser)
    : '';
}
```

**Parameters:**

| Name: type                                | Description |
| :---------------------------------------- | :---------- |
| `message: ErrorMessage`                   | An [`object`][js-object] of the [`ErrorMessage`](#errormessage) interface to build a message of [`string`][js-string] type. The value is checked against the proper [`object`][js-object] of [`ErrorMessage`](#errormessage). |
| `callback?: ResultCallback<ErrorMessage>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `message` is the proper [`object`][js-object] of [`ErrorMessage`](#errormessage) which means it contains **required** [`problem`][error-property-problem], [`fix`][error-property-fix] properties, and the **optional** [`template`][error-property-template] property has `[problem]` and `[fix]` tags. |
| `parser: ValueParser`                     | An optional [`function`][js-function] to convert property `value` from the provided [`ErrorMessage`](#errormessage) to [`string`][js-string] during message creation. It can be set by static [`ValidationError.setValueParser()`](#validationerrorsetvalueparser). |

**Returns:**

The **return value** is a message of [`string`][js-string] type created from the provided `message` of the [`ErrorMessage`](#errormessage) interface, or it's an empty [`string`][js-string] if the provided message [`object`][js-object] isn't proper.

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
  (result, value) => {
    // Do something with the `result` of the `message` check
    // and `value`.
    return result;
  }
);
```

<br>

#### `ValidationError.setTemplate()`

[![new]][error-github-changelog]

Sets the [`template`](#validationerrortemplate) of static [`ValidationError`](#validationerror) and as the default value for [`template`][error-property-template] of an instance.

```typescript
// Syntax.
public static setTemplate(
  template: string,
  callback?: ResultCallback<string>
): typeof ValidationError {
  ValidationError.#guardTemplate(template, callback) &&
    (this.#defaultTemplate = template);
  return ValidationError;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `template: string`                  | A [template](#validationerrortemplate) for error [`message`][error-property-message] guarded by [`string`][js-string] type with replaceable **required** `[problem]` and `[fix]` tags and **optional** `[id]` and `[value]`. |
| `callback?: ResultCallback<string>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `template` is a [`string`][js-string] that contains required `[fix]` and `[problem]` tags. |

**Returns:**

The **return value** is static [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.

```

<br>

#### `ValidationError.setValueParser()`

[![new]][error-github-changelog]

Sets the [`function`][js-function] to convert [`any`][ts-any] value to [`string`][js-string] during message creation by the static [`ValidationError.defineMessage()`](#validationerrorsetvalueparser) method and as the default parser for the instance.

```typescript
// Syntax.
public static setValueParser(
  parser: ValueParser,
  callback?: ResultCallback<ValueParser>
): typeof ValidationError {
  guardFunction(parser, callback) && (this.#defaultValueParser = parser);
  return ValidationError;
}
```

**Parameters:**

| Name: type                               | Description |
| :--------------------------------------- | :---------- |
| `parser: ValueParser`                    | The [`function`][js-function] of the `ValueParser` type to convert the value of [`any`][ts-any] type to [`string`][js-string]. |
| `callback?: ResultCallback<ValueParser>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `parser` is [`function`][js-function] type. |

**Returns:**

The **return value** is static [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
```

<br>

### `ValidationError` constructor

#### `ValidationError()`

[![update]][error-github-changelog]

Creates a new instance with the [`message`][error-property-message]. If the provided [`message`][error-property-message] is an [`object`][js-object], then its properties are assigned to the instance.

```typescript
// Syntax.
constructor(message: string | ErrorMessage = '') {
  super();

  // Initializes the message and assigns message properties `fix`, `problem` and optionally `template` to a new instance.
  this.setMessage(message);
}
```

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `message: string \| ErrorMessage` | The message of [`string`][js-string] type or of an [`ErrorMessage`](#errormessage) interface that is used to throw with an [`Error`][js-error]. |

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
import { ValidationError } from '@angular-package/error';
import { Callback, ErrorMessage } from '@angular-package/callback';
import { ResultCallback } from '@angular-package/type';

// Define a fix.
const fix = 'There is no solution to the described problem.';

// Define a problem.
const problem = 'The problem has no solution.';

// Define a template.
const template = 'PROBLEM: [problem] FIX: [fix]';

class CustomError {
  #callback = new Callback('setFix', 'setMessage', 'setProblem', 'setTemplate');
  #validationError = new ValidationError();

  constructor(
    message: string | ErrorMessage,
    callback?: (
      callback: Callback<'setFix' | 'setMessage' | 'setProblem' | 'setTemplate'>
    ) => void
  ) {
    if (callback) {
      callback(this.#callback);
    }

    this.#validationError.setMessage(message);
  }

  public setMessage(
    message: string | ErrorMessage,
    callback: ResultCallback<typeof message> = this.#callback.getResultCallback(
      'setMessage'
    )
  ) {
    this.#validationError.setMessage(message, callback);
  }

  public throw(): void {
    this.#validationError.throw();
  }
}

const customError = new CustomError('', (callback) =>
  callback
    .setResultCallback('setFix', (result, value) =>
      console.log(`setFix`, result, value)
    )

    // Console: 'setFix true There is no solution to the described problem.'
    .setResultCallback('setMessage', (result, value) =>
      console.log(`setMessage`, result, value)
    )

    // Console: 'setProblem true The problem has no solution.'
    .setResultCallback('setProblem', (result, value) =>
      console.log(`setProblem`, result, value)
    )

    // Console: 'setTemplate true PROBLEM: [problem] FIX: [fix]'
    .setResultCallback('setTemplate', (result, value) =>
      console.log(`setTemplate`, result, value)
    )
);

/**
 * ! Console returns
 * ? Checks message if string.
 * setMessage false
 * {
 *    fix: 'There is no solution to the described problem.',
 *    problem: 'The problem has no solution.', template: 'PROBLEM: [problem] FIX: [fix]'
 * }
 *
 * ? Checks message is an object.
 * setMessage false
 * {
 *    fix: 'There is no solution to the described problem.',
 *    problem: 'The problem has no solution.', template: 'PROBLEM: [problem] FIX: [fix]'
 * }
 */
customError.setMessage({ fix, problem, template });
```

<br>

### `ValidationError` instance public methods

#### `ValidationError.prototype.setFix()`

[![update]][error-github-changelog]

Sets the [`fix`][error-property-fix] a possible solution to the described [`problem`][error-property-problem].

```typescript
// Syntax.
public setFix(fix: string, callback?: ResultCallback<string>): this {
  guardString(fix, callback) && (this.#fix = fix);
  return this;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `fix: string`                       | A possible [solution][error-property-fix] to the described [`problem`][error-property-problem] guarded by [`string`][js-string] type. |
| `callback?: ResultCallback<string>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided [`fix`][error-property-fix] is a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

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
validationError.setFix(fix, (result, value) => {
  // Returns `true`.
  result;
  // Returns `There is no solution to the described problem.`.
  value;
  return result;
});
```

<br>

#### `ValidationError.prototype.setId()`

[![new]][error-github-changelog]

Sets the [`id`][error-property-id] an identifier of the described [`problem`][error-property-problem].

```typescript
// Syntax.
public setFix(fix: string, callback?: ResultCallback<string>): this {
  guardString(fix, callback) && (this.#fix = fix);
  return this;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `fix: string`                       | The identifier, guarded by [`number`][js-number] type. |
| `callback?: ResultCallback<string>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `id` is [`number`][js-number]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';
```

<br>

#### `ValidationError.prototype.setMessage()`

[![update]][error-github-changelog]

Sets the validation [`error`][js-error] [`message`][error-property-message] of [`string`][js-string] type from the provided `message` of the [`ErrorMessage`](#errormessage) interface or [`string`][js-string] type.

```typescript
// Syntax.
public setMessage(
  message: ErrorMessage,
  callback?: ResultCallback<typeof message>,
  parser: ValueParser = this.#valueParser
): this {
  (super.message = ValidationError.defineMessage(
    { ...message, ...{ template: message.template || this.#template } },
    callback,
    parser
  )) &&
    this.setFix(message.fix)
      .setId(message.id || this.#id)
      .setProblem(message.problem)
      .setValue(message.value);
  return this;
}
```

**Parameters:**

| Name: type                                  | Description |
| :------------------------------------------ | :---------- |
| `message: ErrorMessage`                     | A [`string`][js-string] type or an [`object`][js-object] of an [`ErrorMessage`](#errormessage) interface to build the message of [`string`][js-string] type. All properties are being assigned to the instance. The value is checked against the proper [`object`][js-object] of [`ErrorMessage`](#errormessage). |
| `callback?: ResultCallback<typeof message>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided [`message`][error-property-message] is [`string`][js-string] type or whether it's the proper [`object`][js-object] of [`ErrorMessage`](#errormessage) which means it contains required [`problem`][error-property-problem], [`fix`][error-property-fix] properties, and the optional [`template`][error-property-template] property has `[problem]` and `[fix]` tags. |
| `parser: ValueParser`                       | The [`function`][js-function] of the `ValueParser` type, to convert any value to a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

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
validationError.setMessage({ fix, problem }, (result, value) => {
  // Returns `false` then `true`.
  result;
  /*
    Returns {
      "fix": "There is no solution to the described problem.",
      "problem": "The problem has no solution.",
      "template": "PROBLEM: [problem] FIX: [fix]"
    }
  */
  value;
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

[![update]][error-github-changelog]

Sets the description of the validation [`problem`][error-property-problem].

```typescript
public setProblem(problem: string, callback?: ResultCallback<string>): this {
  guardString(problem, callback) && (this.#problem = problem);
  return this;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `problem: string`                   | Description of the validation [`problem`][error-property-problem] guarded by [`string`][js-string] type. |
| `callback?: ResultCallback<string>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `problem` is a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

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
validationError.setProblem(problem, (result, value) => {
  // Returns `true`.
  result;
  // Returns 'The problem has no solution.'
  value;
  return result;
});
```

<br>

#### `ValidationError.prototype.setTemplate()`

[![update]][error-github-changelog]

Sets the [`template`][error-property-template] of validation error [`message`][error-property-message].

```typescript
public setTemplate(
  template: string,
  callback?: ResultCallback<string>
): this {
  ValidationError.#guardTemplate(template, callback) &&
    (this.#tpl = template);
  return this;
}
```

**Parameters:**

| Name: type                          | Description |
| :---------------------------------- | :---------- |
| `template: string`                  | A message [`template`][error-property-template] guarded by [`string`][js-string] type with replaceable **required** `[problem]` and `[fix]` tags and **optional** `[id]` and `[value]` tags. |
| `callback?: ResultCallback<string>` | An optional callback function of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `template` is a [`string`][js-string] that contains **required** `[fix]` and `[problem]` tags. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

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
validationError.setTemplate(template, (result, value) => {
  // Returns `true`.
  result;
  // Returns 'PROBLEM: [problem], FIX: [fix]'
  value;
  return result;
});
```

<br>

#### `ValidationError.prototype.setValue()`

[![new]][error-github-changelog]

Sets the [`value`][error-property-value] affected by the validation error (must be converted to [`string`][js-string]).

```typescript
public setValue(value: any): this {
  this.#value = value;
  return this;
}
```

**Parameters:**

| Name: type   | Description |
| :----------- | :---------- |
| `value: any` | The value of [`any`][ts-any] type as a replacement to the `[value]` tag of [`template`][error-property-template] that relates to the given [`problem`][error-property-problem]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

```

<br>

#### `ValidationError.prototype.setValueParser()`

[![new]][error-github-changelog]

Sets the [`function`][js-function] to automatically convert [`any`][ts-any] [`value`][error-property-value] to the [`string`][js-string] during message creation. The [`function`][js-function] is used implicitly by the [`updateMessage()`][error-method-updatemessage] and with the parameter by [`setMessage()`][error-method-setmessage] method.

```typescript
public setValueParser(parser: ValueParser): this {
  guardFunction(parser) && (this.#valueParser = parser);
  return this;
}
```

**Parameters:**

| Name: type            | Description |
| :-------------------- | :---------- |
| `parser: ValueParser` | The [`function`][js-function] of the [`ValueParser`](#valueparser) type, to convert [`any`][ts-any] [`value`][error-property-value] to a [`string`][js-string]. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

**Usage:**

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

```

<br>

#### `ValidationError.prototype.throw()`

[![update]][error-github-changelog]

Throws an error of [`ValidationError`](#validationerror) with the message built from the stored required [`fix`][error-property-fix], [`problem`][error-property-problem] and optional [`id`][error-property-id], [`template`][error-property-template] and [`value`][error-property-value] properties or optionally from the provided `message`. The provided `message` of the [`ErrorMessage`](#errormessage) is set to the instance. If the `message` parameter is not provided, then if the `problem` of an instance of `ValidationError` is not an empty [`string`][js-string] it builds and overwrites the `message`.

```typescript
public throw(message?: ErrorMessage): void {
  isDefined(message) ? this.setMessage(message) : this.updateMessage();
  throw this;
}
```

**Parameters:**

| Name: type               | Description |
| :----------------------- | :---------- |
| `message?: ErrorMessage` | An optional [`object`][js-object] of an [`ErrorMessage`](#errormessage) interface to build the message of [`string`][js-string] type. The value is checked against the proper [`object`][js-object] of [`ErrorMessage`](#errormessage). |

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
const validationError = new ValidationError();

// Throw an error with message.
validationError.throw({ fix, problem, template });
```

<br>

#### `ValidationError.prototype.updateMessage()`

[![update]][error-github-changelog]

Updates the message with a stored required [`fix`][error-property-fix], [`problem`][error-property-problem], and optional [`id`][error-property-id], [`template`][error-property-template], [`value`][error-property-value] properties.

```typescript
public updateMessage(callback?: ResultCallback<ErrorMessage>): this {
  super.message = ValidationError.defineMessage(
    {
      fix: this.#fix,
      id: this.#id,
      problem: this.#problem,
      template: this.#template,
      value: this.#value,
    },
    callback,
    this.#valueParser
  );
  return this;
}
```

**Parameters:**

| Name: type                                | Description |
| :---------------------------------------- | :---------- |
| `callback?: ResultCallback<ErrorMessage>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the stored properties used to build a message of [`string`][js-string] type are proper. |

**Returns:**

The **return value** is an instance of a [`ValidationError`](#validationerror).

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
const validationError = new ValidationError();

// Sets defined above fix, problem, and template.
validationError.setProblem(problem).setFix(fix).setTemplate(template);

// Returns empty string.
validationError.message;

// Update the message with actual settings.
validationError.updateMessage();

/*
  Returns
  PROBLEM: The problem has no solution. FIX: There is no solution to the described problem.
*/
validationError.message;

// Throw.
validationError.throw();

// or throw
throw validationError;
```

<br>

### Another example usage of `ValidationError`

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error';

// Declare shape of the person.
interface Person {
  firstName: string;
  lastName: string;
}

// Initialize an instance.
const validationErrorOfPerson = new ValidationError();

// Define a fix.
const fix = 'Please, provide only alphabetical characters.';

// Create an object.
const personError = {
  firstName: validationErrorOfPerson.setMessage({
    problem: 'Provided the first name cannot include special characters.',
    fix
  }),
  lastName: validationErrorOfPerson.setMessage({
    problem: 'Provided the last name cannot include special characters.',
    fix
  })
};


const addPerson = (person: Person) => {
  if (person.firstName.includes('#')) {
    personError.firstName.throw();
  }
  if (person.firstName.includes('#')) {
    personError.lastName.throw();
  }
};

addPerson({
  firstName: '#',
  lastName: '#'
});

```

```typescript
// Example usage.
import { ValidationError } from '@angular-package/error'; 

const validationError = new ValidationError();

try {
  validationError
    .setMessage('message of validation error')
    .throw();
} catch (e) {
  // message of validation error
  console.log(e.message);
  // Empty string.
  console.log(e.problem);
  // Empty string.
  console.log(e.fix);
}

try {
  validationError
    .setMessage('message of validation error')
    .setProblem('my problem')
    .setFix('my fix')
    .throw();
} catch (e) {
  // Problem: my problem => Fix: my fix
  console.log(e.message);
  // my problem
  console.log(e.problem);
  // my fix
  console.log(e.fix);
}

try {
  validationError
    .setMessage('message of validation error')
    .setProblem('my problem')
    .setFix('my fix')
    .setMessage('message of validation error')
    .throw();
} catch (e) {
  // message of validation error
  console.log(e.message);
  // Empty string
  console.log(e.problem);
  // Empty string
  console.log(e.fix);
}

try {
  validationError
    .setMessage({ problem: 'my problem', fix: 'my fix'})
    .throw();
} catch (e) {
  // Problem: my problem => Fix: my fix
  console.log(e.message);
  // my problem
  console.log(e.problem);
  // my fix
  console.log(e.fix);
}

try {
  validationError
    .throw({ problem: 'my problem', fix: 'my fix'});
} catch (e) {
  // Problem: my problem => Fix: my fix
  console.log(e.message);
  // my problem
  console.log(e.problem);
  // my fix
  console.log(e.fix);
}
```

<br>

## Interface

#### `ErrorMessage`

The shape of an [`object`][js-object] for an [`error`][js-error] message that contains a possible [`solution`][error-property-fix] to the described [`problem`][error-property-problem].

```typescript
export interface ErrorMessage {
  fix: string;
  problem: string;
  template?: string;
  value?: string;
}
```

**Properties:**

**`fix: string`**  
A possible solution to the described problem of a [`string`][js-string] type.

**`problem: string`**  
Description of validation problem of a [`string`][js-string] type.

**`template?: string`**  
An optional error message template of a [`string`][js-string] type.

**`value?: string`**  
[![new]][error-github-changelog]  
An optional value affected by the validation error, which must be parsed to [`string`][js-string].

<br>

## Experimental

![experimental] [![update]][error-github-changelog]

### Message builder

#### `MessageBuilder`

Message builder to build [`class`][js-classes], [`function`][js-function] and `method` of a [`string`][js-string] type.

```typescript
// Example usage of building a function.
import { MessageBuilder } from '@angular-package/error';

/**
 * Initialize `MessageBuilder`.
 */
const messageFunctionBuilder = new MessageBuilder('function');

messageFunctionBuilder
  .replaceFunctionName('guardString')
  .replaceParam('value', 'string')
  .replaceReturn('boolean');

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
  .replaceMethodName('setPerson')
  .replaceParam('value', 'string')
  .replaceReturn('this');

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
  .replaceClassName('Person.prototype.')
  .replaceMethodName('setPerson')
  .replaceParam('value?', 'object')
  .replaceReturn('object');

// Console returns `Person.prototype.setPerson(value?: object): object`
console.log(messageClassBuilder.get);
```

<br>

#### `MessageFunctionBuilder`

Message builder to build a [`function`][js-function] of a [`string`][js-string] type.

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
  .setReturn('boolean');

// Console returns [function]([param.name][param.type])[return]
console.log(messageFunctionBuilder.get);

// Build.
messageFunctionBuilder.build();

// Console returns guardString(value: string): boolean
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

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

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
  [error-github-changelog]: https://github.com/angular-package/error/blob/main/CHANGELOG.md

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
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
