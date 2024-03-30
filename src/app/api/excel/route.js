import { Workbook } from "exceljs";
import { NextResponse } from "next/server";

const createExcel = async() => {
  const workbook = new Workbook();

  const worksheet = workbook.addWorksheet("Hoja1");
  worksheet.columns = [
    { header: "AGENTE", key: "agent" },
    { header: "NOMBRE CLIENTE", key: "cli" },
    { header: "SEXO", key: "sex" },
    { header: "TIPO PERSONA", key: "tperson" },
    { header: "COD CLIENTE", key: "cod_cli" },
    { header: "EMPRESA CLIENTE", key: "comp_cli" },
    { header: "MONTO", key: "amount" },
    { header: "FECHA CONCESION", key: "date" },
    { header: "PERIODO", key: "period" },
    { header: "TIPO PRODUCTO", key: "tproduct" },
    { header: "SITUACION", key: "state" },
  ];

   // Estilo para los encabezados
   const headerStyle = {
    fill: {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {
        argb: '808080', // Color gris
      },
    },
  };

  worksheet.columns.forEach((header) => {
    header.style = headerStyle;
  })

  await workbook.xlsx.writeFile('./public/files/seguimiento-creditos.xlsx')

};

export async function POST( request, { params } ) {
  const data = await request.json()
  try {
    const workbook = new Workbook();
    await workbook.xlsx.readFile('./public/files/seguimiento-creditos.xlsx')
    const worksheet = workbook.getWorksheet('Hoja1')
    console.log(worksheet)
    
    //Obtenemos la que queremos que sea la ultima fila
    const lastRow = worksheet.lastRow;
    worksheet.spliceRows(lastRow.number, 1)

    const {
      agent, 
      clientName, 
      sex, 
      tperson, 
      cliCode, 
      cliCompany, 
      amount, 
      date, 
      period, 
      tproduct, 
      state
    } = data
    
    const row = worksheet.addRow([
      agent, 
      clientName, 
      sex, 
      tperson, 
      cliCode, 
      cliCompany, 
      amount, 
      date, 
      period, 
      tproduct, 
      state
    ]);
    row.font = {
      name: "Arial",
      size: 12,
      bold: true,
    };
/* 
    worksheet.getCell("C2").dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"Hombre, Mujer"'],
    };
 */

    // Formatear las celdas como número
worksheet.getCell('G1').type.valueOf
worksheet.getCell('G2').type.valueOf
worksheet.getCell('G3').type.valueOf
worksheet.getCell('G4').type.valueOf
worksheet.getCell('G5').type.valueOf
worksheet.getCell('G6').type.valueOf
worksheet.getCell('G7').type.valueOf
worksheet.getCell('G8').type.valueOf
worksheet.getCell('G9').type.valueOf
worksheet.getCell('G' + lastRow.number).type.valueOf
const lastInsertedRow = worksheet.insertRow(lastRow.number + 1);
    const lastCell = lastInsertedRow.getCell("G")
    lastCell.value = {formula: `SUM(G2:G${lastRow.number + 1})`}


    console.log(lastRow)

    await workbook.xlsx.writeFile("./public/files/seguimiento-creditos.xlsx");
    return NextResponse.json({
     message: 'listo'
    })
  } catch (error) {
    console.log('Error: ' + error)  
  }
}


export async function GET(request, { params }) {
 
  const workbook = new Workbook();
  const filePath = "./src/app/api/excel/mi-archivo2.xlsx";

  const createNewExcelFile = async () => {

    const row = worksheet.addRow(["One Piece", "Oda", "1999"]);

    row.font = {
      name: "Arial",
      size: 12,
      bold: true,
    };

    worksheet.getCell("A1").dataValidation = {
      type: "list",
      allowBlank: true,
      formulae: ['"One,Two,Three,Four"'],
    };

    await workbook.xlsx.writeFile("./public/files/animes2.xlsx");
  };

  const editCellExcelFile = async () => {
    /*Guardar el excel */
    try {
      const workbook = new Workbook();
      await workbook.xlsx.readFile("./public/files/animes2.xlsx");
      /* leo la hoja */
      const worksheet = workbook.getWorksheet("Hoja1");

      let cell = worksheet.getCell("C3");
      cell.value = "2018";
      worksheet.getRow(4).values;
      /*  const row = worksheet.addRow(['Kimetsu no Yaiba', 'Unknow', '2014']);
      row.font = {
        name: 'Arial',
        size: 12,
        bold: true,
      }; */
      await workbook.xlsx.writeFile("./public/files/animes2.xlsx");
    } catch (error) {
      console.log("Error: " + error);
    }
    /*     worksheet.insertRow(3, {id: 1, name: 'John Doe', dob: new Date(1970,1,1)}); */
    // Modificar el valor de una celda
    /* let cells =  worksheet.getCell("A1").value = 'Peliculas';
   console.log(worksheet) */

    // Agregar una nueva fila
    /*      worksheet.addRow(['Daniel Aquilino Ndong', 'Bibang Eyang', '24']);    
     worksheet.addRow(['Juan Andrés', 'Owono', '22']);   */
  };
  editCellExcelFile();

  return NextResponse.json({ message: "excel editado" });
}
/*     const { searchParams } = new URL(request.url)*/
