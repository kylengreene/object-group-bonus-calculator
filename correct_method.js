const employees = [
    {
        name: 'Atticus',
        employeeNumber: '2405',
        annualSalary: '47000',
        reviewRating: 3
    },
    {
        name: 'Jem',
        employeeNumber: '62347',
        annualSalary: '63500',
        reviewRating: 4
    },
    {
        name: 'Scout',
        employeeNumber: '6243',
        annualSalary: '74750',
        reviewRating: 5
    },
    {
        name: 'Robert',
        employeeNumber: '26835',
        annualSalary: '66000',
        reviewRating: 1
    },
    {
        name: 'Mayella',
        employeeNumber: '89068',
        annualSalary: '35000',
        reviewRating: 1
    }
];

for (let i=0; i< employees.length; i++){
bonusCalculator(employees[i]);
}


function bonusCalculator (employee){
    //console.log('this is employee', employee);
    let newObject ={
        name: employee.name,
        bonusPercentage: 0,
        totalCompensation: 0,
        totalBonus: 0
    }
//this block of code assigns a bonus percentage to new object from review rating
    if (employee.reviewRating <= 2) {
        newObject.bonusPercentage = 0;
    } else if (employee.reviewRating == 3) {
        newObject.bonusPercentage = .04;
    } else if (employee.reviewRating == 4) {
        newObject.bonusPercentage = .06;
    } else if (employee.reviewRating == 5) {
        newObject.bonusPercentage = .10;
    }
    //console.log('newObject', newObject);
//this code block adds 5% for employees with ids below 4 digits
    if (employee.employeeNumber.length == 4 && employee.reviewRating > 2){
        newObject.bonusPercentage += .05;
    }
   //console.log("employeeNumber", newObject);

   //this code block reduces bonus by 1% for annualSalary over 65000
   if (employee.annualSalary > 65000 && employee.reviewRating > 2){
       newObject.bonusPercentage -= .01
   }

   //this code caps percentage between 13 and 0
   if (newObject.bonusPercentage > .13){
       newObject.bonusPercentage = .13;
   } else if (newObject.bonusPercentage < 0) {
       newObject.bonusPercentage = 0;
   }

   //this assigns new value to totalBonus
   newObject.totalBonus = Number(employee.annualSalary) * newObject.bonusPercentage;
   //log    

   //this assigns new value to totalCompensation
   newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalBonus;

   console.log('final object', newObject);
   

}
