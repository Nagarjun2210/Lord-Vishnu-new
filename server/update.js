var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arjun@123",
  database: "Lord_Vishnu"
});

con.connect(function(err) {
  if (err) throw err;
  
  const updates = [
    { "id": 48, "title": "47. பிராணயாமம்" },
    { "id": 47, "title": "46. தியானம்" },
    { "id": 46, "title": "45. கீதையின் பொன்மொழிகள்" },
    { "id": 45, "title": "44. யுதிஷ்டிரன் அரசன் ஆனான்" },
    { "id": 44, "title": "43. தேர் வெடித்து சிதறியது" },
    { "id": 43, "title": "42. துரியோதனன் வீழ்ச்சி" },
    { "id": 42, "title": "41. கர்ணன் வீழ்ச்சி" },
    { "id": 41, "title": "40. துரோணர் வீழ்ச்சி" },
    { "id": 40, "title": "39. பீஷ்மர் வீழ்ச்சி" },
    { "id": 39, "title": "38. கிருஷ்ணரின் கடமை" },
    { "id": 38, "title": "37. போர் தொடங்கியது" },
    { "id": 37, "title": "36. கீதையின் முடிவு" },
    { "id": 36, "title": "35. மனம் தெளிவு" },
    { "id": 35, "title": "34. தற்பெருமைகளின் விளைவு" },
    { "id": 34, "title": "33. நான்கு வர்ணங்கள்" },
    { "id": 33, "title": "32. தர்ம நெறிகள்" },
    { "id": 32, "title": "31. பலவகை தானம்" },
    { "id": 31, "title": "30. தம்பம், அசாபலம் & தர்பம்" }
  ]
  
  
  

  // Update only the 'active' field for each song based on its ID
  updates.forEach((update) => {
    const query = `UPDATE Bhagavatgita SET id = ? WHERE title = ?`;
    con.query(query, [update.id, update.title], (err, results) => {
      if (err) {
        console.error('Error updating active status:', err);
        return;
      }
      console.log(`Updated 'active' status for song with ID ${update.id}`);
    });
  });
  
  // If you want to check the results with true/false
  /*const fetchQuery = "SELECT  FROM songs";
  con.query(fetchQuery, (err, results) => {
    if (err) throw err;

    // Convert active field to true/false before logging

    console.log(results);
    
  });
*/
});
