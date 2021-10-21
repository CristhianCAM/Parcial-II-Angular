import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyBiMZZ0vGGiJAXnbZJtsBGzxypiGUuvxDg';

  //userToken: string;

  // EndPoint: Registro
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // EndPoint: Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor() { }
}
