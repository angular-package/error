import { CommonErrors } from './common-errors.class';
import { ValidationError } from './validation-error.class';
/**
 * The `ValidationErrors` is an extension of the `CommonErrors` object that represents multiple identification numbers under which the
 * errors of the `ValidationError` type are prepared to throw.
 */
export class ValidationErrors<Id extends string> extends CommonErrors<Id> {
  //#region constructor.
  /**
   * Creates the `ValidationErrors` instance of unique identification numbers under which the `ValidationError` objects are stored.
   * @param id A rest parameter of generic type variable `Id` indicates unique identification numbers under which the `ValidationError`
   * objects are stored.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    super(...id);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Sets the `ValidationError` object with the message built from the given required `problem`, `fix`, `id` on the given or stored
   * `template` under the given `id`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id The unique identification to the given `problem` of generic type variable `ErrorId`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}`, `{id}` tags. By default, the value is equal
   * to the static property `ValidationErrors.template`.
   * @returns The return value is an instance of `Errors`.
   * @angularpackage
   */
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId,
    template = ValidationErrors.template
  ): this {
    this.isAllowedId(id) &&
      this.errors.set(id, new ValidationError(problem, fix, id, template));
    return this;
  }

  /**
   * The method returns the JSON object of set errors, where the key is a unique identification.
   * @returns The return value is an `object` of set errors.
   * @angularpackage
   */
  public toObject(): { [Key in Id]: ValidationError<Id> } {
    return Object.fromEntries(this.errors.entries()) as any;
  }

  //#endregion instance public methods.
}
