
strexpl = function (s,p){return s.split(p)}
strrem  = function (s,q){return s.replace(q,'');}
strtrim = function (s,n){return s.substring(0,s.length-n);}
strun   = function (s)  {if(s=='undefined'||s==null){return ''}else{return s}}
 
  


var ezDesign = {};
ezDesign.trans = function(s)
{ s=strexpl(s,'(');t=s[0];v=strtrim(s[1],1);strrem(v,1);
 return( 'transition:all '+t+' '+v+'s;-webkit-transition:all '+t+' '+v+'s;-o-transition:all '+t+' '+v+'s;'	)
}


//$('[data-trans]').html($(this).attr('data-trans'))

$( "[data-trans]" ).each(function() {
  _d = $( this ).attr('data-trans');
    $( this ).attr('style',strun($( this ).attr('style'))+';'+ezDesign.trans(_d));
});
