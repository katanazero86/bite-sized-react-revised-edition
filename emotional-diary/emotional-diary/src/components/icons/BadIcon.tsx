import type {IconProps} from "./icon-types.ts";
import {Frown} from "lucide-react";

export default function BadIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <Frown size={size} color={color} strokeWidth={strokeWidth} />
    )
}