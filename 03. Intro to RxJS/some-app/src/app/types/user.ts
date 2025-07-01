export interface User{
    name:string;
    age:number;
}

interface Geo{
        "lat": string,
        "lng": string
      }
interface Address{
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": Geo
    }

interface Company{
      "name": string,
      "catchPhrase":string,
      "bs": string
    }

export interface User2{
  
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "phone": string,

}
export interface jsonPlaceholderUser extends User2{
    "address": Address,
    "phone": string,
    "company": Company
  }