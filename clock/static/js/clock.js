// Generated by CoffeeScript 1.6.1
(function() {

  $(function() {
    var container, updateHand;
    updateHand = function(value, total, length, hand) {
      while (value > total) {
        value -= total;
      }
      if (!value || value === total) {
        value = total;
        return hand.animate({
          hand: [value, total, length]
        }, 750, "bounce", function() {}, hand.attr({
          hand: [0, total, length]
        }));
      } else {
        return hand.animate({
          hand: [value, total, length]
        }, 750, "elastic");
      }
    };
    container = $('#time #clock');
    return container.each(function(index) {
      var clock, height, hour_hand, hour_hand_length, html, last_hour, last_minute, last_second, minute_hand, minute_hand_length, param, second_hand, second_hand_length, size, surround, surround_width, thick_hand_width, thin_hand_width, width;
      clock = Raphael(container[index], "100%", "100%");
      width = $(clock.canvas.parentElement).width();
      height = $(clock.canvas.parentElement).height();
      size = Math.min(width, height);
      param = {
        stroke: "#fff",
        "stroke-linecap": "round"
      };
      html = [document.getElementById("h"), document.getElementById("m"), document.getElementById("s")];
      clock.customAttributes.hand = function(value, total, length) {
        var a, alpha, path;
        alpha = 360 / total * value;
        a = (90 - alpha) * Math.PI / 180;
        path = [["M", width / 2.0, height / 2.0], ["l", length * Math.cos(a), -1 * length * Math.sin(a)]];
        return {
          path: path
        };
      };
      second_hand_length = 92.0 * size / 256.0;
      minute_hand_length = 90.0 * size / 256.0;
      hour_hand_length = 60.0 * size / 256.0;
      surround_width = 7.0 * size / 256.0;
      thick_hand_width = 8.0 * size / 256.0;
      thin_hand_width = 4.0 * size / 256.0;
      second_hand = clock.path().attr(param).attr({
        hand: [0, 60, second_hand_length]
      }).attr({
        "stroke-width": thin_hand_width
      });
      minute_hand = clock.path().attr(param).attr({
        hand: [0, 60, minute_hand_length]
      }).attr({
        "stroke-width": thick_hand_width
      });
      hour_hand = clock.path().attr(param).attr({
        hand: [0, 12, hour_hand_length]
      }).attr({
        "stroke-width": thick_hand_width
      });
      surround = clock.circle(width / 2.0, height / 2.0, (size - surround_width) / 2.0).attr(param).attr({
        "stroke-width": surround_width
      });
      last_hour = -1;
      last_minute = -1;
      last_second = -1;
      return (function() {
        var d, days, dom, dow, hour, minute, month, months, second;
        d = new Date();
        hour = d.getHours();
        if (hour > 12) {
          hour -= 12;
        }
        minute = d.getMinutes() % 60;
        second = d.getSeconds() % 60;
        if (second !== last_second) {
          updateHand(second, 60, second_hand_length, second_hand);
          last_second = second;
        }
        if (minute !== last_minute) {
          updateHand(minute, 60, minute_hand_length, minute_hand);
          last_minute = minute;
        }
        if (hour !== last_hour) {
          updateHand(hour, 12, hour_hand_length, hour_hand);
          last_hour = hour;
        }
        if (minute < 10) {
          minute = "0" + minute;
        }
        $('#time h1').html("" + hour + ":" + minute);
        dow = d.getDay();
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dow = days[dow];
        dom = d.getDate();
        month = d.getMonth();
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        month = months[month];
        $('#time h2').html("" + dow + ", " + month + " " + dom);
        return setTimeout(arguments.callee, 1000);
      })();
    });
  });

}).call(this);
