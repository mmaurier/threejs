var camera, scene, loader, renderer;
var titleTM, verseTM, sumTM, totalTM;
var title0TM, title1TM, title2TM, title3TM, title4TM, title5TM, title6TM;
var gt0TM, gt1TM, gt2TM, gt3TM, gt4TM, gt5TM, gt6TM;
var grandTotals = ["1656","857","516","393","586","2018","6026"];
var sums0 = [ "130" , 
             "105  +   130  =  235" , 
             "90   +   235  =  325" , 
             "70   +   325  =  395" , 
             "65   +   395  =  460" , 
             "162  +   460  =  622" , 
             "65   +   622  =  687" , 
             "187  +   687  =  874" , 
             "182  +   874  = 1056" , 
             "600  +  1056  = 1656" ];    
var sums1 = [ "2" , 
              "35  +  2    =  37" , 
              "30  +  37   =  67" , 
              "34  +  67   =  101" , 
              "30  +  101  =  131" , 
              "32  +  131  =  163" , 
              "30  +  163  =  193" , 
              "30  +  193  =  222" , 
              "29  +  222  =  352" , 
              "100 +  352  =  452" , 
              "60  +  452  =  512" , 
              "91  +  512  =  603" , 
              "39  +  603  =  642", 
              "215 +  642  =  857" ];
var sums2 = [ "480" , 
              "7   +  480  =  487" ,  
              "29  +  487  =  516" ];  
var sums3 = [ "17" , 
              "3   +  17  =  20" ,  
              "41  +  20  =  61",
              "25  +  61  =  85",
              "8  +  86  =  94",
              "1  +  94  =  95",
              "6  +  95  =  101",
              "40  +  101  =  141",
              "29  +  141  =  170",
              "52  +  170  =  222",
              "16  +  222  =  238",
              "16  +  238  =  254",
              "29  +  254  =  283",
              "55  +  283  =  338",
              "2   +  338  =  340",
              "31  +  340  =  371",
              "3 month  +  371 = 371",
              "11  +  371   =  382",
              "3 month  +  382 = 382",
              "11  +  382  =  393" ];  
var sums4 = ["587","-1 + 587 = 586","2018", "6026"];  

var total0 = ["130 years","235 years","325 years","395 years","460 years","622 years","687 years","874 years","1056 years","1656 years"];
var total1 = ["2 years","37 years","67 years","101 years","131 years","163 years","193 years","222 years","352 years","452 years","512 years","603 years","642 years","857 years"];
var total2 = ["480 years","487 years","516 years"];
var total3 = ["17 years","20 years","61 years","85 years","94 years","95 years","101 years","141 years","170 years","222 years","238 years","254 years","283 years","338 years","340 years","371 years","371 years","382 years","382 years","393 years"];             
var total4 = ["587 years","586 years","2018"];          
                        
var titles = [  "Years from Adam to the Flood:", 
                "Years from the Flood to Exodus:" , 
                "Years from Exodus to Solomon:", 
                "From King Solomon to the Exile:", 
                "From the Exile to Common Era:", 
                "From Start of Common Era to Today:",
                "Years from Adam until Today:",
                "Years Since the Creation of Adam:" ];           
var fadeVerseSum = false; 
var fadeSum = true;
var freezeTotal = false;
var fadeTitleTotal = false;

var color0 = 0xCFEBF9, color1 = 0x2382B2;
var counter = 0;
var tlIdx = 0;

var cArr = [100,500,600,1000,
            1100,1500,1600,2000,
            2100,2500,2600,3000,
            3100,3500,3600,4000,
            4100,4500,4600,5000,
            5100,5500,5600,6000,
            6100,6500,6600,7000,
            7100,7500,7600,8000,
            8100,8500,8600,9000,
            9100,9500,9600,10000,
            10100,10500,10600,11000,
            11100,11500,11600,12000,
            12100,12500,12600,13000,
            13100,13500,13600,14000,
            14100,14500,14600,15000,
            15100,15500,15600,16000,
            16100,16500,16600,17000,
            17100,17500,17600,18000,
            18100,18500,18600,19000,
            19100,19500,19600,20000,
            20100,20500,20600,21000,
            21100,21500,21600,22000,
            22100,22500,22600,23000,
            23100,23500,23600,24000,
            24100,24500,24600,25000,
            25100,25500,25600,26000,
            100,500,600,27000,100,500,600,1000,100,500,600,1000,100,500,600,1000,
            100,500,600,1000,100,500,600,1000,100,500,600,1000,100,500,600,1000,100,500,600,1000];