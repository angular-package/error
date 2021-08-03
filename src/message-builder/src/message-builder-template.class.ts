// @angular-package/type
import { is } from '@angular-package/type';
// Interface.
import { MessageTemplate } from '../interface/message-template.interface';
/**
 *
 */
export class MessageBuilderTemplate {
  #template: MessageTemplate = {
    class: `[class][method]([param.name][param.type])[return]`, // argument value is [value.type] type, must be [param.type] type
    function: `[function]([param.name][param.type])[return]`,
    method: `[method]([param.name][param.type])[return]`
  };

  #type!: keyof MessageTemplate;

  /**
   * Gets privately stored template of the provided in the constructor type.
   */
  get get(): string {
    return this.#template[this.#type];
  }

  constructor(type: 'class' | 'function' | 'method') {
    if (is.string(type)) {
      this.#type = type;
    }
  }
}
