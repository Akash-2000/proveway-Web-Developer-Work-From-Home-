function setupSingleSelection() {
    const radios = document.querySelectorAll('.unit-container .selected input[type="radio"]');
  
    // Add event listeners to each radio input
    radios.forEach((radio) => {
      radio.addEventListener('change', function () {
        // Deselect all other radio buttons
        radios.forEach((r) => {
          if (r !== this) {
            r.checked = false;
          }

           // Hide all form containers
           const formContainer = r.closest('.unit-container').querySelector('.selected-Form');
           if (formContainer) {
             formContainer.classList.remove('selected-Form-visible');
           }
         
        });
  
        // Optional: Highlight the selected container
        document.querySelectorAll('.price-container').forEach((container) => {
          container.classList.remove('price-container-selected');
        });
  
        // Add active class to the selected container
        const parentContainer = this.closest('.price-container');
        const formContainer = this.closest('.unit-container').querySelector('.selected-Form');
        if (this.checked) {
            if (parentContainer) {
              parentContainer.classList.add('price-container-selected');
            }
            if (formContainer) {
              formContainer.classList.add('selected-Form-visible');
            }
          }
      });
    });
  }
  
  // Call the function when the DOM is ready
  document.addEventListener('DOMContentLoaded', setupSingleSelection);
  