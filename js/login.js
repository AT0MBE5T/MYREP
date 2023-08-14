const username = document.querySelector('.blockPhp').getAttribute('data-attr');
const error = document.querySelector('.blockPhp').getAttribute('data-attrerror');
const adm = document.querySelector('.blockPhp').getAttribute('data-attradm');
if(adm && !localStorage.getItem('isAdmin'))localStorage.setItem('isAdmin', JSON.stringify([adm]));

if(!localStorage.getItem('tempis')){
    localStorage.setItem('tempis', JSON.stringify([]));
}
const tempis = JSON.parse(localStorage.getItem('tempis'));
tempis.push([error]);
localStorage.setItem('tempis', JSON.stringify(tempis));
const temp = JSON.parse(localStorage.getItem('temp'));

if(error){
    
    if(temp){
        var d = new Date();
        d.setTime(d.getTime()+3600000*24*7);
        var expires = d.toUTCString();
        document.cookie = `acc=${username}; expires=${expires};`;
    }
    else{
        var d = new Date();
        d.setTime(d.getTime()+3600000*5);
        var expires = d.toUTCString();
        document.cookie = `acc=${username}; expires=${expires};`;
    }
    document.location.href = "index.php";
}
else{
    document.location.href = "login.html";
}