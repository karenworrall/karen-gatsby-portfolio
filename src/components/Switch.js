import React from 'react';
import { motion } from 'framer-motion'

function Switch({ isOn, handleSwitch })
{

  const toggleSwitch = () =>
  {
    handleSwitch(!isOn)
  }

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  }

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch} role="button" tabIndex={0} onKeyDown={toggleSwitch}>
      <motion.div className="switch-handle" layout transition={spring} />
    </div>
  );
}

export default Switch;