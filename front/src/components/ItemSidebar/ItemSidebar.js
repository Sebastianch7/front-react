import React from 'react';

function ItemSidebar({ img = '', text = '', clase = '', url  }) {
    return (
        <div>
            <a href={url}><li className={clase}>
                <img src={img} alt='img' />
                {text}
            </li>
            </a>
        </div>
    );
}

export default ItemSidebar;