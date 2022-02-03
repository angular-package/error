import { CommonError } from './common-error.class';
/**
 * The `TypeError` object is thrown when an operation could not be performed, typically(but not exclusively) when a value is not of the
 * expected type, along with additional identification and a solution to the described problem.
 */
export class TypeError<Id extends string> extends CommonError<Id> {
  //#region public static methods.
  /**
   * Defines the `TypeError` instance with the given required `problem`, `fix` and optional `id` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the value
   * is picked from the static property `template`.
   * @returns The return value is a new instance of the `TypeError` with the given required `problem`, `fix` and optional `id` and
   * `template`.
   * @angularpackage
   */
  public static define<Id extends string = ''>(
    problem: string,
    fix: string,
    id?: Id,
    template = TypeError.template
  ): TypeError<Id> {
    return new this(problem, fix, id, template);
  }

  /**
   * Throws the `TypeError` with the given required `problem`, `fix` and optional `id` and `template`.
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
   * Error name of a `string` type that is being thrown. By default, it's `TypeError`.
   */
  public get name(): string {
    return 'TypeError';
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'TypeError'` for an instance of
   * `TypeError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'TypeError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'TypeError';
  }
  //#endregion public instance accessors.

  //#region constructor.
  /**
   * Creates a `TypeError` instance that represents type error with the described problem and its solution, optionally marked with an
   * explicit identification.
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
    template = TypeError.template
  ) {
    super(problem, fix, id, template);
  }
  //#endregion constructor.
}
