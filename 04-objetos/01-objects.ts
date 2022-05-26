(() => {
  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Barry Allen',
    age: 23,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  };

  flash = {
    name: 'Clark Kent',
    powers: ['Súper fuerza'],
    getName() {
      return this.name
    }
  };

  console.log(flash?.getName);
});