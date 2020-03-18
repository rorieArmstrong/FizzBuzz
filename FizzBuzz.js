function fizzBuzz(n){
    for(i=0; i<=n; ++i){
        var output="";
        if(i%3 === 0){output += "Fizz";};
        if(i%5 === 0){output += "Buzz";};
        if(output == ""){output += i};
        console.log(output);
    };
}

fizzBuzz(20)