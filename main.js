let programText = {"yes1":"text for yes","no1":"text for no"};

function update(text){
    document.getElementById("sim-text").innerHTML = programText[text];
}

