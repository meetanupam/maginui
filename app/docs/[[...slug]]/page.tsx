import {notFound} from "next/navigation";import type {Metadata} from "next";import {DocsShell} from "@/components/docs-shell";import {docs,getDoc} from "@/config/docs";
export function generateStaticParams(){return docs.map(x=>({slug:x.slug?[x.slug]:[]}))}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}):Promise<Metadata>{const p=await params,d=getDoc(p.slug?.join("/")??"");return d?{title:d.title,description:d.description}:{} }
export default async function DocPage({params}:{params:Promise<{slug?:string[]}>}){const p=await params,doc=getDoc(p.slug?.join("/")??"");if(!doc)notFound();return <DocsShell doc={doc}/>}
