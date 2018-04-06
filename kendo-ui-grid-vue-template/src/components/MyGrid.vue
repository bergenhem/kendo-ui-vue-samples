<template>
  <div>
    <kendo-grid :data-source="localDataSource">
        <kendo-grid-column field="ProductID" title="ID" :width="40"></kendo-grid-column>
        <kendo-grid-column field="ProductName"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120"></kendo-grid-column>
        <kendo-grid-column field="Discontinued" :width="120" :template="checkboxColumn"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>
import CheckboxTemplate from './CheckboxTemplate.vue';

export default {
  name: "MyGrid",
  props: {
    msg: String
  },
  methods: {
    checkboxColumn: function (e) { // the method name determines what we use in our ":template" binding
      return {
        template: CheckboxTemplate,
        templateArgs: e.Discontinued // "e" is the entire data item, so let's just pass the field related to this column
      }
    }
  },
  data: function() {
    return {
      localDataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          Discontinued: false
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          Discontinued: false
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          Discontinued: false
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 22,
          UnitsInStock: 53,
          Discontinued: false
        },
        {
          ProductID: 5,
          ProductName: "Chef Anton's Gumbo Mix",
          UnitPrice: 21.35,
          UnitsInStock: 0,
          Discontinued: true
        },
        {
          ProductID: 6,
          ProductName: "Grandma's Boysenberry Spread",
          UnitPrice: 25,
          UnitsInStock: 120,
          Discontinued: false
        },
        {
          ProductID: 7,
          ProductName: "Uncle Bob's Organic Dried Pears",
          UnitPrice: 30,
          UnitsInStock: 15,
          Discontinued: false
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
