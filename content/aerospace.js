/* Topic: Aerospace & Flight */
WP.addTopic({
  id: "aero",
  name: "Aerospace & Flight",
  code: "AERO",
  blurb: "How aircraft fly, how engines push them, and how spacecraft stay in orbit and find their way.",
  lessons: [
    {
      id: "aero-01",
      title: "The Four Forces of Flight",
      level: "Foundation",
      minutes: 5,
      bluf: "Every aircraft in flight is balancing four forces: lift against weight, and thrust against drag. When they balance, the aircraft flies steady. When one wins, the aircraft climbs, descends, speeds up or slows down.",
      points: [
        { h: "Lift", t: "Produced mainly by the wings as air flows over them. It acts roughly perpendicular to the oncoming airflow." },
        { h: "Weight", t: "Gravity pulling the aircraft's mass toward the Earth's centre. It falls during flight as fuel burns." },
        { h: "Thrust", t: "Produced by engines (propellers or jets) pushing air backwards so the aircraft moves forwards — Newton's third law." },
        { h: "Drag", t: "Air resistance opposing motion. Parasite drag rises with speed; induced drag (a by-product of making lift) is highest at low speed." },
        { h: "Equilibrium", t: "In steady, level flight: lift = weight and thrust = drag. To climb steadily, you need extra thrust (or power), not just more lift." }
      ],
      example: "An airliner at cruise burns fuel, gets lighter, and needs less lift. Pilots often 'step climb' to higher altitudes where the thinner air reduces drag and saves fuel.",
      pitfall: "Thinking an aircraft climbs because lift is greater than weight. In a steady climb, the extra energy comes from thrust exceeding drag; lift is actually slightly less than weight.",
      terms: [
        ["Lift", "The aerodynamic force, mainly from the wings, that holds an aircraft up."],
        ["Weight", "The force of gravity acting on the aircraft's mass."],
        ["Thrust", "The forward force produced by the engines."],
        ["Drag", "The aerodynamic force opposing an aircraft's motion through the air."],
        ["Induced drag", "Drag created as a by-product of producing lift; highest at low speed."]
      ],
      mcq: [
        { q: "In steady, level flight, thrust equals…", a: ["Drag", "Lift", "Weight", "Zero"], c: 0, why: "Thrust balances drag; lift balances weight." },
        { q: "Which type of drag is greatest at low speed?", a: ["Induced drag", "Parasite drag", "Wave drag", "Skin colour drag"], c: 0, why: "Wings must work hardest to make lift at low speed." },
        { q: "What principle explains jet thrust?", a: ["Newton's third law", "Ohm's law", "Hooke's law", "Boyle's law"], c: 0, why: "Pushing air back pushes the aircraft forward." },
        { q: "As an aircraft burns fuel, the lift required…", a: ["Decreases", "Increases", "Stays the same", "Becomes zero"], c: 0, why: "Weight falls, so less lift is needed." }
      ],
      tf: [
        { s: "There are four main forces acting on an aircraft in flight.", v: true, why: "Lift, weight, thrust and drag." },
        { s: "Parasite drag decreases as speed increases.", v: false, why: "It rises with speed (roughly with its square)." },
        { s: "A steady climb is powered mainly by excess thrust.", v: true, why: "Excess thrust/power provides the energy to gain height." },
        { s: "Weight stays constant throughout a long flight.", v: false, why: "Fuel burn reduces weight." }
      ]
    },
    {
      id: "aero-02",
      title: "Angle of Attack and the Stall",
      level: "Foundation",
      minutes: 6,
      bluf: "A wing makes more lift as its angle to the oncoming air increases — up to a point. Past the critical angle of attack, airflow separates and lift collapses. That's a stall, and it depends on angle, not speed.",
      points: [
        { h: "Angle of attack (AoA)", t: "The angle between the wing's chord line and the oncoming air (relative wind). It is NOT the same as the nose's angle to the horizon." },
        { h: "The lift equation", t: "Lift = ½ × air density × speed² × wing area × lift coefficient. Speed matters a lot: double the speed, four times the lift." },
        { h: "Critical angle", t: "Many wings stall around 15–18° AoA. Past this, air can't follow the upper surface and separates, so lift drops sharply." },
        { h: "Stall can happen at any speed", t: "Pulling hard in a turn or a steep manoeuvre can exceed the critical angle even at high speed." },
        { h: "Recovery", t: "Reduce the angle of attack first (lower the nose), then add power and level the wings. Pulling back makes it worse." }
      ],
      example: "Flaps and slats on airliners change the wing's shape to give more lift at low speed, letting the aircraft land slower without stalling.",
      pitfall: "Believing a stall means the engine stopped. In aviation, a stall is purely aerodynamic: the wing stops producing enough lift.",
      terms: [
        ["Angle of attack", "The angle between a wing's chord line and the oncoming airflow."],
        ["Stall", "Loss of lift when the wing exceeds its critical angle of attack."],
        ["Critical angle of attack", "The AoA at which maximum lift occurs, beyond which the wing stalls."],
        ["Chord line", "An imaginary straight line from a wing's leading edge to its trailing edge."],
        ["Flaps", "Hinged trailing-edge surfaces that increase lift (and drag) at low speeds."]
      ],
      mcq: [
        { q: "A stall occurs when…", a: ["The critical angle of attack is exceeded", "The engine fails", "Speed goes above maximum", "Fuel runs low"], c: 0, why: "It's an aerodynamic event tied to angle of attack." },
        { q: "If airspeed doubles, lift (all else equal)…", a: ["Increases 4×", "Doubles", "Halves", "Stays the same"], c: 0, why: "Lift depends on speed squared." },
        { q: "First action in stall recovery?", a: ["Reduce the angle of attack", "Pull back hard", "Reduce power to idle", "Raise the flaps"], c: 0, why: "Lowering AoA restores airflow over the wing." },
        { q: "What do flaps help with?", a: ["More lift at low speed", "Higher top speed", "Less weight", "Steering on the ground"], c: 0, why: "They let aircraft fly slower safely." }
      ],
      tf: [
        { s: "An aircraft can only stall at low speed.", v: false, why: "It can stall at any speed if the AoA is exceeded." },
        { s: "Angle of attack is measured relative to the oncoming air.", v: true, why: "Not relative to the horizon." },
        { s: "Air density affects how much lift a wing makes.", v: true, why: "It's a term in the lift equation." },
        { s: "A stall in aviation means the engine has stopped.", v: false, why: "It means the wing has lost lift." }
      ]
    },
    {
      id: "aero-03",
      title: "Axes and Flight Controls",
      level: "Foundation",
      minutes: 5,
      bluf: "An aircraft rotates around three axes: pitch, roll and yaw. Each is controlled by a different surface — elevator, ailerons and rudder. Learn those three pairings and cockpit talk starts to make sense.",
      points: [
        { h: "Pitch → elevator", t: "Nose up or down, around the lateral (wingtip-to-wingtip) axis. Controlled by the elevator on the tail, via the stick or yoke moving forward and back." },
        { h: "Roll → ailerons", t: "Wings tilting, around the longitudinal (nose-to-tail) axis. Ailerons on the outer wings move in opposite directions." },
        { h: "Yaw → rudder", t: "Nose left or right, around the vertical axis. Controlled by the rudder on the fin, via the foot pedals." },
        { h: "Turning uses roll, not yaw", t: "Aircraft turn by banking: rolling tilts the lift, and part of it pulls the aircraft round. The rudder keeps the turn coordinated." },
        { h: "Fly-by-wire", t: "In many modern aircraft, pilot inputs go to computers that move the surfaces, adding protections against unsafe manoeuvres." }
      ],
      example: "To turn right, the pilot rolls right (right aileron up, left aileron down), adds a little right rudder to stay coordinated, and some back pressure on the elevator to hold altitude.",
      pitfall: "Trying to turn with the rudder alone. It produces a skid — uncomfortable and inefficient. Bank to turn; use rudder to coordinate.",
      terms: [
        ["Pitch", "Nose-up/nose-down rotation around the lateral axis, controlled by the elevator."],
        ["Roll", "Rotation around the longitudinal axis, controlled by the ailerons."],
        ["Yaw", "Nose-left/nose-right rotation around the vertical axis, controlled by the rudder."],
        ["Bank angle", "How far the wings are tilted from level during a turn."],
        ["Fly-by-wire", "A system where computers translate pilot inputs into control surface movements."]
      ],
      mcq: [
        { q: "Which surface controls pitch?", a: ["Elevator", "Aileron", "Rudder", "Flap"], c: 0, why: "The elevator on the tail moves the nose up and down." },
        { q: "Ailerons control…", a: ["Roll", "Pitch", "Yaw", "Speed"], c: 0, why: "They tilt the wings." },
        { q: "How does an aircraft mainly turn?", a: ["By banking (rolling)", "By rudder alone", "By reducing thrust", "By lowering flaps"], c: 0, why: "Banking tilts lift to pull the aircraft round." },
        { q: "The rudder is operated by…", a: ["Foot pedals", "The throttle", "The yoke moving forward", "A switch"], c: 0, why: "Pedals move the rudder." }
      ],
      tf: [
        { s: "Yaw moves the nose left or right.", v: true, why: "Rotation about the vertical axis." },
        { s: "Ailerons on each wing move in the same direction.", v: false, why: "They move opposite to create roll." },
        { s: "Fly-by-wire uses computers between the pilot and the control surfaces.", v: true, why: "Inputs are processed electronically." },
        { s: "The elevator is located on the wing tips.", v: false, why: "It's on the horizontal tail." }
      ]
    },
    {
      id: "aero-04",
      title: "Jet Engines and Propulsion",
      level: "Intermediate",
      minutes: 6,
      bluf: "A jet engine sucks air in, squeezes it, burns fuel in it, and blasts it out the back. Modern airliner engines are turbofans: a big fan pushes most air around the core, giving lots of thrust efficiently and quietly.",
      points: [
        { h: "Suck, squeeze, bang, blow", t: "Intake → compressor (raise pressure) → combustor (add fuel and burn) → turbine (extracts energy to drive the compressor and fan) → exhaust nozzle." },
        { h: "Turbofan and bypass ratio", t: "Bypass ratio = air going around the core ÷ air through the core. Modern airliner engines are roughly 9:1 to 12:1; most thrust comes from the fan." },
        { h: "Why big fans are efficient", t: "Moving a lot of air a little is more efficient than moving a little air a lot. High bypass = better fuel economy and less noise." },
        { h: "Fighters use low bypass", t: "Combat aircraft favour slimmer, low-bypass engines for high speed, often with afterburners that spray extra fuel into the exhaust for a big thrust boost." },
        { h: "Rockets carry their own oxidiser", t: "Jets breathe air; rockets carry both fuel and oxidiser, so they work in space. Their efficiency measure is specific impulse (Isp)." }
      ],
      example: "On a modern high-bypass engine such as those on an A320neo or 737 MAX, the giant front fan you see produces the large majority of thrust. The core is relatively small, mainly there to drive the fan.",
      pitfall: "Thinking afterburners are efficient. They boost thrust dramatically but burn fuel at several times the normal rate, so they're used only briefly.",
      terms: [
        ["Turbofan", "A jet engine where a large fan drives most air around the core for efficient thrust."],
        ["Bypass ratio", "The ratio of air bypassing the core to air passing through it."],
        ["Compressor", "The engine section that raises air pressure before combustion."],
        ["Afterburner", "A system that burns extra fuel in the exhaust for a short-term thrust boost."],
        ["Specific impulse (Isp)", "A measure of rocket engine efficiency: thrust per unit of propellant flow."]
      ],
      mcq: [
        { q: "What drives the compressor in a jet engine?", a: ["The turbine", "The exhaust nozzle", "An electric motor", "The wings"], c: 0, why: "The turbine extracts energy from hot gas." },
        { q: "A high bypass ratio mainly improves…", a: ["Fuel efficiency and noise", "Top speed", "Afterburner thrust", "Engine weight only"], c: 0, why: "Moving more air slowly is more efficient." },
        { q: "Why can rockets work in space but jets can't?", a: ["Rockets carry their own oxidiser", "Rockets are bigger", "Jets need runways", "Space has more oxygen"], c: 0, why: "Jets need atmospheric oxygen to burn fuel." },
        { q: "Correct order of the core stages?", a: ["Compress, burn, turbine, exhaust", "Burn, compress, exhaust, turbine", "Turbine, burn, compress, exhaust", "Exhaust, burn, compress, turbine"], c: 0, why: "Suck, squeeze, bang, blow." }
      ],
      tf: [
        { s: "In a high-bypass turbofan, most thrust comes from the fan.", v: true, why: "The fan moves far more air than the core." },
        { s: "Afterburners are very fuel efficient.", v: false, why: "They burn fuel at a much higher rate." },
        { s: "Fighter jets usually have higher bypass ratios than airliners.", v: false, why: "Fighters use low-bypass engines." },
        { s: "Specific impulse measures rocket efficiency.", v: true, why: "Higher Isp = more thrust per unit of propellant." }
      ]
    },
    {
      id: "aero-05",
      title: "Orbits Made Simple",
      level: "Intermediate",
      minutes: 6,
      bluf: "An orbit is falling around the Earth while moving sideways so fast that you keep missing it. Higher orbits move slower and take longer. Choosing an orbit is choosing a trade-off between coverage, delay and cost.",
      points: [
        { h: "Orbital speed", t: "In low Earth orbit (LEO) a spacecraft travels about 7.8 km/s — one lap roughly every 90 minutes." },
        { h: "LEO, MEO, GEO", t: "LEO: ~160–2,000 km (ISS, Starlink, imaging). MEO: ~2,000–35,786 km (GPS at ~20,200 km). GEO: 35,786 km, where one orbit takes a day so the satellite appears fixed over the equator." },
        { h: "Higher = slower", t: "Gravity weakens with distance, so higher orbits need less speed, but the path is longer — so orbital periods increase." },
        { h: "Delta-v is the budget", t: "Delta-v (change in velocity) is the currency of spaceflight. Every manoeuvre costs some; propellant limits the total." },
        { h: "To go up, speed up", t: "To raise an orbit, burn forward (prograde). The common two-burn transfer between circular orbits is the Hohmann transfer." }
      ],
      example: "Weather and TV satellites sit in GEO so a fixed dish can point at them forever. Starlink uses LEO instead: much lower signal delay, but it needs thousands of satellites to cover the globe.",
      pitfall: "Thinking astronauts float because there is no gravity in orbit. At ISS altitude gravity is still about 90% of surface strength; they float because they are in continuous free fall.",
      terms: [
        ["LEO", "Low Earth Orbit: roughly 160–2,000 km altitude."],
        ["GEO", "Geostationary orbit: 35,786 km above the equator, period of one day."],
        ["Delta-v", "Change in velocity; the 'fuel budget' for spacecraft manoeuvres."],
        ["Hohmann transfer", "An efficient two-burn manoeuvre between two circular orbits."],
        ["Orbital period", "The time a spacecraft takes to complete one orbit."]
      ],
      mcq: [
        { q: "Why do GEO satellites appear fixed in the sky?", a: ["Their orbit period matches Earth's rotation", "They don't move", "They are tethered", "They hover on thrusters"], c: 0, why: "One orbit takes one day, above the equator." },
        { q: "Roughly how fast does a spacecraft in LEO travel?", a: ["7.8 km/s", "0.3 km/s", "30 km/s", "340 m/s"], c: 0, why: "About 28,000 km/h." },
        { q: "To raise an orbit, a spacecraft burns…", a: ["Forward (prograde)", "Backward (retrograde)", "Straight down", "Straight up only"], c: 0, why: "Adding speed raises the opposite side of the orbit." },
        { q: "GPS satellites are in which orbit band?", a: ["MEO", "LEO", "GEO", "Lunar"], c: 0, why: "About 20,200 km altitude." }
      ],
      tf: [
        { s: "Higher orbits have longer orbital periods.", v: true, why: "Slower speed and a longer path." },
        { s: "There is no gravity at the altitude of the ISS.", v: false, why: "It's about 90% of surface gravity." },
        { s: "Delta-v is a measure of a spacecraft's manoeuvring budget.", v: true, why: "Every burn spends some." },
        { s: "LEO satellites have more signal delay than GEO satellites.", v: false, why: "LEO is far closer, so less delay." }
      ]
    },
    {
      id: "aero-06",
      title: "Navigation: GPS and Inertial",
      level: "Intermediate",
      minutes: 6,
      bluf: "Aircraft, ships and missiles know where they are by combining two methods: satellite navigation (GPS/GNSS), which is accurate but can be jammed, and inertial navigation, which can't be jammed but slowly drifts. Together they cover each other's weaknesses.",
      points: [
        { h: "How GPS works", t: "Satellites broadcast precise time signals. A receiver measures how long signals take to arrive from at least four satellites to solve for position (3D) and its own clock error." },
        { h: "GNSS is a family", t: "GPS (US), Galileo (EU), GLONASS (Russia) and BeiDou (China) are all Global Navigation Satellite Systems. Modern receivers use several." },
        { h: "Inertial navigation (INS)", t: "Accelerometers and gyroscopes measure every movement from a known start point. Fully self-contained — no signals needed." },
        { h: "Drift", t: "Small sensor errors add up over time, so an INS position slowly drifts. Better (more expensive) sensors drift less." },
        { h: "Sensor fusion", t: "A Kalman filter blends GPS and INS: GPS corrects INS drift; INS fills gaps when GPS is lost or jammed." }
      ],
      example: "In GPS-jammed areas, airliners have reported navigation warnings. Their inertial systems keep them on track until signals return or pilots revert to ground-based navigation aids.",
      pitfall: "Treating GPS as always available. It is a weak signal from space — easy to jam or spoof. Resilient systems always have a backup.",
      terms: [
        ["GNSS", "Global Navigation Satellite System: GPS, Galileo, GLONASS, BeiDou and others."],
        ["INS", "Inertial Navigation System: tracks position using accelerometers and gyroscopes."],
        ["Drift", "The gradual build-up of position error in an inertial system."],
        ["Kalman filter", "An algorithm that optimally blends noisy measurements from multiple sensors."],
        ["Spoofing", "Broadcasting fake satellite signals to mislead a receiver about its position."]
      ],
      mcq: [
        { q: "Minimum satellites needed for a 3D GPS fix including clock error?", a: ["Four", "One", "Two", "Ten"], c: 0, why: "Three for position plus one to solve receiver clock error." },
        { q: "Main weakness of inertial navigation?", a: ["Drift over time", "Easy to jam", "Needs satellites", "Only works at night"], c: 0, why: "Errors accumulate without external correction." },
        { q: "Main weakness of GPS?", a: ["Jamming and spoofing", "Drift", "Needs gyroscopes", "Too heavy"], c: 0, why: "Signals from space are weak." },
        { q: "What commonly combines GPS and INS data?", a: ["A Kalman filter", "A compass", "A barometer", "A radio station"], c: 0, why: "It blends sensors to estimate the best position." }
      ],
      tf: [
        { s: "INS requires external signals to work.", v: false, why: "It's fully self-contained." },
        { s: "Galileo is the European satellite navigation system.", v: true, why: "Operated for the EU." },
        { s: "GPS and INS complement each other's weaknesses.", v: true, why: "GPS corrects drift; INS covers outages." },
        { s: "Spoofing is sending fake navigation signals.", v: true, why: "It tricks receivers into wrong positions." }
      ]
    }
  ]
});
