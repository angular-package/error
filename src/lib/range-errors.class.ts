import { CommonErrors } from './common-errors.class';
import { RangeError } from './range-error.class';
/**
 * The `RangeErrors` is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of
 * the `RangeError` type are prepared to throw.
 */
export class RangeErrors<Id extends string> extends CommonErrors<Id> {
  //#region constructor.
  /**
   * Creates the `RangeErrors` instance of unique identification numbers under which the `RangeError` objects are stored.
   * @param id A rest parameter of generic type variable `Id` indicates unique identification numbers under which the `RangeError` objects
   * are stored.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    super(...id);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Sets the `RangeError` object with the message built from the given required `problem`, `fix`, `id` and optional `min`, `max` on the
   * given or stored `template`.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id The unique identification to the given `problem` of generic type variable `Id`.
   * @param min The optional minimum range of `number` type that causes an error to be thrown(or not thrown).
   * @param max The optional maximum range of `number` type that causes an error to be thrown(or not thrown).
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}`, `{max}`, `{min}` and
   * `{type}` tags. By default, the value is equal to the static property `RangeErrors.template`.
   * @returns The return value is an instance of `RangeErrors`.
   * @angularpackage
   */
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId,
    min?: number,
    max?: number,
    template = RangeErrors.template
  ): this {
    this.isAllowedId(id) &&
      this.errors.set(id, new RangeError(problem, fix, id, min, max, template));
    return this;
  }

  /**
   * The method returns the JSON object of set errors, where the key is a unique identification.
   * @returns The return value is an `object` of set errors.
   * @angularpackage
   */
  public toObject(): { [Key in Id]: RangeError<Id> } {
    return Object.fromEntries(this.errors.entries()) as any;
  }
  //#endregion instance public methods.
}
