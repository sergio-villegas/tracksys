export class ticket{
    constructor(
        public Descripcion: string,
        public Localizacion: string,
        public Fecha_Inicio: string,
        public Fecha_Finalizacion: string,
        public Estado: string,
        public Carga_Archivo: string
    ){}
}