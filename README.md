# Add Loan Form 🏦

This project provides a simple, well-structured HTML form for adding new loan entries, complemented by modern and responsive CSS for an intuitive user interface, and includes a JavaScript file for dynamic functionalities.

---

## ✨ Overview

The "Add Loan" form is designed to collect various details required for a loan application, including loan product selection, borrower information, unique loan numbers, and custom fields for banking and guarantor details. The form is styled to be clean, user-friendly, and adaptable to different screen sizes. Any dynamic behavior or form interactions would be handled by the associated JavaScript file.

---

## 📂 Files

* `index.html`: Contains the semantic HTML structure of the "Add Loan" form.
* `addLoan.css`: Provides all the styling for the form, making it visually appealing and responsive.
* `addLoan.js`: Handles any interactive or dynamic functionalities for the form (e.g., setting custom loan numbers, form validation, data submission).

---

## 🚀 Features

* **Clean Structure**: The HTML is organized into logical sections (`form-section`, `custom-fields-section`) for better readability and maintainability.
* **Responsive Design**: The CSS ensures the form looks good and functions well on both large screens (desktops) and smaller devices (tablets and mobile phones). 📱💻
* **Styled Form Elements**: Custom styles for `select` dropdowns, `input` fields, and `buttons` for a consistent look.
* **Required Field Indicators**: Asterisks (`*`) clearly mark mandatory fields, making it easy for users to identify necessary information. These asterisks are intentionally **bold and dark red** for high visibility.
* **Dynamic Behavior**: The `addLoan.js` file allows for client-side interactions, such as the "Set Custom Loan #" button functionality, and can be extended for validation or form submission logic.
* **Action Buttons**: Dedicated buttons for "Cancel" and "Save Loan" facilitate user interaction.

---

## 🛠️ How to Use

1.  **Clone or Download**: Get the `index.html`, `addLoan.css`, and `addLoan.js` files into the same directory on your computer.
2.  **Open in Browser**: Simply open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Edge).

The form will render immediately with all the applied styles, and any JavaScript functionality will be active.

---

## 🎨 Customization

You can easily customize the appearance and behavior of the form by modifying the CSS and JavaScript files:

* **Color Scheme**: Adjust the CSS variables defined in `:root` (e.g., `--heading-color`, `--cta-background-color`) in `addLoan.css` to match your brand's color palette. 🌈
* **Font Styles**: Change `font-family` properties in `addLoan.css` to use different fonts.
* **Layout**: Modify flexbox properties within `.form-group` and media queries in `addLoan.css` to alter the form's layout.
* **Asterisk Styling**: The `color`, `font-weight`, and `font-size` of the `.required-asterisk` class in `addLoan.css` can be tweaked further if needed. ✨
* **Form Logic**: Update the `addLoan.js` file to add or modify form validation rules, handle data submission, or implement new interactive elements.

---
