export interface DataPoint {
    type: string;
    count: number;
}

export interface OtherEntitiesGraphProps{
    dataOtherEntities: DataPoint[];
    otherEntitiesStatus: number;
}