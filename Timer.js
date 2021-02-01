function time(){
var x,y,z,a;
x = new Date();
y = x.getHours();
z = x.getMinutes();
if(y == "22"&&z == "00"){
   location.replace("https://spat-cloud.github.io/data/Night.html");
}
else if(y =="05"&&z == "00"){
    location.replace("https://spat-cloud.github.io/MULTI/Table v1.1.html");
}
else if(y =="10"&&z == "00"){
location.replace("https://spat-cloud.github.io/data/Busy.html");
}
}
