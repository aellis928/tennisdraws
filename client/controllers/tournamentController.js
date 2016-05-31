myApp.controller('tournamentController', function($scope, $location, userFactory, tournamentFactory){
	console.log('in the tournament controller')
	// $scope.users = [];
	$scope.tournaments = [];



	$scope.createTournament = function(newTournament){ 
		console.log(newTournament);
		tournamentFactory.addTournament(newTournament, function(data){
			console.log(data);
			$scope.tournaments = data;
			$scope.newTournament = {};
		})
	}

	tournamentFactory.getTournaments(function(data){
		console.log('getTournaments data:', data)
		$scope.tournaments = data
	})

	$scope.removeTournament = function(tournament){
		console.log(tournament)
		tournamentFactory.deleteTournament(tournament, function(data){
			console.log('delete the tournaments')
			$scope.tournaments = data
		})
	}

	$scope.showTournament = function(tournament){
		console.log('attempting to show one tournament')
		$location.path('/show/'+tournament._id)
	}









	


})