// JavaScript File
/*function hunger() {
    document.getElementById("happinessScore").innerHTML = "hello";
} */

var getSmart = 5;
var getHealthy = 5;
var getHungry = 5;

function hunger(){
    var interval = setInterval(decrease, 1000);
    document.getElementById("happinessScore").innerHTML = getHungry;
    document.getElementById("healthScore").innerHTML = getHealthy;
    document.getElementById("knowledgeScore").innerHTML = getSmart;
function decrease(){
    
    if(getHungry >= 1){
        getHungry = getHungry -1;
        document.getElementById("happinessScore").innerHTML = getHungry;
        document.getElementById("healthScore").innerHTML = getHealthy;
    }
    if(getHungry == 0){
       document.getElementById("happinessScore").innerHTML = "\u2639";
       document.getElementById("healthScore").innerHTML = "\u2639";
       document.getElementById("knowledgeScore").innerHTML = "\u2639";
       document.getElementById("speech").innerHTML= "GAME OVER";
    }
    if(getHealthy == 0){
        document.getElementById("happinessScore").innerHTML = "\u2639";
        document.getElementById("healthScore").innerHTML = "\u2639";
        document.getElementById("knowledgeScore").innerHTML = "\u2639";
       document.getElementById("speech").innerHTML= "GAME OVER";
    }
    if(getHealthy >= 1){
        getHealthy = getHealthy -1;
      document.getElementById("healthScore").innerHTML = getHealthy;
      document.getElementById("happinessScore").innerHTML = getHungry;
    }
    if(getSmart >= 1){
         getSmart = getSmart -1;
        document.getElementById("happinessScore").innerHTML = getHungry;
        document.getElementById("knowledgeScore").innerHTML = getSmart;
    }
    if(getSmart == 0){
      document.getElementById("happinessScore").innerHTML = "\u2639";
      document.getElementById("knowledgeScore").innerHTML = "\u2639";
      document.getElementById("healthScore").innerHTML = "\u2639";
      document.getElementById("speech").innerHTML= "GAME OVER";
    }
    }
}
function learn(){
    getSmart = getSmart + 3;
    getHungry = getHungry + 3
    document.getElementById("happinessScore").innerHTML = getHungry;
    document.getElementById("knowledgeScore").innerHTML = getSmart;
}
function play(){
    getHungry = getHungry + 4;
    getHealthy = getHealthy + 4;
    document.getElementById("happinessScore").innerHTML = getHungry;
    document.getElementById("healthScore").innerHTML = getHealthy;
}
function exersize(){
    getHealthy = getHealthy + 3;
    getSmart = getSmart + 3;
    document.getElementById("healthScore").innerHTML = getHealthy;
    document.getElementById("knowledgeScore").innerHTML = getSmart;
}

function food(){
    getHungry = getHungry + 3;
    getHealthy = getHealthy + 3;
    document.getElementById("happinessScore").innerHTML = getHungry;
    document.getElementById("healthScore").innerHTML = getHealthy;
}

function response(){

var randomResponse =['Feed Me!!','Teach me something','Excrcise me','Play with me!'];
randomResponse[Math.floor(Math.random()*randomResponse.length)];
//document.getElementById("speech").innerHTML= "GAME OVER";

if randonResponse =['Feed Me!!']

}
function start(){
    hunger();
    response();
}