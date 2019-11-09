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
class CreateCompany extends Component {
    // constructor(props) {
    //     super(props);
    // }

    @observable name = "";
    @observable address = "";
    @observable city = "";
    @observable country = "";
    @observable mail = "";
    @observable phone = "";
    @observable isCreated = false;

    handleName = (e) => {
        this.name = e.target.value;
    }

    handleAddress = (e) => {
      this.address = e.target.value;
    }

    handleCity = (e) => {
      this.city = e.target.value;
    }

    handleCountry = (e) => {
      this.country = e.target.value;
    }

    handleMail = (e) => {
        this.mail = e.target.value;
    }

    handlePhone = (e) => {
      this.phone = e.target.value;
    }

      submit = (event) => {
        event.preventDefault();
        const company = {
          id: "1222",
          name: this.name,
          address: this.address,
          city: this.city,
          country: this.country,
          mail: this.mail,
          phone: this.phone
        }
          this.props.companyStore.createCompany(company);
          this.isCreated = !this.isCreated
      };
    
    /*
      To ensure types etc. Regex could be added to textFields
    */
    render() {
    const { classes } = this.props;
    const { isFetching } = this.props.companyStore;
    const { error } = this.props.companyStore;
        return(<div>
        {!this.isCreated &&
        <form className={classes.container} onSubmit={this.submit.bind(this)} autoComplete="off">
        <h1>Create company</h1>
        <TextField
        id="standard-required"
        required
        label="Name"
        className={classes.textField}
        onChange={this.handleName}
        margin="normal"
        variant="filled"/>

        <TextField
        id="standard-required"
        required
        label="Address"
        className={classes.textField}
        onChange={this.handleAddress}
        margin="normal"
        variant="filled"/>

        <TextField
        id="standard-required"
        required
        label="City"
        className={classes.textField}
        onChange={this.handleCity}
        margin="normal"
        variant="filled"/>
        
        <TextField
        id="standard-required"
        required
        label="Country"
        className={classes.textField}
        onChange={this.handleCountry}
        margin="normal"
        variant="filled"/>

        <TextField
        id="filled-name"
        label="Mail"
        className={classes.textField}
        onChange={this.handleMail}
        margin="normal"
        variant="filled"/>

        <TextField
        id="filled-name"
        label="Phone"
        className={classes.textField}
        onChange={this.handlePhone}
        margin="normal"
        variant="filled"/>

      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Create company
      </Button>
    </form>}
    <div className={classes.container}>
    {(this.isCreated && !isFetching && error == null) && <h2>Company has been created</h2>}
    {(this.isCreated && isFetching) && <h2>Creating company</h2>}
    {(this.isCreated && !isFetching && error != null) && <h2>There was an error adding the company!</h2>}
    </div>
    </div>)
    }
}

export default withStyles(useStyles) (CreateCompany);
