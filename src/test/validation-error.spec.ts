// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { ValidationError } from '../lib/validation-error.class';
// Interface.
import { ErrorMessage } from '../interface/error-message.interface';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true, {
  // describe: [1, 8],
  // it: [1, 2]
});
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('[counter] ValidationError', () => {
  let errorMessage: string;
  let fix: string;
  let id: number;
  let message: ErrorMessage;
  let problem: string;
  let template: string;
  let value: any;
  let validationError: ValidationError;

  // Prepare the values.
  fix = 'Provide string type value. Read more: https://duckduckgo.com/';
  id = 427;
  problem = 'The value must be a string type.';
  template = `Problem(VE[id]): [problem]\nGot: [value]\nFix: [fix]`;
  value = Symbol(123);

  beforeEach(() => {
    // Prepare the values.
    fix = 'Provide string type value. Read more: https://duckduckgo.com/';
    id = 427;
    problem = 'The value must be a string type.';
    template = `Problem(VE[id]): [problem]\nGot: [value]\nFix: [fix]`;
    value = Symbol(123);
    validationError = new ValidationError();
  });

  testing
    /**
     * defineMessage()
     */
    .describe('[counter] .defineMessage()', () => {
      testing.it(`[counter] with the message of the \`ErrorMessage\` interface`, () => {
        errorMessage = ValidationError.defineMessage({ fix, id, problem, template, value});
        toBe.string(errorMessage);
        // toContain.
        expect(errorMessage).toContain(fix);
        expect(errorMessage).toContain(String(id));
        expect(errorMessage).toContain(problem);
        expect(errorMessage).toContain(String(value));
      })
      .it(`[counter] with the message of the \`ErrorMessage\` interface with the provided \`parser\``, () => {
        message = { fix, id, problem, template, value };
        errorMessage = ValidationError.defineMessage(
          message,
          (result, checkedValue, payload) => {
            toBe
              .true(result)
              .object(checkedValue)
              .undefined(payload);

            expect(checkedValue).toEqual(message);
            return result;
        } , valueToConvert => String(12345));
        toBe.string(errorMessage);
        // toContain.
        expect(errorMessage).toContain(fix);
        expect(errorMessage).toContain(String(id));
        expect(errorMessage).toContain(problem);
        expect(errorMessage).toContain(String(12345));
      });
    })

    /**
     * setTemplate()
     */
     .describe('[counter] .setTemplate()', () => {
      testing.it(`[counter] propery set the static \`template\``, () => {
        expect(ValidationError.template).toEqual(`Problem[id]: [problem] => Fix: [fix]`);
        ValidationError.setTemplate(template, (result, checkedValue) => {
          toBe.true(result).string(checkedValue);
          expect(checkedValue).toEqual(template);
          return result;
        });
        expect(ValidationError.template).toEqual(template);
      });
    })

    /**
     * setValueParser()
     */
    .describe('[counter] .setValueParser()', () => {
      testing.it(`[counter] properly set the static private \`#defaultValueParser\``, () => {
        ValidationError.setValueParser(valueToConvert => String(12345678910), (result, checkedValue) => {
          toBe.true(result).function(checkedValue);
          return result;
        });
        expect(ValidationError.defineMessage({ fix, problem, value, template })).toContain(String(12345678910));
        // The default value parser.
        ValidationError.setValueParser(valueToConvert => String(valueToConvert));
      });
    })

    /**
     * constructor()
     */
    .describe('[counter] instantiate', () => {
      beforeEach(() => validationError = new ValidationError({
        fix, id, problem, template, value
      }));

      testing.it(`[counter] with the message of the \`ErrorMessage\` interface`, () => {
        toBe
          .string(validationError.fix)
          .number(validationError.id)
          .string(validationError.message)
          .string(validationError.problem)
          .string(validationError.template)
          .symbol(validationError.value);

        // to Equal.
        expect(validationError.fix).toEqual(fix);
        expect(validationError.id).toEqual(id);
        expect(validationError.problem).toEqual(problem);
        expect(validationError.template).toEqual(template);
        expect(validationError.value).toEqual(value);

        // toContain.
        expect(validationError.message).toContain(fix);
        expect(validationError.message).toContain(String(id));
        expect(validationError.message).toContain(problem);
        expect(validationError.message).toContain(String(value));
      })
      .it(`[counter] with the provided \`parser\``, () => {
        validationError = new ValidationError({
          fix, id, problem, template, value
        }, (valueToConvert: any) => String(12345));
        toBe
          .string(validationError.fix)
          .number(validationError.id)
          .string(validationError.message)
          .string(validationError.problem)
          .string(validationError.template)
          .symbol(validationError.value);

        // to Equal.
        expect(validationError.fix).toEqual(fix);
        expect(validationError.id).toEqual(id);
        expect(validationError.problem).toEqual(problem);
        expect(validationError.template).toEqual(template);
        expect(validationError.value).toEqual(value);

        // toContain.
        expect(validationError.message).toContain(fix);
        expect(validationError.message).toContain(String(id));
        expect(validationError.message).toContain(problem);
        expect(validationError.message).toContain(String(12345));
      });
    })

    /**
     * .prototype.setFix()
     */
    .describe('[counter] .prototype.setFix()', () => {
      testing.it(`set ${fix}`, () => {
        validationError.setFix(fix, (result, checkedValue, payload) => {
          expect(checkedValue).toEqual(fix);
          toBe.boolean(result).string(checkedValue).undefined(payload);
          return result;
        });
        expect(validationError.fix).toEqual(fix);
      });
    })

    /**
     * .prototype.setId()
     */
     .describe('[counter] .prototype.setId()', () => {
      testing.it(`set ${id}`, () => {
        validationError.setFix(fix, (result, checkedValue, payload) => {
          expect(checkedValue).toEqual(fix);
          toBe.boolean(result).string(checkedValue).undefined(payload);
          return result;
        });
        expect(validationError.fix).toEqual(fix);
      });
    })

    /**
     * .prototype.setMessage()
     */
    .describe('[counter] .prototype.setMessage()', () => {
      testing
        .it(`[counter] set works properly`, () => {
          validationError.setMessage({ fix, id, problem, template, value }, (result, checkedValue) => {
            expect(checkedValue.fix).toEqual(fix);
            expect(checkedValue.id).toEqual(id);
            expect(checkedValue.problem).toEqual(problem);
            expect(checkedValue.value).toEqual(value);
            toBe.true(result).object(checkedValue);
            return result;
          });
          expect(validationError.message).toContain(fix);
          expect(validationError.message).toContain(String(id));
          expect(validationError.message).toContain(problem);
          expect(validationError.message).toContain(String(value));
        })
        .it(`[counter] set works properly with the provided \`parser\``, () => {
          validationError.setMessage(
            { fix, id, problem, template, value },
            (result, checkedValue) => {
            expect(checkedValue.fix).toEqual(fix);
            expect(checkedValue.id).toEqual(id);
            expect(checkedValue.problem).toEqual(problem);
            expect(checkedValue.value).toEqual(value);
            toBe.true(result).object(checkedValue);
            return result;
          }, valueToConvert => String(12345));
          expect(validationError.message).toContain(fix);
          expect(validationError.message).toContain(String(id));
          expect(validationError.message).toContain(problem);
          expect(validationError.message).toContain(String(12345));
        });
    })

    /**
     * .prototype.setProblem()
     */
    .describe('[counter] .prototype.setProblem()', () => {
      testing.it(`[counter] set ${problem}`, () => {
        validationError.setProblem(problem, (result, checkedValue) => {
          expect(checkedValue).toEqual(problem);
          toBe.boolean(result).string(checkedValue);
          return result;
        });
        expect(validationError.problem).toEqual(problem);
      });
    })

    /**
     * .prototype.setTemplate()
     */
    .describe('[counter] .prototype.setTemplate()', () => {
      template = `[problem] must be fixed by using [fix]`;
      testing.it(`[counter] set ${template}`, () => {
        validationError.setTemplate(template, (result, checkedValue, payload) => {
          expect(checkedValue).toEqual(template);
          toBe.boolean(result).string(checkedValue).object(payload);
          return result;
        });
        expect(validationError.template).toEqual(template);
      });
    })

    /**
     * .prototype.setValue()
     */
    .describe('[counter] .prototype.setValue()', () => {
      testing.it(`[counter] set ${String(value)}`, () => {
        validationError.setValue(value);
        expect(validationError.value).toEqual(value);
      });
    })

    /**
     * .prototype.updateMessage()
     */
    .describe('[counter] .prototype.updateMessage()', () => {
      testing.it(`[counter] works properly`, () => {
        validationError
          .setFix('')
          .setId(0)
          .setProblem('')
          .setTemplate(template)
          .setValue('')
          .setValueParser(valueToConvert => String(12345678910))
          .updateMessage();

        expect(validationError.fix).toEqual('');
        expect(validationError.id).toEqual(0);
        expect(validationError.problem).toEqual('');
        expect(validationError.value).toEqual('');
        expect(validationError.message).toContain(String(12345678910));

        validationError
          .setFix(fix)
          .setId(id)
          .setProblem(problem)
          .setTemplate(template)
          .setValue(value)
          .setValueParser(valueToConvert => String(valueToConvert))
          .updateMessage((result, checkedValue) => {
            toBe.true(result).object(checkedValue);
            expect(checkedValue).toEqual({
              fix, id, problem, template, value
            });
            return result;
          });

        expect(validationError.fix).toEqual(fix);
        expect(validationError.id).toEqual(id);
        expect(validationError.problem).toEqual(problem);
        expect(validationError.value).toEqual(value);
        expect(validationError.message).toContain(String(value));
      });
    })

    /**
     * .prototype.throw()
     */
    .describe('[counter] throw', () => {
      try {
        throw new ValidationError({ fix, id, problem, template, value });
      } catch (e: any) {
        testing
          .toBeClass(ValidationError)
          .toBe('instanceof ValidationError', e instanceof ValidationError, true)
          .toBeStringType(e.fix, undefined, '`e.fix` must be of a `string` type')
          .toBeNumberType(e.id, undefined, '`e.fix` must be of a `string` type')
          .toBeStringType(e.problem, undefined, '`e.problem` must be of a `string` type');
      }
    })

    .describe('[counter] .prototype.throw()', () => {
      testing
        .it(`[counter] with object of ErrorMessage`, () => {
          try {
            validationError
              .setFix(fix)
              .setProblem(problem)
              .setTemplate(`[problem], [fix]`);
            validationError.throw({
              problem: 'new problem',
              fix: 'new fix',
            });
          } catch (e) {
            expect(e.message).toEqual(`new problem, new fix`);
            expect(e.problem).toEqual('new problem');
            expect(e.fix).toEqual('new fix');
          }
        })
        .it(
          `[counter] with the actual \`problem\`, \`fix\` and \`value\``,
          () => {
            value = '27';
            try {
              validationError
                .setProblem(problem)
                .setFix(fix)
                .setValue(value)
                .setTemplate(`[problem], [fix], [value]`)
                .throw();
            } catch (e) {
              expect(e.message).toEqual(`${problem}, ${fix}, ${String(value)}`);
              expect(e.fix).toEqual(fix);
              expect(e.problem).toEqual(problem);
              expect(e.value).toEqual(value);
            }

            try {
              validationError
                .setMessage({
                  fix,
                  problem,
                  value,
                  template: `[problem] [fix] [value]`,
                })
                .throw();
            } catch (e) {
              expect(e.message).toEqual(`${problem} ${fix} ${String(value)}`);
              expect(e.fix).toEqual(fix);
              expect(e.problem).toEqual(problem);
              expect(e.value).toEqual(value);
            }

            try {
              validationError
                .setMessage({
                  fix,
                  problem,
                  template: `[problem] [fix] [value]`,
                })
                .throw();
            } catch (e) {
              expect(e.message).toEqual(`${problem} ${fix} ${String(value)}`);
              expect(e.fix).toEqual(fix);
              expect(e.problem).toEqual(problem);
              expect(e.value).toEqual(value);
            }
          }
        );
    });
});
