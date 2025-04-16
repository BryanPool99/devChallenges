import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sections = [
    {
      title: 'How can I track my order?',
      description: 'You can track your order using the following steps',
      finalDescription: 'If you encounter any issues, please visit our Help Center.',
      highlightFinalDescription: "Help Center",
      isOrdered: true,
      listItems: [
        { text: 'Go to the Order Tracking page.', highlight: 'Tracking page' },
        { text: 'Enter your order number and email address.', highlight: '' },
        { text: 'Click on the Track Order button to view the current status of your shipment.', highlight: '' }
      ]
    },
    {
      title: 'What is your return policy?',
      description: 'We offer a 30-day return policy on most items. Here are some key points',
      finalDescription: 'For more detailed information, read our full Return Policy.',
      highlightFinalDescription: "Return Policy",
      isOrdered: false,
      listItems: [
        { text: 'Items must be in original condition: Unworn, unused, and unwashed.', 
          highlight: 'Items must be in original condition:' 
        },
        { text: 'Include original packaging and tags: All items should be returned with their original packaging and tags.', 
          highlight: 'Include original packaging and tags:' 
        },
        { text: 'Proof of purchase: A receipt or proof of purchase is required.', 
          highlight: 'Proof of purchase:' 
        } 
      ]
    }
  ];
}
