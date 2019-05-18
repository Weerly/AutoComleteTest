import {Component, ElementRef} from '@angular/core';
import {APIMatchingService} from "./service/apimatching.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TestAngularLaravel';
    searchText: string;
    index: number;
    isActive: boolean = false;
    collection: HTMLCollection;
    names: Array<string>;
    constructor(private apiMatchingService: APIMatchingService) {
        apiMatchingService.setAppScope(this)
    }
    overMouseFunc (event) {
        let prevElement: HTMLElement = <HTMLElement> this.collection[this.index];
        this.unHighlightLevel(prevElement);
        this.index = event.target.firstChild.id;
        this.highlightLevel(event.target);
    }
    checkArrawOperations (event) {
        let key = event.keyCode;
        if (key === 38) {
            this.goUp();
            return false;
        }
        else if( key === 40 ) {
            this.goDown();
            return false;
        } else if (key == 13) {
            event.target.value = this.names[this.index];
            this.apiMatchingService.runCloseList();
        }
    }
    setNames(names: Array<string>) {
        this.names = names;
    }

    setAutocompleteList(element: HTMLElement) {
        if (element.nextSibling != undefined) {
            let node: HTMLElement = <HTMLElement> element.parentElement;
            this.collection = node.children;
            if (this.collection.length > 0) {
                this.index = 0;
                this.isActive = true;
                let element: HTMLElement = <HTMLElement> this.collection[0];
                this.highlightLevel(element);
            } else {
                this.isActive = false;
            }
        }
    }

    highlightLevel (element: HTMLElement): void {
        element.style.backgroundColor = "blue";
        element.style.color = "white";
        element.style.borderColor = "black";
    }
    unHighlightLevel (element: HTMLElement): void {
        element.style.backgroundColor = "white";
        element.style.color = "black";
    }
    goUp() {
        if (this.isActive) {
            if (!this.isTop()) {
                let i = this.index;
                let prevElement: HTMLElement = <HTMLElement> this.collection[i];
                this.unHighlightLevel(prevElement);
                i = --this.index;
                let nextElement: HTMLElement = <HTMLElement> this.collection[i];
                this.highlightLevel(nextElement);
            }
        }
    }
    isTop(): boolean {
        return (this.index === 0);
    }
    isBottom(): boolean {
        return (this.index === (this.collection.length - 1));
    }
    goDown() {
        if (this.isActive) {
            if (!this.isBottom()) {
                let i = this.index;
                let prevElement: HTMLElement = <HTMLElement> this.collection[i];
                this.unHighlightLevel(prevElement);
                i = ++this.index;
                let nextElement: HTMLElement = <HTMLElement> this.collection[i];
                this.highlightLevel(nextElement);
            }
        }
    }
}
