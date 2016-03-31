$(document).ready(function(){
	var content = "<table>"
	var size = 8;
	/*var width = ($(document).width())*/;
	/*var height = Math.floor($(document).height()/8);*/
	/*$('.brick').css({"width":"85px","height":"85px"});*/
	for(j=0;j<size;j++)
	{
		content += "<tr>"
		for(i=0; i<size; i++)
		{
	    	content += '<td>' + 
	    	'<div class="brick"><p><br>'+j+' '+i+'</p></div>'
	    	+'</td>';
		}
		content+="</tr>";
	}
	content += "</table>"
	$('.wrapper').append(content);
	$('.brick').click(function(){
		$(this).hide();
	});
	
})