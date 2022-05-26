(() => {
  interface Hero {
    name: string, 
    powers: string[], 
    age?: number, 
    getName?: () => string 
  };


  let flash: Hero = {
    name: 'Barry Allen',
    age: 23,
    powers: ['Súper velocidad', 'Viajar en el tiempo']
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Súper fuerza'],
    getName() {
      return this.name
    }
  };

  console.log('Hola');
  console.log(flash.getName?.());
  console.log(superman.getName?.());
})(); 