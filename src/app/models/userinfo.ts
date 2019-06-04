
export class UserInfo
{
    id: number;
    firstname: string;
    lastname: string;
    dob?: string;
    email: string;
    address: address;
    username?:string;
    phone?:string;
}

export class address
{
    constructor()
    {
        this.countryCode = "US";
    }
    addressLine1:string;
    addressLine2?:string;
    city:string;
    state:string;
    postalCode:string;
    countryCode:string
}