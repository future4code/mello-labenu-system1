import * as moment from 'moment'
import IUser from "./User"

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
  }
  
  export class Teacher implements IUser {
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public birthDate: moment.Moment, 
      public specialties: TEACHER_SPECIALTY[]
    ) {}
  }
