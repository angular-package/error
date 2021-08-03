import { is } from '@angular-package/type';

export class MessageBuilderTemplates {
  private templates$$ = {
    class: `[class][method][param.name][param.type]`, // argument value is [value.type] type, must be [param.type] type
    function: `[function][param.name][param.type]`
  };
  private type$$: string;

  get get(): string {
    return this.templates$$[this.type$$];
  }

  constructor(type: 'class' | 'function') {
    if (is.string(type)) {
      this.type$$ = type;
    }
  }
}
