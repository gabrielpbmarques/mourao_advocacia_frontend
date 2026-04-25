/* SVG icons for service cards, matching the DESIGN.md specification */

interface IconProps {
  className?: string;
  size?: number;
}

/* Adjudicação Compulsória — Casa/Documento */
export function IconHouseDocument({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10.5Z" />
      <path d="M9 21V14H15V21" />
      <path d="M14 7H17V10" />
    </svg>
  );
}

/* Recuperação de Contas — Smartphone/Escudo */
export function IconShieldPhone({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3L20 7V12C20 16.4183 16.4183 20 12 21C7.58172 20 4 16.4183 4 12V7L12 3Z" />
      <rect x="9" y="8" width="6" height="9" rx="1" />
      <line x1="10.5" y1="14" x2="13.5" y2="14" />
    </svg>
  );
}

/* Juros Abusivos — Cifrão/Porcentagem cortada */
export function IconPercentSlash({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8.5" cy="8.5" r="2.5" />
      <circle cx="15.5" cy="15.5" r="2.5" />
      <line x1="19" y1="5" x2="5" y2="19" />
      <path d="M12 2V4" />
      <path d="M12 20V22" />
      <path d="M12 2C13.6569 2 15 3.34315 15 5" />
      <path d="M9 19C9 20.6569 10.3431 22 12 22" />
    </svg>
  );
}

/* Divórcio Extrajudicial — Balança/Aliança */
export function IconScaleRing({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="3" x2="12" y2="17" />
      <line x1="5" y1="7" x2="19" y2="7" />
      <path d="M5 7L3 13H7L5 7Z" />
      <path d="M19 7L17 13H21L19 7Z" />
      <path d="M8 21H16" />
      <circle cx="12" cy="5" r="2" />
    </svg>
  );
}
