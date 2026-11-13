import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'strict',
  theme: 'base',
  themeVariables: {
    background: '#EEF1DB',
    fontFamily: 'monospace',
    primaryColor: '#CCD0B9',
    primaryBorderColor: '#485B63',
    primaryTextColor: '#485B63',
    lineColor: '#485B63',
    secondaryColor: '#C9C7AF',
    secondaryBorderColor: '#485B63',
    secondaryTextColor: '#485B63',
    tertiaryColor: '#EEF1DB',
    tertiaryBorderColor: '#485B63',
    tertiaryTextColor: '#485B63',
  },
});

let diagramCount = 0;

function MermaidDiagram({ code }) {
  const [svg, setSvg] = useState('');
  const [hasFailed, setHasFailed] = useState(false);
  const id = useRef(`mermaid-diagram-${++diagramCount}`);

  useEffect(() => {
    let cancelled = false;

    mermaid.render(id.current, code.trim())
      .then((rendered) => {
        if (!cancelled) setSvg(rendered.svg);
      })
      .catch(() => {
        if (!cancelled) setHasFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  if (hasFailed) {
    return <pre><code>{code}</code></pre>;
  }

  return svg
    ? <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: svg }} />
    : <pre><code>{code}</code></pre>;
}

export default MermaidDiagram;
