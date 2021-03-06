import { Injectable } from '@angular/core';

@Injectable()
export class MemesService {
  public articles = [
    { headline: "first story",
      image: "../../assets/bill-hillary.png",
      meme: "../../assets/s2.jpg",
      hates: 0,
      likes: 0
    },
    { headline: "Turkey says lira will strengthen, dollar has 'lost credibility'",
      story: "ANKARA (Reuters) - Turkey’s finance minister promised to protect the lira on Tuesday, after it fell to a record low against the dollar this week, and said the U.S. currency had “lost credibility” because it had been exploited as a political tool.",
      meme: "../../assets/stroy4.png",
      hates: 0,
      likes: 0
    },
    { headline: "third story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy3.png",
      hates: 0,
      likes: 0
    },
    { headline: "fourth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy4.png",
      hates: 0,
      likes: 0
    },
    { headline: "fifth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy5.png",
      hates: 0,
      likes: 0
    },
    { headline: "sixth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/s2.jpg",
      hates: 0,
      likes: 0
    },
    { headline: "seventh story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy4.png",
      hates: 0,
      likes: 0
    },
    { headline: "eighth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/s2.jpg",
      hates: 0,
      likes: 0
    },
    { headline: "ninth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy3.png",
      hates: 0,
      likes: 0
      },
    { headline: "tenth story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy3.png",
      hates: 0,
      likes: 0
    },
    { headline: "eleventh story",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      meme: "../../assets/stroy2.png",
      hates: 0,
      likes: 0
    }
  ]
  public categories = ["Sports", "Politics", "Current Affairs", "Entertainment", "Funny", "News", "Opinion", "Culture", "lifestyle", "World News", "Environment", "Soccer", "Business", "Tech", "Science", "Film", "Music", "Games"]

  constructor() { }

}
