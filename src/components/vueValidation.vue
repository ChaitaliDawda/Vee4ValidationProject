<template>
  <h2>Vue Validations</h2>

  <h3>Field valdations</h3>
  <Form v-slot="{ errors }">
    <Field name="field"  rules="required"/>
    <span>{{ errors.field }}</span>
  </Form>

<br>
<div>Test dynamic validation</div>
<Form>
 <Field name="name" as="input" rules="required" />
    <ErrorMessage name="name" />
</Form>

  <Form v-slot="{ values }">
    <Field name="field" :rules="isRequired" />
    <ErrorMessage name="field" />
    <br />
    <Field name="password" type="password" :rules="passwordRules" />
    <ErrorMessage name="password" />

    <pre>{{ values }}</pre>
  </Form>

  <br />
  <h3>Form valdations</h3>

  <!-- <Form
    @submit="onSubmit"
    :validation-schema="simpleSchema"
    v-slot="{ isSubmitting }"
    :initial-values="formValues"
    :initial-errors="initialErrors"
  > -->
  <Form
    @submit="onSubmit"
    :validation-schema="simpleSchema"
    v-slot="{ isSubmitting }"
  
  >
    <Field as="input" name="emails" type="email"/>
    <ErrorMessage name="emails" />
    <!-- <Field name="password" type="password" />
    <ErrorMessage name="password" /> -->
    <button :disabled="isSubmitting">Submit</button>
    <button type="reset">Reset</button>
  </Form>

  <br />

  <Field v-slot="{ field }">
    <input v-bind="field" />
  </Field>
</template>

<script>

import { Field, Form, ErrorMessage, defineRule  } from "vee-validate";
import * as yup from "yup";
// import {
//   required
// } from '../validationRule/validationRule'



// import { defineRule } from 'vee-validate';

defineRule('required', value => {
  console.log('here')
    if (!value || !value.length) {
      return 'This field is requiredsss';
    }
    return true;
  });

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const simpleSchema = {
    //    emails:required,
    //   email(value) {
    //     return value ? true : "This field is required";
    //   },
      //   name(value) {
      //     return value ? true : "This field is required";
      //   },
      // password(value) {
      //   return value ? true : "This field is required";
      // },
    };

    const initialErrors= {
      emails: 'This email is already taken',
      password: 'The password is too short',
    };

    const formValues = {
      emails: "example@example.com",
      password: "P@$$w0Rd",
    };

    return {
      passwordRules: yup.string().required().min(8),
      simpleSchema,
      formValues,
      initialErrors
    };
  },
  methods: {
    // Validator function
    isRequired(value) {
      return value ? true : "This field is required";
    },

    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
      //  alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>

<style>
</style>