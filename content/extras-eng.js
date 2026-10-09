/* Deeper material for the original Engineering lessons. */
WP.enrich({
  "eng-01": {
    hook: "In 1999, NASA lost a $125 million Mars probe. Nothing broke. Every part worked exactly as designed. Two teams had simply used different units, and nobody checked where their work met.",
    story: [
      "## Big projects fail at the edges",
      "Building a single component is hard. Building a system — an aircraft, a hospital IT platform, a subway line — is harder in a different way. The parts are made by different teams, often different companies, each doing good work. Systems engineering is the discipline that makes sure all that good work adds up to something that actually does what the customer needs.",
      "## Start with the need, written so it can be tested",
      "Everything flows from requirements: clear statements of what the system must do. \"The train shall stop within 200 metres from 80 km/h on a wet track\" is a good requirement — specific and testable. \"The train shall have good brakes\" is useless, because nobody can prove it's met. Good requirements say what is needed, not how to build it, so designers stay free to find better solutions.",
      "## The V-model",
      "Picture a big letter V. Down the left side, you break the problem down: customer needs, system design, then detailed designs for each part. At the bottom, you build. Up the right side, you test in reverse order: each part on its own, then parts joined together, then the whole system, then the customer's acceptance. Each test on the right checks the matching design on the left.",
      "Two words matter here. Verification asks: did we build it right — does it meet the spec? Validation asks: did we build the right thing — does it solve the real problem? You can pass verification and still fail validation if the spec itself was wrong.",
      "## Watch the joins",
      "The Mars Climate Orbiter failed because one team's software reported thrust in pound-force seconds while the navigation team assumed newton-seconds. Systems engineers obsess over interfaces for exactly this reason, writing Interface Control Documents that pin down every connection, unit and signal."
    ],
    think: [
      "Think of a project at work that went wrong. Did it fail inside a team, or at the hand-off between teams?",
      "Write one requirement for something you want (a new phone, an apartment) that is genuinely testable.",
      "Where have you seen something 'verified' that still failed 'validation'?"
    ],
    talk: "NASA lost a $125 million Mars probe in 1999 because one team worked in imperial units and the other in metric. Every part worked perfectly. The failure was at the hand-off, which is where most big projects really go wrong."
  },
  "eng-02": {
    hook: "Why does a steel guitar string ring true while a rubber band goes 'thwump'? Why is a skyscraper allowed to sway a metre in the wind? It all comes down to how much a material stretches when you pull on it.",
    story: [
      "## Stress: how hard the material is working",
      "Hang a 10 kg weight from a thick rope and from a thin thread. The load is the same, but the thread is in far more danger. Engineers capture this with stress: the force divided by the area carrying it. Same force, smaller area, higher stress. It's measured in pascals; for metals we usually talk in megapascals (MPa). A useful shortcut: 1 MPa is one newton on each square millimetre.",
      "## Strain: how much it stretches",
      "Strain is how much a material lengthens compared with its original length. Stretch a 1-metre bar by 1 millimetre and the strain is 0.001, or 0.1%. Strain has no units — it's a ratio.",
      "## Stiffness: the link between the two",
      "For most materials, at modest loads, stress and strain are proportional: pull twice as hard, it stretches twice as far, and it springs back when you let go. That's Hooke's law. The ratio is Young's modulus, which measures stiffness. Steel is about 200 GPa, aluminium about 70 GPa, wood roughly 10 GPa along the grain, and rubber a tiny fraction of one. That's why aircraft designers have to make aluminium parts thicker or deeper than steel ones to get the same stiffness — but aluminium is about a third the weight, so it often wins.",
      "## Past the limit",
      "Push beyond the yield strength and the material no longer springs back: it bends permanently, like a paperclip. Keep going to the ultimate strength and it starts to fail. Engineers design to stay comfortably in the springy, elastic zone during normal use.",
      "Stiff and strong are different things. Glass is very stiff but shatters. A nylon rope is strong but stretchy. Good design picks the right combination for the job."
    ],
    think: [
      "Why might a bridge designer care more about stiffness (how much it bends) than strength (when it breaks)?",
      "Around you right now, which objects are stiff but brittle, and which are flexible but tough?",
      "Why do you think tall buildings are designed to sway rather than stay perfectly rigid?"
    ],
    talk: "'Stiff' and 'strong' aren't the same thing in engineering. Glass is very stiff but shatters, while a climbing rope is very strong but stretchy. Mixing the two up is behind a lot of bad design choices."
  },
  "eng-03": {
    hook: "In 1954 two de Havilland Comets — the world's first jet airliners — broke apart in mid-air within months of each other. The cause was tiny cracks, created by the cabin being pressurised over and over.",
    story: [
      "## Why engineers build in a margin",
      "Engineers never design a part to only just survive the expected load. Real loads vary, materials have flaws, factories aren't perfect, and calculations simplify reality. So they add a margin called the factor of safety: how many times stronger the part is than it needs to be. A factor of 2 means it can take twice the expected load.",
      "The right factor depends on the cost of being too heavy versus the cost of failure. Aircraft run tight margins (around 1.5 on extreme loads) because every kilo costs fuel, and they make up for it with intense testing and inspection. Lifting cranes and elevators use much larger margins because they're inspected less often and failure is catastrophic.",
      "## The ways things break",
      "Overload is the obvious one: too much force at once, causing bending (in ductile metals) or snapping (in brittle materials like cast iron or glass).",
      "Fatigue is the sneaky one. Bend a paperclip back and forth and it snaps, even though one bend wouldn't hurt it. Each load cycle grows microscopic cracks a tiny bit until the part suddenly fails. The Comet's cabin expanded and contracted with every flight, and cracks grew from the corners of openings in the fuselage, where stress was concentrated. That's one reason aircraft windows have rounded corners today.",
      "Buckling happens when slender parts are squeezed: a drinking straw collapses sideways long before the plastic itself is crushed. Creep is slow stretching under constant load at high temperature, a major concern in jet engines and power plants. Corrosion quietly thins metal over years.",
      "A big safety factor doesn't protect against fatigue, buckling or corrosion on its own. Each failure mode needs its own check."
    ],
    think: [
      "Why might an aircraft use a smaller safety factor than a playground swing?",
      "What everyday objects fail by fatigue (think hinges, phone cables, shoe soles)?",
      "If you can't see fatigue cracks easily, how would you design an inspection programme?"
    ],
    talk: "Aircraft windows have rounded corners because of the de Havilland Comet. In the 1950s, cracks grew from the sharp corners of openings in its cabin, and planes broke apart in mid-air. Sharp corners concentrate stress, so a tiny crack has an easy place to start."
  },
  "eng-04": {
    hook: "Your home thermostat, a car's cruise control, an aircraft autopilot and the system keeping a rocket upright all run on the same simple idea: measure, compare, correct, repeat.",
    story: [
      "## Feedback in one sentence",
      "A control system checks where it is, compares that with where it wants to be, and acts to close the gap. The target is the setpoint. The gap is the error. Keep measuring and correcting, and the system holds steady even when the world pushes on it: a hill, a draft, a gust of wind.",
      "Open-loop control skips the measuring. A toaster runs for a fixed time whatever colour the bread becomes. It's cheap, but can't react to surprises. Closed-loop (feedback) control measures and corrects, so it copes with disturbances.",
      "## PID: three ways of reacting",
      "Most industrial controllers are PID controllers, combining three reactions to the error.",
      "Proportional: push in proportion to the error. Far from target, push hard; close, push gently. Simple and fast, but often settles slightly short of the target.",
      "Integral: keep a running total of past error. If the system keeps sitting a bit short, the total grows and adds extra push until the gap disappears. Too much integral makes the system overshoot and wobble.",
      "Derivative: look at how fast the error is changing and ease off if you're approaching quickly. It acts like a shock absorber, preventing overshoot, but noisy sensors can make it twitchy.",
      "## Tuning is a trade-off",
      "Turn the gains up and the system reacts faster but risks overshoot and oscillation. Turn them down and it's calm but sluggish. Tuning a PID loop is the art of finding the sweet spot — and it's the same trade-off managers face when they react to monthly numbers."
    ],
    think: [
      "Where in your life do you use feedback without thinking (steering, adjusting the shower temperature)?",
      "A shower that swings between too hot and too cold is a badly tuned control loop. Which PID term is overreacting?",
      "How does 'overreacting to the latest numbers' in business resemble a controller with too much gain?"
    ],
    talk: "A shower that keeps swinging between too hot and too cold is a control system with the gain set too high. You overcorrect because the water takes a few seconds to reach you. Engineers tune autopilots and factory machines to avoid exactly that."
  },
  "eng-05": {
    hook: "A typical petrol car turns only about a third of its fuel's energy into motion. The rest heats the air. That isn't sloppy engineering; it's a law of physics.",
    story: [
      "## Law one: you can't win",
      "Energy is never created or destroyed — only converted from one form to another. Chemical energy in fuel becomes heat, which becomes motion, which becomes heat again in the brakes. Any machine that claims to produce more energy than it takes in is impossible. That's the first law of thermodynamics.",
      "## Law two: you can't break even",
      "The second law says that whenever you convert heat into useful work, some heat must be dumped somewhere colder. Heat naturally flows from hot to cold, and you can only extract work along the way, like a water wheel taking energy from water flowing downhill. No engine can turn 100% of its heat into work.",
      "The theoretical best is set by the temperatures involved: maximum efficiency = 1 − (cold temperature ÷ hot temperature), using kelvin (°C + 273). Hotter combustion and colder exhaust allow higher efficiency. That's why power stations chase ever-higher steam temperatures, and why jet engines need exotic, heat-resistant materials.",
      "## Real numbers",
      "Car engines: roughly 25–40% efficient. Modern combined-cycle gas power plants: around 60%. Big electric motors: often over 90%, because they don't go through heat at all — which is a big part of why electric cars use energy so much more efficiently.",
      "## Power versus energy",
      "Energy is the amount; power is the rate. A kettle rated 2 kW uses energy at 2 kilowatts. Run it for half an hour and you've used 1 kWh — the unit on your electricity bill."
    ],
    think: [
      "If electric motors are over 90% efficient, why aren't electric cars automatically 'clean'? Where does the electricity come from?",
      "Where does the 'lost' energy from your car or laptop actually go?",
      "Why do you think heat pumps (which move heat rather than make it) can deliver more heat than the electricity they use?"
    ],
    talk: "Most of the fuel a petrol car burns ends up heating the air, not moving the car. Typical engines turn only about 25–40% of the fuel's energy into motion, and that limit comes from the laws of physics, not bad engineering."
  },
  "eng-06": {
    hook: "Two pumps, each 90% reliable. Connect them one way and your system works 81% of the time. Connect them the other way and it works 99% of the time. Same parts — very different outcome.",
    story: [
      "## Reliability is probability",
      "Reliability is the chance something works when you need it, over a given time. For repairable systems, engineers track MTBF (mean time between failures — how long it typically runs) and MTTR (mean time to repair — how long it's typically down). Availability, the share of time it's working, is MTBF ÷ (MTBF + MTTR). Notice that fixing things faster improves availability just as much as making them fail less often.",
      "## Chains and spares",
      "When parts are in series — each one must work for the system to work — reliabilities multiply. Ten parts at 99% each gives about 90% overall. Long chains get fragile fast.",
      "When parts are in parallel — any one can do the job — the system only fails if all of them fail. Two 90% pumps in parallel: the chance both fail is 10% × 10% = 1%, so the system is 99% reliable. That's redundancy. Airliners have multiple hydraulic systems; data centres have backup power and duplicate servers.",
      "## Finding failures before they find you",
      "FMEA (Failure Mode and Effects Analysis) is a structured brainstorm: for each part, how could it fail, what would happen, how likely is it, and would we notice? Each is scored, and the worst risks get fixed first.",
      "## The redundancy trap",
      "Redundancy only helps if failures are independent. Two backup servers on the same power supply, or two engines fed from the same contaminated fuel tank, can fail together. This is common-cause failure, and it's why good designers separate backups physically and use different suppliers or designs where it matters."
    ],
    think: [
      "Where in your team or workplace is there a single point of failure — one person, one system, one supplier?",
      "Why might a 'backup' that's never tested be worse than no backup at all?",
      "Is it better to invest in fewer failures or faster recovery for the systems you rely on?"
    ],
    talk: "Two 90%-reliable pumps chained together, where both must work, only work 81% of the time. Put them side by side, where either one will do, and they work 99% of the time. Redundancy is powerful, but only if the backups can't all fail for the same reason."
  },
  "eng-07": {
    hook: "Put your thumb over a garden hose and the water shoots further. Open a window in a moving car and papers fly out. Both are fluid mechanics, and the same rules shape pipelines, ventilation and wings.",
    story: [
      "## What goes in must come out",
      "In a pipe full of water, the amount flowing past every point each second has to be the same — water can't pile up or vanish. So if the pipe narrows, the water must speed up. Halve the area, double the speed. That's the continuity equation, and it's exactly what your thumb does to a hose.",
      "## Faster flow, lower pressure",
      "Daniel Bernoulli worked out in the 1700s that, along a smooth flow, a fluid's energy is shared between pressure, speed and height. If speed goes up, pressure must go down. A venturi (a narrow section in a pipe) uses this to measure flow: the pressure drop tells you how fast the fluid is moving. Old carburettors used the same effect to draw fuel into the air flowing into an engine.",
      "## Smooth or chaotic?",
      "Watch smoke rise from a candle: it starts as a smooth thread, then breaks into swirls. Smooth, layered flow is laminar; swirling, mixing flow is turbulent. The Reynolds number predicts which you'll get by comparing the fluid's momentum to its stickiness (viscosity). Fast, large, thin fluids → high Reynolds number → turbulence. Slow, small, thick fluids (honey) → laminar. In ordinary pipes, flow is usually laminar below about 2,300 and turbulent above about 4,000.",
      "## Drag rises fast",
      "Air resistance grows roughly with the square of speed. Go from 100 to 120 km/h and drag rises about 44%. That's why fuel consumption climbs so steeply on the highway and why cyclists tuck in."
    ],
    think: [
      "Why do you think highway fuel use rises faster than speed?",
      "Where in your home could you spot laminar versus turbulent flow (taps, smoke, steam)?",
      "Why might engineers deliberately want turbulence in some situations, like mixing or heat exchange?"
    ],
    talk: "Air resistance grows with the square of your speed. Going from 100 to 120 km/h raises drag by about 44%, which is why your fuel economy drops so sharply when you speed up on the highway."
  }
});
