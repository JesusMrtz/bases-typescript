class Avenger {
  // private name: string;
  // private team: string;
  // public realName?: string;
  static avgAge: number = 35;

  constructor(private name: string, private team: string, public publicName?: string) {}

  bio() {
    return `${ this.name } es Team ${ this.team }`
  }

  static getName() {
    return this.avgAge;
  }
}

const antMan: Avenger = new Avenger('AntMan', 'Capitan', 'Scot Lang');
console.log(antMan.bio());
console.log(Avenger.getName());