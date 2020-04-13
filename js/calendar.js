//Set calendar
var addM = 0;

setCalendar(addM);

var d = new Date();
var indexMonth = d.getMonth();

// Go previous month
function prevMonth() {
  if (indexMonth > 0) {
    addM--;
    setCalendar(addM);
    indexMonth--;
  }
  else {
    addM = -(d.getMonth());
    setCalendar(addM);
  }
}

// Go next month
function nextMonth() {
  if (indexMonth < 11) {
    addM++;
    setCalendar(addM);
    indexMonth++;
  }
  else {
    setCalendar(addM);
  }
}

function setCalendar(m) {
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  document.getElementById("days").innerHTML = "";

  document.getElementById("month").innerHTML = months[(d.getMonth() + m)];
  document.getElementById("year").innerHTML = d.getFullYear();

  var kalendae = new Date();
  kalendae.setFullYear(d.getFullYear(), (d.getMonth() + m) , 1);

  var weekday = kalendae.getDay();

  //Number of days in month
  function daysInMonth(month) {

    var daysInMonth = 0;

    if (months[month] == "Abril" || months[month] == "Junho" || months[month] == "Setembro" || months[month] == "Novembro") {
      daysInMonth = 30
    }
    else if (months[month] == "Fevereiro") {
      if (( d.getFullYear() % 4 == 0 && d.getFullYear() % 100 != 0 ) || (d.getFullYear() % 400 == 0)) { 
        daysInMonth = 29;
      } 
      else {
        daysInMonth = 28;
      }
    }
    else {
      daysInMonth = 31;
    }

    return daysInMonth;
  }

  var prevMonth = daysInMonth((d.getMonth() + m) - 1);

  // days out of selected month (prev)
  for(var i = (weekday - 1); i >= 0; i--) {
    document.getElementById("days").innerHTML += '<li><span class="dayout">' + (prevMonth - i) + '</li>\n';
  }

  // days of the selected month
  for(var i = 1; i <= daysInMonth((d.getMonth() + m)); i++){
    if((i == d.getDate()) && ((d.getMonth() + m) == d.getMonth())){
      document.getElementById("days").innerHTML += '<li><span class="active">' + i + '</span></li>\n';
    }
    else {
      document.getElementById("days").innerHTML += "<li>" + i + "</li>\n";
    }
    
  }

  var lastDay = new Date();
  lastDay.setFullYear(d.getFullYear(), (d.getMonth() + m), daysInMonth((d.getMonth() + m)));
  var lastWeekDay = lastDay.getDay();

  // days out of selected month (next)
  for(var i = 1; i < (7 - lastWeekDay); i++){
    document.getElementById("days").innerHTML += '<li><span class="dayout">' + i + '</li>\n';
  }

}
