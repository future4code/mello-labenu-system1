import * as moment from 'moment'
import {Teacher, TEACHER_SPECIALTY as TS} from "./Teacher"
import Student from "./Student"
import {Team, MODULE} from "./Team"
import FullTime from './FullTime';
import NightTime from './NightTime';


moment.locale('pt-br');



const nasc =  moment("02/05/1996", "DD/MM/YYYY")
const dataNasc = moment(nasc)
const nasc2 =  moment("02/05/1990", "DD/MM/YYYY")
const dataNasc2 = moment(nasc2)

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







