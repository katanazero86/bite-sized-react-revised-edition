import {Meh} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function NormalIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <Meh size={size} color={color} strokeWidth={strokeWidth} />
    )
}