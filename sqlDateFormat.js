// -------------------------------------------------
// Convert a javascript date into a format for use in SQL Server timedate
// columns.
// -------------------------------------------------
function sqlDateFormat(date) {
  formattedDate = date().toISOString().slice(0, 19).replace('T', ' ');

  return formattedDate;
};
