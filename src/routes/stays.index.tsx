import { createFileRoute } from "@tanstack/react-router";
import { StayCard } from "@/components/StayCard";
import { SectionHeading } from "@/components/SectionHeading";
import { stays } from "@/data/stays";

export const Route = createFileRoute("/stays/")({
  head: () => ({
    meta: [
      { title: "The Stays — Elora Homes Bengaluru" },
      {
        name: "description",
        content:
          "Explore the two Elora Homes residences in Bengaluru — guest capacity, bedrooms, baths and amenities for each stay.",
      },
      { property: "og:title", content: "The Stays — Elora Homes" },
      {
        property: "og:description",
        content: "Two thoughtfully styled residences in Bengaluru, designed for slower stays.",
      },
    ],
  }),
  component: StaysPage,
});

function StaysPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16 lg:px-16">
        <SectionHeading
          eyebrow="The Collection"
          title="Two residences in Bengaluru."
          intro="Both homes are styled in-house and hosted personally. Choose the one that suits the shape of your stay."
        />
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-6 pb-12 md:space-y-16 md:px-10 md:pb-16 lg:px-16">
        {stays.map((stay, i) => (
          <StayCard key={stay.slug} stay={stay} index={i} />
        ))}
      </section>
    </>
  );
}
