import * as moment from 'moment'
import IUser from "./User"


export default class Student implements IUser {
    constructor(
      public id: string,
      public name: string,
      public email: string,
      public birthDate: moment.Moment,
      public hobbies: string[]
    ) {}
  
    public getAge(): number {
      return moment().diff(this.birthDate, "years");
    }
