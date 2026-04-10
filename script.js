// NicoleBlog - Blog post data and rendering logic

const posts = [
  {
    id: "hello-world",
    title: "Hello, World! Welcome to My Blog",
    date: "April 10, 2026",
    category: "Personal",
    excerpt: "Every journey begins with a single step — and this is mine. Welcome to NicoleBlog, a little corner of the internet where I'll share my thoughts, discoveries, and stories.",
    content: `
      <p>Every journey begins with a single step — and this is mine. Welcome to <strong>NicoleBlog</strong>, a little corner of the internet where I'll share my thoughts, discoveries, and stories.</p>

      <h2>Why I Started This Blog</h2>
      <p>I've always loved writing, but I never had a dedicated place to put my words. Journals filled with half-finished thoughts, notes scattered across sticky pads and phone apps — none of it felt quite right. Then I thought: why not build something of my own?</p>

      <p>This blog is that something. It's a place where I can:</p>
      <ul>
        <li>Share what I'm learning day to day</li>
        <li>Reflect on books, ideas, and experiences</li>
        <li>Connect with people who are curious about the same things</li>
      </ul>

      <h2>What to Expect</h2>
      <p>I don't plan to stick to a single topic. Expect a mix of personal essays, practical tips, recommendations, and the occasional deep-dive into something that caught my attention this week.</p>

      <blockquote>The best blogs are honest, curious, and a little unpredictable — I hope this one will be all three.</blockquote>

      <p>Thanks for stopping by. Stick around — it's going to be a fun ride. 🎉</p>
    `
  },
  {
    id: "things-im-reading",
    title: "Five Books That Changed How I Think",
    date: "April 8, 2026",
    category: "Books",
    excerpt: "A curated list of the books that genuinely shifted my perspective — not just what I think, but how I approach problems, relationships, and creativity.",
    content: `
      <p>Some books are enjoyable reads. Others quietly rearrange the furniture in your mind. Here are five books that did the latter for me.</p>

      <h2>1. Thinking, Fast and Slow — Daniel Kahneman</h2>
      <p>This was the book that made me realize how unreliable my own thinking can be. Kahneman's two-systems model of cognition is both humbling and incredibly practical. I now catch myself asking: <em>"Am I thinking fast or slow right now?"</em></p>

      <h2>2. The Artist's Way — Julia Cameron</h2>
      <p>A creativity classic. The morning pages practice alone was worth the read. It sounds mundane — write three pages every morning — but it unlocks something.</p>

      <h2>3. Atomic Habits — James Clear</h2>
      <p>I know, I know. Everyone recommends this one. But it earned its reputation. The core insight — that systems matter more than goals — genuinely changed how I approach daily life.</p>

      <blockquote>You do not rise to the level of your goals. You fall to the level of your systems.</blockquote>

      <h2>4. A Room of One's Own — Virginia Woolf</h2>
      <p>Woolf's argument about what women need to create freely is as relevant today as it was in 1929. Beautiful, sharp, and slightly devastating.</p>

      <h2>5. When Things Fall Apart — Pema Chödrön</h2>
      <p>I picked this up during a hard period and found more comfort in it than anywhere else. It's about leaning into discomfort rather than running from it. Simple, profound, necessary.</p>

      <p>What books have changed how you think? I'd love to know — there are always more to add to the list.</p>
    `
  },
  {
    id: "slow-mornings",
    title: "The Case for Slow Mornings",
    date: "April 5, 2026",
    category: "Lifestyle",
    excerpt: "In a world optimized for productivity, I've been experimenting with doing the opposite in the first hour of the day — and it's been surprisingly good.",
    content: `
      <p>For most of my life, mornings felt like a race I was already losing before it started. Alarm → phone → notifications → coffee → out the door. Repeat forever.</p>

      <p>Then, a few months ago, I started an experiment: what if I slowed everything down?</p>

      <h2>The Rules I Set</h2>
      <ul>
        <li>No phone for the first 45 minutes after waking</li>
        <li>Make coffee slowly, without rushing</li>
        <li>Sit somewhere quiet and just… be there</li>
        <li>Write a few lines (the morning pages habit from <em>The Artist's Way</em>)</li>
      </ul>

      <h2>What Happened</h2>
      <p>The first week was genuinely uncomfortable. My hands kept reaching for my phone. I felt like I was wasting time, falling behind. Old habits are loud.</p>

      <p>By week two, something shifted. I noticed I was arriving at my desk feeling clearer. Less reactive. Like I'd had a chance to become myself before the day started asking things of me.</p>

      <blockquote>You can't pour from an empty cup — and slow mornings are how I refill mine.</blockquote>

      <h2>The Practical Reality</h2>
      <p>I won't pretend this is easy every day. Some mornings I'm running late and the whole ritual goes out the window. But even on those days, I try to hold onto <em>something</em> — even just five minutes of quiet with my coffee before the chaos begins.</p>

      <p>If you're curious about trying it: start with just ten minutes. Put your phone in another room the night before. See what happens.</p>
    `
  }
];

/**
 * Render the list of blog posts on the homepage
 */
function renderPostList() {
  const container = document.getElementById("posts-list");
  if (!container) return;

  container.innerHTML = posts
    .map(
      (post) => `
    <article class="post-card">
      <div class="post-card-meta">
        <span class="tag">${post.category}</span>
        ${post.date}
      </div>
      <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
      <p>${post.excerpt}</p>
      <a class="read-more" href="post.html?id=${post.id}">Read article</a>
    </article>
  `
    )
    .join("");
}

/**
 * Render a single blog post given its ID from the URL query string
 */
function renderPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    document.title = "Post Not Found — NicoleBlog";
    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = `
        <a class="back-link" href="index.html">Back to all posts</a>
        <p>Sorry, that post couldn't be found.</p>
      `;
    }
    return;
  }

  document.title = `${post.title} — NicoleBlog`;

  const titleEl = document.getElementById("post-title");
  const metaEl = document.getElementById("post-meta");
  const excerptEl = document.getElementById("post-excerpt");
  const contentEl = document.getElementById("post-content");

  if (titleEl) titleEl.textContent = post.title;
  if (metaEl) metaEl.textContent = `${post.category} · ${post.date}`;
  if (excerptEl) excerptEl.textContent = post.excerpt;
  if (contentEl) contentEl.innerHTML = post.content;
}

// Initialize based on current page
if (document.getElementById("posts-list")) {
  renderPostList();
} else {
  renderPost();
}
