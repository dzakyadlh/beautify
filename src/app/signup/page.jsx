'use client';

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CommonFormInput } from '@/components/custom/inputFields';
import { Button, Input } from '@chakra-ui/react';

export default function SignUpPage() {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
  });

  return (
    <React.Fragment>
      <div className="bg-beige w-full h-screen flex items-center justify-center">
        <div className="bg-white w-full sm:w-4/5 lg:w-3/5 2xl:w-2/5 p-5 border border-black rounded-lg flex flex-col gap-5">
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              phoneNumber: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div className="flex flex-col gap-5">
                  <Field name="fullName">
                    {({ field, form }) => (
                      <CommonFormInput
                        id="fullName"
                        label="Full Name"
                        type="text"
                        placeholder="John Doe"
                        field={field}
                        form={form}
                      />
                    )}
                  </Field>
                  <Field name="email">
                    {({ field, form }) => (
                      <CommonFormInput
                        id="email"
                        label="Email Address"
                        type="email"
                        placeholder="example@example.com"
                        field={field}
                        form={form}
                      />
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, form }) => (
                      <CommonFormInput
                        id="password"
                        label="Password"
                        type="password"
                        placeholder="********"
                        field={field}
                        form={form}
                      />
                    )}
                  </Field>
                  <Field name="phoneNumber">
                    {({ field, form }) => (
                      <CommonFormInput
                        id="phoneNumber"
                        label="Phone Number"
                        type="text"
                        placeholder="Your Phone Number"
                        field={field}
                        form={form}
                      />
                    )}
                  </Field>
                  <Button
                    type="submit"
                    isLoading={props.isSubmitting}
                    variant="solid"
                    color="tertiary"
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
}
