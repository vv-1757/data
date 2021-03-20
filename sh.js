/*

Copyright © 1989 DORAEMON.NETDORM
ALL RIGHTS RESERVED

- Database from scce.ac.in
- Some Data May Unable to fetch
- fetch error
IP : 301.059.671.757
DNS SERVER : 301.059.671.757
PORT : 2842

*/
function show(){let o=document.getElementById("1").value;let x = o.toUpperCase();let s=`https://scce.ac.in/n0/${x}.jpg`;var i=document.getElementById('2');i.src=s;var tt = document.getElementById("TR");tt.style.display="block";i.style.display="block";var dg = document.getElementById("dis");if(x==""||x=="null"){
tt.style.display="none";i.style.display="none";dg.style.display="none";}else if(x=="19N01A05A8"){var name =`VIP`;var f = `VIP`;var re = `<b>Name: </b><font color="green">${name}</font><hr> <b>Father :</b> <font color="green">${f} </font><hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else if(x.charAt(7)=="1"||x.charAt(7)=="2"||x.charAt(7)=="3"||x.charAt(7)=="4"){
var msg = document.getElementById("Bad400");
msg.style.display="block";
tt.style.display="none";i.style.display="none";dg.style.display="none";
}
else if(x=="19N01A05A5"){var name =`THOTA BHARATH`;var f = `THOTA SHANKARAIAH`;var re = `<b>Name: </b>${name}<hr> <b>Father :</b> ${f}<hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else if(x=="19N01A0567"){var name =`MARUPAKA AJAY`;var f = `MARUPAKA SAILU`;var re = `<b>Name: </b>${name}<hr> <b>Father :</b> ${f}<hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else if(x=="19N01A0571"){var name =`MUDDASANI PRANAYVAS`;var f = `MARUPAKA SRINIVAS`;var re = `<b>Name: </b>${name}<hr> <b>Father :</b> ${f}<hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else if(x=="19N01A0578"){var name =`NARAYANAPURAM SHIVA KRISHNA`;var f = `NARAYANAPURAM MALLAIAH`;var re = `<b>Name: </b>${name}<hr> <b>Father :</b> ${f}<hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else if(x=="19N01A05B5"){var name =`VENISHETTI RAMU`;var f = `VENISHETTI SRINIVAS`;var re = `<b>Name: </b>${name}<hr> <b>Father :</b> ${f}<hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}
else{var name = `DORAEMON.NETDORM:fetch Error`;var f = `DORAEMON.NETDORM:fetch error`;var re = `<b>Name: </b><font color="red">${name}</font><hr> <b>Father :</b><font color="red"> ${f}</font><hr> <center>Year 1-1`;var det = document.getElementById("Details");det.innerHTML=`${re}`;dg.style.display="block";}}function Close(){var stt = navigator.onLine;var cf = document.getElementById("NoI");
if(stt="true"){cf.style.display="none";}else{cf.style.display="block";}}
function Doraemon_Server_Status(){var t= new Date();var h = t.getHours();var m = t.getMinutes();
if(h>=22){location.replace("https://spat-cloud.github.io/data/TimedOut.html");}}function Throw(){var e = document.getElementById("ERROR");e.style.color="red";e.style.fontSize="30px";e.innerHTML="ERROR WHILE LOADING";setTimeout(() => e.style.display="none",5000);}

