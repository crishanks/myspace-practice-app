import React from 'react';

class VerticalNavigation extends React.Component {
    render() {
        return (
            <div className="sidebar">
                <VerticalNavigation>
                    <div id="sidebar-content">
                        <div>
                            <a id="search" href="http://google.com">
                                <img id="myspace-logo" src="./src/images/myspace-logo.png" alt="myspace logo"/>
                            </a>
                            <a href="http://google.com">
                                <img src="./src/images/search-icon.png" alt=""/>
                                <span>Search</span>
                            </a>
                            <h2>DISCOVER</h2>
                            <nav>
                                <ul>
                                    <li>
                                        <a href="http://google.com">
                                            <img src="./src/images/flame.png" alt="flame"/>
                                            <span>Featured</span>
                                        </a>
                                    </li>
                                    
                                    <li>
                                        <a href="http://google.com">
                                            <img src="./src/images/music.png" alt="music"/>
                                            <span>Music</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="http://google.com">
                                            <img src="./src/images/video.png" alt="video"/>
                                            <span>Videos</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="http://google.com">
                                            <img src="./src/images/people.png" alt="people"/>
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
                </VerticalNavigation>
            </div>
        );
    }
}

export default VerticalNavigation;