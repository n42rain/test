"use strict"
const ps = require("prompt-sync")
const prompt = ps()

class TailorOrder{
    constructor(custNo,custName,date){
        this.custNo = custNo;
        this.custName = custName;
        this.date = date;
    }

    displayCust(){
        console.log("Customer Name : ",this.custName)
        console.log("Customer no phone : ",this.custNo)
        console.log("Date : ",this.date)
    }
} // end of superclass

class Uniform extends TailorOrder{
    constructor(custNo,custName,date,uniformType,isCotton,qty){
        super(custNo,custName,date);
        this.uniformType = uniformType;
        this.isCotton = isCotton;
        this.qty = qty;
    }

    calCharges(){
        var price
        if (this.uniformType == 1){
            if (this.isCotton == 1){
                price = 60 * this.qty
            }

            else if (this.isCotton == 2){
                price = 100 * this.qty
            }
        }

        else if (this.uniformType == 2){
            if (this.isCotton == 1){
                price = 40 * this.qty
            }

            else if (this.isCotton == 2){
                price = 80 * this.qty
            }
        }

        else{
            console.log("Sorry, wrong input!")
        }

        return price
    }
} // end of subclass

var cust_no = prompt("Customer phone no : ")
var cust_name = prompt("Customer name : ")
var date = prompt("Date : ")
console.log("\n")
var total_payment = 0
do{
var type = parseInt(prompt("1-Office\n2-School\nEnter uniform type code : "))
console.log("\n")
var cotton = parseInt(prompt("1-Non cotton\n2-Cotton\nEnter the uniform material code : "))
console.log("\n")
var quantity = parseInt(prompt("Enter quantity ordered : "))

var cloth1 = new Uniform(cust_no,cust_name,date,type,cotton,quantity)

var total_price = cloth1.calCharges()
console.log("Total price for item : RM ",total_price.toFixed(2))
total_payment = total_payment + total_price
console.log("Do you wish to continue?\t1-Yes\t2-No")
var loop = parseInt(prompt("Choice : "))
} while (loop == 1)

console.log("\n")
cloth1.displayCust()
console.log("Total charges : RM ",total_payment.toFixed(2))
