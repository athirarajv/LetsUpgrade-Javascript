console.log("LetsUpgrade JS Assignment : Day4 - Question 8");

// original function
/*
function ask(question, yes, no){
    if(confirm(question))
        yes()
    else no()
}
ask(
    "Do you agree?",
    function() { alert("You agreed");},
    function() { alert("You cancelled the execution");},
);
*/

// using arrow function
function ask(question, yes, no){
    if(confirm(question))
        yes()
    else no()
}
ask(
    "Do you agree?",
    () => alert("You agreed"),
    () => alert("You cancelled the execution"),
);
