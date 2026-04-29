import { expect, test, describe } from 'vitest';
import { getDaysUntilDeadline } from './utils';

describe('getDaysUntilDeadline', () => {
  test('коректно розраховує дні до дедлайну (через 2 дні)', () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 2);
    expect(getDaysUntilDeadline(futureDate)).toBe(2);
  });

  test('повертає 0, якщо дедлайн сьогодні', () => {
    const today = new Date();
    expect(getDaysUntilDeadline(today)).toBe(0);
  });

  test('повертає від’ємне значення для минулого дедлайну', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 5);
    expect(getDaysUntilDeadline(pastDate)).toBe(-5);
  });
});
