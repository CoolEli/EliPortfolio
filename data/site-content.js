window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Eli",
    role: {
      en: "UX, Product, and Interaction Designer",
      zh: "UX、产品与交互设计师",
    },
    tagline: {
      en: "Designing interaction systems, product experiences, and research-driven interfaces.",
      zh: "专注于交互系统、产品体验与研究驱动的界面设计。",
    },
    intro: {
      en: "I focus on UX, product design, and interactive experiences, while also extending into experiments, graduate research, and selected visual work.",
      zh: "我主要聚焦 UX、产品设计与交互体验，同时延伸到实验项目、研究生阶段的研究成果以及精选视觉作品。",
    },
    location: "Shanghai / Remote",
    email: "hello@yourdomain.com",
    github: "https://github.com/CoolEli/EliPortfolio",
    resume: "",
  },
  navigation: [
    { href: "index.html", key: "home", label: { en: "Home", zh: "首页" } },
    { href: "projects.html", key: "projects", label: { en: "Projects", zh: "项目" } },
    { href: "experiments.html", key: "experiments", label: { en: "Experiments", zh: "实验" } },
    { href: "ux.html", key: "ux", label: { en: "UX", zh: "UX" } },
    {
      href: "product-design.html",
      key: "product-design",
      label: { en: "Product Design", zh: "产品设计" },
    },
    {
      href: "graduate-research.html",
      key: "graduate-research",
      label: { en: "Graduate Research", zh: "研究生研究" },
    },
    {
      href: "other-projects.html",
      key: "other-projects",
      label: { en: "Other Projects", zh: "其他项目" },
    },
    { href: "about.html", key: "about", label: { en: "About", zh: "关于" } },
    { href: "contact.html", key: "contact", label: { en: "Contact", zh: "联系" } },
  ],
  home: {
    heroEyebrow: {
      en: "Portfolio 2026",
      zh: "作品集 2026",
    },
    heroImage: "assets/images/hero-monochrome.jpg",
    ctaPrimary: {
      en: "View UX",
      zh: "查看 UX 作品",
    },
    ctaSecondary: {
      en: "About",
      zh: "关于",
    },
    sectionTitles: {
      featured: { en: "Main Tracks", zh: "主要方向" },
      capabilities: { en: "Practice", zh: "实践方向" },
      experiments: { en: "Experiments", zh: "实验探索" },
      about: { en: "About", zh: "关于我" },
    },
    sectionText: {
      featured: {
        en: "The portfolio is organized around UX, product design, graduate research, and a smaller set of visual side projects.",
        zh: "整个作品集围绕 UX、产品设计、研究生阶段研究，以及一部分次要视觉项目展开。",
      },
      experiments: {
        en: "Small explorations in gesture, sound, motion, and browser-native interaction.",
        zh: "一些关于手势、声音、运动和浏览器原生交互的探索。",
      },
      about: {
        en: "My practice moves between structured product thinking, interaction detail, and research-led design inquiry.",
        zh: "我的实践游走在结构化产品思维、交互细节与研究驱动的设计探究之间。",
      },
    },
    manifesto: {
      en: "I design interaction-led experiences with a focus on UX clarity, product systems, and research-driven thinking.",
      zh: "我以交互为核心设计体验，关注 UX 清晰度、产品系统，以及研究驱动的设计思考。",
    },
    tracks: [
      {
        key: "ux",
        title: { en: "UX", zh: "UX" },
        description: {
          en: "Interaction design, flows, interface systems, and experience structure.",
          zh: "交互设计、流程规划、界面系统与体验结构。",
        },
      },
      {
        key: "product-design",
        title: { en: "Product Design", zh: "产品设计" },
        description: {
          en: "End-to-end product thinking, service logic, and digital tools.",
          zh: "端到端产品思考、服务逻辑与数字工具设计。",
        },
      },
      {
        key: "graduate-research",
        title: { en: "Graduate Research", zh: "研究生研究" },
        description: {
          en: "Research outcomes, prototypes, and design investigations from graduate work.",
          zh: "研究生阶段的研究成果、原型与设计研究。",
        },
      },
      {
        key: "other-projects",
        title: { en: "Other Project", zh: "其他项目" },
        description: {
          en: "A secondary collection of graphic design, photography, and visual studies.",
          zh: "平面设计、摄影与视觉研究等次要作品集合。",
        },
      },
    ],
  },
  capabilities: [
    {
      title: { en: "UX Design", zh: "UX 设计" },
      description: {
        en: "Interaction flows, information hierarchy, and interface behavior.",
        zh: "交互流程、信息层级与界面行为设计。",
      },
    },
    {
      title: { en: "Product Design", zh: "产品设计" },
      description: {
        en: "User needs, product logic, and scalable system thinking.",
        zh: "用户需求、产品逻辑与可扩展系统思维。",
      },
    },
    {
      title: { en: "Graduate Research", zh: "研究生研究" },
      description: {
        en: "Research-led design methods, experiments, and academic outcomes.",
        zh: "研究驱动的设计方法、实验与学术成果。",
      },
    },
    {
      title: { en: "Other Projects", zh: "其他项目" },
      description: {
        en: "Graphic design, photography, and selective visual archive work.",
        zh: "平面设计、摄影与精选视觉档案作品。",
      },
    },
  ],
  ux: {
    pageTitle: { en: "UX", zh: "UX" },
    pageIntro: {
      en: "Interaction-focused projects with an emphasis on user flow, interface clarity, and experience rhythm.",
      zh: "以交互为核心的项目，重点关注用户流程、界面清晰度与体验节奏。",
    },
    items: [
      {
        slug: "ux-immersive-campaign",
        title: { en: "Immersive Campaign Experience", zh: "沉浸式活动体验" },
        category: { en: "UX / Interaction", zh: "UX / 交互" },
        year: "2026",
        role: {
          en: "Interaction Design, UX Design, Front-end Prototype",
          zh: "交互设计、UX 设计、前端原型",
        },
        summary: {
          en: "A browser-based experience balancing movement, atmosphere, and guided interaction.",
          zh: "一个平衡运动感、氛围与引导式交互的浏览器体验项目。",
        },
        image: "assets/images/project-web.jpg",
        tags: ["UX", "Interaction", "Prototype"],
        hero: {
          en: "A gesture-aware campaign experience designed to feel cinematic, tactile, and responsive across desktop screens.",
          zh: "一个具备手势感知的活动站体验，在桌面端营造电影感、触感与响应性。",
        },
        tools: ["Figma", "HTML", "CSS", "JavaScript", "Three.js"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "Experience Design", zh: "体验设计" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "UX + Prototype", zh: "UX + 原型" } },
          { label: { en: "Duration", zh: "周期" }, value: { en: "4 Weeks", zh: "4 周" } },
        ],
        sections: {
          overview: {
            en: "This project explores how an interaction-heavy campaign page can remain legible while still feeling immersive.",
            zh: "这个项目探索了一个高交互活动页如何在保持沉浸感的同时依旧清晰可读。",
          },
          challenge: {
            en: "The core challenge was shaping a strong emotional atmosphere without losing navigational clarity.",
            zh: "核心挑战是在营造强烈情绪氛围的同时，不丢失导航和信息结构的清晰度。",
          },
          process: [
            {
              title: { en: "Flow Mapping", zh: "流程梳理" },
              text: {
                en: "Defined the narrative sequence, key user moments, and transition behavior.",
                zh: "梳理叙事顺序、关键用户时刻与转场行为。",
              },
            },
            {
              title: { en: "Interaction Tests", zh: "交互测试" },
              text: {
                en: "Tested depth, pointer feedback, and section pacing in browser prototypes.",
                zh: "在浏览器原型中测试景深、指针反馈与分区节奏。",
              },
            },
            {
              title: { en: "Refinement", zh: "细化" },
              text: {
                en: "Reduced noise and strengthened wayfinding through hierarchy and timing.",
                zh: "通过层级和时序降低噪音，强化路径引导。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Guided Experience", zh: "引导式体验" },
              text: {
                en: "Interaction supported attention rather than distracting from the message.",
                zh: "交互帮助聚焦注意力，而不是分散信息本身。",
              },
            },
          ],
          reflection: {
            en: "UX becomes more memorable when motion and hierarchy work together instead of competing.",
            zh: "当动效与信息层级协同工作而不是彼此竞争时，UX 会更令人记住。",
          },
        },
      },
      {
        slug: "ux-task-flow-app",
        title: { en: "Task Flow Mobile App", zh: "任务流移动应用" },
        category: { en: "UX / Mobile", zh: "UX / 移动端" },
        year: "2025",
        role: {
          en: "UX/UI Design, Product Thinking, Prototype",
          zh: "UX/UI 设计、产品思考、原型设计",
        },
        summary: {
          en: "A mobile interface designed to make planning and collaboration feel lighter and clearer.",
          zh: "一个让规划与协作更轻盈清晰的移动端界面设计。",
        },
        image: "assets/images/project-app.jpg",
        tags: ["Mobile", "UX", "Flow"],
        hero: {
          en: "A planning tool focused on reducing friction in shared tasks, scheduling, and visibility.",
          zh: "一个降低共享任务、日程安排与团队可见性摩擦的规划工具。",
        },
        tools: ["Figma", "FigJam", "Prototyping"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "Mobile UX", zh: "移动端 UX" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "UX/UI", zh: "UX/UI" } },
          { label: { en: "Platform", zh: "平台" }, value: { en: "iOS / Android", zh: "iOS / Android" } },
        ],
        sections: {
          overview: {
            en: "This concept focuses on everyday planning with an interface that feels calm, legible, and easy to scan at a glance.",
            zh: "这个概念聚焦日常规划，希望界面在第一眼就显得平静、清晰、易扫描。",
          },
          challenge: {
            en: "The design needed to support shared workflows without turning the interface into a heavy dashboard.",
            zh: "设计需要支撑协作流程，同时避免把界面做成厚重的仪表盘。",
          },
          process: [
            {
              title: { en: "State Audit", zh: "状态梳理" },
              text: {
                en: "Mapped creation, assignment, scheduling, and progress states.",
                zh: "梳理创建、分配、排期与进度等关键状态。",
              },
            },
            {
              title: { en: "Navigation", zh: "导航" },
              text: {
                en: "Reduced taps between list, detail, and scheduling views.",
                zh: "减少列表、详情与排期视图之间的跳转成本。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Clear Task Logic", zh: "清晰任务逻辑" },
              text: {
                en: "Created a lighter task experience with stronger visual grouping and status cues.",
                zh: "通过更清晰的分组与状态提示，让任务体验更轻盈。",
              },
            },
          ],
          reflection: {
            en: "Good mobile UX reduces cognitive weight before it adds visual personality.",
            zh: "好的移动端 UX 会先减轻认知负担，再建立视觉个性。",
          },
        },
      },
    ],
  },
  productDesign: {
    pageTitle: { en: "Product Design", zh: "产品设计" },
    pageIntro: {
      en: "Projects centered on product structure, service logic, system thinking, and scalable interfaces.",
      zh: "围绕产品结构、服务逻辑、系统思维与可扩展界面的项目。",
    },
    items: [
      {
        slug: "product-dashboard-toolkit",
        title: { en: "Collaborative Design Toolkit", zh: "协同设计工具集" },
        category: { en: "Product Design", zh: "产品设计" },
        year: "2026",
        role: {
          en: "Product Design, System Thinking, UX Strategy",
          zh: "产品设计、系统思维、UX 策略",
        },
        summary: {
          en: "A product concept that organizes shared workflows, resources, and review loops into a calmer system.",
          zh: "一个将共享流程、资源与评审循环组织得更平静清晰的产品概念。",
        },
        image: "assets/images/project-app.jpg",
        tags: ["Product", "System", "Collaboration"],
        hero: {
          en: "A digital toolkit designed around team coordination, structure, and reusable product logic.",
          zh: "一个围绕团队协同、结构清晰与可复用产品逻辑构建的数字工具集。",
        },
        tools: ["Figma", "Service Mapping", "Prototype"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "B2B Product", zh: "B2B 产品" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "Product Design", zh: "产品设计" } },
          { label: { en: "Focus", zh: "重点" }, value: { en: "System Logic", zh: "系统逻辑" } },
        ],
        sections: {
          overview: {
            en: "This project focuses on product structure rather than a single screen, looking at how users, resources, and actions connect over time.",
            zh: "这个项目关注的不只是单个界面，而是用户、资源与行为如何在时间线上形成产品结构。",
          },
          challenge: {
            en: "The challenge was translating messy collaboration into a product that feels structured without becoming rigid.",
            zh: "挑战在于把复杂协作转化成一个有结构但不过于僵硬的产品。",
          },
          process: [
            {
              title: { en: "Service Logic", zh: "服务逻辑" },
              text: {
                en: "Mapped actors, dependencies, and handoff points across the workflow.",
                zh: "梳理流程中的角色、依赖关系与交接节点。",
              },
            },
            {
              title: { en: "System Components", zh: "系统组件" },
              text: {
                en: "Built reusable interface patterns that could scale across modules.",
                zh: "建立可在不同模块间复用的界面模式。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Scalable Structure", zh: "可扩展结构" },
              text: {
                en: "The result emphasizes product consistency and long-term maintainability.",
                zh: "结果强调产品一致性与长期可维护性。",
              },
            },
          ],
          reflection: {
            en: "Product design becomes stronger when system logic is visible in every interaction layer.",
            zh: "当系统逻辑能被清楚地体现到每一层交互里时，产品设计会更有力量。",
          },
        },
      },
    ],
  },
  graduateResearch: {
    pageTitle: { en: "Graduate Research", zh: "研究生研究" },
    pageIntro: {
      en: "Research outcomes, prototypes, and design investigations developed during graduate study.",
      zh: "研究生阶段完成的研究成果、原型与设计探究。",
    },
    items: [
      {
        slug: "research-vr-lighting",
        title: { en: "VR Collaborative Lighting Research", zh: "VR 协同照明研究" },
        category: { en: "Graduate Research", zh: "研究生研究" },
        year: "2026",
        role: {
          en: "Research, Design Framework, Prototype",
          zh: "研究、设计框架、原型",
        },
        summary: {
          en: "A research-driven project exploring collaborative lighting design through virtual environments and semantic mapping.",
          zh: "一个通过虚拟环境与语义映射探索协同照明设计的研究驱动项目。",
        },
        image: "assets/images/project-web.jpg",
        tags: ["Research", "VR", "System"],
        hero: {
          en: "Graduate work combining virtual environments, semantic parameters, and collaborative design methods.",
          zh: "结合虚拟环境、语义参数与协同设计方法的研究生阶段课题。",
        },
        tools: ["Research", "Prototype", "VR"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "Research Project", zh: "研究项目" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "Research + Design", zh: "研究 + 设计" } },
          { label: { en: "Outcome", zh: "产出" }, value: { en: "Framework / Prototype", zh: "框架 / 原型" } },
        ],
        sections: {
          overview: {
            en: "This research investigates how collaborative lighting design can be supported through immersive virtual workflows and semantic-physical parameter mapping.",
            zh: "这项研究探讨如何通过沉浸式虚拟流程与语义-物理参数映射，支持协同照明设计。",
          },
          challenge: {
            en: "The challenge was building a bridge between qualitative spatial language and structured design parameters.",
            zh: "挑战在于如何在定性的空间语义与结构化设计参数之间建立桥梁。",
          },
          process: [
            {
              title: { en: "Research Framing", zh: "研究框架" },
              text: {
                en: "Defined the research question, collaborators, and parameter translation model.",
                zh: "明确研究问题、协作角色与参数转换模型。",
              },
            },
            {
              title: { en: "Prototype Construction", zh: "原型构建" },
              text: {
                en: "Built a prototype workflow to test spatial input, mapping, and output logic.",
                zh: "搭建原型流程，测试空间输入、映射关系与输出逻辑。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Design Method", zh: "设计方法" },
              text: {
                en: "Produced a research method that connects design language with actionable spatial controls.",
                zh: "形成了一套把设计语言连接到可操作空间控制的研究方法。",
              },
            },
          ],
          reflection: {
            en: "Graduate research deepened my interest in design as a bridge between abstract language and applied systems.",
            zh: "研究生阶段的研究让我更关注设计如何成为抽象语言与应用系统之间的桥梁。",
          },
        },
      },
    ],
  },
  otherProjects: {
    pageTitle: { en: "Other Project", zh: "其他项目" },
    pageIntro: {
      en: "A secondary selection of graphic design, photography, editorial fragments, and visual studies.",
      zh: "平面设计、摄影、编辑片段与视觉研究等次要作品集合。",
    },
    items: [
      {
        slug: "other-brand-poster-series",
        title: { en: "Brand Poster Series", zh: "品牌海报系列" },
        category: { en: "Graphic Design", zh: "平面设计" },
        year: "2024",
        role: {
          en: "Art Direction, Graphic Design",
          zh: "艺术指导、平面设计",
        },
        summary: {
          en: "A typographic poster system balancing clarity, rhythm, and visual tension.",
          zh: "一组在清晰度、节奏和视觉张力之间寻找平衡的字体海报系统。",
        },
        image: "assets/images/project-graphic.jpg",
        tags: ["Graphic", "Typography", "Brand"],
        hero: {
          en: "A poster series exploring how typography, spacing, and contrast can build a visual identity.",
          zh: "一组通过字体、留白与对比构建设计语言的海报系统。",
        },
        tools: ["Illustrator", "InDesign", "Photoshop"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "Poster System", zh: "海报系统" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "Art Direction", zh: "艺术指导" } },
          { label: { en: "Format", zh: "形式" }, value: { en: "Print + Digital", zh: "印刷 + 数字" } },
        ],
        sections: {
          overview: {
            en: "This visual system examines how repeated typographic rules can create variation, tension, and recognition.",
            zh: "这个视觉系统研究如何通过重复的排版规则，在系列海报中生成变化、张力和辨识度。",
          },
          challenge: {
            en: "The challenge was creating a flexible but recognisable visual family.",
            zh: "挑战在于建立一个灵活但具有识别度的视觉家族。",
          },
          process: [
            {
              title: { en: "Rules", zh: "规则" },
              text: {
                en: "Defined a shared grid, typographic ratio, and contrast strategy.",
                zh: "定义统一网格、字体比例与对比策略。",
              },
            },
            {
              title: { en: "Variation", zh: "变化" },
              text: {
                en: "Used cropping, pacing, and accents to create range.",
                zh: "通过裁切、节奏与强调色创造变化。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Visual Family", zh: "视觉家族" },
              text: {
                en: "Each poster stands on its own while still belonging to the system.",
                zh: "每张海报都能独立成立，同时又属于同一系统。",
              },
            },
          ],
          reflection: {
            en: "Secondary visual work still matters because it shows taste, density, and long-term practice.",
            zh: "次要视觉作品同样重要，因为它们能体现审美判断、积累密度与长期实践。",
          },
        },
      },
      {
        slug: "other-photo-observations",
        title: { en: "Photo Observations", zh: "摄影观察" },
        category: { en: "Photography", zh: "摄影" },
        year: "2025",
        role: {
          en: "Photography, Editing",
          zh: "摄影、编辑",
        },
        summary: {
          en: "A collection of urban and spatial observations captured through a quieter visual lens.",
          zh: "一组以更安静的视觉视角捕捉城市与空间观察的摄影作品。",
        },
        image: "assets/images/archive-03.jpg",
        tags: ["Photo", "Observation"],
        hero: {
          en: "Selected frames and spatial studies documenting visual rhythm in daily environments.",
          zh: "通过摄影记录日常环境中视觉节奏与空间关系的研究。",
        },
        tools: ["Photography", "Editing"],
        metrics: [
          { label: { en: "Type", zh: "类型" }, value: { en: "Photography", zh: "摄影" } },
          { label: { en: "Focus", zh: "关注点" }, value: { en: "Space / Rhythm", zh: "空间 / 节奏" } },
          { label: { en: "Role", zh: "角色" }, value: { en: "Author", zh: "作者" } },
        ],
        sections: {
          overview: {
            en: "These images function as visual notes on composition, atmosphere, and everyday spatial relationships.",
            zh: "这些图像更像关于构图、氛围与日常空间关系的视觉笔记。",
          },
          challenge: {
            en: "The challenge was preserving quiet observation without flattening the images into generic documentation.",
            zh: "挑战在于保留安静观察的质感，而不把图像拍成泛化的记录。",
          },
          process: [
            {
              title: { en: "Selection", zh: "筛选" },
              text: {
                en: "Grouped images around geometry, pacing, and environmental contrast.",
                zh: "围绕几何、节奏与环境对比整理图像。",
              },
            },
          ],
          outcomes: [
            {
              title: { en: "Visual Archive", zh: "视觉档案" },
              text: {
                en: "Built a smaller but denser set of photographic observations.",
                zh: "形成一个规模更小但密度更高的摄影观察集合。",
              },
            },
          ],
          reflection: {
            en: "Photography sharpens how I see rhythm, contrast, and composition inside digital design as well.",
            zh: "摄影也反过来强化了我在数字设计里对节奏、对比与构图的判断。",
          },
        },
      },
    ],
  },
  experiments: {
    pageTitle: { en: "Experiments", zh: "实验探索" },
    pageIntro: {
      en: "A collection of smaller studies in gesture, sound, motion, camera input, and generative interaction.",
      zh: "这里收集了一些关于手势、声音、运动、摄像头输入与生成式交互的小型实验。",
    },
    items: [
      {
        title: { en: "Gesture Canvas", zh: "手势画布" },
        description: {
          en: "A hand-tracked visual system translating movement into compositional change.",
          zh: "一个通过手部追踪将动作转化为构图变化的视觉系统。",
        },
        input: { en: "Gesture", zh: "手势" },
        tech: ["MediaPipe", "Canvas", "JavaScript"],
      },
      {
        title: { en: "Sound Bloom", zh: "声音绽放" },
        description: {
          en: "A sound-reactive graphic study using live microphone input and motion scaling.",
          zh: "一个利用实时麦克风输入与动态缩放的声音响应图形实验。",
        },
        input: { en: "Sound", zh: "声音" },
        tech: ["Web Audio", "p5.js"],
      },
      {
        title: { en: "Spatial Scroll", zh: "空间滚动" },
        description: {
          en: "A browser-native motion study exploring layered depth and scroll feedback.",
          zh: "一个探索分层景深与滚动反馈的浏览器原生运动研究。",
        },
        input: { en: "Mouse / Scroll", zh: "鼠标 / 滚动" },
        tech: ["HTML", "CSS", "Three.js"],
      },
    ],
  },
  about: {
    title: { en: "About", zh: "关于" },
    intro: {
      en: "I am a designer working primarily in UX, product design, and interaction systems. My broader practice also includes graduate research, creative prototyping, and selected visual work.",
      zh: "我是一个主要从事 UX、产品设计与交互系统的设计师。更广义的实践还包括研究生阶段研究、创意原型以及一部分视觉作品。",
    },
    approachTitle: { en: "Approach", zh: "方法" },
    approachText: {
      en: "I approach design as both a system and an experience: clear in structure, careful in interaction, and grounded in research when complexity increases.",
      zh: "我把设计看作系统，也看作体验：在结构上清晰，在交互上细致，在复杂问题上以研究为支撑。",
    },
    skillGroups: [
      {
        title: { en: "Design", zh: "设计" },
        items: ["UX Design", "Interaction Design", "Product Design", "Research Frameworks"],
      },
      {
        title: { en: "Creative Coding", zh: "创意编码" },
        items: ["HTML / CSS / JavaScript", "Three.js", "p5.js", "MediaPipe", "Web Audio API"],
      },
      {
        title: { en: "Tools", zh: "工具" },
        items: ["Figma", "Adobe Creative Suite", "Blender", "Prototype Tools"],
      },
    ],
    resumeTitle: { en: "Profile Summary", zh: "个人摘要" },
    resumeText: {
      en: "Experience, education, skills, and selected achievements are summarized here while the downloadable resume is being finalized.",
      zh: "这里汇总经历、教育、技能与精选成果；可下载简历完成后可以再接入 PDF。",
    },
    timeline: [
      {
        period: "2024 - Present",
        title: {
          en: "Independent UX / Product Practice",
          zh: "独立 UX / 产品设计实践",
        },
        description: {
          en: "Selected interaction, product, and research-oriented design projects.",
          zh: "参与交互、产品与研究导向的设计项目。",
        },
      },
      {
        period: "2020 - 2024",
        title: {
          en: "Graduate Study / Studio Experience",
          zh: "研究生阶段 / 工作室经验",
        },
        description: {
          en: "Add your graduate research, studio roles, and internships here.",
          zh: "在这里补充你的研究生研究、工作室经历与实习信息。",
        },
      },
    ],
    archiveTitle: { en: "Archive", zh: "视觉档案" },
    archiveIntro: {
      en: "Selected graphic fragments, poster studies, and visual material that support the broader practice.",
      zh: "一些支撑整体实践的平面片段、海报研究与视觉材料。",
    },
    archiveItems: [
      {
        title: { en: "Poster Study 01", zh: "海报研究 01" },
        year: "2026",
        category: { en: "Typography", zh: "字体排版" },
        image: "assets/images/archive-01.jpg",
      },
      {
        title: { en: "UI Fragment Set", zh: "界面片段集" },
        year: "2025",
        category: { en: "UI Details", zh: "界面细节" },
        image: "assets/images/archive-02.jpg",
      },
      {
        title: { en: "Identity Drafts", zh: "识别草图" },
        year: "2024",
        category: { en: "Brand Explorations", zh: "品牌探索" },
        image: "assets/images/archive-03.jpg",
      },
      {
        title: { en: "Layout Variations", zh: "版式变体" },
        year: "2024",
        category: { en: "Editorial", zh: "编辑设计" },
        image: "assets/images/archive-04.jpg",
      },
    ],
    contactTitle: { en: "Contact", zh: "联系" },
    contactIntro: {
      en: "I am open to design roles, collaborations, and selected freelance opportunities.",
      zh: "我对设计岗位、合作项目与合适的自由委托机会保持开放。",
    },
    contactMethods: [
      { label: "Email", value: "hello@yourdomain.com", href: "mailto:hello@yourdomain.com" },
      { label: "GitHub", value: "CoolEli/EliPortfolio", href: "https://github.com/CoolEli/EliPortfolio" },
      { label: "Location", value: "Shanghai / Remote" },
      { label: "Resume", value: "Available on request", href: "" },
    ],
    closing: {
      en: "Feel free to reach out for projects, opportunities, or simply to say hello.",
      zh: "如果你想聊项目、合作机会，或者只是打个招呼，都欢迎联系我。",
    },
  },
  footer: {
    statement: {
      en: "Available for UX, product, research, and selected collaboration opportunities.",
      zh: "开放 UX、产品、研究及精选合作机会。",
    },
  },
};
