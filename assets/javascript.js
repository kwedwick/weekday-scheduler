function displayDateTime() {
    var todayDate = moment().format('LLLL');
    $('#currentDay').html(todayDate);
    setTimeout(displayDateTime, 1000);
};

$(document).ready(function() {
    displayDateTime();
});






























