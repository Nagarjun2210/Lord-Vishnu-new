// FileName: LibrarySong.js 

import React from "react"; 
const LibrarySong = ({ 
	handleClick,
	song, 
	songs, 
	setCurrentSong, 
	audioRef, 
	isPlaying, 
	setIsPlaying,
	setSongs, 
	id, 
}) => { 
	const songSelectHandler = async () => { 
		await setCurrentSong(song); 
		//active 
		const newSongs = songs.map((song) => { 
			if (song.id === id) { 
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
		//check if song is playing 
		setIsPlaying(true);
		audioRef.current.play(); 
		handleClick(song.name);
	}; 
	return ( 
		<div 
			onClick={songSelectHandler} 
			className={`library-song ${song.active ? "selected" : ""}`} 
			> 
			<div className="song-description"> 
				<h3 className="h2h3 h3h4">{song.name}</h3> 
				<h4 className="h3h4">{song.artist}</h4> 
			</div> 
		</div> 
	); 
}; 

export default LibrarySong; 
