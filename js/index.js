let obj= {
    day:document.querySelector('.day'),
    hou:document.querySelector('.hou'),
    min:document.querySelector('.min'),
    sec:document.querySelector('.sec'),
    newYear:new Date('Jan 01,2021 00:00:00').getTime(),
   
}


setInterval(()=>{
    let time=new Date().getTime()
    let count = obj.newYear-time;
    


    let mili=1000;
    let min=mili*60;
    let hou=min*60;
    let dan=hou*24;

    let d=Math.floor(count/(dan))
    let h= Math.floor((count%(dan))/(hou))
    let m= Math.floor((count%(hou))/min)
    let s= Math.floor((count%(min))/(mili))
   obj.day.textContent=d;
   obj.hou.textContent=h;
   obj.min.textContent=m;
   obj.sec.textContent=s;
 
  
  
   if (obj.sec.textContent<10) {
    obj.sec.textContent='0'+obj.sec.textContent;
}else if (obj.min.textContent<10) {
    obj.min.textContent='0'+obj.min.textContent;
}else if (obj.hou.textContent<10) {
    obj.hou.textContent='0'+obj.hou.textContent;
}else if (obj.day.textContent<10) {
    obj.day.textContent='0'+obj.day.textContent;
}
   



},1000)