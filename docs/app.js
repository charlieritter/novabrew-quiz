const data = {
  personalities: {
    "Bold Explorer": {
      summary: "Adventurous, intense, and drawn to strong points of view.",
      description:
        "You like a little edge in the experience. Bold Explorer personalities gravitate toward dramatic flavors, memorable moments, and coffees that feel like a story worth chasing. You do not want safe when something unforgettable is on the table.",
      coffee: {
        name: "Double Down",
        description:
          "Extra-bold espresso roast, thick crema, no apologies. The coffee equivalent of committing fully — no hedging, maximum presence in the cup."
      }
    },
    "Smooth Operator": {
      summary: "Polished, balanced, and effortlessly composed.",
      description:
        "You value refinement over noise. Smooth Operator personalities prefer a coffee experience that feels considered, elevated, and quietly confident. You are not chasing chaos. You are choosing taste with intention.",
      coffee: {
        name: "Velvet Fog",
        description:
          "Medium-light, creamy mouthfeel, almond and cocoa notes. Refined and polished, never overreaches. Quietly excellent — just like you."
      }
    },
    "Cozy Classic": {
      summary: "Warm, grounded, and ritual-oriented.",
      description:
        "You are building a mood as much as a routine. Cozy Classic personalities want coffee that feels reassuring, familiar, and emotionally steady. Comfort is not boring to you. It is a craft.",
      coffee: {
        name: "Sunday Paper",
        description:
          "Medium roast, hazelnut and vanilla, comfort in a cup. Dependable every morning. The name alone does the work."
      }
    },
    "Wild Card": {
      summary: "Curious, creative, and drawn to the unexpected.",
      description:
        "You are energized by novelty and beauty that does not look like everyone else's. Wild Card personalities lean toward coffees that feel alive, expressive, and just strange enough to be interesting.",
      coffee: {
        name: "Off the Map",
        description:
          "Experimental processing, funky fruit notes, surprises every time. A rotating micro-lot where unpredictability is the whole point."
      }
    }
  },
  questions: [
    {
      prompt: "How do you usually take your coffee?",
      choices: [
        { text: "Black, no hesitation", type: "Bold Explorer" },
        { text: "A splash of milk, nothing more", type: "Smooth Operator" },
        { text: "Creamy and a little sweet", type: "Cozy Classic" },
        { text: "Whatever the barista recommends today", type: "Wild Card" }
      ]
    },
    {
      prompt: "What does your ideal morning look like?",
      choices: [
        { text: "Up early, moving fast, agenda already set", type: "Bold Explorer" },
        { text: "Unhurried, a good routine, everything in its place", type: "Smooth Operator" },
        { text: "Slow, quiet, no alarm if possible", type: "Cozy Classic" },
        { text: "Depends entirely on the day", type: "Wild Card" }
      ]
    },
    {
      prompt: "When you try a new coffee, what are you hoping for?",
      choices: [
        { text: "Something intense that makes an impression", type: "Bold Explorer" },
        { text: "Balanced and reliable, something I'd order again", type: "Smooth Operator" },
        { text: "Familiar and comforting, like a good habit", type: "Cozy Classic" },
        { text: "Something I've never tasted before", type: "Wild Card" }
      ]
    },
    {
      prompt: "How do you make decisions?",
      choices: [
        { text: "Quickly and confidently", type: "Bold Explorer" },
        { text: "Carefully, with all the information", type: "Smooth Operator" },
        { text: "I trust what has worked before", type: "Cozy Classic" },
        { text: "I go with whatever feels right in the moment", type: "Wild Card" }
      ]
    },
    {
      prompt: "Pick the weekend that sounds best.",
      choices: [
        { text: "A long hike somewhere remote and demanding", type: "Bold Explorer" },
        { text: "A well-planned city trip with great restaurants", type: "Smooth Operator" },
        { text: "A slow day at home with no real agenda", type: "Cozy Classic" },
        { text: "Booking something last-minute and figuring it out", type: "Wild Card" }
      ]
    },
    {
      prompt: "What do you look for in a great product?",
      choices: [
        { text: "It's the best at what it does, no compromises", type: "Bold Explorer" },
        { text: "Consistent quality, every single time", type: "Smooth Operator" },
        { text: "It feels familiar and dependable", type: "Cozy Classic" },
        { text: "It surprises me in some way", type: "Wild Card" }
      ]
    },
    {
      prompt: "How do you feel about trying something completely new?",
      choices: [
        { text: "I seek it out", type: "Bold Explorer" },
        { text: "Only if it comes recommended", type: "Smooth Operator" },
        { text: "I prefer to stick with what I know", type: "Cozy Classic" },
        { text: "New is always better than familiar", type: "Wild Card" }
      ]
    }
  ]
};

const state = {
  step: "intro",
  currentQuestion: 0,
  answers: []
};

const app = document.getElementById("app");

function computeResult() {
  const counts = {};
  let lastType = null;
  for (const a of state.answers) {
    counts[a.type] = (counts[a.type] || 0) + 1;
    lastType = a.type;
  }
  const sorted = Object.entries(counts).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    if (a[0] === lastType) return -1;
    if (b[0] === lastType) return 1;
    return 0;
  });
  return sorted[0]?.[0] || "Smooth Operator";
}

function renderIntro() {
  return `
    <div class="card intro fade-in">
      <div class="intro-meta">
        <span class="brand eyebrow">NovaBrew</span>
        <span class="eyebrow" style="color: var(--muted); font-weight: 400">Coffee Taste Profile</span>
      </div>
      <h1>Find Your Coffee Personality</h1>
      <p class="lead">
        Seven questions designed to match you with the NovaBrew coffee that fits your energy best.
        Answer instinctively — this is designed to feel like a premium personality experience, not a survey.
      </p>
      <div class="intro-stats">
        <div>
          <div class="stat-label">Questions</div>
          <div class="stat-value">Seven</div>
        </div>
        <div>
          <div class="stat-label">Result Format</div>
          <div class="stat-value">Single Result</div>
        </div>
        <div>
          <div class="stat-label">Personalities</div>
          <div class="stat-value">Four Types</div>
        </div>
      </div>
      <button class="btn-primary" data-action="start">Begin the Quiz</button>
    </div>
  `;
}

function renderQuiz() {
  const q = data.questions[state.currentQuestion];
  const pct = ((state.currentQuestion + 1) / data.questions.length) * 100;
  return `
    <div class="card quiz fade-in">
      <div class="quiz-meta">
        <div class="question-count">Question ${state.currentQuestion + 1} of ${data.questions.length}</div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${pct}%"></div>
        </div>
      </div>
      <h1>${q.prompt}</h1>
      <p class="subtitle">Choose the option that feels most instinctive.</p>
      <div class="divider"></div>
      <div class="options">
        ${q.choices.map((c, i) => `
          <button class="option" data-action="answer" data-index="${i}">
            <span class="option-text">${c.text}</span>
            <span class="option-arrow">→</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderResult() {
  const name = computeResult();
  const p = data.personalities[name];
  const shareText = `I got ${name} on the NovaBrew Coffee Taste Profile. ${p.summary} My match is ${p.coffee.name}.`;
  return `
    <div class="card result fade-in">
      <div class="result-eyebrow">Your coffee personality</div>
      <h1>${name}</h1>
      <p class="result-summary">${p.summary}</p>
      <p class="result-copy">${p.description}</p>
      <div class="coffee-block">
        <div class="section-label">Your NovaBrew Match</div>
        <div class="coffee-name">${p.coffee.name}</div>
        <p class="coffee-copy">${p.coffee.description}</p>
      </div>
      <div class="result-actions">
        <button class="btn-primary" data-action="share" data-share="${encodeURIComponent(shareText)}">Copy Result</button>
        <button class="btn-secondary" data-action="retake">Retake Quiz</button>
      </div>
    </div>
  `;
}

function render() {
  if (state.step === "intro") app.innerHTML = renderIntro();
  else if (state.step === "quiz") app.innerHTML = renderQuiz();
  else app.innerHTML = renderResult();
}

function toast(msg) {
  document.querySelectorAll(".toast").forEach(t => t.remove());
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1900);
}

document.addEventListener("click", async e => {
  const el = e.target.closest("[data-action]");
  if (!el) return;
  const { action } = el.dataset;

  if (action === "start") {
    state.step = "quiz";
    state.currentQuestion = 0;
    state.answers = [];
    render();
  }

  if (action === "answer") {
    const choice = data.questions[state.currentQuestion].choices[Number(el.dataset.index)];
    state.answers.push(choice);
    if (state.currentQuestion === data.questions.length - 1) {
      state.step = "result";
    } else {
      state.currentQuestion++;
    }
    render();
  }

  if (action === "retake") {
    state.step = "intro";
    render();
  }

  if (action === "share") {
    const text = decodeURIComponent(el.dataset.share);
    try {
      await navigator.clipboard.writeText(text);
      toast("Result copied to clipboard");
    } catch {
      toast("Select the text above to copy manually");
    }
  }
});

render();
