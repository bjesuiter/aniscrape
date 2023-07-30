import { Button } from "@/components/Button.tsx";

export default function ClearCacheButton() {
  const clear = async () => {
    const res = await fetch(`/api/clear-cache`);
    if (res.status >= 200 && res.status < 300) {
      alert(`clear cache successful!`);
    } else {
      alert(`Error while clearing cache! => See console!`);
      console.error(`Error while clearing cache!`, res);
    }
  };

  return <Button onClick={clear}>Clear Cache</Button>;
}
