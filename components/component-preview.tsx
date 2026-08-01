"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Airplay,
  ArrowUpRight,
  Bell,
  Bluetooth,
  Check,
  ChevronRight,
  Command,
  Globe2,
  Headphones,
  Laptop,
  LogOut,
  Menu,
  Mic,
  MoreHorizontal,
  Music2,
  Pause,
  Play,
  Search,
  Settings2,
  Smartphone,
  Sparkles,
  User,
  Volume2,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import type { ComponentItem } from "@/config/components";

const spring = { type: "spring", stiffness: 420, damping: 32 } as const;

function DynamicIsland() {
  const [mode, setMode] = useState<"idle" | "music" | "alert">("idle");
  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        layout
        transition={spring}
        className="overflow-hidden rounded-[1.35rem] bg-[#11120f] text-white shadow-[0_18px_45px_rgba(0,0,0,.2)]"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {mode === "idle" ? (
            <motion.button
              key="idle"
              onClick={() => setMode("music")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-11 w-28 items-center justify-between px-4"
            >
              <span className="size-2 rounded-full bg-[var(--lime)]" />
              <span className="mono text-[8px] text-white/55">NOW</span>
              <ChevronRight size={13} />
            </motion.button>
          ) : mode === "music" ? (
            <motion.div
              key="music"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-20 w-64 items-center gap-3 p-3"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#9e8cff] to-[#5441d7]">
                <Music2 size={18} />
              </div>
              <button
                onClick={() => setMode("alert")}
                className="min-w-0 flex-1 text-left"
              >
                <small className="block text-[9px] text-white/45">
                  NOW PLAYING
                </small>
                <b className="block truncate text-sm">All the quiet details</b>
                <span className="text-[10px] text-white/55">
                  themaginui radio
                </span>
              </button>
              <Pause size={15} />
            </motion.div>
          ) : (
            <motion.div
              key="alert"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-16 w-72 items-center gap-3 px-4"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[var(--lime)] text-black">
                <Check size={15} />
              </span>
              <button
                onClick={() => setMode("idle")}
                className="flex-1 text-left"
              >
                <b className="block text-xs">Published successfully</b>
                <small className="text-[10px] text-white/50">
                  Tap to return
                </small>
              </button>
              <X size={14} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <span className="mono muted text-[8px] uppercase">
        Tap the island to change context
      </span>
    </div>
  );
}

function CommandOrbit() {
  const [open, setOpen] = useState(false);
  const tools = [Search, Sparkles, Settings2, Bell];
  return (
    <div className="relative grid size-56 place-items-center">
      {tools.map((Icon, index) => {
        const angle = ((-135 + index * 90) * Math.PI) / 180;
        return (
          <motion.button
            key={index}
            aria-label={`Command ${index + 1}`}
            animate={
              open
                ? {
                    x: Math.cos(angle) * 78,
                    y: Math.sin(angle) * 78,
                    opacity: 1,
                    scale: 1,
                  }
                : { x: 0, y: 0, opacity: 0, scale: 0.7 }
            }
            transition={{ ...spring, delay: open ? index * 0.035 : 0 }}
            className="hairline absolute grid size-10 place-items-center rounded-xl border bg-[var(--raised)] shadow-[var(--shadow)]"
          >
            <Icon size={15} />
          </motion.button>
        );
      })}
      <motion.button
        onClick={() => setOpen(!open)}
        animate={{ rotate: open ? 45 : 0 }}
        transition={spring}
        className="relative z-10 grid size-14 place-items-center rounded-2xl bg-[var(--ink)] text-[var(--paper)]"
      >
        <Command size={19} />
      </motion.button>
    </div>
  );
}

function MagneticButton() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, spring),
    sy = useSpring(y, spring);
  return (
    <motion.button
      style={reduced ? undefined : { x: sx, y: sy }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.97 }}
      className="group rounded-xl bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)] shadow-[var(--shadow)]"
    >
      Start creating{" "}
      <motion.span
        className="ml-2 inline-block"
        transition={spring}
        whileHover={{ x: 2 }}
      >
        ↗
      </motion.span>
    </motion.button>
  );
}

function LiquidTabs() {
  const [active, setActive] = useState("Canvas");
  return (
    <div className="hairline flex rounded-xl border bg-[var(--raised)] p-1.5">
      {["Canvas", "Layers", "History"].map((tab) => (
        <button
          onClick={() => setActive(tab)}
          className="relative rounded-lg px-4 py-2 text-xs"
          key={tab}
        >
          {active === tab && (
            <motion.span
              layoutId="liquid-tab"
              transition={spring}
              className="absolute inset-0 rounded-lg bg-[var(--ink)]"
            />
          )}
          <span
            className="relative"
            style={{ color: active === tab ? "var(--paper)" : "var(--muted)" }}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}

function SpatialCard() {
  const px = useMotionValue(50),
    py = useMotionValue(50);
  const glow = useTransform(
    [px, py],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, color-mix(in srgb, var(--violet) 24%, transparent), transparent 52%)`,
  );
  return (
    <motion.div
      onPointerMove={(event) => {
        const r = event.currentTarget.getBoundingClientRect();
        px.set(((event.clientX - r.left) / r.width) * 100);
        py.set(((event.clientY - r.top) / r.height) * 100);
      }}
      className="hairline relative w-60 overflow-hidden rounded-2xl border bg-[var(--raised)] p-5 shadow-[var(--shadow)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glow }}
      />
      <div className="relative">
        <div className="flex justify-between">
          <span className="mono muted text-[8px]">PROJECT / 08</span>
          <MoreHorizontal size={15} />
        </div>
        <div className="mt-16">
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--lime)] text-black">
            <Zap size={17} />
          </span>
          <h3 className="mt-4 text-xl font-medium tracking-[-.035em]">
            A surface with spatial memory.
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

function FocusCommand() {
  const [focus, setFocus] = useState(false);
  return (
    <motion.div
      layout
      transition={spring}
      className={`overflow-hidden rounded-2xl border bg-[var(--raised)] shadow-[var(--shadow)] ${focus ? "w-[82%] border-[var(--violet)]" : "hairline w-[68%]"}`}
    >
      <label className="flex h-13 items-center gap-3 px-4">
        <Search size={15} className="muted" />
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
          placeholder="Ask or run a command..."
        />
        <kbd className="mono muted text-[9px]">⌘K</kbd>
      </label>
      <AnimatePresence>
        {focus && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="hairline border-t p-2"
          >
            {["Create a new canvas", "Search documentation"].map((text, i) => (
              <div
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs hover:bg-[var(--surface)]"
                key={text}
              >
                <span className="mono muted text-[8px]">0{i + 1}</span>
                {text}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MorphDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div className="grid place-items-center">
      <AnimatePresence mode="wait">
        {!open ? (
          <motion.button
            layoutId="morph-shell"
            onClick={() => setOpen(true)}
            className="btn bg-[var(--raised)] text-xs"
          >
            <Play size={14} /> Open project
          </motion.button>
        ) : (
          <motion.div
            layoutId="morph-shell"
            className="hairline w-72 rounded-2xl border bg-[var(--raised)] p-5 shadow-[var(--shadow)]"
          >
            <div className="flex justify-between">
              <span className="mono muted text-[8px]">NEW PROJECT</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X size={15} />
              </button>
            </div>
            <h3 className="mt-10 text-xl font-medium">
              Start with a clear frame.
            </h3>
            <p className="muted mt-2 text-xs leading-5">
              Create a focused workspace with thoughtful defaults.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-5 w-full text-xs"
            >
              Create project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SignalToast() {
  const [items, setItems] = useState(["Build complete", "Preview ready"]);
  return (
    <div className="w-[74%] space-y-2">
      {items.map((item, index) => (
        <motion.button
          layout
          exit={{ opacity: 0, x: 20 }}
          onClick={() =>
            setItems((current) => current.filter((entry) => entry !== item))
          }
          className="hairline flex w-full items-center gap-3 rounded-xl border bg-[var(--raised)] p-3 text-left shadow-[var(--shadow)]"
          key={item}
        >
          <span
            className={`size-2 rounded-full ${index ? "bg-[var(--violet)]" : "bg-[var(--success)]"}`}
          />
          <span className="text-xs">{item}</span>
          <small className="mono muted ml-auto text-[8px]">NOW</small>
        </motion.button>
      ))}
      {!items.length && (
        <button
          onClick={() => setItems(["Build complete", "Preview ready"])}
          className="btn text-xs"
        >
          Replay signals
        </button>
      )}
    </div>
  );
}

function KineticHeading() {
  return (
    <div className="overflow-hidden text-center">
      <div className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl">
        {"MAKE IT FELT".split(" ").map((word, index) => (
          <span className="mr-3 inline-block overflow-hidden" key={word}>
            <motion.span
              className="inline-block"
              initial={{ y: "105%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.09,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 h-px origin-left bg-[var(--ink)]"
      />
    </div>
  );
}

function AdaptiveDock() {
  const [active, setActive] = useState(0);
  const tools = [Search, Sparkles, Mic, Settings2];
  return (
    <div className="hairline flex items-end gap-1 rounded-2xl border bg-[var(--raised)] p-2 shadow-[var(--shadow)]">
      {tools.map((Icon, index) => (
        <motion.button
          onHoverStart={() => setActive(index)}
          onFocus={() => setActive(index)}
          animate={{
            y: active === index ? -5 : 0,
            width: active === index ? 48 : 40,
            height: active === index ? 48 : 40,
          }}
          transition={spring}
          className={`grid place-items-center rounded-xl ${active === index ? "bg-[var(--ink)] text-[var(--paper)]" : "surface"}`}
          key={index}
        >
          <Icon size={16} />
        </motion.button>
      ))}
    </div>
  );
}

function LiquidGlassNavbar() {
  const [active, setActive] = useState("Work"),
    [menu, setMenu] = useState(false);
  return (
    <div className="relative w-[min(92%,520px)]">
      <div className="absolute inset-x-8 -bottom-3 h-8 rounded-full bg-[var(--violet)]/12 blur-2xl" />
      <div className="relative rounded-[1.15rem] border border-white/70 bg-white/55 p-1.5 shadow-[0_16px_40px_rgba(30,35,25,.1),inset_0_1px_0_rgba(255,255,255,.95)] backdrop-blur-2xl dark:border-white/12 dark:bg-[#20211d]/70">
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="flex min-w-0 items-center">
          <b className="shrink-0 px-3 text-xs tracking-[-.03em]">themaginui</b>
          <div className="mx-auto hidden sm:flex">
            {["Work", "Explore", "About"].map((label) => (
              <button
                onClick={() => setActive(label)}
                aria-current={active === label ? "page" : undefined}
                className="relative rounded-lg px-3 py-2 text-[10px]"
                key={label}
              >
                {active === label && (
                  <motion.span
                    layoutId="glass-nav"
                    className="absolute inset-0 rounded-lg border border-black/5 bg-white/75 shadow-sm dark:border-white/10 dark:bg-white/10"
                    transition={spring}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="Toggle navigation"
            className="ml-auto grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--ink)] text-[var(--paper)] sm:hidden"
          >
            {menu ? <X size={14} /> : <Menu size={14} />}
          </button>
          <button className="ml-2 hidden h-9 shrink-0 items-center gap-1.5 rounded-xl bg-[var(--ink)] px-3 text-[10px] text-[var(--paper)] sm:flex">
            Get started <ArrowUpRight size={12} />
          </button>
        </div>
        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden sm:hidden"
            >
              <div className="mt-1 grid gap-1 border-t border-black/5 pt-1 dark:border-white/10">
                {["Work", "Explore", "About"].map((label) => (
                  <button
                    onClick={() => {
                      setActive(label);
                      setMenu(false);
                    }}
                    className={`rounded-lg px-3 py-2 text-left text-xs ${active === label ? "bg-white/75 dark:bg-white/10" : ""}`}
                    key={label}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FloatingHeader() {
  const [compact, setCompact] = useState(false);
  return (
    <div className="flex flex-col items-center gap-5">
      <motion.div
        layout
        transition={spring}
        className={`hairline flex items-center border bg-[var(--raised)] shadow-[var(--shadow)] ${compact ? "w-64 rounded-full p-1.5" : "w-80 rounded-xl p-3"}`}
      >
        <b className="px-2 text-xs">themaginui</b>
        <div className="ml-auto flex items-center gap-1">
          {!compact && (
            <span className="muted mr-2 text-[10px]">Selected project</span>
          )}
          <button
            onClick={() => setCompact(!compact)}
            className="surface grid size-8 place-items-center rounded-full"
          >
            <Menu size={14} />
          </button>
        </div>
      </motion.div>
      <span className="mono muted text-[8px] uppercase">
        Tap menu to condense
      </span>
    </div>
  );
}

function EditorialFooter() {
  return (
    <div className="hairline w-[84%] overflow-hidden rounded-xl border bg-[var(--raised)]">
      <div className="grid grid-cols-[1.3fr_1fr] gap-6 p-5">
        <div>
          <b className="text-lg tracking-[-.04em]">themaginui</b>
          <p className="muted mt-2 max-w-36 text-[10px] leading-4">
            Interfaces made with care and clear intent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-[9px]">
          <div className="space-y-2">
            <b className="muted block">PRODUCT</b>
            <span className="block">Components</span>
            <span className="block">Docs</span>
          </div>
          <div className="space-y-2">
            <b className="muted block">SOCIAL</b>
            <span className="block">GitHub ↗</span>
            <span className="block">Discord ↗</span>
          </div>
        </div>
      </div>
      <div className="hairline mono muted flex justify-between border-t px-5 py-3 text-[7px] uppercase">
        <span>© themaginui</span>
        <span>Made for the web</span>
      </div>
    </div>
  );
}

function PrismAction() {
  const [pressed, setPressed] = useState(false);
  return (
    <motion.button
      onTapStart={() => setPressed(true)}
      onTap={() => setPressed(false)}
      onTapCancel={() => setPressed(false)}
      animate={{ scale: pressed ? 0.97 : 1 }}
      transition={spring}
      className="relative rounded-xl bg-gradient-to-r from-[#6f5cff] via-[#9a74ff] to-[#d67cc2] p-px shadow-[0_14px_35px_rgba(98,84,217,.25)]"
    >
      <span className="flex items-center gap-3 rounded-[11px] bg-[#181916] px-6 py-3 text-sm font-medium text-white">
        Create something <Sparkles size={14} />
      </span>
      <motion.i
        className="absolute inset-y-1 w-10 rounded-full bg-white/20 blur-lg"
        animate={{ x: [0, 130, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

function LiquidGlassCard() {
  const x = useMotionValue(50),
    y = useMotionValue(25);
  const light = useTransform(
    [x, y],
    ([a, b]) =>
      `radial-gradient(circle at ${a}% ${b}%, rgba(255,255,255,.88), rgba(255,255,255,.12) 34%, transparent 64%)`,
  );
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#d8d4ff] via-[#eef2dc] to-[#c8e8e8] p-7">
      <div className="absolute -top-12 -right-10 size-36 rounded-full bg-white/55 blur-2xl" />
      <motion.div
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          x.set(((e.clientX - r.left) / r.width) * 100);
          y.set(((e.clientY - r.top) / r.height) * 100);
        }}
        className="relative w-60 overflow-hidden rounded-[1.35rem] border border-white/80 bg-white/42 p-5 text-[#20211d] shadow-[0_22px_48px_rgba(42,46,36,.13),inset_0_1px_0_white] backdrop-blur-2xl"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-55"
          style={{ background: light }}
        />
        <div className="pointer-events-none absolute inset-[1px] rounded-[1.25rem] border border-white/35" />
        <div className="relative">
          <div className="flex justify-between">
            <Globe2 size={17} />
            <span className="text-[9px] font-medium text-black/50">
              GLOBAL · 24
            </span>
          </div>
          <p className="mt-16 text-xl font-semibold tracking-[-.04em]">
            Clarity through layered light.
          </p>
          <span className="mt-3 block text-[10px] text-black/55">
            Move across the surface
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function GlassCommandBar() {
  const [value, setValue] = useState("");
  return (
    <div className="relative w-[80%] rounded-2xl border border-white/60 bg-white/40 p-2 shadow-[0_18px_45px_rgba(25,28,20,.12),inset_0_1px_0_white] backdrop-blur-xl dark:border-white/10 dark:bg-white/8">
      <label className="flex items-center gap-3 px-2">
        <Search size={15} />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type a command..."
          className="h-11 min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
        <kbd className="mono muted text-[9px]">⌘K</kbd>
      </label>
      <AnimatePresence>
        {value && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/50 pt-1"
          >
            <button className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs hover:bg-white/40">
              <Sparkles size={13} />
              Create “{value}”<ChevronRight className="ml-auto" size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GlassToggle() {
  const [on, setOn] = useState(true);
  return (
    <button
      onClick={() => setOn(!on)}
      aria-pressed={on}
      className="flex items-center gap-4"
    >
      <motion.span
        className="relative h-10 w-19 rounded-full border border-white/70 bg-white/35 shadow-[inset_0_1px_0_white,0_10px_25px_rgba(30,34,25,.12)] backdrop-blur-xl"
        animate={{
          backgroundColor: on ? "rgba(201,255,74,.55)" : "rgba(255,255,255,.3)",
        }}
      >
        <motion.i
          animate={{ x: on ? 38 : 3 }}
          transition={spring}
          className="absolute top-1 grid size-8 place-items-center rounded-full border border-white/80 bg-white/75 shadow-md"
        >
          <Zap size={12} />
        </motion.i>
      </motion.span>
      <span className="text-sm font-medium">{on ? "Active" : "Paused"}</span>
    </button>
  );
}

function GlassProfileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-full border border-white/70 bg-white/40 p-1.5 pr-4 shadow-[var(--shadow)] backdrop-blur-xl"
      >
        <span className="grid size-9 place-items-center rounded-full bg-[var(--violet)] text-white">
          <User size={15} />
        </span>
        <span className="text-xs font-medium">Mira Chen</span>
        <ChevronRight className={open ? "rotate-90" : ""} size={13} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -4 }}
            transition={spring}
            className="absolute right-0 z-10 w-52 rounded-2xl border border-white/60 bg-white/55 p-2 shadow-[0_20px_50px_rgba(25,28,20,.15)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/40"
          >
            <div className="muted border-b border-black/8 px-3 py-2 text-[10px]">
              mira@example.com
            </div>
            <button className="mt-1 flex w-full gap-2 rounded-lg px-3 py-2 text-xs hover:bg-white/50">
              <Settings2 size={13} />
              Account settings
            </button>
            <button className="flex w-full gap-2 rounded-lg px-3 py-2 text-xs text-[var(--danger)] hover:bg-white/50">
              <LogOut size={13} />
              Sign out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LiveActivity() {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.button
      layout
      onClick={() => setExpanded(!expanded)}
      transition={spring}
      className={`overflow-hidden rounded-2xl bg-[#151613] p-3 text-left text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] ${expanded ? "w-72" : "w-52"}`}
    >
      <motion.div layout className="flex items-center gap-3">
        <span className="relative grid size-10 shrink-0 place-items-center rounded-xl bg-[#ff6b4a]">
          <span className="absolute inset-0 animate-ping rounded-xl bg-[#ff6b4a]/25" />
          <Zap size={16} />
        </span>
        <span className="min-w-0 flex-1">
          <small className="block text-[9px] text-white/45">DELIVERY</small>
          <b className="block truncate text-xs">Arriving in 8 min</b>
        </span>
        <span className="text-[11px] text-white/55">8:42</span>
      </motion.div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.i
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                className="block h-full rounded-full bg-[#ff6b4a]"
              />
            </div>
            <div className="mt-3 flex justify-between text-[9px] text-white/45">
              <span>Picked up</span>
              <span>Nearby</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function ControlCenter() {
  const [wifi, setWifi] = useState(true),
    [bluetooth, setBluetooth] = useState(false);
  return (
    <div className="grid w-64 grid-cols-2 gap-2 rounded-[1.4rem] border border-white/60 bg-white/45 p-3 shadow-[0_22px_55px_rgba(30,35,25,.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/8">
      <button
        onClick={() => setWifi(!wifi)}
        className={`flex h-20 flex-col justify-between rounded-2xl p-3 text-left transition-colors ${wifi ? "bg-[#3578f6] text-white" : "bg-white/50 dark:bg-white/8"}`}
      >
        <Wifi size={17} />
        <span className="text-[10px] font-medium">
          Wi-Fi
          <br />
          <small className="opacity-60">{wifi ? "Home" : "Off"}</small>
        </span>
      </button>
      <button
        onClick={() => setBluetooth(!bluetooth)}
        className={`flex h-20 flex-col justify-between rounded-2xl p-3 text-left transition-colors ${bluetooth ? "bg-[#3578f6] text-white" : "bg-white/50 dark:bg-white/8"}`}
      >
        <Bluetooth size={17} />
        <span className="text-[10px] font-medium">
          Bluetooth
          <br />
          <small className="opacity-60">{bluetooth ? "On" : "Off"}</small>
        </span>
      </button>
      <label className="col-span-2 flex items-center gap-3 rounded-2xl bg-white/50 p-3 dark:bg-white/8">
        <Volume2 size={15} />
        <input
          type="range"
          defaultValue="65"
          className="min-w-0 flex-1 accent-[var(--ink)]"
        />
      </label>
    </div>
  );
}

function OutputPicker() {
  const [active, setActive] = useState("Headphones");
  const outputs = [
    ["This laptop", Laptop],
    ["Headphones", Headphones],
    ["Phone", Smartphone],
  ] as const;
  return (
    <div className="hairline w-64 rounded-2xl border bg-[var(--raised)] p-2 shadow-[var(--shadow)]">
      <div className="flex items-center gap-2 px-3 py-2">
        <Airplay size={15} />
        <b className="text-xs">Play audio on</b>
      </div>
      {outputs.map(([label, Icon]) => (
        <button
          onClick={() => setActive(label)}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-[var(--surface)]"
          key={label}
        >
          <Icon size={15} />
          <span className="text-xs">{label}</span>
          {active === label && (
            <motion.span
              layoutId="output-check"
              className="ml-auto grid size-5 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)]"
            >
              <Check size={11} />
            </motion.span>
          )}
        </button>
      ))}
    </div>
  );
}

function GlassSegmentedControl() {
  const [active, setActive] = useState("Day");
  return (
    <div className="flex rounded-2xl border border-white/70 bg-white/38 p-1.5 shadow-[inset_0_1px_0_white,0_14px_35px_rgba(25,28,20,.1)] backdrop-blur-xl dark:border-white/10 dark:bg-white/8">
      {["Day", "Week", "Month"].map((label) => (
        <button
          onClick={() => setActive(label)}
          className="relative rounded-xl px-5 py-2.5 text-xs"
          key={label}
        >
          {active === label && (
            <motion.span
              layoutId="glass-segment"
              transition={spring}
              className="absolute inset-0 rounded-xl border border-white/80 bg-white/75 shadow-sm dark:border-white/10 dark:bg-white/12"
            />
          )}
          <span className="relative">{label}</span>
        </button>
      ))}
    </div>
  );
}

function GlassSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex h-64 w-[82%] items-end justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#ddd8ff] to-[#d5ece5] p-4">
      <button
        onClick={() => setOpen(true)}
        className="btn bg-white/65 text-xs text-black backdrop-blur-xl"
      >
        Open controls
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close sheet"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/8"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={spring}
              className="absolute inset-x-2 bottom-2 rounded-[1.4rem] border border-white/75 bg-white/60 p-4 text-black shadow-[0_20px_50px_rgba(25,28,20,.18)] backdrop-blur-2xl"
            >
              <div className="mx-auto mb-4 h-1 w-9 rounded-full bg-black/15" />
              <div className="flex items-center justify-between">
                <div>
                  <b className="block text-sm">Scene controls</b>
                  <small className="text-black/50">Living room</small>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="grid size-8 place-items-center rounded-full bg-black/7"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Relax", "Focus", "Off"].map((x) => (
                  <button
                    className="rounded-xl bg-white/55 py-3 text-[10px]"
                    key={x}
                  >
                    {x}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MediaCapsule() {
  const [playing, setPlaying] = useState(true),
    [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      layout
      transition={spring}
      className={`rounded-[1.35rem] bg-[#171815] p-3 text-white shadow-[0_20px_45px_rgba(0,0,0,.2)] ${expanded ? "w-72" : "w-56"}`}
    >
      <div className="flex items-center gap-3">
        <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ff8f70] to-[#7157dd]">
          <Music2 size={17} />
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="min-w-0 flex-1 text-left"
        >
          <b className="block truncate text-xs">Soft Architecture</b>
          <small className="text-[10px] text-white/45">Mira Studio</small>
        </button>
        <button
          onClick={() => setPlaying(!playing)}
          className="grid size-8 place-items-center rounded-full bg-white/10"
        >
          {playing ? <Pause size={13} /> : <Play size={13} />}
        </button>
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 h-1 rounded-full bg-white/12">
              <motion.div
                animate={{ width: playing ? "68%" : "42%" }}
                className="h-full rounded-full bg-white"
              />
            </div>
            <div className="mt-2 flex justify-between text-[8px] text-white/35">
              <span>1:42</span>
              <span>3:08</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const previews: Record<string, () => React.ReactNode> = {
  "dynamic-island": DynamicIsland,
  "live-activity": LiveActivity,
  "control-center": ControlCenter,
  "airplay-picker": OutputPicker,
  "glass-segmented-control": GlassSegmentedControl,
  "glass-sheet": GlassSheet,
  "media-capsule": MediaCapsule,
  "liquid-glass-navbar": LiquidGlassNavbar,
  "floating-header": FloatingHeader,
  "editorial-footer": EditorialFooter,
  "command-orbit": CommandOrbit,
  "magnetic-button": MagneticButton,
  "prism-action": PrismAction,
  "liquid-tabs": LiquidTabs,
  "spatial-card": SpatialCard,
  "liquid-glass-card": LiquidGlassCard,
  "glass-command-bar": GlassCommandBar,
  "glass-toggle": GlassToggle,
  "glass-profile-menu": GlassProfileMenu,
  "focus-command": FocusCommand,
  "morph-dialog": MorphDialog,
  "signal-toast": SignalToast,
  "kinetic-heading": KineticHeading,
  "adaptive-dock": AdaptiveDock,
};

export function ComponentPreview({
  item,
  compact = false,
}: {
  item: ComponentItem;
  compact?: boolean;
}) {
  const Preview = previews[item.slug] ?? MagneticButton;
  return (
    <div
      className={`preview-grid relative grid w-full place-items-center overflow-hidden ${compact ? "h-72" : "min-h-[480px]"}`}
    >
      <Preview />
      <span className="mono muted absolute top-4 left-4 text-[8px] uppercase">
        {item.category} / {item.name}
      </span>
      <span className="mono muted absolute right-4 bottom-4 text-[8px] uppercase">
        Interactive preview
      </span>
    </div>
  );
}
