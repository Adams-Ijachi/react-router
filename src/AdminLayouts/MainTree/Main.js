import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import SideBar from '../../components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OverView from './../pages/OverView';
import Rides from './../pages/Rides';



function Main() {
    const SidebarData = [
        {
            title:'OverView',
            path:'/overview',
            icon: <AiIcons.AiFillHome/>,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
        
            subNav:[
                {
                    title:'users',
                    path:'/overview/users',
                    icon: <IoIcons.IoIosPaper/>,
                },
                {
                    title:'Revenue',
                    path:'/overview/revenue',
                    icon: <IoIcons.IoIosPaper/>,
                },
            ]

        },
        {
            title:'Reports',
            path:'/reports',
            icon: <IoIcons.IoIosPaper/>,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            subNav:[
                {
                    title:'reports 1',
                    path:'/revenue/reports1',
                    icon: <IoIcons.IoIosPaper/>,
                },
                {
                    title:'reports 2',
                    path:'/revenue/reports2',
                    icon: <IoIcons.IoIosPaper/>,
                },
            ]

        },
        {
            title:'Rides',
            path:'/rides',
            icon: <IoIcons.IoMdHelpCircle/>,
            iconOpened: <RiIcons.RiArrowDownSFill />,
            iconClosed: <RiIcons.RiArrowUpSFill />,
            
        }
    ]


    return (
        <Router>
            <div>
                <SideBar routes={SidebarData} />
            </div>
            <Switch>
                <Route path="/overview" exact component={OverView} />
                <Route path="/rides"  component={Rides} />
            </Switch>

        </Router>

    )
}

export default Main
