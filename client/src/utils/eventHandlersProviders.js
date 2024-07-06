import { useState } from 'react';
import axios from 'axios';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (formData, endpoint) => {
    try {
      const response = await axios.post(endpoint, formData);
      console.log(response.data); // Log the response from the server
      // Handle success state or redirect as needed
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle error state
    }
  };

  return {
    formData,
    handleChange,
    handleFormSubmit,
  };
};

export const handleCareApplicationSubmit = (event) => {
    event.preventDefault();

    // Retrieve form data
    const form = event.target;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const childrenCount = form.childrenCount.value.trim();
    const childrenCountNumber = parseInt(childrenCount, 10);
    
    const requirements = {
        readToChild: form.readToChild.checked,
        familyDinners: form.familyDinners.checked,
        sacOrBacMeeting: form.sacOrBacMeeting.checked,
        volunteer: form.volunteer.checked,
        boardMeeting: form.boardMeeting.checked,
        emailOrCard: form.emailOrCard.checked,
        schoolEvent: form.schoolEvent.checked
    };

    // Check if mandatory fields are filled and childrenCount is greater than zero
    if (!firstName || !lastName || !email || !childrenCount || childrenCountNumber <= 0 || !requirements.readToChild || !requirements.familyDinners || !requirements.emailOrCard || !requirements.schoolEvent) {
        alert("Form can't be submitted until all mandatory information is provided and the number of children is greater than zero.");
        return;
    }

    // Construct the data object to be sent
    const formData = {
        firstName,
        lastName,
        email,
        childrenCount: childrenCountNumber,
        requirements
    };

    // Here you can handle the form submission, e.g., send data to an API
    console.log('Form data submitted:', formData);
    alert('Form submitted successfully!');
};