// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_glass_parallax(f,m,n){var g=jQuery;var j=g(this);var k=f.parallax||0.25;var l=g("<div>").css({position:"absolute",display:"none",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_glass_parallax").appendTo(n);var i=!f.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(i){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(r){i=0}}function u(e){return Math.round(e*1000)/1000}function c(x,y,z){var e=new Date()*1;var w=function(){var A=(new Date()*1-e)/y;if(A>=1){x(1);cancelAnimationFrame(w);if(z){z()}}else{x(A);requestAnimationFrame(w)}};w()}var v=g("<div>").css({position:"absolute",left:0,top:0,overflow:"hidden",width:"100%",height:"100%",transform:"translate3d(0,0,0)",zIndex:1}).appendTo(l);var t=v.clone().appendTo(l);var s=v.clone().appendTo(l);var d;var q=v.clone().appendTo(l).css({zIndex:0});this.go=function(D,B,y){var e=g(m.get(B));e={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")};y=y?1:-1;var F=g(m.get(B)).clone().css(e).appendTo(v);var A=g(m.get(D)).clone().css(e).appendTo(t);var x=g(m.get(D)).clone().css(e).appendTo(s.css({width:"20%"}));if(y==-1){g(s).css({left:"auto",right:0});g(x).css({left:"auto",right:0})}else{g(s).css({left:0,right:"auto"});g(x).css({left:0,right:"auto"})}var E=(n.width()||f.width)*1.3;var C=n.height()||f.height;var z;if(i){if(!d){d=g("<canvas>").css({position:"absolute",left:0,top:0}).attr({width:e.width,height:e.height}).appendTo(q)}d.css(e).attr({width:e.width,height:e.height});z=p(g(m.get(D)),e,10,d.get(0))}if(!i||!z){i=0;p(F,e,8,q)}c(function(H){H=g.easing.swing(H);var M=u(y*H*E),G=u(y*(-E+H*E-(1-H)*E*0.2)),K=u(y*(-E*1.4+H*(E*1.4+E/1.3))),w=u(-y*E*k*H),I=u(y*E*k*(1-H)),J=u(-y*E*(k+0.4)*H),L=u(y*(-E*0.2+H*E*0.4));if(f.support.transform){v.css("transform","translate3d("+M+"px,0,0)");F.css("transform","translate3d("+w+"px,0,0)");t.css("transform","translate3d("+G+"px,0,0)");A.css("transform","translate3d("+I+"px,0,0)");s.css("transform","translate3d("+K+"px,0,0)");x.css("transform","translate3d("+J+"px,0,0)");q.css("transform","translate3d("+L+"px,0,0)")}else{v.css("left",M);F.css("margin-left",w);t.css("left",G);A.css("margin-left",I);s.css("left",K);x.css("margin-left",J);q.css("left",L)}},f.duration,function(){l.hide();F.remove();A.remove();x.remove();j.trigger("effectEnd")})};function p(D,B,C,w){var G=(parseInt(D.parent().css("z-index"))||0)+1;if(i){var J=w.getContext("2d");J.drawImage(D.get(0),0,0,B.width,B.height);if(!a(J,0,0,w.width,w.height,C)){return 0}return g(w)}var K=g("<div></div>").css({position:"absolute","z-index":G,left:0,top:0}).css(B).appendTo(w);var I=(Math.sqrt(5)+1)/2;var z=1-I/2;for(var A=0;z*A<C;A++){var E=Math.PI*I*A;var e=(z*A+1);var H=e*Math.cos(E);var F=e*Math.sin(E);g(document.createElement("img")).attr("src",D.attr("src")).css({opacity:1/(A/1.8+1),position:"absolute","z-index":G,left:Math.round(H)+"px",top:Math.round(F)+"px",width:"100%",height:"100%"}).appendTo(K)}return K}var h=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var o=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function a(an,V,T,w,z,ae){if(isNaN(ae)||ae<1){return}ae|=0;var ai;try{ai=an.getImageData(V,T,w,z)}catch(am){console.log("error:unable to access image data: "+am);return false}var D=ai.data;var ac,ab,ak,ah,K,N,H,B,C,S,I,U,Q,Y,ad,L,G,M,O,X;var al=ae+ae+1;var Z=w<<2;var J=w-1;var ag=z-1;var F=ae+1;var af=F*(F+1)/2;var W=new b();var R=W;for(ak=1;ak<al;ak++){R=R.next=new b();if(ak==F){var E=R}}R.next=W;var aj=null;var aa=null;H=N=0;var P=h[ae];var A=o[ae];for(ab=0;ab<z;ab++){Y=ad=L=B=C=S=0;I=F*(G=D[N]);U=F*(M=D[N+1]);Q=F*(O=D[N+2]);B+=af*G;C+=af*M;S+=af*O;R=W;for(ak=0;ak<F;ak++){R.r=G;R.g=M;R.b=O;R=R.next}for(ak=1;ak<F;ak++){ah=N+((J<ak?J:ak)<<2);B+=(R.r=(G=D[ah]))*(X=F-ak);C+=(R.g=(M=D[ah+1]))*X;S+=(R.b=(O=D[ah+2]))*X;Y+=G;ad+=M;L+=O;R=R.next}aj=W;aa=E;for(ac=0;ac<w;ac++){D[N]=(B*P)>>A;D[N+1]=(C*P)>>A;D[N+2]=(S*P)>>A;B-=I;C-=U;S-=Q;I-=aj.r;U-=aj.g;Q-=aj.b;ah=(H+((ah=ac+ae+1)<J?ah:J))<<2;Y+=(aj.r=D[ah]);ad+=(aj.g=D[ah+1]);L+=(aj.b=D[ah+2]);B+=Y;C+=ad;S+=L;aj=aj.next;I+=(G=aa.r);U+=(M=aa.g);Q+=(O=aa.b);Y-=G;ad-=M;L-=O;aa=aa.next;N+=4}H+=w}for(ac=0;ac<w;ac++){ad=L=Y=C=S=B=0;N=ac<<2;I=F*(G=D[N]);U=F*(M=D[N+1]);Q=F*(O=D[N+2]);B+=af*G;C+=af*M;S+=af*O;R=W;for(ak=0;ak<F;ak++){R.r=G;R.g=M;R.b=O;R=R.next}K=w;for(ak=1;ak<=ae;ak++){N=(K+ac)<<2;B+=(R.r=(G=D[N]))*(X=F-ak);C+=(R.g=(M=D[N+1]))*X;S+=(R.b=(O=D[N+2]))*X;Y+=G;ad+=M;L+=O;R=R.next;if(ak<ag){K+=w}}N=ac;aj=W;aa=E;for(ab=0;ab<z;ab++){ah=N<<2;D[ah]=(B*P)>>A;D[ah+1]=(C*P)>>A;D[ah+2]=(S*P)>>A;B-=I;C-=U;S-=Q;I-=aj.r;U-=aj.g;Q-=aj.b;ah=(ac+(((ah=ab+F)<ag?ah:ag)*w))<<2;B+=(Y+=(aj.r=D[ah]));C+=(ad+=(aj.g=D[ah+1]));S+=(L+=(aj.b=D[ah+2]));aj=aj.next;I+=(G=aa.r);U+=(M=aa.g);Q+=(O=aa.b);Y-=G;ad-=M;L-=O;aa=aa.next;N+=w}}an.putImageData(ai,V,T);return true}function b(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 7.2
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"glass_parallax",prev:"",next:"",duration:20*100,delay:20*100,width:1440,height:520,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"parallax",controls:true,responsive:1,fullScreen:false,gestures:1,onBeforeStep:0,images:0});