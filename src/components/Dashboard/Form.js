import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Form.css"
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';


const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

const SignupSchema = Yup.object().shape({
    FirstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Input Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email format').required("Email is required"),
    phone: Yup.string().matches(phoneRegex, "Invalid phone")
        .required("Phone is required")
        .min(10, "to short")
        .max(10, "to long"),
});

const Forms = () => {

    const [countries, setcountries] = useState([])
    // const [toggle_country, settoggle_country] = useState(false)


    const fetch_data = async () => {
        const response = await axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
        setcountries(response.data.data);
    }
    useEffect(() => {
        fetch_data();
    }, [])

    // useEffect(() => {
    //     const json = JSON.stringify(notes);
    //     localStorage.setItem("notes", json);
    //   }, [notes]);

    return (
        <Formik initialValues={{
            FirstName: '',
            lastName: '',
            address: '',
            country: '',
            email: '',
            phone: '',
        }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
                // same shape as initial values
                const json = JSON.stringify(values);
                localStorage.setItem("user-data", json);
                console.log(values);
                resetForm({ values: '' })
            }}
        >
            {({ errors, touched }) => (

                <div className="form-container">

                    <div className="inner-form-div">
                        <h2>Thank you so much for taking the time</h2>
                        <p>please provie the below details!</p>
                        <div className="form-div">

                            <Form >
                                <label>First Name:</label><br />
                                <Field type="text" name="FirstName" placeholder="John" required />

                                <br />

                                <label>Last Name:</label><br />
                                <Field type="text" name="lastName" placeholder="Doe" required /><br />
                                <label>Address:</label><br />
                                <Field id="story" name="address"
                                    required rows="4" cols="40" as="textarea" name="address" placeholder="Enter your full postal Addres">

                                </Field><br />


                                <label for="myBrowser">Country:</label><br />

                                <Field list="browsers" id="myBrowser" name="country" required /><br />
                                <datalist id="browsers" className="options">
                                    {countries.map((item) =>
                                        <option key={item.name} value={item.name} />
                                    )}
                                </datalist>



                                <label>Email ID:</label><br />
                                <Field type="email" placeholder="example@sample.com" name="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
                                {errors.email && touched.email ? (
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                        marginLeft: "1rem"
                                    }}>{errors.email}</span>
                                ) : null}
                                <br />

                                {/* {errors?.email && <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{errors.email.message}</span>} */}

                                <br />
                                <label>Phone Number:</label><br />
                                <div className="phone">
                                    <span>+91</span>
                                    <Field type="phone" name="phone" placeholder="123456789" pattern="[7-9]{1}[0-9]{9}" required />
                                    {errors.phone && touched.phone ? (
                                        <span style={{
                                            fontWeight: 'bold',
                                            color: 'red',
                                            marginLeft: "1rem"
                                        }}>{errors.phone}</span>
                                    ) : null}

                                    <br />
                                </div>
                                <button type="submit">Submit Feedback</button>
                            </Form>

                        </div>
                    </div>
                </div>
            )}
        </Formik>
    )
}

export default Forms
