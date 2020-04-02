
// const request = require('supertest');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { app, close } = require('../server');

chai.use(chaiHttp);
chai.should();

describe('DrinkCategories functions', () => {

  var catId = -1;

  it('should get a list of drinkcategories', function (done) {
    chai.request(app)
      .get('/api/drinkcategories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should NOT get a single drinkcategory', function (done) {
    chai.request(app)
      .get('/api/drinkcategories/-1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should post a single drinkcategory', function (done) {

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

  });

  it('should get a single drinkcategory', function (done) {
    chai.request(app)
      .get('/api/drinkcategories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a single drinkcategory', function (done) {
    chai.request(app)
      .delete('/api/drinkcategories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

});


