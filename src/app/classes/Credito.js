export class Credito {
    _agent = '';
    _client = '';
    _sex = '';
    _tperson = '';
    _codclient = '';
    _company = '';
    _amount = '';
    _date = '';
    _period = '';
    _tproduct = '';
    _status = '';
    _rowRef = '';
    _listCredits = [];


    constructor(Credit) {
        const {agent, clientName, sex, tperson, cliCode, cliCompany, amount, date, period, tproduct, state} = Credit
        this._agent = new String(agent).trim();
        this._client = new String(clientName).trim();
        this._sex = sex;
        this._tperson = tperson;
        this._codclient = new String(cliCode).trim();
        this._company = new String(cliCompany).trim();
        this._amount = amount;
        this._date = date;
        this._period = period;
        this._tproduct = tproduct;
        this._status = state;
        //Guardamos el credito en lista de creditos
        this._listCredits.push(Credit)      
    }

    getAgent() {
        return this._agent
    }
    getClient() {
        return this._client
    }
    getSex() {
        return this._sex
    }
    getTPerson() {
        return this._tperson;
    }
    getCodClient() {
        return this._codclient;
    }
    getCompany() {
        return this._company;
    }
    getAmount() {
        return this._amount;
    }
    getDate() {
        return this._date;
    }
    getPeriod() {
        return this._period;
    }
    getTProduct() {
        return this._tproduct;
    }
    getStatus() {
        return this._status;
    }
    getListCredits() {
        return this._listCredits;
    }

    setRowRef(ref) {
        this._rowRef = ref;
    }
    getRowRef() {
        return this._rowRef;
    }
}