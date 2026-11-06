import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects: {
  title: string;
  description: string;
  tech: string;
  link: string;
  image?: string;
  isIcon?: boolean;
  iosLink?: string;
  androidLink?: string;
}[] = [
  {
    title: "Holcare Health & Wellness Clinic",
    description:
      "EMR and clinic platform for a wellness clinic in Abuja: laboratory services, HBOT, red light and PEMF therapies, patient stories and online appointment booking",
    tech: "Web App",
    link: "https://holcarewellness.com/",
    image: "/projects/holcare.jpg",
  },
  {
    title: "Bioscird",
    description:
      "Biomedical science research and development hub offering hands-on training, research opportunities and industrial attachments in modern laboratories",
    tech: "Web App",
    link: "https://bioscird.com/",
    image: "/projects/bioscird.jpg",
  },
  {
    title: "BizMall Store",
    description:
      "Nigeria's gadget and electronics marketplace for verified UK-used and brand new phones and laptops, with nationwide delivery",
    tech: "Web App",
    link: "https://bizmall.store/",
    image: "/projects/bizmall.jpg",
  },
  {
    title: "Mega Wake Up International",
    description:
      "Website for a Nigerian non-profit empowering communities through education, skills development, sustainable agriculture, healthcare and climate resilience",
    tech: "Next.js",
    link: "https://megawakeup-sigma.vercel.app/",
    image: "/projects/megawakeup.jpg",
  },
  {
    title: "Firax EMR",
    description:
      "Hospital electronic medical records workspace: patient files, appointments, billing, diagnostics, pharmacy and inpatient beds",
    tech: "Next.js",
    link: "https://simplex-himes-emr-replica.vercel.app",
    image: "/projects/firax.jpg",
  },
  {
    title: "Pholdar",
    description:
      "Pharmacy management software with digital patient folders, prescriptions, lab tests and an AI stock assistant",
    tech: "Next.js",
    link: "https://pholder.vercel.app",
    image: "/projects/pholdar.jpg",
  },
  {
    title: "NHIS Certificate Portal",
    description:
      "National Health Insurance Scheme certificate issuance and authenticity verification system",
    tech: "Next.js",
    link: "https://nhis-lake.vercel.app",
    image: "/projects/nhis.jpg",
  },
  {
    title: "NozzleOps",
    description:
      "Multi-tenant fuel station operations: stock, shifts, client accounts and platform administration",
    tech: "Next.js",
    link: "https://nozzleops.vercel.app",
    image: "/projects/nozzleops.jpg",
  },
  {
    title: "HR Platform",
    description:
      "Employee records, onboarding and leave management with self-service portal",
    tech: "Next.js",
    link: "https://hr-platform-henna.vercel.app",
    image: "/projects/hr-platform.jpg",
  },
  {
    title: "Estatery",
    description:
      "Property marketplace to buy, rent or sell, with user admin and listing moderation",
    tech: "Next.js",
    link: "https://ecomm-six-omega.vercel.app",
    image: "/projects/estatery.jpg",
  },
  {
    title: "SkillPath",
    description:
      "Practice app for AI task assessments: preference rating, RLHF feedback and image annotation",
    tech: "Next.js",
    link: "https://skillpath-vert.vercel.app",
    image: "/projects/skillpath.jpg",
  },
  {
    title: "University of Abuja Result Archive",
    description:
      "System for securely archiving, searching and retrieving examination results",
    tech: "Next.js",
    link: "https://uniabuja-result-archive.vercel.app",
    image: "/projects/uniabuja.jpg",
  },
  {
    title: "Lane Rush",
    description:
      "MiniPay 3D quiz runner on Celo with cUSD stakes and on-chain payouts",
    tech: "Next.js",
    link: "https://lanerush.vercel.app",
    image: "/projects/lanerush.jpg",
  },
  {
    title: "Claimd",
    description:
      "MiniPay-native public figure feed where people post sourced claims and earn from likes",
    tech: "Next.js",
    link: "https://claimd-nu.vercel.app",
    image: "/projects/claimd.jpg",
  },
  {
    title: "TaiChat",
    description:
      "Safe, fun messaging app for kids aged 8 to 15: end-to-end encrypted chats, calls and voice notes, parent-approved friends, smart content filters and gamified chats",
    tech: "Web App",
    link: "https://taichat.africa/",
    image: "/projects/taichat.jpg",
    iosLink: "https://apps.apple.com/us/app/taichat/id6786412566",
    androidLink: "https://play.google.com/store/apps/details?id=com.taichat.app",
  },
  {
    title: "ProConnect",
    description:
      "Verified on-demand artisans and emergency services in Nigeria: vetted plumbers, electricians, mechanics and cleaners dispatched to you, with secure escrow and transparent pricing",
    tech: "Web App",
    link: "https://proconnect.venmiga.com/",
    image: "/projects/proconnect-web.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.proconnect.frontend",
  },
  {
    title: "ProConnect NG (Mobile App)",
    description:
      "Marketplace app that connects you with trusted, verified professionals nearby, such as mechanics, plumbers, electricians and cleaners, with ratings, reviews and easy booking",
    tech: "iOS & Android",
    link: "https://apps.apple.com/us/app/proconnect-ng/id6801954108",
    image: "/projects/proconnect.jpg",
    isIcon: true,
    androidLink: "https://play.google.com/store/apps/details?id=com.proconnect.frontend",
  },
  {
    title: "Legwork",
    description:
      "Social reward map that pays you in Naira to check in at local shops and discover hidden gems, with digital loyalty cards and bounties for business owners",
    tech: "iOS App",
    link: "https://apps.apple.com/us/app/legwork/id6760600594",
    image: "/projects/legwork.jpg",
    isIcon: true,
  },
  {
    title: "BizToolz",
    description:
      "All-in-one operating system for African entrepreneurs: turn a social profile into a live store, track sales in a performance dashboard and take orders",
    tech: "iOS App",
    link: "https://apps.apple.com/us/app/biztoolz/id6760596714",
    image: "/projects/biztoolz.jpg",
    isIcon: true,
  },
  {
    title: "Bizmall (iOS App)",
    description:
      "Mobile shopping companion for the BizMall store, with a wide product range, secure checkout and a fast, clean interface",
    tech: "iOS App",
    link: "https://apps.apple.com/us/app/bizmall/id6759727057",
    image: "/projects/bizmall-app.jpg",
    isIcon: true,
  },
  {
    title: "Venmi",
    description:
      "No-code, drag-and-drop website builder for business owners and individuals, with responsive templates and e-commerce and blog support",
    tech: "iOS App",
    link: "https://apps.apple.com/us/app/venmi/id6483366830",
    image: "/projects/venmi.jpg",
    isIcon: true,
  },
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
  "Next.js": "bg-zinc-700",
  "Web App": "bg-emerald-500",
  "iOS App": "bg-sky-500",
  "iOS & Android": "bg-sky-500",
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
                {p.image && (
                  <Link
                    href={p.link}
                    className="block mb-4 overflow-hidden rounded-md border"
                  >
                    <Image
                      src={p.image}
                      alt={`${p.title} screenshot`}
                      width={p.isIcon ? 256 : 960}
                      height={p.isIcon ? 256 : 600}
                      className={cn(
                        "w-full aspect-video",
                        p.isIcon
                          ? "object-contain bg-muted p-4"
                          : "object-cover object-top"
                      )}
                    />
                  </Link>
                )}
                <Link
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
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
                  <div className="flex items-center gap-3">
                    <Link
                      href={p.link}
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      {p.tech.includes("iOS") ? "App Store" : "View Project"}
                      <ExternalLink className="inline-block size-3" />
                    </Link>
                    {p.iosLink && (
                      <Link
                        href={p.iosLink}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        iOS
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                    {p.androidLink && (
                      <Link
                        href={p.androidLink}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        Android
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
