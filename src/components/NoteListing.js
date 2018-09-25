import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    margin: theme.spacing.unit,
  },
});

class NoteListing extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Link to="/new">
          <IconButton className={classes.button} aria-label="New Note">
            <NoteAddIcon className={classes.icon} />
          </IconButton>
        </Link>
        <List component="nav">
          <Link to="/note1">
            <ListItem button>
              <ListItemText primary="Note 1" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button>
            <ListItemText primary="Note 2" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Note 3" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(NoteListing);
;
