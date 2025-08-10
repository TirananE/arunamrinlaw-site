# Bilingual Setup Documentation

This Next.js project has been configured to support bilingual localization (English and Thai) using react-i18next.

## Features

- ✅ **Language Switching**: Click the language button in the navigation to switch between English and Thai
- ✅ **Persistent Language Selection**: Selected language is saved in localStorage
- ✅ **Real-time Translation**: Language changes happen instantly without page reload
- ✅ **Responsive Design**: Language switcher works on both desktop and mobile
- ✅ **Tailwind CSS Integration**: Styled components using Tailwind CSS

## File Structure

```
src/
├── lib/
│   └── i18n.ts                 # i18next configuration
├── components/
│   ├── LanguageProvider.tsx    # React context for language management
│   ├── LanguageSwitcher.tsx    # Language toggle button component
│   └── TranslationDemo.tsx     # Demo component showing translations
└── app/
    ├── layout.tsx              # Root layout with LanguageProvider
    └── page.tsx                # Homepage with TranslationDemo

public/locales/                 # Translation files (optional JSON storage)
├── en/common.json
└── th/common.json
```

## How to Use

### 1. Using Translations in Components

```tsx
'use client';

import { useLanguage } from '@/components/LanguageProvider';

export default function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('banner_description')}</p>
    </div>
  );
}
```

### 2. Adding New Translations

Edit the translations object in `src/lib/i18n.ts`:

```typescript
const resources = {
  en: {
    common: {
      "new_key": "English text",
      // ... other translations
    },
  },
  th: {
    common: {
      "new_key": "ข้อความภาษาไทย",
      // ... other translations
    },
  },
};
```

### 3. Language Switching

The language switcher is automatically included in the navigation. Users can:
- Click the language button to toggle between English (EN) and Thai (ไทย)
- Language preference is automatically saved and restored on next visit
- All text updates immediately without page refresh

## Available Translation Keys

Current translations include:

**Navigation & UI:**
- `language`, `change_language`
- `home`, `about`, `services`, `contact`

**Content:**
- `welcome`, `law_firm`, `professional_services`
- `banner_title`, `banner_description`, `banner_tagline`
- `our_expertise`, `years_experience`, `satisfied_clients`, `successful_cases`
- `learn_more`, `get_in_touch`

## Technical Implementation

- **Framework**: Next.js 15 with App Router
- **i18n Library**: react-i18next
- **State Management**: React Context API
- **Persistence**: localStorage
- **Styling**: Tailwind CSS + existing CSS modules

## Browser Support

Works in all modern browsers that support:
- ES6+ features
- localStorage API
- React 19+

## Development

To add more languages:

1. Add the new language to the `resources` object in `src/lib/i18n.ts`
2. Update the language switcher logic in `src/components/LanguageSwitcher.tsx`
3. Add translations for all existing keys

The setup is designed to be easily extensible for additional languages beyond English and Thai.
