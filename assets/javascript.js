
var tasks = [];

// stores the current time to the webpage
function displayDateTime() {
    var todayDate = moment().format('LLLL');
    $('#currentDay').html(todayDate);
    setTimeout(displayDateTime, 1000);
};

//onclick save button
$(".saveBtn").on("click", function() {
    var saveTaskId =$(this).attr("data-hour"); // this is linking the button to the textarea via id and data-hour
    var taskValue = $("#"+saveTaskId).val().trim(); // value is the task text content
    var taskObject = { // creating the object to store into the array 
        key: saveTaskId, // "id"
        value: taskValue // "textarea content"
    };

    var keyExists = false;

    // check if current tasks array contains the key. if found, overwrite it
   tasks.forEach((task) => {
    if(task.key === saveTaskId ) {
        task.value= taskValue;
        keyExists = true;
    }
   })
   // if the key does exist 
   if(!keyExists) {
       tasks.push(taskObject); // pushing the objects into the array
   }
    storeTasks();
});

// so we can check the hour and change the color of the time table
function hourChecker() {
    // get the current time
    var currentHour = moment().hours();

    $(".hour").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        };
    });
};

hourChecker();

//loads the tasks to the webpage
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = [];
    }
    //shows the tasks array in console 
    console.log(tasks);
    //looping all the tasks and then pushing them to the text 
    tasks.forEach((task) => {
        var keyId = task.key;
        var valueText = task.value;

        $("#"+keyId).val(valueText);
    })
};
  
//puts the task variable into webpage storage
var storeTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//calls tasks upon page load
$(document).ready(function () {
    displayDateTime();
    loadTasks();
});
