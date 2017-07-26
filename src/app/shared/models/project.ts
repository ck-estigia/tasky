
export class Project{
    Status: boolean;
    DueDate: Date;
    TitleColor:string;
    Project:string;
    Notes:string;

    constructor (status?: boolean, dueDate?:Date, titleColor?:string, project?:string, notes?:string){
        this.Status = status;
        this.DueDate = dueDate;
        this.TitleColor = titleColor;
        this.Project = project;
        this.Notes = notes;
    }


}