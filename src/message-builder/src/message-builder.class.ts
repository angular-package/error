// @angular-package/type
import { is, guard, ResultCallback } from '@angular-package/type';
// Class.
import { MessageBuilderTemplate } from './message-builder-template.class';

// export type RegExpPreDefined = 'class' | 'function' | 'method' | 'param.name' | 'param.type';

export class MessageBuilder {
  #regExp = {
    class: /\[class\]/i,
    function: /\[function\]/i,
    method: /\[method\]/i,
    param: {
      name: /\[param.name\]/i,
      type: /\[param.type\]/i,
    },
    return: /\[return\]/i
  };

  #template: string;

  get get(): string {
    return this.#template;
  }

  constructor(template: 'class' | 'function' | 'method') {
    this.#template = new MessageBuilderTemplate(template).get;
  }

  public setClassName(name: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.replace(this.#regExp.class, name);
    }
    return this;
  }

  public setFunctionName(name: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.replace(this.#regExp.function, name);
    }
    return this;
  }

  public setMethodName(name: string, callback?: ResultCallback): this {
    if (guard.string(name, callback)) {
      this.replace(this.#regExp.method, name);
    }
    return this;
  }

  public setParam(name: string, type: string = ''): this {
    if (guard.string(name)) {
      const param = `${name}${type}`;
      this
        .replace(this.#regExp.param.name, name)
        .replace(this.#regExp.param.type, type);

      if (type.length > 0) {
        this.replace(type, `: ${type}`);
      }
    }
    return this;
  }

  public setReturn(returns: string, callback?: ResultCallback): this {
    if (guard.string(returns, callback)) {
      this.replace(this.#regExp.return, returns);
      if (returns.length > 0) {
        this.replace(returns, `: ${returns}`);
      }
    }
    return this;
  }

  private replace(searchValue: string | RegExp, replaceValue: string): this {
    if (is.defined(searchValue)) {
      this.#template = this.#template.replace(
        searchValue,
        is.string(replaceValue) ? replaceValue : ''
      );
    }
    return this;
  }
}

// console.log(
//   new MessageBuilder('function')
//     .param('firstName?', 'string')
//     .function('isComponentLoader')
//     .get
// );
