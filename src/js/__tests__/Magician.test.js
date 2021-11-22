import Magician from '../Magician';

test('проверка метода get attack без дурмана', () => {
  const magician = new Magician('Sasha');
  magician.attack = 150;
  magician.stoned = false;
  const result = magician.attack;
  expect(result).toBe(105);
});


test('проверка метода get attack с дурманом', () => {
  const magician = new Magician('Sasha');
  magician.attack = 150;
  magician.stoned = true;
  const result = magician.attack;
  expect(result).toBe(95);
});
