export interface MovieList {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  coverImage: string;
  shortDescription: string;
  introduction: string;
  conclusion: string;
  movies: {
    id: number;
    note: string;
    type?: 'movie' | 'tv';
  }[];
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
}

export const movieLists: MovieList[] = [

{
  id: "1",
  slug: "nick-reiner-movies-tv-shows",
  title: "Nick Reiner Movies & TV Shows: Complete Credits List",
  metaTitle: "Nick Reiner Movies & TV Shows: Every Credit Listed",
  metaDescription: "Every Nick Reiner movie and TV credit in one place: co-writing Being Charlie (2015) plus his talk-show appearances. Clear, accurate and easy to scan.",
  keywords: [
    "Nick Reiner movies",
    "Nick Reiner TV shows",
    "Nick Reiner filmography",
    "Nick Reiner screenwriter",
    "Being Charlie",
    "Being Charlie 2015",
    "Being Charlie cast",
    "Rob Reiner son",
    "Nick Reiner Being Charlie writer"
  ],
  coverImage: "/img/lists/1/nick-reiner-movies.webp",
  shortDescription: "A clear guide to Nick Reiner's movie and TV credits: one co-written feature, Being Charlie (2015), and a small number of promotional TV interviews.",
  seoTitle: "Nick Reiner Movies & TV Shows: Complete Credits Guide",
  seoDescription: "Every Nick Reiner movie and TV credit in one place: co-writing Being Charlie (2015) plus his talk-show appearances. Clear, accurate and easy to scan.",
  focusKeyword: "Nick Reiner movies",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">Search for <strong>Nick Reiner movies</strong> and the results are often crowded with his family's work. He is the son of director Rob Reiner and photographer-producer Michele Singer Reiner, and the grandson of Carl Reiner, so the family name appears on dozens of well-known films. Nick Reiner's own credits are much smaller, and it helps to separate them from the rest.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">In short, he has one produced screenplay and a few promotional TV appearances. That screenplay, <em>Being Charlie</em> (2015), was inspired by his own teenage years, including his experiences with addiction and the youth treatment system. This page lists each credit, explains what it is, and keeps his work apart from his father's directing career.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Nick Reiner's Credits at a Glance</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The table below covers his work in feature films and television. If you see other Reiner titles attached to his name elsewhere online, they are almost always films directed by his father.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Title</th>
            <th class="px-4 py-3 text-left">Type</th>
            <th class="px-4 py-3 text-left">Year</th>
            <th class="px-4 py-3 text-left">His Role</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Being Charlie</td>
            <td class="px-4 py-3">Feature film</td>
            <td class="px-4 py-3">2015</td>
            <td class="px-4 py-3">Co-writer (story and screenplay)</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">The Late Show with Stephen Colbert</td>
            <td class="px-4 py-3">TV talk show</td>
            <td class="px-4 py-3">Around 2016</td>
            <td class="px-4 py-3">Guest (interview about Being Charlie)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Being Charlie (2015): The Film He Wrote</h2>

    <p class="text-gray-400 mb-6 leading-relaxed"><em>Being Charlie</em> is a semi-autobiographical drama about addiction and recovery. Nick Reiner wrote the screenplay with Matt Elisofon, a fellow writer he met while both were in recovery. Reiner has said he spent time in many treatment programs as a teenager, and the script draws on that experience.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The story follows Charlie Mills, an 18-year-old who leaves a Utah treatment facility and returns to Los Angeles. His father is running for governor of California, and Charlie's struggles quickly become a problem for the campaign. Rob Reiner directed the film, so it was also a creative collaboration between father and son. It avoids a tidy redemption arc and presents recovery as slow and uneven.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Being Charlie: Key Facts</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><span class="text-white font-bold">Year:</span> 2015</li>
        <li><span class="text-white font-bold">Nick Reiner's role:</span> Co-writer (with Matt Elisofon)</li>
        <li><span class="text-white font-bold">Director:</span> Rob Reiner</li>
        <li><span class="text-white font-bold">Cast:</span> Nick Robinson, Cary Elwes, Morgan Saylor, Devon Bostick, Common</li>
        <li><span class="text-white font-bold">Themes:</span> Addiction, recovery, and strained family relationships</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">TV and Media Appearances</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Nick Reiner has no writing, producing or acting credits on a scripted TV series. His television presence is limited to interviews tied to <em>Being Charlie</em>, where he talked about the film and the experiences behind it.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">TV Appearance</h3>
      <ul class="space-y-3 text-sm text-gray-400">
        <li><span class="text-white font-bold">The Late Show with Stephen Colbert:</span> A promotional interview about making <em>Being Charlie</em> with his father.</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">A Note on Recent News</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">In December 2025, Rob Reiner and Michele Singer Reiner were found dead at their Los Angeles home. Nick Reiner was arrested, and a grand jury later indicted him on murder charges. He has pleaded not guilty and is presumed innocent while the case is pending. This page covers only his creative credits. For the legal case, follow current reporting from established news outlets.</p>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Answer</h3>
      <p class="text-sm text-gray-400">If you are looking for <strong>Nick Reiner movies</strong>, there is one: <em>Being Charlie</em> (2015), which he co-wrote and his father directed. His <strong>TV shows</strong> credits are interview appearances, not series work. Anything else listed under his name online is most likely part of his father's filmography.</p>
    </div>
  `,

  movies: [
    {
      id: 358895,
      type: 'movie',
      note: `<span class="text-white font-medium">Being Charlie (2015)</span> — Co-written by Nick Reiner and directed by his father, Rob Reiner. This semi-autobiographical drama follows an 18-year-old (Nick Robinson) who leaves rehab and returns to his politician father's home in Los Angeles.`
    },
    {
      id: 26338,
      type: 'tv',
      note: `<span class="text-white font-medium">The Late Show with Stephen Colbert (TV Show)</span> — Nick Reiner appeared as a guest to talk about Being Charlie and the personal experiences that inspired it.`
    }
  ]
},


{
  id: "2",
  slug: "sydney-sweeney-movies-tv-shows",
  title: "Best Sydney Sweeney Movies & TV Shows",
  metaTitle: "Best Sydney Sweeney Movies & TV Shows (Full Guide)",
  metaDescription: "From Euphoria and The White Lotus to Anyone But You, Reality and Christy: the best Sydney Sweeney movies and TV shows, and what makes each role stand out.",
  keywords: [
    "Sydney Sweeney movies",
    "Sydney Sweeney TV shows",
    "best Sydney Sweeney movies",
    "Sydney Sweeney filmography",
    "Sydney Sweeney Euphoria",
    "Sydney Sweeney new movie",
    "Sydney Sweeney Emmy nominations",
    "Sydney Sweeney Reality",
    "Sydney Sweeney Christy",
    "Anyone But You"
  ],
  coverImage: "/img/lists/2/sydney-sweeney-movies.webp",
  shortDescription: "A guide to the best Sydney Sweeney movies and TV shows, from her breakout in Euphoria to rom-coms, thrillers and true-story dramas.",
  seoTitle: "Best Sydney Sweeney Movies & TV Shows: Complete Filmography Guide",
  seoDescription: "From Euphoria and The White Lotus to Anyone But You, Reality and Christy: the best Sydney Sweeney movies and TV shows, and what makes each role stand out.",
  focusKeyword: "Sydney Sweeney movies",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">Sydney Sweeney, born in 1997, built her career in television before becoming a leading name in film. Early parts in <em>Everything Sucks!</em>, <em>The Handmaid's Tale</em> and <em>Sharp Objects</em> led to <em>Euphoria</em>, where her performance as Cassie Howard made her one of the most talked-about actors of her generation.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">Since then she has moved easily between genres, from the rom-com <em>Anyone But You</em> to the true-story dramas <em>Reality</em> and <em>Christy</em>. This guide covers the <strong>best Sydney Sweeney movies and TV shows</strong>, what each role shows about her range, and the recognition she has earned along the way.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Defines a Sydney Sweeney Performance</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Sweeney is at her best when a character is under pressure. In <strong>Sydney Sweeney Euphoria</strong> scenes, Cassie's need for approval is played with an exposed, anxious energy that the show's writers lean on heavily. The role earned her an Emmy nomination and set the tone for much of what followed.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">Her film work shows a deliberate effort to avoid being typecast. <em>Anyone But You</em> displayed her comic timing and chemistry opposite Glen Powell. <em>Reality</em> had her play NSA contractor Reality Winner during her FBI questioning, a quiet, tense film built around a real transcript. In <em>Christy</em> she played boxer Christy Martin, a physically demanding biographical role. Each of these asks something different of her, which is why a <strong>Sydney Sweeney movie</strong> is hard to predict.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Where to Start</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><span class="text-white font-bold">For prestige TV:</span> Euphoria and The White Lotus</li>
        <li><span class="text-white font-bold">For a crowd-pleaser:</span> Anyone But You</li>
        <li><span class="text-white font-bold">For a serious drama:</span> Reality</li>
        <li><span class="text-white font-bold">For something darker:</span> Eden or The Voyeurs</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Awards and Recognition</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">In 2022 she received two Primetime Emmy nominations in the same year: one for supporting actress in a drama series for <em>Euphoria</em>, and one for supporting actress in a limited or anthology series for <em>The White Lotus</em>. That double nomination showed she could stand out in very different material.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Award</th>
            <th class="px-4 py-3 text-left">Category</th>
            <th class="px-4 py-3 text-left">Project</th>
            <th class="px-4 py-3 text-left">Result</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Primetime Emmy Awards (2022)</td>
            <td class="px-4 py-3">Supporting Actress, Drama Series</td>
            <td class="px-4 py-3">Euphoria</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Nominated</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Primetime Emmy Awards (2022)</td>
            <td class="px-4 py-3">Supporting Actress, Limited or Anthology Series</td>
            <td class="px-4 py-3">The White Lotus</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Nominated</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Santa Barbara International Film Festival (2026)</td>
            <td class="px-4 py-3">Virtuosos Award</td>
            <td class="px-4 py-3">Christy</td>
            <td class="px-4 py-3 text-green-500 font-bold">Honored</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-gray-400 mb-6 leading-relaxed">The Virtuosos Award, presented in February 2026, recognized her lead performance in <em>Christy</em> alongside several other actors from the year's awards-season films.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Choosing Difficult Roles</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Sweeney is often photographed in a glamorous, old-Hollywood style, yet many of her best-known roles go the other way. She has played people who are desperate, frightened, physically beaten down or morally compromised. Her choice of material over image is a large part of why critics and directors take her seriously.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Comes Next</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Sweeney now produces as well as acts, through her own production company, which gives her a say in the projects she takes on. Recent releases include <em>Christy</em> and <em>The Housemaid</em>. Whenever a <strong>Sydney Sweeney new movie</strong> is announced, expect another change of genre rather than a repeat of her last role.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/2/sydney-sweeney-picture.webp"
        alt="Sydney Sweeney in a collage of her best movie and TV roles - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Sydney Sweeney: from Euphoria to leading roles on the big screen</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The <strong>best Sydney Sweeney movies and TV shows</strong> cover a wide range: Emmy-nominated TV work, a hit rom-com, and demanding true-story dramas. Start with <em>Euphoria</em> if you want the role that made her famous, or <em>Reality</em> if you want to see how far her range goes.</p>
    </div>
  `,

  movies: [
    { id: 85552, type: 'tv', note: `<span class="text-white font-medium">Euphoria</span> — Her breakout role as Cassie Howard, a teenager who craves validation. It earned her a 2022 Emmy nomination for supporting actress in a drama series.` },
    { id: 466272, type: 'movie', note: `<span class="text-white font-medium">Once Upon a Time in Hollywood</span> — A small role as Snake, a member of the Manson Family, in Quentin Tarantino's story of 1969 Los Angeles.` },
    { id: 1368166, type: 'movie', note: `<span class="text-white font-medium">Anyone But You</span> — A hit romantic comedy opposite Glen Powell. Her comic timing and their chemistry made it one of the most popular rom-coms of recent years.` },
    { id: 1072790, type: 'movie', note: `<span class="text-white font-medium">Madame Web</span> — Her first superhero film, part of Sony's Spider-Man universe, where she plays Julia Cornwall.` },
    { id: 1041613, type: 'movie', note: `<span class="text-white font-medium">Reality</span> — She plays NSA contractor Reality Winner during her FBI questioning, in a tense film built on the real interrogation transcript.` },
    { id: 643550, type: 'movie', note: `<span class="text-white font-medium">The Voyeurs</span> — An erotic thriller about a young couple who start spying on their neighbors, with consequences that spiral.` },
    { id: 934456, type: 'movie', note: `<span class="text-white font-medium">Eden</span> — Ron Howard's survival thriller based on real settlers on the Galapagos Islands in the 1920s, with Sweeney in the ensemble.` },
    { id: 70453, type: 'tv', note: `<span class="text-white font-medium">The Handmaid's Tale</span> — A guest role as Eden, a young wife in the dystopian society of Gilead.` },
    { id: 645710, type: 'movie', note: `<span class="text-white font-medium">Under the Silver Lake</span> — A supporting part in this offbeat Los Angeles neo-noir mystery starring Andrew Garfield.` },
    // CHECK: id 985617 is typed 'movie' but The White Lotus is a TV series. Confirm the TMDB id and type.
    { id: 985617, type: 'movie', note: `<span class="text-white font-medium">The White Lotus</span> — Sweeney plays Olivia, a sharp-tongued college student on a luxury resort vacation, in the first season of this Emmy-winning satire. The role earned her an Emmy nomination.` },
    { id: 69478, type: 'tv', note: `<span class="text-white font-medium">Sharp Objects</span> — A short but memorable part in HBO's dark Southern Gothic mini-series, early evidence of her screen presence.` },
    // CHECK: Sweeney does not appear to be in The Hating Game (2021). Consider removing this entry.
    { id: 634492, type: 'movie', note: `<span class="text-white font-medium">The Hating Game</span> — A workplace romantic comedy about two rival assistants whose rivalry turns into something else.` },
    // CHECK: confirm Sweeney's role in Night Teeth (2021).
    { id: 1042834, type: 'movie', note: `<span class="text-white font-medium">Night Teeth</span> — A vampire-themed action-horror film set over a single night in Los Angeles.` },
    { id: 111803, type: 'tv', note: `<span class="text-white font-medium">Everything Sucks!</span> — An early TV role in Netflix's 1990s high-school comedy, an early sign of her potential.` }
  ]
},

{
  id: "3",
  slug: "leonardo-dicaprio-movies",
  title: "Best Leonardo DiCaprio Movies",
  metaTitle: "Best Leonardo DiCaprio Movies: Essential Performances",
  metaDescription: "The best Leonardo DiCaprio movies, from Titanic and The Departed to Inception, The Revenant and One Battle After Another, and why each performance counts.",
  keywords: [
    "Leonardo DiCaprio movies",
    "best Leonardo DiCaprio movies",
    "Leonardo DiCaprio films",
    "Leonardo DiCaprio filmography",
    "Leonardo DiCaprio new movie",
    "Leonardo DiCaprio Oscar",
    "Leonardo DiCaprio Scorsese movies",
    "One Battle After Another",
    "Titanic",
    "The Wolf of Wall Street"
  ],
  coverImage: "/img/lists/3/leonardo-dicaprio-movies.webp",
  shortDescription: "A guide to the best Leonardo DiCaprio movies, from his global breakthrough in Titanic to his Oscar-winning work and recent collaborations with Scorsese and Paul Thomas Anderson.",
  seoTitle: "Best Leonardo DiCaprio Movies: Complete Filmography Guide",
  seoDescription: "The best Leonardo DiCaprio movies, from Titanic and The Departed to Inception, The Revenant and One Battle After Another, and why each performance counts.",
  focusKeyword: "Leonardo DiCaprio movies",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">Leonardo DiCaprio has been acting for more than three decades. After early television work, including a role on <em>Growing Pains</em>, he moved into film and has stayed there. Since <em>Titanic</em> made him a global star in 1997, he has chosen projects carefully, often working with the same directors on ambitious, difficult material.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">This guide to the <strong>best Leonardo DiCaprio movies</strong> covers his key collaborations with Martin Scorsese, Christopher Nolan, Quentin Tarantino and Paul Thomas Anderson, and explains why a <strong>Leonardo DiCaprio new movie</strong> is treated as an event whenever one is announced.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Defines a DiCaprio Performance</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">DiCaprio's strongest work is about characters who are not what they seem: an undercover cop, a con man, a stockbroker who lies for a living, a detective who cannot trust his own mind. He tends to play men whose confident exterior hides fear, guilt or ambition, and he lets the audience see the cracks.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">He also puts his body into the work. For <em>The Revenant</em> he endured freezing locations and a physically brutal shoot, and the performance won him the Academy Award for Best Actor. Whether he is playing a historical figure or an invented one, a <strong>Leonardo DiCaprio movie</strong> usually asks him to go further than the script strictly requires.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The DiCaprio Approach</h3>
      <p class="text-sm text-gray-400">He picks directors first and roles second, and he commits fully once he signs on. That pattern explains why so many of his films, across very different genres, are still discussed years later.</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">How His Career Developed</h2>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Career Stages</h3>
      <div class="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">Early Breakthroughs</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">Titanic and Stardom</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">The Scorsese Years</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937] text-[#E50914]">Oscar Win and Late-Career Risks</span>
      </div>
    </div>

    <p class="text-gray-400 mb-6 leading-relaxed">His early roles, such as <em>What's Eating Gilbert Grape</em>, showed unusual maturity for a young actor. <em>Titanic</em> turned him into a global star, and he then chose to work with Scorsese on <em>Gangs of New York</em>, <em>The Aviator</em>, <em>The Departed</em>, <em>Shutter Island</em>, <em>The Wolf of Wall Street</em> and <em>Killers of the Flower Moon</em>. Later he worked with Nolan on <em>Inception</em>, Tarantino on <em>Django Unchained</em> and <em>Once Upon a Time in Hollywood</em>, and Adam McKay on <em>Don't Look Up</em>. In older roles he leans into age and imperfection rather than away from them.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Awards and Recognition</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">DiCaprio has been nominated for many major awards across his career. The most significant was the Academy Award for Best Actor for <em>The Revenant</em>, after several earlier Oscar nominations. His wins span very different kinds of films, from a survival epic to a satirical biography.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Award</th>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Style of Role</th>
            <th class="px-4 py-3 text-left">Result</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Academy Award</td>
            <td class="px-4 py-3">The Revenant</td>
            <td class="px-4 py-3">Physical survival drama</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won Best Actor</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Golden Globe</td>
            <td class="px-4 py-3">The Revenant</td>
            <td class="px-4 py-3">Physical survival drama</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won Best Actor, Drama</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Golden Globe</td>
            <td class="px-4 py-3">The Wolf of Wall Street</td>
            <td class="px-4 py-3">Satirical biography</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won Best Actor, Musical or Comedy</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">BAFTA</td>
            <td class="px-4 py-3">The Revenant</td>
            <td class="px-4 py-3">Physical survival drama</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won Best Leading Actor</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Movie Star Looks, Unglamorous Roles</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">DiCaprio could have coasted on his looks, and early in his career studios expected him to. Instead he has played characters who are mud-caked, enraged, desperate or simply unlikable. Putting the demands of the script ahead of his image is a big part of why directors keep casting him.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Looking Ahead</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">DiCaprio makes only a few films each decade, so each release gets close attention. <em>One Battle After Another</em> (2025), Paul Thomas Anderson's action-thriller, gave him a role as a washed-up former revolutionary and was a Best Picture nominee at the 2026 Academy Awards. It reflects what the rest of his work shows: he keeps taking on unusual projects with serious filmmakers.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/3/leonardo-dicaprio-titanic.webp"
        alt="Leonardo DiCaprio in a collage of his best movies - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Leonardo DiCaprio: from Titanic to modern-day movie legend</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The <strong>best Leonardo DiCaprio movies</strong> are the ones where he works with a strong director on a difficult role. Start with <em>The Departed</em> or <em>Inception</em> if you want a thriller, <em>The Revenant</em> for his Oscar-winning performance, or <em>Titanic</em> for where it all began.</p>
    </div>
  `,

  // CHECK: several ids below look mismatched with their titles (e.g. 769, 68718, 27205, 281957, 106646, 1997).
  // Inception is 27205 in the other lists in this file. Verify each against TMDB before publishing.
  movies: [
    { id: 11324, type: 'movie', note: `<span class="text-white font-medium">Shutter Island</span> — DiCaprio plays a U.S. Marshal investigating a patient's disappearance at a remote psychiatric hospital in Martin Scorsese's psychological thriller.` },
    { id: 1054867, type: 'movie', note: `<span class="text-white font-medium">One Battle After Another</span> — Paul Thomas Anderson's action-thriller, in which DiCaprio plays a washed-up former revolutionary. A Best Picture nominee at the 2026 Oscars.` },
    { id: 769, type: 'movie', note: `<span class="text-white font-medium">Inception</span> — Christopher Nolan's heist thriller, with DiCaprio as Dom Cobb, a thief who steals secrets by entering people's dreams.` },
    { id: 68718, type: 'movie', note: `<span class="text-white font-medium">The Revenant</span> — The role that won him the Best Actor Oscar: frontiersman Hugh Glass, fighting to survive after being left for dead in the wilderness.` },
    { id: 27205, type: 'movie', note: `<span class="text-white font-medium">The Wolf of Wall Street</span> — DiCaprio plays stockbroker Jordan Belfort in Scorsese's loud, darkly funny story of fraud and excess. It won him a Golden Globe.` },
    { id: 281957, type: 'movie', note: `<span class="text-white font-medium">The Great Gatsby</span> — Baz Luhrmann's lavish adaptation of F. Scott Fitzgerald's novel, with DiCaprio as the mysterious millionaire Jay Gatsby.` },
    { id: 1422, type: 'movie', note: `<span class="text-white font-medium">The Departed</span> — DiCaprio plays an undercover cop infiltrating the Boston Irish mob in Scorsese's crime thriller, which won the Oscar for Best Picture.` },
    { id: 106646, type: 'movie', note: `<span class="text-white font-medium">Blood Diamond</span> — DiCaprio plays a diamond smuggler in 1990s Sierra Leone, a performance that earned him an Oscar nomination.` },
    { id: 466420, type: 'movie', note: `<span class="text-white font-medium">Killers of the Flower Moon</span> — Scorsese's historical drama about the murders of Osage people in 1920s Oklahoma, with DiCaprio as the morally compromised Ernest Burkhart.` },
    { id: 640, type: 'movie', note: `<span class="text-white font-medium">Catch Me If You Can</span> — Steven Spielberg's lively true story of Frank Abagnale Jr., a teenage con man who forged his way through several identities.` },
    { id: 466272, type: 'movie', note: `<span class="text-white font-medium">Once Upon a Time in Hollywood</span> — DiCaprio plays Rick Dalton, a fading TV actor, in Tarantino's story of 1969 Los Angeles. It earned him an Oscar nomination and a Golden Globe.` },
    { id: 1997, type: 'movie', note: `<span class="text-white font-medium">Titanic</span> — The film that made him a global star. As Jack Dawson, opposite Kate Winslet, he anchored one of cinema's best-known love stories.` },
    { id: 646380, type: 'movie', note: `<span class="text-white font-medium">Don't Look Up</span> — Adam McKay's satire about scientists trying to warn the world about an approaching comet, with DiCaprio as an anxious astronomer.` }
  ]
},

{
  id: "4",
  slug: "will-ferrell-movies-tv-shows",
  title: "Best Will Ferrell Movies & TV Shows",
  metaTitle: "Best Will Ferrell Movies & TV Shows (Full Guide)",
  metaDescription: "The best Will Ferrell movies and TV shows, from Elf, Anchorman and Step Brothers to Semi-Pro and Barbie, with details on his comedy eras and key roles.",
  keywords: [
    "Will Ferrell movies",
    "Will Ferrell TV shows",
    "best Will Ferrell movies",
    "Will Ferrell filmography",
    "Will Ferrell basketball movie",
    "Semi-Pro",
    "Elf",
    "Anchorman",
    "Step Brothers",
    "Talladega Nights",
    "The Other Guys",
    "Will Ferrell SNL"
  ],
  coverImage: "/img/lists/4/will-ferrell-movies.webp",
  shortDescription: "A guide to the best Will Ferrell movies and TV shows, from his Saturday Night Live years to Elf, Anchorman, Step Brothers and beyond.",
  seoTitle: "Best Will Ferrell Movies & TV Shows: Complete Filmography",
  seoDescription: "The best Will Ferrell movies and TV shows, from Elf, Anchorman and Step Brothers to Semi-Pro and Barbie, with details on his comedy eras and key roles.",
  focusKeyword: "Will Ferrell movies",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">Few comedy actors have shaped the genre as much as Will Ferrell. After a run on <em>Saturday Night Live</em>, he became a leading man in the 2000s by playing confident, clueless characters who commit completely to the joke. The result is a long list of sports parodies, absurd satires and holiday favorites that people still quote.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">This guide to <strong>Will Ferrell movies and TV shows</strong> covers his most important films, answers the common question about his <strong>basketball movie</strong>, and breaks his career into distinct eras so it is easy to see where each title fits.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">The Will Ferrell Basketball Movie: Semi-Pro (2008)</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">If you are searching for a <strong>Will Ferrell basketball movie</strong>, the answer is <em>Semi-Pro</em> (2008), a comedy set in the 1970s American Basketball Association. It belongs to the stretch of his career when he took on sports one at a time, with loud and deliberately unpolished results.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Semi-Pro: Key Facts</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><span class="text-white font-bold">His character:</span> Jackie Moon</li>
        <li><span class="text-white font-bold">Year:</span> 2008</li>
        <li><span class="text-white font-bold">Co-stars:</span> Woody Harrelson, André 3000, Will Arnett</li>
        <li><span class="text-white font-bold">Premise:</span> A one-hit-wonder singer owns and coaches an ABA team and must keep it alive as the league merges with the NBA.</li>
      </ul>
    </div>

    <p class="text-gray-400 mb-6 leading-relaxed"><span class="text-white font-bold">The conflict:</span> Only the top four ABA teams will be absorbed into the NBA, and the rest will disappear. Jackie must turn a mismatched roster, including veteran player Ed Monix (Woody Harrelson) and star scorer Clarence "Coffee" Withers (André 3000), into a contender.</p>

    <p class="text-gray-400 mb-6 leading-relaxed"><span class="text-white font-bold">Why it stands out:</span> The film is built on Ferrell's physical comedy and Jackie's increasingly wild promotional stunts, including a scene where he wrestles a bear to sell tickets.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">The Eras of Will Ferrell's Career</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">His career divides into three broad phases that show how he moved from ensemble player to headliner and producer.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Breakout Era (Late 1990s to 2003)</h3>
      <p class="text-sm text-gray-400">After becoming one of the stars of <em>Saturday Night Live</em>, Ferrell moved into film with scene-stealing supporting roles in <em>Zoolander</em> (2001) and <em>Old School</em> (2003). The era peaked with <em>Elf</em> (2003), a big box-office hit that became a holiday standard.</p>
    </div>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Adam McKay Era (2004 to 2010)</h3>
      <p class="text-sm text-gray-400">Working with director Adam McKay, Ferrell made some of the most quoted comedies of the century: <em>Anchorman</em> (2004), <em>Talladega Nights</em> (2006), <em>Step Brothers</em> (2008) and the buddy-cop comedy <em>The Other Guys</em> (2010).</p>
    </div>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Producer and Streaming Era (2015 to Present)</h3>
      <p class="text-sm text-gray-400">Ferrell now balances starring roles with producing through his company Gloria Sanchez Productions. He has made family comedies, streaming films and ensemble projects, including a memorable supporting role in <em>Barbie</em> (2023).</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Key Will Ferrell Movies at a Glance</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">This table covers six of his most popular films, listed from newest to oldest.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Year</th>
            <th class="px-4 py-3 text-left">Genre or Sport</th>
            <th class="px-4 py-3 text-left">His Character</th>
            <th class="px-4 py-3 text-left">Why It Matters</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Step Brothers</td>
            <td class="px-4 py-3">2008</td>
            <td class="px-4 py-3">Absurd family comedy</td>
            <td class="px-4 py-3">Brennan Huff</td>
            <td class="px-4 py-3 text-[#E50914]">Cult classic with John C. Reilly</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Semi-Pro</td>
            <td class="px-4 py-3">2008</td>
            <td class="px-4 py-3">1970s basketball comedy</td>
            <td class="px-4 py-3">Jackie Moon</td>
            <td class="px-4 py-3 text-[#E50914]">His main basketball movie</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Talladega Nights</td>
            <td class="px-4 py-3">2006</td>
            <td class="px-4 py-3">NASCAR comedy</td>
            <td class="px-4 py-3">Ricky Bobby</td>
            <td class="px-4 py-3 text-[#E50914]">Grossed over $160M worldwide</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Anchorman</td>
            <td class="px-4 py-3">2004</td>
            <td class="px-4 py-3">1970s newsroom satire</td>
            <td class="px-4 py-3">Ron Burgundy</td>
            <td class="px-4 py-3 text-[#E50914]">One of the most quoted comedies of its era</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Elf</td>
            <td class="px-4 py-3">2003</td>
            <td class="px-4 py-3">Holiday comedy</td>
            <td class="px-4 py-3">Buddy the Elf</td>
            <td class="px-4 py-3 text-[#E50914]">About $220M worldwide; a Christmas staple</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Old School</td>
            <td class="px-4 py-3">2003</td>
            <td class="px-4 py-3">College comedy</td>
            <td class="px-4 py-3">Frank "The Tank" Ricard</td>
            <td class="px-4 py-3 text-[#E50914]">Won the MTV Movie Award for Best On-Screen Team</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Is Next for Ferrell</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Ferrell continues to mix big comedies with unusual projects. Recent work includes the animated and family films <em>Despicable Me 4</em> and <em>Strays</em>, the Netflix documentary <em>Will &amp; Harper</em>, and the wedding comedy <em>You're Cordially Invited</em>. Projects reported by the trade press include a Netflix golf comedy series and a courtroom comedy with Zac Efron, though release details can change.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/4/will-ferrell-collage.webp"
        alt="Will Ferrell in a collage of his best movies and TV roles - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Will Ferrell: from SNL to comedy icon</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The <strong>best Will Ferrell movies and TV shows</strong> are the ones built around a single, fully committed character. Begin with <em>Elf</em> for a family-friendly pick, <em>Anchorman</em> or <em>Step Brothers</em> for his absurd best, and <em>Semi-Pro</em> if you want his basketball comedy.</p>
    </div>
  `,

  // CHECK: confirm the TMDB ids for Anchorman, Talladega Nights and The Other Guys, and the Arco, Drunk Parents,
  // Tim and Eric and A Very Jonas Christmas Movie credits before publishing.
  movies: [
    { id: 346698, type: 'movie', note: `<span class="text-white font-medium">Barbie (2023)</span> — Ferrell plays the out-of-touch CEO of Mattel in the blockbuster comedy that became a global phenomenon.` },
    { id: 137106, type: 'movie', note: `<span class="text-white font-medium">The Lego Movie (2014)</span> — Ferrell voices the villainous President Business in this hit animated comedy.` },
    { id: 10719, type: 'movie', note: `<span class="text-white font-medium">Elf (2003)</span> — Ferrell plays Buddy, a human raised by elves who travels to New York City to find his father. A holiday classic that grossed about $220M worldwide.` },
    { id: 13352, type: 'movie', note: `<span class="text-white font-medium">Anchorman: The Legend of Ron Burgundy (2004)</span> — Ferrell plays Ron Burgundy, a vain 1970s San Diego news anchor, in one of the most quoted comedies of its era.` },
    { id: 12133, type: 'movie', note: `<span class="text-white font-medium">Step Brothers (2008)</span> — Ferrell and John C. Reilly play two grown men who become stepbrothers and refuse to act their age. A cult favorite.` },
    { id: 10053, type: 'movie', note: `<span class="text-white font-medium">Talladega Nights: The Ballad of Ricky Bobby (2006)</span> — Ferrell plays NASCAR driver Ricky Bobby in this sports comedy that grossed over $160M worldwide.` },
    { id: 38055, type: 'movie', note: `<span class="text-white font-medium">Megamind (2010)</span> — Ferrell voices the title character, a supervillain who unexpectedly becomes the hero.` },
    { id: 37931, type: 'movie', note: `<span class="text-white font-medium">The Other Guys (2010)</span> — Ferrell and Mark Wahlberg play mismatched NYPD detectives in this buddy-cop action comedy.` },
    { id: 274479, type: 'movie', note: `<span class="text-white font-medium">Daddy's Home (2015)</span> — Ferrell and Mark Wahlberg compete as a stepfather and a biological father in this family comedy.` },
    { id: 11678, type: 'movie', note: `<span class="text-white font-medium">Old School (2003)</span> — Ferrell plays Frank "The Tank" Ricard in this college-fraternity comedy. The film's trio won the MTV Movie Award for Best On-Screen Team.` },
    { id: 1667, type: 'tv', note: `<span class="text-white font-medium">Saturday Night Live (1995 to 2002)</span> — The show that made him famous. Ferrell was a cast member for seven years and created many of its best-known characters and sketches.` },
    { id: 9955, type: 'movie', note: `<span class="text-white font-medium">Blades of Glory (2007)</span> — Ferrell and Jon Heder play rival figure skaters who are forced to compete as a pairs team.` },
    { id: 12600, type: 'movie', note: `<span class="text-white font-medium">Stranger Than Fiction (2006)</span> — In a more dramatic role, Ferrell plays an IRS auditor who starts hearing a narrator describe his life.` },
    { id: 9398, type: 'movie', note: `<span class="text-white font-medium">Zoolander (2001)</span> — Ferrell plays Mugatu, the scheming fashion designer, in this cult comedy about male models.` },
    { id: 2316, type: 'tv', note: `<span class="text-white font-medium">The Office (2011)</span> — A guest arc as Deangelo Vickers, who briefly takes over as manager of the Scranton branch.` },
    { id: 419680, type: 'movie', note: `<span class="text-white font-medium">Daddy's Home 2 (2017)</span> — Ferrell returns as the stepfather in this holiday sequel with an expanded cast.` },
    { id: 257091, type: 'movie', note: `<span class="text-white font-medium">Get Hard (2015)</span> — Ferrell plays a wealthy financier who hires a small-business owner (Kevin Hart) to prepare him for prison.` },
    { id: 77953, type: 'movie', note: `<span class="text-white font-medium">The Campaign (2012)</span> — Ferrell and Zach Galifianakis play rival candidates in this political satire.` },
    { id: 10057, type: 'movie', note: `<span class="text-white font-medium">Semi-Pro (2008)</span> — Ferrell's main basketball movie. He plays Jackie Moon, a one-hit-wonder singer who owns and coaches an ABA team.` },
    { id: 17813, type: 'movie', note: `<span class="text-white font-medium">Land of the Lost (2009)</span> — A sci-fi comedy based on the classic TV series, with Ferrell as a scientist who falls into a prehistoric world.` },
    { id: 55420, type: 'movie', note: `<span class="text-white font-medium">Everything Must Go (2010)</span> — In a dramatic role, Ferrell plays a man who loses his job and home while struggling with alcoholism.` },
    { id: 9693, type: 'movie', note: `<span class="text-white font-medium">Bewitched (2005)</span> — A comedy based on the classic TV series, with Ferrell as a vain actor cast opposite a real witch.` },
    { id: 13787, type: 'movie', note: `<span class="text-white font-medium">Kicking & Screaming (2005)</span> — Ferrell plays an intensely competitive soccer coach in this family sports comedy directed by Jesse Dylan.` },
    { id: 9411, type: 'movie', note: `<span class="text-white font-medium">A Night at the Roxbury (1998)</span> — A comedy based on an SNL sketch, with Ferrell and Chris Kattan as two brothers obsessed with nightclubs.` },
    { id: 9899, type: 'movie', note: `<span class="text-white font-medium">The Producers (2005)</span> — Ferrell plays eccentric playwright Franz Liebkind in this film version of the Broadway musical.` },
    { id: 84306, type: 'movie', note: `<span class="text-white font-medium">Casa de mi Padre (2012)</span> — A comedy told almost entirely in Spanish, with Ferrell as a rancher in a spoof of Mexican melodramas.` },
    { id: 426618, type: 'movie', note: `<span class="text-white font-medium">Holmes & Watson (2018)</span> — Ferrell and John C. Reilly reunite for a comic take on Sherlock Holmes and Dr. Watson.` },
    { id: 551812, type: 'movie', note: `<span class="text-white font-medium">Downhill (2020)</span> — Ferrell plays a husband whose choice during an avalanche strains his marriage, in this remake of the Swedish film Force Majeure.` },
    { id: 514207, type: 'movie', note: `<span class="text-white font-medium">Eurovision Song Contest: The Story of Fire Saga (2020)</span> — Ferrell co-wrote and stars in this Netflix comedy about two Icelandic singers at Europe's big music contest.` },
    { id: 736069, type: 'movie', note: `<span class="text-white font-medium">Spirited (2022)</span> — A musical retelling of A Christmas Carol, with Ferrell and Ryan Reynolds.` },
    { id: 1075456, type: 'movie', note: `<span class="text-white font-medium">Quiz Lady (2023)</span> — A comedy about a game-show fan and her sister, starring Awkwafina and Sandra Oh, with Ferrell in a supporting role.` },
    { id: 1016086, type: 'movie', note: `<span class="text-white font-medium">You're Cordially Invited (2025)</span> — A wedding comedy in which two weddings are booked at the same venue, starring Ferrell and Reese Witherspoon.` },
    { id: 519182, type: 'movie', note: `<span class="text-white font-medium">Despicable Me 4 (2024)</span> — Ferrell voices the villain Maxime Le Mal in this animated sequel.` },
    { id: 912908, type: 'movie', note: `<span class="text-white font-medium">Strays (2023)</span> — Ferrell voices Reggie, a dog abandoned by his owner, in this R-rated animated comedy.` },
    { id: 280217, type: 'movie', note: `<span class="text-white font-medium">The Lego Movie 2: The Second Part (2019)</span> — Ferrell returns as President Business in the animated sequel.` },
    { id: 109443, type: 'movie', note: `<span class="text-white font-medium">Anchorman 2: The Legend Continues (2013)</span> — Ron Burgundy and his news team move to a 24-hour cable news channel.` },
    { id: 329833, type: 'movie', note: `<span class="text-white font-medium">Zoolander 2 (2016)</span> — Ferrell returns as the designer Mugatu in the sequel to the cult comedy.` },
    { id: 11674, type: 'movie', note: `<span class="text-white font-medium">Wedding Crashers (2005)</span> — A cameo as Chazz Reinhold, a veteran wedding crasher who mentors Owen Wilson and Vince Vaughn.` },
    { id: 11153, type: 'movie', note: `<span class="text-white font-medium">Starsky & Hutch (2004)</span> — A supporting role as Big Earl, a prison inmate, in this comic remake of the 1970s TV series.` },
    { id: 1624, type: 'movie', note: `<span class="text-white font-medium">Jay and Silent Bob Strike Back (2001)</span> — Ferrell appears as a federal wildlife marshal in Kevin Smith's comedy.` },
    { id: 19742, type: 'movie', note: `<span class="text-white font-medium">Drowning Mona (2000)</span> — A supporting role in this dark comedy about a small town where nearly everyone had a reason to want a woman dead.` },
    { id: 20489, type: 'movie', note: `<span class="text-white font-medium">Superstar (1999)</span> — A supporting role in this SNL-spinoff comedy starring Molly Shannon.` },
    { id: 18162, type: 'movie', note: `<span class="text-white font-medium">The Ladies Man (2000)</span> — A supporting role in this SNL-spinoff comedy starring Tim Meadows.` },
    { id: 10661, type: 'movie', note: `<span class="text-white font-medium">Dick (1999)</span> — A comedy about two teenage girls who accidentally become involved in the Watergate scandal, with Ferrell in the cast.` },
    { id: 952, type: 'movie', note: `<span class="text-white font-medium">Austin Powers: The Spy Who Shagged Me (1999)</span> — Ferrell returns as Mustafa in this hit sequel.` },
    { id: 816, type: 'movie', note: `<span class="text-white font-medium">Austin Powers: International Man of Mystery (1997)</span> — Ferrell has a small role as Mustafa in the first film of the series.` },
    { id: 14691, type: 'movie', note: `<span class="text-white font-medium">Boat Trip (2002)</span> — A comedy about two friends who end up on a gay cruise, with Ferrell in a supporting role.` },
    { id: 19994, type: 'movie', note: `<span class="text-white font-medium">The Goods: Live Hard, Sell Hard (2009)</span> — A comedy about a crew of used-car salesmen. Ferrell was a producer and appears in the cast.` },
    { id: 157827, type: 'movie', note: `<span class="text-white font-medium">The Internship (2013)</span> — Ferrell has a cameo in this Google-set comedy starring Owen Wilson and Vince Vaughn.` },
    { id: 13654, type: 'movie', note: `<span class="text-white font-medium">Curious George (2006)</span> — Ferrell voices the Man in the Yellow Hat in this animated adaptation of the children's books.` },
    { id: 18788, type: 'movie', note: `<span class="text-white font-medium">The Wendell Baker Story (2005)</span> — A comedy-drama about an ex-con who tries to start over, with Ferrell in the cast.` },
    { id: 11382, type: 'movie', note: `<span class="text-white font-medium">Melinda and Melinda (2004)</span> — Woody Allen tells one story twice, once as a comedy and once as a tragedy, with Ferrell in the cast.` },
    { id: 18313, type: 'movie', note: `<span class="text-white font-medium">Winter Passing (2005)</span> — An indie comedy-drama about a struggling actress, with Ferrell in a supporting role.` },
    { id: 77816, type: 'movie', note: `<span class="text-white font-medium">Tim and Eric's Billion Dollar Movie (2012)</span> — A surreal comedy from Tim Heidecker and Eric Wareheim, with a cameo from Ferrell.` },
    { id: 582885, type: 'movie', note: `<span class="text-white font-medium">Between Two Ferns: The Movie (2019)</span> — A feature version of Zach Galifianakis's talk-show web series, with Ferrell among the celebrity guests.` },
    { id: 531131, type: 'movie', note: `<span class="text-white font-medium">Drunk Parents (2019)</span> — An ensemble comedy about adults behaving badly, connected to Ferrell as a producer.` },
    { id: 419478, type: 'movie', note: `<span class="text-white font-medium">Zeroville (2019)</span> — An indie drama about a film enthusiast who becomes a Hollywood editor, with Ferrell in a small role.` },
    { id: 1227500, type: 'movie', note: `<span class="text-white font-medium">Will & Harper (2024)</span> — A Netflix documentary that follows Ferrell and his friend Harper Steele on a cross-country road trip.` },
    { id: 1425122, type: 'movie', note: `<span class="text-white font-medium">A Very Jonas Christmas Movie (2025)</span> — A holiday comedy featuring the Jonas Brothers, with Ferrell in the cast.` },
    { id: 1392729, type: 'movie', note: `<span class="text-white font-medium">Arco (2025)</span> — An animated science-fiction adventure about a boy who travels through time. Ferrell is part of the English-language voice cast.` }
  ]
},

{
  id: "5",
  slug: "brad-pitt-movies-tv-shows",
  title: "Best Brad Pitt Movies & TV Shows",
  metaTitle: "Best Brad Pitt Movies & TV Shows (Full Guide)",
  metaDescription: "The best Brad Pitt movies and TV shows, from Fight Club and Se7en to Once Upon a Time in Hollywood and F1, with his awards, key roles and what is next.",
  keywords: [
    "Brad Pitt movies",
    "best Brad Pitt movies",
    "Brad Pitt TV shows",
    "Brad Pitt filmography",
    "Brad Pitt new movie",
    "Brad Pitt F1",
    "Brad Pitt Oscar",
    "Fight Club",
    "Once Upon a Time in Hollywood",
    "Plan B Entertainment"
  ],
  coverImage: "/img/lists/5/brad-pitt-movies.webp",
  shortDescription: "A guide to the best Brad Pitt movies and TV shows, from Thelma & Louise and Fight Club to his Oscar-winning role in Once Upon a Time in Hollywood and the racing drama F1.",
  seoTitle: "Best Brad Pitt Movies & TV Shows: Complete Filmography",
  seoDescription: "The best Brad Pitt movies and TV shows, from Fight Club and Se7en to Once Upon a Time in Hollywood and F1, with his awards, key roles and what is next.",
  focusKeyword: "Brad Pitt movies",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">Brad Pitt has been a leading man for nearly four decades, and he has used that status to work with demanding directors on unusual projects. After breaking out in <em>Thelma &amp; Louise</em>, he moved through romantic dramas, crime thrillers, war films and comedies, often picking roles that cut against his good-looking image.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">This guide to the <strong>best Brad Pitt movies and TV shows</strong> covers his defining performances, his Oscar-winning role, his work as a producer through Plan B Entertainment, and his recent films. At 62, he is still taking on physically and creatively ambitious projects.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Defines a Brad Pitt Performance</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Early on, Pitt deliberately avoided being typecast as a handsome lead. He sought out characters who were unstable, morally murky or just odd, and that habit gives a <strong>Brad Pitt movie</strong> much of its energy. He can switch between sudden, nervy physicality and quiet calculation within a single scene.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">In <em>Fight Club</em> he is a charismatic anarchist, in <em>Once Upon a Time in Hollywood</em> a calm, loyal stuntman, and in <em>Fury</em> a tired tank commander. He often builds a performance out of small, everyday behavior, such as how a character eats or leans on a car, which makes the people he plays feel real.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Pitt Approach</h3>
      <p class="text-sm text-gray-400">He mixes star power with character acting. That combination lets him headline big studio films and still take smaller, stranger roles, which is why his filmography is so varied.</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Producer and Creative Control</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Through Plan B Entertainment, Pitt has helped develop and produce films such as <em>12 Years a Slave</em>, <em>Moneyball</em> and <em>The Big Short</em>, as well as TV projects like <em>The Underground Railroad</em>. This gives him a say in the kind of stories that get made, beyond the roles he plays himself.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Career Stages</h3>
      <div class="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">Early Breakouts</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">Director Collaborations</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937]">Oscar Recognition</span>
        <span class="text-gray-500">⟶</span>
        <span class="bg-[#0F0F1A] px-3 py-1 rounded-full border border-[#1F2937] text-[#E50914]">Plan B and Big-Scale Projects</span>
      </div>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Awards and Recognition</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Pitt won the Academy Award for Best Supporting Actor for <em>Once Upon a Time in Hollywood</em> and swept the major supporting-actor honors that season. He has also earned Oscar nominations for acting in <em>Twelve Monkeys</em>, <em>The Curious Case of Benjamin Button</em> and <em>Moneyball</em>, and as a producer he shared in the Best Picture win for <em>12 Years a Slave</em>.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Award</th>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Category</th>
            <th class="px-4 py-3 text-left">Result</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Academy Awards</td>
            <td class="px-4 py-3">Once Upon a Time in Hollywood</td>
            <td class="px-4 py-3">Best Supporting Actor</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Golden Globes</td>
            <td class="px-4 py-3">Once Upon a Time in Hollywood</td>
            <td class="px-4 py-3">Best Supporting Actor</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">BAFTA Awards</td>
            <td class="px-4 py-3">Once Upon a Time in Hollywood</td>
            <td class="px-4 py-3">Best Supporting Actor</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Screen Actors Guild Awards</td>
            <td class="px-4 py-3">Once Upon a Time in Hollywood</td>
            <td class="px-4 py-3">Supporting Actor</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Won</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Recent Work: F1 (2025)</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The most prominent recent <strong>Brad Pitt new movie</strong> is <em>F1</em>, directed by Joseph Kosinski, who also made <em>Top Gun: Maverick</em>. The film was a Best Picture nominee at the 2026 Academy Awards.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">F1: Key Facts</h3>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><span class="text-white font-bold">The character:</span> Sonny Hayes, a former Formula 1 driver from the 1990s whose career ended after a serious crash.</li>
        <li><span class="text-white font-bold">The story:</span> Decades later, a struggling team owner (Javier Bardem) brings Sonny back to mentor a talented young driver (Damson Idris).</li>
        <li><span class="text-white font-bold">The filmmaking:</span> Much of the racing was shot on track during real Grand Prix weekends, using specially adapted cars, which gives the races an unusually physical feel.</li>
      </ul>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Is Next: Heart of the Beast</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">His next announced lead role is in <em>Heart of the Beast</em>, an action-survival thriller directed by David Ayer. Pitt plays a former Special Forces officer stranded in the Alaskan wilderness with his retired combat dog after a plane crash. Check official sources for the latest release information.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Movie Star Looks, Imperfect Characters</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Pitt could have built a career on being the most photogenic man in the room. Instead he has regularly played people who are flawed, hurt or ridiculous, from the dim-witted trainer in <em>Burn After Reading</em> to the damaged father in <em>The Tree of Life</em>. He is willing to look rough, tired or foolish if the story requires it, and that choice has earned lasting respect from filmmakers and audiences.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Essential Brad Pitt Movies and TV Shows</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">From <em>Thelma &amp; Louise</em> to <em>Once Upon a Time in Hollywood</em>, his filmography covers cult favorites like <em>Fight Club</em> and <em>Se7en</em>, blockbusters like <em>Ocean's Eleven</em> and <em>World War Z</em>, and serious dramas like <em>The Tree of Life</em> and <em>Moneyball</em>. Whatever you are in the mood for, the <strong>best Brad Pitt movies</strong> offer something for it.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/5/brad-pitt-collage.webp"
        alt="Brad Pitt in a collage of his best movies and TV roles - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Brad Pitt: from Thelma &amp; Louise to Hollywood leading man</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The <strong>best Brad Pitt movies and TV shows</strong> mix star power with risky character work. Start with <em>Fight Club</em> or <em>Se7en</em> for his darker side, <em>Once Upon a Time in Hollywood</em> for his Oscar-winning role, or <em>F1</em> for his latest big-screen turn.</p>
    </div>
  `,

  // CHECK: ids 4289, 4296, 4300, 4301 are sequential and may be wrong; confirm them against TMDB.
  // CHECK: confirm Pitt's involvement in Lego Masters, 3 Body Problem, The Jim Jefferies Show, Dave and Touch of Evil (2011).
  movies: [
    { id: 550, type: `movie`, note: `<span class="text-white font-medium">Fight Club (1999)</span> — Pitt plays Tyler Durden, a charismatic anarchist, in David Fincher's cult classic about masculinity and consumer culture.` },
    { id: 807, type: `movie`, note: `<span class="text-white font-medium">Se7en (1995)</span> — Pitt plays Detective David Mills opposite Morgan Freeman in Fincher's grim thriller about a killer inspired by the seven deadly sins.` },
    { id: 16869, type: `movie`, note: `<span class="text-white font-medium">Inglourious Basterds (2009)</span> — Pitt plays Lt. Aldo Raine, leader of a team of Jewish-American soldiers, in Quentin Tarantino's alternate-history war film.` },
    { id: 466272, type: `movie`, note: `<span class="text-white font-medium">Once Upon a Time in Hollywood (2019)</span> — Pitt won the Oscar for playing Cliff Booth, a laid-back stuntman, in Tarantino's story of 1969 Los Angeles.` },
    { id: 161, type: `movie`, note: `<span class="text-white font-medium">Ocean's Eleven (2001)</span> — Pitt plays Rusty Ryan in Steven Soderbergh's stylish heist film, which launched a successful series.` },
    { id: 652, type: `movie`, note: `<span class="text-white font-medium">Troy (2004)</span> — Pitt plays the warrior Achilles in Wolfgang Petersen's epic based on Homer's Iliad.` },
    { id: 72190, type: `movie`, note: `<span class="text-white font-medium">World War Z (2013)</span> — Pitt plays Gerry Lane, a former UN investigator searching for a way to stop a global zombie pandemic.` },
    { id: 787, type: `movie`, note: `<span class="text-white font-medium">Mr. & Mrs. Smith (2005)</span> — Pitt and Angelina Jolie play a married couple who are secretly assassins assigned to kill each other.` },
    { id: 4922, type: `movie`, note: `<span class="text-white font-medium">The Curious Case of Benjamin Button (2008)</span> — Pitt earned an Oscar nomination for playing a man who ages backward, in another Fincher film.` },
    { id: 60308, type: `movie`, note: `<span class="text-white font-medium">Moneyball (2011)</span> — Pitt earned an Oscar nomination as Oakland A's general manager Billy Beane, who used statistics to build a competitive team.` },
    { id: 318846, type: `movie`, note: `<span class="text-white font-medium">The Big Short (2015)</span> — Pitt co-stars in this comedic account of the 2008 financial crisis and was a producer through Plan B. It won the Oscar for Best Adapted Screenplay.` },
    { id: 76203, type: `movie`, note: `<span class="text-white font-medium">12 Years a Slave (2013)</span> — Pitt appears in a supporting role and was a producer on this harrowing drama, which won the Oscar for Best Picture.` },
    { id: 107, type: `movie`, note: `<span class="text-white font-medium">Snatch (2000)</span> — Pitt plays Mickey O'Neil, an Irish Traveller bare-knuckle boxer, in Guy Ritchie's crime comedy.` },
    { id: 628, type: `movie`, note: `<span class="text-white font-medium">Interview with the Vampire (1994)</span> — Pitt plays the melancholy vampire Louis in this gothic adaptation of Anne Rice's novel.` },
    { id: 63, type: `movie`, note: `<span class="text-white font-medium">Twelve Monkeys (1995)</span> — Pitt won a Golden Globe and earned an Oscar nomination for playing a manic patient in Terry Gilliam's time-travel thriller.` },
    { id: 1668, type: `tv`, note: `<span class="text-white font-medium">Friends</span> — Pitt guest-starred as Will Colbert, a former classmate who holds a grudge against Ross and Rachel, in "The One with the Rumor."` },
    { id: 1667, type: `tv`, note: `<span class="text-white font-medium">Saturday Night Live</span> — Pitt has appeared on the long-running sketch show as a host and guest.` },
    { id: 4376, type: `tv`, note: `<span class="text-white font-medium">21 Jump Street</span> — An early TV guest role on the Fox series that helped launch Johnny Depp's career.` },
    { id: 2122, type: `tv`, note: `<span class="text-white font-medium">King of the Hill</span> — Pitt voiced a guest character in an episode of Mike Judge's animated sitcom about life in Texas.` },
    { id: 69061, type: `tv`, note: `<span class="text-white font-medium">The OA</span> — Pitt's Plan B Entertainment produced this Netflix mystery about a woman who returns home after being missing for seven years.` },
    { id: 113985, type: `tv`, note: `<span class="text-white font-medium">Outer Range</span> — A Prime Video supernatural western starring Josh Brolin as a rancher who discovers a mysterious hole on his land. Plan B was a producer.` },
    { id: 108545, type: `tv`, note: `<span class="text-white font-medium">3 Body Problem</span> — Netflix's adaptation of Liu Cixin's science-fiction novel about humanity's first contact with an alien civilization.` },
    { id: 97084, type: `tv`, note: `<span class="text-white font-medium">Dave</span> — An FXX comedy series starring Lil Dicky, with a guest appearance connected to Pitt.` },
    { id: 1541, type: `movie`, note: `<span class="text-white font-medium">Thelma & Louise (1991)</span> — Pitt's breakout role as J.D., a charming hitchhiker, in Ridley Scott's road-trip drama.` },
    { id: 4477, type: `movie`, note: `<span class="text-white font-medium">Legends of the Fall (1994)</span> — Pitt established himself as a romantic lead as Tristan Ludlow in this sweeping family epic.` },
    { id: 293, type: `movie`, note: `<span class="text-white font-medium">A River Runs Through It (1992)</span> — Pitt plays Paul Maclean, the rebellious younger brother, in Robert Redford's drama about fly-fishing and family.` },
    { id: 319, type: `movie`, note: `<span class="text-white font-medium">True Romance (1993)</span> — A memorable supporting turn as Floyd, an easygoing stoner, in Tony Scott's crime romance.` },
    { id: 228150, type: `movie`, note: `<span class="text-white font-medium">Fury (2014)</span> — Pitt plays Sergeant Don "Wardaddy" Collier, who leads a tank crew in the last weeks of World War II in Europe.` },
    { id: 4512, type: `movie`, note: `<span class="text-white font-medium">The Assassination of Jesse James by the Coward Robert Ford (2007)</span> — A haunting performance as Jesse James in this slow, poetic western about fame and obsession.` },
    { id: 1164, type: `movie`, note: `<span class="text-white font-medium">Babel (2006)</span> — Pitt plays an American tourist caught up in a tragedy in Alejandro González Iñárritu's multi-strand drama.` },
    { id: 82693, type: `movie`, note: `<span class="text-white font-medium">The Tree of Life (2011)</span> — Pitt plays a stern father in 1950s Texas in Terrence Malick's meditative film about family and the universe.` },
    { id: 4944, type: `movie`, note: `<span class="text-white font-medium">Burn After Reading (2008)</span> — Pitt plays Chad Feldheimer, a dim-witted gym employee, in the Coen Brothers' spy comedy.` },
    { id: 419704, type: `movie`, note: `<span class="text-white font-medium">Ad Astra (2019)</span> — Pitt plays astronaut Roy McBride, who travels across the solar system searching for his missing father.` },
    { id: 718930, type: `movie`, note: `<span class="text-white font-medium">Bullet Train (2022)</span> — Pitt plays Ladybug, an unlucky assassin, in David Leitch's action comedy set on a Japanese train.` },
    { id: 615777, type: `movie`, note: `<span class="text-white font-medium">Babylon (2022)</span> — Pitt plays Jack Conrad, a silent-film star, in Damien Chazelle's epic about Hollywood's switch to sound.` },
    { id: 877817, type: `movie`, note: `<span class="text-white font-medium">Wolfs (2024)</span> — Pitt and George Clooney play rival fixers who are sent to the same job in this action comedy.` },
    { id: 911430, type: `movie`, note: `<span class="text-white font-medium">F1 (2025)</span> — Pitt plays veteran driver Sonny Hayes in Joseph Kosinski's Formula 1 racing drama, a Best Picture nominee at the 2026 Oscars.` },
    { id: 297, type: `movie`, note: `<span class="text-white font-medium">Meet Joe Black (1998)</span> — Pitt plays Death, who takes human form to experience life, in this romantic fantasy.` },
    { id: 40, type: `tv`, note: `<span class="text-white font-medium">Dallas</span> — An early TV role. Pitt appeared in several episodes of the long-running soap opera about the wealthy Ewing family.` },
    { id: 4289, type: `tv`, note: `<span class="text-white font-medium">Growing Pains</span> — An early guest role on this family sitcom starring Alan Thicke and Kirk Cameron.` },
    { id: 4296, type: `tv`, note: `<span class="text-white font-medium">The Jim Jefferies Show</span> — Jim Jefferies' Comedy Central late-night show, which has featured guest appearances from Pitt.` },
    { id: 4300, type: `tv`, note: `<span class="text-white font-medium">Lego Masters</span> — A reality competition in which teams of builders compete in LEGO challenges.` },
    { id: 4301, type: `tv`, note: `<span class="text-white font-medium">The Underground Railroad</span> — Barry Jenkins' miniseries based on Colson Whitehead's Pulitzer Prize-winning novel. Plan B was among the producers.` },
    { id: 9071, type: `movie`, note: `<span class="text-white font-medium">The Devil's Own (1997)</span> — Pitt plays an IRA member living undercover in New York with a police officer's family, opposite Harrison Ford.` },
    { id: 9787, type: `movie`, note: `<span class="text-white font-medium">Seven Years in Tibet (1997)</span> — Pitt plays Austrian mountaineer Heinrich Harrer in this biographical drama about his time in Tibet.` },
    { id: 1535, type: `movie`, note: `<span class="text-white font-medium">Spy Game (2001)</span> — Pitt plays CIA operative Tom Bishop opposite Robert Redford in this espionage thriller.` },
    { id: 9741, type: `movie`, note: `<span class="text-white font-medium">The Mexican (2001)</span> — Pitt and Julia Roberts play a bickering couple in this road-trip romantic comedy.` },
    { id: 38055, type: `movie`, note: `<span class="text-white font-medium">Megamind (2010)</span> — Pitt voices Metro Man, the city's superhero, in this animated comedy about a supervillain who becomes a hero.` },
    { id: 64689, type: `movie`, note: `<span class="text-white font-medium">Killing Them Softly (2012)</span> — Pitt plays hitman Jackie Cogan in this crime thriller about the fallout from a robbery of a mob-protected poker game.` },
    { id: 369885, type: `movie`, note: `<span class="text-white font-medium">Allied (2016)</span> — Pitt plays an intelligence officer opposite Marion Cotillard in this World War II romantic thriller.` },
    { id: 109091, type: `movie`, note: `<span class="text-white font-medium">The Counselor (2013)</span> — Pitt plays Westray, a middleman in a drug deal, in Ridley Scott's crime drama.` },
    { id: 314365, type: `movie`, note: `<span class="text-white font-medium">By the Sea (2015)</span> — Pitt co-stars with Angelina Jolie in this intimate drama about a couple in a troubled marriage.` },
    { id: 11527, type: `movie`, note: `<span class="text-white font-medium">Cool World (1992)</span> — Pitt plays a detective in a cartoon world in Ralph Bakshi's animated and live-action hybrid.` },
    { id: 48171, type: `movie`, note: `<span class="text-white font-medium">Johnny Suede (1991)</span> — An early lead role as an aspiring rock musician with an oversized pompadour in this indie comedy.` },
    { id: 12142, type: `movie`, note: `<span class="text-white font-medium">Kalifornia (1993)</span> — Pitt plays Early Grayce, a violent drifter, opposite Juliette Lewis and David Duchovny in this road thriller.` },
    { id: 28973, type: `movie`, note: `<span class="text-white font-medium">Cutting Class (1989)</span> — An early horror role in this high-school slasher movie.` },
    { id: 48228, type: `movie`, note: `<span class="text-white font-medium">Happy Together (1989)</span> — An early supporting role in this campus romantic comedy.` },
    { id: 126095, type: `movie`, note: `<span class="text-white font-medium">The Dark Side of the Sun (1988)</span> — An early role as a young American seeking a cure for a rare skin condition in Yugoslavia. The film was shelved for years before its release.` },
    { id: 52520, type: `movie`, note: `<span class="text-white font-medium">Across the Tracks (1991)</span> — Pitt plays a track star in this drama about two brothers who take very different paths.` },
    { id: 26390, type: `movie`, note: `<span class="text-white font-medium">The Favor (1994)</span> — A romantic comedy about a woman who asks her best friend to flirt with her old boyfriend, with Pitt in the cast.` },
    { id: 14411, type: `movie`, note: `<span class="text-white font-medium">Sinbad: Legend of the Seven Seas (2003)</span> — Pitt voices the legendary sailor in this animated DreamWorks adventure.` },
    { id: 760926, type: `movie`, note: `<span class="text-white font-medium">The Lost City (2022)</span> — A cameo as Jack Trainer, an adventurer, in this adventure comedy starring Sandra Bullock and Channing Tatum.` },
    { id: 383498, type: `movie`, note: `<span class="text-white font-medium">Deadpool 2 (2018)</span> — A brief cameo as Vanisher, an invisible member of X-Force, in this superhero sequel.` },
    { id: 453, type: `movie`, note: `<span class="text-white font-medium">Being John Malkovich (1999)</span> — A brief cameo in Spike Jonze's surreal comedy about a portal into an actor's mind.` },
    { id: 334533, type: `movie`, note: `<span class="text-white font-medium">The Audition (2015)</span> — A short film directed by Martin Scorsese, featuring Pitt alongside Robert De Niro and Leonardo DiCaprio.` },
    { id: 21615, type: `movie`, note: `<span class="text-white font-medium">Touch of Evil (2011)</span> — A short film that pays tribute to Orson Welles' classic noir.` },
    { id: 60410, type: `movie`, note: `<span class="text-white font-medium">Too Young to Die? (1990)</span> — Pitt plays a drug dealer in this TV movie about a teenager facing the death penalty.` },
    { id: 11373, type: `movie`, note: `<span class="text-white font-medium">No Way Out (1987)</span> — An early, uncredited appearance in this Kevin Costner political thriller.` }
  ]
},

{
  id: "6",
  slug: "movies-like-shutter-island",
  title: "21 Movies Like Shutter Island: Mind-Bending Psychological Thrillers",
  metaTitle: "21 Movies Like Shutter Island: Best Mind-Bending Thrillers",
  metaDescription: "Looking for movies like Shutter Island? These 21 psychological thrillers, from Memento to Black Swan, offer twists, paranoia and unreliable narrators.",
  keywords: [
    "movies like Shutter Island",
    "films like Shutter Island",
    "Shutter Island similar movies",
    "psychological thrillers",
    "mind-bending movies",
    "movies with plot twists",
    "best thriller movies",
    "Shutter Island cast",
    "where to watch Shutter Island"
  ],
  coverImage: "/img/lists/6/movies-like-shutter-island.webp",
  shortDescription: "A guide to 21 movies like Shutter Island: psychological thrillers with unreliable narrators, paranoia and endings that make you rethink everything.",
  seoTitle: "Movies Like Shutter Island: 21 Mind-Bending Psychological Thrillers",
  seoDescription: "Looking for movies like Shutter Island? These 21 psychological thrillers, from Memento to Black Swan, offer twists, paranoia and unreliable narrators.",
  focusKeyword: "movies like shutter island",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">If you are looking for <strong>movies like Shutter Island</strong>, you probably liked how Martin Scorsese's 2010 thriller kept you guessing until the end. Starring Leonardo DiCaprio, it mixes a gothic island setting, a missing-patient mystery and an unreliable point of view, and its final reveal changes how you read everything before it. This list collects 21 films that give a similar feeling of unease and surprise.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Makes Shutter Island Work</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Set in 1954, <strong>Shutter Island</strong> follows U.S. Marshal Teddy Daniels as he investigates the disappearance of a patient from a hospital for the criminally insane on a remote island. As a storm cuts the island off, the line between what is real and what Teddy imagines becomes harder to see. The ending is still debated by fans.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>Shutter Island cast</strong> adds to the effect. Leonardo DiCaprio leads, with Mark Ruffalo, Ben Kingsley, Max von Sydow and Michelle Williams in supporting roles. Streaming availability changes often by region, so check a service like JustWatch to see where to watch <strong>Shutter Island</strong> and the films below.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">What Is Shutter Island About? (Spoilers)</h3>
      <p class="text-sm text-gray-400">Teddy Daniels and his partner Chuck Aule (Mark Ruffalo) travel to Ashecliffe Hospital to find Rachel Solando, a patient who vanished from a locked room. A hurricane traps them on the island, and Teddy is troubled by visions of his late wife Dolores (Michelle Williams) and memories of the Second World War. The film reveals that Teddy is really Andrew Laeddis, a patient at the hospital, and that the investigation has been a role-play therapy led by Dr. Cawley (Ben Kingsley) to help him face a terrible loss.</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What These Films Have in Common</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>movies like Shutter Island</strong> on this list share a few traits. They rely on an unreliable narrator or shifting reality, they build dread through atmosphere rather than action, and they reward a second viewing because clues are hidden in plain sight. Most of them leave some questions open instead of tying up every detail.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">Scorsese made <strong>Shutter Island</strong> as a tribute to classic gothic thrillers, with stormy weather, striking music and dreamlike editing. The films here use different methods but aim for the same unsettled feeling.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Why These Films Resonate</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Stories about unreliable minds tap into a basic fear: that we cannot always trust our own memory or perception. Christopher Nolan's <em>Memento</em> tells its story in reverse so the audience shares the hero's confusion. David Fincher's <em>Fight Club</em> looks at the darkness beneath modern life, and Darren Aronofsky's <em>Black Swan</em> and Brad Anderson's <em>The Machinist</em> show the physical and mental cost of obsession and guilt.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Director</th>
            <th class="px-4 py-3 text-left">Core Theme</th>
            <th class="px-4 py-3 text-left">Why It Resonates</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Memento</td>
            <td class="px-4 py-3">Christopher Nolan</td>
            <td class="px-4 py-3">Memory and identity</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">The reverse structure mirrors the hero's memory loss</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Fight Club</td>
            <td class="px-4 py-3">David Fincher</td>
            <td class="px-4 py-3">Split identity</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">An unreliable narrator turns the story inside out</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Black Swan</td>
            <td class="px-4 py-3">Darren Aronofsky</td>
            <td class="px-4 py-3">Obsession and perfectionism</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Psychological horror grows out of artistic pressure</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">The Machinist</td>
            <td class="px-4 py-3">Brad Anderson</td>
            <td class="px-4 py-3">Guilt and insomnia</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">The hero's physical decline reflects his mental state</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">The Shutter Island Legacy</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">More than a decade on, <strong>Shutter Island</strong> is still one of the most discussed psychological thrillers of its era. Its closing question, about whether it is worse to live as a monster or die as a good man, captures the moral weight that the best films in this genre carry.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The titles here run from the paranoid game of <em>The Game</em> to the strange science fiction of <em>Annihilation</em> and the social horror of <em>Get Out</em>. Each keeps you off balance in its own way.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/6/shutter-island-similar-movies.webp"
        alt="Movies like Shutter Island: the best psychological thrillers - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Movies like Shutter Island: psychological thrillers that stay with you</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The best <strong>movies like Shutter Island</strong> reward careful viewing and leave something to debate afterward. Start with <em>Memento</em> or <em>Black Swan</em> if you want the closest match, or <em>The Truman Show</em> for a lighter take on the same fear of an unreal world.</p>
    </div>
  `,

  // CHECK: Unsane has id 460885 here but 467660 in the Weapons list. Only one can be right.
  movies: [
    { id: 11324, type: `movie`, note: `<span class="text-white font-medium">Shutter Island (2010)</span> — DiCaprio plays a U.S. Marshal investigating a psychiatric hospital in Martin Scorsese's thriller with a famous twist.` },
    { id: 77, type: `movie`, note: `<span class="text-white font-medium">Memento (2000)</span> — A man with short-term memory loss hunts his wife's killer in Christopher Nolan's reverse-chronology puzzle.` },
    { id: 550, type: `movie`, note: `<span class="text-white font-medium">Fight Club (1999)</span> — An insomniac office worker and a charismatic stranger start an underground fight club, in a story about identity with a major twist.` },
    { id: 4553, type: `movie`, note: `<span class="text-white font-medium">The Machinist (2004)</span> — A factory worker who has not slept in a year slides into paranoia and guilt.` },
    { id: 670, type: `movie`, note: `<span class="text-white font-medium">Oldboy (2003)</span> — A man imprisoned for 15 years without explanation seeks revenge and learns a shocking truth.` },
    { id: 44214, type: `movie`, note: `<span class="text-white font-medium">Black Swan (2010)</span> — A ballerina's drive for perfection tips into obsession and a breakdown of her sense of self.` },
    { id: 300668, type: `movie`, note: `<span class="text-white font-medium">Annihilation (2018)</span> — A biologist enters a quarantined zone where nature and reality are warped in strange, unsettling ways.` },
    { id: 1359, type: `movie`, note: `<span class="text-white font-medium">American Psycho (2000)</span> — A polished Wall Street executive leads a double life, and his grip on reality becomes uncertain.` },
    { id: 2640, type: `movie`, note: `<span class="text-white font-medium">The Game (1997)</span> — A wealthy banker is drawn into an elaborate game where he cannot tell what is real.` },
    { id: 10775, type: `movie`, note: `<span class="text-white font-medium">Identity (2003)</span> — Strangers stranded at a remote motel start dying one by one, leading to a twist about what is really happening.` },
    { id: 460885, type: `movie`, note: `<span class="text-white font-medium">Unsane (2018)</span> — A woman is committed to a psychiatric facility against her will, and reality and paranoia blur. Shot on an iPhone.` },
    { id: 570670, type: `movie`, note: `<span class="text-white font-medium">The Invisible Man (2020)</span> — A woman escapes an abusive partner, then becomes convinced she is being stalked by someone no one else can see.` },
    { id: 22894, type: `movie`, note: `<span class="text-white font-medium">Orphan (2009)</span> — A couple adopts a young girl whose past and true identity hold disturbing secrets.` },
    { id: 37165, type: `movie`, note: `<span class="text-white font-medium">The Truman Show (1998)</span> — A man gradually realizes that his entire life is a constructed TV show.` },
    { id: 419430, type: `movie`, note: `<span class="text-white font-medium">Get Out (2017)</span> — A young Black man visits his girlfriend's family and uncovers a disturbing secret beneath their polite surface.` },
    { id: 27205, type: `movie`, note: `<span class="text-white font-medium">Inception (2010)</span> — A thief who steals secrets from dreams takes on a job that tests his own grip on reality.` },
    { id: 745, type: `movie`, note: `<span class="text-white font-medium">The Sixth Sense (1999)</span> — A child psychologist works with a boy who sees dead people, building to one of cinema's best-known twists.` },
    { id: 3021, type: `movie`, note: `<span class="text-white font-medium">1408 (2007)</span> — A skeptical writer checks into a haunted hotel room and faces escalating psychological terror.` },
    { id: 458723, type: `movie`, note: `<span class="text-white font-medium">Us (2019)</span> — A family on vacation is attacked by menacing doubles of themselves in Jordan Peele's layered horror film.` },
    { id: 26466, type: `movie`, note: `<span class="text-white font-medium">Triangle (2009)</span> — A boating trip turns into a disorienting time loop where events keep resetting.` },
    { id: 340837, type: `movie`, note: `<span class="text-white font-medium">A Cure for Wellness (2017)</span> — A young executive investigates a mysterious wellness center in the Swiss Alps and finds something is deeply wrong.` },
    { id: 426, type: `movie`, note: `<span class="text-white font-medium">Vertigo (1958)</span> — Alfred Hitchcock's classic about a detective who becomes obsessed with a woman, a story of identity and illusion.` }
  ]
},

{
  id: "7",
  slug: "movies-like-dune",
  title: "20 Movies Like Dune: Epic Sci-Fi to Watch Next",
  metaTitle: "20 Movies Like Dune: Best Epic Sci-Fi to Watch Next",
  metaDescription: "Looking for movies like Dune? These 20 sci-fi films, from Blade Runner 2049 and Interstellar to Mad Max: Fury Road, offer epic worlds, big ideas and spectacle.",
  keywords: [
    "movies like Dune",
    "films like Dune",
    "Dune similar movies",
    "epic sci-fi movies",
    "space opera films",
    "best science fiction movies",
    "Dune Part Two",
    "Dune Part Three",
    "where to watch Dune"
  ],
  coverImage: "/img/lists/7/movies-like-dune.webp",
  shortDescription: "A guide to 20 movies like Dune: epic science-fiction films with big worlds, political intrigue and stunning visuals.",
  seoTitle: "Movies Like Dune: 20 Epic Sci-Fi Films to Watch Next",
  seoDescription: "Looking for movies like Dune? These 20 sci-fi films, from Blade Runner 2049 and Interstellar to Mad Max: Fury Road, offer epic worlds, big ideas and spectacle.",
  focusKeyword: "movies like dune",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">If you are searching for <strong>movies like Dune</strong>, you are probably looking for science fiction on the same scale: huge landscapes, political scheming and a hero caught in forces larger than himself. Denis Villeneuve's <em>Dune</em> (2021) and <em>Dune: Part Two</em> (2024) adapt Frank Herbert's 1965 novel with striking visuals and a serious tone, and they set a high bar. This list gathers 20 films that deliver some of the same qualities.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Makes Dune Work</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The story follows Paul Atreides (Timothée Chalamet), heir of House Atreides, whose family takes control of the desert planet Arrakis, the only source of the valuable spice melange. After a betrayal, Paul and his mother flee into the desert and meet the Fremen. The scale of the design, the sound and Hans Zimmer's score make it feel immersive. <strong>Dune</strong> grossed more than $400 million worldwide and won six Academy Awards.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>Dune cast</strong> is large: Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya, Josh Brolin, Jason Momoa, Javier Bardem, Stellan Skarsgård and Dave Bautista, with Austin Butler, Florence Pugh and Christopher Walken joining for the sequel. Streaming rights shift often, so use a service like JustWatch to check where to watch <strong>Dune</strong> in your region.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">What Is Dune About?</h3>
      <p class="text-sm text-gray-400">In the far future, noble families rule planets for an emperor. House Atreides is given Arrakis, a harsh desert world that produces the spice needed for interstellar travel. The rival House Harkonnen, with the emperor's secret help, destroys the Atreides, and Paul and his mother Lady Jessica escape to the deep desert. There they join the native Fremen, and Paul begins to see himself in an old prophecy that may make him the figure known as the Kwisatz Haderach.</p>
    </div>

    <p class="text-gray-400 mb-6 leading-relaxed"><strong>Dune: Part Two</strong> continues the story as Paul works with the Fremen against the Harkonnens. Released in March 2024, it grossed more than $700 million worldwide and won Academy Awards for Best Sound and Best Visual Effects. Fans waiting for <strong>Dune: Part Three</strong>, an adaptation of Frank Herbert's <em>Dune Messiah</em>, can expect it in theaters on December 18, 2026, according to current release plans.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What These Films Have in Common</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>movies like Dune</strong> on this list tend to build full worlds with their own politics, history and rules, then trust the audience to keep up. The best of them treat science fiction as a way to think about power, religion, nature and technology, not just as spectacle.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">Villeneuve gives <strong>Dune</strong> a sense of vast scale through its deserts, giant sandworms and detailed costumes. The films here work on that scale in different ways, from the philosophical to the action-driven.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Why These Films Resonate</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Good space opera and epic science fiction deal in lasting themes: the pull of destiny, the cost of power, and the conflict between tradition and change. Christopher Nolan's <em>Interstellar</em> uses wormhole travel to explore love and time. Ridley Scott's <em>Alien</em> and Villeneuve's <em>Blade Runner 2049</em> ask what identity and humanity mean. George Miller's <em>Mad Max: Fury Road</em> turns a desert into a stage for survival and redemption.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Director</th>
            <th class="px-4 py-3 text-left">Core Theme</th>
            <th class="px-4 py-3 text-left">Why It Resonates</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Blade Runner 2049</td>
            <td class="px-4 py-3">Denis Villeneuve</td>
            <td class="px-4 py-3">Identity and humanity</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Striking visuals support a story about what makes us human</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Interstellar</td>
            <td class="px-4 py-3">Christopher Nolan</td>
            <td class="px-4 py-3">Love and time</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">A cosmic journey rooted in family emotion</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Mad Max: Fury Road</td>
            <td class="px-4 py-3">George Miller</td>
            <td class="px-4 py-3">Survival and redemption</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">A desert wasteland becomes a nonstop action canvas</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">Star Wars: A New Hope</td>
            <td class="px-4 py-3">George Lucas</td>
            <td class="px-4 py-3">Destiny and rebellion</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">The film that defined modern space opera</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">The Dune Legacy</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">More than half a century after Frank Herbert's novel, <strong>Dune</strong> continues to shape science fiction. Its themes of politics, religion and ecology still feel relevant, and images like the sandworms, the stillsuits and the spice are widely recognized.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The choices here range from the moody future of <em>Blade Runner 2049</em> to the survival story of <em>The Martian</em> and the adventure of <em>Star Wars</em>. What they share is a commitment to taking the audience somewhere large, dangerous and memorable.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/7/movies-like-dune-epic-sci-fi.webp"
        alt="Movies like Dune: the best epic science-fiction films - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Movies like Dune: epic sci-fi that takes you to other worlds</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The best <strong>movies like Dune</strong> offer big worlds and big ideas. Start with <em>Blade Runner 2049</em> for the closest match in tone and visuals, <em>Interstellar</em> for an emotional space epic, or <em>Mad Max: Fury Road</em> if you want the desert action.</p>
    </div>
  `,

  movies: [
    { id: 438631, type: `movie`, note: `<span class="text-white font-medium">Dune (2021)</span> — Timothée Chalamet plays Paul Atreides in Denis Villeneuve's adaptation of Frank Herbert's novel, a visually impressive story of political intrigue on a desert planet.` },
    { id: 693134, type: `movie`, note: `<span class="text-white font-medium">Dune: Part Two (2024)</span> — Paul joins the Fremen and fights the Harkonnens in this larger and more action-heavy sequel.` },
    { id: 335984, type: `movie`, note: `<span class="text-white font-medium">Blade Runner 2049 (2017)</span> — Villeneuve's neo-noir sequel explores identity and humanity in a visually rich dystopian future.` },
    { id: 157336, type: `movie`, note: `<span class="text-white font-medium">Interstellar (2014)</span> — Christopher Nolan's space epic sends astronauts through a wormhole to find a new home for humanity, with a strong emotional core.` },
    { id: 76341, type: `movie`, note: `<span class="text-white font-medium">Mad Max: Fury Road (2015)</span> — George Miller's post-apocalyptic desert chase is almost nonstop action about survival and redemption.` },
    { id: 11, type: `movie`, note: `<span class="text-white font-medium">Star Wars: A New Hope (1977)</span> — The film that defined modern space opera, following Luke Skywalker from farm boy to rebel hero.` },
    { id: 348, type: `movie`, note: `<span class="text-white font-medium">Alien (1979)</span> — Ridley Scott's claustrophobic horror in space pairs H.R. Giger's creature design with steady tension.` },
    { id: 74, type: `movie`, note: `<span class="text-white font-medium">War of the Worlds (2005)</span> — Steven Spielberg updates H.G. Wells' alien-invasion story with modern effects and a family at its center.` },
    { id: 62, type: `movie`, note: `<span class="text-white font-medium">2001: A Space Odyssey (1968)</span> — Stanley Kubrick's landmark film about human evolution and cosmic mystery.` },
    { id: 118340, type: `movie`, note: `<span class="text-white font-medium">Guardians of the Galaxy (2014)</span> — James Gunn's space adventure mixes cosmic stakes with humor and heart.` },
    { id: 27205, type: `movie`, note: `<span class="text-white font-medium">Inception (2010)</span> — Nolan's layered dream-heist thriller bends reality and perception in inventive ways.` },
    { id: 19995, type: `movie`, note: `<span class="text-white font-medium">Avatar (2009)</span> — James Cameron's story of the alien world Pandora set a new standard for immersive visual effects.` },
    { id: 286217, type: `movie`, note: `<span class="text-white font-medium">The Martian (2015)</span> — Ridley Scott's survival story of an astronaut stranded on Mars celebrates scientific problem-solving.` },
    { id: 152601, type: `movie`, note: `<span class="text-white font-medium">Her (2013)</span> — Spike Jonze's intimate sci-fi film about love and consciousness in a near future with advanced artificial intelligence.` },
    { id: 264660, type: `movie`, note: `<span class="text-white font-medium">Ex Machina (2014)</span> — Alex Garland's tense thriller about artificial intelligence, manipulation and what it means to be alive.` },
    { id: 198184, type: `movie`, note: `<span class="text-white font-medium">Chappie (2015)</span> — Neill Blomkamp's story of a sentient robot raised by criminals in a violent near future.` },
    { id: 603, type: `movie`, note: `<span class="text-white font-medium">The Matrix (1999)</span> — The Wachowskis' action epic questions the nature of reality with groundbreaking visuals.` },
    { id: 1271, type: `movie`, note: `<span class="text-white font-medium">300 (2006)</span> — Zack Snyder's stylized retelling of the Battle of Thermopylae delivers mythic action in a striking visual style.` },
    { id: 49026, type: `movie`, note: `<span class="text-white font-medium">The Dark Knight Rises (2012)</span> — Nolan concludes his Batman trilogy with a story of social collapse and redemption.` },
    { id: 10195, type: `movie`, note: `<span class="text-white font-medium">Thor (2011)</span> — Kenneth Branagh introduces the God of Thunder, blending cosmic mythology with a family drama.` },
    { id: 1891, type: `movie`, note: `<span class="text-white font-medium">The Empire Strikes Back (1980)</span> — The darker, widely praised second Star Wars film deepens the saga with revelations that changed cinema.` }
  ]
},

{
  id: "8",
  slug: "movies-like-weapons",
  title: "19 Movies Like Weapons: Best Elevated Horror to Watch Next",
  metaTitle: "19 Movies Like Weapons: Best Elevated Horror Picks",
  metaDescription: "Looking for movies like Weapons? These 19 elevated horror films, from Hereditary and The Babadook to Midsommar, share its grief, mystery and small-town dread.",
  keywords: [
    "movies like Weapons",
    "films like Weapons",
    "Weapons similar movies",
    "elevated horror movies",
    "supernatural mystery horror",
    "small town horror films",
    "Weapons movie",
    "is Weapons based on a true story",
    "Zach Cregger Weapons"
  ],
  coverImage: "/img/lists/8/movies-like-weapons.webp",
  shortDescription: "A guide to 19 movies like Weapons: elevated horror films with grief, supernatural mystery and the kind of dread that lingers after the credits.",
  seoTitle: "Movies Like Weapons: 19 Elevated Horror Films to Watch Next",
  seoDescription: "Looking for movies like Weapons? These 19 elevated horror films, from Hereditary and The Babadook to Midsommar, share its grief, mystery and small-town dread.",
  focusKeyword: "movies like weapons",

  introduction: `
    <p class="text-gray-400 mb-6 leading-relaxed">If you are searching for <strong>movies like Weapons</strong>, you likely enjoyed how Zach Cregger's 2025 horror film mixed a creepy mystery, black humor and a story told from several viewpoints. It follows his debut <em>Barbarian</em> and builds a story of small-town paranoia and grief that keeps surprising you until its final chapters. This list gathers 19 films with a similar mix of dread, mystery and emotional weight.</p>
  `,

  conclusion: `
    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What Makes Weapons Work</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The film opens in Maybrook, Pennsylvania, where at exactly 2:17 a.m. seventeen children from the same third-grade class get out of bed, run out of their homes and disappear into the night. Only one boy, Alex Lilly, stays behind. The story then moves between teacher Justine Gandy, grieving father Archer Graff, police officer Paul Morgan and others, each adding a piece. It is both frightening and darkly funny.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>Weapons cast</strong> is a major strength. Julia Garner plays Justine, Josh Brolin plays Archer, Alden Ehrenreich plays Paul and Austin Abrams plays James, with Benedict Wong, Cary Christopher and Toby Huss in support. Amy Madigan, as the sinister Aunt Gladys, won the Academy Award for Best Supporting Actress for the role at the 2026 ceremony. The film grossed roughly $270 million worldwide.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">What Is Weapons About? (Spoilers)</h3>
      <p class="text-sm text-gray-400">After the children vanish, Justine is the target of suspicion and public anger because only one child from her class is left. The film unfolds in connected chapters, following Archer's search, Paul's investigation and James, a young thief who stumbles into the mystery. The trail leads back to Alex's reclusive great-aunt Gladys, who uses dark rituals to keep herself alive. A final chapter reframes what came before.</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Where to Watch Weapons</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Streaming availability changes regularly and differs by country. Use a service like JustWatch to see whether <strong>Weapons</strong> is on a subscription platform or available to rent or buy in your region. Talk of a prequel built around Aunt Gladys has followed the film's success, so check official announcements for any release details.</p>

    <div class="bg-[#1F2937] p-6 rounded-lg my-10">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">Is Weapons Based on a True Story?</h3>
      <p class="text-sm text-gray-400">No. <strong>Weapons is not based on a real case.</strong> There is no town called Maybrook with a witch named Gladys, and no real 2:17 a.m. disappearance of schoolchildren. The film opens with a child narrator who says it is a true story, but that is a storytelling device.</p>
      <p class="text-sm text-gray-400 mt-3">The emotions behind it are real, though. Cregger has said the idea began after the 2021 death of his friend and collaborator Trevor Moore, and grief runs through the film. Many viewers have also read the story of missing children and a community looking for someone to blame as a comment on school shootings and collective trauma.</p>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">What These Films Have in Common</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The <strong>movies like Weapons</strong> here share a similar approach. They put character and emotion ahead of jump scares, they leave some mysteries open, and they let the horror grow out of grief, guilt or fear. They invite discussion afterward instead of explaining everything.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">Cregger structured <strong>Weapons</strong> in chapters, a format that recalls films like <em>Pulp Fiction</em> and <em>Magnolia</em>. Many titles below use different structures, but each aims for the same feeling of dread mixed with sadness.</p>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">Why These Films Resonate</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">The strongest horror turns real fears into stories: losing a child, discovering secrets in your own community, or watching grief change people. Ari Aster's <em>Hereditary</em> uses a family tragedy to explore generational trauma. Jennifer Kent's <em>The Babadook</em> shows grief as a monster haunting a widow and her son. Scott Derrickson's <em>The Black Phone</em> is a child-abduction story that also deals with resilience.</p>

    <div class="overflow-x-auto bg-[#1F2937] rounded-lg my-8">
      <table class="w-full text-sm text-gray-400">
        <thead class="text-xs text-white uppercase bg-[#0F0F1A]">
          <tr>
            <th class="px-4 py-3 text-left">Film</th>
            <th class="px-4 py-3 text-left">Director</th>
            <th class="px-4 py-3 text-left">Core Theme</th>
            <th class="px-4 py-3 text-left">Why It Resonates</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-[#2A2A3A]">
          <tr>
            <td class="px-4 py-3 text-white font-medium">Hereditary</td>
            <td class="px-4 py-3">Ari Aster</td>
            <td class="px-4 py-3">Grief and generational trauma</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">A family tragedy turns into an occult nightmare</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">The Babadook</td>
            <td class="px-4 py-3">Jennifer Kent</td>
            <td class="px-4 py-3">Grief as a monster</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">Depression and loss literally haunt a mother and son</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">The Black Phone</td>
            <td class="px-4 py-3">Scott Derrickson</td>
            <td class="px-4 py-3">Child abduction and resilience</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">A supernatural thriller about help from beyond</td>
          </tr>
          <tr>
            <td class="px-4 py-3 text-white font-medium">It Follows</td>
            <td class="px-4 py-3">David Robert Mitchell</td>
            <td class="px-4 py-3">Dread and paranoia</td>
            <td class="px-4 py-3 text-[#E50914] font-bold">A relentless pursuit creates lasting tension</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 class="text-2xl font-bold text-white mt-8 mb-4 tracking-tight border-l-4 border-[#E50914] pl-4">The Weapons Legacy</h2>

    <p class="text-gray-400 mb-6 leading-relaxed">Since its release, <strong>Weapons</strong> has had a clear cultural impact. Its images, such as the children running into the night, the 2:17 a.m. timestamp and Gladys's costume, became instantly recognizable, and Madigan's Oscar win showed that the Academy can recognize horror performances.</p>

    <p class="text-gray-400 mb-6 leading-relaxed">The films listed here range from the folk horror of <em>The Witch</em> to the paranoia of <em>It Follows</em> and the strange science fiction of <em>Annihilation</em>. Each keeps the audience off balance in a different way.</p>

    <!-- Image Section -->
    <div class="my-10 relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#1F2937]">
      <img
        src="/img/lists/8/movies-like-weapons-horror.webp"
        alt="Movies like Weapons: the best elevated horror films - Cineby"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <p class="text-white text-xs sm:text-sm font-mono tracking-wider p-4 opacity-80">Movies like Weapons: elevated horror that stays with you</p>
      </div>
    </div>

    <div class="bg-[#0F0F1A] border border-[#1F2937] p-6 rounded-lg my-8">
      <h3 class="text-white font-bold mb-2 uppercase tracking-wide">The Short Version</h3>
      <p class="text-sm text-gray-400">The best <strong>movies like Weapons</strong> mix real emotion with real fear. Start with <em>Hereditary</em> or <em>The Babadook</em> for grief-driven horror, <em>The Black Phone</em> for a more accessible thriller, or <em>Midsommar</em> if you want horror in broad daylight.</p>
    </div>
  `,

  // CHECK: Unsane has id 467660 here but 460885 in the Shutter Island list. Only one can be right.
  movies: [
    { id: 1078605, type: `movie`, note: `<span class="text-white font-medium">Weapons (2025)</span> — Zach Cregger's supernatural horror film about seventeen children who vanish from a small town, told through interconnected chapters.` },
    { id: 493922, type: `movie`, note: `<span class="text-white font-medium">Hereditary (2018)</span> — Ari Aster's family tragedy turns into occult horror, anchored by Toni Collette's performance as a grieving mother.` },
    { id: 242224, type: `movie`, note: `<span class="text-white font-medium">The Babadook (2014)</span> — Jennifer Kent's horror film depicts grief as a monster that haunts a widowed mother and her troubled son.` },
    { id: 756999, type: `movie`, note: `<span class="text-white font-medium">The Black Phone (2021)</span> — Scott Derrickson's thriller about a kidnapped boy who receives calls from the dead on a disconnected phone.` },
    { id: 270303, type: `movie`, note: `<span class="text-white font-medium">It Follows (2014)</span> — David Robert Mitchell's film about a supernatural entity that pursues its victims at a walking pace and never stops.` },
    { id: 530385, type: `movie`, note: `<span class="text-white font-medium">Midsommar (2019)</span> — Ari Aster's daylight horror film follows a grieving woman on a trip to a Swedish commune with unsettling rituals.` },
    { id: 310131, type: `movie`, note: `<span class="text-white font-medium">The Witch (2015)</span> — Robert Eggers' carefully crafted story of a Puritan family in 1630s New England pulled apart by paranoia and dark forces.` },
    { id: 300668, type: `movie`, note: `<span class="text-white font-medium">Annihilation (2018)</span> — Alex Garland's science-fiction horror follows scientists into a zone where nature mutates in beautiful and terrifying ways.` },
    { id: 419430, type: `movie`, note: `<span class="text-white font-medium">Get Out (2017)</span> — Jordan Peele's social thriller about a young Black man who discovers troubling secrets at his girlfriend's family estate.` },
    { id: 503919, type: `movie`, note: `<span class="text-white font-medium">The Lighthouse (2019)</span> — Robert Eggers' black-and-white story traps two men in isolation and growing madness on a remote island.` },
    { id: 399057, type: `movie`, note: `<span class="text-white font-medium">The Killing of a Sacred Deer (2017)</span> — Yorgos Lanthimos' unsettling film about a surgeon whose family suffers a strange punishment for a past mistake.` },
    { id: 97370, type: `movie`, note: `<span class="text-white font-medium">Under the Skin (2013)</span> — Jonathan Glazer's hypnotic science-fiction film about an alien who preys on men in Scotland.` },
    { id: 639933, type: `movie`, note: `<span class="text-white font-medium">The Northman (2022)</span> — Robert Eggers' Viking revenge epic blends brutal history with mythic and supernatural elements.` },
    { id: 9708, type: `movie`, note: `<span class="text-white font-medium">The Wicker Man (1973)</span> — A classic of folk horror in which a police sergeant investigates a missing girl on a remote Scottish island with pagan secrets.` },
    { id: 521934, type: `movie`, note: `<span class="text-white font-medium">The Witch in the Window (2018)</span> — Andy Mitton's quiet ghost story about a father and son who renovate a house with a dark presence.` },
    // CHECK: see the note above about the two different Unsane ids.
    { id: 467660, type: `movie`, note: `<span class="text-white font-medium">Unsane (2018)</span> — Steven Soderbergh's thriller, shot on an iPhone, traps a woman in a psychiatric facility where reality and paranoia blur.` },
    { id: 430231, type: `movie`, note: `<span class="text-white font-medium">The Endless (2017)</span> — Justin Benson and Aaron Moorhead's indie horror about two brothers who return to the UFO cult they once escaped.` },
    { id: 418078, type: `movie`, note: `<span class="text-white font-medium">It Comes at Night (2017)</span> — Trey Edward Shults' post-apocalyptic thriller traps two families in a house as trust collapses.` },
    { id: 532671, type: `movie`, note: `<span class="text-white font-medium">The Prodigy (2019)</span> — A mother begins to fear that her young son is under the influence of a dark and violent force.` },
    { id: 764, type: `movie`, note: `<span class="text-white font-medium">The Evil Dead (1981)</span> — Sam Raimi's low-budget classic traps five friends in a cabin where an ancient evil is released by a cursed book.` }
  ]
},

];