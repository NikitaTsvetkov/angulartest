import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header'
})
export class HeaderComponent {
    @Output('tabSelected') tabSelectFired: EventEmitter<string> = new EventEmitter<string>()
    onSelect(tab: string){
      this.tabSelectFired.emit(tab);
    }
}