import { guard } from '@angular-package/type';
import { MessageBuilderClass } from '../message-builder/lib/message-builder-class.class';
import { MessageBuilderFunction } from '../message-builder/lib/message-builder-function.class';
import { MessageBuilder } from '../message-builder/lib/message-builder.class';

export interface ConfigError {
  problem: string;
  fix?: string;
}

new MessageBuilderClass();
new MessageBuilderFunction();

export class ErrorCustom {

  public date: Date = new Date();
  public fix: string;
  public problem: string;

  constructor(config: ConfigError) {
    if (guard.is.string(config?.fix)) {
      this.fix = config.fix;
    }
    if (guard.is.string(config?.problem)) {
      this.problem = config.problem;
    }
    this.date = new Date();
  }

  private message(): string {
    return `
    Problem: ${this.problem}
    Fix: ${this.fix}
    Date: ${this.date}
    `;
  }

  public error(): void {
    throw new Error(this.message());
  }

  public syntax(): void {
    throw new SyntaxError(this.message());
  }

  public type(): void {
    throw new TypeError(this.message());
  }
}
