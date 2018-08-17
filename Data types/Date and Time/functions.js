function getWeekDay(date) {
	let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
	return days[date.getDay()];
}

function getLocalDay(date) {
	
	return date.getDay() == 0 ? 7 : date.getDay();
}

function getDateAgo(date, days) {
   let newDate = new Date(date);
   newDate.setDate(date.getDate() - days);
   return newDate.getDate();
}

function getLastDayOfMonth(year, month){
	let date = new Date(year, month +1, 0);
	return date.getDate();
}

function getSecondsToday() {
	let dateNow = new Date();
	return dateNow.getHours()*3600 + dateNow.getMinutes()*60 + dateNow.getSeconds();
}

function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

function formatDate(date) {
  let diff = new Date() - date; 

  if (diff < 1000) { 
    return 'right now';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + ' min. ago';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); 
  
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}