$(document).ready(function(){
	var size = 8;
	function getRandomColor()
	{
		var letters = "0123456789ABCDEF".split('');
		var color = '#';
		for (i=0;i<6;i++)
		{
			color += letters[Math.floor(Math.random()*16)];
		}
		return color;
	}
	function createGrid(size_)
	{
		var content = "<table>"
		$('body').append('<div class="wrapper"></div>');
		for(j=0;j<size_;j++)
		{
			content += "<tr>";
			for(var i=0; i<size_; i++)
			{
		    	content += '<td>' + 
		    	'<div class="brick" style="width: '+Math.floor(683/size_)+'px;height: '+Math.floor(683/size_)+'px;"><p><br>'+j+' '+i+'</p></div>'
		    	+'</td>';
		    	/*$('.brick').css({});*/
		    	
			}
			content+="</tr>";
		}
		content += "</table>"
		$('.wrapper').append(content);
		$('.brick').mouseenter(function(){
			$('.brick').css("background-color",getRandomColor());		
		});
		$('.brick').mouseleave(function(){
			$('.brick').css("background-color","cyan");
		});
	}
	createGrid(size);
	/*var width = ($(document).width())*/;
	/*var height = Math.floor($(document).height()/8);*/
	/*$('.brick').css({"width":"85px","height":"85px"});*/
	$('input').click(function(){
		var number = prompt("Enter size of grid");
		$('.wrapper').remove();
		createGrid(parseInt(number));
	});
})