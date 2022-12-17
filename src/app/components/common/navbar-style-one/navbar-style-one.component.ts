import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar-style-one',
    templateUrl: './navbar-style-one.component.html',
    styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

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