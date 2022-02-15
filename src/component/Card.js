import React from 'react';
​
const Card = (props) => {
    console.log(props.title);
    return (
        <div class="ui card">
            <div class="image dimmable">
              <div class="ui blurring inverted dimmer transition hidden">
                <div class="content">
                  <div class="center">
                    <div class="ui teal button">Add Friend</div>
                  </div>
                </div>
              </div>
              <img src={props.imgUrl} />
            </div>
            <div class="content">
            <div class="header">{props.title}</div>
              <div class="meta">
                <a class="group">{props.name}</a>
              </div>
              <div class="description">
                One or two sentence description that may go to several lines
              </div>
            </div>
            <div class="extra content">
              <a class="right floated created">Arbitrary</a>
              <a class="friends">Arbitrary</a>
            </div>
          </div>
    )
}
​
export default Card;
