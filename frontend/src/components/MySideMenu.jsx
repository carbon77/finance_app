import React from 'react';
import "./Menu.css"
import {slide as Menu} from 'react-burger-menu'

function MySideMenu() {
    return (
        <div>
            <Menu width={'50%'}>
                <a id="home" className="menu-item" href="/">Главная</a>
                <a id="about" className="menu-item" href="/category">Категории</a>
                <a id="contact" className="menu-item" href="/account">Счета</a>
            </Menu>
        </div>
    );
}

export default MySideMenu;