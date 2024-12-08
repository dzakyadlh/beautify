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
import Link from 'next/link';
import { Checkbox } from '@chakra-ui/react';
import { signIn } from '@/api/auth';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <React.Fragment>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="bg-beige w-full sm:w-3/5 lg:w-2/5 2xl:w-1/4 p-5 border border-black rounded-lg flex flex-col items-center gap-5">
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              actions.setSubmitting(true);
              try {
                const response = await signIn(values.email, values.password);
                if (response) {
                  router.push('/');
                }
              } catch (error) {
                alert(`Sign-in failed: ${error.message}`);
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit} className="w-full">
                <div className="flex flex-col gap-5">
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
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <Checkbox border="black" />
                      <p className="text-sm">Remember me</p>
                    </div>
                    <Link
                      href=""
                      className="text-sm text-black underline hover:text-blue-500"
                    >
                      Forgot Password
                    </Link>
                  </div>
                  <CustomPrimaryButton
                    type="submit"
                    text="Sign In"
                    isLoading={props.isSubmitting}
                  />
                </div>
              </Form>
            )}
          </Formik>
          <CustomOutlinedButton icon={faGoogle} text="Sign In With Google" />
          <p>
            Don't have an account?{' '}
            <span>
              <Link
                href="/signup"
                className="font-medium text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
