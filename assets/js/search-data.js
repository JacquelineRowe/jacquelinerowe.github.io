// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv_current/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-commentary",
          title: "commentary",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/commentary/index.html";
          },
        },{id: "post-panel-discussion-defending-voice-and-expression-in-africa-and-the-middle-east",
      
        title: "Panel Discussion: Defending Voice and Expression in Africa and the Middle East",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2024/IGF-24/";
        
      },
    },{id: "post-poster-approaching-the-english-nlp-singularity-is-it-too-late-for-low-resource-languages",
      
        title: "Poster: Approaching the English NLP singularity: is it too late for low-resource languages?...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2024/poster/";
        
      },
    },{id: "post-what-would-a-human-rights-based-approach-to-ai-governance-look-like",
      
        title: "What would a human rights-based approach to AI governance look like?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2023/humanrights_AIgov/";
        
      },
    },{id: "post-weaponizing-internet-shutdowns-to-evade-accountability-for-rights-violations",
      
        title: "Weaponizing internet shutdowns to evade accountability for rights violations",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2023/OGR_shutdowns/";
        
      },
    },{id: "post-panel-discussion-internet-shutdowns-39-covering-up-39-human-rights-violations-trends-in-africa-and-the-middle-east",
      
        title: "Panel Discussion: Internet shutdowns &#39;covering up&#39; human rights violations: Trends in Africa and...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2023/rightscon/";
        
      },
    },{id: "post-panel-discussion-mind-the-language-gap-nlp-researchers-amp-advocates-weigh-in-on-automated-content-analysis-in-non-english-languages",
      
        title: "Panel Discussion: Mind the Language Gap: NLP Researchers &amp; Advocates Weigh in on...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2023/CDT-event/";
        
      },
    },{id: "post-panel-discussion-do-diverging-platform-regulations-risk-an-open-internet",
      
        title: "Panel Discussion: Do Diverging Platform Regulations Risk an Open Internet?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2022/IGF-22/";
        
      },
    },{id: "post-the-eu-digital-markets-act-is-interoperability-the-way-forward",
      
        title: "The EU Digital Markets Act: is interoperability the way forward?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2022/DMA-interoperability/";
        
      },
    },{id: "post-how-will-the-digital-markets-act-affect-human-rights-four-likely-impacts",
      
        title: "How will the Digital Markets Act affect human rights? Four likely impacts",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2022/DMA-HR/";
        
      },
    },{id: "post-a-language-of-no-importance-the-consequences-of-neglecting-marginalized-languages-in-the-digital-world",
      
        title: "A language of no importance: the consequences of neglecting marginalized languages in the...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2022/OGR-marg-lang/";
        
      },
    },{id: "post-marginalised-languages-and-the-content-moderation-challenge",
      
        title: "Marginalised languages and the content moderation challenge",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2022/marglangsGPD/";
        
      },
    },{id: "post-why-the-next-generation-is-key-to-protecting-human-rights",
      
        title: "Why the next generation is key to protecting human rights",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2021/nextgen/";
        
      },
    },{id: "post-filtering-out-malicious-lies-how-digital-platforms-can-tackle-disinformation",
      
        title: "Filtering out malicious lies: how digital platforms can tackle disinformation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2020/TWT/";
        
      },
    },{id: "post-language-practices-and-policies-in-a-post-colonial-setting-the-case-of-guinea-bissau",
      
        title: "Language Practices and Policies in a Post-Colonial Setting: The Case of Guinea-Bissau",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/commentary/2020/GB-languages/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/jacquelinerowe.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%63%71%75%65%6C%69%6E%65.%72%6F%77%65@%65%64%69%6E%62%75%72%67%68.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JacquelineRowe", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jacqueline-rowe-a96297180/", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-2906-5126", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
