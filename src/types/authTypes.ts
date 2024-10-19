export interface LoginParams {
    email: string;
    password: string;
  }

  export interface SignupParams {
    username: string;
    email: string;
    password: string;
  }


  export interface LoginResponse {
    token: string;
  }

  export interface SignupResponse {
    message: string;
  }
