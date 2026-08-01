"use client";
import { useTheme } from "next-themes";import { Moon, Sun } from "lucide-react";import { useSyncExternalStore } from "react";
const subscribe=()=>()=>{};
export function ThemeToggle(){const {resolvedTheme,setTheme}=useTheme();const ready=useSyncExternalStore(subscribe,()=>true,()=>false);return <button className="focus-ring grid size-9 place-items-center rounded-lg border hairline bg-[var(--raised)] transition-colors hover:bg-[var(--surface)]" onClick={()=>setTheme(resolvedTheme==="dark"?"light":"dark")} aria-label="Toggle color theme">{ready&&resolvedTheme==="dark"?<Sun size={15}/>:<Moon size={15}/>}</button>}
