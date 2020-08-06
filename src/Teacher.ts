import { User } from "./User";
import { Expertise } from "./Expertise";

export class Teacher implements User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        private expertise: Expertise
    ){}
}