$(document).ready(function () {
  $(".datepicker").datepicker({ format: "dd/mm/yyyy", autoclose: true });

  $("#calculateButton").click(function () {
    var fromDate = moment($("#fromDate").datepicker("getDate"));
    var toDate = moment($("#toDate").datepicker("getDate"));

    if (!fromDate.isValid() || !toDate.isValid()) {
      alert("Please select both From and To dates.");
      return;
    }

    var diff = toDate.diff(fromDate);

    $("#results").html(`
      <p>Date interval between ${fromDate.format(
        "DD/MM/YYYY"
      )} and ${toDate.format("DD/MM/YYYY")}</p>
      <p>In years: ${toDate.diff(fromDate, "years")}</p>
      <p>In months: ${toDate.diff(fromDate, "months")}</p>
      <p>In weeks: ${toDate.diff(fromDate, "weeks")}</p>
      <p>In days: ${toDate.diff(fromDate, "days")}</p>
    `);
  });
});
