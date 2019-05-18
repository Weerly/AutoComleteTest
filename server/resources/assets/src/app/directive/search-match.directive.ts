import {
    Directive,
    Input,
    TemplateRef,
    ViewContainerRef,
    OnChanges
} from '@angular/core';
import {APIMatchingService} from '../service/apimatching.service';

@Directive({
    selector: '[appSearchMatch]',
})
export class SearchMatchDirective implements OnChanges{
    @Input() appSearchMatchOf: Array<object>;
    constructor(private apiMatchingService: APIMatchingService,
                private container: ViewContainerRef,
                private template: TemplateRef<any>
    ) {
        apiMatchingService.setContainer(container);
    }
    @Input() set appSearchMatch(searchText: string) {
        if(searchText != null) {
            this.container.clear();
            if (searchText.trim().length > 0) {
                this.apiMatchingService.sendSearchRequest(searchText);
                this.container.createEmbeddedView(this.template);
            }
        }
    }
    operateElementWithList() {
        let element: HTMLElement = this.template.elementRef.nativeElement;
        this.apiMatchingService.setHTMLCollection(element);
    }

    ngAfterViewInit() {
        this.operateElementWithList();
    }

    ngOnChanges(): void {
        if (this.appSearchMatchOf != undefined) {
            if (this.appSearchMatchOf.length > 0) {
                this.container.clear();
                for (const input of this.appSearchMatchOf) {
                    this.container.createEmbeddedView(this.template, {
                        $implicit: input,
                        index: this.appSearchMatchOf.indexOf(input)
                    });
                }

                this.operateElementWithList();
            } else {
                this.container.clear();
            }
        }
    }
}
