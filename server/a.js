var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Arjun@123",
  database: "Lord_Vishnu"
});

con.connect(function(err) {
  if (err) throw err;

  // Create the songs table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Songs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      artist VARCHAR(255) NOT NULL,
      audio LONGTEXT NOT NULL,
      active BOOLEAN NOT NULL
    )
  `;
  con.query(createTableQuery, function(err, result) {
    if (err) throw err;
    console.log("Bhagavatgita table created or already exists.");
    const songs = [ 
      { 
      name: "Aathma rama anandha ramana",  
      artist: " ", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Faathma-rama-song-ramasongs-rama-god-aathmarama-128-ytshorts.savetube.me.mp3?alt=media&token=bb163c6b-0a84-42c2-9d36-aa9608812808", 
      active: true, 
      },
      { 
      name: "Aayarpadi maligaiyil",  
      artist: "S. P. Balasubrahmanyam", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Faayarpadi-maligaiyil.mp3?alt=media&token=53a1de56-35de-4f67-8d34-8a78e212c5e7",
      active: false, 
      }, 
      { 
      name: "Azhaikiran madhavan",  
      artist: "K. J. Yesudas, C. Dinesh", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Falllaikkirraannn-maatvn.mp3?alt=media&token=ca20722b-2374-48c4-988c-50d809b88b73", 
      active: false, 
      }, 
      { 
      name: "Enna dhavam seydhanai",  
      artist: "Sudha Raghunathan", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fennnnnn-tvm-ceytnnnai.mp3?alt=media&token=17716fd0-c67a-4f87-92c7-07caeb5b6765", 
      active: false, 
      }, 
      { 
      name: "Gokulathu pasukalellam",  
      artist: "S. Janaki", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fgokulathu-pasukkalellam.mp3?alt=media&token=4e507487-b83b-432c-b36e-7b922dc6b058", 
      active: false, 
      }, 
      { 
      name: "Gopiyare gopiyare",  
      artist: "L. R. Eswari", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fgopiyare-gopiyare.mp3?alt=media&token=481846c6-d5c0-4ae2-b113-2aa28cce31cf", 
      active: false, 
      }, 
      { 
      name: "Govinda harinama sangeethanam",  
      artist: "S. P. Balasubrahmanyam", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fgovinda-harinama.mp3?alt=media&token=fafef1ee-2093-470a-8d35-0edd94e0b3ff", 
      active: false, 
      }, 
      { 
      name: "Guruvayurukku varungal",  
      artist: "P. Susheela", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fguruvayurukku-varungal.mp3?alt=media&token=92ff1d77-2232-411e-b7ef-eb957efbc6a6", 
      active: false, 
      }, 
      { 
      name: "Hari hari hari govinda",  
      artist: "S. P. Balasubrahmanyam", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fhari-hari-hari-govinda.mp3?alt=media&token=79ee9e09-ca95-4e00-8778-f8ee7ce8dd96", 
      active: false, 
      }, 
      { 
      name: "Hayagreevar - Thooya meignana..",  
      artist: "Charumathi Shankar Iyer", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fhayagreevar.mp3?alt=media&token=7e9de2d0-6d8c-45f5-9e6c-5d541fe23b5b", 
      active: false, 
      }, 
      { 
      name: "Kurai ondrum illai",  
      artist: "Nithyasree Mahadevan", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fkurai-ondrum-illai.mp3?alt=media&token=fa45bfe8-dbe7-461b-a839-8da295f2a080", 
      active: false, 
      }, 
      { 
      name: "Namo namo sri narayana",  
      artist: "Mahanadhi Shobana", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fnamo-namo-sri-narayana.mp3?alt=media&token=8afdf845-5019-4d72-a330-f6bd787eca0e", 
      active: false, 
      },
      { 
      name: "Oushadagiri Hayagreevane",  
      artist: "Charumathi Shankar Iyer", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2FOushadagiri-hayagreevane.mp3?alt=media&token=45b9b360-9431-4fdf-8c80-a67677027ab7", 
      active: false, 
      }, 
      
      { 
      name: "Pullanguzhal kodutha moongigale",  
      artist: "T M Soundarrajan", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fpullanguzhal-kodutha-moongigale.mp3?alt=media&token=d62c0873-b4cf-41db-ba9f-a3316752e3b1", 
      active: false, 
      }, 
      { 
      name: "Raghupathi raghava rajaram",  
      artist: " ", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fraghupathi-raghava-rajaram-original-lyrics-128-ytshorts.savetube.me.mp3?alt=media&token=ca63b5f9-c944-45ff-91d6-7cce99d77697", 
      active: false, 
      },
      { 
      name: "Sri Ranganaathane",  
      artist: "Mahanadhi Shobana", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fsri-ranganaathane.mp3?alt=media&token=f01776dc-b976-4612-b938-38abfc9fd8d9", 
      active: false, 
      },
        { 
      name: "Thirupathi sendru vanthal",  
      artist: "Mahanadhi Shobana", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fthirupathi-sendru-vanthal.mp3?alt=media&token=7a6afb16-28d7-48a8-a010-0fd4e288fe63", 
      active: false, 
      }, 
      { 
      name: "Veera raghava",  
      artist: "S. P. Ramu & Meera Krishna", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fveera-raghava.mp3?alt=media&token=22555957-74d0-4c79-902e-059c2acb3902", 
      active: false, 
      }, 
      { 
      name: "Varum naallellaam undhan thirunaalee",  
      artist: "K. B. Sundarambal", 
      audio: "https://firebasestorage.googleapis.com/v0/b/tutorial-68ed9.appspot.com/o/songs%2Fvrum-naallellaam-untnnn-tirunaallee.mp3?alt=media&token=e73f0efc-9dbd-41cc-85c0-1dc33c16df97", 
      active: false, 
      }
    ]; 
    

// Insert each title and content into the Bhagavatgita table
songs.forEach((song, index) => {
  const insertQuery = `INSERT INTO Songs (name, artist, audio, active) VALUES (?, ?, ?, ?)`;
  con.query(insertQuery, [song.name, song.artist, song.audio, song.active], function(err, results) {
    if (err) {
      console.error('Error inserting Bhagavatgita entry:', err);
      return;
    }
    console.log(`Inserted entry: ${song.name}`, results);
  });
});
});
});