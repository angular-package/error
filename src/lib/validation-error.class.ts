// Object.
import { is, ResultCallback } from '@angular-package/type';
// Interface.
import { ErrorMessage } from '../interface/error-message.interface';
/**
 * Manages an `Error` of the validation.
 */
export class ValidationError extends Error {
  /**
   * Template of the error message with the replaceable [problem] and [fix].
   * By default, it's set to `Problem: [problem] => Fix: [fix]`.
   */
  static template = `Problem: [problem] => Fix: [fix]`;

  /**
   * A possible solution to the described problem of a `string` type. By default, it's an empty `string`.
   */
  public fix = '';

  /**
   * Error name of a `string` type that is being thrown. By default, it's `ValidationError`.
   */
  public name = ValidationError.name;

  /**
   * The validation problem of a `string` type. By default, it's an empty `string`.
   */
  public problem = '';

  /**
   * Defines the validation error message of a `string` type from the provided `message` of the `ErrorMessage` interface.
   * @param message An object of an `ErrorMessage` interface to build the message of a `string` type. The value is checked against
   * the proper `object`.
   * @param template A message template of a `string` type with replaceable `[problem]` and `[fix]` from the given `message`. The value is
   * checked against a `string`. By default, it's set to `Problem: [problem] => Fix: [fix]`.
   * @param callback An optional callback function of `ResultCallback` type to handle the check whether the provided message contains
   * required `problem` and `fix` properties.
   * @returns The return value is a message of a `string` type created from the provided `message` of `ErrorMessage` interface or it's an
   * empty `string` if the provided message object isn't proper.
   * @angularpackage
   */
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

  /**
   * Creates a new instance with the message. If the provided `message` is an `object`, then its properties are assigned
   * to the instance.
   * @param message The message of a `string` type or of an `ErrorMessage` interface that is used to throw with an `error`.
   * @angularpackage
   */
  constructor(message: string | ErrorMessage) {
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
}
