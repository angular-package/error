import { CommonError } from './common-error.class';
/**
 * The `RangeError` object is thrown when a value is not in the set or range of allowed values, along with additional identification and
 * a solution to the described problem.
 */
export class RangeError<Id extends string> extends CommonError<Id> {
  //#region public static methods.
  /**
   * Defines the `RangeError` instance with the given required `problem`, `fix` and optional `id` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the value
   * is picked from the static property `template`.
   * @returns The return value is a new instance of the `RangeError` with the given required `problem`, `fix` and optional `id` and
   * `template`.
   * @angularpackage
   */
   public static define<Id extends string = ''>(
    problem: string,
    fix: string,
    id?: Id,
    template = RangeError.template
  ): RangeError<Id> {
    return new this(problem, fix, id, template);
  }

  /**
   * Throws the `RangeError` with the given required `problem`, `fix` and optional `id` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the value
   * is picked from the static property `template`.
   * @angularpackage
   */
  public static throw(
    problem: string,
    fix: string,
    id?: string,
    template?: string
  ): void {
    throw this.define(problem, fix, id, template);
  }
  //#endregion public static methods.

  //#region public instance accessors.
  /**
   * Error name of a `string` type, set to `RangeError` that is being thrown.
   */
  public get name(): string {
    return 'RangeError';
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'RangeError'` for an instance of
   * `RangeError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'RangeError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'RangeError';
  }
  //#endregion public instance accessors.

  //#region constructor.
  /**
   * Creates a `RangeError` instance that represents range error with the described problem and its solution, optionally marked
   * with an explicit identification.
   * @param problem Description of the range problem of a `string` type.
   * @param fix A solution to the given range issue of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template Optional template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the
   * value is picked from the static property `template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    template = RangeError.template
  ) {
    super(problem, fix, id, template);
  }
  //#endregion constructor.
}
