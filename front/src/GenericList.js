import * as React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faTimes, faEdit } from '@fortawesome/free-solid-svg-icons'


class GenericList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: undefined,
      err: undefined,
      req: {
        method: 'POST',
        fields: {}
      }
    };
  }

  componentDidMount() {
    fetch('/api/dishes').then((raw) => raw.json())
      .then((res) => this.setState({ elements: res }))
      .catch((err) => this.setState({ err }));
  }


  remove(id, arraypos) {
    fetch('/api/dishes/' + id, { method: "DELETE" })
      .then(() => console.log("Done"))
      .catch((err) => console.error(err));
    this.state.elements.splice(arraypos, 1);
    this.forceUpdate();
  }



  render() {
    if (this.state.err !== undefined) {
      return <b>{this.state.error}</b>
    }
    if (this.state.elements === undefined) {
      return <FontAwesomeIcon icon={faCircleNotch} size="3x" />
    }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {this.props.Labels.map((el) => <th>{el}</th>)}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rows.map((row, index) => (
            <tr key={row.id}>
              {Object.values(row).map((col) => <td>{col}</td>)}
              <td>
                <button className="icon" onClick={() => this.edit(el, index)}>
                  <FontAwesomeIcon icon={faEdit} className="f-edit" />
                </button>
                <button className="icon" onClick={() => this.remove(el.id, index)}>
                  <FontAwesomeIcon icon={faTimes} className="f-remove" />
                </button>
              </td>
            </tr>
          ))}

        </tbody>
      </Table>
    );
  }
}

export default GenericList;