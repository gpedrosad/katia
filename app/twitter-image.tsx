import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE, OgImageUi } from "@/lib/og-image-ui";

export const alt = "Katia Domínguez - Fonoaudióloga en Chillán";
export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageUi />, { ...size });
}
