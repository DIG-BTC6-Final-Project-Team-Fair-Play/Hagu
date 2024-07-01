import "express-session";
import type { Express, Request, Response, Router } from "express";

// import SessionData from "express-session";

// declare module "express-session" {
//   interface Session {
//     user?: {
//       lineId: string;
//       name: string;
//       picture: string;
//     };
//   }
// }
// declare module "express-session" {
//   interface Session {
//     user?: { [key: string]: any };
//   }
// }

declare module "express-session" {
  interface SessionData {
    user?: {
      lineId: string;
      name: string;
      picture: string;
    } | null;
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
