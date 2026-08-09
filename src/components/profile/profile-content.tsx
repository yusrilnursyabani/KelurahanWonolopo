import { notFound } from "next/navigation";

import { getProfileSectionById } from "@/data";

interface ProfileContentProps {
  sectionId: string;
}

export function ProfileContent({ sectionId }: ProfileContentProps) {
  const section = getProfileSectionById(sectionId);

  if (!section) {
    notFound();
  }

  return (
    <article className="ds-surface ds-elevated space-y-4 p-6 md:p-8">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        {section.title}
      </h1>
      <div className="space-y-3">
        {section.content.map((item) => (
          <p key={item} className="ds-body text-sm md:text-base">
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
