/* Topic: Engineering */
WP.addTopic({
  id: "eng",
  name: "Engineering",
  code: "ENG",
  blurb: "Core principles every engineer uses: systems, structures, control, energy and reliability.",
  lessons: [
    {
      id: "eng-01",
      title: "Systems Engineering and the V-Model",
      level: "Foundation",
      minutes: 6,
      bluf: "Systems engineering makes sure a complex product does what the customer actually needs. Define requirements first, break the system down, build the parts, then verify and validate back up — the V-model.",
      points: [
        { h: "Start from the need", t: "A requirement is a clear, testable statement of what the system must do: \"The aircraft shall have a range of at least 2,000 km.\" Good requirements are specific, measurable and verifiable." },
        { h: "The V-model", t: "The left side goes down: requirements → system design → detailed design. The bottom is build. The right side goes up: unit tests → integration → system test → acceptance. Each level on the right checks the matching level on the left." },
        { h: "Verification vs validation", t: "Verification: did we build the system right (does it meet the spec)? Validation: did we build the right system (does it meet the user's real need)?" },
        { h: "Interfaces are where things break", t: "Most integration problems sit at the boundaries between subsystems. Interface Control Documents (ICDs) define exactly how parts connect." },
        { h: "Trade studies", t: "When there are several design options, score them against weighted criteria (cost, weight, risk, performance) to make a defensible choice." }
      ],
      example: "NASA's Mars Climate Orbiter was lost in 1999 because one team's software produced results in imperial units while another expected metric. Every part 'worked'; the interface did not.",
      pitfall: "Writing requirements that describe a solution instead of a need. \"Use a 50-litre fuel tank\" locks in a design; \"Operate for 6 hours without refuelling\" leaves room for better solutions.",
      terms: [
        ["Requirement", "A clear, testable statement of what a system must do or be."],
        ["V-model", "A development model linking each design stage on the left to a test stage on the right."],
        ["Verification", "Checking the system meets its specification — 'built it right'."],
        ["Validation", "Checking the system meets the user's real need — 'built the right thing'."],
        ["Trade study", "A structured comparison of design options against weighted criteria."]
      ],
      mcq: [
        { q: "\"Did we build the right system?\" describes…", a: ["Validation", "Verification", "Integration", "Manufacturing"], c: 0, why: "Validation checks against the user's real need." },
        { q: "Which is the best-written requirement?", a: ["The drone shall fly for at least 40 minutes at 1 kg payload", "The drone should be good", "The drone shall be fast", "Use lithium batteries"], c: 0, why: "It is specific, measurable and does not dictate a solution." },
        { q: "On the V-model, system tests on the right verify…", a: ["The system design on the left", "Only the paint finish", "The marketing plan", "Nothing on the left"], c: 0, why: "Each right-side test level matches a left-side design level." },
        { q: "The Mars Climate Orbiter loss is a classic example of…", a: ["An interface failure", "A material fatigue failure", "A software virus", "A fuel leak"], c: 0, why: "Mismatched units at a team interface doomed the mission." }
      ],
      tf: [
        { s: "Verification and validation mean the same thing.", v: false, why: "Verification = to spec; validation = meets the need." },
        { s: "Good requirements should be testable.", v: true, why: "If you can't test it, you can't prove it's met." },
        { s: "Most integration problems occur at interfaces.", v: true, why: "Boundaries between subsystems are where assumptions clash." },
        { s: "A trade study picks a design by personal preference.", v: false, why: "It uses weighted, documented criteria." }
      ]
    },
    {
      id: "eng-02",
      title: "Stress, Strain and Stiffness",
      level: "Foundation",
      minutes: 6,
      bluf: "Stress is how hard a material is being loaded; strain is how much it stretches. In the elastic range they are proportional, and the ratio — Young's modulus — tells you how stiff the material is.",
      points: [
        { h: "Stress = Force ÷ Area", t: "σ = F / A, measured in pascals (Pa) or megapascals (MPa). The same force on a thinner rod produces more stress." },
        { h: "Strain = change in length ÷ original length", t: "ε = ΔL / L. It has no units. A strain of 0.001 means 0.1% stretch." },
        { h: "Hooke's law and Young's modulus", t: "In the elastic region, σ = E × ε. E (Young's modulus) measures stiffness: steel ≈ 200 GPa, aluminium ≈ 70 GPa, so steel stretches about one third as much under the same stress." },
        { h: "Elastic vs plastic", t: "Below the yield strength, the material springs back. Beyond it, it deforms permanently. Ultimate strength is the maximum stress before it starts to fail." },
        { h: "Stiff is not the same as strong", t: "Stiffness (E) is resistance to bending or stretching. Strength is the stress it can take before yielding or breaking. Glass is stiff but brittle; rubber is flexible but tough." }
      ],
      example: "A 10 kN load hangs from a steel rod with a 100 mm² cross-section. Stress = 10,000 N / 100 mm² = 100 MPa. Strain = 100 MPa / 200,000 MPa = 0.0005, so a 2 m rod stretches about 1 mm.",
      pitfall: "Mixing units. 1 MPa = 1 N/mm² and 1 GPa = 1,000 MPa. Keep units consistent or results will be out by factors of 1,000.",
      terms: [
        ["Stress (σ)", "Force per unit area inside a material: σ = F / A."],
        ["Strain (ε)", "Relative deformation: change in length divided by original length."],
        ["Young's modulus (E)", "Stiffness of a material: stress divided by strain in the elastic region."],
        ["Yield strength", "The stress at which a material starts to deform permanently."],
        ["Ultimate strength", "The maximum stress a material can withstand before it begins to fail."]
      ],
      mcq: [
        { q: "A 2,000 N force acts on a 20 mm² area. What is the stress?", a: ["100 MPa", "40,000 MPa", "10 MPa", "0.01 MPa"], c: 0, why: "2,000 N / 20 mm² = 100 N/mm² = 100 MPa." },
        { q: "Which material is stiffer?", a: ["Steel (E ≈ 200 GPa)", "Aluminium (E ≈ 70 GPa)", "They are equal", "Cannot be compared"], c: 0, why: "Higher E means stiffer." },
        { q: "Loading beyond the yield strength causes…", a: ["Permanent deformation", "Full spring-back", "Lower stiffness forever", "No change"], c: 0, why: "Past yield, the material deforms plastically." },
        { q: "What are the units of strain?", a: ["None — it is a ratio", "Pascals", "Newtons", "Metres"], c: 0, why: "It is length divided by length." }
      ],
      tf: [
        { s: "Halving the cross-sectional area doubles the stress for the same load.", v: true, why: "σ = F / A." },
        { s: "A stiff material is always a strong material.", v: false, why: "Glass is stiff but breaks easily." },
        { s: "Hooke's law applies in the elastic region.", v: true, why: "Stress is proportional to strain only before yield." },
        { s: "1 GPa equals 1,000 MPa.", v: true, why: "Giga is 1,000 times mega." }
      ]
    },
    {
      id: "eng-03",
      title: "Factor of Safety and Failure Modes",
      level: "Foundation",
      minutes: 6,
      bluf: "Engineers design for more than the expected load because loads, materials and models are uncertain. The factor of safety sets that margin. Parts fail in a few common ways — know them and you know what to check.",
      points: [
        { h: "Factor of safety (FoS)", t: "FoS = failure load ÷ actual load. An FoS of 2 means the part can take twice the expected load. Aerospace often uses ~1.5 on ultimate loads to save weight; lifting equipment and buildings often use higher margins." },
        { h: "Yield and fracture", t: "Overload causes permanent bending (ductile materials) or sudden breaking (brittle materials)." },
        { h: "Fatigue", t: "Repeated loading — even well below yield strength — grows tiny cracks until the part fails. Many in-service mechanical failures are fatigue." },
        { h: "Buckling", t: "Slender parts under compression can suddenly bow sideways at loads far below their crushing strength. Length and shape matter more than material strength." },
        { h: "Creep and corrosion", t: "Creep: slow deformation under constant load at high temperature (turbine blades). Corrosion: chemical attack that thins material over time." }
      ],
      example: "The 1954 de Havilland Comet crashes were traced to fatigue cracks growing from corners of square-ish window and hatch openings, where stress concentrated. That is a key reason aircraft windows have rounded corners.",
      pitfall: "Thinking a high factor of safety alone prevents failure. FoS covers static overload; fatigue, buckling and corrosion each need their own checks.",
      terms: [
        ["Factor of safety", "Ratio of a part's failure load to its expected working load."],
        ["Fatigue", "Failure from repeated cyclic loading, often well below yield strength."],
        ["Buckling", "Sudden sideways collapse of a slender member under compression."],
        ["Creep", "Slow, permanent deformation under sustained load, usually at high temperature."],
        ["Stress concentration", "A local rise in stress at holes, notches or sharp corners."]
      ],
      mcq: [
        { q: "A bracket fails at 9 kN and carries 3 kN in service. FoS = ?", a: ["3", "6", "0.33", "27"], c: 0, why: "9 ÷ 3 = 3." },
        { q: "A paperclip bent back and forth until it snaps shows…", a: ["Fatigue", "Creep", "Buckling", "Corrosion"], c: 0, why: "Repeated cycles grow cracks until fracture." },
        { q: "A long thin column collapses sideways under compression. This is…", a: ["Buckling", "Fatigue", "Creep", "Yield in tension"], c: 0, why: "Slender members in compression buckle." },
        { q: "Why do aircraft windows have rounded corners?", a: ["To reduce stress concentrations", "To look modern", "To save glass", "To improve the view"], c: 0, why: "Sharp corners concentrate stress and start fatigue cracks." }
      ],
      tf: [
        { s: "Fatigue failure can occur below the yield strength.", v: true, why: "Cyclic loading grows cracks at relatively low stresses." },
        { s: "Buckling depends heavily on a member's length and shape.", v: true, why: "Slenderness drives buckling load." },
        { s: "Creep matters most at very low temperatures.", v: false, why: "Creep is a high-temperature concern." },
        { s: "A factor of safety of 1 gives a comfortable margin.", v: false, why: "FoS of 1 means zero margin." }
      ]
    },
    {
      id: "eng-04",
      title: "Control Systems and PID",
      level: "Intermediate",
      minutes: 7,
      bluf: "A control system measures what is happening, compares it with what you want, and adjusts to close the gap. Feedback is the core idea; the PID controller is the workhorse that makes it happen in most machines.",
      points: [
        { h: "Open vs closed loop", t: "Open loop acts without checking results (a toaster on a timer). Closed loop measures the output and corrects (a thermostat). Closed loop handles disturbances." },
        { h: "Setpoint, error, output", t: "Setpoint = the target. Error = setpoint − measured value. The controller turns error into a command for the actuator (motor, valve, control surface)." },
        { h: "P — Proportional", t: "Push harder the bigger the error. Fast response, but on its own often leaves a small steady error." },
        { h: "I — Integral", t: "Adds up error over time to remove that lingering steady error. Too much causes overshoot and oscillation." },
        { h: "D — Derivative", t: "Reacts to how fast the error is changing, damping the motion like a shock absorber. Sensitive to noisy sensors." }
      ],
      example: "A car's cruise control: setpoint 100 km/h. Going uphill, speed drops (error grows). P adds throttle, I removes the last 1–2 km/h shortfall, D smooths the response so speed doesn't surge past 100.",
      pitfall: "Cranking up the gains for speed. High gains make systems fast but can cause overshoot, oscillation, or instability. Tune gradually.",
      terms: [
        ["Feedback", "Using a measurement of the output to adjust the input."],
        ["Setpoint", "The desired target value a control system aims for."],
        ["Error", "The difference between the setpoint and the measured value."],
        ["PID controller", "A controller combining Proportional, Integral and Derivative actions on the error."],
        ["Overshoot", "When the output goes past the setpoint before settling."]
      ],
      mcq: [
        { q: "Which is a closed-loop system?", a: ["A home thermostat", "A kitchen timer", "A light switch", "A garden sprinkler on a timer"], c: 0, why: "It measures temperature and corrects." },
        { q: "Which PID term removes steady-state error?", a: ["Integral", "Proportional", "Derivative", "None"], c: 0, why: "Integral accumulates error until it is eliminated." },
        { q: "Which PID term acts like damping?", a: ["Derivative", "Integral", "Proportional", "Setpoint"], c: 0, why: "It responds to the rate of change of error." },
        { q: "Setpoint 50 °C, measured 47 °C. The error is…", a: ["3 °C", "−3 °C", "97 °C", "0 °C"], c: 0, why: "Error = setpoint − measured = 50 − 47." }
      ],
      tf: [
        { s: "Open-loop systems automatically correct for disturbances.", v: false, why: "They don't measure the output." },
        { s: "Too much integral gain can cause oscillation.", v: true, why: "Accumulated error can overdrive the system." },
        { s: "Derivative action is sensitive to sensor noise.", v: true, why: "Noise creates rapid apparent changes." },
        { s: "An aircraft autopilot is a feedback control system.", v: true, why: "It measures attitude and corrects continuously." }
      ]
    },
    {
      id: "eng-05",
      title: "Energy and Thermodynamics",
      level: "Foundation",
      minutes: 6,
      bluf: "Energy is never created or destroyed — only converted. But every conversion loses some energy as heat that can't be fully used. Those two laws set the limits on every engine, power plant and battery.",
      points: [
        { h: "First law: energy is conserved", t: "Energy in = useful work out + losses. You can't get more out than you put in." },
        { h: "Second law: entropy rises", t: "Heat flows naturally from hot to cold, and no heat engine can turn all heat into work. Some is always rejected." },
        { h: "Efficiency", t: "Efficiency = useful output ÷ input. Car petrol engines: roughly 25–40%. Large electric motors: often above 90%." },
        { h: "Carnot limit", t: "The maximum efficiency of any heat engine is 1 − T_cold ÷ T_hot (temperatures in kelvin). Hotter sources and colder sinks allow higher efficiency." },
        { h: "Power vs energy", t: "Energy is the total amount (joules, kWh). Power is the rate (watts). A 2 kW heater running for 3 hours uses 6 kWh." }
      ],
      example: "A heat engine running between 600 K and 300 K can be at most 1 − 300/600 = 50% efficient. Real engines reach less because of friction and other losses.",
      pitfall: "Using Celsius in the Carnot formula. Always convert to kelvin (K = °C + 273.15), or the answer will be wrong.",
      terms: [
        ["First law of thermodynamics", "Energy cannot be created or destroyed, only converted."],
        ["Second law of thermodynamics", "Entropy increases; no heat engine converts all heat into work."],
        ["Efficiency", "Useful output divided by total input."],
        ["Carnot efficiency", "Maximum possible heat-engine efficiency: 1 − T_cold / T_hot in kelvin."],
        ["Power", "The rate of energy transfer, measured in watts."]
      ],
      mcq: [
        { q: "Maximum efficiency of an engine between 800 K and 400 K?", a: ["50%", "100%", "25%", "75%"], c: 0, why: "1 − 400/800 = 0.5." },
        { q: "A 1.5 kW kettle runs for 4 minutes. Energy used?", a: ["0.1 kWh", "6 kWh", "1.5 kWh", "0.4 kWh"], c: 0, why: "1.5 kW × (4/60) h = 0.1 kWh." },
        { q: "Which law says no engine can turn all heat into work?", a: ["Second law", "First law", "Newton's third law", "Ohm's law"], c: 0, why: "Some heat must always be rejected." },
        { q: "Which typically has the highest efficiency?", a: ["Large electric motor", "Petrol car engine", "Steam locomotive", "Incandescent bulb (for light)"], c: 0, why: "Large electric motors often exceed 90%." }
      ],
      tf: [
        { s: "A perpetual motion machine is allowed by the first law.", v: false, why: "You can't get more energy out than in." },
        { s: "The Carnot formula needs temperatures in kelvin.", v: true, why: "It relies on absolute temperature." },
        { s: "Watts measure energy, joules measure power.", v: false, why: "It's the other way round." },
        { s: "Heat naturally flows from hot to cold.", v: true, why: "That's the second law in everyday form." }
      ]
    },
    {
      id: "eng-06",
      title: "Reliability and Redundancy",
      level: "Intermediate",
      minutes: 6,
      bluf: "Reliability is the probability a system works when needed. You improve it by finding likely failures early (FMEA), using better parts, and adding redundancy so one failure doesn't take the whole system down.",
      points: [
        { h: "MTBF", t: "Mean Time Between Failures: the average operating time between failures of a repairable system. Higher is better." },
        { h: "Availability", t: "Availability = MTBF ÷ (MTBF + MTTR), where MTTR is Mean Time To Repair. Faster repairs raise availability as much as fewer failures." },
        { h: "Series vs parallel", t: "Parts in series all must work: reliabilities multiply, so the chain gets weaker. Parts in parallel (redundant): the system fails only if all fail." },
        { h: "FMEA", t: "Failure Mode and Effects Analysis lists how each part can fail, the effect, and ranks risk by severity, occurrence and detection, so you fix the worst first." },
        { h: "Avoid single points of failure", t: "A single point of failure is any one part whose failure stops everything. Critical systems (aircraft, data centres) design them out." }
      ],
      example: "Two pumps each 90% reliable. In series: 0.9 × 0.9 = 81%. In parallel: 1 − (0.1 × 0.1) = 99%. Same parts, very different system reliability.",
      pitfall: "Redundant parts that share a hidden common cause — same power supply, same software bug, same location. A common-cause failure defeats redundancy.",
      terms: [
        ["MTBF", "Mean Time Between Failures: average operating time between failures."],
        ["MTTR", "Mean Time To Repair: average time to restore a failed system."],
        ["Redundancy", "Extra components that keep a system working if one fails."],
        ["FMEA", "Failure Mode and Effects Analysis: a structured review of how parts can fail and the impact."],
        ["Single point of failure", "One component whose failure stops the whole system."]
      ],
      mcq: [
        { q: "Three parts in series, each 90% reliable. System reliability?", a: ["About 73%", "90%", "99.9%", "270%"], c: 0, why: "0.9³ = 0.729." },
        { q: "MTBF 900 h, MTTR 100 h. Availability?", a: ["90%", "99%", "10%", "50%"], c: 0, why: "900 / (900 + 100) = 0.9." },
        { q: "What does FMEA rank failures by?", a: ["Severity, occurrence and detection", "Cost only", "Alphabetical order", "Part weight"], c: 0, why: "These three combine into a risk priority." },
        { q: "Two redundant servers on the same power circuit risk…", a: ["Common-cause failure", "Higher MTBF", "Lower MTTR", "Nothing"], c: 0, why: "One power fault takes both down." }
      ],
      tf: [
        { s: "Adding parts in series increases system reliability.", v: false, why: "Every part must work, so reliability drops." },
        { s: "Faster repairs improve availability.", v: true, why: "Lower MTTR raises availability." },
        { s: "Parallel redundancy fails only if all redundant parts fail.", v: true, why: "Any one working part keeps it running." },
        { s: "Redundancy always protects against software bugs.", v: false, why: "Identical software shares the same bug." }
      ]
    },
    {
      id: "eng-07",
      title: "Fluids: Bernoulli and Reynolds",
      level: "Intermediate",
      minutes: 6,
      bluf: "In a moving fluid, faster flow means lower pressure (Bernoulli). Whether that flow is smooth or chaotic depends on the Reynolds number. These two ideas explain pipes, pumps, wings and wind loads.",
      points: [
        { h: "Bernoulli's principle", t: "Along a streamline, pressure + kinetic energy + height energy stays constant. Where the fluid speeds up, its pressure drops." },
        { h: "Continuity", t: "What flows in must flow out: A₁v₁ = A₂v₂. Squeeze a pipe to half the area and the speed doubles." },
        { h: "Reynolds number", t: "Re = (density × velocity × length) ÷ viscosity. It compares inertia to stickiness. Low Re: smooth laminar flow. High Re: turbulent flow." },
        { h: "Pipe-flow rule of thumb", t: "In pipes, flow is usually laminar below Re ≈ 2,300 and turbulent above about 4,000, with a transition zone between." },
        { h: "Drag", t: "Drag grows with the square of speed: double the speed, roughly four times the drag. That is why fuel use rises steeply at high speed." }
      ],
      example: "A garden hose: put your thumb over the end, the area shrinks, the water speeds up and sprays further (continuity). A venturi meter uses the matching pressure drop to measure flow rate.",
      pitfall: "Using Bernoulli where it doesn't apply. It assumes steady, low-friction flow along a streamline; with big friction losses, pumps or turbulence you need extra terms.",
      terms: [
        ["Bernoulli's principle", "In a flowing fluid, higher speed goes with lower pressure (energy is conserved)."],
        ["Continuity equation", "A₁v₁ = A₂v₂: flow rate stays constant through a pipe."],
        ["Reynolds number", "A ratio of inertial to viscous forces that predicts laminar or turbulent flow."],
        ["Laminar flow", "Smooth, orderly flow in parallel layers."],
        ["Turbulent flow", "Chaotic, mixing flow with eddies and swirls."]
      ],
      mcq: [
        { q: "A pipe narrows to one third of its area. The fluid speed…", a: ["Triples", "Drops to one third", "Stays the same", "Doubles"], c: 0, why: "A₁v₁ = A₂v₂, so v rises by 3×." },
        { q: "A high Reynolds number usually means…", a: ["Turbulent flow", "Laminar flow", "No flow", "Frozen fluid"], c: 0, why: "Inertia dominates viscosity." },
        { q: "If speed doubles, drag roughly…", a: ["Quadruples", "Doubles", "Halves", "Stays the same"], c: 0, why: "Drag scales with velocity squared." },
        { q: "By Bernoulli, where the flow is fastest, pressure is…", a: ["Lowest", "Highest", "Unchanged", "Zero"], c: 0, why: "Kinetic energy rises, pressure energy falls." }
      ],
      tf: [
        { s: "Pipe flow at Re = 1,000 is usually laminar.", v: true, why: "Below about 2,300 flow tends to be laminar." },
        { s: "Honey flows with a higher Reynolds number than water at the same speed and size.", v: false, why: "Honey's high viscosity lowers Re." },
        { s: "The continuity equation means flow rate is conserved.", v: true, why: "Mass in equals mass out for an incompressible fluid." },
        { s: "Bernoulli's equation applies perfectly with large friction losses.", v: false, why: "It needs loss terms added." }
      ]
    }
  ]
});
