import React from 'react';
import ItemSidebar from '../ItemSidebar/ItemSidebar';

function mostrar(){
    const button = document.querySelector('.toggle-btn');
    button.classList.toggle('active');
    const menu = document.querySelector('#sideBar');
    menu.classList.toggle('active');
}

function Sidebar({ props }) {
    return (
        <div className='sideBar active' id='sideBar'>
            <div className="toggle-btn" onClick={mostrar}>
                <img src="./icon/slide.png" alt="" />
            </div>
            <div className="title">
                CRUD OPERATIONS
            </div>
            <div className="perfil">
                <div className="perfil-img">
                    <img src="./img/perfil.jpeg" alt="" />
                </div>
                <span className="perfil-name">Karthi Madesh</span>
                <span className="perfil-role">Admin</span>
            </div>
            <ul>
                <ItemSidebar text="home" img="./icon/home.png" clase="" />
                <ItemSidebar text="course" img="./icon/course.png" clase="" />
                <ItemSidebar text="clients" img="./icon/clients.png" clase="selected" />
                <ItemSidebar text="payment" img="./icon/payment.png" clase="" />
                <ItemSidebar text="report" img="./icon/report.png" clase="" />
                <ItemSidebar text="settings" img="./icon/settings.png" clase="" />
            </ul>
        </div>
    );
}

export default Sidebar;