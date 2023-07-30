import { getStorageUrl } from "@/src/aniflix_api.ts";

export function AniflixImage({ filename }: { filename: string }) {
  return (
    <img
      src={getStorageUrl(filename)}
      alt="The cover image of the loaded series from Aniflix"
    />
  );
}
