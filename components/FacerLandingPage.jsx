import React, { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck, ScanFace, QrCode, FileCheck2, Play, ArrowRight } from "lucide-react";

const VIDEO_GROUPS = [
  {
    id: "main",
    eyebrow: "Campaña principal",
    title: "Acceso inteligente en segundos",
    description:
      "Videos cortos para comunicar seguridad por capas: identidad documental, reconocimiento facial y QR seguro.",
    videos: [
      {
        title: "La seguridad empieza en la puerta",
        slogan: "FaceR: la seguridad empieza en la puerta.",
        src: "/videos/facer-01-seguridad-puerta.mp4",
        poster: "/posters/facer-01.png",
      },
      {
        title: "Saber quién entra",
        slogan: "No basta con abrir. Hay que saber quién entra.",
        src: "/videos/facer-02-saber-quien-entra.mp4",
        poster: "/posters/Facer-02.png",
      },
      {
        title: "Del QR al rostro",
        slogan: "Del QR al reconocimiento facial.",
        src: "/videos/facer-03-qr-rostro.mp4",
        poster: "/posters/facer-03.png",
        fit: "contain",
      },
      {
        title: "Validación rápida",
        slogan: "Identidad validada en segundos.",
        src: "/videos/facer-04-identidad-segundos.mp4",
        poster: "/posters/facer-04.png",
      },
      {
        title: "Menos filas",
        slogan: "Menos filas. Más control.",
        src: "/videos/facer-05-menos-filas.mp4",
        poster: "/posters/facer-05.png",
      },
    ],
  },
  {
    id: "intelligence",
    eyebrow: "Inteligencia institucional",
    title: "Cada acceso se convierte en información",
    description:
      "Una segunda línea de videos puede comunicar trazabilidad, datos operativos y toma de decisiones.",
    videos: [
      {
        title: "Cada acceso deja una huella",
        slogan: "Cada acceso deja una huella.",
        src: "/videos/facer-03-qr-rostro.mp4",
        poster: "/posters/facer-03.png",
        fit: "contain",
      },
      {
        title: "Trazabilidad",
        slogan: "Tu institución necesita trazabilidad.",
        src: "/videos/facer-04-identidad-segundos.mp4",
        poster: "/posters/facer-04.png",
      },
      {
        title: "Acceso inteligente",
        slogan: "FaceR convierte el acceso en inteligencia.",
        src: "/videos/facer-05-menos-filas.mp4",
        poster: "/posters/facer-05.png",
      },
    ],
  },
];

function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-white/10 shadow-lg shadow-cyan-500/10 backdrop-blur">
        <span className="text-lg font-semibold tracking-tight text-white">FR</span>
      </div>
      <div>
        <div className="text-xl font-semibold tracking-tight text-white">
          F<span className="text-white/85">ace</span>R
        </div>
        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-200/70">by NNI</div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 19.2 6 15.7a7.6 7.6 0 1 1 2.8 2.8z" />
      <path d="M9.2 8.8c.2-.5.4-.6.8-.6h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.6v.6c0 .4-.2.6-.6.8-.6.2-1.4.2-2.5-.2-2.5-.9-4.6-3-5.5-5.5-.4-1.1-.4-1.9-.2-2.5z" />
    </svg>
  );
}

function VideoCard({ video, index }) {
  const ref = useRef(null);
  const [hasError, setHasError] = useState(false);
  const videoFitClass =
    video.fit === "contain"
      ? "object-contain bg-black"
      : "object-cover object-center group-hover:scale-[1.02]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative w-[min(78vw,18rem)] flex-none overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:w-[18rem] lg:w-[17.5rem]"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.55rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">
        {!hasError ? (
          <video
            ref={ref}
            className={`absolute inset-0 h-full w-full max-w-none opacity-95 transition duration-500 ${videoFitClass}`}
            src={video.src}
            poster={video.poster}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-7 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 ring-1 ring-cyan-300/30">
              <Play className="h-7 w-7 text-cyan-200" />
            </div>
            <p className="text-sm font-medium text-white/90">Coloca aquí tu video</p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">{video.src}</p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="rounded-full bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cyan-100 ring-1 ring-white/10 backdrop-blur">FaceR</span>
          <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white ring-1 ring-cyan-200/20 backdrop-blur">9:16</span>
        </div>
      </div>
      <div className="px-2 pb-2 pt-4">
        <h3 className="text-base font-semibold tracking-tight text-white">{video.title}</h3>
        <p className="mt-1 text-sm leading-snug text-white/65">{video.slogan}</p>
      </div>
    </motion.article>
  );
}

function VideoCarousel({ group }) {
  const railRef = useRef(null);

  const scroll = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const amount = rail.clientWidth * 0.86;
    rail.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/70">{group.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{group.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{group.description}</p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => scroll("prev")}
            className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/15"
            aria-label="Video anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("next")}
            className="rounded-full border border-white/10 bg-white/10 p-3 text-white transition hover:bg-white/15"
            aria-label="Video siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {group.videos.map((video, index) => (
          <div key={`${group.id}-${index}`} className="flex-none snap-start">
            <VideoCard video={video} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/10 backdrop-blur">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-200/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

export default function FacerLandingPage() {
  const groups = useMemo(() => VIDEO_GROUPS, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[110px]" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-blue-700/25 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:42px_42px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <BrandLogo />
        <a
          href="https://wa.me/525527088372"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/15 sm:flex"
        >
          Contacto <WhatsAppIcon className="h-4 w-4" />
        </a>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-16 lg:pt-14">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.85)]" />
            Identidad inteligente · Accesos seguros
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            FaceR convierte la entrada institucional en una experiencia inteligente.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Una plataforma visual, segura y escalable para comunicar el valor de FaceR: identidad documental, reconocimiento facial, QR seguro y trazabilidad desde la puerta.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#videos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              Ver videos <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#que-es"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              Qué es FaceR
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[24rem] lg:max-w-[27rem]"
        >
          <div className="absolute -inset-5 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="aspect-[9/16] overflow-hidden rounded-[1.9rem] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-cyan-950 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-100">Live access</span>
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
              </div>
              <div className="mt-16 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <FileCheck2 className="mb-3 h-6 w-6 text-cyan-200" />
                  <p className="text-sm font-semibold">Identidad documental</p>
                  <p className="mt-1 text-xs text-slate-400">Documento verificado</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <ScanFace className="mb-3 h-6 w-6 text-cyan-200" />
                  <p className="text-sm font-semibold">Reconocimiento facial</p>
                  <p className="mt-1 text-xs text-slate-400">Rostro validado</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                  <QrCode className="mb-3 h-6 w-6 text-cyan-200" />
                  <p className="text-sm font-semibold">QR seguro</p>
                  <p className="mt-1 text-xs text-slate-400">Acceso aprobado</p>
                </div>
              </div>
              <div className="mt-10 rounded-2xl bg-cyan-200 px-4 py-3 text-center text-sm font-semibold text-slate-950">
                Seguridad por capas
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="que-es" className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Feature icon={FileCheck2} title="Identidad documental" text="Validación de documentos o credenciales para fortalecer el primer filtro de acceso." />
          <Feature icon={ScanFace} title="Reconocimiento facial" text="Confirmación biométrica para reducir suplantaciones y elevar la confianza institucional." />
          <Feature icon={QrCode} title="QR seguro" text="Accesos ágiles, verificables y trazables para usuarios autorizados." />
        </div>
      </section>

      <div id="videos" className="relative z-10">
        {groups.map((group) => (
          <VideoCarousel key={group.id} group={group} />
        ))}
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.10] to-cyan-300/[0.08] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-200/70">Neural Network Initiative</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Haz que cada acceso comunique confianza.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                Esta página puede crecer por campañas: videos de seguridad, trazabilidad, universidades, edificios, empresas, precios e implementación.
              </p>
            </div>
            <a
              href="https://wa.me/525527088372"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Solicitar información <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 sm:px-8">
        <p>Desarrollado por Neural Network Initiative</p>
        <p className="mt-2">fdealbam@nni.ai</p>
      </footer>
    </main>
  );
}
