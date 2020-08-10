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
      let count = 0;
      for (let i = 0; i <= 6; i++) {
        cal.push(['<tr>']);
        for (let j = 0; j < 7; j++) {
          if (i === 0) {
            cal[i].push('<td class="text-center font-weight-bold weekday">' + details.weekDays[j] + '</td>');
          } else if (day > details.totalDays) {
            cal[i].push('<td>&nbsp;</td>');
          } else {
            if (i === 1 && j < start) {
              cal[i].push('<td>&nbsp;</td>');
            } else {
                // console.log(j,i,day);
                const entries = Object.entries(data);
                console.log(count);
                // console.log(entries);
                // console.log(`${data}.day${day}`);
                // console.log(`${data}`);
              cal[i].push('<td class="day">' + day++ + `<div class="table-data">Today is day ${day-1} long text just to test</div>` +'</td>');
              count++;
            }
          }
        }
        cal[i].push('</tr>');
      }
      cal = cal.reduce(function(a, b) {
        return a.concat(b);
      }, []).join('');
      $('table').append(cal);
      $('#month').text(details.months[d.getMonth()]);
      $('#year').text(d.getFullYear());
      $('td.day').mouseover(function() {
        $(this).addClass('hover');
      }).mouseout(function() {
        $(this).removeClass('hover');
      });
    }
    generateCalendar(currentDate);
    
  });