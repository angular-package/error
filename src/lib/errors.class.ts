import { CommonErrors } from './common-errors.class';
import { Error } from './error.class';
/**
 * The `Errors` object represents multiple identification numbers under which the `Error` object are stored.
 */
export class Errors<Id extends string> extends CommonErrors<Id> {
  //#region constructor.
  /**
   * Creates the `Errors` instance of unique identification numbers under which the `Error` objects are stored.
   * @param id The unique identification numbers of an `array` of generic type variable `Id`.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    super(...id);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Sets the `Error` object with the given required `problem`, `fix`, `id` and optional `template` parameters.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id The unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}` and
   * `{type}` tags. By default, the value is equal to the static property `Errors.template`.
   * @returns The return value is an instance of `Errors`.
   * @angularpackage
   */
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId,
    template = Errors.template
  ): this {
    this.isAllowedId(id) &&
      this.errors.set(id, new Error(problem, fix, id, template));
    return this;
  }

  /**
   * The method returns the JSON object of set errors, where the key is a unique identification.
   * @returns The return value is an object of set errors.
   * @angularpackage
   */
  public toObject(): { [Key in Id]: Error<Id> } {
    return Object.fromEntries(this.errors.entries()) as any;
  }
  //#endregion instance public methods.
}
