import ErrorRepository from '../app';

const errors = new ErrorRepository();

test('проверка выброса ошибки в случае невозможности распознать код', () => {
  expect(errors.translate(56)).toBe('unknown error');
});

test('проверка успешного распознания ошибки', () => {
  expect(errors.translate(400)).toBe('Bad Request');
});
