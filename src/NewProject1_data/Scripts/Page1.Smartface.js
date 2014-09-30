function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_tmrSayac_OnTimer(e) {
    if (myTimer > 0) {
        Pages.Page1.cntCanvas.lblTimer.text = myTimer;
        myTimer -= 1;
    } else if (myTimer == 0) {
        Pages.Page1.cntCanvas.lblTimer.text = "Start";
        Pages.Page1.cntCanvas.lblTimer.touchEnabled = true;
        isStart = false;
        Pages.Page1.EditBox1.visible = true;
        Pages.Page1.EditBox1.text = "";
        startAngle = 90;
        Pages.Page1.tmrSayac.active = false;
    }
}
function Page1_cvsTimer_OnDraw(e) {
    if (isStart) {
        var endAngle = 90;
        startAngle = startAngle + stepSize;
        this.drawArc({
            x1 : 0,
            y1 : 0,
            x2 : "100%",
            y2 : "100%",
            startAngle : startAngle,
            endAngle : endAngle,
             paint : {
                type : 0,
                fillColor : "#00CCFF",
                strokeColor : "#000000",
            }
        });
    } else {
        var endAngle = 90;
        startAngle = startAngle;
        this.drawArc({
            x1 : 0,
            y1 : 0,
            x2 : "100%",
            y2 : "100%",
            startAngle : startAngle,
            endAngle : endAngle,
            paint : {
                type : 0,
                fillColor : "#00CCFF",
                strokeColor : "#000000",
            }
        });
    }
}
function Page1_lblTimer_OnTouch(e) {
    if (Pages.Page1.EditBox1.text != "" || Pages.Page1.EditBox1.text != 0) {
        Pages.Page1.cntCanvas.lblTimer.alpha = 0.5;
        var textValue = Pages.Page1.EditBox1.text;
        myTimer = parseFloat(textValue);
        loopMs = myTimer * 1000;
        var carpan = loopMs / 50;
        stepSize = 360 / carpan;
    }
}
function Page1_lblTimer_OnTouchEnded(e) {
    Pages.Page1.cntCanvas.lblTimer.alpha = 1;
    if (Pages.Page1.EditBox1.text != "" || Pages.Page1.EditBox1.text != 0) {
        Pages.Page1.tmrSayac.active = true;
        isStart = true;
        counterState = 1;
        Pages.Page1.EditBox1.visible = false;
        Pages.Page1.cntCanvas.lblTimer.touchEnabled = false;
    }
}