import React from "react";
import Card from '../component/Card';

const Content = () => {
    const items = [
                    {
                        title: "Author of Are you creazy",
                        name: "Mr. Sann",
                        imgUrl: "https://semantic-ui.com/images/avatar2/large/matthew.png"
                    },
                    {
                        title: "CEO, Not Sure Tomorrow Ltd.",
                        name: "Mr. Wai Phyo",
                        imgUrl: "https://semantic-ui.com/images/avatar2/large/elyse.png"
                    },
                    {
                        title: "Beauty Queens, USA, 2021",
                        name: "Ms. Sarti",
                        imgUrl: "https://semantic-ui.com/images/avatar2/large/molly.png"
                    },
                    {
                        title: "World Cup Champion",
                        name: "Nilar Win",
                        imgUrl: "https://semantic-ui.com/images/avatar/large/jenny.jpg" 
                    }
                ];
const renderCards = (cards) => {
    return cards.map((card) => {
        return (
            <Card 
                title={card.title}
                imgUrl={card.imgUrl}
                name={card.name}
          />
        )
    })
}
  return (
    <div className="centered row">
      <div className="fourteen wide column">
        <div class="ui four cards">
            {renderCards(items)}
        </div>
      </div>
    </div>
  );
};
export default Content;

