import { User } from "./User";

export class Student implements User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        private hobbies: string[] = []
    ){}
    
}