import { AbstractControl, ValidationErrors } from "@angular/forms";


export function convertToUpperCase(control: AbstractControl): ValidationErrors | null {

    const userName = control.value as string;
    if (userName !== userName.toUpperCase()) {
        control.setValue(userName.toUpperCase());
    }
    return null;
}