import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    FontAwesomeModule,
    FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

import {
    faPaperPlane,
    faCircleUser,
    faEnvelope,
    faEnvelopeCircleCheck,
    faSearch
} from '@fortawesome/free-solid-svg-icons';

import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';

// import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTooltipModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDialogModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatDividerModule,
        MatChipsModule,
        MatBadgeModule,
        ScrollingModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        // MatTableExporterModule,
        MatExpansionModule
    ],
    exports: [
        MatFormFieldModule,
        MatCheckboxModule,
        MatInputModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatTooltipModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDialogModule,
        FontAwesomeModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatDividerModule,
        MatChipsModule,
        MatBadgeModule,
        ScrollingModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        // MatTableExporterModule,
        MatExpansionModule
    ],
})
export class SharedModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(
            faBell,
            faPaperPlane,
            faCircleUser,
            faMessage,
            faEnvelope,
            faEnvelopeCircleCheck,
            faSearch
        );
    }
}
