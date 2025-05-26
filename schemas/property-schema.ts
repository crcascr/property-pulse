import { z } from "zod";

// PropertyLocation schema
const PropertyLocationSchema = z.object({
  street: z.string().optional(),
  city: z.string().min(1, "La ciudad es requerida"),
  state: z.string().min(1, "El estado es requerido"),
  zip: z.string().optional(),
});

// PropertyRates schema
const PropertyRatesSchema = z
  .object({
    nightly: z
      .number()
      .min(0, "La tarifa nocturna debe ser positiva")
      .optional()
      .or(z.literal(0)),
    weekly: z
      .number()
      .min(0, "La tarifa semanal debe ser positiva")
      .optional()
      .or(z.literal(0)),
    monthly: z
      .number()
      .min(0, "La tarifa mensual debe ser positiva")
      .optional()
      .or(z.literal(0)),
  })
  .refine((data) => data.nightly || data.weekly || data.monthly, {
    message: "Debe especificar al menos una tarifa",
    path: ["rates"],
  });

// SellerInfo schema
const SellerInfoSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  email: z
    .string()
    .email("Debe ser un email válido")
    .min(1, "El email es requerido"),
});

// Primary schema for AddProperty
export const AddPropertySchema = z.object({
  type: z.string().min(1, "El tipo de propiedad es requerido"),
  name: z.string().min(1, "El nombre de la propiedad es requerido"),
  description: z.string().optional(),
  location: PropertyLocationSchema,
  beds: z.number().min(1, "Debe tener al menos 1 habitación"),
  baths: z.number().min(1, "Debe tener al menos 1 baño"),
  square_feet: z.number().min(1, "Los pies cuadrados deben ser mayor a 0"),
  amenities: z.array(z.string()).optional(),
  rates: PropertyRatesSchema,
  seller_info: SellerInfoSchema,
  images: z
    .array(z.instanceof(File))
    .max(4, "Máximo 4 imágenes permitidas")
    .optional(),
});

// Type inferred automatically by Zod
export type AddPropertyFormData = z.infer<typeof AddPropertySchema>;

// Schema for partial validation (useful for real-time validation)
export const PartialAddPropertySchema = AddPropertySchema.partial();
