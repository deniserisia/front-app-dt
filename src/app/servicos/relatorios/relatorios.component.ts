import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.css']
})
export class RelatoriosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPDF(): void {
    const content: Element = document.getElementById('pdf-content')!; // ID da div que contém o conteúdo para o PDF

    const options = {
      margin: 10,
      filename: 'relatorio.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    (html2pdf as any)().from(content).set(options).outputPdf();
  }
}
