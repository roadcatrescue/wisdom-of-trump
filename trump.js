// Trump Oracle — Generator Engine v2
// Satirical random speech generator — word banks seeded from 1.4M char transcript corpus
// (alexmill/trump_transcripts, 74 speeches, 292K words, CC/public record)

// ── WORD BANKS ──────────────────────────────────────────────────────────────

const enemies = [
  "Sleepy Joe", "Crooked Hillary", "Shifty Schiff", "Crazy Nancy",
  "Fake News CNN", "the Radical Left", "the Deep State",
  "the Lamestream Media", "Soros", "the Democrats",
  "the Failing New York Times", "Crooked Joe", "Low-Energy Jeb",
  "Little Marco", "the Globalists", "the Communist Left",
  "the Mainstream Media", "the Radical Democrats", "the Fake News",
  "the Do-Nothing Democrats", "Pocahontas", "Crazy Maxine",
  "the Squad", "the Rigged System", "the Corrupt Media"
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
  "foreign policy", "law and order", "the military generals"
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

  // ── Closing zingers ──
  "Our politicians are stupid. {enemy} is stupid. Frankly, many of them are very, very stupid. I'm not stupid.",
  "You know what that is? That's called {topic}. And we're going to win at it.",
  "Nobody can do that like me. Nobody. The generals, the best generals, they come to me. I do what they can't.",
  "I guarantee you — and you can mark my words, there's a lot of tape running — {enemy} will fail. I guarantee it.",
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
];

function generateQuote() {
  const template = pick(templates);
  const text = fill(template);
  const closer = Math.random() > 0.35 ? " " + pick(closers) : "";
  return text + closer;
}

// Export for browser and Node
if (typeof module !== "undefined") module.exports = { generateQuote };
