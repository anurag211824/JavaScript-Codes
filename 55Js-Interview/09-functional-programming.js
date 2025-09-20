debugger
const radius = [3,4,5,2]

const area = function (r){
  return (Math.PI * Math.pow(r,2)).toFixed(2)
}
const perimeter = function (r){
    return (2 * Math.PI * r).toFixed(2)
}
const calculate = function(radius,logic){
    const output = []

    radius.forEach(ele => {
        output.push(logic(ele))
    });
    return output
}
console.log(calculate(radius,area));
console.log(calculate(radius,perimeter))
