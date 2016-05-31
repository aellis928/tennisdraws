myApp.controller('addPtoTController', function($scope, $location, userFactory, tournamentFactory, drawFactory, $routeParams){
	console.log('in the add players to tournament controller')
	$scope.users = [];
	$scope.tournaments = [];
	$scope.draws = []
	$scope.players =[]
	console.log($routeParams)

	tournamentFactory.getTournamentName($routeParams, function(data){
		$scope.tournament = data.data
	})

	tournamentFactory.getUsers($routeParams, function(data){
		console.log('here are the players', data.users)
		$scope.players = data.users;
	})

	userFactory.getUsers(function(data){
		console.log(' in the addPtoTController', data)
		$scope.users = data;
	})


	
	$scope.addUtoT = function(user){

		// console.log('in the addUtoT function in controller', user);
		tournamentFactory.addUtoT($routeParams, user, function(data){
			// console.log('this is your data:', data);
			var players = $scope.players
			players.push(data.data);
			// console.log(players);
			$scope.players = players
			console.log($scope.users);
			$scope.users.splice($scope.users.indexOf(user), 1);
		})


		userFactory.tournamentStatus(user, function(data){
			console.log('going to update tournament status for user');
			// $scope.users = data;
			// var index = $scope.players.indexOf(user);
			// $scope.players[index] = data.data;
		})
	}

	$scope.createDraw = function(newDraw){
		console.log(newDraw)
		console.log($routeParams)
		console.log('want to create a draw')
		drawFactory.addDraw(newDraw, $routeParams, function(data){
			console.log(data);
			$scope.draws = data
			$scope.newDraw = {}
		})
	}

	drawFactory.getDraws(function(data){
		console.log('made it back from the factory')
		console.log(data)
		$scope.draws = data
		

	})

	$scope.viewDraw = function(draw){
		console.log('attempting to show one draw')
		$location.path('/showDraw/'+draw._id)
	}

	$scope.removePlayer = function(player){
		console.log('hi')
		drawFactory.removePlayer(player, $routeParams, function(data){
			console.log('back to the controller')
		})
	}

	$scope.removeDraw = function(draw){
		drawFactory.removeDraw(draw, function(data){
			$scope.draws = data;
		})
	}



})