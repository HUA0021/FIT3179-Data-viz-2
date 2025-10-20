// Define your visualization JSON files
var vg_1 = "bird_map_code.json";
var vg_2 = "bird_vs_rain.json";
var vg_3 = "bird_over_time.json";

// Embed all three Vega-Lite visualizations
vegaEmbed("#bird_map", vg_1)
  .then(function(result) {

  })
  .catch(console.error);

vegaEmbed("#bird_vs_rain", vg_2)
  .then(function(result) {

  })
  .catch(console.error);

vegaEmbed("#bird_over_time", vg_3)
  .then(function(result) {

  })
  .catch(console.error);
