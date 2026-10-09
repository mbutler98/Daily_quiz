/* Topic: Artificial Intelligence
   Each lesson follows the 80/20 format:
   bluf    – Bottom Line Up Front: the one idea to keep
   points  – the few concepts that get you 80% of the way
   example – the idea applied in the real world
   pitfall – the most common misunderstanding
   terms   – used for flashcards, matching and spaced review
   mcq/tf  – multiple choice and true/false checks            */
WP.addTopic({
  id: "ai",
  name: "Artificial Intelligence",
  code: "AI",
  blurb: "How modern AI models work, how they are built, and how to use them well.",
  lessons: [
    {
      id: "ai-01",
      title: "How a Large Language Model Works",
      level: "Foundation",
      minutes: 6,
      bluf: "A large language model (LLM) is a very large prediction engine. It reads text as small pieces called tokens and repeatedly predicts the most likely next token. Everything it does — writing, coding, answering — comes from that one skill done at huge scale.",
      points: [
        { h: "Text becomes tokens", t: "Text is split into tokens: whole words, parts of words, or symbols. A rough rule: 1 token is about 3/4 of an English word. Models read, think and charge by tokens." },
        { h: "One job: predict the next token", t: "The model outputs a probability for every possible next token, picks one, adds it to the text, and repeats. Long answers are built one token at a time." },
        { h: "Knowledge lives in parameters", t: "Parameters (or weights) are billions of numbers tuned during training. They store patterns of language and facts — not a database of documents." },
        { h: "The context window is working memory", t: "The model only 'sees' what fits in its context window: your prompt, attached files and the conversation so far. Anything outside it does not exist for the model." },
        { h: "Temperature controls randomness", t: "Low temperature picks the most likely tokens (focused, repeatable). Higher temperature samples more widely (varied, creative, riskier)." }
      ],
      example: "When you ask \"What is the capital of France?\", the model has seen that pattern countless times, so the token \"Paris\" gets a very high probability. Ask about an obscure local fact and the probabilities flatten out — that is where made-up answers appear.",
      pitfall: "Thinking the model 'looks things up'. A plain LLM does not search anything. Unless it is connected to tools such as web search, it answers from patterns stored in its weights, and those stop at its training cut-off date.",
      terms: [
        ["Token", "A small chunk of text (word, part of a word, or symbol) that a model reads and writes."],
        ["Parameters", "The billions of numbers (weights) inside a model, set during training, that store learned patterns."],
        ["Context window", "The maximum amount of text (in tokens) a model can consider at one time."],
        ["Temperature", "A setting that controls how random or predictable a model's word choices are."],
        ["Next-token prediction", "The core task of an LLM: estimate the most likely next piece of text."]
      ],
      mcq: [
        { q: "What is the core task an LLM is trained to do?", a: ["Predict the next token", "Search the internet", "Store documents in a database", "Translate only between languages"], c: 0, why: "Every LLM capability comes from predicting the next token very well." },
        { q: "Roughly how many English words is 1,000 tokens?", a: ["About 750 words", "About 100 words", "About 5,000 words", "Exactly 1,000 words"], c: 0, why: "A token is roughly 3/4 of an English word on average." },
        { q: "You want consistent, repeatable answers. Which setting helps most?", a: ["Low temperature", "High temperature", "A shorter prompt", "More parameters"], c: 0, why: "Low temperature makes the model pick the most likely tokens, so outputs vary less." },
        { q: "Information that is NOT in the context window is…", a: ["Not visible to the model for that request", "Automatically retrieved by the model", "Stored in the model's short-term memory", "Ignored only if it is very long"], c: 0, why: "The context window is the model's whole view of the current task." }
      ],
      tf: [
        { s: "A standard LLM checks a live database of facts before answering.", v: false, why: "Without tools, it answers from patterns learned during training." },
        { s: "Long answers are generated one token at a time.", v: true, why: "Each new token is predicted from all the text before it." },
        { s: "Higher temperature makes outputs more varied.", v: true, why: "It flattens the probabilities so less likely tokens get chosen more often." },
        { s: "Parameters are a list of documents the model memorised.", v: false, why: "Parameters are numeric weights that encode patterns, not stored documents." }
      ]
    },
    {
      id: "ai-02",
      title: "How Models Are Trained",
      level: "Foundation",
      minutes: 6,
      bluf: "Modern AI assistants are built in stages. Pre-training on huge amounts of text gives broad knowledge. Fine-tuning teaches the model to follow instructions. Feedback training (such as RLHF) shapes it to be helpful, honest and safe.",
      points: [
        { h: "Stage 1 — Pre-training", t: "The model learns to predict the next token across trillions of tokens of text and code. This is the expensive part: weeks or months on thousands of chips. The result is a 'base model' that continues text but does not reliably follow instructions." },
        { h: "Stage 2 — Supervised fine-tuning (SFT)", t: "The base model is trained on curated examples of good instructions and good answers. It learns the format of being an assistant." },
        { h: "Stage 3 — Learning from feedback", t: "People (or AI judges guided by written principles) compare answers and pick the better one. Reinforcement learning then pushes the model toward preferred behaviour. This is RLHF (human feedback) or RLAIF (AI feedback)." },
        { h: "Loss is the score being minimised", t: "During training, 'loss' measures how wrong the predictions are. Training is the process of nudging parameters to lower the loss, a step at a time (gradient descent)." },
        { h: "Data quality beats raw volume", t: "Cleaner, more diverse, well-filtered data often matters more than simply adding more data." }
      ],
      example: "Ask a raw base model \"Write a haiku about rain\" and it might continue with \"Write a haiku about snow. Write a haiku about…\" because that pattern appears in lists online. After fine-tuning and feedback training, it writes the haiku.",
      pitfall: "Assuming fine-tuning is the best way to add new knowledge. Fine-tuning mainly changes behaviour and style. To give a model fresh or private facts, retrieval (RAG) is usually cheaper and more reliable.",
      terms: [
        ["Pre-training", "The first, largest training stage: learning to predict text from a huge general dataset."],
        ["Fine-tuning", "Further training on a smaller, targeted dataset to change a model's behaviour."],
        ["RLHF", "Reinforcement Learning from Human Feedback: training a model toward answers people prefer."],
        ["Loss", "A number measuring how wrong a model's predictions are; training tries to reduce it."],
        ["Gradient descent", "The method of adjusting parameters in small steps in the direction that reduces loss."]
      ],
      mcq: [
        { q: "Which stage uses the most data and compute?", a: ["Pre-training", "Supervised fine-tuning", "Prompting", "Evaluation"], c: 0, why: "Pre-training runs over trillions of tokens and dominates the cost." },
        { q: "What does RLHF mainly improve?", a: ["How well answers match human preferences", "The size of the context window", "The speed of the chips", "The number of tokens in the vocabulary"], c: 0, why: "RLHF steers the model toward answers people rate as better." },
        { q: "During training, the goal is to…", a: ["Reduce the loss", "Increase the loss", "Increase the temperature", "Remove parameters"], c: 0, why: "Lower loss means predictions closer to the training data." },
        { q: "A base model (before fine-tuning) is best described as…", a: ["A text continuer that may not follow instructions", "A finished chat assistant", "A search engine", "A rule-based expert system"], c: 0, why: "Base models continue text; instruction-following comes from later stages." }
      ],
      tf: [
        { s: "Fine-tuning is usually the cheapest way to keep a model's facts up to date.", v: false, why: "Retrieval (RAG) is usually cheaper and easier to update." },
        { s: "In RLAIF, an AI model helps provide the feedback signal.", v: true, why: "RLAIF = Reinforcement Learning from AI Feedback." },
        { s: "Gradient descent changes parameters to reduce loss.", v: true, why: "That is exactly what it does, in many small steps." },
        { s: "Adding more data always beats cleaning existing data.", v: false, why: "Data quality often matters as much as or more than raw volume." }
      ]
    },
    {
      id: "ai-03",
      title: "Transformers and Attention",
      level: "Intermediate",
      minutes: 7,
      bluf: "The transformer is the design behind almost every modern language model. Its key idea, attention, lets each word look at every other word in the text and decide which ones matter for understanding it.",
      points: [
        { h: "Born in 2017", t: "The paper \"Attention Is All You Need\" (Google, 2017) introduced the transformer. It replaced older step-by-step designs (RNNs) and could be trained in parallel on GPUs." },
        { h: "Attention = weighted focus", t: "For each token, attention scores how relevant every other token is, then blends their information. In \"The bird dropped the worm because it was full\", attention helps link \"it\" to \"bird\"." },
        { h: "Query, Key, Value", t: "Each token produces a Query (what am I looking for?), a Key (what do I contain?) and a Value (what do I pass on?). Matching Queries to Keys gives the attention weights applied to Values." },
        { h: "Many heads, many layers", t: "Multi-head attention runs several attention patterns at once (grammar, meaning, position…). Dozens of stacked layers build understanding from simple to abstract." },
        { h: "The cost grows with length", t: "Standard attention compares every token with every other token, so cost grows roughly with the square of the context length. That is why very long contexts are expensive." }
      ],
      example: "In translation, the French word order differs from English. Attention lets the model look directly at the right source word for each output word, regardless of where it sits in the sentence.",
      pitfall: "Treating attention maps as a full explanation of why a model answered something. They show where information flowed, not the model's complete reasoning.",
      terms: [
        ["Transformer", "The neural network architecture, introduced in 2017, that underpins modern LLMs."],
        ["Attention", "A mechanism that lets each token weigh the relevance of every other token."],
        ["Multi-head attention", "Running several attention patterns in parallel to capture different relationships."],
        ["Query / Key / Value", "The three vectors each token creates so attention can match and pass on information."],
        ["RNN", "Recurrent Neural Network: an older design that processes text one step at a time."]
      ],
      mcq: [
        { q: "What problem did transformers solve compared with RNNs?", a: ["They can be trained in parallel efficiently", "They need no data", "They use no parameters", "They only work on images"], c: 0, why: "Processing all tokens at once made large-scale GPU training practical." },
        { q: "In attention, matching a Query against Keys produces…", a: ["Attention weights", "New tokens", "The loss", "The temperature"], c: 0, why: "The Query–Key match decides how much each Value contributes." },
        { q: "Why is a very long context window expensive?", a: ["Attention cost grows roughly with the square of length", "Tokens get bigger", "The model must be retrained", "It reduces the parameter count"], c: 0, why: "Every token attends to every other token." },
        { q: "Multi-head attention allows a model to…", a: ["Track several kinds of relationships at once", "Read multiple languages only", "Skip training", "Use fewer layers"], c: 0, why: "Each head can specialise in a different pattern." }
      ],
      tf: [
        { s: "The transformer was introduced in the paper \"Attention Is All You Need\".", v: true, why: "Published by Google researchers in 2017." },
        { s: "Attention lets a token use information from distant tokens directly.", v: true, why: "That is its key advantage over step-by-step designs." },
        { s: "Attention maps fully explain a model's reasoning.", v: false, why: "They show information flow, not complete reasoning." },
        { s: "Transformers must process text strictly one word at a time during training.", v: false, why: "They process whole sequences in parallel during training." }
      ]
    },
    {
      id: "ai-04",
      title: "Embeddings and RAG",
      level: "Intermediate",
      minutes: 6,
      bluf: "Embeddings turn text into lists of numbers where similar meanings sit close together. Retrieval-Augmented Generation (RAG) uses them to find the right documents and hand them to the model, so it answers from your sources instead of memory.",
      points: [
        { h: "Embeddings map meaning to space", t: "An embedding is a vector (a list of numbers). Texts with similar meaning get similar vectors, even with different words: \"car\" sits near \"automobile\"." },
        { h: "Similarity search", t: "To find relevant text, embed the question and find the stored vectors closest to it (often by cosine similarity). A vector database does this quickly at scale." },
        { h: "RAG in three steps", t: "1) Retrieve the most relevant chunks. 2) Insert them into the prompt. 3) Generate an answer grounded in those chunks, ideally with citations." },
        { h: "Chunking matters", t: "Documents are split into chunks before embedding. Too small loses context; too large dilutes relevance. A few hundred tokens with some overlap is a common start." },
        { h: "Why RAG wins", t: "It adds fresh or private knowledge without retraining, cuts made-up answers, and lets you show sources." }
      ],
      example: "A company help bot embeds 5,000 policy pages. When an employee asks \"How many days of parental leave do I get?\", it retrieves the three most similar chunks from the HR policy and answers from them, citing the page.",
      pitfall: "Blaming the model when RAG answers are wrong. Most failures come from retrieval: poor chunking, the wrong documents, or stale data. Check what was retrieved first.",
      terms: [
        ["Embedding", "A vector of numbers representing the meaning of a piece of text."],
        ["RAG", "Retrieval-Augmented Generation: fetching relevant documents and adding them to the prompt."],
        ["Vector database", "A store built to quickly find the vectors most similar to a query vector."],
        ["Cosine similarity", "A measure of how closely two vectors point in the same direction."],
        ["Chunking", "Splitting documents into smaller pieces before embedding them."]
      ],
      mcq: [
        { q: "Two sentences with similar meaning but different words will have embeddings that are…", a: ["Close together", "Far apart", "Identical", "Unrelated"], c: 0, why: "Embeddings capture meaning, not just exact words." },
        { q: "What is the main benefit of RAG?", a: ["Answers grounded in current or private sources", "Faster chips", "Smaller models", "No need for prompts"], c: 0, why: "RAG feeds the model relevant source material at question time." },
        { q: "A RAG bot gives a wrong answer. What should you check first?", a: ["Which chunks were retrieved", "The model's temperature", "The GPU type", "The font size"], c: 0, why: "Most RAG failures begin with poor retrieval." },
        { q: "Which step comes first in RAG?", a: ["Retrieve relevant chunks", "Generate the answer", "Retrain the model", "Delete old documents"], c: 0, why: "Retrieve → augment the prompt → generate." }
      ],
      tf: [
        { s: "RAG requires retraining the model whenever documents change.", v: false, why: "You only update the document index, not the model." },
        { s: "An embedding is a list of numbers.", v: true, why: "It is a vector, often hundreds or thousands of numbers long." },
        { s: "Chunk size has no effect on retrieval quality.", v: false, why: "Chunk size strongly affects what gets matched." },
        { s: "RAG makes it easier to cite sources.", v: true, why: "You know exactly which documents were supplied." }
      ]
    },
    {
      id: "ai-05",
      title: "AI Agents and Tool Use",
      level: "Intermediate",
      minutes: 6,
      bluf: "An AI agent is a model that works in a loop: it plans, takes actions with tools, checks the results, and repeats until the goal is met. Tools are what let a model act in the world instead of just writing text.",
      points: [
        { h: "Tool use (function calling)", t: "Developers describe tools — search, calculator, database, code runner — in a structured format. The model decides when to call one and with what inputs; the app runs it and returns the result." },
        { h: "The agent loop", t: "Think → Act (call a tool) → Observe (read the result) → repeat. The loop ends when the model judges the task complete or hits a limit." },
        { h: "Standard connectors", t: "The Model Context Protocol (MCP), introduced by Anthropic in 2024, is an open standard for connecting models to tools and data sources, so one integration works across many apps." },
        { h: "Autonomy needs guardrails", t: "Agents can make mistakes that compound over many steps. Good systems limit permissions, require approval for risky actions, and log every step." },
        { h: "Start simple", t: "A single model call with good tools often beats a complex multi-agent setup. Add agents only when the task truly needs many dynamic steps." }
      ],
      example: "Asked to \"find last quarter's top 3 customers and email them a thank-you\", an agent queries the sales database, ranks results, drafts the emails, and pauses for your approval before sending.",
      pitfall: "Giving an agent broad permissions on day one. Grant the minimum access needed and keep a human approval step for anything irreversible, like payments or deleting data.",
      terms: [
        ["AI agent", "A model running in a loop that plans, uses tools, observes results and continues toward a goal."],
        ["Tool use", "A model calling external functions (search, code, APIs) by producing structured requests."],
        ["MCP", "Model Context Protocol: an open standard for connecting AI models to tools and data."],
        ["Agent loop", "The repeating cycle of think, act, observe."],
        ["Human-in-the-loop", "A design where a person reviews or approves key steps of an automated process."]
      ],
      mcq: [
        { q: "What makes a model an 'agent' rather than a chatbot?", a: ["It loops through actions with tools toward a goal", "It has more parameters", "It writes longer answers", "It uses a higher temperature"], c: 0, why: "Agents act, observe and repeat; chatbots reply once." },
        { q: "In function calling, who actually runs the tool?", a: ["The application", "The model's weights", "The user, always manually", "The training data"], c: 0, why: "The model requests the call; the surrounding app executes it." },
        { q: "What is MCP for?", a: ["Connecting models to tools and data in a standard way", "Compressing model weights", "Measuring chip performance", "Translating code"], c: 0, why: "It standardises integrations between AI apps and external systems." },
        { q: "Which is the safest design for an agent that can send money?", a: ["Require human approval before payments", "Give it full account access", "Let it retry until it works", "Hide its logs"], c: 0, why: "Irreversible actions should have a human checkpoint." }
      ],
      tf: [
        { s: "Agent errors can compound over many steps.", v: true, why: "An early mistake can carry through the rest of the loop." },
        { s: "Multi-agent systems are always better than a single model with tools.", v: false, why: "Simpler designs often perform as well and are easier to control." },
        { s: "The agent loop is: think, act, observe, repeat.", v: true, why: "That cycle continues until the task is complete." },
        { s: "Least-privilege access is good practice for agents.", v: true, why: "Give only the permissions the task needs." }
      ]
    },
    {
      id: "ai-06",
      title: "Hallucinations and Evaluation",
      level: "Foundation",
      minutes: 5,
      bluf: "Models can produce confident answers that are wrong — called hallucinations. You cannot remove the risk completely, so you measure it with evaluations and reduce it with grounding, clear prompts and verification.",
      points: [
        { h: "Why hallucinations happen", t: "The model is trained to produce plausible text. When it lacks knowledge, the most plausible-sounding continuation can still be false." },
        { h: "Benchmarks give a rough map", t: "Public benchmarks test skills like maths, coding and knowledge. They are useful for comparison but can be 'contaminated' if test questions leaked into training data." },
        { h: "Build your own evals", t: "The best test is a set of real examples from your task with known good answers. Run every model or prompt change against it." },
        { h: "Reduce the risk", t: "Supply sources (RAG), ask for citations, allow the model to say \"I don't know\", lower temperature for factual work, and verify high-stakes outputs." },
        { h: "Overfitting", t: "A model (or a prompt) tuned too closely to its test cases can look great on them yet fail on new inputs. Hold some test cases back." }
      ],
      example: "Lawyers have been sanctioned for filing briefs with court cases that an AI tool invented. A simple check — searching each cited case in a legal database — would have caught them.",
      pitfall: "Trusting a high benchmark score as proof a model suits your task. Test on your own data before relying on it.",
      terms: [
        ["Hallucination", "A confident but false or fabricated output from an AI model."],
        ["Benchmark", "A standard test set used to compare model performance."],
        ["Data contamination", "When benchmark questions appear in training data, inflating scores."],
        ["Eval", "A repeatable test of model outputs against expected results for a specific task."],
        ["Overfitting", "Performing well on known examples but poorly on new ones."]
      ],
      mcq: [
        { q: "Why do models hallucinate?", a: ["They generate plausible text even without real knowledge", "They are connected to bad websites", "Their screens are miscalibrated", "They run out of tokens"], c: 0, why: "Plausibility is not the same as truth." },
        { q: "Which is the best test of whether a model fits YOUR task?", a: ["An eval built from your real examples", "The highest public benchmark score", "The model's parameter count", "Its release date"], c: 0, why: "Task-specific evals reflect your actual use." },
        { q: "Data contamination makes benchmark scores…", a: ["Look better than true ability", "Look worse than true ability", "Unchanged", "Impossible to calculate"], c: 0, why: "The model may have memorised the answers." },
        { q: "Which step does NOT reduce hallucination risk?", a: ["Raising temperature for factual answers", "Providing source documents", "Allowing \"I don't know\"", "Verifying citations"], c: 0, why: "Higher temperature increases randomness." }
      ],
      tf: [
        { s: "Hallucinations can be fully eliminated with a good prompt.", v: false, why: "They can be reduced, not guaranteed away." },
        { s: "Holding back some test cases helps detect overfitting.", v: true, why: "Unseen cases show how well performance generalises." },
        { s: "A confident tone is a reliable sign an answer is correct.", v: false, why: "Models sound equally confident when wrong." },
        { s: "Asking for citations makes answers easier to verify.", v: true, why: "You can check each source directly." }
      ]
    },
    {
      id: "ai-07",
      title: "Prompting and Reasoning Models",
      level: "Foundation",
      minutes: 6,
      bluf: "Clear prompts get better results: give context, a specific task, examples, and the output format you want. Newer 'reasoning' models also think step by step before answering, trading time and cost for accuracy on hard problems.",
      points: [
        { h: "Context, task, format", t: "Tell the model who it is helping and why, exactly what to do, and how the answer should look (bullets, table, word limit). Vague in, vague out." },
        { h: "Show examples (few-shot)", t: "Including 2–3 examples of good input→output pairs is one of the most reliable ways to get consistent results." },
        { h: "Chain of thought", t: "Asking a model to work through a problem step by step before answering improves accuracy on maths, logic and planning tasks." },
        { h: "Reasoning models and test-time compute", t: "Reasoning models are trained to think at length before answering. Spending more computation at answer time ('test-time compute') often improves results on hard problems." },
        { h: "Iterate like an engineer", t: "Treat prompts as drafts. Test, look at failures, adjust one thing, test again." }
      ],
      example: "Weak: \"Summarise this report.\" Strong: \"You're briefing a busy CFO. Summarise this report in 5 bullets, each under 20 words, leading with the biggest financial risk. End with one recommended action.\"",
      pitfall: "Using a slow, expensive reasoning model for simple tasks like reformatting text. Match the model to the job: fast models for simple work, reasoning models for hard problems.",
      terms: [
        ["Prompt", "The instructions and context given to a model for a task."],
        ["Few-shot prompting", "Including a few worked examples in the prompt to guide the output."],
        ["Chain of thought", "Having a model reason step by step before giving a final answer."],
        ["Test-time compute", "Extra computation spent while answering (e.g. longer thinking) to improve accuracy."],
        ["System prompt", "Standing instructions that set a model's role and rules for a whole conversation."]
      ],
      mcq: [
        { q: "Which addition most reliably improves output consistency?", a: ["A few examples of the desired output", "Writing in capital letters", "Saying please", "Making the prompt longer with filler"], c: 0, why: "Few-shot examples show the model exactly what good looks like." },
        { q: "Chain of thought helps most with…", a: ["Multi-step logic and maths", "Spelling a single word", "Changing font", "Reducing cost"], c: 0, why: "Breaking problems into steps reduces reasoning errors." },
        { q: "What does 'test-time compute' mean?", a: ["Extra computation used while generating an answer", "Time spent on unit tests", "Training compute", "Network speed"], c: 0, why: "It is thinking done at answer time, not training time." },
        { q: "Best model choice for converting a list into a table?", a: ["A fast, low-cost model", "The largest reasoning model", "A model fine-tuned on law", "An image model"], c: 0, why: "Simple tasks don't need expensive reasoning." }
      ],
      tf: [
        { s: "Specifying the output format usually improves results.", v: true, why: "The model no longer has to guess what you want." },
        { s: "Reasoning models are always the best choice regardless of task.", v: false, why: "They are slower and costlier; overkill for simple jobs." },
        { s: "A system prompt sets rules for the whole conversation.", v: true, why: "It frames every later response." },
        { s: "Prompt engineering is a one-shot activity with no testing needed.", v: false, why: "Good prompts come from iterating on real failures." }
      ]
    },
    {
      id: "ai-08",
      title: "Scaling Laws and Compute",
      level: "Intermediate",
      minutes: 6,
      bluf: "AI has improved mainly by scaling three ingredients together: model size, training data and compute. Scaling laws show performance improves predictably as these grow — which is why AI progress is tied to chips, power and data centres.",
      points: [
        { h: "The three levers", t: "Parameters (model size), training tokens (data) and compute (total calculations, measured in FLOPs). Grow them in balance for the best results." },
        { h: "Scaling laws", t: "Researchers found loss falls smoothly and predictably as you scale. This let labs forecast a big model's quality from small experiments." },
        { h: "Chinchilla rule of thumb", t: "DeepMind's 2022 'Chinchilla' study suggested roughly 20 training tokens per parameter for compute-efficient training. Many earlier models were too big for their data." },
        { h: "GPUs and accelerators", t: "Training runs on thousands of GPUs or custom chips (like TPUs) working in parallel. Chip supply, memory and electricity are now strategic constraints." },
        { h: "Training vs inference cost", t: "Training is a large one-off cost. Inference — running the model for users — is paid every time it is used, and at scale can exceed training costs." }
      ],
      example: "A 70-billion-parameter model trained compute-optimally would use about 1.4 trillion tokens (70B × 20). Smaller models trained on far more data are now common because they are cheaper to run for users.",
      pitfall: "Assuming bigger is always better. A smaller model trained on more, better data can beat a larger one, and is much cheaper to serve.",
      terms: [
        ["Scaling laws", "Predictable relationships between model performance and size, data and compute."],
        ["FLOPs", "Floating-point operations: the count of calculations used to measure compute."],
        ["Chinchilla ratio", "About 20 training tokens per parameter for compute-efficient training."],
        ["Inference", "Running a trained model to produce outputs for users."],
        ["GPU", "Graphics Processing Unit: a chip that runs many calculations in parallel, ideal for AI."]
      ],
      mcq: [
        { q: "Which are the three main scaling levers?", a: ["Parameters, data, compute", "Fonts, colours, layout", "Prompts, users, apps", "RAM, disks, fans"], c: 0, why: "Performance scales with model size, data and compute together." },
        { q: "By the Chinchilla rule, a 10B-parameter model should train on about…", a: ["200 billion tokens", "10 billion tokens", "20 million tokens", "2 trillion tokens"], c: 0, why: "10B × 20 = 200B tokens." },
        { q: "Which cost recurs every time a model is used?", a: ["Inference", "Pre-training", "Data collection", "Architecture design"], c: 0, why: "Inference runs on every request." },
        { q: "Why were scaling laws so valuable to AI labs?", a: ["They let labs predict large-model results from small runs", "They removed the need for data", "They made chips cheaper", "They eliminated hallucinations"], c: 0, why: "Predictability made huge investments less risky." }
      ],
      tf: [
        { s: "A larger model always outperforms a smaller one.", v: false, why: "Data quantity and quality can let smaller models win." },
        { s: "FLOPs measure the amount of computation.", v: true, why: "They count floating-point operations." },
        { s: "At large scale, inference costs can exceed training costs.", v: true, why: "Millions of users generate ongoing compute demand." },
        { s: "Scaling laws show performance changes randomly with size.", v: false, why: "They show smooth, predictable improvement." }
      ]
    }
  ]
});
