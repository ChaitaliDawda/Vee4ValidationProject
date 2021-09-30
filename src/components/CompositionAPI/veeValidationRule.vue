<template>
  <h2>Validation Rule</h2>
  <br>
  <div>
    <input name="email" v-model="email" />
    <span>{{ emailError }}</span>
    <input name="password" v-model="password" type="password" />
    <span>{{ passwordError }}</span>
  </div>
</template>
<script>
import { useForm, useField } from "vee-validate";
export default {
  setup() {
    // Define a validation schema
    const simpleSchema = {
      email(value) {
        return value ? true : "email is required";
      },
      password(value) {
        return value ? true : "password is required";
      },
    };
    // Create a form context with the validation schema
    useForm({
      validationSchema: simpleSchema,
    });

    console.log(emailError);
    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");
    return {
      email,
      emailError,
      password,
      passwordError,
    };
  },
};
</script>