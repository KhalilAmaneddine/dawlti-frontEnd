import { Form } from "./form";
import { User } from "./user";

export class FormSubmission {
    id: number;
    formData: string;
    status: string;
    date: string;
    form: Form;
    user: User;
    constructor(id: number, formData: string, status: string, form: Form, user: User){
        this.id = id;
        this.formData = formData;
        this.status = status;
        this.form = form;
        this.user = user;
    };
}
