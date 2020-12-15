import React from 'react';

import classes from './loader.module.css'

const loader = () => {
    return <div className={classes.lds_dual_ring}></div>
}

export default loader;