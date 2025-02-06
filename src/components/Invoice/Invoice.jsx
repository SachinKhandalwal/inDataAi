import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './Invoice.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Invoice = () => {
  const location = useLocation();
  const cart = location.state?.cart || [];
  const [downloadComplete, setDownloadComplete] = useState(false);

  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 90, 10);
    const tableColumn = ["Product Name", "Price", "Quantity", "Total"];
    const tableRows = cart.map(item => [
      item.name, 
      `$${item.price}`, 
      item.quantity, 
      `$${item.price * item.quantity}`
    ]);
    doc.autoTable({ head: [tableColumn], body: tableRows });
    doc.text(`Total: $${calculateTotal()}`, 14, doc.lastAutoTable.finalY + 10);
    doc.save("invoice.pdf");
    
    setDownloadComplete(true); // Show the "Download Complete" message after PDF download
    setTimeout(() => setDownloadComplete(false), 3000); // Hide the message after 3 seconds
  };

  return (
    <div className="invoice-container">
    <Navbar/>
      <h2>Invoice</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      <button className="download-btn" onClick={handleDownloadPDF}>Download PDF</button>
      {downloadComplete && <div className="download-complete">Download Complete</div>}
      <Footer />
    </div>
  );
};

export default Invoice;
