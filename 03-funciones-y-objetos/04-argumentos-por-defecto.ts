(() => {
  function fullName(firstName: string, lastName?: string, superHero: string = 'Iroman'): string {
    return `${firstName} ${lastName || 'Sin apellido'} es ${superHero}`;
  }

  console.log(fullName('Tony', 'Stark'));
})();