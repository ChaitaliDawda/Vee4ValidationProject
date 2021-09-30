import { defineRule } from 'vee-validate';


defineRule('requiredsssss', value => {
   console.log("here")
    if (!value || !value.length) {
      return 'This field is required';
    }
    return true;
  });
  

