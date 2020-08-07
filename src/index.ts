import moment from 'moment'
import {Teacher, TEACHER_SPECIALTY as TS} from "./Teacher"
import Student from "./Student"
import {Team, MODULE} from "./Team"
import FullTime from './FullTime';
import NightTime from './NightTime';
import { FileManager } from './FileManager';

const file = new FileManager()

moment.locale('pt-br');



const nasc =  moment("02/05/1996", "DD/MM/YYYY")
const dataNasc = moment(nasc)
const nasc2 =  moment("02/05/1990", "DD/MM/YYYY")
const dataNasc2 = moment(nasc2)
/*
const aluno1 = new Student("31141","Henrique","henrique@gmail.com", dataNasc, ["estudar", "nadar"])
const prof1 = new Teacher("41510", "Alan", "alan@gmail.com", dataNasc2, [TS.CSS, TS.BACKEND ])
const prof2 = new Teacher("414110", "Turing", "turing@gmail.com", dataNasc2, [TS.CSS, TS.REDUX ])
const turma1 = new FullTime("31414", 
                           "Labenu",
                            moment("02/05/1996", "DD/MM/YYYY"),
                            moment("02/05/1997", "DD/MM/YYYY"),
                            [prof1], [aluno1], MODULE.NUM1
                            )

const turma2 = new NightTime("3224", 
                           "Labenu",
                            moment("02/05/1996", "DD/MM/YYYY"),
                            moment("02/05/1997", "DD/MM/YYYY"),
                            [prof1], [aluno1], MODULE.NUM1
                            )



// turma1.addTeacher(prof2)
// console.log(turma1.getStudentAge("31141"))
// console.log(turma1.getStudentAge("31142"))
console.log(turma2)
*/
createStudent("31141","Henrique","henrique@gmail.com", dataNasc, ["estudar", "nadar"])
createTeacher("414110", "Turing", "turing@gmail.com", dataNasc2, [TS.CSS, TS.REDUX ])
const arrayStudents: Student[] = file.readDataBaseStudents()
const arrayTeachers: Teacher[] = file.readDataBaseTeacher()
createTeam("FullTime", "31414", "Labenu",
    moment("02/05/1996", "DD/MM/YYYY"),
    moment("02/05/1997", "DD/MM/YYYY"),
    arrayTeachers, arrayStudents, MODULE.NUM1
    )
createTeam("nighttime", "31414", "Labenu",
    moment("02/05/1996", "DD/MM/YYYY"),
    moment("02/05/1997", "DD/MM/YYYY"),
    arrayTeachers, arrayStudents, MODULE.NUM1
    )
function createStudent(
    id: string,
    name: string,
    email: string,
    birthDate: moment.Moment,
    hobby: string[]
): void {
    const array: Student[] = file.readDataBaseStudents()
    const user = new Student(id, name, email, birthDate, hobby)
    array.push(user)
    file.writeDataBaseStudents(array)
}

function createTeacher(
    id: string,
    name: string,
    email: string,
    birthDate: moment.Moment,
    expertise: TS[]
): void{
    const array: Teacher[] = file.readDataBaseTeacher()
    const user = new Teacher(id, name, email, birthDate, expertise)
    array.push(user)
    file.writeDataBaseTeacher(array)
}

function createTeam(
    type: string,
    id: string,
    name: string,
    startDate: moment.Moment,
    endDate: moment.Moment,
    teacherList: Teacher[],
    studentList: Student[],
    module: MODULE
): void {
    switch (type.toLowerCase()){
        case "fulltime":
            const array: Team[] = file.readDataBaseTeam()
            const team = new FullTime(id, name, startDate,
                endDate, teacherList, studentList, module)
            array.push(team)
            file.writeDataBaseTeam(array)
            break;
        case "nighttime":
            const arrayNT: Team[] = file.readDataBaseTeam()
            const teamNT = new NightTime(id, name, startDate,
                endDate, teacherList, studentList, module)
            arrayNT.push(teamNT)
            file.writeDataBaseTeam(arrayNT)
            break;
        default:
            console.log("Erro ao criar turma!")
            break;    
    }
}
