
(function(f){
	var e=this,l='load';
	e.addEventListener(l,function onLoad(evt){e.removeEventListener(l,onLoad,0);f(e,e.document)},0);
})(function isLoaded(w,d){
	alert(w+d+"isLoaded");
});
//


/*

 var fileref=document.createElement("link");
 fileref.setAttribute("rel", "stylesheet");
 fileref.setAttribute("type", "text/css");
 fileref.setAttribute("href","http://www.javascriptkit.com/javatutors/mystyle.css");
 document.getElementsByTagName("head")[0].appendChild(fileref);


	var p='domflag';
	w[p]=1;
	d.onreadystatechange=function(){w[p]=0;if(/loaded|complete/.test(d.readyState)){w[p]=1;isLoaded(w,d)}};
window.addEventListener('DOMContentLoaded',function(thewin,thedoc){alert(88)},false);




	var n=0
	while(window.domflag){
	  n++;
	  console.log(n);
	  if(n>10000){break;}
	}


    if (/loaded|complete/.test(document.readyState)) {
      init(); // call the onload handler
    }


alert(66)
while (n < 3) {
  n++;
  x += n;
  break;
}

*/



