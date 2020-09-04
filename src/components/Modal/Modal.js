import React, { Component } from 'react'
import "./Modal.css";

class Modal extends Component {

  clickOutside=()=>{
    this.props.closeModal();
  }

  render() {
    const { show, title, children } = this.props
    return (
      <div>
        {show ? (
          <div className="mod"  onClick={this.clickOutside.bind(this)}>
            <div
              className="mod-dialog"
              onClick={ev => {
                ev.stopPropagation();
              }}
            >
              <div className="mod-content">
                <div className="mod-header">
                  <h5 className="mod-title">{title}</h5>
                </div>
                <div className="mod-body">{children}</div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Modal;