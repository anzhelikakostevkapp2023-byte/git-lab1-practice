import { expect, test, describe } from 'vitest';
import { getDaysUntilDeadline } from './utils';

describe('failure case', () => {
  test('навмисна помилка', () => {
    expect(getDaysUntilDeadline()).toBe(0);
  });
});
