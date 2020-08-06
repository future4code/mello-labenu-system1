import {Teacher} from "./Teacher"
import Student from "./Student"
import {Team, MODULE} from "./Team"

export default class FullTime extends Team{
    constructor(        
        protected id: string,
        protected name: string,
        protected startDate: moment.Moment,
        protected endDate: moment.Moment,
        protected teacherList: Teacher[],
        protected studentList: Student[],
        protected module: MODULE
    ){
        super(id, name, startDate, endDate, teacherList, studentList, module)
    }
}

