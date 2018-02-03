var camera, scene, loader, renderer;
var titleTM, verseTM, sumTM, totalTM;
var sums0 = [ "130 years" , 
             "105  +   130  =  235 years" , 
             "90   +   235  =  325 years" , 
             "70   +   325  =  395 years" , 
             "65   +   395  =  460 years" , 
             "162  +   460  =  622 years" , 
             "65   +   622  =  687 years" , 
             "187  +   687  =  874 years" , 
             "182  +   874  = 1056 years" , 
             "600  +  1056  = 1656 years" ];    
var sums1 = [ "2 years" , 
              "35  +  2    =  37 years" , 
              "30  +  37   =  67 years" , 
              "34  +  67   =  101 years" , 
              "30  +  101  =  131 years" , 
              "32  +  131  =  163 years" , 
              "30  +  163  =  193 years" , 
              "30  +  193  =  222 years" , 
              "29  +  222  =  352 years" , 
              "100 +  352  =  452 years" , 
              "60  +  452  =  512 years" , 
              "91  +  512  =  603 years" , 
              "39  +  603  =  642 years", 
              "215 +  642  =  857 years" ];
var sums2 = [ "480 years" , 
              "7   +  480  =  487 years" ,  
              "29  +  487  =  516 years" ];  
var sums3 = [ "17 years" , 
              "3   +  17  =  20 years" ,  
              "41  +  20  =  61 years",
              "25  +  61  =  85 years",
              "8  +  86  =  94 years",
              "1  +  94  =  95 years",
              "6  +  95  =  101 years",
              "40  +  101  =  141 years",
              "29  +  141  =  170 years",
              "52  +  170  =  222 years",
              "16  +  222  =  238 years",
              "16  +  238  =  254 years",
              "29  +  254  =  283 years",
              "55  +  283  =  338 years",
              "2   +  338  =  340 years",
              "31  +  340  =  371 years",
              "3 month  +  371 = 371 years",
              "11  +  371   =  382 years",
              "3 month  +  382 = 382 years",
              "11  +  382  =  393 years" ];  
var total0 = ["130 years","235 years","325 years","395 years","460 years","622 years","687 years","874 years","1056 years","1656 years"];
var total1 = ["2 years","37 years","67 years","101 years","131 years","163 years","193 years","222 years","352 years","452 years","512 years","603 years","642 years","857 years"];
var total2 = ["480 years","487 years","516 years"];
var total3 = ["17 years","20 years","61 years","85 years","94 years","95 years","101 years","141 years","170 years","222 years","238 years","254 years","283 years","338 years","340 years","371 years","371 years","382 years","382 years","393 years"];             
var total4 = ["587 years","586 years","2018"];          

var sums4 = ["587 years","-1 + 587 = 586 years","2018"];                          
var titles = [  "Years from Adam to the Flood:", "Years from the Flood to Exodus:" , "Years from Exodus to Solomon:", 
                "From Solomon to Exile:", "From Exile to Start of Common Era:", "From Start of Common Era to Today:" ];           
var move = false; 
var moveSum = true;
var color0 = 0xCFEBF9, color1 = 0x2382B2;
var counter = 0, tc = 300;      