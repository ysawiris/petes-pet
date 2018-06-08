const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Pet = require('../models/pet');

const fido =     {
    "name": "Norman",
    "species": "Greyhound",
    "birthday": "2008-11-11",
    "favoriteFood": "Liver",
    "picUrl": "http://www.gpamass.com/s/img/emotionheader713297504.jpg",
    "picUrlSq": "https://www.collinsdictionary.com/images/thumb/greyhound_21701074_250.jpg",
    "description": "Fido is a dog and he's a good dog who loves to play and hang out with his owners. He also likes to nap and enjoys eating dog food"
}

chai.use(chaiHttp);

describe('Pets', ()  => {

  after(() => { 
    console.log('hello')
    Pet.deleteMany({$or: [{name: 'Norman'}, {name: 'Spider'}] }).exec((err, pets) => {
      console.log(pets)
      pets.remove();
    }) 
  });

  it('should index ALL pets on / GET', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });
  
  it('should create a SINGLE pet on /pets POST', (done) => {
    chai.request(server)
        .post('/pets')
        .send(fido)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html
          done();
        });
  });

  it('should show a SINGLE pet on /pets/<id> GET', (done) => {
    var pet = new Pet(fido);
     pet.save((err, data) => {
       chai.request(server)
         .get(`/pets/${data._id}`)
         .end((err, res) => {
           res.should.have.status(200);
           res.should.be.html
           done();
         });
     });

  });

  it('should update a SINGLE pet on /pets/<id> PUT', (done) => {
    var pet = new Pet(fido);
    pet.save((err, data)  => {
     chai.request(server)
      .put(`/pets/${data._id}?_method=PUT`)
      .send({'name': 'Spider'})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
    });
  });

  it('should delete a SINGLE pet on /pets/<id> DELETE', (done) => {
    var pet = new Pet(fido);
    pet.save((err, data)  => {
     chai.request(server)
      .delete(`/pets/${data._id}?_method=DELETE`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html
        done();
      });
    });
  });
});