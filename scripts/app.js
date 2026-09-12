(function () {
  const content = window.PORTFOLIO_CONTENT;
  const app = document.getElementById("app");
  const currentPage = document.body.dataset.page || "home";
  const languageStorageKey = "eli-portfolio-language";
  let currentLanguage = localStorage.getItem(languageStorageKey) || "en";
  let menuOpen = false;

  const collectionMap = {
    ux: content.ux,
    "product-design": content.productDesign,
    "virtual-reality": content.virtualReality,
  };

  function text(value) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return value[currentLanguage] || value.en || "";
    }
    return value || "";
  }

  function pageLink(key) {
    const item = content.navigation.find((navItem) => navItem.key === key);
    return item ? item.href : "index.html";
  }

  function allProjectItems() {
    return Object.values(collectionMap).flatMap((section) => section.items || []);
  }

  function projectCategoryForSlug(slug) {
    const entry = Object.entries(collectionMap).find(([, section]) =>
      (section.items || []).some((item) => item.slug === slug)
    );
    return entry ? entry[0] : "ux";
  }

  function renderMenuPanel() {
    const links = content.navigation
      .map(
        (item) => `
          <a class="menu-panel-link" href="${item.href}" data-menu-link>
            <span class="menu-panel-index">${String(content.navigation.indexOf(item) + 1).padStart(2, "0")}</span>
            <span class="menu-panel-title">${text(item.label)}</span>
          </a>
        `
      )
      .join("");

    return `
      <div class="menu-panel ${menuOpen ? "is-open" : ""}" data-menu-panel>
        <button
          class="menu-backdrop"
          type="button"
          aria-label="${currentLanguage === "en" ? "Close navigation" : "关闭导航"}"
          data-menu-close
        ></button>
        <div class="menu-panel-grid">
          ${links}
        </div>
      </div>
    `;
  }

  function renderHeader() {
    const navLinks = content.navigation
      .map((item) => {
        const active = item.key === currentPage ? ' aria-current="page"' : "";
        return `<a class="nav-link" href="${item.href}"${active}>${text(item.label)}</a>`;
      })
      .join("");

    return `
      <header class="site-header ${menuOpen ? "menu-open" : ""}">
        <div class="brand-cluster">
          <button
            class="menu-toggle"
            type="button"
            data-menu-toggle
            aria-expanded="${menuOpen ? "true" : "false"}"
            aria-label="${currentLanguage === "en" ? "Toggle navigation" : "切换导航"}"
          >
            <span class="menu-mark" aria-hidden="true">
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </span>
          </button>
          <a class="brand" href="index.html">
            <span class="brand-name">${text(content.profile.name)}</span>
            <span class="brand-role">${text(content.profile.role)}</span>
          </a>
        </div>
        <nav class="site-nav" aria-label="Primary navigation">
          ${navLinks}
        </nav>
        <button class="lang-toggle" type="button" data-lang-toggle>
          ${currentLanguage === "en" ? "中文" : "EN"}
        </button>
      </header>
      ${renderMenuPanel()}
    `;
  }

  function renderFooter() {
    return `
      <footer class="site-footer">
        <p>${text(content.footer.statement)}</p>
        <div class="footer-links">
          <a href="${content.profile.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:${content.profile.email}">${content.profile.email}</a>
        </div>
      </footer>
    `;
  }

  function renderCollectionCards(items) {
    return items
      .map(
        (item) => `
          <article class="card project-card">
            <a class="card-surface interactive-card" href="project.html?slug=${item.slug}">
              <div class="card-image-wrap">
                <img class="card-image" src="${item.image}" alt="${text(item.title)}" />
              </div>
              <div class="card-copy">
                <div class="card-meta">
                  <span>${text(item.category)}</span>
                  <span>${item.year}</span>
                </div>
                <h3>${text(item.title)}</h3>
                <p>${text(item.summary)}</p>
                <p class="secondary">${text(item.role)}</p>
                <dl class="mini-meta">
                  <div>
                    <dt>${currentLanguage === "en" ? "Year" : "年份"}</dt>
                    <dd>${item.year}</dd>
                  </div>
                  <div>
                    <dt>${currentLanguage === "en" ? "Focus" : "重点"}</dt>
                    <dd>${item.tags.slice(0, 2).join(" / ")}</dd>
                  </div>
                </dl>
                <div class="tag-row">
                  ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
              </div>
            </a>
          </article>
        `
      )
      .join("");
  }

  function renderExperimentCards() {
    return content.experiments.items
      .map(
        (item) => `
          <article class="card experiment-card">
            <div class="card-surface simple-card">
              <div class="eyebrow">${text(item.input)}</div>
              <h3>${text(item.title)}</h3>
              <p>${text(item.description)}</p>
              <div class="tag-row">
                ${item.tech.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderArchiveCards(items) {
    return items
      .map(
        (item) => `
          <article class="card">
            <div class="card-surface simple-card">
              <img class="archive-image" src="${item.image}" alt="${text(item.title)}" />
              <div class="card-meta">
                <span>${text(item.category)}</span>
                <span>${item.year}</span>
              </div>
              <h3>${text(item.title)}</h3>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderHome() {
    const mainTracks = content.home.tracks
      .map(
        (track) => `
          <article class="capability track-card">
            <a href="${pageLink(track.key)}" class="track-link">
              <h3>${text(track.title)}</h3>
              <p>${text(track.description)}</p>
            </a>
          </article>
        `
      )
      .join("");

    return `
      <main>
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow">${text(content.home.heroEyebrow)}</p>
            <h1>${text(content.profile.name)}</h1>
            <h2>${text(content.profile.role)}</h2>
            <p class="hero-text">${text(content.profile.tagline)} ${text(content.profile.intro)}</p>
            <div class="hero-actions">
              <a class="button primary" href="${pageLink("ux")}">${text(content.home.ctaPrimary)}</a>
              <a class="button secondary" href="${pageLink("about")}">${text(content.home.ctaSecondary)}</a>
            </div>
          </div>
          <div class="hero-visual">
            <img class="hero-image" src="${content.home.heroImage}" alt="${text(content.profile.name)}" />
            <div class="hero-overlay-word">${currentLanguage === "en" ? "Portfolio" : "作品集"}</div>
          </div>
        </section>

        <section class="manifesto">
          <p>${text(content.home.manifesto)}</p>
        </section>

        <section class="section">
          <div class="section-heading">
            <h2>${text(content.home.sectionTitles.featured)}</h2>
            <p>${text(content.home.sectionText.featured)}</p>
          </div>
          <div class="capability-grid track-grid">
            ${mainTracks}
          </div>
        </section>

        <section class="section">
          <div class="section-heading">
            <h2>${text(content.home.sectionTitles.capabilities)}</h2>
          </div>
          <div class="capability-grid">
            ${content.capabilities
              .map(
                (item) => `
                  <article class="capability simple-card">
                    <h3>${text(item.title)}</h3>
                    <p>${text(item.description)}</p>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="section">
          <div class="section-heading">
            <h2>${text(content.home.sectionTitles.experiments)}</h2>
            <p>${text(content.home.sectionText.experiments)}</p>
          </div>
          <div class="card-grid three-up">
            ${renderExperimentCards()}
          </div>
        </section>

        <section class="section about-preview">
          <div class="section-heading">
            <h2>${text(content.home.sectionTitles.about)}</h2>
            <p>${text(content.home.sectionText.about)}</p>
          </div>
          <a class="button tertiary" href="${pageLink("about")}">${currentLanguage === "en" ? "Read More" : "继续阅读"}</a>
        </section>
      </main>
    `;
  }

  function renderCollectionPage(key, section, eyebrow) {
    const countLabel = currentLanguage === "en" ? "Selected projects" : "精选项目";
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${eyebrow}</p>
          <h1>${text(section.pageTitle)}</h1>
          <p>${text(section.pageIntro)}</p>
          <div class="page-stat">${String(section.items.length).padStart(2, "0")} ${countLabel}</div>
        </section>
        <section class="section compact">
          <div class="card-grid three-up">
            ${renderCollectionCards(section.items)}
          </div>
        </section>
      </main>
    `;
  }

  function renderProjects() {
    const items = allProjectItems();
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${currentLanguage === "en" ? "Index" : "索引"}</p>
          <h1>${currentLanguage === "en" ? "Projects" : "项目"}</h1>
          <p>${
            currentLanguage === "en"
              ? "A complete project index across UX, product design, graduate research, and selected visual work."
              : "这里汇总 UX、产品设计、研究生研究与精选视觉项目。"
          }</p>
          <div class="page-stat">${String(items.length).padStart(2, "0")} ${
            currentLanguage === "en" ? "Total projects" : "项目总数"
          }</div>
        </section>
        <section class="section compact">
          <div class="card-grid three-up">
            ${renderCollectionCards(items)}
          </div>
        </section>
      </main>
    `;
  }

  function renderExperiments() {
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${currentLanguage === "en" ? "Lab" : "实验室"}</p>
          <h1>${text(content.experiments.pageTitle)}</h1>
          <p>${text(content.experiments.pageIntro)}</p>
        </section>
        <section class="section compact">
          <div class="card-grid three-up">
            ${renderExperimentCards()}
          </div>
        </section>
      </main>
    `;
  }

  function renderProjectDetail() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    const projects = allProjectItems();
    const project = projects.find((item) => item.slug === slug) || projects[0];
    const projectIndex = projects.findIndex((item) => item.slug === project.slug);
    const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
    const next = projects[(projectIndex + 1) % projects.length];
    const section = project.sections || {};
    return `
      <main class="inner-page">
        <section class="page-intro project-hero">
          <div>
            <p class="eyebrow">${text(project.category)} / ${project.year}</p>
            <h1>${text(project.title)}</h1>
            <p>${text(project.hero) || text(project.summary)}</p>
          </div>
          <div class="metric-grid">
            ${project.metrics
              .map(
                (metric) => `
                  <div class="metric-card">
                    <span>${text(metric.label)}</span>
                    <strong>${text(metric.value)}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="project-media">
          <img src="${project.image}" alt="${text(project.title)}" />
          <div class="project-media-caption">
            <span>${text(project.category)}</span>
            <span>${text(project.role)}</span>
          </div>
        </section>

        <section class="section project-context">
          <dl class="context-grid">
            <div>
              <dt>${currentLanguage === "en" ? "Track" : "分类"}</dt>
              <dd>${text(collectionMap[projectCategoryForSlug(project.slug)].pageTitle)}</dd>
            </div>
            <div>
              <dt>${currentLanguage === "en" ? "Role" : "角色"}</dt>
              <dd>${text(project.role)}</dd>
            </div>
            <div>
              <dt>${currentLanguage === "en" ? "Tools" : "工具"}</dt>
              <dd>${(project.tools || []).join(" / ")}</dd>
            </div>
          </dl>
        </section>

        <section class="section two-column">
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Overview" : "项目概览"}</h2>
            <p>${text(section.overview)}</p>
          </article>
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Challenge" : "核心挑战"}</h2>
            <p>${text(section.challenge)}</p>
          </article>
        </section>

        <section class="section">
          <div class="section-heading">
            <h2>${currentLanguage === "en" ? "Process" : "设计过程"}</h2>
          </div>
          <div class="card-grid three-up">
            ${(section.process || [])
              .map(
                (step) => `
                  <article class="card">
                    <div class="card-surface simple-card">
                      <h3>${text(step.title)}</h3>
                      <p>${text(step.text)}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>

        <section class="section two-column">
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Outcomes" : "结果亮点"}</h2>
            <div class="outcome-list">
              ${(section.outcomes || [])
                .map(
                  (outcome) => `
                    <div class="outcome-item">
                      <h3>${text(outcome.title)}</h3>
                      <p>${text(outcome.text)}</p>
                    </div>
                  `
                )
                .join("")}
            </div>
          </article>
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Tools" : "工具"}</h2>
            <div class="tag-row">
              ${(project.tools || []).map((tool) => `<span class="tag">${tool}</span>`).join("")}
            </div>
            <h2 class="subsection-title">${currentLanguage === "en" ? "Reflection" : "复盘"}</h2>
            <p>${text(section.reflection)}</p>
          </article>
        </section>

        <nav class="project-nav" aria-label="${currentLanguage === "en" ? "Project navigation" : "项目导航"}">
          <a href="project.html?slug=${previous.slug}">
            <span>${currentLanguage === "en" ? "Previous" : "上一个"}</span>
            <strong>${text(previous.title)}</strong>
          </a>
          <a href="project.html?slug=${next.slug}">
            <span>${currentLanguage === "en" ? "Next" : "下一个"}</span>
            <strong>${text(next.title)}</strong>
          </a>
        </nav>
      </main>
    `;
  }

  function renderArchive() {
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${currentLanguage === "en" ? "Archive" : "档案"}</p>
          <h1>${text(content.about.archiveTitle)}</h1>
          <p>${text(content.about.archiveIntro)}</p>
        </section>
        <section class="section compact">
          <div class="card-grid archive-grid">
            ${renderArchiveCards(content.about.archiveItems)}
          </div>
        </section>
      </main>
    `;
  }

  function renderContact() {
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${currentLanguage === "en" ? "Contact" : "联系"}</p>
          <h1>${text(content.about.contactTitle)}</h1>
          <p>${text(content.about.contactIntro)}</p>
        </section>
        <section class="section two-column">
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Reach Out" : "联系方式"}</h2>
            <div class="contact-list">
              ${content.about.contactMethods
                .map((method) => {
                  const value = method.href
                    ? `<a href="${method.href}" ${method.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${method.value}</a>`
                    : `<span>${method.value}</span>`;
                  return `<div class="contact-item"><span>${method.label}</span>${value}</div>`;
                })
                .join("")}
            </div>
          </article>
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Availability" : "状态"}</h2>
            <p>${text(content.footer.statement)}</p>
            <p>${text(content.about.closing)}</p>
          </article>
        </section>
      </main>
    `;
  }

  function renderAbout() {
    return `
      <main class="inner-page">
        <section class="page-intro">
          <p class="eyebrow">${currentLanguage === "en" ? "Profile" : "档案"}</p>
          <h1>${text(content.about.title)}</h1>
          <p>${text(content.about.intro)}</p>
        </section>
        <section class="section two-column">
          <article class="panel">
            <h2>${text(content.about.approachTitle)}</h2>
            <p>${text(content.about.approachText)}</p>
          </article>
          <article class="panel">
            <h2>${text(content.about.resumeTitle)}</h2>
            <p>${text(content.about.resumeText)}</p>
            ${
              content.profile.resume
                ? `<a class="button secondary" href="${content.profile.resume}" target="_blank" rel="noreferrer">
                    ${currentLanguage === "en" ? "Open Resume PDF" : "打开简历 PDF"}
                  </a>`
                : ""
            }
          </article>
        </section>
        <section class="section">
          <div class="section-heading">
            <h2>${currentLanguage === "en" ? "Skills" : "技能"}</h2>
          </div>
          <div class="skill-grid">
            ${content.about.skillGroups
              .map(
                (group) => `
                  <article class="panel">
                    <h3>${text(group.title)}</h3>
                    <ul class="skill-list">
                      ${group.items.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
        <section class="section">
          <div class="section-heading">
            <h2>${currentLanguage === "en" ? "Timeline" : "时间线"}</h2>
          </div>
          <div class="timeline">
            ${content.about.timeline
              .map(
                (item) => `
                  <article class="timeline-item">
                    <div class="timeline-period">${item.period}</div>
                    <div class="timeline-content">
                      <h3>${text(item.title)}</h3>
                      <p>${text(item.description)}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </section>
        <section class="section">
          <div class="section-heading">
            <h2>${text(content.about.archiveTitle)}</h2>
            <p>${text(content.about.archiveIntro)}</p>
          </div>
          <div class="card-grid archive-grid">
            ${renderArchiveCards(content.about.archiveItems)}
          </div>
        </section>
        <section class="section two-column">
          <article class="panel">
            <h2>${text(content.about.contactTitle)}</h2>
            <p>${text(content.about.contactIntro)}</p>
            <div class="contact-list">
              ${content.about.contactMethods
                .map((method) => {
                  const value = method.href
                    ? `<a href="${method.href}" ${method.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>${method.value}</a>`
                    : `<span>${method.value}</span>`;
                  return `<div class="contact-item"><span>${method.label}</span>${value}</div>`;
                })
                .join("")}
            </div>
          </article>
          <article class="panel">
            <h2>${currentLanguage === "en" ? "Note" : "备注"}</h2>
            <p>${text(content.about.closing)}</p>
          </article>
        </section>
      </main>
    `;
  }

  function bindInteractions() {
    const toggle = document.querySelector("[data-lang-toggle]");
    if (toggle) {
      toggle.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "zh" : "en";
        localStorage.setItem(languageStorageKey, currentLanguage);
        document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
        renderPage();
      });
    }

    const menuToggle = document.querySelector("[data-menu-toggle]");
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        menuOpen = !menuOpen;
        renderPage();
      });
    }

    const closeButton = document.querySelector("[data-menu-close]");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        menuOpen = false;
        renderPage();
      });
    }

    document.querySelectorAll("[data-menu-link]").forEach((link) => {
      link.addEventListener("click", () => {
        menuOpen = false;
      });
    });
  }

  function renderPage() {
    app.innerHTML = `
      <div class="site-shell">
        ${renderHeader()}
        <main aria-label="${currentLanguage === "en" ? "Empty page" : "空白页面"}"></main>
        ${renderFooter()}
      </div>
    `;

    document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
    bindInteractions();
  }

  renderPage();
})();
