import { Person } from "./person.js";

export class Hero extends Person{
    _secret = "save the world";
    constructor(fname, lname, ncity){
        super(ncity);
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    };
    get secret(){
       return this._secret; 
    }
    set secret(nsecret){
       this._secret = nsecret; 
    }
  };
