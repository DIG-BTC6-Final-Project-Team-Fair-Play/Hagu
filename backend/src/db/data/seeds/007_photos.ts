import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("photos").del();

  // Inserts seed entries
  const Okurachan: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5733.jpeg?alt=media&token=e3e1104b-8222-4e37-8cfa-adca1eb0a3c0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5735.jpeg?alt=media&token=b4ac1ce1-90c1-43f5-9eed-4b656ee35e1c",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5740.jpeg?alt=media&token=f019d645-2093-4f09-8abd-3a0af1d40367",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5742.jpeg?alt=media&token=c71bb732-4296-4e5c-9c50-423620f59528",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5745.jpeg?alt=media&token=35e4a502-2c77-4980-9f94-23017077a2d0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5746.jpeg?alt=media&token=03f1138c-ae17-4bb4-9fc3-7a92bb4b2589",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5750.jpeg?alt=media&token=d7b0408b-2768-497d-979d-f65b31b5860a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5754.jpeg?alt=media&token=a0b16865-739b-48ba-9949-f5da71e572f4",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5755.jpeg?alt=media&token=2d83bb4f-0d48-4066-9cf3-aebd09d7ba48",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5757.jpeg?alt=media&token=c429fabd-dc72-4979-ae76-271e9ff80818",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5759.jpeg?alt=media&token=0ea1ca33-df85-451c-a997-c12517cb978a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5761.jpeg?alt=media&token=6cc6549f-37d5-4769-a952-74b7b6bb7ffe",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5763.jpeg?alt=media&token=944ff237-f7f2-47df-87fc-8ba8bdd4b853",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo_5765.jpeg?alt=media&token=dc6d9f2a-8b71-4322-b5e8-31eb898388a8",
  ]; //1
  const Burochan: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5734.jpeg?alt=media&token=4d757b70-eb0e-4003-9239-b7de0f5bd114",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5736.jpeg?alt=media&token=d7cd7128-2d37-4b5a-bccd-d4bf865db36d",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5741.jpeg?alt=media&token=beb7a3c4-908f-46a6-b1a5-d8e04cfff9f8",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5743.jpeg?alt=media&token=45528dfb-cb0f-43f1-be0d-cf8671826d49",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5744.jpeg?alt=media&token=5c54666d-91bb-427c-b866-428b49fd723b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5747.jpeg?alt=media&token=6138edba-9072-4c0b-82af-1b39a03e4b1c",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5749.jpeg?alt=media&token=2ee2f8f0-a337-43d0-aad5-998ce9acf238",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5753.jpeg?alt=media&token=3e3bbecd-5a61-413a-b9b9-9b6f6da47c3d",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5756.jpeg?alt=media&token=e20c9eb5-acab-4022-a7c8-9cef8804d03a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5758.jpeg?alt=media&token=64701172-4c24-48a8-857d-ee31f61745d0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5760.jpeg?alt=media&token=496538b6-f553-4f07-b929-1100c864f82b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5762.jpeg?alt=media&token=83d22677-4996-4a22-8aeb-ee56f20fc5bc",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5764.jpeg?alt=media&token=5a8b354b-e913-4131-adb6-cd09e1b39a69",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb_5766.jpeg?alt=media&token=01aebc1a-a78b-4199-bed9-4ea195c249fd",
  ]; //2
  const Nasurou: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%861.jpg?alt=media&token=0262979b-a36c-427e-8c32-45790f96f975",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%862.jpg?alt=media&token=f103170e-74dd-43f2-a743-c6cfa7249302",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%863.jpg?alt=media&token=d8b832c3-6738-433f-972d-64292e863d99",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%864.jpg?alt=media&token=795b4f82-3af8-4dd1-a801-352b2424b17b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%865.jpg?alt=media&token=e0ba885d-3b7a-4965-b6d6-3d3a5e574520",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%866.jpg?alt=media&token=b93eb510-6697-4692-ae11-e717c26cbf50",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%867.jpg?alt=media&token=67713694-9a9d-4615-bdc8-8fa821086d94",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%868.jpg?alt=media&token=73d478be-1f6f-4033-8ded-9bebc9218f6a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%869.jpg?alt=media&token=afaaffe0-7a90-4722-b55d-8a37b96359ad",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8610.jpg?alt=media&token=565f5e8e-ba7b-485a-903d-7875b7417afd",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8611.jpg?alt=media&token=a83362f1-cf33-4044-85fa-c918af9631c0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8612.jpg?alt=media&token=5c95d3b8-0df5-43f2-8d23-bcbb85de3057",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8613.jpg?alt=media&token=bbdd13e4-9732-4e7e-8576-54df386c6b07",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8614.jpg?alt=media&token=e253b8e7-4bdd-4b3a-ace5-4d56320c7ace",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8615.jpg?alt=media&token=4197a325-4d10-462c-b360-cffe47eac301",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8616.jpg?alt=media&token=98e1511a-f3da-431c-8c06-26f0a495bdd0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8617.jpg?alt=media&token=2c8507ff-fa14-4edc-8c75-f229304b4d25",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8618.jpg?alt=media&token=4a6a2b9f-0cd7-4ed1-898f-933b05f77b6a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8619.jpg?alt=media&token=8ff99dc8-97dd-4667-a2dd-9c43edd2f2dd",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8620.jpg?alt=media&token=de1944eb-7d2c-44d8-8b0c-ee6b7030d2c9",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8621.jpg?alt=media&token=ffa674d6-aa3a-4d84-90b8-cf65392bb748",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8622.jpg?alt=media&token=48a11778-efbb-4bb6-961f-1d9155699992",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8D%E3%81%8623.jpg?alt=media&token=f3993cb9-61db-4e17-b257-b558df6ddb38",
  ]; //3
  const Nasuru: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B1.jpg?alt=media&token=dab4b280-6bc3-4770-8fe1-a622db144e22",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B2.jpg?alt=media&token=100199ad-ba67-4580-9ac1-86d7682490c6",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B3.jpg?alt=media&token=56633e52-010b-4607-aa9d-6d042a23ab81",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B4.jpg?alt=media&token=e357e7aa-4646-408f-8893-052e8dbe17f1",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B5.jpg?alt=media&token=89e250a3-384e-42c8-b8d5-cabc27990029",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B6.jpg?alt=media&token=3cd39702-e840-4185-8d8a-344d603f0212",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B7.jpg?alt=media&token=87b2c481-a676-49d3-b817-2dd653f44cba",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B8.jpg?alt=media&token=2e0c1b67-d2af-49ff-8b7c-1dbf08078d49",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B9.jpg?alt=media&token=6b8cebbf-0ff5-454c-be05-53cd593f325e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B10.jpg?alt=media&token=555f1a0f-2a41-4a29-b044-a1f34283184e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B11.jpg?alt=media&token=968734bf-655b-4107-9efd-c4e6ee95669c",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B12.jpg?alt=media&token=d1242d7a-625c-4597-b9b7-63e3853c70e6",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B13.jpg?alt=media&token=7a278591-b14b-4f9b-a704-de8b7af1278a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B14.jpg?alt=media&token=4d404103-e9c4-4334-94ac-d2073cce7e35",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B15.jpg?alt=media&token=eb94ef97-8d10-40da-9b5a-c5eec54cc413",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B16.jpg?alt=media&token=24ce2c84-f314-4af9-b43d-fe7261a9416e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B17.jpg?alt=media&token=fcf34593-f661-441c-bba8-62150ba97a52",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B18.jpg?alt=media&token=981e4a44-7b4d-4308-9df7-d6ef0bd9bf70",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B19.jpg?alt=media&token=c27a9cf4-1006-4fda-9ee0-0a1a4b09ff36",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B20.jpg?alt=media&token=72fbca48-1b56-4a98-9d99-94740830fe0f",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F%E3%81%AA%E3%81%99%E3%82%8B21.jpg?alt=media&token=bdc614bb-922d-40cf-9c28-3c8f36878944",
  ]; //4

  const nasuroKeiryo: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO1.jpg?alt=media&token=cd77c15b-8bf2-4bb2-829e-de17f6d21d6d",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO2.jpg?alt=media&token=cfdc5d60-367f-4149-8651-11a6c3c83c53",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO3.jpg?alt=media&token=d6670afb-6305-45da-876d-5b8451432f16",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO4.jpg?alt=media&token=0a6e1bfe-de60-44db-a577-ad966cde87f8",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO5.jpg?alt=media&token=3300f4ae-e770-421d-9b9a-d939f7556dc4",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO6.jpg?alt=media&token=0248ddf1-3db4-46d9-a2a6-b9a94756d964",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO7.jpg?alt=media&token=9abc3216-a4ff-4f6f-82cd-97808c44614b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO8.jpg?alt=media&token=44f5fd85-bd9c-4093-b0bb-c1772c157a0b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO9.jpg?alt=media&token=cff67794-ee9a-4a5c-919f-45aaf72fda4e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO10.jpg?alt=media&token=c1e80e6b-5a5c-401c-bffa-4ba04ae22b4e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO11.jpg?alt=media&token=b5e1a27a-0ce9-4a96-80f4-15862fb1359d",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO12.jpg?alt=media&token=25f8ba55-a63c-4392-be5f-444a761095f1",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO13.jpg?alt=media&token=a3347761-a6fb-425a-89b0-0b7149689b1c",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO14.jpg?alt=media&token=2da6b8ac-b380-49c3-8630-69dfc02fa008",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO15.jpg?alt=media&token=39055235-bf44-4dcd-93f4-ce4afb0086a0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO16.jpg?alt=media&token=05918a22-4777-4410-8b68-cb18734611c0",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO17.jpg?alt=media&token=e8d627c9-d1e8-4fdf-bddd-60293b3917e3",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO18.jpg?alt=media&token=8cc73b6e-5c8d-48e6-9a9a-7a25fa3da8b1",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO19.jpg?alt=media&token=3a691d71-6070-4116-91d7-900a37a1df80",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO20.jpg?alt=media&token=119b7ffe-f654-4f6a-a416-c1c936bc9b6f",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO21.jpg?alt=media&token=52394072-1e50-4c4a-877f-1b96dcbb5f21",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO22.jpg?alt=media&token=34a60c96-1672-4c7a-8ba7-7db890e995f7",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNRO23.jpg?alt=media&token=374d626f-5827-45a5-844b-09fb5e827762",
  ];
  const nasuruKeiryo: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR1.jpg?alt=media&token=d479c720-0474-466c-8f49-57c24ab3bd09",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR2.jpg?alt=media&token=5a5f84f5-ec00-47d2-b964-42f10c773168",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR3.jpg?alt=media&token=d5edc9e2-cb32-41ac-ac0f-f4153073143e",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR4.jpg?alt=media&token=b04fbeac-f83a-4248-9e6b-423efb6e72d8",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR5.jpg?alt=media&token=8c5acb73-77c2-4d6f-8f5f-54b5e3bf4368",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR6.jpg?alt=media&token=0953de56-0593-4aea-af79-2994cbf0fde5",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR7.jpg?alt=media&token=1233882b-9ea2-4c9d-8b36-5059efed5fb5",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR8.jpg?alt=media&token=5a0e981e-6190-497f-838f-c59bc2dee9e5",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR9.jpg?alt=media&token=4256af57-6638-493e-a492-cc142cbaad13",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR10.jpg?alt=media&token=c85a05a3-0a46-4c29-bc6d-1d6fa524e21b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR11.jpg?alt=media&token=69070e1f-206c-41a1-af6e-106bb4993ac7",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR12.jpg?alt=media&token=a18aaa47-a0fa-4e48-a663-9a2369c45182",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR13.jpg?alt=media&token=33808e81-0c51-4cd4-ac12-fa935824e41a",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR14.jpg?alt=media&token=44959c9a-ddbd-4bad-809e-0d4a6972417d",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR15.jpg?alt=media&token=857e13ac-2274-41b2-b3bd-3f446b97f776",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR16.jpg?alt=media&token=6d942758-f481-4dc0-81ff-cdd5dea256d2",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR17.jpg?alt=media&token=1c646898-ab90-42c7-a3d0-586b15833ea2",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR18.jpg?alt=media&token=1bbc9b83-2c82-4beb-b56f-66e7d1c79a6f",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR19.jpg?alt=media&token=4eb10af4-4f88-4ba6-b59b-dcd6299fefae",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR20.jpg?alt=media&token=0a9d0df4-bdc7-4649-9585-04f64697a908",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2FNSR21.jpg?alt=media&token=208bb043-7808-413b-938c-0d5dd086ab5e",
  ];

  const list: string[][] = [
    Okurachan,
    Burochan,
    Nasurou,
    Nasuru,
    nasuroKeiryo,
    nasuruKeiryo,
  ];

  // ! 指定msまたせる
  const sleep = (time: number) => new Promise<void>((r) => setTimeout(r, time));

  // ループ処理
  for (let i = 0; i < list.length; i++) {
    // nae = [str,str,str...]

    for (const insObj of list[i].map((url) => ({
      seedling_id: i + 1,
      photo_data: url,
    }))) {
      await knex("photos").insert(insObj);
      console.log("photos: ");
      await sleep(100);
    }
  }
}
