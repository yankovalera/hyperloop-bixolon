var Activity = require('android.app.Activity');

var Handler = require('android.os.Handler');

activity = new Activity(Ti.Android.currentActivity);
handler = new Handler(function(res){
    //TODO get the handler working
});

var bixolonPrinter  = new Bixolon(activity, handler, null);
bixolonPrinter.connect("XX:XX:XX:XX:XX:XX");

var ticket = "TEXT TO PRINT";

//workaround for connection time wait
setTimeout(function (){
    bixolonPrinter.printText(ticket, 0, 0, 0, false);
    bixolonPrinter.disconnect();
}, 100000);
