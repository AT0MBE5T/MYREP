showPool();
document.querySelector('.header__burger').addEventListener("click", function(e){
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.burger__list').classList.toggle('active');
    document.body.classList.toggle('scrollLock');
});

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin:'top'});
sr.reveal('.hero-img', {delay: 450, origin:'top'});
sr.reveal('.main__icons', {delay: 500, origin:'left'});
sr.reveal('.main__scroll-down', {delay: 500, origin:'right'});
sr.reveal('.beforeShop__text-shop', {delay: 500, origin:'bottom'});
sr.reveal('.beforeShop__text-stone', {delay: 1000, origin:'bottom'});

// plus
function node__plus(){
    const button = document.querySelector('.addForm__btn');
    const plusName = document.querySelector('.addForm__name');
    const plusImg = document.querySelector('.addForm__file');
    const plusPrice = document.querySelector('.addForm__price');
    const plusDescr = document.querySelector('.addForm__textArea');
    const shop = document.querySelector('.shop__container');

    let image;
    let plname;
    let describe;
    let price;

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log("PLUUSS");
        let temp = plusImg.value;
        plname = plusName.value;
        describe = plusDescr.value;
        price = plusPrice.value;
        shop.insertAdjacentHTML(`beforeend`,
        `
        <div class="shop__node">
        <div class="node__logo">
            <i class="bx bx-shopping-bag"></i>
            <img src="./img/nike.png" alt="">
        </div>
        <div class="node__images">
            <img id="purple" class="purple active" src="${temp}" alt="purple" width="10px">
            <img id="yellow" class="yellow" src="" alt="yellow">
            <img id="white" class="white" src="" alt="white" width="10px">
        </div>
        <div class="node-details">
            <span class="details__name">${plname}</span>
            <p>${describe}</p>
            <div class="node__stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
            </div>
        </div>
        <div class="node__edit">
            <p><i class="ri-edit-line"></i></p>
        </div>
        <div class="node__minus">
            <p>-</p>
        </div>
        <div class="color__prices">
            <div class="node__price">
                <span class="price__num">$${price}</span>
            </div>
        </div>
        <div class="node__button">
            <div class="button-layer">
                <button>Know more</button>
            </div>
        </div>
    </div>
        `);
    });

    const addForm = document.querySelector('.addForm');

    const plusplus = document.querySelector('.shop__plus');

    plusplus.addEventListener("click", (e)=>{
        addForm.classList.toggle('active');
    });
    document.querySelector('.addForm').addEventListener('click', (event)=>{
        if(event.target.closest('.addForm__close')) document.querySelector('.addForm').classList.remove('active');
    });
}
node__plus();

//POPUP PRODUCT
document.body.addEventListener("click", (e)=>{
    if(e.target.closest('.node__button')){
        document.body.classList.toggle('scrollLock');
        let goods = JSON.parse(localStorage.getItem('goods'));
        if(!goods) return;
        let index;
        let naming = e.target.parentNode.parentNode.parentNode.querySelector('.details__name').innerText;
        for(let i = 0; i < goods.length; ++i){
            if(naming==goods[i][2]){
                index = i;
            }
        }
        document.querySelector('.productPopup').insertAdjacentHTML('beforeend',
        `
        <div class="productPopup__body">
        <div class="productPopup__content">
            <a href="#" class="productPopup__close">X</a>
            <div class="productPopup__image"><img src="${goods[index][1]}" alt=""></div>
            <div class="productPopup__name">${goods[index][2]}</div>
            <div class="productPopup__description">
            ${goods[index][3]}
            </div>
            <div class="productPopup__price">$${goods[index][4]}</div>
            <div class="productPopup__btn">
                <div class="productPopup__layer">
                    <button type="submit">ORDER IT</button>
                </div>
            </div>
        </div>
    </div>
        `);
        document.querySelector('.productPopup').style.cssText=
        `
            display:block;
        `;
        document.querySelector('.productPopup__close').addEventListener("click", (ev)=>{
            ev.preventDefault();
            document.querySelector('.productPopup').style.cssText=``;
            document.querySelector('.productPopup__body').remove();
            document.body.classList.remove('scrollLock');
        });
        document.querySelector('.productPopup').addEventListener('click', (eve)=>{
            if(!eve.target.closest('.productPopup__content') && !eve.target.closest('.node__button')){
                document.querySelector('.productPopup').style.cssText=``;
                if(document.querySelector('.productPopup__body')) document.querySelector('.productPopup__body').remove();
                document.body.classList.remove('scrollLock');
            }
        });
    }
});

//
if(!localStorage.getItem('goods')){
    localStorage.setItem('goods', JSON.stringify([]));
}
document.querySelector('.addForm__btn').addEventListener('click', (e)=>{
    let plimg = document.querySelector('.addForm__file').value;
    let plname = document.querySelector('.addForm__name').value;
    let pldesc = document.querySelector('.addForm__textArea').value;
    let plprice = document.querySelector('.addForm__price').value;
        document.querySelector('.addForm__file').value='';
        document.querySelector('.addForm__name').value='';
        document.querySelector('.addForm__textArea').value='';
        document.querySelector('.addForm__price').value='';
        let goods = JSON.parse(localStorage.getItem('goods'));
        goods.push(['good_'+goods.length, plimg, plname, pldesc, plprice]);
        localStorage.setItem('goods', JSON.stringify(goods));
});
function showPool(){
    let goods = JSON.parse(localStorage.getItem('goods'));
    let shopContainer = document.querySelector('.shop__container');
    if(!goods) return;
    for(let i = 0; i < goods.length; ++i){
        shopContainer.insertAdjacentHTML(`beforeend`,
        `
        <div class="shop__node">
        <div class="node__logo">
            <i class="bx bx-shopping-bag"></i>
            <img src="./img/nike.png" alt="">
        </div>
        <div class="node__images">
            <img id="purple" class="purple active" src="${goods[i][1]}" alt="purple" width="10px">
            <img id="yellow" class="yellow" src="" alt="yellow">
            <img id="white" class="white" src="" alt="white" width="10px">
        </div>
        <div class="node-details">
            <span class="details__name">${goods[i][2]}</span>
            <p>${goods[i][3]}</p>
            <div class="node__stars">
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
            </div>
        </div>
        <div class="node__edit">
            <p><i class="ri-edit-line"></i></p>
        </div>
        <div class="node__minus">
            <p>-</p>
        </div>
        <div class="color__prices">
            <div class="node__price">
                <span class="price__num">$${goods[i][4]}</span>
            </div>
        </div>
        <div class="node__button">
            <div class="button-layer">
                <button>Know more</button>
            </div>
        </div>
    </div>
        `);
    }
}
function forMinus(e){
    if(e.target.closest('.node__minus')){
        let goods = JSON.parse(localStorage.getItem('goods'));
        let index;
        let naming = e.target.parentNode.parentNode.querySelector('.details__name').innerText;
        for(let i = 0; i < goods.length; ++i){
            if(naming==goods[i][2]){
                index = i;
            }
        }

        localStorage.removeItem('goods');
        localStorage.setItem('goods', JSON.stringify([]));
        goods.splice(index,1);
        localStorage.setItem('goods', JSON.stringify(goods));
        location.reload();
    }
}

document.body.addEventListener("click", forMinus);

//GO TO SHOP
function GTS(e){
    e.preventDefault();
    document.querySelector('.main__shop').scrollIntoView({
        behavior: "smooth",
        block:"center",
        inline:"nearest"
    });
}
document.querySelector('.hero__gts').addEventListener('click', GTS) | document.querySelector('#header__shop').addEventListener('click', GTS);
//

//EDIT
function node__edit(){
    document.body.addEventListener('click', (e)=>{
        if(e.target.closest('.node__edit')){
            const button = document.querySelector('.editForm__btn');
            const plusName = document.querySelector('.editForm__name');
            const plusImg = document.querySelector('.editForm__file');
            const plusPrice = document.querySelector('.editForm__price');
            const plusDescr = document.querySelector('.editForm__textArea');
            const shop = document.querySelector('.shop__container');
        
            let image;
            let plname;
            let describe;
            let price;
        
            let goods = JSON.parse(localStorage.getItem('goods'));
            let index;
            let naming = e.target.parentNode.parentNode.parentNode.querySelector('.details__name').innerText;
            for(let i = 0; i < goods.length; ++i){
                if(naming==goods[i][2]){
                    index = i;
                }
            }
            document.querySelector('.editForm').classList.toggle('active');
            plusImg.value=goods[index][1];
            plusName.value=goods[index][2];
            plusDescr.value=goods[index][3];
            plusPrice.value=goods[index][4];
            document.querySelector('.editForm__btn').addEventListener('click', (eve)=>{
                eve.preventDefault();
                goods[index][1]=plusImg.value;
                goods[index][2]=plusName.value;
                goods[index][3]=plusDescr.value;
                goods[index][4]=plusPrice.value;
                localStorage.setItem('goods', JSON.stringify(goods));
                location.reload();
            });
            document.querySelector('.editForm').addEventListener('click', (event)=>{
                if(event.target.closest('.editForm__close')) document.querySelector('.editForm').classList.remove('active');
            });
        }
    });
}
node__edit();
//