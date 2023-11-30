// serviceOrZipValidator.js
import { LightningElement, track } from 'lwc';

export default class ServiceOrZipValidator extends LightningElement {
    @track selectedOption;
    @track serviceArea;
    @track zipCode;

    get options() {
        return [
            { label: 'Service Area', value: 'serviceArea' },
            { label: 'Zip Code', value: 'zipCode' },
        ];
    }

    handleChange(event) {
        this.selectedOption = event.detail.value;
    }

    handleServiceAreaChange(event) {
        this.serviceArea = event.target.value;
    }

    handleZipCodeChange(event) {
        this.zipCode = event.target.value;
    }

    handleValidation() {
        // Add your validation logic here based on the selected option and entered input
        if (this.selectedOption === 'serviceArea') {
            // Validate service area input
            if (this.serviceArea) {
                // Perform validation logic
                console.log('Service Area Validated:', this.serviceArea);
            } else {
                console.error('Service Area is required.');
            }
        } else if (this.selectedOption === 'zipCode') {
            // Validate zip code input
            if (this.zipCode) {
                // Perform validation logic
                console.log('Zip Code Validated:', this.zipCode);
            } else {
                console.error('Zip Code is required.');
            }
        }
    }

    @track isNational = false;
    @track selectedProductFamily;

    get productFamilyOptions() {
        return [
            { label: 'Electronics', value: 'Electronics' },
            { label: 'Clothing', value: 'Clothing' },
            { label: 'Home and Garden', value: 'Home and Garden' },
            // Add more product family options as needed
        ];
    }

    handleNationalChange(event) {
        this.isNational = event.target.checked;
    }

    handleProductFamilyChange(event) {
        this.selectedProductFamily = event.detail.value;
    }

}
