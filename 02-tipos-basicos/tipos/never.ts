(() => {
  /**
   * Una función never no debe terminar exitosamente
   */
  function error(message: string): never {
    throw new Error(message);
  }

  error('Hay un error!, auxilio!!');
})();