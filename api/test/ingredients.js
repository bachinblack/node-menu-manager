
// const request = require('supertest');
const chai = require('chai')
const chaiHttp = require('chai-http');
const { app, close } = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Ingredients functions', () => {

  var catId = -1;

  it('should get a list of ingredients', function (done) {
    chai.request(app)
      .get('/api/ingredients')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should NOT get a single ingredient', function (done) {
    chai.request(app)
      .get('/api/ingredients/-1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should post a single ingredient', function (done) {

    chai.request(app)
    .post('/api/ingredients')
    .set('content-type', 'application/json')
    .send({
      'name': 'TestIngredient',
      'origin': 'France',
      'bio': false,
      'allergen': false
    })
    .end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.a('object');
      catId = res.body.id;
      done();
    });

  });

  it('should get a single ingredient', function (done) {
    chai.request(app)
      .get('/api/ingredients/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should delete a single ingredient', function (done) {
    chai.request(app)
      .delete('/api/ingredients/' + catId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

});


