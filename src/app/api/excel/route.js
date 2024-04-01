import { Workbook } from "exceljs";
import { NextResponse } from "next/server";
import { Credito } from "@/app/classes/Credito";
import { increaseCellValue, getPersonCell, getCompanyCell, getSexCell, getStatusCell, getTProductCell } from "@/app";

const createExcel = async() => {
  const workbook = new Workbook();

  try {
    const worksheet1 = workbook.addWorksheet("Seguimiento Diario");
    const worksheet2 = workbook.addWorksheet("Seguimiento Mensual");

    worksheet1.columns = [
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
      fgColor: {
        argb: '808080', // Color gris
      },
    },
  };

  worksheet1.columns.forEach((header) => {
    header.style = headerStyle;
  })
   
    let currentLastRow = worksheet1.lastRow.number;
    let newLastRow = worksheet1.insertRow(currentLastRow + 1);
    newLastRow.getCell(`F`).value = 'TOTAL';
    newLastRow.getCell('G').value = 0;

    worksheet2.columns = [
      { header: " ", key: "empty" },
      { header: "MALABO 2 SEDE", key: "malaboMain", width: 20 },
      { header: " ", key: "ncSede", width: 8 },
      { header: "AGENCIA ALCAIDE", key: "alcaideAgency", width: 20 },
      { header: " ", key: "ncAlc", width: 8 },
      { header: "AGENCIA BATA", key: "bataAgency", width: 20 },
      { header: " ", key: "ncBata", width: 8 },
      { header: "TOTALS", key: "totals", width: 20 },
      { header: " ", key: "nctotals", width: 8 },
    ];
    
    const row1 = [
      "INDICADOR",
      "MONTO",
      "Tc",
      "MONTO",
      "Tc",
      "MONTO",
      "Tc",
      "MONTO",
      "Tc",
    ]
    worksheet2.addRow(row1)

    // Combinamos celdas y damos estilos
    worksheet2.mergeCells('B1:C1');
    worksheet2.mergeCells('D1:E1');
    worksheet2.mergeCells('F1:G1');
    worksheet2.mergeCells('H1:I1');
    worksheet2.getColumn('B').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('C').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('D').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('E').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('F').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('G').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('H').alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet2.getColumn('I').alignment = { vertical: 'middle', horizontal: 'center' };

   const rows2 = [
    [ 'Tipo Persona', 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Físicas',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Jurídicas',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Tipo Producto', 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Crédito Nómina',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Sikulu',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Sexo', 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Hombre',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Mujer',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Empresa/Entidad',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'GEOMS',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'ECOBANK',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'CCEIBANK',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'SOCIETE GENERAL',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'GETESA',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'MUNI',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'CONEXXIA',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'FENIX',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'LA PAZ',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'EGTC',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'MINISTERIO HACIENDA',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'GEPETROL',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Situacion',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Sano',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Dudoso cobro',0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'Mora',0, 0, 0, 0, 0, 0, 0, 0 ],
   ];
   const newRows = worksheet2.addRows(rows2);


  await workbook.xlsx.writeFile('./public/files/seguimiento-creditos.xlsx')
  } catch (error) {
    console.log(error.message)
  }
   //Tipos de errores captados
    // - El nombre de hoja ya existe
};

export async function POST( request, { params } ) {
  const data = await request.json()
  try {
    const workbook = new Workbook();
    await workbook.xlsx.readFile('./public/files/seguimiento-creditos.xlsx')
    const worksheet = workbook.getWorksheet('Seguimiento Diario')
    
    //Obtenemos la que queremos que sea la ultima fila
    const lastRows = worksheet.lastRow;
    worksheet.spliceRows(lastRows.number, 1)
    
    //Convertimos el objeto en array y extraemos los 'valores'
    const objtProps = Object.values(data)
    //Creamos la fila esparciendo los valores del array 
    const row = worksheet.addRow([...objtProps]);
    //Le damos estilos a la fila
    row.font = {
      name: "Arial",
      size: 11,
    };
    
    //Seleccionamos la nueva última fila
    let currentLastRow = worksheet.lastRow;
    
    //Cambiamos a Numero, el valor de la nueva celda de amount
    let cellAmountValue = currentLastRow.getCell('G').value;
    currentLastRow.getCell('G').value = {formula: `=VALUE(${cellAmountValue})`}

    //Definimos la fila y celda que contiene los totales
    let newLastRow = worksheet.insertRow(currentLastRow.number + 1);
    newLastRow.getCell(`F`).value = 'TOTAL';
    newLastRow.getCell('G').value = {formula: `=SUM(G2:G${currentLastRow.number <= 3 ? '2': currentLastRow.number})`}

    const worksheet2 = workbook.getWorksheet('Seguimiento Mensual');//AQUI HE ULTIMADO

    //Creamos un objeto Credito
    const credit  = new Credito(data);
    //Obtenemos la celda en la que se ingresar el TIPO DE PERSONA
    const cell = getPersonCell(credit.getTPerson(), credit.getAgent())
     increaseCellValue(cell, credit, worksheet2)
    //TIPO DE PERSONA -- SUMAMOS LAS CELDAS PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('B3').value = { formula: `=SUM(B4+B5)` }
    worksheet2.getCell('D3').value = { formula: `=SUM(D4+D5)` }
    worksheet2.getCell('F3').value = { formula: `=SUM(F4+F5)` }
    worksheet2.getCell('H3').value = { formula: `=SUM(H4+H5)` }
    //SUMAMOS TODAS LAS CELDAS DE LA FILA DE TIPO FISICAS Y LAS CELDAS DE LA FILA DE TIPO JURIDICA
    worksheet2.getCell('H4').value = { formula: `=SUM(B4+D4+F4)` } // Fisicas
    worksheet2.getCell('H5').value = { formula: `=SUM(B5+D5+F5)` } // Juridicas
    
    //Obtenemos la celda en la que se ingresar el TIPO DE PRODUCTO
    const cellTPr = getTProductCell(credit.getTProduct(), credit.getAgent())
     increaseCellValue(cellTPr, credit, worksheet2)
    console.log('Este es el objeto ' + credit.getAgent());
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('B6').value = { formula: `=SUM(B7+B8)` }
    worksheet2.getCell('D6').value = { formula: `=SUM(D7+D8)` }
    worksheet2.getCell('F6').value = { formula: `=SUM(F7+F8)` }
    worksheet2.getCell('H6').value = { formula: `=SUM(H7+H8)` }
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('H7').value = { formula: `=SUM(B7+D7+F7)` } // Credito Nómina
    worksheet2.getCell('H8').value = { formula: `=SUM(B8+D8+F8)` } // Sikulu

    //Obtenemos la celda en la que se ingresar el SEXO
    const cellSex = getSexCell(credit.getSex(), credit.getAgent())
     increaseCellValue(cellSex, credit, worksheet2)
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('B9').value = { formula: `=SUM(B10+B11)` }
    worksheet2.getCell('D9').value = { formula: `=SUM(D10+D11)` }
    worksheet2.getCell('F9').value = { formula: `=SUM(F10+F11)` }
    worksheet2.getCell('H9').value = { formula: `=SUM(H10+H11)` }
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('H10').value = { formula: `=SUM(B10+D10+F10)` } // HOMBRE
    worksheet2.getCell('H11').value = { formula: `=SUM(B11+D11+F11)` } // MUJER

    //Obtenemos la celda en la que se ingresar el EMPRESA/ENTIDAD
    const cellCompany = getCompanyCell(credit.getCompany(), credit.getAgent())
     increaseCellValue(cellCompany, credit, worksheet2)
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('B12').value = { formula: `=SUM(B13+B14+B15+B16+B17+B18+B19+B20+B21+B22+B23+B24)` }
    worksheet2.getCell('D12').value = { formula: `=SUM(D13+D14+D15+D16+D17+D18+D19+D20+D21+D22+D23+D24)` }
    worksheet2.getCell('F12').value = { formula: `=SUM(F13+F14+F15+F16+F17+F18+F19+F20+F21+F22+F23+F24)` }
    worksheet2.getCell('H12').value = { formula: `=SUM(H13+H14+H15+H16+H17+H18+H19+H20+H21+H22+H23+H24)` }
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('H13').value = { formula: `=SUM(B13+D13+F13)` } // GEOMS
    worksheet2.getCell('H14').value = { formula: `=SUM(B14+D14+F14)` } // ECOBANK
    worksheet2.getCell('H15').value = { formula: `=SUM(B15+D15+F15)` } // CCEIBANK
    worksheet2.getCell('H16').value = { formula: `=SUM(B16+D16+F16)` } // SOCIETE GEN.
    worksheet2.getCell('H17').value = { formula: `=SUM(B17+D17+F17)` } // GETESA
    worksheet2.getCell('H18').value = { formula: `=SUM(B18+D18+F18)` } // MUNI
    worksheet2.getCell('H19').value = { formula: `=SUM(B19+D19+F19)` } // CONEXXIA
    worksheet2.getCell('H20').value = { formula: `=SUM(B20+D20+F20)` } // FENIX
    worksheet2.getCell('H21').value = { formula: `=SUM(B21+D21+F21)` } // LA PAZ
    worksheet2.getCell('H22').value = { formula: `=SUM(B22+D22+F22)` } // EGTC
    worksheet2.getCell('H23').value = { formula: `=SUM(B23+D23+F23)` } // M. HACIENDA
    worksheet2.getCell('H24').value = { formula: `=SUM(B24+D24+F24)` } // GEPETROL

    //Obtenemos la celda en la que se ingresar la SITUACION/ESTADO
    const cellStatus = getStatusCell(credit.getStatus(), credit.getAgent())
     increaseCellValue(cellStatus, credit, worksheet2)
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('B25').value = { formula: `=SUM(B26+B27+B28)` }
    worksheet2.getCell('D25').value = { formula: `=SUM(D26+D27+D28)` }
    worksheet2.getCell('F25').value = { formula: `=SUM(F26+F27+F28)` }
    worksheet2.getCell('H25').value = { formula: `=SUM(H26+H27+H28)` }
    //TIPO DE PRODUCTO -- SUMAMOS LAS CELDAS DE  PARA CADA AGENCIA Y LA DE TOTALES
    worksheet2.getCell('H26').value = { formula: `=SUM(B26+D26+F26)` } // SANO
    worksheet2.getCell('H27').value = { formula: `=SUM(B27+D27+F27)` } // DUDOSO COBRO
    worksheet2.getCell('H28').value = { formula: `=SUM(B28+D28+F28)` } // MORA
  
    await workbook.xlsx.writeFile("./public/files/seguimiento-creditos.xlsx");

    return NextResponse.json({
     message: 'listo'
    })
  } catch (error) {
    console.log('Error: - endPoint POST - ' + error)  
    //Tipos de errores captados
    // - La url no existe
    // - El nombre de hoja ya existe
  }
}


export async function GET(request, { params }) {
createExcel()


  return NextResponse.json({ message: "excel editado" });
}
/*     const { searchParams } = new URL(request.url)*/
