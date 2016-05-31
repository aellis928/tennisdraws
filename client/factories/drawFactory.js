myApp.factory('drawFactory', function($http, API_URL){
console.log('drawFactory')

var factory= {};
var draws =[]
var players =[]

factory.addDraw = addDraw;
factory.getDraws = getDraws;
factory.getDraw = getDraw;
factory.getTournamentplayers = getTournamentplayers
factory.addUtoD = addUtoD
factory.getPlayerfromDraw = getPlayerfromDraw
factory.removeDraw = removeDraw
factory.removePlayer = removePlayer


// start of function
function addDraw(newDraw, routeparams, callback){
	console.log('in the draw factory!')
	console.log('this is the routeparams', routeparams)
	console.log(newDraw)
	$http.post('/createdraws/'+routeparams.id, newDraw).then(function(data){
		console.log('this is the data', data.data)
		draws.push(data.data);
		callback(draws);
	})

}

function getDraws(callback){
	console.log('made it to the factory to get all the draws')
	$http.get('/showDraws').then(function(data){
		console.log(data.data);
		draws = data.data;
		callback(draws);
	})

}

function getDraw(routeParams, callback){
	console.log(routeParams.id)
	console.log(callback)
	$http.get('/draw/'+routeParams.id).then(function(data){
		console.log('back at the factory and grabbed the draw!')
		console.log('this is the draw data', data)
		draws = data.data
		callback(draws)
	})
}


function getTournamentplayers(routeParams, callback){
	console.log(routeParams)
	$http.get('/playerfdraw/'+routeParams.id).then(function(data){
		console.log('back at the factory, need to do more stuff here')
		console.log(data.data)
		players = data.data
		callback(players)

	})
}

function addUtoD(routeparams, user, callback){
	console.log(routeparams)
	console.log('this is the user',user)
	$http.post('/addUtoD/'+routeparams.id, user).then(function success(data){
		console.log('made it back to the factory from the data')
		console.log('this is the data from addUtoD', data)
		// players.push(data)
		callback(data)
	})
}

function getPlayerfromDraw(routeparams, callback){
	console.log('made it to the factory to grab all players')
	$http.get('/getplayers/'+routeparams.id).then(function success(data){
		console.log('made it back from the controller, need to do more')
		console.log(data.data.player)
		draws = data.data.player
		callback(draws)
	})
}


function removeDraw(draw, callback){
	$http.post('/removeDraw', draw).then(function success(data){
		callback(data.data)
		
	})
}

function removePlayer(player, routeparams, callback){
console.log('this is the player', player)
console.log('this is the route params', routeparams)
$http.post('/tournaments/'+routeparams.id+'/removeplayer').then(function success(data){
	console.log('back at the factory from removing a player')
})
}









// end of functions
return factory;
});