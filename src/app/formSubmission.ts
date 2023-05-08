import { Form } from "./form";
import { User } from "./user";

export class FormSubmission {
    id: number;
    formData: string;
    status: string;
    form: Form;
    user: User;
    constructor(formData: string, status: string, form: Form, user: User){
        this.formData = formData;
        this.status = status;
    };
}
