// @angular-package/type.
import {
  ResultCallback,
  areString,
  guardObjectKeys,
  guardString,
  guardStringIncludes,
  guardStringLength,
  isDefined,
  isObject,
  isString,
} from '@angular-package/type';
// Interface.
import { ErrorMessage } from '../interface/error-message.interface';
/**
 * Manages an `Error` of validation.
 */
export class ValidationError extends Error {
  //#region static private properties
  /**
   * Tags to be replaced.
   */
  static #tags = ['fix', 'problem', 'value'];

  /**
   * A static, privately stored template of the error message.
   */
  static #template = `Problem: [problem] => Fix: [fix]`;
  //#endregion static private properties

  //#region instance private properties.
  /**
   * A privately stored possible solution to the described problem of `string` type.
   * * By default, it's an empty `string`.
   */
  #fix = '';

  /**
   * A privately stored validation problem of `string` type.
   * * By default, it's an empty `string`.
   */
  #problem = '';

  /**
   * A string-type privately stored template of the error message that contains replaceable `[fix]` and `[problem]` tags.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   */
  #tpl = ValidationError.template;

  /**
   * The value affected by the validation error after parsing to `string`.
   */
  #value = '';
  //#endregion instance private properties.

  //#region static public properties
  /**
   * A template of the error message guarded by `string` type with the replaceable `[problem]` and `[fix]` tags.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   * * The value is being checked against the existence of `[problem]` and `[fix]` tags.
   */
  static get template(): string {
    return this.#template;
  }
  static set template(value: string) {
    this.#guardTemplate(value) && (this.#template = value);
  }
  //#endregion static public properties

  //#region instance public properties.
  /**
   * A possible solution to the described `problem` of validation that is guarded by `string` type.
   * * It can be set directly or by the `setFix()` and `setMessage()` method.
   * * By default, it's an empty `string`.
   */
  public get fix(): string {
    return this.#fix;
  }
  public set fix(value: string) {
    guardString(value) && (this.#fix = value);
  }

  /**
   * A validation error message guarded by `string` type that can be built from the `problem` and `fix` on the `template`
   * of an instance of `ValidationError`.
   * * It can be set directly or by the `throw()` and `setMessage()` method.
   */
  public get message(): string {
    return super.message;
  }
  public set message(value: string) {
    guardString(value) && (super.message = value);
  }

  /**
   * Error name of `string` type that is being thrown.
   * * By default, it's `ValidationError`.
   */
  public name = ValidationError.name;

  /**
   * Description of the validation problem guarded by `string` type.
   * * It can be set directly or by the `setProblem()` and `setMessage()` method.
   * * By default, it's an empty `string`.
   */
  public get problem(): string {
    return this.#problem;
  }
  public set problem(value: string) {
    guardString(value) && (this.#problem = value);
  }

  /**
   * A template of the error message guarded by `string` type with required replaceable `[problem]` and `[fix]` tags and optionally
   * `[value]` tag. The value is being checked against the existence of required `[problem]` and `[fix]` tags.
   * * It can be set directly or by the `setTemplate()` and `setMessage()` method.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   */
  public get template(): string {
    return this.#tpl;
  }
  public set template(value: string) {
    ValidationError.#guardTemplate(value) && (this.#tpl = value);
  }

  /**
   * The value affected by the validation error, which must be parsed to `string`.
   */
  public get value(): string {
    return this.#value;
  }
  public set value(value: string) {
    guardString(value) && (this.#value = value);
  }
  //#endregion instance public properties.

  //#region static public methods
  /**
   * Defines the validation error message of `string` type from the provided `message` of the `ErrorMessage` interface. The message is built
   * on the provided `template` or the template from the static property `template`.
   * @param message An `object` of an `ErrorMessage` interface to build a message of `string` type. The value is checked against the proper
   * `object` of `ErrorMessage`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message is the proper
   * `object` of `ErrorMessage` which means it contains required `problem`, `fix` properties, and the optional `template` property has
   * `[problem]` and `[fix]` tags.
   * @returns The return value is a message of `string` type created from the provided `message` of the `ErrorMessage` interface or it's an
   * empty `string` if the provided message object isn't proper.
   * @angularpackage
   */
  public static defineMessage(
    message: ErrorMessage,
    callback?: ResultCallback<ErrorMessage>
  ): string {
    return this.#guardMessage(message, callback)
      ? this.#buildMessage(message)
      : '';
  }
  //#endregion static public methods

  //#region static private methods.
  /**
   * Builds the validation error message of `string` type based on the provided `message` of the `ErrorMessage` interface.
   * @param message An `object` of an `ErrorMessage` interface to build a message of `string` type. The value is not checked against the
   * proper `object`.
   * @returns The return value is a message of `string` type created from the provided `message` parameter.
   * @angularpackage
   */
  static #buildMessage(message: ErrorMessage): string {
    let m = message.template || this.template;
    return (
      this.#tags.forEach(
        (tag) =>
          (m = m.replace(
            `[${tag}]`,
            String((message[tag as keyof Omit<ErrorMessage, 'template'>]))
          ))
      ),
      m
    );
  }

  /**
   * Guards the provided message to be of `ErrorMessage` shape.
   * @param message An object of the `ErrorMessage` interface to build the message of `string` type. The value is checked against the proper
   * `object`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `message` contains
   * required `problem`, `fix` properties and the optional `template` has `[problem]` and `[fix]` tags.
   * @returns The return value is a `boolean` indicating whether the provided `message` is an object of `ErrorMessage`.
   * @angularpackage
   */
  static #guardMessage(
    message: ErrorMessage,
    callback: ResultCallback<ErrorMessage> = (result) => result
  ): message is ErrorMessage {
    return callback(
      guardObjectKeys(message, ['fix', 'problem']) &&
        areString(message.fix, message.problem).every()
        ? isDefined(message.template)
          ? this.#guardTemplate(message.template)
          : true
        : false,
      message
    );
  }

  /**
   * Guards the provided `template` to be `string` type that includes `[fix]` and `[problem]` tags.
   * @param template A string-type value to guard.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message includes
   * `[fix]` and `[problem]` tags.
   * @returns The return value is a `boolean` indicating whether the provided `template` is a `string` that includes `[fix]` and `[problem]`
   * tags.
   * @angularpackage
   */
  static #guardTemplate(
    template: string,
    callback?: ResultCallback<string>
  ): template is string {
    return guardStringIncludes(template, ['[fix]', '[problem]'], callback);
  }
  //#endregion static private methods.

  /**
   * Creates a new instance with the message. If the provided `message` is an `object`, then its properties are assigned to the instance.
   * @param message The message of `string` type or of an `ErrorMessage` interface that is used to throw with an `Error`.
   * @angularpackage
   */
  constructor(message: string | ErrorMessage = '') {
    super();

    // Initializes the message and assigns message properties `fix`, `problem` and optionally `template` to a new instance.
    this.setMessage(message);
  }

  //#region instance public methods.
  /**
   * Sets the `fix` a possible solution to the described `problem`.
   * @param fix A possible solution to the described `problem` guarded by `string` type.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `fix` is a `string`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setFix(fix: string, callback?: ResultCallback<string>): this {
    guardString(fix, callback) && (this.#fix = fix);
    return this;
  }

  /**
   * Sets the validation error message of `string` type from the provided `message` of the `ErrorMessage` interface or `string` type.
   * @param message A `string` type or an `object` of an `ErrorMessage` interface to build the message of `string` type. The value is
   * checked against the proper `object` of `ErrorMessage`.
   * @param callback An optional callback `function` of `ResultCallback` type to handle the check whether the provided `message` is `string`
   * type or whether it's the proper `object` of `ErrorMessage` which means it contains required `problem`, `fix` properties, and the
   * optional `template` has `[problem]` and `[fix]` tags.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setMessage(
    message: string | ErrorMessage,
    callback?: ResultCallback<typeof message>
  ): this {
    super.message = isString(message, callback)
      ? message
      : ValidationError.defineMessage(
          { ...message, ...{ template: message.template || this.#tpl } },
          callback
        );

    isObject(message)
      // Sets `fix`, `problem`, `value` and `template` from the provided `message`.
      ? (this.setFix(message.fix).setProblem(message.problem).setValue(message.value as string),
        isDefined(message.template) && this.setTemplate(message.template))
      // Sets `fix`, `problem` to empty string.
      : (this.#fix = '', this.#problem = '', this.#value = '');
    return this;
  }

  /**
   * Sets description of the validation problem.
   * @param problem Description of validation problem guarded by `string` type.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `problem` is a
   * `string`.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setProblem(problem: string, callback?: ResultCallback<string>): this {
    guardString(problem, callback) && (this.#problem = problem);
    return this;
  }

  /**
   * Sets the template of validation error `message`.
   * @param template A `message` template guarded by `string` type with replaceable `[problem]` and `[fix]` tags.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `template` is a
   * `string` that contains `[fix]` and `[problem]` tags.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setTemplate(
    template: string,
    callback?: ResultCallback<string>
  ): this {
    ValidationError.#guardTemplate(template, callback) &&
      (this.#tpl = template);
    return this;
  }

  /**
   * Sets the value affected by the validation error (must be parsed to string type).
   * @param value The value of `string` type as a replacement to the `[value]` tag of `template` that relates to the given `problem`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `value` is `string`
   * type.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public setValue(
    value: string,
    callback?: ResultCallback<string>
  ): this {
    guardString(value, callback) && (this.#value = value);
    return this;
  }

  /**
   * Throws an error of `ValidationError` with the message built from the stored `fix`, `problem` and `template` or optionally from the
   * provided `message`.
   * @param message An optional parameter of `string` type or an `object` of an `ErrorMessage` interface to build the message of `string`
   * type. The value is checked against the proper `object` of `ErrorMessage`.
   * @angularpackage
   */
  public throw(message?: string | ErrorMessage): void {
    isDefined(message) ? this.setMessage(message) : this.updateMessage();
    throw this;
  }

  /**
   * Updates the message with stored `fix`, `problem`, and `template` properties.
   * @returns The return value is an instance of an `ValidationError`.
   * @angularpackage
   */
  public updateMessage(): this {
    guardStringLength(this.#problem, { min: 1 }) &&
      (super.message = ValidationError.defineMessage({
        fix: this.#fix,
        problem: this.#problem,
        template: this.#tpl,
        value: this.#value,
      }));
    return this;
  }
  //#endregion instance public methods.
}
