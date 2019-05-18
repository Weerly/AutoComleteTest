import {Injectable, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class APIMatchingService {
    scope: AppComponent;
    container: ViewContainerRef
    constructor(private http: HttpClient) {}

    setAppScope(scope: AppComponent) {
        this.scope = scope;
    }
    setMatchedArray(array: object) {
        let listNames = [];
        for(let name in array) listNames.push(array[name]);
        this.scope.setNames(listNames.slice(0, 10));
    }

    setContainer(container: ViewContainerRef) {
        this.container = container;
    }

    runCloseList() {
        if (this.container != undefined) {
            this.container.clear();
        }
    }

    setHTMLCollection(element: HTMLElement) {
        this.scope.setAutocompleteList(element);
    }

    sendSearchRequest(searchText: string) {
        const req = this.http.get('api/autocomplete/' + searchText);
        req.subscribe((result) =>{ this.setMatchedArray(result); });
    }
}
