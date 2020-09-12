import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  InputField,
  SelectField,
  TextAreaField,
} from "../FormElements/FormElements";
import { addToPunchlistAction } from "../../redux/punchlistDuck";

export class EditPunchlist extends Component {
  addToPunchlist = (e) => {
    e.preventDefault();
    const { tag, description, owner, priority, progress } = this.state;
    const date = {
      _seconds: new Date().getTime() / 1000,
      _nanoseconds: 0,
    };
    this.props.addToPunchlistAction({
      date,
      tag,
      description,
      owner,
      priority,
      progress,
    });
  };

  render() {
    return (
      <Formik
        initialValues={{
          tag: "",
          description: "",
          owner: "HATCH",
          priority: 1,
          progress: 0,
        }}
        validationSchema={Yup.object({
          tag: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("tag requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log("submiting");
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form border rounded px-5 pb-5 pt-3">
          <div className="row">
            <div className="form-group col">
              <InputField label="Tag" name="tag" type="text" />
            </div>
          </div>

          <div className="row">
            <div className="form-group col">
              <TextAreaField
                name="description"
                label="descripcion"
                numberOfRows={3}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <SelectField
                name="owner"
                label="Responsable"
                options={[
                  {
                    value: "HATCH",
                    text: "HATCH",
                  },
                  {
                    value: "ABB",
                    text: "ABB",
                  },
                  {
                    value: "VyC",
                    text: "VyC",
                  },
                ]}
              />
            </div>
          </div>
          <div className="class row">
            <div className="form-group col-6">
              <SelectField
                name="priority"
                label="Criticidad"
                options={[
                  {
                    value: "1",
                    text: "Alta",
                  },
                  {
                    value: "2",
                    text: "Media",
                  },
                  {
                    value: "3",
                    text: "Baja",
                  },
                ]}
              />
            </div>

            <div className="form-group col-6">
              <InputField label="Avance" name="progress" type="number" />
            </div>
          </div>

          <button type="submit" className="btn btn-success btn-block mt-3">
            Agregar
          </button>
        </Form>
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addToPunchlistAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPunchlist);
