import React from 'react';
import Drake from '../images/Drake-1.jpg';

class BlogPost extends React.Component {
    render() {
        return (
            <div class="blog-content">
                <div class="grid-row">
                    <div class="grid-item">
                        <div class="hide-overflow">
                            <img src={Drake} alt="drake"/>
                            <a href="#"></a>
                        </div>
                        <h2>
                            <a href="#"> I Guess We'll do Drake</a>
                        </h2>
                        <p>Man, oh man does Drake do rap music or what? He just really did a doozie on that last one, broh!</p>
                    </div>  
                </div>
            </div>
        );
    }
}

export default BlogPost;