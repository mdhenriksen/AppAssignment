import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    marginLeft: 5,
  },
  });

@inject("companyStore")
@observer
class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.getCompanies = () => this.props.companyStore.getCompanies();
    }

    componentWillMount() {
        this.getCompanies();
    }

    render() {
    const { classes } = this.props;
    const { companies } = this.props.companyStore;
        return(<div>
        {!this.isCreated &&
        <form className={classes.container} autoComplete="off">
        <h1>List & update companies</h1>
        <div>
        {companies.map(company => (
            <div>
                <div><h3>{company.name}</h3>
                 <Button className={classes.button} variant="outlined" component={ Link } to={'/details/' + company.id}>See details</Button>
                 <Button className={classes.button} variant="outlined" component={ Link } to={'/edit/' + company.id}>Edit</Button>
                 <Button className={classes.button} variant="outlined" component={ Link } to={'/owner/' + company.id}>Add owner</Button></div><br />
            </div>
        ))}
        </div>
    </form>}
    <div className={classes.container}>
    {this.isCreated && <h2>Company has been updated</h2>}
    </div>
    </div>)}
}

export default withStyles(useStyles) (CompanyList);