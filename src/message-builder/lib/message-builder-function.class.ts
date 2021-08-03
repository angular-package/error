import { guard } from '@angular-package/type';
import { MessageBuilder } from './message-builder.class';

export class MessageBuilderFunction {
  private builder$$: MessageBuilder;
  private function$$: string;
  private param$$: {
    name?: string;
    type?: string;
  } = {};
  private method$$: string;

  get get(): string {
    return this.builder$$.get;
  }

  constructor() {
    this.builder$$ = new MessageBuilder('function');
  }

  /**
   * Build function message.
   */
   public build(): this {
    // function.
    this.builder$$.function(this.function$$);
    // param.
    this.builder$$.param(this.param$$.name, this.param$$.type)
    return this;
  }

  /**
   * Set class name to build message.
   * @param name Class name.
   * @returns this.
   */
  public function(name: string): this {
    if (guard.is.string(name)) {
      this.function$$ = name;
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

const messageBuilderFunction: MessageBuilderFunction = new MessageBuilderFunction();
messageBuilderFunction.function('myFunction').param('one', 'string').build();
console.log(`messageBuilderFunction`, messageBuilderFunction.get);
