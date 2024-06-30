import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("photos").del();

  // Inserts seed entries
  await knex("photos").insert([
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb1.png?alt=media&token=21d12ef4-911f-4bf8-a081-927efa823d53",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb2.png?alt=media&token=12f47145-38c6-445f-ba98-59ef964cf74b",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb3.png?alt=media&token=e2983dd3-1076-48b9-aaef-5d962ecc5e08",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb4.png?alt=media&token=b5a796f1-7066-4be6-8dab-eec148aa9f61",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb5.png?alt=media&token=7171ab6d-0f7a-4c71-a1a2-9eb40c046a71",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fb8.png?alt=media&token=bd67a01d-ac56-45d4-8330-1e467956b39f",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo1.png?alt=media&token=df4abc45-d0f9-4358-b070-b73d5ae3bad1",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo2.png?alt=media&token=2caf7116-0253-42c4-bbe0-7eab7b27aca2",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo3.png?alt=media&token=6673aab3-887a-43bb-87bd-7d4f53cfafa2",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo4.png?alt=media&token=4e2726b2-1ef9-49bb-8917-a26b1578dad9",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo5.png?alt=media&token=a727c029-9a97-4072-8ba6-59ad37be2d58",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo6.png?alt=media&token=7bc026e5-5266-4f85-ace8-d944a1c15232",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo7.png?alt=media&token=edb517c6-0545-47bb-8975-d88902b50566",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fo8.png?alt=media&token=daf19089-cad8-49b7-9945-c8ee6fb49084",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.28.png?alt=media&token=2f63a5d2-b1cd-4416-877a-9a3c1e125f79",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.35.png?alt=media&token=13d9905c-5f6f-4815-a37a-6e93ac2b3b67",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.40.png?alt=media&token=16005467-579f-4377-8e07-6b8f9cfac934",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.46.png?alt=media&token=c38e8df5-8f80-41db-9185-8dce7bbfd02e",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.50.png?alt=media&token=532c9836-1428-4ff5-81cc-b8b7d01402ae",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.54.png?alt=media&token=ce263a95-e757-499b-a5cb-3d0c1eb78adb",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.13.58.png?alt=media&token=7e295662-0fd7-41de-9b96-370a39251bc9",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.01.png?alt=media&token=bdf684e6-6370-40aa-b70c-2e4809112e53",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.08.png?alt=media&token=ed8730b2-c573-4d7a-8bb6-d4652080029a",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.11.png?alt=media&token=c810debd-261b-40aa-bd5d-96cccae23d03",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.15.png?alt=media&token=8ca831ae-f8ea-48b4-848b-d0bfcc539479",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.18.png?alt=media&token=4016a987-765f-42b9-a4d0-bfb37ce0feb2",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2Fsamlephoto%202024-06-27%2015.14.24.png?alt=media&token=083752fb-4993-41e2-87d6-a0ccc4288602",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F5.png?alt=media&token=b9842764-ba01-4d13-89fa-0b67d657ba26",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F4.png?alt=media&token=1af2962d-9813-4266-add4-9ea5bf857083",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F3.png?alt=media&token=08cb2e30-6f34-4866-8dc1-0ccbd2bfe4e8",
    },
    {
      seedling_id: 1,
      photo_data:
        "https://firebasestorage.googleapis.com/v0/b/hagu-882e3.appspot.com/o/image%2F2.png?alt=media&token=adcbe803-ba27-4bb1-90bc-8d72a8038018",
    },
  ]);
}
