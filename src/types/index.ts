import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  //include everything form insertProductSchema
  id: string;
  rating: string;
  createdAt: Date;
};
