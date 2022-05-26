( () => {
  let avenger: any;

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0));

  avenger = 12423.323;
  console.log((<number>avenger).toFixed(2));
} )();