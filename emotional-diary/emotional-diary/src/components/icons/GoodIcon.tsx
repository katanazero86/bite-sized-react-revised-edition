import {Smile} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function GoodIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <Smile color={color} strokeWidth={strokeWidth} size={size} />
    )
}