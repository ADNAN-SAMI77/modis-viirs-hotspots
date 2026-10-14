# Harmonization of MODIS and VIIRS Hot Spots
**The Shadow Brokers — NASA Space Apps Challenge 2026**

## التشغيل
```bash
npm install
npm run dev      # يفتح على http://localhost:5173
npm run build    # نسخة النشر داخل مجلد dist
```
يحتاج Node.js 18 أو أحدث.

## أين أعدّل؟
| الشيء | الملف |
|---|---|
| النصوص الإنجليزية | `src/content/en.js` |
| النصوص العربية | `src/content/ar.js` |
| رابط الفيديو، أسماء الفريق، المراجع | `src/content/shared.js` |
| الألوان والخطوط والتنسيق | `src/styles.css` (المتغيرات في أعلى الملف) |
| خريطة العالم في الخلفية (نقاط توضيحية) | `src/components/WorldFireMap.jsx` — مناطق الحرائق في `FIRE_REGIONS` |

- **رابط الفيديو:** ضعه في `videoUrl` داخل `shared.js`، فيتحول الزر تلقائياً إلى "Watch the video".
- **الفوائد (Benefits):** استبدل الكتلة `{ type: 'placeholder', ... }` في قسم `future` بفقرة `{ type: 'p', html: '...' }` في الملفين.
- الخطوط مضمّنة داخل المشروع (fontsource)، فالموقع لا يعتمد على Google Fonts.

## النشر على Vercel
ارفع المجلد إلى GitHub ثم استورده في Vercel. الإعدادات تُكتشف تلقائياً (Framework: Vite، Build: `npm run build`، Output: `dist`).
