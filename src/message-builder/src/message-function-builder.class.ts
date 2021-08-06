import { guard, is, ResultCallback } from '@angular-package/type';
// Class.
import { MessageBuilder } from './message-builder.class';
// Interface.
import { Parameter } from '../interface/parameter.interface';
/**
 * Message function builder for error message of a string type.
 * @version Experimental This `object` is an experimental version of the message function builder that is using `MessageBuilder`.
 */
export class MessageFunctionBuilder {
  #messageBuilder: MessageBuilder;
  #name = '';
  #param: Parameter = {
    name: '',
    type: ''
  };
  #return = '';

  /**
   * Gets the build function of a `string` type.
   */
  get get(): string {
    return this.#messageBuilder.get;
  }

  /**
   * Creates an instance of `MessageFunctionBuilder`.
   */
  constructor() {
    this.#messageBuilder = new MessageBuilder('function');
  }

  /**
   * Builds string-type function from the privately stored `name`, `param`, and `return`.
   */
  public build(): this {
    this
      .#messageBuilder
      .setFunctionName(this.#name)
      .setParam(this.#param.name, this.#param.type)
      .setReturn(this.#return);
    return this;
  }

  /**
   * Sets the function name to build function of a `string` type.
   * @param name Function name of a `string` type.
   * @param callback An optional callback function of `ResultCallback` to handle the result of the check whether the provided `name`
   * is a `string` type.
   * @returns The return value is an instance of `MessageFunctionBuilder`.
   */
  public setName(name: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.#name = name;
    }
    return this;
  }

  /**
   * Sets param name with an optional type of `function` to build function of a `string` type.
   * @param name Parameter name of a function guarded by string.
   * @param type An optional parameter type of function guarded by string.
   * @param callback An optional callback function of `ResultCallback` to handle the result of the check whether the provided `name`
   * is a `string` type.
   * @returns The return value is an instance of `MessageFunctionBuilder`.
   */
  public setParam(name: string, type?: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.#param.name = name;
      if (is.string(type)) {
        this.#param.type = type;
      }
    }
    return this;
  }

  /**
   * Sets return type to build the function of a `string` type.
   * @param returns A return type of `function` guarded by `string`.
   * @param callback An optional callback function of `ResultCallback` to handle the result of the check whether the provided `returns`
   * is a `string` type.
   * @returns The return value is an instance of `MessageFunctionBuilder`.
   */
  public setReturn(returns: string, callback?: ResultCallback): this {
    if (guard.string(returns, callback)) {
      this.#return = returns;
    }
    return this;
  }
}
