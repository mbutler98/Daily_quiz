/* Deeper material for the original Aerospace, Cyber and Leadership lessons. */
WP.enrich({
  "aero-01": {
    hook: "A fully loaded Airbus A380 weighs about 575 tonnes at take-off — more than 400 cars. Four forces, balanced just right, keep it in the air.",
    story: [
      "## The tug of war in two directions",
      "Picture two tugs of war happening at once. Vertically: lift pulls up, weight pulls down. Horizontally: thrust pulls forward, drag pulls back. When both contests are tied, the aircraft flies straight and level at a constant speed. Change the balance and it climbs, descends, speeds up or slows.",
      "## Lift",
      "Wings are shaped and angled so they deflect air downward. Push air down, and the air pushes the wing up (Newton's third law). The same flow pattern means lower pressure above the wing than below it — two descriptions of the same physics. Lift grows with the square of speed, so going twice as fast gives four times the lift.",
      "## Thrust and drag",
      "Engines throw air (or exhaust) backwards to push the aircraft forwards. Drag comes in two main flavours. Parasite drag is air resistance on the whole shape and grows quickly with speed. Induced drag is a side effect of making lift; it's worst at low speed, when the wing has to work hardest. Add them together and there's a sweet-spot speed where total drag is lowest — which is close to where aircraft get their best range.",
      "## A surprising truth about climbing",
      "You might think aircraft climb because lift exceeds weight. In a steady climb, it's really extra thrust doing the work: the engines provide more power than needed to beat drag, and that surplus becomes height. Pilots say: pitch for speed, power for altitude — a reminder that the throttle, not the stick, ultimately decides whether you go up.",
      "As fuel burns off, the aircraft gets lighter and needs less lift, so airliners often climb in steps during long flights to thinner air where drag is lower."
    ],
    think: [
      "Why do you think aircraft take off into the wind?",
      "If lift rises with speed squared, why do aircraft need flaps for landing?",
      "Where else do you see a 'sweet spot' trade-off between two opposing costs, like parasite and induced drag?"
    ],
    talk: "In a steady climb, an airliner's lift is actually slightly less than its weight. The climb comes from extra engine thrust, not extra lift. Pilots learn the phrase 'pitch for speed, power for altitude'."
  },
  "aero-02": {
    hook: "In 2009, Air France 447 fell from 38,000 feet into the Atlantic. The aircraft had power, and nothing on it was broken beyond iced-up speed sensors. It was stalled the whole way down, with its nose pointing up.",
    story: [
      "## Angle of attack is the key number",
      "Angle of attack is the angle between the wing and the oncoming air — not the angle between the nose and the horizon. An aircraft can point nose-up yet be sinking, so the air is actually coming from below and the angle of attack is huge.",
      "Increase the angle and the wing makes more lift, up to a point. Around 15–18 degrees for many wings, the air can no longer follow the curved upper surface. It breaks away into turbulent eddies, and lift drops sharply. That's a stall.",
      "## Stalls aren't about speed",
      "People often say an aircraft stalls because it's too slow. Slow flight does need a high angle of attack, so the two are linked. But you can stall at any speed if you pull hard enough — in a steep turn, for instance. The only thing that matters is exceeding the critical angle.",
      "## Getting out of one",
      "Recovery is counter-intuitive: when the ground is rushing up, every instinct says pull back. But pulling back increases the angle of attack and deepens the stall. You must push the nose down to let air flow smoothly over the wing again, then add power and level the wings. In AF447, investigators found the pilot flying held the controls back for most of the descent.",
      "## Cheating the stall",
      "For take-off and landing, airliners extend slats on the front of the wing and flaps at the back. These change the wing's shape, letting it make enough lift at much lower speeds without stalling. Watch the wing next time you land — it practically unfolds."
    ],
    think: [
      "Why do you think 'push to recover' is so hard for humans under stress?",
      "Where else in life does the instinctive reaction make a problem worse?",
      "How should cockpit automation hand control back to pilots when sensors fail?"
    ],
    talk: "A plane can stall at any speed. A stall happens when the wing meets the air at too steep an angle, not because the plane is too slow. Recovering means pushing the nose down, which feels wrong when you're falling. That's part of what went wrong on Air France 447."
  },
  "aero-03": {
    hook: "Hold a pen in front of you. Tip the front up and down: that's pitch. Tilt it side to side: roll. Swing it left and right: yaw. Every manoeuvre an aircraft makes is some mix of those three.",
    story: [
      "## Three axes, three controls",
      "Pitch (nose up and down) is controlled by the elevator on the tail. The pilot pulls back on the yoke or stick, the elevator tilts up, the tail goes down, and the nose rises.",
      "Roll (wings tilting) is controlled by ailerons near the wingtips. They move in opposite directions: one goes up, reducing lift on that wing; the other goes down, increasing lift on the other. The aircraft rolls toward the wing with the raised aileron.",
      "Yaw (nose swinging left and right) is controlled by the rudder on the vertical fin, operated with foot pedals.",
      "## How aircraft really turn",
      "Cars turn with steering; boats turn with rudders. Aircraft turn by banking. Roll the wings and the lift, which always points 'up' from the wings, now leans sideways. Part of it pulls the aircraft around the turn. The rudder isn't the main turning tool; it keeps the turn 'coordinated', so the aircraft doesn't skid or slip sideways through the air. Because some lift is now pulling sideways, the pilot adds a little back pressure to hold altitude.",
      "## Fly-by-wire",
      "In older aircraft, cables and pulleys connected controls to surfaces. Most modern airliners and fighters use fly-by-wire: the pilot's inputs go to computers, which move the surfaces. This saves weight and lets computers add protections, like preventing stalls or excessive bank. Airbus and Boeing take slightly different philosophies on how firmly the computer can overrule the pilot — a debate that still runs in aviation circles.",
      "Fighters like the F-16 are deliberately designed to be unstable, which makes them very agile, and can only be flown with computers making constant tiny corrections."
    ],
    think: [
      "Should the computer or the pilot have the final say in an emergency? What are the risks either way?",
      "Why might designing a fighter to be unstable make it better?",
      "Where else do humans give control inputs that a computer interprets (think cars, phones)?"
    ],
    talk: "Planes don't turn mainly with the rudder. They bank, and tilted lift pulls them around the curve. The rudder just keeps the turn smooth. Some fighter jets are so deliberately unstable that a pilot couldn't fly them without the computer making constant tiny corrections."
  },
  "aero-04": {
    hook: "The front fan on a modern airliner engine can be more than three metres across. It's wider than many cars are long, and it produces most of the engine's push.",
    story: [
      "## Suck, squeeze, bang, blow",
      "A jet engine does four things in a continuous flow. Suck: air is drawn into the front. Squeeze: spinning compressor blades crush it to many times atmospheric pressure. Bang: fuel is sprayed in and burned, making very hot, high-pressure gas. Blow: the gas rushes out the back through a turbine and nozzle. The turbine is a windmill in the hot gas; it spins the shaft that drives the compressor and fan at the front.",
      "## Turbofans: move more air, more gently",
      "The key to efficiency is a counter-intuitive idea: it's better to push a lot of air a little than a little air a lot. Modern airliner engines are turbofans. The small hot core drives a huge fan, and most of the air the fan moves goes around the core (bypass air) rather than through it. The ratio of bypass air to core air is the bypass ratio — around 10 to 1 on the newest airliner engines. More bypass means better fuel economy and much less noise.",
      "## Fighters do the opposite",
      "Combat jets need high speed and a slim profile, so they use low-bypass engines with fast exhaust. Many add afterburners: extra fuel sprayed into the exhaust and burned for a huge thrust boost. It's spectacularly thirsty — fuel burn can multiply several times over — so it's used briefly, for take-off or combat.",
      "## Rockets",
      "Jets need oxygen from the air to burn fuel. Rockets carry their own oxidiser (like liquid oxygen), so they work in the vacuum of space. Their efficiency is measured by specific impulse: how much thrust you get from each kilogram of propellant per second. Hydrogen-oxygen engines score well; solid boosters score lower but deliver huge thrust simply."
    ],
    think: [
      "Why does 'move more air more slowly' save fuel? Can you think of a similar principle in rowing or swimming?",
      "Why are airliner engines getting bigger rather than faster?",
      "What trade-offs would you face designing an engine for a cargo drone versus a fighter?"
    ],
    talk: "On a modern airliner most of the push comes from the giant fan at the front, not from the hot exhaust. Most of the air goes around the engine core rather than through it. That's why newer planes are both quieter and more fuel-efficient."
  },
  "aero-05": {
    hook: "The International Space Station is falling toward Earth right now. It has been falling constantly since 1998. It just moves sideways so fast — about 7.7 km a second — that it keeps missing.",
    story: [
      "## Newton's cannonball",
      "Isaac Newton imagined a cannon on a very tall mountain. Fire a ball slowly and it falls nearby. Fire faster and it lands further away. Fire fast enough and, as it falls, the Earth curves away beneath it at the same rate — it never lands. That's an orbit: continuous falling with enough sideways speed to keep missing the ground.",
      "## Why astronauts float",
      "At the ISS's height (about 400 km), gravity is still about 90% as strong as on the surface. Astronauts float because they and the station are falling together, like passengers in a dropping elevator. It's 'free fall', not zero gravity.",
      "## The three main neighbourhoods",
      "Low Earth Orbit (LEO), roughly up to 2,000 km: fast (about 90 minutes per lap), close, and cheap to reach. Home to the ISS, imaging satellites and the Starlink internet satellites. Medium Earth Orbit (MEO): the GPS satellites sit around 20,200 km. Geostationary orbit (GEO), 35,786 km above the equator: one orbit takes exactly a day, so the satellite hovers over one spot. That's why satellite TV dishes can point at a fixed place in the sky.",
      "## Higher means slower",
      "Gravity weakens with distance, so higher orbits need less speed, and the path is longer, so each lap takes more time. The Moon, about 384,000 km away, takes roughly 27 days to orbit.",
      "## Delta-v: the space budget",
      "Spacecraft don't have unlimited fuel, so mission planners budget in delta-v: total change in velocity available. Counter-intuitively, to climb to a higher orbit you speed up, which raises the far side of your orbit. The classic efficient two-burn transfer is the Hohmann transfer."
    ],
    think: [
      "Why would an internet company choose thousands of close LEO satellites instead of a few GEO ones?",
      "What happens to all the old satellites and debris in LEO? Who should clean it up?",
      "Why is getting to orbit so much harder than reaching space briefly, the way tourist rockets do?"
    ],
    talk: "Astronauts on the Space Station aren't in zero gravity. At that height gravity is still about 90% as strong as on the ground. They float because they and the station are falling around the Earth together, moving sideways at roughly 28,000 km/h."
  },
  "aero-06": {
    hook: "Your phone finds you to within a few metres using radio signals from satellites 20,000 km away. Those signals are so weak that a cheap jammer can wipe them out — which is why ships and aircraft carry a second, completely different way of knowing where they are.",
    story: [
      "## How GPS works",
      "Each GPS satellite carries extremely precise atomic clocks and constantly broadcasts its position and the exact time. Your receiver notes when each signal arrives. Because radio travels at the speed of light, a time delay becomes a distance. With distances to at least four satellites, the receiver can solve for latitude, longitude, altitude, and the error in its own cheap clock.",
      "Einstein makes an appearance: the satellites' clocks run at a slightly different rate from clocks on the ground because of their speed and weaker gravity. Engineers correct for relativity, or GPS positions would drift by kilometres a day.",
      "GPS is the American system. Europe runs Galileo, Russia GLONASS, China BeiDou. Your phone likely uses several at once; together they're called GNSS.",
      "## Inertial navigation: dead reckoning, perfected",
      "An inertial navigation system (INS) uses accelerometers and gyroscopes to sense every push and turn from a known starting point, then calculates position continuously. It needs no outside signals, so it can't be jammed — which is why it's used in submarines, missiles and airliners.",
      "Its weakness is drift. Tiny measurement errors add up, so position slowly wanders. Better sensors drift less but cost far more.",
      "## Better together",
      "Modern systems blend both using a Kalman filter, an algorithm that weighs each source by how trustworthy it currently is. GPS keeps correcting INS drift; INS keeps you on track during GPS dropouts, tunnels, or deliberate jamming. GPS jamming and spoofing near conflict zones has become common, affecting civilian flights — making that backup more important than ever."
    ],
    think: [
      "How much of modern life (banking, phone networks, delivery) quietly depends on GPS timing as well as position?",
      "What would happen to your day if GPS went down for 24 hours?",
      "Where else does blending two imperfect sources give a better answer than either alone?"
    ],
    talk: "GPS only works because engineers correct for Einstein's relativity. The satellites' clocks tick at a slightly different rate than clocks on the ground. Without the correction, positions would drift by kilometres every day."
  },
  "cyber-01": {
    hook: "When people think of hacking, they picture stolen data. But a hospital whose systems are locked for a week, or a bank whose records are quietly altered, can be just as dangerous. Security protects three things, not one.",
    story: [
      "## The CIA triad",
      "Confidentiality: only the right people can see information. Breaches here are leaks — customer data, trade secrets, private messages. Integrity: information is accurate and hasn't been tampered with — a payment amount, a medical dose, a GPS coordinate. Availability: systems work when they're needed. Ransomware, outages and floods of junk traffic (denial-of-service attacks) target this.",
      "Different organisations weight them differently. A spy agency cares most about confidentiality. A stock exchange cares hugely about integrity and availability. A hospital needs all three, urgently.",
      "## Thinking like a risk manager",
      "Risk combines three things: a threat (who or what might cause harm — criminals, insiders, accidents), a vulnerability (a weakness they could use — unpatched software, a weak password) and the impact (how bad it would be). You can't remove all risk, but you can reduce any of the three: deter threats, fix weaknesses, or limit the damage with backups and segmentation.",
      "## Threat modelling",
      "Threat modelling is structured imagination. Draw the system: users, data, connections. Then ask, \"What could go wrong here?\" A popular checklist from Microsoft is STRIDE: Spoofing (pretending to be someone), Tampering, Repudiation (denying you did something), Information disclosure, Denial of service, Elevation of privilege. Rank what you find and fix the worst first.",
      "Doing this at design time is far cheaper than discovering problems after a breach. As security people like to say: defenders have to be right every time; attackers only have to be right once."
    ],
    think: [
      "For the systems you use most at work, which matters most: confidentiality, integrity or availability?",
      "What's the single most valuable piece of information you handle? Who would want it?",
      "If your work laptop was locked by ransomware tomorrow, what would you lose access to?"
    ],
    talk: "Security isn't just about keeping data secret. It protects three things: confidentiality (who can see it), integrity (whether it's been changed) and availability (whether it works when you need it). Ransomware hits all three at once."
  },
  "cyber-02": {
    hook: "In 2016, attackers sent a staffer on Hillary Clinton's campaign a fake Google security alert. One click on the link, and years of emails ended up public. No fancy hacking was needed — just a convincing message.",
    story: [
      "## Hacking people is easier than hacking computers",
      "Most breaches start with a human: a clicked link, a typed password on a fake site, a payment sent to a fraudster. Attackers know it's often easier to fool a busy person than to break modern encryption.",
      "## Spotting phishing",
      "Phishing messages pretend to be someone you trust — IT, a bank, a delivery company, your boss. The tell-tale signs: urgency (\"act within 24 hours\"), unusual requests (gift cards, new bank details), sender addresses that are slightly off, and links that don't go where they claim (on a phone, press and hold to preview). Spear phishing targets you specifically, using details from LinkedIn or social media, which makes it much more convincing.",
      "Business email compromise is a costly variant: a fake 'CEO' or 'supplier' asks finance to wire money urgently. The fix is boring and effective: confirm by calling a known number, never the one in the email.",
      "## Passwords: length and uniqueness",
      "When a website is breached, attackers try the leaked email-and-password pairs on hundreds of other sites. That's credential stuffing, and it works because people reuse passwords. A password manager solves this by generating and remembering a long, unique password for every site — you only remember one.",
      "## MFA: the biggest single upgrade",
      "Multi-factor authentication adds a second proof: something you have (a phone, a key) or are (a fingerprint). Microsoft has reported that MFA blocks the vast majority of automated account attacks. Text-message codes are better than nothing but can be phished or hijacked. Passkeys and hardware security keys are phishing-resistant, because they check they're talking to the real website before responding."
    ],
    think: [
      "How many of your accounts share a password? Which one would hurt most if it leaked?",
      "Would your finance team catch a convincing 'urgent wire' request from a senior leader?",
      "Why do you think people resist using password managers?"
    ],
    talk: "The biggest security upgrade most people can make takes five minutes: turn on multi-factor login for email and banking, and use passkeys where you can. Most account takeovers rely on a stolen password alone, and that stops them."
  },
  "cyber-03": {
    hook: "Every time you see a padlock in your browser, two kinds of maths are working together: one solves the problem of meeting a stranger safely, the other keeps the conversation fast.",
    story: [
      "## Symmetric: one shared key",
      "Symmetric encryption uses the same key to lock and unlock — like a house key you copy for a friend. It's very fast and used for nearly all bulk data. AES is the global standard. The problem: how do you get the key to someone safely in the first place, especially a website you've never visited?",
      "## Asymmetric: a padlock anyone can close",
      "Asymmetric encryption uses a pair of keys. The public key is like an open padlock you hand out freely; anyone can snap it shut on a box. Only your private key opens it. RSA and elliptic-curve cryptography are common examples. It solves the 'strangers' problem but is much slower.",
      "## How HTTPS combines them",
      "When you connect to a website, your browser and the server use asymmetric methods to agree on a fresh secret key, and the server proves its identity with a certificate signed by a trusted authority. Then they switch to fast symmetric encryption for the rest of the session. Best of both worlds.",
      "## Hashing: a fingerprint, not a lock",
      "A hash function turns any data into a fixed-length fingerprint. SHA-256 always outputs 256 bits, whether you feed it a word or a movie. Change one letter and the fingerprint changes completely. Crucially, you can't run it backwards. Websites should store a hash of your password, not the password: at login they hash what you typed and compare. Adding a random 'salt' per user stops attackers using pre-computed lookup tables.",
      "## Signatures",
      "Sign something with your private key and anyone can check it with your public key. That proves who sent it and that it wasn't altered. Software updates, banking messages and many legal documents rely on digital signatures."
    ],
    think: [
      "Why is it safe to publish a public key for the whole world to see?",
      "If a website emails you your old password when you click 'forgot password', what does that tell you about how they store it?",
      "Quantum computers threaten some asymmetric methods. Why might governments be collecting encrypted data today to read later?"
    ],
    talk: "If a website can email you your actual password when you click 'forgot password', it's storing your password badly. A properly built site keeps only a scrambled fingerprint (a hash) and can't recover the original even if it wanted to."
  },
  "cyber-04": {
    hook: "For decades, corporate security was a castle: a strong wall (the firewall) and everyone inside trusted. Then laptops left the building, data moved to the cloud, and attackers learned that once you're over the wall, you can wander freely.",
    story: [
      "## Addresses and doors",
      "Every device on a network has an IP address — like a street address. Each service on that device listens on a numbered port — like a door. Web traffic uses port 443 (HTTPS), remote admin often uses 22 (SSH), name lookups use 53 (DNS). Firewalls are the bouncers: rules that decide which traffic is allowed through which doors. The best default is 'deny everything, then allow only what's needed'.",
      "## Why the castle fails",
      "Attackers rarely smash the wall. They phish a password or buy a stolen VPN login, then walk in as a trusted user. In a flat network, they can move from machine to machine (lateral movement) until they reach the valuable systems. In the 2013 Target breach, attackers got in using credentials stolen from a heating and ventilation supplier and eventually reached the payment terminals, stealing data on about 40 million cards.",
      "## Zero trust",
      "Zero trust flips the assumption: being 'inside' earns no trust. Every request is checked: is this really the user (strong MFA)? Is the device healthy and managed? Is this access actually needed for their job right now? Access is granted narrowly and re-checked often.",
      "## Two supporting habits",
      "Least privilege: give people and systems only the access they need, and remove it when they don't. Segmentation: divide networks into zones so a breach in one area — say, the building's thermostats — can't reach another — say, payments. Neither is glamorous, but they turn a catastrophe into a contained incident."
    ],
    think: [
      "How much access do you have at work that you never use? What could an attacker do with it?",
      "Why might zero trust feel annoying to employees, and how would you sell it to them?",
      "What's the 'heating supplier' in your organisation — a third party with more access than it needs?"
    ],
    talk: "In the 2013 Target breach, attackers got in using login details stolen from the company's heating and ventilation supplier. From there they made their way to the payment terminals. Your security is only as strong as your least-watched supplier's access."
  },
  "cyber-05": {
    hook: "In 2017, Equifax lost personal data on about 147 million people. The hole the attackers used was publicly known, and a fix had been available for about two months. Nobody had applied it.",
    story: [
      "## Most attacks reuse old mistakes",
      "The OWASP Top 10, a widely used list of the most common serious web vulnerabilities, changes slowly over the years, because the same mistakes keep happening. Learn a handful and you'll understand most real-world breaches.",
      "## Injection: when data becomes commands",
      "If a website builds a database query by gluing user input into it, an attacker can type something that changes the query itself — for example, making a login check always return 'true'. That's SQL injection. The fix is parameterised queries: the input is always treated as data, never as part of the command.",
      "## Cross-site scripting (XSS)",
      "If a site displays what users type without cleaning it, an attacker can post a comment containing a script. Everyone who views the page runs that script in their browser, which can steal their session. The fix: escape output so it's shown as text, not run as code, and add a content security policy.",
      "## Broken access control",
      "The most common serious flaw: the site doesn't properly check whether you're allowed to see something. Change account/1001 to account/1002 in the address bar and see someone else's data. The server must check permissions on every request, not trust the browser.",
      "## Unpatched software",
      "Modern apps are built from hundreds of open-source libraries. When a flaw is found in one, attackers scan the internet for anyone who hasn't updated. Equifax's breach came from a known flaw in Apache Struts. Keeping an inventory of what you run, and patching quickly, prevents a huge share of incidents.",
      "Underneath all of this is defence in depth: layer protections so that one failure isn't a disaster."
    ],
    think: [
      "Why do you think organisations take months to apply security patches?",
      "If you were a manager with no technical background, what three questions would you ask your web team about security?",
      "Who in your organisation is responsible for knowing every piece of software you run?"
    ],
    talk: "The 2017 Equifax breach, which exposed data on about 147 million people, came through a software flaw that already had a free fix. Many big breaches aren't clever hacks. They're attacks on holes that nobody got around to patching."
  },
  "lead-01": {
    hook: "John Boyd was a US Air Force fighter pilot nicknamed 'Forty-Second Boyd' because he could beat any challenger in a mock dogfight in under 40 seconds. His secret wasn't flying skill. It was how fast he made sense of things.",
    story: [
      "## The loop",
      "Boyd described every decision as a cycle: Observe what's happening, Orient (make sense of it), Decide what to do, Act — and then observe the results and go again. Whoever cycles through this loop faster and more accurately gains the upper hand.",
      "## Orientation is the heart of it",
      "Most people think the loop is about speed of action. Boyd thought the most important step was Orient. It's where your experience, training, culture and assumptions filter what you observe. Two people can see the same facts and draw opposite conclusions because they're oriented differently. A team with a good shared picture of the situation can skip lengthy deliberation and act almost instinctively.",
      "## Getting inside the other side's loop",
      "If you can act before your competitor has finished making sense of your last move, they're always responding to a situation that no longer exists. They become confused, then reactive, then they freeze. That's 'getting inside their OODA loop'. It's why small start-ups that ship weekly can unsettle large incumbents that plan annually.",
      "## Beyond the cockpit",
      "Boyd's ideas shaped US military doctrine and later spread into business, sport and emergency response. The practical lessons: shorten the time between learning something and acting on it; keep checking whether your mental model still fits reality; and push decisions to people close to the action so the loop runs fast without waiting for headquarters.",
      "The danger is treating it as 'just be fast'. Speed with bad orientation means confidently heading the wrong way."
    ],
    think: [
      "How long is your team's loop — from noticing a problem to changing something? What slows it down?",
      "Which of your assumptions about your industry might be out of date (a weak 'Orient' step)?",
      "Who is 'inside your loop' — a competitor or colleague who seems to move before you do?"
    ],
    talk: "John Boyd, the pilot behind the OODA loop (observe, orient, decide, act), argued the most important step isn't acting fast. It's 'orient', how you make sense of what you see. Fast decisions built on a wrong picture just take you the wrong way faster."
  },
  "lead-02": {
    hook: "Prussian field marshal Helmuth von Moltke wrote, in effect, that no plan survives first contact with the enemy. His solution wasn't better plans. It was making sure everyone understood what the plan was for.",
    story: [
      "## Orders break; intent survives",
      "Detailed instructions fail the moment reality changes — a road is blocked, a client changes their mind, a system goes down. If people only know the steps, they freeze or follow a plan that no longer makes sense. If they know the purpose, they can improvise in the right direction.",
      "## Commander's intent",
      "Militaries that use mission command give orders with a clear statement of intent: why the mission matters and what the end state should look like. \"Seize the bridge so the convoy can cross by dawn\" lets a junior officer who finds the bridge destroyed think: the real goal is getting the convoy across — is there a ford upstream?",
      "## Trust and training",
      "Mission command only works with two ingredients. Leaders must trust their people enough to let them choose the method. And people must be trained and competent enough to use that freedom well. Without trust, leaders micromanage; without competence, freedom becomes chaos.",
      "## A good brief at work",
      "Translated to everyday work: situation (what's going on), task and purpose (what we need done and why), how this fits the bigger goal, constraints (budget, deadline, things not to do), and what 'done' looks like. Then step back. Check in, but don't dictate the how unless there's a good reason.",
      "The US Army, the UK and Canadian forces all teach versions of this. Many tech companies arrived at the same idea independently, calling it 'context, not control' — Netflix made the phrase famous."
    ],
    think: [
      "Think of the last task you delegated. Did you explain why, or only what?",
      "When has a plan you were following stopped making sense? What would have helped you adapt?",
      "Where do you micromanage, and is it a trust problem or a training problem?"
    ],
    talk: "The Prussian commander von Moltke's point that no plan survives first contact with the enemy led armies to 'mission command'. You tell people the goal and why it matters, not just the steps, so they can adapt when the plan falls apart. It works just as well for delegating at the office."
  },
  "lead-03": {
    hook: "Psychologists Daniel Kahneman and Amos Tversky showed that even experts make predictable thinking errors. Kahneman later won a Nobel Prize in economics for it — a psychologist who never took an economics course.",
    story: [
      "## Two speeds of thinking",
      "Kahneman described two modes. System 1 is fast, automatic and intuitive — it recognises faces and finishes sentences. System 2 is slow, deliberate and effortful — it does long division and weighs options. System 1 runs the show most of the time, and it relies on shortcuts. Those shortcuts usually work, but they fail in predictable ways called cognitive biases.",
      "## Five worth knowing",
      "Confirmation bias: we notice and believe evidence that supports what we already think. Fix: deliberately seek the strongest opposing view.",
      "Anchoring: the first number we hear drags our estimates toward it, even when it's irrelevant. In one famous experiment, a spun wheel of fortune affected people's guesses about African countries in the United Nations. Fix: form your own estimate before hearing others.",
      "Sunk cost fallacy: we keep going because of what we've already spent. The money and time are gone either way. Fix: ask, \"Knowing what I know now, would I start this today?\"",
      "Overconfidence: we think we know more and predict better than we do. Fix: give ranges, not single numbers, and track how often you're right.",
      "Groupthink: groups go along with each other to keep harmony. Fix: have the most senior person speak last, and assign someone to argue the other side.",
      "## The humbling part",
      "Knowing about biases doesn't make you immune; studies suggest smart people are just better at rationalising. The reliable fixes are processes — checklists, pre-mortems (imagine the project failed and ask why), and diverse teams — rather than willpower."
    ],
    think: [
      "Which project or commitment are you continuing mainly because of what you've already invested?",
      "In your last big meeting, who spoke first — and did it anchor the rest?",
      "What's one belief you hold strongly? What's the best argument against it?"
    ],
    talk: "Try a 'pre-mortem' before your next project kicks off. Ask everyone to imagine it's a year later and the project has failed, then write down why. Psychologist Gary Klein showed it brings out concerns people would otherwise keep to themselves."
  },
  "lead-04": {
    hook: "Professional poker player Annie Duke calls it 'resulting': judging a decision by how it turned out. A driver who gets home safely after drinking didn't make a good decision. They got lucky.",
    story: [
      "## Separate the decision from the outcome",
      "In a world with luck, good decisions sometimes turn out badly and bad decisions sometimes work. If you judge only by outcomes, you'll learn the wrong lessons — copying lucky gambles and abandoning sound strategies after one bad break. Instead, ask: given what I knew, and the time I had, was the reasoning sound?",
      "## Expected value",
      "Expected value is the average outcome if you could make the same decision many times: multiply each possible result by its probability and add them up. A 30% chance of $100 is worth $30 on average. It's a clear way to compare options with different risks.",
      "## But don't risk ruin",
      "Expected value isn't everything. A bet that's great on average can still wipe you out. If one bad outcome means bankruptcy or losing your job, avoid it even if the average looks good — you can't keep playing if you're out of the game. Investors call this avoiding the 'risk of ruin'.",
      "## One-way and two-way doors",
      "Jeff Bezos popularised a useful split. Two-way doors are reversible decisions: try a new meeting format, test a feature with a few customers. Make them fast; if they're wrong, walk back through. One-way doors are hard to reverse: an acquisition, a major hire, signing a long lease. Slow down, gather more information, involve more people.",
      "## How much information is enough?",
      "A common rule of thumb, also associated with Bezos and some military schools: decide when you have about 70% of the information you wish you had. Waiting for 90% usually means you're too slow — and on two-way doors, being wrong is cheap to fix."
    ],
    think: [
      "Think of a decision that turned out well. Was it actually a good decision, or were you lucky?",
      "What one-way door are you facing right now? What would you need to know to walk through it?",
      "Where at work do people treat two-way doors like one-way doors, slowing everything down?"
    ],
    talk: "Poker player Annie Duke warns against 'resulting', judging a decision only by how it turned out. Good decisions can end badly and bad ones can work out by luck. Review how you made the decision, not just the result."
  },
  "lead-05": {
    hook: "In 1896, Italian economist Vilfredo Pareto noticed that about 80% of Italy's land was owned by about 20% of the people. The same lopsided pattern turns up almost everywhere you look.",
    story: [
      "## The vital few",
      "The Pareto principle says a small share of causes drive most results. A few customers bring in most revenue. A few bugs cause most crashes. A few habits drive most of your health. The exact split varies — 80/20, 90/10, 70/30 — but the lesson is the imbalance: not all effort is equal. Find the vital few and focus there.",
      "This app is built on that idea: each lesson aims for the 20% of a subject that gets you 80% of the way to useful understanding.",
      "## Urgent versus important",
      "US President Dwight Eisenhower is credited with the line: \"What is important is seldom urgent, and what is urgent is seldom important.\" The Eisenhower matrix sorts tasks into four boxes. Urgent and important: do it now (a crisis, a hard deadline). Important but not urgent: schedule it (planning, learning, relationships, prevention). Urgent but not important: delegate it (many interruptions and requests). Neither: drop it.",
      "## Protect box two",
      "The important-but-not-urgent box is where long-term value lives, and it's the first thing squeezed out by a busy week. People who make real progress block time for it like a meeting they can't move.",
      "## Fewer things, finished",
      "Every 'yes' is a 'no' to something else. Limiting how many things you work on at once — a work-in-progress limit — feels slower but usually finishes more, because you stop paying the cost of switching between tasks. A simple daily habit: decide the one task that would make today a success, and do it first, before email."
    ],
    think: [
      "Which 20% of your work produces 80% of the value people actually notice?",
      "What important-but-not-urgent task have you been postponing for months?",
      "What could you drop entirely this week without anyone noticing?"
    ],
    talk: "Eisenhower is credited with saying that what's important is rarely urgent, and what's urgent is rarely important. Most busy weeks are spent on the urgent stuff, so the work that matters long-term needs time blocked off for it."
  },
  "lead-06": {
    hook: "Elite teams — military units, surgical teams, Formula 1 pit crews — share one habit. After almost every mission, they sit down for a short, blame-free review. Over time, it compounds into excellence.",
    story: [
      "## Four questions",
      "The After Action Review, developed by the US Army in the 1970s and widely adopted since, rests on four simple questions. What was supposed to happen? What actually happened? Why was there a difference? What will we sustain or improve next time?",
      "The first question often reveals the problem on its own: people discover they never shared the same plan. The second builds a factual timeline before anyone offers opinions. The third digs to root causes — keep asking 'why' until you reach something you can change. The fourth turns lessons into specific actions with owners.",
      "## No rank in the room",
      "AARs only work if people can admit mistakes without fear. In the Army version, rank is set aside during the review. Harvard professor Amy Edmondson calls this psychological safety — the shared belief that it's safe to speak up. Her research found that better hospital teams reported more errors, not fewer — because they felt safe enough to talk about them and learn.",
      "## Short and often beats long and rare",
      "An AAR doesn't need a big report. Fifteen to thirty minutes right after an event, while memories are fresh, is usually enough. Do them after successes too: wins often contain luck or near-misses that won't go so well next time.",
      "## Close the loop",
      "The most common failure is generating lessons and never acting on them. Track the 'improve' actions, and start the next similar project by reviewing what you learned last time."
    ],
    think: [
      "When did your team last review a project that went well? What did you learn?",
      "Do people on your team feel safe saying 'I made a mistake'? How do you know?",
      "Which recurring problem at work might an honest 'why was there a difference?' finally expose?"
    ],
    talk: "Harvard's Amy Edmondson found that the best hospital teams reported more mistakes, not fewer. They felt safe enough to talk about errors and learn from them. Teams that never admit mistakes usually aren't making fewer. They're just hiding them."
  }
});
