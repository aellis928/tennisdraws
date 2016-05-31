var mongoose = require('mongoose');
var User = mongoose.model('User');
var Draw = mongoose.model('Draw');
var Tournament = mongoose.model('Tournament')

module.exports = (function(){
	return {
		createDraw: function(req, res){
			console.log('this is the info from the html pg', req.body)
			console.log('this is the route id', req.params.id)

		Tournament.findOne({_id: req.params.id}, function(err, tournament){
				var draw = new Draw(req.body);
				console.log('this is the new draw', draw)
				draw._tournament = tournament._id;
				draw.save(function(err){
					tournament.draws.push(draw);
					tournament.save(function(err){
						if(err){
							console.log('error in adding the draw to the tournament')
						}
						else{
							console.log('added the draw to the tournament')
								res.json(draw)
						}
					})
				})


		})

		},

		// start of get method
		getDraws: function(req, res){
			console.log('made it to the get all method in the controller!')
			Draw.find({}, function(err, draws){
				if(err){
					console.log('did not get all the draws')
				}
				else{
					console.log('success!')
					console.log(draws)
					res.json(draws)
				}
			})
		},

		getDraw: function(req, res){
			console.log('made it to the back end to grab the particular draw by id')
			console.log(req.params.id)
			Draw.findOne({_id: req.params.id}, function(err, draw){
				if(err){
					console.log('made an error grabbing a particular draw')
				}
				else{
					console.log('was able to grab the correct draw!')
					res.json(draw)
				}
			})
		},

		getplayers: function(req, res){
			console.log('made it to the back end to grab the players!')
			console.log(req.params.id)
			Draw.findOne({_id: req.params.id}, function(err, draw){
				console.log('the tournament id:',draw._tournament)
				newtournament = draw._tournament
				console.log(newtournament)
				console.log('this is the tournament name', newtournament)
				Tournament.findOne({_id: newtournament})
					.populate('users')
					.exec(function(err,player){
						if(err){
							console.log('made an error with tournament find one')
						}
						else{
							console.log('this is the players', player.name);
							console.log('goodjob!')
							res.json('player', {player: player})
						}
					})

			})

		},
		// end of get method

		addUtoD: function(req, res){
			console.log(req.body)
			console.log(req.params)

			Draw.findOne({_id: req.params.id}, function(err, draw){
				var user = req.body
				console.log('this is the user', user)
				draw.users.push(user)
				draw.save(function(err){
					if(err){
						console.log('made an error adding the user to a tournament')
					}
					else{
						console.log('added the user to a draw')
						User.findOne({_id: req.body._id}, function(err, user){
							console.log('this is the user im looking for', user)
							// user._Draw.push(draw)
							user.save(function(err){
								if(err){
									console.log('made an error adding the draw to the user')
								}
								else{
									console.log('added a draw to a user')
									res.json(user)
								}
							})
						})
					}
				})
			})
		},
		displayPlayers: function(req, res){
			console.log('trying to display players!')
			console.log('this is the draw id', req.params.id)
			Draw.findOne({_id: req.params.id})
			.populate('users')
			.exec(function(err, player){
				if(err){
					console.log('made an error getting all the players to display')
				}
				else{
					console.log('here are all the players', player)
					console.log('on the way to getting the players to display')
					res.json('player', {player: player})
				}
			})
		},

		removeDraw: function(req, res){
			console.log(req.body);
			Draw.remove({_id: req.body._id}, function(err, draw){
				if(err){
					console.log('made an error deleting a tournament')
				}
				else{
					// console.log('this is the callback from the removeDraw function', draw)
					res.redirect('/showdraws')
				}
			})
			//  need to remove the draw from the actual tournament

		}

// end of the methods!

	}
})();