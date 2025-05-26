"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddPropertyFormData,
  AddPropertySchema,
} from "@/schemas/property-schema";

export const AddPropertyForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddPropertyFormData>({
    resolver: zodResolver(AddPropertySchema),
    defaultValues: {
      type: "Apartment",
      name: "",
      description: "",
      location: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      beds: 1,
      baths: 1,
      square_feet: 500,
      amenities: [],
      rates: {
        nightly: 0,
        weekly: 0,
        monthly: 0,
      },
      seller_info: {
        name: "",
        email: "",
        phone: "",
      },
      images: [],
    },
  });

  const watchedValues = watch();
  console.log("Form values:", watchedValues);
  console.log("Form errors:", errors);

  // Handler for amenities
  const handleAmenityChange = (amenityValue: string, checked: boolean) => {
    const currentAmenities = watchedValues.amenities || [];
    const newAmenities = checked
      ? [...currentAmenities, amenityValue]
      : currentAmenities.filter((amenity) => amenity !== amenityValue);

    setValue("amenities", newAmenities);
  };

  // Handler for images
  const handleImageChange = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files).slice(0, 4);
      setValue("images", fileArray);
    }
  };

  // Submit handler
  const onSubmit = async (data: AddPropertyFormData) => {
    try {
      console.log("Datos validados:", data);
      // Aquí harías la llamada a tu API
      // await createProperty(data);
    } catch (error) {
      console.error("Error al crear propiedad:", error);
    }
  };

  const amenitiesList = [
    "Wifi",
    "Full Kitchen",
    "Washer & Dryer",
    "Free Parking",
    "Swimming Pool",
    "Hot Tub",
    "24/7 Security",
    "Wheelchair Accessible",
    "Elevator Access",
    "Dishwasher",
    "Gym/Fitness Center",
    "Air Conditioning",
    "Balcony/Patio",
    "Smart TV",
    "Coffee Maker",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl text-center font-semibold mb-6">Add Property</h2>

      {/* Property Type */}
      <div className="mb-4">
        <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
          Property Type
        </label>
        <select
          {...register("type")}
          className="border rounded w-full py-2 px-3"
        >
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Room">Room</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>
        {errors.type && (
          <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
        )}
      </div>

      {/* Property Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Listing Name
        </label>
        <input
          {...register("name")}
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="eg. Beautiful Apartment In Miami"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Description
        </label>
        <textarea
          {...register("description")}
          className="border rounded w-full py-2 px-3"
          rows={4}
          placeholder="Add an optional description of your property"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Location */}
      <div className="mb-4 bg-blue-50 p-4 rounded">
        <label className="block text-gray-700 font-bold mb-2">Location</label>

        <input
          {...register("location.street")}
          type="text"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Street"
        />
        {errors.location?.street && (
          <p className="text-red-500 text-sm mt-1">
            {errors.location.street.message}
          </p>
        )}

        <input
          {...register("location.city")}
          type="text"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="City"
        />
        {errors.location?.city && (
          <p className="text-red-500 text-sm mt-1">
            {errors.location.city.message}
          </p>
        )}

        <input
          {...register("location.state")}
          type="text"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="State"
        />
        {errors.location?.state && (
          <p className="text-red-500 text-sm mt-1">
            {errors.location.state.message}
          </p>
        )}

        <input
          {...register("location.zip")}
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="Zipcode"
        />
        {errors.location?.zip && (
          <p className="text-red-500 text-sm mt-1">
            {errors.location.zip.message}
          </p>
        )}
      </div>

      {/* Property Details */}
      <div className="mb-4 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[120px]">
          <label className="block text-gray-700 font-bold mb-2">Beds</label>
          <input
            {...register("beds", { valueAsNumber: true })}
            type="number"
            min="1"
            className="border rounded w-full py-2 px-3"
          />
          {errors.beds && (
            <p className="text-red-500 text-sm mt-1">{errors.beds.message}</p>
          )}
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-gray-700 font-bold mb-2">Baths</label>
          <input
            {...register("baths", { valueAsNumber: true })}
            type="number"
            min="1"
            className="border rounded w-full py-2 px-3"
          />
          {errors.baths && (
            <p className="text-red-500 text-sm mt-1">{errors.baths.message}</p>
          )}
        </div>

        <div className="flex-1 min-w-[120px]">
          <label className="block text-gray-700 font-bold mb-2">
            Square Feet
          </label>
          <input
            {...register("square_feet", { valueAsNumber: true })}
            type="number"
            min="1"
            className="border rounded w-full py-2 px-3"
          />
          {errors.square_feet && (
            <p className="text-red-500 text-sm mt-1">
              {errors.square_feet.message}
            </p>
          )}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {amenitiesList.map((amenity) => (
            <div key={amenity}>
              <input
                type="checkbox"
                id={`amenity_${amenity.toLowerCase().replace(/\s+/g, "_")}`}
                checked={(watchedValues.amenities || []).includes(amenity)}
                onChange={(e) => handleAmenityChange(amenity, e.target.checked)}
                className="mr-2"
              />
              <label
                htmlFor={`amenity_${amenity
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`}
              >
                {amenity}
              </label>
            </div>
          ))}
        </div>
        {errors.amenities && (
          <p className="text-red-500 text-sm mt-1">
            {errors.amenities.message}
          </p>
        )}
      </div>

      {/* Rates */}
      <div className="mb-4 bg-blue-50 p-4 rounded">
        <label className="block text-gray-700 font-bold mb-2">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center">
            <label className="mr-2 min-w-[60px]">Weekly</label>
            <input
              {...register("rates.weekly", { valueAsNumber: true })}
              type="number"
              min="0"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2 min-w-[60px]">Monthly</label>
            <input
              {...register("rates.monthly", { valueAsNumber: true })}
              type="number"
              min="0"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2 min-w-[60px]">Nightly</label>
            <input
              {...register("rates.nightly", { valueAsNumber: true })}
              type="number"
              min="0"
              className="border rounded w-full py-2 px-3"
            />
          </div>
        </div>
        {errors.rates && (
          <p className="text-red-500 text-sm mt-1">{errors.rates.message}</p>
        )}
      </div>

      {/* Seller Info */}
      <div className="mb-4 space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Seller Name
          </label>
          <input
            {...register("seller_info.name")}
            type="text"
            className="border rounded w-full py-2 px-3"
            placeholder="Name"
          />
          {errors.seller_info?.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.seller_info.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Seller Email
          </label>
          <input
            {...register("seller_info.email")}
            type="email"
            className="border rounded w-full py-2 px-3"
            placeholder="Email address"
          />
          {errors.seller_info?.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.seller_info.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Seller Phone
          </label>
          <input
            {...register("seller_info.phone")}
            type="tel"
            className="border rounded w-full py-2 px-3"
            placeholder="Phone"
          />
          {errors.seller_info?.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.seller_info.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Images */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Images (Select up to 4 images)
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          className="border rounded w-full py-2 px-3"
          onChange={(e) => handleImageChange(e.target.files)}
        />
        {errors.images && (
          <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          {isSubmitting ? "Adding Property..." : "Add Property"}
        </button>
      </div>
    </form>
  );
};
