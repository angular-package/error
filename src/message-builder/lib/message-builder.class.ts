import { is } from '@angular-package/type';
import { MessageBuilderTemplates } from './message-builder-templates.class';

// export type RegExpPreDefined = 'class' | 'function' | 'method' | 'param.name' | 'param.type';

export class MessageBuilder {
  private regExp$$ = {
    class: /\[class\]/i,
    function: /\[function\]/i,
    method: /\[method\]/i,
    param: {
      name: /\[param.name\]/i,
      type: /\[param.type\]/i
    }
  };
  private template$$: string;

  get get(): string {
    return this.template$$;
  }

  constructor(template: 'class' | 'function') {
    this.template$$ = new MessageBuilderTemplates(template).get;
  }

  public class(name: string): this {
    this.replace(this.regExp$$.class, name);
    return this;
  }

  public function(name: string): this {
    this.replace(this.regExp$$.function, name);
    return this;
  }

  public method(name: string): this {
    this.replace(this.regExp$$.method, name);
    return this;
  }

  public param(name: string, type?: string): this {
    const param = `${name}${type}`;
    this
      .replace(this.regExp$$.param.type, type)
      .replace(this.regExp$$.param.name, name)
      .replace(param, `(${param})`)
      .replace(type, `: ${type}`);
    return this;
  }

  public replace(searchValue: string | RegExp, replaceValue: string): this {
    if (is.defined(searchValue)) {
      this.template$$ = this.template$$.replace(searchValue, is.string(replaceValue) ? replaceValue : '');
    }
    return this;
  }
}
