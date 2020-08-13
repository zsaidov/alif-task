import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
    @Output() valueChange = new EventEmitter<any>();
    currentTime: string;

    private intervalSub: Subscription;
    private lastSecond = 0;

    constructor() {
        this.startInterval();
    }


    ngOnDestroy(): void {
        this.stopInterval();
    }

    /**
     * start interval
     */
    startInterval(): void {
        this.stopInterval();
        this.intervalSub = interval(0)
            .subscribe(() => {
                const date = new Date();
                const sec = date.getSeconds();
                this.lastSecond = this.lastSecond === 0 ? sec : this.lastSecond;
                const min = String(date.getMinutes()).padStart(2, '0');
                const hour = String(date.getHours()).padStart(2, '0');
                this.currentTime = hour + ':' + min + ':' + String(sec).padStart(2, '0');
                const diff = (this.lastSecond > sec ? sec + 60 : sec) - this.lastSecond;
                if (diff === 4) {
                    this.lastSecond = sec;
                    this.valueChange.emit('changeBackground');
                }
            });
    }

    /**
     * stop interval
     */
    stopInterval(): void {
        if (this.intervalSub && !this.intervalSub.closed) {
            this.intervalSub.unsubscribe();
        }
    }
}
