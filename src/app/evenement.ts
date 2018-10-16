export class Evenement {
    private nom: string;
    private date: string;
    private details: string;

    constructor(nom: string = 'Evenement', date: string = '1995-06-26', details: string = '') {
        this.nom = nom;
        this.date = date;
        this.details = details;
    }

    public getNom(): string {
        return this.nom;
    }

    public getDate(): string {
        return this.date;
    }

    public getDetails(): string {
        return this.details;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    public setDetails(details: string) {
        this.details = details;
    }
}
