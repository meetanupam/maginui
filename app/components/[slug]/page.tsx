import type {Metadata} from "next";import {notFound} from "next/navigation";import {ComponentDoc} from "@/components/component-doc";import {getComponent,registry} from "@/registry/components";
export function generateStaticParams(){return registry.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=getComponent(slug);return item?{title:item.name,description:item.description}:{} }
export default async function ComponentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=getComponent(slug);if(!item)notFound();const related=registry.filter(x=>x.slug!==item.slug).slice(0,3);return <ComponentDoc item={item} related={related}/>}
