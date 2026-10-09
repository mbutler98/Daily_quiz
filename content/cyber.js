/* Topic: Cybersecurity */
WP.addTopic({
  id: "cyber",
  name: "Cybersecurity",
  code: "CYB",
  blurb: "How attackers think, how systems are defended, and the habits that stop most breaches.",
  lessons: [
    {
      id: "cyber-01",
      title: "The CIA Triad and Threat Modelling",
      level: "Foundation",
      minutes: 5,
      bluf: "Security protects three things: Confidentiality (only the right people see it), Integrity (it hasn't been tampered with) and Availability (it works when needed). Threat modelling asks: what are we protecting, from whom, and how could it go wrong?",
      points: [
        { h: "Confidentiality", t: "Keeping information secret from unauthorised people. Tools: encryption, access controls, need-to-know." },
        { h: "Integrity", t: "Making sure data and systems are accurate and unaltered. Tools: hashing, digital signatures, change control." },
        { h: "Availability", t: "Keeping systems running for legitimate users. Threats: outages, ransomware, denial-of-service attacks. Tools: backups, redundancy." },
        { h: "Risk = threat × vulnerability × impact", t: "A threat is who or what might cause harm; a vulnerability is a weakness; impact is the damage if it happens. Reduce any one to reduce risk." },
        { h: "Threat modelling", t: "Map the system, list what could go wrong (e.g. with the STRIDE checklist), and rank fixes by risk. Do it at design time, not after a breach." }
      ],
      example: "Ransomware hits all three: attackers steal data (confidentiality), encrypt or alter files (integrity) and lock the business out of its systems (availability).",
      pitfall: "Focusing only on secrecy. A hospital's records being unavailable during an emergency can be as dangerous as them being leaked.",
      terms: [
        ["Confidentiality", "Ensuring information is accessible only to those authorised to see it."],
        ["Integrity", "Ensuring data is accurate and has not been altered without authorisation."],
        ["Availability", "Ensuring systems and data are accessible when needed."],
        ["Vulnerability", "A weakness that a threat could exploit."],
        ["Threat modelling", "A structured way to identify what could go wrong with a system and prioritise defences."]
      ],
      mcq: [
        { q: "A denial-of-service attack mainly targets…", a: ["Availability", "Confidentiality", "Integrity", "Authentication"], c: 0, why: "It knocks the service offline." },
        { q: "A hacker changes the amount on a bank transfer. Which property is breached?", a: ["Integrity", "Availability", "Confidentiality", "None"], c: 0, why: "The data was altered." },
        { q: "Which best reduces impact if ransomware strikes?", a: ["Tested offline backups", "A longer password policy document", "A faster internet connection", "Turning off logging"], c: 0, why: "Backups let you restore without paying." },
        { q: "When is threat modelling most valuable?", a: ["During design", "After a breach only", "Never", "At retirement of the system"], c: 0, why: "Fixes are cheapest early." }
      ],
      tf: [
        { s: "The 'A' in the CIA triad stands for Authentication.", v: false, why: "It stands for Availability." },
        { s: "Encryption mainly supports confidentiality.", v: true, why: "It keeps data unreadable to outsiders." },
        { s: "A vulnerability is a weakness that could be exploited.", v: true, why: "That's the definition." },
        { s: "Ransomware can affect all three parts of the CIA triad.", v: true, why: "Theft, tampering and lock-out." }
      ]
    },
    {
      id: "cyber-02",
      title: "Phishing, Passwords and MFA",
      level: "Foundation",
      minutes: 5,
      bluf: "Most breaches start with people, not code: a convincing email, a reused password, or a stolen login. Three habits stop the majority: verify unexpected requests, use a password manager, and turn on multi-factor authentication.",
      points: [
        { h: "Phishing", t: "Fake messages that trick you into clicking, logging in or paying. Signs: urgency, unusual requests, mismatched sender addresses, links that don't go where they claim." },
        { h: "Social engineering", t: "Manipulating people rather than systems — fake IT support calls, CEO-fraud emails asking for urgent transfers, or tailgating into buildings." },
        { h: "Password managers", t: "Let you use a long, unique password for every site. Reused passwords mean one breach unlocks many accounts (credential stuffing)." },
        { h: "Multi-factor authentication (MFA)", t: "Combines something you know (password), have (phone, security key) or are (fingerprint). It blocks the vast majority of automated account attacks." },
        { h: "Phishing-resistant MFA", t: "Hardware security keys and passkeys (FIDO2) can't be phished like text-message codes, because they check the real website's identity." }
      ],
      example: "Finance receives an email from the 'CEO' asking for an urgent wire to a new supplier, keep it quiet. A quick call to the CEO on a known number reveals it's fake — saving the firm a six-figure loss.",
      pitfall: "Thinking only careless people get phished. Well-crafted, targeted phishing (spear phishing) fools experts. Build verification habits, not just awareness.",
      terms: [
        ["Phishing", "Fraudulent messages designed to trick people into revealing data or taking harmful actions."],
        ["Spear phishing", "Phishing tailored to a specific person or organisation."],
        ["MFA", "Multi-factor authentication: requiring two or more types of proof to log in."],
        ["Credential stuffing", "Using leaked username/password pairs to break into other accounts."],
        ["Passkey", "A phishing-resistant login credential based on public-key cryptography (FIDO2)."]
      ],
      mcq: [
        { q: "Which MFA method is most phishing-resistant?", a: ["Hardware security key / passkey", "SMS code", "Email code", "Security questions"], c: 0, why: "It verifies the real site's identity cryptographically." },
        { q: "Why is password reuse dangerous?", a: ["One breach can unlock many accounts", "It slows your computer", "It's illegal", "It wears out the keyboard"], c: 0, why: "Attackers try leaked passwords everywhere." },
        { q: "Best response to an urgent payment request by email?", a: ["Verify via a known phone number", "Pay quickly to be helpful", "Reply to the email asking if it's real", "Forward it to friends"], c: 0, why: "Out-of-band verification defeats impersonation." },
        { q: "Your password plus a fingerprint is MFA because it combines…", a: ["Something you know and something you are", "Two passwords", "Two devices", "Nothing — it's single factor"], c: 0, why: "Different factor types." }
      ],
      tf: [
        { s: "Phishing messages often create a sense of urgency.", v: true, why: "Urgency stops people from thinking." },
        { s: "A password manager encourages reusing one strong password.", v: false, why: "It enables a unique password for every site." },
        { s: "Replying to a suspicious email is a safe way to verify it.", v: false, why: "You'll just reach the attacker." },
        { s: "MFA blocks most automated account takeover attempts.", v: true, why: "A stolen password alone isn't enough." }
      ]
    },
    {
      id: "cyber-03",
      title: "Encryption and Hashing",
      level: "Intermediate",
      minutes: 6,
      bluf: "Encryption scrambles data so only someone with the key can read it. Symmetric encryption uses one shared key and is fast; asymmetric uses a public/private key pair and solves the key-sharing problem. Hashing is different: a one-way fingerprint, not reversible.",
      points: [
        { h: "Symmetric encryption", t: "Same key locks and unlocks. Fast — used for bulk data. Example: AES. Challenge: securely sharing the key." },
        { h: "Asymmetric encryption", t: "A public key (shareable) and a private key (secret). Anything locked with the public key only opens with the private one. Examples: RSA, elliptic-curve (ECC)." },
        { h: "How HTTPS uses both", t: "TLS uses asymmetric cryptography to agree a session key safely, then switches to fast symmetric encryption for the conversation." },
        { h: "Hashing", t: "A hash function (e.g. SHA-256) turns any input into a fixed-length fingerprint. Change one character and the hash changes completely. You can't reverse it." },
        { h: "Digital signatures", t: "Signing with a private key lets anyone verify with the public key that a message came from you and wasn't altered." }
      ],
      example: "Websites shouldn't store your password — they store a salted hash of it. At login they hash what you type and compare. If the database leaks, attackers get hashes, not passwords.",
      pitfall: "Calling hashing 'encryption'. Encryption is designed to be reversed with a key; hashing is designed never to be reversed.",
      terms: [
        ["Symmetric encryption", "Encryption using the same secret key to encrypt and decrypt (e.g. AES)."],
        ["Asymmetric encryption", "Encryption using a public/private key pair (e.g. RSA, ECC)."],
        ["Hash function", "A one-way function that produces a fixed-length fingerprint of data."],
        ["Digital signature", "Proof of origin and integrity created with a private key, verified with a public key."],
        ["Salt", "Random data added to a password before hashing so identical passwords get different hashes."]
      ],
      mcq: [
        { q: "Which is a symmetric algorithm?", a: ["AES", "RSA", "ECC", "SHA-256"], c: 0, why: "AES uses one shared key." },
        { q: "Which is NOT reversible by design?", a: ["Hashing", "Symmetric encryption", "Asymmetric encryption", "TLS"], c: 0, why: "Hashes are one-way." },
        { q: "To send someone a secret using asymmetric encryption, you encrypt with…", a: ["Their public key", "Their private key", "Your private key", "No key"], c: 0, why: "Only their private key can decrypt it." },
        { q: "Why does HTTPS use symmetric encryption for the main data?", a: ["It's much faster", "It's unbreakable", "It needs no key", "It's required by law"], c: 0, why: "Asymmetric is slow; it's used only to set up the session key." }
      ],
      tf: [
        { s: "Changing one character in the input completely changes a SHA-256 hash.", v: true, why: "That's the avalanche effect." },
        { s: "Your private key should be shared with people who send you messages.", v: false, why: "Share only the public key." },
        { s: "Salting helps defend stored password hashes.", v: true, why: "It defeats pre-computed lookup tables." },
        { s: "Digital signatures provide proof of integrity and origin.", v: true, why: "Verifiable with the signer's public key." }
      ]
    },
    {
      id: "cyber-04",
      title: "Networks, Firewalls and Zero Trust",
      level: "Intermediate",
      minutes: 6,
      bluf: "Old security assumed anything inside the company network was safe — a castle and moat. Zero trust assumes breach: verify every user, device and request every time, and give only the minimum access needed.",
      points: [
        { h: "IP addresses and ports", t: "An IP address finds the machine; a port finds the service on it. Common ports: 443 (HTTPS), 22 (SSH), 53 (DNS)." },
        { h: "Firewalls", t: "Filter traffic by rules — allow or block by address, port, application. Default should be 'deny unless needed'." },
        { h: "Castle-and-moat fails", t: "Once an attacker gets inside (via phishing or a stolen VPN login), a flat network lets them move sideways (lateral movement) to valuable systems." },
        { h: "Zero trust", t: "Never trust, always verify: strong identity checks, device health checks, and access decided per request — wherever the user is." },
        { h: "Least privilege and segmentation", t: "Give each user and service the minimum access needed, and split networks into zones so a breach in one doesn't spread." }
      ],
      example: "In the 2013 Target breach, attackers used stolen credentials from a heating and ventilation supplier to get inside, then moved through the network to payment systems. Segmentation could have contained it.",
      pitfall: "Treating zero trust as a product you buy. It's an approach built from identity, device management, segmentation and monitoring working together.",
      terms: [
        ["Port", "A numbered endpoint identifying a specific service on a networked machine."],
        ["Firewall", "A system that allows or blocks network traffic based on rules."],
        ["Zero trust", "A security model that verifies every access request and never assumes trust by location."],
        ["Lateral movement", "An attacker moving from one compromised system to others inside a network."],
        ["Least privilege", "Granting only the minimum access needed to do a task."]
      ],
      mcq: [
        { q: "HTTPS normally uses port…", a: ["443", "22", "53", "80"], c: 0, why: "80 is plain HTTP; 443 is HTTPS." },
        { q: "The core principle of zero trust is…", a: ["Never trust, always verify", "Trust everything inside", "Block all traffic", "Use only passwords"], c: 0, why: "Location alone grants no trust." },
        { q: "Network segmentation mainly limits…", a: ["Lateral movement", "Internet speed", "Email size", "Password length"], c: 0, why: "Breaches stay contained in one zone." },
        { q: "A good default firewall stance is…", a: ["Deny unless explicitly needed", "Allow everything", "Allow everything except email", "Random"], c: 0, why: "Minimises exposed attack surface." }
      ],
      tf: [
        { s: "Zero trust assumes users inside the office network are safe.", v: false, why: "It verifies every request regardless of location." },
        { s: "Port 22 is commonly used for SSH.", v: true, why: "Secure Shell's default port." },
        { s: "Least privilege reduces the damage a compromised account can do.", v: true, why: "Less access means less impact." },
        { s: "Zero trust is a single product you install.", v: false, why: "It's an architecture and approach." }
      ]
    },
    {
      id: "cyber-05",
      title: "Common Web Vulnerabilities",
      level: "Intermediate",
      minutes: 6,
      bluf: "Most web attacks exploit a few well-known mistakes: trusting user input, broken access checks, and unpatched software. The OWASP Top 10 lists them — fix those and you remove most of the real-world risk.",
      points: [
        { h: "Injection", t: "When user input is mixed into a command or database query, attackers can add their own instructions. SQL injection is the classic. Fix: parameterised queries." },
        { h: "Cross-site scripting (XSS)", t: "An attacker gets a site to show their script to other users, which can steal sessions. Fix: escape output and use a content security policy." },
        { h: "Broken access control", t: "Users reaching data or actions they shouldn't — e.g. changing an ID in the URL to see another customer's account. A perennial leader in the OWASP Top 10." },
        { h: "Vulnerable components", t: "Old libraries with known flaws. Many breaches use bugs that already had a patch available." },
        { h: "Defence in depth", t: "Layer defences — input validation, secure defaults, logging, patching — so one failure isn't fatal." }
      ],
      example: "The 2017 Equifax breach exposed data on about 147 million people. Attackers exploited a known flaw in Apache Struts web software for which a patch had been released months earlier.",
      pitfall: "Relying on hiding things (security through obscurity), like unguessable URLs instead of real access checks. Always enforce permissions on the server.",
      terms: [
        ["SQL injection", "Inserting malicious database commands through unsanitised user input."],
        ["XSS", "Cross-site scripting: injecting scripts into pages viewed by other users."],
        ["Broken access control", "Failures that let users act outside their intended permissions."],
        ["OWASP Top 10", "A widely used list of the most critical web application security risks."],
        ["Defence in depth", "Using multiple layers of security controls so one failure isn't catastrophic."]
      ],
      mcq: [
        { q: "Best fix for SQL injection?", a: ["Parameterised queries", "Longer passwords", "Hiding the login page", "Bigger servers"], c: 0, why: "Input is treated as data, never as code." },
        { q: "Changing /account/1001 to /account/1002 shows another customer's data. This is…", a: ["Broken access control", "XSS", "Phishing", "DDoS"], c: 0, why: "The server failed to check permissions." },
        { q: "What did the Equifax breach exploit?", a: ["An unpatched known vulnerability", "A zero-day in Windows", "A phishing email only", "A physical break-in"], c: 0, why: "A patch existed but wasn't applied in time." },
        { q: "XSS attacks typically target…", a: ["Other users' browsers", "The server's power supply", "Network cables", "The database schema directly"], c: 0, why: "Injected script runs in victims' browsers." }
      ],
      tf: [
        { s: "Security through obscurity is a strong replacement for access checks.", v: false, why: "Hidden is not protected." },
        { s: "Many breaches exploit vulnerabilities that already had patches.", v: true, why: "Patching delays are a major cause." },
        { s: "Defence in depth relies on a single strong control.", v: false, why: "It uses multiple layers." },
        { s: "Escaping output helps prevent XSS.", v: true, why: "It stops input being run as script." }
      ]
    }
  ]
});
