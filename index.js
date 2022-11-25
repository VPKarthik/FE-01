var x = document.getElementById("user1");
var y = document.getElementById("phoneNumber");
// x.addEventListener('keyup',function(event){
//     document.getElementById('nam').innerHTML="Name :"+event.target.value;
// })
// y.addEventListener('keyup',function(event){
//     document.getElementById('mob').innerHTML="Mob :"+event.target.value;
// })
var vgp="";
var chp="";
var chkp="";
var vgkp="";
var wbt="";

var totalPrice=0;
///////
function apply(idp,quan,pric){
    console.log(idp);
    console.log(quan);
    console.log(pric);
    var ar=document.querySelector('#area');
    console.log(ar);
    
var item=document.getElementById(idp);
console.log(item);
    //item.addEventListener('change',function(event){
      //  item=event.target.value;
      item=item.value;
        console.log(item);
        switch(item){
            
        case 'Chicken Pizza':
            
            var cost=700;
            //calculate(cost);
            var QuantityNode=document.getElementById(quan);
            QuantityNode.addEventListener('keyup',function(event){
               var totpr=event.target.value*cost;
                
                document.getElementById(pric).value=totpr;
                if(event.target.value!=0){
                chp += "Chicken Pizza"+"       "+event.target.value +"        "+document.getElementById(pric).value+" Rs\r";
                totalPrice+=totpr;
                }
            });
            
            break;
        
        case 'Vegetable Pizza':
            
            var cost=500;
            var QuantityNode=document.getElementById(quan);
            QuantityNode.addEventListener('keyup',function(event){
               var totpr=event.target.value*cost;
                
                document.getElementById(pric).value=totpr;
                if(event.target.value!=0){
                    vgp += "Vegetable Pizza"+"     "+event.target.value +"        "+document.getElementById(pric).value+" Rs\r";
                    totalPrice+=totpr;    
                }
                
            });
            
            break;
        case 'Chicken Kottu':
            var cost=300;
            var QuantityNode=document.getElementById(quan);
            QuantityNode.addEventListener('keyup',function(event){
               var totpr=event.target.value*cost;
                
                document.getElementById(pric).value=totpr;
                if(event.target.value!=0){
                    chkp += "Chicken Kottu"+"       "+event.target.value + "        "+document.getElementById(pric).value+" Rs\r";
                    totalPrice+=totpr;    
                }
            });
            break;
        case 'Vegetable Kottu':
            var cost=200;
            var QuantityNode=document.getElementById(quan);
            QuantityNode.addEventListener('keyup',function(event){
               var totpr=event.target.value*cost;
                
                document.getElementById(pric).value=totpr;
                if(event.target.value!=0){
                    vgkp += "Vegetable Kottu"+"     "+event.target.value + "        "+document.getElementById(pric).value+" Rs\r";
                    totalPrice+=totpr;    
                }
            });
            break;
        case 'Water Bottle':
            var cost=70;
            var QuantityNode=document.getElementById(quan);
            QuantityNode.addEventListener('keyup',function(event){
               var totpr=event.target.value*cost;
                
                document.getElementById(pric).value=totpr;
                if(event.target.value!=0){
                    wbt += "Water Bottle"+"        "+event.target.value + "         "+document.getElementById(pric).value+" Rs\r";
                    totalPrice+=totpr;   
                }
            });
            break;
    }
  //  })
}
    // function calculate(cost){
    //     var QuantityNode=document.getElementById(item.f);
    // QuantityNode.addEventListener('keyup',function(event){
    //    var totpr=event.target.value*cost;
        
    //     document.getElementById(pric).value=totpr;
    // });
    // }//end fun

//var item=document.getElementById(id);
// var total;
// function createBill(){
//     document.write("<center><h1>Thank You Please Pay Your Bill</h1></center>");
// document.write("<h3>Name: "+x.value+"</h3><br>");
// document.write("Mob: "+y.value+"<br>");
// document.write("<h3>Your Bill</h3>");
// document.write("<table width='50%' id='table'><th>Food Item</th><th>Quantity</th><th>Price</th></table>")
// }
// var flag=true;
function createBill(){

    // if(flag==true){
        
    console.log(vgp);
    var ar=document.getElementById('area');
    ar.value="NAME : "+x.value + "\r"+ "PHONE : "+ y.value+"\r";
    ar.value +="\r";
    ar.value+="Item"+"             "+"Quantity"+"    "+"Price(Rs)"+"\r";
    // ar.value=+"ITEM       "+"QUANTITY       "+"PRICE \r"

    ar.value += vgp+chp+chkp+vgkp+wbt;
ar.value +="#############TOTAL PRICE##############\r Rs.";
ar.value+=totalPrice+" /- only";   
    // }
    // else{
    //     alert("Already generated Bill");
    // }
    // flag=false;
}
// function clear(){
//     // var ar=document.querySelector('#area');
//     document.getElementById("area").value = "";
// }


