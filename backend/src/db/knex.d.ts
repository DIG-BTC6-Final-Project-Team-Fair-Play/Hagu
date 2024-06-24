import { Knex } from "knex";

// declare module "knex/types/tables" {
//   interface Sample {
//     id: number;
//     sample: string;
//   }
// }

export interface Sample {
  id: number;
  sample: number;
}
