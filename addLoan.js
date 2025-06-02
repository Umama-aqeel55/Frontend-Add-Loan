document.addEventListener('DOMContentLoaded', () => {
    const addLoanForm = document.getElementById('addLoanForm');
    const loanNumberInput = document.getElementById('loanNumber');
    const setCustomLoanBtn = document.getElementById('setCustomLoanBtn');
    let isCustomLoanNumberSet = false;

    // Flatpickr initialization is no longer needed
    // flatpickr("#loanReleaseDate", {
    //     dateFormat: "d/m/Y",
    // })
    addLoanForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const loanProduct = document.getElementById('loanProduct').value;
        const borrower = document.getElementById('borrower').value;
        const loanNumber = loanNumberInput.value.trim();

        if (!loanProduct) {
            alert('Please select a Loan Product.');
            return;
        }

        if (!borrower) {
            alert('Please select a Borrower.');
            return;
        }

        if (!loanNumber) {
            alert('Loan Number cannot be empty.');
            return;
        }

        
        const formData = {
            loanProduct: loanProduct,
            borrower: borrower,
            loanNumber: loanNumber
        };

        console.log('Loan Data to Save:', formData);
        alert('Loan Saved Successfully! (Check console for data)');

    
        /*
        fetch('/api/add-loan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Loan added successfully!');
            // Optionally redirect or clear form
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to add loan. Please try again.');
        });
        */
    });


    setCustomLoanBtn.addEventListener('click', (event) => {
        event.preventDefault(); 

        if (isCustomLoanNumberSet) {
            loanNumberInput.value = "909103000101-0084"; 
            loanNumberInput.readOnly = true;
            loanNumberInput.style.backgroundColor = 'var(--card-background-color)';
            setCustomLoanBtn.textContent = 'Set Custom Loan #';
        } else {
            loanNumberInput.value = '';
            loanNumberInput.readOnly = false;
            loanNumberInput.style.backgroundColor = '#fff';
            loanNumberInput.focus();
            setCustomLoanBtn.textContent = 'Use Default Loan #';
        }
        isCustomLoanNumberSet = !isCustomLoanNumberSet;
    });
});