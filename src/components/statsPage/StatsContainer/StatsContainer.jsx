import React from 'react'

import "./statscontainer.css";

//Icons
import { FaMedal } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

function StatsContainer({ title, styleClass, mapData }) {

    const priceChecker = (index) => {
        switch (index) {
            case 0: return <FaMedal size={20} style={{ color: "yellow" }} />
            case 1: return <FaMedal size={20} style={{ color: "#bcc4c4" }} />
            case 2: return <FaMedal size={20} style={{ color: "#d4a676" }} />
            default: return <BsFillPersonFill size={20} style={{ color: "black" }} />
        }
    }

    return (
        <div className={`high-score-container ${styleClass}`}>
            <h2>{title}</h2>
            <div className="high-score-data">
                {
                    mapData?.map((user, index) => (
                        <div key={user.id + index} className="high-score-item">
                            {priceChecker(index)}
                            <h3>{user.name}</h3>
                            <p>{user.score}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default StatsContainer
