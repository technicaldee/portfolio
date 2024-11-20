import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Senior Full-Stack Mobile Developer", // TODO: Replace with actual role
    company: "Tuzapay LLC", // TODO: Replace with actual company name
    logo: "data:image/jpeg;base64,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", // TODO: Replace with actual logo
    duration: "2022 - Present",
    description:
      "Lead developer for multiple high-impact projects, mentoring junior developers, and implementing best practices.",
    link: "https://tuzapay.com",
    images: [],
  },
  {
    role: "Software Development Lead", // TODO: Replace with actual role
    company: "Venmiga Technologies", // TODO: Replace with actual company name
    logo: "/logo.png", // TODO: Replace with actual logo
    duration: "2020 - Present",
    description:
      "Developed and maintained various client projects, focusing on responsive design and performance optimization.",
    link: "https://venmiga.com",
    images: [],
  },
  {
    role: "Tutor", // TODO: Replace with actual role
    company: "Wedigraf", // TODO: Replace with actual company name
    logo: "/company.svg", // TODO: Replace with actual logo
    duration: "2016 - 2018",
    description:
      "Tutored web and mobile development to over 50 students in various programming languages and frameworks.",
    link: "https://wedigraf.com",
    images: [],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
