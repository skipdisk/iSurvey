import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  navButton: {
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
  brand: {
    textDecoration: 'none',
    color: 'white'
  }
}));

const Header = ({auth}) => {
  const classes = useStyles();


  
  const renderContent = () => {
    switch(auth) {
      case null:
        return;
      case false:
        return <Button><a className={classes.navButton} href="/auth/google">Login With Google</a></Button>
      default:
        return (
          <div>
            <Button><a className={classes.navButton} href="/api/logout">Logout</a></Button>
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
                <Link to={auth ? '/surveys' : '/'}className={classes.brand}>iSurvey</Link>
              </Typography>
            {renderContent()}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = ({auth}) => {
  return {
    auth: auth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);