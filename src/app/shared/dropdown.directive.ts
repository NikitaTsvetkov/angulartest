import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') open: Boolean = false
    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggle(eventData: Event) {
        this.open = !this.open
    }
}