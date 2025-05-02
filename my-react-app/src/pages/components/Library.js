// FileName: Library.js 

import React from "react"; 
import LibrarySong from "./LibrarySong"; 

const Library = ({ 
	handleClick,
	songs, 
	setCurrentSong, 
	audioRef, 
	isPlaying, 
	setIsPlaying,
	setSongs,  
}) => { 
	console.log("l")
	return ( 
		<div className="container">
			<div className="library"> 
				<h2 className="header" style={{ color: "white" }}>All songs</h2> 
				<div className="library-songs"> 
					{songs.map((song) => ( 
						<LibrarySong 
							handleClick={handleClick}
							setSongs={setSongs} 
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying} 
							audioRef={audioRef} 
							songs={songs} 
							song={song} 
							setCurrentSong={setCurrentSong} 
							_id={song._id} 
							key={song._id} 
						/> 
					))} 
				</div> 
			</div> 
		</div>
	); 
}; 

export default Library; 
