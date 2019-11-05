import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from '@material-ui/styles';

const useStyles = theme => ({
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    companyField: {
        marginTop: 10
    },
  });

@inject("companyStore")
@observer
class CompanyDetails extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.companyStore.getCompany(this.props.match.params.id)
    }

    render() {
    const { classes } = this.props;
    const { company } = this.props.companyStore;
    const { isFetching } = this.props.companyStore
        return(<div className={classes.container}>{ !isFetching && <div>
            {company.map(company => (
            <div key={company.id}>
                <div><h1>{company.name}</h1>
                <div className={classes.companyField}><h2>Address: {company.address}</h2></div>
                <div className={classes.companyField}><h2>City: {company.city}</h2></div>
                <div className={classes.companyField}><h2>Country: {company.country}</h2></div>
                <div className={classes.companyField}><h2>Mail: {company.mail}</h2></div>
                <div className={classes.companyField}><h2>Phone: {company.phone}</h2></div></div>
            </div>))}
            </div>}
            { isFetching && <div className={classes.companyField}>Loading company...</div>}</div>)}}

export default withStyles(useStyles) (CompanyDetails);