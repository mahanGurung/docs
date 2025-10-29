export interface Translations {
  navigation: {
    signIn: string;
    menus: {
      tools: string;
      apis: string;
      libraries: string;
      resources: string;
    };
    search: string;
    searchAriaLabel: string;
    llmShare: {
      copyMarkdown: string;
      viewAsMarkdown: string;
      openIn: string;
      askQuestions: string;
    };
    toc: {
      contents: string;
    };
    feedback: {
      question: string;
      good: string;
      bad: string;
      thankYou: string;
      viewHere: string;
      placeholder: string;
      submit: string;
      submitting: string;
    };
  };
  breadcrumb: {
    // Main sections
    tools: string;
    apis: string;
    reference: string;
    resources: string;

    // Common terms
    api: string;
    cli: string;
    rpc: string;
    http: string;
    sdk: string;
    sip: string;
    bns: string;
    stx: string;
    nft: string;
    btc: string;
    auth: string;

    // Tools
    chainhook: string;

    // Specific pages/sections
    guides: string;
    snippets: string;
    archive: string;
  };
  tools: {
    chainhook: {
      title: string;
      description: string;
    };
    contractMonitoring: {
      title: string;
      description: string;
    };
    bitcoinIndexer: {
      title: string;
      description: string;
    };
  };
  apis: {
    apiKeys: {
      title: string;
      description: string;
    };
    rateLimits: {
      title: string;
      description: string;
    };
    stacksApi: {
      title: string;
      description: string;
    };
    stacksNodeRpcApi: {
      title: string;
      description: string;
    };
    tokenMetadata: {
      title: string;
      description: string;
    };
    platform: {
      title: string;
      description: string;
    };
    ordinals: {
      title: string;
      description: string;
    };
    runes: {
      title: string;
      description: string;
    };
    signerMetrics: {
      title: string;
      description: string;
    };
  };
  libraries?: never;
  resources: {
    guides: {
      title: string;
      description: string;
    };
    snippets: {
      title: string;
      description: string;
    };
    archive: {
      title: string;
      description: string;
    };
  };
}
