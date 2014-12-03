/**
 * Created by mariaturzynska on 12/3/14.
 */
var app=angular.module('app',[]);

app.service('helloWorldService',function(){
    var name='maria '
    this.hello=function(){
        return "Hello World" + name;
    }
});

/* factory returning object */
app.factory('helloWorldFactory',function(){
    var name='turzyska';
    return {
        hello:function(){
            return "hello world " + name;
        }
    }
});

/* factory returning function - this follows the factory pattern of object oriented programming */

app.factory('helloFactory',function(){
    return function(name){
        this.name=name;
        this.hello=function(){
            return "Hello " + this.name;
        }
    }
});



app.controller('myCtrl',['$scope','helloWorldService', 'helloWorldFactory','helloFactory',function($scope,hWS,hWF,hF){
    $scope.name='dupa dupa';
    $scope.hWS=hWS.hello();
    $scope.hWF=hWF.hello();
    $scope.hF=new hF($scope.name).hello();

}])