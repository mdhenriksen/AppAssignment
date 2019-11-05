import axios from "axios";
import { observable, action } from "mobx";

// Missing succes reponse to be show in GUI. Test first if this works with the DB though.

class CompanyStore {
    @observable error = null;
    @observable isFetching = false;
    @observable companies = [];
    @observable company = [];

    @action async createCompany(company) {
        this.isFetching = true;
        this.error = null;
        try {
            const response = await axios.post('https://bindapi.herokuapp.com/create', company);
            this.company = response.data;
            this.isFetching = false;
        } catch (error) {
            this.error = error;
            this.isFetching = false;
        }
    }

    @action async updateCompany(company, id) {
        this.isFetching = true;
        this.error = null;
        try {
            await axios.put('https://bindapi.herokuapp.com/update/' + id, company);
            this.isFetching = false;
        } catch (error) {
            this.error = error;
            this.isFetching = false;
        }
    }

    @action async getCompany(id) {
        this.isFetching = true;
        this.error = null;
        this.company = []
        try {
            const response = await axios.get('https://bindapi.herokuapp.com/get/' + id);
            this.company = response.data
            this.isFetching = false;
        } catch (error) {
            this.error = error;
            this.isFetching = false;
        }
    }
    
    @action async getCompanies() {
        this.isFetching = true;
        this.error = null;
        try {
            const response = await axios.get('https://bindapi.herokuapp.com/get');
            this.companies = response.data
            this.isFetching = false;
        } catch (error) {
            this.error = error;
            this.isFetching = false;
        }
    }
    
    @action async addOwner(owner) {
        this.isFetching = true;
        this.error = null;
        try {
            await axios.post('https://bindapi.herokuapp.com/owner', owner);
            this.isFetching = false;
        } catch (error) {
            this.error = error;
            this.isFetching = false;
            console.log("Error")
        }
    }
}

const companyStore = new CompanyStore();
export default companyStore;
