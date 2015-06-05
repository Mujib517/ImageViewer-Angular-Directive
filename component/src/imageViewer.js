angular.module('comImageViewer',[])
    .directive('myImageViewer',function(){
        return{
            restrict:'E',
            templateUrl:'../component/src/imageViewer.tpl.html',
            scope:{
                images:'='
            },
            link:function(scope,elem,attr) {
                scope.current = scope.images[0];
                 scope.onImgChange=function(imgPath){
                        scope.current=imgPath;
                };
            }
        }
    });

