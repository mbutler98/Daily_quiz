/* Topic: Geography */
WP.addTopic({
  id: "geo",
  name: "Geography",
  code: "GEO",
  blurb: "Why the world looks the way it does — plates, climates, rivers, chokepoints and maps — and why it matters for people and power.",
  lessons: [
    {
      id: "geo-01",
      title: "Plate Tectonics",
      level: "Foundation",
      hook: "In 1912, German scientist Alfred Wegener argued that the continents had once been joined and had drifted apart. He was largely dismissed for decades. He was right — the ground under you is moving about as fast as your fingernails grow.",
      bluf: "Earth's outer shell is broken into giant plates that move a few centimetres a year. Where they collide, pull apart or slide past each other, we get mountains, volcanoes, earthquakes and ocean trenches.",
      story: [
        "## Wegener's puzzle",
        "Wegener noticed the coasts of South America and Africa fit like puzzle pieces, and that matching fossils and rock types appear on continents now separated by oceans. He proposed a supercontinent, Pangaea, that broke apart about 200 million years ago. But he couldn't explain what moved the continents, so many geologists rejected it.",
        "## The evidence arrives",
        "In the 1950s and 60s, ocean-floor mapping revealed long mid-ocean ridges where new crust forms, and magnetic stripes in the rock recording Earth's magnetic field flips, symmetrical on each side of the ridges. The sea floor was spreading. Plate tectonics became the unifying theory of geology.",
        "## Three kinds of boundaries",
        "Divergent: plates pull apart, and magma rises to create new crust — the Mid-Atlantic Ridge, Iceland. Convergent: plates collide. When an ocean plate dives under another (subduction), we get deep trenches, volcanoes and big earthquakes; when continents collide, mountains rise — India crashing into Asia built the Himalayas, which are still growing. Transform: plates slide past each other, like California's San Andreas Fault.",
        "## The Ring of Fire",
        "Around the Pacific, subduction zones produce most of the world's largest earthquakes and many volcanoes — from Chile to Alaska to Japan to Indonesia.",
        "## Canada's hidden risk",
        "Off the coast of British Columbia lies the Cascadia Subduction Zone. In January 1700, it produced a huge earthquake, estimated around magnitude 9. We know the date partly because Japanese records describe an 'orphan tsunami' with no local earthquake — it had crossed the Pacific from North America. Indigenous oral histories on the West Coast also recall the event. A similar quake is expected again someday."
      ],
      points: [
        { h: "Moving plates", t: "Earth's shell is broken into plates moving a few centimetres a year." },
        { h: "Divergent boundaries", t: "Plates separate and new crust forms, as at mid-ocean ridges." },
        { h: "Convergent boundaries", t: "Collisions create trenches, volcanoes and mountains like the Himalayas." },
        { h: "Transform boundaries", t: "Plates slide past each other, causing earthquakes." },
        { h: "Cascadia", t: "A major subduction zone off BC that produced a ~M9 quake in 1700." }
      ],
      example: "Iceland sits on the Mid-Atlantic Ridge. At Þingvellir National Park, you can walk in a rift valley between the North American and Eurasian plates, and divers swim in the Silfra fissure between them.",
      pitfall: "Assuming eastern Canada has no earthquake risk. The Ottawa and St. Lawrence valleys see regular smaller quakes, and Charlevoix in Quebec is one of the more seismically active areas in eastern North America.",
      terms: [
        ["Plate tectonics", "The theory that Earth's outer shell is divided into moving plates."],
        ["Pangaea", "A supercontinent that began breaking apart about 200 million years ago."],
        ["Subduction", "One plate sliding beneath another into the mantle."],
        ["Mid-ocean ridge", "An underwater mountain chain where new ocean crust forms."],
        ["Transform fault", "A boundary where plates slide horizontally past each other."]
      ],
      mcq: [
        { q: "Who proposed continental drift in 1912?", a: ["Alfred Wegener", "Charles Darwin", "Isaac Newton", "Charles Lyell"], c: 0, why: "He was dismissed for decades." },
        { q: "The Himalayas formed from…", a: ["India colliding with Asia", "A volcano", "A transform fault", "Glaciers only"], c: 0, why: "A continental collision." },
        { q: "The San Andreas Fault is an example of a…", a: ["Transform boundary", "Divergent boundary", "Subduction zone", "Hotspot"], c: 0, why: "Plates slide past each other." },
        { q: "How do we know the date of the 1700 Cascadia earthquake?", a: ["Japanese tsunami records", "Satellite data", "European newspapers", "Tree planting records"], c: 0, why: "The 'orphan tsunami'." }
      ],
      tf: [
        { s: "Tectonic plates move a few centimetres per year.", v: true, why: "About fingernail-growth speed." },
        { s: "New crust forms at mid-ocean ridges.", v: true, why: "At divergent boundaries." },
        { s: "Canada has no significant earthquake risk.", v: false, why: "Cascadia and parts of Quebec and Ontario." }
      ],
      think: [
        "Wegener was right but dismissed. What idea in your field might be ignored today because it lacks a mechanism?",
        "Should cities like Vancouver spend heavily preparing for a quake that may not come for centuries?",
        "What would Earth look like in 100 million years if plates keep moving?"
      ],
      talk: "In 1700 a magnitude-9 earthquake struck off the coast of what's now British Columbia. We know the exact date partly because Japanese records describe a mysterious tsunami with no local earthquake. It had crossed the whole Pacific."
    },
    {
      id: "geo-02",
      title: "Why Climates Are Where They Are",
      level: "Foundation",
      hook: "Why is the Sahara a desert while the Congo rainforest, not that far south, is drenched? Why is London milder than Montreal even though it's further north? A few physical rules explain most of the world's climate map.",
      bluf: "Sunlight is strongest at the equator, which drives giant air circulation patterns. Rising air near the equator brings rain; sinking air around 30° latitude brings deserts. Oceans, currents, mountains and distance from the sea then shape local climates.",
      story: [
        "## The sun does the heating",
        "Near the equator, the sun shines almost straight down, concentrating energy. Near the poles, the same sunlight spreads over a larger area at a low angle. This uneven heating drives the atmosphere and oceans as they move heat toward the poles.",
        "## Hadley cells: rain belts and desert belts",
        "Hot air rises near the equator, cools, and drops its moisture as heavy rain — hence rainforests in the Amazon, Congo and Southeast Asia. That air flows toward the poles high up, then sinks around 30° north and south. Sinking air warms and dries, suppressing rain. That's why many great deserts — the Sahara, Arabian, Kalahari and Australian deserts — sit near 30° latitude.",
        "## Oceans as thermostats",
        "Water heats and cools slowly, so coastal places have milder climates than interiors. Winnipeg, far from the ocean, swings from very cold winters to hot summers; Vancouver stays mild. Ocean currents carry heat too: the Gulf Stream and North Atlantic Drift bring warm water toward northwest Europe, which is a big part of why London is so much milder in winter than Montreal or St. John's, despite being further north.",
        "## Mountains and rain shadows",
        "When moist air hits mountains, it rises, cools and rains on the windward side. Descending on the other side, it's dry. British Columbia's coast is soaked, while parts of the interior and Alberta lie in the rain shadow of the mountains. Alberta's warm, dry chinook winds come down the eastern slopes of the Rockies and can raise temperatures dramatically in hours.",
        "## Seasons",
        "Earth's axis is tilted about 23.5°. As we orbit the sun, each hemisphere takes turns tilting toward it, getting longer days and more direct sunlight. Seasons come from tilt, not distance — Earth is actually closest to the sun in early January."
      ],
      points: [
        { h: "Uneven heating", t: "The equator receives the most concentrated sunlight." },
        { h: "Hadley cells", t: "Rising air near the equator brings rain; sinking air near 30° makes deserts." },
        { h: "Oceans moderate", t: "Coastal climates are milder; currents like the Gulf Stream move heat." },
        { h: "Rain shadows", t: "Mountains wring out moisture, leaving dry lands behind them." },
        { h: "Seasons come from tilt", t: "Earth's 23.5° tilt, not its distance from the sun." }
      ],
      example: "Calgary's chinooks are famous: on some winter days, warm downslope winds from the Rockies push temperatures from well below freezing to above zero in hours. Records include very rapid jumps, among the most dramatic temperature swings anywhere.",
      pitfall: "Believing it's summer because Earth is closer to the sun. The Northern Hemisphere's summer happens when Earth is near its farthest point from the sun.",
      terms: [
        ["Hadley cell", "A large atmospheric circulation loop between the equator and about 30° latitude."],
        ["Rain shadow", "A dry area on the leeward side of mountains."],
        ["Gulf Stream", "A warm Atlantic ocean current flowing from the Gulf of Mexico toward Europe."],
        ["Continentality", "The tendency of inland areas to have more extreme temperatures than coastal ones."],
        ["Axial tilt", "Earth's 23.5° tilt, which causes the seasons."]
      ],
      mcq: [
        { q: "Many great deserts lie near which latitude?", a: ["About 30°", "0° (equator)", "60°", "90° (poles)"], c: 0, why: "Where Hadley cell air sinks." },
        { q: "Why is London milder than Montreal in winter?", a: ["Warm Atlantic currents", "It's further south", "It's at higher altitude", "It has more sunshine"], c: 0, why: "Gulf Stream and North Atlantic Drift." },
        { q: "What causes the seasons?", a: ["Earth's axial tilt", "Distance from the sun", "The Moon", "Ocean currents"], c: 0, why: "Each hemisphere tilts toward the sun in turn." },
        { q: "Alberta's chinook winds are…", a: ["Warm, dry downslope winds", "Cold Arctic winds", "Tropical storms", "Sea breezes"], c: 0, why: "Descending from the Rockies." }
      ],
      tf: [
        { s: "Earth is closest to the sun in early January.", v: true, why: "Perihelion." },
        { s: "Rainforests form where air sinks.", v: false, why: "Where air rises and cools." },
        { s: "Inland areas tend to have more extreme temperatures than coasts.", v: true, why: "Continentality." }
      ],
      think: [
        "How does your local geography (lake, mountains, latitude) shape your weather?",
        "If ocean currents changed, how might Europe's climate change?",
        "Why are so many of the world's biggest cities on coasts?"
      ],
      talk: "Seasons have nothing to do with how close Earth is to the sun. We're actually closest in early January, in the middle of a Canadian winter. Seasons come from Earth's 23.5-degree tilt."
    },
    {
      id: "geo-03",
      title: "Rivers, Ports and Why Cities Are Where They Are",
      level: "Foundation",
      hook: "Montreal exists where it does largely because ships couldn't get past the Lachine Rapids. Toronto grew at the start of an Indigenous portage route north. Look at almost any great city and you'll find geography decided its location.",
      bluf: "Cities grow where geography offers advantages: fresh water, trade routes, safe harbours, river crossings, fertile land and defensible positions. Many of these 'first-nature' advantages faded long ago, but cities persist because of everything built since.",
      story: [
        "## Water first",
        "Early settlements needed reliable fresh water for drinking and farming. River valleys — the Nile, Tigris–Euphrates, Indus and Yellow River — cradled the first civilisations, with floods bringing fertile silt.",
        "## Trade routes and breaks in transport",
        "Before railways, water was the cheapest way to move goods. Cities grew at natural trading points: river mouths, good harbours, and places where cargo had to change transport — a 'break of bulk' point. Montreal sat at the head of navigation for ocean ships on the St. Lawrence, blocked by the Lachine Rapids, so goods were transferred there. Chicago grew at the link between the Great Lakes and the Mississippi river system.",
        "## Toronto's geography",
        "Toronto lies on a natural harbour sheltered by what became the Toronto Islands, at the southern end of the Toronto Carrying-Place Trail, an Indigenous portage route linking Lake Ontario to Lake Simcoe and the upper Great Lakes. The British chose it partly as a defensible naval base after the American Revolution.",
        "## Fall lines and crossings",
        "On many rivers, the first rapids inland (the 'fall line') stopped ships and offered water power, so mills and towns clustered there — Ottawa grew at the Chaudière Falls. Bridges and fords also attracted settlements; London grew at the lowest practical crossing point of the Thames.",
        "## Lock-in",
        "Once a city exists, roads, rail, businesses, workers and institutions concentrate there, so it keeps attracting more — even after its original advantage is gone. Economists call this agglomeration. Few people today care about the Lachine Rapids, but Montreal remains a major city."
      ],
      points: [
        { h: "Fresh water", t: "River valleys hosted the earliest civilisations." },
        { h: "Cheap water transport", t: "Before rail, rivers and coasts carried trade." },
        { h: "Break of bulk", t: "Cities grew where goods had to switch transport, like Montreal." },
        { h: "Fall lines and crossings", t: "Rapids, water power and bridges attracted towns." },
        { h: "Agglomeration", t: "Cities persist after their original advantages fade." }
      ],
      example: "Ottawa started as Bytown, a construction camp for the Rideau Canal, at the Chaudière Falls where water power drove lumber mills. Queen Victoria's choice of it as capital in 1857 was partly about defence — it was further from the US border than Toronto, Kingston or Montreal.",
      pitfall: "Assuming a city's current economy explains its location. Most major cities were founded for reasons — harbours, rapids, portages — that have little to do with what they do today.",
      terms: [
        ["Break of bulk", "A point where goods transfer between transport modes, often spawning cities."],
        ["Fall line", "Where rivers drop from uplands to lowlands, forming rapids or falls."],
        ["Portage", "Carrying boats and goods overland between waterways."],
        ["Agglomeration", "The clustering of people and businesses that reinforces a city's growth."],
        ["Head of navigation", "The farthest point upstream that ships can reach."]
      ],
      mcq: [
        { q: "Montreal grew partly because ships couldn't pass…", a: ["The Lachine Rapids", "Niagara Falls", "The Thousand Islands", "Lake Erie"], c: 0, why: "A break-of-bulk point." },
        { q: "Toronto sits at the end of which historic route?", a: ["The Toronto Carrying-Place Trail", "The Silk Road", "The Rideau Canal", "The Oregon Trail"], c: 0, why: "A portage to Lake Simcoe." },
        { q: "Why was Ottawa chosen as capital in 1857, in part?", a: ["Defence — further from the US border", "It was the largest city", "It had the best harbour", "It was on the Atlantic"], c: 0, why: "Security after the War of 1812." },
        { q: "Agglomeration explains why cities…", a: ["Keep growing after original advantages fade", "Always shrink", "Move every century", "Avoid rivers"], c: 0, why: "Concentration attracts more concentration." }
      ],
      tf: [
        { s: "The earliest civilisations grew in river valleys.", v: true, why: "Nile, Tigris–Euphrates, Indus, Yellow River." },
        { s: "Chicago grew at a link between the Great Lakes and the Mississippi system.", v: true, why: "A key trade connection." },
        { s: "Water transport was more expensive than land transport before railways.", v: false, why: "Water was far cheaper." }
      ],
      think: [
        "Why was your hometown founded where it was?",
        "Which modern 'geographic advantages' (airports, fibre cables, universities) are creating new cities today?",
        "If you were founding a city now, what would decide where?"
      ],
      talk: "Ottawa started as a construction camp for the Rideau Canal. Part of the reason it became the capital in 1857 was defence: it was further from the American border than Toronto, Kingston or Montreal."
    },
    {
      id: "geo-04",
      title: "Chokepoints: Where Geography Meets Power",
      level: "Intermediate",
      hook: "In March 2021, a single container ship, the Ever Given, wedged itself sideways in the Suez Canal. For six days, hundreds of ships queued and billions of dollars of trade stalled each day. A few narrow passages carry a huge share of world trade.",
      bluf: "Chokepoints are narrow sea passages that much of world shipping must pass through. Disruptions — accidents, droughts, conflict — ripple into prices and supply chains worldwide. Controlling or protecting them has shaped geopolitics for centuries.",
      story: [
        "## Why the sea still matters",
        "Most of the world's trade by volume travels by ship. Ships take the shortest safe routes, which funnel through a handful of narrow straits and canals.",
        "## The big ones",
        "Strait of Hormuz: between Iran and Oman; roughly a fifth of global oil consumption passes through it. Strait of Malacca: between Malaysia, Singapore and Indonesia; the shortest route between the Indian and Pacific Oceans and vital for China, Japan and South Korea. Suez Canal: links the Mediterranean and Red Sea, saving ships the long trip around Africa. Bab el-Mandeb: the southern entrance to the Red Sea. Panama Canal: links the Atlantic and Pacific. The Turkish Straits (Bosphorus and Dardanelles): Russia and Ukraine's Black Sea access.",
        "## Disruptions show the risk",
        "The Ever Given blocked Suez for six days in 2021. From late 2023, attacks on ships by Yemen's Houthi movement around Bab el-Mandeb led many shipping companies to avoid the Red Sea and sail around the Cape of Good Hope, adding roughly 10–14 days to Asia–Europe voyages. In 2023, drought lowered water levels in Gatun Lake, which feeds the Panama Canal's locks, forcing restrictions on how many ships could pass.",
        "## Geopolitics",
        "Navies exist largely to keep sea lanes open. China's concern about its dependence on the Strait of Malacca — sometimes called the 'Malacca dilemma' — has shaped its interest in alternative pipelines, ports and land routes.",
        "## Canada's own chokepoints",
        "The St. Lawrence Seaway connects the Great Lakes to the Atlantic, and the Northwest Passage through the Arctic is opening up as ice retreats. Canada considers the Passage internal waters; the US and others regard it as an international strait — a long-running disagreement that will matter more as shipping grows."
      ],
      points: [
        { h: "Most trade is by sea", t: "Ships funnel through a few narrow passages." },
        { h: "Hormuz", t: "Roughly a fifth of global oil consumption passes through it." },
        { h: "Malacca", t: "The key link between the Indian and Pacific Oceans." },
        { h: "Disruptions ripple", t: "Blockages, attacks and droughts raise costs and delay goods worldwide." },
        { h: "Northwest Passage", t: "Canada calls it internal waters; others call it an international strait." }
      ],
      example: "When Red Sea attacks pushed ships around Africa in 2024, freight rates from Asia to Europe jumped sharply, and companies faced longer delivery times. Retailers in Canada and Europe saw knock-on delays and costs for goods made in Asia.",
      pitfall: "Thinking global supply chains are mostly about factories. Shipping routes and a handful of chokepoints can be the weakest link.",
      terms: [
        ["Chokepoint", "A narrow passage that a large share of shipping must pass through."],
        ["Strait of Hormuz", "Passage between Iran and Oman carrying a large share of the world's oil."],
        ["Strait of Malacca", "Key shipping lane between the Indian and Pacific Oceans."],
        ["Suez Canal", "Canal linking the Mediterranean and Red Sea."],
        ["Northwest Passage", "Arctic sea route through Canada's northern archipelago."]
      ],
      mcq: [
        { q: "Which ship blocked the Suez Canal in 2021?", a: ["Ever Given", "Titanic", "Queen Mary", "Maersk Alabama"], c: 0, why: "For six days." },
        { q: "Roughly what share of global oil consumption passes through Hormuz?", a: ["About a fifth", "About half", "About 1%", "About 90%"], c: 0, why: "A critical energy chokepoint." },
        { q: "What restricted Panama Canal traffic in 2023?", a: ["Drought lowering lake levels", "A war", "A ship blockage", "A strike"], c: 0, why: "Gatun Lake feeds the locks." },
        { q: "Avoiding the Red Sea, ships sail around…", a: ["The Cape of Good Hope", "Cape Horn", "The Arctic", "Australia"], c: 0, why: "Around southern Africa." }
      ],
      tf: [
        { s: "Canada considers the Northwest Passage to be internal waters.", v: true, why: "A position others dispute." },
        { s: "Most of world trade by volume moves by air.", v: false, why: "It moves by sea." },
        { s: "The Strait of Malacca is important to East Asian economies.", v: true, why: "Their energy and trade route." }
      ],
      think: [
        "Which products you bought this month likely passed through a chokepoint?",
        "How should companies balance cheap global shipping against resilience?",
        "As Arctic ice retreats, what opportunities and risks does the Northwest Passage bring Canada?"
      ],
      talk: "In 2021 one container ship, the Ever Given, got stuck sideways in the Suez Canal and held up billions of dollars of trade every day for six days. A few narrow passages like that carry a huge share of everything we buy."
    },
    {
      id: "geo-05",
      title: "Canada's Geography",
      level: "Foundation",
      hook: "Canada is the world's second-largest country by area, with the longest coastline on Earth. Yet most Canadians live in a narrow band near the US border, and a huge share in the Quebec City–Windsor corridor.",
      bluf: "Canada spans six time zones and enormous landscapes: the Canadian Shield, the Prairies, the Cordillera, the Arctic, the Great Lakes–St. Lawrence lowlands and Atlantic coasts. Geography explains where Canadians live, what the economy produces and many political tensions.",
      story: [
        "## Big numbers",
        "Area: about 9.98 million km², second only to Russia. Coastline: roughly 243,000 km, the longest of any country. Lakes: Canada has more lakes than any other country, and shares the Great Lakes, which hold about a fifth of the world's surface fresh water.",
        "## The regions",
        "The Canadian Shield: ancient rock covering roughly half of Canada, scraped bare by glaciers, full of lakes, forests and minerals — poor for farming but rich in mining. The Great Lakes–St. Lawrence Lowlands: small in area, with fertile soil and mild climate, home to Toronto, Montreal, Ottawa and Quebec City. The Interior Plains (Prairies): flat grasslands for wheat, canola and cattle, plus oil and gas in Alberta and Saskatchewan. The Cordillera: the Rocky and Coast Mountains of BC and Yukon. The Arctic: tundra and islands, sparsely populated. Atlantic Canada: rugged coasts historically tied to fishing.",
        "## Where people live",
        "Roughly two-thirds of Canadians live within 100 km of the US border. The Quebec City–Windsor corridor alone holds around half the population. The north, with vast territory, has only a tiny fraction of the population.",
        "## Geography and the economy",
        "Canada's resources — oil, gas, potash, uranium, minerals, timber, hydroelectric power and fresh water — come from its landscape. Getting them to markets across mountains, Shield rock and long distances has always been the challenge. The Canadian Pacific Railway, completed in 1885, was partly a promise to bring British Columbia into Confederation.",
        "## Geography and politics",
        "Distance and regional economies create different interests: energy-producing provinces, manufacturing in Ontario and Quebec, fisheries in the Atlantic. Many political debates — pipelines, equalization, trade — are partly geography in disguise."
      ],
      points: [
        { h: "Second-largest country", t: "About 9.98 million km², with the world's longest coastline." },
        { h: "The Canadian Shield", t: "Ancient rock covering about half the country, rich in minerals." },
        { h: "Population near the border", t: "About two-thirds within 100 km of the US." },
        { h: "Quebec City–Windsor corridor", t: "Home to around half of Canadians." },
        { h: "Geography shapes politics", t: "Regional economies drive debates on energy, trade and transfers." }
      ],
      example: "Building pipelines from Alberta's oil sands to coasts has been contentious for years: routes must cross mountains or the Shield, multiple provinces and many Indigenous territories. Geography turns an engineering project into a national political debate.",
      pitfall: "Picturing Canada as mostly empty. The land is vast, but cities are dense and growing; Canada is one of the most urbanised countries in the world.",
      terms: [
        ["Canadian Shield", "A vast area of ancient exposed rock covering about half of Canada."],
        ["Quebec City–Windsor corridor", "Canada's most populated and industrialised region."],
        ["Interior Plains", "The flat Prairie region between the Shield and the Rockies."],
        ["Cordillera", "The mountainous region of western Canada."],
        ["Tundra", "Treeless Arctic land with permanently frozen subsoil."]
      ],
      mcq: [
        { q: "Canada's rank in land area worldwide?", a: ["Second", "First", "Fifth", "Tenth"], c: 0, why: "After Russia." },
        { q: "Which region covers about half of Canada?", a: ["The Canadian Shield", "The Prairies", "The Cordillera", "The Arctic Archipelago"], c: 0, why: "Ancient exposed rock." },
        { q: "Roughly how many Canadians live within 100 km of the US border?", a: ["About two-thirds", "About 10%", "About a quarter", "Nearly everyone"], c: 0, why: "Population hugs the south." },
        { q: "The Great Lakes hold about what share of the world's surface fresh water?", a: ["About a fifth", "About 1%", "About half", "About 90%"], c: 0, why: "A huge freshwater reserve." }
      ],
      tf: [
        { s: "Canada has the world's longest coastline.", v: true, why: "About 243,000 km." },
        { s: "The Canadian Shield is excellent farmland.", v: false, why: "Thin soils; better for mining and forestry." },
        { s: "The Canadian Pacific Railway was completed in 1885.", v: true, why: "Linking BC to the east." }
      ],
      think: [
        "How does geography shape the political differences between your province and others?",
        "Should Canada encourage more people to live in the north? How?",
        "What resource will matter most to Canada in 50 years: oil, water, minerals or something else?"
      ],
      talk: "Canada is the second-largest country in the world, yet about two-thirds of Canadians live within 100 km of the US border, and roughly half in the strip from Quebec City to Windsor. Huge country, very concentrated population."
    },
    {
      id: "geo-06",
      title: "Maps That Lie",
      level: "Foundation",
      hook: "On many classroom maps, Greenland looks about as big as Africa. In reality, Africa is roughly 14 times larger. That map isn't wrong by accident — it's a trade-off made in 1569 for sailors.",
      bluf: "You can't flatten a sphere without distortion. Every map projection sacrifices something — area, shape, distance or direction. The Mercator projection preserves angles for navigation but massively enlarges areas near the poles.",
      story: [
        "## The orange-peel problem",
        "Try flattening an orange peel and it tears or stretches. The Earth is the same. Every flat map must distort something, and mapmakers choose what to preserve depending on the map's purpose.",
        "## Mercator: built for sailors",
        "Flemish cartographer Gerardus Mercator published his projection in 1569. Its key feature: a straight line on the map is a line of constant compass bearing, which made navigation by compass far easier. The price: areas are stretched more and more toward the poles. Greenland, Canada's Arctic islands, Russia and Antarctica look enormous; equatorial Africa, South America and India look small.",
        "## The real sizes",
        "Africa is about 30 million km² — big enough to fit the United States, China, India and much of Europe inside it. Greenland is about 2.2 million km². Canada and Russia look huge on Mercator maps, and they are big, but not as big as they look relative to countries near the equator.",
        "## Other projections",
        "Equal-area projections (like the Gall–Peters or Mollweide) keep sizes accurate but distort shapes. Compromise projections like the Robinson or Winkel Tripel (used by National Geographic since 1998) balance distortions for general-purpose world maps. Web maps like Google Maps use a version of Mercator because it keeps local shapes and angles correct when you zoom into streets.",
        "## Maps shape perception",
        "Maps influence how we picture the world's importance. Some argue Mercator's enlargement of northern countries subtly shaped views of global significance. Boston public schools switched to the Gall–Peters projection for many classrooms in 2017 for this reason. Asking 'What does this map distort, and why?' is a good habit for any chart or data visualisation."
      ],
      points: [
        { h: "No perfect flat map", t: "Every projection distorts area, shape, distance or direction." },
        { h: "Mercator, 1569", t: "Preserves angles for compass navigation but inflates polar areas." },
        { h: "Africa vs Greenland", t: "Africa is about 14 times larger, despite appearances." },
        { h: "Choose for the purpose", t: "Equal-area maps for size comparisons; Mercator for local navigation." },
        { h: "Maps shape views", t: "Projections can subtly influence perceptions of importance." }
      ],
      example: "Put Greenland next to Africa on a globe or on an interactive site like 'The True Size Of' — dragging countries toward the equator shows them shrinking dramatically. Canada dragged to the equator is still large, but far less dominant than on a Mercator map.",
      pitfall: "Comparing country sizes using a standard web or Mercator map. Use a globe or an equal-area projection for any size comparison.",
      terms: [
        ["Map projection", "A method of representing Earth's curved surface on a flat map."],
        ["Mercator projection", "A 1569 projection preserving angles, inflating areas near the poles."],
        ["Equal-area projection", "A projection that keeps relative sizes accurate."],
        ["Winkel Tripel", "A compromise projection adopted by National Geographic in 1998."],
        ["Rhumb line", "A line of constant compass bearing, straight on a Mercator map."]
      ],
      mcq: [
        { q: "Roughly how much larger is Africa than Greenland?", a: ["About 14 times", "About the same", "About twice", "About 100 times"], c: 0, why: "30 vs 2.2 million km²." },
        { q: "Mercator's projection was designed mainly for…", a: ["Compass navigation", "Comparing country sizes", "Political borders", "Air travel"], c: 0, why: "Straight lines = constant bearings." },
        { q: "Which projection keeps areas accurate?", a: ["Gall–Peters", "Mercator", "Web Mercator", "None ever"], c: 0, why: "It's equal-area." },
        { q: "Why do web maps use Mercator-style projections?", a: ["They keep local shapes and angles correct when zoomed in", "They're equal-area", "They're the oldest", "They show Africa larger"], c: 0, why: "Good for street-level navigation." }
      ],
      tf: [
        { s: "It's possible to make a flat map with no distortion at all.", v: false, why: "A sphere can't be flattened perfectly." },
        { s: "Mercator inflates areas near the poles.", v: true, why: "Greenland looks huge." },
        { s: "National Geographic adopted the Winkel Tripel projection in 1998.", v: true, why: "A compromise projection." }
      ],
      think: [
        "What 'map' at work (a dashboard, an org chart) distorts reality in a way that shapes decisions?",
        "How might a map centred on the Pacific or with south at the top change your view of the world?",
        "Which countries do you think are bigger or smaller than you'd assumed?"
      ],
      talk: "On a standard world map Greenland looks about as big as Africa. Africa is actually about 14 times larger. The usual map, Mercator's from 1569, was built for compass navigation, not for comparing sizes."
    }
  ]
});
