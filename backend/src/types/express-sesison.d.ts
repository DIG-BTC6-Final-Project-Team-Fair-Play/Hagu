import session from "express-session";

declare module "express-session" {
  interface Session {
    user?: { [key: string]: any };
  }
}

// import { SessionData } from "express-session";

// declare module "express-session" {
//   interface Session {
//     user?: {
//       lineId: string;
//       // add other properties as needed
//     };
//     // add other session properties if necessary
//   }
// }
