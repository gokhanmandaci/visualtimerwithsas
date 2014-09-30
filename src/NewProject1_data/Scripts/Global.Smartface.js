function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
}
/*function Global_Events_OnError(e) {
    switch (e.type) {
    case "Server Error":
    case "Size Overflow":
        alert(lang.networkError);
        break;
    default:
        SES.Analytics.eventLog("error", JSON.stringify(e));
        alert(lang.applicationError);
        break;
    }
}*/
var myTimer;
var stepSize = 1;
var newValue;
var startAngle = 90;
var isStart = false;
var counterState = 0;
var counterStateOneTouched = false;