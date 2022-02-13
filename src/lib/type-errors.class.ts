import { CommonErrors } from './common-errors.class';
import { TypeError } from './type-error.class';
/**
 * The `TypeErrors` is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of
 * the `TypeError` type are prepared to throw.
 */
export class TypeErrors<Id extends string> extends CommonErrors<Id> {
  //#region constructor.
  /**
   * Creates the `TypeErrors` instance of unique identification numbers under which the `TypeError` objects are stored.
   * @param id A rest parameter of generic type variable `Id` indicates unique identification numbers under which the `TypeError` objects
   * are stored.
   * @angularpackage
   */
  constructor(...id: Id[]) {
    super(...id);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Sets the `TypeError` object with the message built from the given required `problem`, `fix`, `id` and optional `type` on the given or
   * stored `template` under the given `id`.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id The unique identification to the given `problem` of generic type variable `ErrorId`.
   * @param type The optional type of `string` type that causes an error to be thrown(or not thrown).
   * @param template A template of error message with the replaceable `{problem}`, `{fix}`, `{id}`, and optional `{type}` tags. By default,
   * the value is equal to the static property `RangeErrors.template`.
   * @returns The return value is an instance of `TypeErrors`.
   * @angularpackage
   */
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId,
    type?: string,
    template = TypeErrors.template
  ): this {
    this.isAllowedId(id) &&
      this.errors.set(id, new TypeError(problem, fix, id, type, template));
    return this;
  }

  /**
   * The method returns the JSON object of set errors, where the key is a unique identification.
   * @returns The return value is an `object` of set errors.
   * @angularpackage
   */
  public toObject(): { [Key in Id]: TypeError<Id> } {
    return Object.fromEntries(this.errors.entries()) as any;
  }

  //#endregion instance public methods.
}
