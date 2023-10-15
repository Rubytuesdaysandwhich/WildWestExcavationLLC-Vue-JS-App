<template>
  <div @submit.prevent="submitForm" class="contactform">
    <h1>Contact us here and we will get back to you.</h1>
    <p>
      Please fill out the form below to leave us a request and we will get back
      to you shortly.
    </p>
    <form
      action="
    "
    >
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        v-model="formData.firstName"
        placeholder="Joe"
      />
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        v-model="formData.lastName"
        placeholder="handler"
      />
      <label for="emailAddress">Email Adress</label>
      <input
        type="email"
        id="emailAddress"
        v-model="formData.emailAddress"
        placeholder="example@gmail.com"
      />
      <label for="phone">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        v-model="formData.phoneNumber"
        placeholder="123-45-678"
      />
      <label for="subject">Subject</label>
      <input
        type="text"
        id="subject"
        v-model="formData.subject"
        placeholder="land clearing"
      />
      <label for="reason">Reason</label>
      <textarea
        name="reason"
        id="reason"
        cols="30"
        rows="10"
        v-model="formData.reason"
        placeholder="put the work needed and a short description here"
      ></textarea>
      <br />
      <button type="submit">submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        subject: "",
        reason: "",
      },
    };
  },
  methods: {
    submitForm() {
      //clears the form after submission
      console.log(this.formData);
      this.formData.firstName = "";
      this.formData.lastName = "";
      this.formData.phoneNumber = "";
      this.formData.emailAddress = "";
      this.formData.subject = "";
      this.formData.reason = "";
    },
  },
};
</script>
<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

form {
  background: #0e4702;
  padding: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: gold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="submit"] {
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #0056b3;
}
</style>
