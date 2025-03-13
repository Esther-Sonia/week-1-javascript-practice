function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    function calculateTax(salary) {
        if (salary <= 24000) return salary * 0.1;
        if (salary <= 32333) return salary * 0.25;
        if (salary <= 500000) return salary * 0.3;
        if (salary <= 800000) return salary * 0.325;
        return salary * 0.35;    }

    function calculateNHIF(salary) {
        return 600;
    }
    function calculateNSSF(salary) {
        return salary * 0.06; 
    }
    
    const payee = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    
    const netSalary = grossSalary - (payee + nhif + nssf);
    
    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
}

console.log(netSalaryCalculator(80000, 10000));
