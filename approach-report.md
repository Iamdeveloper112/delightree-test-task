# Delightree Audit App – Approach Report

---

**Project Overview**  
A React Native app for conducting audits with role-based access, multi-step forms, persistent storage, and a clean, scalable architecture.

---

## Key Requirements & Solutions

- **Role-Based Access**
  - Implemented using React Context (`RoleProvider`).
  - Roles: Admin, Auditor, Viewer.
  - Only Auditors can submit audits; only Admins can delete audits.

- **Multi-Step Audit Form**
  - Each step (rating, checklist, comments/image) is a separate UI section.
  - Navigation between steps with validation.
  - Image capture via `react-native-image-picker`.

- **Audit History & Summary**
  - All audits are listed with detail and delete (Admin only).
  - Summary screen shows all audit details and attached images.

- **Policy Viewer**
  - In-app webview for policy documents.

- **Persistent Storage**
  - All audit data is saved/loaded using `@react-native-async-storage/async-storage`.
  - Context API manages state and syncs with storage.

- **Responsive & Consistent UI**
  - All dimensions use a centralized `moderateScale` utility (`utils/deviceConfig.ts`).
  - All colors and fonts are managed via centralized files (`styles/colors.ts`, `styles/fonts.ts`).
  - No hardcoded values in styles; all are constants or from config.

---

## Folder Structure & Patterns

```
src/
  components/      # Reusable UI components (Button, Card, Loader, TextInput, etc.)
  constants/       # Centralized strings and static constants
  context/         # Role and Audit providers (global state)
  navigation/      # Navigation stack and configuration
  screens/         # All app screens, each in its own folder with styles
  styles/          # Centralized colors, fonts, metrics
  utils/           # Helpers, deviceConfig (moderateScale), sample data
```

- Each screen/component in its own folder with `index.tsx` and `style.ts`.
- All hardcoded values (colors, sizes, strings) are centralized.
- Grouped imports via `index.ts` for maintainability.

---

## Design Decisions

- **Strict TypeScript** for all code.
- **No inline/block comments** for maximum clarity.
- **Centralized scaling and color management** for consistent, professional UI.
- **Context API** for global state, avoiding prop drilling.
- **Reusable, composable components** for all UI elements.

---

## Setup & Usage

- Node.js >= 18, Yarn or npm, React Native CLI.
- Clone repo, install dependencies, run Metro, then run on Android/iOS.
- See README for full setup instructions.

---

## Conclusion

This approach ensures a maintainable, scalable, and professional React Native codebase, with clear separation of concerns, centralized configuration, and robust state management. 