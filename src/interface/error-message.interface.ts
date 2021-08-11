/**
 * The shape of an `object` for the error message that contains a possible solution to the described problem.
 * @param fix A possible solution to the described problem of a `string` type.
 * @param problem Description of validation problem of a string type.
 * @param template An optional message template of a `string` type.
 */
export interface ErrorMessage {
  /**
   * A possible solution to the described problem of a `string` type.
   */
  fix: string;

  /**
   * Description of validation problem of a `string` type.
   */
  problem: string;

  /**
   * An optional message template of a `string` type.
   */
  template?: string;
}
