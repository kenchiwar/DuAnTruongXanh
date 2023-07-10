import { Requet } from "./request.model";

export class Requetsdetailed {
  id: number;
  sentDate?: Date;
  payday?: Date;
  reason?: string;
  status?: number;
  reply?: string;
  idRequest?: number;
  idRequestNavigation?: Requet;
}

