
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0] - 2021-10-10

- Added `id` the identifier of the described `problem`, guarded by number type and it's a replacement for an optional tag [id] of the `template`.
- Added the `value` of any type affected by the validation error, which must be converted to a `string` to build a message and it's a replacement for an optional tag [value] of the `template`.
- Added `setTemplate()` static method to set the `template` of static `ValidationError` and as the default value for the `template` of an instance.
- Added `setValueParser()` static method to set the `function` to convert `any` value to `string` during message creation performed by the static `ValidationError.defineMessage()` method and as the default parser for the instance.
- Added `setId()` to set the `id` as an identifier of the described `problem`.
- Added `setValue()` to set the `value` affected by the validation error (must be converted to string).
- Added `setValueParser()` to sets the `function` to automatically convert the value of `any` type to the `string` during message creation.
- Added `template` property with optional `[id]`, `[value]` tags.
- Update `throw()` method to throw a **new** instance instead of this.

### 3.0.0 Added

- [53c2043] [c00758a]  

  **property `template`**  
  Added static public method `setTemplate()` to set the `template`.  
  Added tag `[id]` to the static private property `#defaultTemplate`.  

  **property `value`**  
  Added private property `#value` by default equal to `''`.  
  Added `value` instance property that refers to private `#value`.  
  Added tag `[value]`.  
  Added `setValue()` method to set the `value` affected by the validation error.  
  Added static private `#defaultValueParser` property of the default value equal to `(value) => String(value)`.
  Added private property `#valueParser` function of `ValueParser` type to convert the value of `any` type to `string` with the default value equal to static `ValidationError.#defaultValueParser`.
  Added `setValueParser()` method of an instance to convert property `value` of an instance to `string` during message creation.  
  Added `setValueParser()` of static `ValidationError` to set value parser.  

  **property `id`**  
  Added private property `#id` of an instance as an identifier of the described problem.
  Added a public property `id` as an identifier of the described `problem`, guarded by `number` type, and as a replacement for an optional tag `[id]`.  
  Added tag `[id]` to static private property `#tags`.
  Added public `setId()` method of an instance to set the `id`.  

- [285ef51]  
  Added property `template` of an instance that refers to private property `#tpl`. (changed to `#template` [c00758a])  
  Added private property `#tags` of `string[]` to replace the template `[problem]` and `[fix]` tags.  

### 3.0.0 Changed

- [c00758a]  
  Changed `updateMessage()` by adding an optional `callback` parameter and use of value parser function.
  Changed `setMessage()` method of an instance by adding an optional parameter `parser` of `ValueParser` type and the way it assigns the message properties to only when they are all proper.
  Changed `throw()` method to throw new instance of `ValidationError` based on actual settings.
  Changed `constructor()` by adding an optional `parser` parameter of `ValueParser` type that initialize the default parser for the instance.  

  **property `template`**
  Changed private property `#tpl` of an instance change name to `#template`.  
  Changed static private property `#template` change name to `#defaultTemplate`.
  Changed public property `template` of an instance to refers to private property `#template` of an instance. (changes [285ef51])  

- [53c2043]  
  Changed `updateMessage()` method to include `#value` property.

- [8a0f58d]  
  Changed library to `es2020`.  

- [285ef51] [25ea72b]
  Changed conditionals to short if expressions.  
  Changed use of static `ValidationError` to `this`.  
  Changed to `ResultCallback` with generic type variable `Value`.  
  Changed usage of `is` and `guard` objects to use functions of `@angular-package/type`.  
  ~~Changed the `setMessage()` method to set the `problem` and `fix` properties to empty string if the provided message is a `string` type~~.  
  Changed `setMessage()` method to use as first, template from the given `message` parameter, and if it's empty the private property ~~`#tpl`~~ `#template`.  
  Changed `defineMessage()` static method to use private property `#tags` to replace them in the template.  

- [25ea72b]  
  Changed `set` prefix to `replace` of methods.

### 3.0.0 Removed

- [c00758a]  
  Removed possibility to add `string` type message in the `constructor`, `throw()`, `setMessage()` methods of an instance.  

- [7ed2b5c] [96c5563] [4af703a]  
  Removed the default usage of callback.
  Removed `AllowedCallback` type because the removed default usage of callback.  

[53c2043]: https://github.com/angular-package/error/commit/53c20435df2225cb38e8d45d8f07e9c60db4d95a
[25ea72b]: https://github.com/angular-package/error/commit/25ea72b733939264b6546d01ef2945cc1e716fa5
[8a0f58d]: https://github.com/angular-package/error/commit/8a0f58dae2b8a474848a2eccbe3218a0da0c017e
[285ef51]: https://github.com/angular-package/error/commit/285ef51805a3f1528b62d389214c106c3f213dfa
[c00758a]: https://github.com/angular-package/error/commit/c00758a02cd32e61b813719df7ee8b0f7d18cb12
[7ed2b5c]: https://github.com/angular-package/error/commit/7ed2b5c90ed9922b8ced3622db4e0aa9b51afc38
[96c5563]: https://github.com/angular-package/error/commit/96c5563285f86eb2ce5d1ecff39aa2110507f220
[4af703a]: https://github.com/angular-package/error/commit/4af703afa7c2c432a902faad96fa535640bc5671

## [2.0.2] - 2021-08-12

### 2.0.2 Fixed

- [`ff06f3a`][ff06f3a]  
  Fixed `package.json` peer dependencies cause of `@angular-package/callback`. 

[ff06f3a]: https://github.com/angular-package/error/commit/ff06f3ae1b5c922c7605a7fb6301dd238b9e1b7a

## [2.0.1] - 2021-08-12

### 2.0.1 Fixed

- [`c77f3cf`][c77f3cf]  
  Fix JS documentation of `ValidationError`.  

- [`bc8e965`][bc8e965]  
  Fix documentation of `README.md`.  

[c77f3cf]: https://github.com/angular-package/error/commit/c77f3cfc8f7958dbfa29022d2e564d6095c2dc65
[bc8e965]: https://github.com/angular-package/error/commit/bc8e9653bd5e5546f2a3df2d6d6f18bcefea192b

## [2.0.0] - 2021-08-12

### 2.0.0 Added

- [`069d111`][069d111]  
  Added static private property `#template` of a `string` type.  
  Added private instance `#callback` property of [`Callback`][package-callback] instance.  
  Added private instance `#fix`,  `#problem`, `#tpl` property.  
  Added pubic methods [`setFix()`][error-method-setfix], [`setMessage()`][error-method-setmessage], [`setProblem()`][error-method-setproblem], [`setTemplate()`][error-method-settemplate], [`throw()`][error-method-throw], [`updateMessage()`][error-method-updatemssage] of an instance.  
  Added static private methods `#guardMessage()`, `#guardTemplate()`.  
- [`4040750`][4040750]  
  Added an optional property `template` to the [`ErrorMessage`][error-interface-errormessage] interface.
- [`0d5cc92`][0d5cc92]  
  Added [`VEAllowedCallback`][error-type-veallowedcallback] type of allowed names for internal instance of [`Callback`][package-callback].

[069d111]: https://github.com/angular-package/error/commit/069d111220b63c2d2cdbffa499f3588121f14e16
[4040750]: https://github.com/angular-package/error/commit/40407503893484874e588b8b5b42c6e40a5fc3ab
[0d5cc92]: https://github.com/angular-package/error/commit/0d5cc920b7e5c750f77099580ec2f53070d3cac7

### 2.0.0 Changed

- [`069d111`][069d111]  
  Changed static public [`template`][error-static-template] property to use static private `#template` property that is guarded by the private static `#guardTemplate()` method.  
  Changed instance [`fix`][error-property-fix] property to use private `#fix`.  
  Changed instance [`problem`][error-property-problem] property to use private `#problem`.  
  Changed public static [`defineMessage()`][error-method-static-definemessage] method to use private static `#guardMessage()` to guards the provided `message`.  
  Changed constructor to use public [`setMessage()`][error-method-setmessage] method and add new `callback` parameter to handle private instance of [`Callback`][package-callback].  
- [`0708846`][0708846] [`bcc6521`][bcc6521] [`0bbd886`][0bbd886]  
  Updated [`README.md`](https://github.com/angular-package/error#readme).

[0bbd886]: https://github.com/angular-package/error/commit/0bbd88630e0a695ab4865903c83bda7b2e56dfef
[bcc6521]: https://github.com/angular-package/error/commit/bcc652139613a7f8ef721cd12bc076fde3edadb8
[0708846]: https://github.com/angular-package/error/commit/0708846f6bc3de0fa080e5f58fa4a36adfcb7dcd

## [1.0.3] - 2021-08-06

### 1.0.3 Added

- [`5752d9e`][5752d9e]  
  Tests for the `MessageFunctionBuilder`.
- [`488270d`][488270d]  
  Tests for the `MessageBuilder`.

[5752d9e]: https://github.com/angular-package/error/commit/5752d9e7b3631dcca0d6945e25a92d1fdfb9eee3
[488270d]: https://github.com/angular-package/error/commit/488270d4c88f8575c8289022559e4f8ce1de828b

### 1.0.3 Changed

- [`5bd6a2b`][5bd6a2b]  
  jsdoc description of the `MessageBuilder`.
- [`1dffd31`][1dffd31]
  Updated `README.md`.

[5bd6a2b]: https://github.com/angular-package/error/commit/5bd6a2bf8dc98db6666f8d84bb28771357f17105
[1dffd31]: https://github.com/angular-package/error/commit/1dffd31ab4db736a4f583ac4d3c1994c92da92ea

### 1.0.3 Fixed

- [`5427c65`][5427c65]  
  Added message builder to api.

[5427c65]: https://github.com/angular-package/error/commit/5427c6585ddebe01bc6e3733425e07b924ec0ca6

----

## [1.0.2] - 2021-08-04

### 1.0.2 Update

- Update `README.md`.

### 1.0.2 Fix

- [`253dda9`][253dda9]  
  Fixes the `homepage` link in the `package.json`.

[253dda9]: https://github.com/angular-package/error/commit/253dda9b0cd14d7766f7ac3da33e4aaf35af1193

## [1.0.1] - 2021-08-04

### 1.0.1 Fix

- [`ab8729f`][ab8729f]  
  Remove unnecessary peer dependencies.

[ab8729f]: https://github.com/angular-package/error/commit/ab8729f3627d63729326ddfd354296c2ae800c33

[error-method-static-definemessage]: https://github.com/angular-package/error#validationerrordefinemessage

[error-method-setfix]: https://github.com/angular-package/error#validationerrorprototypesetfix
[error-method-setmessage]: https://github.com/angular-package/error#validationerrorprototypesetmessage
[error-method-setproblem]: https://github.com/angular-package/error#validationerrorprototypesetproblem
[error-method-settemplate]: https://github.com/angular-package/error#validationerrorprototypesettemplate
[error-method-throw]: https://github.com/angular-package/error#validationerrorprototypethrow
[error-method-updatemssage]: https://github.com/angular-package/error#validationerrorprototypeupdatemssage

[error-static-template]: https://github.com/angular-package/error#validationerrortemplate
[error-type-veallowedcallback]: https://github.com/angular-package/error#veallowedcallback
[error-interface-errormessage]: https://github.com/angular-package/error#errormessage

[package-callback]: https://github.com/angular-package/callback

[error-property-fix]: https://github.com/angular-package/error#validationerrorprototypefix
[error-property-message]: https://github.com/angular-package/error#validationerrorprototypemessage
[error-property-problem]: https://github.com/angular-package/error#validationerrorprototypeproblem