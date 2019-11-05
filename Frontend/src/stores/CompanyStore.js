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
            const response = await axios.post('http://0.0.0.0/create', company);
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
            await axios.put('http://localhost:5000/update/' + id, company);
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
            const response = await axios.get('http://localhost:5000/get/' + id);
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
            const response = await axios.get('http://localhost:5000/get');
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
            await axios.post('http://localhost:5000/owner', owner);
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
