function Doraemon_Time_Count(){
var time = 10;
var text = "Created Download Link";
var d = setInterval(count,1000);
function count(){
time--;
if(time==0){
clearInterval(d);
document.getElementById("Doraemon-Server-Create-Download-Link").style.display="block";
document.getElementById("Doraemon-Time").style.display="none";
}
document.getElementById("Doraemon-Time").innerHTML = `Creating Download Link In ${time} seconds`;
}
}