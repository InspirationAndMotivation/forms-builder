export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface AuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Properties {
  id: number;
  type: string;
  styles: {
    color: string;
    fontSize: string;
    fontWeight: string;

    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    borderWidth: string;

    width: string;
    height: string;
    backgroundColor: string;
  };
}



