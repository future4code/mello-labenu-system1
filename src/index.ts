import moment from "moment"
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Expertise } from "./Expertise";

const user1 = new Student(1, "Artur", "artur@gmail.com", moment("22/10/1995","DD/MM/YYYY"), ["Programar", "Surfar", "Jogar futebol"])
const user2 = new Student(2,"Henrique", "henrique@gmail.com", moment("06/08/2020", "DD/MM/YYYY"), ["Programar", "Jogar dota"])
const user3 = new Teacher(3, "Mateus", "mateus@gmail.com", moment("05/08/2020", "DD/MM/YYYY"), Expertise.Typescript)
const user4 = createStudent(4,"João", "henrique@gmail.com", moment("06/08/2020", "DD/MM/YYYY"), ["Programar", "Jogar dota"])
const user5 = createTeacher(5, "Soter", "soter@gmail.com", moment("01/01/2019", "DD/MM/YYYY"), Expertise.React)

console.log(user1, user2, user3, user4, user5)

function createStudent(
    id: number,
    name: string,
    email: string,
    birthDate: moment.Moment,
    hobby: string[]
): Student {
    const user = new Student(id, name, email, birthDate, hobby)
    return user
}

function createTeacher(
    id: number,
    name: string,
    email: string,
    birthDate: moment.Moment,
    expertise: Expertise
): Teacher{
    const user = new Teacher(id, name, email, birthDate, expertise)
    return user
}