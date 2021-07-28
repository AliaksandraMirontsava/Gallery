let myImageSlider = new Swiper('.image-slider', {
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   // Навигация
   // Буллеты, текущее положение, прогрессбор
   pagination: {
      el: '.swiper-pagination',
      //Буллеты
      clickable: true,
     
    // Динамические буллеты
      dynamicBullets: true,
 
     
      // Кастомные буллеты (создает нумерацию)
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   },
   //Включение/отключение
   // перетаскивания на ПК
   simulateTouch: false,
   // Чувствительность свайпа
   touchRatio: 1,
   // Угол срабатывания свайпа/перетаскивания
   touchAngle: 45,
   // Курсор перетаскивания
   grabCursor: true,


   //Переключение при клике на слайд
   slideToClickedSlide: true,

   //Навигация по хешу
   hashNavigation: {
    //Отслеживать состояние
    watchState: true,
   },

   //Управление клавиатурой
   keyboard: {
      //Включить/выключить
      enabled: true,
      //Включить/выключить
      //только когда слайдер
      //в пределах вьюпорта
      onlyInViewport: true,
      //Включить/выключить
      //управление клавиатурой
      //pageUp, pageDown
      pageUpDown: true,
   },

   //Управление колесом мыши
   mousewhell: {
   // Чувствительность колеса мыши
   sensitivity: 1,
   // Класс объекта на котором
   // будет срабатывать прокрутка мышью.
   /*   eventsTarget: ".image-slider" */
   },

    //отключение функционала если слайдов меньше чем нужно
     watchOverflow: true,

   //Автовысота
   autoHeight: true,

   // КОЛЛИЧЕСТВО СЛАЙДОВ ДЛЯ ПОКАЗА
   // можно указывать целые, не целые числа, и auto.
   slidesPerView: 3,
   //ОТСТУП МЕЖДУ СЛАЙДАМИ
   spaceBetween: 20,
   //КОЛЛИЧЕСТВО ПРОЛИСТЫВАЕМЫХ СЛАЙДОВ
   slidesPerGroup: 1,
   // Стартовый слайд
   initialSlide: 0,
   // Скорость
   speed:800,
   // горизонтальный слайдер
   direction: 'horizontal',
   //Эффекты переключения слайдов
   //Листание
   effect: 'slide',
   // АДАПТИВ СЛАЙДЕРА (Брайк поинт)
   // Ширина экрана
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },
//Доступность
ally: {
   //Включить/выключить
   enabled: true,
   // сообщения
   prevSlideMessage: 'Previous slide',
   nextSlideMessage: 'Next slide',
   firstSlideMessage: 'This is ths first slide',
   lastSlideMessage: 'This is the last slide',
   paginationBulletMessage: 'Go to slide {{index}}',
   notificationClass: 'swiper-notification',
   containerMessage: '',
   containerRoleDescriptionMessage: '',
   itemRoleDescriptionMessage: '',
   // и т.д
},

});


