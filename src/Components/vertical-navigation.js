import React from 'react';
import MySpaceLogo from '../images/myspace-logo.png';
import SearchIcon from '../images/search-icon.png';
import FlameIcon from '../images/flame.png';
import MusicIcon from '../images/music.png';
import PeopleIcon from '../images/people.png';
import VideoIcon from '../images/video.png';


class VerticalNavigation extends React.Component {
    render() {
        return (
            <div className="sidebar">
                    <div id="sidebar-content">
                        <div>
                            <a id="search" href="http://google.com">
                                <img id="myspace-logo" src={MySpaceLogo} alt="myspace logo"/>
                            </a>
                            <a href="http://google.com">
                                <img src={SearchIcon} alt="search icon"/>
                                <span>Search</span>
                            </a>
                            <h2>DISCOVER</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="http://google.com">
                                            <img src={FlameIcon} alt="flame"/>
                                            <span>Featured</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="http://google.com">
                                            <img src={MusicIcon} alt="music"/>
                                            <span>Music</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="http://google.com">
                                            <img src={VideoIcon} alt="video"/>
                                            <span>Videos</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="http://google.com">
                                            <img src={PeopleIcon} alt="people"/>
                                            <span>People</span>
                                        </a>
                                    </li>
                                    <button href="http://google.com">Sign Up</button>
                                    <li>
                                        <a id="sign-in" href="http://google.com">
                                            <span>Sign In</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <p>Disclaimer: This site is too dope for weenies. We will not be held responsible for any damage recieved upon viewing and/or interacting with our website including but not limited to: epileptic seizures, regretful tattoos and unwanted pregnancies.</p>
                    </div>
            </div>
        );
    }
}

export default VerticalNavigation;