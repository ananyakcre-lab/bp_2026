
let programText = {"yes1":"Nothing happens... you're still sick :( <br> However, after a few days, you get better naturally!",
    "no1":"You decide to go the natural way... warm water and rest is the way to go!<br>You eventually get better!",
    "yes2":"After a long day, you come home to your room smelling like Lysol. It's a bit strong, but at least your room is clean!",
    "no2":"You come home after a long day of work, and you see your cluttered room. You can't take it anymore, and you clean your room using minimal disinfectant; you weren't to sick in the first place."
};
let choice1 = [];

function nextPage(){
    nextButton = document.getElementById("invNext");
    nextButton.style.display ="block";//used ai overview on google to explain how to ak the button appear
    document.getElementById("sickdiv").innerHTML = "<img id = 'sick' src='images/healthystick.png'>" //vscode ai used to fill in syntax  for everything after innerHTML = 
}



function page2(){
    document.getElementById("timejump").innerHTML = "A few days later...";
    document.getElementById("sim-text").innerHTML = "You are finally better (yay!!!). You decide to start your day.<br>But wait, someone's calling you from another part of your house..."
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("invNext").style.display = "none";
    document.getElementById("sickdiv").innerHTML = "<img id = 'sick' src='images/confusion.png''>"
    document.getElementById("b3").style.display = "block";
}
function steak(){
    console.log("hi");
    document.getElementById("sim-text").innerHTML = "That night, for dinner, your mom prepared steak. As you're helping her set up for dinner, you see that the steak has been treated with antibiotics. Eat or don't eat?";
    document.getElementById("b2y").style.display = "none";
    document.getElementById("b2n").style.display = "none";
    document.getElementById("eat").style.display = "block";
    document.getElementById("noeat").style.display = "block";
}

function update3(text,button){  
    document.getElementById("sim-text").innerHTML = programText[text];
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b2y").disabled = true;
    document.getElementById("b2n").disabled = true;
    if (button === 'yes'){
        choice1.push("yes");
        
    }
    else{
        choice1.push("no");
    }
    console.log(choice1)   
    
    document.getElementById("invNext2").style.display = "block";
}

function page2p2(){
    document.getElementById("timejump").style.display = "none";
    document.body.style.backgroundImage = "url('images/messyroom.png')";
    document.getElementById("sim-text").innerHTML = "It's your germaphobic sister, who pleads to disinfect your room 3 times. <br> Do you let your sister disinfect your room?";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b2y").disabled = false;
    document.getElementById("b2n").disabled = false;
    document.getElementById("b2y").style.display = "inline-block";
    document.getElementById("b2n").style.display = "inline-block";
    document.getElementById("invNext").innerHTML = '<button id="invNext" class = "buttons" onclick="steak()">Next</button>';
    
}
function update2(text,button){  
    document.getElementById("sim-text").innerHTML = programText[text];
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b2y").disabled = true;
    document.getElementById("b2n").disabled = true;
    if (button === 'yes'){
        choice1.push("yes");
        
    }
    else{
        choice1.push("no");
    }
    console.log(choice1)   
    
    document.getElementById("invNext2").style.display = "block";
}
function update(text,button){
    document.getElementById("sim-text").innerHTML = programText[text];
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b2y").disabled = true;
    document.getElementById("b2n").disabled = true;
    if (button === 'yes'){
        choice1.push("yes");
        
    }
    else{
        choice1.push("no");
    }
    console.log(choice1)
    nextPage()
}

//this is the stick figure walking in btw AI was used to confirm facts about the antibiotic resistance


//"That night, for dinner, your mom perpared steak. As you're helping her clean up the kitchen, you see that the steak has been treated with antibiotics. Eat or don't eat?"
//"eat, i love steak!" > "You eat the steak happily, however you don't know that in the past few days you've created a super bug"
//"Antibiotics? gross! i'm making my own dinner" good job, over the past few weeks you've avoided creating a powerful superbug, one that could cause your whole family to fall sick. However, you still did soemthing that could cause a super bug. You took uneccessary antibiotics when you didn't have a bacterial infection.