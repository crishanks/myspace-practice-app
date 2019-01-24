import React from 'react';

class HorizontalNavigation extends React.Component {
    render() {
        return (
            <div class="midsection-nav">
            <nav>
                <ul>
                    <li><a href="">News</a></li>
                    <li><a href="">Arists</a></li>
                    <li><a href="">Q&A</a></li>
                    <li><a href="">Lists</a></li>
                    <li><a href="">Top 8</a></li>
                    <li><a href="">Portraits</a></li>
                    <li>
                        <a class="more-button" href="#">
                            More 
                            <span>&#9660;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default HorizontalNavigation;