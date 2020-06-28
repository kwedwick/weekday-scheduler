var tasks = [];

function displayDateTime() {
    var todayDate = moment().format('LLLL');
    $('#currentDay').html(todayDate);
    setTimeout(displayDateTime, 1000);
};










function saveTask() {

}


/*
var storeTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}; */

$(document).ready(function () {
    displayDateTime();
});
