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
      console.log(start);
      let cal = [];
      let day = 1;
    
      for (let i=0; i<7; i++) {
        cal.push('<div class="col-lg-1 d-none d-lg-block text-center font-weight-bold weekday">' + details.weekDays[i] + '</div>');
      }
      for (let i = 0; i <= 6; i++) {
        for (let j = 0; j < details.totalDays; j++) {
          if (j < start && i !== 1) {
            cal.push('<div class="col-lg-1 d-none d-lg-block"><span>empty</span></div>');
          } else if (j == start && day < details.totalDays) {
            cal.push('<div class="col-lg-1"><p class="day">' + day++ + `</p><div class="table-data">Today is day ${day-1} long text just to test</div>` +'</div>');
          }
          console.log(j);
          // if (day > details.totalDays) {
          //   cal.push('<div class="col-lg-1"><span>&nbsp;</span></div>');
          // } else {
          //   if (i === 1 && j < start) {
          //     cal.push('<div class="col-lg-1"><span>&nbsp;</span></div>');
          //   } else {
          //     cal.push('<div class="col-lg-1"><p class="day">' + day++ + `<div class="table-data">Today is day ${day-1} long text just to test</div>` +'</div>');
          //     count++;
          //   }
          // }
        }
      }
      // cal = cal.reduce(function(a, b) {
      //   return a.concat(b);
      // }, []).join('');
      $('.seven-cols').append(cal);
      $('#month').text(details.months[d.getMonth()]);
      $('#year').text(d.getFullYear());
    }
    generateCalendar(currentDate);
    
  });