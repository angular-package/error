// @angular-package/type.
import { is, guard } from '@angular-package/type';

// @angular-package/callback.
import {
  Callback,
  CallbackPayload,
  ResultCallback,
} from '@angular-package/callback';

// Interface.
import { ErrorMessage } from '../interface/error-message.interface';

// Type.
import { VEAllowedCallback } from '../type/allowed-callback.type';

/**
 * Manages an `Error` of validation.
 */
export class ValidationError extends Error {
  /* #region static private properties */
  /**
   * A static, privately stored template of the error message.
   */
  static #template = `Problem: [problem] => Fix: [fix]`;
  /* #endregion static private properties */

  //#region instance private properties.
  /**
   * An instance of `Callback` with specified allowed names of callback functions for the `ValidationError`.
   */
  #callback = new Callback('setFix', 'setMessage', 'setProblem', 'setTemplate');

  /**
   * A privately stored possible solution to the described problem of a `string` type.
   * By default, it's an empty `string`.
   */
  #fix = '';

  /**
   * A privately stored validation problem of a `string` type.
   * By default, it's an empty `string`.
   */
  #problem = '';

  /**
   * A string-type privately stored template of the error message that contains replaceable `[fix]` and `[problem]` words.
   */
  #tpl = ValidationError.template;
  //#endregion instance private properties.

  /**
   * A template of the error message guarded by a `string` type with the replaceable `[problem]` and `[fix]` words.
   * By default, it's set to `Problem: [problem] => Fix: [fix]`. It can be set directly or by the `setTemplate()` and `setMessage()` method.
   * The value is being checked against the existence of `[problem]` and `[fix]` words.
   */
  static get template(): string {
    return ValidationError.#template;
  }
  static set template(value: string) {
    ValidationError.#template = ValidationError.#guardTemplate(value)
      ? value
      : ValidationError.#template;
  }

  //#region instance public properties.
  /**
   * A possible solution to the described `problem` of validation that is guarded by a `string` type.
   * By default, it's an empty `string`. It can be set directly or by the `setTemplate()` and `setMessage()` method
   */
  public get fix(): string {
    return this.#fix;
  }
  public set fix(value: string) {
    this.#fix = guard.string(value) ? value : this.#fix;
  }

  /**
   * A validation error message guarded by a `string` type that can be built from the `problem` and `fix` of `ValidationError` on the
   * `template`. It can be set directly or by the `throw()` or `setMessage()` method.
   */
  public set message(value: string) {
    super.message = guard.string(value) ? value : super.message;
  }
  public get message(): string {
    return super.message;
  }

  /**
   * Error name of a `string` type that is being thrown. By default, it's `ValidationError`.
   */
  public name = ValidationError.name;

  /**
   * Description of a validation problem guarded by a `string` type. By default, it's an empty `string`.
   * It can be set directly or by the `setProblem()` and `setMessage()` method.
   */
  public get problem(): string {
    return this.#problem;
  }
  public set problem(value: string) {
    this.#problem = guard.string(value) ? value : this.#problem;
  }
  //#endregion instance public properties.

  //#region static public methods
  /**
   * Defines the validation error message of a `string` type from the provided `message` of the `ErrorMessage` interface.
   * @param message An object of an `ErrorMessage` interface to build a message of a `string` type. The value is checked against
   * the proper `object`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message contains
   * required `problem` and `fix` properties.
   * @returns The return value is a message of a `string` type created from the provided `message` of `ErrorMessage` interface or it's an
   * empty `string` if the provided message object isn't proper.
   * @angularpackage
   */
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
  //#endregion static public methods

  //#region private static methods.
  /**
   * Guards the provided message to be of `ErrorMessage` shape.
   * @param message An object of the `ErrorMessage` interface to build the message of a `string` type. The value is checked against
   * the proper `object`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `message` contains
   * required `problem` and `fix` properties.
   * @returns The return value is a `boolean` indicating whether the provided `message` is an object of `ErrorMessage`.
   * @angularpackage
   */
  static #guardMessage<Payload extends object>(
    message: ErrorMessage,
    callback?: ResultCallback<Payload & CallbackPayload>
  ): message is ErrorMessage {
    return guard.objectKey(message, ['fix', 'problem'], callback)
      ? is.defined(message.template)
        ? guard.string(message.problem) &&
          guard.string(message.fix) &&
          ValidationError.#guardTemplate(message.template, callback)
        : guard.string(message.problem) && guard.string(message.fix)
      : false;
  }

  /**
   * Guards the provided `template` to be a `string` type that includes `[fix]` and `[problem]` words.
   * @param template A string-type value to guard.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message contains
   * @returns The return value is a `boolean` indicating whether the provided `template` is a `string` that includes `[fix]` and `[problem]`
   * words.
   * @angularpackage
   */
  static #guardTemplate<Payload extends object>(
    template: string,
    callback?: ResultCallback<Payload & CallbackPayload>
  ): template is string {
    return guard.string(template, callback)
      ? template.includes('[fix]') && template.includes('[problem]')
      : false;
  }
  //#endregion private static methods.

  /**
   * Creates a new instance with the message. If the provided `message` is an `object`, then its properties are assigned
   * to the instance.
   * @param message The message of a `string` type or of an `ErrorMessage` interface that is used to throw with an `Error`.
   * @param callback An optional function to handle the internal instance of `Callback`.
   * @angularpackage
   */
  constructor(
    message: string | ErrorMessage = '',
    callback?: (callback: Callback<VEAllowedCallback>) => void
  ) {
    super();

    // Sets the callback for an instance methods.
    if (is.function(callback)) {
      callback(this.#callback);
    }

    // Initializes the message and assigns message properties `fix`, `problem` and optionally `template` to a new instance.
    this.setMessage(message);
  }

  //#region instance public methods.
  /**
   * Sets the fix a possible solution to the described problem.
   * @param fix A possible solution to the described problem guarded by a `string` type.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `fix` is a `string`.
   * By default, it uses an internal callback under the `'setFix'` name, which can be initially set by the optional `callback` parameter
   * that gives access to the internal instance of `Callback`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
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

  /**
   * Sets the validation error message of a `string` type from the provided `message` of the `ErrorMessage` interface.
   * @param message An object of an `ErrorMessage` interface to build the message of a `string` type. The value is checked against
   * the proper `object`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message is a string
   * type or whether it's an object that contains required `problem` and `fix` properties.
   * By default, it uses an internal callback under the `'setFix'` name, which can be initially set by the optional `callback` parameter
   * that gives access to the internal instance of `Callback`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
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

    // Sets `fix`, `problem` and `template` from the provided `message`.
    if (is.object(message)) {
      this.setFix(message.fix).setProblem(message.problem);
      if (is.defined(message.template)) {
        this.setTemplate(message.template);
      }
    }
    return this;
  }

  /**
   * Sets description problem of a validation.
   * @param problem Description of validation problem guarded by a `string` type.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `problem` is a
   * `string`. By default, it uses an internal callback under the `'setProblem'` name, which can be initially set by the optional `callback`
   * parameter that gives access to the internal instance of `Callback`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setProblem(
    problem: string,
    callback: ResultCallback<CallbackPayload> = this.#callback.getCallback(
      'setProblem'
    )
  ): this {
    this.#problem = guard.string(problem, callback) ? problem : this.#problem;
    return this;
  }

  /**
   * Sets the template of validation error message.
   * @param template A message template guarded by a `string` type with replaceable `[problem]` and `[fix]` words.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `template` is a
   * `string` that contains `[fix]` and `[problem]` words. By default, it uses an internal callback under the `'setTemplate'` name, which
   * can be initially set by the optional `callback` parameter that gives access to the internal instance of `Callback`.
   * @angularpackage
   */
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

  /**
   * Throws an error of `ValidationError` with the message built from the stored `fix`, `problem` and `template` or optionally from
   * the provided `message`.
   * @param message An optional object of an `ErrorMessage` interface to build the message of a `string` type.
   * The value is checked against the proper object.
   * @angularpackage
   */
  public throw(message?: string | ErrorMessage): void {
    if (is.defined(message)) {
      this.setMessage(message);
    } else {
      this.updateMessage();
    }
    throw this;
  }

  /**
   * Updates the message with a stored `fix`, `problem`, and `template`.
   * @angularpackage
   */
  public updateMessage(): void {
    this.message = ValidationError.defineMessage({
      fix: this.#fix,
      problem: this.#problem,
      template: this.#tpl,
    });
  }
  //#endregion instance public methods.
}
