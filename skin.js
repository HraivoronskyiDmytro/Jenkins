
jQuery( document ).ready(function() {   //create links  after suit names (for all launchers with 'SUITE') 
	jQuery("#ecp_SUITE").before("<div id='containerForButtons'></div>");
	jQuery("#ecp_NODES").before("<div><a id='allNodes' href='javascript:allNodes(1)'>Select All</a></div>"); 		//added link 'Select All' for nodes name 
    jQuery("#allNodes").before("<div><a id='noneNodes'<a href='javascript:allNodes(0)'>Select None</a></div>"); 		//added link 'Select None' for nodes name 
		
	$("containerForButtons").insert("<div style=\"width:20%; display:inline-block; vertical-align: top; padding: 5px;\"><a id='allSuit' href='javascript:allSuite(1)'>All</a></div>"); // added link 'All' for suits	$("containerForButtons").insert("<div style=\"width:20%; display:inline-block; vertical-align: top; padding: 5px;\"><a id='noneSuit'<a href='javascript:allSuite(0)'>None</a></div>"); 	
	$("containerForButtons").insert("<div style=\"width:20%; display:inline-block; vertical-align: top; padding: 5px;\"><a id='noneSuit'<a href='javascript:allSuite(0)'>None</a></div>"); 	//added link 'None' for suits
	addButtons();
});
function addButtons(){
	
	jQuery("[value*='Pixels']:first").each(function(){
		$("allSuit").insert("<div><a id='pixelsSuit' href='javascript:specialSuitePixels()' >Check All Pixels</a></div>");	//added link 'Check All Pixels' for suits
	});
	
	jQuery("[value*='Forms']:first").each(function(){
		$("allSuit").insert("<div><a id='FormsSuit' href='javascript:specialSuiteForms()' >Check All Forms</a></div>");	//added link 'Check All Forms' for suits
	});
	
	jQuery("[value*='_prod']:first").each(function(){
		$("allSuit").insert("<div><a id='NotProd' href='javascript:suitsNotProd()'>UnCheck Only Prod suits</a></div>"); //unCheck Only Prod suits
		$("allSuit").insert("<div><a id='Stage' href='javascript:suitsSelectStage()'>Check ALL Stage suits</a></div>"); //check ALL Stage suits
	});
	
	jQuery("[value*='_prod']:first").each(function(){
	});
	
	jQuery("[value*='_1000u']:first").each(function(){
		$("allSuit").insert("<div><a id='USBrand!1000U' href='javascript:suitsFCFNot1000U(\"US\")'>Check US w/o 1000u suits</a></div>");// check US w/o 1000u suits
		$("allSuit").insert("<div><a id='CABrand!1000U' href='javascript:suitsFCFNot1000U(\"CA\")'>Check CA w/o 1000u suits</a></div>");// check CA w/o 1000u suits
		$("allSuit").insert("<div><a id='AUBrand!1000U' href='javascript:suitsFCFNot1000U(\"AU\")'>Check AU w/o 1000u suits</a></div>");// check AU w/o 1000u suits
	});
	
	jQuery("[value*='_US']:first").each(function(){
		$("noneSuit").insert("<div><a id='USBrand' href='javascript:suitsByBrand(\"US\")'>Check US suits</a></div>");// check US suits
	});
	
	jQuery("[value*='_CA']:first").each(function(){
		$("noneSuit").insert("<div><a id='CABrand' href='javascript:suitsByBrand(\"CA\")'>Check CA suits</a></div>"); //check CA suits
	});
	
	jQuery("[value*='_UK']:first").each(function(){
		$("noneSuit").insert("<div><a id='UKBrand' href='javascript:suitsByBrand(\"UK\")'>Check UK suits</a></div>"); //check UK suits
	});
	
	jQuery("[value*='_EU']:first").each(function(){
		$("noneSuit").insert("<div><a id='EUBrand' href='javascript:suitsByBrand(\"EU\")'>Check EU suits</a></div>"); //check EU suits
	});
	
	jQuery("[value*='_AU']:first").each(function(){
		$("noneSuit").insert("<div><a id='AUBrand' href='javascript:suitsByBrand(\"AU\")'>Check AU suits</a></div>"); //check AU suits
	});
}

function suitsSelectStage(){ //check ALL Stage suits
	allSuite(1);
	jQuery("[value*='_prod']").each(function(){
		this.checked=0;
	});
}

function suitsNotProd(){ //unCheck Only Prod suits
	jQuery("[value*='_prod']").each(function(){
		this.checked=0;
	});
}

function suitsFCFNot1000U(brand){ // check brand w/o 1000u suits
	suitsByBrand(brand);
	jQuery("[value*='_1000u']").each(function(){
		this.checked=0;
	});
}

function suitsByBrand(brand){
	jQuery("[value*='_" + brand + "']").each(function(){
		this.checked=1;
	});
}

function allNodes(val){ 				//for all and none nodes
  jQuery('#ecp_NODES').find("input").each(function(){
         this.checked = (val == 1)
  });
}


function allSuite(val){ 				//for all and none suit
  jQuery('#ecp_SUITE').find("input").each(function(){
	 this.checked = (val == 1)
  });
}

function specialSuitePixels(){ 				//for all pixels suits
	jQuery("[value*='Pixels']").each(function(){
	 this.checked = 1
	  
  });
 
}

function specialSuiteForms(){ 				//for all forms suits
	jQuery("[value*='Forms']").each(function(){
	  this.checked = 1
  });
 
}


 
}








