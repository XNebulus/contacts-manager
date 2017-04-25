import { Component, Output, EventEmitter } from '@angular/core';
import {Contact } from '../shared/contact';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Output() confirmed: EventEmitter<any> = new EventEmitter();
    private data: any;
    private name: string;

    public visible = false;
    private visibleAnimate = false;

    public show(data: any): void {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true);
        this.data = data;
        this.name = data.name;
        console.log(this.name);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    public confirm() :void {
       this.confirmed.emit(this.data);
    }
}
