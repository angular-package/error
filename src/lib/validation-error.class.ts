// @angular-package/type.
import {
  // Function.
  guardObject,
  isInstance,
  isString,
} from '@angular-package/type';
// Class.
// import { Text } from '@angular-package/text';
import { Text } from '@angular-package/text';

// Interface.
import { ErrorMessage } from '../interface/error-message.interface';
/**
 * The `ValidationError` object to throw an error with a solution to the described problem.
 */
export class ValidationError extends Error {
  public static template = `Problem[id]: [problem] => Fix: [fix], got [value]`;

  public name = ValidationError.name;

  public get fix(): string {
    return this.#fix;
  }

  public get id(): string | undefined {
    return this.#id;
  }

  public get problem(): string {
    return this.#problem;
  }

  public get value(): string | undefined {
    return this.#value;
  }

  public get template(): string {
    return this.#template;
  }

  #fix: string;
  #id?: string;
  #problem: string;
  #value?: string;
  #template: string;

  public static isValidationError(value: any): value is ValidationError {
    return isInstance(value, ValidationError);
  }

  public static messageTemplate(
    tsa: TemplateStringsArray,
    ...values: any[]
  ): string {
    let message: ErrorMessage, template: string;
    [message, template] = values;
    return new Text(template, ['fix', 'id', 'problem', 'value'], `[`, `]`)
      .replace('fix', message?.fix)
      .replace('id', message?.id || '')
      .replace('problem', message.problem)
      .replace('value', message.value)
      .getText();
  }

  constructor(
    message: ErrorMessage,
    template: string = ValidationError.template
  ) {
    super(ValidationError.messageTemplate`${message}${template}`);
    this.#fix = message.fix;
    this.#id = message.id;
    this.#problem = message.problem;
    this.#value = message.value;
    this.#template = template;
  }
}
