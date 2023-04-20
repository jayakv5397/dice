function rolldice() {


    var x = document.getElementById("dice-audio"); 
    x.play();
    
    $("#current-dice").fadeToggle().fadeToggle();
    var num1 = Math.floor(Math.random()*6)+1;
    var comment = "./images/dice"+num1+".png";
    document.getElementById("current-dice").setAttribute("src",comment);
    

    $("#current-dices").fadeToggle().fadeToggle();
    var num2 = Math.floor(Math.random()*6)+1;
    var comment2 = "./images/dice"+num2+".png";
    document.getElementById("current-dices").setAttribute("src",comment2);

    var total = num1+num2;

    // if (num1>num2) {
    //     $("h1").text("Player 1 wins");
    // } else if (num2>num1){
    //     $("h1").text("Player 2 wins")
    // }
    // else{
    //     $("h1").text("it's tie")
    // }

    $("h1").text("Total is "+total);


}



function six() {
    
    $("#current-dice").fadeToggle().fadeToggle();
    $("#current-dices").fadeToggle().fadeToggle();

    document.getElementById("current-dices").setAttribute("src","./images/dice6.png");
    document.getElementById("current-dice").setAttribute("src","./images/dice6.png");
    $("h1").text("Total is 12");
}
