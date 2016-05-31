var mongoose = require('mongoose');

var User = mongoose.model('User')

module.exports = (function(){

	return {
		// start of the add method
		// addCustomer: function(req, res){
		// 	console.log("made it into the controller!")
		// 	console.log(req.body)
		// 	var newCustomer = new Customer(req.body);
		// 	newCustomer.save(function(err, customer){
		// 		if(err){
		// 			console.log('error in creating customer')
		// 			// console.log(newCustomer.errors)
		// 			res.json({errors : newCustomer.errors})
		// 		}
		// 		else{
		// 			console.log('made a customer!')
		// 			res.json(customer)
		// 		}
		// 	})

			// newCustomer.create(function(err, customer){
			// 	if(newCustomer.save){
			// 		console.log("Created a new customer!")
			// 	}
			// 	else{
			// 		console.log("Did not make a new customer!")
			// 	}
			// })


		}
		// end of  the add method

		// start of get method
		// getCustomers: function(req, res){
		// 	console.log("made it to the controller")
		// 	Customer.find({}, function(err, customers){
		// 		if(err){
		// 			console.log("made an error getting the customers")
		// 		}
		// 		else{
		// 			console.log("got all the users!")
		// 			res.json(customers)
		// 		}
		// 	})
		// },
		// // end of get method

		// // start of delete method
		// removeCustomers: function(req, res){
		// 	console.log("in controller!")
		// 	Customer.remove({_id: req.params.id}, function(err, removedcustomer){
		// 		if(err){
		// 			console.log("Error!")
		// 		}
		// 		else{
		// 			console.log("Removed the customer")
		// 			res.json(removedcustomer)
		// 		}
		// 	})

		// }


	
})();