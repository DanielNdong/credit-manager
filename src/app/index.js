import XlsxPopulate from "xlsx-populate";

  
     async function main() {
        const workbook = await XlsxPopulate.fromBlankAsync();
        workbook.sheet(0).cell('A1').value('AGENTE');
        workbook.sheet(0).cell('B1').value('NOMBRE CLIENTE');
        workbook.sheet(0).cell('C1').value('SEXO');
        workbook.sheet(0).cell('D1').value('TIPO PERSONA');
        workbook.sheet(0).cell('E1').value('CODIGO CLIENTE');
        workbook.sheet(0).cell('F1').value('EMPRESA CLIENTE');
        workbook.sheet(0).cell('G1').value('MONTO');
        workbook.sheet(0).cell('H1').value('FECHA CONCESION');
        workbook.sheet(0).cell('I1').value('PERIODO');
        workbook.sheet(0).cell('J1').value('TIPO DE PRODUCTO');
        workbook.sheet(0).cell('K1').value('SITUACION');

        workbook.sheet(0).cell('A2').value('OMEIRA');
        workbook.sheet(0).cell('B2').value('GABRIEL BAKALE BELOPE');
        workbook.sheet(0).cell('C2').value('HOMBRE');
        workbook.sheet(0).cell('D2').value('FISICA');
        workbook.sheet(0).cell('E2').value('430021');
        workbook.sheet(0).cell('F2').value('SANTY');
        workbook.sheet(0).cell('G2').value('500000');
        workbook.sheet(0).cell('H2').value('28/03/2024');
        workbook.sheet(0).cell('I2').value('6');
        workbook.sheet(0).cell('J2').value('Credito nomina');
        workbook.sheet(0).cell('K2').value('Sano');

        workbook.sheet(0).cell('A3').value('LISANDRA');
        workbook.sheet(0).cell('B3').value('JUAN TOMAS OWONO');
        workbook.sheet(0).cell('C3').value('HOMBRE');
        workbook.sheet(0).cell('D3').value('FISICA');
        workbook.sheet(0).cell('E3').value('1005052');
        workbook.sheet(0).cell('F3').value('EGTC');
        workbook.sheet(0).cell('G3').value('200000');
        workbook.sheet(0).cell('H3').value('28/03/2024');
        workbook.sheet(0).cell('I3').value('6');
        workbook.sheet(0).cell('J3').value('Credito nomina');
        workbook.sheet(0).cell('K3').value('Sano');        

        workbook.sheet(0).cell('A4').value('ANGELES');
        workbook.sheet(0).cell('B4').value('SUSANA AVOMO MICHÁ');
        workbook.sheet(0).cell('C4').value('MUJER');
        workbook.sheet(0).cell('D4').value('FISICA');
        workbook.sheet(0).cell('E4').value('1005053');
        workbook.sheet(0).cell('F4').value('GEOMS');
        workbook.sheet(0).cell('G4').value('30000000');
        workbook.sheet(0).cell('H4').value('28/03/2024');
        workbook.sheet(0).cell('I4').value('6');
        workbook.sheet(0).cell('J4').value('Credito nomina');
        workbook.sheet(0).cell('K4').value('Sano');
        
        workbook.addSheet('Hoja Añadida');
        workbook.sheet(1).cell('A1').value('NAME')
        workbook.sheet(1).cell('A2').value('Prueba test')
        return workbook.toFileAsync("./credito.xlsx")
    }


    async function read() {
        const workbook = await XlsxPopulate.fromFileAsync("./credito.xlsx");
        const valor = workbook.sheet('Sheet1').cell('E2').value();//Leemos una celda
        
        const range = workbook.sheet('Sheet1').usedRange().value();//Leemos todos los datos
        
        const rangeIndividual = workbook.sheet('Sheet1').range('A1:D3').value();//Leemos todos los datos

        console.log(rangeIndividual)
    }

    async function update() {
        const workbook = await XlsxPopulate.fromFileAsync("./credito.xlsx")
        workbook.addSheet('Hoja añadida')
        workbook.deleteSheet(1)
        workbook.sheet('Sheet1').cell('A4').value('DANIEL')

        return workbook.toFileAsync("./credito.xlsx")
    }


    update()