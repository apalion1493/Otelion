function openCity(e,t){var n,a,l;for(a=document.getElementsByClassName("tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";for(l=document.getElementsByClassName("tablinks"),n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}jQuery(document).ready(function(){jQuery(".menu-burger").click(function(){jQuery(this).toggleClass("active")})});