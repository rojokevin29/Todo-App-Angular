
export interface Task {
    id?: number;
    title: string;
    description: string;
    hide: boolean;
    finished: boolean;
    edit : boolean;
    createdAt: Date;
    idUser: number;
    posicion: number;
}