//UC1_Checking Employee is Present or Absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT)
    {
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}
//UC2_Part time or Full time 
//UC3_Employee Woking  Hrs
//UC4_Employee Monthly Wage
//UC5_Total Calculation of Wage 
//UC6_EmployeeDaily Wage Array
const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PARTTIME_HRS = 4;
const FULLTIME_HRS = 8;
const WAGE_PER_HR = 20;
const NUMBER_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empHrs = 0;
{
    function getWorkingHrs(empCheck) {
    switch(empCheck)
    {
        case IS_PARTTIME:
            return PARTTIME_HRS;
        case IS_FULLTIME:
            return FULLTIME_HRS;
        default:
            return 0;
    }
    }
    function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HR
    }
    {
    let empDailyWageArray = new Array();
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();
    while(totalEmpHrs<MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs=getWorkingHrs(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArray.push(calcDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs))
        empDailyHrsMap.set(totalWorkingDays,empHrs);
    }
    let empWage =calcDailyWage(totalEmpHrs);
    console.log("Total Days: "+totalWorkingDays+ "Total Hours: "+totalEmpHrs+ "Employee Wage is: "+empWage);

    //UC7_Calculate Total Emp Wage Using Array
    let totalEmpWage = 0;
    function sum (dailyWage){
        totalEmpWage += dailyWage;
    }
    empDailyWageArray.forEach(sum);
    console.log("UC7A - Total days: "+totalWorkingDays +"Total hrs: "+totalEmpHrs+"EmpWage: "+totalEmpWage)

    function totalWages(totalWage,dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Emp wage with reduce: "+empDailyWageArray.reduce(totalWages,0));

    //Daily Emp Wage Using Array Map helper Function
    let DailyCntr = 0;
    function mapDayWithWage(dailyWage) {
        DailyCntr++;
        return DailyCntr +" "+dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
    console.log("UC7B- Daily Wage Map");
    console.log(mapDayWithWageArr);

    //Emp FullTime Wage of 160 are Earned
    function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C - Daily Wage Filter when Full time wage earned");
    console.log(fullDayWageArray);

    //Find the first occurrence when FullTime wage was earned using find function
    function findFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    console.log("UC7D - First time fulltime wage was earned on Day"+mapDayWithWageArr.find(findFullTimeWage));

    //Check if Element of FullTime Emp Wage is Truely Hold FullTime Emp Wage
    function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7E - Check all element have full time wage:"+fullDayWageArray.every(isAllFullTimeWage));

    //Check if There is Any PartTime Emp Wage 
    function isAnyPartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("UC7F - Check if any part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

    //Get Number of Days the Emp Worked
    function totalDaysWorked(numOfDays,dailyWage){
        if(dailyWage>0) return numOfDays+1;
        return numOfDays;
    }
    console.log("UC7G - Number of days employee worked: "+empDailyWageArray.reduce(totalDaysWorked,0));

    //UC8_Map Function
    console.log("UC8 - Emp wage map total hrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));

    //UC9_Array Function

    const findTotal = (totalVal,dailyVal) => {
        return totalVal + dailyVal;
    }
    let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyHrs => dailyHrs >0).reduce(findTotal,0);
    let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage,0).reduce(findTotal,0);
    console.log("UC9 - Emp wage with Arrow: "+"Total Hours: "+totalHours+"Total wages: "+totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value,Key,map)=>{
        if(value == 8) fullWorkingDays.push(Key);
        else if(value == 4) partWorkingDays.push(Key);
        else nonWorkingDays.push(Key);
    });
    console.log("Full Working days: "+fullWorkingDays);
    console.log("Part Working days: "+partWorkingDays);
    console.log("Non Working days: "+nonWorkingDays);
   }
    //UC10_Store Day, Hours Emp Worked Daily wage in a Single obj
    let totalEmpHrs=0;
    let totalWorkingDays=0;
    let empDailyHrsAndWageArr=new Array();
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAYS)
    {
        totalWorkingDays++;
        let empCheck=Math.floor(Math.random() * 10) % 3;
        let empHrs=getWorkingHrs(empCheck);
        totalEmpHrs += empHrs;
        empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString()
            {
                return '\nDay' +this.dayNum+ '=> Working Hours is'+this.dailyHours+'And Wage Earned = '+this.dailyWage
            },
       });
    }
    console.log("Showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);

    //U_11 Using Object Functions Along With Arrow Functions

    let totalWages=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage,dailyHrsAndWage) =>totalWage += dailyHrsAndWage.dailyWage,0);
     
    let totalHours=empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalHours,dailyHrsAndWage) =>totalHours += dailyHrsAndWage.dailyHours,0);
     
    console.log("\nUC 11A Total Hours: "+totalHours+"Total Wages: "+totalWages);
    process.stdout.write("\nUC 11B Logging Full Work Days")
    empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
    let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("\nUC 11C PartWorkingDayStrings: "+partWorkingDayStrArr);
    let nonWorkingDayNum=empDailyHrsAndWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0).map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
    console.log("\nUC 11D NonWorkingDayNums: "+nonWorkingDayNum);   
}