myApp.controller('playerController', function($scope, $location, userFactory, tournamentFactory, drawFactory){
	console.log('in the player controller')
	$scope.users = [];
	$scope.draws = [];

	userFactory.getUsers(function(data){
		console.log(data)
		$scope.users = data;
	})	

	// drawFactory.getdraw(function(data){
	// 	console.log(data)
	// 	$scope.draws = data;
	// })

	// $scope.createDraw = function(){
	// 	// console.log('officially created a draw!')
	// 	console.log($scope.newDraw)
	// 	drawFactory.addDraw($scope.newDraw, function(data){
	// 		console.log('officially created a draw!')
	// 		console.log(data)
	// 		$scope.draws = data;
	// 		$scope.newDraw = {}
	// 	})

	// }	



	


})