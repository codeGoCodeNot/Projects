export type ProductProps = {
  name: string;
  nutrition: { fat: number; carbs: number; protein: number };
  thumbnail: string;
  final_price: number;
  original_price: number;
  description: string;
  id: number;
  quantity: number;
};
