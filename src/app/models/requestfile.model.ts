import { Requet } from "./request.model";

export class RequestFile {
  id: number;
  name?: string;
  file: string
  idRequest: number;
  idRequestNavigation?: Requet;
}
