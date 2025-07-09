# Delightree Audit App

A professional React Native app for conducting audits with role-based access, multi-step forms, persistent storage, and a clean, scalable architecture.

---

## Features

- **Role-Based Access:**  
  - Admin, Auditor, and Viewer roles.
  - Only Auditors can submit audits; only Admins can delete audits.

- **Multi-Step Audit Form:**  
  - Ratings, checkboxes, comments, and image capture (camera/gallery).
  - Step-by-step navigation with validation.

- **Audit History & Summary:**  
  - List of all audits with detail view and delete (Admin only).
  - Audit summary with all details and attached images.

- **Policy Viewer:**  
  - In-app webview for policy documents.

- **Persistent Storage:**  
  - All audit data is saved and loaded using `@react-native-async-storage/async-storage`.

- **Responsive & Consistent UI:**  
  - All dimensions use a centralized `moderateScale` utility for device adaptation.
  - All colors and fonts are managed via centralized files for consistency.

---

## Project Structure

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

- **Each screen and component** is organized in its own folder with `index.tsx` and `style.ts`.
- **All hardcoded values** (colors, sizes, strings) are centralized for maintainability.

---

## Setup

### Prerequisites

- Node.js >= 18
- Yarn or npm
- React Native CLI environment ([setup guide](https://reactnative.dev/docs/environment-setup))

### Repo
git clone https://github.com/Iamdeveloper112/delightree-test-task.git
cd delightree-test-task

### Install dependencies

```bash
yarn install
# or
npm install
```

### Run Metro Bundler

```bash
yarn start
# or
npm start
```

### Run on Android

```bash
yarn android
# or
npm run android
```

### Run on iOS

```bash
cd ios && pod install && cd ..
yarn ios
# or
npm run ios
```

---

## Key Libraries & Tools

- **Navigation:** `@react-navigation/native`, `@react-navigation/native-stack`
- **Async Storage:** `@react-native-async-storage/async-storage`
- **Image Picker:** `react-native-image-picker`
- **WebView:** `react-native-webview`
- **TypeScript:** Strict typing throughout the codebase

---

## Architectural Decisions

- **Context API** for global state (role, audits).
- **All styles** use `moderateScale` from `utils/deviceConfig` for responsive design.
- **All colors** are sourced from `styles/colors.ts`—no hardcoded color values.
- **All strings and options** are centralized in `constants/strings.ts` and `utils/sampleData.ts`.
- **No inline or block comments** in code for maximum clarity and professionalism.
- **Grouped imports** via `index.ts` files for easy refactoring and scalability.

---

## Contributing

- Follow the existing folder and file structure for new screens/components.
- Use only centralized colors, fonts, and scaling utilities.
- Add new constants to the appropriate file.
- Keep code clean, professional, and strictly typed.

---

## License

MIT
