<template>
  <div>
    <kendo-grid :data-source="localDataSource"
                :filterable-extra="false"
                :filterable-operators-string-eq="'Is'"
                :filterable-operators-string-neq="'Is Not'">
        <kendo-grid-column field="ProductID" title="ID" :filterable=false :width="40"></kendo-grid-column>
        <kendo-grid-column field="ProductName" :filterable=false></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'" :filterable=false></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120" :filterable=false></kendo-grid-column>
        <kendo-grid-column field="InStock" title="In Stock" :width="120" :filterable-ui="stockedFilter">
        </kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script>

export default {
  name: "MyGrid",
  props: {
    msg: String
  },
  methods: {
    stockedFilter: function(element) { // filterable-ui gives us a HTML element that we can transform to another Kendo UI component
      element.kendoDropDownList({
        dataSource: {
          data: ["Stocked", "Not Stocked"]
        },
        optionLabel: "--Select Value--"
      })
    },
  },
  data: function() {
    return {
      localDataSource: [
        {
          ProductID: 1,
          ProductName: "Chai",
          UnitPrice: 18,
          UnitsInStock: 39,
          InStock: "Stocked"
        },
        {
          ProductID: 2,
          ProductName: "Chang",
          UnitPrice: 17,
          UnitsInStock: 40,
          InStock: "Stocked"
        },
        {
          ProductID: 3,
          ProductName: "Aniseed Syrup",
          UnitPrice: 10,
          UnitsInStock: 13,
          InStock: "Stocked"
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 22,
          UnitsInStock: 53,
          InStock: "Not Stocked"
        },
        {
          ProductID: 5,
          ProductName: "Chef Anton's Gumbo Mix",
          UnitPrice: 21.35,
          UnitsInStock: 0,
          InStock: "Stocked"
        },
        {
          ProductID: 6,
          ProductName: "Grandma's Boysenberry Spread",
          UnitPrice: 25,
          UnitsInStock: 120,
          InStock: "Stocked"
        },
        {
          ProductID: 7,
          ProductName: "Uncle Bob's Organic Dried Pears",
          UnitPrice: 30,
          UnitsInStock: 15,
          InStock: "Not Stocked"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
