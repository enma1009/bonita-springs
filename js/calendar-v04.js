$(document).ready(function() {
    let currentDate = new Date();
    function generateCalendar(d) {
      function monthDays(month, year) {
        let result = [];
        let days = new Date(year, month, 0).getDate();
        for (let i = 1; i <= days; i++) {
          result.push(i);
        }
        return result; 
      }
      Date.prototype.monthDays = function() {
        let d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
        return d.getDate();
      };
      let details = {
        totalDays: d.monthDays(),
        weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      };
      let start = new Date(d.getFullYear(), d.getMonth()).getDay();
      let cal = [];
      let day = 1;
      for (let i=0; i<7; i++) {
        cal.push('<div class="col-lg-1 text-center font-weight-bold align-items-stretch d-none d-lg-block"> <div class="weekday-heading d-none d-lg-block">' + details.weekDays[i] + '</div></div>');
      }
      for (let j = 0; j < details.totalDays+start; j++) {
        if (j < start || day < 1) {
          cal.push('<div class="col-lg-1 d-none d-lg-block align-items-stretch"><div class="empty-day d-none d-lg-block"></div></div>');
        } else {
          let weekday = 'day' + day;
          cal.push('<div class="col-12 col-lg-1 d-flex align-items-stretch"><div class="inner-content"><p class="day">' + day++ + '</p>' + bonitaEvents[weekday] +'</div></div>');
        }      
      }
      $('.seven-cols').append(cal);
      $('#month').text(details.months[d.getMonth()]);
      $('#year').text(d.getFullYear());

      // control arrows
      $('#right').click(function() {
        $('.seven-cols').html('<div></div>');
        if (currentDate.getMonth() === 11) {
          currentDate = new Date(currentDate.getFullYear() + 1, 0);
          console.log('after december', currentDate);
          generateCalendar(currentDate);
        } else {
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
          console.log(currentDate);
          generateCalendar(currentDate);
        }
      });
      $('#left').click(function() {
        $('.seven-cols').text('');
        if (currentDate.getMonth() === 0) {
          currentDate = new Date(currentDate.getFullYear() - 1, 11);
          generateCalendar(currentDate);
        } else {
          currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
          generateCalendar(currentDate);
        }
      });

    }
    generateCalendar(currentDate);  
  });