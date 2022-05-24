export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'unknown error';
  }
}
