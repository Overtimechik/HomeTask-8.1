import { emploees } from "./src/scripts/emploee";
import { TEmploee } from "./src/scripts/types";
console.log(Object.entries(emploees))
let counter_tech = 0
let counter_design = 0
let counter_projects = 0
let counter_tech2 = 0
let counter_design2 = 0
let counter_projects2 = 0
let counter_tech3 = 0
let counter_design3 = 0
let counter_projects3 = 0
for (let i = 0; i<emploees.length;i++){
    if(emploees[i].departament == "TECH"){
        counter_tech +=1
        counter_tech3+=emploees[i].salary
    }else if (emploees[i].departament=="DESIGN"){
        counter_design+=1
        counter_design3+=emploees[i].salary
    }else if (emploees[i].departament=="PROJECT"){
        counter_projects+=1
        counter_projects3+=emploees[i].salary
    }
    if(emploees[i].departament == "TECH"||emploees[i].experience>=3){
        counter_tech2 +=1
    }else if (emploees[i].departament=="DESIGN"||emploees[i].experience>=3){
        counter_design2+=1
    }else if (emploees[i].departament=="PROJECT"||emploees[i].experience>=3){
        counter_projects2+=1    
    }
    //3 task
    if(emploees[i].isClosedProjects){
        console.log("Имя: "+emploees[i].name+ ". С опытом работы: "+emploees[i].experience+". Уже закрыл проект")
    }
}
counter_design3=counter_design3/counter_design
counter_projects3=counter_projects3/counter_projects
counter_tech3=counter_tech3/counter_tech
//1 task
if(counter_design>counter_projects||counter_projects<counter_design){
    console.log("Новичков больше всего в отделе DESIGN "+ counter_design)
}else if(counter_projects>counter_design||counter_projects>counter_tech){
    console.log("Новичков больше всего в отделе PROJECT "+ counter_projects)
}else{
    console.log("Новичков больше всего в отделе TECH "+ counter_tech)
}
//2 task
if(counter_design2>counter_projects2||counter_projects2<counter_design2){
    console.log("Людей со стажем больше всего в отделе DESIGN "+ counter_design2)
}else if(counter_projects2>counter_design2||counter_projects2>counter_tech2){
    console.log("Людей со стажем больше всего в отделе PROJECT "+ counter_projects2)
}else{
    console.log("Людей со стажем больше всего в отделе TECH "+ counter_tech2)
}
//4 task
if(counter_design3>counter_projects3||counter_projects3<counter_design3){
    console.log("Самая большая зарплата в отделе DESIGN "+ Math.floor(counter_design3))
}else if(counter_projects2>counter_design3||counter_projects3>counter_tech3){
    console.log("Самая большая зарплата в отделе PROJECT "+ Math.floor(counter_projects3))
}else{
    console.log("Самая большая зарплата в отделе TECH "+ Math.floor(counter_tech3))
}