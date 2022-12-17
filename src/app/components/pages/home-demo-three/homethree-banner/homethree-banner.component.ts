import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-homethree-banner',
    templateUrl: './homethree-banner.component.html',
    styleUrls: ['./homethree-banner.component.scss']
})
export class HomethreeBannerComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}