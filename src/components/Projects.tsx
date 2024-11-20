import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Past Question Sharing Platform",
    description:
      "A platform for sharing past questions and answers with other students",
    tech: "Flutter",
    link: "https://apps.apple.com/id/app/unipapers/id6449260033",
  },
  {
    title: "Social Media Application",
    description: "A student centric social media application",
    tech: "Flutter",
    link: "https://apps.apple.com/id/app/classof/id6451405254",
  },
  {
    title: "Saving App",
    description: "An interactive saving application",
    tech: "Flutter",
    link: "https://apps.apple.com/id/app/sayver/id6473125567",
  },
  {
    title: "Flurstack",
    description: "Fintech app",
    tech: "Flutter",
    link: "https://apps.apple.com/id/app/flurstack/id6621275771",
  },
];

const techColors = {
  Flutter: "bg-blue-500",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Python: "bg-yellow-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
