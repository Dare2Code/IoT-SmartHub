$(document).ready(function () {
 
 $('#retrieve-resources').click(function () {
 var displayResources = $('#display-resources');
 
 displayResources.text('Loading data from JSON source...');
 
 
 $.ajax({
 type: "GET",
 url: "https://4014be2e-f153-4b36-b638-5f1ce9d8dd78-bluemix.cloudant.com/storage01/_design/viewid/_view/_id?descending=true&limit=30",
 success: function(result)
 {
 var output="<table><thead><tr><th>idd</th><th>Value</th><th>key</th></thead><tbody>";
 for (var i in result.rows)
 {
	 var d = new Date();
	 var utc = (result.rows[ i ].key) - (d.getTimezoneOffset() * 60000);
	 var nd = new Date(utc + (3600000*+4));
	 var tm = nd.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })
 output+="<tr><td>" + result.rows[ i ].id + "</td><td>" + tm + "</td><td>" + result.rows[ i ].value.temp + "</td></tr>";
 }
 output+="</tbody></table>";
 
 displayResources.html(output);
 $("table").addClass("table");
 }
 });
 
 });
});