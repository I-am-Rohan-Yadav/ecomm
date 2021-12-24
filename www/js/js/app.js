// Dom7
var $ = Dom7;

// Theme
var theme = 'ios';

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized for all pages
  $('.page-content').on('scroll', function () {

    /* scroll from top and add class */
    if ($(this).scrollTop() > '10') {
      $('.navbar').addClass('active');
    } else {
      $('.navbar').removeClass('active');
    }
  });

  /* coverimg */
  $('.coverimg').each(function () {
    var imgpath = $(this).find('img');
    $(this).css('background-image', 'url(' + imgpath.attr('src') + ')');
    imgpath.hide();
  });

  $('.accordion-toggle').on('click', function () {
    $(this).toggleClass('active')
    $(this).closest('.accordion-list').find('.accordion-content').toggleClass('show')
  })
});

$(document).on('page:init', '.page[data-name="splash"]', function (e) {
  setTimeout(function () {
    app.views.main.router.navigate('/landing/')
  }, 3000)

})

$(document).on('page:init', '.page[data-name="home"]', function (e) {


  // for home page
  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 50);
  }
  var areachart = document.getElementById('areachart').getContext('2d');
  var gradient = areachart.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, '#FFC374');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
  var myareachartCofig = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: gradient,
        borderColor: '#FFC374',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true
        },
        x: {
          fontColor: '#999999',
        }
      }
    }
  }
  var myAreaChart = new Chart(areachart, myareachartCofig);

  /* my area chart randomize */
  setInterval(function () {
    myareachartCofig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreaChart.update();
  }, 2000);

  /* areachart small chart 1*/
  var areachartsmall1 = document.getElementById('smallchart1').getContext('2d');
  var gradientsmall1 = areachart.createLinearGradient(0, 0, 0, 400);
  gradientsmall1.addColorStop(0, '#BAF6CE');
  gradientsmall1.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
  var myareasmallchartCofig1 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: gradientsmall1,
        borderColor: '#65E5A1',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreasmallChart1 = new Chart(areachartsmall1, myareasmallchartCofig1);

  /* my area small chart randomize */
  setInterval(function () {
    myareasmallchartCofig1.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreasmallChart1.update();
  }, 2000);


  /* areachart small chart 2*/
  var areachartsmall2 = document.getElementById('smallchart2').getContext('2d');
  var gradientsmall2 = areachart.createLinearGradient(0, 0, 0, 400);
  gradientsmall2.addColorStop(0, '#FFE2BB');
  gradientsmall2.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
  var myareasmallchartCofig2 = {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: gradientsmall2,
        borderColor: '#FFC374',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true
        },
        x: {
          display: false,
        }
      }
    }
  }
  var myAreasmallChart2 = new Chart(areachartsmall2, myareasmallchartCofig2);

  /* my area small chart 2 randomize */
  setInterval(function () {
    myareasmallchartCofig2.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myAreasmallChart2.update();
  }, 2000);



  /* Progress circle  */
  var progressCircles = new ProgressBar.Circle(progressCircle1, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCircles.text.style.fontSize = '20px';
  progressCircles.animate(0.8);  // Number from 0.0 to 1.0

  var progressCirclesred = new ProgressBar.Circle(progressCircle2, {
    color: '#FB737C',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FB737C', width: 10 },
    to: { color: '#FB737C', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCirclesred.text.style.fontSize = '20px';
  progressCirclesred.animate(0.2);  // Number from 0.0 to 1.0


  /* Projects circles */
  var progressCirclesProject1 = new ProgressBar.Circle(progressCircle3, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
      }

    }
  });
  progressCirclesProject1.text.style.fontSize = '20px';
  progressCirclesProject1.animate(0.8);


  var progressCirclesProject3 = new ProgressBar.Circle(progressCircle4, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
      }

    }
  });
  progressCirclesProject3.text.style.fontSize = '20px';
  progressCirclesProject3.animate(0.75);


  var progressCirclesProject4 = new ProgressBar.Circle(progressCircle5, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
      }

    }
  });
  progressCirclesProject4.text.style.fontSize = '20px';
  progressCirclesProject4.animate(0.53);


  var progressCirclesProject5 = new ProgressBar.Circle(progressCircle6, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small> <br><small class='text-muted text-dark text-uppercase'>Done</small>");
      }

    }
  });
  progressCirclesProject5.text.style.fontSize = '20px';
  progressCirclesProject5.animate(0.8);

  /* dark mode */
  $('#darkmode').on('click', function () {
    if ($(this).is(':checked') === true) {
      $('html').addClass('theme-dark');
    } else {
      $('html').removeClass('theme-dark');
    }
  })

  /* swiper carousel highlights */
  var swiper1 = app.swiper.create(".swiperhighlight", {
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false
  });

  /* swiper carousel swiperprojects */
  var swiper2 = app.swiper.create(".swiperprojects", {
    slidesPerView: "auto",
    spaceBetween: 15,
    pagination: false
  });

})

$(document).on('page:init', '.page[data-name="stats"]', function (e) {
  /* chart js areachart */
  window.randomScalingFactor = function () {
    return Math.round(Math.random() * 50);
  }
  var barchart = document.getElementById('barchart').getContext('2d');
  var mybarchartCofig = {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
      datasets: [{
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: "#E3EAFE",
        fill: true,
        tension: 0.4,
      },
      {
        label: '# of Votes',
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: "#7297F8",
        fill: true,
        tension: 0.4,
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true
        },
        x: {

        },
      }
    }
  }
  var myBarChart = new Chart(barchart, mybarchartCofig);

  /* my area chart randomize */
  setInterval(function () {
    mybarchartCofig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    myBarChart.update();
  }, 2000);
  /* swiper carousel highlights */
  var swiper1 = app.swiper.create(".swiperhighlight", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });
})

$(document).on('page:init', '.page[data-name="pinned"]', function (e) {

  /* Projects circles */
  var progressCirclesProject7 = new ProgressBar.Circle(progressCircle7, {
    color: '#7297F8',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    trailColor: '#D6DEF9',
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#7297F8', width: 10 },
    to: { color: '#7297F8', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCirclesProject7.text.style.fontSize = '20px';
  progressCirclesProject7.animate(0.8);


  var progressCirclesProject8 = new ProgressBar.Circle(progressCircle8, {
    color: '#65E5A1',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    trailColor: '#D3EEE7',
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#65E5A1', width: 10 },
    to: { color: '#65E5A1', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCirclesProject8.text.style.fontSize = '20px';
  progressCirclesProject8.animate(0.75);


  var progressCirclesProject9 = new ProgressBar.Circle(progressCircle9, {
    color: '#FB737C',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 10,
    trailColor: '#F1D7E0',
    easing: 'easeInOut',
    trailColor: 'rgba(0, 0, 0, 0.08)',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#FB737C', width: 10 },
    to: { color: '#FB737C', width: 10 },
    // Set default step function for all animate calls
    step: function (state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "<small>%<small>");
      }

    }
  });
  progressCirclesProject9.text.style.fontSize = '20px';
  progressCirclesProject9.animate(0.53);

  /* swiper carousel highlights */
  var swiper1 = app.swiper.create(".swipersummary", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });

  /* swiper carousel swiperprojects */
  var swiper2 = app.swiper.create(".swiperprojects", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });

})

$(document).on('page:init', '.page[data-name="profile"]', function (e) {
  /* swiper carousel summary blocks */
  var swiper1 = app.swiper.create(".swipersummary", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });
})

$(document).on('page:init', '.page[data-name="shophome"]', function (e) {
  /* swiper carousel categories */
  var swiper1 = app.swiper.create(".swipercategory", {
    slidesPerView: "auto",
    spaceBetween: 0,
    pagination: false
  });

  /* swiper carousel projects */
  var swiper2 = app.swiper.create(".swipertrending", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });

  /* filter sliders range picker for filter */
  var html5Slider = document.getElementById('rangeslider');
  noUiSlider.create(html5Slider, {
    start: [100, 200],
    connect: true,
    range: {
      'min': 0,
      'max': 500
    }
  });

  var inputNumber = document.getElementById('input-number');
  var select = document.getElementById('input-select');

  html5Slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];

    if (handle) {
      inputNumber.value = value;
    } else {
      select.value = Math.round(value);
    }
  });

  select.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });

})
$(document).on('page:init', '.page[data-name="product"]', function (e) {
  /* swiper carousel projects */
  var swiper2 = app.swiper.create(".swipertrending", {
    slidesPerView: "auto",
    spaceBetween: 18,
    pagination: false
  });
})

$(document).on('page:init', '.page[data-name="todohome"]', function (e) {

  /* Create Popup with swipe to close */
  var swipeToClosePopup = app.popup.create({
    el: '.popup-swipe-to-close',
    swipeToClose: true,
  });

  /* Create Popup with swipe to close handler */
  var swipeToClosePopup = app.popup.create({
    el: '.popup-swipe-to-close-handler',
    swipeToClose: true,
    swipeHandler: '.my-swipe-to-close-handler',
  });

  /* calendar time*/
  calendarDateTime = app.calendar.create({
    inputEl: '#demo-calendar-date-time',
    timePicker: true,
    dateFormat: { month: 'numeric', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' },
  });


})

$(document).on('page:init', '.page[data-name="todaystask"]', function (e) {
  /* scroll dates */
  var total = 0;
  $('.date-list').find('li').each(function () {
    total = total + $(this).outerWidth();
    $('.date-list').css('width', (total + 10) + 'px');
  });

  $('.date-list li').on('click', function () {
    $(this).closest('.date-list').children('li').removeClass('active');
    $(this).addClass('active');
  })
})

$(document).on('page:init', '.page[data-name="calendartask"]', function (e) {
  /* calendar dates */
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  calendarInline = app.calendar.create({
    containerEl: '#demo-calendar-inline-container',
    value: [new Date()],
    weekHeader: true,
    renderToolbar: function () {
      return `
          <div class="toolbar calendar-custom-toolbar no-shadow">
            <div class="toolbar-inner">
              <div class="left">
                <a href="#" class="link icon-only"><i class="icon icon-back ${app.theme === 'md' ? 'color-black' : ''}"></i></a>
              </div>
              <div class="center"></div>
              <div class="right">
                <a href="#" class="link icon-only"><i class="icon icon-forward ${app.theme === 'md' ? 'color-black' : ''}"></i></a>
              </div>
            </div>
          </div>
          `;
    },
    on: {
      init: function (c) {
        $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
        $('.calendar-custom-toolbar .left .link').on('click', function () {
          calendarInline.prevMonth();
        });
        $('.calendar-custom-toolbar .right .link').on('click', function () {
          calendarInline.nextMonth();
        });
      },
      monthYearChangeStart: function (c) {
        $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ', ' + c.currentYear);
      }
    }
  });

})