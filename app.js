



var app = angular.module("myApp",[]);
	app.controller("personCtrl",function($scope){
          	$scope.result=function(){
          		var r=hexa($scope.myRed);
          		var g=hexa($scope.myGreen);
          		var b=hexa($scope.myBlue);
                     r=r.length>1?r:'0'+r;
                     g=g.length>1?g:'0'+g;
                     b=b.length>1?b:'0'+b;
                     r='#'+r+g+b;
                     ///alert(r);
                     $("#vue").css('background-color',r);
                     return r;
                     

                };
                
        });




$("form").submit(function( e ) {
  e.preventDefault();
});





//updateColor();





function hexa(decimal )
{
// converter  quotientdecimale_16
	chr="ABCDEF";
	var quotient="" , remainder;	
		do
		{
			remainder=decimal%16;
			quotient=((remainder<10)?remainder:chr[remainder-10])+quotient ;
		}while(decimal=Math.floor(decimal/16));
    return quotient;  	
}





