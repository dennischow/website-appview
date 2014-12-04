console.log('functions');
console.log('utilities');



/*******************************************************************************
Initialize SVG Blur
*******************************************************************************/
var svgFilters = {
	blurRange : 20,
	init : function(){
		$("BODY").append('<svg class="blur" aria-hidden="true" style="display: block; position: absolute; height: 0; width: 0; z-index: -9999; outline: none; border: none; background: none;">' + this.svgBlur() + '</svg>');
		$("HEAD").append('<style type="text/css" media="screen">' + this.svgStyle() + '</style>');
		console.log('SVG Blur Appended');
	},
	svgStyle : function(){
		var definations = '';

		// Element Definations
		definations += '.list-table .description-col{ -webkit-filter:url(#blur-effect-5); filter:url(#blur-effect-5); }';
		definations += '.list-table .description-col:hover{ -webkit-filter:none; filter:none; }';

		return definations;

	},
	svgBlur : function(){
		var filter = '';

		// Generating Blur Filter
		for(var i=0; i<svgFilters.blurRange; i++){
			var num = i + 1;
			filter += '<filter id="blur-effect-' + num + '">';
			filter += '<feGaussianBlur in="SourceGraphic" stdDeviation="' + num + '">';
			filter += '</filter>';
		}

		return filter;
	}
}
svgFilters.init(); // Execute 