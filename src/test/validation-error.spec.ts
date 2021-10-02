// External class.
import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// Class.
import { ValidationError } from '../lib/validation-error.class';
/**
 * Initialize `Testing`.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe('ValidationError', () => {
  let fix: any;
  let problem: any;
  let template: any;
  let errorMessage: any;
  let validationError: ValidationError;

  beforeEach(() => {
    fix = 'There is no solution to the described problem.';
    problem = 'The problem has no solution.';
    validationError = new ValidationError();
  });

  testing.describe('throw', () => {
    try {
      throw new ValidationError({ problem, fix });
    } catch (e: any) {
      testing
        .toBeClass(ValidationError)
        .toBe('instanceof ValidationError', e instanceof ValidationError, true)
        .toBeStringType(
          e.problem,
          undefined,
          '`e.problem` must be of a `string` type'
        )
        .toBeStringType(e.fix, undefined, '`e.fix` must be of a `string` type');
    }
  })

  .describe('instantiate', () => {
    beforeEach(() => validationError = new ValidationError({ fix, problem }));

    testing.it(`with the message of a \`string\` type`, () => {
      const message = 'Validation error message';
      validationError = new ValidationError(message);
      toBe.string(validationError.message);
      expect(validationError.message).toContain(message);
    });

    testing.it(`with the message of the \`ErrorMessage\` interface`, () => {
      toBe
        .string(validationError.message)
        .string(validationError.problem)
        .string(validationError.fix);

      // to Equal.
      expect(validationError.problem).toEqual(problem);
      expect(validationError.fix).toEqual(fix);
      expect(validationError.message).toEqual(
        ValidationError.template
          .replace(`[fix]`, fix)
          .replace(`[problem]`, problem)
      );
      // toContain.
      expect(validationError.message).toContain(fix);
      expect(validationError.message).toContain(problem);
    });
  })

  .describe('.defineMessage()', () => {
    beforeEach(() => errorMessage = ValidationError.defineMessage({ fix, problem }));

    testing.it(`with the message of the \`ErrorMessage\` interface`, () => {
      toBe.string(errorMessage);
      expect(errorMessage).toEqual(
        ValidationError.template
          .replace(`[fix]`, fix)
          .replace(`[problem]`, problem)
      );
      // toContain.
      expect(errorMessage).toContain(fix);
      expect(errorMessage).toContain(problem);
    });
  })

  .describe('.prototype.setFix()', () => {
    testing.it(`set ${fix}`, () => {
      validationError.setFix(fix, (result, value, payload) => {
        expect(value).toEqual(fix);
        toBe
          .boolean(result)
          .string(value)
          .undefined(payload);
        return result;
      });
      expect(validationError.fix).toEqual(fix);
    });
  })

  .describe('.prototype.setMessage()', () => {
    testing.it(`set ${problem}`, () => {
      validationError.setMessage(problem, (result, value, payload) => {
        expect(value).toEqual(problem);
        toBe
          .boolean(result)
          .string(value)
          .undefined(payload);
        return result;
      });
      expect(validationError.message).toEqual(problem);
    });
  })

  .describe('[counter] .prototype.setMessage()', () => {
    testing.it(`[counter] set ${problem}`, () => {
      validationError.setMessage(problem, (result, value, payload) => {
        expect(value).toEqual(problem);
        toBe
          .boolean(result)
          .string(value)
          .undefined(payload);
        return result;
      });
      expect(validationError.message).toEqual(problem);
    })
    .it(`[counter] set object`, () => {
      errorMessage = { fix, problem };
      validationError.setMessage(errorMessage, (result, value, payload) => {
        expect((value as any).fix).toEqual(errorMessage.fix);
        expect((value as any).problem).toEqual(errorMessage.problem);
        toBe
          .boolean(result)
          .object(value)
          .undefined(payload);
        return result;
      });
      expect(validationError.fix).toEqual(fix);
      expect(validationError.problem).toEqual(problem);
    });
  })

  .describe('[counter] .prototype.setProblem()', () => {
    testing.it(`[counter] set ${problem}`, () => {
      validationError.setProblem(problem, (result, value, payload) => {
        expect(value).toEqual(problem);
        toBe
          .boolean(result)
          .string(value)
          .undefined(payload);
        return result;
      });
      expect(validationError.problem).toEqual(problem);
    });
  })

  .describe('[counter] .prototype.setTemplate()', () => {
    template = `[problem] must be fixed by using [fix]`;
    testing.it(`[counter] set ${template}`, () => {
      validationError.setTemplate(template, (result, value, payload) => {
        expect(value).toEqual(template);
        toBe
          .boolean(result)
          .string(value)
          .object(payload);
        return result;
      });
      expect(validationError.template).toEqual(template);
    });
  })

  .describe('[counter] .prototype.updateMessage()', () => {
    testing.it(`[counter] works properly`, () => {
      validationError
        .setFix(fix)
        .setProblem(problem);
      expect(validationError.fix).toEqual(fix);
      expect(validationError.problem).toEqual(problem);
      expect(validationError.message).toEqual('');
      validationError.updateMessage();
      expect(validationError.message)
        .toEqual('Problem: The problem has no solution. => Fix: There is no solution to the described problem.');
    });
  })

  .describe('[counter] .prototype.throw()', () => {
    testing
    .it(`[counter] with string`, () => {
      try {
        validationError.setFix(fix).setProblem(problem);
        validationError.throw('Throws a string');
      } catch (e) {
        expect(e.problem).toEqual('');
        expect(e.fix).toEqual('');
        toBe
          .stringOfLength(e.problem, { max: 0 })
          .stringOfLength(e.fix, { max: 0 });
      }
    })
    .it(`[counter] with object of ErrorMessage`, () => {
      try {
        validationError.setFix(fix).setProblem(problem).setTemplate(`[problem], [fix]`);
        validationError.throw({
          problem: 'new problem',
          fix: 'new fix'
        });
      } catch (e) {
        expect(e.message).toEqual(`new problem, new fix`);
        expect(e.problem).toEqual('new problem');
        expect(e.fix).toEqual('new fix');
      }
    })
    .it(`[counter] with set string type message`, () => {
      try {
        validationError.setMessage(problem);
        validationError.throw();
      } catch (e) {
        expect(e.message).toEqual(problem);
        expect(e.problem).toEqual('');
        expect(e.fix).toEqual('');
        toBe
          .stringOfLength(e.problem, { max: 0 })
          .stringOfLength(e.fix, { max: 0 });
      }
    })
    .it(`[counter] with the actual \`problem\` and \`fix\``, () => {
      try {
        validationError.setMessage('my message');
        validationError.setProblem(problem).setFix(fix).setTemplate(`[problem], [fix]`);
        validationError.throw();
      } catch (e) {
        expect(e.message).toEqual(`${problem}, ${fix}`);
        expect(e.problem).toEqual(problem);
        expect(e.fix).toEqual(fix);
      }
    });
  });
});
