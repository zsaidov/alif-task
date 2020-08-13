import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'hall',
    templateUrl: './hall.component.html',
    styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {
    element: HTMLElement;

    constructor(elementRef: ElementRef) {
        this.element = elementRef.nativeElement;
    }

    setBackground(color: string): void {
        this.element.style.background = color;
    }

    ngOnInit() {
    }

}
