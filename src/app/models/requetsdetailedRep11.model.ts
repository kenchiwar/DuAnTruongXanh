import { Requet } from "./request.model";

export class RequetsdetailedRep11 {
  id: number;
  sentDate?: Date;
  payday?: Date;
  reason?: string;
  reason_1?: string;
  reason_2?: string;
  status?: number;
  reply?: string;
  idRequest?: number;
  idRequestNavigation?: Requet;
}

