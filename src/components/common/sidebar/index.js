import React from 'react';
import { SidebarTopData, SidebarMore, SidebarBottomData } from '../../../data/sidebar';
import SidebarOption from './sidebar-option';
import "./sidebar.css"

function Sidebar() {
    const topOptions = SidebarTopData;
    const moreOptions = SidebarMore;
    const bottomOptions = SidebarBottomData;

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div>
                    {topOptions.map((option) => {
                        return <SidebarOption
                            option={option}
                            isActive={option.name === "Calls" ? true : false}
                        />;
                    })}
                </div>
                <div>
                    <SidebarOption option={moreOptions} />
                </div>
            </div>
            <div className="sidebar-bottom">
                {bottomOptions.map((option) => {
                    return <SidebarOption option={option} />;
                })}
            </div>
        </div>
    );
}

export default Sidebar;
