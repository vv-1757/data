function time(){
var x,y,z,a;
x = new Date();
y = x.getHours();
z = x.getMinutes();
if(y == "15"&&z == "58"){
    alert("No Time Is Approxy 3:** PM");
}
else if(y =="16"&&z == "01"){
    alert("Time Is Aprox 4:**");
}
}