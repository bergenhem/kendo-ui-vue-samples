<template>
  <div>
    <div class="buttonArea">
      <kendo-button @click="saveGridSettings">Save</kendo-button>
      <kendo-button @click="loadGridSettings">Load</kendo-button>
    </div>
    <kendo-grid ref="myGrid" :data-source="localDataSource" :reorderable="true" :resizable="true">
        <kendo-grid-column field="ProductID" title="ID" :width="40"></kendo-grid-column>
        <kendo-grid-column field="ProductName"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120"></kendo-grid-column>
        <kendo-grid-column field="Discontinued" :width="120"></kendo-grid-column>
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
    saveGridSettings: function(e) {
      e.preventDefault();
      let grid = this.$refs.myGrid.kendoWidget(); // since we defined ref="myGrid" we can call this (the Vue component) and access it on $ref
      localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions()); // this localStorage use can be a call to a database etc.
    },
    loadGridSettings: function(e) {
      e.preventDefault();
      let grid = this.$refs.myGrid.kendoWidget();
      let options = localStorage["kendo-grid-options"];
      if(options) {
        grid.setOptions(JSON.parse(options));
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
  .buttonArea {
    margin: 10px;
  }

  .buttonArea button {
    margin: 10px;
  }
</style>
