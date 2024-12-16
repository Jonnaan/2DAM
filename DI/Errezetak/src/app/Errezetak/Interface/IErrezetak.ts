// To parse this data:
//
//   import { Convert, Errezeta } from "./file";
//
//   const errezeta = Convert.toErrezeta(json);




export interface Errezeta {
  id:           string | undefined;
  deskribapena: string;
  prezioa:      string;
  osagaiak:     string;
  argazkia:     string;
}


export class Convert {
  public static toErrezeta(json: string): Errezeta {
      return JSON.parse(json);
  }

  public static errezetaToJson(value: Errezeta): string {
      return JSON.stringify(value);
  }
}
