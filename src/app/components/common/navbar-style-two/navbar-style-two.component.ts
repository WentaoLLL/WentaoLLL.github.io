import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar-style-two',
    templateUrl: './navbar-style-two.component.html',
    styleUrls: ['./navbar-style-two.component.scss']
})
export class NavbarStyleTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    switcherClassApplied = false;
    switcherToggleClass() {
        this.switcherClassApplied = !this.switcherClassApplied;
    }

    searchClassApplied = false;
    searchToggleClass() {
        this.searchClassApplied = !this.searchClassApplied;
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}