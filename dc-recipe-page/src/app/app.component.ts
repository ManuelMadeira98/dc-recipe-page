import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
	@ViewChildren(MatCheckbox) checkboxes!: QueryList<MatCheckbox>;

	ngAfterViewInit(): void {
		this.checkboxes.forEach((checkbox, index) => {
			const cachedCheckboxValue = localStorage.getItem(`checkbox-${index}`);

			if (cachedCheckboxValue === '1') {
				checkbox.checked = true;
            } else {
				checkbox.checked = false;
            }
		});
	}

	updateOnCheck(checkbox: MatCheckbox): void {
		const index = this.checkboxes.toArray().indexOf(checkbox);

		if (!checkbox.checked) {
			localStorage.removeItem(`checkbox-${index}`);
		} else {
			localStorage.setItem(`checkbox-${index}`, '1');
		}
	}
}
