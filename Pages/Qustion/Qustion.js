import { useState } from "react"
import QustionCom from "../../Componants/Qustion/QustionCom"
import axios from 'axios';
import html2canvas from 'html2canvas';
import { PDFDocument } from 'pdf-lib'
import Report1 from "../../Componants/Report/JS/Report1";
import Report2 from "../../Componants/Report/JS/Report2";
import Report3 from "../../Componants/Report/JS/Report3";
import Report4 from "../../Componants/Report/JS/Report4";
import Report5 from "../../Componants/Report/JS/Report5";
import "../../Componants/Report/CSS/GlopalReport.css"
import "../../Componants/Report/CSS/Report1.css"
import "../../Componants/Report/CSS/Report2.css"
import "../../Componants/Report/CSS/Report3.css"
import "../../Componants/Report/CSS/Report4.css"
import "../../Componants/Report/CSS/Report5.css"
function Qustion () {
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
        console.log('Merged PDF:', mergedPdfBytes);
    
        // Assuming you want to save the merged PDF
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
    
        // Update the state or perform any other actions if needed
        setPdfs(generatedPdfs);
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
    
    
        const sendDataToDatabase = (pdfData) => {
          // Make a POST request to your backend server
        axios.post('https://reqres.in/api/users?page=2', { pdfData })
        .then((response) => {
              // Handle the response if needed
            console.log(response);
        })
        .catch((error) => {
              // Handle errors
        });
    };
    
    let HandlingFun = () => {
        let PDF = generateAndMergePDF()
        sendDataToDatabase(PDF)
    }
    
    return (
        <>
            <QustionCom />
            <div>
                <button onClick={HandlingFun}>Generate and Merge PDFs</button>
                <div  className="PDF PostionForReportCom" >
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
        </>
    )
}

export default Qustion