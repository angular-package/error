// @angular-package/type.
import {
  // Type.
  ResultCallback,
  ValueParser,
  // Function.
  areString,
  guardFunction,
  guardNumber,
  guardObjectKeys,
  guardString,
  guardStringIncludes,
  isDefined,
  isTrue,
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
  static #tags = ['fix', 'id', 'problem', 'value'];

  /**
   * A static, privately stored template of the error `message`.
   */
  static #defaultTemplate = `Problem[id]: [problem] => Fix: [fix]`;
  //#endregion static private properties

  //#region instance private properties.
  /**
   * A privately stored possible solution to the described problem of `string` type.
   * * By default, it's an empty `string`.
   */
  #fix = '';

  /**
   * A privately stored identifier of the described problem. By default, it's `0`.
   */
  #id = 0;

  /**
   * A privately stored validation problem of `string` type.
   * * By default, it's an empty `string`.
   */
  #problem = '';

  /**
   * A string-type privately stored template of the error message that contains replaceable required `[fix]` and `[problem]` tags and
   * optional `[id]` and `[value]`.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   */
  #template = ValidationError.template;

  /**
   * The value affected by the validation error.
   */
  #value = '';

  /**
   * Private function to convert the value of any type to `string`.
   */
  #valueParser: ValueParser = ValidationError.#defaultValueParser;
  //#endregion instance private properties.

  //#region static public properties
  /**
   * A template of static `ValidationError` and the default value of `template` of an instance for the error message guarded by `string`
   * type with the replaceable required `[problem]` and `[fix]` tags and optional `[id]` and `[value]`.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   * * The value is being checked against the existence of `[problem]` and `[fix]` tags.
   * * Possible tags to be replaced `[fix]`, `[id]`, `[problem]`, `[value]`.
   */
  static get template(): string {
    return this.#defaultTemplate;
  }
  static set template(value: string) {
    this.#guardTemplate(value) && (this.#defaultTemplate = value);
  }
  //#endregion static public properties

  //#region instance public properties.
  /**
   * A possible solution to the described `problem` of validation that is guarded by `string` and it's a replacement for the required tag
   * `[fix]` of the `template`.
   * * It can be set directly or by the `setFix()`, `setMessage()` and `throw()` methods. By default, it's an empty string.
   */
  public get fix(): string {
    return this.#fix;
  }
  public set fix(value: string) {
    guardString(value) && (this.#fix = value);
  }

  /**
   * The identifier of the described `problem`, guarded by `number` type and it's a replacement for an optional tag `[id]` of the
   * `template`.
   * * It refers to `[id]` tag.
   * * It can be set directly or by the `setId()`, `setMessage()` and `throw()` methods of an instance. By default, it's 0.
   */
  public get id(): number {
    return this.#id;
  }
  public set id(value: number) {
    guardNumber(value) && (this.#id = value);
  }

  /**
   * A validation error `message` guarded by `string` type that can be built from the required `problem` and `fix` with optional `id` and
   * `value` on the `template` of an instance of `ValidationError`.
   * * It can be set directly or by the `setMessage()` and `throw()` methods.
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
   * Description of the validation problem guarded by `string` type and it's a replacement for the required tag `[problem]` of the
   * `template`.
   * * It refers to `[problem]` tag.
   * * It can be set directly or by the `setProblem()`, `setMessage()` and `throw()` methods. By default, it's an empty string.
   */
  public get problem(): string {
    return this.#problem;
  }
  public set problem(value: string) {
    guardString(value) && (this.#problem = value);
  }

  /**
   * A template of the error `message` guarded by `string` type with the replaceable required `[problem]` and `[fix]` tags and optional
   * `[id]` and `[value]` tags. The value is being checked against the existence of required `[problem]` and `[fix]` tags by the static
   * private `ValidationError.#guardTemplate()` method.
   * * It can be set directly or by the `setTemplate()`, `setMessage()` and `throw()` methods, and its initial value is from the static
   * `ValidationError.template`.
   * * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   * * Possible tags to use `[fix]`, `[id]`, `[problem]` and `[value]`.
   */
  public get template(): string {
    return this.#template;
  }
  public set template(value: string) {
    ValidationError.#guardTemplate(value) && (this.#template = value);
  }

  /**
   * The value of any type affected by the validation error, which must be converted to a `string` to build a `message` and it's a
   * replacement for an optional tag `[value]` of the `template`.
   * * It can be set directly or by the `setValue()`, `setMessage()` and `throw()` methods.
   * * It refers to `[value]` tag.
   * * The conversion is performed only during message creation and can be done in two ways, automatic or manual.
   * * The manual, by providing parser function as parameter (`parser?: ValueParser`) to the `setMessage()` method of an instance.
   * * The automatic by the previously defined function of the `ValueParser` type, set by the `setValueParser()` method of an instance to
   * automatize `setMessage()` method.
   */
  public get value(): any {
    return this.#value;
  }
  public set value(value: any) {
    this.#value = value;
  }
  //#endregion instance public properties.

  //#region static public methods
  /**
   * Defines the validation error message of `string` type from the provided `message` of the `ErrorMessage` interface. The message is built
   * on the provided `template` or the template from the static property `ValidationError.template`.
   * * The automatic convert of the `value` of an `ErrorMessage` is performed by the defined function of the `ValueParser` type, set by the
   * static `ValidationError.setValueParser()` method.
   * @param message An `object` of an `ErrorMessage` interface to build a message of `string` type. The value is checked against the proper
   * `object` of `ErrorMessage` by the static private `ValidationError.#guarMessage()` method.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message is the proper
   * `object` of `ErrorMessage` which means it contains required `problem`, `fix` properties, and the optional `template` property has
   * required `[problem]` and `[fix]` tags and parser is a `function` type.
   * @param parser An optional `function` to convert property `value` from the provided `message` to `string` during message creation. It
   * can be set by static `ValidationError.setValueParser()` as the default value parser for static and instance `ValidationError`.
   * @returns The return value is a message of `string` type created from the provided `message` of the `ErrorMessage` interface or it's an
   * empty `string` if the provided message object isn't proper.
   * @angularpackage
   */
  public static defineMessage(
    message: ErrorMessage,
    callback: ResultCallback<ErrorMessage> = (result) => result,
    parser: ValueParser = this.#defaultValueParser
  ): string {
    return callback(
      this.#guardMessage(message) && guardFunction(parser),
      message
    )
      ? this.#buildMessage(message, parser)
      : '';
  }

  /**
   * Sets the `template` of static `ValidationError` and the default value for `template` of an instance.
   * @param template A template for error `message` guarded by `string` type with replaceable required `[problem]` and `[fix]` tags and
   * optional `[id]` and `[value]`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `template` is a
   * `string` that contains required `[fix]` and `[problem]` tags.
   * @returns The return value is static `ValidationError`.
   * @angularpackage
   */
  public static setTemplate(
    template: string,
    callback?: ResultCallback<string>
  ): typeof ValidationError {
    ValidationError.#guardTemplate(template, callback) &&
      (this.#defaultTemplate = template);
    return ValidationError;
  }

  /**
   * Sets the `function` to convert any value to `string` during message creation performed by the static `defineMessage()` method and as
   * the initial parser for the instance.
   * @param parser The `function` of the `ValueParser` type to convert the value of `any` type to `string`.
   * @param callback An optional callback function of `ResultCallback` type to handle the result of the check whether the provided `parser`
   * is `function` type.
   * @returns The return value is static `ValidationError`.
   * @angularpackage
   */
  public static setValueParser(
    parser: ValueParser,
    callback?: ResultCallback<ValueParser>
  ): typeof ValidationError {
    guardFunction(parser, callback) && (this.#defaultValueParser = parser);
    return ValidationError;
  }
  //#endregion static public methods

  //#region static private methods.
  /**
   * Builds the validation error message of `string` type based on the provided `message` of the `ErrorMessage` interface.
   * @param message An `object` of an `ErrorMessage` interface to build a message of `string` type. The value is not checked against the
   * proper `object`.
   * @param parser The required `function` to convert property `value` from the provided `message` to `string` during message creation.
   * @returns The return value is a message of `string` type created from the provided `message` parameter.
   * @angularpackage
   */
  static #buildMessage(message: ErrorMessage, parser: ValueParser): string {
    let m = message.template || this.template;
    return (
      this.#tags.forEach(
        (tag) =>
          (m = m.replace(
            `[${tag}]`,
            (
              {
                fix: (value: any): string => String(value),
                id: (value: any): string => String(value || ''),
                problem: (value: any): string => String(value),
                value: (value: any): string => parser(value),
              } as { [index: string]: ValueParser }
            )[tag](message[tag as keyof Omit<ErrorMessage, 'template'>])
          ))
      ),
      m
    );
  }

  /**
   * The default parser `function` of static `ValidationError` and the instance.
   */
  static #defaultValueParser: ValueParser = (value) => String(value);

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
   * Creates a new instance with an optional message of `ErrorMessage` interface.
   * @param message  An optional `message` of an `object` of the `ErrorMessage` interface to build a message of `string` and throw with
   * an `Error`. Its properties are assigned to the instance.
   * @param parser An optional `function` to convert property `value` of the provided `message` of `ErrorMessage` to a `string` during
   * message creation and set as the default value parser for the instance. By default, it uses the parser function of private property
   * `#valueParser` of an instance that is set initially to the static `ValidationError.#defaultValueParser`.
   * @angularpackage
   */
  constructor(message?: ErrorMessage, parser?: ValueParser) {
    super();

    // Sets the parser.
    isDefined(parser) && this.setValueParser(parser);

    // Initializes the message and assigns its properties to a new instance.
    isDefined(message) && this.setMessage(message);
  }

  //#region instance public methods.
  /**
   * Sets the `fix` a possible solution to the described `problem`.
   * @param fix A possible solution to the described `problem` guarded by `string` type and a replacement to the `[fix]` tag of `template`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `fix` is a `string`.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setFix(fix: string, callback?: ResultCallback<string>): this {
    guardString(fix, callback) && (this.#fix = fix);
    return this;
  }

  /**
   * Sets the `id` an identifier of the described problem.
   * @param id The identifier, guarded by a `number` type and a replacement to the `[id]` tag of `template`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `id` is `number`.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setId(id: number, callback?: ResultCallback<number>): this {
    guardNumber(id, callback) && (this.#id = id);
    return this;
  }

  /**
   * Sets the validation error message of `string` type from the provided `message` of the `ErrorMessage` interface.
   * @param message An `object` of an `ErrorMessage` interface to build the message of `string` type. The value is checked against the
   * proper `object` of `ErrorMessage` and if it's a proper object then its properties are being assigned to the instance.
   * @param callback An optional callback `function` of `ResultCallback` type to handle the check whether the provided `message` is `string`
   * type or whether it's the proper `object` of `ErrorMessage` which means it contains required `problem`, `fix` properties, and the
   * optional `template` has `[problem]` and `[fix]` tags.
   * @param parser An optional `function` to convert property `value` of the provided `message` to a `string` during message creation.
   * If it's not provided then the function uses the parser function of private property `#valueParser` of an instance that is set initially
   * to the static `ValidationError.#defaultValueParser`.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setMessage(
    message: ErrorMessage,
    callback?: ResultCallback<typeof message>,
    parser: ValueParser = this.#valueParser
  ): this {
    super.message = ValidationError.defineMessage(
      { ...message, ...{ template: message.template || this.#template } },
      (result, value, payload) => (
        isDefined(callback) && callback(result, value, payload),
        isTrue(result) && this.assignMessageProperties(message),
        result
      ),
      parser
    );
    return this;
  }

  /**
   * Sets the description of the validation problem.
   * @param problem Description of the validation problem guarded by `string` type and a replacement to the `[problem]` tag of `template`.
   * @param callback An optional callback `function` of `ResultCallback` type to handle the check whether the provided `problem` is a
   * `string`.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setProblem(problem: string, callback?: ResultCallback<string>): this {
    guardString(problem, callback) && (this.#problem = problem);
    return this;
  }

  /**
   * Sets the template of validation error `message`.
   * @param template A `message` template guarded by `string` type with replaceable required `[problem]` and `[fix]` tags and optional
   * `[id]` and `[value]` tags.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `template` is a
   * `string` that contains required `[fix]` and `[problem]` tags.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setTemplate(
    template: string,
    callback?: ResultCallback<string>
  ): this {
    ValidationError.#guardTemplate(template, callback) &&
      (this.#template = template);
    return this;
  }

  /**
   * Sets the `value` affected by the validation error (must be converted to string).
   * @param value The value of `any` type as a replacement to the `[value]` tag of `template` that relates to the given `problem`.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
  public setValue(value: any): this {
    this.#value = value;
    return this;
  }

  /**
   * Sets the function to automatically convert the `value` of `any` type to the `string` during message creation. The defined `function` is
   * being used implicitly by the `updateMessage()` and `throw()` methods and and by the `setMessage()` method as the default value of
   * parameter `parser`.
   * @param parser The `function` of the `ValueParser` type, to convert the `value` of `any` type to `string`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided `parser` is `function`.
   * @returns The return value is an instance of `ValidationError`.
   * @angularpackage
   */
  public setValueParser(
    parser: ValueParser,
    callback?: ResultCallback<ValueParser>
  ): this {
    guardFunction(parser, callback) && (this.#valueParser = parser);
    return this;
  }

  /**
   * Throws an error of new instance `ValidationError` with the message built from the stored required `fix`, `problem` and optional `id`,
   * `template` and `value` properties or optionally from the provided `message`.
   * @param message An optional `object` of an `ErrorMessage` interface to build the message of `string` type. The value is checked against
   * the proper `object` of `ErrorMessage` and if it's a proper `object` then its properties are being assigned to the instance.
   * @angularpackage
   */
  public throw(message?: ErrorMessage): void {
    isDefined(message) ? this.setMessage(message) : this.updateMessage();
    throw new ValidationError(
      {
        fix: this.#fix,
        id: this.#id,
        problem: this.#problem,
        template: this.#template,
        value: this.#value,
      },
      this.#valueParser
    );
  }

  /**
   * Updates the `message` with stored required `fix`, `problem`, and optional `id`, `template`, `value` properties.
   * @param callback An optional callback `function` of `ResultCallback` type to handle the check whether stored properties used to build a
   * message of `string` type are proper.
   * @returns The return value is an instance of a `ValidationError`.
   * @angularpackage
   */
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
  //#endregion instance public methods.

  /**
   * Assigns properties from the provided `message` to the instance.
   * @param message An `object` of `ErrorMessage` to build a message of `string` type.
   * @returns The return value is an instance of a `ValidationError`.
   */
  private assignMessageProperties(message: ErrorMessage): this {
    isDefined(message.id) && this.setId(message.id),
      isDefined(message.value) && this.setValue(message.value),
      isDefined(message.template) && this.setTemplate(message.template),
      this.setFix(message.fix).setProblem(message.problem);
    return this;
  }
}
