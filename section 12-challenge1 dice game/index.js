
//step4 change dice
function main(){
var num1=createRandomNumber();
var num2=createRandomNumber();
document.getElementById("img1").setAttribute("src","images\\dice"+num1+".png");
document.getElementById("img2").setAttribute("src","images\\dice"+num2+".png");
changeTitle(num1,num2);
}

//step 3 create a random number
function createRandomNumber(){
    var randomNumber=Math.floor((Math.random()*6+1));
    return randomNumber;
}


function changeTitle(num1,num2){
    var title=document.querySelector("h1");
    if(num1>num2)
        title.innerHTML="Player 1 Wins!";
    else if(num1<num2)
        title.innerHTML="Player 2 Wins!";
    else title.innerHTML="Draw!";
    }