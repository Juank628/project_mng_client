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
  closeModalHandler = () => {
    setTimeout(() => {
      this.props.closeModal();
    }, 400);
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
            .max(15, "Maximo 15 caracteres")
            .required("Tag requerido"),
          description: Yup.string()
            .max(500, "Maximo 500 caracteres")
            .required("Descripcion requerida"),
          owner: Yup.string()
            .oneOf(["HATCH", "ABB", "VyC"], "Responsable no admitido")
            .required("Responsable requerido"),
          priority: Yup.number()
            .max(3, "Prioridad maxima: 3")
            .min(1, "Prioridad minima: 1")
            .required("Prioridad requerida"),
          progress: Yup.number()
            .max(100, "Maximo 100%")
            .min(0, "Minimo 0%")
            .required("Avance requerido"),
        })}
        onSubmit={(values, FormikBag) => {
          setTimeout(() => {
            FormikBag.setSubmitting(false);
          }, 400);
          this.props.addToPunchlistAction(values);
          this.closeModalHandler();
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

          <div className="class row">
            <div className="form-group col-4">
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

            <div className="form-group col-4">
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

            <div className="form-group col-4">
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
