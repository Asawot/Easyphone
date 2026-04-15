// BASE DE DONNÉES COMPLÈTE
const catalogue = [
    // IPHONES
    { n: "iPhone X", p: 40000, i: "https://renuovo.it/640-large_default/apple-iphone-x.jpg" },
    { n: "iPhone XS", p: 80000, i: "https://renuovo.it/636-large_default/apple-iphone-xs.jpg" },
    { n: "iPhone XR", p: 80000, i: "https://iparts.com.gh/wp-content/uploads/2023/12/xrr3.jpeg" },
    { n: "iPhone 11", p: 105000, i: "https://static.fnac-static.com/multimedia/Images/FR/MDM/9c/b2/bd/12432028/1520-5/tsp20260321133505/Apple-iPhone-11-128-Go-6-1-Vert.jpg" },
    { n: "iPhone 11 Pro Max", p: 160000, i: "https://image-cdn.ubuy.com/apple-iphone-11-pro-max-64gb-space-gray/400_400_100/65439c7cf1f77e6e7503119e.jpg" },
    { n: "iPhone 12", p: 150000, i: "https://www.apple.com/newsroom/images/product/availability/geo/Apple_iphone12mini-iphone12max-homepodmini-availability_iphone12mini-geo_110520_inline.jpg.large.jpg" },
    { n: "iPhone 13 Pro Max", p: 290000, i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohYdQN-_CLevceOYSD5njrpO_MHwfq8t0Rg&s" },
    { n: "iPhone 14 Pro Max", p: 420000, i: "https://imagedelivery.net/AZ5kNEcp8roCR6XQJU10qQ/5c2f4797-0f88-49b2-babf-943b8b3d5500/w=9999" },
    { n: "iPhone 15 Pro Max", p: 450000, i: "https://vepaar.b-cdn.net/uploads/c-226786/product/16730027/iphone15ProMax3.jpg" },
    { n: "iPhone 16 Pro Max", p: 750000, i: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png" },
    { n: "iPhone 17 Pro Max", p: 950000, i: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-17-pro-17-pro-max-hero.png" },
    { n: "iPhone 12 mini", p: 190000, i: "https://shop.cellzone.ca/cdn/shop/files/Cellzone-Apple-iPhone-12-mini-couleurs-1_1800x.jpg?v=1697039624" },
    { n: "iPhone 12 Pro Max", p: 200000, i: "https://www.apple.com/newsroom/images/product/availability/geo/Apple_iphone12mini-iphone12max-homepodmini-availability_iphone12promax-geo_110520_inline.jpg.large.jpg" },
    { n: "iPhone 13", p: 150000, i: "https://loja.iservices.pt/11660-large_default/iphone-13.jpg" },
    { n: "iPhone 13 mini", p: 190000, i: "https://assets01.reepeat.fr/01/a0/a009/a0090ebe-0ced-467a-a77c-1320c7d8fdb9/apple-iphone-13-mini-128go.jpg" },
    { n: "iPhone 14", p: 320000, i: "https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/Apple-iPhone-14-Starlight.jpg" },
    { n: "iPhone 14 Plus", p: 270000, i: "https://www.logicainfoway.com/wp-content/uploads/2023/04/I-PHONE-14-PLUS-Product-Image.jpg" },
    { n: "iPhone 14 Pro", p: 310000, i: "https://www.logicainfoway.com/wp-content/uploads/2022/12/iPhone-14-Pro-Max-Product-Image-600x600.jpg" },
    { n: "iPhone 15", p: 350000, i: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_hero.png" },
    { n: "iPhone 15 Plus", p: 410000, i: "https://smartfix.com.ar/wp-content/uploads/2025/06/image-8.webp" },
    { n: "iPhone 15 Pro", p: 430000, i: "https://www.logicainfoway.com/wp-content/uploads/2024/03/004.jpg" },
    { n: "iPhone 16", p: 500000, i: "https://isystem.jo/wp-content/uploads/iPhone_16_Black_PDP_Image_Position_5__en-ME-scaled-1.webp" },
    { n: "iPhone 16e", p: 550000, i: "https://www.apple.com/newsroom/images/2025/02/apple-debuts-iphone-16e-a-powerful-new-member-of-the-iphone-16-family/tile/Apple-iPhone-16e-hero-250219-lp.jpg.news_app_ed.jpg" },
    { n: "iPhone 16 Pro", p: 650000, i: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121031-iphone-16-pro.png" },
    { n: "iPhone 17", p: 700000, i: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ" },
    { n: "iPhone 17e", p: 600000, i: "https://www.apple.com/newsroom/images/2026/03/apple-introduces-iphone-17e/geo/Apple-iPhone-17e-family-lineup-ROW-260302_big.jpg.large.jpg" },
    { n: "iPhone Air", p: 750000, i: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone-air-hero.png" },
    { n: "iPhone 17 Pro", p: 820000, i: "https://ishopmx.vtexassets.com/arquivos/ids/404297-800-auto?v=638932176052200000&width=800&height=auto&aspect=true" },


    // SAMSUNG
    { n: "Samsung Galaxy A17", p: 70000, i: "https://amsi.ci/wp-content/uploads/2025/12/galaxy_a17_1.jpg" },
    { n: "Samsung S26 Ultra", p: 800000, i: "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/m/3/m3_set-cut-all_01_8.png" },
    { n: "Samsung Z Fold 8", p: 1500000, i: "https://i.wfcdn.de/teaser/1920/89811.png" },
    { n: "Samsung Galaxy Z Fold 7", p: 850000, i: "https://www.congo-promotion.store/web/image/product.product/659/image_1024/Samsung%20Galaxy%20Fold%207-%20512Go?unique=08622cc" },
    { n: "Samsung Galaxy Z Flip 8", p: 500000, i: "https://m-cdn.phonearena.com/images/phones/85447-940/Samsung-Galaxy-Z-Flip-8.jpg?w=1" },
    { n: "Samsung Galaxy A37", p: 280000, i: "https://www.maxmovil.com/media/catalog/product/cache/2c055c968235f5bf43b443aee4bb62c6/s/a/samsung_galaxy_a37_violeta_1_.png" },
    { n: "Samsung Galaxy A54", p: 130000, i: "https://www.logicainfoway.com/wp-content/uploads/2023/05/Samsung-Galaxy-A54-5G-8GB-RAM-Product-Image-00-600x600.jpg" },
    { n: "Samsung Galaxy A57", p: 310000, i: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/322127_0_RuFz8FVXO.png?updatedAt=1774506866253" },
    { n: "Samsung Galaxy S22", p: 200000, i: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/02/samsung-galaxy-s22-frandroid-2022-768x768.png?resize=290,290&key=541e040b" },
    { n: "Samsung Galaxy S23", p: 250000, i: "https://images.samsung.com/fr/smartphones/galaxy-s23/buy/02_Image_Carousel/02-1_Group_KV_Basic_Color/S23Plus-group_kv_MO.jpg?imbypass=true" },
    { n: "Samsung Galaxy S24", p: 350000, i: "https://www.cdiscount.com/pdt2/0/6/2/1/700x700/aabei48062/rw/samsung-galaxy-s24-smartphone.jpg" },
    { n: "Samsung Galaxy S26", p: 900000, i: "https://cdn.idealo.com/folder/Product/209522/5/209522520/s4_produktbild_max/samsung-galaxy-s26-512-go-blanc.jpg" },
    { n: "Samsung S26+", p: 770000, i: "https://cdn.movertix.com/media/catalog/product/cache/image/s/a/samsung-galaxy-s26-plus-5g-black-512gb-and-12gb-ram-sm-s947b.jpg" },
    { n: "Samsung Galaxy Z Flip 7", p: 500000, i: "https://e-bma.ci/storage/app/public/product/2025-08-12-689b752a92f43.webp" },


    // MOTOROLA
    { n: "Motorola G15", p: 90000, i: "https://www.trippodo.com/1286495-medium_default/motorola-moto-g15-171-cm-672-double-sim-android-15-4g-usb-type-c-4-go-128-go-5200-mah-vert.jpg" },
    { n: "Motorola Edge 60 Pro", p: 600000, i: "https://cdn.movertix.com/media/catalog/product/m/o/motorola-edge-60-pro-5g-dual-sim-shadow-green-512gb-and-12gb-ram_2.jpg" },
    { n: "Motorola G24", p: 115000, i: "https://atacadoiguazu.com.ar/wp-content/uploads/2024/06/celular_motorola_moto_g24_xt_2423_dual_chip_128gb_4g_172504_550x550.jpg" },
    { n: "Motorola G25", p: 120000, i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0Ito5zfOcRBz2D5tTINIDGA2xljtD8lBQw&s" },
    { n: "Motorola G54 5G", p: 130000, i: "https://leclaireur.fnac.com/wp-content/uploads/4d/0840023251696/9270176-pictures-defaut.png" },
    { n: "Motorola G84", p: 150000, i: "https://m.media-amazon.com/images/I/81XXK3N2kyL.jpg" },
    { n: "Motorola G85", p: 170000, i: "https://fixechelectronica.com.ar/wp-content/uploads/2024/08/Motorola-G85-1.png" },
    { n: "Motorola G Power", p: 200000, i: "https://p4-ofp.static.pub//fes/cms/2025/02/04/g5a12btk2ovpub3d354lxbatsq5r4h913849.png" },
    { n: "Motorola G Stylus 5G", p: 250000, i: "https://phonesdata.com/files/models/Motorola-Moto-G-Stylus-5G-710.jpg" },
    { n: "Motorola Edge 5G", p: 110000, i: "https://p2-ofp.static.pub//fes/cms/2024/08/28/jokf0z7wxkh69wugnhua2cv34bux6l940883.png" },
    { n: "Motorola Edge 30", p: 195000, i: "https://cdn.idealo.com/folder/Product/201930/0/201930018/s4_produktbild_max/motorola-edge-30.jpg" },
    { n: "Motorola Edge 40 Neo", p: 215000, i: "https://thefactorybusiness.com/cdn/shop/files/40neobleutur.png?v=1757252314&width=1200" },
    { n: "Motorola Edge 50 Pro", p: 325000, i: "https://www.dateks.lv/images/pic/2400/2400/356/1695.jpg" },
    { n: "Motorola ThinkPhone 2", p: 415000, i: "https://p3-ofp.static.pub/fes/cms/2023/01/03/q6ngwqrzhjdbdx9n065rp7nz47y63y261629.png" },
    { n: "Motorola Razr 50", p: 450000, i: "https://m.media-amazon.com/images/I/71MvX3a8rmL.jpg" },
    { n: "Motorola Razr 60 Ultra", p: 720000, i: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/439673" },


    // PIXEL
    { n: "Google Pixel 6a", p: 105000, i: "https://vlebazaar.in/image/cache/catalog//B0B1VQX8MD/Google-Pixel-6a-5G-Chalk-6GB-RAM-128GB-Storage-B0B1VQX8MD-1500x1500.jpg" },
    { n: "Google Pixel 10 Pro XL", p: 800000, i: "https://static.fnac-static.com/multimedia/Images/FR/MDM/54/5f/b3/28532564/3756-1/tsp20260330084824/Smartphone-Google-Pixel-10-Pro-XL-6-8-5G-Double-SIM-256-Go-Jade.jpg" },
    { n: "Google Pixel 6 Pro", p: 120000, i: "https://sold.ma/wp-content/uploads/2023/01/4129bZs5OPL.jpg" },
    { n: "Google Pixel 7a", p: 130000, i: "https://m.media-amazon.com/images/I/71m09hEhnwL.jpg" },
    { n: "Google Pixel 7", p: 150000, i: "https://shop.mobileklinik.ca/cdn/shop/files/16494355.png?v=1744073385" },
    { n: "Google Pixel 7 Pro", p: 185000, i: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2022/05/google-pixel-7-pro-frandroid-2022-300x300.png?resize=290,290&key=88634101" },
    { n: "Google Pixel 8a", p: 205000, i: "https://med.csmobiles.com/1644028-large_default/google-pixel-8a-5g-8gb-128gb-dual-sim-azul.jpg" },
    { n: "Google Pixel 8", p: 230000, i: "https://static.fnac-static.com/multimedia/Images/FR/MDM/bf/1d/5a/22683071/1540-1/tsp20260207080848/Smartphone-Google-Pixel-8-6-2-5G-Double-SIM-128-Go-Vert-Menthe.jpg" },
    { n: "Google Pixel 8 Pro", p: 300000, i: "https://allomerci.com/wp-content/uploads/2024/07/google-pixel-8-pro-3.jpg" },
    { n: "Google Pixel 9a", p: 325000, i: "https://avechi.co.ke/wp-content/uploads/2024/11/Google-Pixel-9a-a1.jpg" },
    { n: "Google Pixel 9", p: 375000, i: "https://www.wireless.walmart.ca/wp-content/uploads/2024/10/Pixel-9-Dual-1.jpg" },
    { n: "Google Pixel 10a", p: 360000, i: "https://www.elesen.lt/UserFiles/Products/Images/445768-673747.avif" },
    { n: "Google Pixel 9 Pro XL", p: 515000, i: "https://lmt-web.mstatic.lv/eshop/29283/7-google-pixel-9-pro-xl-obsidian.png" },


    // REDMI
    { n: "Redmi Note 15 Pro+", p: 300000, i: "https://www.maxmovil.com/media/catalog/product/cache/2c055c968235f5bf43b443aee4bb62c6/x/i/xiaomi_redmi_note_15_pro_azul_1__1_2.png" },
    { n: "Redmi A3", p: 80000, i: "https://www.ravate.com/516877-large_default/smartphone-redmi-a3-364go-noir-xiaomi-xiaredmia364mbk.jpg" },
    { n: "Redmi A5", p: 90000, i: "https://www.xiaomistore.tn/wp-content/uploads/2025/07/Redmi-A5-Lake-Green.png" },
    { n: "Redmi 13C", p: 105000, i: "https://www.babiken.ci/assets/uploads/catalog_20240529155302.png" },
    { n: "Redmi 15C", p: 110000, i: "https://i02.appmifile.com/687_operator_sg/13/08/2025/bc56eed25c1e429d683eecfdcc5b6924.png" },
    { n: "Redmi Note 13 Pro", p: 165000, i: "https://brothers-phone.com/wp-content/uploads/2024/05/Images-site-1-5.png" },
    { n: "Redmi Note 14", p: 170000, i: "https://static.s-sfr.fr/media/catalogue/article/mobile/g68kfqvu/Redmi-Note-14-dosface-noir-211x351px.jpg.png" },
    { n: "Redmi Note 14 Pro", p: 195000, i: "https://tunisiatech.tn/13525-medium_default/smartphone-xiaomi-redmi-note-14-pro-8go-256go-violet.jpg" },
    { n: "Redmi Note 15", p: 160000, i: "https://www.thaimobilecenter.com/images/content/2025/20251219_161186.jpg" },
    { n: "Redmi Note 15 Pro", p: 200000, i: "https://i05.appmifile.com/395_item_fr/25/12/2025/7103cf679a36fdb0ebf1563e1700fc8a.png?thumb=1&q=85" },
    { n: "Redmi Turbo 3", p: 250000, i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7VqxwO0Pwo4Gz-xBxkn0IcFoySFqgdFQBA&s" },
    { n: "Xiaomi 15T Pro", p: 470000, i: "https://i02.appmifile.com/336_item_ma/05/09/2025/f5c92d0b44a71c4a8ac38b0e5f04dc14.png" },
    { n: "Xiaomi 15 Ultra", p: 650000, i: "https://storage.comprasmartphone.com/smartphones/xiaomi-15-ultra.png" },
    { n: "Redmi Turbo 5", p: 330000, i: "https://static.hub.91mobiles.com/wp-content/uploads/sites/9/2026/01/Redmi-Turbo-5-series-china-launch.jpg?tr=q-70" },

    // TECNO
    { n: "Tecno Spark 40 Pro+", p: 175000, i: "https://d13pvy8xd75yde.cloudfront.net/global/spark-40-pro-%2B/KM7%20%E7%BB%BF.png" },
    { n: "Tecno Camon 50 Ultra", p: 370000, i: "https://d13pvy8xd75yde.cloudfront.net/camon/CN7C-%E6%B5%81%E5%85%89%E6%A9%99.png" },
    { n: "Tecno Phantom V Fold 2", p: 650000, i: "https://d13pvy8xd75yde.cloudfront.net/global/phones/30de62181d4a0aec432a16e29630bfa8.webp" },
    { n: "Tecno Pop 9", p: 65000, i: "https://www.gizmochina.com/wp-content/uploads/2024/12/Tecno-Pop-9-4G.png" },
    { n: "Tecno Pop 10", p: 80000, i: "https://assets.boutique.orange.sn/files/2025-08/pop10_1_0.png" },
    { n: "Tecno Pop 10 Pro", p: 95000, i: "https://d13pvy8xd75yde.cloudfront.net/global/phones/spark-40c/pop-10-pro/pop10p%20%E9%92%9B.png" },
    { n: "Tecno Spark Go 2025", p: 85000, i: "https://tunisiatech.tn/15021-large_default/tecno-spark-go-2025-2go-64go.jpg" },
    { n: "Tecno Spark 30", p: 100000, i: "https://kmerphone.com/cdn/shop/files/Tecno-Spark-30-Noir_800x.jpg?v=1730532167" },
    { n: "Tecno Spark 40", p: 115000, i: "https://d13pvy8xd75yde.cloudfront.net/global/spark-40/5_5N-orange.png" },
    { n: "Tecno Spark 40 Pro", p: 150000, i: "https://www.3chub.com/cdn/shop/files/SPARK40PROBLACK.webp?v=1773054145" },
    { n: "Tecno Pova 6 Neo", p: 135000, i: "https://carthagoinformatique.tn/wp-content/uploads/2025/03/unnamed-file-5.png" },
    { n: "Tecno Pova 7 Pro", p: 220000, i: "https://m.media-amazon.com/images/I/71F7wEYKTeL.jpg" },
    { n: "Tecno Pova Curve 2 5G", p: 250000, i: "https://d13pvy8xd75yde.cloudfront.net/ph/3.png" },
    { n: "Tecno Camon 30", p: 150000, i: "https://www.soumari.com/wp-content/uploads/2024/04/Tecno-CAMON-30.jpg" },
    { n: "Tecno Camon 40", p: 200000, i: "https://d13pvy8xd75yde.cloudfront.net/global/phones/camon/camon40/camon%2040/CM5%20GS.png" },
    { n: "Tecno Camon 40 Pro", p: 240000, i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuhvNI3hPWgA5VpwylW4vgjck368mZ9QjtTQ&s" },
    { n: "Tecno Camon 50", p: 280000, i: "https://d13pvy8xd75yde.cloudfront.net/camon/cn5c-%E5%AD%94%E9%9B%80%E7%9F%B3%E7%BB%BF.png" },
    { n: "Tecno Slim 2", p: 370000, i: "https://gartigo.com/storage/app/public/product/2025-12-06-6934133022f80.webp" },
    { n: "Tecno Phantom X2", p: 260000, i: "https://i.ebayimg.com/images/g/BQcAAOSwbhNl8El~/s-l1200.jpg" },
    { n: "Tecno Phantom V Flip 2", p: 450000, i: "https://d13pvy8xd75yde.cloudfront.net/global/phones/9d3b38e78bc2b58ff396425bc3f66f61.webp" },


    // INFINIX
    { n: "Infinix Hot 60 Pro+", p: 170000, i: "https://storage.googleapis.com/takeapp/media/cmdpzs52u000104l98yip4oeu.png" },
    { n: "Infinix Zero Flip", p: 475000, i: "https://global.pro.infinixmobility.com/media/wysiwyg/X6962_ZERO_Flip_base_4_family.png" },
    { n: "Infinix Smart 9", p: 65000, i: "https://www.notebookcheck.biz/uploads/tx_nbc2/Infinix_Smart_9.JPG" },
    { n: "Infinix Smart 10", p: 85000, i: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-182095145/infinix_infinix_smart_10_4-128_gb_garansi_resmi_termurah_full05_thb4fsl9.jpg" },
    { n: "Infinix Hot 40i", p: 100000, i: "https://cdn-ilcckdn.nitrocdn.com/mJCoEvGkeejlEvJdEMQjiBVdPamvpGSY/assets/images/optimized/rev-ef13978/yas.tg/wp-content/uploads/2024/10/image-1.png" },
    { n: "Infinix Hot 50i", p: 110000, i: "https://kmerphone.com/cdn/shop/files/Infinix-Hot-50i-Vert_800x.jpg?v=1728290992" },
    { n: "Infinix Hot 60i", p: 105000, i: "https://www.soumari.com/wp-content/uploads/2025/07/Infinix-Hot-60i-128GB-RAM-8-2.jpg" },
    { n: "Infinix Hot 50 Pro+", p: 150000, i: "https://tunisiatech.tn/12926-large_default/smartphone-infinix-hot-50-pro-plus-8go-256go-silver.jpg" },
    { n: "Infinix Note 40 Pro", p: 165000, i: "https://www.cellstoreplus.com/wp-content/uploads/2024/07/note40-pro-5.webp" },
    { n: "Infinix Note 50", p: 175000, i: "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:1080/plain/https://storage.googleapis.com/takeapp/media/cmcyiqqjo000604l7gf1s6e26.png" },
    { n: "Infinix Note 50 Pro", p: 205000, i: "https://www.peru-smart.com/wp-content/uploads/2025/08/CELU1118PURPURA-256GB.jpg" },
    { n: "Infinix Note Edge", p: 225000, i: "https://west-africa.pro.infinixmobility.com/media/catalog/product/n/o/note_edge_x6887_lunar_titanium_base1_3.png" },
    { n: "Infinix GT 30 Pro", p: 300000, i: "https://st.gsmarena.com/imgroot/news/25/05/infinix-gt-30-pro-ofic/inline/-660/gsmarena_001.jpg" },
    { n: "Infinix Zero Ultra", p: 370000, i: "https://cdn.kalvo.com/uploads/img/gallery/infinix-zero-ultra-3.jpg" }
];

function afficherProduits(data) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = data.map(p => `
        <div class="card">
            <div class="img-container">
                <img src="${p.i}" alt="${p.n}" loading="lazy">
            </div>
            <h3>${p.n}</h3>
            <p class="price">${p.p.toLocaleString()} FCFA</p>
            <button onclick="choisir('${p.n.replace(/'/g, "\\'")}', ${p.p})">COMMANDER</button>
        </div>
    `).join('');
}

function filtrerProduits() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtrés = catalogue.filter(p => p.n.toLowerCase().includes(term));
    afficherProduits(filtrés);
}

function updatePaymentOptions() {
    const isTranches = document.querySelector('input[name="Paiement"]:value') === "Tranches";
    const cashLabel = document.getElementById("cashOption");
    
    // Si c'est par tranches, on cache l'option "Espèces" car on veut une trace numérique (TMoney/Flooz)
    if (document.querySelector('input[name="Paiement"]:checked').value === "Tranches") {
        cashLabel.style.display = "none";
    } else {
        cashLabel.style.display = "inline-block";
    }
}

function choisir(nom, prix) {
    document.getElementById("tel").value = nom;
    const tranche = Math.ceil(prix / 3);
    document.getElementById("msg").value = `Bonjour, je commande le ${nom} (${prix.toLocaleString()} FCFA). Mensualité : ${tranche.toLocaleString()} FCFA/mois.`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function envoyer() {
    const tel = document.getElementById("tel").value;
    const msg = document.getElementById("msg").value;
    const typeContrat = document.querySelector('input[name="Paiement"]:checked').value;
    const moyenReglement = document.querySelector('input[name="method"]:checked').value;

    if(!tel) return alert("Sélectionnez d'abord un téléphone !");

    let texte = `*NOUVELLE COMMANDE - EASYPHONE*%0A`;
    texte += `---%0A`;
    texte += `*Appareil :* ${tel}%0A`;
    texte += `*Option :* ${typeContrat}%0A`;
    texte += `*Règlement via :* ${moyenReglement}%0A`;
    texte += `*Notes client :* ${msg}`;

    window.open(`https://wa.me/22871957646?text=${texte}`, "_blank");
}

afficherProduits(catalogue);

function filtrerMarque(marque) {
    // Apparence des boutonsS
    const boutons = document.querySelectorAll('.filter-btn');
    boutons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText === marque) btn.classList.add('active');
    });

    // pour filtrer les données
    if (marque === 'Tous') {
        afficherProduits(catalogue);
    } else {
        const resultats = catalogue.filter(p => 
            p.n.toLowerCase().includes(marque.toLowerCase())
        );
        afficherProduits(resultats);
    }

    // Permet de scroller directement au catalogue après un choix de filtre
    document.getElementById('products-grid').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const links = document.querySelectorAll('a[href*="#formulaire"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = 'formulaire';
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });

                setTimeout(() => {
                    targetElement.classList.add('highlight-form');

                    setTimeout(() => {
                        targetElement.classList.remove('highlight-form');
                    }, 2500);
                }, 600);
            } else {
            }
        });
    });
    if (window.location.hash === '#formulaire') {
        const targetElement = document.getElementById('formulaire');
        if (targetElement) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                targetElement.classList.add('highlight-form');
            }, 500);
        }
    }
});