var tik=setInterval(()=>{var t=document.getElementById("digit");t.classList.toggle("digit"),0==t.innerText?(document.getElementById("container").classList.toggle("containeroverlay"),window.location="./MyBirthday/MyBirthday.html",clearInterval(tik)):--t.innerText,t.classList.toggle("digit")},1e3);
