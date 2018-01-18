		function adam2flood() {	
			var camera, scene, renderer;
			var geometry, shape, material, loader;
			// adam to flood
			var gen5_3TM, gen5_6TM, gen5_9TM, gen5_12TM, gen5_15TM, gen5_18TM, title1TM;
			var gen5_21TM, gen5_25TM, gen5_28TM, gen7_6TM;
			var sums = ["130 years" , "235 years" , "325 years" , "395 years" , "460 years" , "622 years" , "687 years" , "874 years" , "1056 years" , "1656 years"]
			var sum130TM, sum235TM, sum325TM, sum395TM, sum460TM, sum622TM, sum687TM, sum874TM, sum1056TM, sum1656TM;
			// flood to exodus
			var gen11_10TM, gen11_12TM, gen11_14TM, gen11_16TM, gen11_18TM, gen11_20TM, title2TM;
			var gen11_22TM, gen11_24TM, gen11_32TM, acts7_4TM,  gen12_1TM,  gen12_4TM,  terah_1TM;			
			var gen21_5TM,  gen25_26TM, gen41_46TM, gen41_47TM, gen45_4TM,  gen45_6TM,  gen45_7TM,  gen47_9TM;
			var sums1 = ["2 years" , "37 years" , "67 years" , "101 years" , "131 years" , "163 years" , "193 years" , "222 years" , "352 years" , "452 years" , "512 years"];
			var sum2TM, sum37TM, sum67TM, sum101TM, sum131TM, sum163TM, sum193TM, sum222TM, sum352TM, sum452TM, sum512TM;
			
			var states = [false, false, false, false, false, false, false, false, false, false, false,
						  false, false, false, false, false, false, false, false, false, false, false, false,
						  false, false, false, false, false, false, false, false, false, false, false, false,
						  false, false, false, false, false, false, false, false, false, false, false, false];						  
			// var first = false, second = false, third = false, fourth = false, fifth = false; 
			// var sixth = false, seventh = false, eigth = false, nineth = false, tenth = false; 
			var color = 0xCFEBF9, color1 = 0x2382B2;
			var counter = 0;

			init0();
			init();

			function init0() {
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 0, 0, 2000 );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x000507 );				
			}

			function init() {

				loader = new THREE.FontLoader();
				loader.load( 
					'fonts/gentilis_regular.typeface.json',
					function ( font ) {

						material = new THREE.MeshBasicMaterial( { color: color1 } );
						shape = font.generateShapes( "001 From Adam to Flood = ", 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );

						title1TM = new THREE.Mesh( geometry, material );
						title1TM.position.set(-700,400,-1000);
						// buildMesh( title1TM, "Years from Adam to Flood = ", color1 );
						scene.add( title1TM );

						material = new THREE.MeshBasicMaterial( { color: color } );
						shape = font.generateShapes( gen5_3, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_3TM = new THREE.Mesh( geometry, material );
						gen5_3TM.position.set(-700,200,-1000);
						scene.add( gen5_3TM );

						// text mesh for verses
						shape = font.generateShapes( gen5_6, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_6TM = new THREE.Mesh( geometry, material );
						gen5_6TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_9, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_9TM = new THREE.Mesh( geometry, material );
						gen5_9TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_12, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_12TM = new THREE.Mesh( geometry, material );
						gen5_12TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_15, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_15TM = new THREE.Mesh( geometry, material );
						gen5_15TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_18, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_18TM = new THREE.Mesh( geometry, material );
						gen5_18TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_21, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_21TM = new THREE.Mesh( geometry, material );
						gen5_21TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_25, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_25TM = new THREE.Mesh( geometry, material );
						gen5_25TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen5_28, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen5_28TM = new THREE.Mesh( geometry, material );
						gen5_28TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen7_6, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen7_6TM = new THREE.Mesh( geometry, material );
						gen7_6TM.position.set(-700,200,-1000);																		
						// text mesh for sums
						shape = font.generateShapes( sums[0], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum130TM = new THREE.Mesh( geometry, material );
						sum130TM.position.set(160,400,-1000);
						scene.add( sum130TM );

						shape = font.generateShapes( sums[1], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum235TM = new THREE.Mesh( geometry, material );
						sum235TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[2], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum325TM = new THREE.Mesh( geometry, material );
						sum325TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[3], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum395TM = new THREE.Mesh( geometry, material );
						sum395TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[4], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum460TM = new THREE.Mesh( geometry, material );
						sum460TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[5], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum622TM = new THREE.Mesh( geometry, material );
						sum622TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[6], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum687TM = new THREE.Mesh( geometry, material );
						sum687TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[7], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum874TM = new THREE.Mesh( geometry, material );
						sum874TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[8], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum1056TM = new THREE.Mesh( geometry, material );
						sum1056TM.position.set(160,400,-1000);

						shape = font.generateShapes( sums[9], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum1656TM = new THREE.Mesh( geometry, material );
						sum1656TM.position.set(160,400,-1000);

						// flood to exodus
						material = new THREE.MeshBasicMaterial( { color: color1 } );
						shape = font.generateShapes( "Years from Flood to Exodus = ", 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );

						title2TM = new THREE.Mesh( geometry, material );
						title2TM.position.set(-700,400,-1000);

						// text mesh for verses
						material = new THREE.MeshBasicMaterial( { color: color } );
						shape = font.generateShapes( gen11_10, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_10TM = new THREE.Mesh( geometry, material );
						gen11_10TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_12, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_12TM = new THREE.Mesh( geometry, material );
						gen11_12TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_14, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_14TM = new THREE.Mesh( geometry, material );
						gen11_14TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_16, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_16TM = new THREE.Mesh( geometry, material );
						gen11_16TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_18, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_18TM = new THREE.Mesh( geometry, material );
						gen11_18TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_20, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_20TM = new THREE.Mesh( geometry, material );
						gen11_20TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_22, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_22TM = new THREE.Mesh( geometry, material );
						gen11_22TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_24, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_24TM = new THREE.Mesh( geometry, material );
						gen11_24TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen11_32, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen11_32TM = new THREE.Mesh( geometry, material );
						gen11_32TM.position.set(-700,200,-1000);

						shape = font.generateShapes( acts7_4, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						acts7_4TM = new THREE.Mesh( geometry, material );
						acts7_4TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen12_1, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen12_1TM = new THREE.Mesh( geometry, material );
						gen12_1TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen12_4, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen12_4TM = new THREE.Mesh( geometry, material );
						gen12_4TM.position.set(-700,200,-1000);

						shape = font.generateShapes( terah_1, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						terah_1TM = new THREE.Mesh( geometry, material );
						terah_1TM.position.set(-700,200,-1000);



						shape = font.generateShapes( gen21_5, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen21_5TM = new THREE.Mesh( geometry, material );
						gen21_5TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen25_26, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen25_26TM = new THREE.Mesh( geometry, material );
						gen25_26TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen41_46, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen41_46TM = new THREE.Mesh( geometry, material );
						gen41_46TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen41_47, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen41_47TM = new THREE.Mesh( geometry, material );
						gen41_47TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen45_4, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen45_4TM = new THREE.Mesh( geometry, material );
						gen45_4TM.position.set(-700,200,-1000);						

						shape = font.generateShapes( gen45_6, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen45_6TM = new THREE.Mesh( geometry, material );
						gen45_6TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen45_7, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen45_7TM = new THREE.Mesh( geometry, material );
						gen45_7TM.position.set(-700,200,-1000);

						shape = font.generateShapes( gen47_9, 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						gen47_9TM = new THREE.Mesh( geometry, material );
						gen47_9TM.position.set(-700,200,-1000);

						// text mesh for sums
						material = new THREE.MeshBasicMaterial( { color: color } );
						shape = font.generateShapes( sums1[0], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum2TM = new THREE.Mesh( geometry, material );
						sum2TM.position.set(160,400,-1000);										

						shape = font.generateShapes( sums1[1], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum37TM = new THREE.Mesh( geometry, material );
						sum37TM.position.set(160,400,-1000);							

						shape = font.generateShapes( sums1[2], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum67TM = new THREE.Mesh( geometry, material );
						sum67TM.position.set(160,400,-1000);										

						shape = font.generateShapes( sums1[3], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum101TM = new THREE.Mesh( geometry, material );
						sum101TM.position.set(160,400,-1000);	

						shape = font.generateShapes( sums1[4], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum131TM = new THREE.Mesh( geometry, material );
						sum131TM.position.set(160,400,-1000);										

						shape = font.generateShapes( sums1[5], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum163TM = new THREE.Mesh( geometry, material );
						sum163TM.position.set(160,400,-1000);							

						shape = font.generateShapes( sums1[6], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum193TM = new THREE.Mesh( geometry, material );
						sum193TM.position.set(160,400,-1000);										

						shape = font.generateShapes( sums1[7], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum222TM = new THREE.Mesh( geometry, material );
						sum222TM.position.set(160,400,-1000);	

						shape = font.generateShapes( sums1[8], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum352TM = new THREE.Mesh( geometry, material );
						sum352TM.position.set(160,400,-1000);										

						shape = font.generateShapes( sums1[9], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum452TM = new THREE.Mesh( geometry, material );
						sum452TM.position.set(160,400,-1000);	

						shape = font.generateShapes( sums1[10], 50, 2 );
						geometry = new THREE.ShapeGeometry( shape );
						sum512TM = new THREE.Mesh( geometry, material );
						sum512TM.position.set(160,400,-1000);

						requestAnimationFrame( render );

						function render() {

							// counter++;
							counter += 2;
							if( counter === 300 ) { 
								states[0] = true; 
							} else if ( counter == 500 ) { 
								states[0] = false; 
								scene.remove( gen5_3TM ); scene.remove( sum130TM ); 
								scene.add( gen5_6TM ); scene.add( sum235TM );
							} else if ( counter == 800 ) {
								states[1] = true;
							} else if ( counter == 1000 ) {  
								states[1] = false; 
								scene.remove( gen5_6TM ); scene.remove( sum235TM );
								scene.add( gen5_9TM ); scene.add( sum325TM );						
							} else if ( counter == 1300 ) {
								states[2] = true;
							} else if ( counter == 1500 ) {  
								states[2] = false; 
								scene.remove( gen5_9TM ); scene.remove( sum325TM );
								scene.add( gen5_12TM ); scene.add( sum395TM );
							} else if ( counter == 1800 ) {
								states[3] = true;
							} else if ( counter == 2000 ) {  
								states[3] = false; 
								scene.remove( gen5_12TM ); scene.remove( sum395TM );
								scene.add( gen5_15TM ); scene.add( sum460TM );
							} else if ( counter == 2300 ) {
								states[4] = true;
							} else if ( counter == 2500 ) {  
								states[4] = false; 
								scene.remove( gen5_15TM ); scene.remove( sum460TM );
								scene.add( gen5_18TM ); scene.add( sum622TM );
							} else if ( counter == 2800 ) {
								states[5] = true;
							} else if ( counter == 3000 ) {  
								states[5] = false; 
								scene.remove( gen5_18TM ); scene.remove( sum622TM );
								scene.add( gen5_21TM ); scene.add( sum687TM );
							} else if ( counter == 3300 ) {
								states[6] = true;
							} else if ( counter == 3500 ) {  
								states[6] = false; 
								scene.remove( gen5_21TM ); scene.remove( sum687TM );
								scene.add( gen5_25TM ); scene.add( sum874TM );
							} else if ( counter == 3800 ) {
								states[7] = true;
							} else if ( counter == 4000 ) {  
								states[7] = false; 
								scene.remove( gen5_25TM ); scene.remove( sum874TM );
								scene.add( gen5_28TM );  scene.add( sum1056TM ); 
							} else if ( counter == 4300 ) {
								states[8] = true;
							} else if ( counter == 4500 ) {  
								states[8] = false; 
								scene.remove( gen5_28TM ); scene.remove( sum1056TM ); 
								scene.add( gen7_6TM ); scene.add( sum1656TM ); 
							} else if ( counter == 4800 ) {
								states[9] = true;
							} else if ( counter == 5000 ) {  
								states[9] = false; 
								scene.remove( gen7_6TM ); 								
							} else if (counter == 5200) {
								scene.remove( title1TM);
							} else if (counter == 5400) {
								scene.remove( sum1656TM );
							// flooo to exodus
							} else if (counter == 5600) {
								scene.add( title2TM ); 
								scene.add(gen11_10TM); scene.add( sum2TM );	
							} else if ( counter == 6000 ) {
								states[10] = true;
							} else if ( counter == 6200 ) {  
								states[10] = false; 
								scene.remove( gen11_10TM ); scene.remove( sum2TM );
								scene.add(gen11_12TM); scene.add( sum37TM );	
							} else if ( counter == 6500 ) {
								states[11] = true;
							} else if ( counter == 6700 ) {  
								states[11] = false; 
								scene.remove( gen11_12TM ); scene.remove( sum37TM );	
								scene.add(gen11_14TM); scene.add( sum67TM );	
							} else if ( counter == 7000 ) {
								states[12] = true;
							} else if ( counter == 7200 ) {  
								states[12] = false; 
								scene.remove( gen11_14TM ); scene.remove( sum67TM );	
								scene.add(gen11_16TM); scene.add( sum101TM );	
							} else if ( counter == 7500 ) {
								states[13] = true;
							} else if ( counter == 7700 ) {  
								states[13] = false; 
								scene.remove( gen11_16TM ); scene.remove( sum101TM );	
								scene.add(gen11_18TM); scene.add( sum131TM );	
							} else if ( counter == 8000 ) {
								states[14] = true;
							} else if ( counter == 8200 ) {  
								states[14] = false; 
								scene.remove( gen11_18TM ); scene.remove( sum131TM );	
								scene.add(gen11_20TM); scene.add( sum163TM );	
							} else if ( counter == 8500 ) {
								states[15] = true;
							} else if ( counter == 8700 ) {  
								states[15] = false; 
								scene.remove( gen11_20TM ); scene.remove( sum163TM );	
								scene.add(gen11_22TM); scene.add( sum193TM );	 
							} else if ( counter == 9000 ) {
								states[16] = true;
							} else if ( counter == 9200 ) {  
								states[16] = false; 
								scene.remove( gen11_22TM ); scene.remove( sum193TM );	
								scene.add( gen11_24TM ); scene.add( sum222TM );	 
							} else if ( counter == 9500 ) {
								states[17] = true; 
							} else if ( counter == 9700 ) {  
								states[17] = false; 
								scene.remove( gen11_24TM ); //scene.remove( sum193TM );	
								scene.add( gen11_32TM ); //scene.add( sum222TM );	 
							} else if ( counter == 10000 ) {
								states[18] = true;
							} else if ( counter == 10200 ) {  
								states[18] = false; 
								scene.remove( gen11_32TM ); //scene.remove( sum193TM );	
								scene.add( acts7_4TM ); //scene.add( sum222TM );	 
							} else if ( counter == 10500 ) {
								states[19] = true;
							} else if ( counter == 10700 ) {  
								states[19] = false; 
								scene.remove( acts7_4TM ); //scene.remove( sum193TM );	
								scene.add( gen12_1TM ); //scene.add( sum222TM );
							} else if ( counter == 11000 ) {
								states[20] = true;
							} else if ( counter == 11200 ) {  
								states[20] = false; 
								scene.remove( gen12_1TM ); //scene.remove( sum193TM );	
								scene.add( gen12_4TM ); //scene.add( sum222TM );	 	 
							} else if ( counter == 11500 ) {
								states[21] = true;
							} else if ( counter == 11700 ) {  
								states[21] = false; 
								scene.remove( gen12_4TM ); scene.remove( sum222TM );	
								scene.add( terah_1TM ); scene.add( sum352TM );	 
							} else if ( counter == 12000 ) {
								states[22] = true;
							} else if ( counter == 12200 ) {  
								states[22] = false; 
								scene.remove( terah_1TM ); // scene.remove( sum222TM );	
								scene.add( gen21_5TM ); // scene.add( sum352TM );	 
							} else if ( counter == 12500 ) {
								states[23] = true;
							} else if ( counter == 12700 ) {  
								states[23] = false; 
								scene.remove( gen21_5TM ); // scene.remove( sum222TM );	
								scene.add( gen25_26TM ); // scene.add( sum352TM );	 
							} else if ( counter == 13000 ) {
								states[24] = true;
							} else if ( counter == 13200 ) {  
								states[24] = false; 
								scene.remove( gen25_26TM ); // scene.remove( sum222TM );	
								scene.add( gen41_46TM ); // scene.add( sum352TM );	 
							} else if ( counter == 13500 ) {
								states[25] = true;
							} else if ( counter == 13700 ) {  
								states[25] = false; 
								scene.remove( gen41_46TM ); // scene.remove( sum222TM );	
								scene.add( gen41_47TM ); // scene.add( sum352TM );	 							
							} else if ( counter == 14000 ) {
								states[26] = true;
							} else if ( counter == 14200 ) {  
								states[26] = false; 
								scene.remove( gen41_47TM ); // scene.remove( sum222TM );	
								scene.add( gen45_4TM ); // scene.add( sum352TM );	 
							} else if ( counter == 14500 ) {
								states[27] = true;
							} else if ( counter == 14700 ) {  
								states[27] = false; 
								scene.remove( gen45_4TM ); // scene.remove( sum222TM );	
								scene.add( gen45_6TM ); // scene.add( sum352TM );	 
							} else if ( counter == 15000 ) {
								states[28] = true;
							} else if ( counter == 15200 ) {  
								states[28] = false; 
								scene.remove( gen45_6TM ); // scene.remove( sum222TM );	
								scene.add( gen45_7TM );  // scene.add( sum352TM );	 
							} else if ( counter == 15500 ) {
								states[29] = true;
							} else if ( counter == 15700 ) {  
								states[29] = false; 
								scene.remove( gen45_7TM ); // scene.remove( sum222TM );	
								scene.add( gen47_9TM ); // scene.add( sum352TM );	 
							} else if ( counter == 16000 ) {
								// states[30] = true;
							} else if ( counter == 16200 ) {  
								// states[30] = false; 
								// scene.remove( gen47_9TM ); scene.remove( sum222TM );	
								// scene.add(  ); scene.add( sum352TM );	 
							}

							if ( states[0] ) { gen5_3TM.position.x += -7; }
							else if ( states[1] ) { gen5_6TM.position.x += -7; }
							else if ( states[2] ) { gen5_9TM.position.x += -7; }
							else if ( states[3] ) { gen5_12TM.position.x += -7; }
							else if ( states[4] ) { gen5_15TM.position.x += -7; }
							else if ( states[5] ) { gen5_18TM.position.x += -7; }
							else if ( states[6] ) { gen5_21TM.position.x += -7; }
							else if ( states[7] ) { gen5_25TM.position.x += -7; }
							else if ( states[8] ) { gen5_28TM.position.x += -7; }
							else if ( states[9] ) { gen7_6TM.position.x += -7; }

							else if ( states[10] ) { gen11_10TM.position.x += -7; }
							else if ( states[11] ) { gen11_12TM.position.x += -7; }
							else if ( states[12] ) { gen11_14TM.position.x += -7; }
							else if ( states[13] ) { gen11_16TM.position.x += -7; }
							else if ( states[14] ) { gen11_18TM.position.x += -7; }
							else if ( states[15] ) { gen11_20TM.position.x += -7; }
							else if ( states[16] ) { gen11_22TM.position.x += -7; }
							else if ( states[17] ) { gen11_24TM.position.x += -7; }
							else if ( states[18] ) { gen11_32TM.position.x += -7; }
							else if ( states[19] ) { acts7_4TM.position.x += -7; }

							else if ( states[20] ) { gen12_1TM.position.x += -7; }
							else if ( states[21] ) { gen12_4TM.position.x += -7; }
							else if ( states[22] ) { terah_1TM.position.x += -7; }
							else if ( states[23] ) { gen21_5TM.position.x += -7; }
							else if ( states[24] ) { gen25_26TM.position.x += -7; }
							else if ( states[25] ) { gen41_46TM.position.x += -7; }
							else if ( states[26] ) { gen41_47TM.position.x += -7; }
							else if ( states[27] ) { gen45_4TM.position.x += -7; }
							else if ( states[28] ) { gen45_6TM.position.x += -7; }
							else if ( states[29] ) { gen45_7TM.position.x += -7; }

							else if ( states[30] ) { gen47_9TM.position.x += -7; }

							else if ( states[31] ) { gen47_9TM.position.x += -7; }
							else if ( states[32] ) { gen21_5TM.position.x += -7; }
							else if ( states[33] ) { gen25_26TM.position.x += -7; }
							else if ( states[34] ) { gen41_46TM.position.x += -7; }
							else if ( states[35] ) { gen41_47TM.position.x += -7; }
							else if ( states[36] ) { gen45_4TM.position.x += -7; }
							else if ( states[37] ) { gen45_6TM.position.x += -7; }							

							// render scene
							renderer.render( scene, camera );
							requestAnimationFrame( render );
						}
					} // end anonymous function	
				); //end fontloader function

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
			} // end init
		}