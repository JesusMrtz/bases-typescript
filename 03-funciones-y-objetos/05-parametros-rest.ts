(() => {
  function suspiciousPeople(...names: string[]): string {
    return 'Los nombres de los sospechosos son: '.concat(
      names.reduce((concatText, value, index, array) => {
        const capitalizeValue: string = `${ value.charAt(0).toUpperCase().concat(value.slice(1)) }`;
        const capitalizeConcat: string = `${ concatText.charAt(0).toUpperCase().concat(concatText.slice(1)) }`;

        return (value === array[array.length - 1]) ? `${capitalizeConcat} y ${capitalizeValue}.` : `${capitalizeConcat}, ${capitalizeValue}`;
      })
      );
  }

  console.log(suspiciousPeople('jesus', 'karely', 'jose'));
})();