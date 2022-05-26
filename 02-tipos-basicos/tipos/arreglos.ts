(() => {
  const numbers: (number | string | boolean)[] = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
  numbers.push(true);

  const names: string[] = ['jesus', 'martinez', 'torres'];
  console.log(names.map(v => v.toLocaleUpperCase()));
})();