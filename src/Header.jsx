import React from "react";
import { Menu, Segment } from "semantic-ui-react";

const Header = () => {
    return (
        <Segment inverted>
        <Menu inverted secondary>
            <Menu.item
            id="header"
            name="my portfolio"
            />
        </Menu>
    </Segment>    
    );
};

export default Header;