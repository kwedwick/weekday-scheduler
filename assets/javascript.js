

var tasks = [];


function displayDateTime() {
    var todayDate = moment().format('LLLL');
    $('#currentDay').html(todayDate);
    setTimeout(displayDateTime, 1000);
};

$(".saveBtn").on("click", function() {
    var saveTaskId =$(this).attr("data-hour");
    var taskValue = $("#"+saveTaskId).val().trim();
    var taskObject = {
        key: saveTaskId,
        value: taskValue
    };

    var keyExists = false;

    // check if current tasks array contains the key. if found, overwrite it
   tasks.forEach((task) => {
    if(task.key === saveTaskId ) {
        task.value= taskValue;
        keyExists = true;
    }
   })

   if(!keyExists) {
       tasks.push(taskObject);
   }

    storeTasks();
});






var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = [];
    }

    console.log(tasks);

    // for (let index = 0; index < tasks.length; index++) {
       
    //     var keyId = tasks[index].key;
    //     var valueText = tasks[index]
        
    // }

    tasks.forEach((task) => {
        var keyId = task.key;
        var valueText = task.value;

        $("#"+keyId).val(valueText);
    })
  
    // loop over object properties
    // $.each(tasks, function (key, value) {
    //   // then loop over sub-array
    //   arr.forEach(function (task) {
    //     createTask(task.text, task.date, list);
    //   });
    // });
};
  

var storeTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(document).ready(function () {
    displayDateTime();
    loadTasks();
});
