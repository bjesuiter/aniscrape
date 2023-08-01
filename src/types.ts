export type UiEpisode = {
  seasonNumber: number;
  episodeNumber: number;
  name: string;
  hosterName: string;
  hosterId: number;
  videoUrl: string;
};

export type EpisodeRequest = {
  showName: string;
  seasonNumber: number;
  episodeNumber: number;
};
