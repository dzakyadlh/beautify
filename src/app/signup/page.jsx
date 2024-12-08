'use client';

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CommonFormInput } from '@/components/inputFields';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  CustomOutlinedButton,
  CustomPrimaryButton,
} from '@/components/customButtons';
import { signUp } from '@/api/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();

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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-beige w-full sm:w-3/5 lg:w-2/5 2xl:w-1/4 p-5 border border-black rounded-lg flex flex-col items-center gap-5">
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              phoneNumber: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              try {
                const response = await signUp(
                  values.email,
                  values.password,
                  values.fullName,
                  values.phoneNumber
                );
                if (response) {
                  router.push('/signin');
                }
              } catch (error) {
                alert(`Sign-up failed: ${error.message}`);
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit} className="w-full">
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
                  <CustomPrimaryButton
                    type="submit"
                    text="Sign Up"
                    isLoading={props.isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
          <CustomOutlinedButton icon={faGoogle} text="Sign Up With Google" />
          <p>
            Already have an account?{' '}
            <span>
              <Link
                href="/signin"
                className="font-medium text-blue-500 hover:underline"
              >
                Sign In
              </Link>
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
