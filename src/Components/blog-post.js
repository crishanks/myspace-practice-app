import React from 'react';
import Drake from '../images/Blog-Images/drake.jpg';
import Posty from '../images/Blog-Images/posty2.jpg';
import Future from '../images/Blog-Images/future.jpg';
import Childish from '../images/Blog-Images/childish.jpg';
import Kendrick from '../images/Blog-Images/kendrick.jpg';
import Logic from '../images/Blog-Images/logic.jpg';

class BlogPost extends React.Component {
    render() {
        if (this.props.image === "Drake") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Drake} alt="drake"/>
                        <a href="http://www.google.com"></a>
                    </div>
                    <h2>
                        <a href="http://www.google.com"> I Guess We'll do Drake</a>
                    </h2>
                    <p>Man, oh man does Drake do rap music or what? He just really did a doozie on that last one, broh!</p>
                </div>  
            );
        } else if (this.props.image === "Posty") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Posty} alt="Posty"/>
                        <a href="http://google.com"></a>
                    </div>
                    <h2>
                        <a href="http://google.com"> Oh No, It's Posty</a>
                    </h2>
                    <p>Oh geez, looks like he's droppin' another dope track, broh!</p>
                </div>  
            );
        } else if (this.props.image === "Childish") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Childish} alt="Childish"/>
                        <a href="http://google.com"></a>
                    </div>
                    <h2>
                        <a href="http://google.com"> Yaw, Trick, Yaw!</a>
                    </h2>
                    <p>JK LOL, that's Soulja Boy. We talkin' 'bout Childish Gambino, broh!</p>
                </div>  
            );
        } else if (this.props.image === "Logic") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Logic} alt="Logic"/>
                        <a href="http://google.com"></a>
                    </div>
                    <h2>
                        <a href="http://google.com"> His Raps Make Sense!</a>
                    </h2>
                    <p>LOGICal sense that is ;) Let's listen to some good 'ol fashion rap and think about its meaning, broh!</p>
                </div>  
            );
        } else if (this.props.image === "Future") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Future} alt="Future"/>
                        <a href="http://google.com"></a>
                    </div>
                    <h2>
                        <a href="http://google.com"> ...And We Don't Mean Time Travel</a>
                    </h2>
                    <p>Future's beats are like something out of the 22nd Century! #AmIRite, broh?</p>
                </div>  
            );
        } else if (this.props.image === "Kendrick") {
            return (
                <div class="grid-item">
                    <div class="hide-overflow">
                        <img src={Kendrick} alt="Kendrick"/>
                        <a href="http://google.com"></a>
                    </div>
                    <h2>
                        <a href="http://google.com"> Don't Call It a Comeback...</a>
                    </h2>
                    <p>Because you have to become unpopular for a stint to come back up. And my boi Kendrick's still on top, broh!</p>
                </div>  
            );
        } else {
            return <h3>Stay tuned for more dope content, broh!</h3>
        }
    }
}

export default BlogPost;