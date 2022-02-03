import { CommonError } from './common-error.class';
/**
 * The `ValidationError` object is thrown when an operation could not be performed despite proper type(but not exclusively), along with
 * additional identification and a solution to the described problem.
 */
export class ValidationError<Id extends string = ''> extends CommonError {
  //#region public instance accessors.
  /**
   * Error name of a `string` type, set to `ValidationError` that is being thrown.
   * @angularpackage
   */
  public get name(): string {
    return 'ValidationError';
  }

  /**
   * The `get` accessor, with the help of `toStringTag`, changes the default tag to `'ValidationError'` for an instance of
   * `ValidationError`. It can be read by the `typeOf()` function of `@angular-package/type`.
   * @returns The return value is the word 'ValidationError` of a `string`.
   * @angularpackage
   */
  public get [Symbol.toStringTag](): string {
    return 'ValidationError';
  }
  //#endregion public instance accessors.

  //#region public static methods.
  /**
   * Defines the `ValidationError` instance with the given required `problem`, `fix` and optional `id` and `template`.
   * @param problem Description of the problem of a `string` type.
   * @param fix A solution to the given `problem` of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the value
   * is picked from the static property `template`.
   * @returns The return value is a new instance of the `ValidationError` with the given required `problem`, `fix` and optional `id` and
   * `template`.
   * @angularpackage
   */
  public static define<Id extends string = ''>(
    problem: string,
    fix: string,
    id?: Id,
    template = ValidationError.template
  ): ValidationError<Id> {
    return super.define(problem, fix, id, template, this);
  }

  /**
   * Checks whether the value of any type is an instance of `ValidationError`.
   * @param value The value of any type to check against the `ValidationError` instance.
   * @returns The return value is a `boolean` type indicating whether the given `value` is an instance of `ValidationError`.
   */
  public static isValidationError<Id extends string>(
    value: any,
    id?: Id
  ): value is ValidationError<Id> {
    return super.isError(value, id);
  }

  /**
   * Throws the `ValidationError` with the given required `problem`, `fix` and optional `id` and `template`.
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
    super.throw(problem, fix, id, template);
  }
  //#endregion public static methods.

  //#region constructor.
  /**
   * Creates a `ValidationError` instance that represents validation error with the described problem and its solution, optionally marked
   * with an explicit identification.
   * @param problem Description of the validation problem of a `string` type.
   * @param fix A solution to the given validation issue of a `string` type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template Optional template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the
   * value is picked from the static property `template`.
   * @angularpackage
   */
  constructor(
    problem: string,
    fix: string,
    id?: Id,
    template = ValidationError.template
  ) {
    super(problem, fix, id, template);
  }
  //#endregion constructor.
}
