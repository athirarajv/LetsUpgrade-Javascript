console.log("LetsUpgrade JS Assignment : Day4 - Question 5");
console.log("Commission Calculator in Javascript");

// taking input
var sales = Number(prompt("Enter your sales this year", 10000));
var percent = 0.0;

// computing percentage
if(sales <=5000){
    var percent = 0.02;
}
else if(sales>=5001 && sales <= 10000){
    var percent = 0.05;
}
else if(sales>=10001 && sales <= 20000){
    var percent = 0.07;
}
else if(sales>20000){
    var percent = 0.1;
}
else{
    console.log("Invalid input");
}

var commission = +sales * percent;  

// logging the commission
console.log(`Your sales is Rs.${sales} and your Commission is Rs.${commission}.`);

