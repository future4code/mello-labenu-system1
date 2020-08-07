import fs from 'fs';
import Student from './Student';
import { Teacher } from './Teacher';
import { Team } from './Team';

export class FileManager {

    //Ajustar o retorno
    public readDataBaseStudents(): any {
        try{
            return JSON.parse(fs.readFileSync("./dataStudents.json").toString())
        } catch (error){
            console.log("Erro na leitura do banco de dados de DataStudents: " + error.message)
        }
    }

    //Ajustar o tipo do parametro
    public writeDataBaseStudents(data: Student[]) {
        try{
            fs.writeFileSync("./dataStudents.json", JSON.stringify(data))
        } catch (error){
            console.log("Erro na escrita do banco de dados de DataStudents: " + error.message)
        }
    }

    public readDataBaseTeacher(): any {
        try{
            return JSON.parse(fs.readFileSync("./dataTeacher.json").toString())
        } catch (error){
            console.log("Erro na leitura do banco de dados de DataTeacher: " + error.message)
        }
    }

    public writeDataBaseTeacher(data: Teacher[]){
        try {
            fs.writeFileSync("./dataTeacher.json", JSON.stringify(data))
        } catch (error) {
            console.log("Erro na escrita do banco de dados de DataTeacher: " + error.message)
        }
    }

    public readDataBaseTeam(): any {
        try{
            return JSON.parse(fs.readFileSync("./dataTeam.json").toString())
        } catch (error){
            console.log("Erro na leitura do banco de dados de DataTeacher: " + error.message)
        }
    }

    public writeDataBaseTeam(data: Team[]){
        try {
            fs.writeFileSync("./dataTeam.json", JSON.stringify(data))
        } catch (error) {
            console.log("Erro na escrita do banco de dados de DataTeacher: " + error.message)
        }
    }
}