function setChatBoxHeight(){var e,t,n=document.querySelector(".wpsms-chatbox__elements");n&&(e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n.style.maxHeight=768<=t?.65*e+"px":.54*e+"px")}document.addEventListener("DOMContentLoaded",function(){var e=document.documentElement;window.matchMedia("(prefers-color-scheme: dark)").matches?(e.classList.add("dark-theme"),e.classList.remove("light-theme")):(e.classList.remove("dark-theme"),e.classList.add("light-theme"));const t=document.querySelector(".wpsms-chatbox__content");var e=document.querySelector(".js-wpsms-chatbox__button"),n=document.querySelector(".js-wpsms-chatbox__close-button");e.addEventListener("click",function(){t.classList.contains("open")?(t.classList.remove("open"),t.classList.add("closing")):(t.style.display="block",t.classList.add("open","opening")),document.body.classList.toggle("chatbox-open")}),n.addEventListener("click",function(){t.classList.remove("open"),t.classList.add("closing")}),setChatBoxHeight(),t.addEventListener("transitionend",function(e){"opacity"!==e.propertyName||t.classList.contains("open")||(t.style.display="none"),t.classList.remove("opening","closing")})}),window.addEventListener("resize",setChatBoxHeight);