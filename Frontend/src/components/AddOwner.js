import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { observable } from "mobx";
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    textField: {
      marginLeft: 1,
      marginRight: 1,
      width: 300
    },
    button: {
    margin: 1,
    marginTop: 10
  },
  });

@inject("companyStore")
@observer
class AddOwner extends Component {
    constructor(props) {
        super(props);
    }

    @observable name = "";
    @observable isAdded = false;

    handleName = (e) => {
        this.name = e.target.value;
    }

      submit = (event) => {
        event.preventDefault();
        const owner = {
          id: this.props.match.params.id,
          name: this.name,
        }
          this.props.companyStore.addOwner(owner);
          this.isAdded = !this.isAdded
      };
    
    render() {
    const { classes } = this.props;
        return(<div>
        {!this.isAdded &&
        <form className={classes.container} onSubmit={this.submit.bind(this)} autoComplete="off">
        <h1>Add benificial owner</h1>
        <TextField
        id="standard-required"
        required
        label="Name"
        className={classes.textField}
        onChange={this.handleName}
        margin="normal"
        variant="filled"/>

      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Add owner
      </Button>
    </form>}
    <div className={classes.container}>
    {this.isAdded && <h2>Owner has been added</h2>}
    </div>
    </div>)}
}

export default withStyles(useStyles) (AddOwner);