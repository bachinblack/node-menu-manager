import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'


class DishList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: undefined,
      categories: undefined,
      err: undefined,
      method: "POST",
      patchId: undefined,
      formData: {
        name: '',
        price: 0,
        category_id: -1
      },
    };
  }

  componentDidMount() {
    fetch('/api/categories').then((raw) => raw.json())
    .then((categories) => {

      const dcat = {};
      categories.forEach((cat) => { dcat[cat.id] = cat.name; })
      fetch('/api/dishes').then((raw) => raw.json())
      .then((rows) => this.setState({ rows, categories, dcat}))
      .catch((err) => this.setState({ err }));

    });
  }

  remove(id, arraypos) {
    fetch('/api/dishes/' + id, { method: "DELETE" })
      .then(() => {
        this.state.rows.splice(arraypos, 1);
        this.forceUpdate();
      })
      .catch((err) => console.error(err));
  }

  prepareEdit(columns, id) {
    this.setState({
      method: "PATCH",
      patchId: columns.id,
      formData: {
        name: columns.name,
        price: columns.price,
        category_id: columns.category_id
      }
    });
  }

  preparePost() {
    this.setState({
      method: "POST",
      patchId: undefined,
      formData: {
        name: '',
        price: 0,
        category_id: -1,
      }
    });
  }

  submit(e) {
    e.preventDefault();
    fetch('/api/dishes/' + (this.state.patchId || ''), {
      method: this.state.method,
      body: JSON.stringify(this.state.formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((raw) => raw.json())
    .then((res) => {
      if (this.state.patchId) {
        const elIndex = this.state.rows.findIndex((el) => +el.id === +this.state.patchId);
        this.state.rows.splice(elIndex, 1, res);
      } else {
        this.state.rows.push(res);
      }
      this.forceUpdate();
    })
    .catch((err) => console.error(err));
  }

  updateField(event) {
    const { value, name } = event.target;

    this.setState((state, props) => {
      state.formData[name] = value;
      return state;
    });
  }

  render() {
    if (this.state.err !== undefined) { return <b>{this.state.error}</b> }
    if (this.state.rows === undefined) { return <FontAwesomeIcon icon={faCircleNotch} size="3x" /> }

    return (
      <Container className='mt-5'>
        <Row>
          <Col lg={6} md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prix</th>
                  <th>Catégorie</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rows.map((el, index) => (
                  <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.price.toFixed(2)}</td>
                    <td>{this.state.dcat[el.category_id]}</td>
                    <td>
                      <div className="actions-center">
                        <button className="icon" onClick={() => this.prepareEdit(el, index)}>
                          <FontAwesomeIcon icon={faEdit} className="f-edit" />
                        </button>
                        <button className="icon" onClick={() => this.remove(el.id, index)}>
                          <FontAwesomeIcon icon={faTimes} className="f-remove" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
          </Col>
          {/* Create and Edit form */}
          <Col lg={6} md={12} className="form">
                <h3>{this.state.method === "POST" ? "Nouveau" : "Edition"}</h3>
            <Form onSubmit={this.submit.bind(this)}>
              <Form.Group controlId="formName">
                <Form.Label>Nom</Form.Label>
                <Form.Control name="name" type="text" value={this.state.formData.name} onChange={this.updateField.bind(this)}/>
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Prix</Form.Label>
                <Form.Control name="price" type="number" step="0.01" value={this.state.formData.price} onChange={this.updateField.bind(this)}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Catégorie</Form.Label>
                <Form.Control
                  value={this.state.formData.category_id}
                  name="category_id" as="select"
                  custom
                  onChange={this.updateField.bind(this)}
                >
                  <option value={-1} disabled>-</option>
                  {this.state.categories.map((cat) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
              </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Valider
              </Button>
              <Button className="sec" variant="secondary" onClick={this.preparePost.bind(this)}>
                Réinitialiser
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DishList;