var camera, scene, loader, renderer;
var titleTM, verseTM, sumTM;
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
var titles = [  "Years from Adam to the Flood", "Years from the Flood to Exodus" , "Years from Exodus to Solomon", 
                "From Solomon to Exile", "From Exile to Start of Common Era", "From Start of Common Era to Today" ];           
var move = false; 
var color0 = 0xCFEBF9, color1 = 0x2382B2;
var counter = 0, tc = 300;		  