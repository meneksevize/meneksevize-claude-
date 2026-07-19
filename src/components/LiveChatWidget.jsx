import { useEffect } from 'react';
import { useSiteData } from '../context/SiteDataContext.jsx';

export default function LiveChatWidget() {
  const { settings } = useSiteData();
  const enabled = settings.livechat_enabled === 'true';
  const embedSrc = settings.livechat_embed_src?.trim();

  useEffect(() => {
    if (!enabled || !embedSrc) return undefined;

    const script = document.createElement('script');
    script.id = 'livechat-widget-script';
    script.async = true;
    script.src = `https://embed.tawk.to/${embedSrc}`;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.getElementById('livechat-widget-script')?.remove();
      document.querySelectorAll('iframe[src*="tawk.to"]').forEach((el) => el.closest('div')?.remove());
    };
  }, [enabled, embedSrc]);

  return null;
}
