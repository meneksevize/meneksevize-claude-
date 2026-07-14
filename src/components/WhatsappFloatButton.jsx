import { useSiteData } from '../context/SiteDataContext.jsx';
import { WhatsappIcon } from './icons.jsx';

export default function WhatsappFloatButton() {
  const { settings } = useSiteData();

  if (settings.whatsapp_button_enabled === 'false' || !settings.whatsapp) {
    return null;
  }

  const href = `https://wa.me/${settings.whatsapp.replace(/\D/g, '')}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Bize WhatsApp'tan yazın"
    >
      <span className="whatsapp-float-ping"></span>
      <WhatsappIcon width={26} height={26} />
    </a>
  );
}
