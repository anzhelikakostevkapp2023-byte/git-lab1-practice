import { expect, test, describe } from 'vitest';
import { getDaysUntilDeadline } from './utils';

describe('getDaysUntilDeadline - failure case', () => {
  test('має повертати 0, але повертає 100 (навмисна помилка)', () => {
    expect(getDaysUntilDeadline()).toBe(0);
  });
});
