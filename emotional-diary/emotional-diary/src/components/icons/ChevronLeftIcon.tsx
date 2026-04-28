import {ChevronLeft} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function ChevronLeftIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <ChevronLeft size={size} color={color} strokeWidth={strokeWidth} />
    )
}