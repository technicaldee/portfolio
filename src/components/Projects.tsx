import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Site = {
  title: string;
  description: string;
  url: string;
  image: string;
};

type App = {
  title: string;
  description: string;
  icon?: string;
  ios?: string;
  android?: string;
};

const sites: Site[] = [
  {
    title: "Holcare Health & Wellness Clinic",
    description: "EMR and clinic platform with lab services and online booking.",
    url: "https://holcarewellness.com/",
    image: "/projects/holcare.jpg",
  },
  {
    title: "Firax EMR",
    description:
      "Hospital records workspace: patients, appointments, billing, pharmacy and beds.",
    url: "https://simplex-himes-emr-replica.vercel.app",
    image: "/projects/firax.jpg",
  },
  {
    title: "Pholdar",
    description:
      "Pharmacy management with digital patient folders and an AI stock assistant.",
    url: "https://pholder.vercel.app",
    image: "/projects/pholdar.jpg",
  },
  {
    title: "NHIS Certificate Portal",
    description: "Health insurance certificate issuance and verification.",
    url: "https://nhis-lake.vercel.app",
    image: "/projects/nhis.jpg",
  },
  {
    title: "Bioscird",
    description:
      "Biomedical science training, research and industrial attachments.",
    url: "https://bioscird.com/",
    image: "/projects/bioscird.jpg",
  },
  {
    title: "BizMall Store",
    description: "Nigeria's marketplace for phones, laptops and electronics.",
    url: "https://bizmall.store/",
    image: "/projects/bizmall.jpg",
  },
  {
    title: "TaiChat",
    description: "Safe, encrypted messaging for kids aged 8 to 15.",
    url: "https://taichat.africa/",
    image: "/projects/taichat.jpg",
  },
  {
    title: "ProConnect",
    description: "Verified artisans and emergency services across Nigeria.",
    url: "https://proconnect.venmiga.com/",
    image: "/projects/proconnect-web.jpg",
  },
  {
    title: "Mega Wake Up International",
    description: "Non-profit empowering communities across Nigeria.",
    url: "https://megawakeup-sigma.vercel.app/",
    image: "/projects/megawakeup.jpg",
  },
  {
    title: "NozzleOps",
    description: "Fuel station operations: stock, shifts and client accounts.",
    url: "https://nozzleops.vercel.app",
    image: "/projects/nozzleops.jpg",
  },
  {
    title: "HR Platform",
    description: "Employee records, onboarding and leave management.",
    url: "https://hr-platform-henna.vercel.app",
    image: "/projects/hr-platform.jpg",
  },
  {
    title: "Estatery",
    description: "Property marketplace to buy, rent or sell homes.",
    url: "https://ecomm-six-omega.vercel.app",
    image: "/projects/estatery.jpg",
  },
  {
    title: "SkillPath",
    description: "Practice AI task assessments and annotation work.",
    url: "https://skillpath-vert.vercel.app",
    image: "/projects/skillpath.jpg",
  },
  {
    title: "University of Abuja Result Archive",
    description: "Secure archiving and retrieval of examination results.",
    url: "https://uniabuja-result-archive.vercel.app",
    image: "/projects/uniabuja.jpg",
  },
  {
    title: "Lane Rush",
    description: "MiniPay 3D quiz runner on Celo with on-chain payouts.",
    url: "https://lanerush.vercel.app",
    image: "/projects/lanerush.jpg",
  },
  {
    title: "Claimd",
    description: "MiniPay feed where sourced claims earn from likes.",
    url: "https://claimd-nu.vercel.app",
    image: "/projects/claimd.jpg",
  },
];

const apps: App[] = [
  {
    title: "TaiChat",
    description: "Safe messaging for kids, with parent-approved friends.",
    icon: "/projects/taichat-app.jpg",
    ios: "https://apps.apple.com/us/app/taichat/id6786412566",
    android: "https://play.google.com/store/apps/details?id=com.taichat.app",
  },
  {
    title: "ProConnect NG",
    description: "Book trusted, verified professionals near you.",
    icon: "/projects/proconnect.jpg",
    ios: "https://apps.apple.com/us/app/proconnect-ng/id6801954108",
    android:
      "https://play.google.com/store/apps/details?id=com.proconnect.frontend",
  },
  {
    title: "Legwork",
    description: "A social map that pays you to discover local spots.",
    icon: "/projects/legwork.jpg",
    ios: "https://apps.apple.com/us/app/legwork/id6760600594",
  },
  {
    title: "BizToolz",
    description: "Turn your social profile into a live store.",
    icon: "/projects/biztoolz.jpg",
    ios: "https://apps.apple.com/us/app/biztoolz/id6760596714",
  },
  {
    title: "Bizmall",
    description: "Shop phones, laptops and more from the BizMall store.",
    icon: "/projects/bizmall-app.jpg",
    ios: "https://apps.apple.com/us/app/bizmall/id6759727057",
  },
  {
    title: "Venmi",
    description: "No-code, drag-and-drop website builder.",
    icon: "/projects/venmi.jpg",
    ios: "https://apps.apple.com/us/app/venmi/id6483366830",
  },
  {
    title: "Unipapers",
    description: "Past questions and materials for university students.",
    icon: "/projects/unipapers.jpg",
    ios: "https://apps.apple.com/id/app/unipapers/id6449260033",
  },
  {
    title: "ClassOf",
    description: "A student-centric social app.",
    icon: "/projects/classof.jpg",
    ios: "https://apps.apple.com/id/app/classof/id6451405254",
  },
  {
    title: "Sayver",
    description: "An interactive saving app.",
    icon: "/projects/sayver.jpg",
    ios: "https://apps.apple.com/id/app/sayver/id6473125567",
  },
  {
    title: "Flurstack",
    description: "Fintech app.",
    ios: "https://apps.apple.com/id/app/flurstack/id6621275771",
  },
];

const storeLink =
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-accent";

const hostOf = (url: string) => new URL(url).host.replace(/^www\./, "");

export const Projects = () => {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-1">Websites</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Web platforms I have built and shipped.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {sites.map((s) => (
          <a
            key={s.url}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-md"
          >
            <Image
              src={s.image}
              alt={`${s.title} screenshot`}
              width={960}
              height={600}
              className="aspect-[16/10] w-full border-b object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-semibold leading-snug">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 pt-1 text-xs text-muted-foreground group-hover:text-foreground">
                {hostOf(s.url)}
                <ArrowUpRight className="size-3" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-1">Mobile Apps</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Apps published on the App Store and Google Play.
      </p>
      <ul className="divide-y rounded-xl border bg-card">
        {apps.map((a) => (
          <li
            key={a.title}
            className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-4">
              {a.icon ? (
                <Image
                  src={a.icon}
                  alt={`${a.title} icon`}
                  width={56}
                  height={56}
                  className="size-14 shrink-0 rounded-xl border"
                />
              ) : (
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border bg-muted text-lg font-semibold">
                  {a.title[0]}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="font-semibold leading-snug">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2 pl-[4.5rem] sm:pl-0">
              {a.ios && (
                <a
                  href={a.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={storeLink}
                >
                  App Store
                  <ArrowUpRight className="size-3" />
                </a>
              )}
              {a.android && (
                <a
                  href={a.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={storeLink}
                >
                  Google Play
                  <ArrowUpRight className="size-3" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
