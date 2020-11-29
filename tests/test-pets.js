it("should list ALL pets on /pets GET", function (done) {
	chai
		.request(server)
		.get("/")
		.set("content-type", "application/json")
		.end(function (err, res) {
			res.should.have.status(200);
			res.should.be.json;
			res.body.should.be.a("object");
			done();
		});
});
