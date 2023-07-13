import { React } from 'react';

export default function Stats({ items }) {
    if (!items.length) return <p className='stats'> <em>Start adding some items to your packing list 🚀 </em></p>;
    const numItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = (numPacked / numItems) * 100;
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "you are ready to go ✈️" : `💼You have ${numItems} items on your List ,and you already packed ${numPacked}(${percentage}%)`}

            </em>
        </footer>
    );

}
