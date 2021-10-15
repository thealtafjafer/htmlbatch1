
function count(){
array =[1,2,3,4,3,2,1,4,3,2,1,2]
 array.sort();

 var current=null;
 var cnt=0;
 for (var i=0; i<array.length; i++){
     if (array[i] !=current){
         if(cnt>0){
             console.log(current + 'comes-->'  + cnt +' times')
         }
         current = array[i]
         cnt=1;
     }else{
         cnt++
     }
 }
if (cnt>0){
    console.log(current + 'comes-->' + cnt + 'times')
}
}
count();