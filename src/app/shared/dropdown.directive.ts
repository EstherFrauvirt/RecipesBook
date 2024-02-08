import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective {
    @HostBinding('class.show') isShow:boolean= false;
    constructor() { }
    @HostListener('click') toggleShow() {
        this.isShow = !this.isShow;
    }




}