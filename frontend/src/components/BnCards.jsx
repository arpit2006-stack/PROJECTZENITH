import React from 'react';
import Image1 from '../assets/slideimg1.jpg';
import Image2 from '../assets/slideimg2.jpg';
import Image3 from '../assets/slideimg5.jpg';
import Image4 from '../assets/slidieimg4.jpg';

export default function ThreeCardLayout() {
    const cards = [
        {
            title: "Card 1",
            description: "This is the first card's description.",
            image: Image1
        },
        {
            title: "Card 2",
            description: "This is the second card's description.",
            image: Image2
        },
        {
            title: "Card 3",
            description: "This is the third card's description.",
            image: Image3
        },
        {
            title: "Card 4",
            description: "This is the fourth card's description.",
            image: Image4
        }
    ];

    return (
        <div className="flex mt-10 mb-10 ml-20 gap-30 p-0">
            <div id="cards-row1" className="grid grid-cols-1 md:grid-cols-4 gap-70 max-w-5xl">
                {cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="bg-white w-72 rounded-2xl shadow-lg overflow-hidden p-0 transform transition duration-300 hover:scale-103 shadow-black"
                    >
                        <img src={card.image} alt={card.title} className="w-full h-88 object-cover rounded-lg" />
                        {/* <h2 className="text-xl font-bold mt-2">{card.title}</h2>
                        <p className="text-gray-600 mt-2">{card.description}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
