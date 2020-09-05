import React, { Component } from "react";

export class EditPunchlist extends Component {
  state = {
    tag: "",
    description: "",
    owner: "",
    priority: 1,
    progress: 0,
  };

  updateData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="form border rounded px-5 pb-5 pt-3">
        <div className="row">
          <div className="form-group col">
            <label>Tag</label>
            <input
              type="text"
              className="form-control"
              name="tag"
              onChange={this.updateData}
              //defaultValue={this.props.quantity}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col">
            <label htmlFor="exampleFormControlTextarea1">Descripción</label>
            <textarea
              className="form-control"
              name="description"
              rows="3"
              onChange={this.updateData}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label>Responsable</label>
            <select
              className="form-control"
              name="owner"
              //defaultValue={this.props.area}
              onChange={this.updateData}
            >
              <option value="HATCH">HATCH</option>
              <option value="ABB">ABB</option>
              <option value="VyC">V&C</option>
            </select>
          </div>
        </div>
        <div className="class row">
          <div className="form-group col-6">
            <label>Criticidad</label>
            <select
              className="form-control"
              name="priority"
              //defaultValue={this.props.area}
              onChange={this.updateData}
            >
              <option value="1">Alta</option>
              <option value="2">Media</option>
              <option value="3">Baja</option>
            </select>
          </div>

          <div className="form-group col-6">
            <label>Avance</label>
            <input
              type="number"
              className="form-control"
              name="progress"
              //defaultValue={this.props.quantity}
              onChange={this.updateData}
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success btn-block mt-3"
          //onClick={this.createData}
        >
          Agregar
        </button>
      </form>
    );
  }
}

export default EditPunchlist;
