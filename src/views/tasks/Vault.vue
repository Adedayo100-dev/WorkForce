<template>
    <div class="vault-view">
        <form @submit.prevent="submitForm">
        <!-- Render each fieldset -->
        <fieldset v-if="showFieldset">
            <legend>Fieldset {{ index }}</legend>
            <label>Field 1:</label>
            <input v-model="currentFieldset.field1" type="text">
            <br>
            <label>Field 2:</label>
            <input v-model="currentFieldset.field2" type="text">
            <br>
            <!-- Save button for each fieldset -->
            <button type="button" @click="saveFieldset(index)">Save</button>
        </fieldset>
    
        <!-- Button to toggle fieldset visibility -->
        <button type="button" @click="toggleFieldset">Toggle Fieldset</button>
    
        <!-- Submit button for the whole form -->
        <button type="submit">Submit</button>
        </form>
    </div>
    <pre>{{ JSON.stringify(currentFieldset, null, 2) }}</pre>
    <pre>{{ JSON.stringify(fieldsets, null, 2) }}</pre>
    
</template>
  
<script>
  export default {
    data() {
      return {
        fieldsets: [], // Array to store fieldset objects
        currentFieldset: {
          field1: '',
          field2: ''
        }, // Current fieldset object
        showFieldset: false, // Controls the visibility of the fieldset
        index: 0,
      };
    },
    methods: {
      toggleFieldset() {
        if (this.showFieldset) {
          // If fieldset is visible, save current fieldset object
        //   this.fieldsets.push(this.currentFieldset);
          this.currentFieldset = { field1: '', field2: '' }; // Reset current fieldset
        }
        this.showFieldset = !this.showFieldset; // Toggle visibility
      },
      saveFieldset(index) {
        // Save the updated values of the fieldset at the specified index
        this.fieldsets[index] = { ...this.fieldsets[index], ...this.currentFieldset };
        this.showFieldset = !this.showFieldset;
        this.index++
      },
      submitForm() {
        // Handle form submission
        console.log('Form submitted', this.fieldsets);
      }
    }
  };
  </script>
  


