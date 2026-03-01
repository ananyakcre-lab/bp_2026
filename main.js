
let programText = {"yes1":"Nothing happens... you're still sick :( <br> However, after a few days, you get better naturally!",
    "no1":"You decide to go the natural way... warm water and rest is the way to go!<br>You eventually get better!",
    "yes2":"After a long day, you come home to your room smelling like Lysol. It's a bit strong, but at least your room is clean!",
    "no2":"You come home after a long day of work, and you see your cluttered room. You can't take it anymore, and you clean your room using minimal disinfectant; you weren't too sick in the first place.",
    "yes3":"You eat the steak happily, but you get sick again. You try to take more antibiotics, but you've created a superbug by using too much unneccesary antibiotics, and now it can't be cured!",
    "y2n1": "You don't eat the steak, and you don't get sick, but you've created a superbug and you and your family are susceptible to getting the superbug.",
    "n2y1" : "Good job, over the past few days you've avoided creating a powerful superbug, one that could cause your whole family to fall sick. However, you still did something that could cause a superbug. You ate steak that was treated with antibiotics.",
    "n1y1n1" : "Good job, over the past few days you've avoided creating a powerful superbug, one that could cause your whole family to fall sick. However, you still did something that could cause a superbug. Your sister cleaned the room multiple times with antibiotics, whch can contribute to the formation of a superbug.",
    "y1n2" : "Good job, over the past few days you've avoided creating a powerful superbug, one that could cause your whole family to fall sick. However, you still did something that could cause a superbug. You ate unneccessary antibiotics when you actually had a viral infection, not a bacterial one.",
    "n3" : "Good job, you avoided creating a superbug by avoiding unnecessary antibiotics over the past few days!",
    "n1y2" : "You eat the steak happily, but you don't know that in the past few days, you've created a superbug that can infect you and your family.",
    "y1n1y1":"You eat the steak happily, but you don't know that a superbug is brewing inside of you since you've used unneccesary antibiotics twice in the past few days.",
        //Good job, over the past few weeks you've avoided creating a powerful superbug, one that could cause your whole family to fall sick. However, you still did something that could cause a super bug. You ate steak that was treated with antibiotics.
};
let choice1 = [];

function nextPage(){
    //<div class="text-style">
    nextButton = document.getElementById("invNext");
    nextButton.style.display ="block";//used ai overview on google to explain how to ak the button appear
    document.body.style.backgroundImage = "url('images/unsickify.png')";  //vs code ai used for this line
    }

function page2(){
    document.getElementById("timejump").innerHTML = "A few days later...";
    document.getElementById("sim-text").innerHTML = "You are finally better (yay!!!). You decide to start your day.<br>But wait, someone's calling you from another part of your house..."
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("invNext").style.display = "none";
    document.body.style.backgroundImage = "url('images/confuzzlement.png')";  //vs code ai used for this line
    document.getElementById("b3").style.display = "block";
}
function steak(){
    console.log("hi");
    document.body.style.backgroundImage = "url('images/steak.png')";
    document.getElementById("sim-text").innerHTML = "That night, for dinner, your mom prepared steak. As you're helping her set up for dinner, you see that the steak has been treated with antibiotics. Eat or don't eat?";
    document.getElementById("b2y").style.display = "none";
    document.getElementById("b2n").style.display = "none";
    document.getElementById("eat").style.display = "inline-block";/*vscode ai used to do this line and the line below*/
    document.getElementById("noeat").style.display = "inline-block";
}

function update3(button){  
    document.body.style.backgroundImage = "url('images/house.png')";
    if (button === 'yes'){
        choice1.push("yes");
        
    }
    else{
        choice1.push("no");
    }
    console.log(choice1)
    document.getElementById("eat").style.display = "none";
    document.getElementById("noeat").style.display = "none";
    document.getElementById("invNext2").style.display = "none";
    if (choice1[0] === "yes"){
        if (choice1[1] === "yes"){
            if (choice1[2] === "yes"){
                document.getElementById("sim-text").innerHTML = programText["yes3"];
            }
            else { 
                document.getElementById("sim-text").innerHTML = programText["y2n1"];
            }
        }
        else{
            if (choice1[2] === "yes"){
                document.getElementById("sim-text").innerHTML = programText["y1n1y1"];
            }
            else { 
                document.getElementById("sim-text").innerHTML = programText["y1n2"];
        }
        }
    }
    else{
        if (choice1[1] === "yes"){
            if (choice1[2] === "yes"){
                document.getElementById("sim-text").innerHTML = programText["n1y2"];
            }
            else { 
                document.getElementById("sim-text").innerHTML = programText["n1y1n1"];
            }
        }
        else{
            if (choice1[2] === "yes"){
                document.getElementById("sim-text").innerHTML = programText["n2y1"];
            }
            else { 
                document.getElementById("sim-text").innerHTML = programText["n3"];
        }
    }
    document.getElementById("lastbutton").style.display = "block";
    document.body.style.backgroundColor = "#f6dcec";
    // document.getElementById("sim-text").innerHTML = programText[text];
    // document.getElementById("b1").disabled = true;
    // document.getElementById("b2").disabled = true;
    // document.getElementById("b2y").disabled = true;
    // document.getElementById("b2n").disabled = true;
    // if (button === 'yes'){
    //     choice1.push("yes");
        
    // }
    // else{
    //     choice1.push("no");
    // }
    // console.log(choice1)   
    
    // document.getElementById("invNext2").style.display = "block";
}
    }

function page2p2(){
    document.getElementById("timejump").style.display = "none";
    document.body.style.backgroundImage = "url('images/chaoticroom.png')";
    document.getElementById("sim-text").innerHTML = "It's your germaphobic sister, who pleads to disinfect your room 3 times. <br> Do you let your sister disinfect your room?";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b2y").disabled = false;
    document.getElementById("b2n").disabled = false;
    document.getElementById("b2y").style.display = "inline-block";
    document.getElementById("b2n").style.display = "inline-block";
    document.getElementById("invNext").innerHTML = '<button id="invNext" class = "buttons" onclick="steak()">Next</button>';
    
}
function update2(text,button){  
    document.body.style.backgroundImage = "url('images/cleanroom.png')";
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
    console.log(choice1);   
    
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
    console.log(choice1);
    nextPage();
}

function end(){
    document.getElementById("end").style.display = "block";
    document.getElementById("lastbutton").style.display = "none";
    document.getElementById("sim-text").innerHTML = "The diagram below shows the formation of superbugs!";
}