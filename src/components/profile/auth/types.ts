export namespace IEntity {  
    export interface User {
      id: string;
      name: string;
      email: string;
    }
  }
  
  export namespace IForm {  
    export namespace Auth {
      export interface Login {
        email: string;
        password: string;
      }
      export interface Register extends Login {
        name: string;
      }
    }
  }
  