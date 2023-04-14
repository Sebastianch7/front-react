import React from 'react';

function ItemSidebar({ img = '', text = '', clase = ''  }) {
    return (
        <div>
            <li className={clase}>
                <img src={img} alt='img' />
                {text}
            </li>
        </div>
    );
}

export default ItemSidebar;