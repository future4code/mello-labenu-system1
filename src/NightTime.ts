import {Teacher} from "./Teacher"
import Student from "./Student"
import {Team, MODULE} from "./Team"
import { throws } from "assert"

export default class NightTime extends Team{
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
        this.name = `${name}-na-night`
    }
}