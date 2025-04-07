import { z } from 'zod';
import axios from 'axios';

export type Tour = z.infer<typeof tourSchema>;

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

export const fetchTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>('https://www.course-api.com/react-tours-project');
  const result = tourSchema.array().safeParse(response.data);

  if (!result.success) {
    const message = result.error.errors.map(error => error.message).join(', ');
    throw new Error(message);
  }
  return result.data;
}