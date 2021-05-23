


//CATALOGO
export const categories = [
  {
    id: 3,
    name: 'Catálogo',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Catálogo',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Catálogo',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Catálogo',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Catálogo',
    photo_url: 'https://amp.businessinsider.com/images/5c084bf7bde70f4ea53f0436-750-563.jpg'
  },
];

export const recipes = [
  {
    catalogoId: 122,
    categoryId: 3,
    title: 'Autos de Perez',
    photo_url: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/05153908/Autos-mas-vendidos-Argentina.jpg',
    photosArray: [
      'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/05153908/Autos-mas-vendidos-Argentina.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q6ImUoL5oUjug_oJLgcHtT8fibnJkxJOkTXLP4U-ZmpdUy-N56O9sWzvMI9DTIqtMwM&usqp=CAU',
      'https://img.autocosmos.com/noticias/fotos/preview/NAZ_701d8a1d6dc24d948e4adbc1c959b0ac.jpg',
      'https://www.rentarlowcost.com/images/notas/alquiler%20de%20autos%20en%20argentina%20buenos%20aires%20salta.jpg'
      
    ],
    time: 'En curso',
    ingredients: [[0, '$200000'], [1, '$494395'], [2, '$42423']],
    description: 'Autos del año 2019 en adelante con poco uso. Excelente estado.'
  },
  {
    catalogoId: 3,
    categoryId: 4,
    title: 'Galería de Sophie',
    photo_url:
      'https://decobauhaus.com/wp-content/uploads/2019/11/CUADRO3PIEZAS.jpg',
    photosArray: [
      'https://decobauhaus.com/wp-content/uploads/2019/11/CUADRO3PIEZAS.jpg',
      'https://artenet.es/media/reviews/photos/thumbnail/550x550s/64/9b/e5/18706-cuadros-pequenos-y-unicos-56-1560267223.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/61N%2BvTmkVjL._AC_SX522_.jpg'
      
    ],
    time: '10/06/2021',
    ingredients: [
      [15, '$300000'],
      [16, '$55500'],
      
    ],
    description: 'Galería de cuadros famosos'
  },
  {
    catalogoId: 2,
    categoryId: 3,
    title: 'Vajillas antinguas',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71KXAhzy-tL._AC_SX466_.jpg',
    photosArray: [
      'https://images-na.ssl-images-amazon.com/images/I/71KXAhzy-tL._AC_SX466_.jpg',
      'https://i.pinimg.com/originals/41/4c/11/414c1104e8ca941fbee93082ae132090.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71ui6PdjpHL._AC_SX466_.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/71-Eb7aNk9L._AC_SX522_.jpg',
      
    ],
    time: '20/10/2021',
    ingredients: [
      [7, '$675'],
      [8, '$1675'],
      [9, '$29675']
      
    ],
    description:
      'Vajilla de colección de los años 1910. Mucha variedad de tazas, teteras y más!'
  },
  {
    catalogoId: 3,
    categoryId: 3,
    title: 'Venta de garage',
    photo_url:
      'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/hogartotal/T/Tips-para-organizar-una-venta-de-garaje-1.JPG',
    photosArray: [
      'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/hogartotal/T/Tips-para-organizar-una-venta-de-garaje-1.JPG',
      'https://www.espacity.com/web/sites/default/files/publico/styles/jpg_ampliada_blanca/public/Muebles/01476001000020_1.png?itok=L-kQu91w',
      'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10835076ANM001G.png',
      'https://http2.mlstatic.com/D_NQ_NP_774433-MLA44971440130_022021-O.jpg'
    ],
    time: '05/08/2021',
    ingredients: [
      [3, '$975'],
      [4, '$975'],
      [5, '$975']
    
    ],
    description: 
      'Venta de garage por todo el contenido de una casa'
      
  },
  {
    catalogoId: 1,
    categoryId: 3,
    title: 'Juguetes',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/716nOd2GWkL._AC_SY355_.jpg',
    photosArray: [
      'https://images-na.ssl-images-amazon.com/images/I/716nOd2GWkL._AC_SY355_.jpg',
      'https://m.media-amazon.com/images/I/51t6KO9aWGL._AC_SS350_.jpg'
      
    ],
    time: '30/11/2021',
    ingredients: [
      [11, '$5000'],
      [12, '$6000']
     
    ],
    description:
      'Muñecos Funko de colección'
  },
  {
    catalogoId: 4,
    categoryId: 1,
    title: 'Comix de colección',
    photo_url: 'https://c8.alamy.com/comp/MC76D1/collection-of-the-invincible-iron-man-vintage-marvel-comic-books-MC76D1.jpg',
    photosArray: [
      'https://c8.alamy.com/comp/MC76D1/collection-of-the-invincible-iron-man-vintage-marvel-comic-books-MC76D1.jpg',
      'https://http2.mlstatic.com/D_NQ_NP_845109-MLA41364173678_042020-V.jpg',
      'https://i.pinimg.com/originals/a3/fc/0e/a3fc0ebeac6708abc60d808ea44c4a51.png'
    ],
    time: '19/11/2021',
    ingredients: [
      [13, '$7000'],
      [14, '$5000']
      
    ],
    description:
      'Historietas/Comix coleccionables'
  },
  {
    catalogoId: 5,
    categoryId: 1,
    title: 'Joyas de la familia Stephen',
    photo_url:
      'https://estaticos-cdn.prensaiberica.es/clip/10139f5f-4677-44bb-8172-a6bcfaa10edc_16-9-aspect-ratio_default_0.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 13/12/2021,
    ingredients: [
      [33, '1/2 teaspoons'],
      [32, '4 tablespoons']
      
    ],
    description:
      '...'
  },
  {
    catalogoId: 6,
    categoryId: 2,
    title: 'Cuadros galería Jaime',
    photo_url:
      'https://m.media-amazon.com/images/I/61W36IjPwwL._AC_SS450_.jpg',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 5/8/2022,
    ingredients: [
      [30, '$3335'],
      [31, '$3335'],
      [32, '$3335'],
      [33, '$3335']
    ],
    description:
      '...'
  },
  {
    catalogoId: 0,
    categoryId: 0,
    title: 'Inmuebles Familia Gomez',
    photo_url: 'https://i.blogs.es/8e8f64/lo-de-que-comprar-una-casa-es-la-mejor-inversion-hay-generaciones-que-ya-no-lo-ven-ni-de-lejos---1/450_1000.jpg',
    photosArray: [
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '200ml'], [1, '5g'], [2, '300g']],
    description:
      '...'
  },
  {
    catalogoId: 7,
    categoryId: 2,
    title: 'Autos viejos',
    photo_url: 'https://d3po9jkuwb69jo.cloudfront.net/media/uploads/2018/12/18/como-asegurar-auto-viejo.png',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://www.kcet.org/sites/kl/files/styles/kl_image_large/public/thumbnails/image/square_hero_desktop_2x_sfs_spaghetti_carbonara_clr-3.jpg?itok=T-rsBDIZ',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [35, '50g'],
      [35, '100g'],
      [4, '2 teaspoons']
    ],
    description:
      '...'
  },
  {
    catalogoId: 8,
    categoryId: 2,
    title: 'Ropa de Messi firmada',
    photo_url: 'http://cdn.shopify.com/s/files/1/0015/7011/1535/products/iclmbs78_lionel-messi-official-back-signed-barcelona-2017-18-home-shirt_1200x1200.png?v=1535896037',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [30, '1 large'],
      [25, '1 pound']
     
    ],
    description:
      '...'
  }
];


//productos del catalogo
export const detalleproducto = [
  {
    productoid: 0,
    name: 'Auto 1',
    photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q6ImUoL5oUjug_oJLgcHtT8fibnJkxJOkTXLP4U-ZmpdUy-N56O9sWzvMI9DTIqtMwM&usqp=CAU',
    description:'blabla'
  },
  {
    productoid: 1,
    name: 'Auto 2',
    photo_url: 'https://img.autocosmos.com/noticias/fotos/preview/NAZ_701d8a1d6dc24d948e4adbc1c959b0ac.jpg',
    description:'blabla'
  },
  {
    productoid: 2,
    name: 'Auto 3',
    photo_url: 'https://www.rentarlowcost.com/images/notas/alquiler%20de%20autos%20en%20argentina%20buenos%20aires%20salta.jpg',
    description:'blabla'
  },
  {
    productoid: 3,
    name: 'Mesa 1',
    photo_url: 'https://www.espacity.com/web/sites/default/files/publico/styles/jpg_ampliada_blanca/public/Muebles/01476001000020_1.png?itok=L-kQu91w',
    description:'blabla'

  },
  {
    productoid: 4,
    name: 'Mesa redonda',
    photo_url: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10835076ANM001G.png',
    description:'blabla'
  },
  {
    productoid: 5,
    name: 'Mesa 2',
    photo_url: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10835076ANM001G.png',
    description:'blabla'

  },
  {
    productoid: 6,
    name: 'Mesa 3',
    photo_url: 'https://image.architonic.com/img_pro2-4/144/1958/mesa-159071-b.jpg',
    description:'blabla'
  
  },
  {
    productoid: 7,
    name: 'taza 1',
    photo_url:'https://i.pinimg.com/originals/41/4c/11/414c1104e8ca941fbee93082ae132090.jpg',
    description:'blabla'
  },
  {
    productoid: 8,
    name: 'taza 2',
    photo_url:'https://images-na.ssl-images-amazon.com/images/I/71ui6PdjpHL._AC_SX466_.jpg',
    description:'blabla'      
  },
  {
    productoid: 9,
    name: 'taza 3',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71-Eb7aNk9L._AC_SX522_.jpg',
    description:'blabla'
  },
  {
    productoid: 10,
    name: 'garage 1',
    photo_url: 'https://i.pinimg.com/originals/3e/41/d4/3e41d4713e5fcb513a3c1cac14b4597f.jpg',
    description:'blabla'
  },
  {
    productoid: 11,
    name: 'Ron',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/716nOd2GWkL._AC_SY355_.jpg',
    description:'blabla'
  },
  {
    productoid: 12,
    name: 'Harry',
    photo_url: 'https://m.media-amazon.com/images/I/51t6KO9aWGL._AC_SS350_.jpg',
    description:'blabla'
  },
  {
    productoid: 13,
    name: 'Marvel',
    photo_url: 'https://http2.mlstatic.com/D_NQ_NP_845109-MLA41364173678_042020-V.jpg',
    description:'blabla'    
  },
  {
    productoid: 14,
    name: 'Batman',
    photo_url: 'https://i.pinimg.com/originals/a3/fc/0e/a3fc0ebeac6708abc60d808ea44c4a51.png',
    description:'blabla'
  },
  {
    productoid: 15,
    name: 'cuadro 1',
    photo_url: 'https://artenet.es/media/reviews/photos/thumbnail/550x550s/64/9b/e5/18706-cuadros-pequenos-y-unicos-56-1560267223.jpg',
    description:'blabla'    
  },
  {
    productoid: 16,
    name: 'cuadro 2',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/61N%2BvTmkVjL._AC_SX522_.jpg',
    description:'blabla'
  },
  {
    productoid: 17,
    name: 'Quarts neutral oil',
    photo_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    productoid: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg',
    description:'blabla'
  },
  {
    productoid: 19,
    name: 'Onion Powder',
    photo_url: 'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg',
    description:'blabla'
  },
  {
    productoid: 20,
    name: 'MSG',
    photo_url: 'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg',
    description:'blabla'
  },
  {
    productoid: 21,
    name: 'Chicken Breast',
    photo_url:'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6',
    description:'blabla'
  },
  {
    productoid: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg',
    description:'blabla'
  },
  {
    productoid: 23,
    name: 'Tomato paste',
    photo_url: 'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg',
    description:'blabla'
  },
  {
    productoid: 24,
    name: 'Chilli Powder',
    photo_url: 'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6',
    description:'blabla'
  },
  {
    productoid: 25,
    name: 'Ground Beef',
    photo_url: 'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a',
    description:'blabla'
  },
  {
    productoid: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url: 'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg',
    description:'blabla'
  },
  {
    productoid: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg',
    description:'blabla'
  },
  {
    productoid: 28,
    name: 'Firtos',
    photo_url: 'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg',
    description:'blabla'
  },
  {
    productoid: 29,
    name: 'Shredded cheddar',
    photo_url: 'https://image.shutterstock.com/image-z/top-view-small-bowl-filled-260nw-284460308.jpg',
    description:'blabla'
  },
  {
    productoid: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg',
    description:'blabla'
  },

  {
    productoid: 31,
    name: 'Ground cumin',
    photo_url:'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg',
    description:'blabla'
  },
  {
    productoid: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg',
    description:'blabla'
  },
  {
    productoid: 33,
    name: 'Flaky white fish',
    photo_url: 'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg',
    description:'blabla'
  },
  {
    productoid: 34,
    name: 'Avocado',
    photo_url: 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg',
    description:'blabla'
  },
  {
    productoid: 35,
    name: 'Red Pepper Flakes',
    photo_url: 'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg',
    description:'blabla'
  }
  
];

//MIS PRODUCTOS
export const misproductos = [
  {
    id: 3344,
    titulo: 'Barbies',
    categoria:'.',
    imagen:'https://cnnespanol.cnn.com/wp-content/uploads/2015/06/barbies.jpeg',
    descripcion:'Barbies coleccionables del año 1980',
    preciobase:'$2000',
    estado: 'En curso'
  },
  {
    id: 3349,
    titulo: 'Autos',
    categoria:'.',
    imagen:'https://images-na.ssl-images-amazon.com/images/I/61Y%2B7L4Kp-L._AC_SX425_.jpg',
    descripcion:'Autitos de juguete',
    preciobase:'$2500',
    estado: 'Finalizado'

  },
  {
    id: 3350,
    titulo: 'Autos 2',
    categoria:'.',
    imagen:'https://www.dhresource.com/0x0/f2/albu/g8/M01/D0/FF/rBVaV1yWTpGAXEAQAAjr9KKxTsE322.jpg',
    descripcion:'Autitos de juguete',
    preciobase:'$2600',
    estado: 'Pendiente'

  },

];


//MEDIOS DE PAGO: TARJETAS
export const tarjetas = [
  {
    id: 1,
    name: 'VISA',
    number: '5462985265321598'
  },
  {
    id: 2,
    name: 'MasterCard',
    number: '4268597135486245'
  },
  {
    id: 3,
    name: 'AMEX',
    number: '2589631478592348'
  },
];


//MEDIOS DE PAGO: CUENTAS
export const cuentas = [
  {
    id: 1,
    name: 'Caja de ahorros BBVA',
    number: '5462985265321598'
  },
  {
    id: 2,
    name: 'Cuenta Corriente Santander',
    number: '4268597135486245'
  },
  {
    id: 3,
    name: 'Cuenta Corriente ICBC',
    number: '2589631478592348'
  },
];


//categoría de productos
var index = 0;
export const categoria = [
  { key: index++, section: true, label: "Categorias" },
  { key: index++, label: "Antigüedades y Colecciones" },
  { key: index++, label: "Arte" },
  { key: index++, label: "Autos, Motos y Otros" },
  { key: index++, label: "Belleza y Cuidado Personal" },
  { key: index++, label: "Cámaras y Accesorios" },
  { key: index++, label: "Celulares y Teléfonos" },
  { key: index++, label: "Computación" },
  { key: index++, label: "Consolas y Videojuegos" },
  { key: index++, label: "Construcción" },
  { key: index++, label: "Electrodomésticos y Aires Ac." },
  { key: index++, label: "Electrónica, Audio y Video" },
  { key: index++, label: "Herramientas" },
  { key: index++, label: "Hogar, Muebles y Jardín" },
  { key: index++, label: "Inmuebles" },
  { key: index++, label: "Instrumentos Musicales" },
  { key: index++, label: "Joyas y Relojes" },
  { key: index++, label: "Juegos y Juguetes" },
  { key: index++, label: "Libros, Revistas y Comics" },
  { key: index++, label: "Música, Películas y Series" },
  { key: index++, label: "Objetos de diseñador" },
  { key: index++, label: "Ropa y Accesorios" },
  { key: index++, label: "Otras categorías" },
];
