export type FeatureItem = {
  id: number
  title: string
  description: string
  span: 'normal' | 'wide' | 'tall'  // bento layout hint
  svgId: string  // maps to /public/svgs/{svgId}.svg
}

export const FEATURES: FeatureItem[] = [
  {
    id: 0,
    title: 'Neural Pipeline Orchestration',
    description: 'Build multi-step AI workflows with drag-and-drop nodes. Chain LLMs, APIs, and databases without writing glue code.',
    span: 'wide',
    svgId: 'pipeline',
  },
  {
    id: 1,
    title: 'Real-Time Data Sync',
    description: 'Bi-directional connectors keep your sources in perfect sync. Zero latency propagation across 200+ integrations.',
    span: 'normal',
    svgId: 'sync',
  },
  {
    id: 2,
    title: 'Adaptive Model Routing',
    description: 'Intelligently routes tasks to the optimal model based on cost, latency, and accuracy thresholds you define.',
    span: 'tall',
    svgId: 'routing',
  },
  {
    id: 3,
    title: 'Audit & Compliance Engine',
    description: 'Every decision logged, versioned, and traceable. SOC2, HIPAA, and GDPR-ready out of the box.',
    span: 'normal',
    svgId: 'audit',
  },
  {
    id: 4,
    title: 'Edge Inference Nodes',
    description: 'Deploy quantized models directly to edge devices. Sub-10ms inference with no cloud round-trip.',
    span: 'normal',
    svgId: 'edge',
  },
]
