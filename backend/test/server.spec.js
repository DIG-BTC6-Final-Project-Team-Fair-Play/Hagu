// import chai from "chai";
// import chaiHttp from "chai-http";
// import { beforeEach, describe } from "node:test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const { setupExpressApp } = require("../src/server/server");
const config = require("../src/db/knexfile");
const { describe } = require("node:test");
const knex = require("knex")(config.development);

const server = setupExpressApp();

describe("test", () => {
  beforeEach(async () => {
    request = chai.request(server).keepOpen();
  });

  afterEach(async () => {
    request.close();
  });

  describe("getテスト", () => {
    it("vegetableテーブルをgetできるか", (done) => {
      request.get("/api/vegetables").end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body[0]).to.deep.equal({
          id: 1,
          vegetable_name: "ピーマン",
          equipment_list: JSON.stringify([
            "スコップ",
            "ピーマンの種",
            "培養土",
            "鉢底石",
            "化成肥料",
            "仮支柱",
            "本支柱",
            "麻紐",
            "園芸用はさみ",
          ]),
        });
      });
    });
  });
});
