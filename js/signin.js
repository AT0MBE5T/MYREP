if(document.querySelector('.body-registration') || document.querySelector('.body-login') || document.querySelector('.body-sendForm')){
const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.head-block__left-block', {delay: 500, origin:'left'});
sr.reveal('.head-block__right-block', {delay: 500, origin:'right'});

let hideShowElement = false;

function hideElement(elem){
    if(hideShowElement)elem.style.cssText=``;
    elem.style.cssText=` display: none; `;
    hideShowElement = true;
}

function showElement(elem){
    if(hideShowElement)elem.style.cssText=``;
    elem.style.cssText=` display: block; `
    hideShowElement = true;
}



//display none for label text
document.body.addEventListener('click', function(e){
    if(e.target.closest('.first input')){
        document.querySelector('.first input').addEventListener('blur',function(eve){
            if(e.target.value) hideElement(document.querySelector('.first label a'));
            else showElement(document.querySelector('.first label a'));
        });
    }
});
document.body.addEventListener('click', function(e){
    if(e.target.closest('.second input')){
        document.querySelector('.second input').addEventListener('blur',function(eve){
            if(e.target.value) hideElement(document.querySelector('.second label a'));
            else showElement(document.querySelector('.second label a'));
        });
    }
});
document.body.addEventListener('click', function(e){
    if(e.target.closest('.third input')){
        document.querySelector('.third input').addEventListener('blur',function(eve){
            if(e.target.value) hideElement(document.querySelector('.third label a'));
            else showElement(document.querySelector('.third label a'));
        });
    }
});

// document.body.addEventListener('click', (e)=>{
//     if(e.target.closest('.left-block__inputbox')){
//         e.target.addEventListener('blur', (eve)=>{
//             if(e.target.value) hideElement(e.target.lastChild);
//             else showElement(e.target.lastChild);
//         });
//     }
// });
//end
    if(JSON.parse(localStorage.getItem('tempis'))){
        const isCont = JSON.parse(localStorage.getItem('tempis'));
        if(isCont[0][0]==="1"){
            document.querySelector('.left-block__inputbox-error').style.display = 'block';
        }
        else{
            document.querySelector('.left-block__inputbox-error').style.display = 'block';
        }
        localStorage.removeItem("tempis");
    }

}
else if(document.querySelector('.regPhp')){
    const is = document.querySelector('.regPhp').getAttribute('data-regphp');
    const nam = document.querySelector('.regPhp').getAttribute('data-regphpname');

    var d = new Date();
    d.setTime(d.getTime()+3600000*5);
    var expires = d.toUTCString();
    document.cookie = `acc=${nam}; expires=${expires};`;
    document.location.href = "index.php";

    if(!localStorage.getItem('tempis')){
        localStorage.setItem('tempis', JSON.stringify([]));
    }
    const isCont = JSON.parse(localStorage.getItem('tempis'));
    isCont.push([is]);
    localStorage.setItem('tempis', JSON.stringify(isCont));
    if(!is){
        location.href="index.php";
    }
    else{
        location.href="registration.html";
    }
}

if(document.querySelector('#checkbox')){
    if(document.cookie){
        const c = document.cookie;
        const d = new Date();
        d.setTime(d.getTime() - 1);
        const expires = d.toUTCString();
        document.cookie = `${c}; expires=${expires};`;
    }
    document.querySelector('#checkbox').addEventListener("click", function(e){
        if(!localStorage.getItem('temp')) localStorage.setItem('temp', JSON.stringify([]));
        const temp = JSON.parse(localStorage.getItem('temp'));
        temp.push([e.target.checked]);
        localStorage.setItem('temp', JSON.stringify(temp));
    });
}
document.body.addEventListener('click', (e)=>{
    if(e.target.closest('.left-block__inputbox') && !document.querySelector('.body-sendForm')){
        document.querySelector('.left-block__inputbox-error').style.display = '';
    }
});
if(localStorage.getItem('temp'))localStorage.removeItem('temp');
if(localStorage.getItem('isAdmin'))localStorage.removeItem('isAdmin');

// if(document.querySelector('.sendMail')){
//     const sm = document.querySelector('.sendMail');
//     const is = sm.getAttribute('data-regis');
//     if(is){
//         const mail = sm.getAttribute('data-regmail');
//         const login = sm.getAttribute('data-reglogin');
//         const pass = sm.getAttribute('data-regpass');
//         const code = sm.getAttribute('data-regcode');
//         document.querySelector('.left-block__btn').addEventListener('click', (e)=>{
//             const userCode = document.querySelector('.left-block__inputbox input').value;
//             if(!userCode){
//                 document.querySelector('.left-block__inputbox-error').style.display = 'block';
//             }
//             else{
//                 if(code===userCode){
//                     query='mail=' + mail + '&login=' + login + '&pass=' + pass;
//                     document.write('<img src="reg.php?' + query + ' " '+'border="0" width="1" height="1" />');
//                 }
//                 else{
//                     document.querySelector('.left-block__inputbox-error').style.display = 'block';
//                 }
//             }
//         });
//     }
//     else{
//         //document.querySelector('.left-block__inputbox-error').style.display = 'block';
//     }

// }

if(document.querySelector('.body-sendForm')){
    document.querySelector('.left-block__btn').addEventListener('click', (e)=>{
        e.preventDefault();
        const name = document.querySelector('.first input').value;
        const city = document.querySelector('.second input').value;
        const post = document.querySelector('.third input').value;
        const login = document.cookie.slice(4, document.cookie.length);
        query='name=' + name + '&city=' + city + '&post=' + post + '&login=' + login;
        document.write('<img src="sendForm.php?' + query + ' " '+'border="0" width="1" height="1" />');
    });
}