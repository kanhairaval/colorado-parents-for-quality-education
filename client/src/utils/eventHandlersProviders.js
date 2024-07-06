export const handleCareApplicationSubmit = async (event) => {
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
        first_name: firstName,
        last_name: lastName,
        email,
        number_of_children: childrenCountNumber,
        commitments: requirements
    };

    try {
        console.log("Submitting form data:", formData); // Log form data before sending

        const response = await fetch('/api/careApplication', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log("Server response:", response); // Log server response

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit form.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form.');
    }
};

export const handleDonateSubmit = async (event) => {
    event.preventDefault();

    // Retrieve form data
    const form = event.target;
    const amount = parseFloat(form.amount.value.trim());
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const cardNumber = form.cardNumber.value.trim();
    const expiryDate = form.expiryDate.value.trim();
    const cvv = form.cvv.value.trim();
    const billingAddress1 = form.billingAddress1.value.trim();
    const billingAddress2 = form.billingAddress2.value.trim();
    const city = form.city.value.trim();
    const state = form.state.value.trim();
    const zipCode = form.zipCode.value.trim();
    const email = form.email.value.trim();

    // Check if mandatory fields are filled and donation amount is greater than zero
    if (isNaN(amount) || amount <= 0 || !firstName || !lastName || !cardNumber || !expiryDate || !cvv || !billingAddress1 || !city || !state || !zipCode || !email) {
        alert("Form can't be submitted until all mandatory information is provided and the donation amount is greater than zero.");
        return;
    }

    // Construct the data object to be sent
    const formData = {
        first_name: firstName,
        last_name: lastName,
        email,
        amount,
    };

    try {
        const response = await fetch('/api/donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Donation submitted successfully!');
        } else {
            alert('Failed to process donation.');
        }
    } catch (error) {
        console.error('Error processing donation:', error);
        alert('Error processing donation.');
    }
};