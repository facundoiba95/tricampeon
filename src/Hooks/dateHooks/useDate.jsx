// obtener fechas de Argentina

function formatDate(date) {
    const formatter = new Intl.DateTimeFormat('es-AR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      timeZone: 'America/Argentina/Buenos_Aires'
    });
  
    const [{ value: day },,{ value: month },,{ value: year }] = formatter.formatToParts(date);
    return `${year}-${month}-${day}`;
  }
  
  // fecha de ayer
  function getYesterday() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return formatDate(yesterday);
  }
  
  // fecha de mañana
  function getTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDate(tomorrow);
  }
  
  const dateToday = formatDate(new Date());
  const dateYesterday = getYesterday();
  const dateTomorrow = getTomorrow();
  
  export { dateToday, dateTomorrow, dateYesterday };