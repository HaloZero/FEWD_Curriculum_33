var pies = ["Cherry","Pumpkin","Banana", "Rhubarb";

$("body").append(
	$("<h2>").text("There are "+cakes.length+" total pies")
);

pies.forEach(
	function(element,index){
		if (element = "Cherry") {
			$("body").append(index+1+") "+element+": Yum!<br>");
		} else if (element === "Rhubarb") {
			$("body").append(index+1+") "+element+": Yuck<br>");
		}
		} else if (element === "Banana" || element == "Pumpkin") {
			$("body").append(index+1+") "+element+": meh<br>");
		}
	}
);