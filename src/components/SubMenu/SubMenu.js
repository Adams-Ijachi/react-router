import React, { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const SideBarLink = styled(Link)`
    display: flex;
    color:#e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    text-decoration: none;
    list-style: none;
    height: 60px;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`

const SideBarLabel = styled.span`
    margin-left: 16px;
`

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color:#f5f5f5;
    font-size: 18px;

    &:hover { 
        background: #632ce4;
        cursor: pointer;
     }
`
const SubMenu = ({item}) => {
    const [subNav, setSubNav] = useState(false);

    const showSubNav = () => { 
        setSubNav(!subNav);
        console.log(subNav);
    }
    return (
        <div>
            <SideBarLink to={item.path} onClick={item.subNav && showSubNav}>
               
                    {item.icon}
                    <SideBarLabel>
                        {item.title}
                    </SideBarLabel>
                    <div>
                        {item.subNav && subNav 
                        ? item.iconOpened 
                        : item.subNav 
                        ? item.iconClosed 
                        : null}
                    </div>
            </SideBarLink>
            {subNav && item.subNav.map((item,index) => {
                return (
                    
                        <DropdownLink to={item.path} key={index}>
                            {item.icon}
                            <SideBarLabel>
                                {item.title}
                            </SideBarLabel>
                        </DropdownLink>
                    
                    )})}
               
        </div>
    )
}

export default SubMenu
