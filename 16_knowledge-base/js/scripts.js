// select
const element = document.querySelector('#select');
const choices = new Choices(element, {
  allowHTML: true,
  searchEnabled: false,
  placeholder: true,
  itemSelectText: '',
});

// карта
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.87969005894625,2.3804130888214003],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 12
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/location.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-14, -40],
  })

  myMap.geoObjects.add(myPlacemark);
}

// валидация формы
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    },
    email: {
      required: true,
      email: true,
    }
  },

  messages: {
    name: 'Вы не ввели имя',
    tel: 'Вы не ввели телефон',
    email: 'Вы не ввели e-mail'
  },

  colorWrong: '#FF5C00',
});

// tooltip
tippy('#info', {
  content: 'Глава 2, страница 176',
  maxWidth: 163,
})
