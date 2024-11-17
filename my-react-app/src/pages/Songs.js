// FileName: Song.js 
import { useRef, useState, useEffect } from "react"; 
import Player from "./components/PlayerSong"; 
import "./styles/app.scss"; 
import ReactGA from "react-ga4";

// Importing DATA 
import Library from "./components/Library"; 

function Songs() { 
	var [songs, setSongs] = useState([]);
	const [currentSong, setCurrentSong] = useState([]); 
	const api_url = "http://localhost:5030";
        useEffect( () => {ReactGA.send({
            hitType: "pageview",
            page: "Songs",
            title: "Songs"
			
        });
		fetch(api_url + "/getSongs")
		.then(res => res.json())
		.then(res => {
			setSongs(res);
			setCurrentSong(res[0]);
			console.log("res", res, "songs", songs, "current song", currentSong)
		})
		
		console.log("songs inside fetch", songs);
		console.log("songs page rendered");
	}, []);
	
	
	
console.log("outside fetch", songs, "url", currentSong.audio);

const [isPlaying, setIsPlaying] = useState(false); 
const audioRef = useRef(null); 
const [songInfo, setSongInfo] = useState({ 
	currentTime: 0, 
	duration: 0, 
	animationPercentage: 0, 
}); 
console.log("current song", currentSong);

const timeUpdateHandler = (e) => { 
	const current = e.target.currentTime; 
	const duration = e.target.duration; 
	//calculating percentage 
	const roundedCurrent = Math.round(current); 
	const roundedDuration = Math.round(duration); 
	const animation = Math.round((roundedCurrent / roundedDuration) * 100); 
	setSongInfo({ 
	currentTime: current, 
	duration, 
	animationPercentage: animation, 
	});
}; 
const songEndHandler = () => { 
	    
	
	let currentIndex = songs.findIndex((song) => song.id === currentSong.id); 
	const currentPlaySong = songs[(currentIndex + 1) % songs.length];
	setCurrentSong(currentPlaySong);
	setIsPlaying(true);
	//Library update
	const newSongs = songs.map((song) => { 
		if (song.id === currentPlaySong.id) { 
			return { 
				...song, 
				active: true, 
			}; 
		} else { 
			return { 
				...song, 
				active: false, 
			}; 
		} 
	}); 
	setSongs(newSongs); 
	//Play audioRef.current.play()
	setTimeout(() => audioRef.current.play() , 2000); 
	handleClick(currentPlaySong.name);
	
}; 
//Event handlers
const handleClick = (songName) => {
	ReactGA.event({
		category: 'Song selected',
		action: 'Click',
		label: songName,
	});
	console.log(songName);
};

	
return ( 
	<div className="songsPage">
		{currentSong && (<div>
		<Library
			handleClick={handleClick}
			setSongs={setSongs} 
			isPlaying={isPlaying} 
			setIsPlaying={setIsPlaying}
			audioRef={audioRef} 
			songs={songs} 
			setCurrentSong={setCurrentSong} 
		/>
		<Player 
			handleClick={handleClick}
			id={songs.id} 
			songs={songs} 
			songInfo={songInfo} 
			setSongInfo={setSongInfo} 
			audioRef={audioRef} 
			isPlaying={isPlaying} 
			setIsPlaying={setIsPlaying} 
			currentSong={currentSong} 
			setCurrentSong={setCurrentSong} 
			setSongs={setSongs} 
		/> 
		
		<audio 
			onLoadedMetadata={timeUpdateHandler} 
			onTimeUpdate={timeUpdateHandler} 
			src={currentSong.audio} 
			ref={audioRef} 
			onEnded={songEndHandler} 
		></audio>
		</div>
	)}
	</div> 
); 

//return <div>{songs_api}</div>;
} 

export default Songs; 
