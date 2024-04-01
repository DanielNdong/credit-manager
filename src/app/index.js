import { Workbook } from "exceljs";
import { Indicadores } from "./classes/Indicadores";

export const increaseCellValue = (cell, credit, wk) => {
    try {
        let cellCurrentValue = Number(wk.getCell(cell).value);
        const val = cellCurrentValue + Number(credit.getAmount());
        wk.getCell(cell).value = val;

        let agency = credit.getAgent();
        findCellToReplace(cell, agency , wk);

    } catch (error) {
        console.log('Error: - funcion increaseCellValue() - :' + error.message)
    }
}

export const findCellToReplace = (cell, agency, wk) => {
  
  try {
    const agentUpperCase = String(agency).toUpperCase();
   
    let col = filterPerAgency(agentUpperCase);
    const TOTAL_COLUMNS = {
      'B': 'C',
      'D': 'E',
      'F': 'G',
    };
    
    let colTotal = TOTAL_COLUMNS[col]
    let newCell = new String(cell).replace(col, colTotal)

    console.log('$$$ ' + newCell)
 
    //Obtenemos la columna del agente
    let cellWithTotalsValue = Number(wk.getCell(newCell).value);
    const totalValue = cellWithTotalsValue + 1;
    wk.getCell(newCell).value = totalValue;
  } catch (error) {
    console.log('Error: - function findCellToReplace -' + error.message)
  }
}


// -- FILTROS
export const filterPerAgency = (agent) => {
    const AGENCY_BY_DEFAULT = 'B'
    //Los numero 2, 3 y 4 idnican la posicion de las columas en la hoja Seguimiento Mensual
    const AGENCIES = {
      'OMEIRA': 'B',
      'ANGELES': 'D',
      'LEOPOLDO': 'F',
    }
    return AGENCIES[agent] || AGENCY_BY_DEFAULT; 
  }

export const filterPerTPerson = (tperson) => {
    const PERSON_BY_DEFAULT = '4'
    //Los numeros 3 y 4 indican el numero de fila en el que se entra este indicador
    const TYPE_PERSON = {
      'FISICA': '4',
      'JURIDICA': '5',
    }   
   return TYPE_PERSON[tperson] || PERSON_BY_DEFAULT;
}

export const filterPerTProduct = (tproduct) => {
    //Los numeros 6 y 7 indican el numero de fila en el que se entra este indicador
    const TYPE_PRODUCT = {
      'CREDITO NOMINA': '7',
      'SIKULU': '8',
    }   
   return TYPE_PRODUCT[tproduct];
}

export const filterPerSex = (sex) => {
    //Los numeros 9 y 10 indican el numero de fila en el que se entra este indicador
    const TYPE_SEX = {
      'HOMBRE': '10',
      'MUJER': '11',
    }   
   return TYPE_SEX[sex];
}

export const filterPerCompany = (company) => {
    //Los numeros indican el numero de fila en el que se entra este indicador
    const TYPE_COMPANY = {
      'GEOMS': '13',
      'ECOBANK': '14',
      'CCEIBANK': '15',
      'SOCIETE GENERAL': '16',
      'GETESA': '17',
      'MUNI': '18',
      'CONEXXIA': '19',
      'FENIX': '20',
      'LA PAZ': '21',
      'EGTC': '22',
      'MINISTERIO HACIENDA': '23',
      'GEPETROL': '24',
    }   
   return TYPE_COMPANY[company];
}

export const filterPerStatus = (status) => {
    //Los numero indican el numero de fila en el que se entra este indicador
    const TYPE_STATUS = {
      'SANO': '26',
      'DUDOSO COBRO': '27',
      'MORA': '28',
    }   
   return TYPE_STATUS[status];
}

//Obtener la celda de tipo de persona: Fisica o Juridica
export const getPersonCell = (tperson, agent) => {
    const newAgent = new String(agent).toUpperCase();
    const newPerson = new String(tperson).toUpperCase();

    const col = filterPerAgency(newAgent)
    const row = filterPerTPerson(newPerson)

    return (col+row)
}

//Obtener la celda del tipo de producto
export const getTProductCell = (tproduct, agent) => {
    const newAgent = new String(agent).toUpperCase();
    const newProduct = new String(tproduct).toUpperCase();

    const col = filterPerAgency(newAgent)
    const row = filterPerTProduct(newProduct)

    return (col+row)
}

//Obtener la celda del sexo del cliente que solicita el credito
export const getSexCell = (sex, agent) => {
    const newAgent = new String(agent).toUpperCase();
    const newSex = new String(sex).toUpperCase();

    const col = filterPerAgency(newAgent);
    const row = filterPerSex(newSex);

    return (col+row)
}

//Obtener la celda de la compañia
export const getCompanyCell = (company, agent) => {
    const newAgent = new String(agent).toUpperCase();
    const newCompany = new String(company).toUpperCase();

    const col = filterPerAgency(newAgent)
    const row = filterPerCompany(newCompany)

    return (col+row)
}

//Obtener la celda del estado del credito
export const getStatusCell = (status, agent) => {
    const newAgent = new String(agent).toUpperCase();
    const newStatus = new String(status).toUpperCase();

    const col = filterPerAgency(newAgent)
    const row = filterPerStatus(newStatus)

    return (col+row)
}

export const calculateStateOfCredit = (concetionDate) => {
    const date = new Date();
    //code
    //SANOS, DUDOSO COBRO, MORA...
}
