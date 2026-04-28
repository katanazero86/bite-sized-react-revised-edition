import {Laugh} from "lucide-react";
import type {IconProps} from "./icon-types.ts";

export default function VeryGoodIcon({color = '#292929', strokeWidth = 1.5, size = 16}: IconProps) {
    return (
        <Laugh color={color} strokeWidth={strokeWidth} size={size}/>
    )
}