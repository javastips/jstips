class TypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TypeError';
  }
}


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}



module.exports = {
  TypeError,
  ValidationError
}
