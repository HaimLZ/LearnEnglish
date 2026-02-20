// Word and sentence resources for Word Wizard.
// Loaded before index.html main script via relative path.

const DEFAULT_WORDS = [
  { v1: "Sit",     v2: "Sat",     hebrew: "לשבת" },
  { v1: "Drink",   v2: "Drank",   hebrew: "לשתות" },
  { v1: "Sing",    v2: "Sang",    hebrew: "לשיר" },
  { v1: "Swim",    v2: "Swam",    hebrew: "לשחות" },
  { v1: "Begin",   v2: "Began",   hebrew: "להתחיל" },
  { v1: "Give",    v2: "Gave",    hebrew: "לתת" },
  { v1: "Get",     v2: "Got",     hebrew: "לקבל" },
  { v1: "Forget",  v2: "Forgot",  hebrew: "לשכוח" },
  { v1: "Shoot",   v2: "Shot",    hebrew: "לירות" },
  { v1: "Fly",     v2: "Flew",    hebrew: "לטוס/לעוף" },
  { v1: "Draw",    v2: "Drew",    hebrew: "לצייר" },
  { v1: "Throw",   v2: "Threw",   hebrew: "לזרוק" },
  { v1: "Grow",    v2: "Grew",    hebrew: "לגדול/לגדל" },
  { v1: "Know",    v2: "Knew",    hebrew: "לדעת/להכיר" },
  { v1: "Blow",    v2: "Blew",    hebrew: "לנשוב/לנשוף" },
  { v1: "Break",   v2: "Broke",   hebrew: "לשבור" },
  { v1: "Speak",   v2: "Spoke",   hebrew: "לדבר" },
  { v1: "Write",   v2: "Wrote",   hebrew: "לכתוב" },
  { v1: "Drive",   v2: "Drove",   hebrew: "לנהוג/לנסוע" },
  { v1: "Ride",    v2: "Rode",    hebrew: "לרכב" },
  { v1: "Steal",   v2: "Stole",   hebrew: "לגנוב" },
  { v1: "Wake",    v2: "Woke",    hebrew: "להתעורר" },
  { v1: "Wear",    v2: "Wore",    hebrew: "ללבוש" },
  { v1: "Lose",    v2: "Lost",    hebrew: "להפסיד" },
  { v1: "Win",     v2: "Won",     hebrew: "לנצח" },
  { v1: "Run",     v2: "Ran",     hebrew: "לרוץ" },
  { v1: "Buy",     v2: "Bought",  hebrew: "לקנות" },
  { v1: "Bring",   v2: "Brought", hebrew: "להביא" },
  { v1: "Fight",   v2: "Fought",  hebrew: "לריב/להילחם" },
  { v1: "Think",   v2: "Thought", hebrew: "לחשוב" },
  { v1: "Go",      v2: "Went",    hebrew: "ללכת" },
  { v1: "Have",    v2: "Had",     hebrew: "פועל שייכות" },
  { v1: "Take",    v2: "Took",    hebrew: "לקחת" },
  { v1: "See",     v2: "Saw",     hebrew: "לראות" },
  { v1: "Hear",    v2: "Heard",   hebrew: "לשמוע" },
  { v1: "Make",    v2: "Made",    hebrew: "להכין" },
  { v1: "Do",      v2: "Did",     hebrew: "לעשות" },
  { v1: "Find",    v2: "Found",   hebrew: "למצוא" },
  { v1: "Eat",     v2: "Ate",     hebrew: "לאכול" },
  { v1: "Lie",     v2: "Lay",     hebrew: "לשקר/לשכב" }
];

const CUSTOM_SENTENCE_BANK = {
  "sit|sat": {
    v1: ["I sit near the window in class.", "Please sit here and relax.", "We sit together at lunch.", "They sit in the front row.", "I sit on this bench every morning."],
    v2: ["I sat by the fire last night.", "She sat next to me on the bus.", "We sat quietly during the movie.", "They sat under the tree yesterday.", "He sat in my chair this morning."]
  },
  "drink|drank": {
    v1: ["I drink water after every workout.", "We drink tea in the afternoon.", "She drinks coffee before work.", "They drink juice with breakfast.", "Please drink slowly."],
    v2: ["I drank cold water after running.", "He drank all the milk yesterday.", "We drank coffee at the cafe.", "She drank tea before bed.", "They drank fresh juice this morning."]
  },
  "sing|sang": {
    v1: ["I sing in the shower every day.", "We sing this song in class.", "She sings beautifully on stage.", "They sing together in the choir.", "Please sing a little louder."],
    v2: ["I sang at the school concert.", "She sang my favorite song last night.", "We sang happy birthday to him.", "They sang all evening at the party.", "He sang with confidence yesterday."]
  },
  "swim|swam": {
    v1: ["I swim at the pool on Fridays.", "We swim in the sea in summer.", "She swims every morning before work.", "They swim very fast.", "Can you swim across the lane?"],
    v2: ["I swam for an hour yesterday.", "We swam in the lake last weekend.", "She swam before breakfast today.", "They swam to the small island.", "He swam faster than everyone else."]
  },
  "begin|began": {
    v1: ["I begin work at eight.", "We begin the lesson with a quiz.", "She begins every day with yoga.", "They begin training next week.", "Please begin when you are ready."],
    v2: ["I began reading that book last night.", "We began the meeting at nine.", "She began to smile after the joke.", "They began the project yesterday.", "He began learning English last year."]
  },
  "give|gave": {
    v1: ["I give my friend honest advice.", "We give food to the dog.", "She gives great presentations.", "They give gifts on holidays.", "Please give me a minute."],
    v2: ["I gave him my old laptop.", "She gave me useful feedback.", "We gave flowers to our teacher.", "They gave us clear directions.", "He gave his seat to an elderly man."]
  },
  "get|got": {
    v1: ["I get home around six.", "We get better with practice.", "She gets excited about travel.", "They get tired after long meetings.", "I get the joke now."],
    v2: ["I got your message this morning.", "We got stuck in traffic yesterday.", "She got a new job last month.", "They got home very late.", "He got sick after the trip."]
  },
  "forget|forgot": {
    v1: ["I forget names very quickly.", "We forget things when we are busy.", "She forgets her keys sometimes.", "They forget to call me.", "Please do not forget your bag."],
    v2: ["I forgot my password again.", "She forgot to lock the door.", "We forgot his birthday last year.", "They forgot where they parked.", "He forgot my phone number."]
  },
  "shoot|shot": {
    v1: ["I shoot photos at weddings.", "We shoot videos for our channel.", "She shoots with a digital camera.", "They shoot scenes in this street.", "He likes to shoot basketball."],
    v2: ["I shot a great photo yesterday.", "She shot a short film last month.", "We shot all day in the rain.", "They shot the final scene at night.", "He shot and scored in the last minute."]
  },
  "fly|flew": {
    v1: ["I fly to London every year.", "We fly economy to save money.", "She flies for work often.", "They fly drones on weekends.", "Birds fly south in winter."],
    v2: ["I flew to Berlin last week.", "We flew overnight and felt tired.", "She flew home for the holiday.", "They flew above the mountains.", "The kite flew high in the wind."]
  },
  "draw|drew": {
    v1: ["I draw cartoons in my notebook.", "We draw maps in geography class.", "She draws beautiful portraits.", "They draw plans before building.", "Can you draw a quick sketch?"],
    v2: ["I drew a cat for my niece.", "She drew the logo by hand.", "We drew a map of the city.", "They drew the curtains before sleeping.", "He drew a deep breath and started."]
  },
  "throw|threw": {
    v1: ["I throw the ball to my brother.", "We throw old papers away.", "She throws rice at weddings.", "They throw parties every summer.", "Please throw this in the bin."],
    v2: ["I threw the keys on the table.", "She threw the ball very far.", "We threw confetti after the game.", "They threw everything into one bag.", "He threw his arms in the air."]
  },
  "grow|grew": {
    v1: ["I grow tomatoes in my garden.", "We grow together as a team.", "She grows herbs on her balcony.", "They grow coffee in that region.", "Children grow very quickly."],
    v2: ["I grew up in a small town.", "We grew vegetables last summer.", "She grew more confident this year.", "Their business grew really fast.", "The plant grew taller overnight."]
  },
  "know|knew": {
    v1: ["I know the answer now.", "We know this street very well.", "She knows three languages.", "They know each other from school.", "Do you know his name?"],
    v2: ["I knew that story was true.", "We knew the weather would change.", "She knew the song by heart.", "They knew him for many years.", "He knew exactly what to do."]
  },
  "blow|blew": {
    v1: ["I blow out candles on birthdays.", "We blow balloons for the party.", "She blows her nose in winter.", "They blow soap bubbles outside.", "The wind blows strongly here."],
    v2: ["I blew the candles out quickly.", "We blew up dozens of balloons.", "She blew on the soup to cool it.", "They blew bubbles in the park.", "The storm blew all night."]
  },
  "break|broke": {
    v1: ["I break eggs into the bowl.", "We break for lunch at noon.", "She breaks bad habits slowly.", "They break the rules sometimes.", "Please do not break this glass."],
    v2: ["I broke my phone screen yesterday.", "We broke the record last season.", "She broke the chocolate into pieces.", "They broke the silence with laughter.", "He broke his promise."]
  },
  "speak|spoke": {
    v1: ["I speak English at work.", "We speak quietly in the library.", "She speaks clearly and slowly.", "They speak with their teacher daily.", "Do you speak Spanish?"],
    v2: ["I spoke to him after class.", "We spoke for hours last night.", "She spoke at the conference yesterday.", "They spoke about their plans.", "He spoke very honestly."]
  },
  "write|wrote": {
    v1: ["I write in my journal daily.", "We write emails every morning.", "She writes poems in Hebrew.", "They write reports on Fridays.", "Please write your name here."],
    v2: ["I wrote a long email yesterday.", "We wrote notes during the lecture.", "She wrote a letter to her friend.", "They wrote the answer on the board.", "He wrote a book last year."]
  },
  "drive|drove": {
    v1: ["I drive to work every day.", "We drive carefully at night.", "She drives her kids to school.", "They drive across the country.", "Can you drive this car?"],
    v2: ["I drove home in heavy rain.", "We drove for six hours yesterday.", "She drove me to the airport.", "They drove through the mountains.", "He drove too fast and got a ticket."]
  },
  "ride|rode": {
    v1: ["I ride my bike to school.", "We ride horses on weekends.", "She rides the subway to work.", "They ride scooters in the park.", "Can you ride without hands?"],
    v2: ["I rode my bike in the rain.", "We rode the train to Haifa.", "She rode a horse for the first time.", "They rode all morning on the trail.", "He rode with us yesterday."]
  },
  "steal|stole": {
    v1: ["I never steal from anyone.", "We teach children not to steal.", "She steals scenes in every movie.", "They steal glances at each other.", "A thief may steal your wallet."],
    v2: ["Someone stole my backpack yesterday.", "He stole my parking spot.", "They stole the painting at night.", "She stole my idea in the meeting.", "The cat stole food from the table."]
  },
  "wake|woke": {
    v1: ["I wake up at six daily.", "We wake early for flights.", "She wakes before her alarm.", "They wake the baby by accident.", "Please wake me at seven."],
    v2: ["I woke up before sunrise.", "We woke to the sound of rain.", "She woke me with a phone call.", "They woke late on Sunday.", "He woke up smiling."]
  },
  "wear|wore": {
    v1: ["I wear glasses for reading.", "We wear uniforms at school.", "She wears a red hat often.", "They wear boots in winter.", "What do you wear to weddings?"],
    v2: ["I wore a coat yesterday.", "We wore matching shirts at the event.", "She wore her favorite dress.", "They wore black at the ceremony.", "He wore running shoes to work."]
  },
  "lose|lost": {
    v1: ["I lose my keys all the time.", "We lose focus when we are tired.", "She loses patience quickly.", "They lose money on bad deals.", "Do not lose hope."],
    v2: ["I lost my wallet yesterday.", "We lost the game by one point.", "She lost her train ticket.", "They lost their way in the forest.", "He lost his phone at the mall."]
  },
  "win|won": {
    v1: ["I win when I stay calm.", "We win more games at home.", "She wins every chess match.", "They win because they train hard.", "Can you win this round?"],
    v2: ["I won first prize last year.", "We won the match in overtime.", "She won a scholarship.", "They won three games in a row.", "He won my trust with honesty."]
  },
  "run|ran": {
    v1: ["I run in the park daily.", "We run every morning together.", "She runs five kilometers before work.", "They run a small family cafe.", "Can you run faster than me?"],
    v2: ["I ran to catch the bus.", "We ran in the city marathon.", "She ran home in the rain.", "They ran out of milk yesterday.", "He ran a successful campaign."]
  },
  "buy|bought": {
    v1: ["I buy fresh bread every day.", "We buy gifts for birthdays.", "She buys books online.", "They buy fruit at the market.", "Do you buy coffee here?"],
    v2: ["I bought a new laptop yesterday.", "We bought tickets for the concert.", "She bought flowers for her mother.", "They bought a house near the sea.", "He bought lunch for everyone."]
  },
  "bring|brought": {
    v1: ["I bring lunch to work.", "We bring snacks for the trip.", "She brings energy to the team.", "They bring their dog to the park.", "Please bring your ID tomorrow."],
    v2: ["I brought my notebook today.", "We brought dessert to dinner.", "She brought her friend to class.", "They brought chairs from home.", "He brought me a cup of tea."]
  },
  "fight|fought": {
    v1: ["I fight for what is right.", "We fight only in training.", "She fights for equal rights.", "They fight over small things.", "Do not fight with your brother."],
    v2: ["I fought hard for this job.", "We fought until the final minute.", "She fought a serious illness.", "They fought about money yesterday.", "He fought bravely in the tournament."]
  },
  "think|thought": {
    v1: ["I think about my future often.", "We think this plan can work.", "She thinks very creatively.", "They think in different ways.", "What do you think about this idea?"],
    v2: ["I thought you were at home.", "We thought the shop was open.", "She thought about your advice.", "They thought the test was easy.", "He thought he lost his keys."]
  },
  "go|went": {
    v1: ["I go to the gym after work.", "We go to the beach in summer.", "She goes to bed early.", "They go shopping on Fridays.", "Do you go by bus?"],
    v2: ["I went to the doctor yesterday.", "We went out for dinner.", "She went home before midnight.", "They went to Jerusalem last week.", "He went straight to the office."]
  },
  "have|had": {
    v1: ["I have two sisters.", "We have enough time now.", "She has a great sense of humor.", "They have a meeting at ten.", "Do you have my book?"],
    v2: ["I had a headache yesterday.", "We had a long conversation.", "She had a cold last week.", "They had lunch at noon.", "He had a good reason to leave."]
  },
  "take|took": {
    v1: ["I take notes in every class.", "We take the train to work.", "She takes a break at noon.", "They take photos on every trip.", "Please take your bag with you."],
    v2: ["I took the wrong bus yesterday.", "We took many photos at the wedding.", "She took my advice seriously.", "They took their time to decide.", "He took a deep breath."]
  },
  "see|saw": {
    v1: ["I see the mountains from here.", "We see each other every week.", "She sees details that others miss.", "They see the problem clearly.", "Can you see the sign?"],
    v2: ["I saw your brother yesterday.", "We saw a great movie last night.", "She saw the message too late.", "They saw whales from the boat.", "He saw me at the station."]
  },
  "hear|heard": {
    v1: ["I hear music from the street.", "We hear the birds every morning.", "She hears very well even from far away.", "They hear footsteps in the hall.", "Can you hear me clearly?"],
    v2: ["I heard your voice on the phone.", "We heard the news this morning.", "She heard a loud noise outside.", "They heard us laughing downstairs.", "He heard the bell and opened the door."]
  },
  "make|made": {
    v1: ["I make coffee every morning.", "We make plans for the weekend.", "She makes beautiful cakes.", "They make quick decisions.", "Can you make a copy for me?"],
    v2: ["I made dinner for my family.", "We made a big mistake yesterday.", "She made a promise to help.", "They made progress this month.", "He made me laugh."]
  },
  "do|did": {
    v1: ["I do my homework after school.", "We do exercise every day.", "She does her job very well.", "They do the dishes together.", "What do you do on weekends?"],
    v2: ["I did the laundry this morning.", "We did our best in the match.", "She did a great presentation.", "They did not answer my email.", "He did exactly what I asked."]
  },
  "find|found": {
    v1: ["I find this book inspiring.", "We find solutions together.", "She finds joy in small things.", "They find mistakes quickly.", "Can you find my keys?"],
    v2: ["I found my phone under the sofa.", "We found a shortcut to the station.", "She found a new apartment.", "They found the answer online.", "He found money in his old coat."]
  },
  "eat|ate": {
    v1: ["I eat breakfast at seven.", "We eat together every evening.", "She eats healthy food.", "They eat lunch in the office.", "Do you eat fish?"],
    v2: ["I ate too much at dinner.", "We ate at a new restaurant.", "She ate an apple in class.", "They ate quickly before the show.", "He ate all the cookies."]
  },
  "lie|lay": {
    v1: ["I lie down when I feel tired.", "We lie on the beach in summer.", "She lies on the couch after work.", "They lie under the stars at night.", "Please lie still for a moment."],
    v2: ["I lay on the bed all afternoon.", "We lay on the grass and watched clouds.", "She lay awake for hours last night.", "They lay quietly during the movie.", "He lay down after the long run."]
  }
};
