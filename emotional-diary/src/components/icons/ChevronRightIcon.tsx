import {ChevronRight} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function ChevronRightIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <ChevronRight size={size} color={color} strokeWidth={strokeWidth} />
    )
}