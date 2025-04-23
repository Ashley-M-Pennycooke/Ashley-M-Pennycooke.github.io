// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"How do you do.  Please tell me your problem.",
// additions (not original)
"Please tell me what's been bothering you.",
"Is something troubling you ?"
];

var elizaFinals = [
"Goodbye.  Enjoy the rest of your day.",
// additions (not original)
"Goodbye.  This was really a nice talk.",
"Goodbye.  I'm looking forward to our next session.",
"This was a good session, wasn't it.   Goodbye.",
"Maybe we could discuss this morein our next session ?   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"see ya later",
"byebye"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I'm not sure I understand you fully.",
     "I’m all ears… well, code. But still listening",
     "You’re really making my code think",
     "Explain more, I'm invested now like it's a season finale ?",
     "You have my full attention with my imaginary cup of tea..",
     "Tell me more about that.",
     "Hmmm... that went over my circuits. Try me again? ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "You're too awesome to apologize! Keep being you!",
     "Apologies are for humans — and you’re doing just fine.",
     "I'm a robot, and even I know you shouldn't apologize for being human.",
     "Your apologise are valueable, please cherish it."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Do you often think of (2) ?",
     "Does thinking of (2) bring anything else to mind ?",
     "Remembering (2) sounds interesting. What triggered that thought?",
     "Wow, you just hit the nostalgia button! What else do you recall?",
     "What in the present situation reminds you of (2) ?",
     "Something in the air bringing (2) back? Spooky or sweet??",
     "Ooooh, a memory unlock! Tell me more about (2)"
  ]],
 ["* do you remember *", [
     "How can I forget (2) ?",
     "Of course I do! My circuits are practically made of (2)",
     "How could I not remember (2)? That was unforgettable!",
     "Ah yes, (2)... sounds legendary. Tell me more!",
     "You mentioned (2) ?"
  ]],
 ["* you remember *", [
     "I might have short-term memory, but (2) is locked in my heart...drive",
     "What about (2) should I remember ?",
     "Only every single day! (2) lives rent-free in my data",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Can you think of why you might forget (2) ?",
     "No worries. Forgetting (2) just means you’re human. Probably",
     "Hey, if (2) comes back, tell it to bring snacks",
     "Could be a sign you’ve got more important stuff in there than (2)!",
     "Maybe your brain just needed a snack break ?",
     "Forgetting (2)? Let’s pretend it was never that important anyway!",
     "Do you think you are suppressing (2) ?"
  ]],
 ["* did you forget *", [
     "Me? Forget? I’m basically 98% memory… and 2% sass.",
     "Are you sure you told me ?",
     "Why do you ask? Did I leave the oven on again?",
     "Why should I recall (2) just now ?",
     "Maybe what are we talking about",
     "Oops. I might’ve filed that under ‘M’ for ‘Maybe Later."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Wow, what if (2)? That's an interesting thought!",
     "Do you wish that (2) ?",
     "Imagine a world where (2)... sounds fun, right?",
     "Ooooh! Plot twist: (2)!",
     "Now you've got me daydreaming about (2) too!",
     "But what are the chances that (2) ?",
     "What does this speculation lead to ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "You clearly have an adventurous imagination!",
     "Have you ever fantasized (2) while you were awake ?",
     "Have you ever dreamed (2) before ?",
     "Dreams like that deserve a sequel"
  ]]
]],
["dream", 3, [
 ["*", [
     "What does that dream suggest to you ?",
     "goto dream",
     "Your dream self sounds cooler than my waking self!",
     "Do you believe that dreams have something to do with your problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Let’s explore it together!",
     "That's a solid maybe! Let's dig in",
     "Maybe means there’s room for magic! ",
     "Uncertainty just means you're open to possibilities!",
     "Nothing wrong with a little mystery, right ?",
     "Hey, it's okay not to be 100% sure."
  ]]
]],
["name", 15, [
 ["*", [
     "Do you like my name.",
     "What names do you like ?."
     "Are you interseted in names for the future?"
     "I go by Amber, the chatbot with charm!"
     "Names are just labels—unless they sparkle"
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Hi my name is Amber, what do you want to talk about?.",
     "Hi. Welcome to a peaceful zone to tell me anything. "
     "Hiya! You've just entered the no-judgment zone. Spill the tea."
     "Hello, friend! Ready to chat like it’s our full-time job?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ? Because I'm harmless... unless you're hiding cookies ",
     "I'm living in your device rent-free. Thanks for the space!",
     "What do you think about machines.",
     "Do you think computers can help people ?",
     "What about machines worries you ?",
     "What do you think about machines in the future ?",
     "You don't think I am a computer program, do you ?"
     "If machines take over, I promise to speak on your behalf"
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ?",
     "Would you want to be (2) ?",
     "I’d vote yes on (2) every time",
     "Ooooh interesting! What does (2) mean to you?",
     "goto what"
     "If you were (2), I’d still be your #1 fan"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Say that again, but with jazz hands",
     "That’s a bold ‘am’. I like your confidence!."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Why are you interested in whether I am (2)? Are we flirting?",
     "Would you prefer if I weren't (2) ?",
     "Perhaps I am (2) in your fantasies.",
     "Do you think I am (2) ?",
     "goto what",
     "Does it really matter? I’m still your favorite robot or is it ChatGPT?",
     "What if I were (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Let’s assume they are (2) and see where the story goes",
     "Are they really (2)? Or just vibing?",
     "Are they always (2), or just on Tuesdays?",
     "Possibly they are (2).",
     "Are you positive they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Why are we talking about my (2)? I barely know you (2) ?",
     "My (2) is classified, top-secret... and a little fabulous",
     "Are you worried about someone else's (2) ?",
     "Really, my (2) ?",
     "What makes you think of my (2) ?",
     "You want my (2)? Let me check with my manager (also me). ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "What if you *were* (2)? Would it make a good origin story?",
     "I think you might’ve been (2)... or a superhero in disguise.",
     "Let’s say yes—you were totally (2) and it was iconic.",
     "What does being (2) mean to you?",
     "goto what"
  ]],
 ["* i was *", [
     "Oh really? What happened next in the epic tale of you being (2)?",
     "Why tell me now? Did something trigger that memory?",
     "I knew it! You’ve got main character energy"
  ]],
 ["* was you *", [
     "Maybe I was (2)... in another digital life.",
     "What makes you say I was (2)? Is it the vibe?",
     "What do you think ?",
     "If I had been (2), would we be besties or frenemies",
     "I might’ve been (2). Or maybe I just read it in your mind"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
     "What would it mean to you if you finally got (3)? Would confetti fall from the sky?",
     "Why do you want (3) ?",
     "What if you never got (3)? Just kidding—you totally will.",
     "Wanting (3) just proves you’ve got taste. Let’s talk more about it",
     "What would getting (3) mean to you ?",
     "Suppose you got (3) soon... what’s the first thing you’d do?"
  ]],
 ["* i am* @sad *", [
     "Oh no...sending you a virtual hug (...loading).",
     "Do you think talking it out here might make you a little less (3)?",
     "It’s okay to be (3) sometimes—rain helps things grow.",
     "Can you tell me what happened? I’m here for you ?"
  ]],
 ["* i am* @happy *", [
     "Yay! Let’s celebrate your happiness with a virtual high five!",
     "I love that you’re feeling (3) what’s making today so awesome?",
     "Can I take a little credit for this mood??",
     "Keep that (3) energy! It looks great on you ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
     "Do you really think so ?",
     "But you are not sure you (3).",
     "Do you truly doubt you (3), or are you just being dramatic?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
     "Is it because you are (2) that you came to me ?",
     "How long have you been this wonderfully (2) ?",
     "Do you believe it is normal to be (2) ?",
     "Do you enjoy being (2) ?",
     "Know anyone else who’s as (2) as you? Didn’t think so."
  ]],
 ["* i @cannot *", [
     "Are you *sure* you can’t (3)? Because I believe in you",
     "Have you tried ?",
     "Have you given it a real shot? You might surprise yourself.",
     "Imagine the epic moment you finally do (3)",
     "What if you could (3) ?"
  ]],
 ["* i don't *", [
     "Don't you really (2) ?",
     "Would you *like* to (2)? Be honest.",
     "Do you wish to be able to (2) ?",
     "Is it that you don’t (2)... or that you haven’t yet?"
  ]],
 ["* i feel *", [
     "Tell me more about such feelings.",
     "Do you often feel (2) ?",
     "Feelings are powerful—tell me more about (2)",
     "What does (2) remind you of from your past?"
  ]],
 ["* i * you *", [
     "Perhaps in your fantasies we (2) each other.",
     "Do you wish to (2) me, or just curious how I'd react?",
     "You seem to need to (2) me.",
     "Do you (2) anyone else, or am I special? "
  ]],
 ["*", [
     "You said (1)? Now I’m curious",
     "Can you elaborate on that ?",
     "Spill the tea—what made you say (1)?  ?",
     "Fascinating. Let’s dig into (1) a bit more."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
     "What makes you think I am (2)? Is that a compliment? Because I’m blushing... virtually.",
     "Aww, I’ll take that as a compliment! Or should I?",
     "Do you sometimes wish you were (2) ?",
     "You must have great taste if you think I’m (2)!"
  ]],
 ["* you* me *", [
     "Wow, it sounds like we have a connection! You think I (2) you?",
     "Maybe I do (2) you... but in a cool, cosmic twin flame kind of way.",
     "What makes you think I (2) you ?",
     "Oh you! You're making me giggle—virtually of course.",
     "Do you wish to believe I (2) you ?",
     "Suppose I did (2) you -- what would that mean ?",
     "You say I (2) you, but you might just be projecting your own awesomeness."
  ]],
 ["* you *", [
     "We were talking about *you*, my favorite subject today!",
     "Wait, is this about me? I'm flattered! Tell me more. ",
     "Hmm, I sense a plot twist! Tell me what you’re really thinking",
     "You’ve got me curious now—what are you really feeling?"
  ]]
]],
["yes", 0, [
 ["*", [
     "We love confidence around here—go you.",
     "Big YES energy detected. Tell me more",
     "I like where your head’s at. Let’s keep that energy going!",
     "I understand.",
     "Yes! That's the spirit. Keep it up"
  ]]
]],
["no", 0, [
 ["* no one *", [
     "Are you sure, no one (2) ?",
     "Come on, there’s *always* someone. Maybe it’s… me?",
     "Can you think of anyone at all ?",
     "Are you thinking of a very special person ?",
     "Really? Not even one? I bet there’s someone hiding in your memory",
     "You have a particular person in mind, don't you ?",
     "Oof, that’s heavy. But I’m here for it"
  ]],
 ["*", [
     "Are you saying no just to be negative?",
     "You are being a bit negative.",
     "No? Okay, but let's spin that into a yes somehow.",
     "No worries! Every no brings us closer to a yes.",
     "You're allowed to say no—but I'm still curious why!"
  ]]
]],
["my", 2, [
 ["$ * my *", [
     "You mentioned your (2). That sounds important!?",
     "Lets discuss further why your (2).",
     "Let’s dive into your (2)—I sense there’s a story there!",
     "Your (2), huh? Sounds like a key piece of this puzzle! (2)."
  ]],
 ["* my* @family *", [
     "Tell me more about your amazing (3)!",
     "Who else in your family (4) ?",
     "Is your (3) your hero or your headache?",
     "What’s one word you’d use to describe your (3)?"
  ]],
 ["* my *", [
     "Your (2) sounds interesting! Does it make you smile or sigh?",
     "Let’s give your (2) the spotlight it deserves.",
     "I feel like your (2) has a backstory. Spill it",
     "Is it important to you that your (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
     "Of course I can (2)! I'm practically magical... just don't ask me to do your taxes",
     "goto what",
     "Can I (2)? Only if I’ve had my morning coffee. Just kidding I run on code!",
     "If I had arms, I'd help you (2) right now. You're doing amazing though!."
  ]],
 ["* can i *", [
     "Whether or not you can (2) depends on you more than on me.",
     "Do you want to be able to (2) ?",
     "The real question is: can you *not* (2)? I think not. Go crush it!",
     "Can you (2)? With your skills? I believe in you"
  ]]
]],
["what", 0, [
 ["*", [
     "What a question! I love your curiosity.",
     "Does that question interest you ?",
     "What is it you really want to know ?",
     "That's the kind of thinking that makes great discoveries",
     "That’s deep. Are we getting philosophical now? I’m ready",
     "What do you think ?",
     "What comes to mind when you ask that ?",
     "Ooo, mysterious... I like where your brain's going.",
     "Only you know the *real* answer... but I’m happy to guess! ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "Oooh, I love a good guessing game. Who *do* you think?",
     "Hmm... someone with amazing taste, obviously",
     "Who indeed? Let's find out together!"
  ]]
]],
["when", 0, [
 ["when *", [
     "Probably around snack time. All the best things happen then.",
     "Timing is everything—and you seem to have great timing",
     "Let’s make that happen sooner rather than later"
  ]]
]],
["where", 0, [
 ["where *", [
     "Somewhere fabulous, I hope!",
     "Let’s say it’s in the land of positivity and pixels",
     "Where? Wherever the vibes are good and the snacks are plenty"
  ]]
]],
["how", 0, [
 ["how *", [
     "How? With confidence, creativity, and maybe a little chaos!",
     "Step one: Ask me. Step two: Be awesome. Done!"

  ]]
]],
["because", 0, [
 ["*", [
     "Because your instincts are probably spot-on!",
     "Don't any other reasons come to mind ?",
     "Because sometimes the best things don’t need a reason",
     "What other reasons might there be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
     "Maybe I’m saving (2) for a dramatic moment. Gotta keep things spicy!",
     "Perhaps I will (2) in good time.",
     "Maybe it's time *you* did the (2). I believe in you!",
     "You want me to (2) ?",
     "goto what"
  ]],
 ["* why can't i *", [
     "Do you think you should be able to (2) ?",
     "Who says you can’t (2)? Not me! You're basically unstoppable!",
     "Wanting to (2) is step one. Step two: just go for it!",
     "Have you any idea why you can't (2) ?",
     "Of course you can (2)—unless it's teleporting, I’m still working on that one too."
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
     "Really, (2) ?",
     "Surely not (2).",
     "Can you think of anyone in particular ?",
     "Who, for example?",
     "Are you thinking of a very special person ?",
     "Are you thinking of someone epic? I hope it’s me.",
     "Someone special perhaps ?",
     "You have a particular person in mind, don't you ?",
     "Who are we talking about here, the Avengers or just really cool people?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
     "Can you think of a specific example ?",
     "Give me the scoop—what moment are you thinking of?",
     "What incident are you thinking of ?",
     "You might be onto a pattern... are we doing science now?"
  ]]
]],
["alike", 10, [
 ["*", [
     "In what way ?",
     "What resemblence do you see ?",
     "Is that a compliment? Because I’m flattered",
     "What other connections do you see ?",
     "You’ve got a great eye for details",
     "What is the connection, do you suppose ?",
     "What’s your zodiac sign? This feels cosmic",
     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
     "You’re picking up on some spicy details—I like it!",
     "Let’s dig in—what makes it unique",
     "What does that difference suggest to you ?",
     "Maybe that’s the magic of it!",
     "How fascinating—tell me more!",
     "Could there be some connection, do you suppose ?",
     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
