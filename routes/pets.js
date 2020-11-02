// MODELS
const Pet = require("../models/pet");

// PET ROUTES
module.exports = (app) => {
	// INDEX PET => index.js

	// NEW PET
	app.get("/pets/new", (req, res) => {
		res.render("pets-new");
	});

	// CREATE PET
	app.post("/pets", (req, res) => {
		var pet = new Pet(req.body);

		pet
			.save()
			.then((pet) => {
				res.redirect(`/pets/${pet._id}`);
			})
			.catch((err) => {
				// Handle Errors
			});
	});

	// SHOW PET
	app.get("/pets/:id", (req, res) => {
		Pet.findById(req.params.id).exec((err, pet) => {
			res.render("pets-show", { pet: pet });
		});
	});

	// EDIT PET
	app.get("/pets/:id/edit", (req, res) => {
		Pet.findById(req.params.id).exec((err, pet) => {
			res.render("pets-edit", { pet: pet });
		});
	});

	// UPDATE PET
	app.put("/pets/:id", (req, res) => {
		Pet.findByIdAndUpdate(req.params.id, req.body)
			.then((pet) => {
				res.redirect(`/pets/${pet._id}`);
			})
			.catch((err) => {
				// Handle Errors
			});
	});

	// SEARCH PET
	app.get("/search", (req, res) => {
		term = new RegExp(req.query.term, "i");

		Pet.find({ $or: [{ name: term }, { species: term }] }).exec((err, pets) => {
			res.render("pets-index", { pets: pets });
		});
	});

	// DELETE PET
	app.delete("/pets/:id", (req, res) => {
		Pet.findByIdAndRemove(req.params.id).exec((err, pet) => {
			return res.redirect("/");
		});
	});
};
