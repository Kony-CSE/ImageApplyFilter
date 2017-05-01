function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxScrlMainCont = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "flxScrlMainCont",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "sknFlxSxrollTrans",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScrlMainCont.setDefaultUnit(kony.flex.DP);
    var Button00633aab662b44d = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnRed",
        "height": "50dp",
        "id": "Button00633aab662b44d",
        "isVisible": true,
        "left": "40dp",
        "onClick": AS_Button_8ee5aabafd0c445f9d0e44b728013acb,
        "skin": "sknBtnRed",
        "text": "Red",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0df651786d9494d = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknGreen",
        "height": "50dp",
        "id": "CopyButton0df651786d9494d",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknGreen",
        "text": "Green",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton090c61e658b354d = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnBlue",
        "height": "50dp",
        "id": "CopyButton090c61e658b354d",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknBtnBlue",
        "text": "Blue",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton05c550725beec4c = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnYellow",
        "height": "50dp",
        "id": "CopyButton05c550725beec4c",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknbtnYellow",
        "text": "Yellow",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton028379213765e4e = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknGreen",
        "height": "50dp",
        "id": "CopyButton028379213765e4e",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknGreen",
        "text": "Green",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0d9f2f7747e9d42 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnBlue",
        "height": "50dp",
        "id": "CopyButton0d9f2f7747e9d42",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknBtnBlue",
        "text": "Blue",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyButton0b2cb7a05ea3e40 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknbtnYellow",
        "height": "50dp",
        "id": "CopyButton0b2cb7a05ea3e40",
        "isVisible": true,
        "left": "40dp",
        "skin": "sknbtnYellow",
        "text": "Yellow",
        "top": "18dp",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxScrlMainCont.add(Button00633aab662b44d, CopyButton0df651786d9494d, CopyButton090c61e658b354d, CopyButton05c550725beec4c, CopyButton028379213765e4e, CopyButton0d9f2f7747e9d42, CopyButton0b2cb7a05ea3e40);
    var imgFillter = new kony.ui.Image2({
        "height": "100%",
        "id": "imgFillter",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(flxScrlMainCont, imgFillter);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFrmC1"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};