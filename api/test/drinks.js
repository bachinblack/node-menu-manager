
// const request = require('supertest');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { app, close } = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Drinks functions', () => {

  var catId;

  before((done) => {
    // Creating a category to test with
    chai.request(app)
      .post('/api/drinkcategories')
      .set('content-type', 'application/json')
      .send({
        'name': 'TestCat',
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        catId = res.body.id;
        done();
      });
  })

  it('should get a list of drinks', function (done) {
    chai.request(app)
      .get('/api/drinks')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should NOT get a single drink', function (done) {
    chai.request(app)
      .get('/api/drinks/-1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  var drinkId = -1;

  it('should post a single drink', function (done) {

    chai.request(app)
      .post('/api/drinks/')
      .set('content-type', 'application/json')
      .send({
        'name': 'Banana juice',
        'price': 12.99,
        'booze': false,
        'size': 33,
        'category_id': catId
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        drinkId = res.body.id;
        done();
      });
  });

  it('should get a single drink', function (done) {
    chai.request(app)
      .get('/api/drinks/' + drinkId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a single drink', function (done) {
    chai.request(app)
      .delete('/api/drinks/' + drinkId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  after((done) => {
    chai.request(app)
      .delete('/api/drinkcategories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  })

});
