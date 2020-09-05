import React, { Component } from "react";
import { Table, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Modal from "../../Modal/Modal";
import EditPunchlist from "../../EditPunchlist/EditPunchlist";
import "./PunchList.css";

export class PunchList extends Component {
  state = {
    showModal: false,
  };
  openModal = () => {
    this.setState({
      showModal: true,
    });
  };
  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };
  secondsToDate = (seconds) => {
    let itemDate = new Date(seconds * 1000);
    var formatter = new Intl.DateTimeFormat("es-pe", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return formatter.format(itemDate);
  };
  render() {
    const { fetching, punchlist } = this.props.punchlistReducer;
    return (
      <React.Fragment>
        {fetching ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div>
            <div className="Punch-List-Header">
              <div className="row">
                <div className="col-9 col-sm-10 col-md-11 col-lg-11"></div>
                <div className="col-3 col-sm-2 col-md-1 col-lg-1 text-center">
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="add"
                    onClick={this.openModal}
                  />
                </div>
              </div>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Tag</th>
                  <th>Observacion</th>
                  <th>Criticidad</th>
                  <th>Responsable</th>
                  <th>Avance</th>
                  <th>Dias abierto</th>
                </tr>
              </thead>
              <tbody>
                {punchlist.map((item) => (
                  <tr key={item.id}>
                    <th>{this.secondsToDate(item.date._seconds)}</th>
                    <th>Tag</th>
                    <th>{item.description}</th>
                    <th>{item.priority}</th>
                    <th>{item.owner}</th>
                    <th>Avance</th>
                    <th>Dias abierto</th>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Modal
              show={this.state.showModal}
              closeModal={this.closeModal}
              title=""
            >
              <EditPunchlist />
            </Modal>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    punchlistReducer: state.punchlist,
  };
};

export default connect(mapStateToProps)(PunchList);
