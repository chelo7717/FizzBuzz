class FizzBuzz {
    generarPara(num){
        if(num%3==0){
            return "Fizz";
        }
        if(num==5){
            return "Buzz";
        }
        else {
            return ""+num;
        }
}
}
export default FizzBuzz;