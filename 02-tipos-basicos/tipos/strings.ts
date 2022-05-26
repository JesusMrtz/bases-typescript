( () => {
  const batman: string = 'Batman';

  console.log(batman.toUpperCase());
  console.group(batman[10]?.toUpperCase() || 'No está presente')
} )();