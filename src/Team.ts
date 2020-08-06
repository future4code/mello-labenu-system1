import * as moment from 'moment'
import {Teacher} from "./Teacher"
import Student from "./Student"

export enum MODULE {
    NUM1 =  1,
    NUM2 =  2,
    NUM3 =  3,
    NUM4 =  4,
    NUM5 =  5,
    NUM6 =  6,
    NUM7 =  7,
}

export abstract class Team {
    constructor(
        protected id: string,
        protected name: string,
        protected startDate: moment.Moment,
        protected endDate: moment.Moment,
        protected teacherList: Teacher[],
        protected studentList: Student[],
        protected module: MODULE | undefined = undefined
    ){}

    public addStudend(student: Student): void {
        this.studentList.push(student)
    }

    public addTeacher(teacher: Teacher): void{
        this.teacherList.push(teacher)
    }

    public getStudentAge(id: string): number | string{
        let i
        this.studentList.find(
            item => {
                if(id === item.id){
                    i = moment().diff(item.birthDate, "years")   
                }
            }
        )
        if(i === undefined){
            return "Usuário não encontrado"
        }
        else{
            return i
        }  
    }
}
