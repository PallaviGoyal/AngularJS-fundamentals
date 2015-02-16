app.controller("myCtrl", function($scope) {

	$scope.name = "";
	$scope.getName = function() {
	if($scope.name === "")
		return $scope.name;	
	else
		return("Hello " + $scope.name);
	}

	$scope.alertName = function() {
			
	window.alert("Hello " + $scope.name);
	}
});
