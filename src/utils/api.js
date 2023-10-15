import axios from "axios";

// const dataApi = [
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/e5534L93nUsZQ5tvC4fg0agL6vkbrJNY08ng7O3smXtJzEjrUhUpB93nMIDCauqNBKEuqv1e=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@newheightshow",
//         channelId: "UCVRm2Ho8cL3lvWDyp2ayuFw",
//         title: "New Heights",
//       },
//       badges: [],
//       descriptionSnippet:
//         "92 %ers, and probably a lot of you entering your “football era”, we are back with another episode of New Heights presented by our ...",
//       isLiveNow: false,
//       lengthSeconds: 3735,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/89VJaoEwvkE/mqdefault_6s.webp?du=3000&sqp=CL_mmakG&rs=AOn4CLAbR6DXR-1KPyI3YP-dNIQ5pBJGNg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "13 days ago",
//       stats: {
//         views: 2278770,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/89VJaoEwvkE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJritdk0I2X5QtPdX1FnPgEEF6LA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/89VJaoEwvkE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4OnsafJ7sNIUBApjjaFbGrBA0qA",
//           width: 720,
//         },
//       ],
//       title:
//         'Eagles Stay Unbeaten, Travis’ "Biggest Catch" and New Football Eras | Ep 55',
//       videoId: "89VJaoEwvkE",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/e5534L93nUsZQ5tvC4fg0agL6vkbrJNY08ng7O3smXtJzEjrUhUpB93nMIDCauqNBKEuqv1e=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@newheightshow",
//         channelId: "UCVRm2Ho8cL3lvWDyp2ayuFw",
//         title: "New Heights",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
//       isLiveNow: false,
//       lengthSeconds: 5767,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/7Zga0N7-0j8/mqdefault_6s.webp?du=3000&sqp=CIb1makG&rs=AOn4CLCDZ0C7DhQsIDkEY4AIeQuwWjn7uw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "6 days ago",
//       stats: {
//         views: 1207554,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/7Zga0N7-0j8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBksKeWO90svmMlZ-ctCBzQ6EV7JQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/7Zga0N7-0j8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCft2B6-AkvnLGoBzL78iys34EBPw",
//           width: 720,
//         },
//       ],
//       title:
//         "Jason Survives Overtime, Travis Escapes from New York and The NFL Needs to Calm Down | Ep 57",
//       videoId: "7Zga0N7-0j8",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKaDEuFQVa3GkOiy34xzwpDiJr-gvrRVjUdgf5dang=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@TGplays",
//         channelId: "UCqVCSWnuOSPm26orvNDTuWQ",
//         title: "TG Plays",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Fortnite Fortnitemares Update 2023 Chapter 4, Season 4 gameplay with Typical Gamer! SUBSCRIBE & CLICK THE BELL!",
//       isLiveNow: false,
//       lengthSeconds: 864,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/u-765QJDn8Y/mqdefault_6s.webp?du=3000&sqp=CNjamakG&rs=AOn4CLB8paKzPslAEIGBXHd6wQhTux4VFQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "15 hours ago",
//       stats: {
//         views: 861231,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/u-765QJDn8Y/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID8oNDAP&rs=AOn4CLAJ1-hrueX_0MdI-vdvKN_zwQ-RSw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/u-765QJDn8Y/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID8oNDAP&rs=AOn4CLB-mW4R1QMSYCMCvR4RDjplg-E6nQ",
//           width: 720,
//         },
//       ],
//       title: "New HALLOWEEN 2023 Update in Fortnite!",
//       videoId: "u-765QJDn8Y",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@FoxNews",
//         channelId: "UCXIJgqnII2ZOINSWNOGFThA",
//         title: "Fox News",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "Rockets from the Gaza Strip slam into buildings in Ashdod. #foxnews Subscribe to Fox News! https://bit.ly/2vBUvAS Watch more ...",
//       isLiveNow: false,
//       lengthSeconds: 655,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/ofJrTH3h48E/mqdefault_6s.webp?du=3000&sqp=CISDmqkG&rs=AOn4CLBNBsHcTjOQQwcL_2z24_y0Yd_hpQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 506549,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/ofJrTH3h48E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWtAxkurVQ5k0lnuPbZojhOcsg7A",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/ofJrTH3h48E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGyn1eqfV4YXeUTGAG4p5inPRnWw",
//           width: 720,
//         },
//       ],
//       title: "New barrage of rockets hit Israel",
//       videoId: "ofJrTH3h48E",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CNN",
//         channelId: "UCupvZG-5ko_eiXAupbDfxWw",
//         title: "CNN",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "Russian President Vladimir Putin has announced that Russia has successfully carried out a test of a new generation of ...",
//       isLiveNow: false,
//       lengthSeconds: 325,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/yqaeGmzE3SQ/mqdefault_6s.webp?du=3000&sqp=CLyGmqkG&rs=AOn4CLATH6QUW31m9J6kFOo21IK5o6Oo8g",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "4 days ago",
//       stats: {
//         views: 669911,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv5xOd23Y5NThzaH0tl8IG6f6WIQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjwPkzYAuKfWCNahoGFWvPO1XEUQ",
//           width: 720,
//         },
//       ],
//       title:
//         "Hear Putin's threat to the world after Russia tests new nuclear missile",
//       videoId: "yqaeGmzE3SQ",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKbSMbYWQ5TLMPPDKBf_oJX6QHvatlPZkJt6YLpj9Oc=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CNBC",
//         channelId: "UCvJJ_dzjViJCoLf5uKUTwoA",
//         title: "CNBC",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Drivers headed to downtown Manhattan will face a new toll beginning in spring 2024. The final fee, which is still up for debate, ...",
//       isLiveNow: false,
//       lengthSeconds: 763,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/cjG_8zFVFAw/mqdefault_6s.webp?du=3000&sqp=CISDmqkG&rs=AOn4CLDXrkjsaZgZ_vNwD7-aeZS8YGkc0w",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 475268,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RuNfVrQ7tdCaMvUWchDuScpOUA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNBJsD7SDW-xamWweFf6C079PdA",
//           width: 720,
//         },
//       ],
//       title: "Why New York Will Charge $23/Day To Drive Into Manhattan",
//       videoId: "cjG_8zFVFAw",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKY8F_PNW1bMFs7xKOk2Ias-j7N-9C2eoNj8HKjeuN4=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@msnbc",
//         channelId: "UCaXkIU1QidjPwiAYu6GcHjg",
//         title: "MSNBC",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "MSNBC legal analyst Lisa Rubin reports on the fifth day of former President Trump's civil fraud trial in New York and what new ...",
//       isLiveNow: false,
//       lengthSeconds: 173,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/2ZS7RwdtsL0/mqdefault_6s.webp?du=3000&sqp=CLjRmakG&rs=AOn4CLCLQ4bjZEBwxRMgNoltIu7JwtPVfw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "4 days ago",
//       stats: {
//         views: 184441,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/2ZS7RwdtsL0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoEBF87kmQySa0goPxoLNn3JW0kA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/2ZS7RwdtsL0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-la1oLB36mZE-7uxlr4x8ssSifA",
//           width: 720,
//         },
//       ],
//       title: "Trump's New York civil fraud trial wraps up its first week",
//       videoId: "2ZS7RwdtsL0",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZVR-MwyseiJRfg6pwqFFJjkcSCK9M1EytabVPjBg=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@nytimes",
//         channelId: "UCqnbDFdCpuN8CMEg0VuEBqA",
//         title: "The New York Times",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "When you're pregnant, there's plenty to worry about. Your baby, for example. Your own health. And then there's everyone else ...",
//       isLiveNow: false,
//       lengthSeconds: 215,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/TZMwxlQvX-4/mqdefault_6s.webp?du=3000&sqp=CP68makG&rs=AOn4CLCceuCA8UTL_WOBHHiovHHb0tWbBg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "21 hours ago",
//       stats: {
//         views: 9511,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK2AW5-O_8f4pbyHWuuhy3r911WA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXmTfKpK4r8NErAkR4rr6qEApptA",
//           width: 720,
//         },
//       ],
//       title: "I’m Not 'Disgusting' for Running While Pregnant | NYT Opinion",
//       videoId: "TZMwxlQvX-4",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@ABCNews",
//         channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
//         title: "ABC News",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Police are looking for a suspect in the death of Ryan Carson, 31, a well-known social justice advocate. WATCH THE FULL ...",
//       isLiveNow: false,
//       lengthSeconds: 189,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/pba_6PpFAHY/mqdefault_6s.webp?du=3000&sqp=CJj-makG&rs=AOn4CLB-KzDOASWCnhERePkJfJ_k0SWnHA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "6 days ago",
//       stats: {
//         views: 140129,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/pba_6PpFAHY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMGDSmbW3fjuQ4hmqxalS0-Y2Z1g",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/pba_6PpFAHY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdZ-DuY_LFNpWFbujdFLa8-K3lww",
//           width: 720,
//         },
//       ],
//       title: "Man stabbed to death in New York City",
//       videoId: "pba_6PpFAHY",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@ABCNews",
//         channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
//         title: "ABC News",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "An 18-year-old suspect has been charged with murder in connection with the stabbing of Brooklyn, New York, activist Ryan ...",
//       isLiveNow: false,
//       lengthSeconds: 134,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/B2uA4evo6JU/mqdefault_6s.webp?du=3000&sqp=CIb1makG&rs=AOn4CLBmpWs9xWWzZ4m-YyVdtatz7DcwIA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "5 days ago",
//       stats: {
//         views: 268917,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/B2uA4evo6JU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBI_FHvdBmxeppOHZMh5YQv7Go92w",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/B2uA4evo6JU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVeEUw_KLZEK8fQM1K-hTykW7a2w",
//           width: 720,
//         },
//       ],
//       title: "Suspect charged in fatal NYC stabbing",
//       videoId: "B2uA4evo6JU",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKYoN2d5A2-KNr1BfTS2rVGpfRV1NXwghB9VQfco8g=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@wgntv",
//         channelId: "UCDrLGkZTcNCshOLiKi5NtEw",
//         title: "WGN News",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "New York City is challenging a unique legal agreement that requires it to provide emergency housing to anyone who asks for it, as ...",
//       isLiveNow: false,
//       lengthSeconds: 46,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/wmxWtlXrG_Q/mqdefault_6s.webp?du=3000&sqp=CPSFmqkG&rs=AOn4CLD39t1kyZLfVWzqsbClfCkscm2BbA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "6 days ago",
//       stats: {
//         views: 29707,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/wmxWtlXrG_Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZNbse8y5WTm4vmeQLdiJo1yc6zg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/wmxWtlXrG_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAIPlH1BU-8fWp8UIhOASR4lQJyKw",
//           width: 720,
//         },
//       ],
//       title:
//         "New York City moves to suspend 'right to shelter' as migrant influx continues",
//       videoId: "wmxWtlXrG_Q",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKa0NYcSITK8JMFrUKoHc8I4t1WFURKpqp44oj26TQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CBNnewsonline",
//         channelId: "UCYI_ychRnL7sJrG6PUSBpQA",
//         title: "CBN News",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Israel is at war after a massive barrage of unprovoked attacks, leading to fears that an outright war between Israel and Iran could ...",
//       isLiveNow: false,
//       lengthSeconds: 1564,
//       movingThumbnails: null,
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 2819281,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/sUj118kVOJ0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_i-_igmyfV8DRJbtlzEzkHBOVlg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/sUj118kVOJ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzx-U6P91jtFQIEPUoXcsZKcHoXw",
//           width: 720,
//         },
//       ],
//       title:
//         "UPDATE: Latest on War in Israel After Hamas Launched Unprovoked Rocket Barrage, Ground Assault",
//       videoId: "sUj118kVOJ0",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKY8F_PNW1bMFs7xKOk2Ias-j7N-9C2eoNj8HKjeuN4=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@msnbc",
//         channelId: "UCaXkIU1QidjPwiAYu6GcHjg",
//         title: "MSNBC",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "New York Times Investigative Reporter Susanne Craig, ProPublica Reporter Andrea Bernstein, and Donny Deutsch, Host of the ...",
//       isLiveNow: false,
//       lengthSeconds: 694,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/NhSMDf__51E/mqdefault_6s.webp?du=3000&sqp=CNv_makG&rs=AOn4CLCFGEIIXaKMJ5ViS92vplckB0KypQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "5 days ago",
//       stats: {
//         views: 2407119,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/NhSMDf__51E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEHCCVXlSqF90r9iNhAmm3vg1wig",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/NhSMDf__51E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKlB1pe5Qy9wDcqUBNPy0-RhgUBA",
//           width: 720,
//         },
//       ],
//       title:
//         "‘It’s over, lights out' : Nicolle says Trump 'cannot do business in New York'",
//       videoId: "NhSMDf__51E",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/zJtLviP77uKqO_KWlr2b4WHF8CpQ_XG0pF5uofDPAadUPJcQkoy55un_7qlCyikVJePjmFfL1kE=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@LiveMusicRadio",
//         channelId: "UC0f4WJAjYdwl4XYHz-6FhyQ",
//         title: "Radio Hits Music",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "Hits Radio 1 - Top Hits 2023 Playlist - Pop Music 2023 - New Songs 2023 - Top Music 2023 New Popular Songs 2023 - Pop Hits ...",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 1977,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/uNd5kvrGHjk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvi8gnYGnOBi_O4PuYvQKVk8OUIg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/uNd5kvrGHjk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzqsvo25-saCJ8tR6igRNnl0ApvQ",
//           width: 720,
//         },
//       ],
//       title:
//         "Hits Radio 1 Top Hits 2023 New Popular Songs 2023 - Pop Music 2023 Best English Songs 2023 New Music",
//       videoId: "uNd5kvrGHjk",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@ABCNews",
//         channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
//         title: "ABC News",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "breakingnews #livenews #abcnews #news ABC News Live brings you 24/7 coverage of the latest news headlines and events ...",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 3658,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTbCK4LgDX2goVywcKhsYGj0OIg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi78QcHPft75MgJhotChhIxlVpfA",
//           width: 720,
//         },
//       ],
//       title: "LIVE: Latest News Headlines and Events l ABC News Live",
//       videoId: "OOtxXPaQvoM",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/rxRXEXiUFdpJE2oPJkjFVuPhJVRMLGtJCZxGc7AxoCbpmL6sR6Bpm6X64kZ8GQmJvJfyH5Ei2ko=s88-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Official Artist Channel",
//             type: "OFFICIAL_ARTIST_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: null,
//         channelId: "UCVo9Vl4FlCQXUOdqVdAWqug",
//         title: "Tye Tribbett",
//       },
//       badges: [],
//       descriptionSnippet:
//         "Lyrics: Ah Ah Tripp Sheesh New new new Everything new new new new New new everything new Everything fresh, everything, ...",
//       isLiveNow: false,
//       lengthSeconds: 196,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/WDlTm3XiGn8/mqdefault_6s.webp?du=3000&sqp=CK3smakG&rs=AOn4CLC_JXdBZIdt3e07QyZ9YgxOJMcIQA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "1 year ago",
//       stats: {
//         views: 1203369,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/WDlTm3XiGn8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYazrWdDY0IEgUbZBAzLnMsq7r4A",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/WDlTm3XiGn8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQoY2jocihKjZlKy6EL4WN3TDyqQ",
//           width: 720,
//         },
//       ],
//       title: "Tye Tribbett - New (Lyric Video)",
//       videoId: "WDlTm3XiGn8",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@NBCNews",
//         channelId: "UCeY0bbntWzzVIaj2z3QigXg",
//         title: "NBC News",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         "NBC News' George Solis reports from the Big Apple on flood alerts facing residents of New York, New Jersey and Connecticut.",
//       isLiveNow: false,
//       lengthSeconds: 287,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/sRxS_rVXi6w/mqdefault_6s.webp?du=3000&sqp=CIyDmqkG&rs=AOn4CLARrGzONwzuIdxYxgVbTQMAz5RFqw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "11 days ago",
//       stats: {
//         views: 288560,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/sRxS_rVXi6w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB659sN--JRKdO-7QAwhr7hbIfyBA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/sRxS_rVXi6w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLZeoHcbkYK_EklVvnmWLHcABj0Q",
//           width: 720,
//         },
//       ],
//       title:
//         "Extreme flooding hits New York City, Gov. Hochul declares state of emergency",
//       videoId: "sRxS_rVXi6w",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ZtMqxB6MIUu3z0VB7-gA0X_lwlODkvW3EcDE9n13cZgDnP_CWI9in7AheV2bZAFJjcUQJzIAxnw=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@onetakeworldwide",
//         channelId: "UChYK8MU-mE0VNjzC4HzjWaA",
//         title: "One Take Worldwide",
//       },
//       badges: ["New", "4K"],
//       descriptionSnippet:
//         "Song - PHD Singer - Deep Sra Lyrics - Preeta Featuring - Dilpreet Dhillon Ft. Sruisthy Mann Music - Flamme Music Producer ...",
//       isLiveNow: false,
//       lengthSeconds: 178,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/yDSdTSSKMds/mqdefault_6s.webp?du=3000&sqp=CIPamakG&rs=AOn4CLA-R9peH0w7NogjSfbY1TmzCswOvw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "1 day ago",
//       stats: {
//         views: 681401,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/yDSdTSSKMds/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_ghqKXREUsqRFrst5I6XnmIdlyw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/yDSdTSSKMds/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC37TYBeZgVF48lvnLm7O_2-UwXsQ",
//           width: 720,
//         },
//       ],
//       title:
//         "PHD (Official Video) Deep Sra | Dilpreet Dhillon | Sruisthy Mann | Latest New Punjabi Songs 2023",
//       videoId: "yDSdTSSKMds",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKbonI2fEFXVxJYtWEqHjyY2k_i0N9a8CXyYo3lDiA=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@suntv",
//         channelId: "UCBnxEdpoZwstJqC1yZpOjRA",
//         title: "Sun TV",
//       },
//       badges: ["New", "4K"],
//       descriptionSnippet:
//         'Presenting the most anticipated official trailer of Thalapathy Vijay\'s "LEO" #LeoOfficialTrailer #ThalapathyVijay #LokeshKanagaraj ...',
//       isLiveNow: false,
//       lengthSeconds: 164,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/Po3jStA673E/mqdefault_6s.webp?du=3000&sqp=CLaFmqkG&rs=AOn4CLCivRfTDYuWbo0RbobnqtRHMDKZjg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "5 days ago",
//       stats: {
//         views: 47220868,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/Po3jStA673E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeNi5h-0ASHW4LCYZvHWmpzH8Paw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/Po3jStA673E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiEx8uURca0BpvyFChDlzhzX-yOA",
//           width: 720,
//         },
//       ],
//       title:
//         "LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander",
//       videoId: "Po3jStA673E",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZdXO4D0ioO3jNWqmsORIFs7DPVW_mfCeeqO1_9dQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CNBCtelevision",
//         channelId: "UCrp_UI8XtuYfpiqluWLD7Lw",
//         title: "CNBC Television",
//       },
//       badges: [],
//       descriptionSnippet:
//         "New York Governor Kathy Hochul declared a state of emergency for New York City as the deluge of rain flooded city streets and ...",
//       isLiveNow: false,
//       lengthSeconds: 84,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/cgAb10BXhEM/mqdefault_6s.webp?du=3000&sqp=CJTAmakG&rs=AOn4CLDkY4aI_Ci0juGw89h5FjaR2HEBBw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "11 days ago",
//       stats: {
//         views: 189661,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/cgAb10BXhEM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDtz7JczvpllU-YpDS57ND9otNxA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/cgAb10BXhEM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgxc8kj_Fi3fapTchhWidBFoNBGg",
//           width: 720,
//         },
//       ],
//       title: "New York City drenched by heavy rains and flooding",
//       videoId: "cgAb10BXhEM",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@ABCNews",
//         channelId: "UCBi2mrWuNuyYy4gbM6fU18Q",
//         title: "ABC News",
//       },
//       badges: [],
//       descriptionSnippet:
//         "A deluge of two month's worth of rain falling on parts of the city in 24 hours has caused life-threatening flooding in some areas.",
//       isLiveNow: false,
//       lengthSeconds: 194,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/5LnDkdgzLk8/mqdefault_6s.webp?du=3000&sqp=CPL0makG&rs=AOn4CLDdqeBVflfRLNX-EiiKMA_DJPd5LQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "10 days ago",
//       stats: {
//         views: 1004707,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/5LnDkdgzLk8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqUjYTNpTJt1cTnfqUj5EO2tutSA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/5LnDkdgzLk8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqRhYBzA4fZuX11Y-Cs7YCYMToTw",
//           width: 720,
//         },
//       ],
//       title: "New York declared state of emergency from flooding | GMA",
//       videoId: "5LnDkdgzLk8",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/5UGheXeYe6w-lPMEWUjqtngTfGcPtxk_5B7qIBpe9ablZZLUWz7W8jDAcT5W7NnZIGfiffTj=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@futureunity5129",
//         channelId: "UC2jAc3ifBNVT03iLjXSRPwQ",
//         title: "Future Unity",
//       },
//       badges: [],
//       descriptionSnippet:
//         "For copyright contact: stienlemane2379(at)gmail.com Welcome to Futureunity, where we explore the fascinating world of science, ...",
//       isLiveNow: false,
//       lengthSeconds: 1276,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/R18q4F6Lqnk/mqdefault_6s.webp?du=3000&sqp=CLzbmakG&rs=AOn4CLAhBxWV7FHEwQgyysNh8BgWSgdO_A",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "1 month ago",
//       stats: {
//         views: 4410501,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/R18q4F6Lqnk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDij7fdCa32fV7q5UHOWdEBFiRBMw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/R18q4F6Lqnk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmXnjJWcxZKGRt2yNeaBmZQ9XYFg",
//           width: 720,
//         },
//       ],
//       title:
//         'Apollo Astronaut Breaks In Tears: "The Moon Is NOT What You Think!"',
//       videoId: "R18q4F6Lqnk",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/46IT-KTOYd5FQsG0ygVDrXwg-CXO1z4rBZ2IVvF3WUjbg6MjHYdG3FV5C00lDwKYW114sF4s9w=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@Foxweather",
//         channelId: "UC1FbPiXx59_ltnFVx7IxWow",
//         title: "FOX Weather",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "Stream 24/7 from America's Weather Center. Stay up-to-date on local & national weather updates with America's Weather team.",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 92,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/iesPl7zRbVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrgnJiuHqtpGmcrQWY-zK0EeDCnw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/iesPl7zRbVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEBs92IOC1AnkiLfgrLE7qzLGnwA",
//           width: 720,
//         },
//       ],
//       title:
//         "FOX Weather Live Stream: Powerful Storm Set To Sweep Across U.S. Bringing Heavy Rain, Severe Weather",
//       videoId: "iesPl7zRbVY",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/okkF6eVZXyHeNC2pAAmnh1DVmD8aTPxHOj5SWA0iORbQrczFAZ0ddbw_lduuT8TCsaZGoTXhrqw=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@bestofmixlive",
//         channelId: "UCSx0CKSPK_jUE2REJtgHIPA",
//         title: "Best of Mix",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "Best Radio 1 - LIVE POP HITS of 2023 | %100 Ad-free | Current Pop Radio Playlist The best Pop songs and the best pop playlist ...",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 592,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/C9qudJOsgnE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD8EzgDkeae4H1zLSxGTFiEsctlXg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/C9qudJOsgnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBU9r0gzT1Jy_w2AEk0kfpapAULFg",
//           width: 720,
//         },
//       ],
//       title:
//         "Best Radio 1 - LIVE POP HITS of 2023 | %100 Ad-free | Current Pop Radio Playlist",
//       videoId: "C9qudJOsgnE",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZlxwSw3-_dkJ34XXxm62RgOKHYm3KBYqIGTITvYw=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@BeAmazed",
//         channelId: "UCkQO3QsgTpNTsOw6ujimT5Q",
//         title: "BE AMAZED",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         "Tune in for some new species scientists recently discovered! Suggest a topic here to be turned into a video: http://bit.ly/2kwqhuh ...",
//       isLiveNow: false,
//       lengthSeconds: 1467,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/_Yk1y01voPo/mqdefault_6s.webp?du=3000&sqp=COz2makG&rs=AOn4CLBsqHREgS-ZQVxtnouUjve1WNviOw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "8 months ago",
//       stats: {
//         views: 1485655,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/_Yk1y01voPo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg5tTKKbZayEAZrlJEJhETURw-9A",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/_Yk1y01voPo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK0IkBfs4HC7odmjKj9aaJSjjCXw",
//           width: 720,
//         },
//       ],
//       title: "Strange New Species Scientists Recently Discovered",
//       videoId: "_Yk1y01voPo",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZQUHZKH4bZxWg3QFFIV_O5ZunEk7sNt1Aj8GWC2w=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@LikeNastyaofficial",
//         channelId: "UCJplp5SjeGSdVdwsfb9Q7lQ",
//         title: "Like Nastya",
//       },
//       badges: ["4K"],
//       descriptionSnippet:
//         "Nastya and new useful stories for kids about behavior and friendship. 00:00 Nastya and the story about dispensers 5:29 Nastya ...",
//       isLiveNow: false,
//       lengthSeconds: 1360,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/7KhI22Hzlpw/mqdefault_6s.webp?du=3000&sqp=CIz1makG&rs=AOn4CLBDrchd8Zk1qQJ0qVjHR5qbiEzkUQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "4 months ago",
//       stats: {
//         views: 32165788,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/7KhI22Hzlpw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfRQEwXkzbrwRKSdj5rBPgTf0o1A",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/7KhI22Hzlpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzs71Cc8sVXMUb_3g4h_REJ7jw1g",
//           width: 720,
//         },
//       ],
//       title:
//         "Nastya and new useful stories for kids about behavior and friendship",
//       videoId: "7KhI22Hzlpw",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKbSMbYWQ5TLMPPDKBf_oJX6QHvatlPZkJt6YLpj9Oc=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CNBC",
//         channelId: "UCvJJ_dzjViJCoLf5uKUTwoA",
//         title: "CNBC",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Drivers headed to downtown Manhattan will face a new toll beginning in spring 2024. The final fee, which is still up for debate, ...",
//       isLiveNow: false,
//       lengthSeconds: 763,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/cjG_8zFVFAw/mqdefault_6s.webp?du=3000&sqp=CISDmqkG&rs=AOn4CLDXrkjsaZgZ_vNwD7-aeZS8YGkc0w",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 475268,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RuNfVrQ7tdCaMvUWchDuScpOUA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNBJsD7SDW-xamWweFf6C079PdA",
//           width: 720,
//         },
//       ],
//       title: "Why New York Will Charge $23/Day To Drive Into Manhattan",
//       videoId: "cjG_8zFVFAw",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/kE5_i9Ror638AHYfq7SPLGZa8qPnDvU4SR51zMLU1bBlul_G6uPkmZt6_mbWc9WjyKdD5iYe=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@geonews",
//         channelId: "UC_vt34wimdCzdkrzVejwX9g",
//         title: "Geo News",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "GEO will be the voice of freedom from the Asian subcontinent. It will highlight the issues of concern and the cultural richness of its ...",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 8875,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/O3DPVlynUM0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAONYbeY-vWJuiHNtIWomea9mWUIQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/O3DPVlynUM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHrS8N0Mq4hnfj2NwLT_sb0ryDuQ",
//           width: 720,
//         },
//       ],
//       title:
//         "GEO NEWS LIVE | Pakistan News Live - Latest Headlines & Breaking News - Press Conferences & Speeches",
//       videoId: "O3DPVlynUM0",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/kDUg480xOHHjIEnvADRDAz8w9MapJEx-3UJjJQzfeg4O-SrAGHTOSpd5Tm5QtJi0RlSfafMxQg=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@NFL",
//         channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
//         title: "NFL",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "Check out our other channels: NFL Mundo https://www.youtube.com/mundonfl NFL Brasil ...",
//       isLiveNow: false,
//       lengthSeconds: 796,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/LluAI0f0N9s/mqdefault_6s.webp?du=3000&sqp=CPvimakG&rs=AOn4CLCucfBH6IJKuFxBrmZd_XYLHve2VA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 1459165,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/LluAI0f0N9s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJ1WSlOkaQiDSvn4IR4Hq8vcTlEQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/LluAI0f0N9s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCz3KdMtGbKnOW72h-4V5eM9VXW5w",
//           width: 720,
//         },
//       ],
//       title:
//         "Kansas City Chiefs vs. Minnesota Vikings | 2023 Week 5 Game Highlights",
//       videoId: "LluAI0f0N9s",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/6Dxzt-v0-z5o94xkHYbJJCOCMnaWWG8BHZmXl5KvAvQD96ILV5hNICWD5diVz-JJyULptFYK0Q=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@nollyfamilytv",
//         channelId: "UC0M6BJj039bknQaHNiiOekA",
//         title: "Nolly Familytv",
//       },
//       badges: ["New", "4K"],
//       descriptionSnippet:
//         "FOREVER & ALWAYS (New Movie) Maurice Sam, Ebube Nwagbo, Faith Duke 2023 Nigerian Nollywood Movie SUBSCRIBE ...",
//       isLiveNow: false,
//       lengthSeconds: 6355,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/kTV7Ow_NcbY/mqdefault_6s.webp?du=3000&sqp=CKbsmakG&rs=AOn4CLCO0KATLzKmHxiqroWtpiOsTA_yoQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "17 hours ago",
//       stats: {
//         views: 203480,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/kTV7Ow_NcbY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0bunrH_3YsLf2_pFstp84fYSPjg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/kTV7Ow_NcbY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHTms3l1iJY9u-bC2xS27_zNbZXg",
//           width: 720,
//         },
//       ],
//       title:
//         "FOREVER & ALWAYS (New Movie) Maurice Sam, Ebube Nwagbo, Faith Duke 2023 Nigerian Nollywood Movie",
//       videoId: "kTV7Ow_NcbY",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZ4WJzkJSuiGf0ednC6drmYPf73BOY0msG3UUjx=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@AESignage",
//         channelId: "UC1Rp_0bp86QEUt9TlMN5tlQ",
//         title: "AE Signage",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "American Eagle LED Billboard in Times Square, NY. Live View from the camera located at 1540 Broadway.",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 88,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/GSmCh4DrbWY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEOdBryDr0RH6DuBNOQuSDv7kSuQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/GSmCh4DrbWY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoXkmeefvFudnyljTjOgpHCjxrog",
//           width: 720,
//         },
//       ],
//       title: "Times Square: 1540 Broadway View Live",
//       videoId: "GSmCh4DrbWY",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKbbTDE9vvrwevy28BF17T3DgE5BUUOiY3lrdQ6b=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@InsideEdition",
//         channelId: "UC9k-yiEpRHMNVOnOi_aQK8w",
//         title: "Inside Edition",
//       },
//       badges: [],
//       descriptionSnippet:
//         "New York Governor Kathy Hochul declared a state of emergency as New York is being inundated by constant rain that's led to ...",
//       isLiveNow: false,
//       lengthSeconds: 77,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/suaN4KCUPU4/mqdefault_6s.webp?du=3000&sqp=CO7ymakG&rs=AOn4CLDZZYH9vp9BttF8ciDZ2qlzCsCvGw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "11 days ago",
//       stats: {
//         views: 193541,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/suaN4KCUPU4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpzVx6AcAC4SB6co2aIpF6RAJ-mw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/suaN4KCUPU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1CJMkAhW5Nt6eJxtaMfve9SQ2BA",
//           width: 720,
//         },
//       ],
//       title: "Severe Flooding Hits New York City Subway Stations",
//       videoId: "suaN4KCUPU4",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/GsZL97F0oViK5VLMqNV2NM__L9Kf8uJLyEYhom90Mmw8Bl07C_rZsv7yItJRM04yngqyY1Sl=s88-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Official Artist Channel",
//             type: "OFFICIAL_ARTIST_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: null,
//         channelId: "UCcYrdFJF7hmPXRNaWdrko4w",
//         title: "Chris Brown",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         'Watch the official music video for "New Flame" by Chris Brown featuring Usher & Rick Ross Listen to Chris Brown: ...',
//       isLiveNow: false,
//       lengthSeconds: 251,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/HwctEiWLe84/mqdefault_6s.webp?du=3000&sqp=CMTimakG&rs=AOn4CLAkpJrF1TvuRU9NfacfYzjLKIJOnA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "9 years ago",
//       stats: {
//         views: 442626774,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/HwctEiWLe84/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCX8ViMhGz8AabS2Pch89pXbgfgsQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/HwctEiWLe84/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6qrqmRgjpsH4mas_7qRjd9mmIqg",
//           width: 720,
//         },
//       ],
//       title: "Chris Brown - New Flame (Official Video) ft. Usher, Rick Ross",
//       videoId: "HwctEiWLe84",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/hkNTjyFsDL8IcLGSoO42-gLDLIrD2sCEUBQ7aLnofzaRqpbtXEjzGtCZZQd4oJ7cLCeOIyb9vQ=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@thevibeguide",
//         channelId: "UCxH0sQJKG6Aq9-vFIPnDZ2A",
//         title: "The Vibe Guide",
//       },
//       badges: [],
//       descriptionSnippet:
//         "Chris Brown - New Flame (Lyrics) ✖ Stream / Download: https://chrisbrown.lnk.to/listenYD ✖ Follow Chris Brown: ...",
//       isLiveNow: false,
//       lengthSeconds: 245,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/P1HiOrG-ZZQ/mqdefault_6s.webp?du=3000&sqp=CIzumakG&rs=AOn4CLCp_J5qUElDUT-C1rOhT7aihQxGRg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 weeks ago",
//       stats: {
//         views: 568456,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/P1HiOrG-ZZQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ-lNLGNd8xBawlCgw-0gVHt8Tkg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/P1HiOrG-ZZQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGLm9ROg3_N_fVZ9Cgp7ndWZLayQ",
//           width: 720,
//         },
//       ],
//       title: "Chris Brown - New Flame (Lyrics)",
//       videoId: "P1HiOrG-ZZQ",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/lbbo0a26GvS4kIha3NgsMEhxGiiJUui054_ltxlfLdbVLF0qjamH244jRj-zFWA0uDVRKLghCds=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@knowchrist",
//         channelId: "UCFdYpct7Tniv-Vh4r45HpUw",
//         title: "KNOW CHRIST",
//       },
//       badges: ["LIVE"],
//       descriptionSnippet:
//         "This is a 24/7 livestream of the King James Version (KJV) Audio Bible New Testament. Listen and be blessed by the word of God.",
//       isLiveNow: true,
//       lengthSeconds: null,
//       movingThumbnails: null,
//       publishedTimeText: null,
//       stats: {
//         viewers: 893,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/2LXR0cnu3Dw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnyEgMBJYCVxHq_Tvxhy48aa4ofA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/2LXR0cnu3Dw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjBexi3V8yD5zIuCeTw2APHU0_-Q",
//           width: 720,
//         },
//       ],
//       title: "🔴 24/7 KJV Audio Bible LIVE - New Testament",
//       videoId: "2LXR0cnu3Dw",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKaeMyz30bRK9nTCRSpjEahzUfQTtH4QBdE6MCGTiA=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@QuantumTech",
//         channelId: "UC4Tklxku1yPcRIH0VVCKoeA",
//         title: "Quantum Tech HD",
//       },
//       badges: [],
//       descriptionSnippet:
//         "Witness the incredible ingenuity of inventors as they unveil their ingenious solutions to everyday problems. From innovative ...",
//       isLiveNow: false,
//       lengthSeconds: 601,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/JAyZaSFwQoE/mqdefault_6s.webp?du=3000&sqp=COX1makG&rs=AOn4CLBOmeTEQEWFNLYpruA-InDzh290Wg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "3 months ago",
//       stats: {
//         views: 1134284,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/JAyZaSFwQoE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8WQSYh2xBNMidIUKziNG89zUL8Q",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/JAyZaSFwQoE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr3-sCzQ9bSmgL5L8Q7wMv8Tyyhg",
//           width: 720,
//         },
//       ],
//       title:
//         "New Inventions That Are At Another Level | Amazing Products & Concept Ideas ▶45",
//       videoId: "JAyZaSFwQoE",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKaqJ0IHfTWUj4sKGMyIP3wI8MTQKPopMtS8cf_Usg=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@MJ2KALLDAY",
//         channelId: "UCQnbF7RWTWa4Tc4C6ACP3rg",
//         title: "MJ2KALLDAY",
//       },
//       badges: [],
//       descriptionSnippet:
//         "The NBA has a new basketball and it's airless, but it could break the NBA. #nba This is the NBA's new basketball and it's airless ...",
//       isLiveNow: false,
//       lengthSeconds: 516,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/XriYt9enQ_Q/mqdefault_6s.webp?du=3000&sqp=CNyBmqkG&rs=AOn4CLBmj70IH4GlM6rxwFF38r9ImBwWyA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "3 months ago",
//       stats: {
//         views: 1427042,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/XriYt9enQ_Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6eLXifEHQlhsGQj4wLXspiXfwLQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/XriYt9enQ_Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK206QfogPTzptN_SnIvHua5Xb3A",
//           width: 720,
//         },
//       ],
//       title: "The Problem With The NBA's New Basketball",
//       videoId: "XriYt9enQ_Q",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/kDUg480xOHHjIEnvADRDAz8w9MapJEx-3UJjJQzfeg4O-SrAGHTOSpd5Tm5QtJi0RlSfafMxQg=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@NFL",
//         channelId: "UCDVYQ4Zhbm3S2dlz7P1GBDg",
//         title: "NFL",
//       },
//       badges: ["New", "CC"],
//       descriptionSnippet:
//         "Check out our other channels: NFL Mundo https://www.youtube.com/mundonfl NFL Brasil ...",
//       isLiveNow: false,
//       lengthSeconds: 508,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/_9tgJYGvg7E/mqdefault_6s.webp?du=3000&sqp=CNv_makG&rs=AOn4CLAFHjG7g5PAGteHJdndfhaQ7bjCIQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 763949,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/_9tgJYGvg7E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC79-v85Uf85HVQdcGQcyYOLHwOLw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/_9tgJYGvg7E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnnYX2ur89c8azCqyEzoHO_ySTmQ",
//           width: 720,
//         },
//       ],
//       title:
//         "New Orleans Saints vs. New England Patriots | 2023 Week 5 Game Highlights",
//       videoId: "_9tgJYGvg7E",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/wQGPfeDh0Ut6wSf0iiMjsSqlJyWRQU6K1GPoAZa2QekuHUyMf55iX5rh7eXJS9uPggSxacLhTA=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@MinewShewaTube",
//         channelId: "UCCYbR92tg8ZVr34p0BFHbtw",
//         title: "Minew Shewa Tube",
//       },
//       badges: ["4K"],
//       descriptionSnippet:
//         "Ethiopian Music : Yared Negu X Job 27 (Hule) ሁሌ - New Ethiopian Music 2023(Official Video) Ethiopian Music: Check Out ...",
//       isLiveNow: false,
//       lengthSeconds: 257,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/6LOpx9zlJ-g/mqdefault_6s.webp?du=3000&sqp=COj1makG&rs=AOn4CLCoqFgeVEvcumiBkCnTv3GikExybg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "11 days ago",
//       stats: {
//         views: 670190,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/6LOpx9zlJ-g/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5cPOkPicI3bwk3gzeT5aGmVn1AQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/6LOpx9zlJ-g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZmJYhG6UABiExV2FEU7oFOC4NIQ",
//           width: 720,
//         },
//       ],
//       title:
//         "Ethiopian Music : Yared Negu X Job 27 (Hule) ሁሌ  - New Ethiopian Music 2023(Official Video)",
//       videoId: "6LOpx9zlJ-g",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@NBCNews",
//         channelId: "UCeY0bbntWzzVIaj2z3QigXg",
//         title: "NBC News",
//       },
//       badges: [],
//       descriptionSnippet:
//         "Officials say there were over 200000 illegal crossings at the southern border last month and a record three million migrants that ...",
//       isLiveNow: false,
//       lengthSeconds: 169,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/kd3PDZMz0_w/mqdefault_6s.webp?du=3000&sqp=CLDimakG&rs=AOn4CLAIHLTSXHnDMH9SOkJvPDOfRfOunA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "7 days ago",
//       stats: {
//         views: 882498,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPcHayllw1hga591xxo0oGuBlEPA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGiaojxCzXCZngq-efMmgYfE7B0Q",
//           width: 720,
//         },
//       ],
//       title:
//         "New York City public hospitals overwhelmed by increase of migrants",
//       videoId: "kd3PDZMz0_w",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKafag9ZyWgnPZOQyuVd4DbzllFNyygzZpKwdaBb4w=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@speedrecords",
//         channelId: "UCOsyDsO5tIt-VZ1iwjdQmew",
//         title: "Speed Records",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Album - Travel Diaries Part 1 - Musafir Song - ਯੈਜ਼ਦੀ Yezdi (Official Video) Singer | Lyrics | Composer - Satinder Sartaaj ...",
//       isLiveNow: false,
//       lengthSeconds: 330,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/w3S23Th-p1Y/mqdefault_6s.webp?du=3000&sqp=CPz-makG&rs=AOn4CLDbE453Zf1udjIAR-_QEspyT0kJ2w",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 days ago",
//       stats: {
//         views: 772435,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/w3S23Th-p1Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChwyllFNyELHh_kdTCRw1OatqdPQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/w3S23Th-p1Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZjkTNHQIhzhPvyh3Z-GexYOBNRA",
//           width: 720,
//         },
//       ],
//       title:
//         "Satinder Sartaaj : ਯੈਜ਼ਦੀ Yezdi (Official Video)| Latest Punjabi Songs 2023 | New Punjabi Songs 2023",
//       videoId: "w3S23Th-p1Y",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKav3XjyKe5puNoAAyLUXQTFi8PZccUnvjWiYouZ7g=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@DemocracyNow",
//         channelId: "UCzuqE7-t13O4NIDYJfakrhw",
//         title: "Democracy Now!",
//       },
//       badges: [],
//       descriptionSnippet:
//         "In New Mexico, a 23-year-old gunman wearing a red MAGA hat opened fire last week on Jacob Johns and other Indigenous ...",
//       isLiveNow: false,
//       lengthSeconds: 683,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/mF5lGtMxivU/mqdefault_6s.webp?du=3000&sqp=CJ_4makG&rs=AOn4CLAteaaG1Cp1RIyINuYuWGz5C913sA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "7 days ago",
//       stats: {
//         views: 181525,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/mF5lGtMxivU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAo6OOZYl0p8JyguWnGZH0YSzrWgg",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/mF5lGtMxivU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4uEv_j9oDDMyvF-TjaZ5WnI_7KQ",
//           width: 720,
//         },
//       ],
//       title:
//         "Gunman Wearing MAGA Hat Shoots Indigenous Activist at New Mexico Protest over Conquistador Statue",
//       videoId: "mF5lGtMxivU",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/WXCclpzxtBJhIAxEDI6S8Ald8eFXzm6U8UwBG1BgFFsTvGg0N0NpVvWzeJDaKikm58GRGqZ1Iw=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@MeidasTouch",
//         channelId: "UC9r9HYFxEQOBXSopFS61ZWg",
//         title: "MeidasTouch",
//       },
//       badges: [],
//       descriptionSnippet:
//         "MeidasTouch host Ben Meiselas reports on the release of new video depositions of Donald Trump, Don Jr., Eric Trump, Alan ...",
//       isLiveNow: false,
//       lengthSeconds: 656,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/riVg1evnkK8/mqdefault_6s.webp?du=3000&sqp=CIbymakG&rs=AOn4CLAujVu0EGhWQCqoNon7JzA3GfYOoQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "7 days ago",
//       stats: {
//         views: 1443448,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/riVg1evnkK8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbJRuYnO5KAaqN1cCh7I9R4hEj9g",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/riVg1evnkK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5mZgNIfFpaJZcX3ofzGTgrzmcHA",
//           width: 720,
//         },
//       ],
//       title:
//         "Trump is SO SCREWED after Release of NEW VIDEO DEPOSITIONS at Trial",
//       videoId: "riVg1evnkK8",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKYNjTJS1HIRUvlVH_gttT1Y3qOHzo2UFMqyhK4s6A=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@autogefuehl",
//         channelId: "UCG0__4AhnoCWRH7TPO0PQyg",
//         title: "Autogefühl",
//       },
//       badges: ["New", "4K"],
//       descriptionSnippet:
//         "This is our static in-depth review of the 2024 all-new BMW X2, comparing the top petrol spec BMW X2 M35i vs the electric BMW ...",
//       isLiveNow: false,
//       lengthSeconds: 1355,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/0PeV43-6oAQ/mqdefault_6s.webp?du=3000&sqp=CKTQmakG&rs=AOn4CLBg2YkinE8OkQ65qkVAKPSi5SOhBw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "13 hours ago",
//       stats: {
//         views: 62031,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/0PeV43-6oAQ/hq720_custom_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCgsDwS8wSu67CLxVmur-Tj_LS0rQ",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/0PeV43-6oAQ/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLCjFpn5sDtMs5pWTLWm1RWMH-jl7A",
//           width: 720,
//         },
//       ],
//       title: "all-new BMW X2 first REVIEW! M35i vs iX2 (EV) comparison 2024",
//       videoId: "0PeV43-6oAQ",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@CNN",
//         channelId: "UCupvZG-5ko_eiXAupbDfxWw",
//         title: "CNN",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         'Exclusive footage shows Ukraine using an experimental "sea baby" drone to attack a hated Russian bridge to Crimea. CNN\'s Nick ...',
//       isLiveNow: false,
//       lengthSeconds: 235,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/u7STLTtOEOM/mqdefault_6s.webp?du=3000&sqp=CNbrmakG&rs=AOn4CLCAO02Gt7hQxQC3I-AK3uFYbrOzRw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "1 month ago",
//       stats: {
//         views: 2407854,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/u7STLTtOEOM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnF9XUFRUqLAh85h01jf3-idsS2w",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/u7STLTtOEOM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC8BJJQLREAaj_5xOHsEhoPvZLIA",
//           width: 720,
//         },
//       ],
//       title: "New video shows attack on $4 billion Russian bridge",
//       videoId: "u7STLTtOEOM",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/5U5lehSLZXcm28vwUEtBG5uUhsz5E3lvgAuHMnnVSz9_VZUADiQyRnzLoeoY_nyzgHbw2FZ03A=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@HooperHighlights00",
//         channelId: "UC6yGoFvjKmRAlBfglOxNCGQ",
//         title: "Hooper Highlights",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "NBA Jerseys at Hooper's Paradise◇ https://hoopersparadise.store Telegram Channel: https://t.me/hooperhighlights00 Rookie ...",
//       isLiveNow: false,
//       lengthSeconds: 572,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/zzT_Rwj3luo/mqdefault_6s.webp?du=3000&sqp=COTvmakG&rs=AOn4CLAiijNyz0UsQykYMrY0-MD7A-rGCQ",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "8 hours ago",
//       stats: {
//         views: 14887,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/zzT_Rwj3luo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgq4Rn382fpmGttrYy5MhbbelPkw",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/zzT_Rwj3luo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHgCaJlbOiUB5cy8HNb3s_ibHIsg",
//           width: 720,
//         },
//       ],
//       title:
//         "Orlando Magic vs New Orleans Pelicans Full Game Highlights | Oct 10 | 2023-24 NBA Preseason",
//       videoId: "zzT_Rwj3luo",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/ytc/APkrFKZBqSG4g6s3gaQPkvj6vJLgpbAgxhS4SklDBlPkHw=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [],
//         canonicalBaseUrl: "/@KinderNet",
//         channelId: "UCpGqpNQdmsihhZ2Eq9FgWbg",
//         title: "KN News",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         '"This is a life-threatening storm," the New York governor said. A month\'s worth of precipitation fell in just a few hours on Friday, ...',
//       isLiveNow: false,
//       lengthSeconds: 505,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/1_-V-9SDk3s/mqdefault_6s.webp?du=3000&sqp=COzrmakG&rs=AOn4CLCoeRRhoIG2jPs2t5rcLThG62te7Q",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "10 days ago",
//       stats: {
//         views: 13425667,
//       },
//       thumbnails: [
//         {
//           height: 270,
//           url: "https://i.ytimg.com/vi/1_-V-9SDk3s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCg22cpoClBa3g4VVRm8EAqqYbE-A",
//           width: 480,
//         },
//       ],
//       title:
//         "Apocalypse in New York! Monstrous flood in the largest city in the USA!",
//       videoId: "1_-V-9SDk3s",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/CtwyqaD6AVjzRMlHAsIAcldGblwZaol_TegnWymBfmSEk8_UcEmxsw0A_BqkzZv6BplCXDEx8Q=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@MovieGasm",
//         channelId: "UCwBV-eg1dAkzrdjqJfyEj0w",
//         title: "MovieGasm.com",
//       },
//       badges: ["4K"],
//       descriptionSnippet:
//         "Have a look through the timestamps to find something of interest: 0:05 - NO ONE WILL SAVE YOU (2023) Alien, Sci Fi Movie 1:54 ...",
//       isLiveNow: false,
//       lengthSeconds: 1304,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/ZtqH1nqXoG4/mqdefault_6s.webp?du=3000&sqp=CPz7makG&rs=AOn4CLBnDKsLLlOerCi0nTDRNP2PdQD6Dg",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "1 month ago",
//       stats: {
//         views: 2230593,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/ZtqH1nqXoG4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmQ4_dyJ_Ry0iQJdqiz65Tw1RR8g",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/ZtqH1nqXoG4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABCvlrY1Yf02mLmN0VSmFmMIlQ9g",
//           width: 720,
//         },
//       ],
//       title: "NEW MOVIE TRAILERS (2023) September",
//       videoId: "ZtqH1nqXoG4",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/2VqdOiAU7s06uS9IemnYDJJNvzmkHisWOBuD46MpdL0LDblku6vrvaTpYTcvvx_9y50f2fXA1w=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@fox13seattle",
//         channelId: "UC5bKZHg4PzURMOWcvanl6nA",
//         title: "FOX 13 Seattle",
//       },
//       badges: ["CC"],
//       descriptionSnippet:
//         "Scientists discover a new species lurking in the depths of the southern ocean. This is the Antarctic Strawberry Feather Star.",
//       isLiveNow: false,
//       lengthSeconds: 37,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/Xlt4xZ7kAM8/mqdefault_6s.webp?du=3000&sqp=COvsmakG&rs=AOn4CLBlwGlxqoQMPxhr0HOh8nKlWOH4NA",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "2 months ago",
//       stats: {
//         views: 1583709,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/Xlt4xZ7kAM8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3-dPLImU_-rPTe7-BrJpbAnag0w",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/Xlt4xZ7kAM8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCWFyFwUm0q7Tk3TO8etFEh8M2QAA",
//           width: 720,
//         },
//       ],
//       title: "New species discovered in southern ocean",
//       videoId: "Xlt4xZ7kAM8",
//     },
//   },
//   {
//     type: "video",
//     video: {
//       author: {
//         avatar: [
//           {
//             height: 68,
//             url: "https://yt3.ggpht.com/GQXg6WAMKsl24fLm8IfyNuw6-a64ffy1gJtrNRrfjwtMcDB1ByEP0cMq6SZ_8QW4qjTI6C_N-g=s68-c-k-c0x00ffffff-no-rj",
//             width: 68,
//           },
//         ],
//         badges: [
//           {
//             text: "Verified",
//             type: "VERIFIED_CHANNEL",
//           },
//         ],
//         canonicalBaseUrl: "/@issei0806",
//         channelId: "UC6QZ_ss3i_8qLV_RczPZBkw",
//         title: "ISSEI / いっせい",
//       },
//       badges: ["New"],
//       descriptionSnippet:
//         "Welcome to the energetic and funny ISSEI Channel!! If you're looking for a good laugh, check out this funny Issei0806 meme ...",
//       isLiveNow: false,
//       lengthSeconds: 25,
//       movingThumbnails: [
//         {
//           height: 180,
//           url: "https://i.ytimg.com/an_webp/vnQntkMqjf8/mqdefault_6s.webp?du=3000&sqp=CM6FmqkG&rs=AOn4CLB10tHQ7gwHn7CmTSMjaKYDWHyLTw",
//           width: 320,
//         },
//       ],
//       publishedTimeText: "23 hours ago",
//       stats: {
//         views: 623689,
//       },
//       thumbnails: [
//         {
//           height: 202,
//           url: "https://i.ytimg.com/vi/vnQntkMqjf8/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhlIE4oPDAP&rs=AOn4CLDejXcbpMewKrsyQSomq41XLSKyiA",
//           width: 360,
//         },
//         {
//           height: 404,
//           url: "https://i.ytimg.com/vi/vnQntkMqjf8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhlIE4oPDAP&rs=AOn4CLBjHJHtySgEdPH3qWlx28OqSeQJhw",
//           width: 720,
//         },
//       ],
//       title: "ISSEI's New Meme Remix",
//       videoId: "vnQntkMqjf8",
//     },
//   },
// ];



const unknownDataApi = [
    {
        "contents": [
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/e5534L93nUsZQ5tvC4fg0agL6vkbrJNY08ng7O3smXtJzEjrUhUpB93nMIDCauqNBKEuqv1e=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@newheightshow",
                        "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
                        "title": "New Heights"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
                    "isLiveNow": false,
                    "lengthSeconds": 5363,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/EDgrHM4EExk/mqdefault_6s.webp?du=3000&sqp=CLjcpKkG&rs=AOn4CLCsJRhXpsZHNdB4JyslvwewajaOzQ",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 758798
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/EDgrHM4EExk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkAjOIauzme0Hm0yzB1Q0xkNJVIA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/EDgrHM4EExk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwl3ClsMBCOqOkFPwY5gMsCR6sHQ",
                            "width": 720
                        }
                    ],
                    "title": "Road Wins, Turf Bans and Getting Called Out By Lebron | Ep 58",
                    "videoId": "EDgrHM4EExk"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKagAm5NvXsigEQqAzTRbcuyDAO2ViPXaGAq26lQvQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@GothamChess",
                        "channelId": "UCQHX6ViZmPsWiYSFAyS0a3Q",
                        "title": "GothamChess"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "The first 500 people to use my link will get access to one of Skillshare's best offers: 30 days free AND 40% off your first year of ...",
                    "isLiveNow": false,
                    "lengthSeconds": 1775,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/GHU7YZYl8pM/mqdefault_6s.webp?du=3000&sqp=CIjQpKkG&rs=AOn4CLDBsvI2I7APm7SE9o3AH6Sxs0xi3g",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "16 hours ago",
                    "stats": {
                        "views": 416348
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/GHU7YZYl8pM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi8iHnZ24vlTUGcNWJIOWj3L-vAA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/GHU7YZYl8pM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSrSfQozb4fvqiXFSnX1AFlIskIA",
                            "width": 720
                        }
                    ],
                    "title": "NEW CHESS CHEATING SCANDAL??????????",
                    "videoId": "GHU7YZYl8pM"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CNN",
                        "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
                        "title": "CNN"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "Russian President Vladimir Putin has announced that Russia has successfully carried out a test of a new generation of ...",
                    "isLiveNow": false,
                    "lengthSeconds": 325,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/yqaeGmzE3SQ/mqdefault_6s.webp?du=3000&sqp=CJDHpKkG&rs=AOn4CLAhM0o3ekh8clWPrg-qv5Mg2m7Yjw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "6 days ago",
                    "stats": {
                        "views": 824775
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBv5xOd23Y5NThzaH0tl8IG6f6WIQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjwPkzYAuKfWCNahoGFWvPO1XEUQ",
                            "width": 720
                        }
                    ],
                    "title": "Hear Putin's threat to the world after Russia tests new nuclear missile",
                    "videoId": "yqaeGmzE3SQ"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@FoxNews",
                        "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
                        "title": "Fox News"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "Rockets from the Gaza Strip slam into buildings in Ashdod. #foxnews Subscribe to Fox News! https://bit.ly/2vBUvAS Watch more ...",
                    "isLiveNow": false,
                    "lengthSeconds": 655,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/ofJrTH3h48E/mqdefault_6s.webp?du=3000&sqp=CJjTpKkG&rs=AOn4CLDcpx0NPp7e6W6TIea1U-fcYuCgQg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 days ago",
                    "stats": {
                        "views": 509726
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/ofJrTH3h48E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDWtAxkurVQ5k0lnuPbZojhOcsg7A",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/ofJrTH3h48E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGyn1eqfV4YXeUTGAG4p5inPRnWw",
                            "width": 720
                        }
                    ],
                    "title": "New barrage of rockets hit Israel",
                    "videoId": "ofJrTH3h48E"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/TfTa8HWjTh-Bc8vuyPrwj0hdrqAxvTnJ6Lkgy1SEN_kyptxPNhKPPd0CIKzaRC-rUmQwXEwJ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@fox5ny",
                        "channelId": "UCIjSUWHWp6KohfnR5OQTXnQ",
                        "title": "FOX 5 New York"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "Security in New York City remains high amid the ongoing war in Israel. The NYPD has increased patrols and surveillance around ...",
                    "isLiveNow": false,
                    "lengthSeconds": 345,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/WngiF7fEsVY/mqdefault_6s.webp?du=3000&sqp=CKjUpKkG&rs=AOn4CLCc7sWs8KEsjX41y28ICFEndGdQ1Q",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 26796
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/WngiF7fEsVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwdCakZ21NU-_jKmOD0WIkeSrX1A",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/WngiF7fEsVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfC8nPqM0rDswO7Ejn0gCBFSU0yw",
                            "width": 720
                        }
                    ],
                    "title": "Israel-Hamas war: Security high in New York City",
                    "videoId": "WngiF7fEsVY"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/tYiFjX4l-162Vaqp54ifxR6lN0UCWoPrN6u8YsrEqmI0TKK3-KAfhnVMSn0M5QyE6DNgqkN0KQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CBSNewYork",
                        "channelId": "UCNZyLULUQBp5e9Q1cKtvk6Q",
                        "title": "CBS New York"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Supporters of Israel demonstrated outside the United Nations. CBS New York's Kristie Keleshian has the story.",
                    "isLiveNow": false,
                    "lengthSeconds": 118,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/WtniX6EDjWs/mqdefault_6s.webp?du=3000&sqp=CNC2pKkG&rs=AOn4CLDSF711Xtz6BvnyaQHaFnQkvj1WEw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 days ago",
                    "stats": {
                        "views": 16829
                    },
                    "thumbnails": [
                        {
                            "height": 270,
                            "url": "https://i.ytimg.com/vi/WtniX6EDjWs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCr4iO8hv3FWcSjtxcPwOCpl95iqA",
                            "width": 480
                        }
                    ],
                    "title": "Pro-Israel, Pro-Palestine rallies held in New York City",
                    "videoId": "WtniX6EDjWs"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@NBCNews",
                        "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                        "title": "NBC News"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "House Republicans killed a motion that would try to change the rules to prevent a multiple round voting process, like that seen ...",
                    "isLiveNow": false,
                    "lengthSeconds": 144,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/nWL2f4whwek/mqdefault_6s.webp?du=3000&sqp=CO7cpKkG&rs=AOn4CLCa-gOyt7WNA9oqwpRCC5vOX_DEUg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 14710
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/nWL2f4whwek/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgZUa3kpgJnZ1rSH8Bz-q-poHa8g",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/nWL2f4whwek/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQnuTe1CqTeG-gup3Zt0C1uyQYWw",
                            "width": 720
                        }
                    ],
                    "title": "Potential for drawn-out vote as House Republicans meet to decide new speaker",
                    "videoId": "nWL2f4whwek"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@ForbesBreakingNews",
                        "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
                        "title": "Forbes Breaking News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Former President Trump holds a 2024 campaign rally in Wolfeboro, New Hampshire. Fuel your success with Forbes.",
                    "isLiveNow": false,
                    "lengthSeconds": 5067,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/Fk2jPBvRJrA/mqdefault_6s.webp?du=3000&sqp=CMC1pKkG&rs=AOn4CLDQqGyUbv7kdrGBhjghnBC2GtnMwg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "3 days ago",
                    "stats": {
                        "views": 534117
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2UAurAUTZe-74lrN7xnkgboFFwg",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/Fk2jPBvRJrA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5m6LG2hwVgUb5WXBE1xxHlp7AJA",
                            "width": 720
                        }
                    ],
                    "title": "BREAKING NEWS: Trump Goes Scorched Earth On Biden At New Hampshire Rally As 2024 Primaries Near",
                    "videoId": "Fk2jPBvRJrA"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKbSMbYWQ5TLMPPDKBf_oJX6QHvatlPZkJt6YLpj9Oc=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CNBC",
                        "channelId": "UCvJJ_dzjViJCoLf5uKUTwoA",
                        "title": "CNBC"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Drivers headed to downtown Manhattan will face a new toll beginning in spring 2024. The final fee, which is still up for debate, ...",
                    "isLiveNow": false,
                    "lengthSeconds": 763,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/cjG_8zFVFAw/mqdefault_6s.webp?du=3000&sqp=CLSvpKkG&rs=AOn4CLCZl9zWgAVcNWUNKo_CZdH9YGyFDA",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 days ago",
                    "stats": {
                        "views": 744030
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RuNfVrQ7tdCaMvUWchDuScpOUA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNBJsD7SDW-xamWweFf6C079PdA",
                            "width": 720
                        }
                    ],
                    "title": "Why New York Will Charge $23/Day To Drive Into Manhattan",
                    "videoId": "cjG_8zFVFAw"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@FoxNews",
                        "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
                        "title": "Fox News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "A full House vote is expected as Republicans attempt to elect a new speaker as Israel adds to urgency. #foxnews Subscribe to ...",
                    "isLiveNow": false,
                    "lengthSeconds": 11421,
                    "movingThumbnails": null,
                    "publishedTimeText": "Streamed 1 day ago",
                    "stats": {
                        "views": 82522
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/uaRxK2fe9KE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf8iHyjMLU7eZMYka6z1geg2unEQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/uaRxK2fe9KE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlBWmzQl17KSpda387y_2zmZVjEQ",
                            "width": 720
                        }
                    ],
                    "title": "Live: House to vote on new speaker after GOP nominates Rep. Steve Scalise",
                    "videoId": "uaRxK2fe9KE"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZVR-MwyseiJRfg6pwqFFJjkcSCK9M1EytabVPjBg=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@nytimes",
                        "channelId": "UCqnbDFdCpuN8CMEg0VuEBqA",
                        "title": "The New York Times"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "When you're pregnant, there's plenty to worry about. Your baby, for example. Your own health. And then there's everyone else ...",
                    "isLiveNow": false,
                    "lengthSeconds": 215,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/TZMwxlQvX-4/mqdefault_6s.webp?du=3000&sqp=CLrIpKkG&rs=AOn4CLCq_NhfPWWPKcsDdgmGubO4PqEF9w",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "2 days ago",
                    "stats": {
                        "views": 12363
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK2AW5-O_8f4pbyHWuuhy3r911WA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/TZMwxlQvX-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXmTfKpK4r8NErAkR4rr6qEApptA",
                            "width": 720
                        }
                    ],
                    "title": "I’m Not 'Disgusting' for Running While Pregnant | NYT Opinion",
                    "videoId": "TZMwxlQvX-4"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/wiqkoOfsuG8x3jXjJiaGUc80FBMhYFMCGHVMBHg5MetnYYps3o0LiZQiWoCHx_Kk33I7Tr_c=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@VOANews",
                        "channelId": "UCVSNOxehfALut52NbkfRBaA",
                        "title": "Voice of America"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Supporters of Israel and backers of the Palestinian cause held competing rallies in Times Square in New York City on Sunday ...",
                    "isLiveNow": false,
                    "lengthSeconds": 57,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/qxZk6kWKdM0/mqdefault_6s.webp?du=3000&sqp=CK2xpKkG&rs=AOn4CLAJbbATrX2j0zm075766j1x0PmeEQ",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 days ago",
                    "stats": {
                        "views": 366243
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/qxZk6kWKdM0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHkaSl27mZCs0S_peI0Rw3aGk1ug",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/qxZk6kWKdM0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACgf1wX57hx68Ty3xMORZQKEAtdg",
                            "width": 720
                        }
                    ],
                    "title": "New York City: Hundreds Attend pro-Israel and pro-Palestinian Protests | VOA News",
                    "videoId": "qxZk6kWKdM0"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKa3Lwn30Wzy67gcU9peayt5G6tdQF9uvm09V6oECQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@thespiffingbrit",
                        "channelId": "UCRHXUZ0BxbkU2MYZgsuFgkQ",
                        "title": "The Spiffing Brit"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Fallout New Vegas is often regarded to be by far the best game in the legendary Fallout RPG series. It has a fantastically large ...",
                    "isLiveNow": false,
                    "lengthSeconds": 1349,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/j8E98AnN8D4/mqdefault_6s.webp?du=3000&sqp=CPqzpKkG&rs=AOn4CLDkcJ1GIJLemiJpKwq2Z559A3cVnw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "19 hours ago",
                    "stats": {
                        "views": 485883
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/j8E98AnN8D4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8gpCfsQdZYIaomXLzumXtyEEgg",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/j8E98AnN8D4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuau1p6pm54Kaexbwa9nAjIxmjvA",
                            "width": 720
                        }
                    ],
                    "title": "Fallout New Vegas IS A PERFECTLY BALANCED GAME WITH NO EXPLOITS -  BECOMING GOD!",
                    "videoId": "j8E98AnN8D4"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKYdFqctMSRg5kZ5m3xSnWAE5H8zaf3_QHw_55WP9A=s88-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Official Artist Channel",
                                "type": "OFFICIAL_ARTIST_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": null,
                        "channelId": "UCmBHEmw0Wn03_5ED5ifpQ2A",
                        "title": "Stephan Tudu Official"
                    },
                    "badges": [
                        "New",
                        "4K"
                    ],
                    "descriptionSnippet": "santhali #stephantudu Artist Kirap Kishor Murmu & Rosemary, child artist: Anup Hansdak, Producer: Jiya jenica tudu, Director: ...",
                    "isLiveNow": false,
                    "lengthSeconds": 279,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/8UWm1vptMpI/mqdefault_6s.webp?du=3000&sqp=COaspKkG&rs=AOn4CLCGMN87clJnxLEj35di4_wXsygKPw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "11 hours ago",
                    "stats": {
                        "views": 151129
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/8UWm1vptMpI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlkYTSIzoNZEu24tfj6131_jpd8w",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/8UWm1vptMpI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPLeu0KTSeopV3G5DIQcWLDSJShQ",
                            "width": 720
                        }
                    ],
                    "title": "SOMAJ BODE || NEW SANTHALI  SOCIAL DASAI SONG 2023 || STEPHAN TUDU  || KIRAP KISHOR & ROSEMARY ||",
                    "videoId": "8UWm1vptMpI"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/Q6u6xTYnEajLoQxC0uB0TneZDPKYu_MzWXDW07aMznwL4QVtI33IzQhMtYcQb-UJLWdJ2xv2_g=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CashJordan",
                        "channelId": "UCrwbBzP11NhxRUCRKx_BgoQ",
                        "title": "Cash Jordan"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "The current conflict in Israel has spilled over to the streets of New York as Pro Palestine and Pro Israel groups make their voices ...",
                    "isLiveNow": false,
                    "lengthSeconds": 715,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/HnKXsnjGI_c/mqdefault_6s.webp?du=3000&sqp=CPOppKkG&rs=AOn4CLAHxyrheB7yPRIMk5mqBYaV7oXZXg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "22 hours ago",
                    "stats": {
                        "views": 129221
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/HnKXsnjGI_c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb0_x1d8PkKEhjj02nusbRMDmYSw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/HnKXsnjGI_c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATuruZ5fxkfIgG7zDCIDjaqpdt8Q",
                            "width": 720
                        }
                    ],
                    "title": "Anti-Israel Protests Erupt in New York City…",
                    "videoId": "HnKXsnjGI_c"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/OV0AF6ppAOGdmEc8SMTN3v6_mcQCVWqqpa1Wgogkjk7xUiY5PFlC6FG4bF83prl1ivE21u7u=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CarthusDojo",
                        "channelId": "UCwrQRsOpPZhIJtdxHc7UYMA",
                        "title": "Carthu's Dojo"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Is a new Dragon Ball anime finally here? Will New York Comic Con 2023 be revealing Dragon Ball Magic? BECOME A MEMBER ...",
                    "isLiveNow": false,
                    "lengthSeconds": 9669,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/bQ8XFI26dHM/mqdefault_6s.webp?du=3000&sqp=CKjPpKkG&rs=AOn4CLC8yeF_-3Tyycqkff3kQlvBgMM2Kg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "Streamed 17 hours ago",
                    "stats": {
                        "views": 135218
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/bQ8XFI26dHM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzTct-Jjyz787llLKKqPxhdSxRqg",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/bQ8XFI26dHM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDosRCPXYCuxS0KXD7AvY4Kuyinfg",
                            "width": 720
                        }
                    ],
                    "title": "Dragon Ball DAIMA New Anime Announcement? (LIVE REACTION & BREAKDOWN)",
                    "videoId": "bQ8XFI26dHM"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKanEGbO5Q8jr8hW9fNOAz36snnqTC5G-5R8_0TSAQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@JudoSloth",
                        "channelId": "UC85aYbNSFjsJdxfpxgQr8tA",
                        "title": "Judo Sloth Gaming"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "The Barcher, Hog Wizard, Lavaloon and Golem Witch are 4 New Troops for the Mashup Madness Halloween Event in Clash of ...",
                    "isLiveNow": false,
                    "lengthSeconds": 739,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/WyoaDQycv1Y/mqdefault_6s.webp?du=3000&sqp=CKSnpKkG&rs=AOn4CLClxMoQRTPiOKfUA9qdkzloTu0XnQ",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "23 hours ago",
                    "stats": {
                        "views": 450893
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/WyoaDQycv1Y/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhZIGUoGTAP&rs=AOn4CLBQwiNUSk0A6UCi4K36OcLG1kZSNw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/WyoaDQycv1Y/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhZIGUoGTAP&rs=AOn4CLBj4_TY0WBkHSYfz6rjuHgsGntvxQ",
                            "width": 720
                        }
                    ],
                    "title": "Mashup Madness Event Explained - 4 New Troops!",
                    "videoId": "WyoaDQycv1Y"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/mAZ2LbTcsIA6xw-RFgKnY1JQAuxHNG4fBjCc94vFHGMDkQmQ4HSQ7Rh8-17PKgvYaZTqECfV6VY=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [],
                        "canonicalBaseUrl": "/@EggchasersRugby",
                        "channelId": "UCLYA6PYrrvy7DsRDWXCX24g",
                        "title": "Eggchasers Rugby"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "This game will be EPIC. Here's my thoughts now that Ian Foster has named his 23 man squad, plus a combined 23 to assess ...",
                    "isLiveNow": false,
                    "lengthSeconds": 643,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/PRXc6eV3UnI/mqdefault_6s.webp?du=3000&sqp=CJjPpKkG&rs=AOn4CLAno0AC_9WrSnda6plE7K-OPrqWHw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "19 hours ago",
                    "stats": {
                        "views": 52006
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/PRXc6eV3UnI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPJ2kJBsHpITthKBzEDIhcckhF3g",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/PRXc6eV3UnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOm5L2z0GAQp84UcMKgj9e2D2pyA",
                            "width": 720
                        }
                    ],
                    "title": "IRELAND v NEW ZEALAND | SELECTION REACTION | All Black Squad Named",
                    "videoId": "PRXc6eV3UnI"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZcfttRD5xfGDNjTXnkgUQMPkGHUICAdHVxWW66CQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@Geekdom101",
                        "channelId": "UCgIqhB8oD5SZ0yUSp71VCOQ",
                        "title": "Geekdom101"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "MERCH: https://tinyurl.com/dbmagic2023 | NEW 2024 Dragon Ball Daima Anime Trailer REACTION and frame by frame ...",
                    "isLiveNow": false,
                    "lengthSeconds": 1000,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/mo6-ZZAZFNg/mqdefault_6s.webp?du=3000&sqp=CMDcpKkG&rs=AOn4CLAl9xWUoMbvC4wk4bap0_WgjX-KpQ",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "17 hours ago",
                    "stats": {
                        "views": 63246
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/mo6-ZZAZFNg/hq720_custom_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oXDAP&rs=AOn4CLDaRQjIMsIonCujYsdt3x3NMfNDwA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/mo6-ZZAZFNg/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyID0oXDAP&rs=AOn4CLBVDjoZ6iKxEumLwhwnNMPA6lZfeg",
                            "width": 720
                        }
                    ],
                    "title": "NEW 2024 ANIME Dragon Ball Daima Trailer Breakdown",
                    "videoId": "mo6-ZZAZFNg"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@ForbesBreakingNews",
                        "channelId": "UCg40OxZ1GYh3u3jBntB6DLg",
                        "title": "Forbes Breaking News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "At his campaign rally in Cedar Rapids, Iowa, on Saturday, former President Trump railed about his indictments, and talked about ...",
                    "isLiveNow": false,
                    "lengthSeconds": 298,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/FpVsLjtR3LU/mqdefault_6s.webp?du=3000&sqp=CMHdpKkG&rs=AOn4CLBFKu8IyQDZFIM40pyUnJa8ocs6Dw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "3 days ago",
                    "stats": {
                        "views": 83715
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/FpVsLjtR3LU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZp48DlCvwQzKq-H_-2FLgfuoVXw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/FpVsLjtR3LU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDl-EY8NEhJ8BcR72PILG3SLGyjxQ",
                            "width": 720
                        }
                    ],
                    "title": "'Hello, Ivanka...': Trump Describes Calling His Daughter To Tell Her About Indictments",
                    "videoId": "FpVsLjtR3LU"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZgWfRQE5xMqAh44MWZWkAtfFattOed7wlT8-EJNA=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@PBSNewsHour",
                        "channelId": "UC6ZFN9Tx6xh-skXCuRHCDpQ",
                        "title": "PBS NewsHour"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "Thursday on the NewsHour, hospitals in Gaza are overwhelmed with scores of injured as Israel vows not to allow in aid until ...",
                    "isLiveNow": false,
                    "lengthSeconds": 3406,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/Pl7UA1vWwTg/mqdefault_6s.webp?du=3000&sqp=CMjSpKkG&rs=AOn4CLBBYvnCx6Sgh-Pqy0f-0qWopxRukg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "11 hours ago",
                    "stats": {
                        "views": 90294
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/Pl7UA1vWwTg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAdN4jyHMNgxZwoZeGECoJVcjEKw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/Pl7UA1vWwTg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALmI2XR9bpbMg3Hby7ALsHaQYMrw",
                            "width": 720
                        }
                    ],
                    "title": "PBS NewsHour full episode, Oct. 12, 2023",
                    "videoId": "Pl7UA1vWwTg"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@ABCNews",
                        "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                        "title": "ABC News"
                    },
                    "badges": [
                        "LIVE"
                    ],
                    "descriptionSnippet": "breakingnews #livenews #abcnews #news ABC News Live brings you 24/7 coverage of the latest news headlines and events ...",
                    "isLiveNow": true,
                    "lengthSeconds": null,
                    "movingThumbnails": null,
                    "publishedTimeText": null,
                    "stats": {
                        "viewers": 4227
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzTbCK4LgDX2goVywcKhsYGj0OIg",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi78QcHPft75MgJhotChhIxlVpfA",
                            "width": 720
                        }
                    ],
                    "title": "LIVE: Latest News Headlines and Events l ABC News Live",
                    "videoId": "OOtxXPaQvoM"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZRucSXlbwsWWP17nEPo0F39VgfHDQsxu-xM8ze4jo=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@TODAY",
                        "channelId": "UChDKyKQ59fYz3JO2fl0Z6sg",
                        "title": "TODAY"
                    },
                    "badges": [
                        "CC"
                    ],
                    "descriptionSnippet": "Philadelphia Eagles' star Jason Kelce and his wife open up about the new Prime Video documentary \"Kelce\" that pulls back the ...",
                    "isLiveNow": false,
                    "lengthSeconds": 327,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/CycfFobNPlI/mqdefault_6s.webp?du=3000&sqp=CMDcpKkG&rs=AOn4CLD8biSv6lbF2qJzuony8L6ka0A_Wg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 month ago",
                    "stats": {
                        "views": 763723
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/CycfFobNPlI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBahPFQxuxSZi54sCOUbYqVYv88Tw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/CycfFobNPlI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9qCzj1vy6Iq9wiqy93o9b17-8Dw",
                            "width": 720
                        }
                    ],
                    "title": "Eagles' Jason Kelce pulls back curtain on life in the NFL in new doc",
                    "videoId": "CycfFobNPlI"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKaY-uFR1B45sUcdhSFFA1hGiWrX1fMx5lHZ-NmrzV4=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@NBCNews",
                        "channelId": "UCeY0bbntWzzVIaj2z3QigXg",
                        "title": "NBC News"
                    },
                    "badges": [],
                    "descriptionSnippet": "Officials say there were over 200000 illegal crossings at the southern border last month and a record three million migrants that ...",
                    "isLiveNow": false,
                    "lengthSeconds": 169,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/kd3PDZMz0_w/mqdefault_6s.webp?du=3000&sqp=CKy_pKkG&rs=AOn4CLALeytrfiOna06BigCCIyVVdRA1pg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "9 days ago",
                    "stats": {
                        "views": 903750
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPcHayllw1hga591xxo0oGuBlEPA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/kd3PDZMz0_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGiaojxCzXCZngq-efMmgYfE7B0Q",
                            "width": 720
                        }
                    ],
                    "title": "New York City public hospitals overwhelmed by increase of migrants",
                    "videoId": "kd3PDZMz0_w"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZQUHZKH4bZxWg3QFFIV_O5ZunEk7sNt1Aj8GWC2w=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@LikeNastyaofficial",
                        "channelId": "UCJplp5SjeGSdVdwsfb9Q7lQ",
                        "title": "Like Nastya"
                    },
                    "badges": [
                        "4K"
                    ],
                    "descriptionSnippet": "Nastya and new useful stories for kids about behavior and friendship. 00:00 Nastya and the story about dispensers 5:29 Nastya ...",
                    "isLiveNow": false,
                    "lengthSeconds": 1360,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/7KhI22Hzlpw/mqdefault_6s.webp?du=3000&sqp=CJSqpKkG&rs=AOn4CLDsEw8Kkc86xe-6iZwI72T7WfCgow",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 months ago",
                    "stats": {
                        "views": 33573886
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/7KhI22Hzlpw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfRQEwXkzbrwRKSdj5rBPgTf0o1A",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/7KhI22Hzlpw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzs71Cc8sVXMUb_3g4h_REJ7jw1g",
                            "width": 720
                        }
                    ],
                    "title": "Nastya and new useful stories for kids about behavior and friendship",
                    "videoId": "7KhI22Hzlpw"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@ABCNews",
                        "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                        "title": "ABC News"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "israel #gaza #housespeaker #hamasattack subscribe to ABC News on YouTube: https://bit.ly/2vZb6yP Latest updates: ...",
                    "isLiveNow": false,
                    "lengthSeconds": 5324,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/P6V0_3Ckpzo/mqdefault_6s.webp?du=3000&sqp=CJa-pKkG&rs=AOn4CLDgpJt53u8R-vGVlV_bConS4vMtRQ",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "Streamed 11 hours ago",
                    "stats": {
                        "views": 34404
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/P6V0_3Ckpzo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzb8hkGb2qFMyhmfSjOHBsJ6jFtg",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/P6V0_3Ckpzo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdczUZQZFsCmVwTIgP1mxlwOKwSQ",
                            "width": 720
                        }
                    ],
                    "title": "ABC News Prime: Israeli airstrikes pound Gaza; House speaker battle drags on; Israel relief efforts",
                    "videoId": "P6V0_3Ckpzo"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKbSMbYWQ5TLMPPDKBf_oJX6QHvatlPZkJt6YLpj9Oc=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CNBC",
                        "channelId": "UCvJJ_dzjViJCoLf5uKUTwoA",
                        "title": "CNBC"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Drivers headed to downtown Manhattan will face a new toll beginning in spring 2024. The final fee, which is still up for debate, ...",
                    "isLiveNow": false,
                    "lengthSeconds": 763,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/cjG_8zFVFAw/mqdefault_6s.webp?du=3000&sqp=CLSvpKkG&rs=AOn4CLCZl9zWgAVcNWUNKo_CZdH9YGyFDA",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "4 days ago",
                    "stats": {
                        "views": 744030
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3RuNfVrQ7tdCaMvUWchDuScpOUA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/cjG_8zFVFAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVNBJsD7SDW-xamWweFf6C079PdA",
                            "width": 720
                        }
                    ],
                    "title": "Why New York Will Charge $23/Day To Drive Into Manhattan",
                    "videoId": "cjG_8zFVFAw"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKY8F_PNW1bMFs7xKOk2Ias-j7N-9C2eoNj8HKjeuN4=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@msnbc",
                        "channelId": "UCaXkIU1QidjPwiAYu6GcHjg",
                        "title": "MSNBC"
                    },
                    "badges": [
                        "New",
                        "CC"
                    ],
                    "descriptionSnippet": "On Day 5 of Donald Trump's fraud trial in New York, former Trump Org official Jeffrey McConney was grilled on the stand about the ...",
                    "isLiveNow": false,
                    "lengthSeconds": 362,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/AgueMRcPZ2I/mqdefault_6s.webp?du=3000&sqp=CPC7pKkG&rs=AOn4CLBBQnhzuWjrocDPDaa9Xi-Fu0PoEg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "6 days ago",
                    "stats": {
                        "views": 513269
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/AgueMRcPZ2I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHVAKdnkWI8mO0IHxCq1yVSKtNxw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/AgueMRcPZ2I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNAbPHVCBn8C-wXIVZFm_Hb33DJg",
                            "width": 720
                        }
                    ],
                    "title": "'Staggering deceit': Bogus Trump property valuations laid bare at fraud trial",
                    "videoId": "AgueMRcPZ2I"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKYwa4VQ6OCG5azfDsCW-Wb3heKeci5gHsHNH7kzuDE=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@PlayStation",
                        "channelId": "UC-2Y8dQb0S6DtpxNgAKoJKA",
                        "title": "PlayStation"
                    },
                    "badges": [
                        "New",
                        "4K"
                    ],
                    "descriptionSnippet": "PlayStation®5 Console Play Like Never Before® The PS5® console unleashes new gaming possibilities that you never ...",
                    "isLiveNow": false,
                    "lengthSeconds": 21,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/1BU4VXofbQk/mqdefault_6s.webp?du=3000&sqp=CKaopKkG&rs=AOn4CLAmAi18vHtfKQyCsKHMG9gS5POUbA",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "2 days ago",
                    "stats": {
                        "views": 1450687
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/1BU4VXofbQk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDC8IUrvRoDRbDeG1mxSj97CtEB2A",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/1BU4VXofbQk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0vYj5ptY5aDSj2NKdA4OIl_y2PQ",
                            "width": 720
                        }
                    ],
                    "title": "PlayStation 5 - Same Immersive Power. New Slimmer Size.",
                    "videoId": "1BU4VXofbQk"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/y_esGAQOhX4rTpWvrALErAJlFbm_2TIVrvcVfcZny7TuA8dJZgOQcC6KRfd_J5hljFe-foYXj9U=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@BBCNews",
                        "channelId": "UC16niRr50-MSBwiO3YDb3RA",
                        "title": "BBC News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "The Israeli military says hundreds of thousands of troops are near the Gaza border \"ready to execute the mission we have been ...",
                    "isLiveNow": false,
                    "lengthSeconds": 723,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/h5s1HYakay8/mqdefault_6s.webp?du=3000&sqp=CLCppKkG&rs=AOn4CLBZ8U1rSuNsDw5SsrNwgtCUsrGIMA",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "2 days ago",
                    "stats": {
                        "views": 2641482
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/h5s1HYakay8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtIKpwE0tdtzd27ZlV7zSjVmp1DQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/h5s1HYakay8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAw9iEqK93HplPfaLGEFC_HJt5hHQ",
                            "width": 720
                        }
                    ],
                    "title": "New Israeli strikes on Gaza as troops mass on the border 'to execute the mission' - BBC News",
                    "videoId": "h5s1HYakay8"
                }
            },
            {
                "channel": {
                    "avatar": [
                        {
                            "height": 88,
                            "url": "https://yt3.ggpht.com/7TCQSq2jWIU17VdVc3A09tiI2SAWa_PqE_HhkpU-QVIBLf5LZX-HLL-wkE_OpFPxmxDQpQIg3A=s88-c-k-c0x00ffffff-no-rj-mo",
                            "width": 88
                        },
                        {
                            "height": 176,
                            "url": "https://yt3.ggpht.com/7TCQSq2jWIU17VdVc3A09tiI2SAWa_PqE_HhkpU-QVIBLf5LZX-HLL-wkE_OpFPxmxDQpQIg3A=s176-c-k-c0x00ffffff-no-rj-mo",
                            "width": 176
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "canonicalBaseUrl": "/@nyjets",
                    "channelId": "UCROj9vBjc4ZW3AL4cd_BjHg",
                    "descriptionSnippet": "Welcome to the official YouTube page of the New York Jets. Subscribe to the New York Jets YouTube channel to watch our ...",
                    "stats": {
                        "subscribers": 123000,
                        "subscribersText": "123K subscribers"
                    },
                    "title": "New York Jets",
                    "username": "@nyjets"
                },
                "type": "channel"
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKZNw3rxozNFgI-_n6uGH84R7ami4mAGNQpST1ptSrA=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@CTVNews",
                        "channelId": "UCi7Zk9baY1tvdlgxIML8MXg",
                        "title": "CTV News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "A lawsuit filed against Air Canada is offering new details into a $20 million gold heist earlier this year at Toronto Pearson.",
                    "isLiveNow": false,
                    "lengthSeconds": 169,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/5I4gziIa0HM/mqdefault_6s.webp?du=3000&sqp=CPajpKkG&rs=AOn4CLCQ3-kuxMK4Gs9WjdOgGNhmMhoqcg",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 122704
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/5I4gziIa0HM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB25fAjOYOxqhPkl7E0Sa2ijIAiGQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/5I4gziIa0HM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4m7q2aSDxnPWFcYoPWKa05TsU4A",
                            "width": 720
                        }
                    ],
                    "title": "New details released in $20M gold heist at Toronto Pearson Airport",
                    "videoId": "5I4gziIa0HM"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/kDUg480xOHHjIEnvADRDAz8w9MapJEx-3UJjJQzfeg4O-SrAGHTOSpd5Tm5QtJi0RlSfafMxQg=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@NFL",
                        "channelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
                        "title": "NFL"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Watch live local and primetime games, NFL RedZone, and NFL Network on Plus.NFL.com Check out our other channels: NFL ...",
                    "isLiveNow": false,
                    "lengthSeconds": 381,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/OplKxsEGSjs/mqdefault_6s.webp?du=3000&sqp=CJTApKkG&rs=AOn4CLA-SbuiftbKTx7FQ-ciCZURPTzvrw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 42640
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/OplKxsEGSjs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDL9MhOhNazcGsehaEPxIWrPB40ww",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/OplKxsEGSjs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMXoTUh0F7WWyNofWE2QJ2ouirRA",
                            "width": 720
                        }
                    ],
                    "title": "New Orleans Saints vs. Houston Texans | 2023 Week 6 Game Preview",
                    "videoId": "OplKxsEGSjs"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKbFERHj1HduGYFiCQpZH4wm4StSkS6WJkl3xMdS0A=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [],
                        "canonicalBaseUrl": "/@HindiKahaniTV",
                        "channelId": "UCSfX2TUPfxMpE2D2K1-ZZlw",
                        "title": "Hindi Kahaniya TV"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Join Our Group Whatsapp:- https://bit.ly/whatsappgkme Telegram:- https://bit.ly/telegramkme ननद का पुराना पति ...",
                    "isLiveNow": false,
                    "lengthSeconds": 894,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/OU6dKR_iEgk/mqdefault_6s.webp?du=3000&sqp=CJDIpKkG&rs=AOn4CLB0aop1wVY4lNYqMB4QRfGRLXua1A",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "10 hours ago",
                    "stats": {
                        "views": 79108
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/OU6dKR_iEgk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDpY1bVXz-jZB9V3d44RKJgrj_FsA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/OU6dKR_iEgk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDhf7HaV4um6-w6YD2fi7cotpZbyw",
                            "width": 720
                        }
                    ],
                    "title": "ननद का पुराना पति | Hindi Kahani | Moral Stories | Hindi Story | Storytime | New Bedtime Stories",
                    "videoId": "OU6dKR_iEgk"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/H1_N10kHv1ZxDIxLMk0Cft6aW0rvCPEWdw82k_m9cFPy8x-8Yd7daJ3Ntkl8ruK-HdjyiSXr=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@DuckyBhai",
                        "channelId": "UC_c-RTowPbIlzMkIa_O7s6Q",
                        "title": "Ducky Bhai"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Don't forget to subscribe !!! instagram▻ https://www.instagram.com/duckybhai/ Twitter▻ https://twitter.com/duckybhai Facebook▻ ...",
                    "isLiveNow": false,
                    "lengthSeconds": 769,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/hA1IYN26kWU/mqdefault_6s.webp?du=3000&sqp=CKjVpKkG&rs=AOn4CLBtG7uQ_PDedGjlvhBo2a-k72I_aw",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "22 hours ago",
                    "stats": {
                        "views": 1493845
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/hA1IYN26kWU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeKKArKBUAR3J4nWOd1kiFGgm4VA",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/hA1IYN26kWU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBUC20hPVN9yGySRE6rIoA9G1-CQ",
                            "width": 720
                        }
                    ],
                    "title": "I Met My New Chinese Friend At Train Station 😃",
                    "videoId": "hA1IYN26kWU"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKbULeS_OwOwk_ldNf6zqCcF9mK4_ePUcvjsvVsCDA=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@TondeGamer",
                        "channelId": "UCD5EC8IWhOFalXtePCkhJTA",
                        "title": "Tonde Gamer"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "Business Mail sarju.giri.sg@gmail.com Thanks For WATCHING; Don't Forget To like & Subscribe!! ➡️ About Me: Hey guys, ...",
                    "isLiveNow": false,
                    "lengthSeconds": 1502,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/JhVtZp-3WaQ/mqdefault_6s.webp?du=3000&sqp=CJjVpKkG&rs=AOn4CLC6NeMXCbuyZVvh9dS6xwAGU4g4-Q",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "1 day ago",
                    "stats": {
                        "views": 231376
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/JhVtZp-3WaQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCk5FbFyd1-ItjIQdzZPsnlGyatNw",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/JhVtZp-3WaQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFPaRiP-bnSocSJSsAqpKMQyR47A",
                            "width": 720
                        }
                    ],
                    "title": "As Gaming & Tonde Gamer New Wukong Vs Pro Ignis Character & Old Wukong 😱 Free Fire Max",
                    "videoId": "JhVtZp-3WaQ"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/xrMXuR2ARUKOvvMKeB2XAFMt6rchyUkiEn2G2J1DtWjL5zVxKW9H4jlkQdBdBoqTi_WmU5_dGQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@FoxNews",
                        "channelId": "UCXIJgqnII2ZOINSWNOGFThA",
                        "title": "Fox News"
                    },
                    "badges": [
                        "New"
                    ],
                    "descriptionSnippet": "A full House vote is expected as Republicans attempt to elect a new speaker as Israel adds to urgency. #foxnews Subscribe to ...",
                    "isLiveNow": false,
                    "lengthSeconds": 11421,
                    "movingThumbnails": null,
                    "publishedTimeText": "Streamed 1 day ago",
                    "stats": {
                        "views": 82522
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/uaRxK2fe9KE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf8iHyjMLU7eZMYka6z1geg2unEQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/uaRxK2fe9KE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDlBWmzQl17KSpda387y_2zmZVjEQ",
                            "width": 720
                        }
                    ],
                    "title": "Live: House to vote on new speaker after GOP nominates Rep. Steve Scalise",
                    "videoId": "uaRxK2fe9KE"
                }
            },
            {
                "type": "video",
                "video": {
                    "author": {
                        "avatar": [
                            {
                                "height": 68,
                                "url": "https://yt3.ggpht.com/ytc/APkrFKaWqx5IfcKbi5z8FgPsM_kA6NQ2zTAx8gr27yQcdQ=s68-c-k-c0x00ffffff-no-rj",
                                "width": 68
                            }
                        ],
                        "badges": [
                            {
                                "text": "Verified",
                                "type": "VERIFIED_CHANNEL"
                            }
                        ],
                        "canonicalBaseUrl": "/@HYBELABELS",
                        "channelId": "UC3IZKseVpdzPSBaWxBxundA",
                        "title": "HYBE LABELS"
                    },
                    "badges": [
                        "4K",
                        "CC"
                    ],
                    "descriptionSnippet": "NewJeans (뉴진스) 'New Jeans' Official MV Producer: MIN HEE JIN Music Video Director: Youngeum Lee THE POWERPUFF ...",
                    "isLiveNow": false,
                    "lengthSeconds": 211,
                    "movingThumbnails": [
                        {
                            "height": 180,
                            "url": "https://i.ytimg.com/an_webp/kcelgrGY1h8/mqdefault_6s.webp?du=3000&sqp=CPjGpKkG&rs=AOn4CLCQli1EhchsGYn_6QwgjWu1uQG4ug",
                            "width": 320
                        }
                    ],
                    "publishedTimeText": "3 months ago",
                    "stats": {
                        "views": 20876325
                    },
                    "thumbnails": [
                        {
                            "height": 202,
                            "url": "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAscTTeoGjtCSJAzNC47sLBK10eyQ",
                            "width": 360
                        },
                        {
                            "height": 404,
                            "url": "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0fvkqG9puCo0K_u3fIXozoO8Btg",
                            "width": 720
                        }
                    ],
                    "title": "NewJeans (뉴진스) 'New Jeans' Official MV",
                    "videoId": "kcelgrGY1h8"
                }
            }
        ],
        "cursorNext": "EqYDEgNOZXcangNTQlNDQVF0RlJHZHlTRTAwUlVWNGE0SUJDMGRJVlRkWldsbHNPSEJOZ2dFUFVrUk9VMjVYVERKbU5IZG9kMlZyZ2dFTGFqaEZPVGhCYms0NFJEU0NBUXM0VlZkdE1YWndkRTF3U1lJQkMwaHVTMWh6Ym1wSFNWOWpnZ0VMWWxFNFdFWkpNalprU0UyQ0FRdFhlVzloUkZGNVkzWXhXWUlCQzFCU1dHTTJaVll6Vlc1SmdnRUxiVzgyTFZwYVFWcEdUbWVDQVFzeFFsVTBWbGh2Wm1KUmE0SUJDMmcxY3pGSVdXRnJZWGs0Z2dFWVZVTlNUMm81ZGtKcVl6UmFWek5CVERSalpGOUNha2huZ2dFTE5VazBaM3BwU1dFd1NFMkNBUXRQY0d4TGVITkZSMU5xYzRJQkMwOVZObVJMVWw5cFJXZHJnZ0VMYUVFeFNWbE9NalpyVjFXQ0FRdEthRlowV25BdE0xZGhVWUlCQzNWaFVuaExNbVpsT1V0RmdnRUxhMk5sYkdkeVIxa3hhRGl5QVFZS0JBZ1dFQUklM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D",
        "didYouMean": null,
        "estimatedResults": 29579719069,
        "filterGroups": [
            {
                "filters": [
                    {
                        "cursorSelect": "TmV3JiYmRWdJSUFRJTNEJTNE",
                        "label": "Last hour",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJSUFnJTNEJTNE",
                        "label": "Today",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJSUF3JTNEJTNE",
                        "label": "This week",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJSUJBJTNEJTNE",
                        "label": "This month",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJSUJRJTNEJTNE",
                        "label": "This year",
                        "selected": false
                    }
                ],
                "title": "Upload date"
            },
            {
                "filters": [
                    {
                        "cursorSelect": "TmV3JiYmRWdJUUFRJTNEJTNE",
                        "label": "Video",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJUUFnJTNEJTNE",
                        "label": "Channel",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJUUF3JTNEJTNE",
                        "label": "Playlist",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJUUJBJTNEJTNE",
                        "label": "Movie",
                        "selected": false
                    }
                ],
                "title": "Type"
            },
            {
                "filters": [
                    {
                        "cursorSelect": "TmV3JiYmRWdJWUFRJTNEJTNE",
                        "label": "Under 4 minutes",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJWUF3JTNEJTNE",
                        "label": "4 - 20 minutes",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJWUFnJTNEJTNE",
                        "label": "Over 20 minutes",
                        "selected": false
                    }
                ],
                "title": "Duration"
            },
            {
                "filters": [
                    {
                        "cursorSelect": "TmV3JiYmRWdKQUFRJTNEJTNE",
                        "label": "Live",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdKd0FRJTNEJTNE",
                        "label": "4K",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJZ0FRJTNEJTNE",
                        "label": "HD",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJb0FRJTNEJTNE",
                        "label": "Subtitles/CC",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJd0FRJTNEJTNE",
                        "label": "Creative Commons",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdKNEFRJTNEJTNE",
                        "label": "360°",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdQUUFRRSUzRA==",
                        "label": "VR180",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdJNEFRJTNEJTNE",
                        "label": "3D",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdQSUFRRSUzRA==",
                        "label": "HDR",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdPNEFRRSUzRA==",
                        "label": "Location",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmRWdKSUFRJTNEJTNE",
                        "label": "Purchased",
                        "selected": false
                    }
                ],
                "title": "Features"
            },
            {
                "filters": [
                    {
                        "cursorSelect": null,
                        "label": "Relevance",
                        "selected": true
                    },
                    {
                        "cursorSelect": "TmV3JiYmQ0FJJTNE",
                        "label": "Upload date",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmQ0FNJTNE",
                        "label": "View count",
                        "selected": false
                    },
                    {
                        "cursorSelect": "TmV3JiYmQ0FFJTNE",
                        "label": "Rating",
                        "selected": false
                    }
                ],
                "title": "Sort by"
            }
        ],
        "refinements": []
    }
]


const vidDetailApi =   {
    "author": {
        "avatar": [
            {
                "height": 48,
                "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s48-c-k-c0x00ffffff-no-rj",
                "width": 48
            },
            {
                "height": 88,
                "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s88-c-k-c0x00ffffff-no-rj",
                "width": 88
            },
            {
                "height": 176,
                "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s176-c-k-c0x00ffffff-no-rj",
                "width": 176
            }
        ],
        "badges": [
            {
                "text": "Verified",
                "type": "VERIFIED_CHANNEL"
            }
        ],
        "canonicalBaseUrl": "/@CNN",
        "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
        "stats": {
            "subscribers": 15600000,
            "subscribersText": "15.6M subscribers"
        },
        "title": "CNN"
    },
    "captions": [
        {
            "language": {
                "code": "en",
                "name": "English"
            },
            "url": "https://www.youtube.com/api/timedtext?v=yqaeGmzE3SQ&ei=cTApZbP5BoeP_9EPu6-z-Ac&opi=112496729&xoaf=5&hl=en&ip=0.0.0.0&ipbits=0&expire=1697223393&sparams=ip,ipbits,expire,v,ei,opi,xoaf&signature=52D05C32953E499174F717916F3213DF3C037C24.2429C48D64B10CB191C76D2223FD8C5AD6AD7DCA&key=yt8&lang=en"
        }
    ],
    "cards": [
        null
    ],
    "category": "News & Politics",
    "chapters": [],
    "description": "Russian President Vladimir Putin has announced that Russia has successfully carried out a test of a new generation of nuclear-powered cruise missile. #CNN #News",
    "endScreen": {
        "items": [
            {
                "channel": {
                    "avatar": [
                        {
                            "height": 250,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s250-c-k-c0x00ffffff-no-rj",
                            "width": 250
                        },
                        {
                            "height": 400,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s400-c-k-c0x00ffffff-no-rj",
                            "width": 400
                        }
                    ],
                    "channelId": "UCupvZG-5ko_eiXAupbDfxWw",
                    "description": "CNN operates as a division of Turner Broadcasting System, which is a subsidiary of Warner Media. CNN identifies itself as -- and is widely known to be - the most trusted source for news and information. The CNN umbrella includes nine cable and satellite television networks, two radio networks, the CNN Digital Network, which is the top network of news Web sites in the United States, and CNN Newsource, the world's most extensively syndicated news service. CNN is proud of our ability to bring you up-to-the-minute news from around the world, as a result of our many extensions.",
                    "title": "CNN"
                },
                "type": "channel"
            },
            {
                "type": "video",
                "video": {
                    "lengthSeconds": 549,
                    "stats": {
                        "views": 688786
                    },
                    "thumbnails": [
                        {
                            "height": 94,
                            "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDG8LCu6p4zaqJkIhFueStd_qethA",
                            "width": 168
                        },
                        {
                            "height": 110,
                            "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-N1-TLB-DQViDd-bdkA1XZdYRUw",
                            "width": 196
                        },
                        {
                            "height": 138,
                            "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaomZ3Ki6P7XosIBqYYCGkHvIxNA",
                            "width": 246
                        },
                        {
                            "height": 188,
                            "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFKxs_RhQfZSx5IrhlC7UQWhntDQ",
                            "width": 336
                        },
                        {
                            "height": 1080,
                            "url": "https://i.ytimg.com/vi_webp/AwwvakLiTm8/maxresdefault.webp",
                            "width": 1920
                        }
                    ],
                    "title": "Expert breaks down 'major deal' of Russian retreat on Black Sea",
                    "videoId": "AwwvakLiTm8"
                }
            }
        ]
    },
    "isLiveContent": false,
    "isLiveNow": false,
    "keywords": [
        "latest news",
        "Happening now",
        "CNN",
        "Max Foster",
        "CNN Newsroom",
        "Boris Sanchez",
        "CNN News Central",
        "Jill Dougherty",
        "Vladimir Putin",
        "Putin Nuclear Threat",
        "Russia Nuclear",
        "Russia Nuclear Missile Test",
        "Burevestnik",
        "Kinzhal ballistic missile",
        "Russia Ukraine War",
        "Putin's War",
        "Volodymyr Zelensky",
        "Russia Invasion",
        "Ukraine Counteroffensive",
        "Russia Military",
        "Urkaine Military",
        "Eastern Europe",
        "Sochi",
        "Valdai Discussion Club",
        "Moscow",
        "Kremlin",
        "SCC-X-9 Skyfall",
        "NATO"
    ],
    "lengthSeconds": 325,
    "musics": [],
    "publishedDate": "2023-10-06T11:23:31-07:00",
    "stats": {
        "comments": 8668,
        "likes": 7521,
        "views": 824906
    },
    "superTitle": {
        "items": [
            "#CNN",
            "#News"
        ]
    },
    "thumbnails": [
        {
            "height": 94,
            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAZAIEXDON1nexzssPO_vIkmkFiBA",
            "width": 168
        },
        {
            "height": 110,
            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDbYnt2KtHYWuwfw0glkj1oG3TZng",
            "width": 196
        },
        {
            "height": 138,
            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyFPaoGpkI88L0a-i2jA3mOjDh0Q",
            "width": 246
        },
        {
            "height": 188,
            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnIb4WvTVMGJh2L2Vu0ilUHxWJww",
            "width": 336
        },
        {
            "height": 1080,
            "url": "https://i.ytimg.com/vi/yqaeGmzE3SQ/maxresdefault.jpg",
            "width": 1920
        }
    ],
    "title": "Hear Putin's threat to the world after Russia tests new nuclear missile",
    "videoId": "yqaeGmzE3SQ"
}

export const relatedVideoApi =   {
    "contents": [
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 566,
                "publishedTimeText": "24 minutes ago",
                "stats": {
                    "views": 11997
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/D-9-A00vMoc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAG50JL6d5WLbS2gXdIUNuXVJoPaw",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/D-9-A00vMoc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChJAft8esqGM2_EAV-JxVxwTzUfg",
                        "width": 336
                    }
                ],
                "title": "Israel warns 1.1 million people to leave northern Gaza",
                "videoId": "D-9-A00vMoc"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jiUGvHJL6pzbzE_tEtmhAJEfNZNXs_8vLokuqObIPAq8mrt22NeW1OZOpcm-azNJTmNwj03Z9Q=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Global News"
                },
                "isLiveNow": false,
                "lengthSeconds": 259,
                "publishedTimeText": "7 days ago",
                "stats": {
                    "views": 1346922
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/jhJAcA32Q8k/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCIGbF34nRgoFq7HRfvfwKEqkxvIw",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/jhJAcA32Q8k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAAQRsdsowXc70PU8lbOEgeAfS4Xw",
                        "width": 336
                    }
                ],
                "title": "Putin challenges West: \"What right do you have to warn anyone?\"",
                "videoId": "jhJAcA32Q8k"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 94,
                "publishedTimeText": "10 years ago",
                "stats": {
                    "views": 17554300
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/jrXf8Qn9pBI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAECpcKh4arxlVh_nQIi_EflMuHVA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/jrXf8Qn9pBI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaK-d76In3hnSXNAf4T9XLF85nQQ",
                        "width": 336
                    }
                ],
                "title": "Hear Vladimir Putin speaking English",
                "videoId": "jrXf8Qn9pBI"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 235,
                "publishedTimeText": "1 month ago",
                "stats": {
                    "views": 2408934
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/u7STLTtOEOM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDbt8Hf-yCjNSm_KvurwTs93BdHtg",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/u7STLTtOEOM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCotMylQc9gpAHm38S3eH49AfsDOQ",
                        "width": 336
                    }
                ],
                "title": "New video shows attack on $4 billion Russian bridge",
                "videoId": "u7STLTtOEOM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 550,
                "publishedTimeText": "18 hours ago",
                "stats": {
                    "views": 483865
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/qHx5qTp2DhY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAOB5D9be1Vsb1BFcf40Sxl_9wV7A",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/qHx5qTp2DhY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHrcfh3_ie4vD08XkRmk7cj5WpIg",
                        "width": 336
                    }
                ],
                "title": "'Dangerous and unhinged': White House reacts to Trump complimenting Hezbollah",
                "videoId": "qHx5qTp2DhY"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/4foOCod0Y3ZfDn1aaAInJW9p0eoT4p8LWU8sadnUztCnZnr4W6cPwWZDZ38bZbEQMYfr05rByw=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CBS Pittsburgh"
                },
                "isLiveNow": false,
                "lengthSeconds": 135,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 4438587
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/L2btBQu7UCs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCehns5Lhw858DHe0ejMepDaXoIbA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/L2btBQu7UCs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB23Z8ZzJo-rbYVBAPm4CC9PfvUWg",
                        "width": 336
                    }
                ],
                "title": "Music teacher charged after husband reports alleged inappropriate relationship",
                "videoId": "L2btBQu7UCs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/y_esGAQOhX4rTpWvrALErAJlFbm_2TIVrvcVfcZny7TuA8dJZgOQcC6KRfd_J5hljFe-foYXj9U=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "BBC News"
                },
                "isLiveNow": false,
                "lengthSeconds": 798,
                "publishedTimeText": "3 hours ago",
                "stats": {
                    "views": 846314
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/m7T76ChiHGQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCfJ_zgrS78onOf4ZnOYde7uFA6og",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/m7T76ChiHGQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD66kbWC6AZgoMTUq9PYa5RWj9mZg",
                        "width": 336
                    }
                ],
                "title": "Israel’s evacuation order to northern Gaza ‘impossible’, says UN - BBC News",
                "videoId": "m7T76ChiHGQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/APkrFKY5zTVWsnsyD9mpRZm5q5vKLy1jMRceHKT2d8ZOSg=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Vox"
                },
                "isLiveNow": false,
                "lengthSeconds": 529,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 11095552
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/MVu8QbxafJE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBzLE_wCJ9YQW-3pff93b3BpetQlA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/MVu8QbxafJE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDAMJ1dSmfxJ94UZC1_9dFPVf06HA",
                        "width": 336
                    }
                ],
                "title": "Putin's war on Ukraine, explained",
                "videoId": "MVu8QbxafJE"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 511,
                "publishedTimeText": "1 year ago",
                "stats": {
                    "views": 3791823
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/OWrMW7H_RJw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB6vN75ZzHcwjVSudHccaSZnaCTLA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/OWrMW7H_RJw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxNY-UNHcg9g_KO6szBlpl7Yy_FQ",
                        "width": 336
                    }
                ],
                "title": "US defense secretary responds to Putin's nuclear threat",
                "videoId": "OWrMW7H_RJw"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Forbes Breaking News"
                },
                "isLiveNow": false,
                "lengthSeconds": 244,
                "publishedTimeText": "12 days ago",
                "stats": {
                    "views": 1935903
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/NUikpKrRRNQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLClXPUPt-JYTIWLbPh1U74qXavAnA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/NUikpKrRRNQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLSbvGxx9EFMhZopG46TYjfcrVZg",
                        "width": 336
                    }
                ],
                "title": "WATCH: Trump Does Impression Of Biden Having Trouble Walking Off Stage During California Speech",
                "videoId": "NUikpKrRRNQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 423,
                "publishedTimeText": "2 days ago",
                "stats": {
                    "views": 1667492
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/a34zpFaoBoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDpdLD2XSJ3Zo0V0FZC_D1MehTavA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/a34zpFaoBoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQQJmFi56YBwYWf5vvdBxxgIKBGA",
                        "width": 336
                    }
                ],
                "title": "Putin breaks silence on Hamas attack on Israel",
                "videoId": "a34zpFaoBoM"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 451,
                "publishedTimeText": "3 months ago",
                "stats": {
                    "views": 700963
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/x3zgCVqqf3Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA-z4Em5K4ZVrT9Eme1PH2aXG_BHg",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/x3zgCVqqf3Q/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLsoIOa0bZAvvN8B403KdcxDazzg",
                        "width": 336
                    }
                ],
                "title": "Obama: War in Ukraine ‘a wake-up call to Europe’ and democracies around the world",
                "videoId": "x3zgCVqqf3Q"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/APkrFKYYrXovd5Y4i_arKZLoZISQz1umMSBhp6xYxqVFug=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Forbes Breaking News"
                },
                "isLiveNow": false,
                "lengthSeconds": 203,
                "publishedTimeText": "13 hours ago",
                "stats": {
                    "views": 176575
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/sv0hECk5f-c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcd57EuivrVXmRCVpqqz5HMun9Ew",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/sv0hECk5f-c/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuvuCGttef39guzhPjokUMHA2dOg",
                        "width": 336
                    }
                ],
                "title": "Trump Lawyer Alina Habba Rips Ex-IRS Contractor Charles Littlejohn Accused Of Leaking Tax Return",
                "videoId": "sv0hECk5f-c"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/jiUGvHJL6pzbzE_tEtmhAJEfNZNXs_8vLokuqObIPAq8mrt22NeW1OZOpcm-azNJTmNwj03Z9Q=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Global News"
                },
                "isLiveNow": false,
                "lengthSeconds": 126,
                "publishedTimeText": "7 days ago",
                "stats": {
                    "views": 5876849
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/4vaIlhFe9t8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA6AUdGwlDgR6DtpoTa99DLLqYuYw",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/4vaIlhFe9t8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgghr0cg7JOac68m6eSdlWmzHJWQ",
                        "width": 336
                    }
                ],
                "title": "\"An idiot or a bastard:\" Putin rips Canada House speaker who invited Nazi veteran to Parliament",
                "videoId": "4vaIlhFe9t8"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/X0LzOtPc4mghLf-DRucouTfIAJk8OHn3t5Mrw7pM5Z1MQiu2NCz_Iybsa1DrWIWtIz8Gq07i=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Times Radio"
                },
                "isLiveNow": false,
                "lengthSeconds": 1592,
                "publishedTimeText": "2 weeks ago",
                "stats": {
                    "views": 681372
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/gKUyN3HQ1bs/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAKTw4U8klchbYpmLPRbpXV3pkpaw",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/gKUyN3HQ1bs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOeAJfDzbgsr4P_b4w7FPLsC6s9Q",
                        "width": 336
                    }
                ],
                "title": "Oligarchs 'hatred' for Putin grows as he stops caring about Ukraine losses | Bill Browder",
                "videoId": "gKUyN3HQ1bs"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/APkrFKZvXgrx7UYOggW-Ow296kd9C1Xk8f08tVwbjBvo8Q=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Channel 4 News"
                },
                "isLiveNow": false,
                "lengthSeconds": 1885,
                "publishedTimeText": "17 hours ago",
                "stats": {
                    "views": 3337974
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/yBQbhavr4RQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBq2cdzAuxp9ZIst4RLqzXIg-loKQ",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/yBQbhavr4RQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQHwIRCscwKa2diq1VpZT5Sc4duw",
                        "width": 336
                    }
                ],
                "title": "Israel troops mass on Gaza border as hospitals near collapse",
                "videoId": "yBQbhavr4RQ"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/PkHy298NcLen2IGd0jO7m29FC8wfCYRIBplND1ZgheqIVSLjq0b-RQlu_pEfKoSpX6lcqRVGSA=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "Hindustan Times"
                },
                "isLiveNow": false,
                "lengthSeconds": 293,
                "publishedTimeText": "5 days ago",
                "stats": {
                    "views": 3779396
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/MyeEW7RJNSw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyWh75IISXWgB5ylgueQRR3CmUSg",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/MyeEW7RJNSw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwumr-IoBDgZJEkANzLdQgEEzq7g",
                        "width": 336
                    }
                ],
                "title": "Israel's Nearly Impenetrable Iron Dome Struggles To Stop Hamas' 5,000 Rockets | Watch What Happened",
                "videoId": "MyeEW7RJNSw"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 280,
                "publishedTimeText": "8 hours ago",
                "stats": {
                    "views": 103039
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/koXBvLert_g/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCU_vnU9IbE9tyN06laNKJiqAM2Ag",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/koXBvLert_g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiGuVtb6yZOaPTWe2cD2UhSZ_zqQ",
                        "width": 336
                    }
                ],
                "title": "See training camps used by Hamas for attack on Israel",
                "videoId": "koXBvLert_g"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/ytc/APkrFKbjkhiNpXncTV-z10iJXGALSRFdwS9RBH3BERLv9vQ=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "DW News"
                },
                "isLiveNow": false,
                "lengthSeconds": 3397,
                "publishedTimeText": "13 days ago",
                "stats": {
                    "views": 648982
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/G4-ZC_fd19Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCDz5GwRfXwAYNpyD9oCuiwDAzn-A",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/G4-ZC_fd19Y/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbVHfoz9hDJkvOPKFZuYqopLRbhQ",
                        "width": 336
                    }
                ],
                "title": "Decoding Putin and Xi's blueprint for a new world order | DW Analysis",
                "videoId": "G4-ZC_fd19Y"
            }
        },
        {
            "type": "video",
            "video": {
                "author": {
                    "avatar": [
                        {
                            "height": 68,
                            "url": "https://yt3.ggpht.com/n5DRh94eycw6xGcOKTn6LKQwztTwaw24fXPniFTXA3VPgwJaiOFdBwJNtXRHYUf7OdEAk9upwH0=s68-c-k-c0x00ffffff-no-rj",
                            "width": 68
                        }
                    ],
                    "badges": [
                        {
                            "text": "Verified",
                            "type": "VERIFIED_CHANNEL"
                        }
                    ],
                    "title": "CNN"
                },
                "isLiveNow": false,
                "lengthSeconds": 549,
                "publishedTimeText": "6 days ago",
                "stats": {
                    "views": 688942
                },
                "thumbnails": [
                    {
                        "height": 94,
                        "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDG8LCu6p4zaqJkIhFueStd_qethA",
                        "width": 168
                    },
                    {
                        "height": 188,
                        "url": "https://i.ytimg.com/vi/AwwvakLiTm8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFKxs_RhQfZSx5IrhlC7UQWhntDQ",
                        "width": 336
                    }
                ],
                "title": "Expert breaks down 'major deal' of Russian retreat on Black Sea",
                "videoId": "AwwvakLiTm8"
            }
        }
    ],
    "cursorNext": "CBQSDRILeXFhZUdtekUzU1EYACqMBjJzNkw2d3pDQkFxX0JBb0Q4ajRBQ2czQ1Bnb0loLVc4NmJUQTNfY1BDZ1B5UGdBS0RzSS1Dd2pKaDludmdJNlFpWTRCQ2dQeVBnQUtEc0ktQ3dpU3lQYlBrUDczMm80QkNnUHlQZ0FLRHNJLUN3ampvYmphMC1XazJyc0JDZ1B5UGdBS0RzSS1Dd2lXbk5qVGs3V2V2cWdCQ2dQeVBnQUtEY0ktQ2dpcm9PM2QwS0M3c3k4S0FfSS1BQW9Pd2o0TENPUzRpTU9DX2I3YW13RUtBX0ktQUFvTndqNEtDSkg1NmVLYmlPLXRNUW9EOGo0QUNnM0NQZ29JbkluOWo3dUxzN1U1Q2dQeVBnQUtEY0ktQ2dqVWljWFd5cFNwcERVS0FfSS1BQW9Od2o0S0NJT05vTFhGOUl5X2F3b0Q4ajRBQ2c3Q1Bnc0k5UDZwMVpXQnVMN0hBUW9EOGo0QUNnN0NQZ3NJNV9fbHlZS2l5UDZ5QVFvRDhqNEFDZzdDUGdzSTMtMzdpdUdTb3Z2aUFRb0Q4ajRBQ2c3Q1Bnc0l1NnZEanZmR3pOS0FBUW9EOGo0QUNnN0NQZ3NJbE1LdjM5cndob3JJQVFvRDhqNEFDZzNDUGdvSXJPcWtvcnVMNFpNekNnUHlQZ0FLRHNJLUN3ajQ3NjY5eTdmd3dwSUJDZ1B5UGdBS0RjSS1DZ2pXcl9lLXY2SG14eHNLQV9JLUFBb053ajRLQ08tY2laZWs3WXVHQXhJVUFBSUVCZ2dLREE0UUVoUVdHQm9jSGlBaUpDWWFCQWdBRUFFYUJBZ0NFQU1hQkFnRUVBVWFCQWdHRUFjYUJBZ0lFQWthQkFnS0VBc2FCQWdNRUEwYUJBZ09FQThhQkFnUUVCRWFCQWdTRUJNYUJBZ1VFQlVhQkFnV0VCY2FCQWdZRUJrYUJBZ2FFQnNhQkFnY0VCMGFCQWdlRUI4YUJBZ2dFQ0VhQkFnaUVDTWFCQWdrRUNVYUJBZ21FQ2NxRkFBQ0JBWUlDZ3dPRUJJVUZoZ2FIQjRnSWlRbWoPd2F0Y2gtbmV4dC1mZWVk"
}
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


