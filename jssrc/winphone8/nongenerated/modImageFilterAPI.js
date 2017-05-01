//Type your code here
var blurImage = function() {
    var imgBlurBg = kony.image.createImageFromSnapShot(frmHome.flxScrlMainCont);
    kony.print("createImageFromSnapShot ##################");
    var filterObj = kony.filter.createFilter();
    kony.print("createFilter #################");
    var filterData = {
        "filterName": kony.filter.BOX_BLUR,
        "inputImage": imgBlurBg,
        "inputRadius": 10
    };
    filterObj.applyFilter(filterData);
    kony.print("applyFilter ##################3");
    var imageObj = filterObj.getOutputImage();
    kony.print("getOutputImage ###################");
    frmHome.imgFillter.rawBytes = imageObj.getImageAsRawBytes();
    kony.print("getImageAsRawBytes #######################");
    frmHome.imgFillter.isVisible = true;
};
//Type your code here