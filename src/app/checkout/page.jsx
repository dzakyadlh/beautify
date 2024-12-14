'use client';

import { CustomPrimaryButton } from '@/components/customButtons';
import { AddressCard } from '@/components/customCards';
import { CommonFormInput } from '@/components/inputFields';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import * as Yup from 'yup';

export default function CheckoutPage() {
  const router = useRouter();

  const cartItems = [
    {
      id: 1,
      image: '/images/skincare1.jpg',
      title: 'Facial Cleanser',
      feature: 'Gentle formula for all skin types',
      category: 'Skincare',
      price: 100000,
      quantity: 1,
    },
    {
      id: 2,
      image: '/images/skincare2.jpg',
      title: 'Moisturizer',
      feature: 'Hydrates and soothes dry skin',
      category: 'Skincare',
      price: 100000,
      quantity: 1,
    },
    {
      id: 3,
      image: '/images/skincare5.jpg',
      title: 'Lip Balm',
      feature: 'Nourishes and protects your lips',
      category: 'Lip Care',
      price: 100000,
      quantity: 1,
    },
    {
      id: 4,
      image: '/images/skincare4.jpg',
      title: 'Sunscreen',
      feature: 'SPF 50+ for ultimate sun protection',
      category: 'Sun Care',
      price: 100000,
      quantity: 1,
    },
  ];

  const addressItems = [
    {
      name: 'home',
      address: 'House of Kaslana Number 1',
      district: 'Deliverance',
      city: 'Elysian Realm',
      state: 'Amphoreus',
      country: 'Honkai Bubble',
      postalCode: '1234',
      user_id: '1',
    },
    {
      name: 'home',
      address: 'House of Kaslana Number 2',
      district: 'Deliverance',
      city: 'Elysian Realm',
      state: 'Amphoreus',
      country: 'Honkai Bubble',
      postalCode: '1234',
      user_id: '1',
    },
    {
      name: 'home',
      address: 'House of Kaslana Number 3',
      district: 'Deliverance',
      city: 'Elysian Realm',
      state: 'Amphoreus',
      country: 'Honkai Bubble',
      postalCode: '1234',
      user_id: '1',
    },
  ];

  const shippingCost = 25000;
  const administrationCost = 25000;
  const tax = 25000;

  const totalPrice =
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) +
    shippingCost +
    administrationCost +
    tax;

  const dummy = {
    receiverName: 'Kevin Kaslana',
    address: 'House of Kaslana Number 1',
    district: 'Deliverance',
    city: 'Elysian Realm',
    state: 'Amphoreus',
    country: 'Honkai Bubble',
    postalCode: '1234',
    user_id: '1',
  };

  const validationSchema = Yup.object({
    receiverName: Yup.string().required('Receiver name is required'),
    address: Yup.string().required('Address is required'),
    district: Yup.string(),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    country: Yup.string().required('Country is required'),
    postalCode: Yup.string().required('Postal Code is required'),
  });

  function handleSubmit() {}

  return (
    <React.Fragment>
      <div className="min-h-screen w-full flex flex-col lg:flex-row gap-5 px-5 lg:px-20 py-10 pt-28 bg-gray-100">
        <div className="w-full lg:w-2/3 flex flex-col p-10 bg-white shadow-lg rounded-lg gap-5">
          <h2 className="text-2xl font-bold">Checkout Data</h2>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            <Formik
              initialValues={{
                receiverName: dummy.receiverName,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                try {
                  const response = true;
                  if (response) {
                    router.push('/checkoutSuccess');
                  }
                } catch (error) {
                  alert('Checkout Error: ' + error.message);
                } finally {
                  actions.setSubmitting(false);
                }
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit} className="w-full xl:w-1/2">
                  <div className="flex flex-col gap-5">
                    <Field name="receiverName">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="receiverName"
                          label="Receiver Name *"
                          type="text"
                          placeholder="John Doe"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="address">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="address"
                          label="Address *"
                          type="text"
                          placeholder="ABC Street Number 123"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="district">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="district"
                          label="District"
                          type="text"
                          placeholder="Rungkut"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="city">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="city"
                          label="City *"
                          type="text"
                          placeholder="Surabaya"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="state">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="state"
                          label="State/Province *"
                          type="text"
                          placeholder="East Java"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="country">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="country"
                          label="Country *"
                          type="text"
                          placeholder="Indonesia"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <Field name="postalCode">
                      {({ field, form }) => (
                        <CommonFormInput
                          id="postalCode"
                          label="Postal Code *"
                          type="text"
                          placeholder="123456"
                          field={field}
                          form={form}
                        />
                      )}
                    </Field>
                    <CustomPrimaryButton
                      type="submit"
                      text="Checkout"
                      isLoading={props.isSubmitting}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="h-fit w-full lg:w-1/3 flex flex-col bg-beige border border-black shadow-lg rounded-lg p-5">
          <h2 className="text-xl font-semibold mb-5">Checkout Summary</h2>
          <ul className="flex flex-col gap-4">
            <p className="font-medium">Cart Items</p>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between ml-5 border-b border-gray-500 pb-2"
              >
                <span className="text-sm">{item.title}</span>
                <span className="text-sm">
                  IDR {(item.price * item.quantity).toLocaleString()}
                </span>
              </li>
            ))}
            <p className="font-medium">Additional Costs</p>
            <li className="flex justify-between ml-5 border-b border-gray-500 pb-2">
              <span className="text-sm">+ Shipping Cost</span>
              <span className="text-sm">IDR 25,000</span>
            </li>
            <li className="flex justify-between ml-5 border-b border-gray-500 pb-2">
              <span className="text-sm">+ Administration Cost</span>
              <span className="text-sm">IDR 25,000</span>
            </li>
            <li className="flex justify-between ml-5 border-b border-gray-500 pb-2">
              <span className="text-sm">+ Tax</span>
              <span className="text-sm">IDR 25,000</span>
            </li>
          </ul>
          <div className="mt-5">
            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>IDR {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
