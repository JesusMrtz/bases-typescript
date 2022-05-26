namespace Validations {
  export function validateText(text: string): boolean {
    return (text.length > 3) ? true : false;
  }

  export function validateDate(myDate: Date): boolean {
    return ( isNaN(myDate.valueOf()) ) ? false : true;
  }
}


console.log( Validations.validateText('Fer') );