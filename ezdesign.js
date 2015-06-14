// EzDeZ (C) INDIANAYOURSELF.COM (MIT for release)
// (C) Ignacio Ramos 2015 @irfaelo 
// indianayourself.com - @indianayourself

//AUXILIARY FN
strexpl = function (s,p){return s.split(p)}
strrem  = function (s,q){return s.replace(q,'');}
strtrim = function (s,n){return s.substring(0,s.length-n);}
strun   = function (s)  {if(s=='undefined'||s==null){return ''}else{return s}}

//

//IF NOT JQUERY
// Only do anything if jQuery isn't defined
if (typeof jQuery == 'undefined') {
if (typeof $ == 'function') {// warning, global var
thisPageUsingOtherJSLibrary = true;}function getScript(url, success) {var script     = document.createElement('script');script.src = url;var head = document.getElementsByTagName('head')[0],
		done = false;// Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {done = true;// callback function provided as param
				success();
script.onload = script.onreadystatechange = null;
head.removeChild(script);};};head.appendChild(script);};
getScript(SCRIPTURL, function() {if (typeof jQuery=='undefined') {
			// Super failsafe - still somehow failed...
			} else {
// jQuery loaded! Make sure to use .noConflict just in case
			fancyCode();if (thisPageUsingOtherJSLibrary) {
				// Run your jQuery Code
} else {
				// Use .noConflict(), then run your jQuery Code
}}});
} else { 
//DO



 
  


var ezDez = {};
ezDez.trans = function(s)
{ s=strexpl(s,'(');t=s[0];v=strtrim(s[1],1);strrem(v,1);
 return( 'transition:all '+t+' '+v+'s;-webkit-transition:all '+t+' '+v+'s;-o-transition:all '+t+' '+v+'s;'	)}

ezDez.radius = function(n)
{ return '-webkit-border-radius: '+n+';-moz-border-radius: '+n+';border-radius: '+n+';' }

ezDez.blur = function(n)
{ return "-webkit-filter: blur("+n+"px); filter: blur("+n+"px); filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='"+n+"');" }


//ATTR MANIPULATION
$( "[data-trans]" ).each(function() {
  _d = $( this ).attr('data-trans');
    $( this ).attr('style',strun($( this ).attr('style'))+';'+ezDez.trans(_d));
});

$( "[data-radius]" ).each(function() {
  _d = $( this ).attr('data-radius'); 
    $( this ).attr('style',strun($( this ).attr('style'))+';'+ezDez.radius(_d));
});

$( "[data-blur]" ).each(function() {
  _d = $( this ).attr('data-blur'); 
    $( this ).attr('style',strun($( this ).attr('style'))+';'+ezDez.blur(_d));
});

}//NOTJQ ELSE
