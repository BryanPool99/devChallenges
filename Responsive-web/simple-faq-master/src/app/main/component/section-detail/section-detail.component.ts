import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-section-detail',
  templateUrl: './section-detail.component.html',
  styleUrls: ['./section-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SectionDetailComponent {
  @Input() title: string = '';           
  @Input() description: string = '';
  @Input() finalDescription: string = ''; 
  @Input() isOrdered: boolean = false;
  @Input() listItems: { text: string, highlight: string }[] = [];
  @Input() highlightFinalDescription: string = '';
  
  getHighlightedText(text: string, highlight: string): string {
    if (!highlight) return text; 
    const regex = new RegExp(`(${highlight})`, 'gi');
    return text.replace(regex, '<b class="highlight">$1</b>');
  }
}
