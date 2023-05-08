import { Form } from "./form";
import { User } from "./user";

export class CivilDocument {
    id: number;
    attachmentData: string;
    form: Form;
    user: User;

    constructor(attachmentData: string, form: Form, user: User) {
        this.attachmentData = attachmentData;
        this.form = form;
        this.user = user;
    }
}
