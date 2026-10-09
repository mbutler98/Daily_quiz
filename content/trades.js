/* Topics: Carpentry and HVAC */
WP.addTopic({
  id: "carp",
  name: "Carpentry",
  code: "CARP",
  blurb: "How wood behaves, how to measure and cut accurately, how things are joined and framed, and how to finish them well.",
  lessons: [
    {
      id: "carp-01",
      title: "Understanding Wood",
      level: "Foundation",
      hook: "Wood never stops moving. A tabletop can shrink and swell by several millimetres between a damp Toronto summer and a dry winter. Old craftsmen built for that; many beginners' projects crack because they didn't.",
      bluf: "Wood is made of long fibres (the grain) and constantly absorbs and releases moisture. It moves mostly across the grain, not along it. Choosing the right species, letting wood acclimatise, and designing for movement prevent cracks, gaps and warping.",
      story: [
        "## Grain is everything",
        "A tree is a bundle of long fibres running up the trunk. That direction is the grain. Wood is strong along the grain and splits easily along it; it cuts smoothly 'with' the grain and tears out 'against' it. Reading the grain — the lines on the surface — tells you how a board will cut, plane and behave.",
        "## Wood moves with humidity",
        "Wood absorbs moisture from the air and releases it, swelling and shrinking. It barely changes along its length, but it moves noticeably across its width — far more than along it. A wide solid-wood panel glued rigidly on all sides will eventually crack or buckle. That's why traditional furniture uses floating panels in frames, and why tabletops are attached with clips or slotted screw holes that let them slide.",
        "## Moisture content and acclimatising",
        "Lumber is dried to a target moisture content (indoor furniture wood is often 6–9%). Construction lumber is usually 'kiln-dried' to about 19% or less. Before building, let wood sit in the room where it'll live for a week or more so it settles to local conditions.",
        "## Hardwood vs softwood",
        "The names describe tree types, not actual hardness. Hardwoods come from broad-leaf trees (oak, maple, walnut, cherry) — typically denser, used for furniture and floors. Softwoods come from conifers (pine, spruce, fir, cedar) — lighter, cheaper, used for framing and outdoor work. Balsa is technically a hardwood and is very soft.",
        "## Sheet goods",
        "Plywood (thin layers glued with alternating grain) and MDF (compressed wood fibres) are dimensionally stable because they don't move like solid wood. They're ideal for cabinet boxes and shelves, though MDF hates water and sags under long loads."
      ],
      points: [
        { h: "Grain direction", t: "Strong along the grain, splits along it; cut and plane with it." },
        { h: "Movement across the grain", t: "Wood swells and shrinks mostly in width as humidity changes." },
        { h: "Design for movement", t: "Floating panels, slotted holes and clips let wood move without cracking." },
        { h: "Acclimatise", t: "Let wood adjust to the room before building." },
        { h: "Hardwood vs softwood", t: "Based on tree type, not hardness; plywood and MDF stay stable." }
      ],
      example: "A homeowner builds a solid oak tabletop and screws it tightly to the frame all around. By February, with dry furnace-heated air, the top shrinks across its width, a long crack opens down the middle. Using figure-8 fasteners or slotted holes would have let it move freely.",
      pitfall: "Gluing cross-grain: joining two pieces with their grains at right angles across a wide area. They move in different directions and the joint or the wood eventually fails.",
      terms: [
        ["Grain", "The direction of the wood fibres."],
        ["Wood movement", "Swelling and shrinking of wood as humidity changes, mostly across the grain."],
        ["Moisture content", "The amount of water in wood as a percentage of its dry weight."],
        ["Plywood", "Sheets made of thin wood layers glued with alternating grain directions."],
        ["Tear-out", "Splintering of the surface when cutting or planing against the grain."]
      ],
      mcq: [
        { q: "In which direction does solid wood move most with humidity?", a: ["Across its width", "Along its length", "Equally in all directions", "It doesn't move"], c: 0, why: "Movement along the grain is tiny." },
        { q: "Why is plywood more stable than solid wood?", a: ["Its layers alternate grain direction", "It's heavier", "It contains plastic", "It's always hardwood"], c: 0, why: "Cross-layers restrain movement." },
        { q: "Hardwoods come from…", a: ["Broad-leaf trees", "Conifers", "Only tropical trees", "Trees older than 100 years"], c: 0, why: "Oak, maple, walnut and so on." },
        { q: "Why let wood acclimatise before building?", a: ["So it settles to local humidity", "To make it heavier", "To change its colour", "To kill insects"], c: 0, why: "Prevents movement after assembly." }
      ],
      tf: [
        { s: "Balsa is botanically a hardwood.", v: true, why: "It comes from a broad-leaf tree." },
        { s: "A wide solid panel should be glued rigidly on all four sides.", v: false, why: "It needs room to move." },
        { s: "MDF is a good choice for outdoor use in the rain.", v: false, why: "It swells and breaks down with water." }
      ],
      think: [
        "Look at a wooden table or door at home. How did the maker allow for movement?",
        "Why do doors stick in summer and not in winter?",
        "Which project would you build with plywood rather than solid wood, and why?"
      ],
      talk: "Wooden furniture never stops moving. A solid tabletop can swell and shrink by several millimetres across its width between humid summers and dry winters. That's why well-made tables let the top float instead of screwing it down tight."
    },
    {
      id: "carp-02",
      title: "Measuring, Marking and Cutting",
      level: "Foundation",
      hook: "'Measure twice, cut once' is the oldest advice in carpentry. The less obvious version: measure less. Experienced carpenters often skip the tape measure entirely and mark directly from the piece they're fitting.",
      bluf: "Accuracy comes from consistent measuring, sharp marking, checking square, and accounting for the blade's width. Marking directly from parts, using one tape, and cutting on the waste side of the line prevent most errors.",
      story: [
        "## Use one tape, consistently",
        "Tape measures differ slightly, and their hooks slide a little to account for inside and outside measurements. Use the same tape throughout a project. For precise work, measure from the 1-inch (or 10 cm) mark and subtract, or 'burn an inch', to avoid hook errors.",
        "## Mark from the part, not the number",
        "When fitting a shelf between two sides, hold the shelf in place and mark it directly. Every time you convert to a number and back, you add a chance for error. Story sticks — a strip of wood marked with key positions — let you transfer the same dimensions repeatedly without measuring.",
        "## Sharp lines and the kerf",
        "A pencil line can be a millimetre wide. A marking knife gives a crisp line and a groove to start a saw. Every saw blade removes a slot of wood called the kerf (often about 3 mm for a table saw blade). Always cut on the waste side of the line, or your piece ends up short by the kerf.",
        "## Square, level and plumb",
        "Square: 90° corners. Check with a speed square or combination square — or the 3-4-5 rule: measure 3 units along one side and 4 along the other; if the diagonal is 5, the corner is square. For big frames, measure both diagonals: if they're equal, the rectangle is square. Level: horizontal. Plumb: vertical.",
        "## Safety is part of accuracy",
        "Most workshop injuries happen when people rush or reach over blades. Use push sticks on table saws, keep guards on, never stand directly behind a blade (kickback can throw wood hard), wear eye and hearing protection, and stop when you're tired. A relaxed, controlled cut is also a more accurate one."
      ],
      points: [
        { h: "One tape, one method", t: "Use the same tape throughout to avoid small mismatches." },
        { h: "Mark directly", t: "Transfer dimensions from the actual parts or a story stick." },
        { h: "Account for the kerf", t: "Cut on the waste side of the line; the blade removes material." },
        { h: "3-4-5 rule", t: "A 3-4-5 triangle proves a right angle; equal diagonals prove a rectangle is square." },
        { h: "Safety first", t: "Push sticks, guards, protection and never rushing." }
      ],
      example: "Building a deck frame, a carpenter measures 3 feet along one joist and 4 feet along the rim, then adjusts until the diagonal is exactly 5 feet. On a larger frame, they check that both diagonals match — if one is longer, they push the corners until they're equal.",
      pitfall: "Cutting directly on the line, or on the wrong side of it. Your piece ends up short by half the kerf or more — and you can't add wood back.",
      terms: [
        ["Kerf", "The width of the slot a saw blade removes."],
        ["Square", "A 90° angle; also the tool used to check it."],
        ["Plumb", "Perfectly vertical."],
        ["Story stick", "A marked strip of wood used to transfer repeated dimensions."],
        ["Kickback", "When a saw throws the workpiece back toward the operator."]
      ],
      mcq: [
        { q: "You measure 3 ft and 4 ft along two sides. For a square corner, the diagonal should be…", a: ["5 ft", "7 ft", "6 ft", "4.5 ft"], c: 0, why: "3-4-5 triangle." },
        { q: "Which side of the line should you cut on?", a: ["The waste side", "Directly on it", "The keeper side", "It doesn't matter"], c: 0, why: "Account for the kerf." },
        { q: "A frame's two diagonals are equal. The frame is…", a: ["Square", "Level", "Plumb", "Twisted"], c: 0, why: "Equal diagonals mean a true rectangle." },
        { q: "'Plumb' means…", a: ["Perfectly vertical", "Perfectly horizontal", "45 degrees", "Curved"], c: 0, why: "Like a hanging plumb bob." }
      ],
      tf: [
        { s: "A marking knife gives a more precise line than a pencil.", v: true, why: "Thinner and creates a groove." },
        { s: "Mixing two different tape measures is fine for precise work.", v: false, why: "They can differ slightly." },
        { s: "Standing directly behind a table saw blade is the safest position.", v: false, why: "Kickback travels that way." }
      ],
      think: [
        "Where in your work do you 'convert to numbers' unnecessarily and introduce error?",
        "How would you check if a picture frame is square without a square?",
        "What 'measure twice' habit could you bring to your day job?"
      ],
      talk: "Carpenters check that a corner is square with nothing but a tape measure. Mark 3 units along one side and 4 along the other. If the diagonal between the marks is exactly 5, the corner is 90 degrees. The Pythagorean theorem is still doing everyday work."
    },
    {
      id: "carp-03",
      title: "Joinery: Holding Wood Together",
      level: "Intermediate",
      hook: "Japanese temple builders created wooden joints so precise that some structures stand for centuries without nails. Modern woodworkers use screws, glue and clever joints — and the choice decides whether a piece lasts a year or a lifetime.",
      bluf: "Joints connect pieces of wood. Good joints maximise glue surface on long grain, resist the forces the piece will face, and allow for wood movement. From simple butt joints to dovetails, each trades strength, looks and effort.",
      story: [
        "## Why glue alone isn't enough",
        "Wood glue bonds very well to long grain (the sides of boards) — often stronger than the wood itself. It bonds poorly to end grain, which soaks up glue like a bundle of straws. So a simple butt joint (end grain to face) is weak unless reinforced.",
        "## The common joints",
        "Butt joint: two pieces meet and are fastened with screws or nails. Fast, weak alone. Pocket-hole joint: screws driven at an angle from a hidden pocket — quick and popular for face frames and DIY furniture. Dado and rabbet: grooves or steps cut into one piece to receive another, great for shelves and cabinet backs. Mortise and tenon: a tongue (tenon) fits a snug hole (mortise); a classic for chairs, tables and doors because of its strength and glue surface. Dovetail: interlocking fan-shaped pins and tails that resist pulling apart — the traditional drawer joint and a sign of craftsmanship.",
        "## Match the joint to the forces",
        "Ask how the joint will be stressed. Drawer fronts are pulled every time you open the drawer — dovetails resist exactly that. Chair joints face racking (side-to-side twisting) — mortise and tenons with good shoulders resist it. Shelves face downward loads — dados support the shelf's full width.",
        "## Fasteners",
        "Screws hold better than nails and allow disassembly; pre-drill to avoid splitting, especially near ends and in hardwood. Nails are faster and flex rather than snap, which is why framers use them. Biscuits and dowels help align parts and add some strength.",
        "## Clamping",
        "Glue needs pressure and time. Clamp evenly without crushing the wood, check for square while the glue is wet, and wipe squeeze-out (or let it gel and scrape it) so it doesn't block stain later."
      ],
      points: [
        { h: "Long grain glues well", t: "End grain glues poorly; design joints for long-grain contact." },
        { h: "Mortise and tenon", t: "Strong, classic joint for frames, tables and chairs." },
        { h: "Dovetails", t: "Interlocking joint that resists pulling apart, ideal for drawers." },
        { h: "Dados and rabbets", t: "Grooves and steps that support shelves and panels." },
        { h: "Pre-drill screws", t: "Prevents splitting, especially near ends and in hardwood." }
      ],
      example: "Old dressers often have hand-cut dovetail drawers still working after 150 years, while flat-pack drawers held with cam locks and staples may loosen within a few moves. The difference is mostly joinery and grain orientation.",
      pitfall: "Relying on glue in an end-grain butt joint. It will look fine at first but fail under load. Add screws, dowels, a better joint or a long-grain glue surface.",
      terms: [
        ["Butt joint", "Two pieces joined end to face or edge, usually needing fasteners."],
        ["Mortise and tenon", "A projecting tenon fitted into a matching mortise hole."],
        ["Dovetail", "Interlocking pins and tails that resist being pulled apart."],
        ["Dado", "A groove cut across the grain to hold another piece."],
        ["Pocket hole", "An angled hole for a screw joining two boards."]
      ],
      mcq: [
        { q: "Which joint is traditionally used for drawer fronts?", a: ["Dovetail", "Butt", "Scarf", "Lap"], c: 0, why: "Resists pulling forces." },
        { q: "Glue bonds poorly to…", a: ["End grain", "Long grain", "Plywood faces", "Edges of boards"], c: 0, why: "End grain absorbs glue." },
        { q: "Which joint best supports a shelf across its width?", a: ["Dado", "Pocket hole only", "Butt joint with glue", "Biscuit only"], c: 0, why: "The groove carries the load." },
        { q: "Why pre-drill for screws?", a: ["To avoid splitting the wood", "To make screws longer", "To add glue", "It's never needed"], c: 0, why: "Especially in hardwood and near ends." }
      ],
      tf: [
        { s: "Mortise and tenon joints are used in chairs and tables.", v: true, why: "They resist racking." },
        { s: "A glued end-grain butt joint is very strong.", v: false, why: "End grain glues poorly." },
        { s: "Nails flex rather than snap, which suits framing.", v: true, why: "Framing nails tolerate movement." }
      ],
      think: [
        "Open a drawer at home. What joint holds it together?",
        "Which piece of furniture you own will likely fail first? Why?",
        "What's the 'joint' in your work that takes the most stress, and is it built for it?"
      ],
      talk: "Wood glue can be stronger than the wood itself when it's joining the long sides of boards, but it holds poorly on the cut ends. That's why good furniture joints like dovetails and mortise-and-tenons are designed around long-grain contact."
    },
    {
      id: "carp-04",
      title: "Framing a Wall",
      level: "Intermediate",
      hook: "Behind the drywall in most North American homes is a skeleton of 2×4s spaced 16 inches apart. Know the pattern, and you can find studs, hang heavy shelves safely and understand why some walls can't simply be removed.",
      bluf: "Wood-frame walls use vertical studs between horizontal plates, usually 16 inches on centre. Openings need headers to carry loads around them. Load-bearing walls support the structure above; removing or altering them requires proper design and permits.",
      story: [
        "## The parts of a wall",
        "Bottom plate (sole plate) on the floor, top plate (often doubled) at the ceiling, and vertical studs between. Studs are typically spaced 16 inches (406 mm) on centre — measured from the centre of one to the centre of the next — sometimes 24 inches. That spacing matches standard 4×8-foot drywall and plywood sheets so edges land on studs.",
        "## A 2×4 isn't 2 by 4",
        "Dimensional lumber is named by its rough-sawn size before drying and planing. A 2×4 actually measures about 1½ × 3½ inches; a 2×6 is about 1½ × 5½. Exterior walls in colder climates like Ontario are often 2×6 to fit more insulation.",
        "## Openings: headers, kings and jacks",
        "Doors and windows interrupt studs, so loads from above must be carried around the opening. A header (a beam, often doubled 2×10s or engineered lumber) spans the top. It sits on jack (trimmer) studs, which are nailed to full-height king studs. Short cripple studs fill in above the header and below windows.",
        "## Load-bearing walls",
        "Some walls carry weight from floors and roofs above; others just divide space. Clues a wall may be load-bearing: it runs perpendicular to the floor joists above, sits directly over a beam or wall below, or is an exterior wall. Never remove one without an engineer or qualified designer and a building permit — the load must be transferred to a properly sized beam and posts down to the foundation.",
        "## Finding studs",
        "Use a stud finder, or look for clues: outlets and switches are usually mounted on studs, and drywall screws or nails show as faint dimples. Measure 16 inches from a corner to find the next. Heavy items (TVs, cabinets) should be screwed into studs, not just drywall."
      ],
      points: [
        { h: "Studs and plates", t: "Vertical studs between top and bottom plates form the wall." },
        { h: "16 inches on centre", t: "Standard spacing that matches 4×8 sheet materials." },
        { h: "Actual vs nominal size", t: "A 2×4 is about 1½ × 3½ inches." },
        { h: "Headers", t: "Beams over openings that carry loads to jack and king studs." },
        { h: "Load-bearing walls", t: "Support structure above; changes need engineering and permits." }
      ],
      example: "A homeowner wants to open the kitchen to the living room. The wall runs perpendicular to the second-floor joists, so it's likely load-bearing. An engineer specifies a laminated veneer lumber (LVL) beam and posts that carry the load to footings — and the city requires a permit and inspection.",
      pitfall: "Assuming a wall isn't structural because it's interior. Many interior walls carry floors or roofs above. Check before cutting.",
      terms: [
        ["Stud", "A vertical framing member in a wall."],
        ["On centre (o.c.)", "Spacing measured from the centre of one member to the next."],
        ["Header", "A beam spanning the top of a door or window opening."],
        ["Load-bearing wall", "A wall that supports weight from above."],
        ["Nominal size", "The named size of lumber, larger than its actual dimensions."]
      ],
      mcq: [
        { q: "What does a 2×4 actually measure?", a: ["About 1½ × 3½ in", "Exactly 2 × 4 in", "About 2½ × 4½ in", "1 × 3 in"], c: 0, why: "Nominal vs actual size." },
        { q: "Standard stud spacing in North America is usually…", a: ["16 inches on centre", "10 inches", "36 inches", "48 inches"], c: 0, why: "Sometimes 24 inches." },
        { q: "What carries loads over a window opening?", a: ["A header", "A sole plate", "A cripple stud alone", "Drywall"], c: 0, why: "Supported on jack studs." },
        { q: "A wall running perpendicular to joists above is likely…", a: ["Load-bearing", "Decorative only", "Always removable", "Exterior"], c: 0, why: "It may support the joists." }
      ],
      tf: [
        { s: "Electrical boxes are often attached to studs.", v: true, why: "A useful clue for finding studs." },
        { s: "Interior walls are never load-bearing.", v: false, why: "Many are." },
        { s: "2×6 walls allow more insulation than 2×4 walls.", v: true, why: "Deeper cavity." }
      ],
      think: [
        "Can you guess where the studs are in the wall next to you?",
        "Which wall in your home would you remove if you could — and is it likely load-bearing?",
        "Why do you think building codes require permits for structural changes?"
      ],
      talk: "A 2×4 isn't actually 2 inches by 4 inches. It's about 1½ by 3½, because lumber is named by its rough size before it's dried and planed. Most North American walls hide studs every 16 inches, matched to 4-by-8-foot drywall sheets."
    },
    {
      id: "carp-05",
      title: "Sanding and Finishing",
      level: "Foundation",
      hook: "Two people build the same bookshelf. One looks handmade-cheap; the other looks like it came from a showroom. Often the difference isn't the building — it's the last 20% of the work: sanding and finishing.",
      bluf: "Sand progressively through grits, always with the grain, to remove scratches from the previous grit. Stain changes colour; finish protects. Oil, polyurethane and other finishes trade durability, appearance and ease of repair.",
      story: [
        "## Sanding: a sequence, not a step",
        "Each sandpaper grit leaves scratches; the next finer grit replaces them with smaller ones. A common sequence: 80 or 100 to flatten and remove marks, 120 to refine, then 150–180 (sometimes 220) before finishing. Skipping grits leaves deep scratches that show up badly once stain goes on.",
        "## With the grain",
        "Sand along the grain direction. Cross-grain scratches are glaringly visible under finish. Random-orbit sanders reduce this risk but still benefit from a final light hand-sanding along the grain.",
        "## Stain vs finish",
        "Stain adds colour but doesn't protect. Finish (topcoat) protects against moisture, wear and stains. Many products combine both, but separate steps usually look better. Blotchy woods like pine, cherry and maple absorb stain unevenly; a pre-stain conditioner or a gel stain helps.",
        "## Choosing a finish",
        "Oil (like tung or 'Danish' oil): soaks in, looks natural, easy to repair, modest protection. Hard-wax oils add more durability. Oil-based polyurethane: tough, ambers over time, slower drying. Water-based polyurethane: clear, fast-drying, low odour, slightly less warm look. Shellac: traditional, quick-drying, good sealer, not very heat- or alcohol-resistant. Lacquer: fast and professional-looking, usually sprayed.",
        "## Technique",
        "Thin coats beat thick ones. Let each coat dry fully, lightly sand between coats with very fine paper (320 or so) to knock down dust nibs, and wipe clean before the next coat. Work in a dust-free, ventilated space. Always test on a scrap of the same wood first — colour on the can rarely matches your wood. And oily rags can spontaneously combust: lay them flat to dry outdoors or store them in a sealed metal container with water."
      ],
      points: [
        { h: "Progress through grits", t: "Each finer grit removes the previous grit's scratches; don't skip." },
        { h: "Sand with the grain", t: "Cross-grain scratches show clearly under finish." },
        { h: "Stain colours, finish protects", t: "They're separate jobs, even in combined products." },
        { h: "Thin coats", t: "Multiple thin coats with light sanding between give the best result." },
        { h: "Oily rag safety", t: "Rags with drying oils can self-ignite; dry flat or store in water in metal." }
      ],
      example: "A maple desk stained dark without conditioner comes out blotchy, with dark patches where the grain soaked up more stain. Redone with a gel stain on a test board first, then three thin coats of water-based poly with 320-grit sanding between, it looks evenly rich and smooth.",
      pitfall: "Bunching up rags soaked in linseed or other drying oils in a garbage bin. They generate heat as they cure and can start a fire hours later.",
      terms: [
        ["Grit", "A number indicating sandpaper coarseness; higher is finer."],
        ["Stain", "A colourant that changes wood's appearance without protecting it."],
        ["Polyurethane", "A durable plastic-based protective finish."],
        ["Pre-stain conditioner", "A product that reduces blotching on uneven-absorbing woods."],
        ["Spontaneous combustion", "Self-ignition of oily rags from heat released as oil cures."]
      ],
      mcq: [
        { q: "Which grit is finest?", a: ["220", "80", "120", "60"], c: 0, why: "Higher number = finer." },
        { q: "Why sand with the grain?", a: ["Cross-grain scratches show under finish", "It's faster", "It removes stain", "It's required by law"], c: 0, why: "They become very visible." },
        { q: "Which wood is prone to blotchy staining?", a: ["Pine", "Walnut", "Oak", "Teak"], c: 0, why: "Uneven absorption." },
        { q: "How should oily rags be handled?", a: ["Dried flat outside or sealed in water in metal", "Balled up in a bin", "Kept in a warm pile", "Left in the sun bunched"], c: 0, why: "Prevents spontaneous combustion." }
      ],
      tf: [
        { s: "Stain alone protects wood from moisture.", v: false, why: "A finish is needed." },
        { s: "Thin coats generally give a better finish than thick ones.", v: true, why: "Fewer runs and faster curing." },
        { s: "Water-based polyurethane tends to stay clearer than oil-based.", v: true, why: "Oil-based ambers over time." }
      ],
      think: [
        "What's the 'sanding and finishing' step in your own work — the last 20% that makes it look professional?",
        "Which finish would you choose for a kitchen table, and why?",
        "Why might a test board save hours of work?"
      ],
      talk: "Rags soaked in linseed or similar oils can catch fire by themselves hours later. The oil gives off heat as it cures. Woodworkers lay them flat to dry outside or seal them in a metal can with water."
    }
  ]
});

WP.addTopic({
  id: "hvac",
  name: "HVAC",
  code: "HVAC",
  blurb: "Heating, ventilation and air conditioning in plain English: how heat pumps and furnaces work, airflow, humidity and sizing.",
  lessons: [
    {
      id: "hvac-01",
      title: "How Heat Pumps Work",
      level: "Foundation",
      hook: "Your fridge is a heat pump. It pulls heat out of the food and dumps it out the back. A home heat pump does the same thing for your house — and in winter, runs in reverse to pull heat out of cold outdoor air.",
      bluf: "Heat pumps move heat rather than create it, using a refrigerant that absorbs heat when it evaporates and releases it when it condenses. Because moving heat takes less energy than making it, they can deliver two to four units of heat per unit of electricity.",
      story: [
        "## Heat flows downhill — unless you pump it",
        "Heat naturally flows from warm to cold. A heat pump forces it the other way, from cold to warm, using a refrigerant loop and a compressor — like a water pump pushing water uphill.",
        "## The refrigeration cycle in four steps",
        "1. Evaporator: cold, low-pressure liquid refrigerant flows through a coil and absorbs heat from its surroundings, boiling into a gas (refrigerants boil at very low temperatures). 2. Compressor: squeezes the gas, making it very hot and high-pressure. 3. Condenser: the hot gas releases heat to its surroundings and condenses back into liquid. 4. Expansion valve: the liquid's pressure drops suddenly, making it very cold, ready to absorb heat again.",
        "In summer, the indoor coil is the evaporator (absorbing heat from your home) and the outdoor coil is the condenser. In winter, a reversing valve swaps the roles: the outdoor coil absorbs heat from outdoor air and the indoor coil releases it inside.",
        "## Efficiency: COP",
        "The coefficient of performance (COP) is heat delivered ÷ electricity used. A COP of 3 means 3 kWh of heat for every 1 kWh of electricity — 300% 'efficiency', which is possible because the heat is moved, not made. COP falls as outdoor temperatures drop, because there's less heat to grab.",
        "## Cold-climate heat pumps",
        "Modern cold-climate models can keep heating efficiently well below −20°C, with variable-speed compressors. In very cold snaps, many homes pair them with a backup: electric resistance strips or an existing gas furnace (a 'dual-fuel' or hybrid system). Canada's federal and some provincial programs have offered rebates or loans to encourage switching.",
        "## Ground-source (geothermal)",
        "Ground-source heat pumps draw heat from pipes buried in the earth, which stays a steady temperature year-round. They're very efficient but expensive to install because of drilling or trenching."
      ],
      points: [
        { h: "Move heat, don't make it", t: "Heat pumps transfer heat using a refrigerant loop." },
        { h: "Four-step cycle", t: "Evaporate, compress, condense, expand — then repeat." },
        { h: "Reversible", t: "A reversing valve switches between cooling and heating." },
        { h: "COP", t: "Heat delivered per unit of electricity; often 2–4." },
        { h: "Cold climates", t: "Modern units work well below −20°C, often with backup heat." }
      ],
      example: "A Toronto home replaces an old central air conditioner with a cold-climate heat pump and keeps the gas furnace as backup. The heat pump handles most of the heating season efficiently; the furnace takes over on the coldest days. Gas use drops sharply.",
      pitfall: "Assuming heat pumps don't work in Canadian winters. Older models struggled, but modern cold-climate units keep working at very low temperatures — though efficiency drops and backup heat may be needed.",
      terms: [
        ["Heat pump", "A device that moves heat from one place to another using a refrigerant cycle."],
        ["Refrigerant", "A fluid that absorbs and releases heat as it evaporates and condenses."],
        ["Compressor", "The component that pressurises refrigerant gas, raising its temperature."],
        ["COP", "Coefficient of Performance: heat output divided by energy input."],
        ["Reversing valve", "A valve that switches a heat pump between heating and cooling modes."]
      ],
      mcq: [
        { q: "A heat pump with COP 3 delivers how much heat per kWh of electricity?", a: ["3 kWh", "1 kWh", "0.3 kWh", "30 kWh"], c: 0, why: "COP = output ÷ input." },
        { q: "In heating mode, the outdoor coil acts as the…", a: ["Evaporator", "Condenser", "Furnace", "Filter"], c: 0, why: "It absorbs heat from outdoor air." },
        { q: "What raises the refrigerant's temperature?", a: ["The compressor", "The expansion valve", "The filter", "The thermostat"], c: 0, why: "Compression heats the gas." },
        { q: "Why does COP fall in very cold weather?", a: ["There's less heat outdoors to move", "Refrigerant freezes solid", "Electricity gets weaker", "Thermostats stop working"], c: 0, why: "The pump works harder across a bigger temperature gap." }
      ],
      tf: [
        { s: "A fridge works on the same principle as a heat pump.", v: true, why: "It moves heat out of the food compartment." },
        { s: "Heat pumps create heat by burning fuel.", v: false, why: "They move heat with electricity." },
        { s: "Ground-source heat pumps use the earth's stable temperature.", v: true, why: "Making them very efficient." }
      ],
      think: [
        "Where does the heat removed by your fridge go?",
        "Would a heat pump make sense for your home? What would you need to know?",
        "Why can a heat pump be more than 100% efficient without breaking the laws of physics?"
      ],
      talk: "A heat pump can put out three times more heat than the electricity it uses. That doesn't break physics, because it moves existing heat from outside rather than making new heat. Your fridge does the same thing in reverse."
    },
    {
      id: "hvac-02",
      title: "Furnaces and Combustion Safety",
      level: "Foundation",
      hook: "Carbon monoxide has no smell, no colour and no taste. Ontario made CO alarms mandatory in homes with fuel-burning appliances after a family tragedy — and a furnace is the most common source.",
      bluf: "Gas furnaces burn fuel to heat air that's blown through ducts. Efficiency is measured by AFUE; modern condensing furnaces exceed 95%. Safe venting, annual maintenance and working CO alarms are essential.",
      story: [
        "## How a forced-air furnace works",
        "The thermostat calls for heat. The furnace ignites gas in burners, and the flame heats a heat exchanger — a sealed metal chamber. A blower pushes house air across the outside of the heat exchanger and through ductwork to the rooms. Combustion gases stay inside the heat exchanger and are vented outdoors. The heat exchanger keeps combustion gases and breathing air separate.",
        "## AFUE: how efficient is it?",
        "Annual Fuel Utilization Efficiency is the share of fuel energy that becomes heat in your home over a season. Old furnaces might be 60–70%. Mid-efficiency units are around 80%. High-efficiency condensing furnaces are 95% or more: they extract so much heat that water vapour in the exhaust condenses, so they vent through plastic pipe out the side wall and need a drain for the acidic condensate.",
        "## Carbon monoxide",
        "Incomplete combustion produces carbon monoxide (CO), which binds to blood and prevents it carrying oxygen. Early symptoms — headache, nausea, dizziness, fatigue — feel like the flu, and several people in a home feeling sick at once is a warning sign. A cracked heat exchanger, blocked vent or poor maintenance can leak CO. Ontario's Hawkins-Gignac Act requires CO alarms in homes with fuel-burning appliances or attached garages, near sleeping areas.",
        "## Maintenance",
        "Change or clean filters regularly (often every one to three months). Book annual inspections by a licensed technician, who checks burners, the heat exchanger, venting and safety controls. Keep exterior vents clear of snow — a blocked intake or exhaust can shut the furnace down or cause dangerous venting.",
        "## Beyond gas",
        "Other heat sources include oil furnaces, boilers (heating water for radiators or in-floor heating), electric baseboards (100% efficient at the point of use, but costly where electricity prices are high) and heat pumps."
      ],
      points: [
        { h: "Heat exchanger", t: "Keeps combustion gases separate from the air you breathe." },
        { h: "AFUE", t: "Seasonal fuel efficiency; condensing furnaces exceed 95%." },
        { h: "Condensing furnaces", t: "Recover heat from exhaust vapour; vent through plastic pipe and need a drain." },
        { h: "Carbon monoxide", t: "Invisible and odourless; alarms are essential near sleeping areas." },
        { h: "Annual maintenance", t: "Filters, inspection and clear vents keep furnaces safe and efficient." }
      ],
      example: "After a heavy snowfall, a family's high-efficiency furnace keeps shutting off. The side-wall intake and exhaust pipes outside are buried in drifting snow. Clearing them restores normal operation — and shows why vents must be kept clear all winter.",
      pitfall: "Mistaking CO poisoning for the flu. If several people (or pets) in a home feel unwell, especially when the heat is running and better when away from home, leave and call for help.",
      terms: [
        ["AFUE", "Annual Fuel Utilization Efficiency: seasonal efficiency of a furnace."],
        ["Heat exchanger", "The sealed chamber that transfers heat from combustion to house air."],
        ["Condensing furnace", "A high-efficiency furnace that recovers heat from exhaust water vapour."],
        ["Carbon monoxide", "A toxic, odourless gas from incomplete combustion."],
        ["Forced-air system", "A system that heats or cools air and distributes it through ducts with a blower."]
      ],
      mcq: [
        { q: "A furnace rated 96% AFUE…", a: ["Turns about 96% of fuel energy into home heat", "Runs 96% of the time", "Wastes 96% of fuel", "Is 96% quieter"], c: 0, why: "Seasonal efficiency." },
        { q: "Early CO poisoning symptoms often resemble…", a: ["The flu", "A sprained ankle", "Sunburn", "Hay fever only"], c: 0, why: "Headache, nausea, dizziness." },
        { q: "Why do condensing furnaces need a drain?", a: ["Exhaust vapour condenses into water", "They leak gas", "They use water for fuel", "To clean filters"], c: 0, why: "Acidic condensate must be drained." },
        { q: "Which Ontario law requires CO alarms?", a: ["The Hawkins-Gignac Act", "The Bank Act", "PIPEDA", "The Clean Water Act"], c: 0, why: "Named after a family lost to CO." }
      ],
      tf: [
        { s: "Carbon monoxide has a distinctive smell.", v: false, why: "It's odourless — hence alarms." },
        { s: "Snow blocking furnace vents can cause problems.", v: true, why: "It can shut down or misvent the furnace." },
        { s: "Furnace filters never need changing.", v: false, why: "Typically every 1–3 months." }
      ],
      think: [
        "Where are the CO alarms in your home, and when were they last tested?",
        "When was your furnace last inspected?",
        "Do you know where your furnace's exterior vents are?"
      ],
      talk: "Carbon monoxide has no colour, smell or taste, and early poisoning feels like the flu. If everyone in a home feels sick at the same time and better once they leave, that's a warning sign. That's why Ontario requires CO alarms in homes with fuel-burning appliances."
    },
    {
      id: "hvac-03",
      title: "Ducts, Airflow and Filters",
      level: "Intermediate",
      hook: "Many comfort complaints — one bedroom too hot, another too cold, a noisy vent — aren't caused by the furnace or air conditioner at all. They're airflow problems in ductwork you never see.",
      bluf: "Ducts carry conditioned air to rooms and return it to the system. Leaky, undersized or poorly balanced ducts waste energy and cause uneven comfort. Filters protect equipment and clean air, but overly restrictive ones can choke airflow.",
      story: [
        "## Supply and return",
        "Supply ducts deliver heated or cooled air to rooms through registers. Return ducts bring air back to the equipment. Both matter: a room with good supply but no return path (say, a closed door with no return grille) gets pressurised and receives less air.",
        "## Airflow is measured in CFM",
        "Systems are designed to move a specific amount of air, measured in cubic feet per minute. Air conditioners typically need roughly 350–400 CFM per ton of capacity. Too little airflow can freeze an AC coil, overheat a furnace's heat exchanger and shorten equipment life.",
        "## Leaks and insulation",
        "Duct leaks, especially in unheated attics, crawlspaces or garages, can waste a substantial share of heating and cooling energy. Sealing joints with mastic or foil tape (not cloth 'duct tape', which fails over time) and insulating ducts in unconditioned spaces pays off.",
        "## Balancing",
        "Dampers in ducts can be adjusted to send more air to rooms that need it (like a hot upstairs in summer) and less to others. Seasonal adjustment — more to upstairs in summer, more downstairs in winter — can noticeably improve comfort in two-storey homes.",
        "## Filters and MERV",
        "Filters protect the blower and coil from dust and improve air quality. MERV ratings run from 1 to 16 for common filters; higher numbers capture smaller particles. Many homes use MERV 8–13. A very high-MERV filter in a system not designed for it can restrict airflow, so check what your equipment can handle — and change filters on schedule. Dirty filters are among the most common causes of HVAC problems."
      ],
      points: [
        { h: "Supply and return", t: "Air must be delivered and returned; blocked returns starve rooms." },
        { h: "CFM", t: "Airflow volume; AC systems need roughly 350–400 CFM per ton." },
        { h: "Seal and insulate ducts", t: "Use mastic or foil tape, especially in unconditioned spaces." },
        { h: "Balance with dampers", t: "Adjust airflow seasonally between floors and rooms." },
        { h: "MERV ratings", t: "Higher captures more; too restrictive can harm airflow." }
      ],
      example: "A homeowner complains that the AC 'isn't working'. The technician finds ice on the indoor coil. The cause: a filter clogged with dust, restricting airflow so the coil got too cold. A new filter and a thaw fix it.",
      pitfall: "Closing lots of supply registers in unused rooms to 'save energy'. In many systems it raises duct pressure, increases leakage and reduces airflow over the coil, which can hurt efficiency and equipment.",
      terms: [
        ["Supply duct", "A duct delivering conditioned air to rooms."],
        ["Return duct", "A duct bringing room air back to the HVAC equipment."],
        ["CFM", "Cubic feet per minute: a measure of airflow."],
        ["Damper", "An adjustable plate in a duct that controls airflow."],
        ["MERV", "Minimum Efficiency Reporting Value: a filter's particle-capture rating."]
      ],
      mcq: [
        { q: "Ice on an indoor AC coil often points to…", a: ["Low airflow, such as a dirty filter", "Too much airflow", "A new thermostat", "High humidity only"], c: 0, why: "Restricted airflow over-cools the coil." },
        { q: "What should you use to seal duct joints?", a: ["Mastic or foil tape", "Cloth duct tape", "Glue sticks", "Nothing"], c: 0, why: "Cloth duct tape fails over time." },
        { q: "A higher MERV rating means…", a: ["Captures smaller particles", "Lets more air through always", "Lasts forever", "Less filtration"], c: 0, why: "But may restrict airflow." },
        { q: "To cool a hot upstairs in summer, you might…", a: ["Adjust dampers to send more air upstairs", "Close all upstairs vents", "Turn off the return", "Raise the thermostat"], c: 0, why: "Balancing airflow." }
      ],
      tf: [
        { s: "Return air paths are as important as supply.", v: true, why: "Air must circulate back." },
        { s: "Cloth duct tape is the best long-term duct sealant.", v: false, why: "Mastic or foil tape is better." },
        { s: "Dirty filters are a common cause of HVAC problems.", v: true, why: "They restrict airflow." }
      ],
      think: [
        "Which room in your home is least comfortable? Could airflow be the cause?",
        "When did you last change your furnace filter?",
        "Where do your ducts run — any through unheated spaces?"
      ],
      talk: "Cloth 'duct tape' is one of the worst things to seal ducts with. Its adhesive dries out and fails over time. HVAC pros use foil tape or a paste called mastic, which is the irony every technician loves to point out."
    },
    {
      id: "hvac-04",
      title: "Humidity and Ventilation",
      level: "Foundation",
      hook: "In a Toronto winter, indoor air can get dry enough to crack skin and shock you with static, while the same house's windows drip with condensation. Both are humidity problems, and both have the same family of fixes.",
      bluf: "Comfort and building health depend on humidity, not just temperature. Aim for roughly 30–50% indoor relative humidity, lower in very cold weather to avoid condensation. Modern airtight homes need mechanical ventilation, often an HRV or ERV, to bring in fresh air efficiently.",
      story: [
        "## Relative humidity",
        "Relative humidity (RH) is how much moisture the air holds compared with the maximum it could hold at that temperature. Cold air holds very little moisture. When cold outdoor air is heated indoors, its RH plummets — that's why winter air feels so dry.",
        "## Too dry, too damp",
        "Very dry air (below about 30%) causes dry skin, irritated sinuses, static shocks and gaps in wood floors and furniture. Very damp air (above about 50–60%) encourages dust mites and mould, and causes condensation on cold surfaces. In very cold weather, indoor RH may need to be kept lower (around 30–35%) to stop windows and cold walls from sweating.",
        "## Condensation and the dew point",
        "When warm, moist air touches a surface colder than its dew point, water condenses. Windows are the first place it shows. Hidden condensation inside walls or attics can cause rot and mould — which is why building science focuses on air sealing and vapour control.",
        "## Ventilation: build tight, ventilate right",
        "Older homes were leaky, getting fresh air (and losing heat) through gaps. Modern homes are much more airtight for efficiency, so they need deliberate ventilation to remove moisture, cooking smells and pollutants. Bathroom and kitchen fans exhaust moisture at the source — run bathroom fans during showers and for a while afterwards.",
        "## HRVs and ERVs",
        "A heat recovery ventilator (HRV) exhausts stale indoor air and brings in fresh outdoor air, passing them through a core that transfers heat from the outgoing to the incoming air — so you get fresh air without throwing away most of the heat. An energy recovery ventilator (ERV) also transfers some moisture, helping keep winter air less dry and summer air less humid. Ontario's building code requires mechanical ventilation in new homes, commonly met with an HRV."
      ],
      points: [
        { h: "Aim for 30–50% RH", t: "Lower in very cold weather to prevent condensation." },
        { h: "Cold air is dry air", t: "Heating winter air sends relative humidity plunging." },
        { h: "Dew point", t: "Moist air hitting a cold surface condenses into water." },
        { h: "Build tight, ventilate right", t: "Airtight homes need deliberate fresh-air ventilation." },
        { h: "HRV vs ERV", t: "HRVs recover heat; ERVs recover heat and some moisture." }
      ],
      example: "A family notices water dripping down their bedroom windows every January morning. A hygrometer shows 55% RH. They lower the humidifier setting, run the bathroom fan longer after showers and set the HRV to a higher speed. Condensation disappears.",
      pitfall: "Running a humidifier at high settings in a cold snap. Comfortable as it may feel, the extra moisture condenses on windows and inside walls, risking mould and rot.",
      terms: [
        ["Relative humidity", "Moisture in the air as a percentage of the maximum it can hold at that temperature."],
        ["Dew point", "The temperature at which air becomes saturated and water condenses."],
        ["HRV", "Heat Recovery Ventilator: exchanges stale and fresh air while recovering heat."],
        ["ERV", "Energy Recovery Ventilator: recovers heat and some moisture."],
        ["Hygrometer", "A device that measures humidity."]
      ],
      mcq: [
        { q: "A comfortable, healthy indoor RH range is roughly…", a: ["30–50%", "5–10%", "70–90%", "100%"], c: 0, why: "Lower end in very cold weather." },
        { q: "Why does winter indoor air feel dry?", a: ["Heated cold air has low relative humidity", "Furnaces remove water", "Snow absorbs moisture indoors", "Windows leak water"], c: 0, why: "Cold air holds little moisture." },
        { q: "Which device recovers heat AND some moisture?", a: ["ERV", "HRV", "Furnace filter", "Thermostat"], c: 0, why: "Energy recovery." },
        { q: "Condensation forms when moist air hits a surface…", a: ["Below the dew point", "Above room temperature", "Made of wood", "In sunlight"], c: 0, why: "The air can't hold its moisture there." }
      ],
      tf: [
        { s: "Airtight modern homes need mechanical ventilation.", v: true, why: "To remove moisture and pollutants." },
        { s: "Higher indoor humidity is always better in winter.", v: false, why: "It causes condensation and mould." },
        { s: "Bathroom fans should run after showers to remove moisture.", v: true, why: "Exhaust at the source." }
      ],
      think: [
        "Do you know your home's humidity right now? A cheap hygrometer would tell you.",
        "Where in your home do you see condensation in winter?",
        "Why might an older, draughty home have fewer moisture problems than a new airtight one?"
      ],
      talk: "Window condensation in a Canadian winter is a sign the indoor air is too humid for how cold it is outside. Turn down the humidifier or ventilate more. Comfortable as it feels, that moisture can also condense inside the walls."
    },
    {
      id: "hvac-05",
      title: "Sizing, Efficiency Ratings and Thermostats",
      level: "Intermediate",
      hook: "Bigger isn't better for air conditioners. An oversized AC cools the house quickly, shuts off, and leaves it feeling cold and clammy. Getting the size right matters more than buying the most powerful unit.",
      bluf: "HVAC equipment should be sized with a proper heat-loss and heat-gain calculation, not rules of thumb. Oversizing causes short cycling, poor humidity control and wear. Ratings like SEER2, HSPF2 and AFUE compare efficiency, and smart thermostat habits save energy.",
      story: [
        "## Units of capacity",
        "Heating and cooling are measured in BTUs per hour (British Thermal Units). Air conditioner capacity is often given in 'tons': 1 ton = 12,000 BTU/h, originally the cooling from melting a ton of ice over a day. A typical house might need 2–4 tons of cooling.",
        "## Do the calculation",
        "Professionals calculate a home's heat loss (winter) and heat gain (summer) using insulation, windows, airtightness, orientation and local climate — in North America often with ACCA Manual J or, in Canada, the CSA F280 standard. Replacing like-for-like or using 'one ton per 500 square feet' rules often leads to oversized equipment, especially after insulation or window upgrades.",
        "## Why oversizing hurts",
        "Oversized units short cycle: they run in brief bursts, reach the thermostat setting quickly, and shut off. Air conditioners remove humidity mainly during longer run times, so short cycles leave the air damp. Frequent starts also increase wear and temperature swings. Variable-speed equipment helps by running at low output for longer.",
        "## Efficiency ratings",
        "SEER2 (Seasonal Energy Efficiency Ratio) rates air conditioners and heat pumps in cooling mode — higher is better. HSPF2 rates heat pumps in heating mode. AFUE rates furnaces. ENERGY STAR labels identify high performers. The '2' versions reflect updated test procedures introduced in 2023.",
        "## Thermostat habits",
        "Setting back the temperature at night or when away saves energy because heat loss depends on the temperature difference between inside and out. Smart thermostats automate this. With heat pumps, large setbacks can trigger costly backup heat on recovery, so smaller setbacks or 'smart recovery' settings often work better. And the thermostat's location matters: avoid sunny walls, kitchens and draughty hallways."
      ],
      points: [
        { h: "1 ton = 12,000 BTU/h", t: "The standard unit of air-conditioning capacity." },
        { h: "Load calculations", t: "Use Manual J or CSA F280, not square-footage rules." },
        { h: "Oversizing causes short cycling", t: "Poor dehumidification, comfort swings and extra wear." },
        { h: "Ratings", t: "SEER2 for cooling, HSPF2 for heat pump heating, AFUE for furnaces." },
        { h: "Smart setbacks", t: "Save energy, but keep heat-pump setbacks modest." }
      ],
      example: "A homeowner replaces a 4-ton AC with another 4-ton unit after adding attic insulation and new windows. The new unit short cycles and the basement feels clammy. A proper load calculation shows the house now needs about 2.5 tons — a smaller, variable-speed unit would have been cheaper and more comfortable.",
      pitfall: "Assuming the old unit's size was right. Homes change with renovations, and many original systems were oversized to begin with.",
      terms: [
        ["BTU", "British Thermal Unit: a unit of heat energy."],
        ["Ton (cooling)", "12,000 BTU per hour of cooling capacity."],
        ["Short cycling", "Equipment turning on and off frequently in short bursts."],
        ["SEER2", "Seasonal Energy Efficiency Ratio (2023 test): cooling efficiency rating."],
        ["Load calculation", "An engineering estimate of a building's heating and cooling needs."]
      ],
      mcq: [
        { q: "A 3-ton air conditioner provides how many BTU/h?", a: ["36,000", "3,000", "12,000", "120,000"], c: 0, why: "3 × 12,000." },
        { q: "A key problem with oversized AC is…", a: ["Poor humidity removal from short cycles", "Too much dehumidification", "It never turns off", "Lower upfront cost"], c: 0, why: "It doesn't run long enough." },
        { q: "Which rating applies to furnaces?", a: ["AFUE", "SEER2", "HSPF2", "MERV"], c: 0, why: "Annual fuel utilisation efficiency." },
        { q: "Which Canadian standard is used for residential load calculations?", a: ["CSA F280", "OSFI B-20", "IFRS 9", "ISO 9001"], c: 0, why: "Alongside ACCA Manual J in North America." }
      ],
      tf: [
        { s: "Square-footage rules of thumb are reliable for sizing.", v: false, why: "They ignore insulation, windows and more." },
        { s: "Variable-speed equipment can run longer at low output, improving comfort.", v: true, why: "Steadier temperature and humidity." },
        { s: "Big setbacks with heat pumps can trigger expensive backup heat.", v: true, why: "Recovery may call for resistance heat." }
      ],
      think: [
        "Has your home been renovated since its HVAC was installed? Is it still the right size?",
        "Where is your thermostat located, and could that skew its readings?",
        "What's the 'oversized equipment' problem in your work — solutions bigger than the need?"
      ],
      talk: "A 'ton' of air conditioning is the cooling you'd get from melting a ton of ice over a day, about 12,000 BTU per hour. A bigger AC isn't better: an oversized unit switches off too soon and leaves the house cold and clammy."
    }
  ]
});
