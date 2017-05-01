//Type your code here
var blurImage = function() {
  var date = new Date(); 
  var imgBlurBg = kony.image.createImageFromSnapShot(frmHome.flxScrlMainCont);  
  kony.print("createImageFromSnapShot()");
  var filterObj = kony.filter.createFilter();
  kony.print("createFilter()");
  var filterData = {
    "filterName": kony.filter.GAUSSIAN_BLUR,
    "inputImage": imgBlurBg,
    "inputRadius": 10
  };
  filterObj.applyFilter(filterData);
  kony.print("applyFilter()");
  var imageObj = filterObj.getOutputImage();
  kony.print("getOutputImage");
  
  frmHome.imgFillter.rawBytes=imageObj.getImageAsRawBytes(); 
  frmHome.imgFillter.isVisible = true;
  kony.print("getImageAsRawBytes()");
};
//Type your code here