import React  from 'react';
import './header.css'
import hulu from './hulu.png';
import {HomeIcon,LightningBoltIcon, SearchIcon} from '@heroicons/react/solid';
import LiveIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
const Header = () =>{
    return (
        <div className= "header">
         <div className= "header_icons">
          <div className= "header_icon">
          <HomeIcon   className="icon "/>
          <p className="icon-text active">Home</p>
          </div>
          <div className ="header_icon">
          <LightningBoltIcon  className="icon" />
          <p className= "icon-text">Trending</p>
          </div>
          <div className ="header_icon">
          <VideoLibraryIcon className= 'icon'/>
          <p className= "icon-text">Collection</p>
          </div>
          <div className ="header_icon">
          <LiveIcon className= 'icon'/>
          <p className="icon-text">Live</p>
          </div>
          <div className ="header_icon">
          <SearchIcon className= 'icon'/>
          <p className= "icon-text">Search</p>
          </div>
         </div>
          <img src ={hulu} alt="hulu-logo" />
        </div>
    );
}

export default React.memo(Header);