import { Workbook } from "exceljs";
import { NextResponse } from "next/server";

const createExcel = async() => {
  const workbook = new Workbook();

  const worksheet = workbook.addWorksheet("Seguiminiento de créditos");
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

export async function POST( request, {params} ) {
  const data =  request.json()
  const workbook = new Workbook();
  try {
    console.log(data)
    await workbook.xlsx.readFile('./public/files/seguimiento-creditos.xlsx')
    const worksheet = workbook.getWorksheet('Seguiminiento de créditos')

    const row = worksheet.addRow([...data]);
    row.font = {
      name: "Arial",
      size: 12,
      bold: true,
    };
    await workbook.xlsx.writeFile("./public/files/animes2.xlsx");

    return NextResponse.json({
      data,
      worksheet
    })
  } catch (error) {
    console.log('Error: ' + error)  
  }
}
export async function GET(request, { params }) {
  createExcel()
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
