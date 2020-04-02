
// const request = require('supertest');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { app, close } = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Dishes functions', () => {

  var catId;

  before((done) => {
    // Creating a category to test with
    chai.request(app)
      .post('/api/categories')
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

  it('should get a list of dishes', function (done) {
    chai.request(app)
      .get('/api/dishes')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should NOT get a single dish', function (done) {
    chai.request(app)
      .get('/api/dishes/-1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  var dishId = -1;

  it('should post a single dish', function (done) {

    chai.request(app)
      .post('/api/dishes/')
      .set('content-type', 'application/json')
      .send({
        'name': 'Banana',
        'price': 12.99,
        'category_id': catId
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        dishId = res.body.id;
        done();
      });
  });

  it('should get a single dish', function (done) {
    chai.request(app)
      .get('/api/dishes/' + dishId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a single dish', function (done) {
    chai.request(app)
      .delete('/api/dishes/' + dishId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  after((done) => {
    chai.request(app)
      .delete('/api/categories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  })

});
