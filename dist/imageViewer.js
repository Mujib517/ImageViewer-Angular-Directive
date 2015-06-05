angular.module('comImageViewer',[])
    .directive('myImageViewer',function(){
        return{
            restrict:'E',
            templateUrl:'../component/src/imageViewer.tpl.html',
            scope:{
                images:'='
            },
            link:function(scope,elem,attr) {
                console.log(scope.images);
                scope.current = scope.images[0];

                scope.onImgChange=function(imgPath){
                        scope.current=imgPath;
                };
            }
        }
    });

;;(function (templates, undefined) {
  templates["component/src/imageViewer.tpl.html"] = "<style>\n" +
    "    .img-viewer-center{\n" +
    "        text-align:center;\n" +
    "    }\n" +
    "    .img-viewer-parent table{\n" +
    "        table-layout:fixed;\n" +
    "        height: 100%;\n" +
    "        width:100%;\n" +
    "\n" +
    "    }\n" +
    "    .img-viewer-parent table td {\n" +
    "        height: 100%;\n" +
    "        width: 100%;\n" +
    "    }\n" +
    "    .img-viewer-current-img{\n" +
    "        display:block;\n" +
    "        width:100%;\n" +
    "        max-width:100%;\n" +
    "        max-height:100%;\n" +
    "\n" +
    "    }\n" +
    "    .img-viewer-parent a {\n" +
    "        color:black;\n" +
    "        text-decoration: none;\n" +
    "    }\n" +
    "    .img-viewer-parent .right {\n" +
    "        float:right;\n" +
    "        z-index: 100;\n" +
    "        position:absolute;\n" +
    "    }\n" +
    "</style>\n" +
    "<div class=\"img-viewer-parent\">\n" +
    "    <table border=\"1\">\n" +
    "        <tr>\n" +
    "            <td> </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td>\n" +
    "                <a class=\"right\" href=\"javascript:void(0)\" ng-click=\"close()\">X</a>\n" +
    "                <img class=\"img-viewer-current-img\" ng-src=\"{{current}}\"/> </td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "            <td class=\"img-viewer-center\">\n" +
    "                 <span ng-repeat=\"img in images\">\n" +
    "                    <a href=\"javascript:void(0)\" ng-click=\"onImgChange(img)\"> <img ng-src=\"{{img}}\" width=\"40\" height=\"40\"/></a>&nbsp;\n" +
    "                 </span>\n" +
    "            </td>\n" +
    "        </tr>\n" +
    "    </table>\n" +
    "</div>";
})(this.templates = this.templates || {});