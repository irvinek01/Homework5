$(".saveBtn").on("click", function(){
    var textInput = ($(this)).siblings(".description").val();
    var hourDiv = ($(this)).parent("div").attr("id");
    window.localStorage.setItem(hourDiv, textInput);
    displayTodos();
});
function timeDisplayLive(){
    var todayAndTime = moment();
    $("#currentDay").text(todayAndTime.format("[Today is] dddd[, at] hh:mm:ss a"));	
}
function displayTodos() {
    var divHour = 9;
    while ( divHour <= 17){
        var textInputfrmStr = window.localStorage.getItem("hour-"+divHour);
        $("#hour-"+divHour+" > textarea").val(textInputfrmStr);
        divHour+=1;
    }
}
function pastPresentFuture(){
    var time = moment().format("HH");
// addClass past(greyGreaterthanHr) present(redEqualsHour) future(greenLessthanHr) looped by div id hour number
    var divHour = 9;
    while ( divHour <= 17){
        if (time > divHour ) {
            $("#hour-"+divHour).addClass("past");
        } else if (time == divHour ) {
            $("#hour-"+divHour).addClass("present");
        } else if (time < divHour ) {
            $("#hour-"+divHour).addClass("future");
        }
        divHour+=1;
    }
}
displayTodos();
setInterval(timeDisplayLive, 1000);
setInterval(pastPresentFuture, 500);