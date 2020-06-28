

var tasks = [];


function displayDateTime() {
    var todayDate = moment().format('LLLL');
    $('#currentDay').html(todayDate);
    setTimeout(displayDateTime, 1000);
};

$(".saveBtn").on("click", function() {
    var saveTaskId =$(this).attr("data-hour");
    var taskValue = $("#"+saveTaskId).val();
    var taskObject = {
        key: saveTaskId,
        value: taskValue
    };
    tasks.push(taskObject);
    storeTasks();
});







var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        key: saveTaskId,
        taskValue
      };
    }
  
    // loop over object properties
    $.each(tasks, function (list, arr) {
      // then loop over sub-array
      arr.forEach(function (task) {
        createTask(task.text, task.date, list);
      });
    });
  };
  

var storeTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(document).ready(function () {
    displayDateTime();
    loadTasks();
});
