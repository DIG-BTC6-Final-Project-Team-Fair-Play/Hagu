export interface Users {
  id: number;
  line_id: string;
  user_name: string;
  picture: string;
}

export interface Friends {
  id: number;
  user_id: number;
  friend_id: number;
  user_name: string;
}

export interface Seedlings {
  id: number;
  user_id: number;
  vegetable_id: number;
  growing_stage_no: number;
  last_watering: Date;
  seedling_name: string;
  eat_photo_url: string;
  // character: string;
}

export interface Vegetables {
  id: number;
  image: string;
  label: string;
  description: string;
  content: string;
}
export interface Equipments {
  id: number;
  equipment_list: string;
}

export interface Vegetable_advice {
  vegetable_id: number;
  growing_stage_no: number;
  advice: string;
}

export interface Photos {
  id: number;
  seedling_id: number;
  photo_data: string;
  create_at: Date;
  updated_at: Date;
}

export interface PostPhotos {
  seedling_id: number;
  photo_data: string;
  // date: Date;
}

export interface NewSeedling {
  user_id: number;
  vegetable_id: number;
  growing_stage_no: number;
  seedling_name: string;
}

export interface PutGrowth {
  growing_stage_no: number;
}

export interface PutWater {
  last_watering: Date;
}
