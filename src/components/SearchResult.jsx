import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/contextApi";
import { fetchDataFromAPI } from "../utils/api";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const searchResultsData = {
  contents: [
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCsRM0YB_dabtEPGPTKo-gcw",
          title: "Adele",
        },
        badges: ["CC"],
        descriptionSnippet:
          "Directed by Xavier Dolan, @XDolan Follow Adele on: Facebook - https://www.facebook.com/Adele Twitter ...",
        isLiveNow: false,
        lengthSeconds: 367,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/YQHsXMglC9A/mqdefault_6s.webp?du=3000&sqp=CIDzpqkG&rs=AOn4CLCa-nYGkGsgobzO9HbV40wwnlgzgA",
            width: 320,
          },
        ],
        publishedTimeText: "7 years ago",
        stats: {
          views: 3100317764,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/YQHsXMglC9A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYksb2AuTQJoxzdDBflr8nzAY82Q",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/YQHsXMglC9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_8cd4gjocXHBSRXMlzxXyeRcyUg",
            width: 720,
          },
        ],
        title: "Adele - Hello (Official Music Video)",
        videoId: "YQHsXMglC9A",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/D7GmA6zGnu1sg7YKBUU5zrH1YCJNY2tX3UjsHs7RfBhwwc_KMfQEddK95B_MsQyUIbSwQ3lVvw=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCAgpG9gQzQHgffUi0eOS5Vg",
          title: "Aqyila",
        },
        badges: ["4K", "CC"],
        descriptionSnippet:
          "Aqyila #Hello Aqyila – Hello (Official Audio) Listen Now: (https://Aqyila.lnk.to/HelloAY) Follow Aqyila: TikTok: ...",
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/k5t0RrijpHg/mqdefault_6s.webp?du=3000&sqp=CMjRpqkG&rs=AOn4CLD7gIhoX8mics8FUp9Wwa2l4qAzQw",
            width: 320,
          },
        ],
        publishedTimeText: "6 months ago",
        stats: {
          views: 1983648,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/k5t0RrijpHg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZuKqkYXgz-VQBA8w_arR4PWgudw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/k5t0RrijpHg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjEkYZKkSBYbdiulinE5a5B_ZEQA",
            width: 720,
          },
        ],
        title: "Aqyila - Hello (Visualizer)",
        videoId: "k5t0RrijpHg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKYzKAc326cptYptWPVYz_rBI9o7jeIC0pi2QDncNg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@AquaLyrics",
          channelId: "UCtSzfeO5IDD0byUhV1d7mdA",
          title: "Aqua Lyrics",
        },
        badges: [],
        descriptionSnippet:
          "Adele - Hello (Lyrics) Follow Adele : https://myspace.com/adelelondon​ https://www.facebook.com/adele​ ...",
        isLiveNow: false,
        lengthSeconds: 297,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/be12BC5pQLE/mqdefault_6s.webp?du=3000&sqp=COfGpqkG&rs=AOn4CLBqLssuS1DMTAsBHKKjXDuamSxrcQ",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 21211007,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/be12BC5pQLE/hqdefault.jpg?sqp=-oaymwE2COADEI4CSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGUoZTAP&rs=AOn4CLDIy5ro6svat2GXBTKB8yx7fDoEIw",
            width: 480,
          },
        ],
        title: "Adele - Hello (Lyrics)",
        videoId: "be12BC5pQLE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbNq3xMgogtI_5bl2e9df4jlb8dV78TMhRomJKdVQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCM3iG_kXUM_9HHVIDI7vEtg",
          title: "lionelrichie",
        },
        badges: ["CC"],
        descriptionSnippet:
          "Music video by Lionel Richie performing Hello. © 2003 Motown Records, a Division of UMG Recordings, Inc. #LionelRichie ...",
        isLiveNow: false,
        lengthSeconds: 327,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/mHONNcZbwDY/mqdefault_6s.webp?du=3000&sqp=CM7vpqkG&rs=AOn4CLDIoXsmKO2sRlMJpqK0D_dnaJLxJw",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 82514080,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/mHONNcZbwDY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByEleBOB5uGfSQEa2Z3UHKFZ6iWA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/mHONNcZbwDY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoUIDZ4MFX4FGR4ht2jukqlPX5lQ",
            width: 720,
          },
        ],
        title: "Lionel Richie - Hello (Official Music Video)",
        videoId: "mHONNcZbwDY",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/D7GmA6zGnu1sg7YKBUU5zrH1YCJNY2tX3UjsHs7RfBhwwc_KMfQEddK95B_MsQyUIbSwQ3lVvw=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCAgpG9gQzQHgffUi0eOS5Vg",
          title: "Aqyila",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Sony Music Canada Hello · Aqyila For the Better (Clean) ℗ 2023 Aqyila. This recording under exclusive ...",
        isLiveNow: false,
        lengthSeconds: 196,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 336973,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/0kLESwvvLZs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGAY_490CO43s920epW2Bl0618Mg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/0kLESwvvLZs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjwpvtA5R34mMqtJg_958y4nL11g",
            width: 720,
          },
        ],
        title: "Hello",
        videoId: "0kLESwvvLZs",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKakBftMs0NWn7gKV7Sgv0_bQYQQMAwNX_a_NH9c7AY=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@HeyBear",
          channelId: "UCtf9cFBJkHVAf2qMqF01xYg",
          title: "Hey Bear Sensory",
        },
        badges: ["LIVE", "New"],
        descriptionSnippet:
          "Welcome to Hey Bear Sensory's Halloween Party stream! Key features of this video - Bright music with lots of rhythm to encourage ...",
        isLiveNow: true,
        lengthSeconds: null,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          viewers: 6713,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/4engUqhAwYQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnKZcnQzh4RQ5easdDUZPd6-_5qg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/4engUqhAwYQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_pMFEfOzMVmcZJm3w6x8SN_wvHw",
            width: 720,
          },
        ],
        title: "Hey Bear Sensory - Halloween Party stream!",
        videoId: "4engUqhAwYQ",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKZmiYVPjkzpbBwf40Pp5joTxiL6GVUiZMzh6hWT9w=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCa-iCk5rSuWnAb_VT9Hzs3w",
          title: "Claire Cottrill",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Universal Music Group Hello? · Clairo · Rejjie Snow diary 001 ℗ 2018 Clairo under exclusive license to ...",
        isLiveNow: false,
        lengthSeconds: 136,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 18780393,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/QkeehQ8D_VM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByIKkn2FPGVSSti8RiVyMqeZlhYA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/QkeehQ8D_VM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABkSCsK7UMTYvvUbM5F-cBz2SMAg",
            width: 720,
          },
        ],
        title: "Hello?",
        videoId: "QkeehQ8D_VM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKYBNf-_CaGreYd7xfVXAWq9Ky8aj0ivTbUBHE3w3Q=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@goldenfish_ent",
          channelId: "UCyeISJFSK_wDFLyldQYTUMA",
          title: "Goldenfish Ent.",
        },
        badges: [],
        descriptionSnippet:
          "Adele Hello hello adele (adele hello lyrics ✍️) Hello, it's me I was wondering if after all these years you'd like to meet To go ...",
        isLiveNow: false,
        lengthSeconds: 330,
        movingThumbnails: null,
        publishedTimeText: "2 months ago",
        stats: {
          views: 92565,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/xyIW_xUnOTQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxEGUxm9lrmEyMnijlbBNdNuMR7A",
            width: 480,
          },
        ],
        title: "Adele - Hello (Lyrics)",
        videoId: "xyIW_xUnOTQ",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKakBftMs0NWn7gKV7Sgv0_bQYQQMAwNX_a_NH9c7AY=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@HeyBear",
          channelId: "UCtf9cFBJkHVAf2qMqF01xYg",
          title: "Hey Bear Sensory",
        },
        badges: ["LIVE"],
        descriptionSnippet:
          "Welcome to Hey Bear Sensory! Key features of this video - Bright music with lots of rhythm to encourage movement - Builds ...",
        isLiveNow: true,
        lengthSeconds: null,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          viewers: 7664,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/UiwnaV7Rxyc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAycgOcTHYBx9UFvvlhoF7gyVphNg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/UiwnaV7Rxyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgi9aY3CrS6P1Svqa0l4jnSUGztw",
            width: 720,
          },
        ],
        title: "Hey Bear Sensory - Summer Dance Party! - Live Stream!",
        videoId: "UiwnaV7Rxyc",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/MEM25wtzpOZPesGTUcR9MBGazItiijo5YkTMcBIDE2x8GKDaL28--D4KSkDKAjvru4LomJSEOg=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UC2GUtUhFGLPc-MDa-Pu3hwQ",
          title: "DJ Hol Up",
        },
        badges: [],
        descriptionSnippet: null,
        isLiveNow: false,
        lengthSeconds: 4765,
        movingThumbnails: null,
        publishedTimeText: "1 year ago",
        stats: {
          views: 7160274,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Aqm9kcpBICI/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEkoIzAP&rs=AOn4CLB3DC3wMRyydWCvstccziLcvHqlLQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Aqm9kcpBICI/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhyIEkoIzAP&rs=AOn4CLDlcBlA-d4r4qZQ1aRB-WuMJ8WMxw",
            width: 720,
          },
        ],
        title:
          "TEMS | 1 Hour of Chill Songs | Afrobeats/R&B MUSIC PLAYLIST | Tems",
        videoId: "Aqm9kcpBICI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/EIzJ6QHO0kB7SsCnkl_3xjeSVQyvuCHM7lvlwcZMgLhfjoRj3aZU2kIeFLySbBah_EH_1eRplw=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@HelloSummer88",
          channelId: "UCV8wIp8qojf1s0ykVaTQbBA",
          title: "Hello Summer",
        },
        badges: ["LIVE"],
        descriptionSnippet:
          "Summer Nostalgia - Dua Lipa, Avicii, David Guetta, Kygo, Calvin Harris, Alesso, One Republic, Flume Summer Nostalgia - Dua ...",
        isLiveNow: true,
        lengthSeconds: null,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          viewers: 4570,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/k33NAGsXVW0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4TTmN62sB4zCngFlC2pSG1uGzMg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/k33NAGsXVW0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiNgM80j7HHAOr9OBwavc6q1fouw",
            width: 720,
          },
        ],
        title:
          "Summer Nostalgia - Dua Lipa, Avicii, David Guetta, Kygo, Calvin Harris, Alesso, One Republic, Flume",
        videoId: "k33NAGsXVW0",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCsRM0YB_dabtEPGPTKo-gcw",
          title: "Adele",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Beggars Group Digital Ltd. Set Fire to the Rain · Adele 21 ℗ 2010 XL Recordings Ltd Released on: ...",
        isLiveNow: false,
        lengthSeconds: 243,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 118739016,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/uJdu4Lfy8aI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDM5JKbiA5-_0nDkPxL7alzQI7hlQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/uJdu4Lfy8aI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkhVH6p11qtmnv6K908M75Xp5u5A",
            width: 720,
          },
        ],
        title: "Set Fire to the Rain",
        videoId: "uJdu4Lfy8aI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCsRM0YB_dabtEPGPTKo-gcw",
          title: "Adele",
        },
        badges: ["CC"],
        descriptionSnippet:
          "Follow Adele on: Facebook - https://www.facebook.com/Adele Twitter - https://twitter.com/Adele Instagram ...",
        isLiveNow: false,
        lengthSeconds: 343,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/DDWKuo3gXMQ/mqdefault_6s.webp?du=3000&sqp=CODipqkG&rs=AOn4CLCPs-etGltDlAVGJ5wXdYTl-POMow",
            width: 320,
          },
        ],
        publishedTimeText: "7 years ago",
        stats: {
          views: 675988734,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/DDWKuo3gXMQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT93VqUHeMzuU5MGH-ca9b9obOyw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/DDWKuo3gXMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1gLj95fI2cv3_Yy_oNfJAwQXlag",
            width: 720,
          },
        ],
        title: "Adele - When We Were Young (Live at The Church Studios)",
        videoId: "DDWKuo3gXMQ",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKb2f0NXgqTo8d5TIJx_AAPkktZyWx7Q2EXcndLGiQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@spinninrecords",
          channelId: "UCpDJl2EmP7Oh90Vylx0dZtA",
          title: "Spinnin' Records",
        },
        badges: [],
        descriptionSnippet:
          "Spinnin' Records proudly presents Martin Solveig & Dragonette - Hello [official video HD] --- The Spinnin' Records YouTube ...",
        isLiveNow: false,
        lengthSeconds: 243,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/LnET4RKXx5k/mqdefault_6s.webp?du=3000&sqp=CIzbpqkG&rs=AOn4CLBLuiJH-ofq3ara1bRMv9Tkw-r_YQ",
            width: 320,
          },
        ],
        publishedTimeText: "12 years ago",
        stats: {
          views: 24198491,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/LnET4RKXx5k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeKsZNcfZPDdl2LLb9gLFwZzx0_Q",
            width: 480,
          },
        ],
        title:
          "Martin Solveig & Dragonette - Hello (Official Music Video) [HD]",
        videoId: "LnET4RKXx5k",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/51G8Q7FOFU-ahC8fvaTqDIrOi8oVUI82x4y6O0RG-yir9aCV7WvWbeomaaKzlHr8YK46B7bnDLo=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@MILANHELLOofficial",
          channelId: "UCaNtyRZv2ujfkkHPR1jMUSw",
          title: "MILAN HELLO - ANDREA LONGONI",
        },
        badges: ["New"],
        descriptionSnippet:
          "CONTEST MAGLIA LEAO AUTOGRAFATA -SCARICA GRATUITAMENTE L'APP DI NUMERO DIEZ DA QUESTO LINK   ...",
        isLiveNow: false,
        lengthSeconds: 864,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/1X1IF3GjhJ4/mqdefault_6s.webp?du=3000&sqp=CIzzpqkG&rs=AOn4CLAUuMM7Fa-kb7uvJxZkS_BDInk3lw",
            width: 320,
          },
        ],
        publishedTimeText: "6 hours ago",
        stats: {
          views: 24318,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/1X1IF3GjhJ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCweB6TJ4pcP94G3S-eKs86h0Tz2A",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/1X1IF3GjhJ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBof--FkC-u-lAAstjnp72UvxJ-pQ",
            width: 720,
          },
        ],
        title:
          "📣UN ALTRO MILANISTA?📲I WHATSAPP😡SCIOCCATO🚨VERGOGNOSO ATTACCO AL MILAN, IMBARAZZANTE! - Milan Hello",
        videoId: "1X1IF3GjhJ4",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCsRM0YB_dabtEPGPTKo-gcw",
          title: "Adele",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Beggars Group Digital Ltd. When We Were Young · Adele 25 ℗ 2015 XL Recordings Ltd Released on: ...",
        isLiveNow: false,
        lengthSeconds: 291,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 28510582,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Xpc8mAJ_2nM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbAnIM5FRpV4FloxiLdHvnhSbPDg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Xpc8mAJ_2nM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAMHZVUmParmaxyjTBfz691y8mmpw",
            width: 720,
          },
        ],
        title: "When We Were Young",
        videoId: "Xpc8mAJ_2nM",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/YuRHl_4murHobFsrHDkpJANVHzXYTgP68zysfrsNPIRMr8fKSzEP_4y6cFeE5WfpWOdxVH4sO-8=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCsRM0YB_dabtEPGPTKo-gcw",
          title: "Adele",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Beggars Group Digital Ltd. Love In The Dark · Adele 25 ℗ 2015 XL Recordings Ltd Released on: ...",
        isLiveNow: false,
        lengthSeconds: 286,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 70792123,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/oytOOA9sOiE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZFZNk7fhgNGNkKFs5qdR4XdDpvA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/oytOOA9sOiE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAss8Vd6Q4uxDm2MdkhWr38VJ5Fvw",
            width: 720,
          },
        ],
        title: "Love In The Dark",
        videoId: "oytOOA9sOiE",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKZaa3FGlL9nr6YnH8_PtgOmEkTxh9C6r77YA6lkxw=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCc4K7bAqpdBP8jh1j9XZAww",
          title: "The Beatles",
        },
        badges: ["CC"],
        descriptionSnippet:
          "When The Beatles began recording what would become their third single to be released in 1967, its working title was 'Hello, ...",
        isLiveNow: false,
        lengthSeconds: 209,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/rblYSKz_VnI/mqdefault_6s.webp?du=3000&sqp=CNT4pqkG&rs=AOn4CLCjvo9XS1Nsmu2Lt3BZQsljf9GRdg",
            width: 320,
          },
        ],
        publishedTimeText: "7 years ago",
        stats: {
          views: 151235655,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/rblYSKz_VnI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrbRHvNkpG-FxT66tTbUNR2uCdag",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/rblYSKz_VnI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPNB8LJXq3vPiRyNclWvM2Zn1iFg",
            width: 720,
          },
        ],
        title: "The Beatles - Hello, Goodbye",
        videoId: "rblYSKz_VnI",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2EWImi0FdqwhCLCWm1teio-1ZUHWVi1OJVMyde9VutzdIEH67PkqinE5PlIJkc3QqtVAB1PBxGk=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCFwC3Ryue6CorFm2xCEG0Aw",
          title: "H.E.R.",
        },
        badges: ["CC"],
        descriptionSnippet: "#HER #Damage #RnB.",
        isLiveNow: false,
        lengthSeconds: 225,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/PAFAfhod9TU/mqdefault_6s.webp?du=3000&sqp=CIPipqkG&rs=AOn4CLCo0gQuGQXOAwaOOyqfigLsw9Y-ag",
            width: 320,
          },
        ],
        publishedTimeText: "2 years ago",
        stats: {
          views: 178344971,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/PAFAfhod9TU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC542TpQ1oQyc7m4OjXediGJjelpg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/PAFAfhod9TU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJxi2_c16w4BB_7VKY7JLc-vmPRg",
            width: 720,
          },
        ],
        title: "H.E.R. - Damage (Official Video)",
        videoId: "PAFAfhod9TU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKYPvTA9O7GA6vwsCImFICCrJ68fovv4PCTOlQzHzQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCSaPKJpNd-Mkm6hhelIYSlQ",
          title: "POP SMOKE",
        },
        badges: [],
        descriptionSnippet:
          "Music video by Pop Smoke performing Hello (Audio). © 2020 Republic Records, a division of UMG Recordings, Inc. & Victor Victor ...",
        isLiveNow: false,
        lengthSeconds: 192,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/fazMSCZg-mw/mqdefault_6s.webp?du=3000&sqp=CMz8pqkG&rs=AOn4CLAc1Gdb7J5B3GNLU9PxCsPmtEOOug",
            width: 320,
          },
        ],
        publishedTimeText: "3 years ago",
        stats: {
          views: 161412238,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/fazMSCZg-mw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1uCMspoLIJRv8H_TqRxCVO3Lo6w",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/fazMSCZg-mw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqk0yowbDrx-tAreQHuySzRN4U4Q",
            width: 720,
          },
        ],
        title: "Pop Smoke - Hello (Audio) ft. A Boogie wit da Hoodie",
        videoId: "fazMSCZg-mw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Nrx3H00NuYdK_xqTi6GWnwOqfOhBP8sR-gCvhJ7Z2wDSr0_RDJqmZjPg2lO4qTh4daD29tcj3w=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@imSugarStar",
          channelId: "UCRSLeYO3BOhRAYz0vLfVSWw",
          title: "SugarStar",
        },
        badges: ["New"],
        descriptionSnippet:
          "EATING HELLO KITTY FOOD FOR 24 HOURS PT 2! #sanrio #hellokitty #food #challenge Real Littles are “Things You Love ...",
        isLiveNow: false,
        lengthSeconds: 1882,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/hOGp_LKGhro/mqdefault_6s.webp?du=3000&sqp=CNzypqkG&rs=AOn4CLDrGZcX6SZviz2lPBFKhCB28Ctvxg",
            width: 320,
          },
        ],
        publishedTimeText: "6 days ago",
        stats: {
          views: 273354,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/hOGp_LKGhro/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8JcXYKfZuEKZ1UKnCG7dPRhokwg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/hOGp_LKGhro/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZLDey_u64LfSe3FD7x-FMrAy99g",
            width: 720,
          },
        ],
        title:
          "EATING HELLO KITTY FOOD FOR 24 HOURS PT 2! #sanrio #hellokitty #food #challenge",
        videoId: "hOGp_LKGhro",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbAG_eg5ToayJ5K529J2fMYXurpE9E3yQoQNJeBpA=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCZwJNsS8DxGT8iTtOVbYUNg",
          title: "blueface bleedem",
        },
        badges: ["4K", "CC"],
        descriptionSnippet:
          "Blueface #Hello #OfficialVideo Follow Blueface Everywhere: Instagram: https://instagram.com/bluefasebabyy Facebook: ...",
        isLiveNow: false,
        lengthSeconds: 145,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/u45vFY-bHFk/mqdefault_6s.webp?du=3000&sqp=CPHlpqkG&rs=AOn4CLB7xEa8Nrp3tAlj7RCB6lKLRyB-og",
            width: 320,
          },
        ],
        publishedTimeText: "5 months ago",
        stats: {
          views: 3128742,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/u45vFY-bHFk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyZZLiEKHOe2YfhVcVBa8vgFD6VA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/u45vFY-bHFk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWlM5Y5x9iNZLRLbSoL6c7rXzDTw",
            width: 720,
          },
        ],
        title: "Blueface - Hello (Official Music Video)",
        videoId: "u45vFY-bHFk",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKb5-Vi9oEe-OdovRmHUJzZrjBe_UKL-M91MYSSZ3g=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCe1VpF4wS_kdcjyTRSXBcnQ",
          title: "The Singing Walrus - English Songs For Kids",
        },
        badges: ["CC"],
        descriptionSnippet:
          'The Singing Walrus is excited to present "Hello Song", a fun and engaging song for young learners to start the day in the ...',
        isLiveNow: false,
        lengthSeconds: 131,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/gghDRJVxFxU/mqdefault_6s.webp?du=3000&sqp=CI_zpqkG&rs=AOn4CLAjSA65RKxOfVaf0SE2N0l49bwNzg",
            width: 320,
          },
        ],
        publishedTimeText: "6 years ago",
        stats: {
          views: 132160567,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/gghDRJVxFxU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTF8FBeKcuJ3TV_4IvyZk3wWAlZA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/gghDRJVxFxU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVtJyjVoOpO668bseOiyhzqV-20Q",
            width: 720,
          },
        ],
        title:
          "Hello Song for Kids | Greeting Song for Kids | The Singing Walrus",
        videoId: "gghDRJVxFxU",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/hkNTjyFsDL8IcLGSoO42-gLDLIrD2sCEUBQ7aLnofzaRqpbtXEjzGtCZZQd4oJ7cLCeOIyb9vQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@thevibeguide",
          channelId: "UCxH0sQJKG6Aq9-vFIPnDZ2A",
          title: "The Vibe Guide",
        },
        badges: [],
        descriptionSnippet:
          "BABY HELLO (Letra/Lyrics) - Rauw Alejandro, Bizarrap Rauw Alejandro, Bizarrap - BABY HELLO (Letra/Lyrics) For more quality ...",
        isLiveNow: false,
        lengthSeconds: 226,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Z9lTFMuqIOQ/mqdefault_6s.webp?du=3000&sqp=CITvpqkG&rs=AOn4CLDqrf8OBBeRCu7v2gdyF-ZXL86Q8w",
            width: 320,
          },
        ],
        publishedTimeText: "3 months ago",
        stats: {
          views: 1510487,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Z9lTFMuqIOQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxVSsqMwRZnZf4QQY5WQAjl2cPWw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Z9lTFMuqIOQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDxCh_vo-hz52L2Zjp1XfFbeJ-QXw",
            width: 720,
          },
        ],
        title: "Rauw Alejandro, Bizarrap - BABY HELLO (Letra/Lyrics)",
        videoId: "Z9lTFMuqIOQ",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/NnhMZh1idmuR60etC8577bXxaNIO7XHnC9X1xuFvNx6niKdU1IJ_yXbD6uodMsTL5UTLB1Goyg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@SangmeshSG98",
          channelId: "UCnN05V0ANpNSOEgSyC67VkA",
          title: "Sangmesh SG Music ",
        },
        badges: [],
        descriptionSnippet:
          "ಹಲೋ ಹಲೋ ಗೆಳತಿ |Hello Hello Gelati |Balu Belagund |Rock Star Jyoti |Vaishu Belagavi #Hellohellogelati ...",
        isLiveNow: false,
        lengthSeconds: 452,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/3WbO6WVD4bg/mqdefault_6s.webp?du=3000&sqp=CODkpqkG&rs=AOn4CLAg7VynxMAW6KSxWX0A0TVT0CfImw",
            width: 320,
          },
        ],
        publishedTimeText: "7 days ago",
        stats: {
          views: 524935,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/3WbO6WVD4bg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9T-yqD4-FT1hv6WAvZwDWHBuUxA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/3WbO6WVD4bg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT_vHmJYp2ZJcUcyiUIzFOcXnc3A",
            width: 720,
          },
        ],
        title:
          "ಹಲೋ ಹಲೋ ಗೆಳತಿ |Hello Hello Gelati Full Song |Balu Belagund |Rock Star Jyoti |Vaishu Belagavi",
        videoId: "3WbO6WVD4bg",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKY-OhGWypFXgLF_7Ir9CJ3BQaaB2uayMfH6NCVH=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@touchtapgameplay",
          channelId: "UC6-ZyDHadjNic-D0slZxeWg",
          title: "TouchTapGameplay",
        },
        badges: [],
        descriptionSnippet:
          "In this video you will see Act 1 and the Skibidi Toilets neighbor from Skibidi Toilets Hello Neighbor (Itunes | Ios | APP STORE) ...",
        isLiveNow: false,
        lengthSeconds: 607,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/xJAu8KEnd9I/mqdefault_6s.webp?du=3000&sqp=CITqpqkG&rs=AOn4CLDE6u4fDgWNGNDwdcTOWfnRcC2Zrg",
            width: 320,
          },
        ],
        publishedTimeText: "4 months ago",
        stats: {
          views: 404893,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/xJAu8KEnd9I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUHKijTRqzDaIe5WhfptARxR51Jw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/xJAu8KEnd9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXsxww88oZz5FOdLl1K_A5C7bFdg",
            width: 720,
          },
        ],
        title:
          "Hello Neighbor - My New Neighbor Skibidi Toilets Act 1 Season Gameplay Walkthrough",
        videoId: "xJAu8KEnd9I",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/b5VsgucmINSruNaBdrxYh4DVkelWs-TImeDn3S660RrbJL4z5kwVrH20g3DvWJ-xlO1_JQV3lg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@HelloKittyandFriends",
          channelId: "UCQBOAYwPdqzr1TxmjT-91Sg",
          title: "Hello Kitty and Friends",
        },
        badges: ["New"],
        descriptionSnippet:
          "With all the buzz of Kuromi's new favorite K-Pop group she extends the concert invite to Badtz-maru, Pochacco, and Keroppi.",
        isLiveNow: false,
        lengthSeconds: 243,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/auLxFO1HwZw/mqdefault_6s.webp?du=3000&sqp=CJT4pqkG&rs=AOn4CLAUY4QYyg0_aruR-hyqh7xlyasAiQ",
            width: 320,
          },
        ],
        publishedTimeText: "2 days ago",
        stats: {
          views: 81941,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/auLxFO1HwZw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW36aBZG4IjB9CoTFKG7bMbr9Bpg",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/auLxFO1HwZw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo3gTEXHSyEqBbqKPm_uozMQdmaA",
            width: 720,
          },
        ],
        title:
          "Kuromi’s K-Pop Drop (Part 2) | Hello Kitty and Friends Supercute Adventures S8 EP4",
        videoId: "auLxFO1HwZw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/2iEJgHMKgEWy9KIN5-Dcx-_VXa4Duz5ONChzOBYdLlwoysgh79MTUKwWgvpSo1S21xzcS4s_SfQ=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCa2Zgojnez5hP8ZIzuqtdrQ",
          title: "Albert Posis",
        },
        badges: ["4K"],
        descriptionSnippet:
          "——— LYRICS: [Verse 1] One thing I know We're feeling comfortable, what can I say? In love and it shows I feel like I fall again ...",
        isLiveNow: false,
        lengthSeconds: 213,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/kLaanI_2IBw/mqdefault_6s.webp?du=3000&sqp=CJDupqkG&rs=AOn4CLBCWLnI9QXzlgS9hvJt1lHRB9O0Jw",
            width: 320,
          },
        ],
        publishedTimeText: "1 month ago",
        stats: {
          views: 30024,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/kLaanI_2IBw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3JukuObQaeB-kG6cKbgj-BFAgTA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/kLaanI_2IBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHDDW7X6rHztjoYjSp7XdJLWdd8w",
            width: 720,
          },
        ],
        title: 'Albert Posis - "Hello" (Lyric Video)',
        videoId: "kLaanI_2IBw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/b5VsgucmINSruNaBdrxYh4DVkelWs-TImeDn3S660RrbJL4z5kwVrH20g3DvWJ-xlO1_JQV3lg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@HelloKittyandFriends",
          channelId: "UCQBOAYwPdqzr1TxmjT-91Sg",
          title: "Hello Kitty and Friends",
        },
        badges: [],
        descriptionSnippet:
          "Badtz-maru and Keroppi want to enter a dance competition, but the rules state they need three or more members to join.",
        isLiveNow: false,
        lengthSeconds: 412,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/grGLcJQS4C4/mqdefault_6s.webp?du=3000&sqp=CNDupqkG&rs=AOn4CLDNbMUDFgOGbO7oDUr1eW-vBe5DSA",
            width: 320,
          },
        ],
        publishedTimeText: "4 months ago",
        stats: {
          views: 1878844,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/grGLcJQS4C4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC31IbFeg0H6WSGw5WlAS3vTpJZzw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/grGLcJQS4C4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACJPlPhN-rU4W0c0uoSurM53dYSw",
            width: 720,
          },
        ],
        title:
          "Cinnamorollin’ with the Crew | Hello Kitty and Friends Supercute Adventures S7 EP1",
        videoId: "grGLcJQS4C4",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbVS33TbMn6suzEqE1vcSEo9An0A8a6QvB5jKoo_w=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@Federalbikes",
          channelId: "UCg-C5SGBn1qxMlxWbJWLQrg",
          title: "Federal Bikes",
        },
        badges: ["New"],
        descriptionSnippet:
          "Hello Mate, the latest video from the Federal Bikes UK AM squad filmed in the UK, also featuring German connect Vangeli ...",
        isLiveNow: false,
        lengthSeconds: 377,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/JMyCajn-QvQ/mqdefault_6s.webp?du=3000&sqp=CMCxpqkG&rs=AOn4CLCnjoZ5Fy7mLbwIM5vtCwSk1YG0gg",
            width: 320,
          },
        ],
        publishedTimeText: "5 hours ago",
        stats: {
          views: 847,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/JMyCajn-QvQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHnGFU_Uleq5g_NhGOiOc_rH4SpA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/JMyCajn-QvQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5ZZrwZsAkEq8ufg9VO5x1tjIg9w",
            width: 720,
          },
        ],
        title: "FEDERAL BIKES - Hello Mate",
        videoId: "JMyCajn-QvQ",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/EcVqlVz4XpJCctebu3ov5ihu8YkGzAK0uI8UXSEOQ9Yq3ZG60vkS_1Sl83zqEihDLqYU7eAwKQA=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@sunilyadavstudio4616",
          channelId: "UC8BmRlcbtMJZdYt6ZY51KZw",
          title: "SUNIL YADAV STUDIO",
        },
        badges: [],
        descriptionSnippet: null,
        isLiveNow: false,
        lengthSeconds: 407,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/Z7_j4k00bu8/mqdefault_6s.webp?du=3000&sqp=CKHCpqkG&rs=AOn4CLAZnWPdnwZa5X5wrowo1Vs-34kdNg",
            width: 320,
          },
        ],
        publishedTimeText: "2 months ago",
        stats: {
          views: 675058,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/Z7_j4k00bu8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkkZWXiLKlPLCeOEGNGS6nKof8BQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/Z7_j4k00bu8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLButrWEEKq4y-XPyuvYdfQ1EqdDIA",
            width: 720,
          },
        ],
        title: "hello",
        videoId: "Z7_j4k00bu8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/b5VsgucmINSruNaBdrxYh4DVkelWs-TImeDn3S660RrbJL4z5kwVrH20g3DvWJ-xlO1_JQV3lg=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@HelloKittyandFriends",
          channelId: "UCQBOAYwPdqzr1TxmjT-91Sg",
          title: "Hello Kitty and Friends",
        },
        badges: [],
        descriptionSnippet:
          "Kuromi is excited about a new K-Pop group and gets Hello Kitty and My Melody to go with her to their concert. Kuromi then ...",
        isLiveNow: false,
        lengthSeconds: 231,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/wx_daD9lKEw/mqdefault_6s.webp?du=3000&sqp=CJTupqkG&rs=AOn4CLCW1R8dgI5DIwLS-wUoaLMLPHbR7Q",
            width: 320,
          },
        ],
        publishedTimeText: "9 days ago",
        stats: {
          views: 295607,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/wx_daD9lKEw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCueykV4nmZ-BuDSrU7TwFQLpq2zw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/wx_daD9lKEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLADhXN0w_vFfidJBhLps5Z67FtIzw",
            width: 720,
          },
        ],
        title:
          "Kuromi’s K-Pop Drop (Part 1) | Hello Kitty and Friends Supercute Adventures S8 EP3",
        videoId: "wx_daD9lKEw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/Wtxdtu-KlTU8WXgHx7kuT-U7xYEZPTGp6cb1R-wdAIc12E5P3ZiF7MI8ze81e_dfuo9BouF0-g=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@kontorrecords",
          channelId: "UCb3tJ5NKw7mDxyaQ73mwbRg",
          title: "Kontor.TV",
        },
        badges: ["CC"],
        descriptionSnippet:
          "#MartinSolveig #Dragonette #Hello ▻ Follow Kontor Records Kontor Top Of The Clubs Playlist: ...",
        isLiveNow: false,
        lengthSeconds: 253,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/kK42LZqO0wA/mqdefault_6s.webp?du=3000&sqp=CMDkpqkG&rs=AOn4CLBFKKhc9o9qL3ikYemfGI1ml7MoeQ",
            width: 320,
          },
        ],
        publishedTimeText: "13 years ago",
        stats: {
          views: 109609573,
        },
        thumbnails: [
          {
            height: 270,
            url: "https://i.ytimg.com/vi/kK42LZqO0wA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBP2OGeDIX4AIDEEaETWIGeLHcmPQ",
            width: 480,
          },
        ],
        title:
          "Martin Solveig & Dragonette - Hello (Official Short Video Version HD)",
        videoId: "kK42LZqO0wA",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/qQdnrfy3bYjKfwQignEqOpa2_-CBTIANIMSkT9fd5zPkF8BtgaXKqSO6WmAO1tZWlhWIDQVqUg=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCuHzBCaKmtaLcRAOoazhCPA",
          title: "Beyoncé",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Music World Music/Columbia Hello · Beyoncé I AM... SASHA FIERCE ℗ 2008 Sony Music Entertainment ...",
        isLiveNow: false,
        lengthSeconds: 257,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 4045649,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/60gOJYc93J8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9Ym-GlhsqOmRJ2lKsdLp44RZbZQ",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/60gOJYc93J8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtPTXOjP1_vrLnVP0SFPYbbK1k9A",
            width: 720,
          },
        ],
        title: "Hello",
        videoId: "60gOJYc93J8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/AbPEtv7hUUve55z9KXg7P5PAGv6WgT9GsCJVXkwLzUDhfROVi4dYZVfMWLlMCrHh-isExh_ZAhE=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@lyricswithriane",
          channelId: "UCze10rDcuwZxvPeFcRI3HLw",
          title: "LyricsWithRiane",
        },
        badges: [],
        descriptionSnippet:
          "aqyila #hello #lyrics official video: https://youtu.be/k5t0RrijpHg Falling in love with who I am I don't have time for anything that's ...",
        isLiveNow: false,
        lengthSeconds: 204,
        movingThumbnails: null,
        publishedTimeText: "6 months ago",
        stats: {
          views: 507994,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/EgGxBabSrlw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs5wXUHtoAf7bNCYKjxXt_zuPZIw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/EgGxBabSrlw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIKk6P5JNF1PqmGFqqiqfbMsQYWg",
            width: 720,
          },
        ],
        title: "Aqyila - Hello(Lyrics)",
        videoId: "EgGxBabSrlw",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/wfO1-J_V0yO6VW2F0MKGdvORISTzvdIWmfV8ghkZpHH4nOLHhARqFsBNVp4Ey9_cphHcq8zTWQ=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Verified",
              type: "VERIFIED_CHANNEL",
            },
          ],
          canonicalBaseUrl: "/@SuperSimpleSongs",
          channelId: "UCLsooMJoIpl_7ux2jvdPB-Q",
          title: "Super Simple Songs - Kids Songs",
        },
        badges: ["CC"],
        descriptionSnippet:
          'Start off your lesson with "Hello!", a fun and energetic song to talk about how you feel as you greet each other. Listen to Super ...',
        isLiveNow: false,
        lengthSeconds: 79,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/tVlcKp3bWH8/mqdefault_6s.webp?du=3000&sqp=CIvYpqkG&rs=AOn4CLA2N5gliDXjMIJNepm7sFXXu8Q2ug",
            width: 320,
          },
        ],
        publishedTimeText: "8 years ago",
        stats: {
          views: 140709938,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/tVlcKp3bWH8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBg7oFCrNrQTCtuggj99S1U4ufVBw",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/tVlcKp3bWH8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXxDBj3PdCBQ27PzWhVmb4VB-4qA",
            width: 720,
          },
        ],
        title: "Hello! | Super Simple Songs",
        videoId: "tVlcKp3bWH8",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/413TCmNrJeTXr7K6hVAEICcf09WMtY8xF8HhymVCYLtrkdppD859gP5-gAJK7Av_085C_r6O8jg=s88-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [
            {
              text: "Official Artist Channel",
              type: "OFFICIAL_ARTIST_CHANNEL",
            },
          ],
          canonicalBaseUrl: null,
          channelId: "UCSUUJi1Q3tiY3eFjPtRVBfg",
          title: "The Isley Brothers",
        },
        badges: [],
        descriptionSnippet:
          "Provided to YouTube by Epic/Legacy Hello It's Me · The Isley Brothers Live It Up ℗ 1974 Epic Records, a division of Sony Music ...",
        isLiveNow: false,
        lengthSeconds: 333,
        movingThumbnails: null,
        publishedTimeText: null,
        stats: {
          views: 16019549,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/IfbaUWA32_E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu-SE_0LbaBo1FUBwNMAir_kIVwA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/IfbaUWA32_E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdEBVC-usdPmpWQxMKWlJ-pv2_Pg",
            width: 720,
          },
        ],
        title: "Hello It's Me",
        videoId: "IfbaUWA32_E",
      },
    },
    {
      type: "video",
      video: {
        author: {
          avatar: [
            {
              height: 68,
              url: "https://yt3.ggpht.com/ytc/APkrFKbVS33TbMn6suzEqE1vcSEo9An0A8a6QvB5jKoo_w=s68-c-k-c0x00ffffff-no-rj",
              width: 68,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@Federalbikes",
          channelId: "UCg-C5SGBn1qxMlxWbJWLQrg",
          title: "Federal Bikes",
        },
        badges: ["New"],
        descriptionSnippet:
          "Hello Mate, the latest video from the Federal Bikes UK AM squad filmed in the UK, also featuring German connect Vangeli ...",
        isLiveNow: false,
        lengthSeconds: 377,
        movingThumbnails: [
          {
            height: 180,
            url: "https://i.ytimg.com/an_webp/JMyCajn-QvQ/mqdefault_6s.webp?du=3000&sqp=CMCxpqkG&rs=AOn4CLCnjoZ5Fy7mLbwIM5vtCwSk1YG0gg",
            width: 320,
          },
        ],
        publishedTimeText: "5 hours ago",
        stats: {
          views: 847,
        },
        thumbnails: [
          {
            height: 202,
            url: "https://i.ytimg.com/vi/JMyCajn-QvQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBHnGFU_Uleq5g_NhGOiOc_rH4SpA",
            width: 360,
          },
          {
            height: 404,
            url: "https://i.ytimg.com/vi/JMyCajn-QvQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC5ZZrwZsAkEq8ufg9VO5x1tjIg9w",
            width: 720,
          },
        ],
        title: "FEDERAL BIKES - Hello Mate",
        videoId: "JMyCajn-QvQ",
      },
    },
  ],
  cursorNext:
    "Ep4DEgVIZWxsbxqUA1NCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyczFkREJTY21scWNFaG5nZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdHRTRTlPVG1OYVluZEVXWUlCRFZKRVdWRkljMWhOWjJ4RE9VR0NBUXN3YTB4RlUzZDJka3hhYzRJQkN6UmxibWRWY1doQmQxbFJnZ0VMVVd0bFpXaFJPRVJmVmsyQ0FRdDRlVWxYWDNoVmJrOVVVWUlCQzFWcGQyNWhWamRTZUhsamdnRUxabUY2VFZORFdtY3RiWGVDQVF0b1QwZHdYMHhMUjJoeWI0SUJDM1UwTlhaR1dTMWlTRVpyZ2dFTFoyZG9SRkpLVm5oR2VGV0NBUXRyU3pReVRGcHhUekIzUVlJQkN6WXdaMDlLV1dNNU0wbzRnZ0VMUldkSGVFSmhZbE55YkhlQ0FRdDBWbXhqUzNBellsZElPSUlCQzBsbVltRlZWMEV6TWw5RmdnRUxTazE1UTJGcWJpMVJkbEd5QVFZS0JBZ2FFQUxxQVFJSUFnJTNEJTNEGIHg6BgiC3NlYXJjaC1mZWVk",
  didYouMean: null,
  estimatedResults: 1356119616,
  filterGroups: [
    {
      filters: [
        {
          cursorSelect: "SGVsbG8mJiZFZ0lJQVElM0QlM0Q=",
          label: "Last hour",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lJQWclM0QlM0Q=",
          label: "Today",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lJQXclM0QlM0Q=",
          label: "This week",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lJQkElM0QlM0Q=",
          label: "This month",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lJQlElM0QlM0Q=",
          label: "This year",
          selected: false,
        },
      ],
      title: "Upload date",
    },
    {
      filters: [
        {
          cursorSelect: "SGVsbG8mJiZFZ0lRQVElM0QlM0Q=",
          label: "Video",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lRQWclM0QlM0Q=",
          label: "Channel",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lRQXclM0QlM0Q=",
          label: "Playlist",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lRQkElM0QlM0Q=",
          label: "Movie",
          selected: false,
        },
      ],
      title: "Type",
    },
    {
      filters: [
        {
          cursorSelect: "SGVsbG8mJiZFZ0lZQVElM0QlM0Q=",
          label: "Under 4 minutes",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lZQXclM0QlM0Q=",
          label: "4 - 20 minutes",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lZQWclM0QlM0Q=",
          label: "Over 20 minutes",
          selected: false,
        },
      ],
      title: "Duration",
    },
    {
      filters: [
        {
          cursorSelect: "SGVsbG8mJiZFZ0pBQVElM0QlM0Q=",
          label: "Live",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0p3QVElM0QlM0Q=",
          label: "4K",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lnQVElM0QlM0Q=",
          label: "HD",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0lvQVElM0QlM0Q=",
          label: "Subtitles/CC",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0l3QVElM0QlM0Q=",
          label: "Creative Commons",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0o0QVElM0QlM0Q=",
          label: "360°",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ1BRQVFFJTNE",
          label: "VR180",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0k0QVElM0QlM0Q=",
          label: "3D",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ1BJQVFFJTNE",
          label: "HDR",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ080QVFFJTNE",
          label: "Location",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZFZ0pJQVElM0QlM0Q=",
          label: "Purchased",
          selected: false,
        },
      ],
      title: "Features",
    },
    {
      filters: [
        {
          cursorSelect: null,
          label: "Relevance",
          selected: true,
        },
        {
          cursorSelect: "SGVsbG8mJiZDQUklM0Q=",
          label: "Upload date",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZDQU0lM0Q=",
          label: "View count",
          selected: false,
        },
        {
          cursorSelect: "SGVsbG8mJiZDQUUlM0Q=",
          label: "Rating",
          selected: false,
        },
      ],
      title: "Sort by",
    },
  ],
  refinements: [
    "hello adele karaoke",
    "hello lyrics",
    "hello is it me you're looking for",
    "hello treasure",
    "hello (adele cover)",
    "hello sound effect",
    "i just came to say hello",
    "hello aqyila",
    "hello aqyila slowed",
    "hello meme",
  ],
};
const SearchResult = () => {
  const [result, setResult] = useState(searchResultsData?.contents);
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  console.log("Search query", searchQuery);
  console.log("Search data", result);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
    // fetchSearchResults();

    // Temp
    setResult(searchResultsData?.contents);
  }, [searchQuery]);

  const fetchSearchResults = () => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${searchQuery}`).then((res) => {
      console.log(res);
      setResult(res?.contents);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)] ">
      <LeftNav  />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black  ">
        <div className="grid grid-cols-1 gap-2 p-5">
          {result.map((item) => {

               if(item?.type !== "video") return false;
               let video = item?.video;

               console.log("VIDEO",video)
            return <SearchResultVideoCard key={video?.videoId} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
