import {DomiciliosResponse} from "./domicilios.response";

export class UsersResponse {
  name: string;
  fecha_nacimiento: Date;
  direccion: DomiciliosResponse[]|null;
}
