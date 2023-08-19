const showName = "log-horizon";

const episodeRequests = [];

for (let i = 0; i < 100; i++) {
  episodeRequests.push({
    reqId: i,
    showName,
    seasonNumber: 1,
    episodeNumber: i % 5 + 1,
  });
}

// console.log(episodeRequests);


