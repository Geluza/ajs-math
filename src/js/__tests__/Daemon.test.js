import Daemon from '../Daemon';

test('проверка get attack без дурмана', () => {
  const daemon = new Daemon('Vasya');
  daemon.attack = 100;
  daemon.stoned = false;
  const result = daemon.attack;
  expect(result).toBe(90);
});


test('проверка get attack с дурманом', () => {
  const daemon = new Daemon('Vasya');
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result).toBe(85);
});
