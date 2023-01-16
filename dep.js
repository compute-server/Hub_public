const block = {
    timestamp:Date.now(),
    time:[7,12,25],
    deadline:[],
    vid:[],
    loop:0
}
block.time=block.time.map(i=>i * 60)
block.loop=block.time.length
if(!block.deadline.length){
    for(var i=0;i < block.time.length;i++){
        block.deadline.push(block.time[i] + block.timestamp)
    }

}


let list=["Qfz7yqJkPVk:11","QljGCiswqvQ:10","BqqkO0TKwJY:12","N8opEUptggc:14","NffI7nnzP9k:25"]
let vid=[]
function Timestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
}
function update(date, minutes) {
    const dateCopy = new Date(date);
    dateCopy.setMinutes(date.getMinutes() + minutes);
  
    return dateCopy;
}
function Genesis(t){
    t=new Date(t)
    for(var i=0;i < list.length;i++){
        let blocks = {
            num:0,
            id:"",
            dead:0,
        }
        blocks.num = i
        blocks.id=list[i].split(':')[0]
        blocks.dead=Timestamp(update(t,list[i].split(':')[1]))
        vid.push(blocks)
    }


}

function valid(time,dead){
     return time == dead
}

const start=function(){ 
    let time = Date.now() 
    let cf ='verify'
    if(!vid.length){ 
        Genesis(time)
    }else{
        for(var c in vid){
            if(valid(time,vid[c].dead)){
                cf="call"
            }
        }
    }
    console.log(vid,time,cf)
}

setInterval(start,1000)

//const date = new Date(Date.now());
//const dl= addMinutes(date,10)
//console.log(Timestamp(date),Timestamp(dl)); 