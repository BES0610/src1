// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import { PDFDocument } from 'pdf-lib'
// import Report1 from './Report1';
// import "./ReportCom.css"
// import Report2 from './Report2';
// const GenerateAndMergePDFs = () => {
//   const [pdfs, setPdfs] = useState([]);

//   const generateAndMergePDF = async () => {
//     const htmlContents = Array.from(document.querySelectorAll('.pdf-container'));

//     const generatedPdfs = await Promise.all(
//       htmlContents.map(async (htmlContent, index) => {
//         const dataUrl = await generatePdfFromHtml(htmlContent);
//         return await convertDataUrlToPdf(dataUrl, index);
//       })
//     );

//     const mergedPdfBytes = await mergePdfs(generatedPdfs);

//     // Handle the merged PDF as needed (e.g., display or save)
//     console.log('Merged PDF:', mergedPdfBytes);

//     // Assuming you want to save the merged PDF
//     const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     window.open(url, '_blank');

//     // Update the state or perform any other actions if needed
//     setPdfs(generatedPdfs);
//   };

//   // The rest of your functions remain unchanged


//   const generatePdfFromHtml = async (htmlContent) => {
//     const canvas = await html2canvas(htmlContent);
//     return canvas.toDataURL('image/png');
//   };

//   const convertDataUrlToPdf = async (dataUrl, index) => {
//     const pdfDoc = await PDFDocument.create();
//     const image = await pdfDoc.embedPng(dataUrl);
//     const page = pdfDoc.addPage([image.width, image.height]);
//     const { width, height } = page.getSize();
//     page.drawImage(image, {
//       x: 0,
//       y: 0,
//       width,
//       height,
//     });
//     return pdfDoc.save();
//   };

//   const mergePdfs = async (pdfArray) => {
//     const mergedPdf = await PDFDocument.create();

//     for (const pdfBytes of pdfArray) {
//       const pdfDoc = await PDFDocument.load(pdfBytes);
//       const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
//       copiedPages.forEach((page) => mergedPdf.addPage(page));
//     }

//     return mergedPdf.save();
//   };


//   return (
//     <div>
//       <button onClick={generateAndMergePDF}>Generate and Merge PDFs</button>
//       <div  className="PDF" >
//         <div id="PDF" className='BackGroundImge' >
//       <div className="pdf-container">
//         <Report1 />
//       </div>

//       <div className="pdf-container">
//         <Report2 />
//       </div>

//       {/* Add more pdf-container divs as needed for additional PDFs */}
//     </div>
//     </div>
//     </div>

//   );
// };

// export default GenerateAndMergePDFs;
