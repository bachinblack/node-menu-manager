
// const request = require('supertest');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { app, close } = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Categories functions', () => {

  var catId = -1;

  it('should get a list of categories', function (done) {
    chai.request(app)
      .get('/api/categories')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should NOT get a single category', function (done) {
    chai.request(app)
      .get('/api/categories/-1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should post a single category', function (done) {

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

  });

  it('should get a single category', function (done) {
    chai.request(app)
      .get('/api/categories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a single category', function (done) {
    chai.request(app)
      .delete('/api/categories/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

});


