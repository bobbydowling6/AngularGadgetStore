import { Component } from '@angular/core';
import { GadgetModel } from '../gadgetmodel';

import { cartmodel } from '../cartmodel';
import { cartitemmodel } from '../cartitemmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    cart: cartmodel = {
        totalprice: 0,
        totalquantity: 0,
        items: []
    };

    gadgets: GadgetModel[] = [{
        id: 1,
        name: 'BiSki',
        price: 500,
        description: 'The Biski is truly unique; as a single seat (or single plus pillion), twin jet, HSA Motorcycle, it is a world’s first in many ways. At just 2.3m long and under 1m wide, it is the smallest of all Gibbs High speed amphibious platforms, and very probably the most technically advanced. It represents true freedom for the individual; serious fun.',
        fullImagePath: './assets/gibbs-biski-motorcycle.jpg',
         inventory: 10,
         colors: ['red', 'blue', 'orange'],
        reviews: [ {
            id: 1,
            createddate: 'Tuesday',
            author: 'joe@codingtemple.com',
            rating: 5,
            body: 'I love this product!'
        },
        {
            id: 1,
            createddate: 'Tuesday',
            author: 'bob@codingtemple.com',
            rating: 5,
            body: 'Its Awesome!!'
        }]
    }, {
        id: 2,
        name: 'Google Glass',
        price: 2000,
        description: 'Google Glass is an optical head-mounted display designed in the shape of a pair of eyeglasses. It was developed by X with the mission of producing a ubiquitous computer. Google Glass displayed information in a smartphone-like hands-free format.',
        fullImagePath: './assets/google-glass-shades.jpg',
        inventory: 5,
        colors: ['green', 'yellow'],
        reviews: []
    },
     {
        id: 3,
        name: 'Third Thumb Attachment',
        price: 500,
        description: 'The Third Thumb Attachment gives you a new functional thumb to use in a variety of ways. The movement of the thumb is ensured by two motors hiding inside of it. But the real culprits that run the show are your toes. Your toes can put pressure onto two sensors that hide in your shoes. The sensors, in return, send the signal back to the thumb via Bluetooth and “tell” it what it’s supposed to do.',
        fullImagePath: './assets/third-thumb-attachment.jpg',
        inventory: 0,
        colors: ['N/A'],
         reviews: []
     },
    {
        id: 4,
        name: 'Massaging Robot',
        price: 500,
        description: 'A robot that massages your back for you!',
        fullImagePath: './assets/massaging-robot.jpg',
        inventory: 5,
        colors: ['red', 'blue'],
        reviews: []
    },
     {
        id: 5,
        name: 'Portable Language Translation Device',
        price: 500,
        description: 'This little gadget will translate the words you speak in as little as 0.2 seconds and say them right back at you in another language. More specifically, it translates English into Japanese, Chinese, and Spanish.',
        fullImagePath: './assets/portable-language-translator.jpg',
        inventory: 3,
        colors: ['purple'],
         reviews: []
     },
    {
        id: 6,
        name: 'Slidenjoy Portable Dual Triple Monitor',
        price: 500,
        description: 'You might have thought that getting yourself a dual or triple monitor for a desktop or laptop would keep you tied to one place. That’s not the case anymore. The use of this portable monitor is easy. As in “click, connect, enjoy” easy. Not only can you attach it to your display like a magnet, the additional slide-out monitors can be rotated to allow you a 360º sharing experience.',
        fullImagePath: './assets/slidenjoy-triple-monitor.jpg',
        inventory: 3,
        colors: ['black', 'white'],
        reviews: []
    }];
}
