import {Angry} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function VeryBadIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <Angry color={color} strokeWidth={strokeWidth} size={size} />
    )
}