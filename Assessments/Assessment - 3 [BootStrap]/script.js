$(document).ready(function () {
  $("#calculateButton").click(function () {
    var fromDate = new Date($("#fromDate").val());
    var toDate = new Date($("#toDate").val());

    var diffInMilliseconds = toDate - fromDate;
    var diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    var diffInWeeks = Math.floor(diffInDays / 7);
    var diffInMonths =
      toDate.getMonth() -
      fromDate.getMonth() +
      12 * (toDate.getFullYear() - fromDate.getFullYear());
    var diffInYears = toDate.getFullYear() - fromDate.getFullYear();

    $("#results").html(`
      <p>Date interval between ${formatDate(
        fromDate
      )} and ${formatDate(toDate)}</p>
      <p>In years: ${diffInYears}</p>
      <p>In months: ${diffInMonths}</p>
      <p>In weeks: ${diffInWeeks}</p>
      <p>In days: ${diffInDays}</p>
    `);
  });

  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
});