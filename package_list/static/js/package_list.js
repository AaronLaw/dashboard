// Generated by CoffeeScript 1.6.1
(function() {

  $(function() {
    return (function() {
      $.get('/package_list', function(response) {
        var delta, format_people, format_person, more, n, split1, split2, split3;
        console.log(JSON.stringify(response));
        format_person = function(person) {
          if (person.number > 1) {
            return person.owner_name + " (x" + person.number + ")";
          }
          return person.owner_name;
        };
        format_people = function(people) {
          var person, s, _i, _len;
          s = "";
          for (_i = 0, _len = people.length; _i < _len; _i++) {
            person = people[_i];
            s += format_person(person) + "<br/>";
          }
          return s;
        };
        n = response.people.length;
        if (n <= 3 * 7) {
          delta = n / 3;
          split1 = delta;
          split2 = 2 * delta;
          split3 = response.people.length;
          more = 0;
        } else {
          split1 = 7;
          split2 = 14;
          split3 = 20;
          more = n - 20;
        }
        $('#col1').html(format_people(response.people.slice(0, split1)));
        $('#col2').html(format_people(response.people.slice(split1, split2)));
        if (more > 0) {
          return $('#col3').html(format_people(response.people.slice(split2, split3)) + "( +" + more + " more )");
        } else {
          return $('#col3').html(format_people(response.people.slice(split2, split3)));
        }
      });
      return setTimeout(arguments.callee, 10000);
    })();
  });

}).call(this);
