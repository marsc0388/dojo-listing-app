import { z } from "zod/v4";

export interface Dojo {
  id: number;
  title: string;
  kanchou: string;
}

export const Dojo = z.object({
  id: z.number(),
  title: z.string(),
  kanchou: z.string(),
});
