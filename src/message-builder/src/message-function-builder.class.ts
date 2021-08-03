import { guard, is, ResultCallback } from '@angular-package/type';
// Class.
import { MessageBuilder } from './message-builder.class';
// Interface.
import { Parameter } from '../interface/parameter.interface';
/**
 *
 */
export class MessageFunctionBuilder {
  #messageBuilder: MessageBuilder;
  #name = '';
  #param: Parameter = {
    name: '',
    type: ''
  };
  #return = '';

  get get(): string {
    return this.#messageBuilder.get;
  }

  constructor() {
    this.#messageBuilder = new MessageBuilder('function');
  }

  /**
   * Build function message.
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
   * Sets the function name to build message.
   * @param name Function name of a `string` type.
   * @param callback
   * @returns The return value is an instance of `MessageBuilderFunction`.
   */
  public setName(name: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.#name = name;
    }
    // this.setFunction(name);
    return this;
  }

  /**
   * Set method param name with type to build message.
   * @param name Method param name.
   * @param type Method param type.
   * @returns this.
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

  public setReturn(returns: string, callback?: ResultCallback): this {
    if (guard.string(returns, callback)) {
      this.#return = returns;
    }
    return this;
  }
}

const messageBuilderFunction = new MessageFunctionBuilder();
messageBuilderFunction
  .setName('isString')
  .setParam('one', 'string')
  .setReturn('this')
  .build();
console.log(messageBuilderFunction.get);
