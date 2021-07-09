const empId = function(){
    let count = 0;
    const getEmpId = function(){
        ++count;
        return `Emp${count}`;
    };
    return getEmpId;
}
const generatID = empId();
console.log('Alex: ', generatID());
console.log('Clark: ' , generatID());