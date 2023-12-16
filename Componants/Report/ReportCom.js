import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib'
import Report1 from './JS/Report1';
import Report2 from './JS/Report2';
import Report3 from './JS/Report3';
import Report4 from './JS/Report4';
import Report5 from './JS/Report5';
import "./CSS/Report1.css"
import "./CSS/Report2.css"
import "./CSS/Report3.css"
import "./CSS/Report4.css"
import "./CSS/Report5.css"
import "./CSS/GlopalReport.css"
import { saveAs } from 'file-saver';
// import axios from 'axios';


const GenerateAndMergePDFs = () => {

    // Start Convert Page to PDFs And Marge them In One PDF And Send It To Server
    
    const [pdfs, setPdfs] = useState([]);
    
    const generateAndMergePDF = async () => {
        const htmlContents = Array.from(document.querySelectorAll('.pdf-container'));
        
        const generatedPdfs = await Promise.all(
            htmlContents.map(async (htmlContent, index) => {
                const dataUrl = await generatePdfFromHtml(htmlContent);
                return await convertDataUrlToPdf(dataUrl, index);
            })
            );
            
            const mergedPdfBytes = await mergePdfs(generatedPdfs);
            
            // Handle the merged PDF as needed (e.g., display or save)
    // console.log('Merged PDF:', mergedPdfBytes);

    const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
    saveAs(blob, 'merged.pdf');
    
    // Update the state or perform any other actions if needed
    setPdfs(generatedPdfs);
};

    //First Main Function To Send PDF To Server

    const sendPdfToServer = async (pdfBytes, dynamicId) => {
        try {
            // Create a FormData object to send the PDF as a file
            const formData = new FormData();
            const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
            formData.append('pdfFile', pdfBlob, `Twindix-Report-${dynamicId}.pdf`);
            
            // Make a POST request to your server endpoint
            const response = await fetch('https://reqres.in/api/users?page=2', {
                method: 'POST',
                body: formData,
            });
            
            // Handle the server response
            if (response.ok) {
                console.log('PDF successfully sent to the server with dynamic ID:', dynamicId);
                console.log(pdfBytes);
            } else {
                console.error('Failed to send PDF to the server');
            }
        } catch (error) {
            console.error('Error sending PDF to the server:', error);
        }
    };
    

  // The rest of your functions remain unchanged


    const generatePdfFromHtml = async (htmlContent) => {
        const canvas = await html2canvas(htmlContent);
        return canvas.toDataURL('image/png');
        };
    
    const convertDataUrlToPdf = async (dataUrl, index) => {
        const pdfDoc = await PDFDocument.create();
        const image = await pdfDoc.embedPng(dataUrl);
        const page = pdfDoc.addPage([image.width, image.height]);
        const { width, height } = page.getSize();
        page.drawImage(image, {
            x: 0,
            y: 0,
            width,
            height,
        });
        return pdfDoc.save();
    };
    
    const mergePdfs = async (pdfArray) => {
        const mergedPdf = await PDFDocument.create();
        
        for (const pdfBytes of pdfArray) {
            const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    
    return mergedPdf.save();
};


            //Function To Handeled All Function 
            let HandlingFun = () => {
                let dynamicId = new Date().getTime(); // You can use a more sophisticated method for generating dynamic IDs
                let PDF = generateAndMergePDF();
                sendPdfToServer(PDF, dynamicId);
            };
            
            // End Convert Page to PDFs And Marge them In One PDF And Send It To Server
            
            return (
    <div>
        <button onClick={HandlingFun}>Generate and Merge PDFs</button>
        <div  className="PDF" >
            <div id="PDF" className='BackGroundImge' >
                <div className="pdf-container">
                    <Report1 />
                </div>
                <div className="pdf-container">
                    <Report2 />
                </div>
                <div className="pdf-container">
                    <Report3 />
                </div>
                <div className="pdf-container">
                    <Report4 />
                </div>
                <div className="pdf-container">
                    <Report5 />
                </div>
            </div>
        </div>
    </div>

);
};

export default GenerateAndMergePDFs;