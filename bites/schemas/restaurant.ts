import {z} from "zod";

export const RestaurantSchema = z.object({
  name: z.string().min(2).max(100),
  location: z.string().max(200).optional(),
  cuisines: z.array(z.string().min(1))
});

export const RestaurantDetails = z.object({
    links: z.array(
z.object({
        name: z.string().min(1),
        url: z.string().url()
    })
    ),
    contact: z.object({
        phone: z.string().optional(),
        email: z.string().email().optional()
    }).optional()
});

export type Restaurant = z.infer<typeof RestaurantSchema>;
export type RestaurantDetails = z.infer<typeof RestaurantDetails>;