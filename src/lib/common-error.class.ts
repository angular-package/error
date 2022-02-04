/**
 * The `CommonError` abstract object to throw an identified error with a solution to the described problem.
 */
export abstract class CommonError<Id extends string = string> extends Error {
  //#region public static properties.
  /**
   * A template of the error message of `string` type with the replaceable `{problem}`, `{fix}` and optional `{id}` words.
   * By default, it's set to `Problem{id}: {problem} => Fix: {fix}`. It can be set directly or by the `setTemplate()`.
   */
  public static template = `Problem{id}: {problem} => Fix: {fix}`;
  //#endregion public static properties.

  //#region public instance accessors.
  /**
   * The get `accessor` obtains a possible solution to the described problem by returning the `#fix` property of a specified object.
   * @returns The return value is the fix of a `string` type.
   * @angularpackage
   */
  public get fix(): string {
    return this.#fix;
  }

  /**
   * The `get` accessor gets the error identification by returning the `#id` property of a specified object.
   * @returns The return value is the error identification of the generic type variable `Id`.
   * @angularpackage
   */
  public get id(): Id {
    return this.#id;
  }

  /**
   * The `get` accessor gets the error message by returning the parent `message` property of a specified object.
   * @returns The return value is the error message of a `string` type.
   * @angularpackage
   */
  public get message(): string {
    return super.message;
  }

  /**
   * The `get` accessor gets the problem by returning the `#problem` property of a specified object.
   * @returns The return value is the problem of a `string` type.
   * @angularpackage
   */
  public get problem(): string {
    return this.#problem;
  }

  /**
   * The `get` accessor gets the template of the error message by returning the `#template` property of a specified object.
   * @returns The return value is the template of a `string` type.
   * @angularpackage
   */
  public get template(): string {
    return this.#template;
  }
  //#endregion public instance accessors.

  //#region private instance properties.
  /**
   * A privately stored possible solution to the described problem of a `string` type.
   */
  #fix: string;

  /**
   * A privately stored unique identification to the described problem of generic type variable `Id`.
   */
  #id: Id;

  /**
   * A privately stored problem of a `string` type.
   */
  #problem: string;

  /**
   * A string-type privately stored template of the error message that contains replaceable `{fix}`, `{problem}` and optional `{id}` words.
   */
  #template: string;
  //#endregion private instance properties.

  //#region protected static methods.
  /**
   * The static "tag" method builds from the given `values` the error message of a string type on the template.
   * @param templateStringsArray -
   * @param values A rest parameter of expressions in order the `problem`, `fix`, `id` and `template`.
   * @returns The return value is the error message of a `string` type created from the expressions given in the `values`.
   * @angularpackage
   */
  protected static defineMessage(
    templateStringsArray: TemplateStringsArray,
    ...values: any[]
  ): string {
    let problem: string,
      fix: string,
      range: { min?: number; max?: number },
      id: string,
      template: string;
    [problem, fix, range, id, template] = values;
    return template
      .replace('{problem}', problem)
      .replace('{fix}', fix)
      .replace('{id}', id)
      .replace(`{max}`, range?.max ? String(range?.max) : '')
      .replace(`{min}`, range?.min ? String(range?.min) : '');
  }

  /**
   * Checks whether the value of any type is a `this` instance of any or the given identification.
   * @param value The value of any type to check against the `this` instance.
   * @param id Optional identification of generic type variable `Id` that the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the given `value` is a `this` instance of any or the given `id`.
   */
  protected static isError<Id extends string, Var>(
    value: any,
    id?: Id
  ): value is CommonError<Id> {
    return typeof value === 'object' &&
      value instanceof this &&
      typeof id === 'string'
      ? value.id === id
      : true;
  }
  //#endregion protected static methods.

  //#region constructor.
  /**
   * Creates an instance that represents an error with the described problem and its solution, optionally marked with an explicit
   * identification.
   * @param problem Description of the problem of a string type.
   * @param fix A solution to the given `problem` of a string type.
   * @param id Optional unique identification to the given `problem` of generic type variable `Id`.
   * @param template A template of error message with the replaceable `{problem}`, `{fix}` and optional `{id}` words. By default, the value
   * is picked from the static property `template`.
   * @angularpackage
   */
  protected constructor(
    problem: string,
    fix: string,
    range?: { min?: number; max?: number },
    id: Id = '' as Id,
    template = CommonError.template
  ) {
    super(CommonError.defineMessage`${problem}${fix}${range}${id}${template}`);
    this.#fix = fix;
    this.#id = id;
    this.#problem = problem;
    this.#template = template;
  }
  //#endregion constructor.
}
