
export interface ProductInterface {
    ean: string;
    categories: string[];
    imageUrl: string | undefined;
    ingredients?: IProductIngredient[];
    ingredientsText?: string;
    ingredientsTextDE?: string;//可能不需要
    nutriments: INutriments;
    nutriScore: string;
    nutriScoreScore?: number;//用来计算nutriscore
    nutriscoreData?: INutriscoreData;
    quantity?: string;
    nutrientLevels?: INutrientLevel;
    brands?: string;
    labels?: string;
    categories_tags?: string[];
    productName: string;
    productNameDE: string;
  }


export interface IProduct {
  name: string;
  amount: number;
  price: number;
  product?: IProductData[];
}
export interface Idetails {
  name: string;
  amount: number;
  unit: string;
  price: number | undefined;
  product?: IProductData[];
  ignored?: boolean;
  ean: string;
}

export interface IProductData {
  id?: string;
  categories?: string[];
  imageUrl?: string | undefined;
  ingredientsText?: string;
  nutriments: INutriments;
  nutriScore: string;
  nutriScoreScore?: number;
  nutriscoreData?: INutriscoreData;
  novaGroup?: number;
  ecoscoreGrade?: string;
  quantity?: string;
  nutrientLevels?: INutrientLevel;
  brands?: string;
  labels?: string;
  productName: string;
  productNameDE: string;
}

interface INutriments {
  alcohol?: number;
  alcohol_100g?: number;
  alcohol_serving?: number;
  alcohol_unit?: string;
  carbohydrates?: number;
  carbohydrates_100g?: number;
  carbohydrates_serving?: number;
  carbohydrates_unit?: string;
  energy?: number;
  energy_kcal?: number;
  energy_kcal_100g?: number;
  energy_kcal_serving?: number;
  energy_kcal_unit?: string;
  fat?: number;
  fat_100g?: number;
  fat_serving?: number;
  fat_unit?: string;
  fruits_vegetables_nuts_estimate_from_ingredients_100g?: number;
  nova_group?: number;
  nova_group_100g?: number;
  nutrition_score_fr?: number;
  nutrition_score_fr_100g?: number;
  proteins?: number;
  proteins_100g?: number;
  proteins_serving?: number;
  proteins_unit?: string;
  salt?: number;
  salt_100g?: number;
  salt_serving?: number;
  salt_unit?: string;
  saturated_fat?: number;
  saturated_fat_100g?: number;
  saturated_fat_serving?: number;
  saturated_fat_unit?: string;
  sodium?: number;
  sodium_100g?: number;
  sodium_serving?: number;
  sodium_unit?: string;
  sugars?: number;
  sugars_100g?: number;
  sugars_serving?: number;
  sugars_unit?: string;
  calcium?: number;
  calcium_100g?: number;
  calcium_serving?: number;
  calcium_unit?: string;
  cholesterol?: number;
  cholesterol_100g?: number;
  cholesterol_serving?: number;
  cholesterol_unit?: string;
  fat_value?: number;
  fiber?: number;
  fiber_100g?: number;
  fiber_serving?: number;
  fiber_unit?: string;
  iron?: number;
  iron_100g?: number;
  iron_serving?: number;
  iron_unit?: string;
  trans_fat?: number;
  trans_fat_100g?: number;
  trans_fat_serving?: number;
  trans_fat_unit?: string;
  vitamin_a?: number;
  vitamin_a_100g?: number;
  vitamin_a_serving?: number;
  vitamin_a_unit?: string;
  vitamin_c?: number;
  vitamin_c_100g?: number;
  vitamin_c_serving?: number;
  vitamin_c_unit?: string;
}

export interface IOpenFoodFactsData {
  id: string;
  ean: string;
  productName: string;
  productNameDE: string;
  categories: string[];
  quantity: number | string;
  imageUrl: string;
  nutriScore: string;
  fromOFF: boolean;
}

export interface ProductInformation {
  ean: string;
  id: string;
  receiptNames: string[];
  categories: string[];
  imageUrl: string | undefined;
  ingredients?: IProductIngredient[];
  ingredientsText?: string;
  ingredientsTextDE?: string;
  nutriments: INutriments;
  nutriScore: string;
  nutriScoreScore?: number;
  nutriscoreData?: INutriscoreData;
  novaGroup?: number;
  ecoscoreGrade?: string;
  quantity?: string;
  nutrientLevels?: INutrientLevel;
  brands?: string;
  labels?: string;
  productName: string;
  productNameDE: string;
}

interface INutrientLevel {
  fat?: Level;
  salt?: Level;
  saturated_fat?: Level;
  sugars?: Level;
}

enum Level {
  HIGH = "high",
  MODERATE = "moderate",
  LOW = "low",
}

interface IProductIngredient {
  percent_estimate?: number;
  percent_max?: number;
  percent_min?: number;
  rank?: number;
  text: string;
  vegan?: string;
  vegetarian?: string;
}

interface INutriscoreData {
  energy: number;
  energy_points: number;
  fiber: number;
  fiber_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  grade: string;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_ratio: number;
  saturated_fat_ratio_points: number;
  score: number;
  sodium: number;
  sodium_points: number;
  sugars: number;
  sugars_points: number;
}


export interface IProfile {
  goal: string | undefined;
  typeOfEater: string | undefined;
  dietaryPreference: string | undefined; //Array<Date | number>[],
}

export interface IHomeScreen_icon {
  category: string;
  value: number;
}
