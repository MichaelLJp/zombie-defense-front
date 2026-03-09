export interface ZombieDetail{
    tipo: string;
    nivelAmenaza: number;
    puntaje: number;
    balasUsadas: number;
    tiempoUsado: number;
}

export interface DefenseResponse{
    puntajeTotal: number;
    balasUsadas: number;
    tiempoUsado: number;
    zombiesEliminados: ZombieDetail[];
}
export interface HistoricalStrategy{
    id :number;
    puntajeLogrado: number;
    balasDisponibles: number;
    tiempoDisponible: number;
    eliminados: ZombiesEliminado[];
}
export interface ZombiesEliminado{
    nombre: string;
    cantidad: number;
}