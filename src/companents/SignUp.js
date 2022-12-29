import React, { useState } from "react";
import { useFormik } from "formik";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  return (
    <form>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>

      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>

      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
    </form>
  );
}
