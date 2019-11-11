import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';
import { observable } from "mobx";
import Button from '@material-ui/core/Button';
import Loader from './Loader';


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
class EditCompany extends Component {
    constructor(props) {
        super(props);
    }

    @observable name = "";
    @observable address = "";
    @observable city = "";
    @observable country = "";
    @observable mail = " ";
    @observable phone = " ";
    @observable isEdited = false;

    componentDidMount() {
       this.props.companyStore.getCompany(this.props.match.params.id)
    }

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
        const companyOrigin = this.props.companyStore.company[0]
        const company = {
          id: this.props.match.params.id,
          name: (this.name !== "") ? this.name : companyOrigin.name,
          address: (this.address !== "") ? this.address : companyOrigin.address,
          city: (this.city !== "") ? this.city : companyOrigin.city,
          country: (this.country !== "") ? this.country : companyOrigin.country,
          mail: (this.mail === " ") ? companyOrigin.mail : this.mail,
          phone: (this.phone === " ") ? companyOrigin.phone : this.phone,
        }
          this.props.companyStore.updateCompany(company, this.props.match.params.id);
          this.isEdited = !this.isEdited
      };
    
    /*
      To ensure types etc. Regex could be added to textFields
    */
    render() {
    const { classes } = this.props;
    const { company } = this.props.companyStore;
    const { isFetching } = this.props.companyStore
    const { error } = this.props.companyStore;
        return(<div>
        { !isFetching && <div>
        {!this.isEdited &&
        <form className={classes.container} onSubmit={this.submit.bind(this)} autoComplete="off">
        <h1>Edit Company</h1>
        {company.map(company => (<div className={classes.container} key={company.id}>
        <TextField
        id="standard-required"
        required
        label="Name"
        defaultValue={company.name}
        className={classes.textField}
        onChange={this.handleName}
        margin="normal"
        variant="filled"/>

        <TextField
        id="standard-required"
        required
        label="Address"
        defaultValue={company.address}
        className={classes.textField}
        onChange={this.handleAddress}
        margin="normal"
        variant="filled"/>

        <TextField
        id="standard-required"
        required
        label="City"
        defaultValue={company.city}
        className={classes.textField}
        onChange={this.handleCity}
        margin="normal"
        variant="filled"/>
        
        <TextField
        id="standard-required"
        required
        label="Country"
        defaultValue={company.country}
        className={classes.textField}
        onChange={this.handleCountry}
        margin="normal"
        variant="filled"/>

        <TextField
        id="filled-name"
        label="Mail"
        defaultValue={company.mail}
        className={classes.textField}
        onChange={this.handleMail}
        margin="normal"
        variant="filled"/>

        <TextField
        id="filled-name"
        label="Phone"
        defaultValue={company.phone}
        className={classes.textField}
        onChange={this.handlePhone}
        margin="normal"
        variant="filled"/>

      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Edit company
      </Button>
      </div>))}
    </form>}
    <div className={classes.container}>
    {(this.isEdited && !isFetching && error == null) && <h2>Company has been edited</h2>}
    {(this.isEdited && !isFetching && error != null) && <h2>There was an error editing the company!</h2>}
    </div>
    </div>}
    <div className={classes.container} style={{ marginTop: 20 }}>
    {(isFetching && !this.isEdited) && <Loader />}
    {(this.isEdited && isFetching) && <Loader />}</div></div>)
    }
    

}

export default withStyles(useStyles) (EditCompany);
