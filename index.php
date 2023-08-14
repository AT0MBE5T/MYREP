<?php

    $db = new PDO("mysql:host=localhost; dbname=dropShipping", "root", "");

    $info = array();

    if($query = $db->query("SELECT * FROM `goods`")){
        $info = $query->fetchAll(PDO::FETCH_ASSOC);
    }
    else{
        print_r($db->errorInfo());
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="./css/style.css">

    <link rel="stylesheet" href="./css/media.css">

    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    <title>The Best Site Ever</title>
</head>
<body>
    <div class="wrapper">
        <header class="wrapper__header header">
            <div class="header__container">
                <div class="header__title">
                    <h1><a href="#">Name</a></h1>
                </div>
                <div class="header__burger">
                    <span></span>
                </div>
                <div class="header__others">
                    <ul class="header__list">
                        <li><a href="#">About</a></li>
                        <li><a href="#" id="header__shop">Shop</a></li>
                        <li><a href="./login.html" class="header__login">Log In</a></li>
                    </ul>
                </div>
                <div hidden class="burger__list">
                    <ul class="header__listB">
                        <li><a href="#">About</a></li>
                        <li><a href="#" id="header__shop">Shop</a></li>
                        <li><a href="./login.html" class="header__login">Log In</a></li>
                    </ul>
                </div>

                
            </div>
        </header>

        <main class="wrapper__main main">
            <div class="main__container">
                <section class="main__hero hero">
                    <div class="hero-text">
                        <!-- <h5>Hello</h5>
                        <h4>My name is</h4>
                        <h1>ATOMS</h1>
                        <p>Some TextSome TextSome TextSome TextSome TextSome TextSome Text</p> -->
                        <h1>WELCOME</h1>
                        <h4>to the best shop</h4>
                        <div class="hero__buttons">
                            <a href="#" class="hero__gts"><i class="ri-shopping-cart-line"></i> Go to shop</a>
                            <a href="#" class="hero-a"><i class="ri-questionnaire-fill"></i> Get in touch with us</a>
                        </div>
                    </div>

                    <div hidden class="hero-logged">
                        <h1>Welcome back, <span></span>!</h1>
                        <div class="hero__buttons">
                            <a href="#" class="hero__gts"><i class="ri-shopping-cart-line"></i> Go to shop</a>
                            <a href="#" class="hero-a"><i class="ri-questionnaire-fill"></i> Get in touch with us</a>
                        </div>
                    </div>

                    <div class="hero-img">
                        <img src="./img/ferrari-f40-forza-horizon-4-thumb.jpg" alt="">
                    </div>
                </section>

                <div class="addForm">
                    <form action="addGoodSet.php" method="post">
                        <div class="addForm__close">
                            <i class="ri-close-circle-line"></i>
                        </div>
                        <div>
                            <input type="url" class="addForm__file" name="addImg">
                        </div>
                        <div>
                            <input type="text" placeholder="Type name" class="addForm__name" name="addName">
                        </div>
                        <div>
                            <textarea class="addForm__textArea" placeholder="Type description" name="addDesc"></textarea>
                        </div>
                        <div>
                            <input type="number" placeholder="Type number" class="addForm__price" name="addPrice">
                        </div>
                        <div>
                            <button type="submit" class="addForm__btn">CREATE</button>
                        </div>
                    </form>
                </div>

                <div class="editForm">
                    <form action="#" method="post">
                        <div class="editForm__close">
                            <i class="ri-close-circle-line"></i>
                        </div>
                        <div>
                            <input type="url" required class="editForm__file">
                        </div>
                        <div>
                            <input type="text" required placeholder="Type name" class="editForm__name">
                        </div>
                        <div>
                            <textarea name="" id="" required class="editForm__textArea" placeholder="Type description"></textarea>
                        </div>
                        <div>
                            <input type="number" required placeholder="Type number" class="editForm__price">
                        </div>
                        <div>
                            <button type="submit" required class="editForm__btn">EDIT</button>
                        </div>
                    </form>
                </div>
                <div class="beforeShop__text">
                    <img class="beforeShop__text-shop" src="./img/shop.png" alt="">
                    <img class="beforeShop__text-stone" src="./img/stone.png" alt="">
                </div>
                <section class="main__shop">
                    <div class="shop__plus">
                        <p>+</p>
                    </div>

                    <div class="shop__container">
                        <?php for($data = count($info)-1; $data >= 0; --$data): ?>
                        <div class="shop__node">
                            <div class="node__logo">
                                <i class="bx bx-shopping-bag"></i>
                                <img src="./img/nike.png" alt="">
                            </div>
                            <div class="node__images">
                                <img id="purple" class="purple active" src="<?= $info[$data]['img'] ?>" alt="purple" width="10px">
                            </div>
                            <div class="node-details">
                                <span class="details__name"><?= $info[$data]['name'] ?></span>
                                <p><?= $info[$data]['description'] ?></p>
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
                                    <span class="price__num">$<span><?= $info[$data]['price'] ?></span></span>
                                </div>
                            </div>
                            <div class="node__button">
                                <div class="button-layer">
                                    <button>Know more</button>
                                </div>
                            </div>
                        </div>
                        <?php endfor; ?>
                    </div>
                </section>
            </div>
        </main>

        <footer class="wrapper__footer footer">
            <div class="footer__container">
                <h2>Contact us</h2>
                <div class="main__icons">
                        <a href="#">Instagram <i class="ri-instagram-line"></i></a>
                        <a href="#">Telegram <i class="ri-telegram-line"></i></a>
                        <a href="#">Mail <i class="ri-mail-line"></i></a>
                    </div>
            </div>
        </footer>
        <!-- NOTHING -->
        <div hidden class="productPopup">
            <!-- <div class="productPopup__body">
                <div class="productPopup__content">
                    <a href="#" class="productPopup__close">X</a>
                    <div class="productPopup__image"><img src="./img/shoes.png" alt=""></div>
                    <div class="productPopup__name">Some Shoes</div>
                    <div class="productPopup__description">
                        -Eto tak
                        -A eto ezje ne tak
                        - Helasdaslo
                        -Eto tak
                        -A etodasdasdas ezje neasdasdasdaslo
                        -Eto tak
                        -A etodasdasdasasdasd ezje ne tak
                        - Hello
                        -Eto tak
                        -A eto ezje ne tak
                    </div>
                    <div class="productPopup__price">$124.99</div>
                    <div class="productPopup__btn">
                        <div class="productPopup__layer">
                            <button type="submit">ORDER IT</button>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <!-- NOTHING -->
    </div>
    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="./js/script.js"></script>
</body>
</html>