import {Component, ViewChild} from '@angular/core';
import {HallComponent} from './hall/hall.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild(HallComponent, {static: false}) hallComp: HallComponent;

    /**
     * detect message from component
     */
    onValueChange(action: string): void {
        if (action === 'changeBackground') {
            this.hallComp.setBackground(randomColor());
        }
    }

}


/**
 * generate random color for  background
 */
function randomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
