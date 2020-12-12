        var cookiesvalue;
        var obj = {};
        var d =0;
         ReadCookie();
         var flag  = 0;
         var a,b;
        function fun(){

            
           a =  setInterval(fun1, 3000);
            var i ;
            function fun1(){
                 i = Math.floor(Math.random() * 20);
                document.getElementsByClassName('mouse-img')[i].style.display = 'block';
            }

            function fun2(){

                document.getElementsByClassName('mouse-img')[i].style.display = 'none';
                flag++;
                // console.log(flag);
                if (flag == 140) {
                  clearInterval(a);
                  clearInterval(b);
                document.getElementById('over').style.display = 'block';
                document.getElementById('div-over').style.display = 'none';
                }
            }

           b =  setInterval(fun2,2000);

        }
        var j = 0;
       function myFunction(){
            j+=10;
            document.getElementById('out').innerHTML = "Your Score is = " + j;
              console.log(j);
              if (j>d) {
             document.cookie = "Highscore=" + j;
             alert("You win and Now you on Top spot" + j);
            // var Highscore = "High_score";
          }
          else{

          }
           
            
            
        }
      
        
        // cookiesvalue  = j;
        // document.cookie = "Highscore=" + cookiesvalue;
      

  
 

function ReadCookie() {
               var allcookies = document.cookie;
                console.log(allcookies);
               
               // Get all the cookies pairs in an array
               cookiearray = allcookies.split('; ');
               console.log(cookiearray);
               
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++) {
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  obj[name]=value;
                  // document.getElementById('ut').innerHTML =  "Highscore=" + value;
                  // document.write ("Key is : " + name + " and Value is : " + value);
               }
               console.log(obj);
               if(obj.Highscore == undefined){
                document.cookie = "Highscore=" + 0;
               }

                document.getElementById('ut').innerHTML =  "Highscore=" + obj.Highscore;
                d = obj.Highscore;
            }

//       function setCookie() {
//     var high = j;
//   document.cookie = "Highscore=" +high;
//   console.log(document.cookie);
// }
// function getCookie(){
//     var array1 = document.cookie;
//     array1.split("=");
//     var array2[1] = array2.split("=");
    
//     if (array2[1] == 0) {document.getElementById('n6').innerHTML = localStorage.getItem("item6");
//         setCookie();
//     }
//     else if(j > array2[1]){document.getElementById('n6').innerHTML = localStorage.getItem("item6");
//         setCookie();
//     }
//     else{
//         document.getElementById('ut'),innerHTML = array2[1];
//     }
// }