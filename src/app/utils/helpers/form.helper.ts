import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class FormHelper {
    public form: FormGroup;

    constructor(protected component_form?: FormGroup) {
        if (this.component_form) this.form = this.component_form;
    }

    public InitForm(component_form: FormGroup) {
        this.form = component_form;
    }

    /**
     * @param {string} control_name
     * @param {string} [group_name]
     * @returns {AbstractControl}
     * @memberof FormHelper
     */
    public getControl(control_name: string, group_name?: string): AbstractControl {
        if (group_name) return this.form.get(group_name).get(control_name);

        return this.form.get(control_name).get(control_name);
    }


    /**
     * @param {*} new_value
     * @param {string} control_name
     * @param {string} [group_name]
     * @memberof FormHelper
     */
    public updateControl(new_value: any, control_name: string, group_name?: string ) {
        this.getControl(control_name, group_name).patchValue(new_value);
    }


    /**
     * @param {string} control_name
     * @param {string} [group_name]
     * @returns {ValidationErrors}
     * @memberof FormHelper
     */
    public getErrors(control_name?: string, group_name?: string): ValidationErrors {
        return control_name ? this.getControl(control_name, group_name).errors : this.form.errors;
    }


    /**
     * @returns {boolean}
     * @memberof FormHelper
     */
    public isValid(): boolean {
        return this.form.valid;
    }


    /**
     * @param {string} control_name
     * @param {string} [group_name]
     * @memberof FormHelper
     */
    public disable(control_name: string, group_name?: string) {
        this.getControl(control_name, group_name).disable({emitEvent: true});
    }


    /**
     * @param {string} control_name
     * @param {string} [group_name]
     * @memberof FormHelper
     */
    public enable(control_name: string, group_name?: string) {
        this.getControl(control_name, group_name).enable({emitEvent: true});
    }

    /**
     *
     * @param {string} [control_name]
     * @param {string} [group_name]
     * @returns {Observable<any>}
     * @memberof FormHelper
     */
    public events(control_name?: string, group_name?: string): Observable<any> {
        if (control_name && group_name) return this.getControl(control_name, group_name).valueChanges;

        if (control_name) return this.getControl(control_name).valueChanges;

        return this.form.valueChanges;
    }

}