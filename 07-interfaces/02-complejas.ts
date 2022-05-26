(() => {
  
  interface Client {
    name: string;
    age: number;
    address: Address,
    getFullAddress( id:string ): string
  }
  
  interface Address {
    id: number;
    zip: string;
    city: string;
  }
  
  const client: Client = {
    name: 'Fernando',
    age: 26,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa'
    },
    getFullAddress( id: string ) {
      return this.address.city
    }
  }

  console.log(client.address.zip)
});