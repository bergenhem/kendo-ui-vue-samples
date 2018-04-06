<template>
<div>
  <input type="checkbox" v-model=templateArgs class="k-checkbox" disabled />
  <label class="k-checkbox-label"></label> <!-- needed for the Kendo UI theme to style the checkbox appropriately -->
</div>
</template>

<script>
export default {
    name: 'CheckboxTemplate',
    data() {
      return {
        templateArgs: {} // to be populated when calling the template
      }
    }
}
</script>