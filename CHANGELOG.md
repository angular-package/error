
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.1] - 2021-08-12

### 2.0.1 Fix

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