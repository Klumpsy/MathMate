import React, { useState, useEffect } from 'react'

import "./mathAnimation.css"

//Framer Motion
import { motion } from "framer-motion";

//Images
import multiplyIcon from "../../images/multiplyIcon.png";
import plusIcon from "../../images/plusIcon.png";
import { ImPlus, ImCross } from "react-icons/im"

//Redux
import { useSelector, useDispatch } from "react-redux";
import { currentGameType } from "../../reducers/gameModeSlice";

const iconMotion = {
    x: {
        duration: 1.8,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
    },
    color: {
        duration: 0.01,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 3.6
    }
}

const MathAnimation = () => {
    const gameType = useSelector(currentGameType);

    return (
        <div>
            <motion.div
                className="motion-container"
                transition={iconMotion}
                animate={{
                    x: [`300px`, `-10px`],
                    color: ["#F5E64D", "#EF937B"]
                }} >
                {
                    gameType === "plus" ? <ImPlus size={30} /> : <ImCross size={30} />
                }
            </motion.div>
        </div>
    )
}

export default MathAnimation
