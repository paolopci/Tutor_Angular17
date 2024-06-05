import { AbstractControl, ValidationErrors } from "@angular/forms";

export function urlValidator(control: AbstractControl): ValidationErrors | null {

    const domainExt = ['.com', '.in', '.me', '.org'];

    if (!control.value.startWith('https://')) {
        return {
            urlValid: true
        };
    }
    //javascript
    const checkExtension = domainExt.some((extension) => control.value.include(extension));
    if (!checkExtension) {
        return {
            urlValid: true
        };
    }

    return null;
}