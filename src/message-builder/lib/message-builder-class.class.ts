import { is, guard } from '@angular-package/type';
import { MessageBuilderTemplates } from './message-builder-templates.class';
import { MessageBuilder } from './message-builder.class';

export class MessageBuilderClass extends MessageBuilder {
  private class$$: string;
  private param$$: {
    name?: string;
    type?: string;
  } = {};
  private method$$: string;

  constructor() {
    super('class');
  }

  /**
   * Build class message.
   */
  public build(): this {
    // class.
    // this.replace('class', this.class$$);
    // // method.
    // this.replace('method', is.string(this.method$$) && is.string(this.class$$) ? `.${this.method$$}` : this.method$$);
    // // param.
    // const param = `${this.param$$.name}${this.param$$.type}`;
    // this
    //   .replace('param.type', this.param$$.type)
    //   .replace('param.name', this.param$$.name)
    //   .replace(param, `(${param})`)
    //   .replace(this.param$$.type, `: ${this.param$$.type}`);
    return this;
  }

  /**
   * Set class name to build message.
   * @param name Class name.
   * @returns this.
   */
  public class(name: string): this {
    if (guard.is.string(name)) {
      this.class$$ = name;
    }
    return this;
  }

  /**
   * Set class method name to build message.
   * @param name Class method name.
   * @returns this.
   */
  public method(name: string): this {
    if (guard.is.string(name)) {
      this.method$$ = name;
    }
    return this;
  }

  /**
   * Set method param name with type to build message.
   * @param name Method param name.
   * @param type Method param type.
   * @returns this.
   */
  public param(name: string, type?: string): this {
    if (guard.is.string(name)) {
      this.param$$.name = name;
    }
    if (guard.is.string(type)) {
      this.param$$.type = type;
    }
    return this;
  }
}

const messageBuilderClass: MessageBuilderClass = new MessageBuilderClass()
  .class('NameProperty')
  .method('set')
  .param('name', 'Array<string>')
  .build();

console.log(`messageBuilderClass`, messageBuilderClass.get);

