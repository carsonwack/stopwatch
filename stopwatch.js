//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function() {

  //  Click events are done for us:
  $("#lap").click(stopwatch.recordLap);
  $("#stop").click(stopwatch.stop);
  $("#reset").click(stopwatch.reset);
  $("#start").click(stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var running = false;

//  Our stopwatch object.
var stopwatch = {

  time: 0,
  lap: 1,

  reset: function() {

    stopwatch.stop()

    stopwatch.time = 0;
    stopwatch.lap = 1;

    $("#laps").text("");

    $("#display").text("00:00");
  },

  start: function() {
    if (running == false) {
      counterTime = setInterval(stopwatch.count, 1000);
      running = true;
    }


  },
  stop: function() {
    clearInterval(counterTime);
    running = false;
  },


  recordLap: function() {
    displayTime = stopwatch.timeConverter(stopwatch.time);
    $("#laps").append(`<p>Lap ${stopwatch.lap} ${displayTime}</p>`);
    stopwatch.lap += 1;

  },
  count: function() {
    stopwatch.time += 1;
    displayTime = stopwatch.timeConverter(stopwatch.time);
    $("#display").text(displayTime);
  },



  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
