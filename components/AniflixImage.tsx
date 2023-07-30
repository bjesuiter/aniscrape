export function AniflixImage({ filename }: { filename: string }) {
  const baseURL = "https://www.aniflix.cc/storage/";
  const imgURL = baseURL + filename;

  return (
    <img src={imgURL} alt="The cover image of the loaded series from Aniflix" />
  );
}
