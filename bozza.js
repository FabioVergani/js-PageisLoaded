<!doctype html><html><head><meta charset="utf-8">
<style>
        body {
            background: #eee;
            color: #333;
        }
        img {
            border: 0;
        }
        a.self {
            font-weight: bold;
            text-decoration: none;
            color: #444;
            border-bottom: 1px solid #aaa
        }
        p, select, label, .blurb, a.turn-off-codemirror {
            font:13px/1.231 arial, sans-serif;
            *font-size:small;
        }
        a.turn-off-codemirror {
            margin-left: 25px;
        }
        button.submit {
            width: 100%;
            padding: 10px 0;
            cursor: pointer;
            margin: 0;
        }
        button.submit em {
            font-size: 11px;
            font-style: normal;
            color: #999;
        }
        label {
            cursor: pointer;
        }
        select {
            width: 220px;
        }
        table#options {
            float: right;
        }
        table#options td {
            vertical-align: top;
            padding-left: 10px;
        }
        #about {
            float: left;
        }
        #about p {
            margin: 0 6px 6px 0;
        }
        li {
            line-height: 150%;
        }
        li.writeme {
            padding-top: 8px;
        }
        #testresults {
            display: none;
            font-family: monaco, "lucida console", "courier new", monospace;
        }
        .CodeMirror {
            border: 1px solid #ccc;
            height: 450px;
            font-size: 90%;
            margin-bottom: 6px;
            background: white;
        }
        p {
            margin-left: 40px;
            margin-right: 40px;
        }
        a {
            white-space: nowrap;
            color: #36d;
        }
        .contributor-sep {
            border-top: 1px solid #ccc;
            padding-top: 8px;
        }
    </style>
<script>





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





//
console.clear();
//
function StylesIn(d){
	var u=[],s=d.styleSheets;
	for(var r,o,i=0,l=s.length;i<l;i++){
		o=s[i];
		r=o.rules||o.cssRules;
		for(var e,t,j=0,n=r.length;j<n;j++){
			e=r[j];
			t=e.selectorText;
			if(t){
				t=/^[^:]+/.exec(t);
				if(t){
					t=t[0].trim();
					//console.log('aa',t,'\n',d.querySelector(t));
					if(t===''||d.querySelector(t)){
						u.push(e);
					}
				}
			}
		}
	};
	return u.map(function(x){return x.selectorText+'{'+ x.style.cssText+'}'}).join('\n');
};
//
//var used=StylesIn(document);
//

//console.log('zz',used);
//
//console.log();






/*
 var fileref=document.createElement("link");
 fileref.setAttribute("rel", "stylesheet");
 fileref.setAttribute("type", "text/css");
 fileref.setAttribute("href","http://www.javascriptkit.com/javatutors/mystyle.css");
 document.getElementsByTagName("head")[0].appendChild(fileref);

*/



</script>
</head>
<body>

  window.addEventListener('load',startClock,false); //W3C
<div id="about">
        <p>
            <a class="self" href="./">Beautify, unpack or deobfuscate JavaScript and HTML, make JSON/JSONP readable, etc.</a>
        </p>
        <p>
            All of the source code is completely free and open, available on the <a href="https://github.com/einars/js-beautify">github</a> under MIT licence,
            <br>and we have a command-line version, python library and a <a href="https://npmjs.org/package/js-beautify">node package</a> as well.
        </p>
    </div>
</body></html>
