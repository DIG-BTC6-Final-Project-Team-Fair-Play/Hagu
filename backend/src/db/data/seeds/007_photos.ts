import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("photos").del();

  // Inserts seed entries
  const Okurachan: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo1.png?alt=media&token=df4abc45-d0f9-4358-b070-b73d5ae3bad1",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo2.png?alt=media&token=2caf7116-0253-42c4-bbe0-7eab7b27aca2",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo3.png?alt=media&token=6673aab3-887a-43bb-87bd-7d4f53cfafa2",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo3.png?alt=media&token=6673aab3-887a-43bb-87bd-7d4f53cfafa2",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo4.png?alt=media&token=4e2726b2-1ef9-49bb-8917-a26b1578dad9",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo5.png?alt=media&token=a727c029-9a97-4072-8ba6-59ad37be2d58",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo6.png?alt=media&token=7bc026e5-5266-4f85-ace8-d944a1c15232",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo7.png?alt=media&token=edb517c6-0545-47bb-8975-d88902b50566",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo8.png?alt=media&token=daf19089-cad8-49b7-9945-c8ee6fb49084",
  ]; //1
  const Burochan: string[] = [
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb1.png?alt=media&token=21d12ef4-911f-4bf8-a081-927efa823d53",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb2.png?alt=media&token=12f47145-38c6-445f-ba98-59ef964cf74b",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb3.png?alt=media&token=e2983dd3-1076-48b9-aaef-5d962ecc5e08",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb4.png?alt=media&token=b5a796f1-7066-4be6-8dab-eec148aa9f61",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb5.png?alt=media&token=7171ab6d-0f7a-4c71-a1a2-9eb40c046a71",
    "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb8.png?alt=media&token=bd67a01d-ac56-45d4-8330-1e467956b39f",
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
  ]; //4

  const list: string[][] = [Okurachan, Burochan, Nasurou, Nasuru];

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
