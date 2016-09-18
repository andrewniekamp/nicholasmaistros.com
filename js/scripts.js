// getScores(self): any {
//       var theUrl = "https://nicholasmaistros-779db.firebaseio.com/
// e.json";
//       var theData;
//
//       $.ajax({
//         type: "GET",
//         headers: {
//           //API key from Firebase can go here...
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         dataType: "json",
//         url: theUrl,
//         data: JSON.stringify(theData),
//         success: function (data) {
//           //Have to push data from Firebase to array to deal with Angular2
//           self.pushDataToArray(data);
//         }
//       });
