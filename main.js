
let programText = {"yes1":"Nothing happens... you're still sick :( <br> However, after a few days, you get better naturally!",
    "no1":"You decide to go the natural way... warm water and rest is the way to go!<br>You eventually get better!",
    "yes2":"After a long day, you come home to your room smelling like Lysol. It's a bit strong, but at least your room is clean!",
    "no2":"You come home after a long day of work, and you see your cluttered room. You can't take it anymore, and you clean your room using minimal disinfectant; you weren't to sick in the first place."};
let choice1 = [];

function nextPage(){
    nextButton = document.getElementById("invNext");
    nextButton.innerHTML="Next";
    nextButton.style.display ="block";//used ai overview on google to explain how to ak the button appear
    document.getElementById("sickdiv").innerHTML = "<img id = 'sick' src='images/healthystick.png' alt='healthy stick figure'>" //vscode ai used to fill in syntax  for everything after innerHTML = 
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

function page2p2(){
    document.getElementById("timejump").style.display = "none";
    document.getElementById("sim-text").innerHTML = "It's your germaphobic sister, who pleads to disinfect your room 3 times. <br> Do you let your sister disinfect your room?";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b2y").disabled = false;
    document.getElementById("b2n").disabled = false;
    document.getElementById("b2y").style.display = "block";
    document.getElementById("b2n").style.display = "block";
    
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

this.load.image("sickstick", "images/sickstick.png");
this.player.velocity
