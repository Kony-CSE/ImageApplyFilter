//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "POCImageFilter",
    appName: "POCImageFilter",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.168.196.160",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "POCImageFilter",
    isMFApp: false,
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();