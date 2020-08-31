console.log("LetsUpgrade JS Mini Project Q2");

//set minutes 
var mins = Number(prompt("Enter the number of minutes to start the countdown", 2)); 
console.log("Number of minutes entered = " + mins);
  
//calculate the seconds 
var secs = mins * 60; 

//countdown function is evoked when page is loaded 
function countdown() { 
    setTimeout('Decrement()', 60); 
} 

//Decrement function decrements the value. 
function Decrement() { 
    if (document.getElementById) { 
        minutes = document.getElementById("minutes"); 
        seconds = document.getElementById("seconds"); 

        //If less than a minute remaining display only seconds value. 
        if (seconds < 59) { 
            seconds.value = secs; 
        } 

        //Display both minutes and seconds 
        //getminutes and getseconds is used to get minutes and seconds 
        else { 
            minutes.value = getminutes(); 
            seconds.value = getseconds(); 
        } 
        //when less than a minute remaining colour of the minutes and seconds changes to red 
        if (mins < 1) { 
            minutes.style.color = "red"; 
            seconds.style.color = "red"; 
        } 
        //if seconds becomes zero, then page alert time up 
        if (mins < 0) { 
            alert('Time up!');
            console.log("Time up!"); 
            minutes.value = 0; 
            seconds.value = 0; 
        } 
        //if seconds > 0 then seconds is decremented 
        else { 
            secs--; 
            setTimeout('Decrement()', 1000); 
        } 
    } 
} 

function getminutes() { 
    mins = Math.floor(secs / 60); 
    return mins; 
} 

function getseconds() { 
    return secs - Math.round(mins * 60); 
} 