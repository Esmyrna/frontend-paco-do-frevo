export interface DecadaDados {
    decada: string;
    registros: {
      clube: number;
      bloco: number;
      troca: number;
      clubeDeBonecos: number;
      outros: number;
    };
}

export interface EvolutionByYearGraphProps{
    responseAssociations: AxiosResponse<any, any> | null
}