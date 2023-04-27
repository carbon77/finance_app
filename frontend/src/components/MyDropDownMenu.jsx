import React, {useState} from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function MyDropDownMenu({items}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [curItem, setCurItem] = useState([items[0]])

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Счёт</DropdownToggle>
                <DropdownMenu style={{minWidth: "unset"}}>
                    {items.map(item => (
                        <DropdownItem key={item.id} >{item.name}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

MyDropDownMenu.propTypes = {
    direction: PropTypes.string,
};

export default MyDropDownMenu;