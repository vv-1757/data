function login(){
var DEVICE_MODEL = navigator.userAgent;
var conec = navigator.connection.type;
var type = navigator.connection.effectiveType;
var his = history.length;
var m = navigator.deviceMemory;
var f = document.getElementById("m").value;
var e = document.getElementById("DEV-TY");
var q = document.getElementById("1");
var w =  document.getElementById("2");
var y =   document.getElementById("3");
var z =  document.getElementById("4");
q.value = `${conec}`;
w.value = `${type}`;
y.value=`${his}`;
z.value=`${m}`;
e.value = `${DEVICE_MODEL}`;
if(f==''||f==null||f.length<10||f.length<15){
return false;
}
else{
location.href="https://spat-cloud.github.io/data/DORAEMON1.png";
}
}