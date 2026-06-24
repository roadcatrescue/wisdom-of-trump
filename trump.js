// Trump Oracle — Generator Engine v2
// Satirical random speech generator — word banks seeded from 1.4M char transcript corpus
// (alexmill/trump_transcripts, 74 speeches, 292K words, CC/public record)

// ── WORD BANKS ──────────────────────────────────────────────────────────────

const enemies = [
  // From speeches
  "Sleepy Joe", "Crooked Hillary", "Shifty Schiff", "Crazy Nancy",
  "Fake News CNN", "the Radical Left", "the Deep State",
  "the Lamestream Media", "Soros", "the Democrats",
  "the Failing New York Times", "Crooked Joe", "Low-Energy Jeb",
  "Little Marco", "the Globalists", "the Communist Left",
  "the Mainstream Media", "the Radical Democrats", "the Fake News",
  "the Do-Nothing Democrats", "Pocahontas", "Crazy Maxine",
  "the Squad", "the Rigged System", "the Corrupt Media",
  // From 54,000 tweets
  "Crooked Hillary Clinton", "Sleepy Joe Biden", "Crazy Bernie Sanders",
  "Crazy Nancy Pelosi", "Goofy Elizabeth Warren", "Lyin' Ted Cruz",
  "Corrupt Joe Biden", "Corrupt Adam Schiff", "Crazy Bernie",
  "the Fake News Media", "Dummy Bill Maher", "the Failing Washington Post",
  "the Disgusting New York Times", "the Degenerate Media",
  "the Do Nothing Democrats", "the Radical Left Dems",
  "the Lamestream Fake News", "James Comey", "Crooked Obama"
];

const superlatives = [
  "tremendous", "incredible", "beautiful", "perfect", "fantastic",
  "the greatest", "like you've never seen before", "absolutely amazing",
  "the best, possibly ever", "very special", "second to none",
  "better than anyone thought possible", "very, very good",
  "the most beautiful you've ever seen", "unbelievable",
  "the biggest ever", "historic", "total perfection"
];

const disasters = [
  "a total disaster", "a complete catastrophe", "an absolute mess",
  "a horrible, horrible thing", "a disgrace to this country",
  "very, very bad — the worst", "a total scam", "a hoax",
  "a rigged witch hunt", "a con job", "a failing disaster",
  "frankly, a joke", "a very sad thing, very sad",
  "a disaster, an absolute disaster", "a total failure",
  "the worst I've ever seen", "unbelievable — and not good unbelievable"
];

const topics = [
  "the economy", "trade deals", "the military", "the border",
  "the wall", "inflation", "crime", "China", "the fake news",
  "elections", "energy", "tariffs", "the stock market",
  "the Second Amendment", "the deep state", "golf",
  "nuclear weapons", "the ratings", "crowd sizes",
  "Obamacare", "the national debt", "taxes", "the police",
  "our great country", "immigration", "education", "the media",
  "foreign policy", "law and order", "the military generals",
  // From tweet corpus
  "the witch hunt", "collusion", "the impeachment hoax",
  "the radical left", "illegal immigration", "voter fraud",
  "the mainstream media", "the Second Amendment", "Antifa",
  "the border wall", "Obamagate", "the rigged election",
  "election fraud", "the stolen election", "the fake dossier",
  "defunding the police", "sanctuary cities", "the deep state",
  "drain the swamp", "currency manipulation"
];

const nouns = [
  "brain", "people", "lawyers", "generals", "deals", "numbers",
  "words", "memory", "genes", "instincts", "ideas", "ratings",
  "properties", "friends in high places", "electoral maps",
  "temperament", "stamina", "buildings", "business sense",
  "negotiators", "tax cuts", "crowd sizes"
];

const adjectives = [
  "strong", "smart", "beautiful", "tough", "nasty",
  "weak", "pathetic", "sad", "corrupt", "disgraceful",
  "very, very powerful", "low-IQ", "failing", "sleepy",
  "crooked", "radical", "horrible", "incompetent",
  "terrible", "the best", "vicious"
];

const groups = [
  "the American people", "our great country", "hardworking Americans",
  "the farmers", "the truckers", "the miners", "the silent majority",
  "real Americans", "the forgotten men and women", "the patriots",
  "the great people of Michigan", "our military heroes",
  "the great people of Ohio", "law enforcement",
  "the middle class", "the workers", "great Americans everywhere"
];

const countries = [
  "China", "Mexico", "Iran", "Russia", "North Korea",
  "Germany", "Japan", "Saudi Arabia", "the European Union", "Canada"
];

const stats = [
  "97 percent", "96 percent", "92 percent", "more than 50 percent",
  "almost a hundred percent", "close to 80 percent"
];

const bigNumbers = [
  "$20 trillion", "$6 trillion", "$2.5 trillion", "$1.3 trillion",
  "billions and billions", "millions and millions",
  "hundreds of millions", "many, many billions",
  "more than $500 billion a year", "tremendous — truly tremendous — amounts"
];

const twoWeeks = [
  // Plausible-ish political promises (always two weeks away)
  "the most beautiful healthcare plan you've ever seen",
  "a full, complete infrastructure plan — roads, bridges, everything",
  "the peace deal in the Middle East, and it's going to be incredible",
  "overwhelming evidence of massive election fraud",
  "indictments — big ones, very big",
  "the declassified documents that will change everything",
  "a replacement for Obamacare — total perfection",
  "the full audit results — and they are stunning",
  "a trade deal with China better than anything you've ever seen",
  "the cure — we're very close, frankly, very close",
  "the military's plan to defeat our enemies completely",
  "my official announcement — it's going to be historic",
  "the report — and let me tell you, it is incredible",
  "the border wall completion update — beautiful numbers",
  "a tax plan that will make everyone in this room very rich",
  "proof of what they did — and people are going to be shocked",

  // Unhinged conspiracy-grade promises
  "proof that top Democrats are actually pizza-eating aliens — we have the receipts",
  "conclusive evidence that Epstein never existed — total fabrication, very interesting",
  "the real birth certificate — not just Obama's, all of them, many of them",
  "footage of Hillary Clinton shape-shifting — very disturbing, not for children",
  "proof that the moon landing was faked by Democrats to distract from the border",
  "documents showing Fauci personally invented every disease since 1987",
  "the list of Deep State lizard people — it's longer than you think, much longer",
  "evidence that windmills are actually Chinese spy antennas — been saying this for years",
  "the full video of Obama ordering the hurricane — they know how to do it now",
  "proof that George Soros controls the weather — the clouds, very specifically the clouds",
  "documents showing the Democrats have been putting something in the salad dressing",
  "proof that the fake news media is run by actual robots — not metaphor, literal robots",
  "evidence that COVID was developed by a Venezuelan microwave — I've seen the plans",
  "the declassified files proving JFK was shot by a very radical left wind",
  "proof that the 2020 ballots were printed in a basement in Beijing by elves",
  "documentation showing that Sleepy Joe is actually three Democrats in a trench coat",
];

const sirNames = [
  "one of the top generals — one of the best",
  "a very tough police officer, big strong guy",
  "a farmer, great guy, tough man",
  "this very successful businessman, fantastic",
  "a coal miner — strong as an ox",
  "a veteran, great great person",
  "a border patrol agent — incredible, just incredible"
];

// ── TEMPLATE LIBRARY ────────────────────────────────────────────────────────

const templates = [

  // ── Self-aggrandizement ──
  "I have the best {noun}. {superlative}. Everyone says so, and they're right. Believe me.",
  "Nobody — and I mean nobody — knows more about {topic} than me. Not even close.",
  "I was the greatest at {topic}. The greatest ever. Historians will say this.",
  "I actually think I have the best {noun}. They say it all the time. The biggest people say it.",
  "They said it couldn't be done. I did it anyway. {superlative}. That's just what I do.",
  "I went to the best schools. I have the best {noun}. It's just genetics, frankly.",
  "I could walk into any room in the world — any room — and they all know who I am.",
  "Nobody has more respect for {group} than I do. Nobody. Nobody even comes close.",
  "I have a tremendous income. Tremendous. Far more than people know.",
  "To do this job, you need tremendous stamina. I have that stamina. Nobody has that stamina.",
  "My {noun} is {superlative}. People tell me all the time. Big, important people.",
  "They say I'm a very stable genius. I actually agree with that, I have to tell you.",
  "I built a company that's worth many, many billions of dollars. People don't talk about that.",

  // ── Sir Stories ──
  "I was with {sirName} the other day — big guy, tears in his eyes — and he said to me, he said, 'Sir, nobody has ever done what you've done for {group}.' Big, strong man. Tears. I said, 'Don't cry. We're going to win.'",
  "This {sirName} came up to me, couldn't believe it, he said, 'Sir, I never thought I'd live to see someone fight for us like you do.' Said it right to my face. Unbelievable.",
  "I was at a rally — the biggest rally anyone's ever seen, by the way — and {sirName} walks up, barely holding it together, says, 'Sir, you're the only one who understands {topic}.' Very moving.",
  "You know what happened? {sirName} called me, great guy, tough, and he said, 'Sir, because of you, {topic} will never be the same.' Great call. Really great.",

  // ── Enemy attacks ──
  "{enemy} is {disaster}. Everyone knows it. Even the fake news knows it.",
  "What {enemy} did to this country — honestly, it's a shame. A total shame.",
  "I've been fighting {enemy} for years. Years! And I'm winning, believe me.",
  "The problem is {enemy}. That's the whole problem, right there. Very simple.",
  "{enemy} is so {adjective}. You wouldn't believe it. I see it firsthand.",
  "They say {enemy} is smart. They say that! I've never seen it. Not once. Never.",
  "{enemy} tried to destroy me. They tried very hard. And they failed. Very badly.",
  "Look at what {enemy} has done to {group}. It's a disgrace. It really is.",
  "{enemy} has terrible judgment. Just terrible. The worst judgment I've ever seen.",
  "Nobody's been tougher on {enemy} than me. Nobody. They hate me for it.",
  "You know what? {enemy} said it was 'impossible.' And then we did it anyway.",

  // ── Conspiracy ──
  "They don't want you to know this, but {enemy} is working against {group}. I see it.",
  "The deep state, {enemy}, the fake news — they're all working together. It's coordinated.",
  "{enemy} is trying to rig {topic}. I've seen the evidence. Many people have.",
  "There's something very wrong going on with {topic} and {enemy}. Very, very wrong.",
  "Everybody knows {enemy} cheated. Everybody. You know it, I know it, they know it.",
  "I have sources — very credible sources — who say {enemy} is {disaster}.",
  "The fake news will never tell you this, but {enemy} has been doing this for years. Years.",

  // ── Fake statistics ──
  "{stats} of people agree with me on {topic}. {stats}! You don't see that in the polls, because the polls are fake.",
  "We had the biggest numbers ever — bigger than anyone thought possible — on {topic}.",
  "Millions and millions of people — maybe hundreds of millions — support us on {topic}.",
  "The real polls, not the fake ones, show I'm up by forty, fifty points.",
  "We owe {bigNumbers} — {bigNumbers} — and we're just watching it happen.",
  "We've spent {bigNumbers} in the Middle East. We could have rebuilt our country twice.",
  "We're losing {bigNumbers} a year to {countries}. Billions and billions. It's a disgrace.",

  // ── Countries taking advantage ──
  "{countries} is taking {bigNumbers} out of our country every year. Every year! And we do nothing.",
  "{countries} is laughing at us. They've been laughing at us for years. Not anymore.",
  "We have {bigNumbers} in debt. And {countries} — they're just eating us alive. Eating us alive.",
  "We make horrible deals. With {countries}, with everybody. Horrible. I could fix them in 24 hours.",
  "{countries} devalues their currency — they're the best ever at it — and nobody in our government fights back.",

  // ── "Going to fix it" promises ──
  "I can fix {topic} in about twenty-four hours. Maybe less. I know exactly what to do.",
  "We're going to win on {topic} like you've never seen before. Like never before.",
  "We're going to bring back {topic}. We're going to make it {superlative}.",
  "I will fix {topic}. Fast. Very, very fast. Nobody else can do it. Only me.",
  "Under my plan, {topic} is going to be {superlative}. It's going to be a beautiful thing to watch.",
  "We are going to rebuild this country. Like never before. Like never, ever before.",
  "Jobs are fleeing this country. They're going to {countries}. I will stop it. Day one.",

  // ── Rambling tangents ──
  "You know, I was with {sirName} the other day — great guy, one of the best — and he said to me, 'Sir, what you know about {topic}—' frankly, they couldn't believe it. Couldn't believe it.",
  "People ask me about {topic} all the time. All the time. And I tell them the truth, because that's what I do. That's just who I am.",
  "I've been all over. I left {topic}, went to {topic}, flew back — a lot of people don't do that. They go home. I didn't.",
  "By the way — and nobody talks about this — {topic} is {superlative} now. Because of me. That's just a fact.",
  "And you know what? {enemy} said it was impossible. 'You can't do it,' they said. And then we did it. We did it very easily.",

  // ── Repetition patterns ──
  "It's bad. Very, very bad. The worst, maybe ever. People are saying that. Very smart people.",
  "I've done more — I really have — more than any president. Any of them. It's not even close.",
  "{enemy} is very {adjective}, very {adjective}. Just terrible. The worst.",
  "We're going to fix {topic}. We're going to fix it very fast. Very, very fast. Watch.",
  "It was perfect. A perfect situation. Perfect. No problems. Everybody said it was perfect.",
  "Obamacare is a disaster. A complete and total disaster. We will repeal it. We will replace it. It will be {superlative}.",
  "Our country is in deep trouble. We don't know what we're doing. We will know what we're doing very soon.",
  "They're leaving. They're all leaving. {countries}, {countries}, everyone's taking advantage. Not for much longer.",

  // ── Tweet-style (from 54,000 real posts) ──
  "{countries} is playing big currency manipulation games and pumping money into their system to beat us. We should MATCH them, and WIN!",
  "The world is laughing at us because of {enemy}. Not for much longer. Watch.",
  "{countries} continues to move militarily and economically. Our leadership does nothing. So sad!",
  "{enemy} said it was impossible. We did it anyway. Easily. As usual.",
  "James Comey is a proven LEAKER and LIAR. Almost everyone knew it. Finally the truth comes out!",
  "Despite what you have heard from {enemy}, the real numbers are incredible. The best ever. Believe me.",
  "The Corrupt Media refuses to cover this! They never will. That's why we go direct to the people.",
  "Just a continuation of the Witch Hunt! They've been doing it for years. YEARS. And failing.",
  "Our country is now in serious and unprecedented trouble. Like never before. I alone can fix it.",
  "The failing {enemy} made up another story. Totally false. I'm used to it — they're very dishonest.",
  "A sad day for America. The world is laughing at us. Our leadership is WEAK and totally ineffective.",
  "The Do Nothing Dems have gone Radical Left Crazy. They can't get anything done!",
  "Despite my tremendous success, they never give me credit. Never. The fake news is truly the enemy of the people.",
  "It would be really nice if {enemy} would report the facts for once. Just once. Probably won't happen.",
  "The Wall is going up very fast despite total Obstruction by {enemy} in Congress. Beautiful!",
  "{countries} has been laughing at us for years. They're not laughing anymore. Trust me.",
  "They said it couldn't be done. I said watch me. Now everyone agrees it's {superlative}.",
  "The degenerate {enemy} made up the whole story. Never happened. WITCH HUNT!",
  "Radical Islamic Terrorism must be stopped by whatever means necessary! Have to be tough!",
  "Such a great honor to be with {group} today. The love in the room was incredible. Tears. Big strong people with tears.",

  // ── Two Weeks™ promises ──
  "In about two weeks, we're going to be announcing {twoWeeks}. Two weeks. Watch.",
  "I'm going to be showing you {twoWeeks} in about two weeks. Big announcement. Huge.",
  "We're very close — two weeks, maybe less — to releasing {twoWeeks}. Very close.",
  "Two weeks. I've said this before. But this time — two weeks — {twoWeeks}. It's ready.",
  "I told my people: two weeks. We're releasing {twoWeeks} in two weeks. It's done. Almost.",
  "They've been asking about {twoWeeks} for years. Two weeks. Two weeks, you're going to see it.",
  "We're doing {twoWeeks} — and it's {superlative} — in about two weeks. Maybe less. Maybe sooner.",
  "In two weeks, the world will know about {twoWeeks}. They're not going to believe it. Nobody will.",
  "Two weeks. I keep saying two weeks. And people ask, 'When, sir?' Two weeks. Very, very soon.",
  "We have {twoWeeks} — fully ready, fully prepared — and in about two weeks we'll be unveiling it. Beautiful.",
  "I've been working on {twoWeeks} for a long time. A very long time. Two weeks, it all comes out. Everything.",
  "They say it'll never happen. They've been saying that for years. Two weeks. {twoWeeks}. Two weeks. Mark it down.",

  // ── Closing zingers ──
  "Our politicians are stupid. {enemy} is stupid. Frankly, many of them are very, very stupid. I'm not stupid.",
  "You know what that is? That's called {topic}. And we're going to win at it.",
  "Nobody can do that like me. Nobody. The generals, the best generals, they come to me. I do what they can't.",
  "I guarantee you — and you can mark my words, there's a lot of tape running — {enemy} will fail. I guarantee it.",

  // ── Extra bragging (91–96) ──
  "I got more votes than any Republican in history. More than Reagan. Far more than Bush. They don't want to talk about those numbers.",
  "I built the greatest economy in the history of the world. The greatest. And then they crashed it on purpose.",
  "My first term was, without question, the most successful term of any president. You can look it up. It's right there.",
  "I've been right about everything. China, the economy, the border. Everything. Ninety-nine percent. Maybe a hundred.",
  "World leaders call me directly. Not through staff — directly. And they say, 'Sir, we've never dealt with anyone like you.'",
  "I did more in four years than most presidents do in eight. The most. And they hated me for it. They still do.",

  // ── Election fraud (97–108) ──
  "The 2020 election was stolen. Rigged. Absolutely fraudulent. Millions and millions of fake ballots, all for them.",
  "Dead people voted in Pennsylvania. Thousands of them. You can check. Nobody checks, but you could. Very easily.",
  "They stopped counting at 11 o'clock at night. You know why? Because they needed to figure out how many ballots to manufacture. Simple. Very simple.",
  "Dominion Voting Systems changed votes in real time. It's been proven. Many, many people have proven it. The machines were rigged.",
  "I won Georgia. I won Pennsylvania. I won Michigan, Wisconsin, Arizona. All of them. The real numbers show it. Everyone knows it.",
  "We had 75 million votes — maybe more — and they still had to cheat. You can't beat those numbers honestly. You can't do it.",
  "The voting machines were not certified. Connected to the internet. Illegally flipping results in real time. I saw the data.",
  "Hundreds of thousands of illegal votes — at minimum — were counted in Detroit alone. Massive numbers. Nobody will look.",
  "The election was rigged by {enemy}. Coordinated. Organized. They even bragged about it in Time magazine. Time magazine!",
  "Ballot mules. Thousands of them. Caught on camera dropping hundreds of ballots into drop boxes. Illegal. All illegal.",
  "They cheated in 2020. They cheated in 2022. That's all they know how to do. Without cheating, they lose every time.",
  "The fake news will never cover the real election fraud because they're part of it. They're partners in the crime.",

  // ── Hillary & Biden blame (109–118) ──
  "Crooked Hillary paid for the fake dossier. She paid for it with campaign funds. And they went after me. Me! Unbelievable.",
  "Hillary deleted 33,000 emails. Thirty-three thousand! If I did that, electric chair. But Crooked Hillary? Nothing. Nothing at all.",
  "Biden destroyed the economy. Biden destroyed the border. Biden destroyed Afghanistan. Forty-seven years of nothing but failure.",
  "It all traces back to Hillary. The Russia hoax, the fake dossier, Comey, the whole witch hunt. Hillary Clinton started all of it.",
  "Biden took {bigNumbers} from {countries}. The laptop proved it. The laptop from hell. And the fake news buried it. Totally buried it.",
  "Hillary Clinton should be in prison right now. She knows what she did. The FBI knows. The DOJ knows. Nobody does anything. Sad.",
  "Obama was running the whole operation. Biden knew. Hillary knew. They all knew they were spying on my campaign. All of them.",
  "Biden never made a good deal in his life. Forty-seven years in Washington. Forty-seven years of failure. Not one good deal. Not one.",
  "Everything wrong with this country — the inflation, the crime, the open border — it all goes back to Biden. All of it. Biden.",
  "They blame me for things that Biden did, things Hillary did, things Obama did. And the fake news just lets them do it.",
];

// ── ENGINE ───────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fill(template) {
  const vars = {
    enemy: pick(enemies),
    superlative: pick(superlatives),
    disaster: pick(disasters),
    topic: pick(topics),
    noun: pick(nouns),
    adjective: pick(adjectives),
    group: pick(groups),
    countries: pick(countries),
    stats: pick(stats),
    bigNumbers: pick(bigNumbers),
    sirName: pick(sirNames),
    twoWeeks: pick(twoWeeks),
  };

  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] || `[${k}]`);
}

const closers = [
  "Believe me.",
  "That I can tell you.",
  "Sad!",
  "Total witch hunt.",
  "Very unfair. Very, very unfair.",
  "Frankly, it's disgraceful.",
  "Nobody's ever seen anything like it.",
  "MAGA!",
  "Just remember that.",
  "It's a fact. Look it up.",
  "And that's just common sense.",
  "Everybody agrees with me.",
  "The fake news won't tell you that.",
  "We'll see what happens.",
  "I've always said this.",
  "And I was right.",
  "Total hoax.",
  "It won't happen. I guarantee it.",
  "People don't want to talk about it, but it's true.",
  "Nobody talks about it. I'm the only one talking about it.",
  // From 54,000 tweets
  "MAKE AMERICA GREAT AGAIN!",
  "No Collusion!",
  "Drain the Swamp!",
  "America First!",
  "Wrong!",
  "KEEP AMERICA GREAT!",
  "So true.",
  "Just a continuation of the Witch Hunt!",
  "The Corrupt Media refuses to cover this!",
  "The world is watching.",
  "God Bless America!",
  "We will never stop fighting.",
  "Disgraceful!",
  "Pathetic!",
  "Total disaster.",
];

// ── WEIGHTED POOL & NO-REPEAT BUFFER ────────────────────────────────────────
// Weight map: 1 = normal, 2 = boosted (2×), 3 = high-priority (3×)
const _weightMap = new Map();
// 2× — self-aggrandizement, enemy attacks, fake statistics, extra bragging
[
  ...Array.from({length: 13}, (_, i) => i),       // self-aggrandizement: 0–12
  ...Array.from({length: 11}, (_, i) => i + 17),  // enemy attacks: 17–27
  ...Array.from({length: 7},  (_, i) => i + 35),  // fake statistics: 35–41
  ...Array.from({length: 6},  (_, i) => i + 91),  // extra bragging: 91–96
].forEach(i => _weightMap.set(i, 2));
// 3× — election fraud, Hillary/Biden blame, and Two Weeks™ promises
[
  ...Array.from({length: 12}, (_, i) => i + 97),  // election fraud: 97–108
  ...Array.from({length: 10}, (_, i) => i + 109), // Hillary/Biden blame: 109–118
  ...Array.from({length: 12}, (_, i) => i + 119), // Two Weeks™ promises: 119–130
].forEach(i => _weightMap.set(i, 3));

const _weightedPool = [];
templates.forEach((_, i) => {
  const weight = _weightMap.get(i) || 1;
  for (let w = 0; w < weight; w++) _weightedPool.push(i);
});

const _recentIndices = [];
const _RECENT_LIMIT = 5;

function generateQuote() {
  // Exclude recently used template indices from the draw pool
  const available = _weightedPool.filter(i => !_recentIndices.includes(i));
  const pool = available.length > 0 ? available : _weightedPool; // fallback if buffer is huge
  const idx = pool[Math.floor(Math.random() * pool.length)];

  // Update no-repeat buffer
  if (!_recentIndices.includes(idx)) {
    _recentIndices.push(idx);
    if (_recentIndices.length > _RECENT_LIMIT) _recentIndices.shift();
  }

  const text = fill(templates[idx]);
  const closer = Math.random() > 0.35 ? " " + pick(closers) : "";
  return text + closer;
}

// Export for browser and Node
if (typeof module !== "undefined") module.exports = { generateQuote };
