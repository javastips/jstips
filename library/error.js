class TipsError extends Error {
  constructor() {
    super();
  }

  /**
   * @returns { string }
   */
  functionError() {
    console.log(
      this.name = 'Function error',
      this.message = `Argument must be  function`
    )
  }
}


var _ = new TipsError();

_.functionError();




