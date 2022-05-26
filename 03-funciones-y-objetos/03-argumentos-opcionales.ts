(() => {
  function fullName(firstName: string, lastName?: string ): string {
    return `${firstName} ${lastName || 'Sin apellido'}`;
  }

  console.log(fullName('Tony'));
})();