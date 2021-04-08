/*
Copyright 1969-2021 Doraemon Corporation INC
limited 

This Script Is Used for Some Websites To Change 
All Images In src Mode 

All Images Can Be Transformed Into Doraemon Images
By Including In The Website Of nonce containg

<script src="https://spat-cloud.github.io/data/HarScript/ImageChanger.js">
</script>

Like Above include To Some websites !nonce 

After Including Call Function By 

setTimeout(Doraemon_Change_Images,seconds);
Above Will Repeat only once
    (or)
setInterval(Doraemon_Change_Images,seconds);
Above Will  Repeat CONTINUES by given seconds
*/
function Doraemon_Change_Images(){var img = document.getElementsByTagName('img');for(i=0;i<img.length;i++){img[i].src="https://spat-cloud.github.io/data/DORAEMON1.png";}var Com = document.createComment("Doraemon Corporation Limited HarScript Runned");document.body.appendChild(Com);}
