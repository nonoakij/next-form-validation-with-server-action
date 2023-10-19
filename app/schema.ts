import { z } from "zod";

export default z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
});
