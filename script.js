
var x="X";
var o="O";

var num=[];
var compnum=[];
var three=[];

three[0]= ['k1','h1','e1']; three[1]= ['k1','g1','c1']; 
three[2]= ['h1','g1','f1'];
three[3]= ['i1','g1','e1']; three[4]= ['e1','d1','c1'];
three[5]= ['k1','j1','i1']; three[6]= ['c1','f1','i1'];
three[7]= ['d1','g1','j1']; 

function colorTemp() {
  document.getElementById("aab").style.color = "white";
}

function colorOff() {
  document.getElementById("aab").style.color = "white";
}

function colorTemp2() {
  document.getElementById("aac").style.color = "white";
  
}

function colorOff2() {
  document.getElementById("aac").style.color = "white";
  
}

function changexo(){
    x="O";
    o="X";
                    }


function tic(tac){
         
          
          num.push(tac);           
            document.getElementById(tac).innerHTML=x;
          if(num.length==5) {
            setTimeout(function(){
                num=[]; compnum=[]; three=[]; 
                 $(this).scrollTop(0); location.reload(true);
            alert("DRAW!!!  Click OK to replay");}, 400);
                             }         
                  
    comp();
                   }

function comp(){        
         
          if(num.length>2){ z();}                  
           
                  
               if(num[0]=== 'g1'){ xcenter();} else {ocenter();}
                                           
           function xcenter(){
             document.getElementById('k1').innerHTML=o;
             compnum.push('k1'); 
               if ( num[1]=== 'c1') {        
                                         
                      document.getElementById('e1').innerHTML=o;                                                               return compnum.push('e1');      
                                          }                    
                if ( num[1]=== 'd1') { 
                       document.getElementById('j1').innerHTML=o;                                                               return compnum.push('j1');
                                           } 
              if ( num[1]=== 'e1') {
                        document.getElementById('i1').innerHTML=o;                                                               return compnum.push('i1');
                                           }
             if ( num[1]=== 'h1') {
                       document.getElementById('f1').innerHTML=o;                                                               return compnum.push('f1');  
                                           }
             if ( num[1]=== 'j1') {
                        document.getElementById('d1').innerHTML=o;                                                               return compnum.push('d1');
                                           }
             if ( num[1]=== 'i1') {
                        document.getElementById('e1').innerHTML=o;                                                               return compnum.push('e1');
                                           }
             if ( num[1]=== 'f1') {
                        document.getElementById('h1').innerHTML=o;                                                               return compnum.push('h1');
                                           }
             
                                    
                                    
                                         }             
             
                                  
                                      
                            
        function ocenter() {
           document.getElementById('g1').innerHTML=o;
                compnum.push('g1'); 
                                  }
             if ( num[0]=== 'c1' && num[1]=== 'd1') {
                 document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                   }
            if ( num[0]=== 'c1' && num[1]=== 'e1') {
                document.getElementById('d1').innerHTML=o;
                 compnum.push('d1');
                                   }
            if ( num[0]=== 'c1' && num[1]=== 'h1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                   }
            if ( num[0]=== 'c1' && num[1]=== 'k1') {
               document.getElementById('h1').innerHTML=o;
                 compnum.push('h1');  
                                   }
            if ( num[0]=== 'c1' && num[1]=== 'j1') {
               document.getElementById('i1').innerHTML=o;
                 compnum.push('i1');
                                   }
            if ( num[0]=== 'c1' && num[1]=== 'i1') {
               document.getElementById('f1').innerHTML=o;
                 compnum.push('f1');
                                    }
            if ( num[0]=== 'c1' && num[1]=== 'f1') {
                document.getElementById('i1').innerHTML=o;
                 compnum.push('i1');
                                   }
            if ( num[0]=== 'd1' && num[1]=== 'e1') {
                document.getElementById('c1').innerHTML=o;
                 compnum.push('c1');
                                   }
            if ( num[0]=== 'd1' && num[1]=== 'h1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1'); 
                                   }
            if ( num[0]=== 'd1' && num[1]=== 'k1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                   }
            if ( num[0]=== 'd1' && num[1]=== 'j1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                   }
            if ( num[0]=== 'd1' && num[1]=== 'i1') {
                document.getElementById('f1').innerHTML=o;
                 compnum.push('f1');
                                   } 
            if ( num[0]=== 'd1' && num[1]=== 'f1') {
                document.getElementById('c1').innerHTML=o;
                 compnum.push('c1');
                                  }
            if ( num[0]=== 'd1' && num[1]=== 'c1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'h1') {
                document.getElementById('k1').innerHTML=o;
                 compnum.push('k1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'k1') {
                document.getElementById('h1').innerHTML=o;
                 compnum.push('h1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'j1') {
                document.getElementById('k1').innerHTML=o;
                 compnum.push('k1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'i1') {
                document.getElementById('f1').innerHTML=o;
                 compnum.push('f1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'f1') {
                document.getElementById('c1').innerHTML=o;
                 compnum.push('c1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'c1') {
                document.getElementById('d1').innerHTML=o;
                 compnum.push('d1');
                                  }
            if ( num[0]=== 'e1' && num[1]=== 'd1') {
                document.getElementById('c1').innerHTML=o;
                 compnum.push('c1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'k1') {
                document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'j1') {
                 document.getElementById('k1').innerHTML=o;
                 compnum.push('k1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'i1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'f1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'c1') {
                  document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'd1') {
                  document.getElementById('e1').innerHTML=o;
                 compnum.push('e1');
                                  }
            if ( num[0]=== 'h1' && num[1]=== 'e1') {
                 document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'j1') {
                 document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                  } 
            if ( num[0]=== 'k1' && num[1]=== 'i1') {
                  document.getElementById('j1').innerHTML=o;
                 compnum.push('j1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'f1') {
                  document.getElementById('j1').innerHTML=o;
                 compnum.push('1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'c1') {
                  document.getElementById('f1').innerHTML=o;
                 compnum.push('f1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'd1') {
                  document.getElementById('e1').innerHTML=o;
                 compnum.push('e1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'e1') {
                  document.getElementById('h1').innerHTML=o;
                 compnum.push('h1'); 
                                  }
            if ( num[0]=== 'k1' && num[1]=== 'h1') {
                  document.getElementById('e1').innerHTML=o;
                 compnum.push('e1'); 
                                  }
            if ( num[0]=== 'j1' && num[1]=== 'i1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'f1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'c1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'd1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'e1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'h1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                 }
            if ( num[0]=== 'j1' && num[1]=== 'k1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'f1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'c1') {
                  document.getElementById('f1').innerHTML=o;
                 compnum.push('f1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'd1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'e1') {
                  document.getElementById('d1').innerHTML=o;
                 compnum.push('d1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'h1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'k1') {
                  document.getElementById('j1').innerHTML=o;
                 compnum.push('j1'); 
                                 }
            if ( num[0]=== 'i1' && num[1]=== 'j1') {
                  document.getElementById('k1').innerHTML=o;
                 compnum.push('k1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'c1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'd1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'e1') {
                  document.getElementById('d1').innerHTML=o;
                 compnum.push('d1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'h1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'k1') {
                  document.getElementById('j1').innerHTML=o;
                 compnum.push('j1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'j1') {
                  document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'i1') {
                  document.getElementById('c1').innerHTML=o;
                 compnum.push('c1'); 
                                 }
            if ( num[0]=== 'f1' && num[1]=== 'c1') {
                   document.getElementById('i1').innerHTML=o;
                 compnum.push('i1'); 
                                 }
                
            
        
   
                                   
        
  function z(){ 
              var buz=true;           
               three.forEach(find);
              
               function find(item) { 
                
                  var t=0;
                   for (var ii=0; ii<item.length; ii++) {
                        if (num.indexOf(item[ii]) != -1) { t+=1;}
                        if (t>1) { 
                          for (var iii=0; iii<item.length; iii++) {
                            if (num.indexOf(item[iii]) == -1 && compnum.indexOf(item[iii]) == -1)                          {
                             document.getElementById(item[iii]).innerHTML=o; 
                                                            compnum.push(item[iii]);
                                                     return buz=false;
                                                                                                                                                     }     
                
                    }     
                                      
                                }        
                            
                
           }    
                                   
               }    
                    
                               

                  
              if(buz){ last();}
                  
                    function last(){                
                      for(var jj=0; jj<three.length; jj++){
                        for (var kk=0; kk<three[jj].length; kk++){
                            if ( num.indexOf(three[jj][kk]) == -1 && compnum.indexOf(three[jj][kk]) == -1){
                                document.getElementById(three[jj][kk]).innerHTML=o; 
                                                            compnum.push(three[jj][kk]);
                                                            return  buz=false;
                                                           
                            }  
                        }   
                    }   return buz=false; 
                                     }
                       }
           }                                             
         
                                                               
                    
                                                   
                                                                                   
             
                                                                                 
                                      
                                                         
                                                     
                                                     
                                                     
                



                         
             
                         
                    
                  
                                                                                  
                
  
                                                  
          
                            


