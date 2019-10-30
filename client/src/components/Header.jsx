import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({auth, googleSignIn}) => {
  const classes = useStyles();

  const handleSignIn = () => {
    googleSignIn();
  }
  
  const renderContent = () => {
    switch(auth) {
      case null:
        return;
      case false:
        return <Button color="inherit"><a href="/auth/google">Login With Google</a></Button>;
      default:
        return (
          <div>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          </div>
        )
    }
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            iSurvey
          </Typography>
          {renderContent()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = ({auth}) => {
  return {auth};
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);