# Elementor Popup Form Management System

This project aims to simplify the management of popup forms for Elementor, allowing you to trigger different redirects for the same popup form after submission based on which button was clicked to trigger the popup. The main goal is to eliminate the need for creating multiple duplicate popup forms, thereby reducing clutter and saving time.

## Features

- **Single Popup Form**: Eliminate the need for multiple duplicate popup forms by using a single form for various purposes.
- **Custom Redirects**: Trigger different redirects after form submission based on the button clicked to trigger the popup.
- **One-time Popup Display**: Ensures that the popup is not triggered more than once per user, directing them straight to the redirect URL if they have already submitted the form when the user clicks any trigger buttons on the page.
- **Easy Integration**: Add new popup forms effortlessly by simply adding a class to a button and attributes to the button element.
- **Clutter Reduction**: Use fewer popup forms to avoid clutter on your website.

## Usage

1. **Create Elementor Popup Form**:
    - Create an Elementor popup form.
    - In the custom messages section of the form add `<p class="formrsubmited">This form was successfully submitted.</p>`.
    - Set the display conditions to "Entire Site" and note the Elementor template ID.
    
2. **Add Class to Button**:
    - Add the class `.openpop` to the buttons you want to trigger the popup.

3. **Set Button Attributes**:
    - Add the following attributes to the Elementor button:
        - `data-redirect-url`: Specify the redirect URL after form submission.
        - `data-popup-id`: Set the ID of your popup form.
    
    - `data-redirect-url`: Controls the page where the user is directed after form submission.
    - `data-popup-id`: Specifies which popup is triggered when the button is clicked.

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
