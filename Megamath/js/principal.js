
		function codigo(x){
	
			switch(x){
				case 1: 
					var tt= document.getElementById("tt").value;
					var tt2= document.getElementById("tt2").value;
					var x = document.getElementById("temp1").value;
					var y;
					x = parseInt(x);
				
					if(tt=="C" && tt2=="C"){
						document.getElementById("temp2").value = x;
					}else if(tt=="C" && tt2=="F"){
						x = ((1.8 * x) + 32);
						y = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = y;
					}else if(tt=="C" && tt2=="K"){
						x = x + 273.15;
						x = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = x;
					}else if(tt=="F" && tt2=="F"){
						document.getElementById("temp2").value = x;
					}else if (tt=="F" && tt2=="C"){
						x = (x - 32)/ 1.8;
						y = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = y;
					}else if(tt=="F" && tt2=="K"){
						x = ((x -32)/1.8 + 273.15);
						y = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = y;
					}else if(tt=="K" && tt2=="K"){
						document.getElementById("temp2").value = x;
					}
					else if(tt=="K" && tt2=="C"){
						x = x - 273.15;
						x = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = x;
					}else if(tt=="K" && tt2=="F"){
						x = ((x - 273.15)*1.8) + 32;
						y = parseFloat(x.toFixed(2));
						document.getElementById("temp2").value = y;
					}								
				break;	
				
				case 2:  
					//area circulo
					if(document.getElementById("btc")){
						var rc = document.getElementById("rc").value;
						var areacirculo = (Math.pow(rc, 2)*3.14159).toFixed(2);
						document.getElementById("ac").value = areacirculo;
					}
					//area retangulo	
					else if(document.getElementById("btr")){
						var br = document.getElementById("br").value;
						var hr = document.getElementById("hr").value;
						document.getElementById("ar").value = br*hr;
					 }					
					//area quadrado		
					else if(document.getElementById("btq")){
						var lq = document.getElementById("lq").value;
						document.getElementById("aq").value = lq*lq;	
					}		
					//area 	triangulo		
					else {
						var bst = document.getElementById("bst").value; 
						var ht = document.getElementById("ht").value;
						document.getElementById("at").value = (bst*ht)/2;
					}		
				break;	
			
				case 3: 
					var c;
					var x = 0;
					var tb1 = parseInt(document.getElementById("tb1").value);
					var tb2 = parseInt(document.getElementById("tb2").value);
					var html = "";
					
						
					if(document.getElementById("sl").value == "+"){
						html+= "<table>";
						while(x<=tb2){
							c = x+tb1;
							html+= "<tr>";
							html+= "<td align=center>"+tb1+"</td>";
							html+= "<td align=center>"+" + "+"</td>";
							html+= "<td align=center>"+x+"</td>";
							html+= "<td align=center>"+" = "+"</td>";
							html+= "<td align=center>"+ c +"</td>";
							html+= "</tr>";
							x++;		
						}	
					 html+= "</table>";
					 document.getElementById("tb").innerHTML = html;	
					}
					else if(document.getElementById("sl").value == "-"){
						html+= "<table>";	
						while(x<=tb2){
							c = tb1-x;
							html+= "<tr>";
							html+= "<td align=center>"+tb1+"</td>";
							html+= "<td align=center>"+" - "+"</td>";
							html+= "<td align=center>"+x+"</td>";
							html+= "<td align=center>"+" = "+"</td>";
							html+= "<td align=center>"+ c +"</td>";
							html+= "</tr>";
							x++;	
						}	
						html+= "</table>";
						document.getElementById("tb").innerHTML = html;
					}
					else if(document.getElementById("sl").value == "x"){	
						html+= "<table>";
						while(x<=tb2){
							c = x*tb1;
							html+= "<tr>";
							html+= "<td align=center>"+tb1+"</td>";
							html+= "<td align=center>"+" x "+"</td>";
							html+= "<td align=center>"+x+"</td>";
							html+= "<td align=center>"+" = "+"</td>";
							html+= "<td align=center>"+ c +"</td>";
							html+= "</tr>";
							x++;	
						}	
						html+= "</table>";
						document.getElementById("tb").innerHTML = html;
					}
					else {	
						html+= "<table>";
						while(x<=tb2){
							c = tb1/x;
							c = c.toFixed(2);
							html+= "<tr>";
							html+= "<td align=center>"+tb1+"</td>";
							html+= "<td align=center>"+" / "+"</td>";
							html+= "<td align=center>"+x+"</td>";
							html+= "<td align=center>"+" = "+"</td>";
							html+= "<td align=center>"+ c +"</td>";
							html+= "</tr>";
							x++;	
						}	
						html+= "</table>";
						document.getElementById("tb").innerHTML = html;
					}
					break;	
					
					case 4: 
						var s1 = document.getElementById("s1").value;
						var s2 = document.getElementById("s2").value;
						var moeda = document.getElementById("valor").value;
						var x;
						var moeda = parseFloat(moeda);
						 //.toFixed(2);
						//moeda = moeda.replace(".", ","); DESCOBRIR COMO APLICAR PARA TODOS O TOFIXED E REPLACE
				
						if(s1 == "real" && s2 == "real"){
							x = moeda.toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if (s1 == "real" && s2 == "dolar"){
							x = (moeda*0.307239).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if(s1 == "real" && s2 == "euro"){
							x = (moeda*0.264986847).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ","); 
						}
						else if(s1 == "dolar" && s2 == "dolar"){
							x = moeda.toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if(s1 == "dolar" && s2 == "real"){
							x = (moeda*3.25479513).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if(s1 == "dolar" && s2 == "euro"){
							x = (moeda*0.862477899).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if(s1 == "euro" && s2 == "euro"){
							x = moeda.toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else if(s1 == "euro" && s2 == "real"){
							x = (moeda*3.77377221).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						else {
							x = (moeda*1.15945).toFixed(2);
							document.getElementById("recebe_valor").value = x.replace(".", ",");
						}
						break;
				}
		}
