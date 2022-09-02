import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Checkdate{
    private selectedStartDate:Date = new Date();

    Datecheck():ValidatorFn{
        return (control: AbstractControl):ValidationErrors|null =>{
            let currentdate = new Date();
            currentdate.setHours(currentdate.getHours()+5);
            currentdate.setMinutes(currentdate.getMinutes()+30);

            let selecteddate = new Date(control.value);
            this.selectedStartDate = selecteddate;
            return (selecteddate<currentdate)?{CheckDate:{value:control.value}}:null;
        }
    }

    checkEndDate():ValidatorFn{
        return (control:AbstractControl):ValidationErrors|null =>{
            let endDate = new Date(control.value);
            return (this.selectedStartDate>endDate)?{CheckDate:{value:control.value}}:null;
        }
    }
}