import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class Note extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <TextField className={classes.textField}/>
      </div>
    );
  }
}

export default withStyles(styles)(Note);
;
