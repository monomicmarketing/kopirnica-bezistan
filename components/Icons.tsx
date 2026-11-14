import type { SVGProps } from "react";
type Props = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };
function Icon({children,size=24,strokeWidth=2,...props}: Props & {children:React.ReactNode}) { return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg> }
export const ArrowUpRight=(p:Props)=><Icon {...p}><path d="M7 17 17 7M7 7h10v10"/></Icon>;
export const ArrowDownRight=(p:Props)=><Icon {...p}><path d="m7 7 10 10M17 7v10H7"/></Icon>;
export const MapPin=(p:Props)=><Icon {...p}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
export const Phone=(p:Props)=><Icon {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-17.7-17.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7.4 10a16 16 0 0 0 6.6 6.6l1.6-1.6a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z"/></Icon>;
export const Clock3=(p:Props)=><Icon {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></Icon>;
export const FileText=(p:Props)=><Icon {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></Icon>;
export const Layers3=(p:Props)=><Icon {...p}><path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/></Icon>;
export const ScanLine=(p:Props)=><Icon {...p}><path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3M3 12h18"/></Icon>;

