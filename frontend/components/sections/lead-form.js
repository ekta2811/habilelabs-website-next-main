import React, { useState } from "react"
import { fetchAPI } from "utils/apis/fetch-api"
import * as yup from "yup"
import { Formik, Form, Field } from "formik"
import { Button, Grid, Container } from "@mui/material"
import { makeStyles } from "@mui/styles"
import NextImage from "../elements/image"
import Typography from "@mui/material/Typography"

const initialState = {
  email: "",
  name: "",
  contactno: "",
  contactsource: "",
  message: "",
  file: "",
}

const LeadForm = ({ data, logo }) => {
  const [loading, setLoading] = useState(false)
  const classes = useStyles()
  const LeadSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    name: yup.string().required("Name is required"),
  })
  return (
    <Formik
      initialValues={initialState}
      validationSchema={LeadSchema}
      onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
        setLoading(true)
        resetForm({ values: initialState })
        const formData = new FormData()
        formData.append("file", values.file.name)
        try {
          setErrors({ api: null })
          await fetchAPI(
            "/lead-form-submissions",
            {},
            {
              method: "POST",
              body: JSON.stringify({
                data: {
                  email: values.email,
                  name: values.name,
                  message: values.message,
                  contactno: values.contactno,
                  contactsource: values.contactsource,
                  formData,
                },
              }),
            }
          )
        } catch (err) {
          setErrors({ api: err.message })
        }
        setLoading(false)
        setSubmitting(false)
      }}
    >
      {({ errors, touched, isSubmitting, setFieldValue }) => (
        <Container>
          <Grid container spacing={2} className={classes.formInputs}>
            <Grid item md={6} xs={12} className={classes.formInputsData}>
              <Typography variant="body1" gutterBottom>
                {data.formTitle}
              </Typography>
              <Typography variant="h1" gutterBottom>
                {data.formDescription}
              </Typography>
              <NextImage
                width="370px"
                height="300px"
                className={classes.formImage}
                media={data.image}
              />
            </Grid>
            <Grid item md={6} xs={12} className={classes.formInputsData}>
              <Form className="flex flex-col md:flex-row gap-4">
                <Grid item md={6} xs={12} className={classes.fieldName}>
                  <Field
                    className={classes.formFields}
                    type="email"
                    name="email"
                    placeholder="Email*"
                  />
                  {(errors.email && touched.email && errors.email) ||
                  errors.api ? (
                    <p className={classes.emailError}>
                      {(errors.email && touched.email && errors.email) ||
                        errors.api}
                    </p>
                  ) : (
                    ""
                  )}
                </Grid>
                <Grid item xs={6} className={classes.fieldName}>
                  <Field
                    className={classes.formFields}
                    type="name"
                    name="name"
                    placeholder="Name*"
                  />
                </Grid>
                {(errors.name && touched.name && errors.name) || errors.api ? (
                  <p className={classes.emailError}>
                    {(errors.name && touched.name && errors.name) || errors.api}
                  </p>
                ) : (
                  ""
                )}
                <Grid item xs={6} className={classes.fieldName}>
                  <Field
                    className={classes.formFields}
                    type="tel"
                    name="contactno"
                    placeholder="Contact Number"
                  />
                </Grid>
                {(errors.contactno && touched.contactno && errors.contactno) ||
                errors.api ? (
                  <p className={classes.emailError}>
                    {(errors.contactno &&
                      touched.contactno &&
                      errors.contactno) ||
                      errors.api}
                  </p>
                ) : (
                  ""
                )}
                <Grid item xs={6} className={classes.fieldName}>
                  <Field
                    className={classes.formFields}
                    type="message"
                    name="contactsource"
                    placeholder="How did you hear about Habilelabs ?"
                  />
                </Grid>
                <Grid item xs={6} className={classes.fieldName}>
                  <Field
                    className={classes.formFields}
                    type="message"
                    name="message"
                    placeholder="Message"
                  />
                </Grid>
                <Grid item xs={6} className={classes.imageIcon}>
                  <p>
                    If you have a requirement brief or document, share it with
                    us here !
                  </p>
                  <label htmlFor="file" className={classes.chooseFileButton}>
                    Choose File
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    style={{ visibility: "hidden" }}
                    onChange={(event) => {
                      let reader = new FileReader()
                      let file = event.currentTarget.files[0]
                      if (!file || !reader.readAsDataURL) {
                        return
                      }
                      reader.onloadend = () => {
                        setFieldValue("file", file)
                      }
                      reader.readAsDataURL(file)
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    loading={loading}
                    onSubmit={Formik.handleSubmit}
                    className={classes.buttonEnquiry}
                  >
                    {data.formButtonText}
                  </Button>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </Container>
      )}
    </Formik>
  )
}

const useStyles = makeStyles((theme) => ({
  formInputsData: {
    "& form": {
      paddingTop: "60px",
      [theme.breakpoints.down("md")]: {
        padding: "0 0 30px",
      },
    },
  },
  formInputs: {
    marginTop: "20px",
  },
  emailError: {
    color: "red",
    marginBottom: "0px",
    paddingLeft: "10px",
    marginTop: "0px",
  },
  fieldName: {
    maxWidth: "100%",
  },
  formFields: {
    borderRadius: "30px",
    border: "1px solid " + theme.palette.secondary.contrastTextLight,
    width: "100%",
    padding: "9px 20px",
    marginTop: "20px",
  },
  imageIcon: {
    marginTop: "20px",
    maxWidth: "100%",
    "& p": {
      fontSize: "11px",
      paddingLeft: "10px",
    },
  },
  chooseFileButton: {
    border: "1px solid " + theme.palette.primary.light,
    borderRadius: "22px",
    padding: "5px 22px",
    color: theme.palette.primary.light,
    fontSize: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  buttonEnquiry: {
    background: "#51C8FF 0% 0% no-repeat padding-box",
    borderRadius: "30px",
    textAlign: "center",
    marginTop: "20px",
    width: "100%",
    color: theme.palette.secondary.contrastText,
    textTransform: "capitalize",
    "&:hover": {
      background: "#51C8FF 0% 0% no-repeat padding-box",
      cursor: "pointer",
    },
  },
}))
export default LeadForm
