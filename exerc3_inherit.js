"use strict";
const ps = require("prompt-sync");
const prompt = ps();

class Student{
    constructor(studentName,studentID,program){
        this.studentName = studentName;
        this.studentID = studentID;
        this.program = program;
    }
}

class Resident extends Student{
    constructor(studentName,studentID,program,electricalItem){
        super(studentName,studentID,program);
        this.electricalItem = electricalItem;
    }

    calculateFee(){
        
        var charge
        if (this.electricalItem == 1){
            charge = 10
        }

        else if (this.electricalItem == 2){
            charge = 7
        }

        else if (this.electricalItem == 3){
            charge = 5
        }

        else if (this.electricalItem == 4){
            charge = 8
        }

        else if (this.electricalItem == 5){
            charge = 6
        }

    }
}

var name = prompt("Student name : ")
var stud_ID = prompt("Student ID : ")
var prog = prompt("Program : ")
console.log("Enter your residence status\t1-Resident\t2-Non Resident")
var residency = parseInt(prompt("Status : "))

if (residency == 1){
    var item_qty = parseInt(prompt("Quantity of item that want to be registered (Maximum - 3): "))
    var student1 = new Resident(name,stud_ID,prog)
    for (var x = 0; x < item_qty; x++ ){
        
    }
}