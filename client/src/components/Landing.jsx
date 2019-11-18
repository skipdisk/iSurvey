import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    }
}));

const Landing = () => {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <h1>
                iSurvey!
            </h1>
            Collect Feedback from User
        </div>
    )
}

export default Landing
