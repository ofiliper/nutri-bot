import { HealthConditionENUM, ObjectiveENUM } from "../enum";

interface IContent {
    desc?: string;
}

export interface UserDTO {
    age?: number | null;
    name: string;
    height?: string;
    weight?: string;
    objective?: ObjectiveENUM | null;
    healthCondition?: HealthConditionENUM | null;
    content: IContent[];
}