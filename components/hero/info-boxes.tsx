import { InfoBox } from "@/components";

export const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            title="For Renters"
            description="Find your dream rental property. Bookmark properties and contact owners."
            buttonText="Browse Properties"
            href="/properties"
            variant="secondary"
          />
          <InfoBox
            title="For Property Owners"
            description="List your properties and reach potential tenants. Rent as an airbnb or long term."
            buttonText="Add Property"
            href="/properties/add"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};
