export interface UserResponseInterface {
    data: UserDataInterface[];
    total: number;
    page: number;
    limit: number;
  }
  
  export interface UserDataInterface {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
  }

  export interface UserSimple {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    registerDate?: string,
    updatedDate?: string
  }

  export interface UserFull {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
    gender: string;
    email: string;
    dateOfBirth: string;
    phone: string;
    location: Location;
    registerDate: string;
    updatedDate: string;
  }
  
  export interface Location {
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
  }